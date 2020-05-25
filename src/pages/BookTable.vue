<template>
  <div class="book-container">
    <b-container>
      <b-row align-v="center" class="mb-4">
        <b-col xs='12' lg='6'>
          <h2>Contactos</h2>
          <p>Reserve Connosco</p>
          <p>Aceitamos reservas de pequenas grupos ou festas privadas.</p>
          <p>Para mais informações, ou também para nos deixar uma mensagem ou critíca, contacte-nos pelos meios embaixo.</p>
          <div class="contacts">
            <a href="tel:926599888" target="_blank">
              <img src="../assets/img/phone.svg" />926 599 888
            </a>
            <a href="mailto:cozinhaangelina@gmail.com" target="_blank">
              <img src="../assets/img/mail.svg" />cozinhaangelina@gmail.com
            </a>
            <a href="https://www.facebook.com/cozinhaangelina" target="_blank">
              <img src="../assets/img/facebook.svg" />cozinhaangelina
            </a>
            <a href="https://www.instagram.com/cozinhaangelina/" target="_blank">
              <img src="../assets/img/instagram.svg" />@cozinhaangelina
            </a>
            <a
              href="https://www.tripadvisor.com/Restaurant_Review-g189181-d19675346-Reviews-Cozinha_Angelina-Povoa_de_Varzim_Porto_District_Northern_Portugal.html"
              target="_blank"
            >
              <img src="../assets/img/tripadvisor.svg" />Cozinha Angelina
            </a>
          </div>
        </b-col>
        <b-col xs='12' lg='6'>
          <img src="../assets/img/produtos.png" />
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid="true">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2517.45765059191!2d-8.76506782393811!3d41.37889578934582!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x225c5581462811ee!2sRestaurante%20Angelina!5e0!3m2!1sen!2spt!4v1590413148986!5m2!1sen!2spt"
        width="100%"
        height="350"
        frameborder="0"
        style="margin-top:30px; margin-bottom:-35px; border-top:3px solid #fbc477;"
        allowfullscreen
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "BookTable"
};
</script>