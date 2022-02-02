<template>
  <div class="CartView">
    <cart-component/>
    <delivery-method-component/>
  </div>
</template>

<script>
  export default {
    name: 'Cart',
    components: {
      'CartComponent': () => import(/* webpackMode: "eager", webpackChunkName: "Cart" */'@/components/base/Cart'),
      'DeliveryMethodComponent': () => import(/* webpackMode: "eager", webpackChunkName: "DeliveryMethod" */'@/components/base/DeliveryMethod')
    }
  };
</script>

<style lang="scss" scoped>
.CartView {
  display: grid;
  background: #f8f8f8;
  padding: 10px 30px;
}
</style>
