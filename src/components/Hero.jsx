import { styles } from "../styles";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // example api response {count: 18}
  const [counter, setCounter] = useState(18);

  useEffect(() => {
    fetch("http://154.26.128.6:6584/api")
      .then((res) => res.json())
      .then((data) => {
        setCounter(data.count);
      });
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto flex`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex flex-col">
          <h1 className={`${styles.heroHeadText} text-white`}>
            We are the <span className="text-[#915EFF]">Mounts Cult</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            We are the top cult in
            <br className="sm:block hidden" />
            Kai's Haven Discord Server
          </p>

          <br />
          <button type="button" className="btn mt-8 ml-4 disabled">
            <strong>
              Total Cult Members :  {" "}
              <CountUp start={0} end={counter} duration={3} separator="," />
            </strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </button>
        </div>
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
