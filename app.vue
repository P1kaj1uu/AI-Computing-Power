<template>
	<Provider>
		<!--
			<ClientOnly> IS FOR DEMO PURPOSE. YOU CAN REMOVE IT IN PRODUCTION
				
			IT IS REQUIRED FOR RANDOM DEMO DATA


			The page transition could create issues in Nuxt projects with current versions.
			There are methods to avoid these problems, and Pinx provides 2 of them.
			By default, Method A is used.

			Method A: involves pausing navigation until the page transition is considered complete.
			Method B: involves halting navigation until the page transition is considered complete.
			
			You can find Method A in the file /plugins/router-transition.client.ts
			You can find Method B in the file /middleware/route.global.ts
		-->
		<ClientOnly>
			<component
				:is="layoutComponent"
				:class="[`theme-${themeName}`, `layout-${layoutComponentName}`, themeName, { 'opacity-0': loading }]"
			>
				<NuxtPage
					:transition="{
						name: `router-${routerTransition}`,
						mode: 'out-in',
						appear: true
					}"
					:key="forceRefresh"
					:class="[`theme-${themeName}`, `layout-${layoutComponentName}`, themeName]"
				/>
			</component>

			<SplashScreen :show="loading" />
			<SearchDialog v-if="isLogged" />
			<LayoutSettings v-if="currentRoute.path != '/login'" />
		</ClientOnly>
	</Provider>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount, ref, watch, type Component } from "vue"
import { useMainStore } from "@/stores/main"
import { useAuthStore } from "@/stores/auth"
import { useThemeStore } from "@/stores/theme"
import { useStoreI18n } from "@/composables/useStoreI18n"
import VerticalNav from "@/app-layouts/VerticalNav/index.vue"
import HorizontalNav from "@/app-layouts/HorizontalNav/index.vue"
import Blank from "@/app-layouts/Blank/index.vue"
import Provider from "@/app-layouts/common/Provider.vue"
import SplashScreen from "@/app-layouts/common/SplashScreen.vue"
import LayoutSettings from "@/components/common/LayoutSettings.vue"
import SearchDialog from "@/components/common/SearchDialog.vue"
import { Layout, RouterTransition, type ThemeName } from "@/types/theme.d"
import { type RouteLocationNormalized, useRoute, useRouter } from "vue-router"
import "@/assets/scss/index.scss"

useAddFonts()

const router = useRouter()
const currentRoute = useRoute()
const loading = ref(true)

const layoutComponents = {
	VerticalNav,
	HorizontalNav,
	Blank
}

const themeStore = useThemeStore()
const mainStore = useMainStore()
const authStore = useAuthStore()

const forceRefresh = computed<number>(() => mainStore.forceRefresh)
const forceLayout = ref<Layout | null>(null)
const layout = computed<Layout>(() => themeStore.layout)
const layoutComponentName = computed<Layout>(() => forceLayout.value || layout.value)
const layoutComponent = computed<Component>(() => layoutComponents[layoutComponentName.value])
const routerTransition = computed<RouterTransition>(() => themeStore.routerTransition)
const themeName = computed<ThemeName>(() => themeStore.themeName)
const isLogged = computed(() => authStore.isLogged)

function checkForcedLayout(route: RouteLocationNormalized) {
	if (route.meta?.forceLayout) {
		forceLayout.value = route.meta.forceLayout
	} else {
		forceLayout.value = null
	}
}

watch(layoutComponentName, () => {
	loading.value = false
})

router.afterEach(route => {
	checkForcedLayout(route)
})

onBeforeMount(() => {
	const meta = document.createElement("meta")
	meta.name = "naive-ui-style"
	document.head.appendChild(meta)

	useStoreI18n().initLocale()

	checkForcedLayout(useRoute())

	setTimeout(() => {
		loading.value = false
	}, 500)
})
</script>
