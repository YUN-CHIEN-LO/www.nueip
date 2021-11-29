import Vue from "vue";
import VueI18n from "vue-i18n";
import locale from "element-ui/lib/locale";
import en from "./lang/en";
import id from "./lang/id";
import ja from "./lang/ja";
import sc from "./lang/sc";
import tc from "./lang/tc";
import th from "./lang/th";
import vn from "./lang/vn";

Vue.use(VueI18n);

// 設定瀏覽器語言為預設語言
let defaultLang = "";
switch (navigator.language) {
  case "zh-TW":
    defaultLang = "tc";
    break;
  case "zh-CN":
    defaultLang = "sc";
    break;
  case "vi":
    defaultLang = "vn";
    break;
  default:
    defaultLang = navigator.language;
    break;
}

const i18n = new VueI18n({
  locale: defaultLang,
  fallbackLocale: "en",
  messages: {
    en,
    id,
    ja,
    sc,
    tc,
    th,
    vn,
  },
});
locale.i18n((key, value) => i18n.t(key, value));
export default i18n;
