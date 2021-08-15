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
          <Card :title="event.title" :value="event.value" />
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
          //img: require("../assets/MONITOR GAMER ACER NITRO KG2 SERIES 27.jpg"),
          title: "MONITOR GAMER ACER NITRO KG2 SERIES 27",
          value: "R$1.749,90",
        },
        {
          id: 2,
          title: "HEADSET GAMER LOGITECH G335 PRETO",
          value: "R$569,00",
        },
        {
          id: 3,
          title: "SSD TEAM GROUP MP33 256GB M.2 NVME",
          value: "R$279,91",
        },
        {
          id: 4,
          title: "WATER COOLER COOLER MASTER",
          value: "R$489,90",
        },
        {
          id: 5,
          title: "MESA GAMER MANCER LEVIATÃ RGB",
          value: "R$749,90",
        },
        {
          id: 6,
          title: "KIT TECLADO E MOUSE COOLER MASTER",
          value: "R$249,90",
        },
        {
          id: 7,
          title: "COOLER PARA PROCESSADOR SCYTHE",
          value: "R$337,50",
        },
        {
          id: 8,
          title: "PROCESSADOR INTEL CORE I7-10700K",
          value: "R$2.479,90",
        },
        {
          id: 9,
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
.pesquisar {
text-align: left;
}
</style>
}