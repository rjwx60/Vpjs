<template>
  <div>
    <ul>
      <li>name: {{name}}</li>
      <li>type: {{type}}</li>
      <li>list: {{list}}</li>
      <li>isVisible: {{isVisible}}</li>
    </ul>
    <button @click="handleClick">changeType</button>
  </div>
</template>

<script>
export default {
  name: 'PropsDemo',
  // 禁止自动挂在默认属性如 title
  inheritAttrs: false,
  // 方式1: 可不限定传入值类型
  // props: [
  //   'name',
  //   'type',
  //   'list',
  //   'isVisible'
  // ],
  // 方式2: 限定类型
  props: {
    name: String,
    list: {
      type: Array,
      // 对象或数组默认值必须从一个工厂函数获取
      default: () => []
    },
    onChange: {
      type: Function,
      // 对象或数组默认值必须从一个工厂函数获取
      default: () => {}
    },
    type: {
      validator: function(value) {
        return ['success', 'warning', 'danger'].includes(value)
      }
    },
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick() {
      // 调用父级方法，间接改变父级属性值
      this.onChange(this.type === 'success' ? 'warning' : 'success')
    }
  }
}
</script>