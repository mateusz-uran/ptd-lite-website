import { AnimatePresence, motion } from "framer-motion";

type NestedNavbarProps = {
  subtitle: string;
  href: string;
};

const NestedNavbar = ({
  list,
  isOpenNavbar,
  toggleNested,
}: {
  list: NestedNavbarProps[];
  isOpenNavbar: boolean;
  toggleNested: boolean;
}) => {
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
    isOpenNavbar &&
    toggleNested && (
      <AnimatePresence>
        {toggleNested && (
          <motion.ul
            className="nested-list"
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
          >
            {list.map((element) => (
              <li key={element.subtitle}>
                <a href="">{element.subtitle}</a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    )
  );
};

export default NestedNavbar;
