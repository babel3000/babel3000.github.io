<template>
    <b-nav v-if='mobile'>
        <b-nav-item @click="menuToggle" v-for='(item, i) in items' :key='i' :to='item.link'>
            {{ item.label }}
        </b-nav-item>
    </b-nav>
    <b-nav v-else align='right'>
        <b-nav-item v-for='(item, i) in items' :key='i' :to='item.link'>
            {{ item.label }}
        </b-nav-item>
    </b-nav>
</template>
<script>
export default {
    name:'Navigation',
    props: {
        items: Array,
        mobile: Boolean
    },

    methods:{
        menuToggle(){
            document.getElementById('menu').classList.toggle('rotate');
            document.getElementById('mobileMenu').classList.toggle('show');
        }
    }
}
</script>