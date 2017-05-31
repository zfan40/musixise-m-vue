<script>
  var axios = require('axios');
  var Musixise = require('common/js/musixiseBridge');
  var userInfo = {};
  var req_config = {headers:{"Accept": "application/json","Content-Type": "application/json"}};
  export default {
    components: {
      'musixiser-grid-cell':require('common/components/musixiser-grid-cell.vue')
    },
    props: {
      musixiserlist:{
        type:Array,
        default:function(){return[]}
      }
    },
    data() {
      return {
        title: 'musixiser-grid-cell-list',
      }
    },
    methods: {
    },
    created() {
      // console.log(this.musixiserlist);
    },
    mounted() {
    },
    updated() {
      // console.log(this.musixiserlist);
    }
  };
</script>

<template>
    <div class="grid-cell-list">
      <musixiser-grid-cell v-for="(musixiser,index) in musixiserlist" :musixiserObj="musixiser"></musixiser-grid-cell>
    </div>
</template>

<style lang="scss" scoped>
  @import '~common/style/_functions.scss';
  @import '~common/style/_variables.scss';
  @import '~common/style/_mixins.scss';
  .grid-cell-list {
    display:flex;
    flex-wrap:wrap;
    /*justify-content:space-around;*/
    margin:0 .5rem;
  }

</style>
