<template>
  <div>
    <a-tabs>
      <a-tab-pane key="clock" tab="时钟">
        <button @click="destroyClock = !destroyClock">
          {{ destroyClock ? "加载时钟" : "销毁时钟" }}
        </button>
        <!-- 时钟组件 -->
        <Clock v-if="!destroyClock" />
      </a-tab-pane>
      <a-tab-pane key="Functional" tab="函数式组件">
        <!-- 函数组件 - 无关状态 -->
        <Functional :name="name" />
        <TempVar
          :var1="`hello ${name}`"
          :var2="destroyClock ? 'is clock destory' : 'is clock not destory'"
        >
          <template v-slot="{ var1, var2 }">
            {{ var1 }}
            {{ var2 }}
          </template>
        </TempVar>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import Clock from "./Clock";
import Functional from "./Functional";
import TempVar from "./TempVar";
export default {
  components: {
    Clock,
    Functional,
    TempVar
  },
  data() {
    return {
      destroyClock: false,
      name: "vue"
    };
  }
};
</script>
