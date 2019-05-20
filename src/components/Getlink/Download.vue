<template>
  <div id="download">
    <div class="card" style="width: 30rem;">
      <div class="card-body">
        <h4 class="card-title mb-3"><div v-bind:title="filename" style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap;"><i class="fas fa-cloud-download-alt"></i> {{filename}}</div></h4>
        <div class="alert alert-danger" role="alert" v-show="!canDownload">
          Please go back !
        </div>
        <button class="btn btn-primary btn-round btn-block" @click="download" v-show="canDownload">
          <i class="fas fa-download"></i> Download
        </button>
        <button class="btn btn-default btn-round btn-block" @click="goBack">
          <i class="fas fa-angle-left"></i> Go Back
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import ApiService from '@/services/api.service';
  async function getLink (id){
    let res = await ApiService.get(`/fshare/download/${id}`);
    if(res.data.errors){
      return false;
    }else{
      return res.data.response;
    }
  }
  export default {
    name: "download",
    data: function(){
      return {
        filename: "Fshare",
        canDownload: false,
        url : ""
      }
    },
    methods: {
      goBack: function(){
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push({name: 'getlink'})
      },
      download: function(){
        window.open(this.url, '_blank');
      }
    },
    beforeMount: async function(){
      let self = this;
      let res = await getLink(this.$route.params.id);
      if(res && res.url){
        self.canDownload = true;
        self.filename = res.name || "Fshare";
        self.url = res.url || "";
      }else{
        self.filename = "Not found";
      }
    }
  }
</script>

<style scoped>

</style>
