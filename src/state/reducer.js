const reducer = (state, action) => {
  switch (action.type) {
    case "setStep":
      return {
        ...state,
        quiz: { ...state.quiz, step: action.newStep },
      };
    case "setGender":
      return {
        ...state,
        quiz: { ...state.quiz, gender: action.newGender },
      };
    case "setWakeUp":
      return {
        ...state,
        quiz: { ...state.quiz, wakeUp: action.newWakeUp },
      };
    case "setAge":
      return {
        ...state,
        quiz: { ...state.quiz, age: action.newAge },
      };
    case "setName":
      return {
        ...state,
        quiz: { ...state.quiz, name: action.newName },
      };
    case "setMainGoal":
      return {
        ...state,
        quiz: { ...state.quiz, mainGoal: action.newMainGoal },
      };
    case "setFocusOnPastOrFuture":
      return {
        ...state,
        quiz: {
          ...state.quiz,
          focusOnPastOrFuture: action.newFocusOnPastOrFuture,
        },
      };
    case "setObstacles":
      return {
        ...state,
        quiz: { ...state.quiz, obstacles: action.newObstacles },
      };
    case "setFitnessLevel":
      return {
        ...state,
        quiz: { ...state.quiz, fitnessLevel: action.newFitnessLevel },
      };
    case "setWorkSchedule":
      return {
        ...state,
        quiz: { ...state.quiz, workSchedule: action.newWorkSchedule },
      };
    case "setSleepQuality":
      return {
        ...state,
        quiz: { ...state.quiz, sleepQuality: action.newSleepQuality },
      };
    case "setWaterIntake":
      return {
        ...state,
        quiz: { ...state.quiz, waterIntake: action.newWaterIntake },
      };
    case "setBadHabits":
      return {
        ...state,
        quiz: { ...state.quiz, badHabits: action.newBadHabits },
      };
    case "setDelays":
      return {
        ...state,
        quiz: { ...state.quiz, delays: action.newDelays },
      };
    case "setDayStructure":
      return {
        ...state,
        quiz: { ...state.quiz, dayStructure: action.newDayStructure },
      };
    case "setEmail":
      return {
        ...state,
        quiz: { ...state.quiz, email: action.newEmail },
      };

    default:
      return state;
  }
};

export default reducer;
