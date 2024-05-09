import { AnimationWrapper } from "../animations/AnimationWrapper";
import style from "./contact.module.scss";
import ContactForm from "./ContactForm";
import mobile from "/images/dash-mobile-portrait.webp";

const Contact = () => {
  return (
    <section className={style.section}>
      <div className={style.content}>
        <div className={style.mobile}>
          <AnimationWrapper variantType="text" listIndex={1}>
            <img src={mobile} alt="mobile-portrait" loading="lazy" />
          </AnimationWrapper>
        </div>
        <ContactForm header="Masz pytania?">
          <p>
            Zapraszam do kontaktu, postaraj się dokładnie przedstawić swoje
            stanowisko.
          </p>
        </ContactForm>
      </div>
    </section>
  );
};

export default Contact;
