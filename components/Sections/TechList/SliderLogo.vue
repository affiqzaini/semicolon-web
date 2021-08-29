<template>
  <div class="components__sliderLogo bg--gradient py-12">
    <v-container class="logo-container">
      <p class="text-h5 text-sm-h4 font-weight-bold primary--text text-center">
        {{ $t("label.techWeUse") }}
      </p>
      <v-row class="ma-0 center-all">
        <template v-for="(item, index) in techList">
          <v-col cols="4" :key="index">
            <v-img
              @click.prevent="routeLink(item.link)"
              class="tech-logo cursor-pointer"
              :src="item.logoUrl"
              height="100"
              width="auto"
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
    ListClients,
  },
})
export default class SliderLogo extends Vue {
  techList: Array<Object> = [
    {
      title: "Vue JS",
      logoUrl: "/techList/vuejs.png",
      link: "http://vuejs.org",
    },
    {
      title: "Nuxt JS",
      logoUrl: "/techList/nuxtjs.png",
      link: "http://nuxtjs.org",
    },
    {
      title: "Linode",
      logoUrl: "/techList/linode.png",
      link: "http://linode.com",
    },
    {
      title: "Laravel",
      logoUrl: "/techList/laravel.png",
      link: "http://laravel.com",
    },
    {
      title: "React JS",
      logoUrl: "/techList/reactjs.png",
      link: "http://reactjs.org",
    },
    {
      title: "Nextcloud",
      logoUrl: "/techList/nextcloud.png",
      link: "http://nextcloud.com",
    },
    {
      title: "Wix",
      logoUrl: "/techList/wix.png",
      link: "http://wix.com",
    },
    {
      title: "Wordpress",
      logoUrl: "/techList/wordpress.png",
      link: "http://wordpress.com",
    },
    {
      title: "Easy Store",
      logoUrl: "/techList/easystore.png",
      link: "http://easystore.co",
    },
    {
      title: "Shopify",
      logoUrl: "/techList/shopify.png",
      link: "http://shopify.my",
    },
    {
      title: "Storehub",
      logoUrl: "/techList/storehub.png",
      link: "http://storehub.com",
    },
  ];

  routeLink(link: string) {
    window.open(link, "_blank");
  }
}
</script>

<style lang="scss" scoped>
.components__sliderLogo {
  .logo-container {
    max-width: 500px;
    padding: 0px 36px;
    margin: auto auto 36px auto;
    display: flex;
    flex-direction: column;
  }

  .tech-logo {
    margin: 12px;
    &:hover {
      transform: scale(1.5, 1.5);
    }
  }
}
</style>
