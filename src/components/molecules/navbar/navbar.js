import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { landingRoutes } from "routes";

export function Navbar() {
  const router = useRouter();
  console.log(landingRoutes);
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <header className="bg-transparent absolute h-24 sm:h-20 flex items-center justify-start lg:justify-center z-30 w-full">
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <div className="flex items-center">
          <nav
            className={`font-sans text-neutral-800 dark:text-white uppercase text-lg lg:flex items-center lg:relative sm:fixed top-0 mx-10 my-4 transition-opacity duration-300 ease-in opacity-100 ${
              !toggle && "opacity-0"
            }`}
          >
            <Link href="/" className="py-2 px-6 flex hover:text-teal-500">
              <a className="py-2 px-6 flex text-xs hover:text-primary-800 hover:font-medium transition ease-out duration-500">
                Home
              </a>
            </Link>
            <Link href="/services">
              <a className="py-2 px-6 flex text-xs hover:text-primary-800 hover:font-medium transition ease-out duration-500">
                Services
              </a>
            </Link>
            <Link href="/about" className="py-2 px-6 flex">
              <a className="py-2 px-6 flex text-xs hover:text-primary-800 hover:font-medium transition ease-out duration-500">
                About Me
              </a>
            </Link>
            <Link href="/contact" className="py-2 px-6 flex">
              <a className="py-2 px-6 flex text-xs hover:text-primary-800 hover:font-medium transition ease-out duration-500">
                Contact
              </a>
            </Link>
          </nav>
          <button className="lg:hidden flex flex-col ml-4" onClick={() => setToggle(!toggle)}>
            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
          </button>
        </div>
      </motion.div>
    </header>
  );
}
