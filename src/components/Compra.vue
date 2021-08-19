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
          <img class="compra__image" src="../assets/store_logo.jpg" alt="" />
        </div>
      </div>
      <div class="row compra_title01">
        <div class="col-md-6 left-col">
          <h2>Produto01</h2>
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
  name: 'CalculoCompra',
  data: function() {
    return {
      preco: 10,
      quantidade: null,
      total: 0,
    };
  },
  methods: {
    toCalculate: function() {
      return this.preco * this.quantidade;
    },
    toChange: function() {
      if (this.quantidade < 0) {
        return this.preco * 0;
      }
      return (this.total = this.toCalculate());
    },
  },
};
</script>

<style>
.produto {
  padding: 50px 0px;
  background-color: #e2e2e2;
  width: 100%;
}
.produto_img {
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
.produto_title01 {
  padding-bottom: 15px;
  border-bottom: 1px solid #000000;
}
.right-col {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.calculo_total {
  font-size: 22px;
}
.btn_compra {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.btn_finalizar {
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 10px;
  border: 1px solid #000000;
}
.btn_finalizar:hover {
  cursor: pointer;
  background-color: rgb(98, 100, 94);
  transition: 0.5s ease;
}
</style>