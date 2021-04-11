import Age from "./questions/age";
import Gender from "./questions/gender";
import Name from "./questions/name";
import WakeUp from "./questions/wake-up";
import LoaderOne from "./questions/loader-one";
import LoaderTwo from "./questions/loader-two";
import Email from "./questions/email";
import { useStateValue } from "../../state/state";

const STEP_TO_QUESTION_MAP = {
  1: <Name />,
  2: <Gender />,
  3: <Age />,
  4: <LoaderOne />,
  5: <WakeUp />,
  6: <LoaderTwo />,
  7: <Email />,
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
