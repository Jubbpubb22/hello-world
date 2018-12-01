<!--How you define the component -->

<template>
  <div class="docs-hero">
    <h1>{{heading}}</h1>
    <!--<img :src='image'>-->
    <h2>{{subheading}}</h2>
    <div class='cta-container'>
      <CtaButton label='Get Started' 
                 link ='google.com'/>
      <CtaButton label='Contact' 
                 link ='google.com'/>
    </div>
  </div>
</template>


<script> // This is the javascript for this HelloWorld compomnent
import CtaButton from "@/components/CtaButton.vue";
export default {
  name: "DocsHero", // This is the name of the compomnent in Javascript. it always matches the file name. 
  props: {
    heading: String,
    subheading: String,
    image: String,
  },
  components: {
    CtaButton,
  },
};
</script>




<style scoped lang="scss">
.docs-hero {  // Class selector always gets a .name_of_class
  margin-top: 100px;
  margin-bottom: 200px;
}
h1 {
  letter-spacing: -.5px;
  font-size: 48px;
}
h2 {
  letter-spacing: -.5px;
  font-size: 23px;
  font-weight: 300;
}

.cta-container {
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
}

</style>


