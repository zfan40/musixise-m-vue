<script>
  var axios = require('axios');
  var Musixise = require('common/js/musixiseBridge');
  var userInfo = {};
  var req_config = {};
  export default {
    props: {
      musixiserInfo:{
        type:Object,
        default:function(){
          return {}
        }
      }
    },
    data() {
      return {
        title: 'musixiser-intro-cell',
      }
    },
    methods: {
      toggleFavorite() {
        let self = this;
        if (Musixise.inApp) {
          Musixise.getUserInfo(function(res) {
            userInfo = res;
            alert(JSON.stringify(res));
            if (userInfo.idToken) {
              req_config.headers.Authorization = 'Bearer ' + userInfo.idToken;
              self.musixiserInfo.followStatus = !self.musixiserInfo.followStatus;
              var param = {
                  followId: self.musixiserInfo.id,
                  status: self.musixiserInfo.followStatus
              };
              axios.post('//api.musixise.com/api/follow/add', JSON.stringify(param), req_config)
                  .then(function(res) {
                      console.log('关注人成功', res);
                  })
                  .catch(function(err) {
                      console.log(err);
                  }); 
            } else {
              Musixise.showToast('请登录');
            }
 
          })
        } else {
          alert('请前往客户端');
        }
      }
    },
    created() {
      alert(navigator.userAgent);

    },
    mounted() {
    },
    updated() {
    }
  };
</script>

<template>
  <div>
    <div class="follow-status" :class="{'active':musixiserInfo.followStatus,'inactive':!musixiserInfo.followStatus}" @click="toggleFavorite"></div>
    <div class="avatar">
        <img :src="musixiserInfo.largeAvatar">
        <div class="gradient-mask"></div>
        <p class="realname">{{musixiserInfo.realname}}</p>
        <div id="relation-tab">
          <div id="watchhim">
            <span class="superscript">{{musixiserInfo.fansNum}}</span>
          </div>
          <div id="hewatch">
            <span class="superscript">{{musixiserInfo.followNum}}</span>
          </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~common/style/_functions.scss';
  @import '~common/style/_variables.scss';
  @import '~common/style/_mixins.scss';
  
  .follow-status {
    position: absolute;
    right: .5rem;
    top: .5rem;
    width: 1rem;
    height: 1rem;
    z-index: 10;
  }
  .follow-status.active {
    background: url('/musixiser-detail/assets/active-like.svg') center center no-repeat;
    background-size: contain;
  }
  .follow-status.inactive {
    background: url('/musixiser-detail/assets/inactive-like.svg') center center no-repeat;
    background-size: contain;
  }
  .avatar {
    position: relative;
    text-align: center;
    height: 10rem;
    img {
      width: 10rem;
      height: 10rem;
    }
    .gradient-mask {
      position: absolute;
      width: 10rem;
      height: 10rem;
      background: linear-gradient(0deg, rgba(0, 0, 0, 1), transparent 30%);
      top: 0;
    }
    .realname {
      position: absolute;
      color: white;
      font-weight: 600;
      bottom: 1.5rem;
      font-size: .55rem;
      margin-left: .8rem;
    }
    #relation-tab {
      display: flex;
      /*padding-top: .4rem;*/
      position: absolute;
      bottom: -.2rem;
      width: 10rem;
      height: 1.5rem;
      #watchhim {
        position: relative;
        margin-left: .8rem;
        width: 1rem;
        height: 1rem;
        background: url('/musixiser-detail/assets/watchhim.svg') center center no-repeat;
        background-size: contain;
      }
      #hewatch {
        position: relative;
        margin-left: .8rem;
        width: 1rem;
        height: 1rem;
        background: url('/musixiser-detail/assets/hewatch.svg') center center no-repeat;
        background-size: contain;
      }
      .superscript {
        font-weight: 600;
        position: absolute;
        text-align: center;
        background-color: #ffcc33;
        height: .5rem;
        display: block;
        font-size: .32rem;
        margin: 0;
        padding: 0 .17rem;
        line-height: .5rem;
        color: #000;
        border-radius: .25rem;
        right: -.12rem;
        top: -.1rem;
      }
    }
  }

</style>