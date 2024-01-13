import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import HomeNavbar from "../components/HomeNavbar";

const DetailsPage = () => {
  return (
   <>
   <HomeNavbar/>
    <section className="flex gap-8 max-w-5xl mx-auto p-2 items-start">
      {/* main */}
      <main className="space-y-4">
        <div className="p-4 bg-gray-200 text-sm">
          GiveUmmah will not charge any fee on your donation to this fundraiser.
        </div>
        <div className="text-xl">
          Urgent: Join the Fight to Save Vishal's Life!
        </div>
        <img
          src="http://picsum.photos/1080/720.webp"
          className="aspect-video rounded-md"
          alt=""
        />
        <div className="flex gap-x-4">
          <div className="flex flex-1 gap-x-2 items-center font-[500] text-xl font- bg-green-400 text-white justify-center py-3 rounded-full">
            <FaWhatsapp size={24} /> Share
          </div>
          <div className="flex flex-1 gap-x-2 items-center text-xl font-[500] bg-gray-400 text-white justify-center py-3 rounded-full">
            <FaXTwitter size={20} /> Share
          </div>
          <div className="flex flex-1 gap-x-2 items-center text-xl font-[500] bg-blue-900 text-white justify-center py-3 rounded-full">
            <FaFacebookF size={20} /> Share
          </div>
        </div>
      </main>
      {/* card */}
      <aside className="min-w-[400px] rounded-lg overflow-hidden shadow-md sticky top-0">
        <div className="bg-purple-600/80 text-center text-xl text-white py-2">
          GIVE UMMAH
        </div>
        <div className="py-8 grid gap-y-2 place-items-center justify-center">
          <div className="text-2xl">$123,000</div>
          <div className="text-gray-500">raised of $20,000</div>
          <div className="bg-gray-400 h-1.5 rounded-full w-60 overflow-hidden">
            <div className="bg-purple-600/80 h-full w-[65%]"></div>
          </div>
        </div>
      </aside>
    </section>
   </>
  );
};

export default DetailsPage;
