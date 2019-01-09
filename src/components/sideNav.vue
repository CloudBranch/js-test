<template>
    <nav>
        <ul>
            <li>
                <router-link to="/dashboard" class="menu-item"><i class="fas fa-tachometer-alt"></i> Dashboard</router-link>
            </li>
            <li>
                <router-link to="/store" class="menu-item"><i class="fas fa-store"></i> Store</router-link>
            </li>
            <li>
                <router-link to="/cart" class="menu-item"><i class="fas fa-shopping-cart"></i> Cart</router-link>
            </li>
            <li>
                <router-link to="/settings" class="menu-item"><i class="fas fa-sliders-h"></i> Settings</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'sideNav'
}
</script>

<style scoped>
    nav {
        position: fixed;
        top: 48px;
        left: 0;
        width: 200px;
        height: 100%;
        background-color: #FAFAFA;
        /* border-right: 2px solid #284266; */
        padding: .5rem .5rem 0;
    }
    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        list-style-type: none;
        width: 100%;
        margin: 0;
        padding: 0;
    }
    li {
        height: 48px;
        margin: 0;
        padding: 0 .4rem 0 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    a {
        text-decoration: none;
        color: #666666;
        font-size: 1.2rem;
    }
    .menu-item {
        padding: .4rem;
        border-top-right-radius: .3rem;
        border-bottom-right-radius: .3rem;
        background: none;
        height: 38px;
    }
    .menu-item:hover {
        border-left: 3px solid #666666;
        background-color: rgba(209, 209, 240, 0.2);
        /* color: #FFFFFF; */
    }
    .router-link-active {
        border-left: 3px solid #666666;
        background-color: rgba(209, 209, 240, 0.2);
    }
</style>
