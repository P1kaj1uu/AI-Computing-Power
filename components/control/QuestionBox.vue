<template>
	<div class="control-question cursor-pointer w-full bg-[#fff] border border-solid border-[#EFF3FB] rounded-[4px] h-[216px] p-[20px]">
    <div class="flex justify-between items-center mb-[20px]">
      <div class="font-[600] text-[16px] text-[#333]">常见问题</div>
      <div class="font-[400] text-[14px] text-[#09C073]">查看更多 ></div>
    </div>
    <div v-for="item in questionList" :key="item.id">
      <div class="flex justify-start items-center mb-[16px]">
        <div class="mr-[6px] w-[8px] h-[8px] circle"></div>
        <div class="font-[400] text-[14px] text-[#333]">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
	questionList: []
}>()
</script>

<style lang="scss" scoped>
.control-question {
  .circle {
    border-radius: 50%;
    background: linear-gradient(180deg, #0CE6BB 0%, #0AC0D2 100%);
  }
}
</style>
