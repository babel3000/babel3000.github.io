<template>
    <b-nav>
        <b-nav-item v-for='(item, i) in items' :key='i' :to='item.link'>
            {{ item.label }}
        </b-nav-item>
    </b-nav>
</template>
<script>
export default {
    name:'Navigation',
    props: {
        items: Array
    }
}
</script>