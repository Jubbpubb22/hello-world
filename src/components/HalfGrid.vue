<template>
  <div class="half-grid" :class='{"is-flipped": flipped}'>
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
  props: {
    flipped: Boolean,
  }

};
</script>








<style scoped lang="scss">
.half-grid {  // Class selector always gets a .name_of_class
  background-color: #ffffff;
  padding: 20px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
  


  display:flex;
  justify-content: space-between;
  align-items: center;
}

.half-grid.is-flipped {
  flex-direction: row-reverse;
  background: linear-gradient(to bottom, rgba(15,30,36,.04), rgba(163,169,172,.03));
}

.card {
  width: 50%;
  flex: initial;
  padding: 50px;
  
}

</style>

