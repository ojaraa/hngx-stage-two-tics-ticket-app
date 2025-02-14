// import { useState } from "react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { useFormContext } from "react-hook-form";

type selectProps = {
  handleNext: () => void;
  handleCancel: () => void;
};

const ticketOptions = [
  { id: "free", price: "FREE", access: "REGULAR ACCESS" },
  { id: "vip", price: "$150", access: "VIP ACCESS" },
  { id: "vvip", price: "$250", access: "VVIP ACCESS" },
];

const TicketSelection = ({ handleNext, handleCancel }: selectProps) => {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const selectedTicket = watch("ticketType");

  // const data = getValues();
  console.log(errors);

  return (
    <div className=" border rounded-[32px] bg-[#08252B] border-[#0E464F] p-6  ">
      <div
        className="bg-[] border-2 border-[#07373F] h-[200px] rounded-3xl flex items-center justify-center flex-col p-6 backdrop-blur-[7px]"
        style={{
          background: `radial-gradient(57.42% 106.59% at 14.02% 32.06%, rgba(36, 160, 181, 0.20) 0%, rgba(36, 160, 181, 0.00) 100%), rgba(10, 12, 17, 0.10)`,
        }}
      >
        <div className="grid gap-y-2">
          <p className="text-center text-5xl sm:text-[62px] font-normal leading-[62px] text-[#FAFAFA] !font-roadrage ">
            Techember Fest ”25
          </p>
          <p className=" text-sm sm:text-base leading-6 font-normal font-roboto text-[#FAFAFA] text-center w-auto sm:w-[340px]">
            Join us for an unforgettable experience at HNG Meetup! Secure your
            spot now.
          </p>
          <p className="text-sm sm:text-base leading-6 font-normal font-roboto text-[#FAFAFA] text-center">
            📍 Ikoyi, Lagos || March 15, 2025 | 7:00 PM
          </p>
        </div>
      </div>

      <div className="bg-[#07373F] h-1 w-full my-8"></div>

     

      <div className="">
        <p className="text-[#FAFAFA] font-roboto font-normal leading-6 pb-2">
          Select Ticket Type
        </p>

        <div className="rounded-[24px] border border-[#07373F] bg-[#052228] p-4 grid sm:grid-cols-3 gap-4 grid-cols-1">
          {ticketOptions.map((ticket) => (
            <div
              key={ticket.id}
              className={`rounded-xl border-2 p-3 cursor-pointer transition-all ${
                selectedTicket?.id === ticket?.id
                  ? "border-[#197686] bg-[#12464E]"
                  : "border-[#197686] bg-[#041E23]"
              }`}
              onClick={() => setValue("ticketType", ticket)}
            >
              <p className="font-roboto font-semibold text-2xl leading-7 mb-3 text-[#FAFAFA]">
                {ticket.price}
              </p>
              <p className="font-roboto font-normal text-base leading-6 text-[#fafafa]">
                {ticket.access}
              </p>
              <p className="font-roboto font-normal text-sm leading-5 text-[#D9D9D9] mt-[2px]">
                20/52
              </p>
            </div>
          ))}
        </div>
        {errors.ticketType && (
          <p className="text-red-400 font-roboto pt-4 text-center font-[10px] py-4">
            {errors?.ticketType?.message?.toString()}
          </p>
        )}
       
      </div>

      

      <div className="my-8">
        <p className="text-[#FAFAFA] font-roboto font-normal leading-6 pb-2">
          {" "}
          Number of Tickets
        </p>

        <FormField
          name="ticketNumber"
          control={control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="1" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid  gap-4 sm:gap-6 items-center grid-cols-1 sm:grid-cols-2">
        <Button
          className="bg-transparent border border-[#24A0B5] rounded-lg !py-6 order-1 sm:order-0"
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          className="bg-[#24A0B5] border border-[#24A0B5] rounded-lg !py-6 order-0 sm:order-1"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default TicketSelection;
