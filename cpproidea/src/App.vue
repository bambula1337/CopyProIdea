<template>
  <div id="app">
    <CPHeader/>
    <main class="base-content">
      <router-view/>
    </main>
    <CPFooter/>
  </div>
</template>

<script>
import CPHeader from "./components/CPHeader.vue";
import CPFooter from "./components/CPFooter.vue";

export default {
    name: "App",
    components: {
      CPHeader,
      CPFooter,    
    },
  
};
</script>


<style lang="scss">
@import "assets/style.scss";
#app{
  @apply relative;
}
.base-content {
  @apply min-h-screen relative;
}
</style>
