import CreateTicket from "@/components/create-ticket";
import Navbar from "@/components/shared/navbar";

const Home = () => {
  return (
    <div className="flex  py-16 px-5 flex-col gap-12 items-center justify-center">
      <Navbar />

      
        <div className="flex items-center justify-center ">
        <CreateTicket />
        </div>



    </div>
  );
};

export default Home;
