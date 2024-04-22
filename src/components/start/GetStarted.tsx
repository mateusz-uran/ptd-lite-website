import style from "./getStarted.module.scss";
import ContactForm from "../contact/ContactForm";
import PrimaryButton from "../buttons/PrimaryButton";

const GetStarted = () => {
  return (
    <section className={style.section}>
      <div className={style.content}>
        <div className={style.contactFormWrapper}>
          <ContactForm header="Chcesz zacząć korzystać z PTD?">
            <>
              <p className={style.loginParaf}>
                <span className={style.spanParaf}>Jeśli masz już konto</span>
                <PrimaryButton
                  text="ZALOGUJ SIĘ"
                  onClickFunction={null}
                  isDisabled={false}
                />
              </p>

              <p>
                Nowy użytkownik musi podać kilka informacji zanim będzie mógł
                używać aplikacji:
              </p>
              <ul>
                <li>aktualny email</li>
                <li>typ i model pojazdu oraz naczepy</li>
                <li>numery rejestracyjne pojazdu oraz naczepy</li>
                <li>pojemności zbiorników</li>
                <li>
                  opcjonalnie można dodać do karty zdjęcie zestawu oraz zdjęcie
                  danych firmy dla której karta jest tworzona
                </li>
              </ul>
              <p className={style.bottomParaf}>
                Aplikacja jest w pełni darmowa!
              </p>
            </>
          </ContactForm>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
