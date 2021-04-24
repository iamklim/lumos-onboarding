import { useStateValue } from "../../../state/state";
import Checkout from "../../checkout/checkout";

function CheckoutScreen() {
  const [
    {
      quiz: { step },
    },
    dispatch,
  ] = useStateValue();

  const onSubmit = (newPlan) => {
    dispatch({
      type: "setPlan",
      newPlan,
    });
    dispatch({
      type: "setStep",
      newStep: step + 1,
    });
  };

  return <Checkout onSubmit={onSubmit} eventName="quiz_checkout" />;
}

export default CheckoutScreen;
