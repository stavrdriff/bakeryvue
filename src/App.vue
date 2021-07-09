<template>
  <div id="app">
    <page-header />

    <slider />

    <v-select :options="['Canada', 'Ukraine', 'USA']"> </v-select>

    <ul>
      <li v-for="(btn, i) in btns" :key="btn">
        <button @click="showModal(btn, i)">Modal {{ i + 1 }}</button>
      </li>
    </ul>

    <modal
      @close="modalClose($event)"
      v-if="show_modal1"
      :title="button_title"
      :index="1"
    >
      <h2>Login</h2>
    </modal>

    <modal
      @close="modalClose($event)"
      v-if="show_modal2"
      :title="button_title"
      :index="2"
    >
      <h2>Cart</h2>
    </modal>

    <modal
      @close="modalClose($event)"
      v-if="show_modal3"
      :title="button_title"
      :index="3"
    >
      <h2>Modal 3</h2>
    </modal>

    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      @toCart="cart = $event"
    />
    {{ cart }}
  </div>
</template>
<script>
import ProductCard from "./components/ProductCard";
import Modal from "./components/Modal";
import Slider from "./components/Slider.vue";

export default {
  data: () => {
    return {
      products: [
        {
          id: 123,
          title: "Pepperoni Pizza",
          price: 24.99,
          discount: 5,
          image: "image1.jpg",
        },
        {
          id: 234,
          title: "Baked Pancakes",
          price: 44.89,
          discount: 3,
          image: "image1.jpg",
        },
        {
          id: 345,
          title: "Avocado",
          price: 20.0,
          image: "image1.jpg",
        },
        {
          id: 456,
          title: "Bunch of Orange",
          price: 29.99,
          image: "image1.jpg",
        },
      ],
      cart: {},
      button_title: "",
      btns: ["title1", "title2", "title3"],
      show_modal1: false,
      show_modal2: false,
      show_modal3: false,
    };
  },
  methods: {
    showModal(btn, i) {
      this["show_modal" + (i + 1)] = true;
      this.button_title = btn;
    },
    modalClose(event) {
      this["show_modal" + event] = false;
      console.log(event);
    },
  },

  name: "App",
  components: {
    ProductCard,
    Modal,
    Slider,
  },
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>