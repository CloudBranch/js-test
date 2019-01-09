<template>
    <main>
        <transition :duration="500" enter-active-class="animated fadeIn" leave-active-class="hide">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </main>
</template>

<script>
export default {
  name: 'mainArea'
}
</script>

<style scoped>
    .hide {
        display: none;
    }
    main {
        position: fixed;
        top: 48px;
        left: 200px;
        width: calc(100% - 200px);
        height: calc(100% - 48px);
        background-color: #FFFFFF;
        padding: 1rem;
        overflow: auto;
    }
</style>
