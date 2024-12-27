import { renderIcon } from "@/utils"
import { h } from "vue"
import { RouterLink } from "vue-router"
import { type MenuMixedOption } from "naive-ui/es/menu/src/interface"
import homeIcon from "@/assets/images/home-icon.svg"
import fileStoreIcon from "@/assets/images/file-store-icon.svg"
import instanceIcon from "@/assets/images/instance-icon.svg"
import mirrorIcon from "@/assets/images/mirror-image-icon.svg"
import dataIcon from "@/assets/images/public-data-icon.svg"
import expenseIcon from "@/assets/images/expense-icon.svg"
import accountIcon from "@/assets/images/acount-info-icon.svg"

// const BlankIcon = "carbon:document-blank"

/* eslint-disable @typescript-eslint/no-unused-vars */
export default function getItems(mode: "vertical" | "horizontal", collapsed: boolean): MenuMixedOption[] {
	return [
		{
			label: () =>
				h(
					RouterLink,
					{
						to: {
							name: "BlankPage"
						}
					},
					{ default: () => "主页" }
				),
			key: "BlankPage",
			icon: renderIcon(homeIcon)
		},
		{
			label: () =>
				h(
					RouterLink,
					{
						to: {
							name: "InstanceBox",
						}
					},
					{ default: () => "容器实例" }
				),
			key: "InstanceBox",
			icon: renderIcon(instanceIcon)
		},
		{
			label: () =>
				h(
					RouterLink,
					{
						to: {
							name: "FileStore"
						}
					},
					{ default: () => "文件存储" }
				),
			key: "FileStore",
			icon: renderIcon(fileStoreIcon)
		},
		{
			label: () =>
				h(
					RouterLink,
					{
						to: {
							name: "MirrorImage"
						}
					},
					{ default: () => "镜像" }
				),
			key: "MirrorImage",
			icon: renderIcon(mirrorIcon)
		},
		{
			label: () =>
				h(
					RouterLink,
					{
						to: {
							name: "PublicData"
						}
					},
					{ default: () => "公开数据" }
				),
			key: "PublicData",
			icon: renderIcon(dataIcon)
		},
		{
			label: () =>
				h(
					RouterLink,
					{
						to: {
							name: "Expense"
						}
					},
					{ default: () => "费用" }
				),
			key: "Expense",
			icon: renderIcon(expenseIcon)
		},
		{
			label: () =>
				h(
					RouterLink,
					{
						to: {
							name: "AccountInfo",
						}
					},
					{ default: () => "账号" }
				),
			key: "AccountInfo",
			icon: renderIcon(accountIcon)
		}
	]
}
