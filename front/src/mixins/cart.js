import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters({
            cartArticles: 'cartArticles'
        }),
        cartMxn () {
            return {
                getQuantity: () => {
                    return this.cartArticles.reduce((a, b) => a + (b['qty'] || 0), 0);
                },
                getTotalAmount: () => {
                    return this.cartArticles.reduce((a, b) => a + (b.price.base.amount * b.qty || 0), 0);
                },
                deleteArticle: (ref) => {
                    let index = this.cartArticles.map(article => {
                        return article.reference;
                    }).indexOf(ref);
                    this.cartArticles.splice(index, 1);
                }
            };
        }
    }
};
