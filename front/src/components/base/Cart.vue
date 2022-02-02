<template>
  <div class="Cart">
    <div class="Cart__infos">
      <span v-if="totalItems === 0">Oh, Votre panier est vide !</span>
      <span v-else>{{ totalItems }} articles</span>
      <div class="Cart__infosAmount" 
           v-if="totalAmount > 0">Total: {{ totalAmount }}€</div>
    </div>
    <article-component v-for="article in cartArticles"
                       :key="article.reference"
                       :product="article"> </article-component>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import cartMxn from '@/mixins/cart';

export default {
    name: 'Cart',
    mixins: [cartMxn],
    components: {
        'ArticleComponent': () => import(/* webpackMode: "eager", webpackChunkName: "Article" */'@/components/base/Article')
    },
    computed: {
        ...mapGetters({ 
            cartArticles: 'cartArticles'
        }),
        totalItems() {
            return this.cartMxn.getQuantity();
        },
        totalAmount() {
            return this.cartMxn.getTotalAmount();
        }
    }
};
</script>

<style lang="scss" scoped>
.Cart {
  display: grid;
  background: #f8f8f8;

  &__infos {
    background: white;
    position: relative;
    border-bottom: 1px solid #e8e8e8;
    text-align: right;
    padding: 20px 30px;

    &Amount {
      margin-top: 15px;
    }
  }
}
</style>
