<template>
	<div class="instance-bottom">
		<n-data-table
    	:columns="tableColumns"
    	:data="tableList"
    	:max-height="300"
    	:scroll-x="1800"
    	virtual-scroll
  	/>

		<div class="flex items-center flex-row justify-end mt-[20px]">
      <div class="font-[400] text-[#6B7278] text-[13px]">共 {{ tableList.length }} 条</div>
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
import { reactive, ref } from "vue"
import { NPagination, NDataTable } from "naive-ui"

const tableColumns = [
  {
    title: '实例ID/名称',
    key: 'name',
    width: 200,
    fixed: 'left'
  },
  {
    title: '状态',
    key: 'status',
    width: 100,
    fixed: 'left'
  },
  {
    title: '规格详情',
    key: 'des'
  },
  {
    title: '本地磁盘',
    key: 'disk'
  },
  {
    title: '健康状态',
    key: 'type'
  },
  {
    title: '付费方式',
    key: 'sale'
  },
	{
    title: '释放时间/停机时间',
    key: 'time'
  },
	{
    title: 'SSH登录',
    key: 'ssh',
		fixed: 'right'
  },
	{
    title: '快捷工具',
    key: 'tool',
		fixed: 'right'
  },
	{
    title: '按钮',
    key: 'operate',
		fixed: 'right'
  }
]

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
const tableList = reactive([
	{
		name: "实例ID/名称",
		status: "状态",
		des: "规格详情",
		disk: "本地磁盘",
		type: "健康状态",
		sale: "付费方式",
		time: "释放时间/停机时间",
		ssh: "SSH登录",
		tool: "快捷工具",
		operate: "按钮"
	},
	{
		name: "实例ID/名称",
		status: "状态",
		des: "规格详情",
		disk: "本地磁盘",
		type: "健康状态",
		sale: "付费方式",
		time: "释放时间/停机时间",
		ssh: "SSH登录",
		tool: "快捷工具",
		operate: "按钮"
	},
	{
		name: "实例ID/名称",
		status: "状态",
		des: "规格详情",
		disk: "本地磁盘",
		type: "健康状态",
		sale: "付费方式",
		time: "释放时间/停机时间",
		ssh: "SSH登录",
		tool: "快捷工具",
		operate: "按钮"
	},
	{
		name: "实例ID/名称",
		status: "状态",
		des: "规格详情",
		disk: "本地磁盘",
		type: "健康状态",
		sale: "付费方式",
		time: "释放时间/停机时间",
		ssh: "SSH登录",
		tool: "快捷工具",
		operate: "按钮"
	},
	{
		name: "实例ID/名称",
		status: "状态",
		des: "规格详情",
		disk: "本地磁盘",
		type: "健康状态",
		sale: "付费方式",
		time: "释放时间/停机时间",
		ssh: "SSH登录",
		tool: "快捷工具",
		operate: "按钮"
	},
	{
		name: "实例ID/名称",
		status: "状态",
		des: "规格详情",
		disk: "本地磁盘",
		type: "健康状态",
		sale: "付费方式",
		time: "释放时间/停机时间",
		ssh: "SSH登录",
		tool: "快捷工具",
		operate: "按钮"
	}
])
</script>

<style lang="scss" scoped>
@import "./instanceBottom.scss";

.instance-bottom {
	.operate-btn {
		font-weight: 400;
		font-size: 14px;
		color: #09c073;
	}
}
</style>