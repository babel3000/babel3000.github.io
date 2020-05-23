<template>
<b-container>
    <b-row align-v="center">
        <b-col>
            <img :src='logo'>
        </b-col>
        <b-col cols='10'>
            <b-row align-h="end">
                <b-col>
            <navigation :items='menuItems'></navigation>
            </b-col>
            </b-row>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import Navigation from './Navigation'
export default {
    name:'HeaderContent',
    components: { Navigation },
    data () {
        return {
            logo: require('./../assets/img/logo.svg'),
            menuItems:[
                {
                    label: 'Início',
                    link:'/'
                },
                {
                    label: 'Sobre Nós',
                    link:'/sobre-nos'
                },
                {
                    label: 'Produtos Locais',
                    link:'/produtos-locais'
                },
                {
                    label: 'Laboratório',
                    link:'/laboratorio'
                },
                {
                    label: 'Notícias',
                    link:'/noticias'
                },
                {
                    label: 'Marcar Mesa',
                    link:'/marcar-mesa'
                }
            ]
        }
    }
}
</script>