import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, t as text, k as space, c as claim_element, a as children, h as claim_text, m as claim_space, d as detach, g as insert_hydration, K as append_hydration, E as noop } from "../chunks/index-f49af62c.js";
function create_fragment(ctx) {
  let p0;
  let t0;
  let br0;
  let t1;
  let br1;
  let t2;
  let strong0;
  let t3;
  let i0;
  let t4;
  let t5;
  let i1;
  let t6;
  let t7;
  let t8;
  let br2;
  let t9;
  let br3;
  let t10;
  let p1;
  let t11;
  let br4;
  let t12;
  let br5;
  let t13;
  let strong1;
  let t14;
  return {
    c() {
      p0 = element("p");
      t0 = text("What to do:\n  ");
      br0 = element("br");
      t1 = space();
      br1 = element("br");
      t2 = space();
      strong0 = element("strong");
      t3 = text("This app requires you to login with your google account. This app will only\n    work if you are part of the\n    ");
      i0 = element("i");
      t4 = text("CISD");
      t5 = text("\n    Organization. Once you sign in with your\n    ");
      i1 = element("i");
      t6 = text("CISD");
      t7 = text("\n    Google Account, you will be taken to the gallery page. The gallery page is\n    where you upload your cartoons so people can like them. On the gallery page\n    you can also like other people's cartoons. The Leaderboard page shows you\n    where other people ranked, also including you. To Logout, click on the\n    Profile Icon and the click the Icon that says Logout. Refresh the page to\n    log back in.");
      t8 = space();
      br2 = element("br");
      t9 = space();
      br3 = element("br");
      t10 = space();
      p1 = element("p");
      t11 = text("What the App is about:\n  ");
      br4 = element("br");
      t12 = space();
      br5 = element("br");
      t13 = space();
      strong1 = element("strong");
      t14 = text("This app lets you upload cartoons and comics you make for other people to\n    view them and like them. The more likes you get, the more XP you have. The\n    more XP you have, the higher you will be on the Leaderboard. You are\n    competiting to be the best on the Leaderboard, which means you will have to\n    make your best comic.");
    },
    l(nodes) {
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "What to do:\n  ");
      br0 = claim_element(p0_nodes, "BR", {});
      t1 = claim_space(p0_nodes);
      br1 = claim_element(p0_nodes, "BR", {});
      t2 = claim_space(p0_nodes);
      strong0 = claim_element(p0_nodes, "STRONG", {});
      var strong0_nodes = children(strong0);
      t3 = claim_text(strong0_nodes, "This app requires you to login with your google account. This app will only\n    work if you are part of the\n    ");
      i0 = claim_element(strong0_nodes, "I", {});
      var i0_nodes = children(i0);
      t4 = claim_text(i0_nodes, "CISD");
      i0_nodes.forEach(detach);
      t5 = claim_text(strong0_nodes, "\n    Organization. Once you sign in with your\n    ");
      i1 = claim_element(strong0_nodes, "I", {});
      var i1_nodes = children(i1);
      t6 = claim_text(i1_nodes, "CISD");
      i1_nodes.forEach(detach);
      t7 = claim_text(strong0_nodes, "\n    Google Account, you will be taken to the gallery page. The gallery page is\n    where you upload your cartoons so people can like them. On the gallery page\n    you can also like other people's cartoons. The Leaderboard page shows you\n    where other people ranked, also including you. To Logout, click on the\n    Profile Icon and the click the Icon that says Logout. Refresh the page to\n    log back in.");
      strong0_nodes.forEach(detach);
      p0_nodes.forEach(detach);
      t8 = claim_space(nodes);
      br2 = claim_element(nodes, "BR", {});
      t9 = claim_space(nodes);
      br3 = claim_element(nodes, "BR", {});
      t10 = claim_space(nodes);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t11 = claim_text(p1_nodes, "What the App is about:\n  ");
      br4 = claim_element(p1_nodes, "BR", {});
      t12 = claim_space(p1_nodes);
      br5 = claim_element(p1_nodes, "BR", {});
      t13 = claim_space(p1_nodes);
      strong1 = claim_element(p1_nodes, "STRONG", {});
      var strong1_nodes = children(strong1);
      t14 = claim_text(strong1_nodes, "This app lets you upload cartoons and comics you make for other people to\n    view them and like them. The more likes you get, the more XP you have. The\n    more XP you have, the higher you will be on the Leaderboard. You are\n    competiting to be the best on the Leaderboard, which means you will have to\n    make your best comic.");
      strong1_nodes.forEach(detach);
      p1_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, p0, anchor);
      append_hydration(p0, t0);
      append_hydration(p0, br0);
      append_hydration(p0, t1);
      append_hydration(p0, br1);
      append_hydration(p0, t2);
      append_hydration(p0, strong0);
      append_hydration(strong0, t3);
      append_hydration(strong0, i0);
      append_hydration(i0, t4);
      append_hydration(strong0, t5);
      append_hydration(strong0, i1);
      append_hydration(i1, t6);
      append_hydration(strong0, t7);
      insert_hydration(target, t8, anchor);
      insert_hydration(target, br2, anchor);
      insert_hydration(target, t9, anchor);
      insert_hydration(target, br3, anchor);
      insert_hydration(target, t10, anchor);
      insert_hydration(target, p1, anchor);
      append_hydration(p1, t11);
      append_hydration(p1, br4);
      append_hydration(p1, t12);
      append_hydration(p1, br5);
      append_hydration(p1, t13);
      append_hydration(p1, strong1);
      append_hydration(strong1, t14);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(p0);
      if (detaching)
        detach(t8);
      if (detaching)
        detach(br2);
      if (detaching)
        detach(t9);
      if (detaching)
        detach(br3);
      if (detaching)
        detach(t10);
      if (detaching)
        detach(p1);
    }
  };
}
class Help extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export { Help as default };
