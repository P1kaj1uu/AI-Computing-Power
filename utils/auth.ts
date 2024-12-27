import { useAuthStore } from "@/stores/auth"
import { type RouteMetaAuth } from "@/types/auth.d"
import { type RouteLocationNormalized } from "vue-router"

export function authCheck(route: RouteLocationNormalized) {
	const meta: RouteMetaAuth = route.meta
	const { checkAuth, authRedirect, auth, roles } = meta

	const authStore = useAuthStore()

	if (auth === true) {
		if (!authStore.isLogged) {
			return navigateTo("/login")
		}

		if (roles && !authStore.isRoleGranted(roles)) {
			return navigateTo("/login")
		}
	}

	if (checkAuth === true) {
		if (authStore.isLogged) {
			if (roles) {
				if (authStore.isRoleGranted(roles)) {
					return navigateTo(authRedirect || "/")
				} else {
					return navigateTo(route.path)
				}
			}
			return navigateTo(authRedirect || "/")
		}
	}
}
