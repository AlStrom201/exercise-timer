<template>
  <div class="exercises">
    <h1 class="header">Exercises</h1>

    <ol>
      <li
        :key="exercise"
        v-for="(exercise, index) in exercises"
        :class="{'active-exercise': checkIfActive(index) && firstOn}"
        @click="removeExercise(exercise)"
      >{{ exercise }}</li>
    </ol>

    <button
      @mouseover="showBtn = true"
      @mouseleave="showBtn = false"
      @click="showAdd = !showAdd"
      v-if="!showAdd"
      class="add-btn"
    >
      <p v-if="showBtn && !showAdd">Add New Exercise</p>
      <i class="fa fa-plus" aria-hidden="true" v-if="!showAdd"></i>
    </button>

    <div class="new-content-container" v-if="showAdd">
      <button @click="switchButton">
        <p v-if="showBtn && !showAdd">Add New Exercise</p>
        <p style="margin: 0; font-weight: 800; font-size: 18px">x</p>
      </button>

      <input type="text" v-model="newExercise" @keyup.enter="submit" />
      <input type="submit" value="Add" @click.prevent="submit" :disabled="newExercise == ''" />
    </div>

    <div class="config-container">
      <button class="config-btn" @click="saveExercises" v-if="exercises.length > 0">Save Config</button>
      <button class="config-btn" @click="loadConfig">Load Config</button>
    </div>

    <h4 class="tip" v-if="exercises[0] != null">Tip: To delete an exercise, just click it.</h4>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      showBtn: false,
      showAdd: false,
      newExercise: ''
    };
  },
  computed: {
    ...mapGetters(['isOn', 'exercises', 'firstOn'])
  },
  methods: {
    ...mapMutations(['addExercise', 'removeExercise', 'replaceExercises']),

    checkIfActive: function(index) {
      return this.$store.state.timer.current === index;
    },
    submit() {
      if (this.newExercise !== '') {
        this.addExercise(this.newExercise);
        this.newExercise = '';
      } else {
        return;
      }
    },
    switchButton() {
      this.showBtn = !this.showBtn;
      this.showAdd = !this.showAdd;
    },
    saveExercises() {
      localStorage.setItem('exercises', JSON.stringify(this.exercises));
    },
    loadConfig: function() {
      this.replaceExercises(JSON.parse(localStorage.getItem('exercises')));
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/main';

.exercises {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}

h1 {
  margin-right: 0.5rem;
  margin-top: 0;
}
.add-btn {
  @extend .btn;
  width: 2rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @include usb-transition(width 0.2s);
  margin-bottom: 1rem;
  i {
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
    padding: 0;
    white-space: nowrap;
  }
}
.add-btn:hover {
  width: 13rem;
}

ol {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  margin: 0 0 0.5rem 0;
  padding: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  max-height: 30vh;
  overflow: auto;
  font-size: 24px;
  width: 100%;
  li {
    cursor: pointer;
    list-style: none;
    color: $contrast;
    display: block;
  }
}

.active-exercise {
  color: $highlight;
}

.new-content-container {
  width: 22rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  button {
    @extend .btn;
    margin: 0;
  }

  input[type='submit'] {
    @extend .btn;
    text-align: center;
    height: 2.5rem;
  }

  input[type='text'] {
    text-align: center;
    background: $contrast;
    border-color: $contrast;
    font-size: 18px;
  }
}

.config-container {
  display: flex;
  justify-content: space-around;
  .config-btn {
    @extend .btn;
    margin: 0 1rem;
  }
}

.tip {
  color: $highlight2;
}
</style>
