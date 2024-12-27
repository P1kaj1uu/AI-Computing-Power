import { useI18n } from "vue-i18n"
import { useLocalesStore } from "@/stores/i18n"

export function useStoreI18n() {
	const { t } = useI18n()
	const globalI18n = useNuxtApp().$i18n
	const { locale, availableLocales } = globalI18n
	const localesStore = useLocalesStore()

	return {
		initLocale: (): string => {
			locale.value = localesStore.locale
			return localesStore.locale
		},
		getAvailableLocales: (): string[] => {
			return availableLocales
		},
		getLocale: (): string => {
			return locale.value
		},
		setLocale: (newLocale: string): string => {
			locale.value = newLocale
			localesStore.setLocale(newLocale)
			return newLocale
		},
		t
	}
}
