import axios from "axios";
import { url } from "../slices/api";
import { useSelector } from "react-redux";

const PayButton = ({ cartItems }) => {
  const user = useSelector((state) => state?.auth);
  const handleCheckOut = () => {
    console.log(cartItems);
    axios
      .post(`${url}/stripe/create-checkout-session`, {
        cartItems,
        user: user?._id,
      })
      .then((res) => {
        if (res?.data?.url) {
          window.location.href = res?.data?.url;
        }
      });
  };
  return (
    <div>
      <button onClick={() => handleCheckOut()}>Check out</button>
    </div>
  );
};

export default PayButton;
