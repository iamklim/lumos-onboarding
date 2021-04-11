import SingleSelectQuestion from "../../single-select-question/single-select-question";
import { useStateValue } from "../../../state/state";

function Gender() {
  const [
    {
      quiz: { step },
    },
    dispatch,
  ] = useStateValue();

  const onClick = (newAge) => {
    dispatch({
      type: "setAge",
      newAge,
    });
    dispatch({
      type: "setStep",
      newStep: step + 1,
    });
  };

  return (
    <SingleSelectQuestion
      title="How do you identify?"
      subtitle="At times, we'll provide gender specific recommendations"
      answerOptions={[
        { title: "Woman", value: "woman" },
        { title: "Man", value: "man" },
        { title: "Non-binary", value: "nonBinary" },
      ]}
      onClick={onClick}
    />
  );
}

export default Gender;
