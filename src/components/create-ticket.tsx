import { useState } from "react";
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
    imageURL: "",
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




  const createNewTicket = () => {
    const ticketData = methods.getValues();
    localStorage.removeItem("formData");
    localStorage.setItem("formData", JSON.stringify(ticketData));

 
  };


  
  const handleNext = async () => {
    const isValid = await methods.trigger();
    if (isValid) {
      if (activeStep === 1) {
        createNewTicket();
      }

      const newStepsValidity = [...stepsValidity];
      newStepsValidity[activeStep] = true;
      setStepsValidity(newStepsValidity);

      setActiveStep((prev) => prev + 1);
    }
  
  };

  const handleCancel = () => {
    const newStepsValidity = [...stepsValidity];
    newStepsValidity[activeStep - 1] = false;
    setStepsValidity(newStepsValidity);
    setActiveStep((prev) => prev - 1);
  };
  const currentStep = createTicketSteps[activeStep];




  return (
    <FormProvider {...methods}>
      <div className="flex flex-col w-[95vw] mx-2 sm:w-[45vw] bg-[#041E23] border border-[#0E464F] rounded-[40px] p-6 sm:p-12 md:max-lg:w-[75vw]">
     
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
             
              />
            </TabsContent>
          </Tabs>
        </form>
      </div>
    </FormProvider>
  );
};

export default CreateTicket;
