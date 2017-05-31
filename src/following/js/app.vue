<script>
  let axios = require('axios');
  let Musixise = require('common/js/musixiseBridge');
  let req_config = {headers:{"Accept": "application/json","Content-Type": "application/json"}};
  var urlId = location.href.split('/').pop();
  if (isNaN(urlId)) {
    urlId = 40;
  }
  export default {
    components: {
      'musixiser-min-cell-list':require('common/components/musixiser-min-cell-list.vue'),
    },
    data() {
      return {
        musixiserId:0,
        followinglist:[]
      }
    },
    computed: {},
    methods: {},
    created() {
      let self = this;
      self.musixiserId = urlId;
      //get musixiser info
      axios.post('//api.musixise.com/api/follow/followings/' + self.musixiserId, '', req_config)
        .then(function(res) {
          self.followinglist = res.data.data.content;
          Musixise.setTitle('TA关注的');
        })
        .catch(function(err) {

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
    <musixiser-min-cell-list :musixiserlist="followinglist"></musixiser-min-cell-list>
  </div>
</template>

<style lang="scss" scoped>
  @import '~common/style/_functions.scss';
  @import '~common/style/_variables.scss';
  @import '~common/style/_mixins.scss';


</style>
