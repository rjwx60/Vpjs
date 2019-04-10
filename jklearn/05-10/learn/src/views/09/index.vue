<template>
  <div>
    <PersonalInfo v-model="phoneInfo" :vertification.sync='vertification' :zip-code.sync="zipCode" />

    <!-- 编译后的结果 -->
    <!-- <PersonalInfo
      :phone-info="phoneInfo"
      :zip-code="zipCode"
      @change="val => (phoneInfo = val)"
      @update:zipCode="val => (zipCode = val)"
    /> -->

    phoneInfo： {{ phoneInfo }}
    <br />
    zipCode： {{ zipCode }}
    <br />
    vertification： {{vertification ? '' : '请输入正确手机格式'}}
  </div>
</template>
<script>
import PersonalInfo from "./PersonalInfo";
export default {
  components: {
    PersonalInfo
  },
  data() {
    return {
      phoneInfo: {
        areaCode: "+86",
        phone: ""
      },
      zipCode: "",
      vertification: true
    };
  }
};
</script>