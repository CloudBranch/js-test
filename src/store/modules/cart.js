import shop from '../../api/shop'

const state = {
  items: [],
  checkoutStatus: null
}

const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product.id === id)
      return {
        id: product.id,
        image: product.image,
        url: product.url,
        manufacturer: product.manufacturer,
        productName: product.productName,
        itemid: product.itemid,
        quantity,
        price: product.price,
        description: product.description,
        available: product.available
      }
    })
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

const actions = {
  checkout ({ commit, state }, products) {
    const savedCartItems = [...state.items]
    commit('setCheckoutStatus', null)
    commit('setCartItems', { items: [] })
    shop.buyProducts(
      products,
      () => commit('setCheckoutStatus', 'successful'),
      () => {
        commit('setCheckoutStatus', 'failed')
        commit('setCartItems', { items: savedCartItems })
      }
    )
  },

  addProductToCart ({ state, commit }, product) {
    commit('setCheckoutStatus', null)
    if (product.available > 0) {
      const cartItem = state.items.find(item => item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart', { id: product.id })
      } else {
        commit('incrementItemQuantity', cartItem)
      }
      commit(
        'products/decrementProductInventory',
        { id: product.id },
        { root: true }
      )
    }
  },

  removeProductFromCart ({ state, commit }, product) {
    commit('setCheckoutStatus', null)
    if (product.quantity > 0) {
      const cartItem = state.items.find(item => item.id === product.id)
      if (cartItem) {
        commit('decrementItemQuantity', cartItem)
      }
      commit(
        'products/incrementProductInventory',
        { id: product.id },
        { root: true }
      )
    } else {
      console.log(product.quantity)
    }
  }
}

const mutations = {
  pushProductToCart (state, { id }) {
    state.items.push({
      id,
      quantity: 1
    })
  },

  incrementItemQuantity (state, { id }) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  },

  decrementItemQuantity (state, { id }) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity--
  },

  setCartItems (state, { items }) {
    state.items = items
  },

  setCheckoutStatus (state, status) {
    state.checkoutStatus = status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
