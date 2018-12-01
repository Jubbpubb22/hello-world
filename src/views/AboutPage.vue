<template>
  <div class="about">
    <h1>This is an about page about cats</h1>
    <CtaButton label="Press Mee!"
    		   link='http://google.com'/>
  </div>
</template>

<style lang="scss">
.about {
  color: red;
}



</style>

<script>
// @ is an alias to /src
import CtaButton from "@/components/CtaButton.vue";

export default {
  name: "about",
  components: {
    CtaButton
  }
};
</script>