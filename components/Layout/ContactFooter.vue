<template>
  <div id="contact-footer" class="components__contactFooter px-4 px-sm-10">
    <v-row class="ma-0 form-container" justify="center">
      <v-col cols="12" sm="6" md="3">
        <v-img
          src="/logo/semicolon_light.svg"
          width="200"
          max-height="50"
          contain
          alt="Semicolon Malaysia"
          class="mb-3 d-flex"
        />

        <v-card
          flat
          tile
          color="transparent"
          class="white--text d-flex flex-column"
        >
          <p class="text-body-1 mb-0">Semicolon Malaysia Ent.</p>
          <p class="text-caption accent--text">202103247429 (003309851-P)</p>
          <div class="d-inline-flex align-center mb-2">
            <v-icon color="#def6fe" class="mr-2">mdi-email</v-icon>
            <a
              href="mailto:hello@semicolon.com.my"
              class="text-decoration-none white--text text-body-2"
            >
              hello@semicolon.com.my
            </a>
          </div>

          <div class="d-inline-flex align-center">
            <v-icon color="#def6fe" class="mr-2">mdi-phone</v-icon>
            <a
              href="tel:+601111283226"
              class="text-decoration-none white--text text-body-2"
            >
              +60 11 - 1128 3226
            </a>
          </div>

          <div class="mt-5">
            <p class="text-subtitle-2 secondary--text">Social Links</p>
            <v-btn
              icon
              color="white"
              class="mr-3"
              v-for="(item, index) in socialLinks"
              :key="index"
              @click="routeTo(item.linkUrl)"
            >
              <v-icon large>{{ item.icon }}</v-icon>
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <p class="text-h4 font-weight-black">{{ $t("label.justSayHello") }}</p>

        <v-text-field
          tile
          hide-details
          dark
          :label="$t('label.name')"
          class="mb-2"
          v-model="formModel.from_name"
        />

        <v-text-field
          hide-details
          dark
          type="email"
          :label="$t('label.email')"
          class="mb-2"
          v-model="formModel.reply_to"
        />

        <v-text-field
          class="mb-4"
          tile
          hide-details
          dark
          :label="$t('label.phoneOptional')"
          v-model="formModel.phone_no"
        />

        <v-textarea
          class="mb-2"
          hide-details
          dark
          outlined
          :placeholder="$t('message.tellUsWhatYouHaveInMind')"
          v-model="formModel.message"
        />

        <v-btn
          depressed
          color="primary"
          width="120"
          rounded
          :loading="loading"
          @click.prevent="sendEmail"
        >
          {{ $t("label.send") }}
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import emailjs, { init } from "emailjs-com";

@Component
export default class ContactFooter extends Vue {
  loading: Boolean = false;
  formModel: any = {
    to_name: "Semicolon Malaysia",
    from_name: null,
    reply_to: null,
    phone_no: null,
    message: null,
  };

  client: any = null;

  socialLinks: Array<Object> = [
    {
      name: "Whatsapp",
      linkUrl: "https://wa.link/w80lng",
      icon: "mdi-whatsapp",
      color: "#075e54",
    },
    {
      name: "Facebook",
      linkUrl: "https://www.facebook.com/semicolonmy",
      icon: "mdi-facebook",
      color: "#4267B2",
    },
    {
      name: "Instagram",
      linkUrl: "https://www.instagram.com/semicolon.my/",
      icon: "mdi-instagram",
      color: "#8a3ab9",
    },
  ];

  get validForm() {
    if (
      this.formModel.from_name == null ||
      this.formModel.reply_to == null ||
      this.formModel.message == null
    )
      return false;
    else return true;
  }

  mounted() {
    this.initializeEmailjs();
  }

  initializeEmailjs() {
    this.client = init("user_twvKyIAiA893pF5T16Lt8");
  }

  routeTo(link: string) {
    window.open(link, "_blank");
  }

  async sendEmail() {
    const serviceId = this.$config.emailjs_service_id;
    const templateId = this.$config.emailjs_template_id;

    if (!this.validForm)
      return this.$toasted.error(this.$t("message.plsFillInTheForm") as string);

    try {
      this.loading = true;

      await emailjs.send(serviceId, templateId, this.formModel);
      this.$toasted.success(
        this.$t("message.weHaveReceivedYourEmail") as string
      );
      this.formModel = {
        from_name: "",
        reply_to: "",
        phone_no: "",
        message: "",
      };
    } catch (error) {
      this.$toasted.error(this.$t("message.plsTryAgainLater") as string);
    } finally {
      this.loading = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.components__contactFooter {
  padding-top: 36px !important;
  width: 100vw;
  background-color: #303030;
  .form-container {
    min-height: 300px;
    color: white;
  }
}
</style>
