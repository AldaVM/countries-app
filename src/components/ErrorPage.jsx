import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred</p>
      <p>
        <code>{error.statusText || error.message}</code>
      </p>
    </div>
  );
};

export default ErrorPage;
