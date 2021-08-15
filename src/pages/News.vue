<template>
  <section class="news">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 class="news__title">Notícias</h2>
        </div>
      </div>
      <div class="row">
        <div
          v-for="myNew in news"
          :key="myNew.id"
          :class="{ 'col-md-12': myNew.id === 1, 'col-md-6': myNew.id !== 1 }"
        >
          <div class="news__box">
            <img :src="myNew.img" />
            <h3>{{ myNew.title }}</h3>
            <p>{{ myNew.text }}</p>
            <span>Leia mais</span>
          </div>
        </div>
        <div class="col-md-12">
          <router-link to="/noticias" class="news__btn"
            ><button>Veja mais</button></router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script>
//import Header from "../components/Header.vue";

export default {
  name: "News",
  //components : { Header },
  data: function () {
    return {
      news: [
        {
          id: 1,
          title: "Lorem Ipsum is",
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type specimen book. `,
          //img: require("../assets/news1.png"),
        },
        {
          id: 2,
          title: "Lorem Ipsum is",
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type specimen book. `,
          //img: require("../assets/news3.png"),
        },
        {
          id: 3,
          title: "Lorem Ipsum is",
          text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type specimen book. `,
          //img: require("../assets/news2.png"),
        },
      ],
    };
  },
};
</script>
<style>
.news {
  background-color: #212121;
  padding: 56px 0;
  color: #e2e2e2;
}
.news__title {
  font-size: 36px;
}
.news h3 {
  font-size: 26px;
}
.news p {
  font-size: 16px;
}
.news span {
  color: #c3121c;
  font-size: 14px;
}
.news img {
  width: 100%;
}
.news__box {
  margin-bottom: 30px;
}
.news button {
  width: 170px;
  height: 40px;
  background: #c3121c;
  color: #212121;
  border-radius: 6px;
  border: none;
  font-weight: bold;
  margin: 30px auto;
}
.news__btn {
  display: inherit;
  text-align: center;
}
</style>