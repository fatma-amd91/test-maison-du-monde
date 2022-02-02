<template>
     <div class="Nav">
        <router-link to="/">Maison du monde</router-link>
        <div class="Nav__cart"
             @click="toggleSidebar()"> 
          <img alt="cart"
               src="../../assets/cart.png"/>
          <span class="Nav__cartTotal" 
                v-if="totalItems > 0">{{ totalItems }}</span>      
        </div>
    </div>
</template>

<script>
import cartMxn from '@/mixins/cart';
import modalMxn from '@/mixins/modal';
import { mapActions } from 'vuex';

export default {
    name: 'Nav',
    mixins: [modalMxn, cartMxn],
    computed: {
        totalItems() {
            return this.cartMxn.getQuantity();
        }
    },
    methods: {
      ...mapActions ({
        toggleSidebar: 'toggleSidebar'
      })
    }
};
</script>

<style lang="scss" scoped>
.Nav {
    position: relative;
    padding: 19px;
    border-bottom: 1px solid #e3dbdb;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
  }

  &__cart {
    float: right;
    margin-right: 14px;

    img {
      position: relative;
      width: 30px;
      top: -6px;
    }

    &Total {
      position: relative;
      background: #bdab9f;
      padding: 1px 5px;
      border-radius: 16px;
      font-size: 11px;
      right: 2px;
      top: -6px;
    }
  }
}
</style>
