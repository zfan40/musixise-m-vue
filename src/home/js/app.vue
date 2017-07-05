<script>
  let axios = require('axios');
  let Musixise = require('common/js/musixiseBridge');
  let req_config={headers:{}};
  let userInfo = {};
  let mock = require('../mock/mock');
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    components: {
      'musixiser-song-cell-list':require('common/components/musixiser-song-cell-list.vue'),
      'musixiser-min-cell-list':require('common/components/musixiser-min-cell-list.vue'),
      'musixiser-grid-cell-list':require('common/components/musixiser-grid-cell-list.vue'),
      'musixiser-song-grid-cell-list':require('common/components/musixiser-song-grid-cell-list.vue'),
      swiper,
      swiperSlide,
    },
    data() {
      return {
        musixiserInfo:{},
        banners:[],
        ads:[],
        hotSongs:[],
        hotMusixisers:[],
        latestSongs:[],
        latestMusixisers:[],
        swiperOption: {
          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
          notNextTick: true,
          autoplay: 3000,
          direction : 'horizontal',
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          scrollbar:'.swiper-scrollbar',
          mousewheelControl : true,
          observeParents:true,
          // if you need use plugins in the swiper, you can config in here like this
          debugger: true,
          // swiper callbacks
          onTransitionStart(swiper){
            // console.log(swiper)
          },
          // more Swiper configs and callbacks...
          // ...
        },
      }
    },
    computed: {},
    methods: {
      bannernext() {
          this.$refs.bannerflickity.next();
      },

      bannerprevious() {
          this.$refs.bannerflickity.previous();
      },
      adnext() {
          this.$refs.adflickity.next();
      },

      adprevious() {
          this.$refs.adflickity.previous();
      },
      playWork(){

      },
      checkMusixiser(){

      },
    },
    created() {
      let self = this;
      // self.banners = mock.data.banners;
      // self.ads = mock.data.ads;
      // self.hotMusixisers = mock.data.hotMusixisers;
      // self.hotSongs = mock.data.hosSongs;
      // self.latestMusixisers = mock.data.latestMusixisers;
      // self.latestSongs = mock.data.latestSongs;

        axios.post('//api.musixise.com/api/home','', req_config)
          .then(function(res) {
            // self.musixiserInfo = res.data.data;
            Musixise.setTitle(self.musixiserInfo.realname+'的主页');
              self.banners = res.data.data.banners;
              self.ads = res.data.data.ads;
              self.hotMusixisers = res.data.data.hotMusixisers;
              self.hotSongs = res.data.data.hosSongs;
              self.latestMusixisers = res.data.data.latestMusixisers;
              self.latestSongs = res.data.data.latestSongs;
          })
          .catch(function(err) {

          });



      // Musixise.getUserInfo(function(res) {
      //   userInfo = res;
      //   console.log(userInfo);
      //   if (userInfo.idToken) {
      //       req_config.headers.Authorization = 'Bearer ' + userInfo.idToken;
      //   }

      //   //get musixiser info
      //   axios.post('//api.musixise.com/api/user/detail/' + self.musixiserId, '', req_config)
      //     .then(function(res) {
      //       self.musixiserInfo = res.data.data;
      //       Musixise.setTitle(self.musixiserInfo.realname+'的主页');
      //     })
      //     .catch(function(err) {

      //     });
      // });
    },
    mounted() {
    },
    updated() {
    }
  };
</script>

<template>
  <div id="app">

    <div id="banner-wrapper">
      <swiper :options="swiperOption" ref="bannerSwiper">
        <swiper-slide v-for="item in banners"><img :src="item.img"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
      </swiper>
    </div>

    <div id="hot-song-wrapper">
      <h2 class="wrapper-title">高山流水</h2>
      <musixiser-song-cell-list :songlist="hotSongs"></musixiser-song-cell-list>
    </div>

    <div id="hot-musixiser-wrapper">
      <h2 class="wrapper-title">琅琊榜</h2>
      <musixiser-grid-cell-list :musixiserlist="hotMusixisers"></musixiser-grid-cell-list>
    </div>

    <div id="latest-song-wrapper">
      <h2 class="wrapper-title">新晋作品</h2>
      <musixiser-song-grid-cell-list :songlist="latestSongs"></musixiser-song-grid-cell-list>
    </div>

    <div id="latest-musixiser-wrapper">
      <h2 class="wrapper-title">初生牛犊</h2>
      <musixiser-min-cell-list :musixiserlist="latestMusixisers"></musixiser-min-cell-list>
    </div>

    <div id="ad-wrapper">
      <h2 class="wrapper-title">广而告之</h2>
      <swiper :options="swiperOption" ref="adSwiper">
        <swiper-slide v-for="item in ads"><img :src="item.img"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
      </swiper>
    </div>

  </div>
</template>

<style lang="scss" scoped>
  @import '~common/style/_functions.scss';
  @import '~common/style/_variables.scss';
  @import '~common/style/_mixins.scss';
  #banner-wrapper {height:getRem(320);}
  .wrapper-title {font-size:.43rem;border-left:3px solid #ffcc33;padding-left:getRem(10);}
</style>
