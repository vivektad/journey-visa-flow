<template>
  <div :class="`flex flex-col space-y-1.5 p-6 ${props.class}`">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  class: ''
})
</script>