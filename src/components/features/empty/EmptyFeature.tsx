import { SecondaryButton } from "../../buttons/SecondaryButton";
import style from "./emptyFeature.module.scss";
import { useNavigate } from "react-router-dom";

const EmptyFeature = () => {
  const navigate = useNavigate();

  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        <h3>
          Ups! Niestety, ale nie ma informacji do tej funkcji, wróć proszę na
          poprzednią stronę.
        </h3>
        <img src="/images/empty.jpg" alt="" />
        <SecondaryButton task={() => navigate(-1)}>
          <span>Wróć</span>
        </SecondaryButton>
      </div>
    </section>
  );
};

export default EmptyFeature;
