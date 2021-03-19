<template>
    <div class="yonetim">
    <h1>YÖNETİM</h1>
        <li><router-link to="/yonetim/stok" >Stok</router-link></li>
        <li><router-link to="/yonetim/cuzdan" >Cüzdan</router-link></li>
    <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'Yonetim'
}
</script>
<style>
.yonetim{
    font-size: 20px;
    text-align: center;
}
.yonetim li{
    display: inline;
    font-family:sans-serif;
    padding-right: 5px;
}
 .yonetim li:hover{
  font-size: 50px;
  
}
</style>
