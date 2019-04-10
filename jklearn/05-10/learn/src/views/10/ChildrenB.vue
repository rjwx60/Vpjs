<template>
  <div class="border1">
    <h2>B 结点 {{ number }}</h2>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    number: Number
  },
  mounted() {
    global.console.log(`B${this.number || ""} mounted`);
  },
  updated() {
    global.console.log(`B${this.number || ""} updated`);
  },
  destroyed() {
    global.console.log(`B${this.number || ""} destroyed`);
  }
};
</script>
