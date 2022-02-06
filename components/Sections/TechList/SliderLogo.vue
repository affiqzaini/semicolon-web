<template>
  <div class="components__sliderLogo">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#194DA3"
        fill-opacity="1"
        d="M0,224L80,192C160,160,320,96,480,101.3C640,107,800,181,960,186.7C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>

    <div class="outer-box primary">
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
    margin-top: -10px;
  }
}
</style>
