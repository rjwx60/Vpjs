<template>
  <div>
    <ul>
      <li>name: {{name || '--'}}</li>
    </ul>
    <!-- 输入属性  -->
    <input type="text" :value='name' @change='handleChange'>
    <div @click='handleDivClick'>
      <button @click='handleClick'>重置成功</button>
      <button @click.stop='handleClick'>重置失败</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventsDemo',
  props: {
    name: String
  },
  methods: {
    handleChange(e) {
      this.$emit('change', e.target.value)
    },
    handleDivClick() {
      this.$emit('change', '')
    },
    handleClick() {

    }
  }
}
</script>

<style lang="">
  
</style>