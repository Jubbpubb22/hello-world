<template>
  <div class="half-grid"  :class='{"is-flipped": flipped}'>
    <div class ='card-container'>
      <div class='card'>
        <slot name='card1'></slot>
      </div>
      <div class='card'>
        <slot name='card2'></slot>
      </div>
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
  padding: 80px 20px;
}

.half-grid.is-flipped {
  background: linear-gradient(to bottom, rgba(15,30,36,.04), rgba(163,169,172,.03));
}

.card-container {
  display:flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
}

.half-grid.is-flipped .card-container {
  flex-direction: row-reverse;
}

.card {
  width: 50%;
  flex: initial;
  padding: 40px;
}

.card + .card {
  // This means every .card that comes after another .card
  margin-left: 40px;
}

.half-grid.is-flipped .card + .card {
  // This means every .card that comes after a .card in a flipped component
  margin-left: 0;
  margin-right: 40px;
}

</style>

