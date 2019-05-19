<template>
  <div class="container-fluid register-page" >
    <div class="card card-nav-tabs">
      <div class="card-body">
        <fb:login-button
          scope="public_profile,email"
          onlogin="success()">
        </fb:login-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "register",
    methods:{
      success: function(){
        console.log("123")
      }
    }
  }
</script>

<style lang="scss" scoped>
  .register-page{
    background-color: #B2AFAB;
    background-position: center center;
    background-size: cover;
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
