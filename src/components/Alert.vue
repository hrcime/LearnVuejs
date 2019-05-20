<template>
  <div class="alert alert-dismissible fade show" role="alert">
    {{message}}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close" v-on:click="$emit('close')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
  export default {
    name: "alert",
    props: [
      'message'
    ]
  }
</script>

<style scoped>

</style>
