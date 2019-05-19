const Vue_FB = {};
Vue_FB.install = function (Vue, options) {
  const {appId, version} = options;
  Vue.FB = undefined;
  window.fbAsyncInit = function() {
    FB.init({
      appId      : appId,
      cookie     : true,
      xfbml      : true,
      version    : version
    });

    FB.AppEvents.logPageView();
    Vue.FB = FB;
  };

  (function(d, s, id){
    let js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
};

export default Vue_FB;
