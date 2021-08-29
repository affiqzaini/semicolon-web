<template>
  <div id="about-us" class="components__aboutUsContainer center-all">
    <div class="aboutUs">
      <p class="text-h5 text-sm-h4 font-weight-bold primary--text text-left">
        {{ $t("label.getToKnowUs") }}
      </p>

      <template v-for="(item, index) in description">
        <div :key="index" class="mb-2">
          <div class="d-inline-flex align-end mb-3">
            <v-icon large color="success darken-1" class="mr-2">
              mdi-checkbox-marked-circle-outline
            </v-icon>
            <p class="text-h6 mb-0">{{ item.title }}</p>
          </div>

          <p style="max-width: 400px" class="text-subtitle-2">
            {{ item.description }}
          </p>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class AboutUsContainer extends Vue {
  get description() {
    return [
      {
        title: "Professional",
        description:
          "We are a team of professional web developers. Our main goal is to provide a seamless transition to a new web experience for you and your business.",
      },
      {
        title: "Experience",
        description:
          "We are highly experienced in numerous web technologies. We have the ability customize your needed solution to your tiniest requirements.",
      },
      {
        title: "Affordable",
        description:
          "We focus on offering our solutions to small and medium businesses. Hence our pricing packages are set to ensure affordability for our prospects and clients.",
      },
    ];
  }
}
</script>

<style lang="scss" scoped>
.components__aboutUsContainer {
  .aboutUs {
    background-image: url("/vector-4.svg");
    background-repeat: no-repeat;
    background-position: right center;

    @media #{map-get($display-breakpoints, 'sm-only')} {
      padding-left: 48px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 700px;
      width: 100vw;
      background-size: 400px;
    }
    @media #{map-get($display-breakpoints, 'md-only')} {
      padding-left: 48px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 700px;
      width: 100vw;
      background-size: 600px;
    }

    @media #{map-get($display-breakpoints, 'lg-and-up')} {
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 700px;
      width: 1200px;
      background-size: 600px;
    }

    @media #{map-get($display-breakpoints, 'xs-only')} {
      padding: 0px 34px;
      width: 100vw;
      height: 800px;
      margin-top: 50px;
      margin-bottom: 30px !important;
      // background-image: none !important;
      background-position: center bottom;
    }
  }
}
</style>
