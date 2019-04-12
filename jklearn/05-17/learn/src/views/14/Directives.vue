<template>
  <div>
    <h2>v-text</h2>
    <!-- 将替代掉 innerHTML -->
    <div v-text="'hello vue'">hello world</div>
    <h2>v-html</h2>
    <!-- 允许输出标签 -->
    <div v-html="'<span style=&quot;color: red&quot;>hello vue</span>'">
      hello world
    </div>
    <h2>v-show</h2>
    <!-- visibility -->
    <div v-show="show">hello vue</div>
    <button @click="show = !show">change show</button>
    <h2>v-if v-esle-if v-else</h2>
    <!-- display -->
    <div v-if="number === 1">hello vue {{ number }}</div>
    <div v-else-if="number === 2">hello world {{ number }}</div>
    <div v-else>hello geektime {{ number }}</div>
    <h2>v-for v-bind</h2>
    <!-- 向父级传递数据 -->
    <div v-for="num in [1, 2, 3]" v-bind:key="num">hello vue {{ num }}</div>
    <h2>v-on</h2>
    <button v-on:click="number = number + 1">number++</button>
    <h2>v-model</h2>
    <!-- 双向绑定-单向数据流 -->
    <input v-model="message" />
    <h2>v-pre</h2>
    <div v-pre>{{ this will not be compiled }}</div>
    <h2>v-once</h2>
    <div v-once>
      {{ number }}
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    this.log = window.console.log;
    return {
      show: true,
      number: 1,
      message: "hello"
    };
  }
};
</script>
