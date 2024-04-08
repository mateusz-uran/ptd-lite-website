import logo from "/images/logo_ptd2.png";
import { Squash as Hamburger } from "hamburger-react";
import { useClickAway } from "react-use";
import { routes } from "../../routes";
import NestedNavbar from "./NestedNavbar";
import { AnimatePresence, motion } from "framer-motion";
import style from "./navMobile.module.scss";
import PrimaryButton from "../buttons/PrimaryButton";
import { Link } from "react-router-dom";

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
    <nav ref={refList} className={style.nav}>
      <img src={logo} alt="PTD logo" />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={style.listWrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul className={style.ul}>
              {routes.map((route, idx) => {
                const { Icon, href, title, functions } = route;

                return (
                  <motion.li
                    key={route.title}
                    className={style.li}
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
                    <div className={style.linkWrapper}>
                      <Link
                        to={href}
                        onClick={() => {
                          toggleNavbar(null);
                        }}
                        className={style.link}
                      >
                        {title}
                      </Link>
                      {Icon && (
                        <motion.div
                          animate={{ rotate: isNestedOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className={style.icon}
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
              <div className={style.buttonWrapper}>
                <PrimaryButton text={"Login"} />
              </div>
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
