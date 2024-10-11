import { ref } from 'vue';
import { defineStore } from 'pinia';

import ProdutoService from '@/service/produto';
const produtoService = new ProdutoService();

export const useProdutoStore = defineStore('produto', () => {
  const produtos = ref([]);

  async function getProdutos() {
    produtos.value = await produtoService.getProdutos();
  }

//   async function getProductsByCategory(category_id) {
//     products.value = await productService.getProductByCategory(category_id);
//   }

  async function createProduto(produto) {
    await produtoService.createProduto(produto);
    getProdutos();
  }

  return { produtos, createProduto, getProdutos };
});