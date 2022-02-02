<template>
  <div id="app" 
       class="App" 
       :class="{'is-sidebar-open': isSidebarCartOpen}">
    <nav-component></nav-component>
    <sidebar-cart-component></sidebar-cart-component>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'App',
  components: { 
      'NavComponent': () => import(/* webpackMode: "eager", webpackChunkName: "Nav" */'@/components/shell/Nav'),
      'SidebarCartComponent': () => import(/* webpackMode: "eager", webpackChunkName: "SidebarCart" */'@/components/shell/SidebarCart')
  },
  computed: {
    ...mapGetters({
          isSidebarCartOpen: 'isSidebarCartOpen'
      })
  },
  created() {
      this.$store.dispatch('fetchProducts');
  }
};
</script>

<style lang="scss">
@import 'main.scss';

.App {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
