import {  useState } from "react";
import { Tabs, TabsContent } from "./ui/tabs";
import TicketSelection from "./ticket-selection";
import AttendeeDetails from "./attendee-details";
import BookedTicket from "./booked-ticket";
import {
  attendeeDetailsSchema,
  ticketSelectionSchema,
} from "@/models/ticket.model";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UploadFile } from "antd";

const createTicketSteps = [
  {
    step: 1,
    title: "Ticket Selection",
    value: "ticket-selection",
  },
  {
    step: 2,
    title: "Attendee Details",
    value: "attendee-details",
  },
  {
    step: 3,
    title: "Ready",
    value: "ticket-ready",
  },
];

const CreateTicket = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [stepsValidity, setStepsValidity] = useState(
    createTicketSteps.map(() => false)
  );

  const ticketDefaultValues = {
    name: "",
    email: "",
    ticketNumber: "",
    specialRequest: "",
    imageURL: "fggrr",
    attachments: [] as UploadFile[],
    ticketType: {
      id: "",
      price: 0,
      access: "",
    },
  };
  const stepSchemas = [ticketSelectionSchema, attendeeDetailsSchema];

  const methods = useForm({
    resolver: zodResolver(stepSchemas[activeStep]),
    mode: "onChange",
    defaultValues: ticketDefaultValues,
  });

  // const {setValue} = methods
  const dataa = methods.getValues()
  console.log('data' , dataa)

  const createNewTicket = () => {
    const ticketData = methods.getValues();
    localStorage.removeItem("formData"); 
    localStorage.setItem("formData", JSON.stringify(ticketData));

    console.log("Submitted Data:", ticketData);
  };

  const handleNext = async () => {
    const isValid = await methods.trigger();
    if (isValid) {
      if (activeStep === 1) {
        createNewTicket();}
        // Move to the next step
    const newStepsValidity = [...stepsValidity];
    newStepsValidity[activeStep] = true;
    setStepsValidity(newStepsValidity);

    // Proceed to the next step
    setActiveStep((prev) => prev + 1);


      // } else {
      //   const newStepsValidity = [...stepsValidity];
      //   newStepsValidity[activeStep] = true;
      //   setStepsValidity(newStepsValidity);
      //   setActiveStep((prev) => prev + 1);
      // }
    }
  };

  const handleCancel = () => {
    const newStepsValidity = [...stepsValidity];
    newStepsValidity[activeStep - 1] = false;
    setStepsValidity(newStepsValidity);
    setActiveStep((prev) => prev - 1);
  };
  const currentStep = createTicketSteps[activeStep];

  // useEffect(() => {
  //   const savedData = localStorage.getItem("formData");
  //   if (savedData) {
  //     const parsedData = JSON.parse(savedData);
  //     Object.keys(parsedData).forEach((key) => {
  //       setValue(key, parsedData[key]); 
  //     });
  //   }
  // }, [setValue]);

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col w-[100vw] mx-2 sm:w-[700px] bg-[#041E23] border border-[#0E464F] rounded-[40px] p-6 sm:p-12">
        {/* {createTicketSteps.map((step) => ( */}
        <div className="grid gap-3 pb-6">
          <div className="flex items-center  gap-y-3 justify-between">
            <p className=" text-2xl sm:text-[32px] font-normal leading-0 ">
              {currentStep.title}
            </p>
            <p className="text-base font-normal leading-6 text-[#FAFAFA]">
              Step {currentStep.step} / 3
            </p>
          </div>
          <div
            className="h-1 bg-[#24A0B5] transition-all"
            style={{
              width: `${((activeStep + 1) / createTicketSteps.length) * 100}%`,
            }}
          ></div>
        </div>
        {/* ))} */}

        <form onSubmit={methods.handleSubmit(handleNext)}>
          <Tabs value={createTicketSteps[activeStep].value}>
            <TabsContent value="ticket-selection">
              <TicketSelection
                handleNext={handleNext}
                handleCancel={handleCancel}
              />
            </TabsContent>

            <TabsContent value="attendee-details">
              <AttendeeDetails
                handleNext={handleNext}
                handleCancel={handleCancel}
              />
            </TabsContent>

            <TabsContent value="ticket-ready">
              <BookedTicket
                handleNext={handleNext}
                handleCancel={handleCancel}
              />
            </TabsContent>
          </Tabs>
        </form>
      </div>
    </FormProvider>
  );
};

export default CreateTicket;
