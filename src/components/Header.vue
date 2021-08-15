<template>
  <header class="header">
    <div class="container"></div>
    <div class="row">
      <div class="col-md-6">
        <h1 class="logo">
          <img class="logo__img" src="../assets/logo.png" />
        </h1>
      </div>
      <div class="col-md-6">
        <p class="header__text">A maior loja de informatica</p>
      </div>
      <nav class="menu">
        <ul>
          <li><router-link to="/">Clientes</router-link></li>
          <li><router-link to="/noticias">Pedidos</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.header {
  background-color: black;
  height: 80px;
  width: 100%;
}
.logo {
  width: 100%;
  padding: 0px;
  margin-top: 10px;
}
.logo__img {
  width: 180px;  
  border-radius: 15px;
  }
.header__text {
  color: white;
  font-size: 14px;
  font-style: italic;
  margin: 8px;
  font-weight: 700;
  text-align: center;
}
.menu {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  color: white;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
}
.menu ul li {
  padding: 4px 14px;
  font-size: 16px;
  font-weight: 900;
  letter-spacing: 0.5px;
}
.menu ul li:not(:last-child):after {
  content: "";
  display: inline-block;
  width: 1px;
  background-color: #e2e2e2;
  height: 10px;
  margin-left: 10px;
}
.menu ul li:hover {
  background-color:darkgray;
}
</style>