<template>
  <div class="control-header flex justify-between w-full">
		<div class="flex font-[500] text-[16px] text-[#333] cursor-pointer">
			<div class="mr-[30px] ct-title ct-title-7" @click="skipHome">首页</div>
			<div class="mr-[30px] ct-title ct-title-6" @click="skipMarket">算力市场</div>
			<div class="mr-[30px] ct-title ct-title-5">AI服务器</div>
			<div class="mr-[30px] ct-title ct-title-4">算法社区</div>
			<div class="mr-[30px] ct-title ct-title-3">私有云</div>
			<div class="mr-[30px] ct-title ct-title-2">帮助文档</div>
			<div class="ct-title-1">更多</div>
		</div>
		<div class="cursor-pointer control-active whitespace-nowrap">控制台</div>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"

const router = useRouter()
const skipHome = () => {
	router.push({ name: 'Home' })
}
const skipMarket = () => {
	router.push({ name: 'Market', query: { 'activeIndex': 2 } })
}
</script>

<style lang="scss" scoped>
.control-header {
  .control-active {
		border-bottom: 3px solid #09C073;
	}

  @media (max-width: 1800px) {
    .ct-title {
      margin-right: 25px;
    }
    .ct-title-1 {
      display: none;
    }
  }

  @media (max-width: 1750px) {
    .ct-title {
      margin-right: 20px;
    }
    .ct-title-2 {
      display: none;
    }
  }

  @media (max-width: 1650px) {
    .ct-title-3 {
      display: none;
    }
  }

  @media (max-width: 1550px) {
    .ct-title-4 {
      display: none;
    }
  }

  @media (max-width: 1450px) {
    .ct-title-5 {
      display: none;
    }
  }

  @media (max-width: 1350px) {
    .ct-title-6 {
      display: none;
    }
  }

  @media (max-width: 1200px) {
    .ct-title-7 {
      display: none;
    }
  }
}
</style>