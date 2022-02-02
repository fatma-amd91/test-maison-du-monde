<template>
    <div class="SideBarCart">
        <div class="SideBarCart__content">
            <cart-component/>
            <div class="SideBarCart__btn"
                 @click="goCart()">aller au panier</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SideBarCart',
        components: {
            'CartComponent': () => import(/* webpackMode: "eager", webpackChunkName: "Cart" */'@/components/base/Cart')
        },
        methods: {
            goCart() {
                this.$store.dispatch('toggleSidebar');
                this.$router.push('/cart');
            }
        }
    };
</script>

<style lang="scss" scoped>
.SideBarCart {
    min-height: 100vh;
    position: fixed;
    transition: all 0.25s;
    width: 350px;
    border: 1px solid #e8e8e8;
    top: 60px;
    right: -352px;
    background: white;
    z-index: 1;

    &__btn {
        float: right;
        margin: 20px 20px 0 0;
        background: #e8e8e8;
        padding: 5px 10px;
    }
    
    & .Cart {
        padding: 0;

        ::v-deep .Article {
            padding: 10px;

            &__details {
                flex-direction: column;

                &Left {
                    margin-bottom: 25px;
                }
                
                &Btn {
                    position: relative;
                }
            }
        }
    }

    .App.is-sidebar-open & {
        right: 0;
    }
}
</style>
