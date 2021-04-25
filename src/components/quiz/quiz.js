import "./quiz.scss";
import Age from "./questions/age";
import Gender from "./questions/gender";
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
import WaterIntake from "./questions/water-intake";
import BadHabits from "./questions/bad-habits";
import Delays from "./questions/delays";
import DayStructure from "./questions/day-structure";
import CheckoutScreen from "./questions/checkout-screen";
import ThankYouScreen from "./questions/thank-you-screen";

const STEP_TO_QUESTION_MAP = {
  1: <Gender />,
  2: <WakeUp />,
  3: <Age />,
  4: <MainGoal />,
  5: <FocusOnPastOrFuture />,
  6: <Obstacles />,
  7: <FitnessLevel />,
  8: <WorkSchedule />,
  9: <WaterIntake />,
  10: <BadHabits />,
  11: <Delays />,
  12: <LoaderOne />,
  13: <DayStructure />,
  14: <LoaderTwo />,
  15: <Email />,
  16: <CheckoutScreen />,
  17: <ThankYouScreen />,
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
