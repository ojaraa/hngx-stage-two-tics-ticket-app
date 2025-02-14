import CreateTicket from "@/components/create-ticket";
import Navbar from "@/components/shared/navbar";

const Home = () => {
  return (
    <div className="flex py-16 px-8 sm:px-5 flex-col gap-12 items-center justify-center bg-[#02191d]">
      <Navbar />
      <div className="flex items-center justify-center ">
        <CreateTicket />
      </div>
    </div>
  );
};

export default Home;
