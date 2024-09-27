"use client";
import React, { FormEvent, SVGProps, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/hoc";
import { slideIn } from "@/utils/motion";
import { EarthCanvas } from "./canvas";
import ScrollTop from "./bottom/ScrollTop";
import { TextInput } from "./global/input/TextInput";
import TextArea from "./global/input/TextArea";
import CustomButton from "./global/button/Button";
import Boarder from "./global/border/Boarder";
import { TypingTextHeader } from "./global/others/TypingText";
import Pointer from "./global/pointer/Pointer";
import MovingBoarders from "./ui/MovingBoarders";
import { sendMessage } from "@/actions";
import { getLocation } from "@/lib";
import { toast } from "react-toastify";
import { MapPin, Phone, UserRound } from "lucide-react";

export const MdiSend = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}>
      <path fill="#888888" d="m2 21l21-9L2 3v7l15 2l-15 2z"></path>
    </svg>
  );
};

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const location = getLocation();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.target as HTMLFormElement);
      // Call the server action
      const res = await sendMessage(formData);
      toast.success(res.message, {
        closeOnClick: true,
        progress: undefined,
      });
      toast.success(`I'll respond to you with in 24 hours`, {
        closeOnClick: true,
        progress: undefined,
      });
      setForm({
        name: "",
        email: "",
        message: "",
      });
      setLoading(false);
    } catch (error) {
      toast.error("Something went wrong ", {
        closeOnClick: true,
        progress: undefined,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      className="xl:mt-12 xl:flex-row flex-col-reverse justify-between overflow-hidden flex"
      id="section5">
      <MovingBoarders
        as="div"
        className="flex-1 rounded-2xl z-[5000] mx-auto p-6 md:w-[500px]"
        duration={Math.floor(Math.random() * 10000) + 10000}>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="text-center w-full">
          <Pointer text="Contact me" color="#34bfff" />
          <TypingTextHeader text="Get in touch" />
          <Boarder
          // color="#0000"
          />
          <div className="w-full flex flex-col mt-8 gap-4">
            <div className="w-full flex flex-row gap-3 text-[#ccc]">
              <div>
                <MapPin />
              </div>
              <div className="font-bold text-base">Kampala Uganda</div>
            </div>
            <div className="w-full flex flex-row gap-3 text-[#ccc]">
              <div>
                <UserRound />
              </div>
              <div className="font-bold text-base">Kavuma Herbert</div>
            </div>
            <div className="w-full flex flex-row gap-3 text-[#ccc]">
              <div>
                <Phone />
              </div>
              <div className="font-bold text-base">+256779159642</div>
            </div>
          </div>
          <form onSubmit={handleSubmit} action="post" className="mx-auto mt-7">
            <TextInput
              type="text"
              onChange={(e) =>
                setForm((el) => ({
                  ...el,
                  name: e.target.value,
                }))
              }
              value={form.name}
              placeholder="Name"
              name="name"
              otherClasses="mb-4 rounded-full bg-[rgb(21,16,48)]"
              required
              disabled={loading}
            />
            <TextInput
              onChange={(e) =>
                setForm((el) => ({
                  ...el,
                  email: e.target.value,
                }))
              }
              value={form.email}
              required
              type="email"
              name="email"
              placeholder="Email"
              otherClasses="rounded-full bg-[rgb(21,16,48)]"
              disabled={loading}
            />
            <input type="hidden" name="location" value={location} />
            <TextArea
              inputClassName="mt-4 rounded-lg bg-[rgb(21,16,48)]"
              placeholder="Message"
              name="message"
              required
              value={form.message}
              disabled={loading}
              onChange={(e) =>
                setForm((el) => ({
                  ...el,
                  message: e.target.value,
                }))
              }
              // isValid={false}
            />

            {loading ? (
              <CustomButton
                text="Please wait"
                backgroundColor="rgb(21,16,48)"
                textColor="text-white-100"
                otherClasses="font-bold mx-auto mt-4 uppercase glass-shadow"
              />
            ) : (
              <CustomButton
                text="Send"
                backgroundColor="rgb(21,16,48)"
                textColor="text-white-100"
                otherClasses="mx-auto mt-4 uppercase glass-shadow"
                type="submit"
                suffixIcon={<MdiSend className="mt-[0.1rem]" />}
              />
            )}
          </form>
        </motion.div>
      </MovingBoarders>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:h-auto md:h-[550px] h-[350px] flex-1">
        <EarthCanvas />
      </motion.div>
      <ScrollTop />
    </motion.div>
  );
};

export default SectionWrapper(Contact, "contact");
