<script>
  let axios = require('axios');
  let Musixise = require('common/js/musixiseBridge');
  let req_config = {headers:{"Accept": "application/json","Content-Type": "application/json"}};
  let userInfo = {};

  var urlId = location.href.split('/').pop();
  if (isNaN(urlId)) {
    urlId = 40;
  }
  export default {
    components: {
      'my-tab':require('common/components/my-tab.vue'),
      'musixiser-intro':require('common/components/musixiser-intro.vue'),
      'musixiser-song-cell-list':require('common/components/musixiser-song-cell-list.vue')
    },
    data() {
      return {
        musixiserId:urlId,
        tabs:[{name:'work',content:'作品'},{name:'live',content:'收藏作品'}],
        musixiserInfo:{},
        songlist:[],
        collectlist:[]
      }
    },
    computed: {
      workObj: function() {
      }
    },
    methods: {
      renderPage(){

      }
    },
    created() {
      let self = this;
      Musixise.getUserInfo(function(res) {
        userInfo = res;
        console.log(userInfo);
        if (userInfo.idToken) {
            req_config.headers.Authorization = 'Bearer ' + userInfo.idToken;
        }

        //get musixiser info
        axios.post('//api.musixise.com/api/user/detail/' + self.musixiserId, '', req_config)
          .then(function(res) {
            self.musixiserInfo = res.data.data;
            Musixise.setTitle(self.musixiserInfo.realname+'的主页');
          })
          .catch(function(err) {

          });
        //get musixiser works
        axios.post('//api.musixise.com/api/work/getListByUid/' + self.musixiserId, '', req_config)
          .then(function(res) {
              self.songlist = res.data.data.content;
              console.log('--- songlist ---',self.songlist);
          })
          .catch(function(err) {

          });
      });
    },
    mounted() {
    },
    updated() {
    }
  };
</script>

<template>
  <div id="app">
    <musixiser-intro :musixiserInfo="musixiserInfo"></musixiser-intro>
    <my-tab :tabs="tabs">
      <div v-for="(tab,index) in tabs" :slot="tab.name">
        <musixiser-song-cell-list v-if="tab.name=='work'" :songlist="songlist"></musixiser-song-cell-list>
        <musixiser-song-cell-list v-if="tab.name=='live'" :songlist="songlist"></musixiser-song-cell-list>
      </div>
    </my-tab>
  </div>
</template>

<style lang="scss" scoped>
  @import '~common/style/_functions.scss';
  @import '~common/style/_variables.scss';
  @import '~common/style/_mixins.scss';


</style>
