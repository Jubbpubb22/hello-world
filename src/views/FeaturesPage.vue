<template>
  <div class="about">
    <h1>This is an about page about dogs</h1>
    <CtaButton label="Button!"
		           link='http://google.com'/>
    <DropShadowContainer class="container">
      Hello
    </DropShadowContainer>
    <HalfGrid>
      <div slot='card1'>hello</div>
      <div slot='card2'>goodbye</div>
    </HalfGrid>
  </div>
</template>




<style lang="scss">
.about {
  color: red;
}
.container {
  margin-top: 100px;
}
</style>




<script>
// @ is an alias to /src
import CtaButton from "@/components/CtaButton.vue";
import DropShadowContainer from "@/components/DropShadowContainer.vue";
import HalfGrid from "@/components/HalfGrid.vue";

export default {
  name: "features",
  components: {
    CtaButton,
    DropShadowContainer,
    HalfGrid,
  }
};
</script>