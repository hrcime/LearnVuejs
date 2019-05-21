const TOKEN_KEY = "accessToken";

const storageService = {
  saveToken: function(accessToken){
    localStorage.setItem(TOKEN_KEY, accessToken);
  },

  getToken: function(){
    return localStorage.getItem(TOKEN_KEY);
  },

  removeToken: function(){
    localStorage.removeItem(TOKEN_KEY);
  }
};

export default storageService;
