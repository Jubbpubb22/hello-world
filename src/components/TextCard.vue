<template>
  <div class="text-card">
    <h2>{{heading}}</h2>
    <p>{{content}}</p>
  </div>
</template>




<script> // This is the javascript for this HelloWorld compomnent
export default {
  name: "FeatureCard", // This is the name of the compomnent in Javascript. it always matches the file name. 
  props: {
    heading: String,
    content: String,
  },
};
</script>




<style scoped lang="scss">
.text-card {  // Class selector always gets a .name_of_class
  border: 1px solid red;


}
h2 {
  letter-spacing: 0px;
  font-size: 28px;
  text-align: left;
  width: 500px;
}
p {
  letter-spacing: 0px;
  font-size: 15px;
  text-align: left;
  line-height: 1.5;
  width: 500px;
}

</style>


