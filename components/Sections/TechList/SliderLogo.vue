<template>
  <div class="components__sliderLogo bg--gradient py-12">
    <v-container class="logo-container">
      <p class="text-h5 text-sm-h4 font-weight-bold primary--text text-center">
        {{ $t("label.techWeUse") }}
      </p>
      <v-row class="ma-0">
        <template v-for="(item, index) in 11">
          <v-col cols="4" :key="index">
            <v-img
              :src="`/techList/${item}.png`"
              height="100"
              width="100"
              contain
            ></v-img>
          </v-col>
        </template>
      </v-row>
    </v-container>

    <list-clients />
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
export default class SliderLogo extends Vue {}
</script>

<style lang="scss" scoped>
.components__sliderLogo {
  .logo-container {
    max-width: 500px;
    padding: 0px 36px;
    margin: auto;
    display: flex;
    flex-direction: column;
  }
}
</style>
