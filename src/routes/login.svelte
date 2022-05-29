<script>
   import {user} from "../stores/user.js"
   import { goto } from '$app/navigation';

   window.onSignIn = (googleUser) => {
      const profile = googleUser.getBasicProfile();
      var ID = (profile.getId());
      var name = (profile.getName());
      var imageUrl = (profile.getImageUrl());
      var email = (profile.getEmail());


      user.set({name: name, email:email, imageUrl:imageUrl, ID:ID, userLoggedIn: true})
      console.log("User updated", $user)
      goto("gallery", {replaceState:true})
   };
   let userLoggedIn = false;
   
   window.onLoadCallback = () => {
      userLoggedIn = gapi.auth2.getAuthInstance().isSignedIn.get(); 
      
      console.log(userLoggedIn)
      if (userLoggedIn) {  
         console.log(GoogleAuth.currentUser.get())
      }
   }
  </script>    
  
  <svelte:head>
   <script src="https://apis.google.com/js/platform.js?onload=onLoadCallback" async defer></script>
   </svelte:head>
  
  <div class="g-signin2" data-longtitle="true" data-onsuccess="onSignIn" /> 

  

