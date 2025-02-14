import { CloudDownloadIcon, Mail, Trash, UploadIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { useFormContext } from "react-hook-form";
import { Progress, Upload, UploadFile } from "antd";
import axios from "axios";
import { useState } from "react";
import LoaderComponent from "./shared/loader-component";
import { AlertDialog } from "./ui/alert-dialog";
import { ToastContainer } from "react-toastify";

const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_URL;
const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET;
console.log(UPLOAD_PRESET);

type selectProps = {
  handleNext: () => void;
  handleCancel: () => void;
};

const AttendeeDetails = ({ handleNext, handleCancel }: selectProps) => {
  const [uploading, setUploading] = useState(false);

  const { control, watch, setValue, getValues } = useFormContext();
  const { Dragger } = Upload;
  const attachments = watch("attachments", []);

  const {
    formState: { errors },
  } = useFormContext();

  console.log(errors);

  const handleOnchange = ({ fileList }: { fileList: UploadFile[] }) => {
    setValue("attachments", fileList, { shouldValidate: true });

    return false;
  };

  const handleRemove = (file: UploadFile) => {
    const currentFiles = getValues("attachments") || [];
    const filteredList = currentFiles.filter(
      (item: UploadFile) => item.uid !== file.uid
    );
    setValue("attachments", filteredList);
  };

  const handleUploadFileToCloudinary = async () => {
    setUploading(true);
    if (!attachments) {
      console.log("No file selected");
      return;
    }
    const attachmentFormData = new FormData();
    const file = attachments[0].originFileObj;
    attachmentFormData.append("file", file);
    attachmentFormData.append("upload_preset", UPLOAD_PRESET);

    try {
      const response = await axios.post(CLOUDINARY_URL, attachmentFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const uploadedImageUrl = response.data.secure_url;
      const updatedFile = {
        ...file,
        thumbUrl: uploadedImageUrl,
        url: uploadedImageUrl,
        status: "done",
      };

      setValue("attachments", [updatedFile]);
      setValue("imageURL", uploadedImageUrl);

      console.log(uploadedImageUrl);
    } catch (error) {
      console.error("Cloudinary Upload Error:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <AlertDialog open={uploading}>
        <LoaderComponent />
      </AlertDialog>
      <div className=" border rounded-[32px] bg-[#08252B] border-[#0E464F] p-6 gap-y-8">
        <div className="bg-[#052228] border-2 border-[#07373F] rounded-3xl flex flex-col p-6 ">
          <div className="grid gap-y-6">
            <p className="text-[#FAFAFA] font-roboto font-normal leading-6 pb-2">
              Upload Profile Photo
            </p>

            <FormField
              name="attachments"
              control={control}
              render={({ field }) => (
                <Dragger
                  beforeUpload={() => false}
                  action=""
                  listType="picture"
                  accept=".png,.jpg,.jpeg"
                  multiple={false}
                  className=" ticket-upload !font-roboto !relative !h-[260px]"
                  onChange={handleOnchange}
                  onRemove={handleRemove}
                  fileList={field.value || []}
                  itemRender={(_originNode, file) => (
                    <div className="flex flex-col gap-y-4">
                      <div className="bg-[#00000033] h-[200px] w-full flex items-center justify-center rounded-3xl absolute top-[20px] bottom-[20px]">
                        <div
                          key={file.uid}
                          className="  h-[240px] w-[220px] rounded-4xl border-4 border-[#24A0B5] bg-[#0E464F]  flex items-center justify-center flex-col "
                        >
                          <div
                            className="h-full w-full bg-cover  bg-no-repeat rounded-4xl border-4 border-[#24A0B5] "
                            style={{
                              backgroundImage: `url(${file.thumbUrl})`,
                            }}
                          ></div>
                        </div>

                        {file.status === "uploading" &&
                          file.percent !== undefined && (
                            <Progress
                              percent={file.percent}
                              className="custom-progress"
                              strokeWidth={10}
                            />
                          )}
                      </div>

                      {(!file.thumbUrl ||
                        !file.thumbUrl.includes("cloudinary")) && (
                        <div className="flex items-center justify-center gap-8 px-4 !mt-4 absolute bottom-[-10px] w-full">
                          <button
                            type="button"
                            className="flex items-center gap-1 cursor-pointer"
                            onClick={handleUploadFileToCloudinary}
                          >
                            <UploadIcon
                              color="white"
                              className="cursor-pointer"
                              size={15}
                            />
                            <p className="font-roboto text-white">
                              Upload to cloudinary
                            </p>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleRemove(file)}
                          >
                            <Trash
                              color="red"
                              className="cursor-pointer"
                              size={15}
                            />
                          </button>

                        </div>
                        

                        
                      )}
                    </div>
                  )}
                >
                  {attachments?.length === 0 && (
                    <div className="bg-[#00000033] h-[200px] w-full flex items-center justify-center  rounded-3xl ">
                      <div className=" h-[240px] w-[240px] rounded-4xl border-4 border-[#24A0B5] bg-[#0E464F] p-6 flex items-center justify-center flex-col">
                        <CloudDownloadIcon
                          color="white"
                          className="cursor-pointer"
                          size={25}
                        />
                        <p className="text-[#FAFAFA] font-roboto font-normal leading-6 pb-2 text-center">
                          Drag & drop or click to upload
                        </p>
                      </div>
                    </div>
                  )}
                 
                </Dragger>
              )}
            />
          </div>
        </div>
        {errors.imageURL && (
                    <p className="text-red-400 font-roboto pt-4 text-center">
                      {errors?.imageURL?.message?.toString()}
                    </p>
                  )}

        <div className="bg-[#07373F] h-1 w-full my-8"></div>

        <div className="grid gap-y-8">
          <div className="grid w-full items-center gap-y-2">
            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="name">Enter your name</Label>
                  <FormControl>
                    <Input
                      type="text"
                      id="email"
                      {...field}
                      className="!mt-2 font-roboto"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid w-full items-center gap-y-1.5 ">
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="email">Enter your email *</Label>
                  <FormControl>
                    <div className="flex items-center gap-x-1 border border-[#07373f] pl-3 rounded-xl !mt-2">
                      <Mail />
                      <Input
                        {...field}
                        placeholder="name@email.com"
                        className="font-roboto !border-0 !outline-0 focus-visible:ring-0 focus-visible:ring-[#08252B]  !shadow-none"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid w-full items-center gap-y-1.5">
            <FormField
              name="specialRequest"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="email">Special request?</Label>
                  <FormControl>
                    <Textarea
                      placeholder="Textarea"
                      {...field}
                      className="!mt-2 font-roboto"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:gap-6 items-center grid-cols-1 sm:grid-cols-2 pt-6">
          <Button
            className="bg-transparent border border-[#24A0B5] rounded-lg !py-6"
            onClick={handleCancel}
          >
            Back
          </Button>
          <Button
            className="bg-[#24A0B5] border border-[#24A0B5] rounded-lg !py-6"
            onClick={handleNext}
          >
            Get My Free Ticket
          </Button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AttendeeDetails;
