<template>
  <section class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <p class="footer__text">Todos os direitos reservados</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style>
.footer {
  background-color: #0a0a0a;
  width: 100%;
  height: 70px;
  text-align: center;
}
.footer .footer__text {
  color: white;
  font-size: 16px;
  padding-top: 20px;
}
</style>
