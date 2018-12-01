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
a {
  color: #42b983;
  border: 2px solid #42b983;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color .3s, color .3s;
}

a:hover {
  background-color: #42b983;
  color: #ffffff;

}
</style>