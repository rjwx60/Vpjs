<template>
  <div>
    <p>props.info: {{ info }}</p>
    <p>props.name: {{ name }}</p>
    <p>props.list: {{ list }}</p>
    <p>data.a: {{ a }}</p>
    <p>
      <button @click="handleBChange">change data.b</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'PropsAndData',
  props: {
    info: Object,
    name: String,
    list: Array
  },
  data() {
    return {
      a: 'hello',
      b: 'world'
    }
  },
  updated() {
    global.console.log('PropsAndaata has updated')
  },
  methods: {
    handleBChange() {
      this.b = 'vue' + Date.now()
      global.console.log('data.b change, but not update component', this.b)
    }
  },
}
</script>