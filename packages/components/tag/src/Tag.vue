<template>
    <div :class="[ns.b()]">success</div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@natrue-plus/hooks';
import { tagProps } from './tag';
defineOptions({
    name: 'NpTag'
});
defineProps(tagProps);
const ns = useNamespace('tag');
</script>
<style lang="less" scoped></style>
