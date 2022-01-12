import Head from "next/head";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { ScrollMotion } from "components/molecules";
import Button from "components/atoms/button/index.js";

export default function Home() {
  const imagesRoot = "/static/images";
  const research = `${imagesRoot}/search-solid.svg`;
  const headset = `${imagesRoot}/headset-solid.svg`;
  const paint = `${imagesRoot}/paint-brush-solid.svg`;
  const resume = `/static/files/Nelson Escuton - CV.pdf`;

  const services = [
    {
      name: "PRODUCT RESEARCH",
      description:
        "Analyzing current market trends to choose “winning” items – something that can generate high sales.",
      icon: research,
    },
    {
      name: "CUSTOMER SERVICE",
      description:
        "Good customer service is a key driver of churn. The U.S. Small Business Administration reports that 68% of customers leave because they’re upset with the treatment they've received. Don’t let that happen to you.",
      icon: headset,
    },
    {
      name: "BRANDING",
      description:
        "Let your customers recognise and experience your business. A strong brand is more than just a logo.",
      icon: paint,
    },
  ];

  return (
    <>
      <NextSeo title="Nelson | Home" description="lorem ipsum" />
      <div className="h-screen mx-auto px-6 items-center grid grid-cols-6 relative py-12 mb-32">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="col-span-2 relative ml-24 "
        >
          <Image
            alt="profile"
            width="200"
            height="200"
            src="/static/images/profile-3.png"
            className="float-left max-w-xs md:max-w-xs m-auto rounded-full h-52"
          />
        </motion.div>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="col-span-4 relative z-20"
        >
          <h1 className="font-bebas-neue text-shadow-2xl uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
            NELSON ESCUTON
            <span className="text-2xl sm:text-2xl">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(500)
                    .typeString("I am an Admin Manager")
                    .pauseFor(1500)
                    .changeDeleteSpeed(5)
                    .deleteChars(13)
                    .typeString("Amazon FBA Specialist")
                    .pauseFor(1500)
                    .start();
                }}
                options={{
                  delay: 40,
                  loop: true,
                }}
              />
            </span>
          </h1>

          {/* <motion.p
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
            className="text-sm sm:text-base text-primary-800 dark:text-primary-500"
          >
            Let's make your business grow and visible to customers.
          </motion.p> */}
        </motion.div>
      </div>

      <div className="mb-52">
        <ScrollMotion threshold={0} className="grid content-center">
          <h3 className="font-bebas-neue relative text-5xl text-center font-sans font-bold tracking-tighter text-gray-800 dark:text-white text-shadow-lg">
            SERVICES
          </h3>
        </ScrollMotion>
        <div className="mt-24 sm:flex flex-wrap justify-center items-center text-center gap-10">
          {services.map((item, index) => (
            <ScrollMotion
              duration={index + 0.5}
              threshold={0}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6 shadow-2xl-dark dark:bg-neutral-800"
            >
              {/* <div  */}
              <div className="flex-shrink-0">
                <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md">
                  <Image
                    alt={item.name}
                    width="200"
                    height="200"
                    src={item.icon}
                    className="float-left max-w-xs md:max-w-xs m-auto h-52 text-white"
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                {item.name}
              </h3>
              <p className="text-sm  text-gray-500 dark:text-gray-300 py-4">{item.description}</p>
              {/* </div> */}
            </ScrollMotion>
          ))}
        </div>
      </div>

      <div class="mt-20 bg-white dark:bg-neutral-800 shadow-2xl-dark">
        <div class="lg:flex lg:items-center lg:justify-evenly w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span class="block">LETS WORK TOGETHER</span>
            <span class="block text-primary-500 text-lg">
              Make your business grow and visible to customers.
            </span>
          </h2>
          <div class="lg:mt-0 lg:flex-shrink-0">
            <div class=" inline-flex rounded-md shadow">
              <Button
                type="download"
                href={resume}
                filename={"Nelson Escuton - CV"}
                color="primary"
                className="py-4 px-6 text-neutral-800"
                // class="py-4 px-6 bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 focus:ring-offset-indigo-200 text-neutrral-800 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                DOWNLOAD CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
