<template>
    <section>
        <h1 class="title">404 - How did we end up here?</h1>
        <router-link to="/" class="go-home">Go Home</router-link>
    </section>
</template>

<script>
export default {
  name: 'page404'
}
</script>

<style scoped>
    section {
        text-align: center;
        color: #666666;
    }
    .title {
        text-align: center;
        margin: 3rem 0 4rem;
    }
    a {
        text-decoration: none;
        font-size: 1.4rem;
    }
    .go-home {
        text-decoration: none;
        padding: .5rem 3rem;
        border: 2px solid #284266;
        border-radius: .3rem;
        background: none;
        height: 40px;
        color: #284266;
    }
    .go-home:hover {
        background-color: #284266;
        color: #FFFFFF;
    }
</style>
