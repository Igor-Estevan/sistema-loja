<template>
  <div class="home">
    <Header />
    <Produtos />
    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Produtos from "../components/Produtos.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: { Header, Produtos, Footer },
};
</script>
<style>
</style>