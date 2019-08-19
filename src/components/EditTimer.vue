<template>
  <div>
    <div class="input-container" v-if="isEditing">
      <h4>Exercise</h4>
      <input type="text" v-model="time" />
      <h4>Rest</h4>
      <input type="text" v-model="timeRest" />
    </div>

    <div class="button-container">
      <button @click="save">
        <p v-if="!isEditing">Edit Timer</p>
        <p v-else>Save</p>
      </button>
      <button @click="isEditing = !isEditing" v-if="isEditing">X</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      isEditing: false
    };
  },
  computed: {
    ...mapGetters(['isOn'])
  },

  methods: {
    save(e) {
      this.isEditing = !this.isEditing;

      if (!this.isOn) {
        if (this.time != undefined) {
          this.$store.commit('updateTimer', this.time);
        }

        if (this.rest != undefined) {
          this.$store.commit('updateTimerRest', this.rest);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/main';

.button-container {
  display: flex;
  flex-flow: row nowrap;
  button {
    @extend .btn;
    p {
      margin: 0;
    }
  }
}

.input-container {
  display: flex;
  flex-flow: column nowrap;
  h4 {
    color: $contrast;
    margin: 0;
    text-align: center;
  }
  input {
    margin: 0 0 0.5rem 0;
    height: 1rem;
    text-align: center;
  }
}
</style>
