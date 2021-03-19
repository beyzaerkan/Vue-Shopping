<template>
    <div>
        <h1>MARKET</h1>
        <li class="ürün" v-for="product in productList" :key="product" ><strong>Ürün: {{product.title}}</strong> <br> Fiyat: ₺{{product.price}} <br>
        Stok: {{product.count}} <br><br>
        <button @click="addToCart(product)" v-if="product.count>0" >Sepete Ekle</button>
        <p v-if="product.count<=0">TÜKENDİ!</p>
        </li>
    </div>  
</template>
<script>
import App from '../App'
export default {
       name: 'market',
       data() {
           return{
           }
       },
        props: ['productList'],
        methods: {
            addToCart(product){
                App.data().cartItems.push('beyza')
                console.log(App.data().cartItems)
                product.count--
            },
        }
}
</script>
<style>
h1{
    text-align: center;
}
.ürün{
    list-style-type: none;
    border: 2px solid red;
    width: 200px;
    height: 150px;
    padding-top: 50px;
    text-align: center;    
}
button:hover{
    color: white;
    background-color: black;
}
</style>
