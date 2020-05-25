<template>
  <footer>
    <b-container>
      <b-row>
        <b-col class='text-lg-left text-center' lg='4'>
          <h3>Siga-nos!</h3>
          <div class="social">
            <a href="https://www.facebook.com/cozinhaangelina" target="_blank">
              <img src="../assets/img/facebook.svg" />
            </a>
            <a href="https://www.instagram.com/cozinhaangelina/" target="_blank">
              <img src="../assets/img/instagram.svg" />
            </a>
            <a href="https://www.tripadvisor.com/Restaurant_Review-g189181-d19675346-Reviews-Cozinha_Angelina-Povoa_de_Varzim_Porto_District_Northern_Portugal.html" target="_blank">
              <img src="../assets/img/tripadvisor.svg" />
            </a>
          </div>
          <img src="../assets/img/footer-plate.png" width='200' />
        </b-col>
        <b-col lg='4' class='text-center'>
            <h3>Encontre-nos</h3>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1730.782525600689!2d-8.765586013275302!3d41.37873415143611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x225c5581462811ee!2sRestaurante%20Angelina!5e1!3m2!1sen!2spt!4v1590336862569!5m2!1sen!2spt"
            width="100%"
            height="250"
            frameborder="0"
            style="margin-top:30px; border:3px solid #fbc477; border-radius:20px;overflow:hidden"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </b-col>
        <b-col lg='4' class='text-lg-right text-center'>
          <h3>Contacte-nos</h3>
          <div class="contacts">
            <a href="tel:926599888" target="_blank">
              <img src="../assets/img/phone.svg" />926 599 888
            </a>
            <a href="mailto:cozinhaangelina@gmail.com" target="_blank">
              <img src="../assets/img/mail.svg" />cozinhaangelina@gmail.com
            </a>
          </div>
          <img src="../assets/img/flour.png" width='200' />
        </b-col>
      </b-row>
      <div class="lower-footer">
        <b-row>
          <b-col class="text-center">
            <small>&copy; 2020 Cozinha Angelina</small>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: "FooterContent"
};
</script>