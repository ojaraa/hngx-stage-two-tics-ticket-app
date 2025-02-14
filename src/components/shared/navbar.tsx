import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="flex sm:w-[80vw] justify-between w-[100vw] items-center border border-[#197686] rounded-[24px] py-8 px-4 bg-[rgba(5,37,44,0.40)] backdrop-blur-[2px]  ">
      <div className="flex items-center gap-2 ">
        <div className="border border-[ #0E464F] bg-[#052F35] flex items-center justify-center py-1.5 px-2 rounded-[10px]">
          <img src="/assets/logo-icon.svg" alt="logo" />
        </div>
        <img src="/assets/ticz.svg" alt="logo-name" />
      </div>

      <ul className="sm:flex items-center justify-between gap-y-4 hidden ">
        <li className="text-[#FFF]  text-lg font-normal leading-none cursor-pointer">
          Events
        </li>
        <li className="text-[#B3B3B3] text-lg font-normal leading-none">
          My Tickets
        </li>
        <li className="text-[#B3B3B3] text-lg font-normal leading-none sm:hidden">
          About Project
        </li>
      </ul>
      <div className="">
        <Button className="!py-4 !px-6 text-black bg-white rounded-xl ">
          MY TICKETS
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
