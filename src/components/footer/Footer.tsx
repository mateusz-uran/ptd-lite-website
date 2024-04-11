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
            <img src={"/images/logo_ptd3.png"} alt="PTD Logo" />
          </span>
          <span className={style.rights}>
            &#169; {year} Wszelkie prawa zastrzeżone.
          </span>
          <span className={style.socials}>
            <a href="https://github.com/mateusz-uran" target="_blank">
              <FaGithub />
            </a>
            <a href="mailto: ptdlite@gmail.com">
              <BiLogoGmail />
            </a>
          </span>
        </div>
        <div className={style.rightSide}>
          <div className={style.column}>
            <h5>Nawigacja</h5>
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
            <h5>Dokumentacja i kod źródłowy</h5>
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
            <h5>Kontakt</h5>
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
