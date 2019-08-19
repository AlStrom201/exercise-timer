const actions = {
  run: ({
    commit,
    state
  }) => {
    state.firstOn = true;
    state.isOn = true;
    state.timer = setInterval(() => {
      commit('countdown')
    }, 1000)
  },
  stop: ({
    state
  }) => {
    clearInterval(state.timer)
    state.timer = undefined;
    state.isOn = false;
  }
}

export default actions;
