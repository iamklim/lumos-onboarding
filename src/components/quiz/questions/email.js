import { useStateValue } from "../../../state/state";
import InputQuestion from "../../input-question/input-question";

function TitleText() {
  return (
    <>
      We're building <b>LUMOS</b> - a mobile app which helps getting{" "}
      <b>sticky habits</b> and transforming <b>your behavior</b> for the better
    </>
  );
}

function SubtitleText() {
  return (
    <>
      Please share your email to receive app with <b>50% discount</b> and your
      custom plan
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
      subtitle={<SubtitleText />}
      onSubmit={onSubmit}
      inputType="email"
    />
  );
}

export default Email;
