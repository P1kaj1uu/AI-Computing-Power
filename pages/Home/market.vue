<template>
	<div class="market-container">
    <Htop />
    <OptionCard />
    <Hsidebar />
    <Hfooter />
  </div>
</template>

<script setup lang="ts">
import { Layout } from "@/types/theme.d"
import Htop from '@/components/home/Htop.vue'
import Hsidebar from '@/components/home/Hsidebar.vue'
import Hfooter from '@/components/home/Hfooter.vue'
import OptionCard from '@/components/market/OptionCard.vue'

definePageMeta({
  name: "Market",
	alias: "/market",
	title: "Market",
	forceLayout: Layout.Blank,
	skipPin: true
})
</script>
