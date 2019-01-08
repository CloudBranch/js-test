<template>
  <section class="cart">
    <h2>Your Cart</h2>
    <p v-show="!products.length"><i>Your cart is empty.</i></p>
    <ul class="row">
      <li v-for="(product) in products" :key="product.id" class="col">
        <a :href="product.url"><img :src="product.image"></a>
        <h3>{{ product.productName }}</h3>
        <h6>{{ product.description }}</h6>
        <h6>{{ product.manufacturer }}</h6>
        <h4>{{ product.title }}</h4>
        <h5>{{ product.price | currency }}</h5>
        <h6>Cart: <b>x {{ product.quantity }}</b></h6>
        <h6>ID : <b>{{ product.itemid }}</b></h6>
        <button
          :disabled="!product.quantity"
          @click="removeProductFromCart(product);"
          class="waves-effect waves-light btn z-depth-0"
        >
          Remove from cart
        </button>
      </li>
    </ul>
    <h3>Total: {{ total | currency }}</h3>
    <p>
      <button
        :disabled="!products.length"
        @click="checkout(products);"
        class="waves-effect waves-light btn z-depth-0"
      >
        Checkout
      </button>
    </p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </section>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice'
    })
  },
  methods: {
    checkout (products) {
      this.$store.dispatch('cart/checkout', products)
    },
    removeProductFromCart (product) {
      this.$store.dispatch('cart/removeProductFromCart', product)
    }
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
