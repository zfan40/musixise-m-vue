<script>
  var axios = require('axios');
  var Musixise = require('common/js/musixiseBridge');
  var userInfo = {};
  var req_config = {headers:{}};
  export default {
    components: {
      'musixiser-song-cell':require('common/components/musixiser-song-cell.vue')
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
    <div>
      <musixiser-song-cell v-for="(song,index) in songlist" :workObj="song"></musixiser-song-cell>
    </div>
</template>

<style lang="scss" scoped>
  @import '~common/style/_functions.scss';
  @import '~common/style/_variables.scss';
  @import '~common/style/_mixins.scss';
  .info {
    display: flex;
    align-items:stretch;
    font-size: .373rem;
    line-height: .75rem;
    height: 2.2rem;
    border-radius: .2rem;
    justify-content: space-between;
    background-color: #fff;
    color: #000;
    /*margin: .4rem 0 .6rem;*/
    .work-cover {
      /*width:2.2rem;*/
      /*height: 2.2rem;*/
      width:2.2rem;
    }
    .work-body {
      // width: 6.8rem;
      width: 7.8rem;
      display:flex;
      flex-direction: column;
      justify-content:center;
      padding: 0 .3rem;
      .work-body-title {
        white-space: nowrap;
      }
      .work-body-desc {
        position:relative;
        white-space: nowrap;
        line-height: .8rem;
        height: .8rem;
        overflow:hidden;
        color:#3d3d3d;
        p {
          position:absolute;
/*           -webkit-animation:  marquee 3s linear 1s infinite;
           -o-animation:  marquee 3s linear 1s infinite;
           animation:  marquee 3s linear 1s infinite;*/
        }
      }
      @keyframes marquee {
          0% { left: 0; }
          50%{left: -100%;}
          100% { left: 100%; }
      }
    }
    .work-extra {
      width: 1rem;
    }
  }
</style>