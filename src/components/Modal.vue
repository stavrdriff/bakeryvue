<template>
  <div class="modal">
    <div class="modal__container">
      <button class="modal__close" @click="closeMethod(index)">Close</button>
      <slot></slot>
      <!-- <h2>{{ title }}</h2> -->
    </div>
  </div>
</template>
<script>
export default {
  props: ["index"],
  methods: {
    closeMethod(index) {
      // console.log(event);
      // event.target.closest(".modal").style.display = "none";
      this.$emit("close", this.index);
    },
  },
};
</script>
<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  &__container {
    width: 100%;
    max-width: 500px;
    position: relative;
    min-height: 150px;
    background: #fff;
  }
  &__close {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
}
</style>