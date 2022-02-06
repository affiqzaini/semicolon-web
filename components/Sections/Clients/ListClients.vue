<template>
  <div class="components__listClients inner-section">
    <p class="text-h4 text-md-h3 font-weight-bold primary--text text-center">
      {{ $t("label.ourClients") }}
    </p>
    <v-row class="ma-0" align="center" justify="center">
      <template v-for="(item, index) in clients">
        <v-col cols="6" sm="4" :key="index" class="center-all">
          <v-img
            class="client-logo cursor-pointer"
            @click.prevent="goToClient(item.link)"
            :src="item.logo"
            height="auto"
            width="150"
            contain
            alt="logo"
          ></v-img>
        </v-col>
      </template>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class ListClients extends Vue {
  get clients() {
    return [
      {
        name: "Studio Kittuco",
        logo: "/clients/kittuco.svg",
        link: "http://www.kittuco.com"
      },
      {
        name: "One Plus Two Thrift Store",
        logo: "/clients/opt.png",
        link: "http://www.oneplustwo.my"
      },
      {
        name: "DD Plastic Sdn Bhd",
        logo: "/clients/dd-plastic.png",
        link: "https://ddplastic.com.my"
      }
    ];
  }

  goToClient(link: string) {
    window.open(link);
  }
}
</script>

<style lang="scss" scoped>
.components__listClients {
  .client-logo {
    &:hover {
      transform: scale(1.2, 1.2);
    }
  }
}
</style>
