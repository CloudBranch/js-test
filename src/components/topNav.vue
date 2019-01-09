<template>
    <nav>
        <ul>
            <li class="ghost">
                <router-link to="/" class="menu-item">
                    <span style="font-size:1.2rem;padding-left:.3rem;display: flex;justify-content: center;flex-direction: column;text-align: center;">Sweet Store</span>
                </router-link>
            </li>
            <li>
                <a href="#" class="menu-item">{{ email }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'topNav',
  data () {
    return {
      email: 'email@address.com'
    }
  }
}
</script>

<style scoped>
    .menu-item {
        text-decoration: none;
        padding: .4rem;
        border-radius: .3rem;
        background: none;
        color: #D1D1D9;
        height: 38px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .menu-item:hover {
        background-color: rgba(209, 209, 240, 0.2);
        color: #FFFFFF;
    }
    nav {
        position: fixed;
        top: 0;
        width: 100%;
        height: 48px;
        background-color: #284266;
    }
    ul {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        list-style-type: none;
        height: 48px;
        width: 100%;
        margin: 0;
        padding: 0;
    }
    .ghost {
        justify-self: flex-start;
        margin-right: auto;
        padding: 0 0 0 .4rem;
    }
    li {
        height: 48px;
        margin: 0;
        padding: 0 .4rem 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
