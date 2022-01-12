import { motion, useAnimation } from "framer-motion";
import { Input } from "components/atoms";
import Button from "components/atoms/button/index.js";
import { NextSeo } from "next-seo";
import { IconContext } from "react-icons";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <NextSeo title="Nelson | Contact" description="lorem ipsum" />
      <div className="grid grid-rows-2 grid-flow-col h-screen">
        <motion.div
          className="grid content-center h-screen "
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <h3 className="font-bebas-neue relative text-9xl text-center font-sans font-bold tracking-tighter text-gray-800 dark:text-white text-shadow-2xl">
            CONTACT
          </h3>
        </motion.div>
      </div>
      <div className="flex justify-center ">
        <div className="grid content-center grid-cols-2 gap-4">
          <div>
            <form className="">
              <div className="max-w-2xl px-5 py-10">
                <div className="mb-6 font-bebas-neue font-semibold text-5xl text-left text-gray-800 dark:text-white">
                  SEND ME A MESSAGE
                </div>
                <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                  <div className="col-span-2 lg:col-span-1">
                    <div className=" relative ">
                      <Input
                        type="text"
                        id="contact-form-name"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <div className=" relative ">
                      <Input
                        type="text"
                        id="contact-form-email"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                        placeholder="Enter Email"
                      />
                    </div>
                  </div>
                  <div className="col-span-2">
                    <label className="text-gray-700" for="name">
                      <Input
                        type="textarea"
                        className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                        id="comment"
                        placeholder="Enter your comment"
                        name="comment"
                        rows="5"
                        cols="40"
                      />
                    </label>
                  </div>
                  <div className="col-span-2 text-right">
                    <Button type="button" color="primary" className="text-neutral-800">
                      Send
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="dark:text-white flex items-center  justify-center">
            <div className="grid grid-rows-3 grid-flow-col gap-0">
              <IconContext.Provider
                value={{
                  size: "1.5em",
                  className: "text-primary-800 dark:text-primary-500",
                }}
              >
                <div className="flex justify-start">
                  <FaPhone className="animate-bounce" />
                  <span className="ml-5"> (02) 555-1378</span>
                </div>
              </IconContext.Provider>

              <IconContext.Provider
                value={{
                  size: "1.5em",
                  className: "text-primary-800 dark:text-primary-500",
                }}
              >
                <div className="flex justify-start">
                  <FaEnvelope className="animate-bounce" />
                  <span className="ml-5"> nelescuton@gmail.com</span>
                </div>
              </IconContext.Provider>
              <IconContext.Provider
                value={{
                  size: "1.5em",
                  className: "text-primary-800 dark:text-primary-500",
                }}
              >
                <div className="flex justify-start">
                  <FaMapMarkerAlt className="animate-bounce" />
                  <span className="ml-5">
                    {" "}
                    U111 MB28, PDS Ave., <br />
                    Ususan, Taguig City, <br /> Philippines 1632
                  </span>
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
