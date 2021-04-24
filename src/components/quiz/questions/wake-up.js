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
        { title: "7:00 AM", value: "7Am", icon: "🐦" },
        { title: "8:00 AM", value: "8Am", icon: "🕗" },
        { title: "9:00 AM", value: "9Am", icon: "⏰" },
        { title: "Other", value: "Other", icon: "😴" },
      ]}
      onClick={onClick}
      eventName="quiz_wake_up"
    />
  );
}

export default WakeUp;
