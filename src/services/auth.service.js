import firebase from 'firebase';
import storageService from '@/services/storage.service';

const Auth = {
  signInWithPopup: function(provider){
    let auth = firebase.auth();
    switch (provider){
      case "facebook":
        return new Promise((resolve, reject)=>{
          auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(function(result){
            if(result && result.credential){
              storageService.saveToken(result.credential.accessToken);
              resolve(true);
            }
          }).catch(function(error){
            reject(false);
          })
        });
        break;

      default:
        return null;
    }
  }
};

export default Auth;
