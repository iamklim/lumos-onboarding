import SingleSelectQuestion from "../../single-select-question/single-select-question";
import { useStateValue } from "../../../state/state";

function BadHabits() {
  const [
    {
      quiz: { step },
    },
    dispatch,
  ] = useStateValue();

  const onClick = (newBadHabits) => {
    dispatch({
      type: "setBadHabits",
      newBadHabits,
    });
    dispatch({
      type: "setStep",
      newStep: step + 1,
    });
  };

  return (
    <SingleSelectQuestion
      title="Which of the habits below most troubles you?"
      answerOptions={[
        { title: "Social Media", value: "socialMedia", icon: "📱" },
        { title: "Smoking", value: "smoking", icon: "🚬" },
        { title: "Sugar", value: "sugar", icon: "🍫" },
        { title: "Other", value: "other", icon: "🤷" },
      ]}
      onClick={onClick}
    />
  );
}

export default BadHabits;
