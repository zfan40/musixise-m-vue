<script>
  export default {
    props: {
      tabs:{
        type:Array,
        default:function(){
          return [{name:'work',content:'作品'},{name:'live',content:'现场'}]
        }
      }
    },
    data() {
      return {
        activeTab:0,
        title: 'tab-view-components'
      }
    },
    methods: {
      updateTab(i) {
        this.activeTab = i;
        // alert(1);
      }
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
    <div class="tab-container">
      <div v-for="(tab,index) in tabs" class="tab" :class="{active:index==activeTab}" :id="tab.name+'-tab'" @click="updateTab(index)">{{tab.content}}</div>
    </div>
    <slot v-for="(slot,index) in tabs" v-if="index==activeTab" :name="slot.name"></slot>  

  </div>
</template>

<style lang="scss" scoped>
  @import '~common/style/_functions.scss';
  @import '~common/style/_variables.scss';
  @import '~common/style/_mixins.scss';
  
  .tab-container {
    position: relative;
    width: 10rem;
    height: getRem(80);
    background-color: black;
    display: flex;
    border-top:1px solid rgba(255,255,255,.4);
    justify-content: space-around;
    align-items: stretch;
    .tab {
      text-align: center;
      width: 2rem;
      display:flex;
      flex-direction:column;
      justify-content:center;
      color: white;
      font-size: .45rem;
      border-bottom:5px solid black;
      /*add this same color border avoiding jittering text*/
    }
    .active {
      color:#ffcc33;
      border-bottom: 5px solid #ffcc33;
    }
  }
</style>