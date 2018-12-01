<template>
  <div class="cta-button"> <!-- This is a class. It is always lowercase with hyphens -->
    <a :href='link'>{{label}}</a>
  </div>
</template>


<script> // This is the javascript for this HelloWorld compomnent
export default {
  name: "CtaButton", // This is the name of the compomnent in Javascript. it always matches the file name. 
  props: {
    label: String,
    link: String
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>