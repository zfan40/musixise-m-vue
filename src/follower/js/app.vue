<script>
  let axios = require('axios');
  let Musixise = require('common/js/musixiseBridge');
  let req_config = {headers:{"Accept": "application/json","Content-Type": "application/json"}};
  var urlId = location.href.split('/').pop();
  if (isNaN(urlId)) {
    urlId = 48;
  }
  export default {
    components: {
      'musixiser-min-cell-list':require('common/components/musixiser-min-cell-list.vue'),
    },
    data() {
      return {
        musixiserId:0,
        followerlist:[]
      }
    },
    computed: {},
    methods: {},
    created() {
      let self = this;
      self.musixiserId = urlId;
      //get musixiser info
      axios.post('//api.musixise.com/api/follow/followers/' + self.musixiserId, '', req_config)
        .then(function(res) {
          self.followerlist = res.data.data.content;
          Musixise.setTitle('关注TA的');
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
    <musixiser-min-cell-list :musixiserlist="followerlist"></musixiser-min-cell-list>
  </div>
</template>

<style lang="scss" scoped>
  @import '~common/style/_functions.scss';
  @import '~common/style/_variables.scss';
  @import '~common/style/_mixins.scss';


</style>
