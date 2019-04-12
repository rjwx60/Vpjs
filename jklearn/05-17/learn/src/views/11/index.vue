<template>
  <div>
    <p>
      <button @click="handleNameChange">change this.name</button>
      <button @click="handleInfoChange">change this.info</button>
      <button @click="handleListChange">change this.list</button>
    </p>
    <!-- 传递多个事件 -->
    <PropsAndData :name="name" :info="info" :list="list" />
  </div>
</template>


<script>
import PropsAndData from './PropsAndData'
let name = 'world'
export default {
  components: {
    PropsAndData
  },
  data() {
    // 不触发子组件 update
    // this.name = name;
    return {
      // 触发子组件更新
      name: this.name,
      info: {
        number: undefined
      },
      // 不触发子组件 update
      // info: {},
      list: []
    }
  },
  methods: {
    handleNameChange() {
      this.name = "vue" + Date.now();
      console.log("this.name has change", this.name);
    },
    handleInfoChange() {
      this.info.number = 1;
      // this.$set(this.info, 'number', 1)
      console.log("this.info has change", this.info);
    },
    handleListChange() {
      this.list.push(1, 2, 3);
      console.log("this.list has pushed", this.list);
    }
  }
}
</script>
