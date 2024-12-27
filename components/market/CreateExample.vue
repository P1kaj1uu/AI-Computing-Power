<template>
	<div class="create-example pl-[360px] pr-[360px] pt-[79px]">
    <div class="warn-card flex items-center pl-[20px] pt-[14px] pb-[14px] h-[44px] rounded-[4px] mb-[20px]">
      <img class="mr-[8px]" src="@/assets/images/home/warn-icon.svg?url" />
      <div class="font-[500] text-[14px] text-[#fff]">严禁使用WebUI等算法生成违禁图片、严禁挖矿，一经发现立即封号！</div>
    </div>

    <div class="flex mb-[12px]">
      <img class="mr-[8px]" src="@/assets/images/home/create-ex-icon.svg?url" />
      <div class="font-[600] text-[16px] text-[#333]">算力市场 / 创建实例</div>
    </div>

    <!-- 第一个Card区域 -->
    <div class="card-box-1 flex mb-[20px] pt-[20px] pl-[30px] pb-[24px] cursor-pointer bg-[#fff] border border-solid border-[#EFF3FB] rounded-[4px]">
      <div class="w-[56px] text-right font-[400] text-[14px] text-[#6B7278] pt-[6px] mr-[12px] whitespace-nowrap">计费方式</div>
      <div class="flex flex-col">
        <div class="flex items-center mb-[16px]">
          <n-button v-for="item in modeList" :key="item.id" class="btn" :class="{ 'active-btn': modeActiveIndex == item.id }" @click="toggleModeIndex(item.id)">{{ item.name }}</n-button>
          <div class="des ml-[20px] font-[400] text-[14px] text-[#09C073]">计费规则 ></div>
        </div>
        <div class="font-[400] text-[13px] text-[#6B7278]">创建完主机后仍然可以转换计费方式。如选择按量计费，价格发生变动以实例开机时的价格为准</div>
      </div>
    </div>

    <!-- 第二个Card区域 -->
    <div class="card-box-2 mb-[20px] pt-[20px] pl-[28px] pr-[28px] pb-[21px] cursor-pointer bg-[#fff] border border-solid border-[#EFF3FB] rounded-[4px]">
      <div class="flex mb-[20px]">
        <div class="w-[56px] text-right font-[400] text-[14px] text-[#6B7278] pt-[14px] mr-[12px] whitespace-nowrap">选择主机</div>
        <n-data-table
    	    :columns="tableColumns"
    	    :data="tableList"
    	    :max-height="300"
    	    :scroll-x="600"
    	    virtual-scroll
  	    />
      </div>

      <div class="flex mb-[20px]">
        <div class="w-[56px] text-right font-[400] text-[14px] text-[#6B7278] pt-[6px] mr-[12px] whitespace-nowrap">GPU数量</div>
        <div class="flex flex-col">
          <div>
            <n-button v-for="item in 10" :key="item" class="btn num-btn" :class="{ 'active-btn': numberActiveIndex == item }" @click="toggleNumberIndex(item)">{{ item }}</n-button>
          </div>
        </div>
      </div>

      <div class="flex mb-[23px]">
        <div class="w-[56px] text-right font-[400] text-[14px] text-[#6B7278] mr-[12px] whitespace-nowrap">数据盘</div>
        <div class="flex flex-col">
          <div class="flex mb-[20px]">
            <div class="font-[400] text-[14px] text-[#333] mr-[20px]">免费50GB</div>
            <n-checkbox v-model:checked="checkValue" class="font-[400] text-[14px] text-[#333]">免费扩容</n-checkbox>
          </div>
          <div class="mb-[12px] flex items-center">
            <n-input
              class="mr-[8px]"
              type="text"
              :minlength="1"
              :maxlength="3"
              :allow-input="onlyAllowNumber"
              placeholder="容量范围：0~730"
            />
            <div class="font-[400] text-[14px] text-[#333]">GB</div>
          </div>
          <div class="font-[400] text-[13px] text-[#6B7278]">
            <span>按量计费实例的付费数据盘将按 0.0066元/日/GB在每日24点进行扣款</span>
            <span class="text-[#F88646]">(无论实例是否关机)</span>
            <span>。使用中可扩容/缩容</span>
          </div>
        </div>
      </div>

      <div class="cr-em-des flex pt-[13px] pb-[15px] pl-[20px] bg-[#F5F8FA] rounded-[4px]">
        <div class="font-[400] text-[14px] text-[#6B7278] mr-[52px]">实例规格</div>
        <div class="mr-[64px]">
          <div class="ex-distance font-[400] text-[14px] text-[#6B7278] mb-[8px]">CPU型号</div>
          <div class="font-[400] text-[14px] text-[#333]">RTX 4090D * 1卡</div>
        </div>
        <div class="mr-[64px]">
          <div class="ex-distance font-[400] text-[14px] text-[#6B7278] mb-[8px]">CPU</div>
          <div class="font-[400] text-[14px] text-[#333]">18核心</div>
        </div>
        <div class="mr-[64px]">
          <div class="ex-distance font-[400] text-[14px] text-[#6B7278] mb-[8px]">内存</div>
          <div class="font-[400] text-[14px] text-[#333]">60GB</div>
        </div>
        <div class="mr-[64px]">
          <div class="ex-distance font-[400] text-[14px] text-[#6B7278] mb-[8px]">系统盘</div>
          <div class="font-[400] text-[14px] text-[#333]">30GB</div>
        </div>
        <div>
          <div class="ex-distance font-[400] text-[14px] text-[#6B7278] mb-[8px]">数据盘</div>
          <div class="font-[400] text-[14px] text-[#333]">免费50GB SSD</div>
        </div>
      </div>


    </div>

    <!-- 第三个Card区域 -->
    <div class="card-box-3 flex mb-[180px] pt-[20px] pl-[30px] pb-[24px] cursor-pointer bg-[#fff] border border-solid border-[#EFF3FB] rounded-[4px]">
      <div class="cr-ex-title w-[56px] text-right font-[400] text-[14px] text-[#6B7278] pt-[6px] mr-[12px] whitespace-nowrap">镜像</div>
      <div class="flex flex-col">
        <div class="flex items-center mb-[16px] relative">
          <img class="hot-img absolute z-[2] top-[-13px] left-[129px]" src="@/assets/images/home/hot-icon.svg?url" />
          <n-button v-for="item in mirrorList" :key="item.id" class="btn" :class="{ 'active-btn': mirrorActiveIndex == item.id }" @click="toggleMirrorIndex(item.id)">{{ item.name }}</n-button>
          <div class="des ml-[20px] font-[400] text-[14px] text-[#09C073]">没有我要的环境 ></div>
        </div>
        <div class="font-[400] text-[13px] text-[#6B7278] mb-[20px]">基础镜像包含常用基本软件，如：深度学习框架、Miniconda等。如需其他软件可创建后安装</div>
        <n-select class="cr-select mb-[12px]" placeholder="请选择框架名称包含名称/框架版本/Python版本/Cuda版本" v-model:value="value" :options="options" />
        <div class="font-[400] text-[13px] text-[#6B7278]">创建完成后仍然可以更换其他镜像</div>
      </div>
    </div>
  </div>

  <div class="create-pay-box fixed flex justify-center bottom-0 pt-[15px] pb-[18px] cursor-pointer h-[88px] w-full bg-[#fff]">
    <div class="pay-item flex items-center mr-[64px]">
      <div class="font-[400] text-[#6B7278] text-[14px] mr-[12px]">日常费用</div>
      <div class="font-[600] text-[14px] text-[#F88646] mr-[4px]">¥</div>
      <div class="cr-price font-[600] text-[24px] text-[#F88646] mr-[4px]">0.00</div>
      <div class="font-[400] text-[#333] text-[14px] mr-[4px]">/日</div>
      <img src="@/assets/images/home/question-icon.svg?url" />
    </div>

    <div class="pay-item flex items-center flex-col mr-[68px]">
      <div class="flex items-center mb-[8px]">
        <div class="font-[400] text-[#6B7278] text-[14px] mr-[12px]">配置费用</div>
        <div class="font-[600] text-[14px] text-[#F88646] mr-[4px]">¥</div>
        <div class="cr-price font-[600] text-[24px] text-[#F88646] mr-[4px]">1.98</div>
        <div class="font-[400] text-[#333] text-[14px] mr-[12px]">/时</div>
        <div class="font-[400] text-[#09C073] text-[14px]">费用明细</div>
      </div>
      <div class="flex items-center">
        <div class="font-[400] text-[#6B7278] text-[14px] mr-[12px]">账户余额</div>
        <div class="font-[400] text-[#6B7278] text-[14px] mr-[12px]">¥ 0.00</div>
        <div class="font-[400] text-[#09C073] text-[14px]">余额不足去充值</div>
      </div>
    </div>

    <div class="flex pay-btn">
      <div class="cancel-btn flex justify-center items-center mr-[12px] w-[148px] h-[48px] rounded-[2px] border border-solid border-[#CCD4D8] text-[#6B7278] font-[500] text-[16px]">取消</div>
      <div class="create-btn flex justify-center items-center w-[148px] h-[48px] rounded-[2px] text-[#fff] font-[500] text-[16px]">立即创建</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NButton, NSelect, NCheckbox, NInput, NDataTable } from "naive-ui"
