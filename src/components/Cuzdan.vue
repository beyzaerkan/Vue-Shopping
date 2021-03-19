<template>
  <div>
    <h1>CÜZDAN</h1>
    <p>Toplam Para: ₺{{ toplamPara }}</p>
    <label for="number">Eklenecek Miktar: </label>
    <input type="number" v-model="this.eklenecekMiktar" />
    <button id="paraEkle" v-on:click="toplamPara += this.eklenecekMiktar">
      Para Ekle
    </button>
  </div>
</template>
<script>
export default {
  name: "cuzdan",
  data() {
    return {
      toplamPara: 50000,
      eklenecekMiktar: null,
    };
  },
};
</script>
