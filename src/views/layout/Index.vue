<template>
    <div class="section">
        
        <router-view></router-view>
        <Foot/>
    </div>
</template>
<script>
import Foot from "@/components/Foot";
export default {
  components: {
    Foot
  }
};
</script>

