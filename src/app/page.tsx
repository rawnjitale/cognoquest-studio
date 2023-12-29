import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center ">
      <div className="flex w-full flex-col pt-4  md:max-w-[1200px]">
        <UserButton afterSignOutUrl="\" />
        <div className="pt-5">
          <h1 className="text-center text-4xl">Cognoquest Studio</h1>
        </div>
        <div className="flex flex-row justify-center ">
          <div className="flex w-full items-center justify-center">
            <Image
              src="/homepage-main.png"
              alt="Main page"
              width={900}
              height={500}
            />
          </div>
          <p className="absolute pt-5 text-center text-xl">
            Welcome to Cognoquest Studio <br />
            Cognoquest Studio is a platform for creating and sharing interactive
            learning experiences. <br />
            Click on Explore to get started
            <br />
          </p>
          <Link href="/room">
            <button className="absolute bottom-10 right-1/3 rounded-xl bg-blue-500 px-4 py-3 text-2xl hover:scale-90 hover:bg-blue-800">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
