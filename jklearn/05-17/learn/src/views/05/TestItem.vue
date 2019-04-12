<template>
  <div>
    <li class="item">
      <input type="checkbox" v-model='checked'>
      <!-- 插槽 - 插槽名 - 插槽发送值 -->
      <slot name="item" v-bind="{checked}"></slot>
    </li>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return{
      checked: false
    }
  }
}
</script>

<style scoped>
  .item {
    color: orange;
  }
</style>