<template>
	<div class="create-container">
    <Htop />
    <CreateExample />
    <Hsidebar />
  </div>
</template>

<script setup lang="ts">
import { Layout } from "@/types/theme.d"
import Htop from '@/components/home/Htop.vue'
import Hsidebar from '@/components/home/Hsidebar.vue'
import CreateExample from '@/components/market/CreateExample.vue'

definePageMeta({
  name: "Create",
	alias: "/create",
	title: "Create",
	forceLayout: Layout.Blank,
	skipPin: true
})
</script>
