<template>
  <div class="half-grid"> <!-- This is a class. It is always lowercase with hyphens -->
    <div class='card'>
      <slot name='card1'></slot>
    </div>
    <div class='card'>
      <slot name='card2'></slot>
    </div>

  </div>
</template>


<script> // This is the javascript for this HelloWorld compomnent
export default {
  name: "HalfGrid", // This is the name of the compomnent in Javascript. it always matches the file name. 
};
</script>


<style scoped lang="scss">
.half-grid {  // Class selector always gets a .name_of_class
  background-color: #ffffff;
  padding: 20px;
  width: 800px;
  margin-left: auto;
  margin-right: auto;

  display:flex;
  justify-content: space-between;
  align-items: center;
}
.card {
  border:1px solid red;
  width: 50%;
  flex: initial;
}
</style>

