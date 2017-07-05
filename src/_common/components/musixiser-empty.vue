<script>
  export default {
    props: {
      emptySetting:{
        type:Object,
        default:function(){
          return {}
        }
      }
    },
    data() {
      return {
        title: 'musixiser-empty-view',
      }
    },
    methods: {
      onClick() {
        let self = this;
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
  <div class="empty-section">
    <img src="http://placehold.it/350x350" alt="">
    <!-- <p>没tm东西啊</p> -->
  </div>
</template>

<style lang="scss" scoped>
  @import '~common/style/_functions.scss';
  @import '~common/style/_variables.scss';
  @import '~common/style/_mixins.scss';

  .empty-section {
    text-align: center;
    img {
      margin-top: 2rem;
      width:5rem;
    }
    p {
      font-size:.4rem;
    }
  }

</style>
