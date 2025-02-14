// import { BiLoaderAlt } from "react-icons/bi";

import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Loader } from "lucide-react";

interface LoaderProps {
  message?: string;
  ariaTitle?: string;
  ariaDesc?: string;
}

const LoaderComponent = (props: LoaderProps) => {
  return (
    <AlertDialogContent className="h-[194px] !max-w-[349px] border-none items-center rounded-2xl bg-[#a7d4dc]">
      <div className="flex flex-col items-center gap-y-2">
        <Loader className="size-[36px] animate-spin text-[#08343C]" />
        <p className="text-base font-medium leading-[20.3px] text-black font-roboto ">
          Uploading to cloudinary....
          
        </p>
        <VisuallyHidden>
          <AlertDialogTitle>{props.ariaTitle}</AlertDialogTitle>
          <AlertDialogDescription>{props.ariaDesc}</AlertDialogDescription>
        </VisuallyHidden>
      </div>
    </AlertDialogContent>
  );
};

export default LoaderComponent;
