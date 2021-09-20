<template>
  <div class="components__listClients">
    <v-container class="client-container">
      <p class="text-h5 text-sm-h4 font-weight-bold primary--text text-center">
        {{ $t("label.ourClients") }}
      </p>
      <v-row class="ma-0">
        <template v-for="(item, index) in clients">
          <v-col cols="4" :key="index">
            <v-img
              class="client-logo mx-3 cursor-pointer"
              @click.prevent="goToClient(item.link)"
              :src="item.logo"
              height="150"
              width="150"
              contain
              alt="logo"
            ></v-img>
          </v-col>
        </template>
      </v-row>
    </v-container>
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
        link: "http://www.kittuco.com",
      },
      {
        name: "One Plus Two Thrift Store",
        logo: "/clients/opt.png",
        link: "http://www.oneplustwo.my",
      },
      {
        name: "DD Plastic Sdn Bhd",
        logo: "/clients/dd-plastic.png",
        link: "https://ddplastic.com.my",
      },
    ];
  }

  goToClient(link: string) {
    window.open(link);
  }
}
</script>

<style lang="scss" scoped>
.components__listClients {
  .client-container {
    max-width: 500px;
    padding: 0px 36px;
    margin: auto;
    display: flex;
    flex-direction: column;
  }
  .client-logo {
    &:hover {
      transform: scale(1.2, 1.2);
    }
  }
}
</style>
