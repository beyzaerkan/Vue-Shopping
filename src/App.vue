<template>
  <div>
    <nav class="navbar">
      <li><router-link to="/yonetim">Yönetim </router-link></li>
      <li><router-link to="/market">Market </router-link></li>
      <li><router-link to="/sepet">Sepet </router-link></li>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productList: [
        {
          id: 1,
          title: "MacBook Pro",
          price: 20000,
          count: 10,
        },
        {
          id: 2,
          title: "iPhone",
          price: 10000,
          count: 50,
        },
        {
          id: 3,
          title: "AirPods",
          price: 1000,
          count: 500,
        },
      ],
      total: 0,
      cartItems: []
    };
  },
};
</script>
<style>
nav {
  text-align: center;
  font-size: 30px;
  padding-top: 10px;
}
.navbar li {
  display: inline;
  font-family: sans-serif;
  padding-right: 5px;
}
.navbar li:hover {
  font-size: 50px;
  color: black;
}
</style>
