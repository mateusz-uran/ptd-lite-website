import { AnimatePresence, motion } from "framer-motion";

type FuncArray = {
  subtitle: string;
  href: string;
};

type NestedNavbarProps = {
  list: FuncArray[];
  isOpen: boolean;
  isNestedOpen: boolean;
  toggleNavbar: (arg: boolean | null) => void;
  toggleNestedState: (arg: boolean | null) => void;
};

const NestedNavbar = ({
  list,
  isOpen,
  isNestedOpen,
  toggleNavbar,
  toggleNestedState,
}: NestedNavbarProps) => {
  const toggleBothNavbars = (): void => {
    toggleNavbar(null);
    toggleNestedState(null);
  };

  const variants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        type: "tween",
        stiffness: 40,
        damping: 20,
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        type: "tween",
        stiffness: 40,
        damping: 20,
      },
    },
  };

  return (
    isOpen &&
    isNestedOpen && (
      <AnimatePresence>
        {isNestedOpen && (
          <motion.ul
            className="nested-list"
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
          >
            {list.map((element, idx) => (
              <motion.li
                key={element.subtitle}
                className="nested-li-link"
                initial={{
                  scale: 0,
                  opacity: 0,
                }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                  delay: 0.01 + idx / 10,
                }}
              >
                <a
                  href={element.href}
                  onClick={toggleBothNavbars}
                  className="link"
                >
                  {element.subtitle}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    )
  );
};

export default NestedNavbar;
