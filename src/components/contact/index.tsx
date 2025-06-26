import { useRouter } from "next/router";
import React from "react";

export default function Contact() {
  const router = useRouter();
  const nameRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const messageRef = React.useRef<HTMLTextAreaElement>(null);

  const formSubmitHandler = (event: any) => {
    event.preventDefault();

    if (
      !nameRef?.current?.value ||
      !emailRef?.current?.value ||
      !messageRef?.current?.value
    ) {
      console.log("please fill all the fields");
    } else {
      const data = {
        name: nameRef?.current?.value,
        email: emailRef?.current?.value,
        message: messageRef?.current?.value,
      };
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
          //@ts-ignore
          nameRef.current.value = "";
          //@ts-ignore
          emailRef.current.value = "";
          // @ts-ignore
          messageRef.current.value = "";
          router.replace(router.asPath);
        }
      });
    }
  };
  return (
    <>
      <section>
        <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased">
          <h1 className="text-3xl md:text-6xl  font-bold py-20 text-center md:text-left px-4 lg:px-0 text-gray-800 dark:text-gray-200">
            Contact
          </h1>
        </div>
        <div className="bg-[#F1F1F1] dark:bg-gray-900 mt-[20px] px-4 lg:px-0 py-[2rem]">
          <div className="relative z-10 rounded-md shadow-md bg-[white] px-4 max-w-6xl mx-auto   py-[2rem] text-[black]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-y-[16px]">
                <h1 className=" font-semibold text-2xl">
                  {`Get in touch, let's talk.`}
                </h1>
                <p className="font-light text-base  mt-2">
                  {`Fill in the details and I'll get back to you as soon as I can.`}
                </p>
                <div className="flex flex-row items-center space-x-6 rounded-md border p-4">
                  <p className="font-light text-sm">+91 8376957399</p>
                </div>
                <div className="flex flex-row items-center space-x-6 rounded-md border  p-4">
                  <p className=" font-light text-sm">vabhinav368@gmail.com</p>
                </div>
              </div>
              <div className="flex flex-row items-center space-x-6 rounded-md">
                <form
                  className="form rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 p-6 flex flex-col w-full shadow-lg "
                  onSubmit={(e) => formSubmitHandler(e)}
                  name="contact"
                >
                  <label
                    htmlFor="name"
                    className="text-sm text-blue-700 dark:text-blue-300 mx-4 font-semibold"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="font-light rounded-lg border border-blue-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 py-2 mt-2 px-3 mx-4 text-gray-800 dark:text-white bg-white dark:bg-gray-800 placeholder-gray-400"
                    name="name"
                    ref={nameRef}
                    placeholder="Enter your name"
                  />
                  <label
                    htmlFor="email"
                    className="text-sm text-blue-700 dark:text-blue-300 mx-4 mt-4 font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="font-light rounded-lg border border-blue-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 py-2 m-4 px-3 text-gray-800 dark:text-white bg-white dark:bg-gray-800 placeholder-gray-400"
                    name="email"
                    ref={emailRef}
                    placeholder="Enter your email"
                  />
                  <label
                    htmlFor="message"
                    className="text-sm text-blue-700 dark:text-blue-300 mx-4 mt-4 font-semibold"
                  >
                    Message
                  </label>
                  <textarea
                    className="font-light rounded-lg border border-blue-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 py-2 m-4 px-3 text-gray-800 dark:text-white bg-white dark:bg-gray-800 placeholder-gray-400 min-h-[100px]"
                    name="message"
                    ref={messageRef}
                    placeholder="Type your message..."
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 rounded-lg w-1/2 mx-4 mt-8 py-2 text-white text-sm font-bold shadow transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
