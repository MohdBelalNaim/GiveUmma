import { FaFacebookF, FaFacebookSquare, FaWhatsapp } from "react-icons/fa";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import HomeNavbar from "../components/HomeNavbar";
import { Suspense } from "react";
import Loader from "../components/Loader";

const DetailsPage = () => {
  return (
    <>
      <HomeNavbar />
      <section className="flex gap-8 max-w-5xl mx-auto p-2 items-start">
        {/* main */}
        <main className="space-y-4">
          <div className="p-4 bg-gray-200 text-sm">
            GiveUmmah will not charge any fee on your donation to this
            fundraiser.
          </div>
          <div className="text-xl">
            Urgent: Join the Fight to Save Vishal's Life!
          </div>
          <Suspense fallback={<Loader />}>
            <img
              src="http://picsum.photos/1080/720.webp"
              className="aspect-video rounded-md"
              alt=""
            />
          </Suspense>
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

          <div className="flex gap-2">
            <div className="flex flex-1 border p-4 rounded-md gap-4">
              <Suspense fallback={<Loader />}>
                <img
                  className="w-16 h-16 rounded-full"
                  src="http://picsum.photos/50.webp"
                  alt=""
                />
              </Suspense>
              <div className="grid content-center text-gray-500 text-xs">
                Created by
                <span className="text-lg text-zinc-950">Vishal T R</span>
                from, Bengaluru
              </div>
            </div>
            <div className="flex flex-1 border p-4 rounded-md gap-4">
              <Suspense fallback={<Loader />}>
                <img
                  className="w-16 h-16 rounded-full"
                  src="http://picsum.photos/50.webp"
                  alt=""
                />
              </Suspense>
              <div className="grid content-center text-gray-500 text-xs">
                Created by
                <span className="text-lg text-zinc-950">Vishal T R</span>
                from, Bengaluru
              </div>
            </div>
          </div>

          {/* story */}
          <div className="border-b py-2 text-lg font-[500]">Story</div>
          <p className="text-gray-600 text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            sint? Beatae autem nemo suscipit ipsa consectetur deleniti, aliquid
            culpa eos dignissimos dolorem corrupti, eveniet itaque totam ducimus
            aperiam, sed non.
          </p>
          {/* end of story */}

          <div className="p-8 shadow-md rounded-md grid text-center text-sm">
            If something isn't right, we will work with you to ensure no misuse
            occurs.<div className="underline">Report this cause</div>
          </div>
        </main>

        {/* card */}
        <aside className="min-w-[400px] rounded-lg overflow-hidden shadow-md sticky top-0">
          <div className="bg-zinc-950 text-center text-xl text-white py-4">
            GIVE UMMAH
          </div>
          <div className="py-6 grid gap-y-2 place-items-center px-6">
            <div className="text-2xl">$123,000</div>
            <div className="text-gray-500">raised of $20,000</div>
            {/* progress */}
            <div className="bg-gray-400 h-1.5 rounded-full max-w-72 w-full overflow-hidden">
              <div className="bg-zinc-950 h-full w-[65%]"></div>
            </div>
            {/* end progress */}
            <div className="flex w-full justify-between items-center max-w-72">
              <div className="flex gap-x-1">
                485 <span className="text-gray-500">Givers</span>
              </div>
              <div className="flex gap-x-1">
                23 <span className="text-gray-500">Day left</span>
              </div>
            </div>

            {/* donate button */}
            <button className="bg-black max-w-72 w-full text-center py-3 rounded-full text-gray-100 mt-4">
              Donate Now
            </button>

            <div className="text-gray-500 grid place-items-center mt-4">
              <span className="text-xl">Zakat verified</span>
              This campaign is Zakat Verfied
            </div>

            {/* social share */}
            <div className="text-xl bg-zinc-950 text-neutral-50 flex justify-between items-center w-full px-4 py-3 mt-2 rounded-md">
              Share on
              <div className="flex gap-x-4">
                <FaFacebook />
                <FaXTwitter />
                <FaWhatsapp />
              </div>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
};

export default DetailsPage;
