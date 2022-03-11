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

  <el-row>
    <el-button :icon="Search" circle></el-button>
    <el-button type="primary" :icon="Edit" circle></el-button>
    <el-button type="success" :icon="Check" circle></el-button>
    <el-button type="info" :icon="Message" circle></el-button>
    <el-button type="warning" :icon="Star" circle></el-button>
    <el-button type="danger" :icon="Delete" circle></el-button>
  </el-row>
</template>



<script lang="ts">
import {
  Search,
  Edit,
  Check,
  Message,
  Star,
  Delete,
} from '@element-plus/icons-vue'

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