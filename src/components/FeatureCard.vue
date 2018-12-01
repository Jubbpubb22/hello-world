<template>
  <div class="feature-card">
    <img :src="image">
    <h3>{{heading}}</h3>
    <p>{{content}}</p>
  </div>
</template>




<script> // This is the javascript for this HelloWorld compomnent
export default {
  name: "FeatureCard", // This is the name of the compomnent in Javascript. it always matches the file name. 
  props: {
    heading: String,
    content: String,
    image: String,
  },
};
</script>




<style scoped lang="scss">
.feature-card {  // Class selector always gets a .name_of_class
  margin-top: 100px;
  margin-bottom: 200px;

}
h3 {
  margin-top: 30px;
  letter-spacing: 0px;
  font-size: 21px;
  text-align: center;
  margin-bottom: 10px;
}
p {
  letter-spacing: 0px;
  font-size: 16px;
  text-align: center;
  line-height: 1.5;
  
}

img {
  width: 260px;
  height: 260px;
}

</style>


