import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiFillLinkedin,
} from "react-icons/ai";
import Input from "./Inputs";
import { FiSend } from "react-icons/fi";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const isEmailValid = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isFakeEmail = (email: string): boolean => {
  const disposablePatterns = [
    /@mailinator\.com$/,
    /@guerrillamail\.com$/,
    /@dispostable\.com$/,
  ];

  return disposablePatterns.some((pattern) => pattern.test(email));
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const handlesubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Fill all the fields !!");
      return;
    }
    if (!isEmailValid(email) || isFakeEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        e.target as HTMLFormElement,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Email sent 👍");
        setemail("");
        setmessage("");
        setname("");
      })
      .catch((error) => {
        console.log(error.text);
      });
  };
  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8  bg-[#F5F5F5] font-baloo  py-4">
      <Toaster />
      <div className="h-[25%] flex items-center justify-center flex-col gap-2 mt-12">
        <div className="text-4xl font-bold text-[#555555] sm:text-5xl">
          Contact Me
        </div>
        <div className="text-[#444444] text-lg">Lets work together</div>
      </div>
      <div className="h-[70%] flex flex-col sm:flex-row w-[100%] gap-2 p-2 sm:p-4  ">
        {/* Contact cards */}
        <div className="flex flex-col gap-3 items-center justify-center h-full w-full sm:w-[40%]">
          {/* card 1 */}
          <div className="flex items-center justify-center w-[200px] h-[150px] flex-col shadow-lg rounded-lg">
            <AiOutlineMail color="black" size={24} />
            <span className=" text-lg text-[#555555] font-semibold ">
              Email
            </span>
            <span className="text-[#444444] mt-1 text-base">
              athaarva999@gmail.com
            </span>
            <span className="text-[#444444] text-base mt-3">
              Write Me {`->`}
            </span>
          </div>
          {/* card2 */}
          <div className="flex items-center justify-center w-[200px] h-[150px] flex-col shadow-lg rounded-lg">
            <AiOutlineWhatsApp color="black" size={24} />
            <span className=" text-lg text-[#555555] font-semibold ">
              Whatsapp
            </span>
            <span className="text-[#444444] mt-1 text-base">
              +91 7030638986
            </span>
            <span className="text-[#444444] text-base mt-3">
              Write Me {`->`}
            </span>
          </div>
          {/* card 3 */}
          <div className="flex items-center justify-center w-[200px] h-[150px] flex-col shadow-lg rounded-lg">
            <AiFillLinkedin color="black" size={24} />
            <span className=" text-lg text-[#555555] font-semibold ">
              Linked In
            </span>
            <span className="text-[#444444] mt-1 text-base">
              atharva-mahadeokar
            </span>
            <span className="text-[#444444] text-base mt-3">
              Write Me {`->`}
            </span>
          </div>
        </div>
        {/* Contact form  */}
        <div className="w-full sm:w-[60%]  p-2 text-center justify-start">
          <span className="text-[#555555] text-2xl mb:2 sm:mb-2 font-semibold">
            Let's Talk Business
          </span>
          <form
            ref={formRef}
            onSubmit={handlesubmit}
            className="flex flex-col gap-4"
          >
            <Input
              ontextChangeEvent={(
                event: React.ChangeEvent<HTMLInputElement>
              ) => {
                setname(event.target.value);
              }}
              textvalue={name}
              id="name"
              label="Name"
              type="text"
              name="name"
            />
            <Input
              ontextChangeEvent={(
                event: React.ChangeEvent<HTMLInputElement>
              ) => {
                setemail(event.target.value);
              }}
              textvalue={email}
              id="email"
              label="Email"
              type="email"
              name="email"
            />
            <Input
              onareaChangeEvent={(
                event: React.ChangeEvent<HTMLTextAreaElement>
              ) => {
                setmessage(event.target.value);
              }}
              textvalue={message}
              id="Project"
              label="Project"
              type="area"
              name="message"
            />
            <button
              type="submit"
              className="flex flex-row gap-2 cursor-pointer shadow-md w-[100%] sm:w-[40%] justify-center items-center rounded-xl bg-[#0077B6] px-4 py-4 text-center text-md font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-[#0099CC] focus-visible:ring active:bg-[#005580] md:text-base"
            >
              Send Message
              <FiSend size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
