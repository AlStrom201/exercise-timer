<template>
    <div>
        <h1>Reps</h1>
        <h2 class="reps">{{ reps }}</h2>
    </div>
</template>


<script>
  export default {
      computed: {
        reps() {
            return this.$store.getters.reps;
        }
      }
  }

</script>


<style lang="sass">
  
</style>
