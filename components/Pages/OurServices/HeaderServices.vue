<template>
  <div class="components__headerServices">
    <div class="inner-section pb-12 pt-md-12">
      <v-row justify="center" align="center">
        <v-col cols="12" md="6">
          <v-img
            src="/vector-2.svg"
            height="auto"
            max-width="700px"
            class="mx-auto mb-12"
            contain
            alt="aboutUs Image"
          />
        </v-col>
        <v-col cols="12" md="6">
          <p
            class="text-h4 text-md-h3 text-uppercase our-service-message primary--text font-weight-black mb-2"
          >
            Our Services
          </p>
          <div class="page-title">
            <p class="text-h6 our-service-message mb-12">
              We help brands and businesses to digitalize their operations, be
              it internally or for their end customers. We are here to take over
              the stress of coping up with technology and figuring out what to
              do next.
              <br />
              From system development, digital marketing, IT infrastructure,
              cloud solutions, we do them all so that you can focus on the
              primary operations of your business.
            </p>
          </div>
        </v-col>
      </v-row>
    </div>

    <div class="rotate-svg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
        <path
          fill="#194DA3"
          fill-opacity="1"
          d="M0,96L120,101.3C240,107,480,117,720,106.7C960,96,1200,64,1320,48L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import PageTitle from "~/components/Widgets/PageTitle.vue";
PageTitle;

@Component({
  components: {
    PageTitle
  }
})
export default class HeaderServices extends Vue {}
</script>

<style lang="scss" scoped>
.components__headerServices {
  margin-bottom: -5px;
  .page-title {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .our-service-message {
    max-width: 700px;
    word-wrap: break-word;
    display: flex;
    margin: 0 auto;
  }

  .rotate-svg {
    transform: scaleY(-1);
  }
}
</style>
