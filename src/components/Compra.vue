<template>
  <section class="compra">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2 class="compra__title">Detalhe do produto</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 compra_img">
          <img
            class="compra__image"
            src="../assets/MESA GAMER MANCER LEVIATÃ RGB.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="row compra_title01">
        <div class="col-md-6 left-col">
          <h2>MESA GAMER MANCER LEVIATÃ RGB</h2>
          <h3>R${{ preco }}</h3>
        </div>
        <div class="col-md-6 right-col">
          <h3>Quantidade</h3>
          <input
            class="input_quantidade"
            type="number"
            v-model="quantidade"
            @change="toChange"
            min="0"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <h2>Descrição</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            expedita quae adipisci, accusantium numquam quaerat voluptas
            corporis eos ullam possimus eum magnam facere soluta libero earum
            rerum delectus hic nostrum? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Debitis impedit voluptate, quos magnam culpa a ut
            corporis, doloremque error corrupti accusamus ullam? Laboriosam quae
            molestiae eaque, amet iste quas reiciendis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Sunt expedita quae adipisci,
            accusantium numquam quaerat voluptas corporis eos ullam possimus eum
            magnam facere soluta libero earum rerum delectus hic nostrum? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Debitis impedit
            voluptate, quos magnam culpa a ut corporis, doloremque error
            corrupti accusamus ullam? Laboriosam quae molestiae eaque, amet iste
            quas reiciendis.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <p class="total">
            Total: {{ quantidade }} * {{ preco }} = {{ total }}
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 button_compra">
          <button class="button_finalizar">Fazer pedido</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CalculoCompra",
  data: function () {
    return {
      preco: 749.9,
      quantidade: 1,
      total: 749.9,
    };
  },
  methods: {
    toCalculate: function () {
      return this.preco * this.quantidade;
    },
    toChange: function () {
      if (this.quantidade < 0) {
        return this.preco * 0;
      }
      return (this.total = this.toCalculate());
    },
  },
};
</script>

<style>
.compra {
  padding: 50px 0px;
  background-color: white;
  width: 100%;
}
.compra_img {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.input_quantidade {
  border-radius: 10px;
  font-size: 16px;
  background-color: #f1f1f1;
  border: 1px solid #f1f1f1;
  width: 70px;
  height: 30px;
  padding: 4px 14px;
  text-align: center;
}
.input_quantidade:focus {
  outline: none;
  border: 1px solid green;
  transition: 0.5s ease;
}
.compra_title01 {
  padding-bottom: 15px;
  border-bottom: 1px solid #000000;
}
.right-col {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.total {
  font-size: 22px;
}
.button_compra {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.button_finalizar {
  width: 170px;
  height: 40px;
  border-radius: 6px;
  background-color: black;
  color: #ffffff;
  border: none;
}
.button_finalizar:hover {
  cursor: pointer;
  background-color: darkgray;
}
</style>