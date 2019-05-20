<template>
  <div id="mainForm">
    <div class="card" style="width: 30rem;" v-show="!loading">
      <div class="card-body">
        <h4 class="card-title mb-3"><i class="fas fa-cloud-download-alt"></i> Fshare</h4>
          <Alert :message="error.message" :class="error.type" v-if="error.message" v-on:close="closeAlert"/>
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
    import Alert from '@/components/Alert';
    import ApiService from '@/services/api.service';
    const langStr = {
      required: "Url is required",
      notSupport: "Not Support"
    };
    async function getLink(id){
      let res = await ApiService.get(`/fshare/${id}`);
      if(res.data.errors){
        return {"error" : res.data.errors};
      }else{
        return res.data.response
      }
    }
    export default {
      name: "getlink-form",
      components: {
        Alert
      },
      data: function () {
        return {
          url: '',
          placeHolder: 'https://www.fshare.vn/file/XXXXXXXXXX',
          loading: false,
          error: {
            message : "",
            type: ""
          }
        }
      },
      methods: {
        changeLoading:function(logic){
          this.loading =  logic || !this.loading;
        },
        generate: async function(){
          let self = this;
          if(!self.url){
            self.setAlert("danger", langStr.required)
          }else{
            self.closeAlert();
            let id = self.url.match(/fshare.vn\/file\/([\w]+)/);
            self.changeLoading();
            if (id && id[1]) {
              let res = await getLink(id[1]);
              if(res.error){
                self.setAlert("danger", res.error.msg);
              }else{
                self.resetUrl();
                self.$router.push({name: 'download', params: {id: res.id, name: res.name}});
              }
            } else {
              self.setAlert("danger", langStr.notSupport);
              self.resetUrl();
            }
            self.changeLoading();
          }
        },
        resetUrl: function(){
          this.url = '';
        },
        setAlert: function(type = "", message = ""){
          type = "alert-" + type;
          this.error = {
            message,
            type
          }
        },
        closeAlert: function(){
          this.error = {
            message : "",
            type : ""
          }
        }
      }
    }
</script>

<style scoped>

</style>
