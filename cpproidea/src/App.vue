<template>
  <div id="app">
    <div :class="{bgimg: $route.name != 'Home'}">
      <CPHeader/>
    </div>
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

::-webkit-scrollbar {
  width: 0.6vw;
}

/* Track */
::-webkit-scrollbar-track {
  @apply bg-purple-400;
}

/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-purple-500;
  border-radius: 30px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  @apply bg-purple-600;
}

.bgimg{
  width: 100%;
  background-size: 65rem;
  background-position: top, center;
  @apply bg-no-repeat overflow-hidden -mb-10 h-52;
  @apply smlger:h-60;
  @apply lg:bg-cover lgplus:h-88;
  background-image: url("assets/img/BGHeader.png");
}

body{
  @apply overflow-x-hidden;
}
</style>
