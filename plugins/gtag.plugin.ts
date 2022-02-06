import { Vue } from "nuxt-property-decorator";
import VueGtagPlugin from "vue-gtag";

Vue.use(VueGtagPlugin, {
  config: { id: process.env.GOOGLE_ANALYTICS_ID },
  appName: "semicolon-web"
});
