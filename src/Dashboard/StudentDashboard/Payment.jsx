import { Helmet } from "react-helmet-async";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useEffect, useState } from "react";
import useAuth from "../../Components/Hooks/useAuth";
import './CheckOut.css'
import { useParams } from "react-router-dom";

// Todo publishable key
const stripePromise = loadStripe(import.meta.env.VITE_stripe_publish_key);
const Payment = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [mySelectClasses, setMySelectClasses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/selectedClass/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMySelectClasses(data);
      });
  }, [user]);
  const classPayment = mySelectClasses.find((c) => c._id==id);

  return (
    <div>
      <Helmet>
        {" "}
        <title>MindFull Heaven | Payment</title>{" "}
      </Helmet>
      <PageTitle heading={"Make Your Payment"}></PageTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm classPayment={classPayment}></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
