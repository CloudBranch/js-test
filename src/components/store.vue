<template>
  <section class="store">
    <h1>Sweet Store</h1>
    <ul class="row">
      <li v-for="(product) in products" :key="product.itemid" class="col">
        <a :href="product.url"><img :src="product.image"></a>
        <h3>{{ product.productName }}</h3>
        <h6>{{ product.description }}</h6>
        <h6>{{ product.manufacturer }}</h6>
        <h4>{{ product.title }}</h4>
        <h5>{{ product.price | currency }}</h5>
        <h6>Left in stock: <b>{{ product.available }}</b></h6>
        <h6>ID : <b>{{ product.itemid }}</b></h6>
        <button
          :disabled="!product.available"
          @click="addProductToCart(product)"
          class="waves-effect waves-light btn z-depth-0"
        >
          Add to cart
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
.row {
  display: flex;
}
.col {
  flex: 1;
  padding: 1em;
}
li {
  border-top: 20px solid gold;
  border-right: 2px solid gold;
  border-bottom: 2px solid gold;
  border-left: 2px solid gold;
  margin: 1rem;
  padding: 5rem;
  display: inline-block !important;
  border-radius: 10px;
  max-width: 25rem;
  min-width: 25rem;
}
li:hover {
  border-color: goldenrod;
}
.btn {
  background-color: gold;
}
.btn:hover {
  background-color: goldenrod;
}
</style>
