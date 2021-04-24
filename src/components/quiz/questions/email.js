import { useStateValue } from "../../../state/state";
import InputQuestion from "../../input-question/input-question";

function TitleText() {
  return (
    <>
      Please share email to receive your <b>personal plan</b> on how to get
      sticky habits
    </>
  );
}

function Email() {
  const [
    {
      quiz: { step },
    },
    dispatch,
  ] = useStateValue();

  const onSubmit = (newEmail) => {
    dispatch({
      type: "setEmail",
      newEmail,
    });
    dispatch({
      type: "setStep",
      newStep: step + 1,
    });
  };

  return (
    <InputQuestion
      title={<TitleText />}
      subtitle="✔ no spam, we promise"
      onSubmit={onSubmit}
      inputType="email"
      eventName="quiz_email"
    />
  );
}

export default Email;
