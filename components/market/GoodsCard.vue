<template>
  <div class="market-goods-card">
    <div class="cursor-pointer mb-[20px] border border-solid border-[#EFF3FB] rounded-[4px]">
      <div class="goods-top relative bg-[#E8F4F6] h-[72px] pl-[32px] pr-[28px] pt-[10px] border border-solid border-[#EFF3FB]">
        <div class="font-[400] text-[12px] text-[#6B7278] mb-[8px]">西北B区 / 494机  可租用至：2027-01-01</div>
        <div class="flex items-center">
          <div class="goods-type font-[600] text-[18px] text-[#333] mr-[97px] whitespace-nowrap">RTX 4090D / 24 GB</div>
          <div class="flex items-baseline">
            <div class="font-[400] text-[12px] text-[#333] mr-[10px]">空闲/总量</div>
            <div class="font-[500] text-[18px] text-[#F88646] mr-[4px]">1</div>
            <div class="font-[400] text-[12px] text-[#333]">/12</div>
          </div>
        </div>
        <img class="absolute top-[9px] right-[28px]" src="@/assets/images/home/discounts-icon.svg?url" />
      </div>

      <div class="goods-body flex h-[142px] pt-[20px] pl-[31px] pr-[58px] bg-[#fff] rounded-[4px]">
        <div class="flex-[1]">
          <div class="font-[400] text-[14px] text-[#6B7278] mb-[20px]">每GPU分配</div>
          <div class="flex items-center mb-[14px]">
            <div class="font-[400] text-[14px] text-[#6B7278]">CPU：</div>
            <div class="font-[500] text-[14px] text-[#333]">18 核，AMD EPYC 9754</div>
          </div>
          <div class="flex items-center">
            <div class="font-[400] text-[14px] text-[#6B7278]">内存：</div>
            <div class="font-[500] text-[14px] text-[#333]">60 GB</div>
          </div>
        </div>

        <div class="flex-[1] extra-distance">
          <div class="font-[400] text-[14px] text-[#6B7278] mb-[20px]">硬盘</div>
          <div class="flex items-center mb-[14px]">
            <div class="font-[400] text-[14px] text-[#6B7278]">系统盘：</div>
            <div class="font-[500] text-[14px] text-[#333]">30 GB</div>
          </div>
          <div class="flex items-center">
            <div class="font-[400] text-[14px] text-[#6B7278]">数据盘：</div>
            <div class="font-[500] text-[14px] text-[#333]">50 GB，可扩容 730 GB</div>
          </div>
        </div>

        <div class="flex-[1] extra-distance">
          <div class="font-[400] text-[14px] text-[#6B7278] mb-[20px]">其他</div>
          <div class="flex items-center mb-[14px]">
            <div class="font-[400] text-[14px] text-[#6B7278]">CPU驱动：</div>
            <div class="font-[500] text-[14px] text-[#333]">550.54.14</div>
          </div>
          <div class="flex items-center">
            <div class="font-[400] text-[14px] text-[#6B7278]">CUDA版本：</div>
            <div class="flex items-center">
              <div class="font-[500] text-[14px] text-[#333] mr-[8px]">≤ 12.4</div>
              <img src="@/assets/images/home/question-icon.svg?url" />
            </div>
          </div>
        </div>

        <div class="flex-[1] extra-distance">
          <div class="flex mb-[12px] h-[28px] leading-[28px]">
            <div class="flex items-baseline mr-[12px] whitespace-nowrap">
              <div class="font-[600] text-[14px] text-[#F88646] mr-[4px]">¥</div>
              <div class="font-[600] text-[24px] text-[#F88646] mr-[4px]">1.58</div>
              <div class="font-[400] text-[14px] text-[#333]">/时</div>
            </div>
            <div class="mr-[20px] font-[400] text-[14px] text-[#6B7278] line-through whitespace-nowrap">¥1.66/时</div>
            <div class="vip-sale flex justify-center items-center w-[76px] h-[28px] rounded-[14px] border border-solid border-[#F6C489] font-[600] text-[14px] text-[#955330]">会员95折</div>
          </div>
          <div class="mb-[12px] font-[400] text-[14px] text-[#F88646]">会员最低享9.5折 ￥1.58/时</div>
          <div @click="createExampleHandle" class="rent-btn w-[88px] h-[32px] flex justify-center items-center font-[500] text-[14px] text-[#fff]">1卡可租</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const createExampleHandle = () => {
  router.push({ name: 'Create', query: { 'activeIndex': 2 } })
}
</script>

<style lang="scss" scoped>
@import "./goodsCard.scss";

.market-goods-card {
  .goods-top {
    border-radius: 4px 4px 0px 0px;
  }
  .goods-body {
    .vip-sale {
      background: linear-gradient(90deg, #FFDBA9 0%, #FFBB79 100%);
    }
    .rent-btn {
      background: linear-gradient(90deg, #33BFA0 0%, #12B2B5 100%);
    }
  }
}
</style>