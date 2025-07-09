<template>
  <div :class="`rounded-lg border bg-card text-card-foreground shadow-sm ${props.class}`">
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