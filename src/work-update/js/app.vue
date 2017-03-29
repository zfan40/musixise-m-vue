<script>
  var axios = require('axios');
  var Musixise = require('common/js/musixiseBridge');
  var req_config={};
  var userInfo = {};
  var workId = location.href.split('/').pop();
  // var workId = 28;  //test
  export default {
    components: {
      'musixiser-song-cell':require('common/components/musixiser-song-cell.vue')
    },
    data() {
      return {
        title: 'HELLO Vue~!',
        initWorkObj:{},
        newTitle:'',
        newDescription:'',
        newCover:'',
      }
    },
    computed: {
      workObj: function() {
        let result = {};
        if (!result.id) {
          Object.assign(result,this.initWorkObj);//not changing initWorkObj  
        }
        result.title = this.newTitle? this.newTitle : this.initWorkObj.title;
        result.content = this.newDescription? this.newDescription : this.initWorkObj.content
        result.cover = this.newCover? this.newCover : this.initWorkObj.cover;
        return result;
      }
    },
    methods: {
      load() {
      },
      updateImage() {
        let self = this;
        Musixise.uploadImage(function(res){
          self.newCover = res;
        })
      },
      updateWork() {
        let self= this;
      }
    },
    created() {
      let self = this;
      Musixise.getUserInfo(function(res) {
            userInfo = res;
            if (userInfo.token) {
                req_config.headers.Authorization = 'Bearer ' + userInfo.token;
            }
            axios.post('//api.musixise.com/api/work/detail/' + workId, '', req_config)
              .then(function(res) {
                self.initWorkObj = res.data.data;
                console.log(res);
              })
              .catch(function(err) {

              });
        });
    },
    mounted() {
    },
    updated() {
       // :workObj="workObj"
    }
  };
</script>

<template>
  <div id="app">
    <div class="input-container">
      <input v-model="newTitle" placeholder="作品标题"></input>
    </div>
    <div class="textarea-container">
      <textarea v-model="newDescription" placeholder="作品描述"></textarea>
    </div>
    <div class="image-container">
      <img class="uploadBtn" src="../assets/add_image.svg">
      <p>更新封面</p>
<!--       <img :src="workObj.cover"> -->
    </div>
    <div class="preview-container">
      <!-- <p>更新效果展示</p> -->
      <musixiser-song-cell :workObj="workObj"></musixiser-song-cell>
    </div>
    <div class="submit-container">
    <button class="confirm" @click="updateWork">确认更新</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '~common/style/_functions.scss';
  @import '~common/style/_variables.scss';
  @import '~common/style/_mixins.scss';
  /*@import '~common/style/_reboot.scss';*/
  .input-container {
    margin-top: 2rem;
    text-align:center;
    input{
      padding: 0 .3rem;
      width: 7rem;
      height: .8rem;
      line-height: .8rem;
      border:1px solid #ededed;
    }
  }
  .textarea-container {
    margin-top: 1.3rem;
    text-align:center;
    textarea{
      padding: .3rem .3rem;
      width: 7rem;
      height: 1.5rem;
      line-height: .53rem;
      border:1px solid #ededed;
    }
  }
  .image-container {
    padding-left: 1.15rem;
    margin-top: 1.1rem;
    .uploadBtn {
      width: 1.5rem;
    }
    p {
      font-size: .32rem;
      display: inline-block;
      position: relative;
      bottom: .1rem;      
    }
  }
  .preview-container {
    position: absolute;
    bottom: 0;
    p {
      font-size:.5rem;
    }
  }
  .submit-container {
    margin-top: 1.5rem;
    text-align: center;
    .confirm {
      width: 3rem;
      height: 1.2rem;
    }
  }

</style>