<template>
	<div class="instance-box">
    <controlHeader :controlTitle="title" :controlDes="des" />
    <div class="p-[20px]">
      <instance />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import controlHeader from '@/components/control/Header.vue'
import instance from '@/components/instance/Instance.vue'

// 顶部的标题栏区域
const title = ref('容器实例')
const des = ref('实例连续关机15天会释放实例，实例释放会导致数据清空且不可恢复，释放前实例在数据在。')

definePageMeta({
	name: "InstanceBox",
	title: "InstanceBox",
	auth: true,
	roles: "all"
})
</script>
