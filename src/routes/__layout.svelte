<script>
  import { user } from "../stores/user.js";
  import {
    Header,
    HeaderNav,
    HeaderNavItem,
    HeaderUtilities,
    HeaderAction,
    HeaderGlobalAction,
    HeaderPanelLinks,
    HeaderPanelDivider,
    HeaderPanelLink,
    SkipToContent,
    SideNav,
    SideNavItems,
    SideNavMenu,
    SideNavMenuItem,
    SideNavLink,
    Content,
    Grid,
    Row,
    Column,
Theme,
  } from "carbon-components-svelte";
  import SettingsAdjust from "carbon-icons-svelte/lib/SettingsAdjust.svelte";
  import UserAvatarFilledAlt from "carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte";
  import TrophyFilled from "carbon-icons-svelte/lib/TrophyFilled.svelte";
  import ImageSearch from "carbon-icons-svelte/lib/ImageSearch.svelte";
  import DocumentAdd from "carbon-icons-svelte/lib/DocumentAdd.svelte";
  import Logout from "carbon-icons-svelte/lib/Logout.svelte";

  import { Button } from "carbon-components-svelte";
  import { goto } from "$app/navigation";
import { get } from "svelte/store";

  window.onSignIn = (googleUser) => {
    const profile = googleUser.getBasicProfile();
    var ID = profile.getId();
    var name = profile.getName();
    var imageUrl = profile.getImageUrl();
    var email = profile.getEmail();

    user.set({
      name: name,
      email: email,
      imageUrl: imageUrl,
      ID: ID,
      userLoggedIn: true,
    });
    console.log("User updated", $user);
    goto("gallery", { replaceState: true });
  };
  let userLoggedIn = false;

  window.onLoadCallback = () => {
    userLoggedIn = gapi.auth2.getAuthInstance().isSignedIn.get();

    console.log(userLoggedIn);
    if (userLoggedIn) {
      console.log(GoogleAuth.currentUser.get());
    }
  };

  let isSideNavOpen = false;
  let isOpen1 = false;

  function logout() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      $user["userLoggedIn"] = false
      isOpen1 = false;
      goto("login", { replaceState: true })
    });
  }
</script>
<!-- {#if $user["userLoggedIn"]} -->

<Header company="SXS0130" platformName="Cartoon Star" persistentHamburgerMenu=true bind:isSideNavOpen>
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
  <HeaderNav>
    <HeaderNavItem href="gallery" text="Gallery" />
    <HeaderNavItem href="leaderboard" text="Leaderboard" />
    <HeaderNavItem href="help" text="Need Help?" />
  </HeaderNav>
  <HeaderUtilities>

    <HeaderAction
      bind:isOpen={isOpen1}
      icon={UserAvatarFilledAlt}
      closeIcon={UserAvatarFilledAlt}
    >
      <HeaderPanelLinks>
        <HeaderPanelDivider>User Info:</HeaderPanelDivider>
        {#if $user["userLoggedIn"]}
        <HeaderPanelLink>{$user.name}</HeaderPanelLink>
        <HeaderPanelLink>{$user.email}</HeaderPanelLink>
        <HeaderPanelLink
          >
          
          <Button
            iconDescription="Logout"
            icon={Logout}
            on:click={logout}
          />
          </HeaderPanelLink>
          {/if}

      </HeaderPanelLinks>
    </HeaderAction>
  </HeaderUtilities>
  <SideNav bind:isOpen={isSideNavOpen} >
    <SideNavItems>
      <SideNavMenuItem href="gallery" text="Gallery" />
      <SideNavMenuItem href="leaderboard" text="Leaderboard" />
      <SideNavMenuItem href="help" text="Need Help?" />
    </SideNavItems>
  </SideNav>
</Header>

<!-- {/if} -->
<svelte:head>
  <script src="https://apis.google.com/js/platform.js?onload=onLoadCallback" async defer></script>
  </svelte:head>
<Content>
  {#if $user["userLoggedIn"]}
    <slot />
  {:else}
    <div class="g-signin2" data-longtitle="true" data-onsuccess="onSignIn" /> 
  {/if}
</Content>
