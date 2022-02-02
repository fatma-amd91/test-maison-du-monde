const componentsModal = {
    confirm: 'Confirm'
};

export default {
    computed: {
        modalMxn () {
            return {
                openModal: (id, arg) => {
                    let data = arg ? arg : null;
                    this.$modal.show(() => import(/* webpackChunkName: "Modals[request]" */'@/components/modals/' + componentsModal[id]), data, {
                        name: id,
                        classes: `js-modal-${id}`,
                        overlayTransition: 'v--modal-transition',
                        clickToClose: false,
                        adaptive: true,
                        height: 'auto'
                    });
                },
                closeModal: (openedId) => {
                    this.$modal.hide(openedId);
                }
            };
        }
    }
};
