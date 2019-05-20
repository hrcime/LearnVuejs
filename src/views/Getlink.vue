<template>
  <div id="getlink">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "Getlink",
  }
</script>

<style scoped>
  #getlink {
    min-height: 100vh;
    max-height: 999px;
    overflow: hidden;
    position: relative;
    width: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
