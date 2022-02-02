<template>
    <div class="ModalConfirm">
        <div class="ModalConfirm__message">
            Suppression de l'article <br>
            Êtes-vous sûr(e) de vouloir supprimer cet article du panier ?
        </div>
        <div class="ModalConfirm__bloc">
            <div class="ModalConfirm__blocBtn" 
                 @click="confirm()">confirmer</div>
            <div class="ModalConfirm__blocBtn"
                 @click="close()">fermer</div>
        </div>
    </div>
</template>

<script>
    import modalMxn from '@/mixins/modal';
    import cartMxn from "@/mixins/cart";

    export default {
        name: 'Confirm',
        props: {
            reference: {
                type: String
            }
        },
        mixins: [modalMxn, cartMxn],
        methods: {
            confirm() {
                this.cartMxn.deleteArticle(this.reference);
                this.close();
            },
            close () {
                this.modalMxn.closeModal('confirm');
            }
        }
    };
</script>
s
<style lang="scss" scoped>
.ModalConfirm {  
    padding: 15px;     
    display: flow-root;

    &__bloc {
        display: inline-flex;
        float: right;

        &Btn {
            margin: 5px 20px;
            text-decoration: underline;
        }
    }
}
</style>
