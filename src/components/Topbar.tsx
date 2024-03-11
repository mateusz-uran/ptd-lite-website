import { useEffect, useRef, useState } from "react";
import NavDesktop from "./nav/NavDesktop";
import NavbMobile from "./nav/NavMobile";

const Topbar = () => {
  const refList = useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isNestedOpen, setIsNestedOpen] = useState<boolean>(false);

  const [isNavMobileDisabled, setIsNavMobileDisabled] =
    useState<boolean>(false);

  const toggleNavbar = (arg: boolean | null) => {
    if (arg !== null) {
      setIsOpen(false);
    } else {
      setIsOpen((prev) => !prev);
    }
  };

  const toggleNestedNavbar = (arg: boolean | null) => {
    if (arg !== null) {
      setIsNestedOpen(false);
    } else {
      setIsNestedOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsNavMobileDisabled(window.matchMedia("(min-width: 840px)").matches);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="topbar">
      {!isNavMobileDisabled && (
        <NavbMobile
          refList={refList}
          isOpen={isOpen}
          toggleNavbar={toggleNavbar}
          isNestedOpen={isNestedOpen}
          toggleNestedNavbar={toggleNestedNavbar}
        />
      )}
      <NavDesktop
        isOpen={isOpen}
        toggleNavbar={toggleNavbar}
        isNestedOpen={isNestedOpen}
        toggleNestedNavbar={toggleNestedNavbar}
      />
    </div>
  );
};

export default Topbar;
