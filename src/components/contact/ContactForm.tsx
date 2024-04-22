import { ReactNode, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import PrimaryButton from "../buttons/PrimaryButton";
import style from "./contact.module.scss";
import Snackbar from "../../Snackbar";
import { AnimationWrapper } from "../animations/AnimationWrapper";

const publicKey: string = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;
const serviceId: string = import.meta.env.VITE_EMAILJS_SERVICE_KEY as string;
const templateId: string = import.meta.env.VITE_EMAILJS_TEMPLATE_KEY as string;

type ContactFromProps = {
  header: string;
  children: ReactNode;
};

const ContactForm = ({ header, children }: ContactFromProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [messageStatus, setMessageStatus] = useState(false);

  useEffect(() => {
    emailjs.init(publicKey);
  }, []);

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, data);
      setMessageStatus(true);
      setShowSnackbar(true);
    } catch (error) {
      setMessageStatus(false);
      setShowSnackbar(true);
      console.log(error);
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <>
      <div className={style.contactForm}>
        <AnimationWrapper variantType="text" listIndex={1}>
          <h4>{header}</h4>
        </AnimationWrapper>
        <AnimationWrapper variantType="text" listIndex={1}>
          {children}
        </AnimationWrapper>
        <AnimationWrapper variantType="images" listIndex={1}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputWrapper">
              <div className="inputAndLabel">
                <input
                  id="name"
                  type="text"
                  {...register("from_name", { required: true })}
                  placeholder="Name"
                />
                <label htmlFor="name">Imię i nazwisko</label>
              </div>
              {errors.from_name && <span>Pole jest wymagane</span>}
            </div>
            <div className="inputWrapper">
              <div className="inputAndLabel">
                <input
                  id="email"
                  type="email"
                  {...register("from_email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  placeholder="Email"
                />
                <label htmlFor="email">Email</label>
              </div>
              {errors.from_email && errors.from_email.type === "required" && (
                <span>Pole jest wymagane</span>
              )}
              {errors.from_email && errors.from_email.type === "pattern" && (
                <span>Proszę wpisać prawidłowy adres email</span>
              )}
            </div>
            <div className="inputWrapper">
              <div className="inputAndLabel">
                <textarea
                  id="message"
                  {...register("message", { required: true, minLength: 5 })}
                  placeholder="Message"
                ></textarea>
                <label htmlFor="message">Wiadomość</label>
              </div>
              {errors.message && errors.message.type === "required" && (
                <span>Pole jest wymagane</span>
              )}
              {errors.message && errors.message.type === "minLength" && (
                <span>Wiadomość musi mieć co najmniej 5 znaków</span>
              )}
            </div>
            <PrimaryButton
              isDisabled={loading}
              onClickFunction={null}
              text="Wyślij"
            />
          </form>
        </AnimationWrapper>
      </div>
      <Snackbar
        isShowing={showSnackbar}
        setIsShowing={setShowSnackbar}
        messageStatus={messageStatus}
      />
    </>
  );
};

export default ContactForm;
