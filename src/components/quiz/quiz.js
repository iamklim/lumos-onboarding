import Age from "./questions/age";
import { useStateValue } from "../../state/state";
import Gender from "./questions/gender";

const STEP_TO_QUESTION_MAP = {
  1: <Gender />,
  2: <Age />,
};

function Quiz() {
  const [
    {
      quiz: { step },
    },
    ,
  ] = useStateValue();

  return <div className="quiz">{STEP_TO_QUESTION_MAP[step]}</div>;
}

export default Quiz;
