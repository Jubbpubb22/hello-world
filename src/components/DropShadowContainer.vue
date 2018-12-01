<template>
  <div class="drop-shadow-container"> <!-- This is a class. It is always lowercase with hyphens -->
    <slot></slot>
  </div>
</template>


<script> // This is the javascript for this HelloWorld compomnent
export default {
  name: "DropShadowContainer", // This is the name of the compomnent in Javascript. it always matches the file name. 
};
</script>


<style scoped lang="scss">
.drop-shadow-container {  // Class selector always gets a .name_of_class
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, .05);
  background-color: #ffffff;
  padding: 20px;
  width: 800px;
  margin-left: auto;
  margin-right: auto;
}
</style>


