const mutations = {
  countdown: function (state) {
    if (state.timeleft > 1) {
      state.timeleft--;
    } else if (!state.rest && state.timeleft === 1) {
      state.timeleft = state.restTime;
      state.rest = !state.rest;
      state.reps += 1;
      if ((state.current + 1) > (state.exercises.length - 1)) {
        state.current = 0;
      } else {
        state.current++;
      }
      state.ding.play();
    } else {
      state.timeleft = state.timeTime;
      state.rest = !state.rest;
      state.ding.play();
    }
  },


  addExercise: (state, exercise) => {
    state.exercises.push(exercise);
  },
  removeExercise: (state, exercise) => {
    let index = state.exercises.indexOf(exercise);
    if (index > -1) {
      state.exercises.splice(index, 1);
    }
  },
  replaceExercises: (state, exercises) => {
    state.exercises = exercises;
  },


  updateTimer(state, payload) {
    if (!state.rest) {
      state.timeleft = payload;
    }
    state.timeTime = payload;
  },
  updateTimerRest(state, payload) {
    state.restTime = payload;
  },


}

export default mutations;
