import SingleSelectQuestion from "../../single-select-question/single-select-question";
import { useStateValue } from "../../../state/state";

function WorkSchedule() {
  const [
    {
      quiz: { step },
    },
    dispatch,
  ] = useStateValue();

  const onClick = (newWorkSchedule) => {
    dispatch({
      type: "setWorkSchedule",
      newWorkSchedule,
    });
    dispatch({
      type: "setStep",
      newStep: step + 1,
    });
  };

  return (
    <SingleSelectQuestion
      title="What’s your work schedule like?"
      answerOptions={[
        { title: "9 to 5", value: "common", icon: "☀️" },
        { title: "Night shifts", value: "night", icon: "🌒" },
        { title: "My hours are flexible", value: "flexible", icon: "💁" },
        { title: "I’m retired", value: "retired", icon: "🧓" },
      ]}
      onClick={onClick}
      eventName="quiz_work_schedule"
    />
  );
}

export default WorkSchedule;
