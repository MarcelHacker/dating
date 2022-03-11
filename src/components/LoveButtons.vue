<template>
  <el-row justify="space-evenly">
    <el-button :size="size" :icon="Search" circle ></el-button>
    <el-button :size="size" type="primary" :icon="Edit" circle></el-button>
    <el-button :size="size" type="success" :icon="Check" circle></el-button>
    <el-button :size="size" type="info" :icon="Message" circle></el-button>
    <el-button :size="size" type="warning" :icon="Star" circle></el-button>
    <el-button :size="size" type="danger" :icon="Delete" circle></el-button>
  </el-row>
</template>

<script lang="ts" setup>
import {
  Search,
  Edit,
  Check,
  Message,
  Star,
  Delete,
} from '@element-plus/icons-vue'
</script>

<script lang="ts">
export default{
    data(){
        return{
            size: "large"
        }
    }
}
</script>