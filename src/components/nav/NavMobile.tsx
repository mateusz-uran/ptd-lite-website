import logo from "../../assets/logo_ptd.png";
import { Squash as Hamburger } from "hamburger-react";
import { useClickAway } from "react-use";
import { routes } from "../../routes";
import { IoIosArrowForward } from "react-icons/io";
import NestedNavbar from "../NestedNavbar";
import { AnimatePresence, motion } from "framer-motion";

type NavMobileProps = {
  refList: React.MutableRefObject<HTMLDivElement | null>;
  isOpen: boolean;
  toggleNavbar: (arg: boolean | null) => void;
  isNestedOpen: boolean;
  toggleNestedNavbar: (arg: boolean | null) => void;
};

const NavbMobile = ({
  refList,
  isOpen,
  toggleNavbar,
  isNestedOpen,
  toggleNestedNavbar,
}: NavMobileProps) => {
  function toggleBothNavbars(arg1: boolean | null, arg2: boolean | null) {
    toggleNavbar(arg1);
    toggleNestedNavbar(arg2);
  }

  useClickAway(refList, (): void => {
    toggleBothNavbars(false, false);
  });

  return (
    <nav ref={refList} className="nav-mobile">
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
            <ul className="outer-list">
              {routes.map((route, idx) => {
                const { Icon, href, title, functions } = route;
                return (
                  <motion.li
                    key={route.title}
                    className="outer-li-link"
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                  >
                    <div className="link-wrapper">
                      <a
                        href={href}
                        onClick={() => toggleNavbar(null)}
                        className="link"
                      >
                        {title}
                      </a>
                      {Icon && (
                        <motion.div
                          animate={{ rotate: isNestedOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="icon"
                          onClick={() => toggleNestedNavbar(null)}
                        >
                          <Icon />
                        </motion.div>
                      )}
                    </div>
                    {functions && (
                      <NestedNavbar
                        list={functions}
                        isOpen={isOpen}
                        isNestedOpen={isNestedOpen}
                        toggleNavbar={toggleNavbar}
                        toggleNestedState={toggleNestedNavbar}
                      />
                    )}
                  </motion.li>
                );
              })}
              <motion.button
                className="login-btn"
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
      <Hamburger
        toggled={isOpen}
        size={20}
        toggle={() => toggleBothNavbars(null, false)}
      />
    </nav>
  );
};

export default NavbMobile;
