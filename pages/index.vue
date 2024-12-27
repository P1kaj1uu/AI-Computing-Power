<template>
	<div class="page">
		<controlHeader :controlTitle="title" :controlDes="des" />
		<div class="control-box flex p-[20px]">
			<div class="control-box-left flex flex-[2] mr-[20px] flex-col items-center">
				<controlExample :exampleList="controlExampleList" :warnList="controlWarnList" @changeStatus="controlChangeStatus" />
				<controlData :dataList="controlDataList" />
				<controlQuestion :questionList="controlQuestionList" />
			</div>
			<div class="control-box-right flex flex-[1] flex-col justify-center items-center">
				<controlUSerInfo />
				<controlBill />
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import controlHeader from '@/components/control/Header.vue'
import controlExample from '@/components/control/Example.vue'
import controlData from '@/components/control/DataBox.vue'
import controlQuestion from '@/components/control/QuestionBox.vue'
import controlUSerInfo from '@/components/control/USerInfoBox.vue'
import controlBill from '@/components/control/BillBox.vue'

// 顶部的标题栏区域
const title = ref('主页')
const des = ref('')
// 实例区域
const controlExampleList = reactive([
	{
		id: 1,
		name: '容器实例',
		count: 0,
		isShow: false // 是否展示问号小图标及数字颜色区别
	},
	{
		id: 2,
		name: '运行中',
		count: 0,
		isShow: false
	},
	{
		id: 3,
		name: '即将到期',
		count: 0,
		isShow: true
	},
	{
		id: 4,
		name: '即将释放',
		count: 0,
		isShow: true
	}
])
const controlWarnList = reactive([
	{
		id: 1,
		name: '到期释放预警',
		status: '未开启',
		isShow: true // 是否展示问号小图标
	},
	{
		id: 2,
		name: '余额预警',
		status: '未开启',
		isShow: false
	}
])
// 数据区域
const controlDataList = reactive([
	{
		id: 1,
		name: '容器实例数据盘',
		des: '付费扩容容量',
		count: 0
	},
	{
		id: 2,
		name: '镜像',
		des: '付费容量',
		count: 0
	},
	{
		id: 3,
		name: '文件存储',
		des: '付费容量',
		count: 0
	}
])
// 常见问题区域
const controlQuestionList = reactive([
	{
		id: 1,
		name: '如何选择GPU？'
	},
	{
		id: 2,
		name: '如何上传数据？'
	},
	{
		id: 3,
		name: '如何开具发票？'
	},
	{
		id: 4,
		name: '如何成为炼丹会员？'
	}
])

// 改变预警单选框对应的文本内容
const controlChangeStatus = (id: number) => {
	controlWarnList[id - 1].status = controlWarnList[id - 1].status == '未开启' ? '已开启' : '未开启'
}

definePageMeta({
	name: "BlankPage",
	title: "Blank page",
	auth: true,
	roles: "all"
})
</script>

<style  lang="scss" scoped>
.page {
	.control-box {
		@media (max-width: 1400px) {
			.control-box-left {
				flex: 1;
			}
		}
		@media (max-width: 1200px) {
			display: flex;
    	flex-direction: column;
			.control-box-left {
				width: 100%;
			}
			.control-box-right {
				width: 100%;
				margin-top: 20px;
			}
  	}
	}
}
</style>