import { defineRule } from "vee-validate";
import {
  required,
  min,
  max,
  alpha,
  email,
  confirmed,
  alpha_num,
} from "@vee-validate/rules";

defineRule("required", required);
defineRule("alpha", alpha);
defineRule("email", email);
defineRule("min", min);
defineRule("max", max);
defineRule("confirmed", confirmed);
defineRule("alpha_numeric", alpha_num);
