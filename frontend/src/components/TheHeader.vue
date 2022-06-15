<template>
  <div class="title">Title is {{ t }}</div>
</template>

<!-- setup構文 -->
<script lang="ts" setup>

// Propsの型定義
interface Props {
  title?: string;
}
const props = defineProps<Props>();

const t = reactive<String>(props.title);
</script>
<style lang="scss" scoped>
.title {
  font-size: 20px;
}
</style>
