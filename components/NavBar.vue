<template>
  <div class="header">
    <div class="NavBar_l">
      <div @click="serchClick">{{sidebarStu}}</div>
    </div>
    <h1 class="Logo">{{LOGO}}</h1>
    <div class="NavBar_r">
      <ul>
        <li>tu</li>
        <li>tu</li>
        <li>tu</li>
      </ul>
    </div>
    <LeftSidebar :sidebarStu="sidebarStu" @colseBtn="serchClick"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sidebarStu: false,
      LOGO: "QUEEN SPADES"
    }
  },
  methods: {
    serchClick(){
      this.sidebarStu = !this.sidebarStu;
    }
}
}
</script>
<style scoped>
  .header{
    display: flex;
    padding: 0px 25px;
    height: 55px;
    background-color:#2f3335;
    color: white;
    border-bottom: 1px solid #ddd;
  }
  .NavBar_r ,.NavBar_l,.Logo{
    flex: 1;
    line-height: 55px;
    font-weight: 100;
  }
  .NavBar_l> div{
    display: inline-block;
    cursor: pointer;
    transition: all .3s ease;
  }
  .NavBar_l> div:hover{
    color: #c8c8c8;
  }
  .Logo{
    text-align: center;
    font-weight: 300;
    font-size: 22px;
    cursor: pointer;
  }
  .NavBar_r > ul{
    list-style: none;
    display: flex;
    flex-direction:row-reverse;
  }
  .NavBar_r > ul > li {
    
    padding: 0 10px;
    text-align: right;
    cursor: pointer;
    transition: all .3s ease;
  }
  .NavBar_r > ul > li:hover {
    color: #c8c8c8;
  }
  /* .sidebar-enter-active,.sidebar-leave-active{
    transition: all .5s;
  }
  .sidebar-enter,.sidebar-leave-to{
    position: absolute;
    left: -345px;
  } */
  
</style>