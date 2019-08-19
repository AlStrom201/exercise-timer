<template>
  <div>
    <h1 :class="{rest: rest}">{{ timeleft }}</h1>
    <br />
    <button @click="run" class="button" v-if="!isOn">{{ buttonText }}</button>
    <button @click="stop" class="button" v-if="isOn">{{ buttonText }}</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isOn', 'timeleft', 'rest']),

    buttonText() {
      return this.$store.state.timer.isOn ? 'Stop' : 'Start';
    }
  },
  methods: {
    ...mapActions(['run', 'stop'])
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/main';

div {
  text-align: center;
  display: flex;
}
h1 {
  text-align: center;
  font-size: 254px;
  margin: 0;
}

.rest {
  color: -rgb(0, 0, 0);
}

h2 {
  font-size: 64px;
}

button {
  @extend .btn;
  align-self: flex-end;
  position: absolute;
}
</style>
