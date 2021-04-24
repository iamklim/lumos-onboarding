import { useStateValue } from "../../../state/state";
import InputQuestion from "../../input-question/input-question";

function Name() {
  const [
    {
      quiz: { step },
    },
    dispatch,
  ] = useStateValue();

  const onSubmit = (newName) => {
    dispatch({
      type: "setName",
      newName,
    });
    dispatch({
      type: "setStep",
      newStep: step + 1,
    });
  };

  return (
    <InputQuestion
      title="Share your name so we can personalize your plan"
      onSubmit={onSubmit}
      eventName="quiz_name"
    />
  );
}

export default Name;
