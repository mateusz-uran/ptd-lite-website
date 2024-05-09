import logo from "/images/ptd_logo_small.webp";
import { routes } from "../../routes";
import NestedNavbar from "./NestedNavbar";
import { motion } from "framer-motion";
import style from "./navDesktop.module.scss";
import PrimaryButton from "../buttons/PrimaryButton";
import { Link } from "react-router-dom";

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
  //TODO: handle login to ptd app logic
  function loginFunction() {
    console.log("login");
  }

  return (
    <nav className={style.nav}>
      <div className={style.wrapper}>
        <a href="/">
          <img src={logo} alt="PTD logo" loading="lazy" />
        </a>
        <div className={style.listWrapper}>
          <ul className={style.ul}>
            {routes.map((route) => {
              const { Icon, href, title, functions } = route;
              return (
                <motion.li key={route.title} className={style.outerLiLink}>
                  <div className={style.linkWrapper}>
                    <motion.span
                      className={style.link}
                      initial={{ backgroundColor: "#30373a" }}
                      whileHover={{ backgroundColor: "#222729" }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link to={href}>{title}</Link>
                    </motion.span>
                    {Icon && (
                      <motion.div
                        animate={{ rotate: isNestedOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={style.icon}
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
          </ul>
          <motion.div
            className={style.buttonWrapper}
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
            <PrimaryButton
              text={"Login"}
              onClickFunction={loginFunction}
              isDisabled={false}
            />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default NavDesktop;
