import ProgressLoader from "../../progress-loader/progress-loader";
import { useStateValue } from "../../../state/state";

function LoaderTwo() {
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

  return (
    <ProgressLoader
      start={75}
      finish={100}
      onFinish={onFinish}
      eventName="quiz_loader_two"
    />
  );
}

export default LoaderTwo;
