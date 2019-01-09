<template>
  <section>
    <h1 v-show="products.length" class="title main-title"><i class="fas fa-shopping-cart"></i> Your Cart</h1>
    <h1 v-show="!products.length" class="title main-title"><i>Your cart is empty.</i></h1>
    <a v-show="!products.length" href="#"><img src="https://media.sweetwater.com/include/checkout/images/empty-cart.jpg"></a>
    <ul class="flexbox">
      <li v-for="(product, index) in products" :key="product.id" class="container colu">
        <a :href="product.url"><img :src="product.image"></a>
        <div>
          <h3>{{ product.manufacturer }} -</h3>
          <h3>{{ product.productName }} : ${{ product.price }}</h3>
          <h6>{{ product.description }}</h6>
          <h6><b>ID : {{ product.itemid }}</b></h6>
          <h3>Cart: <b>x {{ product.quantity }}</b></h3>
        </div>
        <button
          :disabled="!product.quantity"
          @click="removeProductFromCart(product, index);"
          class="btn"
        >
          Remove from cart
        </button>
      </li>
    </ul>
    <h3>Total: ${{ total }}</h3>
    <p>
      <button
        :disabled="!products.length"
        @click="checkout(products);"
        class="btn"
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
    removeProductFromCart (product, index) {
      this.$store.dispatch('cart/removeProductFromCart', product)
      /* if (product.quantity <= 1) {
        this.products.splice(index, product.id)
      } */
    }
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
