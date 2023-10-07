<template>
    <div id="navbar">
        <div class="menu-toggle" @click="toggleMenu">
            ☰
        </div>
        <div class="nav-links" :class="{ 'active': menuActive }">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/american-movies">American Movies</RouterLink>
            <RouterLink to="/french-movies">French Movies</RouterLink>
            <RouterLink to="/last-movies">Last Movies</RouterLink>
            <RouterLink to="/search-movies">Search Movies</RouterLink>
        </div>
    </div>
    <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    data() {
        return {
            menuActive: false
        };
    },
    methods: {
        toggleMenu() {
            this.menuActive = !this.menuActive;
        }
    }
}
</script>

<style scoped>
#navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #333;
}

#navbar .nav-links {
    display: flex;
    margin-left: auto;
    gap: 10px;
}

#navbar .nav-links > * {
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 4px;
    transition: background-color 0.3s;
}

#navbar .nav-links > *:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

.menu-toggle {
    display: none;
    margin-left: auto;
    align-items: right;
    font-size: 24px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: white;
}

/* Mobile Styles */
@media (max-width: 768px) {
    #navbar .nav-links {
        display: none;
        flex-direction: column;
        gap: 0;
        width: 100%;
        position: absolute;
        top: 58.5px;
        left: 0;
        background-color: #333;
        z-index: 10;
    }

    #navbar .nav-links.active {
        display: flex;
    }

    #navbar .menu-toggle {
        display: block;
    }
}

</style>