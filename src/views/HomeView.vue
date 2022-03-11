<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px"><LoveSidebar/></el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main><LoveCard/></el-main>
        <el-footer><LoveButtons/></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LoveSidebar from "@/components/LoveSidebar.vue";
import LoveCard from "@/components/LoveCard.vue"; // @ is an alias to /src
import LoveButtons from "@/components/LoveButtons.vue";

@Options({
  components: {
    LoveSidebar,
    LoveCard,
    LoveButtons,
  },
})
export default class HomeView extends Vue {}
</script>
