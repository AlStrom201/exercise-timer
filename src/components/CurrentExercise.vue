<template>
  <div class="current-exercise" v-if="firstOn">
    <h2 :class="{'highlight-two': rest && timeleft > 8}">{{ currentExercise }}</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['firstOn', 'rest', 'timeleft', 'current', 'exercises']),

    currentExercise() {
      if (
        this.rest &&
        this.timeleft < 9 &&
        this.exercises[this.current] !== undefined
      ) {
        return `Next: ${this.exercises[this.current]}`;
      } else if (this.rest) {
        return 'Rest';
      } else {
        return this.exercises[this.current];
      }
      return this.timeleft;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

