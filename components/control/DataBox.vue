<template>
	<div class="control-data w-full bg-[#fff] border border-solid border-[#EFF3FB] rounded-[4px] h-[194px] p-[20px] mb-[20px]">
		<div class="font-[600] text-[16px] text-[#333] mb-[11px]">数据</div>
		<div class="flex flex-row items-center justify-between overflow-hidden">
			<div v-for="item in dataList" :key="item.id" class="flex-[1]">
				<div class="flex flex-col justify-around h-[120px] mr-[20px] rounded-[4px] bg-[#F5F8FA] pt-[16px] pb-[15px] pl-[20px]">
					<div class="font-[400] text-[14px] text-[#333]">{{ item.name }}</div>
					<div class="font-[400] text-[12px] text-[#6B7278]">{{ item.des }}</div>
					<div>
						<span class="text-[#333] text-[28px] mr-[4px]">{{ item.count }}</span>
						<span class="text-[14px] text-[#333]">GB</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	dataList: []
}>()
</script>
