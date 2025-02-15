import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

type selectProps = {
  handleNext: () => void;
 
};
const BookedTicket = ({ handleNext }: selectProps) => {
  const ticketData = localStorage.getItem("formData");
  const savedData = ticketData ? JSON.parse(ticketData) : null;
  const bars = [
    3, 1, 4, 2, 5, 1, 3, 2, 4, 2, 1, 3, 5, 2, 4, 3, 1, 2, 5, 4, 5, 1, 3, 2, 4,
    2, 1,
  ];
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center p-1 sm:p-12 ">
      <p className="font-alatsi text-white text-center text-[32px] font-normal pb-4">
        Your Ticket is Booked!
      </p>
      <p className="text-[#FAFAFA] font-roboto text-base font-bold leading-6 text-center">
        {" "}
        Check your email for a copy or you can download
      </p>

     
      <div className="relative my-16">
        <img
          src="/assets/bg.svg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-[35px] left-[20px] right-[20px]  rounded-2xl border flex flex-col items-center justify-center border-[#24a0b5]  p-4 h-[380px] sm:h-[430px] ">
          <div className="absolute top-[20px] ">
            <div className="grid gap-y-2">
              <p className="text-center text-[34px] font-normal leading-[30px] text-[#FAFAFA] !font-roadrage ">
                Techember Fest ”25
              </p>
              <p className=" text-[10px] leading-3 font-normal font-roboto text-[#FAFAFA] text-center ">
                📍 04 Rumens road, Ikoyi, Lagos
              </p>
              <p className="text-[10px] leading-3 font-normal font-roboto text-[#FAFAFA] text-center">
                📅 March 15, 2025 | 7:00 PM
              </p>
            </div>

            <div className=" flex items-center justify-center my-[20px] h-[130px] w-[130px] sm:h-[130px] sm:w-[130px] mx-auto">
              <img
                src={savedData?.imageURL}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rounded-lg overflow-hidden px-4 ">
              <table className="border-collapse border border-[#133d44] w-full rounded-lg bg-[#08343C] ">
                <tbody>
                  <tr className="mt-1">
                    <td className="border border-[#133d44] py-1 px-2">
                      <p className=" text-white opacity-[0.33] font-roboto text-[10px]  sm:text-[10px] leading-4  ">
                        Enter your name
                      </p>
                      <p className="text-white  font-roboto text-[10px] sm:text-[12px] leading-3 sm:leading-[18px] font-bold  ">
                        {savedData?.name}
                      </p>
                    </td>

                    <td className="border border-[#133d44] py-1 px-2  break-words  whitespace-normal">
                      <p className=" text-white opacity-[0.33] font-roboto text-[10px] leading-4  ">
                        Enter your email*
                      </p>
                      <p className="text-white  font-roboto text-[10px] sm:text-[12px] leading-3 sm:leading-[18px] font-bold text-wrap">
                        {savedData?.email}
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-[#133d44] py-1 px-2">
                      <p className=" text-white opacity-[0.33] font-roboto text-[10px] leading-4  ">
                        Ticket Type:
                      </p>
                      <p className="text-white  font-roboto text-[10px] sm:text-[12px] leading-3 sm:leading-[18px] ">
                        {savedData?.ticketType?.access}
                      </p>
                    </td>

                    <td className="border border-[#133d44] py-1 px-2">
                      <p className=" text-white opacity-[0.33] font-roboto text-[10px] leading-4  ">
                        Ticket for:{" "}
                      </p>
                      <p className="text-white  font-roboto text-[10px] sm:text-[12px] leading-3 sm:leading-[18px]  ">
                        {savedData?.ticketNumber}
                      </p>
                    </td>
                  </tr>

                  <tr className="">
                    <td className="w-full py-1 px-2 " colSpan={2}>
                      <p className=" text-white opacity-[0.33] font-roboto text-[10px] leading-4  ">
                        Special Request{" "}
                      </p>
                      <p className="text-white  font-roboto text-[10px] leading-[18px] ">
                        {savedData?.specialRequest || 'No comment'}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="absolute bottom-[-170px] sm:bottom-[-135px] ">
            <div className="barcode">
              {bars.map((width, index) => (
                <div key={index} style={{ width: `${width}px`  }} className="h-[50px] sm:h-[70px]"></div>
              ))}
            </div>
            <p className=" text-center text-[10px]">1 937 949 930</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:gap-6  items-center grid-cols-1 sm:grid-cols-2  ">
        <Button
          className="bg-transparent border border-[#24A0B5] rounded-lg !py-6 "
          onClick={() => navigate('/')}
        >
          Book Another Ticket
        </Button>
        <Button
          className="bg-[#24A0B5] border border-[#24A0B5] rounded-lg !py-6 w-[170px] "
          onClick={handleNext}
        >
          Download Ticket
        </Button>
      </div>
    </div>
  );
};

export default BookedTicket;
