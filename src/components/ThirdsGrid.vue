<template>
  <div class="thirds-grid"> <!-- This is a class. It is always lowercase with hyphens -->
    <div class='card'>
      <slot name='card1'></slot>
    </div>
    <div class='card'>
      <slot name='card2'></slot>
    </div>
    <div class='card'>
      <slot name='card3'></slot>
    </div>
    <div class='card'>
      <slot name='card4'></slot>
    </div>

  </div>
</template>








<script> // This is the javascript for this HelloWorld compomnent
export default {
  name: "ThirdsGrid", // This is the name of the compomnent in Javascript. it always matches the file name. 
};
</script>








<style scoped lang="scss">
.thirds-grid {  // Class selector always gets a .name_of_class
  background-color: #ffffff;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  

  display:flex;
  justify-content: space-between;

}
.card {
  flex: initial;
}
</style>