<template>
	<div class="home-footer w-full relative">
		<div class="sm-footer-bg w-full h-[350px] pt-[128px] pl-[360px]" v-if="isShowFooterTop">
			<div class="bg-txt-1 font-[600] text-[32px] text-[#fff] mb-[20px]">
				更大更全更专业的AI算力集群，即刻开启算力租用
			</div>
			<div class="bg-txt-2 font-[400] text-[20px] text-[#fff]">
				10000+ 卡在线GPU、MLU、Ascend
			</div>
		</div>
		<div class="h-footer flex justify-center flex-col pl-[360px] pr-[360px] w-full h-[258px] bg-[#212631] cursor-pointer">
			<div class="flex pt-[40px] w-full h-[184px] border-b border-b-[#333945]">
				<div class="w-[25%]">
					<div class="text-[#fff] text-[16px] font-[500] mb-[22px]">产品与服务</div>
					<div class="text-[#ABABAB] text-[14px] font-[400] mb-[20px]">GPU租用</div>
					<div class="text-[#ABABAB] text-[14px] font-[400]">大客户1V1支持</div>
				</div>
				<div class="w-[25%]">
					<div class="text-[#fff] text-[16px] font-[500] mb-[22px]">帮助与支持</div>
					<div class="text-[#ABABAB] text-[14px] font-[400]">帮助文档</div>
				</div>
				<div class="w-[25%]">
					<div class="text-[#fff] text-[16px] font-[500] mb-[22px]">HuaYi</div>
					<div class="text-[#ABABAB] text-[14px] font-[400]">加入我们</div>
				</div>
				<img class="w-[25%] h-[72px]" src="@/assets/images/logo-icon.svg?url" />
			</div>
      <div class="footer-copy-right w-full h-[73px] flex items-center justify-center">
        <div class="font-[400] text-[14px] text-[#fff] mr-[30px]">Copyright © 2015-2022 华翼版权所有</div>
        <div class="font-[400] text-[14px] text-[#fff]">网站备案号：XXXXXXXXX</div>
      </div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	isShowFooterTop: boolean
}>()
</script>

<style lang="scss" scoped>
@import "./hFooter.scss";

.home-footer {
	.sm-footer-bg {
		background: url("@/assets/images/home/s-banner-bg.png") center center no-repeat;
		background-size: cover;
	}
}
</style>