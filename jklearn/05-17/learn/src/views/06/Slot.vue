<template>
  <div>
    <!-- 子组件插槽 -->
    <slot />
    <slot name="title" />
    <slot name="item" v-bind="{ value: 'vue' }" />
  </div>
</template>

<script>
export default {
  name: "SlotDemo"
};
</script>