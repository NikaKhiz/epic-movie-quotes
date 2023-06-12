import { configure } from "vee-validate";
import { localize } from "@vee-validate/i18n";
configure({
  generateMessage: localize({
    en: {},
    ka: {},
  }),
});
