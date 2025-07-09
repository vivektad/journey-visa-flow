<template>
  <p :class="`text-sm text-muted-foreground ${props.class}`">
    <slot />
  </p>
</template>

<script setup lang="ts">
interface Props {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  class: ''
})
</script>