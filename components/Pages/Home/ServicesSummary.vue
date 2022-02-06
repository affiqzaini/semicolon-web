<template>
  <div class="components__servicesSummary inner-section">
    <h1 class="text-h5 text-md-h4 font-weight-black text-center">
      {{ $t("label.digitalTransformationForYourBusiness") }}
    </h1>
    <hr class="title-divider" />

    <p class="message-text">
      {{ $t("message.accelerateBusiness") }}
    </p>

    <div class="services center-all flex-wrap mt-10">
      <template v-for="(item, index) in services">
        <v-card
          rounded="xl"
          :key="index"
          class="mb-3 mx-2 text-center center-all"
          width="350"
          height="200"
          color="#eeeeee"
        >
          <v-card-title>
            <v-icon left color="accent" large>
              {{ item.icon }}
            </v-icon>
            {{ item.title }}
          </v-card-title>

          <v-card-text>
            {{ item.description }}
          </v-card-text>
        </v-card>
      </template>
      <v-btn
        color="primary"
        width="200"
        rounded
        class="d-flex mx-auto mt-5"
        :to="localePath({ name: 'services' })"
        >{{ $t("label.moreServices") }}
        <v-icon right>mdi-chevron-right</v-icon></v-btn
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class ServicesSummary extends Vue {
  get services() {
    return [
      {
        title: "Web Services",
        description:
          "Whatever you need in you business website, from static corporate website to a fully customized web applications, we are able to do it for you.",
        icon: "mdi-web"
      },
      {
        title: "E-Commerce",
        description:
          "Planning to move your business to the world wide web? We provide consultations, store setup, and migration services for your online store.",
        icon: "mdi-cash-multiple"
      },
      {
        title: "Digital Marketing",
        description:
          "Marketing is done almost totally on the internet nowadays. We are here to lessen your worries. We provide numerous digital marketing services, including Facebook Ads, Google Ads, and also content monetization.",
        icon: "mdi-cloud-outline"
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
.components__servicesSummary {
  @media (max-width: 600px) {
    margin-top: 50px;
  }
  @media (min-width: 600px) {
    margin-top: 100px;
  }
  @media (min-width: 960px) {
    margin-top: 200px;
  }
  @media (min-width: 1265px) {
    margin-top: 200px;
  }

  .services {
    @media #{map-get($display-breakpoints, 'md-and-up')} {
      margin-bottom: 100px !important;
    }

    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      margin-bottom: 50px !important;
    }
  }

  .message-text {
    text-align: center;
    display: flex;
    margin: 20px auto;
    max-width: 500px;
  }
}
</style>
