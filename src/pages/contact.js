import { motion, useAnimation } from "framer-motion";
import { Input } from "components/atoms";
import Button from "components/atoms/button/index.js";
import { NextSeo } from "next-seo";
import { IconContext } from "react-icons";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);

  if (state.succeeded) {
    <div class="flex h-screen">
      <div class="m-auto">
        <div class="bg-white rounded-lg border-gray-300 border p-3 shadow-lg">
          <div class="flex flex-row">
            <div class="px-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 1792 1792"
                fill="#44C997"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
              </svg>
            </div>
            <div class="ml-2 mr-6">
              <span class="font-semibold">Successfully Sent!</span>
              <span class="block text-gray-500">
                Thank you for reaching out, will get back to you as soon as possible
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }

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
            <form className="" onSubmit={handleSubmit}>
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
                        name="name"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <div className=" relative ">
                      <Input
                        type="text"
                        id="contact-form-email"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                        placeholder="Enter Email"
                        name="email"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
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
                      <ValidationError prefix="Comment" field="comment" errors={state.errors} />
                    </label>
                  </div>
                  <div className="col-span-2 text-right">
                    <Button
                      type="submit"
                      disabled={state.submitting}
                      color="primary"
                      className="text-neutral-800"
                    >
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
