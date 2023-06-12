import { Helmet } from "react-helmet-async";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useEffect, useState } from "react";
import useAuth from "../../Components/Hooks/useAuth";
import './CheckOut.css'

// Todo publishable key
const stripePromise = loadStripe(import.meta.env.VITE_stripe_publish_key);
const Payment = () => {
  const { user } = useAuth();
  const [mySelectClasses, setMySelectClasses] = useState([]);

  const total = mySelectClasses.reduce((sum, item) => item.price + sum, 0);
  const totalPrice = parseFloat(total.toFixed(2));

  useEffect(() => {
    fetch(`http://localhost:5000/selectedClass/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMySelectClasses(data);
      });
  }, [user]);

  return (
    <div>
      <Helmet>
        {" "}
        <title>MindFull Heaven | Payment</title>{" "}
      </Helmet>
      <PageTitle heading={"Make Your Payment"}></PageTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm mySelectClasses={mySelectClasses} price={totalPrice}></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
