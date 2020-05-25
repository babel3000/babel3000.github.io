<template>
<b-container>
    <div class='d-lg-none menu' @click="menuToggle" id='menu'>
		<div class="menu-square top">
		</div>
		<div class="menu-square left">
		</div>
		<div class="menu-square bottom">
		</div>
		<div class="menu-square right">
		</div>
	</div>
    <div id='mobileMenu'>
        <div class='mobile-container'>
            <navigation :mobile='true' :items='menuItems'></navigation>
        </div>
    </div>
    <b-row align-v="center">
        <b-col class='text-center' xs='12' lg='2'>
            <img class='logo' :src='logo'>
        </b-col>
        <b-col xs='12' lg='10'>
            <b-row align-h="end">
                <b-col>
                    <navigation :mobile='false' class='justify-content-end d-none d-lg-flex' :items='menuItems'></navigation>
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
                //{
                //    label: 'Produtos Locais',
                //    link:'/produtos-locais'
//},
                {
                    label: 'Menu',
                    link:'/menu'
                },
                //{
                //    label: 'Notícias',
                //    link:'/noticias'
                //},
                {
                    label: 'Marcar Mesa',
                    link:'/marcar-mesa'
                }
            ]
        }
    },
    methods: {
        menuToggle(){
            document.getElementById('menu').classList.toggle('rotate');
            document.getElementById('mobileMenu').classList.toggle('show');
        }
    }
}
</script>