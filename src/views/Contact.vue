<template>
  <div class="fadeInContent home">
    <ContactBody />
  </div>
</template>

<script>
  // @ is an alias to /src
  import ContactBody from "@/components/ContactBody.vue";

  export default {
    name: "Home",
    components: {
      ContactBody,
    },
  };
</script>

<style>
  @import url("../assets/cssfade.css");
</style>
