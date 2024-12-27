<template>
	<div class="home-container">
    <Htop />
    <Htab />
    <Hsidebar />
    <Hprice />
    <Hrank />
    <Hfooter :isShowFooterTop="isShowTopFooter" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Layout } from "@/types/theme.d"
import Htop from '@/components/home/Htop.vue'
import Htab from '@/components/home/Htab.vue'
import Hsidebar from '@/components/home/Hsidebar.vue'
import Hprice from '@/components/home/Hprice.vue'
import Hrank from '@/components/home/Hrank.vue'
import Hfooter from '@/components/home/Hfooter.vue'

const isShowTopFooter = ref(true)

definePageMeta({
  name: "Home",
	alias: "/home",
	title: "Home",
	forceLayout: Layout.Blank,
	skipPin: true
})
</script>
