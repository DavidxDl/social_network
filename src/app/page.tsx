import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <header className="fixed top-0 w-full bg-black p-2">
        <span className="text-2xl font-extrabold text-white">
          Social Network
        </span>
      </header>
    </main>
  );
}
