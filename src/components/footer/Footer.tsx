import logo from "/images/ptd_logo_medium.webp";
import style from "./footer.module.scss";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={style.footer}>
      <div className={style.wrapper}>
        <div className={style.leftSide}>
          <span className={style.logoWrapper}>
            <img src={logo} alt="PTD Logo" loading="lazy" />
          </span>
          <span className={style.rights}>
            &#169; {year} Wszelkie prawa zastrzeżone.
          </span>
          <span className={style.socials}>
            <a href="https://github.com/mateusz-uran" target="_blank">
              <div className={style.linkInner}>
                <FaGithub />
                <p>GitHub</p>
              </div>
            </a>
            <a href="mailto: ptdlite@gmail.com">
              <div className={style.linkInner}>
                <BiLogoGmail />
                <p>Gmail</p>
              </div>
            </a>
          </span>
        </div>
        <div className={style.rightSide}>
          <div className={style.column}>
            <h1>Nawigacja</h1>
            <ul>
              <li>
                <Link to={"/"}>Strona główna</Link>
              </li>
              <li>
                <Link to={"/funkcje"}>Funkcje</Link>
              </li>
              <li>
                <Link to={"/instrukcje"}>Jak to działa</Link>
              </li>
            </ul>
          </div>
          <div className={style.column}>
            <h1>Dokumentacja i kod źródłowy</h1>
            <ul>
              <li>
                <a
                  href="https://github.com/mateusz-uran/ptd-lite-mono/blob/master/README.md"
                  target="_blank"
                >
                  Dokumentacja
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mateusz-uran/ptd-lite-mono/tree/master"
                  target="_blank"
                >
                  Kod źródłowy
                </a>
              </li>
            </ul>
          </div>
          <div className={style.column}>
            <h1>Kontakt</h1>
            <ul>
              <li>
                <a href="https://github.com/mateusz-uran" target="_blank">
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto: ptdlite@gmail.com">Gmail</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
