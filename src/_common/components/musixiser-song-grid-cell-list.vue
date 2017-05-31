<script>
  var axios = require('axios');
  var Musixise = require('common/js/musixiseBridge');
  var userInfo = {};
  var req_config = {headers:{"Accept": "application/json","Content-Type": "application/json"}};
  export default {
    components: {
      'musixiser-song-grid-cell':require('common/components/musixiser-song-grid-cell.vue'),
      'musixiser-empty':require('./musixiser-empty.vue')
    },
    props: {
      songlist:{
        type:Array,
        default:function(){return[]}
      }
    },
    data() {
      return {
        title: 'musixiser-song-cell-list',
      }
    },
    methods: {
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
    <div class="grid-cell-list">
      <musixiser-song-grid-cell v-if="songlist && songlist.length" v-for="(song,index) in songlist" :workObj="song"></musixiser-song-grid-cell>
      <musixiser-empty v-if="!songlist || !songlist.length"></musixiser-empty>
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
