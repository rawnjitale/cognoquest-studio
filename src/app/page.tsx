import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center ">
      <div className="md:max-w-[1200px] flex flex-col pt-4  w-full">
        <UserButton afterSignOutUrl="\" />
        <div className="pt-5">
          <h1 className="text-4xl text-center">Cognoquest Studio</h1>
        </div>
        <div className="flex flex-row justify-center ">
          <div className="w-full flex justify-center items-center">
            <Image
              src="/homepage-main.png"
              alt="Main page"
              width={900}
              height={500}
            />
          </div>
          <p className="text-center text-xl pt-5 absolute">
            Welcome to Cognoquest Studio <br />
            Cognoquest Studio is a platform for creating and sharing interactive
            learning experiences. <br />
            Click on Explore to get started
            <br />
          </p>
          <button className="absolute bottom-10 right-1/3 py-3 px-4 bg-blue-500 rounded-xl text-2xl hover:bg-blue-800 hover:scale-90">
            Explore
          </button>
        </div>
      </div>
    </main>
  );
}
