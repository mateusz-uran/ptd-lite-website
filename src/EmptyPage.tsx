import { SecondaryButton } from "./components/buttons/SecondaryButton";
import { useNavigate, useRouteError } from "react-router-dom";

type EmptyPageProps = {
  message: string;
};

const EmptyPage = ({ message }: EmptyPageProps) => {
  const error: any = useRouteError();
  const navigate = useNavigate();
  return (
    <section className="error-page-wrapper">
      <div className="error-page">
        <h3>{message}</h3>
        {error && <i>{error.statusText || error.message}</i>}
        <img src="/images/empty.jpg" alt="" />
        <SecondaryButton task={() => navigate(-1)}>
          <span>Wróć</span>
        </SecondaryButton>
      </div>
    </section>
  );
};

export default EmptyPage;
