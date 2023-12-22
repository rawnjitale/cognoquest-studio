// Note: UserButton Component
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-end p-24">
      <UserButton afterSignOutUrl="\" />
    </main>
  );
}
