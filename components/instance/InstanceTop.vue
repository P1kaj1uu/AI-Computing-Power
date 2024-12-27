<template>
	<div class="instance-top mb-[16px] cursor-pointer flex justify-between items-center">
    <div class="instance-top-l flex items-center">
      <n-button class="btn-1 rounded-[2px] w-[98px] h-[32px] font-[500] text-[14px] text-[#fff]">租用新实例</n-button>
      <n-button class="btn-2 rounded-[2px] w-[98px] h-[32px] font-[500] text-[14px] text-[#6B7278]">批量管理</n-button>
      <n-button class="btn-3" secondary type="primary">批量续费</n-button>
      <div class="ml-[8px] flex justify-center items-center w-[40px] h-[32px] rounded-[2px] border border-solid border-[#CCD4D8]">
        <img src="@/assets/images/refresh-icon.svg?url" />
      </div>
    </div>
    <div class="instance-top-r flex items-center flex-row">
      <div class="flex items-center">
        <div class="font-[400] text-[#09C073] text-[14px] whitespace-nowrap">订阅GPU通知</div>
        <div class="font-[400] text-[#09C073] text-[14px] ml-[28px] whitespace-nowrap">设置密钥登录</div>
        <div class="flex items-center ml-[28px]">
          <img src="@/assets/images/mini-program-icon.svg?url" />
          <div class="ml-[2px] font-[400] text-[#09C073] text-[14px] whitespace-nowrap">小程序管理实例</div>
        </div>
      </div>
      <n-input class="search" placeholder="搜索实例名称/ID">
        <template #suffix>
          <Icon :size="20" class="mx-1">
					  <searchIcon />
				  </Icon>
        </template>
      </n-input>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NInput, NButton } from "naive-ui"
import Icon from "@/components/common/Icon.vue"
import searchIcon from "@/assets/images/search-icon.svg"

</script>

<style lang="scss" scoped>
@import "./instanceTop.scss";

.instance-top {
  &-l {
    .btn-1 {
      margin-right: 8px;
      color: #fff;
      background: linear-gradient( 90deg, #59D9AD 0%, #0AB4B9 100%);
    }
    .btn-1:hover {
      color: #fff;
    }
    .btn-2 {
      color: #6B7278;
      border: 1px solid #CCD4D8;
      margin-right: 8px;
    }
  }
  &-r {
    .search {
      margin-left: 28px;
      width: 218px;
      height: 32px;
      border-radius: 2px;
      border: 1px solid #CCD4D8;
    }
  }
}
</style>
