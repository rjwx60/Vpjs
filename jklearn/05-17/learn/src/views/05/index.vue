<template>
  <div>
    <input type="text" v-model="inputInfo">
    <button @click.prevent="addTodoItem">Add todoItem</button>
    <test-item v-for="item in todoList" :key="item">
      <!-- 插槽 - 插槽名 - 插槽接收值(对象) -->
      <template v-slot:item="sonPropsObj">
        <span :style="{fontSize: '16px', color: sonPropsObj.checked ? 'red' : 'grey'}">{{item}}</span>
      </template>
    </test-item>
  </div>
</template>

<script>
import TestItem from './TestItem'
export default {
  components: {
    TestItem
  },
  data() {
    return {
      inputInfo: '',
      todoList: []
    }
  },
  methods: {
    addTodoItem() {
      this.todoList.push(this.inputInfo)
      this.inputInfo = ''
    }
  }
}
</script>

<style lang="">
  
</style>