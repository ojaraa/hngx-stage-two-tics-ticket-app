type CreateTicketStepsComponentProps = {
  className?: string;
  step: number;
  title: string;
  isActive: boolean;
  isValid: boolean;
  currentStep: number;
};
const StepComponent = ({
  step,
  title,
  currentStep
}:
CreateTicketStepsComponentProps) => {
  return (
    <div className="grid gap-3">
      <div className="flex items-center justify-between">
        <p className="text-[32px] font-normal leading-0 ">{title}</p>
        <p className="text-base font-normal leading-6 text-[#FAFAFA]">
          Step {step} / 3
        </p>
      </div>

      <div className="absolute bottom-0 left-0 h-1 bg-blue-500 transition-all" style={{ width: `${((currentStep + 1) / step) * 100}%` }}></div>
    </div>
  );
};

export default StepComponent;
