<template>
  <div>
    <select
      placeholder= '区号'
      :value = 'phoneInfo.areaCode'
      @change = 'handleAreaCodeChange'
    >
      <option value="+86">+86</option>
      <option value="+60">+60</option>
    </select>
    <input
      type="number"
      placeholder="手机号"
      :value="phoneInfo.phone"
      @input="handlePhoneChange"
    />
    <input
      type="number"
      placeholder="邮编"
      :value="zipCode"
      @input="handleZipCodeChange"
    />
  </div>
</template>

<script>
export default {
  name: "PersonalInfo",
  model: {
    // 默认 value
    prop: "phoneInfo", 
    // 默认 input
    event: "change" 
  },
  props: {
    phoneInfo: Object,
    zipCode: String,
    vertification: Boolean
  },
  methods: {
    handleAreaCodeChange(e) {
      this.$emit("change", {
        ...this.phoneInfo,
        areaCode: e.target.value
      });
    },
    handlePhoneChange(e) {
      const phoneNum = e.target.value
      this.$emit('update:vertification', !!phoneNum && /^0?1[3|4|5|6|7|8][0-9]\d{8}$/.test(phoneNum))
      this.$emit("change", {
        ...this.phoneInfo,
        phone: phoneNum
      });
    },
    handleZipCodeChange(e) {
      this.$emit("update:zipCode", e.target.value);
    }
  }
}
</script>
