<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid mb-5">
      <div class="navbar-brand m-5">
        <a class="name1 m-3">MATEUS</a>
        <br />
        <a class="name2">MORAIS</a>
      </div>

      <a
        class="navbar-toggler m-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon">+</span>
      </a>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav m-3">
          <li class="nav-item hover-underline-animation">
            <router-link to="/">
              <a class="nav-link p-3" aria-current="page">INÍCIO</a>
            </router-link>
          </li>
          <li class="nav-item hover-underline-animation">
            <router-link to="/projects">
              <a class="nav-link p-3">PROJETOS</a>
            </router-link>
          </li>
          <li class="nav-item hover-underline-animation">
            <router-link to="/contact">
              <a class="nav-link p-3">CONTATO</a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {};
</script>

<style>
  .navbar-brand {
    line-height: 12pt;
    transform: scale(2);
    text-align: center;
    display: inline-block;
    position: relative;
    font-weight: bolder;
  }

  .hover-underline-animation {
    display: inline-block;
    position: relative;
    color: #0087ca;
    cursor: pointer;
  }

  .hover-underline-animation:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 5px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    transform-origin: bottom center;
    transition: transform 0.25s ease-out;
  }

  .hover-underline-animation:hover:after {
    transform: scaleX(1);
    transform-origin: bottom center;
  }

  .name2 {
    font-size: 20.4px;
  }
</style>
