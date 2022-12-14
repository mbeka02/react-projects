import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
  },
};

export default function Modal({ handleClose }) {
  return (
    <Backdrop>
      <motion.div
        onClick={(e) => {
          e.stopPropagation;
        }}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="modal-container">
          <h2 className="modal-title">rules</h2>
          <div className="close-icon" onClick={handleClose}></div>
        </div>
      </motion.div>
    </Backdrop>
  );
}
