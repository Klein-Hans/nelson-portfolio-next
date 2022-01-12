import { useState } from "react";
import { motion } from "framer-motion";
import { WorkExperience } from "components/organisms";
import { ScrollMotion } from "components/molecules";
import { NextSeo } from "next-seo";
import Image from "next/image";

export default function About() {
  const [workExp, setWorkExp] = useState([
    {
      job: "Admin Manager",
      company: "Maxicool Industries & Contracting Corp.",
      yearStart: "2015",
      yearEnd: "Current",
      description: (
        <ul className="list-disc pl-5">
          <li>In charge in Human Resource and Development</li>
          <li>Monitor personnel performance.</li>
          <li>
            Participate in the preparation of presentations for prospective clients and maintained
            organized numerous office files
          </li>
        </ul>
      ),
    },
    {
      job: "Admin Office",
      company: "Maxicool Industries & Contracting Corp.",
      yearStart: "2003",
      yearEnd: "2015",
      description: (
        <ul className="list-disc pl-5">
          <li>Participate in the preparation of semi-monthly payroll</li>
          <li>Prepares and submit necessary documents of the company's for accreditation</li>
        </ul>
      ),
    },
    {
      job: "Data Encoder",
      company: "Innodata Philippines Inc.",
      yearStart: "1993",
      yearEnd: "2000",
      description: (
        <ul className="list-disc pl-5">
          <li>
            Create an electronic file, of various legal cases under Law Office Information System
            (LOIS) project.
          </li>
          <li>By encoding, proof Reading, PC Editing, Formatting and Compiling of Data..</li>
        </ul>
      ),
    },
  ]);

  const imagesRoot = "/static/images";
  const freedomTicket = `${imagesRoot}/freedom_ticket.jpg`;
  const [certs, setCerts] = useState([
    {
      name: "Freedom Ticket",
      image: freedomTicket,
    },
    {
      name: "Freedom Ticket",
      image: freedomTicket,
    },
    {
      name: "Freedom Ticket",
      image: freedomTicket,
    },
    {
      name: "Freedom Ticket",
      image: freedomTicket,
    },
    {
      name: "Freedom Ticket",
      image: freedomTicket,
    },
  ]);

  console.log(certs);

  return (
    <>
      <NextSeo title="Nelson | About" description="lorem ipsum" />
      <motion.div
        className="grid content-center h-screen "
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <h3 className="font-bebas-neue relative text-9xl text-center font-sans font-bold tracking-tighter text-gray-800 dark:text-white  text-shadow-2xl">
          WORK
        </h3>
      </motion.div>
      <div className="container mx-auto w-full h-full ">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div
            className="-2 absolute border-opacity-20 border-gray-50 bg-gray-50 h-full border"
            style={{ left: "50%" }}
          ></div>
          {workExp.map((item, index) => {
            const isEven = index % 2 == 0;
            return (
              <div
                className={`mb-8 flex justify-between items-center w-full ${
                  isEven ? "right-timeline" : "flex-row-reverse left-timeline"
                }`}
              >
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-gray-300 shadow-2xl w-8 h-8 rounded-full">
                  <h2 className="mx-auto font-semibold text-xs dark:text-black text-white  ">
                    {item.yearStart}
                  </h2>
                </div>
                <WorkExperience className={`${isEven ? "bg-gray-400" : "bg-primary-800"}`}>
                  <h3 className="font-bold uppercase text-gray-800 text-lg">{item.job}</h3>
                  <h4 className="uppercase text-gray-700 text-sm">{item.company}</h4>
                  <h5 className="mb-3 text-gray-700 text-sm italic">{`${item.yearStart}-${item.yearEnd}`}</h5>
                  {/* <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100"> */}
                  {item.description}
                  {/* </p> */}
                </WorkExperience>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <br />
      <div className="grid h-screen">
        <motion.div
          className="grid content-center h-screen "
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <ScrollMotion>
            <h3 className="font-bebas-neue relative text-9xl text-center font-sans font-bold tracking-tighter text-gray-800 dark:text-white  text-shadow-2xl-dark">
              CERTIFICATES
            </h3>
          </ScrollMotion>
        </motion.div>
      </div>
      <div className="flex justify-center pb-30">
        <div className="grid content-center grid-cols-3 gap-4">
          {certs.map((item, index) => {
            return (
              <ScrollMotion duration={index + 0.5} threshold={0}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width="300"
                  height="220"
                  className="max-w-xs md:max-w-xs shadow-2xl-dark"
                />
              </ScrollMotion>
            );
          })}
        </div>
      </div>
    </>
  );
}
