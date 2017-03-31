<script>
  export default {
    data() {
      return {
        title: 'HELLO Vue~!'
      }
    },
    methods: {
      load() {
      }
    },
    created() {
    },
    mounted() {
    },
    updated() {
    }
  };
</script>

<template>
  <div id="app">
    <h2>
      {{title}}
    </h2>
  </div>
</template>

<style lang="scss" scoped>
  @import '~common/style/_functions.scss';
  @import '~common/style/_variables.scss';
  @import '~common/style/_mixins.scss';

  h2 {
    font-size: 20px;
    color: #2c3e50;
  }
</style>