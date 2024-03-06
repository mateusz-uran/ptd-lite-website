import { useRef, useState } from "react";
import logo from "../assets/logo_ptd.png";
import { Squash as Hamburger } from "hamburger-react";
import { useClickAway } from "react-use";
import { routes } from "../routes";
import { IoIosArrowForward } from "react-icons/io";
import NestedNavbar from "./NestedNavbar";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isNestedOpen, setNestedOpen] = useState<boolean>(false);
  const refList = useRef<HTMLElement | null>(null);

  useClickAway(refList, (): void => setOpen(false));

  return (
    <nav ref={refList}>
      <img src={logo} alt="PTD logo" />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="list-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul>
              {routes.map((route, idx) => {
                const { Icon, href, title, functions } = route;
                return (
                  <motion.li
                    key={route.title}
                    initial={{
                      scale: 0,
                      opacity: 0,
                      backgroundColor: "#f5f9fc",
                    }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileTap={{ backgroundColor: "#fff" }}
                    whileFocus={{ backgroundColor: "#fff" }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                  >
                    <div className="link-wrapper">
                      <a href="" onClick={(): void => setOpen((prev) => !prev)}>
                        <span>{title}</span>
                      </a>
                      {Icon && (
                        <motion.div
                          animate={{ rotate: isNestedOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="icon"
                        >
                          <Icon
                            onClick={(): void => setNestedOpen((prev) => !prev)}
                          />
                        </motion.div>
                      )}
                    </div>
                    {functions && (
                      <NestedNavbar
                        list={functions}
                        isOpenNavbar={isOpen}
                        toggleNested={isNestedOpen}
                      />
                    )}
                  </motion.li>
                );
              })}
              <motion.button
                whileHover={{
                  boxShadow: "rgba(61, 127, 58, 0.5) 0px 2px 6px",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 16,
                }}
              >
                <span>Login</span>
                <IoIosArrowForward className="icon" />
              </motion.button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
    </nav>
  );
};

export default Navbar;
