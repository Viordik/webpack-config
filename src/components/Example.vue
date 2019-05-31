<template>
    <section class="wrapper">
        <h1>Welcome to webpack</h1>
        <h2>text red color</h2>
        <p> text: {{ message }}</p>
        <img src="/assets/img/cat.jpg" alt="">
    </section>
</template>

<script>
export default {
    data() {
        return {
            message: null
        }
    },
    created() {
        this.message = this.$store.getters.getMessage
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

h1 {
    font-size: 50px;
    color: aquamarine;
}

h2 {
    color: #ff0000;
}
</style>
