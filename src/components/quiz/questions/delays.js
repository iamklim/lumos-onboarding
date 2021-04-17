import SingleSelectQuestion from "../../single-select-question/single-select-question";
import { useStateValue } from "../../../state/state";

function Delays() {
  const [
    {
      quiz: { step },
    },
    dispatch,
  ] = useStateValue();

  const onClick = (newDelays) => {
    dispatch({
      type: "setDelays",
      newDelays,
    });
    dispatch({
      type: "setStep",
      newStep: step + 1,
    });
  };

  return (
    <SingleSelectQuestion
      title="How often do you delay what you know you should do?"
      answerOptions={[
        { title: "Almost always", value: "always", icon: "⌛" },
        { title: "Sometimes", value: "sometimes", icon: "⏳" },
        { title: "Almost never", value: "never", icon: "⏱️" },
      ]}
      onClick={onClick}
    />
  );
}

export default Delays;
