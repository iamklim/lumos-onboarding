import ProgressLoader from "../../progress-loader/progress-loader";
import { useStateValue } from "../../../state/state";

function LoaderOne() {
  const [
    {
      quiz: { step },
    },
    dispatch,
  ] = useStateValue();

  const onFinish = () => {
    dispatch({
      type: "setStep",
      newStep: step + 1,
    });
  };

  return <ProgressLoader start={0} finish={75} onFinish={onFinish} />;
}

export default LoaderOne;
