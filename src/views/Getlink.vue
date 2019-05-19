<template>
  <div id="getlink">
    <div class="card" style="width: 30rem;" v-show="!loading">
      <div class="card-body">
        <h4 class="card-title mb-3"><i class="fas fa-cloud-download-alt"></i> FSHARE</h4>
        <!--<div class="alert alert-warning alert-dismissible fade show" role="alert">-->
          <!--<strong>Holy guacamole!</strong> You should check in on some of those fields below.-->
          <!--<button type="button" class="close" data-dismiss="alert" aria-label="Close">-->
            <!--<span aria-hidden="true">&times;</span>-->
          <!--</button>-->
        <!--</div>-->
        <div class="form-group">
          <div class="input-group">
            <input type="text" v-model.trim="url" class="form-control form-control-success" v-bind:placeholder="placeHolder" v-bind:disabled="loading">
            <div class="input-group-append">
              <span class="input-group-text" v-on:click="resetUrl">
                <i class="fas fa-times" v-show="url"></i>
              </span>
            </div>
          </div>
        </div>
        <button class="btn btn-primary btn-round btn-block" v-on:click="generate()">
          <i class="fas fa-angle-right"></i> Generate
        </button>
      </div>
    </div>
    <div class="spinner-border text-primary" role="status" v-show="loading">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
  import ApiService from '../services/api.service';
  async function getLink(id){
    let res = await ApiService.get(`/fshare/${id}`);
    if(res.data.response && res.data.response.name){
      return res.data.response.name;
    }else{
      return false;
    }
  }
  export default {
    name: "Getlink",
    data: function () {
      return {
        url: '',
        placeHolder: 'https://www.fshare.vn/file/XXXXXXXXXX',
        loading: false
      }
    },
    methods: {
      changeLoading:function(logic){
        this.loading =  logic || !this.loading;
      },
      generate: async function(){
        let self = this;
        let id = self.url.match(/fshare.vn\/file\/([\w]+)/)[1];
        self.changeLoading();
        if(id){
          let res = await getLink(id);
          alert(res);
          self.url = '';
          self.changeLoading();
        }else{
          self.changeLoading();
        }
      },
      resetUrl: function(){
        this.url = '';
      }
    }
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
