import React from 'react';

export default function NotFoundPage() {
  return (
    <main className=" w-full flex flex-col justify-center  ">
      <div className=" 2xl:w-[50%] mx-auto w-full h-screen flex flex-col justify-center items-center ">
        <h1 className="text-4xl font-bold text-center mt-20">
          404 - Page Not Found
        </h1>
        <p className="text-center mt-4">
          Sorry, the page you are looking for does not exist.
        </p>
        <div className="flex justify-center mt-10">
          <a href="/" className="text-blue-500 hover:underline">
            Go back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
