import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-48 flex-col content-center justify-center text-center">
      <h1 className="text-2xl font-semibold">404 Not found</h1>
      <p>Could not find request resource</p>
      <Link className="mt-4 text-sky-500 hover:underline" href="/">
        Return Home
      </Link>
    </div>
  );
}
