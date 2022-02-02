<template>
    <div class="DeliveryMethod" 
         v-if="totalItems > 0">
        <div class="DeliveryMethod__title">Comment préférez-vous recevoir votre commande ?</div>
        <div class="DeliveryMethod__list">
            <div class="DeliveryMethod__Item">
                <input type="radio"
                       id="domicile"
                       name="deliveryMethod"
                       value="domicile"
                       v-model="deliveryMethod"/>
                <label for="domicile">Livraison à domicile à l'adresse souhaitée</label>
            </div>
            <div class="DeliveryMethod__Item">
                <input type="radio"
                       id="magazin"
                       name="deliveryMethod"
                       value="magazin"
                       v-model="deliveryMethod"/>
                <label for="magazin">Livraison gratuite dans le magasin</label>
            </div>
        </div>

        <div>Mode de livraison Choisi : {{ deliveryMethod }}</div>
    </div>
</template>

<script>
import cartMxn from '@/mixins/cart';

export default {
    name: 'DeliveryMethod',
    mixins: [cartMxn],
    data () {
        return {
            deliveryMethod: 'domicile'
        };
    },
    computed: {
        totalItems() {
            return this.cartMxn.getQuantity();
        }
    }
};
</script>

<style lang="scss" scoped>
    .DeliveryMethod {
        background: white;
        margin-top: 30px;
        padding: 15px 30px;

        &__title {
            font-weight: bold;
            margin-bottom: 15px;
        }

        &__list {
            margin-bottom: 10px;
        }

        &__Item {
            margin-bottom: 5px;
        }
    }
</style>
