<template>
	<div class="home-rank pt-[52px] pb-[23px] pl-[360px] pr-[360px]">
		<div class="text-center rank-title font-[600] text-[#333] text-[32px] mb-[12px]">GPU算力排名</div>
		<div class="text-center rank-des font-[400] text-[14px] text-[#6B7278] mb-[40px]">
			仅以HuaYi平台提供的加速卡型号进行算力排名，其中NVIDIA GPU以Peak FP16 Tensor TFLOPS with FP32 Accumulate值为半精算力值
		</div>

		<div class="rank-list">
			<div class="rank-list-t h-[46px] flex justify-around mb-[32px] cursor-pointer">
				<div
					class="rank-list-tl text-center w-[118px] text-[#6B7278] text-[18px] font-[500]"
					:class="{ 'rank-t-active': superRank }"
					@click="toggleTab('半')"
				>
					半精算力排名
				</div>
				<div
					class="rank-list-tr text-center w-[118px] text-[#6B7278] text-[18px] font-[500]"
					:class="{ 'rank-t-active': !superRank }"
					@click="toggleTab('单')"
				>
					单精算力排名
				</div>
			</div>

			<div class="rank-list-box">
				<n-table>
					<thead class="rank-head h-[40px] bg-[#E8F4F6] border border-solid border-[#EFF3FB]">
						<tr>
							<th class="rank-th font-[600] text-[16px] text-[#6B7278]">排名</th>
							<th class="rank-th font-[600] text-[16px] text-[#6B7278]">GPU</th>
							<th class="rank-th font-[600] text-[16px] text-[#6B7278]">半精算力</th>
							<th class="rank-th font-[600] text-[16px] text-[#6B7278]">算力</th>
						</tr>
					</thead>
					<tbody v-for="item in rankList" :key="item.id">
						<tr>
							<td>
                <div class="text-[#fff] text-[14px] font-[500] w-[36px] h-[36px] flex justify-center items-center" :class="{ 'rank-1': item.id == 1, 'rank-2': item.id == 2, 'rank-3': item.id == 3, 'rank-4': item.id >= 4, }">{{ item.id }}</div>
              </td>
							<td class="rank-th font-[600] text-[16px] text-[#333]">{{ item.name }}</td>
							<td>
                <div class="rank-process w-[546px] h-[12px] bg-[#E7EFF0] rounded-[8px]">
                  <div class="process h-[12px] rounded-[7px]" :style="{ width: `${ item.process }` }"></div>
                </div>
              </td>
							<td class="flex">
                <div class="rank-th w-[60px] font-[600] text-[#333] text-[16px]">{{ item.process }}</div>
                <div class="rank-th font-[600] text-[#333] text-[16px]">{{ item.des }}</div>
              </td>
						</tr>
					</tbody>
				</n-table>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import { NTable } from "naive-ui"

const superRank = ref(true) // 选项卡---> true是半精算力排名， false是单精算力排名

const toggleTab = (name: string) => {
	superRank.value = name == "半" ? true : false
}

const rankList = reactive([
  {
    id: 1,
    name: 'NVIDIA A100 SXM4 / 80GB',
    process: '100%',
    des: '312 Tensor TFLOPS'
  },
  {
    id: 2,
    name: 'A800-80GB / 80GB',
    process: '100%',
    des: '312 Tensor TFLOPS'
  },
  {
    id: 3,
    name: 'NVIDIA L40 / 48GB',
    process: '58%',
    des: '181.05 TFLOPS'
  },
  {
    id: 4,
    name: 'NVIDIA RTX 4090 / 24GB',
    process: '53%',
    des: '165.2 Tensor TFLOPS'
  },
  {
    id: 5,
    name: 'NVIDIA A40 / 48GB',
    process: '48%',
    des: '149.7 Tensor TFLOPS'
  },
  {
    id: 6,
    name: 'NVIDIA RTX 4090D / 24GB',
    process: '47%',
    des: '147 TFLOPS'
  },
  {
    id: 7,
    name: 'NVIDIA V100 / 32GB',
    process: '40%',
    des: '125 Tensor TFLOPS'
  },
  {
    id: 8,
    name: 'NVIDIA L20 / 48GB',
    process: '38%',
    des: '119.5 TFLOPS'
  },
  {
    id: 9,
    name: 'NVIDIA RTX 3090Ti / 24GB',
    process: '26%',
    des: '80 Tensor TFLOPS'
  },
  {
    id: 10,
    name: 'NVIDIA RTX A4000 / 16GB',
    process: '25%',
    des: '76.7 Tensor TFLOPS'
  },
  {
    id: 11,
    name: 'NVIDIA RTX 3090 / 24GB',
    process: '23%',
    des: '71 Tensor TFLOPS'
  },
  {
    id: 12,
    name: 'NVIDIA RTX 3080Ti / 80GB',
    process: '22%',
    des: '70 Tensor TFLOPS'
  },
  {
    id: 13,
    name: 'NVIDIA RTX 3080 / 10GB',
    process: '19%',
    des: '59.5 Tensor TFLOPS'
  },
  {
    id: 14,
    name: 'NVIDIA RTX 2080Ti / 80GB',
    process: '17%',
    des: '53.8 Tensor TFLOPS'
  },
  {
    id: 15,
    name: 'NVIDIA RTX 3070 / 8GB',
    process: '13%',
    des: '40.6 Tensor TFLOPS'
  },
  {
    id: 16,
    name: 'NVIDIA RTX 3060 / 12GB',
    process: '8%',
    des: '24 Tensor TFLOPS'
  }
])
</script>

<style lang="scss" scoped>
@import "./hRank.scss";

.home-rank {
	background: url("@/assets/images/home/gpu-bg.svg") center center no-repeat;
	background-size: cover;
	.rank-list {
		&-t {
			border-bottom: 3px solid #e7eff0;
			.rank-t-active {
				font-weight: 600;
				color: #333;
				border-bottom: 3px solid #09c073;
			}
		}
    &-box {
      .rank-head {
        box-shadow: 0px 4px 12px 0px #E7EFF0;
      }
      .rank-1 {
        background: url('@/assets/images/home/rank-1-icon.svg') center center no-repeat;
        background-size: cover;
      }
      .rank-2 {
        background: url('@/assets/images/home/rank-2-icon.svg') center center no-repeat;
        background-size: cover;
      }
      .rank-3 {
        background: url('@/assets/images/home/rank-3-icon.svg') center center no-repeat;
        background-size: cover;
      }
      .rank-4 {
        background: url('@/assets/images/home/rank-4-icon.svg') center center no-repeat;
        background-size: cover;
      }
      .process {
        background: linear-gradient(90deg, #0AB4B9 0%, #59D9AD 100%);
      }
    }
	}
}
</style>
