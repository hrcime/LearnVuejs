<template>
  <div id="login">
    <div class="card" style="min-width: 20rem;">
      <div class="card-body">
        <h4 class="card-title mb-3"><i class="fas fa-user-shield"></i> Sign In</h4>
        <Alert :message="error.message" :class="error.type" v-if="error.message" v-on:close="closeAlert"/>
        <button class="btn btn-primary btn-block" @click="loginWithFacebook">
          <i class="fab fa-facebook"></i> Facebook
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import Auth from '@/services/auth.service';
  import Alert from '@/components/Alert';
  export default {
    name: "login",
    components:{
      Alert
    },
    data: function(){
      return {
        error: {
          message: "",
          type: ""
        }
      }
    },
    methods: {
      loginWithFacebook: async function () {
        let data = await Auth.signInWithPopup("facebook");
        if(data){
          this.$router.push(this.$route.query.redirect || "/");
        }else{
          this.error = {
            message: "Login fail",
            type: "danger"
          }
        }
      }
    },
    closeAlert: function(){
      this.error = {
        message : "",
        type : ""
      }
    }
  };
</script>

<style scoped>
  #login {
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
