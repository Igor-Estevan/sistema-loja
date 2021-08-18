<template>
  <section class="produtos">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2 class="produtos__title">Produtos</h2>
        </div>
        <div class="col-md-6">
          <input type="text" placeholder="Pesquisar ..." v-model="search" />
        </div>
      </div>
      <div class="row">
        <div v-for="event in eventsFiltered" :key="event.id" class="col-md-4">
          <Card :image="event.img" :title="event.title" :value="event.value" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Card from "./Card.vue";
export default {
  name: "Produtos",
  components: {
    Card,
  },
  data: function () {
    return {
      search: "",
      events: [
        {
          id: 1,
          img: require("../assets/MONITOR GAMER ACER NITRO KG2 SERIES 27.jpg"),
          title: "MONITOR GAMER ACER NITRO KG2 SERIES 27",
          value: "R$1.749,90",
        },
        {
          id: 2,
          img: require("../assets/HEADSET GAMER LOGITECH G335 PRETO.jpg"),
          title: "HEADSET GAMER LOGITECH G335 PRETO",
          value: "R$569,00",
        },
        {
          id: 3,
          img: require("../assets/SSD TEAM GROUP MP33 256GB M.2 NVME.jpg"),
          title: "SSD TEAM GROUP MP33 256GB M.2 NVME",
          value: "R$279,91",
        },
        {
          id: 4,
          img: require("../assets/WATER COOLER COOLER MASTER.jpg"),
          title: "WATER COOLER COOLER MASTER",
          value: "R$489,90",
        },
        {
          id: 5,
          img: require("../assets/MESA GAMER MANCER LEVIATÃ RGB.jpg"),
          title: "MESA GAMER MANCER LEVIATÃ RGB",
          value: "R$749,90",
        },
        {
          id: 6,
          img: require("../assets/KIT TECLADO E MOUSE COOLER MASTER.jpg"),
          title: "KIT TECLADO E MOUSE COOLER MASTER",
          value: "R$249,90",
        },
        {
          id: 7,
          img: require("../assets/COOLER PARA PROCESSADOR SCYTHE.jpg"),
          title: "COOLER PARA PROCESSADOR SCYTHE",
          value: "R$337,50",
        },
        {
          id: 8,
          img: require("../assets/PROCESSADOR INTEL CORE I7-10700K.jpg"),
          title: "PROCESSADOR INTEL CORE I7-10700K",
          value: "R$2.479,90",
        },
        {
          id: 9,
          img: require("../assets/CADEIRA GAMER 1STPLAYER DK1 PRETO.jpg"),
          title: "CADEIRA GAMER 1STPLAYER DK1 PRETO",
          value: "R$1.399,90",
        },
      ],
    };
  },
  computed: {
    eventsFiltered: function () {
      return this.events.filter(
        (event) => event.title.toLowerCase().indexOf(this.search) > -1
      );
    },
  },
};
</script>
<style>
</style>
}