<template>
	<div class="home-top fixed z-[10] cursor-pointer flex items-center justify-between w-full h-[60px] bg-[#fff] pl-[20px] pr-[20px]">
    <div class="home-top-l flex items-center">
      <Logo :mini="false" class="mr-[104px] home-top-logo" />
      <div class="home-top-title mr-[40px] font-[500] text-[16px] text-[#333] leading-[35px] h-[35px]" :class="{ 'active-top': route.query.activeIndex == 1 || JSON.stringify(route.query).length == 2 }" @click="toggeleActiveTop('首页')">首页</div>
      <div class="home-top-title mr-[40px] font-[500] text-[16px] text-[#333] leading-[35px] h-[35px]" :class="{ 'active-top': route.query.activeIndex == 2 }" @click="toggeleActiveTop('算力市场')">算力市场</div>
      <div class="home-top-title top-title-5 mr-[40px] font-[500] text-[16px] text-[#333] leading-[35px] h-[35px]">AI服务器</div>
      <div class="home-top-title top-title-4 mr-[40px] font-[500] text-[16px] text-[#333] leading-[35px] h-[35px]">算法社区</div>
      <div class="home-top-title top-title-3 mr-[40px] font-[500] text-[16px] text-[#333] leading-[35px] h-[35px]">私有云</div>
      <div class="home-top-title top-title-2 mr-[40px] font-[500] text-[16px] text-[#333] leading-[35px] h-[35px]">帮助文档</div>
      <div class="flex items-center top-title-1">
        <div class="font-[500] text-[16px] text-[#333] mr-[4px]">更多</div>
        <img src="@/assets/images/home/arrow-icon.svg?url" />
      </div>
    </div>
    <div class="home-top-r flex items-center">
      <div class="font-[500] text-[16px] text-[#333] leading-[35px] h-[35px] top-title-6">控制台</div>
      <div class="font-[500] ml-[40px] text-[16px] text-[#333] leading-[35px] h-[35px]" @click="skipLogin">登录</div>
      <div class="register-btn ml-[20px] flex justify-center items-center w-[92px] h-[61px] font-[500] text-[16px] text-[#fff]">注册</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from "@/app-layouts/common/Logo.vue"
import { ref } from 'vue'
import { useRouter, useRoute } from "vue-router"

const router = useRouter()
const route = useRoute()

const toggeleActiveTop = (name: string) => {
  switch (name) {
    case '首页':
      router.push({ name: 'Home', query: { 'activeIndex': 1 } })
      break;
    case '算力市场':
      router.push({ name: 'Market', query: { 'activeIndex': 2 } })
      break;
    case 'AI服务器':
      break;
    case '算法社区':
      break;
    case '私有云':
      break;
    case '帮助文档':
      break;
    default:
      break;
  }
}

const skipLogin = () => {
  window.location.href = "/login"
}
</script>

<style lang="scss" scoped>
@import "./hTop.scss";

.home-top {
  box-shadow: 0px 4px 12px 0px rgba(231,239,240,0.8);
  &-r {
    .register-btn {
      background: linear-gradient(90deg, #59D9AD 0%, #0AB4B9 100%);
    }
  }
  .active-top {
    border-bottom: 3px solid #09C073;
  }
}
</style>