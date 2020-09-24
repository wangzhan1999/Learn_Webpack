<template>
  <transition name="sidebar">
    <div class="L_Sidebar" v-if="this.sidebarStu">
      <div class="sidebar">
        <div @click="colseBtn">{{sidebarStu}}</div>
        <ul>
          <li v-for="item in ListData" :key="item.tit" @click="listClick(item)">{{item.tit}}
            <transition name="toggle">
              <ul class="category" v-show="item.stu">
                <li v-for="category in item.category" :key="category">
                  {{category}}
                </li>
              </ul>
            </transition>
          </li>
        </ul>
      </div>

      <div class="ShadowBox" @click="colseBtn"></div>
    </div>
  </transition>
  
</template>

<script>
export default {
  data() {
    return {
      ListData: {
        one: {tit: "套装系列",
              stu:false,
              category:["我上早自习吃柠檬1", "1我上早自习吃柠檬", "我上1早自习吃柠檬", "我上早自1习吃柠檬"]
        },
        two: {tit: "护肤系列",
              stu:false,},
        three: {tit: "尊享服务",
                stu:false,},
        four: {tit: "The House",
               stu:false,}
        },
      colseStu: Boolean,
    }
  },
  props:{
    sidebarStu: Boolean,
  },
  mounted() {
    this.colseStu = this.sidebarStu;
  },
  methods: {
    colseBtn(){
        this.colseStu = !this.colseStu;
        this.$emit("colseBtn", this.colseStu);
    },
    listClick(item){
      item.stu = !item.stu;
    }
  }
}
</script>

<style scoped>
  .L_Sidebar{
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0px;
    top: 0;
    color: white;
    font-weight: 100;
    display: inline-block;
  }
  .ShadowBox{
    display: inline-block;
    min-width: 0;
    width: 70vw;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .3);
  }
  .L_Sidebar .sidebar{
    padding: 25px 25px;
    background-color: #2f3335;
    width: 30vw;
    height: 100%;
    display: inline-block;
    cursor: pointer;
    transition: all .3s ease;
    /* transform: translateY(-50%); */
  }
  .L_Sidebar .sidebar > div:hover{
    color: #c8c8c8;
  }
  ul, li{
    width: 100%;
    list-style: none;
    text-align: center;
    padding: 0;
  }
  li{
    cursor: pointer;
    padding: 15px 0;
    text-align: left;
    border-bottom:1px solid #ddd;
    line-height: 100%;
    
  }
  li::before{
    content: '+';
    max-width: 16px;
    max-height: 16px;
    display: block;
    font-size: 24px;
    float: right;
    transform: translateY(-50%);
  }
  .category{
    padding: 10px 30px;
    height: 135px;
    font-size: 13px;
    transition: all .3s ease;
  }
  .category > li{
    text-align: left;
    border: none;
    padding: 8px 0;
    transition: all .3s ease;
  }
  .category > li:hover{
    color: #ddd;
  }
  .category > li::before{
    content: '';
    display: none;
  }
  .sidebar-enter-active{
    animation: sidebar-in .3s;
  }
  .sidebar-leave-to{
    animation: sidebar-in .3s reverse;
  }
  @keyframes sidebar-in {
    0% {
      left: -345px;
    }
    100% {
      left: 0px;
    }
  }
  .toggle-enter-active{
    animation: toggle .3s;
  }
  .toggle-leave-to{
    animation: toggle .3s reverse;
  }
  @keyframes toggle {
    0%{
      height: 0;
      color: transparent;
    };
    100%{
      height: 135px;
      color: white;
    }
  }
</style>