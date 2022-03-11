<template>
  
  <div class="block">
    <span class="demonstration">Switch when indicator is clicked</span>
    <el-carousel trigger="click" >
      <el-carousel-item v-for="profile in profiles" :key="profile" >
      <img :src="profiles.picture_source">
        <h3 class="small">{{ profile.name }}</h3>  
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<script lang="js">

export default{
   data() {
    return {
      profiles:[
        {
          name:"Megan Fox",
          picture_source: "../assets/photos/megan_fox/megan-fox.jpg"
        },
        {
          name:"Stefi",
          picture_source: ""
        }
      ]
    }
  }
}


</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>