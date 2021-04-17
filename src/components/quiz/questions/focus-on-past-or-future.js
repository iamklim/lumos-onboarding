import SingleSelectQuestion from "../../single-select-question/single-select-question";
import { useStateValue } from "../../../state/state";

function FocusOnPastOrFuture() {
  const [
    {
      quiz: { step },
    },
    dispatch,
  ] = useStateValue();

  const onClick = (newFocusOnPastOrFuture) => {
    dispatch({
      type: "setFocusOnPastOrFuture",
      newFocusOnPastOrFuture,
    });
    dispatch({
      type: "setStep",
      newStep: step + 1,
    });
  };

  return (
    <SingleSelectQuestion
      title="How often do you focus on the past or future?"
      answerOptions={[
        { title: "Never - I live in the present", value: "never", icon: "😌" },
        { title: "Some of the time", value: "sometimes", icon: "💭" },
        { title: "Most of the time", value: "often", icon: "🤔" },
        { title: "All of the time", value: "always", icon: "🔭" },
      ]}
      onClick={onClick}
    />
  );
}

export default FocusOnPastOrFuture;
