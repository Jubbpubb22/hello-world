<template>
  <div class="image-card">
    <img :src="image">
  </div>
</template>




<script> // This is the javascript for this HelloWorld compomnent
export default {
  name: "ImageCard", // This is the name of the compomnent in Javascript. it always matches the file name. 
  props: {
    image: String,
  },
};
</script>



<style scoped lang="scss">
.image-card {  // Class selector always gets a .name_of_class
  border: 1px solid blue;
}

img {
  width: 100%;

}


</style>


