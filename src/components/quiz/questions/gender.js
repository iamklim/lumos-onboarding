import SingleSelectQuestion from "../../single-select-question/single-select-question";
import { useStateValue } from "../../../state/state";

function Gender() {
  const [
    {
      quiz: { step },
    },
    dispatch,
  ] = useStateValue();

  const onClick = (newGender) => {
    dispatch({
      type: "setGender",
      newGender,
    });
    dispatch({
      type: "setStep",
      newStep: step + 1,
    });
  };

  return (
    <SingleSelectQuestion
      title="How do you identify?"
      subtitle="We may provide gender specific recommendations"
      answerOptions={[
        { title: "Woman", value: "woman", icon: "👩" },
        { title: "Man", value: "man", icon: "👨" },
        { title: "Non-binary", value: "nonBinary", icon: "🧑" },
      ]}
      onClick={onClick}
      eventName="quiz_gender"
    />
  );
}

export default Gender;
