import { Link } from "react-scroll";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className="bg-[#F5F5F5] pb-6 sm:pb-8 lg:pb-12 font-baloo">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row pt-6">
          {/* <!-- content - start --> */}
          <motion.div
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center sm:text-center lg:items-start lg:py-12 lg:text-left xl:w-5/12 xl:py-24"
          >
            <motion.h1
              variants={textVariants}
              className="mb-8 text-4xl font-bold text-[#555555] sm:text-5xl md:mb-12 md:text-6xl"
            >
              Atharva Mahadeokar
              <br />
              <motion.span
                variants={textVariants}
                className="text-2xl font-medium"
              >
                -------Full Stack developer
              </motion.span>
            </motion.h1>

            <motion.p
              variants={textVariants}
              className="mb-8 leading-relaxed text-[#333333] md:mb-12 lg:w-4/5 xl:text-lg"
            >
              Rooted in Pune, I'm on a relentless journey as a full-stack
              developer, fueled by an unwavering commitment to crafting
              large-scale digital experiences
            </motion.p>

            <form className="flex w-full gap-2 md:max-w-md">
              <Link to="contact" duration={500} smooth>
                <motion.div
                  variants={textVariants}
                  className="flex flex-row gap-2 shadow-md justify-center cursor-pointer items-center rounded-lg bg-[#0077B6] px-8 py-4 text-center text-md font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-[#0099CC] focus-visible:ring active:bg-[#005580] md:text-base"
                >
                  Contact Me
                  <FiSend size={20} />
                </motion.div>
              </Link>
            </form>
          </motion.div>
          {/* <!-- content - end --> */}

          {/* <!-- image - start --> */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-xl shadow-black order-first sm:order-last lg:h-auto xl:w-5/12"
          >
            <img
              src="https://res.cloudinary.com/dcyo1ji8f/image/upload/v1699635389/portfolio/hero_image_hnu4r0.webp"
              loading="lazy"
              alt="A photo of Atharva Mahadeokar"
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
          {/* <!-- image - end --> */}
        </section>
      </div>
    </div>
  );
};

export default Hero;
