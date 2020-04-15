import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PaginaCarregando from "@/components/PaginaCarregando.vue";

Vue.config.productionTip = false;

Vue.component("PaginaCarregando", PaginaCarregando);
Vue.filter("numeroPreco", (preco: any) => {
  const valor = Number(preco);
  if(!isNaN(valor)) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  } else {
    return "R$0,00"
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
