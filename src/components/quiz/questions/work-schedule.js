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
      title="Whatโs your work schedule like?"
      answerOptions={[
        { title: "9 to 5", value: "common", icon: "โ๏ธ" },
        { title: "Night shifts", value: "night", icon: "๐" },
        { title: "My hours are flexible", value: "flexible", icon: "๐" },
        { title: "Iโm retired", value: "retired", icon: "๐ง" },
      ]}
      onClick={onClick}
      eventName="quiz_work_schedule"
    />
  );
}

export default WorkSchedule;
