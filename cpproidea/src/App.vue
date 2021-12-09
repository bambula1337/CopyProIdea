<template>
  <div id="app">
    <CPHeader/>
    <main class="base-content">
      <CPMain/>
    </main>
    <CPFooter/>
  </div>
</template>

<script>
import CPHeader from "./components/CPHeader.vue";
import CPFooter from "./components/CPFooter.vue";
import CPMain from "./components/CPMain.vue";

export default {
    name: "App",
    components: {
      CPHeader,
      CPFooter,
      CPMain,     
    },
  
};
</script>


<style lang="scss">
@import "assets/style.scss";
</style>
