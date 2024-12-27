<template>
  <div class="market-opt-card pl-[360px] pr-[360px] pt-[79px]">
    <div class="warn-card flex items-center pl-[20px] pt-[14px] pb-[14px] h-[44px] rounded-[4px] mb-[20px]">
      <img class="mr-[8px]" src="@/assets/images/home/warn-icon.svg?url" />
      <div class="font-[500] text-[14px] text-[#fff]">严禁使用WebUI等算法生成违禁图片、严禁挖矿，一经发现立即封号！</div>
    </div>

    <n-card size="small" class="cursor-pointer pl-[30px] pt-[20px] pb-[20px] mb-[20px]">
      <div class="flex items-center mb-[20px]">
        <div class="font-[400] text-[14px] text-[#6B7278] mr-[12px] whitespace-nowrap">计费方式</div>
        <div>
          <n-button v-for="item in modeList" :key="item.id" class="btn" :class="{ 'active-btn': modeActiveIndex == item.id }" @click="toggleModeIndex(item.id)">{{ item.name }}</n-button>
        </div>
      </div>

      <div class="flex mb-[26px]">
        <div class="font-[400] text-[14px] text-[#6B7278] mr-[12px] pt-[8px] whitespace-nowrap">选择地区</div>
        <div>
          <div class="mb-[8px]">
            <n-button v-for="item in areaList.slice(0,7)" :key="item.id" class="btn" :class="{ 'active-btn': areaActiveIndex == item.id }" @click="toggleAreaIndex(item.id)">{{ item.name }}</n-button>
          </div>
          <div>
            <n-button v-for="item in areaList.slice(7)" :key="item.id" class="btn" :class="{ 'active-btn': areaActiveIndex == item.id }" @click="toggleAreaIndex(item.id)">{{ item.name }}</n-button>
          </div>
        </div>
      </div>

      <div class="mb-[20px] flex">
        <div class="font-[400] text-[14px] text-[#6B7278] mr-[12px] whitespace-nowrap">GPU型号</div>
         <n-checkbox-group>
            <n-checkbox value="all" label="全部" class="mr-[20px] mb-[16px]" />
            <n-checkbox class="mr-[20px] mb-[16px]" v-for="item in typeList" :key="item.id" :value="item.name" :label="item.name" />
          </n-checkbox-group>
      </div>

      <div class="flex items-center">
        <div class="font-[400] text-[14px] text-[#6B7278] mr-[12px] whitespace-nowrap">GPU数量</div>
        <div>
          <n-button v-for="item in 10" :key="item" class="btn" :class="{ 'active-btn': numberActiveIndex == item }" @click="toggleNumberIndex(item)">{{ item }}</n-button>
        </div>
      </div>
    </n-card>

    <template v-for="item in 10" :key="item">
      <GoodsCard />
    </template>

    <div class="flex items-center flex-row justify-end mb-[64px]">
      <div class="font-[400] text-[#6B7278] text-[13px]">共 10 条</div>
			<n-pagination
        class="ml-[10px]"
        v-model:page="page"
        :page-count="1"
        :page-sizes="pageSizes"
        size="medium"
        show-quick-jumper
        show-size-picker
        :display-order="['size-picker', 'pages', 'quick-jumper']"
      />
		</div>
  </div>
</template>

<script setup lang="ts">
import { NCard, NButton, NCheckbox, NPagination } from "naive-ui"
import GoodsCard from '@/components/market/GoodsCard.vue'
import { ref, reactive } from 'vue'

const modeActiveIndex = ref(1)
const areaActiveIndex = ref(1)
const numberActiveIndex = ref(1)

const page = ref(1)
const pageSizes = [
  {
    label: '10 每页',
    value: 10
  },
  {
    label: '20 每页',
    value: 20
  },
  {
    label: '30 每页',
    value: 30
  },
  {
    label: '40 每页',
    value: 40
  }
]

const toggleModeIndex = (num: number) => {
  modeActiveIndex.value = num
}
const toggleAreaIndex = (num: number) => {
  areaActiveIndex.value = num
}
const toggleNumberIndex = (num: number) => {
  numberActiveIndex.value = num
}

const modeList = reactive([
  {
    id: 1,
    name: '按量计费'
  },
  {
    id: 2,
    name: '包日'
  },
  {
    id: 3,
    name: '包周'
  },
  {
    id: 4,
    name: '包月'
  }
])

const areaList = reactive([
  {
    id: 1,
    name: '西北B区'
  },
  {
    id: 2,
    name: '北京B区'
  },
  {
    id: 3,
    name: '重庆A区'
  },
  {
    id: 4,
    name: '北京A区'
  },
  {
    id: 5,
    name: '佛山区'
  },
  {
    id: 6,
    name: '内蒙A区'
  },
  {
    id: 7,
    name: '内蒙B区'
  },
  {
    id: 8,
    name: '3090专区'
  },
  {
    id: 9,
    name: 'L20专区'
  },
  {
    id: 10,
    name: 'V100专区'
  },
  {
    id: 11,
    name: 'A800专区'
  }
])

const typeList = reactive([
  {
    id: 1,
    name: 'RTX 4090D (220/1176)'
  },
  {
    id: 2,
    name: 'RTX 4090 (18/2555)'
  },
  {
    id: 3,
    name: 'vGPU-32GB (38/120)'
  },
  {
    id: 4,
    name: 'RTX 3080x2 (97/576)'
  },
  {
    id: 5,
    name: 'RTX 3090 (0/540)'
  },
  {
    id: 6,
    name: 'RTX 3080 Ti (0/392)'
  },
  {
    id: 7,
    name: 'L40 (0/13)'
  },
  {
    id: 8,
    name: 'RTX A4000 (0/24)'
  },
  {
    id: 9,
    name: 'RTX 3060 (0/32)'
  },
  {
    id: 10,
    name: 'GTX 1080 Ti (0/14)'
  },
  {
    id: 11,
    name: 'CPU (1/108)'
  },
  {
    id: 12,
    name: 'CPU-close-HT (0/2)'
  }
])
</script>

<style lang="scss" scoped>
@import "./optionCard.scss";

.market-opt-card {
  .warn-card {
    background: linear-gradient(270deg, #FADDD2 0%, #FB6F47 100%);
  }
  .btn {
    font-weight: 500;
    font-size: 13px;
    color: #333;
    height: 32px;
    background: #FFFFFF;
    border: 1px solid #CCD4D8;
    border-radius: 0;
    margin-right: 1px;
  }
  .active-btn {
    background: #DAF6EA;
    border-radius: 2px 0px 0px 2px;
    border: 1px solid #09C073;
    font-weight: 500;
    font-size: 13px;
    color: #09C073;
  }
}
</style>