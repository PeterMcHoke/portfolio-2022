import { useEffect, useState } from 'react';
import {
  motion,
  AnimatePresence,
  LayoutGroup,
  useViewportScroll,
  useTransform,
  useSpring,
} from 'framer-motion';
import { wordAnimation, container, item } from '../../shared/animation';
import ScrollProgress from '../../shared/ScrollProgress';

const Home = () => {
  const [activeWord, setActiveWord] = useState('designer');
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prevState) =>
        prevState === 'designer'
          ? 'photographer'
          : prevState === 'photographer'
          ? 'developer'
          : 'designer'
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  document.addEventListener('sticky-change', (e: any) => {
    const header = e.detail.target; // header became sticky or stopped sticking.
    const sticking = e.detail.stuck; // true when header is sticky.
    setIsStuck(sticking);
  });

  useEffect(() => {
    console.log('isStuck', isStuck);
  }, [isStuck]);

  useEffect(() => {
    console.log('pathLength', pathLength);
  }, [pathLength]);

  return (
    <main className="relative ">
      <aside className="fixed top-4 left-4 w-12 h-12">
        <ScrollProgress pathLength={pathLength} />
      </aside>
      <motion.header
        className="flex  w-screen h-screen justify-center items-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="gap-x-6 flex">
          <motion.img
            src={'./assets/ProfilePic.jpg'}
            className="w-32 rounded-full ring ring-cyan-600 ring-offset-4 ring-offset-primary"
            variants={item}
            key="photo"
            layoutId="photo"
          />
          <motion.div variants={item} key="name">
            <h1 className="font-serif text-[75px] leading-[80px]">
              Hi, I'm Peter
            </h1>
            <div className="flex gap-x-2 text-center justify-start w-full">
              <LayoutGroup>
                <motion.p className="font-sans text-3xl text-[#625a9d]" layout>
                  I am a{' '}
                </motion.p>
                <AnimatePresence exitBeforeEnter>
                  {activeWord === 'designer' ? (
                    <motion.p
                      variants={wordAnimation}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      key="designer"
                      className="font-sans text-3xl text-[#625a9d]"
                    >
                      designer 🎨
                    </motion.p>
                  ) : activeWord === 'photographer' ? (
                    <motion.p
                      variants={wordAnimation}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      key="photographer"
                      className="font-sans text-3xl text-[#625a9d]"
                    >
                      photographer 📸
                    </motion.p>
                  ) : (
                    <motion.p
                      variants={wordAnimation}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      key="developer"
                      className="font-sans text-3xl text-[#625a9d]"
                    >
                      developer 💻
                    </motion.p>
                  )}
                </AnimatePresence>
              </LayoutGroup>
            </div>
          </motion.div>
        </div>
      </motion.header>
      <section className="container mx-auto px-24">
        <div className="flex flex-col gap-y-6">
          <h2 className="font-serif text-[80px]">Design</h2>
        </div>
      </section>
    </main>
  );
};

export default Home;
