<template>
  <div class="shop">
    <div class="row m-auto">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @toCart="cart = $event"
      />
    </div>
  </div>
</template>
<script>
import ProductCard from "./../components/ProductCard.vue";

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
    };
  },
  components: {
    ProductCard,
  },
};
</script>

<style>
.shop {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
</style>
