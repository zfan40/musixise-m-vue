<script>
  var Musixise = require('common/js/musixiseBridge');
  var Vibrant = require('node-vibrant');//img color exteracter
  const MARQUEE_SPEED = 30;
  export default {
    props: {
      workObj:{
        type:Object,
        default:function(){return {"id":29,"title":"demo02","cover":"","content":"丧心病狂 pitchshift,sustain","url":"http://oiqvdjk3s.bkt.clouddn.com/X9IHwOUm_test.txt","followStatus":0,"createdDate":"2017-03-23 16:45:13","userId":40,"collectNum":null,"lastModifiedDate":"2017-03-23 16:45:13","fileHash":"b730b516a4f34d9344e55288ec3b1245","owner":{"uid":40,"nickName":"零零柒","smallAvatar":"http://oaeyej2ty.bkt.clouddn.com/CcwtD1PN_dfg.jpg","largeAvatar":"http://oaeyej2ty.bkt.clouddn.com/CcwtD1PN_dfg.jpg"},"status":null}}
      },
      enableListen:{
        type:Number,
        default:1
      }
    },
    data() {
      return {
        title: 'artist-song-cell',
        marqueeStyle:''
      }
    },
    methods: {
      onclickcell() {
        if (this.enableListen) {
          if (Musixise.inApp) {
            alert(this.workObj.id);
            location.href="musixise://play?id="+this.workObj.id;
          } else {
            alert('前往客户端试听');
          }
        } else {
          alert('just preview');
        }
      },
      getImageColorCSS(imgurl) {
        var self = this;
        console.log('aiyoyo',imgurl);
        Vibrant.from(imgurl).getPalette()
          .then((palette) => {
            console.log(palette);
            if (palette.Vibrant) {
              self.marqueeStyle += "color:rgb("+palette.Vibrant._rgb.toString()+");";
            } else if (palette.LightVibrant) {
              self.marqueeStyle += "color:rgb("+palette.LightVibrant._rgb.toString()+");";
            } else if (palette.LightMuted) {
              self.marqueeStyle += "color:rgb("+palette.LightMuted._rgb.toString()+");";
            }
        }).catch((err)=>console.log(err))
      }
    },
    computed:{
    },
    created() {
    },
    mounted() {
      this.marqueeStyle = '';
      this.getImageColorCSS(this.workObj.cover?this.workObj.cover:this.workObj.owner.smallAvatar);
      if (this.$refs.insider&&this.$refs.outsider&&(this.$refs.insider.offsetWidth>this.$refs.outsider.offsetWidth)) {
        var t = (this.$refs.insider.offsetWidth)/MARQUEE_SPEED +'s;';
        this.marqueeStyle +=  '-webkit-animation:marquee linear infinite;-o-animation:marquee linear infinite;animation:  marquee linear infinite;-webkit-animation-duration:'+t+'-o-animation-duration:'+t+'animation-duration:'+t+';';
      } else {
        this.marqueeStyle += '';
        console.log(this.$refs.insider.offsetWidth);
      }
    },
    updated() {
      // console.log('a song cell updated.');
      // if (this.$refs.insider&&this.$refs.outsider&&(this.$refs.insider.offsetWidth>this.$refs.outsider.offsetWidth)) {
      //   var t = (this.$refs.insider.offsetWidth)/MARQUEE_SPEED +'s;';
      //   this.marqueeStyle =  '-webkit-animation:marquee linear infinite;-o-animation:marquee linear infinite;animation:  marquee linear infinite;-webkit-animation-duration:'+t+'-o-animation-duration:'+t+'animation-duration:'+t;
      // } else {
      //   console.log('hehe');
      //   this.marqueeStyle = '';
      // }
    }
  };
</script>

<template>
    <div v-if="workObj.id" class="info" @click="onclickcell">
        <img class="work-cover" :src="workObj.cover?workObj.cover:workObj.owner.smallAvatar"></img>
        <div class="work-body">
          <span class="work-body-title">{{workObj.title}}</span>
          <span ref="outsider" class="work-body-desc"><p ref="insider" :style="marqueeStyle">{{workObj.content}}</p></span>
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
    .work-cover {
      /*width:2.2rem;*/
      /*height: 2.2rem;*/
      width:2.2rem;
    }
    .work-body {
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
        }
      }
      /*-100%正好到边*/
      @keyframes marquee {
        0%   { transform: translate(10%, 0); }
        50% { transform: translate(-70%, 0); }
        100% { transform: translate(10%, 0); }
      }
    }
    .work-extra {
      width: 1rem;
    }
  }
</style>
