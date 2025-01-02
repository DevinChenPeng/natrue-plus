<template>
    <div class="app">
        测试
        <NpTag />
		<NpIcon :component="IosAddCircle" color="red" hoverColor="#fff" size="20px" />
		<NpIcon color="#fff" size="20px" >
			<IosArchive />
		</NpIcon>
		<NpIcon :component="IosArchive" color="#fff" size="24px" >
		</NpIcon>
    </div>
</template>
<script setup lang="ts">
import { IosAddCircle,IosArchive } from '@vicons/ionicons4';
</script>
<style scoped></style>
