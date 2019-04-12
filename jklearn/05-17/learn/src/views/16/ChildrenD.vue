<template>
  <div class="border1">
    <h2>D 结点</h2>
    <ChildrenG />
    <!-- 子组件通过 ant-design 自定义指令，调用 -->
    <ChildrenH v-ant-ref="c => setChildrenRef('childrenH', c)" />
    <ChildrenI />
  </div>
</template>
<script>
import ChildrenG from "./ChildrenG";
import ChildrenH from "./ChildrenH";
import ChildrenI from "./ChildrenI";
export default {
  components: {
    ChildrenG,
    ChildrenH,
    ChildrenI
  },
  // 获取上级 provider 出来的数据
  inject: {
    setChildrenRef: {
      default: () => {}
    }
  }
};



// "use strict";

// Object.defineProperty(exports, "__esModule", {
//   value: true
// });
// exports.default = {
//   install: function install(Vue) {
//     var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
//     var directiveName = options.name || 'ref';
//     Vue.directive(directiveName, {
//       bind: function bind(el, binding, vnode) {
//         binding.value(vnode.componentInstance || el, vnode.key);
//       },
//       update: function update(el, binding, vnode, oldVnode) {
//         if (oldVnode.data && oldVnode.data.directives) {
//           var oldBinding = oldVnode.data.directives.find(function (directive) {
//             var name = directive.name;
//             return name === directiveName;
//           });
//           if (oldBinding && oldBinding.value !== binding.value) {
//             oldBinding && oldBinding.value(null, oldVnode.key);
//             binding.value(vnode.componentInstance || el, vnode.key);
//             return;
//           }
//         }
//         // Should not have this situation
//         if (vnode.componentInstance !== oldVnode.componentInstance || vnode.elm !== oldVnode.elm) {
//           binding.value(vnode.componentInstance || el, vnode.key);
//         }
//       },
//       unbind: function unbind(el, binding, vnode) {
//         binding.value(null, vnode.key);
//       }
//     });
//   }
// };
</script>
