import Link from "next/link";

export default function Menubar() {
  return (
    <div className="flex flex-row justify-center gap-x-2">
      <Link href="/" className="self-center">
        <span className="text-2xl font-bold">Home</span>
      </Link>
      <Link href="/portfolio" className="self-center">
        <span className="text-2xl font-bold">Portfolio</span>
      </Link>
      <Link href="/tutorial" className="self-center">
        <span className="text-2xl font-bold">Tutorial</span>
      </Link>
    </div>
  );
}
