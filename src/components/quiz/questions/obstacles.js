import SingleSelectQuestion from "../../single-select-question/single-select-question";
import { useStateValue } from "../../../state/state";

function Obstacles() {
  const [
    {
      quiz: { step },
    },
    dispatch,
  ] = useStateValue();

  const onClick = (newObstacles) => {
    dispatch({
      type: "setObstacles",
      newObstacles,
    });
    dispatch({
      type: "setStep",
      newStep: step + 1,
    });
  };

  return (
    <SingleSelectQuestion
      title="Who gets in the way of what you want?"
      answerOptions={[
        { title: "My family", value: "family", icon: "👪" },
        { title: "My friends", value: "friends", icon: "👫" },
        { title: "My boss or coworkers", value: "work", icon: "👔" },
        { title: "Myself", value: "myself", icon: "🙋" },
      ]}
      onClick={onClick}
    />
  );
}

export default Obstacles;
