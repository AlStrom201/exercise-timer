<template>
  <div class="app">
    <app-edit-timer class="edit-timer"></app-edit-timer>
    <app-timer class="timer"></app-timer>
    <app-reps class="reps"></app-reps>

    <div class="exercises-container">
      <app-exercises class="exercises"></app-exercises>
    </div>

    <app-current class="current-exercise"></app-current>
  </div>
</template>

<script>
import Timer from './components/Timer';
import Reps from './components/Reps';
import Exercises from './components/Exercises';
import CurrentExercise from './components/CurrentExercise';
import EditTimer from './components/EditTimer';

export default {
  components: {
    appTimer: Timer,
    appCurrent: CurrentExercise,
    appReps: Reps,
    appExercises: Exercises,
    appEditTimer: EditTimer
  }
};
</script>

<style lang="scss">
@import 'scss/main';

.app {
  height: 100vh;
  background: $main;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 25% 50% 25%;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
}

.edit-timer {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;
}

.timer {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $contrast;
  width: 100%;
}

.button-container {
  grid-row: 3 / 4;
  grid-column: 2 / 3;
  display: flex;
  justify-content: flex;
  align-items: flex-start;
}

.reps {
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  h1 {
    color: $contrast;
  }
  h2 {
    font-size: 128px;
    color: $contrast;
  }
}

.exercises-container {
  grid-column: 1 / 2;
  grid-row: 1 / 4;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  h1 {
    color: $contrast;
  }
}

.current-exercise {
  grid-column: 1 / 4;
  grid-row: 3 / 4;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 64px;
}

h2 {
  margin: 0;
  color: $highlight;
}

.highlight-two {
  color: $highlight2;
}
</style>

