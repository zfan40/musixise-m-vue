<script>
  var Musixise = require('common/js/musixiseBridge');
  const MARQUEE_SPEED = 30;
  export default {
    props: {
      musixiserObj:{
        type:Object,
        default:function(){
          return {"id":29,"username":"anonymousUser","realname":"零零柒","tel":null,"email":"3108679268@gmail.com","birth":null,"gender":null,"smallAvatar":"http://oaeyej2ty.bkt.clouddn.com/CcwtD1PN_dfg.jpg","largeAvatar":"http://oaeyej2ty.bkt.clouddn.com/CcwtD1PN_dfg.jpg","nation":null,"isMaster":null,"followStatus":0,"followNum":0,"fansNum":0,"songNum":0,"userId":40,"createdDate":"2017-03-14 13:53:00"}
        }
      }
    },
    data() {
      return {
        title: 'musixiser-min-cell',
        marqueeStyle:''
      }
    },
    methods: {
      onclickcell() {
        location.href = '//m.musixise.com/musixiser-detail/'+this.musixiserObj.id;
      }
    },
    computed:{
    },
    created() {
    },
    mounted() {
      console.log('a musixiser-min cell mounted');
      if (this.$refs.insider&&this.$refs.outsider&&(this.$refs.insider.offsetWidth>this.$refs.outsider.offsetWidth)) {
        var t = (this.$refs.insider.offsetWidth)/MARQUEE_SPEED +'s;';
        this.marqueeStyle =  '-webkit-animation:marquee linear infinite;-o-animation:marquee linear infinite;animation:  marquee linear infinite;-webkit-animation-duration:'+t+'-o-animation-duration:'+t+'animation-duration:'+t;
      } else {
        this.marqueeStyle = '';
      }
    },
    updated() {
      console.log('a musixiser-min cell updated.');
      if (this.$refs.insider&&this.$refs.outsider&&(this.$refs.insider.offsetWidth>this.$refs.outsider.offsetWidth)) {
        var t = (this.$refs.insider.offsetWidth)/MARQUEE_SPEED +'s;';
        this.marqueeStyle =  '-webkit-animation:marquee linear infinite;-o-animation:marquee linear infinite;animation:  marquee linear infinite;-webkit-animation-duration:'+t+'-o-animation-duration:'+t+'animation-duration:'+t;
      } else {
        this.marqueeStyle = '';
      }
    }
  };
</script>

<template>
    <div v-if="musixiserObj.id" class="info" @click="onclickcell">
        <img class="user-cover" :src="musixiserObj.smallAvatar"></img>
        <div class="user-body">
          <span class="user-body-title">{{musixiserObj.realname}}</span>
          <span ref="outsider" class="user-body-desc"><p ref="insider" :style="marqueeStyle">{{musixiserObj.description?musixiserObj.description:'这家伙很屌什么都没写'}}</p></span>
        </div>
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
    .user-cover {
      /*width:2.2rem;*/
      /*height: 2.2rem;*/
      width:2.2rem;
    }
    .user-body {
      width: 7.8rem;
      display:flex;
      flex-direction: column;
      justify-content:center;
      padding: 0 .3rem;
      .user-body-title {
        white-space: nowrap;
      }
      .user-body-desc {
        position:relative;
        white-space: nowrap;
        line-height: .8rem;
        height: .8rem;
        overflow:hidden;
        color:#3d3d3d;
        p {
          position:absolute;
        }
      }
      /*-100%正好到边*/
      @keyframes marquee {
        0%   { transform: translate(10%, 0); }
        50% { transform: translate(-70%, 0); }
        100% { transform: translate(10%, 0); }
      }
    }
    .user-extra {
      width: 1rem;
    }
  }
</style>