<template>
  <section>
    <h1 class="title main-title"><i class="fas fa-store"></i> Sweet Store</h1>
    <ul class="flexbox">
      <li v-for="(product) in products" :key="product.id" class="container colu">
        <a :href="product.url" class=""><img :src="product.image"></a>
        <div class="">
          <h3>{{ product.manufacturer }} - {{ product.productName }} : ${{ product.price }}</h3>
          <h6>{{ product.description }}</h6>
          <h6><b>ID : {{ product.itemid }}</b></h6>
          <h3>Left in stock: <b>{{ product.available }}</b></h3>
        </div>
        <button
          :disabled="!product.available"
          @click="addProductToCart(product)"
          class="btn align-self-end"
        >
          <i class="fas fa-cart-plus"></i> Add to cart
        </button>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    products: state => state.products.all
  }),
  methods: mapActions('cart', ['addProductToCart']),
  created () {
    this.$store.dispatch('products/getAllProducts')
  }
}
</script>

<style scoped>
.flexbox {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  flex-flow: row wrap;
}
.colu {
  flex: 1;
  min-width: 33%;
  max-width: 33%;
}
.container {
  background-color: #FAFAFA;
  border: 3px solid #FFFFFF;
}
button:disabled,
button[disabled],
button:disabled:hover,
button[disabled]:hover,
button:disabled:active,
button[disabled]:active {
  background-color: #999999;
  color: #FFFFFF;
}
a img, h3 {
  display: block;
  margin: 1rem auto;
}
ul {
  display: inline;
}
li {
  padding: 1rem;
  list-style-type: none;
  border-radius: 10px;
}
li:hover {
  border-color: #284266;
}
.btn {
  border: 0;
  background-color: #444543;
  font-weight: bold;
  border-radius: 5px;
  padding: 1rem;
  white-space: nowrap;
  -ms-flex-item-align: end;
  align-self: flex-end;
}
.btn:hover {
  color: #444543;
  background-color: gold;
}
.title {
  color: #666666;
  text-align: center;
}
.main-title {
  font-size: 3rem;
}
.sub-title {
  font-size: 1.8rem;
}
</style>
