import SingleSelectQuestion from "../../single-select-question/single-select-question";
import { useStateValue } from "../../../state/state";

function FitnessLevel() {
  const [
    {
      quiz: { step },
    },
    dispatch,
  ] = useStateValue();

  const onClick = (newFitnessLevel) => {
    dispatch({
      type: "setFitnessLevel",
      newFitnessLevel,
    });
    dispatch({
      type: "setStep",
      newStep: step + 1,
    });
  };

  return (
    <SingleSelectQuestion
      title="How often do you exercise or play sports?"
      answerOptions={[
        { title: "3 to 5 times a week", value: "3_5", icon: "🏅" },
        { title: "1 to 2 workouts a week", value: "1_2", icon: "👟" },
        { title: "I’m just getting in the groove", value: "rare", icon: "🦥" },
      ]}
      onClick={onClick}
      eventName="quiz_fitness_level"
    />
  );
}

export default FitnessLevel;
