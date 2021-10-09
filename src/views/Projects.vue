<template>
  <div class="fadeInContent home">
    <ProjectsBody />
  </div>
</template>

<script>
  // @ is an alias to /src
  import ProjectsBody from "@/components/ProjectsBody.vue";

  export default {
    name: "Home",
    components: {
      ProjectsBody,
    },
  };
</script>

<style>
  @import url("../assets/cssfade.css");
</style>
