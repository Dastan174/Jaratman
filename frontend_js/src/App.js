import React from "react";
import "@fontsource-variable/inter";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import MyRoutes from "./routes/MyRoutes";

const stripePromise = loadStripe(
  "pk_test_51OwgQPIxm5X1vTxbE1Zf6NDFEFmH9LgoSWy4ORnPQ5hkQHBxgETJnjHRXnGiKzRXld7vCOOai7mMW5Eupxl6Imh000mOHkjqDO"
);

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <MyRoutes />
    </Elements>
  );
};

export default App;
