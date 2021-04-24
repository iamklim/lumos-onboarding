import SingleSelectQuestion from "../../single-select-question/single-select-question";
import { useStateValue } from "../../../state/state";

function SleepQuality() {
  const [
    {
      quiz: { step },
    },
    dispatch,
  ] = useStateValue();

  const onClick = (newSleepQuality) => {
    dispatch({
      type: "setSleepQuality",
      newSleepQuality,
    });
    dispatch({
      type: "setStep",
      newStep: step + 1,
    });
  };

  return (
    <SingleSelectQuestion
      title="What's your average night like?"
      subtitle="Please be honest"
      answerOptions={[
        {
          title: "Minimal rest (less than 5 hours)",
          value: "minimal",
          icon: "😴",
        },
        { title: "I get some shut-eye (5-6 hours)", value: "low", icon: "🛌" },
        {
          title: "I sleep long and well (7-8 hours)",
          value: "normal",
          icon: "💤",
        },
        {
          title: "I'm a sleep superhero (more than 8 hours)",
          value: "high",
          icon: "🦸",
        },
      ]}
      onClick={onClick}
      eventName="quiz_sleep_quality"
    />
  );
}

export default SleepQuality;
