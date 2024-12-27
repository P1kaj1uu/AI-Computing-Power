<template>
	<div class="control-bill cursor-pointer p-[20px] w-full h-[394px] border border-solid border-[#EFF3FB] rounded-[4px]">
    <div class="font-[600] text-[16px] text-[#333] mb-[16px]">费用信息</div>
    <div class="p-[20px] mb-[20px] my-bill rounded-[4px]">
      <div class="text-[#fff] text-[16px] font-[600] mb-[12px]">我的余额</div>
      <div class="flex items-center mb-[14px] justify-between">
        <div class="flex items-center">
          <div class="text-[14px] font-[400] text-[#fff] mr-[12px]">可用</div>
          <div class="flex items-center">
            <div class="font-[600] text-[14px] text-[#fff] mr-[4px]">¥</div>
            <div class="text-[#fff] text-[24px] font-[500]">0.00</div>
          </div>
        </div>
        <div class="flex items-center">
          <div class="text-[14px] font-[400] text-[#fff] mr-[12px]">冻结</div>
          <div class="flex items-center">
            <div class="font-[600] text-[14px] text-[#fff] mr-[4px]">¥</div>
            <div class="text-[#fff] text-[24px] font-[500]">0.00</div>
          </div>
        </div>
      </div>
      <div class="recharge w-[82px] h-[32px] rounded-[2px] font-[500] text-[14px] text-[#fff] text-center flex justify-center items-center">充值</div>
    </div>
    <div class="flex items-center mb-[12px]">
      <div class="font-[400] text-[14px] text-[#333] mr-[20px]">代金券</div>
      <div class="font-[400] text-[14px] text-[#333]">¥0.00</div>
    </div>
    <div class="flex items-center mb-[12px]">
      <div class="font-[400] text-[14px] text-[#333] mr-[20px]">优惠券</div>
      <div class="font-[400] text-[14px] text-[#6B7278]">暂无</div>
    </div>
    <div class="flex items-center mb-[19px]">
      <div class="font-[400] text-[14px] text-[#333] mr-[34px]">授权</div>
      <div class="font-[400] text-[14px] text-[#6B7278]">暂无</div>
    </div>
    <div class="mb-[19px] h-[1px] border border-solid border-[#E7EFF0]"></div>
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <img class="mr-[8px]" src="@/assets/images/my-order-icon.svg?url" />
        <div class="font-[500] text-[14px] text-[#333]">我的订单</div>
      </div>
      <div class="flex items-center">
        <img class="mr-[8px]" src="@/assets/images/my-bill-icon.svg?url" />
        <div class="font-[500] text-[14px] text-[#333]">我的账单</div>
      </div>
      <div class="flex items-center">
        <img class="mr-[8px]" src="@/assets/images/my-coupon-icon.svg?url" />
        <div class="font-[500] text-[14px] text-[#333]">我的代金券</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.control-bill {
  background: linear-gradient(90deg, #FFFFFF 0%, #C8EDF3 100%);
  .my-bill {
    background: linear-gradient(90deg, #33BFA0 0%, #12B2B5 100%);
  }
  .recharge {
    border: 1px solid rgba(255,255,255,0.7);
  }
}
</style>
