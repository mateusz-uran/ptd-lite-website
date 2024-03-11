import logo from "../../assets/logo_ptd.png";
import { routes } from "../../routes";
import NestedNavbar from "../NestedNavbar";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

type NavDesktopProps = {
  isOpen: boolean;
  toggleNavbar: (arg: boolean | null) => void;
  isNestedOpen: boolean;
  toggleNestedNavbar: (arg: boolean | null) => void;
};

const NavDesktop = ({
  isOpen,
  toggleNavbar,
  isNestedOpen,
  toggleNestedNavbar,
}: NavDesktopProps) => {
  return (
    <nav className="nav-desktop">
      <a href="">
        <img src={logo} alt="PTD logo" />
      </a>
      <div className="list-wrapper">
        <ul className="outer-list">
          {routes.map((route) => {
            const { Icon, href, title, functions } = route;
            return (
              <motion.li key={route.title} className="outer-li-link">
                <div className="link-wrapper">
                  <motion.a
                    href={href}
                    className="link"
                    initial={{ backgroundColor: "#30373a" }}
                    whileHover={{ backgroundColor: "#222729" }}
                    transition={{ duration: 0.2 }}
                  >
                    {title}
                  </motion.a>
                  {Icon && (
                    <motion.div
                      animate={{ rotate: isNestedOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="icon"
                      onClick={() => {
                        toggleNavbar(null);
                        toggleNestedNavbar(null);
                      }}
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
      </div>
    </nav>
  );
};

export default NavDesktop;
