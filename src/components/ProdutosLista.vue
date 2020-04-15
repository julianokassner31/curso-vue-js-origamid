<template>
    <section class="produtos-container">
        <transition mode="out-in">
            <div v-if="produtos && produtos.length" class="produtos" key="produtos">    
                <div class="produto" v-for="(produto, index) in produtos" :key="index">
                    <router-link :to="{name: 'produto', params: {id: produto.id}}">
                        <img
                            v-if="produto.fotos != null"
                            :src="produto.fotos[0].src" 
                            :alt="produto.fotos[0].titulo"
                        />
                        <p class="preco"> {{produto.preco}} </p>
                        <h2 class="titulo"> {{produto.nome}} </h2>
                        <p>{{produto.descricao}}</p>
                    </router-link>
                </div>

                <ProdutosPaginar :produtosTotal="produtosTotal" :produtosPorPagina="produtosPorPagina" />
            </div>

            <div class="sem-resultados" v-else-if="produtos && produtos.length === 0" key="sem-resultados">
                <p>Busca sem resultados. Tente outro termo!</p>
            </div>
            <PaginaCarregando  v-else key="carregando"/>
        </transition>
    </section>
    
</template>

<script>
import {api} from "@/services";
import {serialize} from "@/helpers";
import ProdutosPaginar from "@/components/ProdutosPaginar";

export default {
    name: "ProdutosLista",
    components: {
        ProdutosPaginar
    },

    data() {
        return {
            produtos: null,
            produtosTotal: 0,
            produtosPorPagina: 9

        }
    },
    
    created() {
        this.getProdutos();
    },

    computed: {
        url(){
            
            const queryString = serialize(this.$route.query);

            return `/produto?_limit=${this.produtosPorPagina}&${queryString}`;
        }
    },

    watch: {
        url() {
            this.getProdutos();
        }
    },

    methods: {
        
        getProdutos() {
            this.produtos = null;
            window.setTimeout(() => {
                api.get(this.url)
            .then(response => {
                this.produtosTotal = Number.parseInt(response.headers['x-total-count']);
                this.produtos = response.data;
            });
            }, 1500);
        }
    }
}
</script>

<style lang="scss" scoped>
.produtos-container {
    max-width: 1000px;
    margin: 0px auto;
}
.produtos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin: 30px;
}
.produto {
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
    padding: 10px;
    background: #fff;
    border-radius: 4px;
    transition: all 0.3s;
}
.produto:hover {
    box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
    transform: scale(1.1);
    position: relative;
    z-index: 1;
}
.produto img {
    border-radius: 4px;
    margin-bottom: 20px;
}
.titulo {
    margin-bottom: 10px;
}
.preco {
    color: #e80;
    font-weight: bold;
}
.sem-resultados {
 text-align: center;   
}

</style>