import { reactive, ref, h } from 'vue'
import discountsIcon from "@/assets/images/home/discounts-icon.svg?url"

const modeActiveIndex = ref(1)
const mirrorActiveIndex = ref(1)
const numberActiveIndex = ref(1)
const checkValue = ref(true) // 免费扩容复选框
const value = ref(null)

const tableColumns = [
  {
    title: '主机ID',
    width: "90",
    key: 'id',
    fixed: 'left',
    render() {
      return h('div', { style: { display: 'flex', alignItems: 'center' } }, [
        h('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '8px', width: '12px', height: '12px', borderRadius: '50%', background: '#09C073' } }, [
          h('div', { style: { width: '6px', height: '6px', borderRadius: '50%', background: '#fff' } })
        ]),
        h('div', { style: { color: '#333', fontSize: '14px' } }, '494机')
      ]);
    }
  },
  {
    title: '算力型号/显存',
    width: "150",
    key: 'model',
    render() {
      return h('div', { style: { color: '#333', fontSize: '14px' } }, 'RTX 4090D 24GB');
    }
  },
  {
    title: '空闲CPU',
    width: "90",
    key: 'number',
    render() {
      return h('div', { style: { color: '#333', fontSize: '14px' } }, '1/12');
    }
  },
  {
    title: '每CPU分配',
    width: "120",
    key: 'version',
    render() {
      return h('div', [
        h('div', { style: { color: '#333', fontSize: '14px' } }, 'CPU：18核'),
        h('div', { style: { color: '#333', fontSize: '14px' } }, '内存：60GB')
      ]);
    }
  },
  {
    title: 'CPU型号',
    width: "100",
    key: 'type',
    render() {
      return h('div', { style: { color: '#333', fontSize: '14px' } }, 'AMD EPYC 9754');
    }
  },
  {
    title: '硬盘',
    width: "130",
    key: 'disk',
    render() {
      return h('div', [
        h('div', { style: { color: '#333', fontSize: '14px' } }, '数据盘：50GB'),
        h('div', { style: { color: '#333', fontSize: '14px' } }, '可扩容：730GB')
      ]);
    }
  },
	{
    title: '最高CUDA',
    width: "100",
    key: 'cuda',
    render() {
      return h('div', { style: { color: '#333', fontSize: '14px' } }, '12.4');
    }
  },
	{
    title: '价格(单卡)',
    width: "180",
    key: 'price',
		fixed: 'right',
    render() {
      return h('div', { style: { display: 'flex', alignItems: 'center' } }, [
        h('div', { style: { marginRight: '18px' } }, [
          h('div', { style: { display: 'flex' } }, [
            h('div', { style: { color: '#F88646', fontSize: '14px' } }, '¥1.98'),
            h('div', { style: { color: '#333', fontSize: '14px' } }, '/时')
          ]),
          h('div', { style: { color: '#6B7278', textDecoration: 'line-through', fontSize: '14px' } }, '¥2.08/时'),
        ]),

        h('div', [
          h('img', { src: discountsIcon })
        ])
      ]);
    }
  }
]
const tableList = reactive([
  {
    id: "494机",
    model: "RTX 4090D 24GB",
  }
])
const options = reactive([
  {
    label: '测试1',
    value: 'test1'
  },
  {
    label: '测试2',
    value: 'test2'
  },
])
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
const mirrorList = reactive([
  {
    id: 1,
    name: '基础镜像'
  },
  {
    id: 2,
    name: '社区镜像'
  },
  {
    id: 3,
    name: '我的镜像'
  }
])
const toggleModeIndex = (num: number) => {
  modeActiveIndex.value = num
}
const toggleMirrorIndex = (num: number) => {
  mirrorActiveIndex.value = num
}
const toggleNumberIndex = (num: number) => {
  numberActiveIndex.value = num
}

const onlyAllowNumber = (value: string) => {
  return !value || /^\d+$/.test(value)
}
</script>

<style lang="scss" scoped>
@import "./createExample.scss";

.create-example {
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
  .num-btn {
    background: #F5F8FA;
    color: #CCD4D8;
    border: 1px solid #E7EFF0;
  }
  .active-btn {
    background: #DAF6EA;
    border-radius: 2px 0px 0px 2px;
    border: 1px solid #09C073;
    font-weight: 500;
    font-size: 13px;
    color: #09C073;
  }
  :deep(.n-data-table) {
    width: 85%;
  }
}
.create-pay-box {
  box-shadow: 0px -4px 12px 0px rgba(231,239,240,0.8);
  .create-btn {
    background: linear-gradient(90deg, #59D9AD 0%, #0AB4B9 100%);
  }
}
:deep(.n-input:not(.n-input--autosize)) {
  width: 169px;
  height: 32px;
  border-radius: 2px;
  border: 1px solid #CCD4D8;
}
:deep(.n-checkbox .n-checkbox__label) {
  font-weight: 400;
  font-size: 14px;
  color: #333;
}
:deep(.n-radio .n-radio__label) {
  color: #09C073;
  font-weight: 400;
  font-size: 14px;
}
</style>
