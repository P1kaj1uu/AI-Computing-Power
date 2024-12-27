<template>
	<div class="home-tab relative h-[700px] w-full">
    <div class="home-tab-title absolute top-[163px] left-[360px] font-[600] text-[54px] text-[#000]">HuaYi AI算力云</div>
    <div class="home-tab-des absolute top-[249px] left-[360px] font-[400] text-[24px] text-[#000]">算力驱动，让复杂变得简单</div>
    <div class="tab-btn flex cursor-pointer absolute top-[334px] left-[360px] ">
      <div class="tab-btn-1 mr-[16px] flex justify-center items-center rounded-[2px] w-[148px] h-[48px] font-[500] text-[16px] text-[#fff]">立即注册</div>
      <div class="tab-btn-2 flex justify-center items-center rounded-[2px] w-[148px] h-[48px] border border-solid font-[500] text-[16px] text-[#09C073]">了解详情</div>
    </div>
    <div class="tab-list flex cursor-pointer absolute top-[590px] left-[50%]">
      <div v-for="item in tabList" :key="item.id" class="tab-item mr-[20px] flex pt-[23px] pb-[23px] pl-[28px] items-center w-[285px] h-[98px] border border-solid border-[#EFF3FB] rounded-[4px]">
        <Icon :size="52" class="tab-item-img mr-[20px]">
          <RegisterIcon />
        </Icon>
        <div class="flex flex-col">
          <div class="tab-name text-[16px] font-[600] text-[#6B7278] mb-[8px]">{{ item.name }}</div>
          <div class="tab-des text-[14px] font-[400] text-[#6B7278]">{{ item.des }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Icon from "@/components/common/Icon.vue"
import RegisterIcon from "@/assets/images/home/register-icon.svg"
import GpuIcon from "@/assets/images/home/gpu-icon.svg"
import BillIcon from "@/assets/images/home/bill-icon.svg"
import InductionIcon from "@/assets/images/home/induction-icon.svg"

const tabList = reactive([
  {
    id: 1,
    name: '注册礼包',
    des: '注册立送30天会员',
    img: RegisterIcon,
  },
  {
    id: 2,
    name: 'GPU选型',
    des: '如何选择合适的GPU',
    img: GpuIcon,
  },
  {
    id: 3,
    name: '开具发票',
    des: '简单快速开具发票',
    img: BillIcon,
  },
  {
    id: 4,
    name: '新手入门',
    des: '简单几步，创建实例',
    img: InductionIcon,
  }
])
</script>

<style lang="scss" scoped>
@import "./hTab.scss";

.home-tab {
  background: url('@/assets/images/home/b-banner-bg.png') center center no-repeat;
  background-size: cover;
  .tab-btn {
    &-1 {
      background: linear-gradient(90deg, #59D9AD 0%, #0AB4B9 100%);
    }
    &-2 {
      border-image: linear-gradient(90deg, rgba(89, 217, 173, 1), rgba(10, 180, 185, 1)) 1 1;
    }
  }
  .tab-list {
    transform: translateX(-50%);
    .tab-item {
      background: linear-gradient(180deg, #FFFFFF 0%, #EEFBFF 100%);
      box-shadow: 0px 4px 12px 0px rgba(231,239,240,0.8);
    }
    .tab-item:hover {
      .tab-name {
        color: #333;
      }
      .tab-des {
        color: #09C073;
      }
    }
  }
}
</style>