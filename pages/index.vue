<template>
    <h1>Hello World!</h1>
</template>

<script setup>
// Option 1: Using the composable
const { setSeo } = useSeo()
setSeo({
  title: 'Home | Ansima - Full Stack Developer',
})

</script>
