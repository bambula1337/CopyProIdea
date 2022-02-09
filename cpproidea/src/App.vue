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
  @apply bg-no-repeat overflow-hidden -mb-10;
  width: 100%;
  height: 350px;
  background-image: url("assets/img/BGHeader.png");
}

body{
  @apply overflow-x-hidden;
}
</style>
