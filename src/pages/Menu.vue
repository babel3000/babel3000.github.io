<template>
    <div class='menu-container'>
        <b-container>
            <b-row>
                <b-col class='text-center'>
                    <h2>Carta de Verão</h2>
                    <h3>Snacks</h3>
                    <ul>
                        <li v-for='(snack, i) in snacks' :key='i'><strong>{{ snack.label}}</strong>{{ ' - ' + snack.price }}</li>
                    </ul>
                </b-col>
            </b-row>
            <b-row>
                <b-col class='text-center'>
                    <h3>Pratos</h3>
                    <ul>
                        <li v-for='(prato, i) in pratos' :key='i'><strong>{{ prato.label}}</strong>{{ ' - ' + prato.price }}</li>
                    </ul>
                </b-col>
            </b-row>
            <b-row>
                <b-col class='text-center'>
                    <h3>Sobremesas</h3>
                    <ul>
                        <li v-for='(sobremesa, i) in sobremesas' :key='i'><strong>{{ sobremesa.label}}</strong>{{ ' - ' + sobremesa.price }}</li>
                    </ul>
                </b-col>
            </b-row>
            <b-row>
                <b-col class='text-center'>
                    <h3>Menu Infantil</h3>
                    <h4>10€</h4>
                    <p class='mb-0'><strong>{{ infantil.prato }}</strong></p>
                    <p><strong>{{ infantil.sobremesa }}</strong></p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name:'Menu',
    data() {
        return{
            snacks: [
                {
                    label: 'Pão e cenas',
                    price: '3.50€'
                },
                {
                    label: 'Pastel de massa tenra, vegetais e caril',
                    price: '1.50€/2uni'
                },
                {
                    label: 'Pastel de massa tenra de frango',
                    price: '1.50€/2uni'
                },
                {
                    label: 'Camarão da Costa com alho',
                    price: '10€/100g'
                },
                {
                    label: 'Tosta de S. Pedro',
                    price: '3€'
                },
                {
                    label: 'Sopa de peixe',
                    price: '4€'
                }
            ],
            pratos: [
                {
                    label: 'Polvo, quinoa e citrinos',
                    price: '8€'
                },
                {
                    label: 'Sandwich de rabo de boi, couve e wasabi',
                    price: '8€'
                },
                {
                    label: 'Ravioli de abóbora, queijo e espinafres',
                    price: '8€'
                },
                {
                    label: 'Ovos rotos',
                    price: '7.50€'
                },
                {
                    label: 'Bacalhau à brás',
                    price: '8€'
                },
                {
                    label: 'Cabeça de xara e xarém de amêijoa',
                    price: '8€'
                },
                {
                    label: 'Costela de vaca, batata e espargo',
                    price: '9€'
                }
            ],
            sobremesas: [
                {
                    label: 'Rabanada e baunilha',
                    price: '5€'
                },
                {
                    label: 'Fava tonka e caramelo salgado',
                    price: '5€'
                }
            ],
            infantil: 
                {
                    prato: 'Peito de frango e batata',
                    sobremesa: 'Mousse de chocolate e morangos',
                    preco: 10
                }
        }
    }
}
</script>