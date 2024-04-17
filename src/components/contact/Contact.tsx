import style from "./contact.module.scss";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className={style.section}>
      <div className={style.content}>
        <div className={style.mobile}>
          <img src="/images/dash mobile-portrait.png" />
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
