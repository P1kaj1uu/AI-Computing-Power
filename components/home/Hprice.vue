<template>
	<div class="home-price bg-[#fff] pt-[52px] pl-[360px] pr-[360px]">
    <div class="text-center price-title font-[600] text-[#333] text-[32px] mb-[12px]">HuaYi会员及租用价格</div>
    <div class="text-center price-des font-[400] text-[14px] text-[#6B7278] mb-[40px]">HuaYi算力云坚持为您提供服务稳定、价格公道的GPU租用服务。更为学生提供免费升级会员通道，享极具性价比的会员价格。
      <span class="text-[#09C073] cursor-pointer">如何升级会员？</span>
    </div>

    <div class="price-list cursor-pointer">
      <div class="price-list-t h-[46px] flex justify-around mb-[32px]">
        <div class="price-list-tl text-center w-[118px] text-[#6B7278] text-[18px] font-[500]" :class="{ 'price-t-active': superVip }" @click="toggleTab('炼金')">炼丹会员</div>
        <div class="price-list-tr text-center w-[118px] text-[#6B7278] text-[18px] font-[500]" :class="{ 'price-t-active': !superVip }" @click="toggleTab('普通')">普通会员</div>
      </div>

      <div class="price-list-box flex flex-wrap justify-between">
        <div v-for="item in goodsList" :key="item.id" @mousemove="mousemoveHandle" @mouseleave="mouseleaveHandle" class="price-item relative pt-[33px] pb-[28px] pl-[28px] mb-[12px] w-[392px] h-[162px] bg-[#fff] rounded-[4px] border border-solid border-[#EFF3FB]">
          <div class="mark absolute w-[40px] h-[3px] top-[0px] left-[28px]"></div>
          <div class="goods-name font-[600] text-[18px] text-[#333] mb-[12px]">{{ item.name }}</div>
          <div class="des font-[400] text-[14px] text-[#6B7278] mb-[22px]">{{ item.des }}</div>
          <div class="flex items-center">
            <div class="mr-[20px] price-now">
              <span class="price-now-1 mr-[4px] font-[600] text-[14px] text-[#F88646]">¥</span>
              <span class="price-now-2 mr-[4px] font-[600] text-[#F88646] text-[24px]">{{ item.price }}</span>
              <span class="price-now-3 font-[400] text-[14px] text-[#333]">/时</span>
            </div>
            <div class="price-item-btn flex justify-center items-center font-[600] text-[14px] text-[#955330] w-[76px] h-[28px] rounded-[14px] border border-solid border-[#F6C489]">会员95折</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const superVip = ref(true) // 选项卡---> true是炼金会员， false是普通会员

const toggleTab = (name: string) => {
  superVip.value = name == '炼金' ? true : false
}

const goodsList = reactive([
  {
    id: 1,
    name: 'NVIDIA A100 SXM4 / 80GB',
    des: '单精 19.5 TFLOPS / 半精 312 Tensor TFLOPS',
    price: 6.68
  },
  {
    id: 2,
    name: 'NVIDIA A100 SXM4 / 80GB',
    des: '单精 19.5 TFLOPS / 半精 312 Tensor TFLOPS',
    price: 6.68
  },
  {
    id: 3,
    name: 'NVIDIA A100 SXM4 / 80GB',
    des: '单精 19.5 TFLOPS / 半精 312 Tensor TFLOPS',
    price: 6.68
  },
  {
    id: 4,
    name: 'NVIDIA A100 SXM4 / 80GB',
    des: '单精 19.5 TFLOPS / 半精 312 Tensor TFLOPS',
    price: 6.68
  },
  {
    id: 5,
    name: 'NVIDIA A100 SXM4 / 80GB',
    des: '单精 19.5 TFLOPS / 半精 312 Tensor TFLOPS',
    price: 6.68
  },
  {
    id: 6,
    name: 'NVIDIA A100 SXM4 / 80GB',
    des: '单精 19.5 TFLOPS / 半精 312 Tensor TFLOPS',
    price: 6.68
  },
  {
    id: 7,
    name: 'NVIDIA A100 SXM4 / 80GB',
    des: '单精 19.5 TFLOPS / 半精 312 Tensor TFLOPS',
    price: 6.68
  },
  {
    id: 8,
    name: 'NVIDIA A100 SXM4 / 80GB',
    des: '单精 19.5 TFLOPS / 半精 312 Tensor TFLOPS',
    price: 6.68
  },
  {
    id: 9,
    name: 'NVIDIA A100 SXM4 / 80GB',
    des: '单精 19.5 TFLOPS / 半精 312 Tensor TFLOPS',
    price: 6.68
  },
])
</script>

<style lang="scss" scoped>
@import "./hPrice.scss";

.home-price {
  .price-list {
    &-t {
      border-bottom: 3px solid #E7EFF0;
      .price-t-active {
        font-weight: 600;
        color: #333;
        border-bottom: 3px solid #09C073;
      }
    }

    &-box {
      .price-item {
        box-shadow: 0px 4px 12px 0px rgba(231,239,240,0.8);
        .mark {
          background: rgba(9,192,185,0.6);
          box-shadow: 0px 6px 6px 0px rgba(9,192,166,0.2);
          border-radius: 0px 0px 4px 4px;
        }
        &-btn {
          background: linear-gradient(90deg, #FFDBA9 0%, #FFBB79 100%);
        }
      }
      .price-item:hover {
        background: linear-gradient(180deg, #EEFBFF 0%, #FFFFFF 100%);
        .des {
          color: #09C073;
        }
      }
    }
  }
}
</style>