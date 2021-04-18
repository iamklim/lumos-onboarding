import "./quiz.scss";
import Age from "./questions/age";
import Gender from "./questions/gender";
import Name from "./questions/name";
import WakeUp from "./questions/wake-up";
import LoaderOne from "./questions/loader-one";
import LoaderTwo from "./questions/loader-two";
import Email from "./questions/email";
import { useStateValue } from "../../state/state";
import MainGoal from "./questions/main-goal";
import FocusOnPastOrFuture from "./questions/focus-on-past-or-future";
import Obstacles from "./questions/obstacles";
import FitnessLevel from "./questions/fitness-level";
import WorkSchedule from "./questions/work-schedule";
import SleepQuality from "./questions/sleep-quality";
import WaterIntake from "./questions/water-intake";
import BadHabits from "./questions/bad-habits";
import Delays from "./questions/delays";
import DayStructure from "./questions/day-structure";
import CheckoutQuestion from "./questions/checkout";

const STEP_TO_QUESTION_MAP = {
  1: <Gender />,
  2: <WakeUp />,
  3: <Age />,
  4: <Name />,
  5: <MainGoal />,
  6: <FocusOnPastOrFuture />,
  7: <Obstacles />,
  8: <FitnessLevel />,
  9: <WorkSchedule />,
  10: <SleepQuality />,
  11: <WaterIntake />,
  12: <BadHabits />,
  13: <Delays />,
  14: <LoaderOne />,
  15: <DayStructure />,
  16: <LoaderTwo />,
  17: <Email />,
  18: <CheckoutQuestion />,
};

function Quiz() {
  const [
    {
      quiz: { step },
    },
    ,
  ] = useStateValue();

  const isCheckout = step === 18;

  return (
    <div className={isCheckout ? "quizCheckout" : "quizQuestion"}>
      <div className="container">{STEP_TO_QUESTION_MAP[step]} </div>
    </div>
  );
}

export default Quiz;
