<template>
	<div class="home-sidebar cursor-pointer absolute top-[468px] right-[20px]">
    <img src="@/assets/images/home/coupon-icon.png" class="h-side-img mb-[12px]" />
    <div class="side-list pt-[16px] pl-[17px] w-[58px] h-[200px] bg-[#fff] rounded-[35px] border border-solid border-[#EFF3FB]">
      <div v-for="item in sideBarList" :key="item.id" class="side-item mb-[16px]" @mousemove="mousemoveHandle(item.id)" @mouseleave="mouseleaveHandle">
        <template v-if="item.name == '客服'">
          <Icon :size="24" class="mb-[2px]" v-show="!isSerStatic">
            <ServiceStaticIcon />
          </Icon>
          <Icon :size="24" class="mb-[2px]" v-show="isSerStatic">
            <ServiceActiveIcon />
          </Icon>
          <div class="text-[#6B7278] text-[12px] font-[400]" :class="{ 'active-color-1': isSerStatic }">{{ item.name }}</div>
        </template>
        <template v-if="item.name == '合作'">
          <Icon :size="24" class="mb-[2px]" v-show="!isBusStatic">
            <BusinessStaticIcon />
          </Icon>
          <Icon :size="24" class="mb-[2px]" v-show="isBusStatic">
            <BusinessActiveIcon />
          </Icon>
          <div class="text-[#6B7278] text-[12px] font-[400]" :class="{ 'active-color-2': isBusStatic }">{{ item.name }}</div>
        </template>
        <template v-if="item.name == '反馈'">
          <Icon :size="24" class="mb-[2px]" v-show="!isFeedStatic">
            <FeedbackStaticIcon />
          </Icon>
          <Icon :size="24" class="mb-[2px]" v-show="isFeedStatic">
            <FeedbackActiveIcon />
          </Icon>
          <div class="text-[#6B7278] text-[12px] font-[400]" :class="{ 'active-color-3': isFeedStatic }">{{ item.name }}</div>
        </template>
      </div>
    </div>

    <div v-show="isShowWx" class="absolute right-[82px] top-[165px] flex flex-col justify-center items-center w-[188px] h-[212px] bg-[#fff] border border-solid border-[#CCD4D8]">
      <div class="mb-[12px] font-[400] text-[12px] text-[#333]">微信扫描咨询客服</div>
      <img class="w-[142px] h-[142px]" src="@/assets/images/home/wx.png" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import Icon from "@/components/common/Icon.vue"
import ServiceStaticIcon from "@/assets/images/home/service-static.svg"
import ServiceActiveIcon from "@/assets/images/home/service-active.svg"
import BusinessStaticIcon from "@/assets/images/home/business-static.svg"
import BusinessActiveIcon from "@/assets/images/home/business-active.svg"
import FeedbackStaticIcon from "@/assets/images/home/feedback-static.svg"
import FeedbackActiveIcon from "@/assets/images/home/feedback-active.svg"

const isSerStatic = ref(false)
const isBusStatic = ref(false)
const isFeedStatic = ref(false)
const isShowWx = ref(false)

const sideBarList = reactive([
  {
    id: 1,
    name: '客服',
  },
  {
    id: 2,
    name: '合作',
  },
  {
    id: 3,
    name: '反馈',
  },
])

const mousemoveHandle = (id: number) => {
  switch (id) {
    case 1:
      isSerStatic.value = true
      isShowWx.value = true
      break;
    case 2:
      isBusStatic.value = true
      break;
    case 3:
      isFeedStatic.value = true
      break;
    default:
      break;
  }
}
const mouseleaveHandle = () => {
  isSerStatic.value = false
  isBusStatic.value = false
  isFeedStatic.value = false
  isShowWx.value = false
}
</script>

<style lang="scss" scoped>
@import "./hSideBar.scss";

.home-sidebar {
  z-index: 99;
  .side-list {
    box-shadow: 0px 4px 12px 0px rgba(231,239,240,0.8);
  }
  .active-color-1 {
    color: #09C073;
  }
  .active-color-2 {
    color: #09C073;
  }
  .active-color-3 {
    color: #09C073;
  }
}
</style>