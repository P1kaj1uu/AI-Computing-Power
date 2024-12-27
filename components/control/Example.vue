<template>
	<div class="control-example mb-[20px] w-full bg-[#fff] border border-solid border-[#EFF3FB] rounded-[4px] h-[168px] relative cursor-pointer">
		<div class="font-[600] text-[16px] text-[#333] pt-[20px] pl-[20px]">实例</div>
		<div class="ex-box flex flex-start items-center">
			<div class="ex-box-l flex flex-[2] p-[20px] pl-[38px]">
        <div class="ex-box-item flex-[1]" v-for="item in exampleList" :key="item.id">
					<div class="flex flex-col items-start h-[67px]">
						<div class="flex justify-center items-center">
							<div class="font-[400] text-[14px] text-[#333] mb-[5px] mr-[8px]">{{ item.name }}</div>
							<img v-show="item.isShow" class="mb-[4px]" src="@/assets/images/question-icon.svg?url" />
						</div>
						<div class="text-[28px] text-[#09C073]" :class="{ 'active-color': item.isShow }">{{ item.count }}</div>
					</div>
				</div>
      </div>
			<div class="w-[1px] h-[84px] border border-solid border-[#E7EFF0] absolute right-[354px] example-line"></div>
			<div class="ex-box-r flex flex-col justify-center h-[84px] flex-[1]">
				<div class="flex justify-around mb-[12px]">
					<div v-for="item in warnList" :key="item.id">
						<div class="flex flex-col">
							<div class="flex justify-start items-center mb-[12px]">
								<div class="mr-[8px] font-[400] text-[14px] text-[#333]">{{ item.name }}</div>
								<img v-show="item.isShow" src="@/assets/images/question-icon.svg?url" />
							</div>
							<div class="flex justify-start items-center">
								<n-switch size="small" @update:value="handleUpdateValue(item.id)" />
								<div class="ml-[8px] font-[400] text-[14px] text-[#333]">{{ item.status }}</div>
							</div>
						</div>
					</div>
				</div>
				<div class="ex-send text-[#09C073] font-[500] text-[14px] indent-[44px]">发送记录 ></div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { NSwitch } from "naive-ui"

const emit = defineEmits<{
	(e: "changeStatus", value: number): void
}>()
const handleUpdateValue = (id: number) => {
	emit("changeStatus", id)
}

const props = defineProps<{
	exampleList: []
	warnList: []
}>()
</script>

<style  lang="scss" scoped>
@import "./example.scss";

.control-example {
	.active-color {
		color: #F88646;
	}
}
</style>
