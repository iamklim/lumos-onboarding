import SingleSelectQuestion from "../../single-select-question/single-select-question";
import { useStateValue } from "../../../state/state";

function WaterIntake() {
  const [
    {
      quiz: { step },
    },
    dispatch,
  ] = useStateValue();

  const onClick = (newWaterIntake) => {
    dispatch({
      type: "setWaterIntake",
      newWaterIntake,
    });
    dispatch({
      type: "setStep",
      newStep: step + 1,
    });
  };

  return (
    <SingleSelectQuestion
      title="What's your daily water intake?"
      answerOptions={[
        { title: "I only have coffee or tea", value: "minimal", icon: "☕" },
        { title: "About 2 glasses (16 oz)", value: "low", icon: "✌️" },
        { title: "2 to 6 glasses (16-48 oz)", value: "normal", icon: "👌" },
        { title: "More than 6 glasses", value: "high", icon: "🤘" },
      ]}
      onClick={onClick}
      eventName="quiz_water_intake"
    />
  );
}

export default WaterIntake;
