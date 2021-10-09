<template>
  <div class="p-2 m-4">
    <div class="how-section1">
      <div class="row row1">
        <div class="col-md-12 col-lg-6 how-img">
          <img
            src="@/assets/profile.jpg"
            class="rounded-circle img-fluid p-3"
            alt=""
          />
          <br />
          <div class="wrapper d-block">
            <div class="typingdemo m-auto">
              Scanning Human...
            </div>
            <div
              id="code2"
              v-show="counterCodeOne"
              v-bind:class="{ typingdemo: counterCodeOne }"
              class="m-auto"
            >
              Retrieving knowledge data...
            </div>
            <div
              id="code3"
              v-show="counterCodeTwo"
              class="m-auto"
              v-bind:class="{ typingdemo: counterCodeTwo }"
            >
              Unpacking...
            </div>
          </div>
        </div>
        <div class="col-md-12 col-lg-4 fadeInContent" v-show="counterCodeThree">
          <p class="text-white">
            Olá! Seja bem vindo. Me chamo Mateus Morais e sou desenvolvedor Full
            Stack. Possuo diversos projetos próprios realizados durante os
            estudos em meu GitHub. Também sou estudante de Análise e
            Desenvolvimento de Sistemas pela Universidade Anhembi Morumbi,
            estando no terceiro período atualmente.
          </p>
          <div
            class="mt-5 row text-center d-flex align-items-center d-grid gap-3"
          >
            <div class="col-1 m-3">
              <img
                src="https://iconape.com/wp-content/files/rj/371212/svg/371212.svg"
                alt=""
                width="45vh"
              />
            </div>
            <div class="col-1 m-3">
              <img
                src="https://iconape.com/wp-content/files/ac/371303/svg/371303.svg"
                alt=""
                width="45vh"
              />
            </div>
            <div class="col-1 m-3">
              <img
                src="https://iconape.com/wp-content/png_logo_vector/laravel-logo-2.png"
                alt=""
                width="45vh"
              />
            </div>
            <div class="col-1 m-3">
              <img
                src="https://iconape.com/wp-content/files/xn/371621/svg/371621.svg"
                alt=""
                width="45vh"
              />
            </div>
            <div class="col-1 m-3">
              <img
                src="https://iconape.com/wp-content/files/nm/371209/svg/371209.svg"
                alt=""
                width="45vh"
              />
            </div>
            <div class="col-1 m-3">
              <img
                src="https://iconape.com/wp-content/png_logo_vector/mysql-logo.png"
                alt=""
                width="45vh"
              />
            </div>
            <div class="col-1 m-3">
              <img
                src="https://iconape.com/wp-content/files/vp/370638/svg/bootstrap-logo-icon-png-svg.png"
                alt=""
                width="45vh"
              />
            </div>
            <div class="col-1 m-3">
              <img
                src="https://iconape.com/wp-content/files/df/370667/svg/bulma-logo-icon-png-svg.png"
                alt=""
                width="45vh"
              />
            </div>
          </div>
          <div class="mt-5 row text-center d-flex align-items-center"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeBody",
    data() {
      return {
        counterCodeOne: false,
        counterCodeTwo: false,
        counterCodeThree: false,
      };
    },
    methods: {
      time: function() {
        this.counterCodeOne = false;
        var self1 = this;
        setTimeout(function() {
          self1.counterCodeOne = true;
        }, 2000);

        this.counterCodeTwo = false;
        var self2 = this;
        setTimeout(function() {
          self2.counterCodeTwo = true;
        }, 4000);

        this.counterCodeThree = false;
        var self3 = this;
        setTimeout(function() {
          self3.counterCodeThree = true;
        }, 5500);
      },
    },
    created() {
      this.time();
    },
  };
</script>

<style scoped>
  img {
    filter: grayscale(100%);
  }
  .row1 {
    text-align: justify;
  }

  @media screen and (min-width: 601px) {
    .row {
      font-size: 30px;
    }
  }

  @media screen and (max-width: 600px) {
    .row {
      font-size: 12px;
      text-align: justify;
    }
  }
  .how-section1 {
    margin-top: -15%;
    padding: 10%;
  }
  .how-section1 h4 {
    color: #ffa500;
    font-weight: bold;
    font-size: 30px;
  }
  .how-section1 .subheading {
    color: #3931af;
    font-size: 20px;
  }
  .how-section1 .row {
    margin-top: 10%;
  }
  .how-img {
    text-align: center;
  }
  .how-img img {
    width: 40%;
  }

  .wrapper {
    height: 15vh;
    /*This part is important for centering*/
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .typingdemo {
    width: 30ch;
    animation: typing 2s steps(30);
    white-space: nowrap;
    overflow: hidden;
    font-family: monospace;
    font-size: 1em;
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }
  @import url("../assets/cssfade.css");
</style>
