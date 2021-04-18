import SingleSelectQuestion from "../../single-select-question/single-select-question";
import { useStateValue } from "../../../state/state";

function Age() {
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
      title="How old are you?"
      subtitle="We’ll personalize recommendations based on your selection"
      answerOptions={[
        { title: "18 - 24", value: "18_24" },
        { title: "25 - 34", value: "25_34" },
        { title: "35 - 44", value: "35_44" },
        { title: "45+", value: "45+" },
      ]}
      onClick={onClick}
    />
  );
}

export default Age;
