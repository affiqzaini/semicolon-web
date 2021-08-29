<template>
  <div id="our-services" class="components__listServices py-5 py-sm-10">
    <v-container fluid class="service-container">
      <p
        class="
          mb-10
          text-h5 text-sm-h4
          font-weight-bold
          primary--text
          text-center
        "
      >
        {{ $t("label.ourServices") }}
      </p>

      <template v-for="(item, index) in services">
        <v-card tile flat :key="index" width="100%" class="mb-4">
          <v-card-title class="mb-0 text-h6 text-sm-h5">
            {{ item.title }}
          </v-card-title>
          <v-card-subtitle>
            {{ item.description }}
          </v-card-subtitle>
        </v-card>
      </template>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class ListServices extends Vue {
  get services() {
    return [
      {
        title: this.$t("label.webDevelopment"),
        image: "/vector-6.svg",
        description:
          "We develop websites with a wide range of functionalities from a static informative website to a full web application with front and back end configurations. The tech stack for your website will be advised according to the requirements that you have.",
      },
      {
        title: this.$t("label.ecommerce"),
        image: "/vector-3.svg",
        description:
          "We have experience in various modern e-commerce platforms like Shopify, Wix, EasyStore and many more. We provide setup, custom design, migrations and flow enhancement services for your new or current platforms. We are also an official Shopify Partner.",
      },
      {
        title: this.$t("label.cloudSolutions"),
        image: "/cloud.svg",
        description:
          "We believe that cloud is the best way to store data for your business as it provides the best accessibility and security. We have a cloud storage service that will enable you to store your files and access it anywhere. Different from other service providers, our pricing packages are based on storage size instead of number of users. ",
      },
    ];
  }
}
</script>

<style lang="scss" scoped>
.components__listServices {
  display: flex;
  justify-content: center;
  align-items: center;

  .service-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media #{map-get($display-breakpoints, 'sm-only')} {
      width: 90vw;
    }
    @media #{map-get($display-breakpoints, 'md-only')} {
      width: 90vw;
    }

    @media #{map-get($display-breakpoints, 'lg-and-up')} {
      padding: 100px 0px;
      width: 1200px;
    }

    @media #{map-get($display-breakpoints, 'xs-only')} {
      padding: 0px 24px;
      width: 100vw;
      margin-top: 50px;
      margin-bottom: 30px !important;
    }
  }
}
</style>
