<template>
	<div class="control-user mb-[20px] w-full cursor-pointer border border-solid border-[#EFF3FB] rounded-[4px] h-[308px] p-[20px]">
    <div class="flex items-center mb-[8px]">
      <div class="font-[600] text-[#333] text-[20px] mr-[8px]">悟空007</div>
      <img class="mr-[8px]" src="@/assets/images/edit-icon.svg?url" />
      <div class="w-[52px] h-[22px] leading-[22px] border border-solid border-[#FA6F52] rounded-[11px] text-center font-[500] text-[12px] text-[#FA6F52]">未实名</div>
    </div>
    <div class="flex items-center mb-[16px]">
      <div class="vip flex justify-center items-center leading-[24px] indent-[20px] h-[23px] font-[500] text-[12px] text-[#fff] mr-[11px]">炼丹会员</div>
      <div class="font-[400] text-[14px] text-[#6B7278]">29天到期</div>
    </div>
    <div class="flex items-center justify-between mb-[16px]">
      <div class="flex items-center">
        <div class="mr-[6px] w-[8px] h-[8px] circle"></div>
        <div class="font-[500] text-[14px] text-[#333]">认证学生升级炼丹会员</div>
      </div>
      <div class="flex items-center">
        <div class="mr-[6px] w-[8px] h-[8px] circle"></div>
        <div class="font-[500] text-[14px] text-[#333]">登记与会员福利</div>
      </div>
    </div>
    <div class="vip-box h-[154px] p-[20px]">
      <div class="font-[600] text-[16px] text-[#333] mb-[16px]">成长值</div>
      <div class="mb-[18px] h-[10px] bg-[#FFFBF5] rounded-[6px]">
        <div class="bar w-[51px] h-[10px] rounded-[6px]"></div>
      </div>
      <div class="mb-[10px] flex items-center">
        <div class="text-[#6B7278] font-[400] text-[14px] mr-[8px]">距离升级还需490成长值</div>
        <div class="font-[500] text-[14px] text-[#09C073]">升级攻略</div>
      </div>
      <div class="text-[#09C073] font-[500] text-[14px]">进入成长值主页 ></div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.control-user {
  background: linear-gradient(180deg , #FFFFFF 0%, #FAEBD9 100%);
  .vip {
    background: url('@/assets/images/vip-icon.svg') center center no-repeat;
  }
  .circle {
    border-radius: 50%;
    background: linear-gradient(180deg, #0CE6BB 0%, #0AC0D2 100%);
  }
  .bar {
    background: linear-gradient(90deg, #C6864F 0%, #F7C986 100%);
  }
  .vip-box {
    background: url('@/assets/images/vip-border-icon.svg') center center no-repeat;
    background-size: cover;
  }
}
</style>
