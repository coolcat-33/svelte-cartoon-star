import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, k as space, a5 as query_selector_all, c as claim_element, a as children, d as detach, m as claim_space, a6 as src_url_equal, b as attr, K as append_hydration, g as insert_hydration, E as noop, _ as component_subscribe } from "../chunks/index-f49af62c.js";
import { u as user } from "../chunks/user-caa78ed2.js";
import { g as goto } from "../chunks/navigation-0e6511d1.js";
import "../chunks/index-c8a6f409.js";
import "../chunks/singletons-d1fb5791.js";
function create_fragment(ctx) {
  let script;
  let script_src_value;
  let t;
  let div;
  return {
    c() {
      script = element("script");
      t = space();
      div = element("div");
      this.h();
    },
    l(nodes) {
      const head_nodes = query_selector_all('[data-svelte="svelte-c2qj12"]', document.head);
      script = claim_element(head_nodes, "SCRIPT", { src: true });
      var script_nodes = children(script);
      script_nodes.forEach(detach);
      head_nodes.forEach(detach);
      t = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        class: true,
        "data-longtitle": true,
        "data-onsuccess": true
      });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(script.src, script_src_value = "https://apis.google.com/js/platform.js?onload=onLoadCallback"))
        attr(script, "src", script_src_value);
      script.async = true;
      script.defer = true;
      attr(div, "class", "g-signin2");
      attr(div, "data-longtitle", "true");
      attr(div, "data-onsuccess", "onSignIn");
    },
    m(target, anchor) {
      append_hydration(document.head, script);
      insert_hydration(target, t, anchor);
      insert_hydration(target, div, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      detach(script);
      if (detaching)
        detach(t);
      if (detaching)
        detach(div);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $user;
  component_subscribe($$self, user, ($$value) => $$invalidate(1, $user = $$value));
  window.onSignIn = (googleUser) => {
    const profile = googleUser.getBasicProfile();
    var ID = profile.getId();
    var name = profile.getName();
    var imageUrl = profile.getImageUrl();
    var email = profile.getEmail();
    user.set({
      name,
      email,
      imageUrl,
      ID,
      userLoggedIn: true
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
  return [];
}
class Login extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Login as default };
