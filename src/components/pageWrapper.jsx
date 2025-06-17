// src/components/PageWrapper.jsx
import { motion } from "framer-motion";
import Footer from "./footer";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function PageWrapper({ children }) {
  return (
    <>
      <motion.div
        className="pt-10" // pushes content below navbar
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
      <Footer />
    </>
  );
}

