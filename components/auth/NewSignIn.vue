<template>
	<div class="login-box pt-[52px] pr-[40px] pb-[38px] pl-[40px] rounded-[8px] border border-solid border-[#EFF3FB] w-[432px] h-[528px] bg-[#fff]">
		<div class="register-box absolute top-0 right-0 flex justify-center items-center w-[136px] h-[48px]">
      <div class="text-[#09C073] text-[16px] font-[500] mr-[8px]">注册</div>
      <img src="@/assets/images/login-arrow.svg?url" />
    </div>
    <div class="text-[#333] font-[500] text-[24px]">用户登录</div>
		<n-form ref="formRef" class="form-box" :model="model" :rules="rules">
			<n-form-item path="phone">
				<n-input
					v-model:value="model.phone"
					@keydown.enter="signIn"
					placeholder="请输入手机号"
					size="large"
					autocomplete="off"
				/>
			</n-form-item>
			<n-form-item path="password">
				<n-input
					v-model:value="model.password"
					type="password"
					show-password-on="click"
					placeholder="请输入密码"
					@keydown.enter="signIn"
					autocomplete="off"
					size="large"
				/>
			</n-form-item>
			<div class="btn flex flex-col items-end gap-6 mt-[8px] mb-[20px]">
				<div class="w-full">
					<n-button
						color="#FFF"
						class="login-btn bg-gradient-to-r from-login-btn-l to-login-btn-r !w-full"
						@click="signIn"
						size="large"
					>
						登录
					</n-button>
				</div>
        <div class="forgot-btn flex justify-end w-full">
					<n-button text color="#09C073">忘记密码？</n-button>
				</div>
			</div>
		</n-form>
    <n-divider title-placement="center">其他登录方式</n-divider>
    <div class="wx-login w-full flex justify-center items-center border border-solid border-[#CCD4D8] rounded-[2px] h-[44px]">
      <img src="@/assets/images/loginwx.svg?url" />
      <div class="wx-btn ml-[12px]">微信登录</div>
    </div>
    <div class="login-other flex justify-start w-full pt-[20px]">
			<n-button text color="#09C073">短信登录</n-button>
      <n-button text color="#09C073">子账号登录</n-button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import {
	type FormInst,
	type FormValidationError,
	type FormRules,
	useMessage,
	NForm,
	NFormItem,
	NInput,
	NButton,
  NDivider
} from "naive-ui"
import { useAuthStore } from "@/stores/auth"
import { useRouter } from "vue-router"

interface ModelType {
	phone: string | null
	password: string | null
}

const emit = defineEmits<{
	(e: "forgot-password"): void
}>()

const router = useRouter()
const formRef = ref<FormInst | null>(null)
const message = useMessage()
const model = ref<ModelType>({
	phone: "admin@admin.com",
	password: "password"
})

const rules: FormRules = {
	phone: [
		{
			required: true,
			trigger: ["blur"],
			message: "请输入手机号"
		}
	],
	password: [
		{
			required: true,
			trigger: ["blur"],
			message: "请输入密码"
		}
	]
}

const authStore = useAuthStore()

function signIn(e: Event) {
	e.preventDefault()
	formRef.value?.validate((errors: Array<FormValidationError> | undefined) => {
		if (!errors) {
			if (model.value.phone === "admin@admin.com" && model.value.password === "password") {
				authStore.setLogged()
        message.success("登录成功")
				router.push({ path: "/", replace: true })
			} else {
				message.error("请输入正确的手机号和密码")
			}
		} else {
			message.error("请输入手机号和密码")
		}
	})
}
</script>

<style lang="scss" scoped>
@import "./signIn.scss";

.login-box {
  box-shadow: 0px 12px 24px 0px rgba(184,201,217,0.1);
  .register-box {
    background: url('@/assets/images/login-angle.svg') center center no-repeat;
    cursor: pointer;
  }
  .form-box {
    :deep(.n-form-item) {
      display: block;
    }
    :deep(.n-form-item:first-child) {
      padding: 32px 0 0 0;
    }
  }
  .btn {
	  .login-btn {
		  border-radius: 2px;
		  font-size: 16px;
		  font-family: PingFangSC, PingFang SC;
		  font-weight: 500;
	  }
  }
  .forgot-btn {
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 14px;
  }
  :deep(.n-divider__title) {
    font-size: 12px;
    color: #6B7278;
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
  }
  .wx-login {
    .wx-btn {
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 14px;
      color: #333333;
    }
  }
  .wx-login:hover {
    cursor: pointer;
  }
  .login-other {
    :deep(.n-button .n-button__content) {
      margin-right: 28px;
    }
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 14px;
  }
}
</style>
