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
          <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
            Contact
          </h1>
        </div>
        <div className="bg-[#F1F1F1] dark:bg-gray-900 mt-[20px]">
          <div className="relative z-10 rounded-md shadow-md bg-[white] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto  mx-20 py-20 text-[black]">
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
              <div className="flex flex-row items-center space-x-6 rounded-md border border-[black] hover:border hover:border-blue-500 ">
                <form
                  className="form rounded-lg bg-white p-4 flex flex-col md:w-full"
                  onSubmit={(e) => formSubmitHandler(e)}
                  name="contact"
                >
                  <label htmlFor="name" className="text-sm text-gray-600 mx-4">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 text-white "
                    name="name"
                    ref={nameRef}
                  />
                  <label
                    htmlFor="email"
                    className="text-sm text-gray-600 mx-4 mt-4"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="font-light rounded-md border focus:outline-none py-2 m-4 px-1  text-white"
                    name="email"
                    ref={emailRef}
                  />
                  <label
                    htmlFor="email"
                    className="text-sm text-gray-600 mx-4 mt-4"
                  >
                    Message
                  </label>
                  <textarea
                    className="font-light rounded-md border focus:outline-none py-2 m-4 px-1  text-white"
                    name="message"
                    ref={messageRef}
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold"
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
