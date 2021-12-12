<template>
  <div class="home">
    <CPMain/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CPMain from "../components/CPMain.vue";

@Component({
  components: {
    CPMain,
  },
})
export default class Home extends Vue {}
</script>
