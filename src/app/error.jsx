"use client"; // Error components must be Client components
import Image from "next/image";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html className="h-full">
    <main className="fixed top-0 left-0 w-screen h-screen bg-white z-50">
    <Image
      src={"/assets/error-background.jpg"}
      alt=""
      className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
      width={1000}
      height={1000}
    />
    <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
      <p className="text-base font-semibold leading-8 text-white">Error</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">beep bop boop</h1>
      <p className="mt-4 text-base text-white/70 sm:mt-6">Sorry, seems my website pooped itself!.</p>
      <div className="mt-10 flex justify-center">
        <a href="/" className="text-sm font-semibold leading-7 text-white">
          <span aria-hidden="true">&larr;</span> Back to home
        </a>
      </div>
    </div>
  </main>
  </html>
  );
}
