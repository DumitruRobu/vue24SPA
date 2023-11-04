<template>
    <router-link to="/posts">Posts</router-link>
    <router-link to="/tags">Tags</router-link>
    <router-link to="/">Home</router-link>
    <router-view></router-view>
</template>

<script>
export default {
    name: "Index"
}
</script>

<style scoped>

</style>
