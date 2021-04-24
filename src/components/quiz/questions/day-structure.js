import SingleSelectQuestion from "../../single-select-question/single-select-question";
import { useStateValue } from "../../../state/state";

function DayStructure() {
  const [
    {
      quiz: { step },
    },
    dispatch,
  ] = useStateValue();

  const onClick = (newDayStructure) => {
    dispatch({
      type: "setDayStructure",
      newDayStructure,
    });
    dispatch({
      type: "setStep",
      newStep: step + 1,
    });
  };

  return (
    <SingleSelectQuestion
      title="Last question: How often do you feel that your day is lacking structure?"
      answerOptions={[
        { title: "I have a good structure", value: "good", icon: "📋" },
        {
          title: "Sometimes. I'd like to improve my structure",
          value: "normal",
          icon: "📝",
        },
        {
          title: "I'm just going with the flow: no real structure",
          value: "bad",
          icon: "😭",
        },
      ]}
      onClick={onClick}
      eventName="quiz_day_structure"
    />
  );
}

export default DayStructure;
