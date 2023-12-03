import { useNavigate, useRouteError } from "react-router-dom";
import { Button } from "../Button";

export function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }

  return (
    <div className="error-page">
      <div className="error-page__content">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Button onClick={handleClick}>Back</Button>
      </div>
    </div>
  );
}