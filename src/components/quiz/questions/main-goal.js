import SingleSelectQuestion from "../../single-select-question/single-select-question";
import { useStateValue } from "../../../state/state";

function MainGoal() {
  const [
    {
      quiz: { step },
    },
    dispatch,
  ] = useStateValue();

  const onClick = (newMainGoal) => {
    dispatch({
      type: "setMainGoal",
      newMainGoal,
    });
    dispatch({
      type: "setStep",
      newStep: step + 1,
    });
  };

  return (
    <SingleSelectQuestion
      title="What single change would improve your life right now?"
      answerOptions={[
        { title: "More energy", value: "energy", icon: "🔋" },
        { title: "More strength", value: "strength", icon: "💪" },
        { title: "More focus", value: "focus", icon: "👁️" },
        { title: "More calm", value: "calm", icon: "😌" },
      ]}
      onClick={onClick}
      eventName="quiz_main_goal"
    />
  );
}

export default MainGoal;
