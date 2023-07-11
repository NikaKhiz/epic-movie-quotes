import { defineRule } from "vee-validate";
import {
  required,
  min,
  max,
  alpha,
  email,
  confirmed,
  alpha_num,
  image,
  numeric,
  alpha_spaces,
} from "@vee-validate/rules";

defineRule("required", required);
defineRule("alpha", alpha);
defineRule("alpha_spaces", alpha_spaces);
defineRule("email", email);
defineRule("min", min);
defineRule("max", max);
defineRule("numeric", numeric);
defineRule("image", image);
defineRule("confirmed", confirmed);
defineRule("alpha_numeric", alpha_num);

defineRule("alpha_georgian", (value) => {
  const georgianAlpha = /^([ა-ჰ\s]+)$/.test(value);
  if (georgianAlpha) {
    return true;
  }
});
