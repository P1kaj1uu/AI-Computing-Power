<template>
	<div>这是公开数据页面</div>
</template>

<script setup lang="ts">
definePageMeta({
	name: "PublicData",
	title: "PublicData",
	auth: true,
	roles: "all"
})
</script>
