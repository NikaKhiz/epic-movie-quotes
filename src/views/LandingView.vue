<script setup>
import LandingLayout from "@/layouts/LandingLayout.vue";
import LandingHeaderUpper from "@/layouts/landing/LandingHeaderUpper.vue";
import LandingHeaderLower from "@/layouts/landing/LandingHeaderLower.vue";
import LandingFooter from "@/layouts/landing/LandingFooter.vue";
import ParallaxBox from "@/components/ParallaxBox.vue";
import { reactive } from "vue";

const staticMovies = reactive([
  {
    image: "url(src/assets/images/interstellar.png)",
    quote: "“You have to leave somethig behind to go forward”",
    name: "interstellar",
    releaseDate: 2014,
  },
  {
    image: "url(src/assets/images/tenembaum.png)",
    quote:
      "“ You can't raise boys to be scared of life. You gotta brew some recklessness into them.”",
    name: "The Royal Tenenbaums",
    releaseDate: 2001,
  },
  {
    image: "url(src/assets/images/lothr.png)",
    quote:
      "”It is not the strength of the body, but the strength of the spirit.”",
    name: "The Lord Of The Rings",
    releaseDate: 2003,
  },
]);
</script>
<template>
  <LandingLayout>
    <template #landing-header-upper>
      <LandingHeaderUpper />
    </template>
    <template #landing-header-lower>
      <LandingHeaderLower />
    </template>
    <template #landing-content>
      <ParallaxBox
        v-for="item in staticMovies"
        :key="item.name"
        :movie="item"
      />
    </template>
    <template #landing-footer>
      <LandingFooter />
    </template>
  </LandingLayout>
</template>
