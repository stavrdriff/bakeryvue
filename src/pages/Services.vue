<template>
  <div id="main" class="wrap">
    <h1>Услуги</h1>
    <ul>
      <li
        v-for="service in services"
        :key="service.name"
        @click="service.isActive = !service.isActive"
        :class="{ active: service.isActive }"
      >
        {{ service.name }} <span>{{ service.price }}</span>
      </li>
    </ul>
    <div class="total">
      Итого: <span>{{ result }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      services: [
        {
          name: "Веб разработка",
          price: 400,
          isActive: false,
        },
        {
          name: "Дизайн",
          price: 400,
          isActive: false,
        },
        {
          name: "Интеграция",
          price: 250,
          isActive: false,
        },
        {
          name: "Обучение",
          price: 220,
          isActive: false,
        },
      ],
      countPrice: [],
    };
  },
  computed: {
    result() {
      let summ = 0;
      this.services.forEach((element) => {
        if (element.isActive) {
          summ = summ + element.price;
        }
      });
      return summ;
    },
  },
};
</script>
<style>
@import url(https://fonts.googleapis.com/css?family=Cookie);

.wrap {
  background-color: #61a1bc;
  border-radius: 2px;
  box-shadow: 0 1px 1px #ccc;
  width: 500px;
  padding: 35px 60px;
  margin: 50px auto;
}

.wrap h1 {
  color: #fff;
  font-size: 64px;
  font-family: "Cookie", cursive;
  font-weight: normal;
  line-height: 1;
  text-shadow: 0 3px 0 rgba(0, 0, 0, 0.1);
}

.wrap ul {
  padding: 0;
  list-style: none;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin: 20px 0 15px;
}

.wrap ul li {
  padding: 20px 30px;
  background-color: #e35885;
  margin-bottom: 8px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.wrap ul li span {
  float: right;
}

.wrap ul li.active {
  background-color: #8ec16d;
}

.total {
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  padding: 15px 30px;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  color: #fff;
}

div.total span {
  float: right;
}
</style>