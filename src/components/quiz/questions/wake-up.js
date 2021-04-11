import SingleSelectQuestion from "../../single-select-question/single-select-question";
import { useStateValue } from "../../../state/state";

function WakeUp() {
  const [
    {
      quiz: { step },
    },
    dispatch,
  ] = useStateValue();

  const onClick = (newWakeUp) => {
    dispatch({
      type: "setWakeUp",
      newWakeUp,
    });
    dispatch({
      type: "setStep",
      newStep: step + 1,
    });
  };

  return (
    <SingleSelectQuestion
      title="When do you wake up generally?"
      answerOptions={[
        { title: "7:00 AM", value: "7Am" },
        { title: "8:00 AM", value: "8Am" },
        { title: "9:00 AM", value: "9Am" },
        { title: "10:00 AM or later", value: "10AmOrLater" },
      ]}
      onClick={onClick}
    />
  );
}

export default WakeUp;
