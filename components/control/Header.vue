<template>
	<div class="w-full flex justify-start items-center pt-[11px] pr-[0px] pb-[11px] pl-[20px] bg-[#fff] border border-solid border-[#EFF3FB] h-[44px]">
    <div class="text-[16px] text-[#333] font-[600] mr-[20px]">{{ controlTitle }}</div>
    <div class="font-[500] text-[14px] text-[#F88646]">{{ controlDes }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
	controlTitle: string,
  controlDes: string,
}>()
</script>
