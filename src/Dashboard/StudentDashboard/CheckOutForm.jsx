import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { ToastContainer, toast } from "react-toastify";
import useAuth from "../../Components/Hooks/useAuth";
import { useState } from "react";
import { useEffect } from "react";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const CheckOutForm = ({ classPayment }) => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  console.log(classPayment);
  // const price = classPayment.price;
  const price = classPayment?.price;

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      toast(error.message);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("payment method", paymentMethod);
    }

    setProcessing(true);
    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Unknown",
            email: user?.email || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    console.log(paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // payment information save on database
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        classesId: classPayment?._id,
        className: classPayment?.className,
        status: "servicePending",
        instructorName: classPayment?.instructorName,
        classPhoto: classPayment.classPhoto,
        payUser: classPayment.email,
        instructorEmail: classPayment.instructorEmail,
        availableSeats: classPayment.availableSeats
      };
      axiosSecure.post("/payments", payment).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Payment Successful!!!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
      axiosSecure.delete("/payments", payment).then((res) => {
        if (res.data.deletedCount) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Selected Classes empty now!!!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };

  return (
    <div>
      <form className="w-2/3 mx-20" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        {cardError && <p className="text-red-600 mt-5">{cardError}</p>}
        {transactionId && (
          <p className="text-green-500 mt-5">
            Transaction complete with transactionId:{" "}
            <span className="text-orange-600">{transactionId}</span>
          </p>
        )}
        <button
          className="text-2xl text-bold hover:bg-[#19a10d] px-5 bg-[#0A5403] p-2 rounded text-white mt-5"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
        <ToastContainer></ToastContainer>
      </form>
    </div>
  );
};

export default CheckOutForm;
