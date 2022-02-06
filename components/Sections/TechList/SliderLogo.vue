<template>
  <div class="components__sliderLogo">
    <div class="outer-box">
      <list-clients />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import ListClients from "../Clients/ListClients.vue";

@Component({
  components: {
    ListClients
  }
})
export default class SliderLogo extends Vue {
  routeLink(link: string) {
    window.open(link, "_blank");
  }
}
</script>

<style lang="scss" scoped>
.components__sliderLogo {
  .outer-box {
    padding-bottom: 50px;
    display: block;
  }
}
</style>
