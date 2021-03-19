<template>
  <div>
    <h1>SEPET</h1>
    <UrunDetay
      v-for="product in diziler.cartItems"
      :key="product.id"
      :product="product"
    />
    <ul>
      <li v-for="items in diziler.cartItems" :key="items.id">{{ items.title }}</li>
      <button v-if="diziler.cartItems > 0">Sepetten çıkart</button>
    </ul>
    <strong v-if="diziler.cartItems == 0">Sepetinizde ürün bulunmamaktadır.</strong>
    <p>Toplam: ₺{{ odenecekTutar }}</p>
    <button v-if="odenecekTutar > 0">Satın Al</button>
    <button v-else @click="sepetBos">Satın Al</button>
  </div>
</template>
<script>
import UrunDetay from "../components/UrunDetay.vue";
export default {
  name: "Sepet",
  props: ['diziler'],
  components: {
    UrunDetay,
  },
  data() {
    return {
      odenecekTutar: 0,
    };
  },
  methods: {
    sepetBos() {
      alert("Satın almak için ürün eklemelisiniz");
    }
  },
};
</script>
<style >
h1 {
  text-align: center;
  font-size: 50px;
}
strong {
  font-size: 20px;
}
</style>