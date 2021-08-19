<template>
  <div class="home">
    <Header />
    <Compra />
    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Compra from '../components/Compra.vue';

export default {
  name: "Home",
  components: { Header, Compra, Footer },
};
</script>
<style>
</style>