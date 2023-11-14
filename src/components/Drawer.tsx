import { Link } from "react-scroll";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

interface drawerprops {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function Drawer({ isOpen, setIsOpen }: drawerprops) {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg right-0 absolute bg-[#F5F5F5] h-full shadow-xl delay-400 duration-700 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <motion.article
          animate={isOpen ? "open" : "closed"}
          className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6
         overflow-y-scroll h-full font-baloo items-center justify-center "
          variants={variants}
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              onClick={() => setIsOpen(false)}
              to="home"
              className="text-3xl font-semibold text-[#006699] cursor-pointer"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              onClick={() => setIsOpen(false)}
              to="about"
              smooth={true}
              duration={500}
              className="text-3xl font-semibold text-[#006699] cursor-pointer"
            >
              About
            </Link>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              onClick={() => setIsOpen(false)}
              to="skill"
              duration={500}
              smooth={true}
              className="text-3xl font-semibold text-[#006699] cursor-pointer  "
            >
              Skills
            </Link>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              onClick={() => setIsOpen(false)}
              to="portfolio"
              smooth={true}
              duration={500}
              className="text-3xl font-semibold text-[#006699] cursor-pointer "
            >
              Portfolio
            </Link>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              onClick={() => setIsOpen(false)}
              to="contact"
              smooth={true}
              duration={500}
              className="text-3xl font-semibold text-[#006699] cursor-pointer  "
            >
              Contact
            </Link>
          </motion.div>
        </motion.article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
