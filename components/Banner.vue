<template>
  <div class="banner">
    <div class="banner_info">
      <h2>NON UT IN</h2>
      <h3>黑钻焕肤水</h3>
      <button>即刻选购</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .banner{
    width: 100%;
    height: 480px;
    color: white;
    background:#e1e1e1 url("../static/img/bannerPoto.png") no-repeat;
    background-size: cover;
  position: relative;
  }
  .banner_info{
    position: absolute;
    left: 6%;
    top: 140px;
  }
  .banner_info > h2{
    font-weight: 100;
    font-size: 26px;
    color: #ddd;
  }
  .banner_info > h3{
    font-weight: 100;
    font-size: 12px;
    margin-top: 15px;
    padding-bottom: 20px;
  }
  .banner_info > button{
    font-size: 12px;
    color: white;
    background: transparent;
    border: 1px solid white;
    border-radius: 3px;
    outline: none;
    padding: 8px 25px;
    transition: all .3s ease;
    cursor: pointer;
  }
  .banner_info > button:hover{
    background: #fff;
    color: #1b1b1b;
  }
</style>