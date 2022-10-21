/**
 * Funções Básicas necessárias no sistema.
 */
const Principal = function() {

    /**
     * Busca no documento o elemnto HTML conforme ID.
     * 
     * @param {string} sId Identificador do Elemento HTML
     * @returns {HTMLElement} 
     */
    this.getElementoHtmlById = (sId) => {
        return document.getElementById(sId);
    }
    
    /**
     * Retorna o Modal de Produto se encontrado.
     * 
     * @returns {HTMLDialogElement}
     */
    const modalProduto = () => {
        let oModal = this.getElementoHtmlById('modal_produto');
        return oModal || alert('Modal de Produto não encontrado!');
    };

    /**
     * Controla o Menu, habilitando/desabilitando o mesmo.
     * 
     * @param {string} sIdMenu 
     */
    const controlaMenuMobile = sIdMenu => {
        let oMenuMobile = this.getElementoHtmlById(sIdMenu);
        if (oMenuMobile) {
            if (oMenuMobile.classList.contains('menu_aberto')) {
                oMenuMobile.classList.replace('menu_aberto','menu_fechado');
            } else {
                oMenuMobile.classList.replace('menu_fechado','menu_aberto');
            }
        } else {
            alert('Menu não encontrado!');
        }
    }
    
    return {

        /**
         * Abre o modal de produto.
         */
        abreModalProduto: () => {
            modalProduto().showModal();
        },

        /**
         * Fecha o modal de produto.
         */
        fechaModalProduto: () => {
            modalProduto().close();
        },

        /**
         * Habilita/Desabilita (Controle) do menu de filtro Mobile.
         */
        controlaMenuFiltroMobile: () => {
            controlaMenuMobile('menu_filtro_mobile');
        },

        /**
         * Habilita/Desabilita (Controle) do menu de navegação Mobile.
         */
        controlaMenuNavegacaoMobile: () => {
            controlaMenuMobile('menu_navegacao_mobile');
        },

    }
}();