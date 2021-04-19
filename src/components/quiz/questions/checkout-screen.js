import { useStateValue } from "../../../state/state";
import Checkout from "../../checkout/checkout";

function CheckoutScreen() {
  const [
    {
      quiz: { step },
    },
    dispatch,
  ] = useStateValue();

  const onPlanSelect = (newPlan) => {
    dispatch({
      type: "setPlan",
      newPlan,
    });
    dispatch({
      type: "setStep",
      newStep: step + 1,
    });
  };

  return <Checkout onPlanSelect={onPlanSelect} />;
}

export default CheckoutScreen;
