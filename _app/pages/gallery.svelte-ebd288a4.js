var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateWrapper = (obj, member, setter, getter) => {
  return {
    set _(value) {
      __privateSet(obj, member, value, setter);
    },
    get _() {
      return __privateGet(obj, member, getter);
    }
  };
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
import { S as SvelteComponent, i as init, s as safe_not_equal, l as empty, g as insert_hydration, n as group_outros, o as transition_out, p as check_outros, q as transition_in, d as detach, M as compute_rest_props, C as assign, N as exclude_internal_props, V as create_slot, e as element, c as claim_element, a as children, O as set_attributes, X as update_slot_base, Y as get_all_dirty_from_scope, Z as get_slot_changes, z as get_spread_update, I as svg_element, t as text, J as claim_svg_element, h as claim_text, K as append_hydration, j as set_data, b as attr, L as set_svg_attributes, E as noop, Q as listen, R as bubble, a8 as prevent_default, a1 as stop_propagation, a9 as action_destroyer, H as is_function, G as run_all, aa as get_current_component, T as binding_callbacks, w as create_component, x as claim_component, y as mount_component, A as get_spread_object, B as destroy_component, a3 as getContext, r as setContext, ab as onDestroy, k as space, m as claim_space, ac as null_to_empty, U as add_render_callback, ad as create_in_transition, ae as create_out_transition, af as globals, D as tick, ag as set_input_value, f as set_style, _ as component_subscribe, ah as destroy_each, a6 as src_url_equal } from "../chunks/index-f49af62c.js";
import "../chunks/HeaderSearch.svelte_svelte_type_style_lang-e51739eb.js";
import { a as scale, B as Button$2 } from "../chunks/index-bd33cef0.js";
import { c as cartoons } from "../chunks/cartoons-fccfd6a7.js";
import { u as user } from "../chunks/user-caa78ed2.js";
import "../chunks/index-c8a6f409.js";
const get_default_slot_changes$1 = (dirty) => ({ props: dirty & 2 });
const get_default_slot_context$1 = (ctx) => ({ props: ctx[1] });
function create_else_block$3(ctx) {
  let div;
  let current;
  const default_slot_template = ctx[10].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[9], null);
  let div_levels = [ctx[1]];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(div, div_data);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 512)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[9], !current ? get_all_dirty_from_scope(ctx2[9]) : get_slot_changes(default_slot_template, ctx2[9], dirty, null), null);
        }
      }
      set_attributes(div, div_data = get_spread_update(div_levels, [dirty & 2 && ctx2[1]]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_if_block$7(ctx) {
  let current;
  const default_slot_template = ctx[10].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[9], get_default_slot_context$1);
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 514)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[9], !current ? get_all_dirty_from_scope(ctx2[9]) : get_slot_changes(default_slot_template, ctx2[9], dirty, get_default_slot_changes$1), get_default_slot_context$1);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_fragment$g(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$7, create_else_block$3];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[0])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$f($$self, $$props, $$invalidate) {
  let props;
  const omit_props_names = [
    "as",
    "condensed",
    "narrow",
    "fullWidth",
    "noGutter",
    "noGutterLeft",
    "noGutterRight",
    "padding"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { as = false } = $$props;
  let { condensed = false } = $$props;
  let { narrow = false } = $$props;
  let { fullWidth = false } = $$props;
  let { noGutter = false } = $$props;
  let { noGutterLeft = false } = $$props;
  let { noGutterRight = false } = $$props;
  let { padding = false } = $$props;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(11, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("as" in $$new_props)
      $$invalidate(0, as = $$new_props.as);
    if ("condensed" in $$new_props)
      $$invalidate(2, condensed = $$new_props.condensed);
    if ("narrow" in $$new_props)
      $$invalidate(3, narrow = $$new_props.narrow);
    if ("fullWidth" in $$new_props)
      $$invalidate(4, fullWidth = $$new_props.fullWidth);
    if ("noGutter" in $$new_props)
      $$invalidate(5, noGutter = $$new_props.noGutter);
    if ("noGutterLeft" in $$new_props)
      $$invalidate(6, noGutterLeft = $$new_props.noGutterLeft);
    if ("noGutterRight" in $$new_props)
      $$invalidate(7, noGutterRight = $$new_props.noGutterRight);
    if ("padding" in $$new_props)
      $$invalidate(8, padding = $$new_props.padding);
    if ("$$scope" in $$new_props)
      $$invalidate(9, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(1, props = __spreadProps(__spreadValues({}, $$restProps), {
      class: [
        $$restProps.class,
        "bx--grid",
        condensed && "bx--grid--condensed",
        narrow && "bx--grid--narrow",
        fullWidth && "bx--grid--full-width",
        noGutter && "bx--no-gutter",
        noGutterLeft && "bx--no-gutter--left",
        noGutterRight && "bx--no-gutter--right",
        padding && "bx--row-padding"
      ].filter(Boolean).join(" ")
    }));
  };
  return [
    as,
    props,
    condensed,
    narrow,
    fullWidth,
    noGutter,
    noGutterLeft,
    noGutterRight,
    padding,
    $$scope,
    slots
  ];
}
class Grid extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$f, create_fragment$g, safe_not_equal, {
      as: 0,
      condensed: 2,
      narrow: 3,
      fullWidth: 4,
      noGutter: 5,
      noGutterLeft: 6,
      noGutterRight: 7,
      padding: 8
    });
  }
}
const get_default_slot_changes = (dirty) => ({ props: dirty & 2 });
const get_default_slot_context = (ctx) => ({ props: ctx[1] });
function create_else_block$2(ctx) {
  let div;
  let current;
  const default_slot_template = ctx[9].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[8], null);
  let div_levels = [ctx[1]];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(div, div_data);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 256)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[8], !current ? get_all_dirty_from_scope(ctx2[8]) : get_slot_changes(default_slot_template, ctx2[8], dirty, null), null);
        }
      }
      set_attributes(div, div_data = get_spread_update(div_levels, [dirty & 2 && ctx2[1]]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_if_block$6(ctx) {
  let current;
  const default_slot_template = ctx[9].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[8], get_default_slot_context);
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 258)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[8], !current ? get_all_dirty_from_scope(ctx2[8]) : get_slot_changes(default_slot_template, ctx2[8], dirty, get_default_slot_changes), get_default_slot_context);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_fragment$f(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$6, create_else_block$2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[0])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$e($$self, $$props, $$invalidate) {
  let props;
  const omit_props_names = ["as", "condensed", "narrow", "noGutter", "noGutterLeft", "noGutterRight", "padding"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { as = false } = $$props;
  let { condensed = false } = $$props;
  let { narrow = false } = $$props;
  let { noGutter = false } = $$props;
  let { noGutterLeft = false } = $$props;
  let { noGutterRight = false } = $$props;
  let { padding = false } = $$props;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(10, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("as" in $$new_props)
      $$invalidate(0, as = $$new_props.as);
    if ("condensed" in $$new_props)
      $$invalidate(2, condensed = $$new_props.condensed);
    if ("narrow" in $$new_props)
      $$invalidate(3, narrow = $$new_props.narrow);
    if ("noGutter" in $$new_props)
      $$invalidate(4, noGutter = $$new_props.noGutter);
    if ("noGutterLeft" in $$new_props)
      $$invalidate(5, noGutterLeft = $$new_props.noGutterLeft);
    if ("noGutterRight" in $$new_props)
      $$invalidate(6, noGutterRight = $$new_props.noGutterRight);
    if ("padding" in $$new_props)
      $$invalidate(7, padding = $$new_props.padding);
    if ("$$scope" in $$new_props)
      $$invalidate(8, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(1, props = __spreadProps(__spreadValues({}, $$restProps), {
      class: [
        $$restProps.class,
        "bx--row",
        condensed && "bx--row--condensed",
        narrow && "bx--row--narrow",
        noGutter && "bx--no-gutter",
        noGutterLeft && "bx--no-gutter--left",
        noGutterRight && "bx--no-gutter--right",
        padding && "bx--row-padding"
      ].filter(Boolean).join(" ")
    }));
  };
  return [
    as,
    props,
    condensed,
    narrow,
    noGutter,
    noGutterLeft,
    noGutterRight,
    padding,
    $$scope,
    slots
  ];
}
class Row extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$e, create_fragment$f, safe_not_equal, {
      as: 0,
      condensed: 2,
      narrow: 3,
      noGutter: 4,
      noGutterLeft: 5,
      noGutterRight: 6,
      padding: 7
    });
  }
}
function create_if_block$5(ctx) {
  let title_1;
  let t;
  return {
    c() {
      title_1 = svg_element("title");
      t = text(ctx[1]);
    },
    l(nodes) {
      title_1 = claim_svg_element(nodes, "title", {});
      var title_1_nodes = children(title_1);
      t = claim_text(title_1_nodes, ctx[1]);
      title_1_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, title_1, anchor);
      append_hydration(title_1, t);
    },
    p(ctx2, dirty) {
      if (dirty & 2)
        set_data(t, ctx2[1]);
    },
    d(detaching) {
      if (detaching)
        detach(title_1);
    }
  };
}
function create_fragment$e(ctx) {
  let svg;
  let path;
  let if_block = ctx[1] && create_if_block$5(ctx);
  let svg_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { preserveAspectRatio: "xMidYMid meet" },
    { width: ctx[0] },
    { height: ctx[0] },
    ctx[2],
    ctx[3]
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign(svg_data, svg_levels[i]);
  }
  return {
    c() {
      svg = svg_element("svg");
      if (if_block)
        if_block.c();
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        xmlns: true,
        viewBox: true,
        fill: true,
        preserveAspectRatio: true,
        width: true,
        height: true
      });
      var svg_nodes = children(svg);
      if (if_block)
        if_block.l(svg_nodes);
      path = claim_svg_element(svg_nodes, "path", { d: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "d", "M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      if (if_block)
        if_block.m(svg, null);
      append_hydration(svg, path);
    },
    p(ctx2, [dirty]) {
      if (ctx2[1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$5(ctx2);
          if_block.c();
          if_block.m(svg, path);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 32 32" },
        { fill: "currentColor" },
        { preserveAspectRatio: "xMidYMid meet" },
        dirty & 1 && { width: ctx2[0] },
        dirty & 1 && { height: ctx2[0] },
        dirty & 4 && ctx2[2],
        dirty & 8 && ctx2[3]
      ]));
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
      if (if_block)
        if_block.d();
    }
  };
}
function instance$d($$self, $$props, $$invalidate) {
  let labelled;
  let attributes;
  const omit_props_names = ["size", "title"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  $$self.$$set = ($$new_props) => {
    $$invalidate(5, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("size" in $$new_props)
      $$invalidate(0, size = $$new_props.size);
    if ("title" in $$new_props)
      $$invalidate(1, title = $$new_props.title);
  };
  $$self.$$.update = () => {
    $$invalidate(4, labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title);
    $$invalidate(2, attributes = {
      "aria-hidden": labelled ? void 0 : true,
      role: labelled ? "img" : void 0,
      focusable: Number($$props["tabindex"]) === 0 ? true : void 0
    });
  };
  $$props = exclude_internal_props($$props);
  return [size, title, attributes, $$restProps, labelled];
}
class Add extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$d, create_fragment$e, safe_not_equal, { size: 0, title: 1 });
  }
}
function create_if_block$4(ctx) {
  let title_1;
  let t;
  return {
    c() {
      title_1 = svg_element("title");
      t = text(ctx[1]);
    },
    l(nodes) {
      title_1 = claim_svg_element(nodes, "title", {});
      var title_1_nodes = children(title_1);
      t = claim_text(title_1_nodes, ctx[1]);
      title_1_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, title_1, anchor);
      append_hydration(title_1, t);
    },
    p(ctx2, dirty) {
      if (dirty & 2)
        set_data(t, ctx2[1]);
    },
    d(detaching) {
      if (detaching)
        detach(title_1);
    }
  };
}
function create_fragment$d(ctx) {
  let svg;
  let path;
  let if_block = ctx[1] && create_if_block$4(ctx);
  let svg_levels = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { preserveAspectRatio: "xMidYMid meet" },
    { width: ctx[0] },
    { height: ctx[0] },
    ctx[2],
    ctx[3]
  ];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign(svg_data, svg_levels[i]);
  }
  return {
    c() {
      svg = svg_element("svg");
      if (if_block)
        if_block.c();
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        xmlns: true,
        viewBox: true,
        fill: true,
        preserveAspectRatio: true,
        width: true,
        height: true
      });
      var svg_nodes = children(svg);
      if (if_block)
        if_block.l(svg_nodes);
      path = claim_svg_element(svg_nodes, "path", { d: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "d", "M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z");
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      if (if_block)
        if_block.m(svg, null);
      append_hydration(svg, path);
    },
    p(ctx2, [dirty]) {
      if (ctx2[1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$4(ctx2);
          if_block.c();
          if_block.m(svg, path);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { viewBox: "0 0 32 32" },
        { fill: "currentColor" },
        { preserveAspectRatio: "xMidYMid meet" },
        dirty & 1 && { width: ctx2[0] },
        dirty & 1 && { height: ctx2[0] },
        dirty & 4 && ctx2[2],
        dirty & 8 && ctx2[3]
      ]));
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
      if (if_block)
        if_block.d();
    }
  };
}
function instance$c($$self, $$props, $$invalidate) {
  let labelled;
  let attributes;
  const omit_props_names = ["size", "title"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  $$self.$$set = ($$new_props) => {
    $$invalidate(5, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("size" in $$new_props)
      $$invalidate(0, size = $$new_props.size);
    if ("title" in $$new_props)
      $$invalidate(1, title = $$new_props.title);
  };
  $$self.$$.update = () => {
    $$invalidate(4, labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title);
    $$invalidate(2, attributes = {
      "aria-hidden": labelled ? void 0 : true,
      role: labelled ? "img" : void 0,
      focusable: Number($$props["tabindex"]) === 0 ? true : void 0
    });
  };
  $$props = exclude_internal_props($$props);
  return [size, title, attributes, $$restProps, labelled];
}
class Close extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$c, create_fragment$d, safe_not_equal, { size: 0, title: 1 });
  }
}
var Gallery_svelte_svelte_type_style_lang = "";
function classMap(classObj) {
  return Object.entries(classObj).filter(([name, value]) => name !== "" && value).map(([name]) => name).join(" ");
}
function dispatch(element2, eventType, detail, eventInit = { bubbles: true }, duplicateEventForMDC = false) {
  if (typeof Event !== "undefined" && element2) {
    const event = new CustomEvent(eventType, Object.assign(Object.assign({}, eventInit), { detail }));
    element2 === null || element2 === void 0 ? void 0 : element2.dispatchEvent(event);
    if (duplicateEventForMDC && eventType.startsWith("SMUI")) {
      const duplicateEvent = new CustomEvent(eventType.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, eventInit), { detail }));
      element2 === null || element2 === void 0 ? void 0 : element2.dispatchEvent(duplicateEvent);
      if (duplicateEvent.defaultPrevented) {
        event.preventDefault();
      }
    }
    return event;
  }
}
const oldModifierRegex = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
const newModifierRegex = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function forwardEventsBuilder(component) {
  let $on;
  let events2 = [];
  component.$on = (fullEventType, callback) => {
    let eventType = fullEventType;
    let destructor = () => {
    };
    if ($on) {
      destructor = $on(eventType, callback);
    } else {
      events2.push([eventType, callback]);
    }
    const oldModifierMatch = eventType.match(oldModifierRegex);
    if (oldModifierMatch && console) {
      console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', eventType);
    }
    return () => {
      destructor();
    };
  };
  function forward(e) {
    bubble(component, e);
  }
  return (node) => {
    const destructors = [];
    const forwardDestructors = {};
    $on = (fullEventType, callback) => {
      let eventType = fullEventType;
      let handler = callback;
      let options = false;
      const oldModifierMatch = eventType.match(oldModifierRegex);
      const newModifierMatch = eventType.match(newModifierRegex);
      const modifierMatch = oldModifierMatch || newModifierMatch;
      if (eventType.match(/^SMUI:\w+:/)) {
        const newEventTypeParts = eventType.split(":");
        let newEventType = "";
        for (let i = 0; i < newEventTypeParts.length; i++) {
          newEventType += i === newEventTypeParts.length - 1 ? ":" + newEventTypeParts[i] : newEventTypeParts[i].split("-").map((value) => value.slice(0, 1).toUpperCase() + value.slice(1)).join("");
        }
        console.warn(`The event ${eventType.split("$")[0]} has been renamed to ${newEventType.split("$")[0]}.`);
        eventType = newEventType;
      }
      if (modifierMatch) {
        const parts = eventType.split(oldModifierMatch ? ":" : "$");
        eventType = parts[0];
        const eventOptions = Object.fromEntries(parts.slice(1).map((mod) => [mod, true]));
        if (eventOptions.passive) {
          options = options || {};
          options.passive = true;
        }
        if (eventOptions.nonpassive) {
          options = options || {};
          options.passive = false;
        }
        if (eventOptions.capture) {
          options = options || {};
          options.capture = true;
        }
        if (eventOptions.once) {
          options = options || {};
          options.once = true;
        }
        if (eventOptions.preventDefault) {
          handler = prevent_default(handler);
        }
        if (eventOptions.stopPropagation) {
          handler = stop_propagation(handler);
        }
      }
      const off = listen(node, eventType, handler, options);
      const destructor = () => {
        off();
        const idx = destructors.indexOf(destructor);
        if (idx > -1) {
          destructors.splice(idx, 1);
        }
      };
      destructors.push(destructor);
      if (!(eventType in forwardDestructors)) {
        forwardDestructors[eventType] = listen(node, eventType, forward);
      }
      return destructor;
    };
    for (let i = 0; i < events2.length; i++) {
      $on(events2[i][0], events2[i][1]);
    }
    return {
      destroy: () => {
        for (let i = 0; i < destructors.length; i++) {
          destructors[i]();
        }
        for (let entry of Object.entries(forwardDestructors)) {
          entry[1]();
        }
      }
    };
  };
}
function useActions(node, actions) {
  let actionReturns = [];
  if (actions) {
    for (let i = 0; i < actions.length; i++) {
      const actionEntry = actions[i];
      const action = Array.isArray(actionEntry) ? actionEntry[0] : actionEntry;
      if (Array.isArray(actionEntry) && actionEntry.length > 1) {
        actionReturns.push(action(node, actionEntry[1]));
      } else {
        actionReturns.push(action(node));
      }
    }
  }
  return {
    update(actions2) {
      if ((actions2 && actions2.length || 0) != actionReturns.length) {
        throw new Error("You must not change the length of an actions array.");
      }
      if (actions2) {
        for (let i = 0; i < actions2.length; i++) {
          const returnEntry = actionReturns[i];
          if (returnEntry && returnEntry.update) {
            const actionEntry = actions2[i];
            if (Array.isArray(actionEntry) && actionEntry.length > 1) {
              returnEntry.update(actionEntry[1]);
            } else {
              returnEntry.update();
            }
          }
        }
      }
    },
    destroy() {
      for (let i = 0; i < actionReturns.length; i++) {
        const returnEntry = actionReturns[i];
        if (returnEntry && returnEntry.destroy) {
          returnEntry.destroy();
        }
      }
    }
  };
}
function create_fragment$c(ctx) {
  let div;
  let div_class_value;
  let useActions_action;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[9].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[8], null);
  let div_levels = [
    {
      class: div_class_value = classMap({
        [ctx[1]]: true,
        "mdc-card": true,
        "mdc-card--outlined": ctx[2] === "outlined",
        "smui-card--padded": ctx[3]
      })
    },
    ctx[6]
  ];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(div, div_data);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      ctx[10](div);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, div, ctx[0])),
          action_destroyer(ctx[5].call(null, div))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 256)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[8], !current ? get_all_dirty_from_scope(ctx2[8]) : get_slot_changes(default_slot_template, ctx2[8], dirty, null), null);
        }
      }
      set_attributes(div, div_data = get_spread_update(div_levels, [
        (!current || dirty & 14 && div_class_value !== (div_class_value = classMap({
          [ctx2[1]]: true,
          "mdc-card": true,
          "mdc-card--outlined": ctx2[2] === "outlined",
          "smui-card--padded": ctx2[3]
        }))) && { class: div_class_value },
        dirty & 64 && ctx2[6]
      ]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
      ctx[10](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$b($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "class", "variant", "padded", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { variant = "raised" } = $$props;
  let { padded = false } = $$props;
  let element2;
  function getElement() {
    return element2;
  }
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(4, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(1, className = $$new_props.class);
    if ("variant" in $$new_props)
      $$invalidate(2, variant = $$new_props.variant);
    if ("padded" in $$new_props)
      $$invalidate(3, padded = $$new_props.padded);
    if ("$$scope" in $$new_props)
      $$invalidate(8, $$scope = $$new_props.$$scope);
  };
  return [
    use,
    className,
    variant,
    padded,
    element2,
    forwardEvents,
    $$restProps,
    getElement,
    $$scope,
    slots,
    div_binding
  ];
}
class Card extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$b, create_fragment$c, safe_not_equal, {
      use: 0,
      class: 1,
      variant: 2,
      padded: 3,
      getElement: 7
    });
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
function create_fragment$b(ctx) {
  let div;
  let useActions_action;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[6].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[5], null);
  let div_levels = [ctx[3]];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(div, div_data);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      ctx[7](div);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, div, ctx[0])),
          action_destroyer(ctx[2].call(null, div))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 32)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[5], !current ? get_all_dirty_from_scope(ctx2[5]) : get_slot_changes(default_slot_template, ctx2[5], dirty, null), null);
        }
      }
      set_attributes(div, div_data = get_spread_update(div_levels, [dirty & 8 && ctx2[3]]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
      ctx[7](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$a($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { use = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let element2;
  function getElement() {
    return element2;
  }
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(1, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use = $$new_props.use);
    if ("$$scope" in $$new_props)
      $$invalidate(5, $$scope = $$new_props.$$scope);
  };
  return [
    use,
    element2,
    forwardEvents,
    $$restProps,
    getElement,
    $$scope,
    slots,
    div_binding
  ];
}
class Div$1 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$a, create_fragment$b, safe_not_equal, { use: 0, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function create_default_slot$4(ctx) {
  let current;
  const default_slot_template = ctx[10].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[12], null);
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 4096)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[12], !current ? get_all_dirty_from_scope(ctx2[12]) : get_slot_changes(default_slot_template, ctx2[12], dirty, null), null);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_fragment$a(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  const switch_instance_spread_levels = [
    {
      use: [ctx[7], ...ctx[0]]
    },
    {
      class: classMap(__spreadValues({
        [ctx[1]]: true,
        [ctx[5]]: true
      }, ctx[4]))
    },
    ctx[6],
    ctx[8]
  ];
  var switch_value = ctx[2];
  function switch_props(ctx2) {
    let switch_instance_props = {
      $$slots: { default: [create_default_slot$4] },
      $$scope: { ctx: ctx2 }
    };
    for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
    ctx[11](switch_instance);
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const switch_instance_changes = dirty & 499 ? get_spread_update(switch_instance_spread_levels, [
        dirty & 129 && {
          use: [ctx2[7], ...ctx2[0]]
        },
        dirty & 50 && {
          class: classMap(__spreadValues({
            [ctx2[1]]: true,
            [ctx2[5]]: true
          }, ctx2[4]))
        },
        dirty & 64 && get_spread_object(ctx2[6]),
        dirty & 256 && get_spread_object(ctx2[8])
      ]) : {};
      if (dirty & 4096) {
        switch_instance_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (switch_value !== (switch_value = ctx2[2])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx2));
          ctx2[11](switch_instance);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      ctx[11](null);
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
const internals = {
  component: Div$1,
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function instance$9($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "class", "component", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let element2;
  const smuiClass = internals.class;
  const smuiClassMap = {};
  const smuiClassUnsubscribes = [];
  const contexts = internals.contexts;
  const props = internals.props;
  let { component = internals.component } = $$props;
  Object.entries(internals.classMap).forEach(([name, context]) => {
    const store = getContext(context);
    if (store && "subscribe" in store) {
      smuiClassUnsubscribes.push(store.subscribe((value) => {
        $$invalidate(4, smuiClassMap[name] = value, smuiClassMap);
      }));
    }
  });
  const forwardEvents = forwardEventsBuilder(get_current_component());
  for (let context in contexts) {
    if (contexts.hasOwnProperty(context)) {
      setContext(context, contexts[context]);
    }
  }
  onDestroy(() => {
    for (const unsubscribe of smuiClassUnsubscribes) {
      unsubscribe();
    }
  });
  function getElement() {
    return element2.getElement();
  }
  function switch_instance_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(3, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(8, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(1, className = $$new_props.class);
    if ("component" in $$new_props)
      $$invalidate(2, component = $$new_props.component);
    if ("$$scope" in $$new_props)
      $$invalidate(12, $$scope = $$new_props.$$scope);
  };
  return [
    use,
    className,
    component,
    element2,
    smuiClassMap,
    smuiClass,
    props,
    forwardEvents,
    $$restProps,
    getElement,
    slots,
    switch_instance_binding,
    $$scope
  ];
}
class ClassAdder extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$9, create_fragment$a, safe_not_equal, {
      use: 0,
      class: 1,
      component: 2,
      getElement: 9
    });
  }
  get getElement() {
    return this.$$.ctx[9];
  }
}
const defaults = Object.assign({}, internals);
function classAdderBuilder(props) {
  return new Proxy(ClassAdder, {
    construct: function(target, args) {
      Object.assign(internals, defaults, props);
      return new target(...args);
    },
    get: function(target, prop) {
      Object.assign(internals, defaults, props);
      return target[prop];
    }
  });
}
function create_fragment$9(ctx) {
  let a;
  let useActions_action;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[7].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[6], null);
  let a_levels = [{ href: ctx[1] }, ctx[4]];
  let a_data = {};
  for (let i = 0; i < a_levels.length; i += 1) {
    a_data = assign(a_data, a_levels[i]);
  }
  return {
    c() {
      a = element("a");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", { href: true });
      var a_nodes = children(a);
      if (default_slot)
        default_slot.l(a_nodes);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(a, a_data);
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      if (default_slot) {
        default_slot.m(a, null);
      }
      ctx[8](a);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, a, ctx[0])),
          action_destroyer(ctx[3].call(null, a))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 64)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[6], !current ? get_all_dirty_from_scope(ctx2[6]) : get_slot_changes(default_slot_template, ctx2[6], dirty, null), null);
        }
      }
      set_attributes(a, a_data = get_spread_update(a_levels, [
        (!current || dirty & 2) && { href: ctx2[1] },
        dirty & 16 && ctx2[4]
      ]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(a);
      if (default_slot)
        default_slot.d(detaching);
      ctx[8](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$8($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "href", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { use = [] } = $$props;
  let { href = "javascript:void(0);" } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let element2;
  function getElement() {
    return element2;
  }
  function a_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(2, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use = $$new_props.use);
    if ("href" in $$new_props)
      $$invalidate(1, href = $$new_props.href);
    if ("$$scope" in $$new_props)
      $$invalidate(6, $$scope = $$new_props.$$scope);
  };
  return [
    use,
    href,
    element2,
    forwardEvents,
    $$restProps,
    getElement,
    $$scope,
    slots,
    a_binding
  ];
}
class A$1 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$8, create_fragment$9, safe_not_equal, { use: 0, href: 1, getElement: 5 });
  }
  get getElement() {
    return this.$$.ctx[5];
  }
}
function create_fragment$8(ctx) {
  let button;
  let useActions_action;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[6].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[5], null);
  let button_levels = [ctx[3]];
  let button_data = {};
  for (let i = 0; i < button_levels.length; i += 1) {
    button_data = assign(button_data, button_levels[i]);
  }
  return {
    c() {
      button = element("button");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", {});
      var button_nodes = children(button);
      if (default_slot)
        default_slot.l(button_nodes);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(button, button_data);
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      if (default_slot) {
        default_slot.m(button, null);
      }
      if (button.autofocus)
        button.focus();
      ctx[7](button);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, button, ctx[0])),
          action_destroyer(ctx[2].call(null, button))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 32)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[5], !current ? get_all_dirty_from_scope(ctx2[5]) : get_slot_changes(default_slot_template, ctx2[5], dirty, null), null);
        }
      }
      set_attributes(button, button_data = get_spread_update(button_levels, [dirty & 8 && ctx2[3]]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      if (default_slot)
        default_slot.d(detaching);
      ctx[7](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$7($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { use = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let element2;
  function getElement() {
    return element2;
  }
  function button_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(1, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use = $$new_props.use);
    if ("$$scope" in $$new_props)
      $$invalidate(5, $$scope = $$new_props.$$scope);
  };
  return [
    use,
    element2,
    forwardEvents,
    $$restProps,
    getElement,
    $$scope,
    slots,
    button_binding
  ];
}
class Button$1 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$8, safe_not_equal, { use: 0, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function create_fragment$7(ctx) {
  let i;
  let useActions_action;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[6].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[5], null);
  let i_levels = [ctx[3]];
  let i_data = {};
  for (let i2 = 0; i2 < i_levels.length; i2 += 1) {
    i_data = assign(i_data, i_levels[i2]);
  }
  return {
    c() {
      i = element("i");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      i = claim_element(nodes, "I", {});
      var i_nodes = children(i);
      if (default_slot)
        default_slot.l(i_nodes);
      i_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(i, i_data);
    },
    m(target, anchor) {
      insert_hydration(target, i, anchor);
      if (default_slot) {
        default_slot.m(i, null);
      }
      ctx[7](i);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, i, ctx[0])),
          action_destroyer(ctx[2].call(null, i))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 32)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[5], !current ? get_all_dirty_from_scope(ctx2[5]) : get_slot_changes(default_slot_template, ctx2[5], dirty, null), null);
        }
      }
      set_attributes(i, i_data = get_spread_update(i_levels, [dirty & 8 && ctx2[3]]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(i);
      if (default_slot)
        default_slot.d(detaching);
      ctx[7](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$6($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { use = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let element2;
  function getElement() {
    return element2;
  }
  function i_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(1, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use = $$new_props.use);
    if ("$$scope" in $$new_props)
      $$invalidate(5, $$scope = $$new_props.$$scope);
  };
  return [
    use,
    element2,
    forwardEvents,
    $$restProps,
    getElement,
    $$scope,
    slots,
    i_binding
  ];
}
class I extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$7, safe_not_equal, { use: 0, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function create_fragment$6(ctx) {
  let svg;
  let useActions_action;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[6].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[5], null);
  let svg_levels = [ctx[3]];
  let svg_data = {};
  for (let i = 0; i < svg_levels.length; i += 1) {
    svg_data = assign(svg_data, svg_levels[i]);
  }
  return {
    c() {
      svg = svg_element("svg");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {});
      var svg_nodes = children(svg);
      if (default_slot)
        default_slot.l(svg_nodes);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      if (default_slot) {
        default_slot.m(svg, null);
      }
      ctx[7](svg);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, svg, ctx[0])),
          action_destroyer(ctx[2].call(null, svg))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 32)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[5], !current ? get_all_dirty_from_scope(ctx2[5]) : get_slot_changes(default_slot_template, ctx2[5], dirty, null), null);
        }
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [dirty & 8 && ctx2[3]]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(svg);
      if (default_slot)
        default_slot.d(detaching);
      ctx[7](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$5($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { use = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let element2;
  function getElement() {
    return element2;
  }
  function svg_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(1, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use = $$new_props.use);
    if ("$$scope" in $$new_props)
      $$invalidate(5, $$scope = $$new_props.$$scope);
  };
  return [
    use,
    element2,
    forwardEvents,
    $$restProps,
    getElement,
    $$scope,
    slots,
    svg_binding
  ];
}
class Svg extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$6, safe_not_equal, { use: 0, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
const A = A$1;
const Button = Button$1;
const Div = Div$1;
classAdderBuilder({
  class: "smui-card__content",
  component: Div
});
var supportsCssVariables_;
function supportsCssVariables(windowObj, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }
  var CSS = windowObj.CSS;
  var supportsCssVars = supportsCssVariables_;
  if (typeof supportsCssVariables_ === "boolean" && !forceRefresh) {
    return supportsCssVariables_;
  }
  var supportsFunctionPresent = CSS && typeof CSS.supports === "function";
  if (!supportsFunctionPresent) {
    return false;
  }
  var explicitlySupportsCssVars = CSS.supports("--css-vars", "yes");
  var weAreFeatureDetectingSafari10plus = CSS.supports("(--css-vars: yes)") && CSS.supports("color", "#00000000");
  supportsCssVars = explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVars;
  }
  return supportsCssVars;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
  if (!evt) {
    return { x: 0, y: 0 };
  }
  var x = pageOffset.x, y = pageOffset.y;
  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;
  var normalizedX;
  var normalizedY;
  if (evt.type === "touchstart") {
    var touchEvent = evt;
    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
  } else {
    var mouseEvent = evt;
    normalizedX = mouseEvent.pageX - documentX;
    normalizedY = mouseEvent.pageY - documentY;
  }
  return { x: normalizedX, y: normalizedY };
}
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = function() {
  function MDCFoundation2(adapter) {
    if (adapter === void 0) {
      adapter = {};
    }
    this.adapter = adapter;
  }
  Object.defineProperty(MDCFoundation2, "cssClasses", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation2, "strings", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation2, "numbers", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation2, "defaultAdapter", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  MDCFoundation2.prototype.init = function() {
  };
  MDCFoundation2.prototype.destroy = function() {
  };
  return MDCFoundation2;
}();
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function applyPassive$1(globalObj) {
  if (globalObj === void 0) {
    globalObj = window;
  }
  return supportsPassiveOption(globalObj) ? { passive: true } : false;
}
function supportsPassiveOption(globalObj) {
  if (globalObj === void 0) {
    globalObj = window;
  }
  var passiveSupported = false;
  try {
    var options = {
      get passive() {
        passiveSupported = true;
        return false;
      }
    };
    var handler = function() {
    };
    globalObj.document.addEventListener("test", handler, options);
    globalObj.document.removeEventListener("test", handler, options);
  } catch (err) {
    passiveSupported = false;
  }
  return passiveSupported;
}
var events = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: applyPassive$1
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function closest(element2, selector) {
  if (element2.closest) {
    return element2.closest(selector);
  }
  var el = element2;
  while (el) {
    if (matches$1(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}
function matches$1(element2, selector) {
  var nativeMatches = element2.matches || element2.webkitMatchesSelector || element2.msMatchesSelector;
  return nativeMatches.call(element2, selector);
}
function estimateScrollWidth(element2) {
  var htmlEl = element2;
  if (htmlEl.offsetParent !== null) {
    return htmlEl.scrollWidth;
  }
  var clone = htmlEl.cloneNode(true);
  clone.style.setProperty("position", "absolute");
  clone.style.setProperty("transform", "translate(-9999px, -9999px)");
  document.documentElement.appendChild(clone);
  var scrollWidth = clone.scrollWidth;
  document.documentElement.removeChild(clone);
  return scrollWidth;
}
var ponyfill = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest,
  matches: matches$1,
  estimateScrollWidth
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$1 = {
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
};
var strings$1 = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
};
var numbers = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ACTIVATION_EVENT_TYPES = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
];
var POINTER_DEACTIVATION_EVENT_TYPES = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
];
var activatedTargets = [];
var MDCRippleFoundation = function(_super) {
  __extends(MDCRippleFoundation2, _super);
  function MDCRippleFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCRippleFoundation2.defaultAdapter), adapter)) || this;
    _this.activationAnimationHasEnded = false;
    _this.activationTimer = 0;
    _this.fgDeactivationRemovalTimer = 0;
    _this.fgScale = "0";
    _this.frame = { width: 0, height: 0 };
    _this.initialSize = 0;
    _this.layoutFrame = 0;
    _this.maxRadius = 0;
    _this.unboundedCoords = { left: 0, top: 0 };
    _this.activationState = _this.defaultActivationState();
    _this.activationTimerCallback = function() {
      _this.activationAnimationHasEnded = true;
      _this.runDeactivationUXLogicIfReady();
    };
    _this.activateHandler = function(e) {
      _this.activateImpl(e);
    };
    _this.deactivateHandler = function() {
      _this.deactivateImpl();
    };
    _this.focusHandler = function() {
      _this.handleFocus();
    };
    _this.blurHandler = function() {
      _this.handleBlur();
    };
    _this.resizeHandler = function() {
      _this.layout();
    };
    return _this;
  }
  Object.defineProperty(MDCRippleFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation2, "strings", {
    get: function() {
      return strings$1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation2, "numbers", {
    get: function() {
      return numbers;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        browserSupportsCssVars: function() {
          return true;
        },
        computeBoundingRect: function() {
          return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
        },
        containsEventTarget: function() {
          return true;
        },
        deregisterDocumentInteractionHandler: function() {
          return void 0;
        },
        deregisterInteractionHandler: function() {
          return void 0;
        },
        deregisterResizeHandler: function() {
          return void 0;
        },
        getWindowPageOffset: function() {
          return { x: 0, y: 0 };
        },
        isSurfaceActive: function() {
          return true;
        },
        isSurfaceDisabled: function() {
          return true;
        },
        isUnbounded: function() {
          return true;
        },
        registerDocumentInteractionHandler: function() {
          return void 0;
        },
        registerInteractionHandler: function() {
          return void 0;
        },
        registerResizeHandler: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        updateCssVariable: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCRippleFoundation2.prototype.init = function() {
    var _this = this;
    var supportsPressRipple = this.supportsPressRipple();
    this.registerRootHandlers(supportsPressRipple);
    if (supportsPressRipple) {
      var _a = MDCRippleFoundation2.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
      requestAnimationFrame(function() {
        _this.adapter.addClass(ROOT_1);
        if (_this.adapter.isUnbounded()) {
          _this.adapter.addClass(UNBOUNDED_1);
          _this.layoutInternal();
        }
      });
    }
  };
  MDCRippleFoundation2.prototype.destroy = function() {
    var _this = this;
    if (this.supportsPressRipple()) {
      if (this.activationTimer) {
        clearTimeout(this.activationTimer);
        this.activationTimer = 0;
        this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_ACTIVATION);
      }
      if (this.fgDeactivationRemovalTimer) {
        clearTimeout(this.fgDeactivationRemovalTimer);
        this.fgDeactivationRemovalTimer = 0;
        this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_DEACTIVATION);
      }
      var _a = MDCRippleFoundation2.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
      requestAnimationFrame(function() {
        _this.adapter.removeClass(ROOT_2);
        _this.adapter.removeClass(UNBOUNDED_2);
        _this.removeCssVars();
      });
    }
    this.deregisterRootHandlers();
    this.deregisterDeactivationHandlers();
  };
  MDCRippleFoundation2.prototype.activate = function(evt) {
    this.activateImpl(evt);
  };
  MDCRippleFoundation2.prototype.deactivate = function() {
    this.deactivateImpl();
  };
  MDCRippleFoundation2.prototype.layout = function() {
    var _this = this;
    if (this.layoutFrame) {
      cancelAnimationFrame(this.layoutFrame);
    }
    this.layoutFrame = requestAnimationFrame(function() {
      _this.layoutInternal();
      _this.layoutFrame = 0;
    });
  };
  MDCRippleFoundation2.prototype.setUnbounded = function(unbounded) {
    var UNBOUNDED = MDCRippleFoundation2.cssClasses.UNBOUNDED;
    if (unbounded) {
      this.adapter.addClass(UNBOUNDED);
    } else {
      this.adapter.removeClass(UNBOUNDED);
    }
  };
  MDCRippleFoundation2.prototype.handleFocus = function() {
    var _this = this;
    requestAnimationFrame(function() {
      return _this.adapter.addClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
    });
  };
  MDCRippleFoundation2.prototype.handleBlur = function() {
    var _this = this;
    requestAnimationFrame(function() {
      return _this.adapter.removeClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
    });
  };
  MDCRippleFoundation2.prototype.supportsPressRipple = function() {
    return this.adapter.browserSupportsCssVars();
  };
  MDCRippleFoundation2.prototype.defaultActivationState = function() {
    return {
      activationEvent: void 0,
      hasDeactivationUXRun: false,
      isActivated: false,
      isProgrammatic: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false
    };
  };
  MDCRippleFoundation2.prototype.registerRootHandlers = function(supportsPressRipple) {
    var e_1, _a;
    if (supportsPressRipple) {
      try {
        for (var ACTIVATION_EVENT_TYPES_1 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()) {
          var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
          this.adapter.registerInteractionHandler(evtType, this.activateHandler);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a = ACTIVATION_EVENT_TYPES_1.return))
            _a.call(ACTIVATION_EVENT_TYPES_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      if (this.adapter.isUnbounded()) {
        this.adapter.registerResizeHandler(this.resizeHandler);
      }
    }
    this.adapter.registerInteractionHandler("focus", this.focusHandler);
    this.adapter.registerInteractionHandler("blur", this.blurHandler);
  };
  MDCRippleFoundation2.prototype.registerDeactivationHandlers = function(evt) {
    var e_2, _a;
    if (evt.type === "keydown") {
      this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
    } else {
      try {
        for (var POINTER_DEACTIVATION_EVENT_TYPES_1 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()) {
          var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
          this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_1.return))
            _a.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
    }
  };
  MDCRippleFoundation2.prototype.deregisterRootHandlers = function() {
    var e_3, _a;
    try {
      for (var ACTIVATION_EVENT_TYPES_2 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()) {
        var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
        this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
      }
    } catch (e_3_1) {
      e_3 = { error: e_3_1 };
    } finally {
      try {
        if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a = ACTIVATION_EVENT_TYPES_2.return))
          _a.call(ACTIVATION_EVENT_TYPES_2);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
    this.adapter.deregisterInteractionHandler("focus", this.focusHandler);
    this.adapter.deregisterInteractionHandler("blur", this.blurHandler);
    if (this.adapter.isUnbounded()) {
      this.adapter.deregisterResizeHandler(this.resizeHandler);
    }
  };
  MDCRippleFoundation2.prototype.deregisterDeactivationHandlers = function() {
    var e_4, _a;
    this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
    try {
      for (var POINTER_DEACTIVATION_EVENT_TYPES_2 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()) {
        var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
        this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
      }
    } catch (e_4_1) {
      e_4 = { error: e_4_1 };
    } finally {
      try {
        if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_2.return))
          _a.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
      } finally {
        if (e_4)
          throw e_4.error;
      }
    }
  };
  MDCRippleFoundation2.prototype.removeCssVars = function() {
    var _this = this;
    var rippleStrings = MDCRippleFoundation2.strings;
    var keys = Object.keys(rippleStrings);
    keys.forEach(function(key) {
      if (key.indexOf("VAR_") === 0) {
        _this.adapter.updateCssVariable(rippleStrings[key], null);
      }
    });
  };
  MDCRippleFoundation2.prototype.activateImpl = function(evt) {
    var _this = this;
    if (this.adapter.isSurfaceDisabled()) {
      return;
    }
    var activationState = this.activationState;
    if (activationState.isActivated) {
      return;
    }
    var previousActivationEvent = this.previousActivationEvent;
    var isSameInteraction = previousActivationEvent && evt !== void 0 && previousActivationEvent.type !== evt.type;
    if (isSameInteraction) {
      return;
    }
    activationState.isActivated = true;
    activationState.isProgrammatic = evt === void 0;
    activationState.activationEvent = evt;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== void 0 && (evt.type === "mousedown" || evt.type === "touchstart" || evt.type === "pointerdown");
    var hasActivatedChild = evt !== void 0 && activatedTargets.length > 0 && activatedTargets.some(function(target) {
      return _this.adapter.containsEventTarget(target);
    });
    if (hasActivatedChild) {
      this.resetActivationState();
      return;
    }
    if (evt !== void 0) {
      activatedTargets.push(evt.target);
      this.registerDeactivationHandlers(evt);
    }
    activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
    if (activationState.wasElementMadeActive) {
      this.animateActivation();
    }
    requestAnimationFrame(function() {
      activatedTargets = [];
      if (!activationState.wasElementMadeActive && evt !== void 0 && (evt.key === " " || evt.keyCode === 32)) {
        activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
        if (activationState.wasElementMadeActive) {
          _this.animateActivation();
        }
      }
      if (!activationState.wasElementMadeActive) {
        _this.activationState = _this.defaultActivationState();
      }
    });
  };
  MDCRippleFoundation2.prototype.checkElementMadeActive = function(evt) {
    return evt !== void 0 && evt.type === "keydown" ? this.adapter.isSurfaceActive() : true;
  };
  MDCRippleFoundation2.prototype.animateActivation = function() {
    var _this = this;
    var _a = MDCRippleFoundation2.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
    var _b = MDCRippleFoundation2.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation2.numbers.DEACTIVATION_TIMEOUT_MS;
    this.layoutInternal();
    var translateStart = "";
    var translateEnd = "";
    if (!this.adapter.isUnbounded()) {
      var _c = this.getFgTranslationCoordinates(), startPoint = _c.startPoint, endPoint = _c.endPoint;
      translateStart = startPoint.x + "px, " + startPoint.y + "px";
      translateEnd = endPoint.x + "px, " + endPoint.y + "px";
    }
    this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
    clearTimeout(this.activationTimer);
    clearTimeout(this.fgDeactivationRemovalTimer);
    this.rmBoundedActivationClasses();
    this.adapter.removeClass(FG_DEACTIVATION);
    this.adapter.computeBoundingRect();
    this.adapter.addClass(FG_ACTIVATION);
    this.activationTimer = setTimeout(function() {
      _this.activationTimerCallback();
    }, DEACTIVATION_TIMEOUT_MS);
  };
  MDCRippleFoundation2.prototype.getFgTranslationCoordinates = function() {
    var _a = this.activationState, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
    var startPoint;
    if (wasActivatedByPointer) {
      startPoint = getNormalizedEventCoords(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
    } else {
      startPoint = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      };
    }
    startPoint = {
      x: startPoint.x - this.initialSize / 2,
      y: startPoint.y - this.initialSize / 2
    };
    var endPoint = {
      x: this.frame.width / 2 - this.initialSize / 2,
      y: this.frame.height / 2 - this.initialSize / 2
    };
    return { startPoint, endPoint };
  };
  MDCRippleFoundation2.prototype.runDeactivationUXLogicIfReady = function() {
    var _this = this;
    var FG_DEACTIVATION = MDCRippleFoundation2.cssClasses.FG_DEACTIVATION;
    var _a = this.activationState, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
    var activationHasEnded = hasDeactivationUXRun || !isActivated;
    if (activationHasEnded && this.activationAnimationHasEnded) {
      this.rmBoundedActivationClasses();
      this.adapter.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer = setTimeout(function() {
        _this.adapter.removeClass(FG_DEACTIVATION);
      }, numbers.FG_DEACTIVATION_MS);
    }
  };
  MDCRippleFoundation2.prototype.rmBoundedActivationClasses = function() {
    var FG_ACTIVATION = MDCRippleFoundation2.cssClasses.FG_ACTIVATION;
    this.adapter.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded = false;
    this.adapter.computeBoundingRect();
  };
  MDCRippleFoundation2.prototype.resetActivationState = function() {
    var _this = this;
    this.previousActivationEvent = this.activationState.activationEvent;
    this.activationState = this.defaultActivationState();
    setTimeout(function() {
      return _this.previousActivationEvent = void 0;
    }, MDCRippleFoundation2.numbers.TAP_DELAY_MS);
  };
  MDCRippleFoundation2.prototype.deactivateImpl = function() {
    var _this = this;
    var activationState = this.activationState;
    if (!activationState.isActivated) {
      return;
    }
    var state = __assign({}, activationState);
    if (activationState.isProgrammatic) {
      requestAnimationFrame(function() {
        _this.animateDeactivation(state);
      });
      this.resetActivationState();
    } else {
      this.deregisterDeactivationHandlers();
      requestAnimationFrame(function() {
        _this.activationState.hasDeactivationUXRun = true;
        _this.animateDeactivation(state);
        _this.resetActivationState();
      });
    }
  };
  MDCRippleFoundation2.prototype.animateDeactivation = function(_a) {
    var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady();
    }
  };
  MDCRippleFoundation2.prototype.layoutInternal = function() {
    var _this = this;
    this.frame = this.adapter.computeBoundingRect();
    var maxDim = Math.max(this.frame.height, this.frame.width);
    var getBoundedRadius = function() {
      var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
      return hypotenuse + MDCRippleFoundation2.numbers.PADDING;
    };
    this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
    var initialSize = Math.floor(maxDim * MDCRippleFoundation2.numbers.INITIAL_ORIGIN_SCALE);
    if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
      this.initialSize = initialSize - 1;
    } else {
      this.initialSize = initialSize;
    }
    this.fgScale = "" + this.maxRadius / this.initialSize;
    this.updateLayoutCssVars();
  };
  MDCRippleFoundation2.prototype.updateLayoutCssVars = function() {
    var _a = MDCRippleFoundation2.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
    this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
    this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
    if (this.adapter.isUnbounded()) {
      this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      };
      this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
      this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
    }
  };
  return MDCRippleFoundation2;
}(MDCFoundation);
const { applyPassive } = events;
const { matches } = ponyfill;
function Ripple(node, { ripple = true, surface = false, unbounded = false, disabled = false, color, active, rippleElement, eventTarget, activeTarget, addClass = (className) => node.classList.add(className), removeClass = (className) => node.classList.remove(className), addStyle = (name, value) => node.style.setProperty(name, value), initPromise = Promise.resolve() } = {}) {
  let instance2;
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  let oldActive = active;
  let oldEventTarget = eventTarget;
  let oldActiveTarget = activeTarget;
  function handleProps() {
    if (surface) {
      addClass("mdc-ripple-surface");
      if (color === "primary") {
        addClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      } else if (color === "secondary") {
        removeClass("smui-ripple-surface--primary");
        addClass("smui-ripple-surface--secondary");
      } else {
        removeClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      }
    } else {
      removeClass("mdc-ripple-surface");
      removeClass("smui-ripple-surface--primary");
      removeClass("smui-ripple-surface--secondary");
    }
    if (instance2 && oldActive !== active) {
      oldActive = active;
      if (active) {
        instance2.activate();
      } else if (active === false) {
        instance2.deactivate();
      }
    }
    if (ripple && !instance2) {
      instance2 = new MDCRippleFoundation({
        addClass,
        browserSupportsCssVars: () => supportsCssVariables(window),
        computeBoundingRect: () => (rippleElement || node).getBoundingClientRect(),
        containsEventTarget: (target) => node.contains(target),
        deregisterDocumentInteractionHandler: (evtType, handler) => document.documentElement.removeEventListener(evtType, handler, applyPassive()),
        deregisterInteractionHandler: (evtType, handler) => (eventTarget || node).removeEventListener(evtType, handler, applyPassive()),
        deregisterResizeHandler: (handler) => window.removeEventListener("resize", handler),
        getWindowPageOffset: () => ({
          x: window.pageXOffset,
          y: window.pageYOffset
        }),
        isSurfaceActive: () => active == null ? matches(activeTarget || node, ":active") : active,
        isSurfaceDisabled: () => !!disabled,
        isUnbounded: () => !!unbounded,
        registerDocumentInteractionHandler: (evtType, handler) => document.documentElement.addEventListener(evtType, handler, applyPassive()),
        registerInteractionHandler: (evtType, handler) => (eventTarget || node).addEventListener(evtType, handler, applyPassive()),
        registerResizeHandler: (handler) => window.addEventListener("resize", handler),
        removeClass,
        updateCssVariable: addStyle
      });
      initPromise.then(() => {
        if (instance2) {
          instance2.init();
          instance2.setUnbounded(unbounded);
        }
      });
    } else if (instance2 && !ripple) {
      initPromise.then(() => {
        if (instance2) {
          instance2.destroy();
          instance2 = void 0;
        }
      });
    }
    if (instance2 && (oldEventTarget !== eventTarget || oldActiveTarget !== activeTarget)) {
      oldEventTarget = eventTarget;
      oldActiveTarget = activeTarget;
      instance2.destroy();
      requestAnimationFrame(() => {
        if (instance2) {
          instance2.init();
          instance2.setUnbounded(unbounded);
        }
      });
    }
    if (!ripple && unbounded) {
      addClass("mdc-ripple-upgraded--unbounded");
    }
  }
  handleProps();
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  function layout() {
    if (instance2) {
      instance2.layout();
    }
  }
  return {
    update(props) {
      ({
        ripple,
        surface,
        unbounded,
        disabled,
        color,
        active,
        rippleElement,
        eventTarget,
        activeTarget,
        addClass,
        removeClass,
        addStyle,
        initPromise
      } = Object.assign({ ripple: true, surface: false, unbounded: false, disabled: false, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (className) => node.classList.add(className), removeClass: (className) => node.classList.remove(className), addStyle: (name, value) => node.style.setProperty(name, value), initPromise: Promise.resolve() }, props));
      handleProps();
    },
    destroy() {
      if (instance2) {
        instance2.destroy();
        instance2 = void 0;
        removeClass("mdc-ripple-surface");
        removeClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      }
      if (removeLayoutListener) {
        removeLayoutListener();
      }
    }
  };
}
classAdderBuilder({
  class: "mdc-card__media-content",
  component: Div
});
function create_fragment$5(ctx) {
  let div;
  let div_class_value;
  let useActions_action;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[8].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[7], null);
  let div_levels = [
    {
      class: div_class_value = classMap({
        [ctx[1]]: true,
        "mdc-card__actions": true,
        "mdc-card__actions--full-bleed": ctx[2]
      })
    },
    ctx[5]
  ];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(div, div_data);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      ctx[9](div);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(useActions_action = useActions.call(null, div, ctx[0])),
          action_destroyer(ctx[4].call(null, div))
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 128)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[7], !current ? get_all_dirty_from_scope(ctx2[7]) : get_slot_changes(default_slot_template, ctx2[7], dirty, null), null);
        }
      }
      set_attributes(div, div_data = get_spread_update(div_levels, [
        (!current || dirty & 6 && div_class_value !== (div_class_value = classMap({
          [ctx2[1]]: true,
          "mdc-card__actions": true,
          "mdc-card__actions--full-bleed": ctx2[2]
        }))) && { class: div_class_value },
        dirty & 32 && ctx2[5]
      ]));
      if (useActions_action && is_function(useActions_action.update) && dirty & 1)
        useActions_action.update.call(null, ctx2[0]);
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
      ctx[9](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "class", "fullBleed", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { fullBleed = false } = $$props;
  let element2;
  setContext("SMUI:button:context", "card:action");
  setContext("SMUI:icon-button:context", "card:action");
  function getElement() {
    return element2;
  }
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(3, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(1, className = $$new_props.class);
    if ("fullBleed" in $$new_props)
      $$invalidate(2, fullBleed = $$new_props.fullBleed);
    if ("$$scope" in $$new_props)
      $$invalidate(7, $$scope = $$new_props.$$scope);
  };
  return [
    use,
    className,
    fullBleed,
    element2,
    forwardEvents,
    $$restProps,
    getElement,
    $$scope,
    slots,
    div_binding
  ];
}
class Actions$1 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$5, safe_not_equal, {
      use: 0,
      class: 1,
      fullBleed: 2,
      getElement: 6
    });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
classAdderBuilder({
  class: "mdc-card__action-buttons",
  component: Div
});
classAdderBuilder({
  class: "mdc-card__action-icons",
  component: Div
});
const Actions = Actions$1;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
};
var strings = {
  ARIA_LABEL: "aria-label",
  ARIA_PRESSED: "aria-pressed",
  DATA_ARIA_LABEL_OFF: "data-aria-label-off",
  DATA_ARIA_LABEL_ON: "data-aria-label-on",
  CHANGE_EVENT: "MDCIconButtonToggle:change"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCIconButtonToggleFoundation = function(_super) {
  __extends(MDCIconButtonToggleFoundation2, _super);
  function MDCIconButtonToggleFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCIconButtonToggleFoundation2.defaultAdapter), adapter)) || this;
    _this.hasToggledAriaLabel = false;
    return _this;
  }
  Object.defineProperty(MDCIconButtonToggleFoundation2, "cssClasses", {
    get: function() {
      return cssClasses;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCIconButtonToggleFoundation2, "strings", {
    get: function() {
      return strings;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCIconButtonToggleFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        hasClass: function() {
          return false;
        },
        notifyChange: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        getAttr: function() {
          return null;
        },
        setAttr: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCIconButtonToggleFoundation2.prototype.init = function() {
    var ariaLabelOn = this.adapter.getAttr(strings.DATA_ARIA_LABEL_ON);
    var ariaLabelOff = this.adapter.getAttr(strings.DATA_ARIA_LABEL_OFF);
    if (ariaLabelOn && ariaLabelOff) {
      if (this.adapter.getAttr(strings.ARIA_PRESSED) !== null) {
        throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
      }
      this.hasToggledAriaLabel = true;
    } else {
      this.adapter.setAttr(strings.ARIA_PRESSED, String(this.isOn()));
    }
  };
  MDCIconButtonToggleFoundation2.prototype.handleClick = function() {
    this.toggle();
    this.adapter.notifyChange({ isOn: this.isOn() });
  };
  MDCIconButtonToggleFoundation2.prototype.isOn = function() {
    return this.adapter.hasClass(cssClasses.ICON_BUTTON_ON);
  };
  MDCIconButtonToggleFoundation2.prototype.toggle = function(isOn) {
    if (isOn === void 0) {
      isOn = !this.isOn();
    }
    if (isOn) {
      this.adapter.addClass(cssClasses.ICON_BUTTON_ON);
    } else {
      this.adapter.removeClass(cssClasses.ICON_BUTTON_ON);
    }
    if (this.hasToggledAriaLabel) {
      var ariaLabel = isOn ? this.adapter.getAttr(strings.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(strings.DATA_ARIA_LABEL_OFF);
      this.adapter.setAttr(strings.ARIA_LABEL, ariaLabel || "");
    } else {
      this.adapter.setAttr(strings.ARIA_PRESSED, "" + isOn);
    }
  };
  return MDCIconButtonToggleFoundation2;
}(MDCFoundation);
function create_if_block$3(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "mdc-icon-button__touch");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_default_slot$3(ctx) {
  let div;
  let t;
  let if_block_anchor;
  let current;
  const default_slot_template = ctx[32].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[36], null);
  let if_block = ctx[8] && create_if_block$3();
  return {
    c() {
      div = element("div");
      t = space();
      if (default_slot)
        default_slot.c();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      children(div).forEach(detach);
      t = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h() {
      attr(div, "class", "mdc-icon-button__ripple");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      insert_hydration(target, t, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty[1] & 32)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[36], !current ? get_all_dirty_from_scope(ctx2[36]) : get_slot_changes(default_slot_template, ctx2[36], dirty, null), null);
        }
      }
      if (ctx2[8]) {
        if (if_block)
          ;
        else {
          if_block = create_if_block$3();
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (detaching)
        detach(t);
      if (default_slot)
        default_slot.d(detaching);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_fragment$4(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  const switch_instance_spread_levels = [
    {
      use: [
        [
          Ripple,
          {
            ripple: ctx[4],
            unbounded: true,
            color: ctx[5],
            disabled: !!ctx[28].disabled,
            addClass: ctx[25],
            removeClass: ctx[26],
            addStyle: ctx[27]
          }
        ],
        ctx[21],
        ...ctx[1]
      ]
    },
    {
      class: classMap(__spreadValues({
        [ctx[2]]: true,
        "mdc-icon-button": true,
        "mdc-icon-button--on": !ctx[22](ctx[0]) && ctx[0],
        "mdc-icon-button--touch": ctx[8],
        "mdc-icon-button--display-flex": ctx[9],
        "smui-icon-button--size-button": ctx[10] === "button",
        "mdc-icon-button--reduced-size": ctx[10] === "mini" || ctx[10] === "button",
        "mdc-card__action": ctx[23] === "card:action",
        "mdc-card__action--icon": ctx[23] === "card:action",
        "mdc-top-app-bar__navigation-icon": ctx[23] === "top-app-bar:navigation",
        "mdc-top-app-bar__action-item": ctx[23] === "top-app-bar:action",
        "mdc-snackbar__dismiss": ctx[23] === "snackbar:actions",
        "mdc-data-table__pagination-button": ctx[23] === "data-table:pagination",
        "mdc-data-table__sort-icon-button": ctx[23] === "data-table:sortable-header-cell",
        "mdc-dialog__close": ctx[23] === "dialog:header" && ctx[12] === "close"
      }, ctx[17]))
    },
    {
      style: Object.entries(ctx[18]).map(func).concat([ctx[3]]).join(" ")
    },
    {
      "aria-pressed": !ctx[22](ctx[0]) ? ctx[0] ? "true" : "false" : null
    },
    {
      "aria-label": ctx[0] ? ctx[6] : ctx[7]
    },
    {
      "data-aria-label-on": ctx[6]
    },
    {
      "data-aria-label-off": ctx[7]
    },
    {
      "aria-describedby": ctx[24]
    },
    { href: ctx[11] },
    ctx[20],
    ctx[19],
    ctx[28]
  ];
  var switch_value = ctx[13];
  function switch_props(ctx2) {
    let switch_instance_props = {
      $$slots: { default: [create_default_slot$3] },
      $$scope: { ctx: ctx2 }
    };
    for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
    ctx[33](switch_instance);
    switch_instance.$on("click", ctx[34]);
    switch_instance.$on("click", ctx[35]);
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const switch_instance_changes = dirty[0] & 536748031 ? get_spread_update(switch_instance_spread_levels, [
        dirty[0] & 505413682 && {
          use: [
            [
              Ripple,
              {
                ripple: ctx2[4],
                unbounded: true,
                color: ctx2[5],
                disabled: !!ctx2[28].disabled,
                addClass: ctx2[25],
                removeClass: ctx2[26],
                addStyle: ctx2[27]
              }
            ],
            ctx2[21],
            ...ctx2[1]
          ]
        },
        dirty[0] & 12719877 && {
          class: classMap(__spreadValues({
            [ctx2[2]]: true,
            "mdc-icon-button": true,
            "mdc-icon-button--on": !ctx2[22](ctx2[0]) && ctx2[0],
            "mdc-icon-button--touch": ctx2[8],
            "mdc-icon-button--display-flex": ctx2[9],
            "smui-icon-button--size-button": ctx2[10] === "button",
            "mdc-icon-button--reduced-size": ctx2[10] === "mini" || ctx2[10] === "button",
            "mdc-card__action": ctx2[23] === "card:action",
            "mdc-card__action--icon": ctx2[23] === "card:action",
            "mdc-top-app-bar__navigation-icon": ctx2[23] === "top-app-bar:navigation",
            "mdc-top-app-bar__action-item": ctx2[23] === "top-app-bar:action",
            "mdc-snackbar__dismiss": ctx2[23] === "snackbar:actions",
            "mdc-data-table__pagination-button": ctx2[23] === "data-table:pagination",
            "mdc-data-table__sort-icon-button": ctx2[23] === "data-table:sortable-header-cell",
            "mdc-dialog__close": ctx2[23] === "dialog:header" && ctx2[12] === "close"
          }, ctx2[17]))
        },
        dirty[0] & 262152 && {
          style: Object.entries(ctx2[18]).map(func).concat([ctx2[3]]).join(" ")
        },
        dirty[0] & 4194305 && {
          "aria-pressed": !ctx2[22](ctx2[0]) ? ctx2[0] ? "true" : "false" : null
        },
        dirty[0] & 193 && {
          "aria-label": ctx2[0] ? ctx2[6] : ctx2[7]
        },
        dirty[0] & 64 && {
          "data-aria-label-on": ctx2[6]
        },
        dirty[0] & 128 && {
          "data-aria-label-off": ctx2[7]
        },
        dirty[0] & 16777216 && {
          "aria-describedby": ctx2[24]
        },
        dirty[0] & 2048 && { href: ctx2[11] },
        dirty[0] & 1048576 && get_spread_object(ctx2[20]),
        dirty[0] & 524288 && get_spread_object(ctx2[19]),
        dirty[0] & 268435456 && get_spread_object(ctx2[28])
      ]) : {};
      if (dirty[0] & 256 | dirty[1] & 32) {
        switch_instance_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (switch_value !== (switch_value = ctx2[13])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx2));
          ctx2[33](switch_instance);
          switch_instance.$on("click", ctx2[34]);
          switch_instance.$on("click", ctx2[35]);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      ctx[33](null);
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
const func = ([name, value]) => `${name}: ${value};`;
function instance_1($$self, $$props, $$invalidate) {
  let actionProp;
  const omit_props_names = [
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "toggle",
    "pressed",
    "ariaLabelOn",
    "ariaLabelOff",
    "touch",
    "displayFlex",
    "size",
    "href",
    "action",
    "component",
    "getElement"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value) {
    return value === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { color = void 0 } = $$props;
  let { toggle = false } = $$props;
  let { pressed = uninitializedValue } = $$props;
  let { ariaLabelOn = void 0 } = $$props;
  let { ariaLabelOff = void 0 } = $$props;
  let { touch = false } = $$props;
  let { displayFlex = true } = $$props;
  let { size = "normal" } = $$props;
  let { href = void 0 } = $$props;
  let { action = void 0 } = $$props;
  let element2;
  let instance2;
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};
  let context = getContext("SMUI:icon-button:context");
  let ariaDescribedby = getContext("SMUI:icon-button:aria-describedby");
  let { component = href == null ? Button : A } = $$props;
  let previousDisabled = $$restProps.disabled;
  setContext("SMUI:icon:context", "icon-button");
  let oldToggle = null;
  onDestroy(() => {
    instance2 && instance2.destroy();
  });
  function hasClass(className2) {
    return className2 in internalClasses ? internalClasses[className2] : getElement().classList.contains(className2);
  }
  function addClass(className2) {
    if (!internalClasses[className2]) {
      $$invalidate(17, internalClasses[className2] = true, internalClasses);
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      $$invalidate(17, internalClasses[className2] = false, internalClasses);
    }
  }
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        $$invalidate(18, internalStyles);
      } else {
        $$invalidate(18, internalStyles[name] = value, internalStyles);
      }
    }
  }
  function getAttr(name) {
    var _a;
    return name in internalAttrs ? (_a = internalAttrs[name]) !== null && _a !== void 0 ? _a : null : getElement().getAttribute(name);
  }
  function addAttr(name, value) {
    if (internalAttrs[name] !== value) {
      $$invalidate(19, internalAttrs[name] = value, internalAttrs);
    }
  }
  function handleChange(evtData) {
    $$invalidate(0, pressed = evtData.isOn);
  }
  function getElement() {
    return element2.getElement();
  }
  function switch_instance_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(15, element2);
    });
  }
  const click_handler = () => instance2 && instance2.handleClick();
  const click_handler_1 = () => context === "top-app-bar:navigation" && dispatch(getElement(), "SMUITopAppBarIconButton:nav");
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(28, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(1, use = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(2, className = $$new_props.class);
    if ("style" in $$new_props)
      $$invalidate(3, style = $$new_props.style);
    if ("ripple" in $$new_props)
      $$invalidate(4, ripple = $$new_props.ripple);
    if ("color" in $$new_props)
      $$invalidate(5, color = $$new_props.color);
    if ("toggle" in $$new_props)
      $$invalidate(29, toggle = $$new_props.toggle);
    if ("pressed" in $$new_props)
      $$invalidate(0, pressed = $$new_props.pressed);
    if ("ariaLabelOn" in $$new_props)
      $$invalidate(6, ariaLabelOn = $$new_props.ariaLabelOn);
    if ("ariaLabelOff" in $$new_props)
      $$invalidate(7, ariaLabelOff = $$new_props.ariaLabelOff);
    if ("touch" in $$new_props)
      $$invalidate(8, touch = $$new_props.touch);
    if ("displayFlex" in $$new_props)
      $$invalidate(9, displayFlex = $$new_props.displayFlex);
    if ("size" in $$new_props)
      $$invalidate(10, size = $$new_props.size);
    if ("href" in $$new_props)
      $$invalidate(11, href = $$new_props.href);
    if ("action" in $$new_props)
      $$invalidate(12, action = $$new_props.action);
    if ("component" in $$new_props)
      $$invalidate(13, component = $$new_props.component);
    if ("$$scope" in $$new_props)
      $$invalidate(36, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 4096) {
      $$invalidate(20, actionProp = (() => {
        if (context === "data-table:pagination") {
          switch (action) {
            case "first-page":
              return { "data-first-page": "true" };
            case "prev-page":
              return { "data-prev-page": "true" };
            case "next-page":
              return { "data-next-page": "true" };
            case "last-page":
              return { "data-last-page": "true" };
            default:
              return { "data-action": "true" };
          }
        } else if (context === "dialog:header") {
          return { "data-mdc-dialog-action": action };
        } else {
          return { action };
        }
      })());
    }
    if (previousDisabled !== $$restProps.disabled) {
      const elem = getElement();
      if ("blur" in elem) {
        elem.blur();
      }
      $$invalidate(30, previousDisabled = $$restProps.disabled);
    }
    if ($$self.$$.dirty[0] & 536969216 | $$self.$$.dirty[1] & 1) {
      if (element2 && getElement() && toggle !== oldToggle) {
        if (toggle && !instance2) {
          $$invalidate(16, instance2 = new MDCIconButtonToggleFoundation({
            addClass,
            hasClass,
            notifyChange: (evtData) => {
              handleChange(evtData);
              dispatch(getElement(), "SMUIIconButtonToggle:change", evtData, void 0, true);
            },
            removeClass,
            getAttr,
            setAttr: addAttr
          }));
          instance2.init();
        } else if (!toggle && instance2) {
          instance2.destroy();
          $$invalidate(16, instance2 = void 0);
          $$invalidate(17, internalClasses = {});
          $$invalidate(19, internalAttrs = {});
        }
        $$invalidate(31, oldToggle = toggle);
      }
    }
    if ($$self.$$.dirty[0] & 65537) {
      if (instance2 && !isUninitializedValue(pressed) && instance2.isOn() !== pressed) {
        instance2.toggle(pressed);
      }
    }
  };
  return [
    pressed,
    use,
    className,
    style,
    ripple,
    color,
    ariaLabelOn,
    ariaLabelOff,
    touch,
    displayFlex,
    size,
    href,
    action,
    component,
    getElement,
    element2,
    instance2,
    internalClasses,
    internalStyles,
    internalAttrs,
    actionProp,
    forwardEvents,
    isUninitializedValue,
    context,
    ariaDescribedby,
    addClass,
    removeClass,
    addStyle,
    $$restProps,
    toggle,
    previousDisabled,
    oldToggle,
    slots,
    switch_instance_binding,
    click_handler,
    click_handler_1,
    $$scope
  ];
}
class IconButton extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance_1, create_fragment$4, safe_not_equal, {
      use: 1,
      class: 2,
      style: 3,
      ripple: 4,
      color: 5,
      toggle: 29,
      pressed: 0,
      ariaLabelOn: 6,
      ariaLabelOff: 7,
      touch: 8,
      displayFlex: 9,
      size: 10,
      href: 11,
      action: 12,
      component: 13,
      getElement: 14
    }, null, [-1, -1]);
  }
  get getElement() {
    return this.$$.ctx[14];
  }
}
function create_default_slot$2(ctx) {
  let current;
  const default_slot_template = ctx[9].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[11], null);
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 2048)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[11], !current ? get_all_dirty_from_scope(ctx2[11]) : get_slot_changes(default_slot_template, ctx2[11], dirty, null), null);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_fragment$3(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  const switch_instance_spread_levels = [
    {
      use: [ctx[5], ...ctx[0]]
    },
    {
      class: classMap({
        [ctx[1]]: true,
        "mdc-button__icon": ctx[6] === "button",
        "mdc-fab__icon": ctx[6] === "fab",
        "mdc-icon-button__icon": ctx[6] === "icon-button",
        "mdc-icon-button__icon--on": ctx[6] === "icon-button" && ctx[2],
        "mdc-tab__icon": ctx[6] === "tab",
        "mdc-banner__icon": ctx[6] === "banner",
        "mdc-segmented-button__icon": ctx[6] === "segmented-button"
      })
    },
    { "aria-hidden": "true" },
    ctx[3] === Svg ? { focusable: "false", tabindex: "-1" } : {},
    ctx[7]
  ];
  var switch_value = ctx[3];
  function switch_props(ctx2) {
    let switch_instance_props = {
      $$slots: { default: [create_default_slot$2] },
      $$scope: { ctx: ctx2 }
    };
    for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
      switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
    }
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
    ctx[10](switch_instance);
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const switch_instance_changes = dirty & 239 ? get_spread_update(switch_instance_spread_levels, [
        dirty & 33 && {
          use: [ctx2[5], ...ctx2[0]]
        },
        dirty & 70 && {
          class: classMap({
            [ctx2[1]]: true,
            "mdc-button__icon": ctx2[6] === "button",
            "mdc-fab__icon": ctx2[6] === "fab",
            "mdc-icon-button__icon": ctx2[6] === "icon-button",
            "mdc-icon-button__icon--on": ctx2[6] === "icon-button" && ctx2[2],
            "mdc-tab__icon": ctx2[6] === "tab",
            "mdc-banner__icon": ctx2[6] === "banner",
            "mdc-segmented-button__icon": ctx2[6] === "segmented-button"
          })
        },
        switch_instance_spread_levels[2],
        dirty & 8 && get_spread_object(ctx2[3] === Svg ? { focusable: "false", tabindex: "-1" } : {}),
        dirty & 128 && get_spread_object(ctx2[7])
      ]) : {};
      if (dirty & 2048) {
        switch_instance_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (switch_value !== (switch_value = ctx2[3])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx2));
          ctx2[10](switch_instance);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      ctx[10](null);
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  const omit_props_names = ["use", "class", "on", "component", "getElement"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { on = false } = $$props;
  let element2;
  let { component = I } = $$props;
  const context = getContext("SMUI:icon:context");
  function getElement() {
    return element2.getElement();
  }
  function switch_instance_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element2 = $$value;
      $$invalidate(4, element2);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(7, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("use" in $$new_props)
      $$invalidate(0, use = $$new_props.use);
    if ("class" in $$new_props)
      $$invalidate(1, className = $$new_props.class);
    if ("on" in $$new_props)
      $$invalidate(2, on = $$new_props.on);
    if ("component" in $$new_props)
      $$invalidate(3, component = $$new_props.component);
    if ("$$scope" in $$new_props)
      $$invalidate(11, $$scope = $$new_props.$$scope);
  };
  return [
    use,
    className,
    on,
    component,
    element2,
    forwardEvents,
    context,
    $$restProps,
    getElement,
    slots,
    switch_instance_binding,
    $$scope
  ];
}
class CommonIcon extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {
      use: 0,
      class: 1,
      on: 2,
      component: 3,
      getElement: 8
    });
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
const Icon = CommonIcon;
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getAugmentedNamespace(n) {
  if (n.__esModule)
    return n;
  var a = Object.defineProperty({}, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var pdf = { exports: {} };
var __viteBrowserExternal = {};
var __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
var require$$4 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
(function(module, exports) {
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
  })(commonjsGlobal, () => {
    return (() => {
      var __webpack_modules__ = [
        ,
        (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.VerbosityLevel = exports2.Util = exports2.UnknownErrorException = exports2.UnexpectedResponseException = exports2.UNSUPPORTED_FEATURES = exports2.TextRenderingMode = exports2.StreamType = exports2.RenderingIntentFlag = exports2.PermissionFlag = exports2.PasswordResponses = exports2.PasswordException = exports2.PageActionEventType = exports2.OPS = exports2.MissingPDFException = exports2.InvalidPDFException = exports2.ImageKind = exports2.IDENTITY_MATRIX = exports2.FormatError = exports2.FontType = exports2.FeatureTest = exports2.FONT_IDENTITY_MATRIX = exports2.DocumentActionEventType = exports2.CMapCompressionType = exports2.BaseException = exports2.AnnotationType = exports2.AnnotationStateModelType = exports2.AnnotationReviewState = exports2.AnnotationReplyType = exports2.AnnotationMode = exports2.AnnotationMarkedState = exports2.AnnotationFlag = exports2.AnnotationFieldFlag = exports2.AnnotationBorderStyleType = exports2.AnnotationActionEventType = exports2.AbortException = void 0;
          exports2.arrayByteLength = arrayByteLength;
          exports2.arraysToBytes = arraysToBytes;
          exports2.assert = assert;
          exports2.bytesToString = bytesToString;
          exports2.createPromiseCapability = createPromiseCapability;
          exports2.createValidAbsoluteUrl = createValidAbsoluteUrl;
          exports2.escapeString = escapeString;
          exports2.getModificationDate = getModificationDate;
          exports2.getVerbosityLevel = getVerbosityLevel;
          exports2.info = info;
          exports2.isArrayBuffer = isArrayBuffer;
          exports2.isArrayEqual = isArrayEqual;
          exports2.isAscii = isAscii;
          exports2.objectFromMap = objectFromMap;
          exports2.objectSize = objectSize;
          exports2.setVerbosityLevel = setVerbosityLevel;
          exports2.shadow = shadow;
          exports2.string32 = string32;
          exports2.stringToBytes = stringToBytes;
          exports2.stringToPDFString = stringToPDFString;
          exports2.stringToUTF16BEString = stringToUTF16BEString;
          exports2.stringToUTF8String = stringToUTF8String;
          exports2.unreachable = unreachable;
          exports2.utf8StringToString = utf8StringToString;
          exports2.warn = warn;
          __w_pdfjs_require__2(2);
          const IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
          exports2.IDENTITY_MATRIX = IDENTITY_MATRIX;
          const FONT_IDENTITY_MATRIX = [1e-3, 0, 0, 1e-3, 0, 0];
          exports2.FONT_IDENTITY_MATRIX = FONT_IDENTITY_MATRIX;
          const RenderingIntentFlag = {
            ANY: 1,
            DISPLAY: 2,
            PRINT: 4,
            ANNOTATIONS_FORMS: 16,
            ANNOTATIONS_STORAGE: 32,
            ANNOTATIONS_DISABLE: 64,
            OPLIST: 256
          };
          exports2.RenderingIntentFlag = RenderingIntentFlag;
          const AnnotationMode = {
            DISABLE: 0,
            ENABLE: 1,
            ENABLE_FORMS: 2,
            ENABLE_STORAGE: 3
          };
          exports2.AnnotationMode = AnnotationMode;
          const PermissionFlag = {
            PRINT: 4,
            MODIFY_CONTENTS: 8,
            COPY: 16,
            MODIFY_ANNOTATIONS: 32,
            FILL_INTERACTIVE_FORMS: 256,
            COPY_FOR_ACCESSIBILITY: 512,
            ASSEMBLE: 1024,
            PRINT_HIGH_QUALITY: 2048
          };
          exports2.PermissionFlag = PermissionFlag;
          const TextRenderingMode = {
            FILL: 0,
            STROKE: 1,
            FILL_STROKE: 2,
            INVISIBLE: 3,
            FILL_ADD_TO_PATH: 4,
            STROKE_ADD_TO_PATH: 5,
            FILL_STROKE_ADD_TO_PATH: 6,
            ADD_TO_PATH: 7,
            FILL_STROKE_MASK: 3,
            ADD_TO_PATH_FLAG: 4
          };
          exports2.TextRenderingMode = TextRenderingMode;
          const ImageKind = {
            GRAYSCALE_1BPP: 1,
            RGB_24BPP: 2,
            RGBA_32BPP: 3
          };
          exports2.ImageKind = ImageKind;
          const AnnotationType = {
            TEXT: 1,
            LINK: 2,
            FREETEXT: 3,
            LINE: 4,
            SQUARE: 5,
            CIRCLE: 6,
            POLYGON: 7,
            POLYLINE: 8,
            HIGHLIGHT: 9,
            UNDERLINE: 10,
            SQUIGGLY: 11,
            STRIKEOUT: 12,
            STAMP: 13,
            CARET: 14,
            INK: 15,
            POPUP: 16,
            FILEATTACHMENT: 17,
            SOUND: 18,
            MOVIE: 19,
            WIDGET: 20,
            SCREEN: 21,
            PRINTERMARK: 22,
            TRAPNET: 23,
            WATERMARK: 24,
            THREED: 25,
            REDACT: 26
          };
          exports2.AnnotationType = AnnotationType;
          const AnnotationStateModelType = {
            MARKED: "Marked",
            REVIEW: "Review"
          };
          exports2.AnnotationStateModelType = AnnotationStateModelType;
          const AnnotationMarkedState = {
            MARKED: "Marked",
            UNMARKED: "Unmarked"
          };
          exports2.AnnotationMarkedState = AnnotationMarkedState;
          const AnnotationReviewState = {
            ACCEPTED: "Accepted",
            REJECTED: "Rejected",
            CANCELLED: "Cancelled",
            COMPLETED: "Completed",
            NONE: "None"
          };
          exports2.AnnotationReviewState = AnnotationReviewState;
          const AnnotationReplyType = {
            GROUP: "Group",
            REPLY: "R"
          };
          exports2.AnnotationReplyType = AnnotationReplyType;
          const AnnotationFlag = {
            INVISIBLE: 1,
            HIDDEN: 2,
            PRINT: 4,
            NOZOOM: 8,
            NOROTATE: 16,
            NOVIEW: 32,
            READONLY: 64,
            LOCKED: 128,
            TOGGLENOVIEW: 256,
            LOCKEDCONTENTS: 512
          };
          exports2.AnnotationFlag = AnnotationFlag;
          const AnnotationFieldFlag = {
            READONLY: 1,
            REQUIRED: 2,
            NOEXPORT: 4,
            MULTILINE: 4096,
            PASSWORD: 8192,
            NOTOGGLETOOFF: 16384,
            RADIO: 32768,
            PUSHBUTTON: 65536,
            COMBO: 131072,
            EDIT: 262144,
            SORT: 524288,
            FILESELECT: 1048576,
            MULTISELECT: 2097152,
            DONOTSPELLCHECK: 4194304,
            DONOTSCROLL: 8388608,
            COMB: 16777216,
            RICHTEXT: 33554432,
            RADIOSINUNISON: 33554432,
            COMMITONSELCHANGE: 67108864
          };
          exports2.AnnotationFieldFlag = AnnotationFieldFlag;
          const AnnotationBorderStyleType = {
            SOLID: 1,
            DASHED: 2,
            BEVELED: 3,
            INSET: 4,
            UNDERLINE: 5
          };
          exports2.AnnotationBorderStyleType = AnnotationBorderStyleType;
          const AnnotationActionEventType = {
            E: "Mouse Enter",
            X: "Mouse Exit",
            D: "Mouse Down",
            U: "Mouse Up",
            Fo: "Focus",
            Bl: "Blur",
            PO: "PageOpen",
            PC: "PageClose",
            PV: "PageVisible",
            PI: "PageInvisible",
            K: "Keystroke",
            F: "Format",
            V: "Validate",
            C: "Calculate"
          };
          exports2.AnnotationActionEventType = AnnotationActionEventType;
          const DocumentActionEventType = {
            WC: "WillClose",
            WS: "WillSave",
            DS: "DidSave",
            WP: "WillPrint",
            DP: "DidPrint"
          };
          exports2.DocumentActionEventType = DocumentActionEventType;
          const PageActionEventType = {
            O: "PageOpen",
            C: "PageClose"
          };
          exports2.PageActionEventType = PageActionEventType;
          const StreamType = {
            UNKNOWN: "UNKNOWN",
            FLATE: "FLATE",
            LZW: "LZW",
            DCT: "DCT",
            JPX: "JPX",
            JBIG: "JBIG",
            A85: "A85",
            AHX: "AHX",
            CCF: "CCF",
            RLX: "RLX"
          };
          exports2.StreamType = StreamType;
          const FontType = {
            UNKNOWN: "UNKNOWN",
            TYPE1: "TYPE1",
            TYPE1STANDARD: "TYPE1STANDARD",
            TYPE1C: "TYPE1C",
            CIDFONTTYPE0: "CIDFONTTYPE0",
            CIDFONTTYPE0C: "CIDFONTTYPE0C",
            TRUETYPE: "TRUETYPE",
            CIDFONTTYPE2: "CIDFONTTYPE2",
            TYPE3: "TYPE3",
            OPENTYPE: "OPENTYPE",
            TYPE0: "TYPE0",
            MMTYPE1: "MMTYPE1"
          };
          exports2.FontType = FontType;
          const VerbosityLevel = {
            ERRORS: 0,
            WARNINGS: 1,
            INFOS: 5
          };
          exports2.VerbosityLevel = VerbosityLevel;
          const CMapCompressionType = {
            NONE: 0,
            BINARY: 1,
            STREAM: 2
          };
          exports2.CMapCompressionType = CMapCompressionType;
          const OPS = {
            dependency: 1,
            setLineWidth: 2,
            setLineCap: 3,
            setLineJoin: 4,
            setMiterLimit: 5,
            setDash: 6,
            setRenderingIntent: 7,
            setFlatness: 8,
            setGState: 9,
            save: 10,
            restore: 11,
            transform: 12,
            moveTo: 13,
            lineTo: 14,
            curveTo: 15,
            curveTo2: 16,
            curveTo3: 17,
            closePath: 18,
            rectangle: 19,
            stroke: 20,
            closeStroke: 21,
            fill: 22,
            eoFill: 23,
            fillStroke: 24,
            eoFillStroke: 25,
            closeFillStroke: 26,
            closeEOFillStroke: 27,
            endPath: 28,
            clip: 29,
            eoClip: 30,
            beginText: 31,
            endText: 32,
            setCharSpacing: 33,
            setWordSpacing: 34,
            setHScale: 35,
            setLeading: 36,
            setFont: 37,
            setTextRenderingMode: 38,
            setTextRise: 39,
            moveText: 40,
            setLeadingMoveText: 41,
            setTextMatrix: 42,
            nextLine: 43,
            showText: 44,
            showSpacedText: 45,
            nextLineShowText: 46,
            nextLineSetSpacingShowText: 47,
            setCharWidth: 48,
            setCharWidthAndBounds: 49,
            setStrokeColorSpace: 50,
            setFillColorSpace: 51,
            setStrokeColor: 52,
            setStrokeColorN: 53,
            setFillColor: 54,
            setFillColorN: 55,
            setStrokeGray: 56,
            setFillGray: 57,
            setStrokeRGBColor: 58,
            setFillRGBColor: 59,
            setStrokeCMYKColor: 60,
            setFillCMYKColor: 61,
            shadingFill: 62,
            beginInlineImage: 63,
            beginImageData: 64,
            endInlineImage: 65,
            paintXObject: 66,
            markPoint: 67,
            markPointProps: 68,
            beginMarkedContent: 69,
            beginMarkedContentProps: 70,
            endMarkedContent: 71,
            beginCompat: 72,
            endCompat: 73,
            paintFormXObjectBegin: 74,
            paintFormXObjectEnd: 75,
            beginGroup: 76,
            endGroup: 77,
            beginAnnotations: 78,
            endAnnotations: 79,
            beginAnnotation: 80,
            endAnnotation: 81,
            paintJpegXObject: 82,
            paintImageMaskXObject: 83,
            paintImageMaskXObjectGroup: 84,
            paintImageXObject: 85,
            paintInlineImageXObject: 86,
            paintInlineImageXObjectGroup: 87,
            paintImageXObjectRepeat: 88,
            paintImageMaskXObjectRepeat: 89,
            paintSolidColorImageMask: 90,
            constructPath: 91
          };
          exports2.OPS = OPS;
          const UNSUPPORTED_FEATURES = {
            unknown: "unknown",
            forms: "forms",
            javaScript: "javaScript",
            signatures: "signatures",
            smask: "smask",
            shadingPattern: "shadingPattern",
            font: "font",
            errorTilingPattern: "errorTilingPattern",
            errorExtGState: "errorExtGState",
            errorXObject: "errorXObject",
            errorFontLoadType3: "errorFontLoadType3",
            errorFontState: "errorFontState",
            errorFontMissing: "errorFontMissing",
            errorFontTranslate: "errorFontTranslate",
            errorColorSpace: "errorColorSpace",
            errorOperatorList: "errorOperatorList",
            errorFontToUnicode: "errorFontToUnicode",
            errorFontLoadNative: "errorFontLoadNative",
            errorFontBuildPath: "errorFontBuildPath",
            errorFontGetPath: "errorFontGetPath",
            errorMarkedContent: "errorMarkedContent",
            errorContentSubStream: "errorContentSubStream"
          };
          exports2.UNSUPPORTED_FEATURES = UNSUPPORTED_FEATURES;
          const PasswordResponses = {
            NEED_PASSWORD: 1,
            INCORRECT_PASSWORD: 2
          };
          exports2.PasswordResponses = PasswordResponses;
          let verbosity = VerbosityLevel.WARNINGS;
          function setVerbosityLevel(level) {
            if (Number.isInteger(level)) {
              verbosity = level;
            }
          }
          function getVerbosityLevel() {
            return verbosity;
          }
          function info(msg) {
            if (verbosity >= VerbosityLevel.INFOS) {
              console.log(`Info: ${msg}`);
            }
          }
          function warn(msg) {
            if (verbosity >= VerbosityLevel.WARNINGS) {
              console.log(`Warning: ${msg}`);
            }
          }
          function unreachable(msg) {
            throw new Error(msg);
          }
          function assert(cond, msg) {
            if (!cond) {
              unreachable(msg);
            }
          }
          function _isValidProtocol(url) {
            if (!url) {
              return false;
            }
            switch (url.protocol) {
              case "http:":
              case "https:":
              case "ftp:":
              case "mailto:":
              case "tel:":
                return true;
              default:
                return false;
            }
          }
          function createValidAbsoluteUrl(url, baseUrl = null, options = null) {
            if (!url) {
              return null;
            }
            try {
              if (options && typeof url === "string") {
                if (options.addDefaultProtocol && url.startsWith("www.")) {
                  const dots = url.match(/\./g);
                  if (dots && dots.length >= 2) {
                    url = `http://${url}`;
                  }
                }
                if (options.tryConvertEncoding) {
                  try {
                    url = stringToUTF8String(url);
                  } catch (ex) {
                  }
                }
              }
              const absoluteUrl = baseUrl ? new URL(url, baseUrl) : new URL(url);
              if (_isValidProtocol(absoluteUrl)) {
                return absoluteUrl;
              }
            } catch (ex) {
            }
            return null;
          }
          function shadow(obj, prop, value) {
            Object.defineProperty(obj, prop, {
              value,
              enumerable: true,
              configurable: true,
              writable: false
            });
            return value;
          }
          const BaseException = function BaseExceptionClosure() {
            function BaseException2(message, name) {
              if (this.constructor === BaseException2) {
                unreachable("Cannot initialize BaseException.");
              }
              this.message = message;
              this.name = name;
            }
            BaseException2.prototype = new Error();
            BaseException2.constructor = BaseException2;
            return BaseException2;
          }();
          exports2.BaseException = BaseException;
          class PasswordException extends BaseException {
            constructor(msg, code) {
              super(msg, "PasswordException");
              this.code = code;
            }
          }
          exports2.PasswordException = PasswordException;
          class UnknownErrorException extends BaseException {
            constructor(msg, details) {
              super(msg, "UnknownErrorException");
              this.details = details;
            }
          }
          exports2.UnknownErrorException = UnknownErrorException;
          class InvalidPDFException extends BaseException {
            constructor(msg) {
              super(msg, "InvalidPDFException");
            }
          }
          exports2.InvalidPDFException = InvalidPDFException;
          class MissingPDFException extends BaseException {
            constructor(msg) {
              super(msg, "MissingPDFException");
            }
          }
          exports2.MissingPDFException = MissingPDFException;
          class UnexpectedResponseException extends BaseException {
            constructor(msg, status) {
              super(msg, "UnexpectedResponseException");
              this.status = status;
            }
          }
          exports2.UnexpectedResponseException = UnexpectedResponseException;
          class FormatError extends BaseException {
            constructor(msg) {
              super(msg, "FormatError");
            }
          }
          exports2.FormatError = FormatError;
          class AbortException extends BaseException {
            constructor(msg) {
              super(msg, "AbortException");
            }
          }
          exports2.AbortException = AbortException;
          function bytesToString(bytes) {
            if (typeof bytes !== "object" || bytes === null || bytes.length === void 0) {
              unreachable("Invalid argument for bytesToString");
            }
            const length = bytes.length;
            const MAX_ARGUMENT_COUNT = 8192;
            if (length < MAX_ARGUMENT_COUNT) {
              return String.fromCharCode.apply(null, bytes);
            }
            const strBuf = [];
            for (let i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
              const chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
              const chunk = bytes.subarray(i, chunkEnd);
              strBuf.push(String.fromCharCode.apply(null, chunk));
            }
            return strBuf.join("");
          }
          function stringToBytes(str) {
            if (typeof str !== "string") {
              unreachable("Invalid argument for stringToBytes");
            }
            const length = str.length;
            const bytes = new Uint8Array(length);
            for (let i = 0; i < length; ++i) {
              bytes[i] = str.charCodeAt(i) & 255;
            }
            return bytes;
          }
          function arrayByteLength(arr) {
            if (arr.length !== void 0) {
              return arr.length;
            }
            if (arr.byteLength !== void 0) {
              return arr.byteLength;
            }
            unreachable("Invalid argument for arrayByteLength");
          }
          function arraysToBytes(arr) {
            const length = arr.length;
            if (length === 1 && arr[0] instanceof Uint8Array) {
              return arr[0];
            }
            let resultLength = 0;
            for (let i = 0; i < length; i++) {
              resultLength += arrayByteLength(arr[i]);
            }
            let pos = 0;
            const data = new Uint8Array(resultLength);
            for (let i = 0; i < length; i++) {
              let item = arr[i];
              if (!(item instanceof Uint8Array)) {
                if (typeof item === "string") {
                  item = stringToBytes(item);
                } else {
                  item = new Uint8Array(item);
                }
              }
              const itemLength = item.byteLength;
              data.set(item, pos);
              pos += itemLength;
            }
            return data;
          }
          function string32(value) {
            return String.fromCharCode(value >> 24 & 255, value >> 16 & 255, value >> 8 & 255, value & 255);
          }
          function objectSize(obj) {
            return Object.keys(obj).length;
          }
          function objectFromMap(map) {
            const obj = /* @__PURE__ */ Object.create(null);
            for (const [key, value] of map) {
              obj[key] = value;
            }
            return obj;
          }
          function isLittleEndian() {
            const buffer8 = new Uint8Array(4);
            buffer8[0] = 1;
            const view32 = new Uint32Array(buffer8.buffer, 0, 1);
            return view32[0] === 1;
          }
          function isEvalSupported() {
            try {
              new Function("");
              return true;
            } catch (e) {
              return false;
            }
          }
          class FeatureTest {
            static get isLittleEndian() {
              return shadow(this, "isLittleEndian", isLittleEndian());
            }
            static get isEvalSupported() {
              return shadow(this, "isEvalSupported", isEvalSupported());
            }
            static get isOffscreenCanvasSupported() {
              return shadow(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas !== "undefined");
            }
          }
          exports2.FeatureTest = FeatureTest;
          const hexNumbers = [...Array(256).keys()].map((n) => n.toString(16).padStart(2, "0"));
          class Util {
            static makeHexColor(r, g, b) {
              return `#${hexNumbers[r]}${hexNumbers[g]}${hexNumbers[b]}`;
            }
            static scaleMinMax(transform, minMax) {
              let temp;
              if (transform[0]) {
                if (transform[0] < 0) {
                  temp = minMax[0];
                  minMax[0] = minMax[1];
                  minMax[1] = temp;
                }
                minMax[0] *= transform[0];
                minMax[1] *= transform[0];
                if (transform[3] < 0) {
                  temp = minMax[2];
                  minMax[2] = minMax[3];
                  minMax[3] = temp;
                }
                minMax[2] *= transform[3];
                minMax[3] *= transform[3];
              } else {
                temp = minMax[0];
                minMax[0] = minMax[2];
                minMax[2] = temp;
                temp = minMax[1];
                minMax[1] = minMax[3];
                minMax[3] = temp;
                if (transform[1] < 0) {
                  temp = minMax[2];
                  minMax[2] = minMax[3];
                  minMax[3] = temp;
                }
                minMax[2] *= transform[1];
                minMax[3] *= transform[1];
                if (transform[2] < 0) {
                  temp = minMax[0];
                  minMax[0] = minMax[1];
                  minMax[1] = temp;
                }
                minMax[0] *= transform[2];
                minMax[1] *= transform[2];
              }
              minMax[0] += transform[4];
              minMax[1] += transform[4];
              minMax[2] += transform[5];
              minMax[3] += transform[5];
            }
            static transform(m1, m2) {
              return [m1[0] * m2[0] + m1[2] * m2[1], m1[1] * m2[0] + m1[3] * m2[1], m1[0] * m2[2] + m1[2] * m2[3], m1[1] * m2[2] + m1[3] * m2[3], m1[0] * m2[4] + m1[2] * m2[5] + m1[4], m1[1] * m2[4] + m1[3] * m2[5] + m1[5]];
            }
            static applyTransform(p, m) {
              const xt = p[0] * m[0] + p[1] * m[2] + m[4];
              const yt = p[0] * m[1] + p[1] * m[3] + m[5];
              return [xt, yt];
            }
            static applyInverseTransform(p, m) {
              const d = m[0] * m[3] - m[1] * m[2];
              const xt = (p[0] * m[3] - p[1] * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
              const yt = (-p[0] * m[1] + p[1] * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
              return [xt, yt];
            }
            static getAxialAlignedBoundingBox(r, m) {
              const p1 = Util.applyTransform(r, m);
              const p2 = Util.applyTransform(r.slice(2, 4), m);
              const p3 = Util.applyTransform([r[0], r[3]], m);
              const p4 = Util.applyTransform([r[2], r[1]], m);
              return [Math.min(p1[0], p2[0], p3[0], p4[0]), Math.min(p1[1], p2[1], p3[1], p4[1]), Math.max(p1[0], p2[0], p3[0], p4[0]), Math.max(p1[1], p2[1], p3[1], p4[1])];
            }
            static inverseTransform(m) {
              const d = m[0] * m[3] - m[1] * m[2];
              return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
            }
            static apply3dTransform(m, v) {
              return [m[0] * v[0] + m[1] * v[1] + m[2] * v[2], m[3] * v[0] + m[4] * v[1] + m[5] * v[2], m[6] * v[0] + m[7] * v[1] + m[8] * v[2]];
            }
            static singularValueDecompose2dScale(m) {
              const transpose = [m[0], m[2], m[1], m[3]];
              const a = m[0] * transpose[0] + m[1] * transpose[2];
              const b = m[0] * transpose[1] + m[1] * transpose[3];
              const c = m[2] * transpose[0] + m[3] * transpose[2];
              const d = m[2] * transpose[1] + m[3] * transpose[3];
              const first = (a + d) / 2;
              const second = Math.sqrt((a + d) ** 2 - 4 * (a * d - c * b)) / 2;
              const sx = first + second || 1;
              const sy = first - second || 1;
              return [Math.sqrt(sx), Math.sqrt(sy)];
            }
            static normalizeRect(rect) {
              const r = rect.slice(0);
              if (rect[0] > rect[2]) {
                r[0] = rect[2];
                r[2] = rect[0];
              }
              if (rect[1] > rect[3]) {
                r[1] = rect[3];
                r[3] = rect[1];
              }
              return r;
            }
            static intersect(rect1, rect2) {
              const xLow = Math.max(Math.min(rect1[0], rect1[2]), Math.min(rect2[0], rect2[2]));
              const xHigh = Math.min(Math.max(rect1[0], rect1[2]), Math.max(rect2[0], rect2[2]));
              if (xLow > xHigh) {
                return null;
              }
              const yLow = Math.max(Math.min(rect1[1], rect1[3]), Math.min(rect2[1], rect2[3]));
              const yHigh = Math.min(Math.max(rect1[1], rect1[3]), Math.max(rect2[1], rect2[3]));
              if (yLow > yHigh) {
                return null;
              }
              return [xLow, yLow, xHigh, yHigh];
            }
            static bezierBoundingBox(x0, y0, x1, y1, x2, y2, x3, y3) {
              const tvalues = [], bounds = [[], []];
              let a, b, c, t, t1, t2, b2ac, sqrtb2ac;
              for (let i = 0; i < 2; ++i) {
                if (i === 0) {
                  b = 6 * x0 - 12 * x1 + 6 * x2;
                  a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
                  c = 3 * x1 - 3 * x0;
                } else {
                  b = 6 * y0 - 12 * y1 + 6 * y2;
                  a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
                  c = 3 * y1 - 3 * y0;
                }
                if (Math.abs(a) < 1e-12) {
                  if (Math.abs(b) < 1e-12) {
                    continue;
                  }
                  t = -c / b;
                  if (0 < t && t < 1) {
                    tvalues.push(t);
                  }
                  continue;
                }
                b2ac = b * b - 4 * c * a;
                sqrtb2ac = Math.sqrt(b2ac);
                if (b2ac < 0) {
                  continue;
                }
                t1 = (-b + sqrtb2ac) / (2 * a);
                if (0 < t1 && t1 < 1) {
                  tvalues.push(t1);
                }
                t2 = (-b - sqrtb2ac) / (2 * a);
                if (0 < t2 && t2 < 1) {
                  tvalues.push(t2);
                }
              }
              let j = tvalues.length, mt;
              const jlen = j;
              while (j--) {
                t = tvalues[j];
                mt = 1 - t;
                bounds[0][j] = mt * mt * mt * x0 + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x3;
                bounds[1][j] = mt * mt * mt * y0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * y3;
              }
              bounds[0][jlen] = x0;
              bounds[1][jlen] = y0;
              bounds[0][jlen + 1] = x3;
              bounds[1][jlen + 1] = y3;
              bounds[0].length = bounds[1].length = jlen + 2;
              return [Math.min(...bounds[0]), Math.min(...bounds[1]), Math.max(...bounds[0]), Math.max(...bounds[1])];
            }
          }
          exports2.Util = Util;
          const PDFStringTranslateTable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353, 382, 0, 8364];
          function stringToPDFString(str) {
            if (str[0] >= "\xEF") {
              let encoding;
              if (str[0] === "\xFE" && str[1] === "\xFF") {
                encoding = "utf-16be";
              } else if (str[0] === "\xFF" && str[1] === "\xFE") {
                encoding = "utf-16le";
              } else if (str[0] === "\xEF" && str[1] === "\xBB" && str[2] === "\xBF") {
                encoding = "utf-8";
              }
              if (encoding) {
                try {
                  const decoder = new TextDecoder(encoding, {
                    fatal: true
                  });
                  const buffer = stringToBytes(str);
                  return decoder.decode(buffer);
                } catch (ex) {
                  warn(`stringToPDFString: "${ex}".`);
                }
              }
            }
            const strBuf = [];
            for (let i = 0, ii = str.length; i < ii; i++) {
              const code = PDFStringTranslateTable[str.charCodeAt(i)];
              strBuf.push(code ? String.fromCharCode(code) : str.charAt(i));
            }
            return strBuf.join("");
          }
          function escapeString(str) {
            return str.replace(/([()\\\n\r])/g, (match) => {
              if (match === "\n") {
                return "\\n";
              } else if (match === "\r") {
                return "\\r";
              }
              return `\\${match}`;
            });
          }
          function isAscii(str) {
            return /^[\x00-\x7F]*$/.test(str);
          }
          function stringToUTF16BEString(str) {
            const buf = ["\xFE\xFF"];
            for (let i = 0, ii = str.length; i < ii; i++) {
              const char = str.charCodeAt(i);
              buf.push(String.fromCharCode(char >> 8 & 255), String.fromCharCode(char & 255));
            }
            return buf.join("");
          }
          function stringToUTF8String(str) {
            return decodeURIComponent(escape(str));
          }
          function utf8StringToString(str) {
            return unescape(encodeURIComponent(str));
          }
          function isArrayBuffer(v) {
            return typeof v === "object" && v !== null && v.byteLength !== void 0;
          }
          function isArrayEqual(arr1, arr2) {
            if (arr1.length !== arr2.length) {
              return false;
            }
            for (let i = 0, ii = arr1.length; i < ii; i++) {
              if (arr1[i] !== arr2[i]) {
                return false;
              }
            }
            return true;
          }
          function getModificationDate(date = new Date()) {
            const buffer = [date.getUTCFullYear().toString(), (date.getUTCMonth() + 1).toString().padStart(2, "0"), date.getUTCDate().toString().padStart(2, "0"), date.getUTCHours().toString().padStart(2, "0"), date.getUTCMinutes().toString().padStart(2, "0"), date.getUTCSeconds().toString().padStart(2, "0")];
            return buffer.join("");
          }
          function createPromiseCapability() {
            const capability = /* @__PURE__ */ Object.create(null);
            let isSettled = false;
            Object.defineProperty(capability, "settled", {
              get() {
                return isSettled;
              }
            });
            capability.promise = new Promise(function(resolve, reject) {
              capability.resolve = function(data) {
                isSettled = true;
                resolve(data);
              };
              capability.reject = function(reason) {
                isSettled = true;
                reject(reason);
              };
            });
            return capability;
          }
        },
        (__unused_webpack_module2, __unused_webpack_exports, __w_pdfjs_require__2) => {
          __w_pdfjs_require__2(3);
        },
        (__unused_webpack_module2, exports2) => {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.isNodeJS = void 0;
          const isNodeJS = typeof process === "object" && process + "" === "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser");
          exports2.isNodeJS = isNodeJS;
        },
        (__unused_webpack_module, exports, __w_pdfjs_require__) => {
          var _docId, _a, _workerPorts, _docStats, _pageCache, _pagePromises, _metadataPromise, _objs, _ensureObj, ensureObj_fn, _canvasInUse;
          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.build = exports.RenderTask = exports.PDFWorkerUtil = exports.PDFWorker = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFDocumentLoadingTask = exports.PDFDataRangeTransport = exports.LoopbackPort = exports.DefaultStandardFontDataFactory = exports.DefaultCanvasFactory = exports.DefaultCMapReaderFactory = void 0;
          exports.getDocument = getDocument;
          exports.setPDFNetworkStreamFactory = setPDFNetworkStreamFactory;
          exports.version = void 0;
          var _util = __w_pdfjs_require__(1);
          var _display_utils = __w_pdfjs_require__(5);
          var _font_loader = __w_pdfjs_require__(7);
          var _annotation_storage = __w_pdfjs_require__(8);
          var _canvas = __w_pdfjs_require__(10);
          var _worker_options = __w_pdfjs_require__(13);
          var _is_node = __w_pdfjs_require__(3);
          var _message_handler = __w_pdfjs_require__(14);
          var _metadata = __w_pdfjs_require__(15);
          var _optional_content_config = __w_pdfjs_require__(16);
          var _transport_stream = __w_pdfjs_require__(17);
          var _xfa_text = __w_pdfjs_require__(18);
          const DEFAULT_RANGE_CHUNK_SIZE = 65536;
          const RENDERING_CANCELLED_TIMEOUT = 100;
          let DefaultCanvasFactory = _display_utils.DOMCanvasFactory;
          exports.DefaultCanvasFactory = DefaultCanvasFactory;
          let DefaultCMapReaderFactory = _display_utils.DOMCMapReaderFactory;
          exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory;
          let DefaultStandardFontDataFactory = _display_utils.DOMStandardFontDataFactory;
          exports.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory;
          if (_is_node.isNodeJS) {
            const {
              NodeCanvasFactory,
              NodeCMapReaderFactory,
              NodeStandardFontDataFactory
            } = __w_pdfjs_require__(19);
            exports.DefaultCanvasFactory = DefaultCanvasFactory = NodeCanvasFactory;
            exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory = NodeCMapReaderFactory;
            exports.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory = NodeStandardFontDataFactory;
          }
          let createPDFNetworkStream;
          function setPDFNetworkStreamFactory(pdfNetworkStreamFactory) {
            createPDFNetworkStream = pdfNetworkStreamFactory;
          }
          function getDocument(src) {
            const task = new PDFDocumentLoadingTask();
            let source;
            if (typeof src === "string" || src instanceof URL) {
              source = {
                url: src
              };
            } else if ((0, _util.isArrayBuffer)(src)) {
              source = {
                data: src
              };
            } else if (src instanceof PDFDataRangeTransport) {
              source = {
                range: src
              };
            } else {
              if (typeof src !== "object") {
                throw new Error("Invalid parameter in getDocument, need either string, URL, Uint8Array, or parameter object.");
              }
              if (!src.url && !src.data && !src.range) {
                throw new Error("Invalid parameter object: need either .data, .range or .url");
              }
              source = src;
            }
            const params = /* @__PURE__ */ Object.create(null);
            let rangeTransport = null, worker2 = null;
            for (const key in source) {
              const value = source[key];
              switch (key) {
                case "url":
                  if (typeof window !== "undefined") {
                    try {
                      params[key] = new URL(value, window.location).href;
                      continue;
                    } catch (ex) {
                      (0, _util.warn)(`Cannot create valid URL: "${ex}".`);
                    }
                  } else if (typeof value === "string" || value instanceof URL) {
                    params[key] = value.toString();
                    continue;
                  }
                  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
                case "range":
                  rangeTransport = value;
                  continue;
                case "worker":
                  worker2 = value;
                  continue;
                case "data":
                  if (_is_node.isNodeJS && typeof Buffer !== "undefined" && value instanceof Buffer) {
                    params[key] = new Uint8Array(value);
                  } else if (value instanceof Uint8Array) {
                    break;
                  } else if (typeof value === "string") {
                    params[key] = (0, _util.stringToBytes)(value);
                  } else if (typeof value === "object" && value !== null && !isNaN(value.length)) {
                    params[key] = new Uint8Array(value);
                  } else if ((0, _util.isArrayBuffer)(value)) {
                    params[key] = new Uint8Array(value);
                  } else {
                    throw new Error("Invalid PDF binary data: either typed array, string, or array-like object is expected in the data property.");
                  }
                  continue;
              }
              params[key] = value;
            }
            params.CMapReaderFactory = params.CMapReaderFactory || DefaultCMapReaderFactory;
            params.StandardFontDataFactory = params.StandardFontDataFactory || DefaultStandardFontDataFactory;
            params.ignoreErrors = params.stopAtErrors !== true;
            params.fontExtraProperties = params.fontExtraProperties === true;
            params.pdfBug = params.pdfBug === true;
            params.enableXfa = params.enableXfa === true;
            if (!Number.isInteger(params.rangeChunkSize) || params.rangeChunkSize < 1) {
              params.rangeChunkSize = DEFAULT_RANGE_CHUNK_SIZE;
            }
            if (typeof params.docBaseUrl !== "string" || (0, _display_utils.isDataScheme)(params.docBaseUrl)) {
              params.docBaseUrl = null;
            }
            if (!Number.isInteger(params.maxImageSize) || params.maxImageSize < -1) {
              params.maxImageSize = -1;
            }
            if (typeof params.cMapUrl !== "string") {
              params.cMapUrl = null;
            }
            if (typeof params.standardFontDataUrl !== "string") {
              params.standardFontDataUrl = null;
            }
            if (typeof params.useWorkerFetch !== "boolean") {
              params.useWorkerFetch = params.CMapReaderFactory === _display_utils.DOMCMapReaderFactory && params.StandardFontDataFactory === _display_utils.DOMStandardFontDataFactory;
            }
            if (typeof params.isEvalSupported !== "boolean") {
              params.isEvalSupported = true;
            }
            if (typeof params.disableFontFace !== "boolean") {
              params.disableFontFace = _is_node.isNodeJS;
            }
            if (typeof params.useSystemFonts !== "boolean") {
              params.useSystemFonts = !_is_node.isNodeJS && !params.disableFontFace;
            }
            if (typeof params.ownerDocument !== "object" || params.ownerDocument === null) {
              params.ownerDocument = globalThis.document;
            }
            if (typeof params.disableRange !== "boolean") {
              params.disableRange = false;
            }
            if (typeof params.disableStream !== "boolean") {
              params.disableStream = false;
            }
            if (typeof params.disableAutoFetch !== "boolean") {
              params.disableAutoFetch = false;
            }
            (0, _util.setVerbosityLevel)(params.verbosity);
            if (!worker2) {
              const workerParams = {
                verbosity: params.verbosity,
                port: _worker_options.GlobalWorkerOptions.workerPort
              };
              worker2 = workerParams.port ? PDFWorker.fromPort(workerParams) : new PDFWorker(workerParams);
              task._worker = worker2;
            }
            const docId = task.docId;
            worker2.promise.then(function() {
              if (task.destroyed) {
                throw new Error("Loading aborted");
              }
              const workerIdPromise = _fetchDocument(worker2, params, rangeTransport, docId);
              const networkStreamPromise = new Promise(function(resolve) {
                let networkStream;
                if (rangeTransport) {
                  networkStream = new _transport_stream.PDFDataTransportStream({
                    length: params.length,
                    initialData: params.initialData,
                    progressiveDone: params.progressiveDone,
                    contentDispositionFilename: params.contentDispositionFilename,
                    disableRange: params.disableRange,
                    disableStream: params.disableStream
                  }, rangeTransport);
                } else if (!params.data) {
                  networkStream = createPDFNetworkStream({
                    url: params.url,
                    length: params.length,
                    httpHeaders: params.httpHeaders,
                    withCredentials: params.withCredentials,
                    rangeChunkSize: params.rangeChunkSize,
                    disableRange: params.disableRange,
                    disableStream: params.disableStream
                  });
                }
                resolve(networkStream);
              });
              return Promise.all([workerIdPromise, networkStreamPromise]).then(function([workerId, networkStream]) {
                if (task.destroyed) {
                  throw new Error("Loading aborted");
                }
                const messageHandler = new _message_handler.MessageHandler(docId, workerId, worker2.port);
                const transport = new WorkerTransport(messageHandler, task, networkStream, params);
                task._transport = transport;
                messageHandler.send("Ready", null);
              });
            }).catch(task._capability.reject);
            return task;
          }
          async function _fetchDocument(worker2, source, pdfDataRangeTransport, docId) {
            if (worker2.destroyed) {
              throw new Error("Worker was destroyed");
            }
            if (pdfDataRangeTransport) {
              source.length = pdfDataRangeTransport.length;
              source.initialData = pdfDataRangeTransport.initialData;
              source.progressiveDone = pdfDataRangeTransport.progressiveDone;
              source.contentDispositionFilename = pdfDataRangeTransport.contentDispositionFilename;
            }
            const workerId = await worker2.messageHandler.sendWithPromise("GetDocRequest", {
              docId,
              apiVersion: "2.14.305",
              source: {
                data: source.data,
                url: source.url,
                password: source.password,
                disableAutoFetch: source.disableAutoFetch,
                rangeChunkSize: source.rangeChunkSize,
                length: source.length
              },
              maxImageSize: source.maxImageSize,
              disableFontFace: source.disableFontFace,
              docBaseUrl: source.docBaseUrl,
              ignoreErrors: source.ignoreErrors,
              isEvalSupported: source.isEvalSupported,
              fontExtraProperties: source.fontExtraProperties,
              enableXfa: source.enableXfa,
              useSystemFonts: source.useSystemFonts,
              cMapUrl: source.useWorkerFetch ? source.cMapUrl : null,
              standardFontDataUrl: source.useWorkerFetch ? source.standardFontDataUrl : null
            });
            if (worker2.destroyed) {
              throw new Error("Worker was destroyed");
            }
            return workerId;
          }
          const _PDFDocumentLoadingTask = class {
            constructor() {
              this._capability = (0, _util.createPromiseCapability)();
              this._transport = null;
              this._worker = null;
              this.docId = `d${__privateWrapper(_PDFDocumentLoadingTask, _docId)._++}`;
              this.destroyed = false;
              this.onPassword = null;
              this.onProgress = null;
              this.onUnsupportedFeature = null;
            }
            get promise() {
              return this._capability.promise;
            }
            async destroy() {
              var _a2;
              this.destroyed = true;
              await ((_a2 = this._transport) == null ? void 0 : _a2.destroy());
              this._transport = null;
              if (this._worker) {
                this._worker.destroy();
                this._worker = null;
              }
            }
          };
          let PDFDocumentLoadingTask = _PDFDocumentLoadingTask;
          _docId = new WeakMap();
          __privateAdd(PDFDocumentLoadingTask, _docId, 0);
          exports.PDFDocumentLoadingTask = PDFDocumentLoadingTask;
          class PDFDataRangeTransport {
            constructor(length, initialData, progressiveDone = false, contentDispositionFilename = null) {
              this.length = length;
              this.initialData = initialData;
              this.progressiveDone = progressiveDone;
              this.contentDispositionFilename = contentDispositionFilename;
              this._rangeListeners = [];
              this._progressListeners = [];
              this._progressiveReadListeners = [];
              this._progressiveDoneListeners = [];
              this._readyCapability = (0, _util.createPromiseCapability)();
            }
            addRangeListener(listener) {
              this._rangeListeners.push(listener);
            }
            addProgressListener(listener) {
              this._progressListeners.push(listener);
            }
            addProgressiveReadListener(listener) {
              this._progressiveReadListeners.push(listener);
            }
            addProgressiveDoneListener(listener) {
              this._progressiveDoneListeners.push(listener);
            }
            onDataRange(begin, chunk) {
              for (const listener of this._rangeListeners) {
                listener(begin, chunk);
              }
            }
            onDataProgress(loaded, total) {
              this._readyCapability.promise.then(() => {
                for (const listener of this._progressListeners) {
                  listener(loaded, total);
                }
              });
            }
            onDataProgressiveRead(chunk) {
              this._readyCapability.promise.then(() => {
                for (const listener of this._progressiveReadListeners) {
                  listener(chunk);
                }
              });
            }
            onDataProgressiveDone() {
              this._readyCapability.promise.then(() => {
                for (const listener of this._progressiveDoneListeners) {
                  listener();
                }
              });
            }
            transportReady() {
              this._readyCapability.resolve();
            }
            requestDataRange(begin, end) {
              (0, _util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange");
            }
            abort() {
            }
          }
          exports.PDFDataRangeTransport = PDFDataRangeTransport;
          class PDFDocumentProxy {
            constructor(pdfInfo, transport) {
              this._pdfInfo = pdfInfo;
              this._transport = transport;
              Object.defineProperty(this, "fingerprint", {
                get() {
                  (0, _display_utils.deprecated)("`PDFDocumentProxy.fingerprint`, please use `PDFDocumentProxy.fingerprints` instead.");
                  return this.fingerprints[0];
                }
              });
              Object.defineProperty(this, "getStats", {
                value: async () => {
                  (0, _display_utils.deprecated)("`PDFDocumentProxy.getStats`, please use the `PDFDocumentProxy.stats`-getter instead.");
                  return this.stats || {
                    streamTypes: {},
                    fontTypes: {}
                  };
                }
              });
            }
            get annotationStorage() {
              return this._transport.annotationStorage;
            }
            get numPages() {
              return this._pdfInfo.numPages;
            }
            get fingerprints() {
              return this._pdfInfo.fingerprints;
            }
            get stats() {
              return this._transport.stats;
            }
            get isPureXfa() {
              return !!this._transport._htmlForXfa;
            }
            get allXfaHtml() {
              return this._transport._htmlForXfa;
            }
            getPage(pageNumber) {
              return this._transport.getPage(pageNumber);
            }
            getPageIndex(ref) {
              return this._transport.getPageIndex(ref);
            }
            getDestinations() {
              return this._transport.getDestinations();
            }
            getDestination(id) {
              return this._transport.getDestination(id);
            }
            getPageLabels() {
              return this._transport.getPageLabels();
            }
            getPageLayout() {
              return this._transport.getPageLayout();
            }
            getPageMode() {
              return this._transport.getPageMode();
            }
            getViewerPreferences() {
              return this._transport.getViewerPreferences();
            }
            getOpenAction() {
              return this._transport.getOpenAction();
            }
            getAttachments() {
              return this._transport.getAttachments();
            }
            getJavaScript() {
              return this._transport.getJavaScript();
            }
            getJSActions() {
              return this._transport.getDocJSActions();
            }
            getOutline() {
              return this._transport.getOutline();
            }
            getOptionalContentConfig() {
              return this._transport.getOptionalContentConfig();
            }
            getPermissions() {
              return this._transport.getPermissions();
            }
            getMetadata() {
              return this._transport.getMetadata();
            }
            getMarkInfo() {
              return this._transport.getMarkInfo();
            }
            getData() {
              return this._transport.getData();
            }
            getDownloadInfo() {
              return this._transport.downloadInfoCapability.promise;
            }
            cleanup(keepLoadedFonts = false) {
              return this._transport.startCleanup(keepLoadedFonts || this.isPureXfa);
            }
            destroy() {
              return this.loadingTask.destroy();
            }
            get loadingParams() {
              return this._transport.loadingParams;
            }
            get loadingTask() {
              return this._transport.loadingTask;
            }
            saveDocument() {
              if (this._transport.annotationStorage.size <= 0) {
                (0, _display_utils.deprecated)("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
              }
              return this._transport.saveDocument();
            }
            getFieldObjects() {
              return this._transport.getFieldObjects();
            }
            hasJSActions() {
              return this._transport.hasJSActions();
            }
            getCalculationOrderIds() {
              return this._transport.getCalculationOrderIds();
            }
          }
          exports.PDFDocumentProxy = PDFDocumentProxy;
          class PDFPageProxy {
            constructor(pageIndex, pageInfo, transport, ownerDocument, pdfBug = false) {
              this._pageIndex = pageIndex;
              this._pageInfo = pageInfo;
              this._ownerDocument = ownerDocument;
              this._transport = transport;
              this._stats = pdfBug ? new _display_utils.StatTimer() : null;
              this._pdfBug = pdfBug;
              this.commonObjs = transport.commonObjs;
              this.objs = new PDFObjects();
              this._bitmaps = /* @__PURE__ */ new Set();
              this.cleanupAfterRender = false;
              this.pendingCleanup = false;
              this._intentStates = /* @__PURE__ */ new Map();
              this._annotationPromises = /* @__PURE__ */ new Map();
              this.destroyed = false;
            }
            get pageNumber() {
              return this._pageIndex + 1;
            }
            get rotate() {
              return this._pageInfo.rotate;
            }
            get ref() {
              return this._pageInfo.ref;
            }
            get userUnit() {
              return this._pageInfo.userUnit;
            }
            get view() {
              return this._pageInfo.view;
            }
            getViewport({
              scale: scale2,
              rotation = this.rotate,
              offsetX = 0,
              offsetY = 0,
              dontFlip = false
            } = {}) {
              return new _display_utils.PageViewport({
                viewBox: this.view,
                scale: scale2,
                rotation,
                offsetX,
                offsetY,
                dontFlip
              });
            }
            getAnnotations({
              intent = "display"
            } = {}) {
              const intentArgs = this._transport.getRenderingIntent(intent);
              let promise = this._annotationPromises.get(intentArgs.cacheKey);
              if (!promise) {
                promise = this._transport.getAnnotations(this._pageIndex, intentArgs.renderingIntent);
                this._annotationPromises.set(intentArgs.cacheKey, promise);
                promise = promise.then((annotations) => {
                  for (const annotation of annotations) {
                    if (annotation.titleObj !== void 0) {
                      Object.defineProperty(annotation, "title", {
                        get() {
                          (0, _display_utils.deprecated)("`title`-property on annotation, please use `titleObj` instead.");
                          return annotation.titleObj.str;
                        }
                      });
                    }
                    if (annotation.contentsObj !== void 0) {
                      Object.defineProperty(annotation, "contents", {
                        get() {
                          (0, _display_utils.deprecated)("`contents`-property on annotation, please use `contentsObj` instead.");
                          return annotation.contentsObj.str;
                        }
                      });
                    }
                  }
                  return annotations;
                });
              }
              return promise;
            }
            getJSActions() {
              return this._jsActionsPromise || (this._jsActionsPromise = this._transport.getPageJSActions(this._pageIndex));
            }
            async getXfa() {
              var _a2;
              return ((_a2 = this._transport._htmlForXfa) == null ? void 0 : _a2.children[this._pageIndex]) || null;
            }
            render({
              canvasContext,
              viewport,
              intent = "display",
              annotationMode = _util.AnnotationMode.ENABLE,
              transform = null,
              imageLayer = null,
              canvasFactory = null,
              background = null,
              optionalContentConfigPromise = null,
              annotationCanvasMap = null,
              pageColors = null
            }) {
              var _a2, _b;
              if (((_a2 = arguments[0]) == null ? void 0 : _a2.renderInteractiveForms) !== void 0) {
                (0, _display_utils.deprecated)("render no longer accepts the `renderInteractiveForms`-option, please use the `annotationMode`-option instead.");
                if (arguments[0].renderInteractiveForms === true && annotationMode === _util.AnnotationMode.ENABLE) {
                  annotationMode = _util.AnnotationMode.ENABLE_FORMS;
                }
              }
              if (((_b = arguments[0]) == null ? void 0 : _b.includeAnnotationStorage) !== void 0) {
                (0, _display_utils.deprecated)("render no longer accepts the `includeAnnotationStorage`-option, please use the `annotationMode`-option instead.");
                if (arguments[0].includeAnnotationStorage === true && annotationMode === _util.AnnotationMode.ENABLE) {
                  annotationMode = _util.AnnotationMode.ENABLE_STORAGE;
                }
              }
              if (this._stats) {
                this._stats.time("Overall");
              }
              const intentArgs = this._transport.getRenderingIntent(intent, annotationMode);
              this.pendingCleanup = false;
              if (!optionalContentConfigPromise) {
                optionalContentConfigPromise = this._transport.getOptionalContentConfig();
              }
              let intentState = this._intentStates.get(intentArgs.cacheKey);
              if (!intentState) {
                intentState = /* @__PURE__ */ Object.create(null);
                this._intentStates.set(intentArgs.cacheKey, intentState);
              }
              if (intentState.streamReaderCancelTimeout) {
                clearTimeout(intentState.streamReaderCancelTimeout);
                intentState.streamReaderCancelTimeout = null;
              }
              const canvasFactoryInstance = canvasFactory || new DefaultCanvasFactory({
                ownerDocument: this._ownerDocument
              });
              const intentPrint = !!(intentArgs.renderingIntent & _util.RenderingIntentFlag.PRINT);
              if (!intentState.displayReadyCapability) {
                intentState.displayReadyCapability = (0, _util.createPromiseCapability)();
                intentState.operatorList = {
                  fnArray: [],
                  argsArray: [],
                  lastChunk: false
                };
                if (this._stats) {
                  this._stats.time("Page Request");
                }
                this._pumpOperatorList(intentArgs);
              }
              const complete = (error) => {
                intentState.renderTasks.delete(internalRenderTask);
                if (this.cleanupAfterRender || intentPrint) {
                  this.pendingCleanup = true;
                }
                this._tryCleanup();
                if (error) {
                  internalRenderTask.capability.reject(error);
                  this._abortOperatorList({
                    intentState,
                    reason: error instanceof Error ? error : new Error(error)
                  });
                } else {
                  internalRenderTask.capability.resolve();
                }
                if (this._stats) {
                  this._stats.timeEnd("Rendering");
                  this._stats.timeEnd("Overall");
                }
              };
              const internalRenderTask = new InternalRenderTask({
                callback: complete,
                params: {
                  canvasContext,
                  viewport,
                  transform,
                  imageLayer,
                  background
                },
                objs: this.objs,
                commonObjs: this.commonObjs,
                annotationCanvasMap,
                operatorList: intentState.operatorList,
                pageIndex: this._pageIndex,
                canvasFactory: canvasFactoryInstance,
                useRequestAnimationFrame: !intentPrint,
                pdfBug: this._pdfBug,
                pageColors
              });
              (intentState.renderTasks || (intentState.renderTasks = /* @__PURE__ */ new Set())).add(internalRenderTask);
              const renderTask = internalRenderTask.task;
              Promise.all([intentState.displayReadyCapability.promise, optionalContentConfigPromise]).then(([transparency, optionalContentConfig]) => {
                if (this.pendingCleanup) {
                  complete();
                  return;
                }
                if (this._stats) {
                  this._stats.time("Rendering");
                }
                internalRenderTask.initializeGraphics({
                  transparency,
                  optionalContentConfig
                });
                internalRenderTask.operatorListChanged();
              }).catch(complete);
              return renderTask;
            }
            getOperatorList({
              intent = "display",
              annotationMode = _util.AnnotationMode.ENABLE
            } = {}) {
              function operatorListChanged() {
                if (intentState.operatorList.lastChunk) {
                  intentState.opListReadCapability.resolve(intentState.operatorList);
                  intentState.renderTasks.delete(opListTask);
                }
              }
              const intentArgs = this._transport.getRenderingIntent(intent, annotationMode, true);
              let intentState = this._intentStates.get(intentArgs.cacheKey);
              if (!intentState) {
                intentState = /* @__PURE__ */ Object.create(null);
                this._intentStates.set(intentArgs.cacheKey, intentState);
              }
              let opListTask;
              if (!intentState.opListReadCapability) {
                opListTask = /* @__PURE__ */ Object.create(null);
                opListTask.operatorListChanged = operatorListChanged;
                intentState.opListReadCapability = (0, _util.createPromiseCapability)();
                (intentState.renderTasks || (intentState.renderTasks = /* @__PURE__ */ new Set())).add(opListTask);
                intentState.operatorList = {
                  fnArray: [],
                  argsArray: [],
                  lastChunk: false
                };
                if (this._stats) {
                  this._stats.time("Page Request");
                }
                this._pumpOperatorList(intentArgs);
              }
              return intentState.opListReadCapability.promise;
            }
            streamTextContent({
              disableCombineTextItems = false,
              includeMarkedContent = false
            } = {}) {
              const TEXT_CONTENT_CHUNK_SIZE = 100;
              return this._transport.messageHandler.sendWithStream("GetTextContent", {
                pageIndex: this._pageIndex,
                combineTextItems: disableCombineTextItems !== true,
                includeMarkedContent: includeMarkedContent === true
              }, {
                highWaterMark: TEXT_CONTENT_CHUNK_SIZE,
                size(textContent) {
                  return textContent.items.length;
                }
              });
            }
            getTextContent(params = {}) {
              if (this._transport._htmlForXfa) {
                return this.getXfa().then((xfa) => {
                  return _xfa_text.XfaText.textContent(xfa);
                });
              }
              const readableStream = this.streamTextContent(params);
              return new Promise(function(resolve, reject) {
                function pump() {
                  reader.read().then(function({
                    value,
                    done
                  }) {
                    if (done) {
                      resolve(textContent);
                      return;
                    }
                    Object.assign(textContent.styles, value.styles);
                    textContent.items.push(...value.items);
                    pump();
                  }, reject);
                }
                const reader = readableStream.getReader();
                const textContent = {
                  items: [],
                  styles: /* @__PURE__ */ Object.create(null)
                };
                pump();
              });
            }
            getStructTree() {
              return this._structTreePromise || (this._structTreePromise = this._transport.getStructTree(this._pageIndex));
            }
            _destroy() {
              this.destroyed = true;
              const waitOn = [];
              for (const intentState of this._intentStates.values()) {
                this._abortOperatorList({
                  intentState,
                  reason: new Error("Page was destroyed."),
                  force: true
                });
                if (intentState.opListReadCapability) {
                  continue;
                }
                for (const internalRenderTask of intentState.renderTasks) {
                  waitOn.push(internalRenderTask.completed);
                  internalRenderTask.cancel();
                }
              }
              this.objs.clear();
              for (const bitmap of this._bitmaps) {
                bitmap.close();
              }
              this._bitmaps.clear();
              this._annotationPromises.clear();
              this._jsActionsPromise = null;
              this._structTreePromise = null;
              this.pendingCleanup = false;
              return Promise.all(waitOn);
            }
            cleanup(resetStats = false) {
              this.pendingCleanup = true;
              return this._tryCleanup(resetStats);
            }
            _tryCleanup(resetStats = false) {
              if (!this.pendingCleanup) {
                return false;
              }
              for (const {
                renderTasks,
                operatorList
              } of this._intentStates.values()) {
                if (renderTasks.size > 0 || !operatorList.lastChunk) {
                  return false;
                }
              }
              this._intentStates.clear();
              this.objs.clear();
              this._annotationPromises.clear();
              this._jsActionsPromise = null;
              this._structTreePromise = null;
              if (resetStats && this._stats) {
                this._stats = new _display_utils.StatTimer();
              }
              for (const bitmap of this._bitmaps) {
                bitmap.close();
              }
              this._bitmaps.clear();
              this.pendingCleanup = false;
              return true;
            }
            _startRenderPage(transparency, cacheKey) {
              const intentState = this._intentStates.get(cacheKey);
              if (!intentState) {
                return;
              }
              if (this._stats) {
                this._stats.timeEnd("Page Request");
              }
              if (intentState.displayReadyCapability) {
                intentState.displayReadyCapability.resolve(transparency);
              }
            }
            _renderPageChunk(operatorListChunk, intentState) {
              for (let i = 0, ii = operatorListChunk.length; i < ii; i++) {
                intentState.operatorList.fnArray.push(operatorListChunk.fnArray[i]);
                intentState.operatorList.argsArray.push(operatorListChunk.argsArray[i]);
              }
              intentState.operatorList.lastChunk = operatorListChunk.lastChunk;
              for (const internalRenderTask of intentState.renderTasks) {
                internalRenderTask.operatorListChanged();
              }
              if (operatorListChunk.lastChunk) {
                this._tryCleanup();
              }
            }
            _pumpOperatorList({
              renderingIntent,
              cacheKey
            }) {
              const readableStream = this._transport.messageHandler.sendWithStream("GetOperatorList", {
                pageIndex: this._pageIndex,
                intent: renderingIntent,
                cacheKey,
                annotationStorage: renderingIntent & _util.RenderingIntentFlag.ANNOTATIONS_STORAGE ? this._transport.annotationStorage.serializable : null
              });
              const reader = readableStream.getReader();
              const intentState = this._intentStates.get(cacheKey);
              intentState.streamReader = reader;
              const pump = () => {
                reader.read().then(({
                  value,
                  done
                }) => {
                  if (done) {
                    intentState.streamReader = null;
                    return;
                  }
                  if (this._transport.destroyed) {
                    return;
                  }
                  this._renderPageChunk(value, intentState);
                  pump();
                }, (reason) => {
                  intentState.streamReader = null;
                  if (this._transport.destroyed) {
                    return;
                  }
                  if (intentState.operatorList) {
                    intentState.operatorList.lastChunk = true;
                    for (const internalRenderTask of intentState.renderTasks) {
                      internalRenderTask.operatorListChanged();
                    }
                    this._tryCleanup();
                  }
                  if (intentState.displayReadyCapability) {
                    intentState.displayReadyCapability.reject(reason);
                  } else if (intentState.opListReadCapability) {
                    intentState.opListReadCapability.reject(reason);
                  } else {
                    throw reason;
                  }
                });
              };
              pump();
            }
            _abortOperatorList({
              intentState,
              reason,
              force = false
            }) {
              if (!intentState.streamReader) {
                return;
              }
              if (!force) {
                if (intentState.renderTasks.size > 0) {
                  return;
                }
                if (reason instanceof _display_utils.RenderingCancelledException) {
                  intentState.streamReaderCancelTimeout = setTimeout(() => {
                    this._abortOperatorList({
                      intentState,
                      reason,
                      force: true
                    });
                    intentState.streamReaderCancelTimeout = null;
                  }, RENDERING_CANCELLED_TIMEOUT);
                  return;
                }
              }
              intentState.streamReader.cancel(new _util.AbortException(reason.message)).catch(() => {
              });
              intentState.streamReader = null;
              if (this._transport.destroyed) {
                return;
              }
              for (const [curCacheKey, curIntentState] of this._intentStates) {
                if (curIntentState === intentState) {
                  this._intentStates.delete(curCacheKey);
                  break;
                }
              }
              this.cleanup();
            }
            get stats() {
              return this._stats;
            }
          }
          exports.PDFPageProxy = PDFPageProxy;
          class LoopbackPort {
            constructor() {
              this._listeners = [];
              this._deferred = Promise.resolve();
            }
            postMessage(obj, transfers) {
              const event = {
                data: structuredClone(obj, transfers)
              };
              this._deferred.then(() => {
                for (const listener of this._listeners) {
                  listener.call(this, event);
                }
              });
            }
            addEventListener(name, listener) {
              this._listeners.push(listener);
            }
            removeEventListener(name, listener) {
              const i = this._listeners.indexOf(listener);
              this._listeners.splice(i, 1);
            }
            terminate() {
              this._listeners.length = 0;
            }
          }
          exports.LoopbackPort = LoopbackPort;
          const PDFWorkerUtil = {
            isWorkerDisabled: false,
            fallbackWorkerSrc: null,
            fakeWorkerId: 0
          };
          exports.PDFWorkerUtil = PDFWorkerUtil;
          {
            if (_is_node.isNodeJS && typeof commonjsRequire === "function") {
              PDFWorkerUtil.isWorkerDisabled = true;
              PDFWorkerUtil.fallbackWorkerSrc = "./pdf.worker.js";
            } else if (typeof document === "object") {
              const pdfjsFilePath = (_a = document == null ? void 0 : document.currentScript) == null ? void 0 : _a.src;
              if (pdfjsFilePath) {
                PDFWorkerUtil.fallbackWorkerSrc = pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2");
              }
            }
            PDFWorkerUtil.isSameOrigin = function(baseUrl, otherUrl) {
              let base;
              try {
                base = new URL(baseUrl);
                if (!base.origin || base.origin === "null") {
                  return false;
                }
              } catch (e) {
                return false;
              }
              const other = new URL(otherUrl, base);
              return base.origin === other.origin;
            };
            PDFWorkerUtil.createCDNWrapper = function(url) {
              const wrapper = `importScripts("${url}");`;
              return URL.createObjectURL(new Blob([wrapper]));
            };
          }
          const _PDFWorker = class {
            constructor({
              name = null,
              port = null,
              verbosity = (0, _util.getVerbosityLevel)()
            } = {}) {
              if (port && __privateGet(_PDFWorker, _workerPorts).has(port)) {
                throw new Error("Cannot use more than one PDFWorker per port.");
              }
              this.name = name;
              this.destroyed = false;
              this.verbosity = verbosity;
              this._readyCapability = (0, _util.createPromiseCapability)();
              this._port = null;
              this._webWorker = null;
              this._messageHandler = null;
              if (port) {
                __privateGet(_PDFWorker, _workerPorts).set(port, this);
                this._initializeFromPort(port);
                return;
              }
              this._initialize();
            }
            get promise() {
              return this._readyCapability.promise;
            }
            get port() {
              return this._port;
            }
            get messageHandler() {
              return this._messageHandler;
            }
            _initializeFromPort(port) {
              this._port = port;
              this._messageHandler = new _message_handler.MessageHandler("main", "worker", port);
              this._messageHandler.on("ready", function() {
              });
              this._readyCapability.resolve();
            }
            _initialize() {
              if (typeof Worker !== "undefined" && !PDFWorkerUtil.isWorkerDisabled && !_PDFWorker._mainThreadWorkerMessageHandler) {
                let workerSrc2 = _PDFWorker.workerSrc;
                try {
                  if (!PDFWorkerUtil.isSameOrigin(window.location.href, workerSrc2)) {
                    workerSrc2 = PDFWorkerUtil.createCDNWrapper(new URL(workerSrc2, window.location).href);
                  }
                  const worker2 = new Worker(workerSrc2);
                  const messageHandler = new _message_handler.MessageHandler("main", "worker", worker2);
                  const terminateEarly = () => {
                    worker2.removeEventListener("error", onWorkerError);
                    messageHandler.destroy();
                    worker2.terminate();
                    if (this.destroyed) {
                      this._readyCapability.reject(new Error("Worker was destroyed"));
                    } else {
                      this._setupFakeWorker();
                    }
                  };
                  const onWorkerError = () => {
                    if (!this._webWorker) {
                      terminateEarly();
                    }
                  };
                  worker2.addEventListener("error", onWorkerError);
                  messageHandler.on("test", (data) => {
                    worker2.removeEventListener("error", onWorkerError);
                    if (this.destroyed) {
                      terminateEarly();
                      return;
                    }
                    if (data) {
                      this._messageHandler = messageHandler;
                      this._port = worker2;
                      this._webWorker = worker2;
                      this._readyCapability.resolve();
                      messageHandler.send("configure", {
                        verbosity: this.verbosity
                      });
                    } else {
                      this._setupFakeWorker();
                      messageHandler.destroy();
                      worker2.terminate();
                    }
                  });
                  messageHandler.on("ready", (data) => {
                    worker2.removeEventListener("error", onWorkerError);
                    if (this.destroyed) {
                      terminateEarly();
                      return;
                    }
                    try {
                      sendTest();
                    } catch (e) {
                      this._setupFakeWorker();
                    }
                  });
                  const sendTest = () => {
                    const testObj = new Uint8Array();
                    messageHandler.send("test", testObj, [testObj.buffer]);
                  };
                  sendTest();
                  return;
                } catch (e) {
                  (0, _util.info)("The worker has been disabled.");
                }
              }
              this._setupFakeWorker();
            }
            _setupFakeWorker() {
              if (!PDFWorkerUtil.isWorkerDisabled) {
                (0, _util.warn)("Setting up fake worker.");
                PDFWorkerUtil.isWorkerDisabled = true;
              }
              _PDFWorker._setupFakeWorkerGlobal.then((WorkerMessageHandler) => {
                if (this.destroyed) {
                  this._readyCapability.reject(new Error("Worker was destroyed"));
                  return;
                }
                const port = new LoopbackPort();
                this._port = port;
                const id = `fake${PDFWorkerUtil.fakeWorkerId++}`;
                const workerHandler = new _message_handler.MessageHandler(id + "_worker", id, port);
                WorkerMessageHandler.setup(workerHandler, port);
                const messageHandler = new _message_handler.MessageHandler(id, id + "_worker", port);
                this._messageHandler = messageHandler;
                this._readyCapability.resolve();
                messageHandler.send("configure", {
                  verbosity: this.verbosity
                });
              }).catch((reason) => {
                this._readyCapability.reject(new Error(`Setting up fake worker failed: "${reason.message}".`));
              });
            }
            destroy() {
              this.destroyed = true;
              if (this._webWorker) {
                this._webWorker.terminate();
                this._webWorker = null;
              }
              __privateGet(_PDFWorker, _workerPorts).delete(this._port);
              this._port = null;
              if (this._messageHandler) {
                this._messageHandler.destroy();
                this._messageHandler = null;
              }
            }
            static fromPort(params) {
              if (!(params == null ? void 0 : params.port)) {
                throw new Error("PDFWorker.fromPort - invalid method signature.");
              }
              if (__privateGet(this, _workerPorts).has(params.port)) {
                return __privateGet(this, _workerPorts).get(params.port);
              }
              return new _PDFWorker(params);
            }
            static get workerSrc() {
              if (_worker_options.GlobalWorkerOptions.workerSrc) {
                return _worker_options.GlobalWorkerOptions.workerSrc;
              }
              if (PDFWorkerUtil.fallbackWorkerSrc !== null) {
                if (!_is_node.isNodeJS) {
                  (0, _display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.');
                }
                return PDFWorkerUtil.fallbackWorkerSrc;
              }
              throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
            }
            static get _mainThreadWorkerMessageHandler() {
              var _a2;
              try {
                return ((_a2 = globalThis.pdfjsWorker) == null ? void 0 : _a2.WorkerMessageHandler) || null;
              } catch (ex) {
                return null;
              }
            }
            static get _setupFakeWorkerGlobal() {
              const loader = async () => {
                const mainWorkerMessageHandler = this._mainThreadWorkerMessageHandler;
                if (mainWorkerMessageHandler) {
                  return mainWorkerMessageHandler;
                }
                if (_is_node.isNodeJS && typeof commonjsRequire === "function") {
                  const worker = eval("require")(this.workerSrc);
                  return worker.WorkerMessageHandler;
                }
                await (0, _display_utils.loadScript)(this.workerSrc);
                return window.pdfjsWorker.WorkerMessageHandler;
              };
              return (0, _util.shadow)(this, "_setupFakeWorkerGlobal", loader());
            }
          };
          let PDFWorker = _PDFWorker;
          _workerPorts = new WeakMap();
          __privateAdd(PDFWorker, _workerPorts, /* @__PURE__ */ new WeakMap());
          exports.PDFWorker = PDFWorker;
          {
            PDFWorker.getWorkerSrc = function() {
              (0, _display_utils.deprecated)("`PDFWorker.getWorkerSrc()`, please use `PDFWorker.workerSrc` instead.");
              return this.workerSrc;
            };
          }
          class WorkerTransport {
            constructor(messageHandler, loadingTask, networkStream, params) {
              __privateAdd(this, _docStats, null);
              __privateAdd(this, _pageCache, /* @__PURE__ */ new Map());
              __privateAdd(this, _pagePromises, /* @__PURE__ */ new Map());
              __privateAdd(this, _metadataPromise, null);
              this.messageHandler = messageHandler;
              this.loadingTask = loadingTask;
              this.commonObjs = new PDFObjects();
              this.fontLoader = new _font_loader.FontLoader({
                docId: loadingTask.docId,
                onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
                ownerDocument: params.ownerDocument,
                styleElement: params.styleElement
              });
              this._params = params;
              if (!params.useWorkerFetch) {
                this.CMapReaderFactory = new params.CMapReaderFactory({
                  baseUrl: params.cMapUrl,
                  isCompressed: params.cMapPacked
                });
                this.StandardFontDataFactory = new params.StandardFontDataFactory({
                  baseUrl: params.standardFontDataUrl
                });
              }
              this.destroyed = false;
              this.destroyCapability = null;
              this._passwordCapability = null;
              this._networkStream = networkStream;
              this._fullReader = null;
              this._lastProgress = null;
              this.downloadInfoCapability = (0, _util.createPromiseCapability)();
              this.setupMessageHandler();
            }
            get annotationStorage() {
              return (0, _util.shadow)(this, "annotationStorage", new _annotation_storage.AnnotationStorage());
            }
            get stats() {
              return __privateGet(this, _docStats);
            }
            getRenderingIntent(intent, annotationMode = _util.AnnotationMode.ENABLE, isOpList = false) {
              let renderingIntent = _util.RenderingIntentFlag.DISPLAY;
              let annotationHash = "";
              switch (intent) {
                case "any":
                  renderingIntent = _util.RenderingIntentFlag.ANY;
                  break;
                case "display":
                  break;
                case "print":
                  renderingIntent = _util.RenderingIntentFlag.PRINT;
                  break;
                default:
                  (0, _util.warn)(`getRenderingIntent - invalid intent: ${intent}`);
              }
              switch (annotationMode) {
                case _util.AnnotationMode.DISABLE:
                  renderingIntent += _util.RenderingIntentFlag.ANNOTATIONS_DISABLE;
                  break;
                case _util.AnnotationMode.ENABLE:
                  break;
                case _util.AnnotationMode.ENABLE_FORMS:
                  renderingIntent += _util.RenderingIntentFlag.ANNOTATIONS_FORMS;
                  break;
                case _util.AnnotationMode.ENABLE_STORAGE:
                  renderingIntent += _util.RenderingIntentFlag.ANNOTATIONS_STORAGE;
                  annotationHash = this.annotationStorage.hash;
                  break;
                default:
                  (0, _util.warn)(`getRenderingIntent - invalid annotationMode: ${annotationMode}`);
              }
              if (isOpList) {
                renderingIntent += _util.RenderingIntentFlag.OPLIST;
              }
              return {
                renderingIntent,
                cacheKey: `${renderingIntent}_${annotationHash}`
              };
            }
            destroy() {
              if (this.destroyCapability) {
                return this.destroyCapability.promise;
              }
              this.destroyed = true;
              this.destroyCapability = (0, _util.createPromiseCapability)();
              if (this._passwordCapability) {
                this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"));
              }
              const waitOn = [];
              for (const page of __privateGet(this, _pageCache).values()) {
                waitOn.push(page._destroy());
              }
              __privateGet(this, _pageCache).clear();
              __privateGet(this, _pagePromises).clear();
              if (this.hasOwnProperty("annotationStorage")) {
                this.annotationStorage.resetModified();
              }
              const terminated = this.messageHandler.sendWithPromise("Terminate", null);
              waitOn.push(terminated);
              Promise.all(waitOn).then(() => {
                this.commonObjs.clear();
                this.fontLoader.clear();
                __privateSet(this, _metadataPromise, null);
                this._getFieldObjectsPromise = null;
                this._hasJSActionsPromise = null;
                if (this._networkStream) {
                  this._networkStream.cancelAllRequests(new _util.AbortException("Worker was terminated."));
                }
                if (this.messageHandler) {
                  this.messageHandler.destroy();
                  this.messageHandler = null;
                }
                this.destroyCapability.resolve();
              }, this.destroyCapability.reject);
              return this.destroyCapability.promise;
            }
            setupMessageHandler() {
              const {
                messageHandler,
                loadingTask
              } = this;
              messageHandler.on("GetReader", (data, sink) => {
                (0, _util.assert)(this._networkStream, "GetReader - no `IPDFStream` instance available.");
                this._fullReader = this._networkStream.getFullReader();
                this._fullReader.onProgress = (evt) => {
                  this._lastProgress = {
                    loaded: evt.loaded,
                    total: evt.total
                  };
                };
                sink.onPull = () => {
                  this._fullReader.read().then(function({
                    value,
                    done
                  }) {
                    if (done) {
                      sink.close();
                      return;
                    }
                    (0, _util.assert)((0, _util.isArrayBuffer)(value), "GetReader - expected an ArrayBuffer.");
                    sink.enqueue(new Uint8Array(value), 1, [value]);
                  }).catch((reason) => {
                    sink.error(reason);
                  });
                };
                sink.onCancel = (reason) => {
                  this._fullReader.cancel(reason);
                  sink.ready.catch((readyReason) => {
                    if (this.destroyed) {
                      return;
                    }
                    throw readyReason;
                  });
                };
              });
              messageHandler.on("ReaderHeadersReady", (data) => {
                const headersCapability = (0, _util.createPromiseCapability)();
                const fullReader = this._fullReader;
                fullReader.headersReady.then(() => {
                  var _a2;
                  if (!fullReader.isStreamingSupported || !fullReader.isRangeSupported) {
                    if (this._lastProgress) {
                      (_a2 = loadingTask.onProgress) == null ? void 0 : _a2.call(loadingTask, this._lastProgress);
                    }
                    fullReader.onProgress = (evt) => {
                      var _a3;
                      (_a3 = loadingTask.onProgress) == null ? void 0 : _a3.call(loadingTask, {
                        loaded: evt.loaded,
                        total: evt.total
                      });
                    };
                  }
                  headersCapability.resolve({
                    isStreamingSupported: fullReader.isStreamingSupported,
                    isRangeSupported: fullReader.isRangeSupported,
                    contentLength: fullReader.contentLength
                  });
                }, headersCapability.reject);
                return headersCapability.promise;
              });
              messageHandler.on("GetRangeReader", (data, sink) => {
                (0, _util.assert)(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
                const rangeReader = this._networkStream.getRangeReader(data.begin, data.end);
                if (!rangeReader) {
                  sink.close();
                  return;
                }
                sink.onPull = () => {
                  rangeReader.read().then(function({
                    value,
                    done
                  }) {
                    if (done) {
                      sink.close();
                      return;
                    }
                    (0, _util.assert)((0, _util.isArrayBuffer)(value), "GetRangeReader - expected an ArrayBuffer.");
                    sink.enqueue(new Uint8Array(value), 1, [value]);
                  }).catch((reason) => {
                    sink.error(reason);
                  });
                };
                sink.onCancel = (reason) => {
                  rangeReader.cancel(reason);
                  sink.ready.catch((readyReason) => {
                    if (this.destroyed) {
                      return;
                    }
                    throw readyReason;
                  });
                };
              });
              messageHandler.on("GetDoc", ({
                pdfInfo
              }) => {
                this._numPages = pdfInfo.numPages;
                this._htmlForXfa = pdfInfo.htmlForXfa;
                delete pdfInfo.htmlForXfa;
                loadingTask._capability.resolve(new PDFDocumentProxy(pdfInfo, this));
              });
              messageHandler.on("DocException", function(ex) {
                let reason;
                switch (ex.name) {
                  case "PasswordException":
                    reason = new _util.PasswordException(ex.message, ex.code);
                    break;
                  case "InvalidPDFException":
                    reason = new _util.InvalidPDFException(ex.message);
                    break;
                  case "MissingPDFException":
                    reason = new _util.MissingPDFException(ex.message);
                    break;
                  case "UnexpectedResponseException":
                    reason = new _util.UnexpectedResponseException(ex.message, ex.status);
                    break;
                  case "UnknownErrorException":
                    reason = new _util.UnknownErrorException(ex.message, ex.details);
                    break;
                  default:
                    (0, _util.unreachable)("DocException - expected a valid Error.");
                }
                loadingTask._capability.reject(reason);
              });
              messageHandler.on("PasswordRequest", (exception) => {
                this._passwordCapability = (0, _util.createPromiseCapability)();
                if (loadingTask.onPassword) {
                  const updatePassword = (password) => {
                    if (password instanceof Error) {
                      this._passwordCapability.reject(password);
                    } else {
                      this._passwordCapability.resolve({
                        password
                      });
                    }
                  };
                  try {
                    loadingTask.onPassword(updatePassword, exception.code);
                  } catch (ex) {
                    this._passwordCapability.reject(ex);
                  }
                } else {
                  this._passwordCapability.reject(new _util.PasswordException(exception.message, exception.code));
                }
                return this._passwordCapability.promise;
              });
              messageHandler.on("DataLoaded", (data) => {
                var _a2;
                (_a2 = loadingTask.onProgress) == null ? void 0 : _a2.call(loadingTask, {
                  loaded: data.length,
                  total: data.length
                });
                this.downloadInfoCapability.resolve(data);
              });
              messageHandler.on("StartRenderPage", (data) => {
                if (this.destroyed) {
                  return;
                }
                const page = __privateGet(this, _pageCache).get(data.pageIndex);
                page._startRenderPage(data.transparency, data.cacheKey);
              });
              messageHandler.on("commonobj", ([id, type, exportedData]) => {
                var _a2;
                if (this.destroyed) {
                  return;
                }
                if (this.commonObjs.has(id)) {
                  return;
                }
                switch (type) {
                  case "Font":
                    const params = this._params;
                    if ("error" in exportedData) {
                      const exportedError = exportedData.error;
                      (0, _util.warn)(`Error during font loading: ${exportedError}`);
                      this.commonObjs.resolve(id, exportedError);
                      break;
                    }
                    let fontRegistry = null;
                    if (params.pdfBug && ((_a2 = globalThis.FontInspector) == null ? void 0 : _a2.enabled)) {
                      fontRegistry = {
                        registerFont(font2, url) {
                          globalThis.FontInspector.fontAdded(font2, url);
                        }
                      };
                    }
                    const font = new _font_loader.FontFaceObject(exportedData, {
                      isEvalSupported: params.isEvalSupported,
                      disableFontFace: params.disableFontFace,
                      ignoreErrors: params.ignoreErrors,
                      onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
                      fontRegistry
                    });
                    this.fontLoader.bind(font).catch((reason) => {
                      return messageHandler.sendWithPromise("FontFallback", {
                        id
                      });
                    }).finally(() => {
                      if (!params.fontExtraProperties && font.data) {
                        font.data = null;
                      }
                      this.commonObjs.resolve(id, font);
                    });
                    break;
                  case "FontPath":
                  case "Image":
                    this.commonObjs.resolve(id, exportedData);
                    break;
                  default:
                    throw new Error(`Got unknown common object type ${type}`);
                }
              });
              messageHandler.on("obj", ([id, pageIndex, type, imageData]) => {
                var _a2;
                if (this.destroyed) {
                  return;
                }
                const pageProxy = __privateGet(this, _pageCache).get(pageIndex);
                if (pageProxy.objs.has(id)) {
                  return;
                }
                switch (type) {
                  case "Image":
                    pageProxy.objs.resolve(id, imageData);
                    const MAX_IMAGE_SIZE_TO_STORE = 8e6;
                    if (imageData) {
                      let length;
                      if (imageData.bitmap) {
                        const {
                          bitmap,
                          width,
                          height
                        } = imageData;
                        length = width * height * 4;
                        pageProxy._bitmaps.add(bitmap);
                      } else {
                        length = ((_a2 = imageData.data) == null ? void 0 : _a2.length) || 0;
                      }
                      if (length > MAX_IMAGE_SIZE_TO_STORE) {
                        pageProxy.cleanupAfterRender = true;
                      }
                    }
                    break;
                  case "Pattern":
                    pageProxy.objs.resolve(id, imageData);
                    break;
                  default:
                    throw new Error(`Got unknown object type ${type}`);
                }
              });
              messageHandler.on("DocProgress", (data) => {
                var _a2;
                if (this.destroyed) {
                  return;
                }
                (_a2 = loadingTask.onProgress) == null ? void 0 : _a2.call(loadingTask, {
                  loaded: data.loaded,
                  total: data.total
                });
              });
              messageHandler.on("DocStats", (data) => {
                if (this.destroyed) {
                  return;
                }
                __privateSet(this, _docStats, Object.freeze({
                  streamTypes: Object.freeze(data.streamTypes),
                  fontTypes: Object.freeze(data.fontTypes)
                }));
              });
              messageHandler.on("UnsupportedFeature", this._onUnsupportedFeature.bind(this));
              messageHandler.on("FetchBuiltInCMap", (data) => {
                if (this.destroyed) {
                  return Promise.reject(new Error("Worker was destroyed."));
                }
                if (!this.CMapReaderFactory) {
                  return Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."));
                }
                return this.CMapReaderFactory.fetch(data);
              });
              messageHandler.on("FetchStandardFontData", (data) => {
                if (this.destroyed) {
                  return Promise.reject(new Error("Worker was destroyed."));
                }
                if (!this.StandardFontDataFactory) {
                  return Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter."));
                }
                return this.StandardFontDataFactory.fetch(data);
              });
            }
            _onUnsupportedFeature({
              featureId
            }) {
              var _a2, _b;
              if (this.destroyed) {
                return;
              }
              (_b = (_a2 = this.loadingTask).onUnsupportedFeature) == null ? void 0 : _b.call(_a2, featureId);
            }
            getData() {
              return this.messageHandler.sendWithPromise("GetData", null);
            }
            getPage(pageNumber) {
              if (!Number.isInteger(pageNumber) || pageNumber <= 0 || pageNumber > this._numPages) {
                return Promise.reject(new Error("Invalid page request."));
              }
              const pageIndex = pageNumber - 1, cachedPromise = __privateGet(this, _pagePromises).get(pageIndex);
              if (cachedPromise) {
                return cachedPromise;
              }
              const promise = this.messageHandler.sendWithPromise("GetPage", {
                pageIndex
              }).then((pageInfo) => {
                if (this.destroyed) {
                  throw new Error("Transport destroyed");
                }
                const page = new PDFPageProxy(pageIndex, pageInfo, this, this._params.ownerDocument, this._params.pdfBug);
                __privateGet(this, _pageCache).set(pageIndex, page);
                return page;
              });
              __privateGet(this, _pagePromises).set(pageIndex, promise);
              return promise;
            }
            getPageIndex(ref) {
              if (typeof ref !== "object" || ref === null || !Number.isInteger(ref.num) || ref.num < 0 || !Number.isInteger(ref.gen) || ref.gen < 0) {
                return Promise.reject(new Error("Invalid pageIndex request."));
              }
              return this.messageHandler.sendWithPromise("GetPageIndex", {
                num: ref.num,
                gen: ref.gen
              });
            }
            getAnnotations(pageIndex, intent) {
              return this.messageHandler.sendWithPromise("GetAnnotations", {
                pageIndex,
                intent
              });
            }
            saveDocument() {
              var _a2, _b;
              return this.messageHandler.sendWithPromise("SaveDocument", {
                isPureXfa: !!this._htmlForXfa,
                numPages: this._numPages,
                annotationStorage: this.annotationStorage.serializable,
                filename: (_b = (_a2 = this._fullReader) == null ? void 0 : _a2.filename) != null ? _b : null
              }).finally(() => {
                this.annotationStorage.resetModified();
              });
            }
            getFieldObjects() {
              return this._getFieldObjectsPromise || (this._getFieldObjectsPromise = this.messageHandler.sendWithPromise("GetFieldObjects", null));
            }
            hasJSActions() {
              return this._hasJSActionsPromise || (this._hasJSActionsPromise = this.messageHandler.sendWithPromise("HasJSActions", null));
            }
            getCalculationOrderIds() {
              return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
            }
            getDestinations() {
              return this.messageHandler.sendWithPromise("GetDestinations", null);
            }
            getDestination(id) {
              if (typeof id !== "string") {
                return Promise.reject(new Error("Invalid destination request."));
              }
              return this.messageHandler.sendWithPromise("GetDestination", {
                id
              });
            }
            getPageLabels() {
              return this.messageHandler.sendWithPromise("GetPageLabels", null);
            }
            getPageLayout() {
              return this.messageHandler.sendWithPromise("GetPageLayout", null);
            }
            getPageMode() {
              return this.messageHandler.sendWithPromise("GetPageMode", null);
            }
            getViewerPreferences() {
              return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
            }
            getOpenAction() {
              return this.messageHandler.sendWithPromise("GetOpenAction", null);
            }
            getAttachments() {
              return this.messageHandler.sendWithPromise("GetAttachments", null);
            }
            getJavaScript() {
              return this.messageHandler.sendWithPromise("GetJavaScript", null);
            }
            getDocJSActions() {
              return this.messageHandler.sendWithPromise("GetDocJSActions", null);
            }
            getPageJSActions(pageIndex) {
              return this.messageHandler.sendWithPromise("GetPageJSActions", {
                pageIndex
              });
            }
            getStructTree(pageIndex) {
              return this.messageHandler.sendWithPromise("GetStructTree", {
                pageIndex
              });
            }
            getOutline() {
              return this.messageHandler.sendWithPromise("GetOutline", null);
            }
            getOptionalContentConfig() {
              return this.messageHandler.sendWithPromise("GetOptionalContentConfig", null).then((results) => {
                return new _optional_content_config.OptionalContentConfig(results);
              });
            }
            getPermissions() {
              return this.messageHandler.sendWithPromise("GetPermissions", null);
            }
            getMetadata() {
              return __privateGet(this, _metadataPromise) || __privateSet(this, _metadataPromise, this.messageHandler.sendWithPromise("GetMetadata", null).then((results) => {
                var _a2, _b, _c, _d;
                return {
                  info: results[0],
                  metadata: results[1] ? new _metadata.Metadata(results[1]) : null,
                  contentDispositionFilename: (_b = (_a2 = this._fullReader) == null ? void 0 : _a2.filename) != null ? _b : null,
                  contentLength: (_d = (_c = this._fullReader) == null ? void 0 : _c.contentLength) != null ? _d : null
                };
              }));
            }
            getMarkInfo() {
              return this.messageHandler.sendWithPromise("GetMarkInfo", null);
            }
            async startCleanup(keepLoadedFonts = false) {
              await this.messageHandler.sendWithPromise("Cleanup", null);
              if (this.destroyed) {
                return;
              }
              for (const page of __privateGet(this, _pageCache).values()) {
                const cleanupSuccessful = page.cleanup();
                if (!cleanupSuccessful) {
                  throw new Error(`startCleanup: Page ${page.pageNumber} is currently rendering.`);
                }
              }
              this.commonObjs.clear();
              if (!keepLoadedFonts) {
                this.fontLoader.clear();
              }
              __privateSet(this, _metadataPromise, null);
              this._getFieldObjectsPromise = null;
              this._hasJSActionsPromise = null;
            }
            get loadingParams() {
              const params = this._params;
              return (0, _util.shadow)(this, "loadingParams", {
                disableAutoFetch: params.disableAutoFetch,
                enableXfa: params.enableXfa
              });
            }
          }
          _docStats = new WeakMap();
          _pageCache = new WeakMap();
          _pagePromises = new WeakMap();
          _metadataPromise = new WeakMap();
          class PDFObjects {
            constructor() {
              __privateAdd(this, _ensureObj);
              __privateAdd(this, _objs, /* @__PURE__ */ Object.create(null));
            }
            get(objId, callback = null) {
              if (callback) {
                const obj2 = __privateMethod(this, _ensureObj, ensureObj_fn).call(this, objId);
                obj2.capability.promise.then(() => callback(obj2.data));
                return null;
              }
              const obj = __privateGet(this, _objs)[objId];
              if (!(obj == null ? void 0 : obj.capability.settled)) {
                throw new Error(`Requesting object that isn't resolved yet ${objId}.`);
              }
              return obj.data;
            }
            has(objId) {
              const obj = __privateGet(this, _objs)[objId];
              return (obj == null ? void 0 : obj.capability.settled) || false;
            }
            resolve(objId, data = null) {
              const obj = __privateMethod(this, _ensureObj, ensureObj_fn).call(this, objId);
              obj.data = data;
              obj.capability.resolve();
            }
            clear() {
              __privateSet(this, _objs, /* @__PURE__ */ Object.create(null));
            }
          }
          _objs = new WeakMap();
          _ensureObj = new WeakSet();
          ensureObj_fn = function(objId) {
            const obj = __privateGet(this, _objs)[objId];
            if (obj) {
              return obj;
            }
            return __privateGet(this, _objs)[objId] = {
              capability: (0, _util.createPromiseCapability)(),
              data: null
            };
          };
          class RenderTask {
            constructor(internalRenderTask) {
              this._internalRenderTask = internalRenderTask;
              this.onContinue = null;
            }
            get promise() {
              return this._internalRenderTask.capability.promise;
            }
            cancel() {
              this._internalRenderTask.cancel();
            }
          }
          exports.RenderTask = RenderTask;
          const _InternalRenderTask = class {
            constructor({
              callback,
              params,
              objs,
              commonObjs,
              annotationCanvasMap,
              operatorList,
              pageIndex,
              canvasFactory,
              useRequestAnimationFrame = false,
              pdfBug = false,
              pageColors = null
            }) {
              this.callback = callback;
              this.params = params;
              this.objs = objs;
              this.commonObjs = commonObjs;
              this.annotationCanvasMap = annotationCanvasMap;
              this.operatorListIdx = null;
              this.operatorList = operatorList;
              this._pageIndex = pageIndex;
              this.canvasFactory = canvasFactory;
              this._pdfBug = pdfBug;
              this.pageColors = pageColors;
              this.running = false;
              this.graphicsReadyCallback = null;
              this.graphicsReady = false;
              this._useRequestAnimationFrame = useRequestAnimationFrame === true && typeof window !== "undefined";
              this.cancelled = false;
              this.capability = (0, _util.createPromiseCapability)();
              this.task = new RenderTask(this);
              this._cancelBound = this.cancel.bind(this);
              this._continueBound = this._continue.bind(this);
              this._scheduleNextBound = this._scheduleNext.bind(this);
              this._nextBound = this._next.bind(this);
              this._canvas = params.canvasContext.canvas;
            }
            get completed() {
              return this.capability.promise.catch(function() {
              });
            }
            initializeGraphics({
              transparency = false,
              optionalContentConfig
            }) {
              var _a2;
              if (this.cancelled) {
                return;
              }
              if (this._canvas) {
                if (__privateGet(_InternalRenderTask, _canvasInUse).has(this._canvas)) {
                  throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
                }
                __privateGet(_InternalRenderTask, _canvasInUse).add(this._canvas);
              }
              if (this._pdfBug && ((_a2 = globalThis.StepperManager) == null ? void 0 : _a2.enabled)) {
                this.stepper = globalThis.StepperManager.create(this._pageIndex);
                this.stepper.init(this.operatorList);
                this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
              }
              const {
                canvasContext,
                viewport,
                transform,
                imageLayer,
                background
              } = this.params;
              this.gfx = new _canvas.CanvasGraphics(canvasContext, this.commonObjs, this.objs, this.canvasFactory, imageLayer, optionalContentConfig, this.annotationCanvasMap, this.pageColors);
              this.gfx.beginDrawing({
                transform,
                viewport,
                transparency,
                background
              });
              this.operatorListIdx = 0;
              this.graphicsReady = true;
              if (this.graphicsReadyCallback) {
                this.graphicsReadyCallback();
              }
            }
            cancel(error = null) {
              this.running = false;
              this.cancelled = true;
              if (this.gfx) {
                this.gfx.endDrawing();
              }
              if (this._canvas) {
                __privateGet(_InternalRenderTask, _canvasInUse).delete(this._canvas);
              }
              this.callback(error || new _display_utils.RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, "canvas"));
            }
            operatorListChanged() {
              if (!this.graphicsReady) {
                if (!this.graphicsReadyCallback) {
                  this.graphicsReadyCallback = this._continueBound;
                }
                return;
              }
              if (this.stepper) {
                this.stepper.updateOperatorList(this.operatorList);
              }
              if (this.running) {
                return;
              }
              this._continue();
            }
            _continue() {
              this.running = true;
              if (this.cancelled) {
                return;
              }
              if (this.task.onContinue) {
                this.task.onContinue(this._scheduleNextBound);
              } else {
                this._scheduleNext();
              }
            }
            _scheduleNext() {
              if (this._useRequestAnimationFrame) {
                window.requestAnimationFrame(() => {
                  this._nextBound().catch(this._cancelBound);
                });
              } else {
                Promise.resolve().then(this._nextBound).catch(this._cancelBound);
              }
            }
            async _next() {
              if (this.cancelled) {
                return;
              }
              this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper);
              if (this.operatorListIdx === this.operatorList.argsArray.length) {
                this.running = false;
                if (this.operatorList.lastChunk) {
                  this.gfx.endDrawing();
                  if (this._canvas) {
                    __privateGet(_InternalRenderTask, _canvasInUse).delete(this._canvas);
                  }
                  this.callback();
                }
              }
            }
          };
          let InternalRenderTask = _InternalRenderTask;
          _canvasInUse = new WeakMap();
          __privateAdd(InternalRenderTask, _canvasInUse, /* @__PURE__ */ new WeakSet());
          const version = "2.14.305";
          exports.version = version;
          const build = "eaaa8b4ad";
          exports.build = build;
        },
        (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.StatTimer = exports2.RenderingCancelledException = exports2.PixelsPerInch = exports2.PageViewport = exports2.PDFDateString = exports2.DOMStandardFontDataFactory = exports2.DOMSVGFactory = exports2.DOMCanvasFactory = exports2.DOMCMapReaderFactory = void 0;
          exports2.deprecated = deprecated;
          exports2.getFilenameFromUrl = getFilenameFromUrl;
          exports2.getPdfFilenameFromUrl = getPdfFilenameFromUrl;
          exports2.getXfaPageViewport = getXfaPageViewport;
          exports2.isDataScheme = isDataScheme;
          exports2.isPdfFile = isPdfFile;
          exports2.isValidFetchUrl = isValidFetchUrl;
          exports2.loadScript = loadScript;
          var _base_factory = __w_pdfjs_require__2(6);
          var _util2 = __w_pdfjs_require__2(1);
          const SVG_NS = "http://www.w3.org/2000/svg";
          const _PixelsPerInch = class {
          };
          let PixelsPerInch = _PixelsPerInch;
          __publicField(PixelsPerInch, "CSS", 96);
          __publicField(PixelsPerInch, "PDF", 72);
          __publicField(PixelsPerInch, "PDF_TO_CSS_UNITS", _PixelsPerInch.CSS / _PixelsPerInch.PDF);
          exports2.PixelsPerInch = PixelsPerInch;
          class DOMCanvasFactory extends _base_factory.BaseCanvasFactory {
            constructor({
              ownerDocument = globalThis.document
            } = {}) {
              super();
              this._document = ownerDocument;
            }
            _createCanvas(width, height) {
              const canvas = this._document.createElement("canvas");
              canvas.width = width;
              canvas.height = height;
              return canvas;
            }
          }
          exports2.DOMCanvasFactory = DOMCanvasFactory;
          async function fetchData(url, asTypedArray = false) {
            if (isValidFetchUrl(url, document.baseURI)) {
              const response = await fetch(url);
              if (!response.ok) {
                throw new Error(response.statusText);
              }
              return asTypedArray ? new Uint8Array(await response.arrayBuffer()) : (0, _util2.stringToBytes)(await response.text());
            }
            return new Promise((resolve, reject) => {
              const request = new XMLHttpRequest();
              request.open("GET", url, true);
              if (asTypedArray) {
                request.responseType = "arraybuffer";
              }
              request.onreadystatechange = () => {
                if (request.readyState !== XMLHttpRequest.DONE) {
                  return;
                }
                if (request.status === 200 || request.status === 0) {
                  let data;
                  if (asTypedArray && request.response) {
                    data = new Uint8Array(request.response);
                  } else if (!asTypedArray && request.responseText) {
                    data = (0, _util2.stringToBytes)(request.responseText);
                  }
                  if (data) {
                    resolve(data);
                    return;
                  }
                }
                reject(new Error(request.statusText));
              };
              request.send(null);
            });
          }
          class DOMCMapReaderFactory extends _base_factory.BaseCMapReaderFactory {
            _fetchData(url, compressionType) {
              return fetchData(url, this.isCompressed).then((data) => {
                return {
                  cMapData: data,
                  compressionType
                };
              });
            }
          }
          exports2.DOMCMapReaderFactory = DOMCMapReaderFactory;
          class DOMStandardFontDataFactory extends _base_factory.BaseStandardFontDataFactory {
            _fetchData(url) {
              return fetchData(url, true);
            }
          }
          exports2.DOMStandardFontDataFactory = DOMStandardFontDataFactory;
          class DOMSVGFactory extends _base_factory.BaseSVGFactory {
            _createSVG(type) {
              return document.createElementNS(SVG_NS, type);
            }
          }
          exports2.DOMSVGFactory = DOMSVGFactory;
          class PageViewport {
            constructor({
              viewBox,
              scale: scale2,
              rotation,
              offsetX = 0,
              offsetY = 0,
              dontFlip = false
            }) {
              this.viewBox = viewBox;
              this.scale = scale2;
              this.rotation = rotation;
              this.offsetX = offsetX;
              this.offsetY = offsetY;
              const centerX = (viewBox[2] + viewBox[0]) / 2;
              const centerY = (viewBox[3] + viewBox[1]) / 2;
              let rotateA, rotateB, rotateC, rotateD;
              rotation %= 360;
              if (rotation < 0) {
                rotation += 360;
              }
              switch (rotation) {
                case 180:
                  rotateA = -1;
                  rotateB = 0;
                  rotateC = 0;
                  rotateD = 1;
                  break;
                case 90:
                  rotateA = 0;
                  rotateB = 1;
                  rotateC = 1;
                  rotateD = 0;
                  break;
                case 270:
                  rotateA = 0;
                  rotateB = -1;
                  rotateC = -1;
                  rotateD = 0;
                  break;
                case 0:
                  rotateA = 1;
                  rotateB = 0;
                  rotateC = 0;
                  rotateD = -1;
                  break;
                default:
                  throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
              }
              if (dontFlip) {
                rotateC = -rotateC;
                rotateD = -rotateD;
              }
              let offsetCanvasX, offsetCanvasY;
              let width, height;
              if (rotateA === 0) {
                offsetCanvasX = Math.abs(centerY - viewBox[1]) * scale2 + offsetX;
                offsetCanvasY = Math.abs(centerX - viewBox[0]) * scale2 + offsetY;
                width = Math.abs(viewBox[3] - viewBox[1]) * scale2;
                height = Math.abs(viewBox[2] - viewBox[0]) * scale2;
              } else {
                offsetCanvasX = Math.abs(centerX - viewBox[0]) * scale2 + offsetX;
                offsetCanvasY = Math.abs(centerY - viewBox[1]) * scale2 + offsetY;
                width = Math.abs(viewBox[2] - viewBox[0]) * scale2;
                height = Math.abs(viewBox[3] - viewBox[1]) * scale2;
              }
              this.transform = [rotateA * scale2, rotateB * scale2, rotateC * scale2, rotateD * scale2, offsetCanvasX - rotateA * scale2 * centerX - rotateC * scale2 * centerY, offsetCanvasY - rotateB * scale2 * centerX - rotateD * scale2 * centerY];
              this.width = width;
              this.height = height;
            }
            clone({
              scale: scale2 = this.scale,
              rotation = this.rotation,
              offsetX = this.offsetX,
              offsetY = this.offsetY,
              dontFlip = false
            } = {}) {
              return new PageViewport({
                viewBox: this.viewBox.slice(),
                scale: scale2,
                rotation,
                offsetX,
                offsetY,
                dontFlip
              });
            }
            convertToViewportPoint(x, y) {
              return _util2.Util.applyTransform([x, y], this.transform);
            }
            convertToViewportRectangle(rect) {
              const topLeft = _util2.Util.applyTransform([rect[0], rect[1]], this.transform);
              const bottomRight = _util2.Util.applyTransform([rect[2], rect[3]], this.transform);
              return [topLeft[0], topLeft[1], bottomRight[0], bottomRight[1]];
            }
            convertToPdfPoint(x, y) {
              return _util2.Util.applyInverseTransform([x, y], this.transform);
            }
          }
          exports2.PageViewport = PageViewport;
          class RenderingCancelledException extends _util2.BaseException {
            constructor(msg, type) {
              super(msg, "RenderingCancelledException");
              this.type = type;
            }
          }
          exports2.RenderingCancelledException = RenderingCancelledException;
          function isDataScheme(url) {
            const ii = url.length;
            let i = 0;
            while (i < ii && url[i].trim() === "") {
              i++;
            }
            return url.substring(i, i + 5).toLowerCase() === "data:";
          }
          function isPdfFile(filename) {
            return typeof filename === "string" && /\.pdf$/i.test(filename);
          }
          function getFilenameFromUrl(url) {
            const anchor = url.indexOf("#");
            const query = url.indexOf("?");
            const end = Math.min(anchor > 0 ? anchor : url.length, query > 0 ? query : url.length);
            return url.substring(url.lastIndexOf("/", end) + 1, end);
          }
          function getPdfFilenameFromUrl(url, defaultFilename = "document.pdf") {
            if (typeof url !== "string") {
              return defaultFilename;
            }
            if (isDataScheme(url)) {
              (0, _util2.warn)('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.');
              return defaultFilename;
            }
            const reURI = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/;
            const reFilename = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i;
            const splitURI = reURI.exec(url);
            let suggestedFilename = reFilename.exec(splitURI[1]) || reFilename.exec(splitURI[2]) || reFilename.exec(splitURI[3]);
            if (suggestedFilename) {
              suggestedFilename = suggestedFilename[0];
              if (suggestedFilename.includes("%")) {
                try {
                  suggestedFilename = reFilename.exec(decodeURIComponent(suggestedFilename))[0];
                } catch (ex) {
                }
              }
            }
            return suggestedFilename || defaultFilename;
          }
          class StatTimer {
            constructor() {
              this.started = /* @__PURE__ */ Object.create(null);
              this.times = [];
            }
            time(name) {
              if (name in this.started) {
                (0, _util2.warn)(`Timer is already running for ${name}`);
              }
              this.started[name] = Date.now();
            }
            timeEnd(name) {
              if (!(name in this.started)) {
                (0, _util2.warn)(`Timer has not been started for ${name}`);
              }
              this.times.push({
                name,
                start: this.started[name],
                end: Date.now()
              });
              delete this.started[name];
            }
            toString() {
              const outBuf = [];
              let longest = 0;
              for (const time of this.times) {
                const name = time.name;
                if (name.length > longest) {
                  longest = name.length;
                }
              }
              for (const time of this.times) {
                const duration = time.end - time.start;
                outBuf.push(`${time.name.padEnd(longest)} ${duration}ms
`);
              }
              return outBuf.join("");
            }
          }
          exports2.StatTimer = StatTimer;
          function isValidFetchUrl(url, baseUrl) {
            try {
              const {
                protocol
              } = baseUrl ? new URL(url, baseUrl) : new URL(url);
              return protocol === "http:" || protocol === "https:";
            } catch (ex) {
              return false;
            }
          }
          function loadScript(src, removeScriptElement = false) {
            return new Promise((resolve, reject) => {
              const script = document.createElement("script");
              script.src = src;
              script.onload = function(evt) {
                if (removeScriptElement) {
                  script.remove();
                }
                resolve(evt);
              };
              script.onerror = function() {
                reject(new Error(`Cannot load script at: ${script.src}`));
              };
              (document.head || document.documentElement).appendChild(script);
            });
          }
          function deprecated(details) {
            console.log("Deprecated API usage: " + details);
          }
          let pdfDateStringRegex;
          class PDFDateString {
            static toDateObject(input) {
              if (!input || typeof input !== "string") {
                return null;
              }
              if (!pdfDateStringRegex) {
                pdfDateStringRegex = new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?");
              }
              const matches2 = pdfDateStringRegex.exec(input);
              if (!matches2) {
                return null;
              }
              const year = parseInt(matches2[1], 10);
              let month = parseInt(matches2[2], 10);
              month = month >= 1 && month <= 12 ? month - 1 : 0;
              let day = parseInt(matches2[3], 10);
              day = day >= 1 && day <= 31 ? day : 1;
              let hour = parseInt(matches2[4], 10);
              hour = hour >= 0 && hour <= 23 ? hour : 0;
              let minute = parseInt(matches2[5], 10);
              minute = minute >= 0 && minute <= 59 ? minute : 0;
              let second = parseInt(matches2[6], 10);
              second = second >= 0 && second <= 59 ? second : 0;
              const universalTimeRelation = matches2[7] || "Z";
              let offsetHour = parseInt(matches2[8], 10);
              offsetHour = offsetHour >= 0 && offsetHour <= 23 ? offsetHour : 0;
              let offsetMinute = parseInt(matches2[9], 10) || 0;
              offsetMinute = offsetMinute >= 0 && offsetMinute <= 59 ? offsetMinute : 0;
              if (universalTimeRelation === "-") {
                hour += offsetHour;
                minute += offsetMinute;
              } else if (universalTimeRelation === "+") {
                hour -= offsetHour;
                minute -= offsetMinute;
              }
              return new Date(Date.UTC(year, month, day, hour, minute, second));
            }
          }
          exports2.PDFDateString = PDFDateString;
          function getXfaPageViewport(xfaPage, {
            scale: scale2 = 1,
            rotation = 0
          }) {
            const {
              width,
              height
            } = xfaPage.attributes.style;
            const viewBox = [0, 0, parseInt(width), parseInt(height)];
            return new PageViewport({
              viewBox,
              scale: scale2,
              rotation
            });
          }
        },
        (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.BaseStandardFontDataFactory = exports2.BaseSVGFactory = exports2.BaseCanvasFactory = exports2.BaseCMapReaderFactory = void 0;
          var _util2 = __w_pdfjs_require__2(1);
          class BaseCanvasFactory {
            constructor() {
              if (this.constructor === BaseCanvasFactory) {
                (0, _util2.unreachable)("Cannot initialize BaseCanvasFactory.");
              }
            }
            create(width, height) {
              if (width <= 0 || height <= 0) {
                throw new Error("Invalid canvas size");
              }
              const canvas = this._createCanvas(width, height);
              return {
                canvas,
                context: canvas.getContext("2d")
              };
            }
            reset(canvasAndContext, width, height) {
              if (!canvasAndContext.canvas) {
                throw new Error("Canvas is not specified");
              }
              if (width <= 0 || height <= 0) {
                throw new Error("Invalid canvas size");
              }
              canvasAndContext.canvas.width = width;
              canvasAndContext.canvas.height = height;
            }
            destroy(canvasAndContext) {
              if (!canvasAndContext.canvas) {
                throw new Error("Canvas is not specified");
              }
              canvasAndContext.canvas.width = 0;
              canvasAndContext.canvas.height = 0;
              canvasAndContext.canvas = null;
              canvasAndContext.context = null;
            }
            _createCanvas(width, height) {
              (0, _util2.unreachable)("Abstract method `_createCanvas` called.");
            }
          }
          exports2.BaseCanvasFactory = BaseCanvasFactory;
          class BaseCMapReaderFactory {
            constructor({
              baseUrl = null,
              isCompressed = false
            }) {
              if (this.constructor === BaseCMapReaderFactory) {
                (0, _util2.unreachable)("Cannot initialize BaseCMapReaderFactory.");
              }
              this.baseUrl = baseUrl;
              this.isCompressed = isCompressed;
            }
            async fetch({
              name
            }) {
              if (!this.baseUrl) {
                throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
              }
              if (!name) {
                throw new Error("CMap name must be specified.");
              }
              const url = this.baseUrl + name + (this.isCompressed ? ".bcmap" : "");
              const compressionType = this.isCompressed ? _util2.CMapCompressionType.BINARY : _util2.CMapCompressionType.NONE;
              return this._fetchData(url, compressionType).catch((reason) => {
                throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${url}`);
              });
            }
            _fetchData(url, compressionType) {
              (0, _util2.unreachable)("Abstract method `_fetchData` called.");
            }
          }
          exports2.BaseCMapReaderFactory = BaseCMapReaderFactory;
          class BaseStandardFontDataFactory {
            constructor({
              baseUrl = null
            }) {
              if (this.constructor === BaseStandardFontDataFactory) {
                (0, _util2.unreachable)("Cannot initialize BaseStandardFontDataFactory.");
              }
              this.baseUrl = baseUrl;
            }
            async fetch({
              filename
            }) {
              if (!this.baseUrl) {
                throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
              }
              if (!filename) {
                throw new Error("Font filename must be specified.");
              }
              const url = `${this.baseUrl}${filename}`;
              return this._fetchData(url).catch((reason) => {
                throw new Error(`Unable to load font data at: ${url}`);
              });
            }
            _fetchData(url) {
              (0, _util2.unreachable)("Abstract method `_fetchData` called.");
            }
          }
          exports2.BaseStandardFontDataFactory = BaseStandardFontDataFactory;
          class BaseSVGFactory {
            constructor() {
              if (this.constructor === BaseSVGFactory) {
                (0, _util2.unreachable)("Cannot initialize BaseSVGFactory.");
              }
            }
            create(width, height) {
              if (width <= 0 || height <= 0) {
                throw new Error("Invalid SVG dimensions");
              }
              const svg = this._createSVG("svg:svg");
              svg.setAttribute("version", "1.1");
              svg.setAttribute("width", `${width}px`);
              svg.setAttribute("height", `${height}px`);
              svg.setAttribute("preserveAspectRatio", "none");
              svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
              return svg;
            }
            createElement(type) {
              if (typeof type !== "string") {
                throw new Error("Invalid SVG element type");
              }
              return this._createSVG(type);
            }
            _createSVG(type) {
              (0, _util2.unreachable)("Abstract method `_createSVG` called.");
            }
          }
          exports2.BaseSVGFactory = BaseSVGFactory;
        },
        (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.FontLoader = exports2.FontFaceObject = void 0;
          var _util2 = __w_pdfjs_require__2(1);
          class BaseFontLoader {
            constructor({
              docId,
              onUnsupportedFeature,
              ownerDocument = globalThis.document,
              styleElement = null
            }) {
              if (this.constructor === BaseFontLoader) {
                (0, _util2.unreachable)("Cannot initialize BaseFontLoader.");
              }
              this.docId = docId;
              this._onUnsupportedFeature = onUnsupportedFeature;
              this._document = ownerDocument;
              this.nativeFontFaces = [];
              this.styleElement = null;
            }
            addNativeFontFace(nativeFontFace) {
              this.nativeFontFaces.push(nativeFontFace);
              this._document.fonts.add(nativeFontFace);
            }
            insertRule(rule) {
              let styleElement = this.styleElement;
              if (!styleElement) {
                styleElement = this.styleElement = this._document.createElement("style");
                styleElement.id = `PDFJS_FONT_STYLE_TAG_${this.docId}`;
                this._document.documentElement.getElementsByTagName("head")[0].appendChild(styleElement);
              }
              const styleSheet = styleElement.sheet;
              styleSheet.insertRule(rule, styleSheet.cssRules.length);
            }
            clear() {
              for (const nativeFontFace of this.nativeFontFaces) {
                this._document.fonts.delete(nativeFontFace);
              }
              this.nativeFontFaces.length = 0;
              if (this.styleElement) {
                this.styleElement.remove();
                this.styleElement = null;
              }
            }
            async bind(font) {
              if (font.attached || font.missingFile) {
                return;
              }
              font.attached = true;
              if (this.isFontLoadingAPISupported) {
                const nativeFontFace = font.createNativeFontFace();
                if (nativeFontFace) {
                  this.addNativeFontFace(nativeFontFace);
                  try {
                    await nativeFontFace.loaded;
                  } catch (ex) {
                    this._onUnsupportedFeature({
                      featureId: _util2.UNSUPPORTED_FEATURES.errorFontLoadNative
                    });
                    (0, _util2.warn)(`Failed to load font '${nativeFontFace.family}': '${ex}'.`);
                    font.disableFontFace = true;
                    throw ex;
                  }
                }
                return;
              }
              const rule = font.createFontFaceRule();
              if (rule) {
                this.insertRule(rule);
                if (this.isSyncFontLoadingSupported) {
                  return;
                }
                await new Promise((resolve) => {
                  const request = this._queueLoadingCallback(resolve);
                  this._prepareFontLoadEvent([rule], [font], request);
                });
              }
            }
            _queueLoadingCallback(callback) {
              (0, _util2.unreachable)("Abstract method `_queueLoadingCallback`.");
            }
            get isFontLoadingAPISupported() {
              var _a;
              const hasFonts = !!((_a = this._document) == null ? void 0 : _a.fonts);
              return (0, _util2.shadow)(this, "isFontLoadingAPISupported", hasFonts);
            }
            get isSyncFontLoadingSupported() {
              (0, _util2.unreachable)("Abstract method `isSyncFontLoadingSupported`.");
            }
            get _loadTestFont() {
              (0, _util2.unreachable)("Abstract method `_loadTestFont`.");
            }
            _prepareFontLoadEvent(rules, fontsToLoad, request) {
              (0, _util2.unreachable)("Abstract method `_prepareFontLoadEvent`.");
            }
          }
          let FontLoader;
          exports2.FontLoader = FontLoader;
          {
            exports2.FontLoader = FontLoader = class GenericFontLoader extends BaseFontLoader {
              constructor(params) {
                super(params);
                this.loadingContext = {
                  requests: [],
                  nextRequestId: 0
                };
                this.loadTestFontId = 0;
              }
              get isSyncFontLoadingSupported() {
                let supported = false;
                if (typeof navigator === "undefined") {
                  supported = true;
                } else {
                  const m = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);
                  if ((m == null ? void 0 : m[1]) >= 14) {
                    supported = true;
                  }
                }
                return (0, _util2.shadow)(this, "isSyncFontLoadingSupported", supported);
              }
              _queueLoadingCallback(callback) {
                function completeRequest() {
                  (0, _util2.assert)(!request.done, "completeRequest() cannot be called twice.");
                  request.done = true;
                  while (context.requests.length > 0 && context.requests[0].done) {
                    const otherRequest = context.requests.shift();
                    setTimeout(otherRequest.callback, 0);
                  }
                }
                const context = this.loadingContext;
                const request = {
                  id: `pdfjs-font-loading-${context.nextRequestId++}`,
                  done: false,
                  complete: completeRequest,
                  callback
                };
                context.requests.push(request);
                return request;
              }
              get _loadTestFont() {
                const getLoadTestFont = function() {
                  return atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
                };
                return (0, _util2.shadow)(this, "_loadTestFont", getLoadTestFont());
              }
              _prepareFontLoadEvent(rules, fonts, request) {
                function int32(data2, offset) {
                  return data2.charCodeAt(offset) << 24 | data2.charCodeAt(offset + 1) << 16 | data2.charCodeAt(offset + 2) << 8 | data2.charCodeAt(offset + 3) & 255;
                }
                function spliceString(s, offset, remove, insert) {
                  const chunk1 = s.substring(0, offset);
                  const chunk2 = s.substring(offset + remove);
                  return chunk1 + insert + chunk2;
                }
                let i, ii;
                const canvas = this._document.createElement("canvas");
                canvas.width = 1;
                canvas.height = 1;
                const ctx = canvas.getContext("2d");
                let called = 0;
                function isFontReady(name, callback) {
                  called++;
                  if (called > 30) {
                    (0, _util2.warn)("Load test font never loaded.");
                    callback();
                    return;
                  }
                  ctx.font = "30px " + name;
                  ctx.fillText(".", 0, 20);
                  const imageData = ctx.getImageData(0, 0, 1, 1);
                  if (imageData.data[3] > 0) {
                    callback();
                    return;
                  }
                  setTimeout(isFontReady.bind(null, name, callback));
                }
                const loadTestFontId = `lt${Date.now()}${this.loadTestFontId++}`;
                let data = this._loadTestFont;
                const COMMENT_OFFSET = 976;
                data = spliceString(data, COMMENT_OFFSET, loadTestFontId.length, loadTestFontId);
                const CFF_CHECKSUM_OFFSET = 16;
                const XXXX_VALUE = 1482184792;
                let checksum = int32(data, CFF_CHECKSUM_OFFSET);
                for (i = 0, ii = loadTestFontId.length - 3; i < ii; i += 4) {
                  checksum = checksum - XXXX_VALUE + int32(loadTestFontId, i) | 0;
                }
                if (i < loadTestFontId.length) {
                  checksum = checksum - XXXX_VALUE + int32(loadTestFontId + "XXX", i) | 0;
                }
                data = spliceString(data, CFF_CHECKSUM_OFFSET, 4, (0, _util2.string32)(checksum));
                const url = `url(data:font/opentype;base64,${btoa(data)});`;
                const rule = `@font-face {font-family:"${loadTestFontId}";src:${url}}`;
                this.insertRule(rule);
                const names = [];
                for (const font of fonts) {
                  names.push(font.loadedName);
                }
                names.push(loadTestFontId);
                const div = this._document.createElement("div");
                div.style.visibility = "hidden";
                div.style.width = div.style.height = "10px";
                div.style.position = "absolute";
                div.style.top = div.style.left = "0px";
                for (const name of names) {
                  const span = this._document.createElement("span");
                  span.textContent = "Hi";
                  span.style.fontFamily = name;
                  div.appendChild(span);
                }
                this._document.body.appendChild(div);
                isFontReady(loadTestFontId, () => {
                  div.remove();
                  request.complete();
                });
              }
            };
          }
          class FontFaceObject {
            constructor(translatedData, {
              isEvalSupported = true,
              disableFontFace = false,
              ignoreErrors = false,
              onUnsupportedFeature,
              fontRegistry = null
            }) {
              this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
              for (const i in translatedData) {
                this[i] = translatedData[i];
              }
              this.isEvalSupported = isEvalSupported !== false;
              this.disableFontFace = disableFontFace === true;
              this.ignoreErrors = ignoreErrors === true;
              this._onUnsupportedFeature = onUnsupportedFeature;
              this.fontRegistry = fontRegistry;
            }
            createNativeFontFace() {
              if (!this.data || this.disableFontFace) {
                return null;
              }
              let nativeFontFace;
              if (!this.cssFontInfo) {
                nativeFontFace = new FontFace(this.loadedName, this.data, {});
              } else {
                const css = {
                  weight: this.cssFontInfo.fontWeight
                };
                if (this.cssFontInfo.italicAngle) {
                  css.style = `oblique ${this.cssFontInfo.italicAngle}deg`;
                }
                nativeFontFace = new FontFace(this.cssFontInfo.fontFamily, this.data, css);
              }
              if (this.fontRegistry) {
                this.fontRegistry.registerFont(this);
              }
              return nativeFontFace;
            }
            createFontFaceRule() {
              if (!this.data || this.disableFontFace) {
                return null;
              }
              const data = (0, _util2.bytesToString)(this.data);
              const url = `url(data:${this.mimetype};base64,${btoa(data)});`;
              let rule;
              if (!this.cssFontInfo) {
                rule = `@font-face {font-family:"${this.loadedName}";src:${url}}`;
              } else {
                let css = `font-weight: ${this.cssFontInfo.fontWeight};`;
                if (this.cssFontInfo.italicAngle) {
                  css += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`;
                }
                rule = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${css}src:${url}}`;
              }
              if (this.fontRegistry) {
                this.fontRegistry.registerFont(this, url);
              }
              return rule;
            }
            getPathGenerator(objs, character) {
              if (this.compiledGlyphs[character] !== void 0) {
                return this.compiledGlyphs[character];
              }
              let cmds;
              try {
                cmds = objs.get(this.loadedName + "_path_" + character);
              } catch (ex) {
                if (!this.ignoreErrors) {
                  throw ex;
                }
                this._onUnsupportedFeature({
                  featureId: _util2.UNSUPPORTED_FEATURES.errorFontGetPath
                });
                (0, _util2.warn)(`getPathGenerator - ignoring character: "${ex}".`);
                return this.compiledGlyphs[character] = function(c, size) {
                };
              }
              if (this.isEvalSupported && _util2.FeatureTest.isEvalSupported) {
                const jsBuf = [];
                for (const current of cmds) {
                  const args = current.args !== void 0 ? current.args.join(",") : "";
                  jsBuf.push("c.", current.cmd, "(", args, ");\n");
                }
                return this.compiledGlyphs[character] = new Function("c", "size", jsBuf.join(""));
              }
              return this.compiledGlyphs[character] = function(c, size) {
                for (const current of cmds) {
                  if (current.cmd === "scale") {
                    current.args = [size, -size];
                  }
                  c[current.cmd].apply(c, current.args);
                }
              };
            }
          }
          exports2.FontFaceObject = FontFaceObject;
        },
        (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.AnnotationStorage = void 0;
          var _murmurhash = __w_pdfjs_require__2(9);
          var _util2 = __w_pdfjs_require__2(1);
          class AnnotationStorage {
            constructor() {
              this._storage = /* @__PURE__ */ new Map();
              this._modified = false;
              this.onSetModified = null;
              this.onResetModified = null;
            }
            getValue(key, defaultValue) {
              const value = this._storage.get(key);
              if (value === void 0) {
                return defaultValue;
              }
              return Object.assign(defaultValue, value);
            }
            getRawValue(key) {
              return this._storage.get(key);
            }
            setValue(key, value) {
              const obj = this._storage.get(key);
              let modified = false;
              if (obj !== void 0) {
                for (const [entry, val] of Object.entries(value)) {
                  if (obj[entry] !== val) {
                    modified = true;
                    obj[entry] = val;
                  }
                }
              } else {
                modified = true;
                this._storage.set(key, value);
              }
              if (modified) {
                this._setModified();
              }
            }
            getAll() {
              return this._storage.size > 0 ? (0, _util2.objectFromMap)(this._storage) : null;
            }
            get size() {
              return this._storage.size;
            }
            _setModified() {
              if (!this._modified) {
                this._modified = true;
                if (typeof this.onSetModified === "function") {
                  this.onSetModified();
                }
              }
            }
            resetModified() {
              if (this._modified) {
                this._modified = false;
                if (typeof this.onResetModified === "function") {
                  this.onResetModified();
                }
              }
            }
            get serializable() {
              return this._storage.size > 0 ? this._storage : null;
            }
            get hash() {
              const hash = new _murmurhash.MurmurHash3_64();
              for (const [key, value] of this._storage) {
                hash.update(`${key}:${JSON.stringify(value)}`);
              }
              return hash.hexdigest();
            }
          }
          exports2.AnnotationStorage = AnnotationStorage;
        },
        (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.MurmurHash3_64 = void 0;
          var _util2 = __w_pdfjs_require__2(1);
          const SEED = 3285377520;
          const MASK_HIGH = 4294901760;
          const MASK_LOW = 65535;
          class MurmurHash3_64 {
            constructor(seed) {
              this.h1 = seed ? seed & 4294967295 : SEED;
              this.h2 = seed ? seed & 4294967295 : SEED;
            }
            update(input) {
              let data, length;
              if (typeof input === "string") {
                data = new Uint8Array(input.length * 2);
                length = 0;
                for (let i = 0, ii = input.length; i < ii; i++) {
                  const code = input.charCodeAt(i);
                  if (code <= 255) {
                    data[length++] = code;
                  } else {
                    data[length++] = code >>> 8;
                    data[length++] = code & 255;
                  }
                }
              } else if ((0, _util2.isArrayBuffer)(input)) {
                data = input.slice();
                length = data.byteLength;
              } else {
                throw new Error("Wrong data format in MurmurHash3_64_update. Input must be a string or array.");
              }
              const blockCounts = length >> 2;
              const tailLength = length - blockCounts * 4;
              const dataUint32 = new Uint32Array(data.buffer, 0, blockCounts);
              let k1 = 0, k2 = 0;
              let h1 = this.h1, h2 = this.h2;
              const C1 = 3432918353, C2 = 461845907;
              const C1_LOW = C1 & MASK_LOW, C2_LOW = C2 & MASK_LOW;
              for (let i = 0; i < blockCounts; i++) {
                if (i & 1) {
                  k1 = dataUint32[i];
                  k1 = k1 * C1 & MASK_HIGH | k1 * C1_LOW & MASK_LOW;
                  k1 = k1 << 15 | k1 >>> 17;
                  k1 = k1 * C2 & MASK_HIGH | k1 * C2_LOW & MASK_LOW;
                  h1 ^= k1;
                  h1 = h1 << 13 | h1 >>> 19;
                  h1 = h1 * 5 + 3864292196;
                } else {
                  k2 = dataUint32[i];
                  k2 = k2 * C1 & MASK_HIGH | k2 * C1_LOW & MASK_LOW;
                  k2 = k2 << 15 | k2 >>> 17;
                  k2 = k2 * C2 & MASK_HIGH | k2 * C2_LOW & MASK_LOW;
                  h2 ^= k2;
                  h2 = h2 << 13 | h2 >>> 19;
                  h2 = h2 * 5 + 3864292196;
                }
              }
              k1 = 0;
              switch (tailLength) {
                case 3:
                  k1 ^= data[blockCounts * 4 + 2] << 16;
                case 2:
                  k1 ^= data[blockCounts * 4 + 1] << 8;
                case 1:
                  k1 ^= data[blockCounts * 4];
                  k1 = k1 * C1 & MASK_HIGH | k1 * C1_LOW & MASK_LOW;
                  k1 = k1 << 15 | k1 >>> 17;
                  k1 = k1 * C2 & MASK_HIGH | k1 * C2_LOW & MASK_LOW;
                  if (blockCounts & 1) {
                    h1 ^= k1;
                  } else {
                    h2 ^= k1;
                  }
              }
              this.h1 = h1;
              this.h2 = h2;
            }
            hexdigest() {
              let h1 = this.h1, h2 = this.h2;
              h1 ^= h2 >>> 1;
              h1 = h1 * 3981806797 & MASK_HIGH | h1 * 36045 & MASK_LOW;
              h2 = h2 * 4283543511 & MASK_HIGH | ((h2 << 16 | h1 >>> 16) * 2950163797 & MASK_HIGH) >>> 16;
              h1 ^= h2 >>> 1;
              h1 = h1 * 444984403 & MASK_HIGH | h1 * 60499 & MASK_LOW;
              h2 = h2 * 3301882366 & MASK_HIGH | ((h2 << 16 | h1 >>> 16) * 3120437893 & MASK_HIGH) >>> 16;
              h1 ^= h2 >>> 1;
              const hex1 = (h1 >>> 0).toString(16), hex2 = (h2 >>> 0).toString(16);
              return hex1.padStart(8, "0") + hex2.padStart(8, "0");
            }
          }
          exports2.MurmurHash3_64 = MurmurHash3_64;
        },
        (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.CanvasGraphics = void 0;
          var _util2 = __w_pdfjs_require__2(1);
          var _pattern_helper = __w_pdfjs_require__2(11);
          var _image_utils = __w_pdfjs_require__2(12);
          var _is_node2 = __w_pdfjs_require__2(3);
          var _display_utils2 = __w_pdfjs_require__2(5);
          const MIN_FONT_SIZE = 16;
          const MAX_FONT_SIZE = 100;
          const MAX_GROUP_SIZE = 4096;
          const EXECUTION_TIME = 15;
          const EXECUTION_STEPS = 10;
          const MAX_SIZE_TO_COMPILE = 1e3;
          const FULL_CHUNK_HEIGHT = 16;
          const LINEWIDTH_SCALE_FACTOR = 1.000001;
          function mirrorContextOperations(ctx, destCtx) {
            if (ctx._removeMirroring) {
              throw new Error("Context is already forwarding operations.");
            }
            ctx.__originalSave = ctx.save;
            ctx.__originalRestore = ctx.restore;
            ctx.__originalRotate = ctx.rotate;
            ctx.__originalScale = ctx.scale;
            ctx.__originalTranslate = ctx.translate;
            ctx.__originalTransform = ctx.transform;
            ctx.__originalSetTransform = ctx.setTransform;
            ctx.__originalResetTransform = ctx.resetTransform;
            ctx.__originalClip = ctx.clip;
            ctx.__originalMoveTo = ctx.moveTo;
            ctx.__originalLineTo = ctx.lineTo;
            ctx.__originalBezierCurveTo = ctx.bezierCurveTo;
            ctx.__originalRect = ctx.rect;
            ctx.__originalClosePath = ctx.closePath;
            ctx.__originalBeginPath = ctx.beginPath;
            ctx._removeMirroring = () => {
              ctx.save = ctx.__originalSave;
              ctx.restore = ctx.__originalRestore;
              ctx.rotate = ctx.__originalRotate;
              ctx.scale = ctx.__originalScale;
              ctx.translate = ctx.__originalTranslate;
              ctx.transform = ctx.__originalTransform;
              ctx.setTransform = ctx.__originalSetTransform;
              ctx.resetTransform = ctx.__originalResetTransform;
              ctx.clip = ctx.__originalClip;
              ctx.moveTo = ctx.__originalMoveTo;
              ctx.lineTo = ctx.__originalLineTo;
              ctx.bezierCurveTo = ctx.__originalBezierCurveTo;
              ctx.rect = ctx.__originalRect;
              ctx.closePath = ctx.__originalClosePath;
              ctx.beginPath = ctx.__originalBeginPath;
              delete ctx._removeMirroring;
            };
            ctx.save = function ctxSave() {
              destCtx.save();
              this.__originalSave();
            };
            ctx.restore = function ctxRestore() {
              destCtx.restore();
              this.__originalRestore();
            };
            ctx.translate = function ctxTranslate(x, y) {
              destCtx.translate(x, y);
              this.__originalTranslate(x, y);
            };
            ctx.scale = function ctxScale(x, y) {
              destCtx.scale(x, y);
              this.__originalScale(x, y);
            };
            ctx.transform = function ctxTransform(a, b, c, d, e, f) {
              destCtx.transform(a, b, c, d, e, f);
              this.__originalTransform(a, b, c, d, e, f);
            };
            ctx.setTransform = function ctxSetTransform(a, b, c, d, e, f) {
              destCtx.setTransform(a, b, c, d, e, f);
              this.__originalSetTransform(a, b, c, d, e, f);
            };
            ctx.resetTransform = function ctxResetTransform() {
              destCtx.resetTransform();
              this.__originalResetTransform();
            };
            ctx.rotate = function ctxRotate(angle) {
              destCtx.rotate(angle);
              this.__originalRotate(angle);
            };
            ctx.clip = function ctxRotate(rule) {
              destCtx.clip(rule);
              this.__originalClip(rule);
            };
            ctx.moveTo = function(x, y) {
              destCtx.moveTo(x, y);
              this.__originalMoveTo(x, y);
            };
            ctx.lineTo = function(x, y) {
              destCtx.lineTo(x, y);
              this.__originalLineTo(x, y);
            };
            ctx.bezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
              destCtx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
              this.__originalBezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
            };
            ctx.rect = function(x, y, width, height) {
              destCtx.rect(x, y, width, height);
              this.__originalRect(x, y, width, height);
            };
            ctx.closePath = function() {
              destCtx.closePath();
              this.__originalClosePath();
            };
            ctx.beginPath = function() {
              destCtx.beginPath();
              this.__originalBeginPath();
            };
          }
          function addContextCurrentTransform(ctx) {
            if (ctx._transformStack) {
              ctx._transformStack = [];
            }
            if (ctx.mozCurrentTransform) {
              return;
            }
            ctx._originalSave = ctx.save;
            ctx._originalRestore = ctx.restore;
            ctx._originalRotate = ctx.rotate;
            ctx._originalScale = ctx.scale;
            ctx._originalTranslate = ctx.translate;
            ctx._originalTransform = ctx.transform;
            ctx._originalSetTransform = ctx.setTransform;
            ctx._originalResetTransform = ctx.resetTransform;
            ctx._transformMatrix = ctx._transformMatrix || [1, 0, 0, 1, 0, 0];
            ctx._transformStack = [];
            try {
              const desc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(ctx), "lineWidth");
              ctx._setLineWidth = desc.set;
              ctx._getLineWidth = desc.get;
              Object.defineProperty(ctx, "lineWidth", {
                set: function setLineWidth(width) {
                  this._setLineWidth(width * LINEWIDTH_SCALE_FACTOR);
                },
                get: function getLineWidth() {
                  return this._getLineWidth();
                }
              });
            } catch (_) {
            }
            Object.defineProperty(ctx, "mozCurrentTransform", {
              get: function getCurrentTransform() {
                return this._transformMatrix;
              }
            });
            Object.defineProperty(ctx, "mozCurrentTransformInverse", {
              get: function getCurrentTransformInverse() {
                const [a, b, c, d, e, f] = this._transformMatrix;
                const ad_bc = a * d - b * c;
                const bc_ad = b * c - a * d;
                return [d / ad_bc, b / bc_ad, c / bc_ad, a / ad_bc, (d * e - c * f) / bc_ad, (b * e - a * f) / ad_bc];
              }
            });
            ctx.save = function ctxSave() {
              const old = this._transformMatrix;
              this._transformStack.push(old);
              this._transformMatrix = old.slice(0, 6);
              this._originalSave();
            };
            ctx.restore = function ctxRestore() {
              if (this._transformStack.length === 0) {
                (0, _util2.warn)("Tried to restore a ctx when the stack was already empty.");
              }
              const prev = this._transformStack.pop();
              if (prev) {
                this._transformMatrix = prev;
                this._originalRestore();
              }
            };
            ctx.translate = function ctxTranslate(x, y) {
              const m = this._transformMatrix;
              m[4] = m[0] * x + m[2] * y + m[4];
              m[5] = m[1] * x + m[3] * y + m[5];
              this._originalTranslate(x, y);
            };
            ctx.scale = function ctxScale(x, y) {
              const m = this._transformMatrix;
              m[0] *= x;
              m[1] *= x;
              m[2] *= y;
              m[3] *= y;
              this._originalScale(x, y);
            };
            ctx.transform = function ctxTransform(a, b, c, d, e, f) {
              const m = this._transformMatrix;
              this._transformMatrix = [m[0] * a + m[2] * b, m[1] * a + m[3] * b, m[0] * c + m[2] * d, m[1] * c + m[3] * d, m[0] * e + m[2] * f + m[4], m[1] * e + m[3] * f + m[5]];
              ctx._originalTransform(a, b, c, d, e, f);
            };
            ctx.setTransform = function ctxSetTransform(a, b, c, d, e, f) {
              this._transformMatrix = [a, b, c, d, e, f];
              ctx._originalSetTransform(a, b, c, d, e, f);
            };
            ctx.resetTransform = function ctxResetTransform() {
              this._transformMatrix = [1, 0, 0, 1, 0, 0];
              ctx._originalResetTransform();
            };
            ctx.rotate = function ctxRotate(angle) {
              const cosValue = Math.cos(angle);
              const sinValue = Math.sin(angle);
              const m = this._transformMatrix;
              this._transformMatrix = [m[0] * cosValue + m[2] * sinValue, m[1] * cosValue + m[3] * sinValue, m[0] * -sinValue + m[2] * cosValue, m[1] * -sinValue + m[3] * cosValue, m[4], m[5]];
              this._originalRotate(angle);
            };
          }
          class CachedCanvases {
            constructor(canvasFactory) {
              this.canvasFactory = canvasFactory;
              this.cache = /* @__PURE__ */ Object.create(null);
            }
            getCanvas(id, width, height, trackTransform) {
              let canvasEntry;
              if (this.cache[id] !== void 0) {
                canvasEntry = this.cache[id];
                this.canvasFactory.reset(canvasEntry, width, height);
                canvasEntry.context.setTransform(1, 0, 0, 1, 0, 0);
              } else {
                canvasEntry = this.canvasFactory.create(width, height);
                this.cache[id] = canvasEntry;
              }
              if (trackTransform) {
                addContextCurrentTransform(canvasEntry.context);
              }
              return canvasEntry;
            }
            delete(id) {
              delete this.cache[id];
            }
            clear() {
              for (const id in this.cache) {
                const canvasEntry = this.cache[id];
                this.canvasFactory.destroy(canvasEntry);
                delete this.cache[id];
              }
            }
          }
          function drawImageAtIntegerCoords(ctx, srcImg, srcX, srcY, srcW, srcH, destX, destY, destW, destH) {
            const [a, b, c, d, tx, ty] = ctx.mozCurrentTransform;
            if (b === 0 && c === 0) {
              const tlX = destX * a + tx;
              const rTlX = Math.round(tlX);
              const tlY = destY * d + ty;
              const rTlY = Math.round(tlY);
              const brX = (destX + destW) * a + tx;
              const rWidth = Math.abs(Math.round(brX) - rTlX) || 1;
              const brY = (destY + destH) * d + ty;
              const rHeight = Math.abs(Math.round(brY) - rTlY) || 1;
              ctx.setTransform(Math.sign(a), 0, 0, Math.sign(d), rTlX, rTlY);
              ctx.drawImage(srcImg, srcX, srcY, srcW, srcH, 0, 0, rWidth, rHeight);
              ctx.setTransform(a, b, c, d, tx, ty);
              return [rWidth, rHeight];
            }
            if (a === 0 && d === 0) {
              const tlX = destY * c + tx;
              const rTlX = Math.round(tlX);
              const tlY = destX * b + ty;
              const rTlY = Math.round(tlY);
              const brX = (destY + destH) * c + tx;
              const rWidth = Math.abs(Math.round(brX) - rTlX) || 1;
              const brY = (destX + destW) * b + ty;
              const rHeight = Math.abs(Math.round(brY) - rTlY) || 1;
              ctx.setTransform(0, Math.sign(b), Math.sign(c), 0, rTlX, rTlY);
              ctx.drawImage(srcImg, srcX, srcY, srcW, srcH, 0, 0, rHeight, rWidth);
              ctx.setTransform(a, b, c, d, tx, ty);
              return [rHeight, rWidth];
            }
            ctx.drawImage(srcImg, srcX, srcY, srcW, srcH, destX, destY, destW, destH);
            const scaleX = Math.hypot(a, b);
            const scaleY = Math.hypot(c, d);
            return [scaleX * destW, scaleY * destH];
          }
          function compileType3Glyph(imgData) {
            const {
              width,
              height
            } = imgData;
            if (width > MAX_SIZE_TO_COMPILE || height > MAX_SIZE_TO_COMPILE) {
              return null;
            }
            const POINT_TO_PROCESS_LIMIT = 1e3;
            const POINT_TYPES = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]);
            const width1 = width + 1;
            let points = new Uint8Array(width1 * (height + 1));
            let i, j, j0;
            const lineSize = width + 7 & ~7;
            let data = new Uint8Array(lineSize * height), pos = 0;
            for (const elem of imgData.data) {
              let mask = 128;
              while (mask > 0) {
                data[pos++] = elem & mask ? 0 : 255;
                mask >>= 1;
              }
            }
            let count = 0;
            pos = 0;
            if (data[pos] !== 0) {
              points[0] = 1;
              ++count;
            }
            for (j = 1; j < width; j++) {
              if (data[pos] !== data[pos + 1]) {
                points[j] = data[pos] ? 2 : 1;
                ++count;
              }
              pos++;
            }
            if (data[pos] !== 0) {
              points[j] = 2;
              ++count;
            }
            for (i = 1; i < height; i++) {
              pos = i * lineSize;
              j0 = i * width1;
              if (data[pos - lineSize] !== data[pos]) {
                points[j0] = data[pos] ? 1 : 8;
                ++count;
              }
              let sum = (data[pos] ? 4 : 0) + (data[pos - lineSize] ? 8 : 0);
              for (j = 1; j < width; j++) {
                sum = (sum >> 2) + (data[pos + 1] ? 4 : 0) + (data[pos - lineSize + 1] ? 8 : 0);
                if (POINT_TYPES[sum]) {
                  points[j0 + j] = POINT_TYPES[sum];
                  ++count;
                }
                pos++;
              }
              if (data[pos - lineSize] !== data[pos]) {
                points[j0 + j] = data[pos] ? 2 : 4;
                ++count;
              }
              if (count > POINT_TO_PROCESS_LIMIT) {
                return null;
              }
            }
            pos = lineSize * (height - 1);
            j0 = i * width1;
            if (data[pos] !== 0) {
              points[j0] = 8;
              ++count;
            }
            for (j = 1; j < width; j++) {
              if (data[pos] !== data[pos + 1]) {
                points[j0 + j] = data[pos] ? 4 : 8;
                ++count;
              }
              pos++;
            }
            if (data[pos] !== 0) {
              points[j0 + j] = 4;
              ++count;
            }
            if (count > POINT_TO_PROCESS_LIMIT) {
              return null;
            }
            const steps = new Int32Array([0, width1, -1, 0, -width1, 0, 0, 0, 1]);
            let path, outlines, coords;
            if (!_is_node2.isNodeJS) {
              path = new Path2D();
            } else {
              outlines = [];
            }
            for (i = 0; count && i <= height; i++) {
              let p = i * width1;
              const end = p + width;
              while (p < end && !points[p]) {
                p++;
              }
              if (p === end) {
                continue;
              }
              if (path) {
                path.moveTo(p % width1, i);
              } else {
                coords = [p % width1, i];
              }
              const p0 = p;
              let type = points[p];
              do {
                const step = steps[type];
                do {
                  p += step;
                } while (!points[p]);
                const pp = points[p];
                if (pp !== 5 && pp !== 10) {
                  type = pp;
                  points[p] = 0;
                } else {
                  type = pp & 51 * type >> 4;
                  points[p] &= type >> 2 | type << 2;
                }
                if (path) {
                  path.lineTo(p % width1, p / width1 | 0);
                } else {
                  coords.push(p % width1, p / width1 | 0);
                }
                if (!points[p]) {
                  --count;
                }
              } while (p0 !== p);
              if (!path) {
                outlines.push(coords);
              }
              --i;
            }
            data = null;
            points = null;
            const drawOutline = function(c) {
              c.save();
              c.scale(1 / width, -1 / height);
              c.translate(0, -height);
              if (path) {
                c.fill(path);
              } else {
                c.beginPath();
                for (const o of outlines) {
                  c.moveTo(o[0], o[1]);
                  for (let l = 2, ll = o.length; l < ll; l += 2) {
                    c.lineTo(o[l], o[l + 1]);
                  }
                }
                c.fill();
              }
              c.beginPath();
              c.restore();
            };
            return drawOutline;
          }
          class CanvasExtraState {
            constructor(width, height) {
              this.alphaIsShape = false;
              this.fontSize = 0;
              this.fontSizeScale = 1;
              this.textMatrix = _util2.IDENTITY_MATRIX;
              this.textMatrixScale = 1;
              this.fontMatrix = _util2.FONT_IDENTITY_MATRIX;
              this.leading = 0;
              this.x = 0;
              this.y = 0;
              this.lineX = 0;
              this.lineY = 0;
              this.charSpacing = 0;
              this.wordSpacing = 0;
              this.textHScale = 1;
              this.textRenderingMode = _util2.TextRenderingMode.FILL;
              this.textRise = 0;
              this.fillColor = "#000000";
              this.strokeColor = "#000000";
              this.patternFill = false;
              this.fillAlpha = 1;
              this.strokeAlpha = 1;
              this.lineWidth = 1;
              this.activeSMask = null;
              this.transferMaps = null;
              this.startNewPathAndClipBox([0, 0, width, height]);
            }
            clone() {
              const clone = Object.create(this);
              clone.clipBox = this.clipBox.slice();
              return clone;
            }
            setCurrentPoint(x, y) {
              this.x = x;
              this.y = y;
            }
            updatePathMinMax(transform, x, y) {
              [x, y] = _util2.Util.applyTransform([x, y], transform);
              this.minX = Math.min(this.minX, x);
              this.minY = Math.min(this.minY, y);
              this.maxX = Math.max(this.maxX, x);
              this.maxY = Math.max(this.maxY, y);
            }
            updateRectMinMax(transform, rect) {
              const p1 = _util2.Util.applyTransform(rect, transform);
              const p2 = _util2.Util.applyTransform(rect.slice(2), transform);
              this.minX = Math.min(this.minX, p1[0], p2[0]);
              this.minY = Math.min(this.minY, p1[1], p2[1]);
              this.maxX = Math.max(this.maxX, p1[0], p2[0]);
              this.maxY = Math.max(this.maxY, p1[1], p2[1]);
            }
            updateScalingPathMinMax(transform, minMax) {
              _util2.Util.scaleMinMax(transform, minMax);
              this.minX = Math.min(this.minX, minMax[0]);
              this.maxX = Math.max(this.maxX, minMax[1]);
              this.minY = Math.min(this.minY, minMax[2]);
              this.maxY = Math.max(this.maxY, minMax[3]);
            }
            updateCurvePathMinMax(transform, x0, y0, x1, y1, x2, y2, x3, y3, minMax) {
              const box = _util2.Util.bezierBoundingBox(x0, y0, x1, y1, x2, y2, x3, y3);
              if (minMax) {
                minMax[0] = Math.min(minMax[0], box[0], box[2]);
                minMax[1] = Math.max(minMax[1], box[0], box[2]);
                minMax[2] = Math.min(minMax[2], box[1], box[3]);
                minMax[3] = Math.max(minMax[3], box[1], box[3]);
                return;
              }
              this.updateRectMinMax(transform, box);
            }
            getPathBoundingBox(pathType = _pattern_helper.PathType.FILL, transform = null) {
              const box = [this.minX, this.minY, this.maxX, this.maxY];
              if (pathType === _pattern_helper.PathType.STROKE) {
                if (!transform) {
                  (0, _util2.unreachable)("Stroke bounding box must include transform.");
                }
                const scale2 = _util2.Util.singularValueDecompose2dScale(transform);
                const xStrokePad = scale2[0] * this.lineWidth / 2;
                const yStrokePad = scale2[1] * this.lineWidth / 2;
                box[0] -= xStrokePad;
                box[1] -= yStrokePad;
                box[2] += xStrokePad;
                box[3] += yStrokePad;
              }
              return box;
            }
            updateClipFromPath() {
              const intersect = _util2.Util.intersect(this.clipBox, this.getPathBoundingBox());
              this.startNewPathAndClipBox(intersect || [0, 0, 0, 0]);
            }
            isEmptyClip() {
              return this.minX === Infinity;
            }
            startNewPathAndClipBox(box) {
              this.clipBox = box;
              this.minX = Infinity;
              this.minY = Infinity;
              this.maxX = 0;
              this.maxY = 0;
            }
            getClippedPathBoundingBox(pathType = _pattern_helper.PathType.FILL, transform = null) {
              return _util2.Util.intersect(this.clipBox, this.getPathBoundingBox(pathType, transform));
            }
          }
          function putBinaryImageData(ctx, imgData, transferMaps = null) {
            if (typeof ImageData !== "undefined" && imgData instanceof ImageData) {
              ctx.putImageData(imgData, 0, 0);
              return;
            }
            const height = imgData.height, width = imgData.width;
            const partialChunkHeight = height % FULL_CHUNK_HEIGHT;
            const fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
            const totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
            const chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
            let srcPos = 0, destPos;
            const src = imgData.data;
            const dest = chunkImgData.data;
            let i, j, thisChunkHeight, elemsInThisChunk;
            let transferMapRed, transferMapGreen, transferMapBlue, transferMapGray;
            if (transferMaps) {
              switch (transferMaps.length) {
                case 1:
                  transferMapRed = transferMaps[0];
                  transferMapGreen = transferMaps[0];
                  transferMapBlue = transferMaps[0];
                  transferMapGray = transferMaps[0];
                  break;
                case 4:
                  transferMapRed = transferMaps[0];
                  transferMapGreen = transferMaps[1];
                  transferMapBlue = transferMaps[2];
                  transferMapGray = transferMaps[3];
                  break;
              }
            }
            if (imgData.kind === _util2.ImageKind.GRAYSCALE_1BPP) {
              const srcLength = src.byteLength;
              const dest32 = new Uint32Array(dest.buffer, 0, dest.byteLength >> 2);
              const dest32DataLength = dest32.length;
              const fullSrcDiff = width + 7 >> 3;
              let white = 4294967295;
              let black = _util2.FeatureTest.isLittleEndian ? 4278190080 : 255;
              if (transferMapGray) {
                if (transferMapGray[0] === 255 && transferMapGray[255] === 0) {
                  [white, black] = [black, white];
                }
              }
              for (i = 0; i < totalChunks; i++) {
                thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
                destPos = 0;
                for (j = 0; j < thisChunkHeight; j++) {
                  const srcDiff = srcLength - srcPos;
                  let k = 0;
                  const kEnd = srcDiff > fullSrcDiff ? width : srcDiff * 8 - 7;
                  const kEndUnrolled = kEnd & ~7;
                  let mask = 0;
                  let srcByte = 0;
                  for (; k < kEndUnrolled; k += 8) {
                    srcByte = src[srcPos++];
                    dest32[destPos++] = srcByte & 128 ? white : black;
                    dest32[destPos++] = srcByte & 64 ? white : black;
                    dest32[destPos++] = srcByte & 32 ? white : black;
                    dest32[destPos++] = srcByte & 16 ? white : black;
                    dest32[destPos++] = srcByte & 8 ? white : black;
                    dest32[destPos++] = srcByte & 4 ? white : black;
                    dest32[destPos++] = srcByte & 2 ? white : black;
                    dest32[destPos++] = srcByte & 1 ? white : black;
                  }
                  for (; k < kEnd; k++) {
                    if (mask === 0) {
                      srcByte = src[srcPos++];
                      mask = 128;
                    }
                    dest32[destPos++] = srcByte & mask ? white : black;
                    mask >>= 1;
                  }
                }
                while (destPos < dest32DataLength) {
                  dest32[destPos++] = 0;
                }
                ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
              }
            } else if (imgData.kind === _util2.ImageKind.RGBA_32BPP) {
              const hasTransferMaps = !!(transferMapRed || transferMapGreen || transferMapBlue);
              j = 0;
              elemsInThisChunk = width * FULL_CHUNK_HEIGHT * 4;
              for (i = 0; i < fullChunks; i++) {
                dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
                srcPos += elemsInThisChunk;
                if (hasTransferMaps) {
                  for (let k = 0; k < elemsInThisChunk; k += 4) {
                    if (transferMapRed) {
                      dest[k + 0] = transferMapRed[dest[k + 0]];
                    }
                    if (transferMapGreen) {
                      dest[k + 1] = transferMapGreen[dest[k + 1]];
                    }
                    if (transferMapBlue) {
                      dest[k + 2] = transferMapBlue[dest[k + 2]];
                    }
                  }
                }
                ctx.putImageData(chunkImgData, 0, j);
                j += FULL_CHUNK_HEIGHT;
              }
              if (i < totalChunks) {
                elemsInThisChunk = width * partialChunkHeight * 4;
                dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
                if (hasTransferMaps) {
                  for (let k = 0; k < elemsInThisChunk; k += 4) {
                    if (transferMapRed) {
                      dest[k + 0] = transferMapRed[dest[k + 0]];
                    }
                    if (transferMapGreen) {
                      dest[k + 1] = transferMapGreen[dest[k + 1]];
                    }
                    if (transferMapBlue) {
                      dest[k + 2] = transferMapBlue[dest[k + 2]];
                    }
                  }
                }
                ctx.putImageData(chunkImgData, 0, j);
              }
            } else if (imgData.kind === _util2.ImageKind.RGB_24BPP) {
              const hasTransferMaps = !!(transferMapRed || transferMapGreen || transferMapBlue);
              thisChunkHeight = FULL_CHUNK_HEIGHT;
              elemsInThisChunk = width * thisChunkHeight;
              for (i = 0; i < totalChunks; i++) {
                if (i >= fullChunks) {
                  thisChunkHeight = partialChunkHeight;
                  elemsInThisChunk = width * thisChunkHeight;
                }
                destPos = 0;
                for (j = elemsInThisChunk; j--; ) {
                  dest[destPos++] = src[srcPos++];
                  dest[destPos++] = src[srcPos++];
                  dest[destPos++] = src[srcPos++];
                  dest[destPos++] = 255;
                }
                if (hasTransferMaps) {
                  for (let k = 0; k < destPos; k += 4) {
                    if (transferMapRed) {
                      dest[k + 0] = transferMapRed[dest[k + 0]];
                    }
                    if (transferMapGreen) {
                      dest[k + 1] = transferMapGreen[dest[k + 1]];
                    }
                    if (transferMapBlue) {
                      dest[k + 2] = transferMapBlue[dest[k + 2]];
                    }
                  }
                }
                ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
              }
            } else {
              throw new Error(`bad image kind: ${imgData.kind}`);
            }
          }
          function putBinaryImageMask(ctx, imgData) {
            if (imgData.bitmap) {
              ctx.drawImage(imgData.bitmap, 0, 0);
              return;
            }
            const height = imgData.height, width = imgData.width;
            const partialChunkHeight = height % FULL_CHUNK_HEIGHT;
            const fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
            const totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
            const chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
            let srcPos = 0;
            const src = imgData.data;
            const dest = chunkImgData.data;
            for (let i = 0; i < totalChunks; i++) {
              const thisChunkHeight = i < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
              ({
                srcPos
              } = (0, _image_utils.applyMaskImageData)({
                src,
                srcPos,
                dest,
                width,
                height: thisChunkHeight
              }));
              ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
            }
          }
          function copyCtxState(sourceCtx, destCtx) {
            const properties = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font"];
            for (let i = 0, ii = properties.length; i < ii; i++) {
              const property = properties[i];
              if (sourceCtx[property] !== void 0) {
                destCtx[property] = sourceCtx[property];
              }
            }
            if (sourceCtx.setLineDash !== void 0) {
              destCtx.setLineDash(sourceCtx.getLineDash());
              destCtx.lineDashOffset = sourceCtx.lineDashOffset;
            }
          }
          function resetCtxToDefault(ctx, foregroundColor) {
            ctx.strokeStyle = ctx.fillStyle = foregroundColor || "#000000";
            ctx.fillRule = "nonzero";
            ctx.globalAlpha = 1;
            ctx.lineWidth = 1;
            ctx.lineCap = "butt";
            ctx.lineJoin = "miter";
            ctx.miterLimit = 10;
            ctx.globalCompositeOperation = "source-over";
            ctx.font = "10px sans-serif";
            if (ctx.setLineDash !== void 0) {
              ctx.setLineDash([]);
              ctx.lineDashOffset = 0;
            }
          }
          function composeSMaskBackdrop(bytes, r0, g0, b0) {
            const length = bytes.length;
            for (let i = 3; i < length; i += 4) {
              const alpha = bytes[i];
              if (alpha === 0) {
                bytes[i - 3] = r0;
                bytes[i - 2] = g0;
                bytes[i - 1] = b0;
              } else if (alpha < 255) {
                const alpha_ = 255 - alpha;
                bytes[i - 3] = bytes[i - 3] * alpha + r0 * alpha_ >> 8;
                bytes[i - 2] = bytes[i - 2] * alpha + g0 * alpha_ >> 8;
                bytes[i - 1] = bytes[i - 1] * alpha + b0 * alpha_ >> 8;
              }
            }
          }
          function composeSMaskAlpha(maskData, layerData, transferMap) {
            const length = maskData.length;
            const scale2 = 1 / 255;
            for (let i = 3; i < length; i += 4) {
              const alpha = transferMap ? transferMap[maskData[i]] : maskData[i];
              layerData[i] = layerData[i] * alpha * scale2 | 0;
            }
          }
          function composeSMaskLuminosity(maskData, layerData, transferMap) {
            const length = maskData.length;
            for (let i = 3; i < length; i += 4) {
              const y = maskData[i - 3] * 77 + maskData[i - 2] * 152 + maskData[i - 1] * 28;
              layerData[i] = transferMap ? layerData[i] * transferMap[y >> 8] >> 8 : layerData[i] * y >> 16;
            }
          }
          function genericComposeSMask(maskCtx, layerCtx, width, height, subtype, backdrop, transferMap, layerOffsetX, layerOffsetY, maskOffsetX, maskOffsetY) {
            const hasBackdrop = !!backdrop;
            const r0 = hasBackdrop ? backdrop[0] : 0;
            const g0 = hasBackdrop ? backdrop[1] : 0;
            const b0 = hasBackdrop ? backdrop[2] : 0;
            let composeFn;
            if (subtype === "Luminosity") {
              composeFn = composeSMaskLuminosity;
            } else {
              composeFn = composeSMaskAlpha;
            }
            const PIXELS_TO_PROCESS = 1048576;
            const chunkSize = Math.min(height, Math.ceil(PIXELS_TO_PROCESS / width));
            for (let row = 0; row < height; row += chunkSize) {
              const chunkHeight = Math.min(chunkSize, height - row);
              const maskData = maskCtx.getImageData(layerOffsetX - maskOffsetX, row + (layerOffsetY - maskOffsetY), width, chunkHeight);
              const layerData = layerCtx.getImageData(layerOffsetX, row + layerOffsetY, width, chunkHeight);
              if (hasBackdrop) {
                composeSMaskBackdrop(maskData.data, r0, g0, b0);
              }
              composeFn(maskData.data, layerData.data, transferMap);
              layerCtx.putImageData(layerData, layerOffsetX, row + layerOffsetY);
            }
          }
          function composeSMask(ctx, smask, layerCtx, layerBox) {
            const layerOffsetX = layerBox[0];
            const layerOffsetY = layerBox[1];
            const layerWidth = layerBox[2] - layerOffsetX;
            const layerHeight = layerBox[3] - layerOffsetY;
            if (layerWidth === 0 || layerHeight === 0) {
              return;
            }
            genericComposeSMask(smask.context, layerCtx, layerWidth, layerHeight, smask.subtype, smask.backdrop, smask.transferMap, layerOffsetX, layerOffsetY, smask.offsetX, smask.offsetY);
            ctx.save();
            ctx.globalAlpha = 1;
            ctx.globalCompositeOperation = "source-over";
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.drawImage(layerCtx.canvas, 0, 0);
            ctx.restore();
          }
          function getImageSmoothingEnabled(transform, interpolate) {
            const scale2 = _util2.Util.singularValueDecompose2dScale(transform);
            scale2[0] = Math.fround(scale2[0]);
            scale2[1] = Math.fround(scale2[1]);
            const actualScale = Math.fround((globalThis.devicePixelRatio || 1) * _display_utils2.PixelsPerInch.PDF_TO_CSS_UNITS);
            if (interpolate !== void 0) {
              return interpolate;
            } else if (scale2[0] <= actualScale || scale2[1] <= actualScale) {
              return true;
            }
            return false;
          }
          const LINE_CAP_STYLES = ["butt", "round", "square"];
          const LINE_JOIN_STYLES = ["miter", "round", "bevel"];
          const NORMAL_CLIP = {};
          const EO_CLIP = {};
          class CanvasGraphics {
            constructor(canvasCtx, commonObjs, objs, canvasFactory, imageLayer, optionalContentConfig, annotationCanvasMap, pageColors) {
              this.ctx = canvasCtx;
              this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height);
              this.stateStack = [];
              this.pendingClip = null;
              this.pendingEOFill = false;
              this.res = null;
              this.xobjs = null;
              this.commonObjs = commonObjs;
              this.objs = objs;
              this.canvasFactory = canvasFactory;
              this.imageLayer = imageLayer;
              this.groupStack = [];
              this.processingType3 = null;
              this.baseTransform = null;
              this.baseTransformStack = [];
              this.groupLevel = 0;
              this.smaskStack = [];
              this.smaskCounter = 0;
              this.tempSMask = null;
              this.suspendedCtx = null;
              this.contentVisible = true;
              this.markedContentStack = [];
              this.optionalContentConfig = optionalContentConfig;
              this.cachedCanvases = new CachedCanvases(this.canvasFactory);
              this.cachedPatterns = /* @__PURE__ */ new Map();
              this.annotationCanvasMap = annotationCanvasMap;
              this.viewportScale = 1;
              this.outputScaleX = 1;
              this.outputScaleY = 1;
              this.backgroundColor = (pageColors == null ? void 0 : pageColors.background) || null;
              this.foregroundColor = (pageColors == null ? void 0 : pageColors.foreground) || null;
              if (canvasCtx) {
                addContextCurrentTransform(canvasCtx);
              }
              this._cachedScaleForStroking = null;
              this._cachedGetSinglePixelWidth = null;
              this._cachedBitmapsMap = /* @__PURE__ */ new Map();
            }
            getObject(data, fallback = null) {
              if (typeof data === "string") {
                return data.startsWith("g_") ? this.commonObjs.get(data) : this.objs.get(data);
              }
              return fallback;
            }
            beginDrawing({
              transform,
              viewport,
              transparency = false,
              background = null
            }) {
              const width = this.ctx.canvas.width;
              const height = this.ctx.canvas.height;
              const defaultBackgroundColor = background || "#ffffff";
              this.ctx.save();
              if (this.foregroundColor && this.backgroundColor) {
                this.ctx.fillStyle = this.foregroundColor;
                const fg = this.foregroundColor = this.ctx.fillStyle;
                this.ctx.fillStyle = this.backgroundColor;
                const bg = this.backgroundColor = this.ctx.fillStyle;
                let isValidDefaultBg = true;
                let defaultBg = defaultBackgroundColor;
                this.ctx.fillStyle = defaultBackgroundColor;
                defaultBg = this.ctx.fillStyle;
                isValidDefaultBg = typeof defaultBg === "string" && /^#[0-9A-Fa-f]{6}$/.test(defaultBg);
                if (fg === "#000000" && bg === "#ffffff" || fg === bg || !isValidDefaultBg) {
                  this.foregroundColor = this.backgroundColor = null;
                } else {
                  const cB = parseInt(defaultBg.slice(1), 16);
                  const rB = (cB && 16711680) >> 16;
                  const gB = (cB && 65280) >> 8;
                  const bB = cB && 255;
                  const newComp = (x) => {
                    x /= 255;
                    return x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
                  };
                  const lumB = Math.round(0.2126 * newComp(rB) + 0.7152 * newComp(gB) + 0.0722 * newComp(bB));
                  this.selectColor = (r, g, b) => {
                    const lumC = 0.2126 * newComp(r) + 0.7152 * newComp(g) + 0.0722 * newComp(b);
                    return Math.round(lumC) === lumB ? bg : fg;
                  };
                }
              }
              this.ctx.fillStyle = this.backgroundColor || defaultBackgroundColor;
              this.ctx.fillRect(0, 0, width, height);
              this.ctx.restore();
              if (transparency) {
                const transparentCanvas = this.cachedCanvases.getCanvas("transparent", width, height, true);
                this.compositeCtx = this.ctx;
                this.transparentCanvas = transparentCanvas.canvas;
                this.ctx = transparentCanvas.context;
                this.ctx.save();
                this.ctx.transform.apply(this.ctx, this.compositeCtx.mozCurrentTransform);
              }
              this.ctx.save();
              resetCtxToDefault(this.ctx, this.foregroundColor);
              if (transform) {
                this.ctx.transform.apply(this.ctx, transform);
                this.outputScaleX = transform[0];
                this.outputScaleY = transform[0];
              }
              this.ctx.transform.apply(this.ctx, viewport.transform);
              this.viewportScale = viewport.scale;
              this.baseTransform = this.ctx.mozCurrentTransform.slice();
              if (this.imageLayer) {
                this.imageLayer.beginLayout();
              }
            }
            executeOperatorList(operatorList, executionStartIdx, continueCallback, stepper) {
              const argsArray = operatorList.argsArray;
              const fnArray = operatorList.fnArray;
              let i = executionStartIdx || 0;
              const argsArrayLen = argsArray.length;
              if (argsArrayLen === i) {
                return i;
              }
              const chunkOperations = argsArrayLen - i > EXECUTION_STEPS && typeof continueCallback === "function";
              const endTime = chunkOperations ? Date.now() + EXECUTION_TIME : 0;
              let steps = 0;
              const commonObjs = this.commonObjs;
              const objs = this.objs;
              let fnId;
              while (true) {
                if (stepper !== void 0 && i === stepper.nextBreakPoint) {
                  stepper.breakIt(i, continueCallback);
                  return i;
                }
                fnId = fnArray[i];
                if (fnId !== _util2.OPS.dependency) {
                  this[fnId].apply(this, argsArray[i]);
                } else {
                  for (const depObjId of argsArray[i]) {
                    const objsPool = depObjId.startsWith("g_") ? commonObjs : objs;
                    if (!objsPool.has(depObjId)) {
                      objsPool.get(depObjId, continueCallback);
                      return i;
                    }
                  }
                }
                i++;
                if (i === argsArrayLen) {
                  return i;
                }
                if (chunkOperations && ++steps > EXECUTION_STEPS) {
                  if (Date.now() > endTime) {
                    continueCallback();
                    return i;
                  }
                  steps = 0;
                }
              }
            }
            endDrawing() {
              while (this.stateStack.length || this.inSMaskMode) {
                this.restore();
              }
              this.ctx.restore();
              if (this.transparentCanvas) {
                this.ctx = this.compositeCtx;
                this.ctx.save();
                this.ctx.setTransform(1, 0, 0, 1, 0, 0);
                this.ctx.drawImage(this.transparentCanvas, 0, 0);
                this.ctx.restore();
                this.transparentCanvas = null;
              }
              this.cachedCanvases.clear();
              this.cachedPatterns.clear();
              for (const cache of this._cachedBitmapsMap.values()) {
                for (const canvas of cache.values()) {
                  if (typeof HTMLCanvasElement !== "undefined" && canvas instanceof HTMLCanvasElement) {
                    canvas.width = canvas.height = 0;
                  }
                }
                cache.clear();
              }
              this._cachedBitmapsMap.clear();
              if (this.imageLayer) {
                this.imageLayer.endLayout();
              }
            }
            _scaleImage(img, inverseTransform) {
              const width = img.width;
              const height = img.height;
              let widthScale = Math.max(Math.hypot(inverseTransform[0], inverseTransform[1]), 1);
              let heightScale = Math.max(Math.hypot(inverseTransform[2], inverseTransform[3]), 1);
              let paintWidth = width, paintHeight = height;
              let tmpCanvasId = "prescale1";
              let tmpCanvas, tmpCtx;
              while (widthScale > 2 && paintWidth > 1 || heightScale > 2 && paintHeight > 1) {
                let newWidth = paintWidth, newHeight = paintHeight;
                if (widthScale > 2 && paintWidth > 1) {
                  newWidth = Math.ceil(paintWidth / 2);
                  widthScale /= paintWidth / newWidth;
                }
                if (heightScale > 2 && paintHeight > 1) {
                  newHeight = Math.ceil(paintHeight / 2);
                  heightScale /= paintHeight / newHeight;
                }
                tmpCanvas = this.cachedCanvases.getCanvas(tmpCanvasId, newWidth, newHeight, false);
                tmpCtx = tmpCanvas.context;
                tmpCtx.clearRect(0, 0, newWidth, newHeight);
                tmpCtx.drawImage(img, 0, 0, paintWidth, paintHeight, 0, 0, newWidth, newHeight);
                img = tmpCanvas.canvas;
                paintWidth = newWidth;
                paintHeight = newHeight;
                tmpCanvasId = tmpCanvasId === "prescale1" ? "prescale2" : "prescale1";
              }
              return {
                img,
                paintWidth,
                paintHeight
              };
            }
            _createMaskCanvas(img) {
              const ctx = this.ctx;
              const {
                width,
                height
              } = img;
              const fillColor = this.current.fillColor;
              const isPatternFill = this.current.patternFill;
              const currentTransform = ctx.mozCurrentTransform;
              let cache, cacheKey, scaled, maskCanvas;
              if ((img.bitmap || img.data) && img.count > 1) {
                const mainKey = img.bitmap || img.data.buffer;
                const withoutTranslation = currentTransform.slice(0, 4);
                cacheKey = JSON.stringify(isPatternFill ? withoutTranslation : [withoutTranslation, fillColor]);
                cache = this._cachedBitmapsMap.get(mainKey);
                if (!cache) {
                  cache = /* @__PURE__ */ new Map();
                  this._cachedBitmapsMap.set(mainKey, cache);
                }
                const cachedImage = cache.get(cacheKey);
                if (cachedImage && !isPatternFill) {
                  const offsetX2 = Math.round(Math.min(currentTransform[0], currentTransform[2]) + currentTransform[4]);
                  const offsetY2 = Math.round(Math.min(currentTransform[1], currentTransform[3]) + currentTransform[5]);
                  return {
                    canvas: cachedImage,
                    offsetX: offsetX2,
                    offsetY: offsetY2
                  };
                }
                scaled = cachedImage;
              }
              if (!scaled) {
                maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height, false);
                putBinaryImageMask(maskCanvas.context, img);
              }
              let maskToCanvas = _util2.Util.transform(currentTransform, [1 / width, 0, 0, -1 / height, 0, 0]);
              maskToCanvas = _util2.Util.transform(maskToCanvas, [1, 0, 0, 1, 0, -height]);
              const cord1 = _util2.Util.applyTransform([0, 0], maskToCanvas);
              const cord2 = _util2.Util.applyTransform([width, height], maskToCanvas);
              const rect = _util2.Util.normalizeRect([cord1[0], cord1[1], cord2[0], cord2[1]]);
              const drawnWidth = Math.round(rect[2] - rect[0]) || 1;
              const drawnHeight = Math.round(rect[3] - rect[1]) || 1;
              const fillCanvas = this.cachedCanvases.getCanvas("fillCanvas", drawnWidth, drawnHeight, true);
              const fillCtx = fillCanvas.context;
              const offsetX = Math.min(cord1[0], cord2[0]);
              const offsetY = Math.min(cord1[1], cord2[1]);
              fillCtx.translate(-offsetX, -offsetY);
              fillCtx.transform.apply(fillCtx, maskToCanvas);
              if (!scaled) {
                scaled = this._scaleImage(maskCanvas.canvas, fillCtx.mozCurrentTransformInverse);
                scaled = scaled.img;
                if (cache && isPatternFill) {
                  cache.set(cacheKey, scaled);
                }
              }
              fillCtx.imageSmoothingEnabled = getImageSmoothingEnabled(fillCtx.mozCurrentTransform, img.interpolate);
              drawImageAtIntegerCoords(fillCtx, scaled, 0, 0, scaled.width, scaled.height, 0, 0, width, height);
              fillCtx.globalCompositeOperation = "source-in";
              const inverse = _util2.Util.transform(fillCtx.mozCurrentTransformInverse, [1, 0, 0, 1, -offsetX, -offsetY]);
              fillCtx.fillStyle = isPatternFill ? fillColor.getPattern(ctx, this, inverse, _pattern_helper.PathType.FILL) : fillColor;
              fillCtx.fillRect(0, 0, width, height);
              if (cache && !isPatternFill) {
                this.cachedCanvases.delete("fillCanvas");
                cache.set(cacheKey, fillCanvas.canvas);
              }
              return {
                canvas: fillCanvas.canvas,
                offsetX: Math.round(offsetX),
                offsetY: Math.round(offsetY)
              };
            }
            setLineWidth(width) {
              if (width !== this.current.lineWidth) {
                this._cachedScaleForStroking = null;
              }
              this.current.lineWidth = width;
              this.ctx.lineWidth = width;
            }
            setLineCap(style) {
              this.ctx.lineCap = LINE_CAP_STYLES[style];
            }
            setLineJoin(style) {
              this.ctx.lineJoin = LINE_JOIN_STYLES[style];
            }
            setMiterLimit(limit) {
              this.ctx.miterLimit = limit;
            }
            setDash(dashArray, dashPhase) {
              const ctx = this.ctx;
              if (ctx.setLineDash !== void 0) {
                ctx.setLineDash(dashArray);
                ctx.lineDashOffset = dashPhase;
              }
            }
            setRenderingIntent(intent) {
            }
            setFlatness(flatness) {
            }
            setGState(states) {
              for (let i = 0, ii = states.length; i < ii; i++) {
                const state = states[i];
                const key = state[0];
                const value = state[1];
                switch (key) {
                  case "LW":
                    this.setLineWidth(value);
                    break;
                  case "LC":
                    this.setLineCap(value);
                    break;
                  case "LJ":
                    this.setLineJoin(value);
                    break;
                  case "ML":
                    this.setMiterLimit(value);
                    break;
                  case "D":
                    this.setDash(value[0], value[1]);
                    break;
                  case "RI":
                    this.setRenderingIntent(value);
                    break;
                  case "FL":
                    this.setFlatness(value);
                    break;
                  case "Font":
                    this.setFont(value[0], value[1]);
                    break;
                  case "CA":
                    this.current.strokeAlpha = state[1];
                    break;
                  case "ca":
                    this.current.fillAlpha = state[1];
                    this.ctx.globalAlpha = state[1];
                    break;
                  case "BM":
                    this.ctx.globalCompositeOperation = value;
                    break;
                  case "SMask":
                    this.current.activeSMask = value ? this.tempSMask : null;
                    this.tempSMask = null;
                    this.checkSMaskState();
                    break;
                  case "TR":
                    this.current.transferMaps = value;
                }
              }
            }
            get inSMaskMode() {
              return !!this.suspendedCtx;
            }
            checkSMaskState() {
              const inSMaskMode = this.inSMaskMode;
              if (this.current.activeSMask && !inSMaskMode) {
                this.beginSMaskMode();
              } else if (!this.current.activeSMask && inSMaskMode) {
                this.endSMaskMode();
              }
            }
            beginSMaskMode() {
              if (this.inSMaskMode) {
                throw new Error("beginSMaskMode called while already in smask mode");
              }
              const drawnWidth = this.ctx.canvas.width;
              const drawnHeight = this.ctx.canvas.height;
              const cacheId = "smaskGroupAt" + this.groupLevel;
              const scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight, true);
              this.suspendedCtx = this.ctx;
              this.ctx = scratchCanvas.context;
              const ctx = this.ctx;
              ctx.setTransform.apply(ctx, this.suspendedCtx.mozCurrentTransform);
              copyCtxState(this.suspendedCtx, ctx);
              mirrorContextOperations(ctx, this.suspendedCtx);
              this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
            }
            endSMaskMode() {
              if (!this.inSMaskMode) {
                throw new Error("endSMaskMode called while not in smask mode");
              }
              this.ctx._removeMirroring();
              copyCtxState(this.ctx, this.suspendedCtx);
              this.ctx = this.suspendedCtx;
              this.suspendedCtx = null;
            }
            compose(dirtyBox) {
              if (!this.current.activeSMask) {
                return;
              }
              if (!dirtyBox) {
                dirtyBox = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
              } else {
                dirtyBox[0] = Math.floor(dirtyBox[0]);
                dirtyBox[1] = Math.floor(dirtyBox[1]);
                dirtyBox[2] = Math.ceil(dirtyBox[2]);
                dirtyBox[3] = Math.ceil(dirtyBox[3]);
              }
              const smask = this.current.activeSMask;
              const suspendedCtx = this.suspendedCtx;
              composeSMask(suspendedCtx, smask, this.ctx, dirtyBox);
              this.ctx.save();
              this.ctx.setTransform(1, 0, 0, 1, 0, 0);
              this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
              this.ctx.restore();
            }
            save() {
              if (this.inSMaskMode) {
                copyCtxState(this.ctx, this.suspendedCtx);
                this.suspendedCtx.save();
              } else {
                this.ctx.save();
              }
              const old = this.current;
              this.stateStack.push(old);
              this.current = old.clone();
            }
            restore() {
              if (this.stateStack.length === 0 && this.inSMaskMode) {
                this.endSMaskMode();
              }
              if (this.stateStack.length !== 0) {
                this.current = this.stateStack.pop();
                if (this.inSMaskMode) {
                  this.suspendedCtx.restore();
                  copyCtxState(this.suspendedCtx, this.ctx);
                } else {
                  this.ctx.restore();
                }
                this.checkSMaskState();
                this.pendingClip = null;
                this._cachedScaleForStroking = null;
                this._cachedGetSinglePixelWidth = null;
              }
            }
            transform(a, b, c, d, e, f) {
              this.ctx.transform(a, b, c, d, e, f);
              this._cachedScaleForStroking = null;
              this._cachedGetSinglePixelWidth = null;
            }
            constructPath(ops, args, minMax) {
              const ctx = this.ctx;
              const current = this.current;
              let x = current.x, y = current.y;
              let startX, startY;
              const currentTransform = ctx.mozCurrentTransform;
              const isScalingMatrix = currentTransform[0] === 0 && currentTransform[3] === 0 || currentTransform[1] === 0 && currentTransform[2] === 0;
              const minMaxForBezier = isScalingMatrix ? minMax.slice(0) : null;
              for (let i = 0, j = 0, ii = ops.length; i < ii; i++) {
                switch (ops[i] | 0) {
                  case _util2.OPS.rectangle:
                    x = args[j++];
                    y = args[j++];
                    const width = args[j++];
                    const height = args[j++];
                    const xw = x + width;
                    const yh = y + height;
                    ctx.moveTo(x, y);
                    if (width === 0 || height === 0) {
                      ctx.lineTo(xw, yh);
                    } else {
                      ctx.lineTo(xw, y);
                      ctx.lineTo(xw, yh);
                      ctx.lineTo(x, yh);
                    }
                    if (!isScalingMatrix) {
                      current.updateRectMinMax(currentTransform, [x, y, xw, yh]);
                    }
                    ctx.closePath();
                    break;
                  case _util2.OPS.moveTo:
                    x = args[j++];
                    y = args[j++];
                    ctx.moveTo(x, y);
                    if (!isScalingMatrix) {
                      current.updatePathMinMax(currentTransform, x, y);
                    }
                    break;
                  case _util2.OPS.lineTo:
                    x = args[j++];
                    y = args[j++];
                    ctx.lineTo(x, y);
                    if (!isScalingMatrix) {
                      current.updatePathMinMax(currentTransform, x, y);
                    }
                    break;
                  case _util2.OPS.curveTo:
                    startX = x;
                    startY = y;
                    x = args[j + 4];
                    y = args[j + 5];
                    ctx.bezierCurveTo(args[j], args[j + 1], args[j + 2], args[j + 3], x, y);
                    current.updateCurvePathMinMax(currentTransform, startX, startY, args[j], args[j + 1], args[j + 2], args[j + 3], x, y, minMaxForBezier);
                    j += 6;
                    break;
                  case _util2.OPS.curveTo2:
                    startX = x;
                    startY = y;
                    ctx.bezierCurveTo(x, y, args[j], args[j + 1], args[j + 2], args[j + 3]);
                    current.updateCurvePathMinMax(currentTransform, startX, startY, x, y, args[j], args[j + 1], args[j + 2], args[j + 3], minMaxForBezier);
                    x = args[j + 2];
                    y = args[j + 3];
                    j += 4;
                    break;
                  case _util2.OPS.curveTo3:
                    startX = x;
                    startY = y;
                    x = args[j + 2];
                    y = args[j + 3];
                    ctx.bezierCurveTo(args[j], args[j + 1], x, y, x, y);
                    current.updateCurvePathMinMax(currentTransform, startX, startY, args[j], args[j + 1], x, y, x, y, minMaxForBezier);
                    j += 4;
                    break;
                  case _util2.OPS.closePath:
                    ctx.closePath();
                    break;
                }
              }
              if (isScalingMatrix) {
                current.updateScalingPathMinMax(currentTransform, minMaxForBezier);
              }
              current.setCurrentPoint(x, y);
            }
            closePath() {
              this.ctx.closePath();
            }
            stroke(consumePath) {
              consumePath = typeof consumePath !== "undefined" ? consumePath : true;
              const ctx = this.ctx;
              const strokeColor = this.current.strokeColor;
              ctx.globalAlpha = this.current.strokeAlpha;
              if (this.contentVisible) {
                if (typeof strokeColor === "object" && (strokeColor == null ? void 0 : strokeColor.getPattern)) {
                  ctx.save();
                  ctx.strokeStyle = strokeColor.getPattern(ctx, this, ctx.mozCurrentTransformInverse, _pattern_helper.PathType.STROKE);
                  this.rescaleAndStroke(false);
                  ctx.restore();
                } else {
                  this.rescaleAndStroke(true);
                }
              }
              if (consumePath) {
                this.consumePath(this.current.getClippedPathBoundingBox());
              }
              ctx.globalAlpha = this.current.fillAlpha;
            }
            closeStroke() {
              this.closePath();
              this.stroke();
            }
            fill(consumePath) {
              consumePath = typeof consumePath !== "undefined" ? consumePath : true;
              const ctx = this.ctx;
              const fillColor = this.current.fillColor;
              const isPatternFill = this.current.patternFill;
              let needRestore = false;
              if (isPatternFill) {
                ctx.save();
                ctx.fillStyle = fillColor.getPattern(ctx, this, ctx.mozCurrentTransformInverse, _pattern_helper.PathType.FILL);
                needRestore = true;
              }
              const intersect = this.current.getClippedPathBoundingBox();
              if (this.contentVisible && intersect !== null) {
                if (this.pendingEOFill) {
                  ctx.fill("evenodd");
                  this.pendingEOFill = false;
                } else {
                  ctx.fill();
                }
              }
              if (needRestore) {
                ctx.restore();
              }
              if (consumePath) {
                this.consumePath(intersect);
              }
            }
            eoFill() {
              this.pendingEOFill = true;
              this.fill();
            }
            fillStroke() {
              this.fill(false);
              this.stroke(false);
              this.consumePath();
            }
            eoFillStroke() {
              this.pendingEOFill = true;
              this.fillStroke();
            }
            closeFillStroke() {
              this.closePath();
              this.fillStroke();
            }
            closeEOFillStroke() {
              this.pendingEOFill = true;
              this.closePath();
              this.fillStroke();
            }
            endPath() {
              this.consumePath();
            }
            clip() {
              this.pendingClip = NORMAL_CLIP;
            }
            eoClip() {
              this.pendingClip = EO_CLIP;
            }
            beginText() {
              this.current.textMatrix = _util2.IDENTITY_MATRIX;
              this.current.textMatrixScale = 1;
              this.current.x = this.current.lineX = 0;
              this.current.y = this.current.lineY = 0;
            }
            endText() {
              const paths = this.pendingTextPaths;
              const ctx = this.ctx;
              if (paths === void 0) {
                ctx.beginPath();
                return;
              }
              ctx.save();
              ctx.beginPath();
              for (let i = 0; i < paths.length; i++) {
                const path = paths[i];
                ctx.setTransform.apply(ctx, path.transform);
                ctx.translate(path.x, path.y);
                path.addToPath(ctx, path.fontSize);
              }
              ctx.restore();
              ctx.clip();
              ctx.beginPath();
              delete this.pendingTextPaths;
            }
            setCharSpacing(spacing) {
              this.current.charSpacing = spacing;
            }
            setWordSpacing(spacing) {
              this.current.wordSpacing = spacing;
            }
            setHScale(scale2) {
              this.current.textHScale = scale2 / 100;
            }
            setLeading(leading) {
              this.current.leading = -leading;
            }
            setFont(fontRefName, size) {
              const fontObj = this.commonObjs.get(fontRefName);
              const current = this.current;
              if (!fontObj) {
                throw new Error(`Can't find font for ${fontRefName}`);
              }
              current.fontMatrix = fontObj.fontMatrix || _util2.FONT_IDENTITY_MATRIX;
              if (current.fontMatrix[0] === 0 || current.fontMatrix[3] === 0) {
                (0, _util2.warn)("Invalid font matrix for font " + fontRefName);
              }
              if (size < 0) {
                size = -size;
                current.fontDirection = -1;
              } else {
                current.fontDirection = 1;
              }
              this.current.font = fontObj;
              this.current.fontSize = size;
              if (fontObj.isType3Font) {
                return;
              }
              const name = fontObj.loadedName || "sans-serif";
              let bold = "normal";
              if (fontObj.black) {
                bold = "900";
              } else if (fontObj.bold) {
                bold = "bold";
              }
              const italic = fontObj.italic ? "italic" : "normal";
              const typeface = `"${name}", ${fontObj.fallbackName}`;
              let browserFontSize = size;
              if (size < MIN_FONT_SIZE) {
                browserFontSize = MIN_FONT_SIZE;
              } else if (size > MAX_FONT_SIZE) {
                browserFontSize = MAX_FONT_SIZE;
              }
              this.current.fontSizeScale = size / browserFontSize;
              this.ctx.font = `${italic} ${bold} ${browserFontSize}px ${typeface}`;
            }
            setTextRenderingMode(mode) {
              this.current.textRenderingMode = mode;
            }
            setTextRise(rise) {
              this.current.textRise = rise;
            }
            moveText(x, y) {
              this.current.x = this.current.lineX += x;
              this.current.y = this.current.lineY += y;
            }
            setLeadingMoveText(x, y) {
              this.setLeading(-y);
              this.moveText(x, y);
            }
            setTextMatrix(a, b, c, d, e, f) {
              this.current.textMatrix = [a, b, c, d, e, f];
              this.current.textMatrixScale = Math.hypot(a, b);
              this.current.x = this.current.lineX = 0;
              this.current.y = this.current.lineY = 0;
            }
            nextLine() {
              this.moveText(0, this.current.leading);
            }
            paintChar(character, x, y, patternTransform) {
              const ctx = this.ctx;
              const current = this.current;
              const font = current.font;
              const textRenderingMode = current.textRenderingMode;
              const fontSize = current.fontSize / current.fontSizeScale;
              const fillStrokeMode = textRenderingMode & _util2.TextRenderingMode.FILL_STROKE_MASK;
              const isAddToPathSet = !!(textRenderingMode & _util2.TextRenderingMode.ADD_TO_PATH_FLAG);
              const patternFill = current.patternFill && !font.missingFile;
              let addToPath;
              if (font.disableFontFace || isAddToPathSet || patternFill) {
                addToPath = font.getPathGenerator(this.commonObjs, character);
              }
              if (font.disableFontFace || patternFill) {
                ctx.save();
                ctx.translate(x, y);
                ctx.beginPath();
                addToPath(ctx, fontSize);
                if (patternTransform) {
                  ctx.setTransform.apply(ctx, patternTransform);
                }
                if (fillStrokeMode === _util2.TextRenderingMode.FILL || fillStrokeMode === _util2.TextRenderingMode.FILL_STROKE) {
                  ctx.fill();
                }
                if (fillStrokeMode === _util2.TextRenderingMode.STROKE || fillStrokeMode === _util2.TextRenderingMode.FILL_STROKE) {
                  ctx.stroke();
                }
                ctx.restore();
              } else {
                if (fillStrokeMode === _util2.TextRenderingMode.FILL || fillStrokeMode === _util2.TextRenderingMode.FILL_STROKE) {
                  ctx.fillText(character, x, y);
                }
                if (fillStrokeMode === _util2.TextRenderingMode.STROKE || fillStrokeMode === _util2.TextRenderingMode.FILL_STROKE) {
                  ctx.strokeText(character, x, y);
                }
              }
              if (isAddToPathSet) {
                const paths = this.pendingTextPaths || (this.pendingTextPaths = []);
                paths.push({
                  transform: ctx.mozCurrentTransform,
                  x,
                  y,
                  fontSize,
                  addToPath
                });
              }
            }
            get isFontSubpixelAAEnabled() {
              const {
                context: ctx
              } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10, false);
              ctx.scale(1.5, 1);
              ctx.fillText("I", 0, 10);
              const data = ctx.getImageData(0, 0, 10, 10).data;
              let enabled = false;
              for (let i = 3; i < data.length; i += 4) {
                if (data[i] > 0 && data[i] < 255) {
                  enabled = true;
                  break;
                }
              }
              return (0, _util2.shadow)(this, "isFontSubpixelAAEnabled", enabled);
            }
            showText(glyphs) {
              const current = this.current;
              const font = current.font;
              if (font.isType3Font) {
                return this.showType3Text(glyphs);
              }
              const fontSize = current.fontSize;
              if (fontSize === 0) {
                return void 0;
              }
              const ctx = this.ctx;
              const fontSizeScale = current.fontSizeScale;
              const charSpacing = current.charSpacing;
              const wordSpacing = current.wordSpacing;
              const fontDirection = current.fontDirection;
              const textHScale = current.textHScale * fontDirection;
              const glyphsLength = glyphs.length;
              const vertical = font.vertical;
              const spacingDir = vertical ? 1 : -1;
              const defaultVMetrics = font.defaultVMetrics;
              const widthAdvanceScale = fontSize * current.fontMatrix[0];
              const simpleFillText = current.textRenderingMode === _util2.TextRenderingMode.FILL && !font.disableFontFace && !current.patternFill;
              ctx.save();
              ctx.transform.apply(ctx, current.textMatrix);
              ctx.translate(current.x, current.y + current.textRise);
              if (fontDirection > 0) {
                ctx.scale(textHScale, -1);
              } else {
                ctx.scale(textHScale, 1);
              }
              let patternTransform;
              if (current.patternFill) {
                ctx.save();
                const pattern = current.fillColor.getPattern(ctx, this, ctx.mozCurrentTransformInverse, _pattern_helper.PathType.FILL);
                patternTransform = ctx.mozCurrentTransform;
                ctx.restore();
                ctx.fillStyle = pattern;
              }
              let lineWidth = current.lineWidth;
              const scale2 = current.textMatrixScale;
              if (scale2 === 0 || lineWidth === 0) {
                const fillStrokeMode = current.textRenderingMode & _util2.TextRenderingMode.FILL_STROKE_MASK;
                if (fillStrokeMode === _util2.TextRenderingMode.STROKE || fillStrokeMode === _util2.TextRenderingMode.FILL_STROKE) {
                  lineWidth = this.getSinglePixelWidth();
                }
              } else {
                lineWidth /= scale2;
              }
              if (fontSizeScale !== 1) {
                ctx.scale(fontSizeScale, fontSizeScale);
                lineWidth /= fontSizeScale;
              }
              ctx.lineWidth = lineWidth;
              let x = 0, i;
              for (i = 0; i < glyphsLength; ++i) {
                const glyph = glyphs[i];
                if (typeof glyph === "number") {
                  x += spacingDir * glyph * fontSize / 1e3;
                  continue;
                }
                let restoreNeeded = false;
                const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
                const character = glyph.fontChar;
                const accent = glyph.accent;
                let scaledX, scaledY;
                let width = glyph.width;
                if (vertical) {
                  const vmetric = glyph.vmetric || defaultVMetrics;
                  const vx = -(glyph.vmetric ? vmetric[1] : width * 0.5) * widthAdvanceScale;
                  const vy = vmetric[2] * widthAdvanceScale;
                  width = vmetric ? -vmetric[0] : width;
                  scaledX = vx / fontSizeScale;
                  scaledY = (x + vy) / fontSizeScale;
                } else {
                  scaledX = x / fontSizeScale;
                  scaledY = 0;
                }
                if (font.remeasure && width > 0) {
                  const measuredWidth = ctx.measureText(character).width * 1e3 / fontSize * fontSizeScale;
                  if (width < measuredWidth && this.isFontSubpixelAAEnabled) {
                    const characterScaleX = width / measuredWidth;
                    restoreNeeded = true;
                    ctx.save();
                    ctx.scale(characterScaleX, 1);
                    scaledX /= characterScaleX;
                  } else if (width !== measuredWidth) {
                    scaledX += (width - measuredWidth) / 2e3 * fontSize / fontSizeScale;
                  }
                }
                if (this.contentVisible && (glyph.isInFont || font.missingFile)) {
                  if (simpleFillText && !accent) {
                    ctx.fillText(character, scaledX, scaledY);
                  } else {
                    this.paintChar(character, scaledX, scaledY, patternTransform);
                    if (accent) {
                      const scaledAccentX = scaledX + fontSize * accent.offset.x / fontSizeScale;
                      const scaledAccentY = scaledY - fontSize * accent.offset.y / fontSizeScale;
                      this.paintChar(accent.fontChar, scaledAccentX, scaledAccentY, patternTransform);
                    }
                  }
                }
                let charWidth;
                if (vertical) {
                  charWidth = width * widthAdvanceScale - spacing * fontDirection;
                } else {
                  charWidth = width * widthAdvanceScale + spacing * fontDirection;
                }
                x += charWidth;
                if (restoreNeeded) {
                  ctx.restore();
                }
              }
              if (vertical) {
                current.y -= x;
              } else {
                current.x += x * textHScale;
              }
              ctx.restore();
              this.compose();
              return void 0;
            }
            showType3Text(glyphs) {
              const ctx = this.ctx;
              const current = this.current;
              const font = current.font;
              const fontSize = current.fontSize;
              const fontDirection = current.fontDirection;
              const spacingDir = font.vertical ? 1 : -1;
              const charSpacing = current.charSpacing;
              const wordSpacing = current.wordSpacing;
              const textHScale = current.textHScale * fontDirection;
              const fontMatrix = current.fontMatrix || _util2.FONT_IDENTITY_MATRIX;
              const glyphsLength = glyphs.length;
              const isTextInvisible = current.textRenderingMode === _util2.TextRenderingMode.INVISIBLE;
              let i, glyph, width, spacingLength;
              if (isTextInvisible || fontSize === 0) {
                return;
              }
              this._cachedScaleForStroking = null;
              this._cachedGetSinglePixelWidth = null;
              ctx.save();
              ctx.transform.apply(ctx, current.textMatrix);
              ctx.translate(current.x, current.y);
              ctx.scale(textHScale, fontDirection);
              for (i = 0; i < glyphsLength; ++i) {
                glyph = glyphs[i];
                if (typeof glyph === "number") {
                  spacingLength = spacingDir * glyph * fontSize / 1e3;
                  this.ctx.translate(spacingLength, 0);
                  current.x += spacingLength * textHScale;
                  continue;
                }
                const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
                const operatorList = font.charProcOperatorList[glyph.operatorListId];
                if (!operatorList) {
                  (0, _util2.warn)(`Type3 character "${glyph.operatorListId}" is not available.`);
                  continue;
                }
                if (this.contentVisible) {
                  this.processingType3 = glyph;
                  this.save();
                  ctx.scale(fontSize, fontSize);
                  ctx.transform.apply(ctx, fontMatrix);
                  this.executeOperatorList(operatorList);
                  this.restore();
                }
                const transformed = _util2.Util.applyTransform([glyph.width, 0], fontMatrix);
                width = transformed[0] * fontSize + spacing;
                ctx.translate(width, 0);
                current.x += width * textHScale;
              }
              ctx.restore();
              this.processingType3 = null;
            }
            setCharWidth(xWidth, yWidth) {
            }
            setCharWidthAndBounds(xWidth, yWidth, llx, lly, urx, ury) {
              this.ctx.rect(llx, lly, urx - llx, ury - lly);
              this.ctx.clip();
              this.endPath();
            }
            getColorN_Pattern(IR) {
              let pattern;
              if (IR[0] === "TilingPattern") {
                const color = IR[1];
                const baseTransform = this.baseTransform || this.ctx.mozCurrentTransform.slice();
                const canvasGraphicsFactory = {
                  createCanvasGraphics: (ctx) => {
                    return new CanvasGraphics(ctx, this.commonObjs, this.objs, this.canvasFactory);
                  }
                };
                pattern = new _pattern_helper.TilingPattern(IR, color, this.ctx, canvasGraphicsFactory, baseTransform);
              } else {
                pattern = this._getPattern(IR[1], IR[2]);
              }
              return pattern;
            }
            setStrokeColorN() {
              this.current.strokeColor = this.getColorN_Pattern(arguments);
            }
            setFillColorN() {
              this.current.fillColor = this.getColorN_Pattern(arguments);
              this.current.patternFill = true;
            }
            setStrokeRGBColor(r, g, b) {
              var _a;
              const color = ((_a = this.selectColor) == null ? void 0 : _a.call(this, r, g, b)) || _util2.Util.makeHexColor(r, g, b);
              this.ctx.strokeStyle = color;
              this.current.strokeColor = color;
            }
            setFillRGBColor(r, g, b) {
              var _a;
              const color = ((_a = this.selectColor) == null ? void 0 : _a.call(this, r, g, b)) || _util2.Util.makeHexColor(r, g, b);
              this.ctx.fillStyle = color;
              this.current.fillColor = color;
              this.current.patternFill = false;
            }
            _getPattern(objId, matrix = null) {
              let pattern;
              if (this.cachedPatterns.has(objId)) {
                pattern = this.cachedPatterns.get(objId);
              } else {
                pattern = (0, _pattern_helper.getShadingPattern)(this.objs.get(objId));
                this.cachedPatterns.set(objId, pattern);
              }
              if (matrix) {
                pattern.matrix = matrix;
              }
              return pattern;
            }
            shadingFill(objId) {
              if (!this.contentVisible) {
                return;
              }
              const ctx = this.ctx;
              this.save();
              const pattern = this._getPattern(objId);
              ctx.fillStyle = pattern.getPattern(ctx, this, ctx.mozCurrentTransformInverse, _pattern_helper.PathType.SHADING);
              const inv = ctx.mozCurrentTransformInverse;
              if (inv) {
                const canvas = ctx.canvas;
                const width = canvas.width;
                const height = canvas.height;
                const bl = _util2.Util.applyTransform([0, 0], inv);
                const br = _util2.Util.applyTransform([0, height], inv);
                const ul = _util2.Util.applyTransform([width, 0], inv);
                const ur = _util2.Util.applyTransform([width, height], inv);
                const x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
                const y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
                const x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
                const y1 = Math.max(bl[1], br[1], ul[1], ur[1]);
                this.ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
              } else {
                this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
              }
              this.compose(this.current.getClippedPathBoundingBox());
              this.restore();
            }
            beginInlineImage() {
              (0, _util2.unreachable)("Should not call beginInlineImage");
            }
            beginImageData() {
              (0, _util2.unreachable)("Should not call beginImageData");
            }
            paintFormXObjectBegin(matrix, bbox) {
              if (!this.contentVisible) {
                return;
              }
              this.save();
              this.baseTransformStack.push(this.baseTransform);
              if (Array.isArray(matrix) && matrix.length === 6) {
                this.transform.apply(this, matrix);
              }
              this.baseTransform = this.ctx.mozCurrentTransform;
              if (bbox) {
                const width = bbox[2] - bbox[0];
                const height = bbox[3] - bbox[1];
                this.ctx.rect(bbox[0], bbox[1], width, height);
                this.current.updateRectMinMax(this.ctx.mozCurrentTransform, bbox);
                this.clip();
                this.endPath();
              }
            }
            paintFormXObjectEnd() {
              if (!this.contentVisible) {
                return;
              }
              this.restore();
              this.baseTransform = this.baseTransformStack.pop();
            }
            beginGroup(group) {
              if (!this.contentVisible) {
                return;
              }
              this.save();
              if (this.inSMaskMode) {
                this.endSMaskMode();
                this.current.activeSMask = null;
              }
              const currentCtx = this.ctx;
              if (!group.isolated) {
                (0, _util2.info)("TODO: Support non-isolated groups.");
              }
              if (group.knockout) {
                (0, _util2.warn)("Knockout groups not supported.");
              }
              const currentTransform = currentCtx.mozCurrentTransform;
              if (group.matrix) {
                currentCtx.transform.apply(currentCtx, group.matrix);
              }
              if (!group.bbox) {
                throw new Error("Bounding box is required.");
              }
              let bounds = _util2.Util.getAxialAlignedBoundingBox(group.bbox, currentCtx.mozCurrentTransform);
              const canvasBounds = [0, 0, currentCtx.canvas.width, currentCtx.canvas.height];
              bounds = _util2.Util.intersect(bounds, canvasBounds) || [0, 0, 0, 0];
              const offsetX = Math.floor(bounds[0]);
              const offsetY = Math.floor(bounds[1]);
              let drawnWidth = Math.max(Math.ceil(bounds[2]) - offsetX, 1);
              let drawnHeight = Math.max(Math.ceil(bounds[3]) - offsetY, 1);
              let scaleX = 1, scaleY = 1;
              if (drawnWidth > MAX_GROUP_SIZE) {
                scaleX = drawnWidth / MAX_GROUP_SIZE;
                drawnWidth = MAX_GROUP_SIZE;
              }
              if (drawnHeight > MAX_GROUP_SIZE) {
                scaleY = drawnHeight / MAX_GROUP_SIZE;
                drawnHeight = MAX_GROUP_SIZE;
              }
              this.current.startNewPathAndClipBox([0, 0, drawnWidth, drawnHeight]);
              let cacheId = "groupAt" + this.groupLevel;
              if (group.smask) {
                cacheId += "_smask_" + this.smaskCounter++ % 2;
              }
              const scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight, true);
              const groupCtx = scratchCanvas.context;
              groupCtx.scale(1 / scaleX, 1 / scaleY);
              groupCtx.translate(-offsetX, -offsetY);
              groupCtx.transform.apply(groupCtx, currentTransform);
              if (group.smask) {
                this.smaskStack.push({
                  canvas: scratchCanvas.canvas,
                  context: groupCtx,
                  offsetX,
                  offsetY,
                  scaleX,
                  scaleY,
                  subtype: group.smask.subtype,
                  backdrop: group.smask.backdrop,
                  transferMap: group.smask.transferMap || null,
                  startTransformInverse: null
                });
              } else {
                currentCtx.setTransform(1, 0, 0, 1, 0, 0);
                currentCtx.translate(offsetX, offsetY);
                currentCtx.scale(scaleX, scaleY);
                currentCtx.save();
              }
              copyCtxState(currentCtx, groupCtx);
              this.ctx = groupCtx;
              this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
              this.groupStack.push(currentCtx);
              this.groupLevel++;
            }
            endGroup(group) {
              if (!this.contentVisible) {
                return;
              }
              this.groupLevel--;
              const groupCtx = this.ctx;
              const ctx = this.groupStack.pop();
              this.ctx = ctx;
              this.ctx.imageSmoothingEnabled = false;
              if (group.smask) {
                this.tempSMask = this.smaskStack.pop();
                this.restore();
              } else {
                this.ctx.restore();
                const currentMtx = this.ctx.mozCurrentTransform;
                this.restore();
                this.ctx.save();
                this.ctx.setTransform.apply(this.ctx, currentMtx);
                const dirtyBox = _util2.Util.getAxialAlignedBoundingBox([0, 0, groupCtx.canvas.width, groupCtx.canvas.height], currentMtx);
                this.ctx.drawImage(groupCtx.canvas, 0, 0);
                this.ctx.restore();
                this.compose(dirtyBox);
              }
            }
            beginAnnotations() {
              this.save();
              if (this.baseTransform) {
                this.ctx.setTransform.apply(this.ctx, this.baseTransform);
              }
            }
            endAnnotations() {
              this.restore();
            }
            beginAnnotation(id, rect, transform, matrix, hasOwnCanvas) {
              this.save();
              if (Array.isArray(rect) && rect.length === 4) {
                const width = rect[2] - rect[0];
                const height = rect[3] - rect[1];
                if (hasOwnCanvas && this.annotationCanvasMap) {
                  transform = transform.slice();
                  transform[4] -= rect[0];
                  transform[5] -= rect[1];
                  rect = rect.slice();
                  rect[0] = rect[1] = 0;
                  rect[2] = width;
                  rect[3] = height;
                  const [scaleX, scaleY] = _util2.Util.singularValueDecompose2dScale(this.ctx.mozCurrentTransform);
                  const {
                    viewportScale
                  } = this;
                  const canvasWidth = Math.ceil(width * this.outputScaleX * viewportScale);
                  const canvasHeight = Math.ceil(height * this.outputScaleY * viewportScale);
                  this.annotationCanvas = this.canvasFactory.create(canvasWidth, canvasHeight);
                  const {
                    canvas,
                    context
                  } = this.annotationCanvas;
                  const viewportScaleFactorStr = `var(--zoom-factor) * ${_display_utils2.PixelsPerInch.PDF_TO_CSS_UNITS}`;
                  canvas.style.width = `calc(${width}px * ${viewportScaleFactorStr})`;
                  canvas.style.height = `calc(${height}px * ${viewportScaleFactorStr})`;
                  this.annotationCanvasMap.set(id, canvas);
                  this.annotationCanvas.savedCtx = this.ctx;
                  this.ctx = context;
                  this.ctx.setTransform(scaleX, 0, 0, -scaleY, 0, height * scaleY);
                  addContextCurrentTransform(this.ctx);
                  resetCtxToDefault(this.ctx, this.foregroundColor);
                } else {
                  resetCtxToDefault(this.ctx, this.foregroundColor);
                  this.ctx.rect(rect[0], rect[1], width, height);
                  this.ctx.clip();
                  this.endPath();
                }
              }
              this.current = new CanvasExtraState(this.ctx.canvas.width, this.ctx.canvas.height);
              this.transform.apply(this, transform);
              this.transform.apply(this, matrix);
            }
            endAnnotation() {
              if (this.annotationCanvas) {
                this.ctx = this.annotationCanvas.savedCtx;
                delete this.annotationCanvas.savedCtx;
                delete this.annotationCanvas;
              }
              this.restore();
            }
            paintImageMaskXObject(img) {
              if (!this.contentVisible) {
                return;
              }
              const count = img.count;
              img = this.getObject(img.data, img);
              img.count = count;
              const ctx = this.ctx;
              const glyph = this.processingType3;
              if (glyph) {
                if (glyph.compiled === void 0) {
                  glyph.compiled = compileType3Glyph(img);
                }
                if (glyph.compiled) {
                  glyph.compiled(ctx);
                  return;
                }
              }
              const mask = this._createMaskCanvas(img);
              const maskCanvas = mask.canvas;
              ctx.save();
              ctx.setTransform(1, 0, 0, 1, 0, 0);
              ctx.drawImage(maskCanvas, mask.offsetX, mask.offsetY);
              ctx.restore();
              this.compose();
            }
            paintImageMaskXObjectRepeat(img, scaleX, skewX = 0, skewY = 0, scaleY, positions) {
              if (!this.contentVisible) {
                return;
              }
              img = this.getObject(img.data, img);
              const ctx = this.ctx;
              ctx.save();
              const currentTransform = ctx.mozCurrentTransform;
              ctx.transform(scaleX, skewX, skewY, scaleY, 0, 0);
              const mask = this._createMaskCanvas(img);
              ctx.setTransform(1, 0, 0, 1, 0, 0);
              for (let i = 0, ii = positions.length; i < ii; i += 2) {
                const trans = _util2.Util.transform(currentTransform, [scaleX, skewX, skewY, scaleY, positions[i], positions[i + 1]]);
                const [x, y] = _util2.Util.applyTransform([0, 0], trans);
                ctx.drawImage(mask.canvas, x, y);
              }
              ctx.restore();
              this.compose();
            }
            paintImageMaskXObjectGroup(images) {
              if (!this.contentVisible) {
                return;
              }
              const ctx = this.ctx;
              const fillColor = this.current.fillColor;
              const isPatternFill = this.current.patternFill;
              for (let i = 0, ii = images.length; i < ii; i++) {
                const image = images[i];
                const width = image.width, height = image.height;
                const maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height, false);
                const maskCtx = maskCanvas.context;
                maskCtx.save();
                putBinaryImageMask(maskCtx, image);
                maskCtx.globalCompositeOperation = "source-in";
                maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this, ctx.mozCurrentTransformInverse, _pattern_helper.PathType.FILL) : fillColor;
                maskCtx.fillRect(0, 0, width, height);
                maskCtx.restore();
                ctx.save();
                ctx.transform.apply(ctx, image.transform);
                ctx.scale(1, -1);
                drawImageAtIntegerCoords(ctx, maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
                ctx.restore();
              }
              this.compose();
            }
            paintImageXObject(objId) {
              if (!this.contentVisible) {
                return;
              }
              const imgData = this.getObject(objId);
              if (!imgData) {
                (0, _util2.warn)("Dependent image isn't ready yet");
                return;
              }
              this.paintInlineImageXObject(imgData);
            }
            paintImageXObjectRepeat(objId, scaleX, scaleY, positions) {
              if (!this.contentVisible) {
                return;
              }
              const imgData = this.getObject(objId);
              if (!imgData) {
                (0, _util2.warn)("Dependent image isn't ready yet");
                return;
              }
              const width = imgData.width;
              const height = imgData.height;
              const map = [];
              for (let i = 0, ii = positions.length; i < ii; i += 2) {
                map.push({
                  transform: [scaleX, 0, 0, scaleY, positions[i], positions[i + 1]],
                  x: 0,
                  y: 0,
                  w: width,
                  h: height
                });
              }
              this.paintInlineImageXObjectGroup(imgData, map);
            }
            paintInlineImageXObject(imgData) {
              if (!this.contentVisible) {
                return;
              }
              const width = imgData.width;
              const height = imgData.height;
              const ctx = this.ctx;
              this.save();
              ctx.scale(1 / width, -1 / height);
              let imgToPaint;
              if (typeof HTMLElement === "function" && imgData instanceof HTMLElement || !imgData.data) {
                imgToPaint = imgData;
              } else {
                const tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", width, height, false);
                const tmpCtx = tmpCanvas.context;
                putBinaryImageData(tmpCtx, imgData, this.current.transferMaps);
                imgToPaint = tmpCanvas.canvas;
              }
              const scaled = this._scaleImage(imgToPaint, ctx.mozCurrentTransformInverse);
              ctx.imageSmoothingEnabled = getImageSmoothingEnabled(ctx.mozCurrentTransform, imgData.interpolate);
              const [rWidth, rHeight] = drawImageAtIntegerCoords(ctx, scaled.img, 0, 0, scaled.paintWidth, scaled.paintHeight, 0, -height, width, height);
              if (this.imageLayer) {
                const position = this.getCanvasPosition(0, -height);
                this.imageLayer.appendImage({
                  imgData,
                  left: position[0],
                  top: position[1],
                  width: rWidth,
                  height: rHeight
                });
              }
              this.compose();
              this.restore();
            }
            paintInlineImageXObjectGroup(imgData, map) {
              if (!this.contentVisible) {
                return;
              }
              const ctx = this.ctx;
              const w = imgData.width;
              const h = imgData.height;
              const tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", w, h, false);
              const tmpCtx = tmpCanvas.context;
              putBinaryImageData(tmpCtx, imgData, this.current.transferMaps);
              for (let i = 0, ii = map.length; i < ii; i++) {
                const entry = map[i];
                ctx.save();
                ctx.transform.apply(ctx, entry.transform);
                ctx.scale(1, -1);
                drawImageAtIntegerCoords(ctx, tmpCanvas.canvas, entry.x, entry.y, entry.w, entry.h, 0, -1, 1, 1);
                if (this.imageLayer) {
                  const position = this.getCanvasPosition(entry.x, entry.y);
                  this.imageLayer.appendImage({
                    imgData,
                    left: position[0],
                    top: position[1],
                    width: w,
                    height: h
                  });
                }
                ctx.restore();
              }
              this.compose();
            }
            paintSolidColorImageMask() {
              if (!this.contentVisible) {
                return;
              }
              this.ctx.fillRect(0, 0, 1, 1);
              this.compose();
            }
            markPoint(tag) {
            }
            markPointProps(tag, properties) {
            }
            beginMarkedContent(tag) {
              this.markedContentStack.push({
                visible: true
              });
            }
            beginMarkedContentProps(tag, properties) {
              if (tag === "OC") {
                this.markedContentStack.push({
                  visible: this.optionalContentConfig.isVisible(properties)
                });
              } else {
                this.markedContentStack.push({
                  visible: true
                });
              }
              this.contentVisible = this.isContentVisible();
            }
            endMarkedContent() {
              this.markedContentStack.pop();
              this.contentVisible = this.isContentVisible();
            }
            beginCompat() {
            }
            endCompat() {
            }
            consumePath(clipBox) {
              const isEmpty = this.current.isEmptyClip();
              if (this.pendingClip) {
                this.current.updateClipFromPath();
              }
              if (!this.pendingClip) {
                this.compose(clipBox);
              }
              const ctx = this.ctx;
              if (this.pendingClip) {
                if (!isEmpty) {
                  if (this.pendingClip === EO_CLIP) {
                    ctx.clip("evenodd");
                  } else {
                    ctx.clip();
                  }
                }
                this.pendingClip = null;
              }
              this.current.startNewPathAndClipBox(this.current.clipBox);
              ctx.beginPath();
            }
            getSinglePixelWidth() {
              if (!this._cachedGetSinglePixelWidth) {
                const m = this.ctx.mozCurrentTransform;
                if (m[1] === 0 && m[2] === 0) {
                  this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(m[0]), Math.abs(m[3]));
                } else {
                  const absDet = Math.abs(m[0] * m[3] - m[2] * m[1]);
                  const normX = Math.hypot(m[0], m[2]);
                  const normY = Math.hypot(m[1], m[3]);
                  this._cachedGetSinglePixelWidth = Math.max(normX, normY) / absDet;
                }
              }
              return this._cachedGetSinglePixelWidth;
            }
            getScaleForStroking() {
              if (!this._cachedScaleForStroking) {
                const {
                  lineWidth
                } = this.current;
                const m = this.ctx.mozCurrentTransform;
                let scaleX, scaleY;
                if (m[1] === 0 && m[2] === 0) {
                  const normX = Math.abs(m[0]);
                  const normY = Math.abs(m[3]);
                  if (lineWidth === 0) {
                    scaleX = 1 / normX;
                    scaleY = 1 / normY;
                  } else {
                    const scaledXLineWidth = normX * lineWidth;
                    const scaledYLineWidth = normY * lineWidth;
                    scaleX = scaledXLineWidth < 1 ? 1 / scaledXLineWidth : 1;
                    scaleY = scaledYLineWidth < 1 ? 1 / scaledYLineWidth : 1;
                  }
                } else {
                  const absDet = Math.abs(m[0] * m[3] - m[2] * m[1]);
                  const normX = Math.hypot(m[0], m[1]);
                  const normY = Math.hypot(m[2], m[3]);
                  if (lineWidth === 0) {
                    scaleX = normY / absDet;
                    scaleY = normX / absDet;
                  } else {
                    const baseArea = lineWidth * absDet;
                    scaleX = normY > baseArea ? normY / baseArea : 1;
                    scaleY = normX > baseArea ? normX / baseArea : 1;
                  }
                }
                this._cachedScaleForStroking = [scaleX, scaleY];
              }
              return this._cachedScaleForStroking;
            }
            rescaleAndStroke(saveRestore) {
              const {
                ctx
              } = this;
              const {
                lineWidth
              } = this.current;
              const [scaleX, scaleY] = this.getScaleForStroking();
              ctx.lineWidth = lineWidth || 1;
              if (scaleX === 1 && scaleY === 1) {
                ctx.stroke();
                return;
              }
              let savedMatrix, savedDashes, savedDashOffset;
              if (saveRestore) {
                savedMatrix = ctx.mozCurrentTransform.slice();
                savedDashes = ctx.getLineDash().slice();
                savedDashOffset = ctx.lineDashOffset;
              }
              ctx.scale(scaleX, scaleY);
              const scale2 = Math.max(scaleX, scaleY);
              ctx.setLineDash(ctx.getLineDash().map((x) => x / scale2));
              ctx.lineDashOffset /= scale2;
              ctx.stroke();
              if (saveRestore) {
                ctx.setTransform(...savedMatrix);
                ctx.setLineDash(savedDashes);
                ctx.lineDashOffset = savedDashOffset;
              }
            }
            getCanvasPosition(x, y) {
              const transform = this.ctx.mozCurrentTransform;
              return [transform[0] * x + transform[2] * y + transform[4], transform[1] * x + transform[3] * y + transform[5]];
            }
            isContentVisible() {
              for (let i = this.markedContentStack.length - 1; i >= 0; i--) {
                if (!this.markedContentStack[i].visible) {
                  return false;
                }
              }
              return true;
            }
          }
          exports2.CanvasGraphics = CanvasGraphics;
          for (const op in _util2.OPS) {
            if (CanvasGraphics.prototype[op] !== void 0) {
              CanvasGraphics.prototype[_util2.OPS[op]] = CanvasGraphics.prototype[op];
            }
          }
        },
        (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.TilingPattern = exports2.PathType = void 0;
          exports2.getShadingPattern = getShadingPattern;
          var _util2 = __w_pdfjs_require__2(1);
          var _is_node2 = __w_pdfjs_require__2(3);
          const PathType = {
            FILL: "Fill",
            STROKE: "Stroke",
            SHADING: "Shading"
          };
          exports2.PathType = PathType;
          function applyBoundingBox(ctx, bbox) {
            if (!bbox || _is_node2.isNodeJS) {
              return;
            }
            const width = bbox[2] - bbox[0];
            const height = bbox[3] - bbox[1];
            const region = new Path2D();
            region.rect(bbox[0], bbox[1], width, height);
            ctx.clip(region);
          }
          class BaseShadingPattern {
            constructor() {
              if (this.constructor === BaseShadingPattern) {
                (0, _util2.unreachable)("Cannot initialize BaseShadingPattern.");
              }
            }
            getPattern() {
              (0, _util2.unreachable)("Abstract method `getPattern` called.");
            }
          }
          class RadialAxialShadingPattern extends BaseShadingPattern {
            constructor(IR) {
              super();
              this._type = IR[1];
              this._bbox = IR[2];
              this._colorStops = IR[3];
              this._p0 = IR[4];
              this._p1 = IR[5];
              this._r0 = IR[6];
              this._r1 = IR[7];
              this.matrix = null;
            }
            _createGradient(ctx) {
              let grad;
              if (this._type === "axial") {
                grad = ctx.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]);
              } else if (this._type === "radial") {
                grad = ctx.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1);
              }
              for (const colorStop of this._colorStops) {
                grad.addColorStop(colorStop[0], colorStop[1]);
              }
              return grad;
            }
            getPattern(ctx, owner, inverse, pathType) {
              let pattern;
              if (pathType === PathType.STROKE || pathType === PathType.FILL) {
                const ownerBBox = owner.current.getClippedPathBoundingBox(pathType, ctx.mozCurrentTransform) || [0, 0, 0, 0];
                const width = Math.ceil(ownerBBox[2] - ownerBBox[0]) || 1;
                const height = Math.ceil(ownerBBox[3] - ownerBBox[1]) || 1;
                const tmpCanvas = owner.cachedCanvases.getCanvas("pattern", width, height, true);
                const tmpCtx = tmpCanvas.context;
                tmpCtx.clearRect(0, 0, tmpCtx.canvas.width, tmpCtx.canvas.height);
                tmpCtx.beginPath();
                tmpCtx.rect(0, 0, tmpCtx.canvas.width, tmpCtx.canvas.height);
                tmpCtx.translate(-ownerBBox[0], -ownerBBox[1]);
                inverse = _util2.Util.transform(inverse, [1, 0, 0, 1, ownerBBox[0], ownerBBox[1]]);
                tmpCtx.transform.apply(tmpCtx, owner.baseTransform);
                if (this.matrix) {
                  tmpCtx.transform.apply(tmpCtx, this.matrix);
                }
                applyBoundingBox(tmpCtx, this._bbox);
                tmpCtx.fillStyle = this._createGradient(tmpCtx);
                tmpCtx.fill();
                pattern = ctx.createPattern(tmpCanvas.canvas, "no-repeat");
                const domMatrix = new DOMMatrix(inverse);
                try {
                  pattern.setTransform(domMatrix);
                } catch (ex) {
                  (0, _util2.warn)(`RadialAxialShadingPattern.getPattern: "${ex == null ? void 0 : ex.message}".`);
                }
              } else {
                applyBoundingBox(ctx, this._bbox);
                pattern = this._createGradient(ctx);
              }
              return pattern;
            }
          }
          function drawTriangle(data, context, p1, p2, p3, c1, c2, c3) {
            const coords = context.coords, colors = context.colors;
            const bytes = data.data, rowSize = data.width * 4;
            let tmp;
            if (coords[p1 + 1] > coords[p2 + 1]) {
              tmp = p1;
              p1 = p2;
              p2 = tmp;
              tmp = c1;
              c1 = c2;
              c2 = tmp;
            }
            if (coords[p2 + 1] > coords[p3 + 1]) {
              tmp = p2;
              p2 = p3;
              p3 = tmp;
              tmp = c2;
              c2 = c3;
              c3 = tmp;
            }
            if (coords[p1 + 1] > coords[p2 + 1]) {
              tmp = p1;
              p1 = p2;
              p2 = tmp;
              tmp = c1;
              c1 = c2;
              c2 = tmp;
            }
            const x1 = (coords[p1] + context.offsetX) * context.scaleX;
            const y1 = (coords[p1 + 1] + context.offsetY) * context.scaleY;
            const x2 = (coords[p2] + context.offsetX) * context.scaleX;
            const y2 = (coords[p2 + 1] + context.offsetY) * context.scaleY;
            const x3 = (coords[p3] + context.offsetX) * context.scaleX;
            const y3 = (coords[p3 + 1] + context.offsetY) * context.scaleY;
            if (y1 >= y3) {
              return;
            }
            const c1r = colors[c1], c1g = colors[c1 + 1], c1b = colors[c1 + 2];
            const c2r = colors[c2], c2g = colors[c2 + 1], c2b = colors[c2 + 2];
            const c3r = colors[c3], c3g = colors[c3 + 1], c3b = colors[c3 + 2];
            const minY = Math.round(y1), maxY = Math.round(y3);
            let xa, car, cag, cab;
            let xb, cbr, cbg, cbb;
            for (let y = minY; y <= maxY; y++) {
              if (y < y2) {
                let k2;
                if (y < y1) {
                  k2 = 0;
                } else {
                  k2 = (y1 - y) / (y1 - y2);
                }
                xa = x1 - (x1 - x2) * k2;
                car = c1r - (c1r - c2r) * k2;
                cag = c1g - (c1g - c2g) * k2;
                cab = c1b - (c1b - c2b) * k2;
              } else {
                let k2;
                if (y > y3) {
                  k2 = 1;
                } else if (y2 === y3) {
                  k2 = 0;
                } else {
                  k2 = (y2 - y) / (y2 - y3);
                }
                xa = x2 - (x2 - x3) * k2;
                car = c2r - (c2r - c3r) * k2;
                cag = c2g - (c2g - c3g) * k2;
                cab = c2b - (c2b - c3b) * k2;
              }
              let k;
              if (y < y1) {
                k = 0;
              } else if (y > y3) {
                k = 1;
              } else {
                k = (y1 - y) / (y1 - y3);
              }
              xb = x1 - (x1 - x3) * k;
              cbr = c1r - (c1r - c3r) * k;
              cbg = c1g - (c1g - c3g) * k;
              cbb = c1b - (c1b - c3b) * k;
              const x1_ = Math.round(Math.min(xa, xb));
              const x2_ = Math.round(Math.max(xa, xb));
              let j = rowSize * y + x1_ * 4;
              for (let x = x1_; x <= x2_; x++) {
                k = (xa - x) / (xa - xb);
                if (k < 0) {
                  k = 0;
                } else if (k > 1) {
                  k = 1;
                }
                bytes[j++] = car - (car - cbr) * k | 0;
                bytes[j++] = cag - (cag - cbg) * k | 0;
                bytes[j++] = cab - (cab - cbb) * k | 0;
                bytes[j++] = 255;
              }
            }
          }
          function drawFigure(data, figure, context) {
            const ps = figure.coords;
            const cs = figure.colors;
            let i, ii;
            switch (figure.type) {
              case "lattice":
                const verticesPerRow = figure.verticesPerRow;
                const rows = Math.floor(ps.length / verticesPerRow) - 1;
                const cols = verticesPerRow - 1;
                for (i = 0; i < rows; i++) {
                  let q = i * verticesPerRow;
                  for (let j = 0; j < cols; j++, q++) {
                    drawTriangle(data, context, ps[q], ps[q + 1], ps[q + verticesPerRow], cs[q], cs[q + 1], cs[q + verticesPerRow]);
                    drawTriangle(data, context, ps[q + verticesPerRow + 1], ps[q + 1], ps[q + verticesPerRow], cs[q + verticesPerRow + 1], cs[q + 1], cs[q + verticesPerRow]);
                  }
                }
                break;
              case "triangles":
                for (i = 0, ii = ps.length; i < ii; i += 3) {
                  drawTriangle(data, context, ps[i], ps[i + 1], ps[i + 2], cs[i], cs[i + 1], cs[i + 2]);
                }
                break;
              default:
                throw new Error("illegal figure");
            }
          }
          class MeshShadingPattern extends BaseShadingPattern {
            constructor(IR) {
              super();
              this._coords = IR[2];
              this._colors = IR[3];
              this._figures = IR[4];
              this._bounds = IR[5];
              this._bbox = IR[7];
              this._background = IR[8];
              this.matrix = null;
            }
            _createMeshCanvas(combinedScale, backgroundColor, cachedCanvases) {
              const EXPECTED_SCALE = 1.1;
              const MAX_PATTERN_SIZE = 3e3;
              const BORDER_SIZE = 2;
              const offsetX = Math.floor(this._bounds[0]);
              const offsetY = Math.floor(this._bounds[1]);
              const boundsWidth = Math.ceil(this._bounds[2]) - offsetX;
              const boundsHeight = Math.ceil(this._bounds[3]) - offsetY;
              const width = Math.min(Math.ceil(Math.abs(boundsWidth * combinedScale[0] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
              const height = Math.min(Math.ceil(Math.abs(boundsHeight * combinedScale[1] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
              const scaleX = boundsWidth / width;
              const scaleY = boundsHeight / height;
              const context = {
                coords: this._coords,
                colors: this._colors,
                offsetX: -offsetX,
                offsetY: -offsetY,
                scaleX: 1 / scaleX,
                scaleY: 1 / scaleY
              };
              const paddedWidth = width + BORDER_SIZE * 2;
              const paddedHeight = height + BORDER_SIZE * 2;
              const tmpCanvas = cachedCanvases.getCanvas("mesh", paddedWidth, paddedHeight, false);
              const tmpCtx = tmpCanvas.context;
              const data = tmpCtx.createImageData(width, height);
              if (backgroundColor) {
                const bytes = data.data;
                for (let i = 0, ii = bytes.length; i < ii; i += 4) {
                  bytes[i] = backgroundColor[0];
                  bytes[i + 1] = backgroundColor[1];
                  bytes[i + 2] = backgroundColor[2];
                  bytes[i + 3] = 255;
                }
              }
              for (const figure of this._figures) {
                drawFigure(data, figure, context);
              }
              tmpCtx.putImageData(data, BORDER_SIZE, BORDER_SIZE);
              const canvas = tmpCanvas.canvas;
              return {
                canvas,
                offsetX: offsetX - BORDER_SIZE * scaleX,
                offsetY: offsetY - BORDER_SIZE * scaleY,
                scaleX,
                scaleY
              };
            }
            getPattern(ctx, owner, inverse, pathType) {
              applyBoundingBox(ctx, this._bbox);
              let scale2;
              if (pathType === PathType.SHADING) {
                scale2 = _util2.Util.singularValueDecompose2dScale(ctx.mozCurrentTransform);
              } else {
                scale2 = _util2.Util.singularValueDecompose2dScale(owner.baseTransform);
                if (this.matrix) {
                  const matrixScale = _util2.Util.singularValueDecompose2dScale(this.matrix);
                  scale2 = [scale2[0] * matrixScale[0], scale2[1] * matrixScale[1]];
                }
              }
              const temporaryPatternCanvas = this._createMeshCanvas(scale2, pathType === PathType.SHADING ? null : this._background, owner.cachedCanvases);
              if (pathType !== PathType.SHADING) {
                ctx.setTransform.apply(ctx, owner.baseTransform);
                if (this.matrix) {
                  ctx.transform.apply(ctx, this.matrix);
                }
              }
              ctx.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
              ctx.scale(temporaryPatternCanvas.scaleX, temporaryPatternCanvas.scaleY);
              return ctx.createPattern(temporaryPatternCanvas.canvas, "no-repeat");
            }
          }
          class DummyShadingPattern extends BaseShadingPattern {
            getPattern() {
              return "hotpink";
            }
          }
          function getShadingPattern(IR) {
            switch (IR[0]) {
              case "RadialAxial":
                return new RadialAxialShadingPattern(IR);
              case "Mesh":
                return new MeshShadingPattern(IR);
              case "Dummy":
                return new DummyShadingPattern();
            }
            throw new Error(`Unknown IR type: ${IR[0]}`);
          }
          const PaintType = {
            COLORED: 1,
            UNCOLORED: 2
          };
          class TilingPattern {
            static get MAX_PATTERN_SIZE() {
              return (0, _util2.shadow)(this, "MAX_PATTERN_SIZE", 3e3);
            }
            constructor(IR, color, ctx, canvasGraphicsFactory, baseTransform) {
              this.operatorList = IR[2];
              this.matrix = IR[3] || [1, 0, 0, 1, 0, 0];
              this.bbox = IR[4];
              this.xstep = IR[5];
              this.ystep = IR[6];
              this.paintType = IR[7];
              this.tilingType = IR[8];
              this.color = color;
              this.ctx = ctx;
              this.canvasGraphicsFactory = canvasGraphicsFactory;
              this.baseTransform = baseTransform;
            }
            createPatternCanvas(owner) {
              const operatorList = this.operatorList;
              const bbox = this.bbox;
              const xstep = this.xstep;
              const ystep = this.ystep;
              const paintType = this.paintType;
              const tilingType = this.tilingType;
              const color = this.color;
              const canvasGraphicsFactory = this.canvasGraphicsFactory;
              (0, _util2.info)("TilingType: " + tilingType);
              const x0 = bbox[0], y0 = bbox[1], x1 = bbox[2], y1 = bbox[3];
              const matrixScale = _util2.Util.singularValueDecompose2dScale(this.matrix);
              const curMatrixScale = _util2.Util.singularValueDecompose2dScale(this.baseTransform);
              const combinedScale = [matrixScale[0] * curMatrixScale[0], matrixScale[1] * curMatrixScale[1]];
              const dimx = this.getSizeAndScale(xstep, this.ctx.canvas.width, combinedScale[0]);
              const dimy = this.getSizeAndScale(ystep, this.ctx.canvas.height, combinedScale[1]);
              const tmpCanvas = owner.cachedCanvases.getCanvas("pattern", dimx.size, dimy.size, true);
              const tmpCtx = tmpCanvas.context;
              const graphics = canvasGraphicsFactory.createCanvasGraphics(tmpCtx);
              graphics.groupLevel = owner.groupLevel;
              this.setFillAndStrokeStyleToContext(graphics, paintType, color);
              let adjustedX0 = x0;
              let adjustedY0 = y0;
              let adjustedX1 = x1;
              let adjustedY1 = y1;
              if (x0 < 0) {
                adjustedX0 = 0;
                adjustedX1 += Math.abs(x0);
              }
              if (y0 < 0) {
                adjustedY0 = 0;
                adjustedY1 += Math.abs(y0);
              }
              tmpCtx.translate(-(dimx.scale * adjustedX0), -(dimy.scale * adjustedY0));
              graphics.transform(dimx.scale, 0, 0, dimy.scale, 0, 0);
              tmpCtx.save();
              this.clipBbox(graphics, adjustedX0, adjustedY0, adjustedX1, adjustedY1);
              graphics.baseTransform = graphics.ctx.mozCurrentTransform.slice();
              graphics.executeOperatorList(operatorList);
              graphics.endDrawing();
              return {
                canvas: tmpCanvas.canvas,
                scaleX: dimx.scale,
                scaleY: dimy.scale,
                offsetX: adjustedX0,
                offsetY: adjustedY0
              };
            }
            getSizeAndScale(step, realOutputSize, scale2) {
              step = Math.abs(step);
              const maxSize = Math.max(TilingPattern.MAX_PATTERN_SIZE, realOutputSize);
              let size = Math.ceil(step * scale2);
              if (size >= maxSize) {
                size = maxSize;
              } else {
                scale2 = size / step;
              }
              return {
                scale: scale2,
                size
              };
            }
            clipBbox(graphics, x0, y0, x1, y1) {
              const bboxWidth = x1 - x0;
              const bboxHeight = y1 - y0;
              graphics.ctx.rect(x0, y0, bboxWidth, bboxHeight);
              graphics.current.updateRectMinMax(graphics.ctx.mozCurrentTransform, [x0, y0, x1, y1]);
              graphics.clip();
              graphics.endPath();
            }
            setFillAndStrokeStyleToContext(graphics, paintType, color) {
              const context = graphics.ctx, current = graphics.current;
              switch (paintType) {
                case PaintType.COLORED:
                  const ctx = this.ctx;
                  context.fillStyle = ctx.fillStyle;
                  context.strokeStyle = ctx.strokeStyle;
                  current.fillColor = ctx.fillStyle;
                  current.strokeColor = ctx.strokeStyle;
                  break;
                case PaintType.UNCOLORED:
                  const cssColor = _util2.Util.makeHexColor(color[0], color[1], color[2]);
                  context.fillStyle = cssColor;
                  context.strokeStyle = cssColor;
                  current.fillColor = cssColor;
                  current.strokeColor = cssColor;
                  break;
                default:
                  throw new _util2.FormatError(`Unsupported paint type: ${paintType}`);
              }
            }
            getPattern(ctx, owner, inverse, pathType) {
              let matrix = inverse;
              if (pathType !== PathType.SHADING) {
                matrix = _util2.Util.transform(matrix, owner.baseTransform);
                if (this.matrix) {
                  matrix = _util2.Util.transform(matrix, this.matrix);
                }
              }
              const temporaryPatternCanvas = this.createPatternCanvas(owner);
              let domMatrix = new DOMMatrix(matrix);
              domMatrix = domMatrix.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
              domMatrix = domMatrix.scale(1 / temporaryPatternCanvas.scaleX, 1 / temporaryPatternCanvas.scaleY);
              const pattern = ctx.createPattern(temporaryPatternCanvas.canvas, "repeat");
              try {
                pattern.setTransform(domMatrix);
              } catch (ex) {
                (0, _util2.warn)(`TilingPattern.getPattern: "${ex == null ? void 0 : ex.message}".`);
              }
              return pattern;
            }
          }
          exports2.TilingPattern = TilingPattern;
        },
        (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.applyMaskImageData = applyMaskImageData;
          var _util2 = __w_pdfjs_require__2(1);
          function applyMaskImageData({
            src,
            srcPos = 0,
            dest,
            destPos = 0,
            width,
            height,
            inverseDecode = false
          }) {
            const opaque = _util2.FeatureTest.isLittleEndian ? 4278190080 : 255;
            const [zeroMapping, oneMapping] = !inverseDecode ? [opaque, 0] : [0, opaque];
            const widthInSource = width >> 3;
            const widthRemainder = width & 7;
            const srcLength = src.length;
            dest = new Uint32Array(dest.buffer);
            for (let i = 0; i < height; i++) {
              for (const max = srcPos + widthInSource; srcPos < max; srcPos++) {
                const elem2 = srcPos < srcLength ? src[srcPos] : 255;
                dest[destPos++] = elem2 & 128 ? oneMapping : zeroMapping;
                dest[destPos++] = elem2 & 64 ? oneMapping : zeroMapping;
                dest[destPos++] = elem2 & 32 ? oneMapping : zeroMapping;
                dest[destPos++] = elem2 & 16 ? oneMapping : zeroMapping;
                dest[destPos++] = elem2 & 8 ? oneMapping : zeroMapping;
                dest[destPos++] = elem2 & 4 ? oneMapping : zeroMapping;
                dest[destPos++] = elem2 & 2 ? oneMapping : zeroMapping;
                dest[destPos++] = elem2 & 1 ? oneMapping : zeroMapping;
              }
              if (widthRemainder === 0) {
                continue;
              }
              const elem = srcPos < srcLength ? src[srcPos++] : 255;
              for (let j = 0; j < widthRemainder; j++) {
                dest[destPos++] = elem & 1 << 7 - j ? oneMapping : zeroMapping;
              }
            }
            return {
              srcPos,
              destPos
            };
          }
        },
        (__unused_webpack_module2, exports2) => {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.GlobalWorkerOptions = void 0;
          const GlobalWorkerOptions = /* @__PURE__ */ Object.create(null);
          exports2.GlobalWorkerOptions = GlobalWorkerOptions;
          GlobalWorkerOptions.workerPort = GlobalWorkerOptions.workerPort === void 0 ? null : GlobalWorkerOptions.workerPort;
          GlobalWorkerOptions.workerSrc = GlobalWorkerOptions.workerSrc === void 0 ? "" : GlobalWorkerOptions.workerSrc;
        },
        (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.MessageHandler = void 0;
          var _util2 = __w_pdfjs_require__2(1);
          const CallbackKind = {
            UNKNOWN: 0,
            DATA: 1,
            ERROR: 2
          };
          const StreamKind = {
            UNKNOWN: 0,
            CANCEL: 1,
            CANCEL_COMPLETE: 2,
            CLOSE: 3,
            ENQUEUE: 4,
            ERROR: 5,
            PULL: 6,
            PULL_COMPLETE: 7,
            START_COMPLETE: 8
          };
          function wrapReason(reason) {
            if (!(reason instanceof Error || typeof reason === "object" && reason !== null)) {
              (0, _util2.unreachable)('wrapReason: Expected "reason" to be a (possibly cloned) Error.');
            }
            switch (reason.name) {
              case "AbortException":
                return new _util2.AbortException(reason.message);
              case "MissingPDFException":
                return new _util2.MissingPDFException(reason.message);
              case "PasswordException":
                return new _util2.PasswordException(reason.message, reason.code);
              case "UnexpectedResponseException":
                return new _util2.UnexpectedResponseException(reason.message, reason.status);
              case "UnknownErrorException":
                return new _util2.UnknownErrorException(reason.message, reason.details);
              default:
                return new _util2.UnknownErrorException(reason.message, reason.toString());
            }
          }
          class MessageHandler {
            constructor(sourceName, targetName, comObj) {
              this.sourceName = sourceName;
              this.targetName = targetName;
              this.comObj = comObj;
              this.callbackId = 1;
              this.streamId = 1;
              this.streamSinks = /* @__PURE__ */ Object.create(null);
              this.streamControllers = /* @__PURE__ */ Object.create(null);
              this.callbackCapabilities = /* @__PURE__ */ Object.create(null);
              this.actionHandler = /* @__PURE__ */ Object.create(null);
              this._onComObjOnMessage = (event) => {
                const data = event.data;
                if (data.targetName !== this.sourceName) {
                  return;
                }
                if (data.stream) {
                  this._processStreamMessage(data);
                  return;
                }
                if (data.callback) {
                  const callbackId = data.callbackId;
                  const capability = this.callbackCapabilities[callbackId];
                  if (!capability) {
                    throw new Error(`Cannot resolve callback ${callbackId}`);
                  }
                  delete this.callbackCapabilities[callbackId];
                  if (data.callback === CallbackKind.DATA) {
                    capability.resolve(data.data);
                  } else if (data.callback === CallbackKind.ERROR) {
                    capability.reject(wrapReason(data.reason));
                  } else {
                    throw new Error("Unexpected callback case");
                  }
                  return;
                }
                const action = this.actionHandler[data.action];
                if (!action) {
                  throw new Error(`Unknown action from worker: ${data.action}`);
                }
                if (data.callbackId) {
                  const cbSourceName = this.sourceName;
                  const cbTargetName = data.sourceName;
                  new Promise(function(resolve) {
                    resolve(action(data.data));
                  }).then(function(result) {
                    comObj.postMessage({
                      sourceName: cbSourceName,
                      targetName: cbTargetName,
                      callback: CallbackKind.DATA,
                      callbackId: data.callbackId,
                      data: result
                    });
                  }, function(reason) {
                    comObj.postMessage({
                      sourceName: cbSourceName,
                      targetName: cbTargetName,
                      callback: CallbackKind.ERROR,
                      callbackId: data.callbackId,
                      reason: wrapReason(reason)
                    });
                  });
                  return;
                }
                if (data.streamId) {
                  this._createStreamSink(data);
                  return;
                }
                action(data.data);
              };
              comObj.addEventListener("message", this._onComObjOnMessage);
            }
            on(actionName, handler) {
              const ah = this.actionHandler;
              if (ah[actionName]) {
                throw new Error(`There is already an actionName called "${actionName}"`);
              }
              ah[actionName] = handler;
            }
            send(actionName, data, transfers) {
              this.comObj.postMessage({
                sourceName: this.sourceName,
                targetName: this.targetName,
                action: actionName,
                data
              }, transfers);
            }
            sendWithPromise(actionName, data, transfers) {
              const callbackId = this.callbackId++;
              const capability = (0, _util2.createPromiseCapability)();
              this.callbackCapabilities[callbackId] = capability;
              try {
                this.comObj.postMessage({
                  sourceName: this.sourceName,
                  targetName: this.targetName,
                  action: actionName,
                  callbackId,
                  data
                }, transfers);
              } catch (ex) {
                capability.reject(ex);
              }
              return capability.promise;
            }
            sendWithStream(actionName, data, queueingStrategy, transfers) {
              const streamId = this.streamId++, sourceName = this.sourceName, targetName = this.targetName, comObj = this.comObj;
              return new ReadableStream({
                start: (controller) => {
                  const startCapability = (0, _util2.createPromiseCapability)();
                  this.streamControllers[streamId] = {
                    controller,
                    startCall: startCapability,
                    pullCall: null,
                    cancelCall: null,
                    isClosed: false
                  };
                  comObj.postMessage({
                    sourceName,
                    targetName,
                    action: actionName,
                    streamId,
                    data,
                    desiredSize: controller.desiredSize
                  }, transfers);
                  return startCapability.promise;
                },
                pull: (controller) => {
                  const pullCapability = (0, _util2.createPromiseCapability)();
                  this.streamControllers[streamId].pullCall = pullCapability;
                  comObj.postMessage({
                    sourceName,
                    targetName,
                    stream: StreamKind.PULL,
                    streamId,
                    desiredSize: controller.desiredSize
                  });
                  return pullCapability.promise;
                },
                cancel: (reason) => {
                  (0, _util2.assert)(reason instanceof Error, "cancel must have a valid reason");
                  const cancelCapability = (0, _util2.createPromiseCapability)();
                  this.streamControllers[streamId].cancelCall = cancelCapability;
                  this.streamControllers[streamId].isClosed = true;
                  comObj.postMessage({
                    sourceName,
                    targetName,
                    stream: StreamKind.CANCEL,
                    streamId,
                    reason: wrapReason(reason)
                  });
                  return cancelCapability.promise;
                }
              }, queueingStrategy);
            }
            _createStreamSink(data) {
              const streamId = data.streamId, sourceName = this.sourceName, targetName = data.sourceName, comObj = this.comObj;
              const self2 = this, action = this.actionHandler[data.action];
              const streamSink = {
                enqueue(chunk, size = 1, transfers) {
                  if (this.isCancelled) {
                    return;
                  }
                  const lastDesiredSize = this.desiredSize;
                  this.desiredSize -= size;
                  if (lastDesiredSize > 0 && this.desiredSize <= 0) {
                    this.sinkCapability = (0, _util2.createPromiseCapability)();
                    this.ready = this.sinkCapability.promise;
                  }
                  comObj.postMessage({
                    sourceName,
                    targetName,
                    stream: StreamKind.ENQUEUE,
                    streamId,
                    chunk
                  }, transfers);
                },
                close() {
                  if (this.isCancelled) {
                    return;
                  }
                  this.isCancelled = true;
                  comObj.postMessage({
                    sourceName,
                    targetName,
                    stream: StreamKind.CLOSE,
                    streamId
                  });
                  delete self2.streamSinks[streamId];
                },
                error(reason) {
                  (0, _util2.assert)(reason instanceof Error, "error must have a valid reason");
                  if (this.isCancelled) {
                    return;
                  }
                  this.isCancelled = true;
                  comObj.postMessage({
                    sourceName,
                    targetName,
                    stream: StreamKind.ERROR,
                    streamId,
                    reason: wrapReason(reason)
                  });
                },
                sinkCapability: (0, _util2.createPromiseCapability)(),
                onPull: null,
                onCancel: null,
                isCancelled: false,
                desiredSize: data.desiredSize,
                ready: null
              };
              streamSink.sinkCapability.resolve();
              streamSink.ready = streamSink.sinkCapability.promise;
              this.streamSinks[streamId] = streamSink;
              new Promise(function(resolve) {
                resolve(action(data.data, streamSink));
              }).then(function() {
                comObj.postMessage({
                  sourceName,
                  targetName,
                  stream: StreamKind.START_COMPLETE,
                  streamId,
                  success: true
                });
              }, function(reason) {
                comObj.postMessage({
                  sourceName,
                  targetName,
                  stream: StreamKind.START_COMPLETE,
                  streamId,
                  reason: wrapReason(reason)
                });
              });
            }
            _processStreamMessage(data) {
              const streamId = data.streamId, sourceName = this.sourceName, targetName = data.sourceName, comObj = this.comObj;
              const streamController = this.streamControllers[streamId], streamSink = this.streamSinks[streamId];
              switch (data.stream) {
                case StreamKind.START_COMPLETE:
                  if (data.success) {
                    streamController.startCall.resolve();
                  } else {
                    streamController.startCall.reject(wrapReason(data.reason));
                  }
                  break;
                case StreamKind.PULL_COMPLETE:
                  if (data.success) {
                    streamController.pullCall.resolve();
                  } else {
                    streamController.pullCall.reject(wrapReason(data.reason));
                  }
                  break;
                case StreamKind.PULL:
                  if (!streamSink) {
                    comObj.postMessage({
                      sourceName,
                      targetName,
                      stream: StreamKind.PULL_COMPLETE,
                      streamId,
                      success: true
                    });
                    break;
                  }
                  if (streamSink.desiredSize <= 0 && data.desiredSize > 0) {
                    streamSink.sinkCapability.resolve();
                  }
                  streamSink.desiredSize = data.desiredSize;
                  new Promise(function(resolve) {
                    resolve(streamSink.onPull && streamSink.onPull());
                  }).then(function() {
                    comObj.postMessage({
                      sourceName,
                      targetName,
                      stream: StreamKind.PULL_COMPLETE,
                      streamId,
                      success: true
                    });
                  }, function(reason) {
                    comObj.postMessage({
                      sourceName,
                      targetName,
                      stream: StreamKind.PULL_COMPLETE,
                      streamId,
                      reason: wrapReason(reason)
                    });
                  });
                  break;
                case StreamKind.ENQUEUE:
                  (0, _util2.assert)(streamController, "enqueue should have stream controller");
                  if (streamController.isClosed) {
                    break;
                  }
                  streamController.controller.enqueue(data.chunk);
                  break;
                case StreamKind.CLOSE:
                  (0, _util2.assert)(streamController, "close should have stream controller");
                  if (streamController.isClosed) {
                    break;
                  }
                  streamController.isClosed = true;
                  streamController.controller.close();
                  this._deleteStreamController(streamController, streamId);
                  break;
                case StreamKind.ERROR:
                  (0, _util2.assert)(streamController, "error should have stream controller");
                  streamController.controller.error(wrapReason(data.reason));
                  this._deleteStreamController(streamController, streamId);
                  break;
                case StreamKind.CANCEL_COMPLETE:
                  if (data.success) {
                    streamController.cancelCall.resolve();
                  } else {
                    streamController.cancelCall.reject(wrapReason(data.reason));
                  }
                  this._deleteStreamController(streamController, streamId);
                  break;
                case StreamKind.CANCEL:
                  if (!streamSink) {
                    break;
                  }
                  new Promise(function(resolve) {
                    resolve(streamSink.onCancel && streamSink.onCancel(wrapReason(data.reason)));
                  }).then(function() {
                    comObj.postMessage({
                      sourceName,
                      targetName,
                      stream: StreamKind.CANCEL_COMPLETE,
                      streamId,
                      success: true
                    });
                  }, function(reason) {
                    comObj.postMessage({
                      sourceName,
                      targetName,
                      stream: StreamKind.CANCEL_COMPLETE,
                      streamId,
                      reason: wrapReason(reason)
                    });
                  });
                  streamSink.sinkCapability.reject(wrapReason(data.reason));
                  streamSink.isCancelled = true;
                  delete this.streamSinks[streamId];
                  break;
                default:
                  throw new Error("Unexpected stream case");
              }
            }
            async _deleteStreamController(streamController, streamId) {
              await Promise.allSettled([streamController.startCall && streamController.startCall.promise, streamController.pullCall && streamController.pullCall.promise, streamController.cancelCall && streamController.cancelCall.promise]);
              delete this.streamControllers[streamId];
            }
            destroy() {
              this.comObj.removeEventListener("message", this._onComObjOnMessage);
            }
          }
          exports2.MessageHandler = MessageHandler;
        },
        (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
          var _metadataMap, _data;
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.Metadata = void 0;
          var _util2 = __w_pdfjs_require__2(1);
          class Metadata {
            constructor({
              parsedData,
              rawData
            }) {
              __privateAdd(this, _metadataMap, void 0);
              __privateAdd(this, _data, void 0);
              __privateSet(this, _metadataMap, parsedData);
              __privateSet(this, _data, rawData);
            }
            getRaw() {
              return __privateGet(this, _data);
            }
            get(name) {
              var _a;
              return (_a = __privateGet(this, _metadataMap).get(name)) != null ? _a : null;
            }
            getAll() {
              return (0, _util2.objectFromMap)(__privateGet(this, _metadataMap));
            }
            has(name) {
              return __privateGet(this, _metadataMap).has(name);
            }
          }
          _metadataMap = new WeakMap();
          _data = new WeakMap();
          exports2.Metadata = Metadata;
        },
        (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.OptionalContentConfig = void 0;
          var _util2 = __w_pdfjs_require__2(1);
          class OptionalContentGroup {
            constructor(name, intent) {
              this.visible = true;
              this.name = name;
              this.intent = intent;
            }
          }
          class OptionalContentConfig {
            constructor(data) {
              this.name = null;
              this.creator = null;
              this._order = null;
              this._groups = /* @__PURE__ */ new Map();
              if (data === null) {
                return;
              }
              this.name = data.name;
              this.creator = data.creator;
              this._order = data.order;
              for (const group of data.groups) {
                this._groups.set(group.id, new OptionalContentGroup(group.name, group.intent));
              }
              if (data.baseState === "OFF") {
                for (const group of this._groups) {
                  group.visible = false;
                }
              }
              for (const on of data.on) {
                this._groups.get(on).visible = true;
              }
              for (const off of data.off) {
                this._groups.get(off).visible = false;
              }
            }
            _evaluateVisibilityExpression(array) {
              const length = array.length;
              if (length < 2) {
                return true;
              }
              const operator = array[0];
              for (let i = 1; i < length; i++) {
                const element2 = array[i];
                let state;
                if (Array.isArray(element2)) {
                  state = this._evaluateVisibilityExpression(element2);
                } else if (this._groups.has(element2)) {
                  state = this._groups.get(element2).visible;
                } else {
                  (0, _util2.warn)(`Optional content group not found: ${element2}`);
                  return true;
                }
                switch (operator) {
                  case "And":
                    if (!state) {
                      return false;
                    }
                    break;
                  case "Or":
                    if (state) {
                      return true;
                    }
                    break;
                  case "Not":
                    return !state;
                  default:
                    return true;
                }
              }
              return operator === "And";
            }
            isVisible(group) {
              if (this._groups.size === 0) {
                return true;
              }
              if (!group) {
                (0, _util2.warn)("Optional content group not defined.");
                return true;
              }
              if (group.type === "OCG") {
                if (!this._groups.has(group.id)) {
                  (0, _util2.warn)(`Optional content group not found: ${group.id}`);
                  return true;
                }
                return this._groups.get(group.id).visible;
              } else if (group.type === "OCMD") {
                if (group.expression) {
                  return this._evaluateVisibilityExpression(group.expression);
                }
                if (!group.policy || group.policy === "AnyOn") {
                  for (const id of group.ids) {
                    if (!this._groups.has(id)) {
                      (0, _util2.warn)(`Optional content group not found: ${id}`);
                      return true;
                    }
                    if (this._groups.get(id).visible) {
                      return true;
                    }
                  }
                  return false;
                } else if (group.policy === "AllOn") {
                  for (const id of group.ids) {
                    if (!this._groups.has(id)) {
                      (0, _util2.warn)(`Optional content group not found: ${id}`);
                      return true;
                    }
                    if (!this._groups.get(id).visible) {
                      return false;
                    }
                  }
                  return true;
                } else if (group.policy === "AnyOff") {
                  for (const id of group.ids) {
                    if (!this._groups.has(id)) {
                      (0, _util2.warn)(`Optional content group not found: ${id}`);
                      return true;
                    }
                    if (!this._groups.get(id).visible) {
                      return true;
                    }
                  }
                  return false;
                } else if (group.policy === "AllOff") {
                  for (const id of group.ids) {
                    if (!this._groups.has(id)) {
                      (0, _util2.warn)(`Optional content group not found: ${id}`);
                      return true;
                    }
                    if (this._groups.get(id).visible) {
                      return false;
                    }
                  }
                  return true;
                }
                (0, _util2.warn)(`Unknown optional content policy ${group.policy}.`);
                return true;
              }
              (0, _util2.warn)(`Unknown group type ${group.type}.`);
              return true;
            }
            setVisibility(id, visible = true) {
              if (!this._groups.has(id)) {
                (0, _util2.warn)(`Optional content group not found: ${id}`);
                return;
              }
              this._groups.get(id).visible = !!visible;
            }
            getOrder() {
              if (!this._groups.size) {
                return null;
              }
              if (this._order) {
                return this._order.slice();
              }
              return Array.from(this._groups.keys());
            }
            getGroups() {
              return this._groups.size > 0 ? (0, _util2.objectFromMap)(this._groups) : null;
            }
            getGroup(id) {
              return this._groups.get(id) || null;
            }
          }
          exports2.OptionalContentConfig = OptionalContentConfig;
        },
        (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.PDFDataTransportStream = void 0;
          var _util2 = __w_pdfjs_require__2(1);
          var _display_utils2 = __w_pdfjs_require__2(5);
          class PDFDataTransportStream {
            constructor(params, pdfDataRangeTransport) {
              (0, _util2.assert)(pdfDataRangeTransport, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
              this._queuedChunks = [];
              this._progressiveDone = params.progressiveDone || false;
              this._contentDispositionFilename = params.contentDispositionFilename || null;
              const initialData = params.initialData;
              if ((initialData == null ? void 0 : initialData.length) > 0) {
                const buffer = new Uint8Array(initialData).buffer;
                this._queuedChunks.push(buffer);
              }
              this._pdfDataRangeTransport = pdfDataRangeTransport;
              this._isStreamingSupported = !params.disableStream;
              this._isRangeSupported = !params.disableRange;
              this._contentLength = params.length;
              this._fullRequestReader = null;
              this._rangeReaders = [];
              this._pdfDataRangeTransport.addRangeListener((begin, chunk) => {
                this._onReceiveData({
                  begin,
                  chunk
                });
              });
              this._pdfDataRangeTransport.addProgressListener((loaded, total) => {
                this._onProgress({
                  loaded,
                  total
                });
              });
              this._pdfDataRangeTransport.addProgressiveReadListener((chunk) => {
                this._onReceiveData({
                  chunk
                });
              });
              this._pdfDataRangeTransport.addProgressiveDoneListener(() => {
                this._onProgressiveDone();
              });
              this._pdfDataRangeTransport.transportReady();
            }
            _onReceiveData(args) {
              const buffer = new Uint8Array(args.chunk).buffer;
              if (args.begin === void 0) {
                if (this._fullRequestReader) {
                  this._fullRequestReader._enqueue(buffer);
                } else {
                  this._queuedChunks.push(buffer);
                }
              } else {
                const found = this._rangeReaders.some(function(rangeReader) {
                  if (rangeReader._begin !== args.begin) {
                    return false;
                  }
                  rangeReader._enqueue(buffer);
                  return true;
                });
                (0, _util2.assert)(found, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
              }
            }
            get _progressiveDataLength() {
              var _a, _b;
              return (_b = (_a = this._fullRequestReader) == null ? void 0 : _a._loaded) != null ? _b : 0;
            }
            _onProgress(evt) {
              if (evt.total === void 0) {
                const firstReader = this._rangeReaders[0];
                if (firstReader == null ? void 0 : firstReader.onProgress) {
                  firstReader.onProgress({
                    loaded: evt.loaded
                  });
                }
              } else {
                const fullReader = this._fullRequestReader;
                if (fullReader == null ? void 0 : fullReader.onProgress) {
                  fullReader.onProgress({
                    loaded: evt.loaded,
                    total: evt.total
                  });
                }
              }
            }
            _onProgressiveDone() {
              if (this._fullRequestReader) {
                this._fullRequestReader.progressiveDone();
              }
              this._progressiveDone = true;
            }
            _removeRangeReader(reader) {
              const i = this._rangeReaders.indexOf(reader);
              if (i >= 0) {
                this._rangeReaders.splice(i, 1);
              }
            }
            getFullReader() {
              (0, _util2.assert)(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
              const queuedChunks = this._queuedChunks;
              this._queuedChunks = null;
              return new PDFDataTransportStreamReader(this, queuedChunks, this._progressiveDone, this._contentDispositionFilename);
            }
            getRangeReader(begin, end) {
              if (end <= this._progressiveDataLength) {
                return null;
              }
              const reader = new PDFDataTransportStreamRangeReader(this, begin, end);
              this._pdfDataRangeTransport.requestDataRange(begin, end);
              this._rangeReaders.push(reader);
              return reader;
            }
            cancelAllRequests(reason) {
              if (this._fullRequestReader) {
                this._fullRequestReader.cancel(reason);
              }
              for (const reader of this._rangeReaders.slice(0)) {
                reader.cancel(reason);
              }
              this._pdfDataRangeTransport.abort();
            }
          }
          exports2.PDFDataTransportStream = PDFDataTransportStream;
          class PDFDataTransportStreamReader {
            constructor(stream, queuedChunks, progressiveDone = false, contentDispositionFilename = null) {
              this._stream = stream;
              this._done = progressiveDone || false;
              this._filename = (0, _display_utils2.isPdfFile)(contentDispositionFilename) ? contentDispositionFilename : null;
              this._queuedChunks = queuedChunks || [];
              this._loaded = 0;
              for (const chunk of this._queuedChunks) {
                this._loaded += chunk.byteLength;
              }
              this._requests = [];
              this._headersReady = Promise.resolve();
              stream._fullRequestReader = this;
              this.onProgress = null;
            }
            _enqueue(chunk) {
              if (this._done) {
                return;
              }
              if (this._requests.length > 0) {
                const requestCapability = this._requests.shift();
                requestCapability.resolve({
                  value: chunk,
                  done: false
                });
              } else {
                this._queuedChunks.push(chunk);
              }
              this._loaded += chunk.byteLength;
            }
            get headersReady() {
              return this._headersReady;
            }
            get filename() {
              return this._filename;
            }
            get isRangeSupported() {
              return this._stream._isRangeSupported;
            }
            get isStreamingSupported() {
              return this._stream._isStreamingSupported;
            }
            get contentLength() {
              return this._stream._contentLength;
            }
            async read() {
              if (this._queuedChunks.length > 0) {
                const chunk = this._queuedChunks.shift();
                return {
                  value: chunk,
                  done: false
                };
              }
              if (this._done) {
                return {
                  value: void 0,
                  done: true
                };
              }
              const requestCapability = (0, _util2.createPromiseCapability)();
              this._requests.push(requestCapability);
              return requestCapability.promise;
            }
            cancel(reason) {
              this._done = true;
              for (const requestCapability of this._requests) {
                requestCapability.resolve({
                  value: void 0,
                  done: true
                });
              }
              this._requests.length = 0;
            }
            progressiveDone() {
              if (this._done) {
                return;
              }
              this._done = true;
            }
          }
          class PDFDataTransportStreamRangeReader {
            constructor(stream, begin, end) {
              this._stream = stream;
              this._begin = begin;
              this._end = end;
              this._queuedChunk = null;
              this._requests = [];
              this._done = false;
              this.onProgress = null;
            }
            _enqueue(chunk) {
              if (this._done) {
                return;
              }
              if (this._requests.length === 0) {
                this._queuedChunk = chunk;
              } else {
                const requestsCapability = this._requests.shift();
                requestsCapability.resolve({
                  value: chunk,
                  done: false
                });
                for (const requestCapability of this._requests) {
                  requestCapability.resolve({
                    value: void 0,
                    done: true
                  });
                }
                this._requests.length = 0;
              }
              this._done = true;
              this._stream._removeRangeReader(this);
            }
            get isStreamingSupported() {
              return false;
            }
            async read() {
              if (this._queuedChunk) {
                const chunk = this._queuedChunk;
                this._queuedChunk = null;
                return {
                  value: chunk,
                  done: false
                };
              }
              if (this._done) {
                return {
                  value: void 0,
                  done: true
                };
              }
              const requestCapability = (0, _util2.createPromiseCapability)();
              this._requests.push(requestCapability);
              return requestCapability.promise;
            }
            cancel(reason) {
              this._done = true;
              for (const requestCapability of this._requests) {
                requestCapability.resolve({
                  value: void 0,
                  done: true
                });
              }
              this._requests.length = 0;
              this._stream._removeRangeReader(this);
            }
          }
        },
        (__unused_webpack_module2, exports2) => {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.XfaText = void 0;
          class XfaText {
            static textContent(xfa) {
              const items = [];
              const output = {
                items,
                styles: /* @__PURE__ */ Object.create(null)
              };
              function walk(node) {
                var _a;
                if (!node) {
                  return;
                }
                let str = null;
                const name = node.name;
                if (name === "#text") {
                  str = node.value;
                } else if (!XfaText.shouldBuildText(name)) {
                  return;
                } else if ((_a = node == null ? void 0 : node.attributes) == null ? void 0 : _a.textContent) {
                  str = node.attributes.textContent;
                } else if (node.value) {
                  str = node.value;
                }
                if (str !== null) {
                  items.push({
                    str
                  });
                }
                if (!node.children) {
                  return;
                }
                for (const child of node.children) {
                  walk(child);
                }
              }
              walk(xfa);
              return output;
            }
            static shouldBuildText(name) {
              return !(name === "textarea" || name === "input" || name === "option" || name === "select");
            }
          }
          exports2.XfaText = XfaText;
        },
        (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.NodeStandardFontDataFactory = exports2.NodeCanvasFactory = exports2.NodeCMapReaderFactory = void 0;
          var _base_factory = __w_pdfjs_require__2(6);
          const fetchData = function(url) {
            return new Promise((resolve, reject) => {
              const fs = require$$4;
              fs.readFile(url, (error, data) => {
                if (error || !data) {
                  reject(new Error(error));
                  return;
                }
                resolve(new Uint8Array(data));
              });
            });
          };
          class NodeCanvasFactory extends _base_factory.BaseCanvasFactory {
            _createCanvas(width, height) {
              const Canvas = require$$4;
              return Canvas.createCanvas(width, height);
            }
          }
          exports2.NodeCanvasFactory = NodeCanvasFactory;
          class NodeCMapReaderFactory extends _base_factory.BaseCMapReaderFactory {
            _fetchData(url, compressionType) {
              return fetchData(url).then((data) => {
                return {
                  cMapData: data,
                  compressionType
                };
              });
            }
          }
          exports2.NodeCMapReaderFactory = NodeCMapReaderFactory;
          class NodeStandardFontDataFactory extends _base_factory.BaseStandardFontDataFactory {
            _fetchData(url) {
              return fetchData(url);
            }
          }
          exports2.NodeStandardFontDataFactory = NodeStandardFontDataFactory;
        },
        (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
          var _setAnnotationCanvasMap, setAnnotationCanvasMap_fn;
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.AnnotationLayer = void 0;
          var _util2 = __w_pdfjs_require__2(1);
          var _display_utils2 = __w_pdfjs_require__2(5);
          var _annotation_storage2 = __w_pdfjs_require__2(8);
          var _scripting_utils = __w_pdfjs_require__2(21);
          var _xfa_layer = __w_pdfjs_require__2(22);
          const DEFAULT_TAB_INDEX = 1e3;
          const GetElementsByNameSet = /* @__PURE__ */ new WeakSet();
          function getRectDims(rect) {
            return {
              width: rect[2] - rect[0],
              height: rect[3] - rect[1]
            };
          }
          class AnnotationElementFactory {
            static create(parameters) {
              const subtype = parameters.data.annotationType;
              switch (subtype) {
                case _util2.AnnotationType.LINK:
                  return new LinkAnnotationElement(parameters);
                case _util2.AnnotationType.TEXT:
                  return new TextAnnotationElement(parameters);
                case _util2.AnnotationType.WIDGET:
                  const fieldType = parameters.data.fieldType;
                  switch (fieldType) {
                    case "Tx":
                      return new TextWidgetAnnotationElement(parameters);
                    case "Btn":
                      if (parameters.data.radioButton) {
                        return new RadioButtonWidgetAnnotationElement(parameters);
                      } else if (parameters.data.checkBox) {
                        return new CheckboxWidgetAnnotationElement(parameters);
                      }
                      return new PushButtonWidgetAnnotationElement(parameters);
                    case "Ch":
                      return new ChoiceWidgetAnnotationElement(parameters);
                  }
                  return new WidgetAnnotationElement(parameters);
                case _util2.AnnotationType.POPUP:
                  return new PopupAnnotationElement(parameters);
                case _util2.AnnotationType.FREETEXT:
                  return new FreeTextAnnotationElement(parameters);
                case _util2.AnnotationType.LINE:
                  return new LineAnnotationElement(parameters);
                case _util2.AnnotationType.SQUARE:
                  return new SquareAnnotationElement(parameters);
                case _util2.AnnotationType.CIRCLE:
                  return new CircleAnnotationElement(parameters);
                case _util2.AnnotationType.POLYLINE:
                  return new PolylineAnnotationElement(parameters);
                case _util2.AnnotationType.CARET:
                  return new CaretAnnotationElement(parameters);
                case _util2.AnnotationType.INK:
                  return new InkAnnotationElement(parameters);
                case _util2.AnnotationType.POLYGON:
                  return new PolygonAnnotationElement(parameters);
                case _util2.AnnotationType.HIGHLIGHT:
                  return new HighlightAnnotationElement(parameters);
                case _util2.AnnotationType.UNDERLINE:
                  return new UnderlineAnnotationElement(parameters);
                case _util2.AnnotationType.SQUIGGLY:
                  return new SquigglyAnnotationElement(parameters);
                case _util2.AnnotationType.STRIKEOUT:
                  return new StrikeOutAnnotationElement(parameters);
                case _util2.AnnotationType.STAMP:
                  return new StampAnnotationElement(parameters);
                case _util2.AnnotationType.FILEATTACHMENT:
                  return new FileAttachmentAnnotationElement(parameters);
                default:
                  return new AnnotationElement(parameters);
              }
            }
          }
          class AnnotationElement {
            constructor(parameters, {
              isRenderable = false,
              ignoreBorder = false,
              createQuadrilaterals = false
            } = {}) {
              this.isRenderable = isRenderable;
              this.data = parameters.data;
              this.layer = parameters.layer;
              this.page = parameters.page;
              this.viewport = parameters.viewport;
              this.linkService = parameters.linkService;
              this.downloadManager = parameters.downloadManager;
              this.imageResourcesPath = parameters.imageResourcesPath;
              this.renderForms = parameters.renderForms;
              this.svgFactory = parameters.svgFactory;
              this.annotationStorage = parameters.annotationStorage;
              this.enableScripting = parameters.enableScripting;
              this.hasJSActions = parameters.hasJSActions;
              this._fieldObjects = parameters.fieldObjects;
              this._mouseState = parameters.mouseState;
              if (isRenderable) {
                this.container = this._createContainer(ignoreBorder);
              }
              if (createQuadrilaterals) {
                this.quadrilaterals = this._createQuadrilaterals(ignoreBorder);
              }
            }
            _createContainer(ignoreBorder = false) {
              const data = this.data, page = this.page, viewport = this.viewport;
              const container = document.createElement("section");
              let {
                width,
                height
              } = getRectDims(data.rect);
              container.setAttribute("data-annotation-id", data.id);
              const rect = _util2.Util.normalizeRect([data.rect[0], page.view[3] - data.rect[1] + page.view[1], data.rect[2], page.view[3] - data.rect[3] + page.view[1]]);
              if (data.hasOwnCanvas) {
                const transform = viewport.transform.slice();
                const [scaleX, scaleY] = _util2.Util.singularValueDecompose2dScale(transform);
                width = Math.ceil(width * scaleX);
                height = Math.ceil(height * scaleY);
                rect[0] *= scaleX;
                rect[1] *= scaleY;
                for (let i = 0; i < 4; i++) {
                  transform[i] = Math.sign(transform[i]);
                }
                container.style.transform = `matrix(${transform.join(",")})`;
              } else {
                container.style.transform = `matrix(${viewport.transform.join(",")})`;
              }
              container.style.transformOrigin = `${-rect[0]}px ${-rect[1]}px`;
              if (!ignoreBorder && data.borderStyle.width > 0) {
                container.style.borderWidth = `${data.borderStyle.width}px`;
                if (data.borderStyle.style !== _util2.AnnotationBorderStyleType.UNDERLINE) {
                  width -= 2 * data.borderStyle.width;
                  height -= 2 * data.borderStyle.width;
                }
                const horizontalRadius = data.borderStyle.horizontalCornerRadius;
                const verticalRadius = data.borderStyle.verticalCornerRadius;
                if (horizontalRadius > 0 || verticalRadius > 0) {
                  const radius = `${horizontalRadius}px / ${verticalRadius}px`;
                  container.style.borderRadius = radius;
                }
                switch (data.borderStyle.style) {
                  case _util2.AnnotationBorderStyleType.SOLID:
                    container.style.borderStyle = "solid";
                    break;
                  case _util2.AnnotationBorderStyleType.DASHED:
                    container.style.borderStyle = "dashed";
                    break;
                  case _util2.AnnotationBorderStyleType.BEVELED:
                    (0, _util2.warn)("Unimplemented border style: beveled");
                    break;
                  case _util2.AnnotationBorderStyleType.INSET:
                    (0, _util2.warn)("Unimplemented border style: inset");
                    break;
                  case _util2.AnnotationBorderStyleType.UNDERLINE:
                    container.style.borderBottomStyle = "solid";
                    break;
                }
                const borderColor = data.borderColor || data.color || null;
                if (borderColor) {
                  container.style.borderColor = _util2.Util.makeHexColor(data.color[0] | 0, data.color[1] | 0, data.color[2] | 0);
                } else {
                  container.style.borderWidth = 0;
                }
              }
              container.style.left = `${rect[0]}px`;
              container.style.top = `${rect[1]}px`;
              if (data.hasOwnCanvas) {
                container.style.width = container.style.height = "auto";
              } else {
                container.style.width = `${width}px`;
                container.style.height = `${height}px`;
              }
              return container;
            }
            get _commonActions() {
              const setColor = (jsName, styleName, event) => {
                const color = event.detail[jsName];
                event.target.style[styleName] = _scripting_utils.ColorConverters[`${color[0]}_HTML`](color.slice(1));
              };
              return (0, _util2.shadow)(this, "_commonActions", {
                display: (event) => {
                  const hidden = event.detail.display % 2 === 1;
                  event.target.style.visibility = hidden ? "hidden" : "visible";
                  this.annotationStorage.setValue(this.data.id, {
                    hidden,
                    print: event.detail.display === 0 || event.detail.display === 3
                  });
                },
                print: (event) => {
                  this.annotationStorage.setValue(this.data.id, {
                    print: event.detail.print
                  });
                },
                hidden: (event) => {
                  event.target.style.visibility = event.detail.hidden ? "hidden" : "visible";
                  this.annotationStorage.setValue(this.data.id, {
                    hidden: event.detail.hidden
                  });
                },
                focus: (event) => {
                  setTimeout(() => event.target.focus({
                    preventScroll: false
                  }), 0);
                },
                userName: (event) => {
                  event.target.title = event.detail.userName;
                },
                readonly: (event) => {
                  if (event.detail.readonly) {
                    event.target.setAttribute("readonly", "");
                  } else {
                    event.target.removeAttribute("readonly");
                  }
                },
                required: (event) => {
                  if (event.detail.required) {
                    event.target.setAttribute("required", "");
                  } else {
                    event.target.removeAttribute("required");
                  }
                },
                bgColor: (event) => {
                  setColor("bgColor", "backgroundColor", event);
                },
                fillColor: (event) => {
                  setColor("fillColor", "backgroundColor", event);
                },
                fgColor: (event) => {
                  setColor("fgColor", "color", event);
                },
                textColor: (event) => {
                  setColor("textColor", "color", event);
                },
                borderColor: (event) => {
                  setColor("borderColor", "borderColor", event);
                },
                strokeColor: (event) => {
                  setColor("strokeColor", "borderColor", event);
                }
              });
            }
            _dispatchEventFromSandbox(actions, jsEvent) {
              const commonActions = this._commonActions;
              for (const name of Object.keys(jsEvent.detail)) {
                const action = actions[name] || commonActions[name];
                if (action) {
                  action(jsEvent);
                }
              }
            }
            _setDefaultPropertiesFromJS(element2) {
              if (!this.enableScripting) {
                return;
              }
              const storedData = this.annotationStorage.getRawValue(this.data.id);
              if (!storedData) {
                return;
              }
              const commonActions = this._commonActions;
              for (const [actionName, detail] of Object.entries(storedData)) {
                const action = commonActions[actionName];
                if (action) {
                  action({
                    detail,
                    target: element2
                  });
                  delete storedData[actionName];
                }
              }
            }
            _createQuadrilaterals(ignoreBorder = false) {
              if (!this.data.quadPoints) {
                return null;
              }
              const quadrilaterals = [];
              const savedRect = this.data.rect;
              for (const quadPoint of this.data.quadPoints) {
                this.data.rect = [quadPoint[2].x, quadPoint[2].y, quadPoint[1].x, quadPoint[1].y];
                quadrilaterals.push(this._createContainer(ignoreBorder));
              }
              this.data.rect = savedRect;
              return quadrilaterals;
            }
            _createPopup(trigger, data) {
              let container = this.container;
              if (this.quadrilaterals) {
                trigger = trigger || this.quadrilaterals;
                container = this.quadrilaterals[0];
              }
              if (!trigger) {
                trigger = document.createElement("div");
                trigger.style.height = container.style.height;
                trigger.style.width = container.style.width;
                container.appendChild(trigger);
              }
              const popupElement = new PopupElement({
                container,
                trigger,
                color: data.color,
                titleObj: data.titleObj,
                modificationDate: data.modificationDate,
                contentsObj: data.contentsObj,
                richText: data.richText,
                hideWrapper: true
              });
              const popup = popupElement.render();
              popup.style.left = container.style.width;
              container.appendChild(popup);
            }
            _renderQuadrilaterals(className) {
              for (const quadrilateral of this.quadrilaterals) {
                quadrilateral.className = className;
              }
              return this.quadrilaterals;
            }
            render() {
              (0, _util2.unreachable)("Abstract method `AnnotationElement.render` called");
            }
            _getElementsByName(name, skipId = null) {
              const fields = [];
              if (this._fieldObjects) {
                const fieldObj = this._fieldObjects[name];
                if (fieldObj) {
                  for (const {
                    page,
                    id,
                    exportValues
                  } of fieldObj) {
                    if (page === -1) {
                      continue;
                    }
                    if (id === skipId) {
                      continue;
                    }
                    const exportValue = typeof exportValues === "string" ? exportValues : null;
                    const domElement = document.getElementById(id);
                    if (domElement && !GetElementsByNameSet.has(domElement)) {
                      (0, _util2.warn)(`_getElementsByName - element not allowed: ${id}`);
                      continue;
                    }
                    fields.push({
                      id,
                      exportValue,
                      domElement
                    });
                  }
                }
                return fields;
              }
              for (const domElement of document.getElementsByName(name)) {
                const {
                  id,
                  exportValue
                } = domElement;
                if (id === skipId) {
                  continue;
                }
                if (!GetElementsByNameSet.has(domElement)) {
                  continue;
                }
                fields.push({
                  id,
                  exportValue,
                  domElement
                });
              }
              return fields;
            }
            static get platform() {
              const platform = typeof navigator !== "undefined" ? navigator.platform : "";
              return (0, _util2.shadow)(this, "platform", {
                isWin: platform.includes("Win"),
                isMac: platform.includes("Mac")
              });
            }
          }
          class LinkAnnotationElement extends AnnotationElement {
            constructor(parameters, options = null) {
              const isRenderable = !!(parameters.data.url || parameters.data.dest || parameters.data.action || parameters.data.isTooltipOnly || parameters.data.resetForm || parameters.data.actions && (parameters.data.actions.Action || parameters.data.actions["Mouse Up"] || parameters.data.actions["Mouse Down"]));
              super(parameters, {
                isRenderable,
                ignoreBorder: !!(options == null ? void 0 : options.ignoreBorder),
                createQuadrilaterals: true
              });
            }
            render() {
              const {
                data,
                linkService
              } = this;
              const link = document.createElement("a");
              if (data.url) {
                linkService.addLinkAttributes(link, data.url, data.newWindow);
              } else if (data.action) {
                this._bindNamedAction(link, data.action);
              } else if (data.dest) {
                this._bindLink(link, data.dest);
              } else {
                let hasClickAction = false;
                if (data.actions && (data.actions.Action || data.actions["Mouse Up"] || data.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions) {
                  hasClickAction = true;
                  this._bindJSAction(link, data);
                }
                if (data.resetForm) {
                  this._bindResetFormAction(link, data.resetForm);
                } else if (!hasClickAction) {
                  this._bindLink(link, "");
                }
              }
              if (this.quadrilaterals) {
                return this._renderQuadrilaterals("linkAnnotation").map((quadrilateral, index) => {
                  const linkElement = index === 0 ? link : link.cloneNode();
                  quadrilateral.appendChild(linkElement);
                  return quadrilateral;
                });
              }
              this.container.className = "linkAnnotation";
              this.container.appendChild(link);
              return this.container;
            }
            _bindLink(link, destination) {
              link.href = this.linkService.getDestinationHash(destination);
              link.onclick = () => {
                if (destination) {
                  this.linkService.goToDestination(destination);
                }
                return false;
              };
              if (destination || destination === "") {
                link.className = "internalLink";
              }
            }
            _bindNamedAction(link, action) {
              link.href = this.linkService.getAnchorUrl("");
              link.onclick = () => {
                this.linkService.executeNamedAction(action);
                return false;
              };
              link.className = "internalLink";
            }
            _bindJSAction(link, data) {
              link.href = this.linkService.getAnchorUrl("");
              const map = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
              for (const name of Object.keys(data.actions)) {
                const jsName = map.get(name);
                if (!jsName) {
                  continue;
                }
                link[jsName] = () => {
                  var _a;
                  (_a = this.linkService.eventBus) == null ? void 0 : _a.dispatch("dispatcheventinsandbox", {
                    source: this,
                    detail: {
                      id: data.id,
                      name
                    }
                  });
                  return false;
                };
              }
              if (!link.onclick) {
                link.onclick = () => false;
              }
              link.className = "internalLink";
            }
            _bindResetFormAction(link, resetForm) {
              const otherClickAction = link.onclick;
              if (!otherClickAction) {
                link.href = this.linkService.getAnchorUrl("");
              }
              link.className = "internalLink";
              if (!this._fieldObjects) {
                (0, _util2.warn)(`_bindResetFormAction - "resetForm" action not supported, ensure that the \`fieldObjects\` parameter is provided.`);
                if (!otherClickAction) {
                  link.onclick = () => false;
                }
                return;
              }
              link.onclick = () => {
                var _a;
                if (otherClickAction) {
                  otherClickAction();
                }
                const {
                  fields: resetFormFields,
                  refs: resetFormRefs,
                  include
                } = resetForm;
                const allFields = [];
                if (resetFormFields.length !== 0 || resetFormRefs.length !== 0) {
                  const fieldIds = new Set(resetFormRefs);
                  for (const fieldName of resetFormFields) {
                    const fields = this._fieldObjects[fieldName] || [];
                    for (const {
                      id
                    } of fields) {
                      fieldIds.add(id);
                    }
                  }
                  for (const fields of Object.values(this._fieldObjects)) {
                    for (const field of fields) {
                      if (fieldIds.has(field.id) === include) {
                        allFields.push(field);
                      }
                    }
                  }
                } else {
                  for (const fields of Object.values(this._fieldObjects)) {
                    allFields.push(...fields);
                  }
                }
                const storage = this.annotationStorage;
                const allIds = [];
                for (const field of allFields) {
                  const {
                    id
                  } = field;
                  allIds.push(id);
                  switch (field.type) {
                    case "text": {
                      const value = field.defaultValue || "";
                      storage.setValue(id, {
                        value
                      });
                      break;
                    }
                    case "checkbox":
                    case "radiobutton": {
                      const value = field.defaultValue === field.exportValues;
                      storage.setValue(id, {
                        value
                      });
                      break;
                    }
                    case "combobox":
                    case "listbox": {
                      const value = field.defaultValue || "";
                      storage.setValue(id, {
                        value
                      });
                      break;
                    }
                    default:
                      continue;
                  }
                  const domElement = document.getElementById(id);
                  if (!domElement || !GetElementsByNameSet.has(domElement)) {
                    continue;
                  }
                  domElement.dispatchEvent(new Event("resetform"));
                }
                if (this.enableScripting) {
                  (_a = this.linkService.eventBus) == null ? void 0 : _a.dispatch("dispatcheventinsandbox", {
                    source: this,
                    detail: {
                      id: "app",
                      ids: allIds,
                      name: "ResetForm"
                    }
                  });
                }
                return false;
              };
            }
          }
          class TextAnnotationElement extends AnnotationElement {
            constructor(parameters) {
              var _a, _b, _c;
              const isRenderable = !!(parameters.data.hasPopup || ((_a = parameters.data.titleObj) == null ? void 0 : _a.str) || ((_b = parameters.data.contentsObj) == null ? void 0 : _b.str) || ((_c = parameters.data.richText) == null ? void 0 : _c.str));
              super(parameters, {
                isRenderable
              });
            }
            render() {
              this.container.className = "textAnnotation";
              const image = document.createElement("img");
              image.style.height = this.container.style.height;
              image.style.width = this.container.style.width;
              image.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg";
              image.alt = "[{{type}} Annotation]";
              image.dataset.l10nId = "text_annotation_type";
              image.dataset.l10nArgs = JSON.stringify({
                type: this.data.name
              });
              if (!this.data.hasPopup) {
                this._createPopup(image, this.data);
              }
              this.container.appendChild(image);
              return this.container;
            }
          }
          class WidgetAnnotationElement extends AnnotationElement {
            render() {
              if (this.data.alternativeText) {
                this.container.title = this.data.alternativeText;
              }
              return this.container;
            }
            _getKeyModifier(event) {
              const {
                isWin,
                isMac
              } = AnnotationElement.platform;
              return isWin && event.ctrlKey || isMac && event.metaKey;
            }
            _setEventListener(element2, baseName, eventName, valueGetter) {
              if (baseName.includes("mouse")) {
                element2.addEventListener(baseName, (event) => {
                  var _a;
                  (_a = this.linkService.eventBus) == null ? void 0 : _a.dispatch("dispatcheventinsandbox", {
                    source: this,
                    detail: {
                      id: this.data.id,
                      name: eventName,
                      value: valueGetter(event),
                      shift: event.shiftKey,
                      modifier: this._getKeyModifier(event)
                    }
                  });
                });
              } else {
                element2.addEventListener(baseName, (event) => {
                  var _a;
                  (_a = this.linkService.eventBus) == null ? void 0 : _a.dispatch("dispatcheventinsandbox", {
                    source: this,
                    detail: {
                      id: this.data.id,
                      name: eventName,
                      value: valueGetter(event)
                    }
                  });
                });
              }
            }
            _setEventListeners(element2, names, getter) {
              var _a;
              for (const [baseName, eventName] of names) {
                if (eventName === "Action" || ((_a = this.data.actions) == null ? void 0 : _a[eventName])) {
                  this._setEventListener(element2, baseName, eventName, getter);
                }
              }
            }
            _setBackgroundColor(element2) {
              const color = this.data.backgroundColor || null;
              element2.style.backgroundColor = color === null ? "transparent" : _util2.Util.makeHexColor(color[0], color[1], color[2]);
            }
          }
          class TextWidgetAnnotationElement extends WidgetAnnotationElement {
            constructor(parameters) {
              const isRenderable = parameters.renderForms || !parameters.data.hasAppearance && !!parameters.data.fieldValue;
              super(parameters, {
                isRenderable
              });
            }
            setPropertyOnSiblings(base, key, value, keyInStorage) {
              const storage = this.annotationStorage;
              for (const element2 of this._getElementsByName(base.name, base.id)) {
                if (element2.domElement) {
                  element2.domElement[key] = value;
                }
                storage.setValue(element2.id, {
                  [keyInStorage]: value
                });
              }
            }
            render() {
              var _a;
              const storage = this.annotationStorage;
              const id = this.data.id;
              this.container.className = "textWidgetAnnotation";
              let element2 = null;
              if (this.renderForms) {
                const storedData = storage.getValue(id, {
                  value: this.data.fieldValue
                });
                const textContent = storedData.formattedValue || storedData.value || "";
                const elementData = {
                  userValue: null,
                  formattedValue: null,
                  valueOnFocus: ""
                };
                if (this.data.multiLine) {
                  element2 = document.createElement("textarea");
                  element2.textContent = textContent;
                } else {
                  element2 = document.createElement("input");
                  element2.type = "text";
                  element2.setAttribute("value", textContent);
                }
                GetElementsByNameSet.add(element2);
                element2.disabled = this.data.readOnly;
                element2.name = this.data.fieldName;
                element2.tabIndex = DEFAULT_TAB_INDEX;
                elementData.userValue = textContent;
                element2.setAttribute("id", id);
                element2.addEventListener("input", (event) => {
                  storage.setValue(id, {
                    value: event.target.value
                  });
                  this.setPropertyOnSiblings(element2, "value", event.target.value, "value");
                });
                element2.addEventListener("resetform", (event) => {
                  var _a2;
                  const defaultValue = (_a2 = this.data.defaultFieldValue) != null ? _a2 : "";
                  element2.value = elementData.userValue = defaultValue;
                  elementData.formattedValue = null;
                });
                let blurListener = (event) => {
                  const {
                    formattedValue
                  } = elementData;
                  if (formattedValue !== null && formattedValue !== void 0) {
                    event.target.value = formattedValue;
                  }
                  event.target.scrollLeft = 0;
                };
                if (this.enableScripting && this.hasJSActions) {
                  element2.addEventListener("focus", (event) => {
                    if (elementData.userValue) {
                      event.target.value = elementData.userValue;
                    }
                    elementData.valueOnFocus = event.target.value;
                  });
                  element2.addEventListener("updatefromsandbox", (jsEvent) => {
                    const actions = {
                      value(event) {
                        var _a2;
                        elementData.userValue = (_a2 = event.detail.value) != null ? _a2 : "";
                        storage.setValue(id, {
                          value: elementData.userValue.toString()
                        });
                        event.target.value = elementData.userValue;
                      },
                      formattedValue(event) {
                        const {
                          formattedValue
                        } = event.detail;
                        elementData.formattedValue = formattedValue;
                        if (formattedValue !== null && formattedValue !== void 0 && event.target !== document.activeElement) {
                          event.target.value = formattedValue;
                        }
                        storage.setValue(id, {
                          formattedValue
                        });
                      },
                      selRange(event) {
                        event.target.setSelectionRange(...event.detail.selRange);
                      }
                    };
                    this._dispatchEventFromSandbox(actions, jsEvent);
                  });
                  element2.addEventListener("keydown", (event) => {
                    var _a2;
                    let commitKey = -1;
                    if (event.key === "Escape") {
                      commitKey = 0;
                    } else if (event.key === "Enter") {
                      commitKey = 2;
                    } else if (event.key === "Tab") {
                      commitKey = 3;
                    }
                    if (commitKey === -1) {
                      return;
                    }
                    const {
                      value
                    } = event.target;
                    if (elementData.valueOnFocus === value) {
                      return;
                    }
                    elementData.userValue = value;
                    (_a2 = this.linkService.eventBus) == null ? void 0 : _a2.dispatch("dispatcheventinsandbox", {
                      source: this,
                      detail: {
                        id,
                        name: "Keystroke",
                        value,
                        willCommit: true,
                        commitKey,
                        selStart: event.target.selectionStart,
                        selEnd: event.target.selectionEnd
                      }
                    });
                  });
                  const _blurListener = blurListener;
                  blurListener = null;
                  element2.addEventListener("blur", (event) => {
                    var _a2;
                    const {
                      value
                    } = event.target;
                    elementData.userValue = value;
                    if (this._mouseState.isDown && elementData.valueOnFocus !== value) {
                      (_a2 = this.linkService.eventBus) == null ? void 0 : _a2.dispatch("dispatcheventinsandbox", {
                        source: this,
                        detail: {
                          id,
                          name: "Keystroke",
                          value,
                          willCommit: true,
                          commitKey: 1,
                          selStart: event.target.selectionStart,
                          selEnd: event.target.selectionEnd
                        }
                      });
                    }
                    _blurListener(event);
                  });
                  if ((_a = this.data.actions) == null ? void 0 : _a.Keystroke) {
                    element2.addEventListener("beforeinput", (event) => {
                      var _a2;
                      const {
                        data,
                        target
                      } = event;
                      const {
                        value,
                        selectionStart,
                        selectionEnd
                      } = target;
                      let selStart = selectionStart, selEnd = selectionEnd;
                      switch (event.inputType) {
                        case "deleteWordBackward": {
                          const match = value.substring(0, selectionStart).match(/\w*[^\w]*$/);
                          if (match) {
                            selStart -= match[0].length;
                          }
                          break;
                        }
                        case "deleteWordForward": {
                          const match = value.substring(selectionStart).match(/^[^\w]*\w*/);
                          if (match) {
                            selEnd += match[0].length;
                          }
                          break;
                        }
                        case "deleteContentBackward":
                          if (selectionStart === selectionEnd) {
                            selStart -= 1;
                          }
                          break;
                        case "deleteContentForward":
                          if (selectionStart === selectionEnd) {
                            selEnd += 1;
                          }
                          break;
                      }
                      event.preventDefault();
                      (_a2 = this.linkService.eventBus) == null ? void 0 : _a2.dispatch("dispatcheventinsandbox", {
                        source: this,
                        detail: {
                          id,
                          name: "Keystroke",
                          value,
                          change: data || "",
                          willCommit: false,
                          selStart,
                          selEnd
                        }
                      });
                    });
                  }
                  this._setEventListeners(element2, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (event) => event.target.value);
                }
                if (blurListener) {
                  element2.addEventListener("blur", blurListener);
                }
                if (this.data.maxLen !== null) {
                  element2.maxLength = this.data.maxLen;
                }
                if (this.data.comb) {
                  const fieldWidth = this.data.rect[2] - this.data.rect[0];
                  const combWidth = fieldWidth / this.data.maxLen;
                  element2.classList.add("comb");
                  element2.style.letterSpacing = `calc(${combWidth}px - 1ch)`;
                }
              } else {
                element2 = document.createElement("div");
                element2.textContent = this.data.fieldValue;
                element2.style.verticalAlign = "middle";
                element2.style.display = "table-cell";
              }
              this._setTextStyle(element2);
              this._setBackgroundColor(element2);
              this._setDefaultPropertiesFromJS(element2);
              this.container.appendChild(element2);
              return this.container;
            }
            _setTextStyle(element2) {
              const TEXT_ALIGNMENT = ["left", "center", "right"];
              const {
                fontSize,
                fontColor
              } = this.data.defaultAppearanceData;
              const style = element2.style;
              if (fontSize) {
                style.fontSize = `${fontSize}px`;
              }
              style.color = _util2.Util.makeHexColor(fontColor[0], fontColor[1], fontColor[2]);
              if (this.data.textAlignment !== null) {
                style.textAlign = TEXT_ALIGNMENT[this.data.textAlignment];
              }
            }
          }
          class CheckboxWidgetAnnotationElement extends WidgetAnnotationElement {
            constructor(parameters) {
              super(parameters, {
                isRenderable: parameters.renderForms
              });
            }
            render() {
              const storage = this.annotationStorage;
              const data = this.data;
              const id = data.id;
              let value = storage.getValue(id, {
                value: data.exportValue === data.fieldValue
              }).value;
              if (typeof value === "string") {
                value = value !== "Off";
                storage.setValue(id, {
                  value
                });
              }
              this.container.className = "buttonWidgetAnnotation checkBox";
              const element2 = document.createElement("input");
              GetElementsByNameSet.add(element2);
              element2.disabled = data.readOnly;
              element2.type = "checkbox";
              element2.name = data.fieldName;
              if (value) {
                element2.setAttribute("checked", true);
              }
              element2.setAttribute("id", id);
              element2.setAttribute("exportValue", data.exportValue);
              element2.tabIndex = DEFAULT_TAB_INDEX;
              element2.addEventListener("change", (event) => {
                const {
                  name,
                  checked
                } = event.target;
                for (const checkbox of this._getElementsByName(name, id)) {
                  const curChecked = checked && checkbox.exportValue === data.exportValue;
                  if (checkbox.domElement) {
                    checkbox.domElement.checked = curChecked;
                  }
                  storage.setValue(checkbox.id, {
                    value: curChecked
                  });
                }
                storage.setValue(id, {
                  value: checked
                });
              });
              element2.addEventListener("resetform", (event) => {
                const defaultValue = data.defaultFieldValue || "Off";
                event.target.checked = defaultValue === data.exportValue;
              });
              if (this.enableScripting && this.hasJSActions) {
                element2.addEventListener("updatefromsandbox", (jsEvent) => {
                  const actions = {
                    value(event) {
                      event.target.checked = event.detail.value !== "Off";
                      storage.setValue(id, {
                        value: event.target.checked
                      });
                    }
                  };
                  this._dispatchEventFromSandbox(actions, jsEvent);
                });
                this._setEventListeners(element2, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (event) => event.target.checked);
              }
              this._setBackgroundColor(element2);
              this._setDefaultPropertiesFromJS(element2);
              this.container.appendChild(element2);
              return this.container;
            }
          }
          class RadioButtonWidgetAnnotationElement extends WidgetAnnotationElement {
            constructor(parameters) {
              super(parameters, {
                isRenderable: parameters.renderForms
              });
            }
            render() {
              this.container.className = "buttonWidgetAnnotation radioButton";
              const storage = this.annotationStorage;
              const data = this.data;
              const id = data.id;
              let value = storage.getValue(id, {
                value: data.fieldValue === data.buttonValue
              }).value;
              if (typeof value === "string") {
                value = value !== data.buttonValue;
                storage.setValue(id, {
                  value
                });
              }
              const element2 = document.createElement("input");
              GetElementsByNameSet.add(element2);
              element2.disabled = data.readOnly;
              element2.type = "radio";
              element2.name = data.fieldName;
              if (value) {
                element2.setAttribute("checked", true);
              }
              element2.setAttribute("id", id);
              element2.tabIndex = DEFAULT_TAB_INDEX;
              element2.addEventListener("change", (event) => {
                const {
                  name,
                  checked
                } = event.target;
                for (const radio of this._getElementsByName(name, id)) {
                  storage.setValue(radio.id, {
                    value: false
                  });
                }
                storage.setValue(id, {
                  value: checked
                });
              });
              element2.addEventListener("resetform", (event) => {
                const defaultValue = data.defaultFieldValue;
                event.target.checked = defaultValue !== null && defaultValue !== void 0 && defaultValue === data.buttonValue;
              });
              if (this.enableScripting && this.hasJSActions) {
                const pdfButtonValue = data.buttonValue;
                element2.addEventListener("updatefromsandbox", (jsEvent) => {
                  const actions = {
                    value: (event) => {
                      const checked = pdfButtonValue === event.detail.value;
                      for (const radio of this._getElementsByName(event.target.name)) {
                        const curChecked = checked && radio.id === id;
                        if (radio.domElement) {
                          radio.domElement.checked = curChecked;
                        }
                        storage.setValue(radio.id, {
                          value: curChecked
                        });
                      }
                    }
                  };
                  this._dispatchEventFromSandbox(actions, jsEvent);
                });
                this._setEventListeners(element2, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (event) => event.target.checked);
              }
              this._setBackgroundColor(element2);
              this._setDefaultPropertiesFromJS(element2);
              this.container.appendChild(element2);
              return this.container;
            }
          }
          class PushButtonWidgetAnnotationElement extends LinkAnnotationElement {
            constructor(parameters) {
              super(parameters, {
                ignoreBorder: parameters.data.hasAppearance
              });
            }
            render() {
              const container = super.render();
              container.className = "buttonWidgetAnnotation pushButton";
              if (this.data.alternativeText) {
                container.title = this.data.alternativeText;
              }
              this._setDefaultPropertiesFromJS(container);
              return container;
            }
          }
          class ChoiceWidgetAnnotationElement extends WidgetAnnotationElement {
            constructor(parameters) {
              super(parameters, {
                isRenderable: parameters.renderForms
              });
            }
            render() {
              this.container.className = "choiceWidgetAnnotation";
              const storage = this.annotationStorage;
              const id = this.data.id;
              const storedData = storage.getValue(id, {
                value: this.data.fieldValue
              });
              let {
                fontSize
              } = this.data.defaultAppearanceData;
              if (!fontSize) {
                fontSize = 9;
              }
              const fontSizeStyle = `calc(${fontSize}px * var(--zoom-factor))`;
              const selectElement = document.createElement("select");
              GetElementsByNameSet.add(selectElement);
              selectElement.disabled = this.data.readOnly;
              selectElement.name = this.data.fieldName;
              selectElement.setAttribute("id", id);
              selectElement.tabIndex = DEFAULT_TAB_INDEX;
              selectElement.style.fontSize = `${fontSize}px`;
              if (!this.data.combo) {
                selectElement.size = this.data.options.length;
                if (this.data.multiSelect) {
                  selectElement.multiple = true;
                }
              }
              selectElement.addEventListener("resetform", (event) => {
                const defaultValue = this.data.defaultFieldValue;
                for (const option of selectElement.options) {
                  option.selected = option.value === defaultValue;
                }
              });
              for (const option of this.data.options) {
                const optionElement = document.createElement("option");
                optionElement.textContent = option.displayValue;
                optionElement.value = option.exportValue;
                if (this.data.combo) {
                  optionElement.style.fontSize = fontSizeStyle;
                }
                if (storedData.value.includes(option.exportValue)) {
                  optionElement.setAttribute("selected", true);
                }
                selectElement.appendChild(optionElement);
              }
              const getValue = (event, isExport) => {
                const name = isExport ? "value" : "textContent";
                const options = event.target.options;
                if (!event.target.multiple) {
                  return options.selectedIndex === -1 ? null : options[options.selectedIndex][name];
                }
                return Array.prototype.filter.call(options, (option) => option.selected).map((option) => option[name]);
              };
              const getItems = (event) => {
                const options = event.target.options;
                return Array.prototype.map.call(options, (option) => {
                  return {
                    displayValue: option.textContent,
                    exportValue: option.value
                  };
                });
              };
              if (this.enableScripting && this.hasJSActions) {
                selectElement.addEventListener("updatefromsandbox", (jsEvent) => {
                  const actions = {
                    value(event) {
                      const value = event.detail.value;
                      const values = new Set(Array.isArray(value) ? value : [value]);
                      for (const option of selectElement.options) {
                        option.selected = values.has(option.value);
                      }
                      storage.setValue(id, {
                        value: getValue(event, true)
                      });
                    },
                    multipleSelection(event) {
                      selectElement.multiple = true;
                    },
                    remove(event) {
                      const options = selectElement.options;
                      const index = event.detail.remove;
                      options[index].selected = false;
                      selectElement.remove(index);
                      if (options.length > 0) {
                        const i = Array.prototype.findIndex.call(options, (option) => option.selected);
                        if (i === -1) {
                          options[0].selected = true;
                        }
                      }
                      storage.setValue(id, {
                        value: getValue(event, true),
                        items: getItems(event)
                      });
                    },
                    clear(event) {
                      while (selectElement.length !== 0) {
                        selectElement.remove(0);
                      }
                      storage.setValue(id, {
                        value: null,
                        items: []
                      });
                    },
                    insert(event) {
                      const {
                        index,
                        displayValue,
                        exportValue
                      } = event.detail.insert;
                      const optionElement = document.createElement("option");
                      optionElement.textContent = displayValue;
                      optionElement.value = exportValue;
                      selectElement.insertBefore(optionElement, selectElement.children[index]);
                      storage.setValue(id, {
                        value: getValue(event, true),
                        items: getItems(event)
                      });
                    },
                    items(event) {
                      const {
                        items
                      } = event.detail;
                      while (selectElement.length !== 0) {
                        selectElement.remove(0);
                      }
                      for (const item of items) {
                        const {
                          displayValue,
                          exportValue
                        } = item;
                        const optionElement = document.createElement("option");
                        optionElement.textContent = displayValue;
                        optionElement.value = exportValue;
                        selectElement.appendChild(optionElement);
                      }
                      if (selectElement.options.length > 0) {
                        selectElement.options[0].selected = true;
                      }
                      storage.setValue(id, {
                        value: getValue(event, true),
                        items: getItems(event)
                      });
                    },
                    indices(event) {
                      const indices = new Set(event.detail.indices);
                      for (const option of event.target.options) {
                        option.selected = indices.has(option.index);
                      }
                      storage.setValue(id, {
                        value: getValue(event, true)
                      });
                    },
                    editable(event) {
                      event.target.disabled = !event.detail.editable;
                    }
                  };
                  this._dispatchEventFromSandbox(actions, jsEvent);
                });
                selectElement.addEventListener("input", (event) => {
                  var _a;
                  const exportValue = getValue(event, true);
                  const value = getValue(event, false);
                  storage.setValue(id, {
                    value: exportValue
                  });
                  (_a = this.linkService.eventBus) == null ? void 0 : _a.dispatch("dispatcheventinsandbox", {
                    source: this,
                    detail: {
                      id,
                      name: "Keystroke",
                      value,
                      changeEx: exportValue,
                      willCommit: true,
                      commitKey: 1,
                      keyDown: false
                    }
                  });
                });
                this._setEventListeners(selectElement, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"]], (event) => event.target.checked);
              } else {
                selectElement.addEventListener("input", function(event) {
                  storage.setValue(id, {
                    value: getValue(event, true)
                  });
                });
              }
              this._setBackgroundColor(selectElement);
              this._setDefaultPropertiesFromJS(selectElement);
              this.container.appendChild(selectElement);
              return this.container;
            }
          }
          class PopupAnnotationElement extends AnnotationElement {
            constructor(parameters) {
              var _a, _b, _c;
              const isRenderable = !!(((_a = parameters.data.titleObj) == null ? void 0 : _a.str) || ((_b = parameters.data.contentsObj) == null ? void 0 : _b.str) || ((_c = parameters.data.richText) == null ? void 0 : _c.str));
              super(parameters, {
                isRenderable
              });
            }
            render() {
              const IGNORE_TYPES = ["Line", "Square", "Circle", "PolyLine", "Polygon", "Ink"];
              this.container.className = "popupAnnotation";
              if (IGNORE_TYPES.includes(this.data.parentType)) {
                return this.container;
              }
              const selector = `[data-annotation-id="${this.data.parentId}"]`;
              const parentElements = this.layer.querySelectorAll(selector);
              if (parentElements.length === 0) {
                return this.container;
              }
              const popup = new PopupElement({
                container: this.container,
                trigger: Array.from(parentElements),
                color: this.data.color,
                titleObj: this.data.titleObj,
                modificationDate: this.data.modificationDate,
                contentsObj: this.data.contentsObj,
                richText: this.data.richText
              });
              const page = this.page;
              const rect = _util2.Util.normalizeRect([this.data.parentRect[0], page.view[3] - this.data.parentRect[1] + page.view[1], this.data.parentRect[2], page.view[3] - this.data.parentRect[3] + page.view[1]]);
              const popupLeft = rect[0] + this.data.parentRect[2] - this.data.parentRect[0];
              const popupTop = rect[1];
              this.container.style.transformOrigin = `${-popupLeft}px ${-popupTop}px`;
              this.container.style.left = `${popupLeft}px`;
              this.container.style.top = `${popupTop}px`;
              this.container.appendChild(popup.render());
              return this.container;
            }
          }
          class PopupElement {
            constructor(parameters) {
              this.container = parameters.container;
              this.trigger = parameters.trigger;
              this.color = parameters.color;
              this.titleObj = parameters.titleObj;
              this.modificationDate = parameters.modificationDate;
              this.contentsObj = parameters.contentsObj;
              this.richText = parameters.richText;
              this.hideWrapper = parameters.hideWrapper || false;
              this.pinned = false;
            }
            render() {
              var _a, _b;
              const BACKGROUND_ENLIGHT = 0.7;
              const wrapper = document.createElement("div");
              wrapper.className = "popupWrapper";
              this.hideElement = this.hideWrapper ? wrapper : this.container;
              this.hideElement.hidden = true;
              const popup = document.createElement("div");
              popup.className = "popup";
              const color = this.color;
              if (color) {
                const r = BACKGROUND_ENLIGHT * (255 - color[0]) + color[0];
                const g = BACKGROUND_ENLIGHT * (255 - color[1]) + color[1];
                const b = BACKGROUND_ENLIGHT * (255 - color[2]) + color[2];
                popup.style.backgroundColor = _util2.Util.makeHexColor(r | 0, g | 0, b | 0);
              }
              const title = document.createElement("h1");
              title.dir = this.titleObj.dir;
              title.textContent = this.titleObj.str;
              popup.appendChild(title);
              const dateObject = _display_utils2.PDFDateString.toDateObject(this.modificationDate);
              if (dateObject) {
                const modificationDate = document.createElement("span");
                modificationDate.className = "popupDate";
                modificationDate.textContent = "{{date}}, {{time}}";
                modificationDate.dataset.l10nId = "annotation_date_string";
                modificationDate.dataset.l10nArgs = JSON.stringify({
                  date: dateObject.toLocaleDateString(),
                  time: dateObject.toLocaleTimeString()
                });
                popup.appendChild(modificationDate);
              }
              if (((_a = this.richText) == null ? void 0 : _a.str) && (!((_b = this.contentsObj) == null ? void 0 : _b.str) || this.contentsObj.str === this.richText.str)) {
                _xfa_layer.XfaLayer.render({
                  xfaHtml: this.richText.html,
                  intent: "richText",
                  div: popup
                });
                popup.lastChild.className = "richText popupContent";
              } else {
                const contents = this._formatContents(this.contentsObj);
                popup.appendChild(contents);
              }
              if (!Array.isArray(this.trigger)) {
                this.trigger = [this.trigger];
              }
              for (const element2 of this.trigger) {
                element2.addEventListener("click", this._toggle.bind(this));
                element2.addEventListener("mouseover", this._show.bind(this, false));
                element2.addEventListener("mouseout", this._hide.bind(this, false));
              }
              popup.addEventListener("click", this._hide.bind(this, true));
              wrapper.appendChild(popup);
              return wrapper;
            }
            _formatContents({
              str,
              dir
            }) {
              const p = document.createElement("p");
              p.className = "popupContent";
              p.dir = dir;
              const lines = str.split(/(?:\r\n?|\n)/);
              for (let i = 0, ii = lines.length; i < ii; ++i) {
                const line = lines[i];
                p.appendChild(document.createTextNode(line));
                if (i < ii - 1) {
                  p.appendChild(document.createElement("br"));
                }
              }
              return p;
            }
            _toggle() {
              if (this.pinned) {
                this._hide(true);
              } else {
                this._show(true);
              }
            }
            _show(pin = false) {
              if (pin) {
                this.pinned = true;
              }
              if (this.hideElement.hidden) {
                this.hideElement.hidden = false;
                this.container.style.zIndex += 1;
              }
            }
            _hide(unpin = true) {
              if (unpin) {
                this.pinned = false;
              }
              if (!this.hideElement.hidden && !this.pinned) {
                this.hideElement.hidden = true;
                this.container.style.zIndex -= 1;
              }
            }
          }
          class FreeTextAnnotationElement extends AnnotationElement {
            constructor(parameters) {
              var _a, _b, _c;
              const isRenderable = !!(parameters.data.hasPopup || ((_a = parameters.data.titleObj) == null ? void 0 : _a.str) || ((_b = parameters.data.contentsObj) == null ? void 0 : _b.str) || ((_c = parameters.data.richText) == null ? void 0 : _c.str));
              super(parameters, {
                isRenderable,
                ignoreBorder: true
              });
            }
            render() {
              this.container.className = "freeTextAnnotation";
              if (!this.data.hasPopup) {
                this._createPopup(null, this.data);
              }
              return this.container;
            }
          }
          class LineAnnotationElement extends AnnotationElement {
            constructor(parameters) {
              var _a, _b, _c;
              const isRenderable = !!(parameters.data.hasPopup || ((_a = parameters.data.titleObj) == null ? void 0 : _a.str) || ((_b = parameters.data.contentsObj) == null ? void 0 : _b.str) || ((_c = parameters.data.richText) == null ? void 0 : _c.str));
              super(parameters, {
                isRenderable,
                ignoreBorder: true
              });
            }
            render() {
              this.container.className = "lineAnnotation";
              const data = this.data;
              const {
                width,
                height
              } = getRectDims(data.rect);
              const svg = this.svgFactory.create(width, height);
              const line = this.svgFactory.createElement("svg:line");
              line.setAttribute("x1", data.rect[2] - data.lineCoordinates[0]);
              line.setAttribute("y1", data.rect[3] - data.lineCoordinates[1]);
              line.setAttribute("x2", data.rect[2] - data.lineCoordinates[2]);
              line.setAttribute("y2", data.rect[3] - data.lineCoordinates[3]);
              line.setAttribute("stroke-width", data.borderStyle.width || 1);
              line.setAttribute("stroke", "transparent");
              line.setAttribute("fill", "transparent");
              svg.appendChild(line);
              this.container.append(svg);
              this._createPopup(line, data);
              return this.container;
            }
          }
          class SquareAnnotationElement extends AnnotationElement {
            constructor(parameters) {
              var _a, _b, _c;
              const isRenderable = !!(parameters.data.hasPopup || ((_a = parameters.data.titleObj) == null ? void 0 : _a.str) || ((_b = parameters.data.contentsObj) == null ? void 0 : _b.str) || ((_c = parameters.data.richText) == null ? void 0 : _c.str));
              super(parameters, {
                isRenderable,
                ignoreBorder: true
              });
            }
            render() {
              this.container.className = "squareAnnotation";
              const data = this.data;
              const {
                width,
                height
              } = getRectDims(data.rect);
              const svg = this.svgFactory.create(width, height);
              const borderWidth = data.borderStyle.width;
              const square = this.svgFactory.createElement("svg:rect");
              square.setAttribute("x", borderWidth / 2);
              square.setAttribute("y", borderWidth / 2);
              square.setAttribute("width", width - borderWidth);
              square.setAttribute("height", height - borderWidth);
              square.setAttribute("stroke-width", borderWidth || 1);
              square.setAttribute("stroke", "transparent");
              square.setAttribute("fill", "transparent");
              svg.appendChild(square);
              this.container.append(svg);
              this._createPopup(square, data);
              return this.container;
            }
          }
          class CircleAnnotationElement extends AnnotationElement {
            constructor(parameters) {
              var _a, _b, _c;
              const isRenderable = !!(parameters.data.hasPopup || ((_a = parameters.data.titleObj) == null ? void 0 : _a.str) || ((_b = parameters.data.contentsObj) == null ? void 0 : _b.str) || ((_c = parameters.data.richText) == null ? void 0 : _c.str));
              super(parameters, {
                isRenderable,
                ignoreBorder: true
              });
            }
            render() {
              this.container.className = "circleAnnotation";
              const data = this.data;
              const {
                width,
                height
              } = getRectDims(data.rect);
              const svg = this.svgFactory.create(width, height);
              const borderWidth = data.borderStyle.width;
              const circle = this.svgFactory.createElement("svg:ellipse");
              circle.setAttribute("cx", width / 2);
              circle.setAttribute("cy", height / 2);
              circle.setAttribute("rx", width / 2 - borderWidth / 2);
              circle.setAttribute("ry", height / 2 - borderWidth / 2);
              circle.setAttribute("stroke-width", borderWidth || 1);
              circle.setAttribute("stroke", "transparent");
              circle.setAttribute("fill", "transparent");
              svg.appendChild(circle);
              this.container.append(svg);
              this._createPopup(circle, data);
              return this.container;
            }
          }
          class PolylineAnnotationElement extends AnnotationElement {
            constructor(parameters) {
              var _a, _b, _c;
              const isRenderable = !!(parameters.data.hasPopup || ((_a = parameters.data.titleObj) == null ? void 0 : _a.str) || ((_b = parameters.data.contentsObj) == null ? void 0 : _b.str) || ((_c = parameters.data.richText) == null ? void 0 : _c.str));
              super(parameters, {
                isRenderable,
                ignoreBorder: true
              });
              this.containerClassName = "polylineAnnotation";
              this.svgElementName = "svg:polyline";
            }
            render() {
              this.container.className = this.containerClassName;
              const data = this.data;
              const {
                width,
                height
              } = getRectDims(data.rect);
              const svg = this.svgFactory.create(width, height);
              let points = [];
              for (const coordinate of data.vertices) {
                const x = coordinate.x - data.rect[0];
                const y = data.rect[3] - coordinate.y;
                points.push(x + "," + y);
              }
              points = points.join(" ");
              const polyline = this.svgFactory.createElement(this.svgElementName);
              polyline.setAttribute("points", points);
              polyline.setAttribute("stroke-width", data.borderStyle.width || 1);
              polyline.setAttribute("stroke", "transparent");
              polyline.setAttribute("fill", "transparent");
              svg.appendChild(polyline);
              this.container.append(svg);
              this._createPopup(polyline, data);
              return this.container;
            }
          }
          class PolygonAnnotationElement extends PolylineAnnotationElement {
            constructor(parameters) {
              super(parameters);
              this.containerClassName = "polygonAnnotation";
              this.svgElementName = "svg:polygon";
            }
          }
          class CaretAnnotationElement extends AnnotationElement {
            constructor(parameters) {
              var _a, _b, _c;
              const isRenderable = !!(parameters.data.hasPopup || ((_a = parameters.data.titleObj) == null ? void 0 : _a.str) || ((_b = parameters.data.contentsObj) == null ? void 0 : _b.str) || ((_c = parameters.data.richText) == null ? void 0 : _c.str));
              super(parameters, {
                isRenderable,
                ignoreBorder: true
              });
            }
            render() {
              this.container.className = "caretAnnotation";
              if (!this.data.hasPopup) {
                this._createPopup(null, this.data);
              }
              return this.container;
            }
          }
          class InkAnnotationElement extends AnnotationElement {
            constructor(parameters) {
              var _a, _b, _c;
              const isRenderable = !!(parameters.data.hasPopup || ((_a = parameters.data.titleObj) == null ? void 0 : _a.str) || ((_b = parameters.data.contentsObj) == null ? void 0 : _b.str) || ((_c = parameters.data.richText) == null ? void 0 : _c.str));
              super(parameters, {
                isRenderable,
                ignoreBorder: true
              });
              this.containerClassName = "inkAnnotation";
              this.svgElementName = "svg:polyline";
            }
            render() {
              this.container.className = this.containerClassName;
              const data = this.data;
              const {
                width,
                height
              } = getRectDims(data.rect);
              const svg = this.svgFactory.create(width, height);
              for (const inkList of data.inkLists) {
                let points = [];
                for (const coordinate of inkList) {
                  const x = coordinate.x - data.rect[0];
                  const y = data.rect[3] - coordinate.y;
                  points.push(`${x},${y}`);
                }
                points = points.join(" ");
                const polyline = this.svgFactory.createElement(this.svgElementName);
                polyline.setAttribute("points", points);
                polyline.setAttribute("stroke-width", data.borderStyle.width || 1);
                polyline.setAttribute("stroke", "transparent");
                polyline.setAttribute("fill", "transparent");
                this._createPopup(polyline, data);
                svg.appendChild(polyline);
              }
              this.container.append(svg);
              return this.container;
            }
          }
          class HighlightAnnotationElement extends AnnotationElement {
            constructor(parameters) {
              var _a, _b, _c;
              const isRenderable = !!(parameters.data.hasPopup || ((_a = parameters.data.titleObj) == null ? void 0 : _a.str) || ((_b = parameters.data.contentsObj) == null ? void 0 : _b.str) || ((_c = parameters.data.richText) == null ? void 0 : _c.str));
              super(parameters, {
                isRenderable,
                ignoreBorder: true,
                createQuadrilaterals: true
              });
            }
            render() {
              if (!this.data.hasPopup) {
                this._createPopup(null, this.data);
              }
              if (this.quadrilaterals) {
                return this._renderQuadrilaterals("highlightAnnotation");
              }
              this.container.className = "highlightAnnotation";
              return this.container;
            }
          }
          class UnderlineAnnotationElement extends AnnotationElement {
            constructor(parameters) {
              var _a, _b, _c;
              const isRenderable = !!(parameters.data.hasPopup || ((_a = parameters.data.titleObj) == null ? void 0 : _a.str) || ((_b = parameters.data.contentsObj) == null ? void 0 : _b.str) || ((_c = parameters.data.richText) == null ? void 0 : _c.str));
              super(parameters, {
                isRenderable,
                ignoreBorder: true,
                createQuadrilaterals: true
              });
            }
            render() {
              if (!this.data.hasPopup) {
                this._createPopup(null, this.data);
              }
              if (this.quadrilaterals) {
                return this._renderQuadrilaterals("underlineAnnotation");
              }
              this.container.className = "underlineAnnotation";
              return this.container;
            }
          }
          class SquigglyAnnotationElement extends AnnotationElement {
            constructor(parameters) {
              var _a, _b, _c;
              const isRenderable = !!(parameters.data.hasPopup || ((_a = parameters.data.titleObj) == null ? void 0 : _a.str) || ((_b = parameters.data.contentsObj) == null ? void 0 : _b.str) || ((_c = parameters.data.richText) == null ? void 0 : _c.str));
              super(parameters, {
                isRenderable,
                ignoreBorder: true,
                createQuadrilaterals: true
              });
            }
            render() {
              if (!this.data.hasPopup) {
                this._createPopup(null, this.data);
              }
              if (this.quadrilaterals) {
                return this._renderQuadrilaterals("squigglyAnnotation");
              }
              this.container.className = "squigglyAnnotation";
              return this.container;
            }
          }
          class StrikeOutAnnotationElement extends AnnotationElement {
            constructor(parameters) {
              var _a, _b, _c;
              const isRenderable = !!(parameters.data.hasPopup || ((_a = parameters.data.titleObj) == null ? void 0 : _a.str) || ((_b = parameters.data.contentsObj) == null ? void 0 : _b.str) || ((_c = parameters.data.richText) == null ? void 0 : _c.str));
              super(parameters, {
                isRenderable,
                ignoreBorder: true,
                createQuadrilaterals: true
              });
            }
            render() {
              if (!this.data.hasPopup) {
                this._createPopup(null, this.data);
              }
              if (this.quadrilaterals) {
                return this._renderQuadrilaterals("strikeoutAnnotation");
              }
              this.container.className = "strikeoutAnnotation";
              return this.container;
            }
          }
          class StampAnnotationElement extends AnnotationElement {
            constructor(parameters) {
              var _a, _b, _c;
              const isRenderable = !!(parameters.data.hasPopup || ((_a = parameters.data.titleObj) == null ? void 0 : _a.str) || ((_b = parameters.data.contentsObj) == null ? void 0 : _b.str) || ((_c = parameters.data.richText) == null ? void 0 : _c.str));
              super(parameters, {
                isRenderable,
                ignoreBorder: true
              });
            }
            render() {
              this.container.className = "stampAnnotation";
              if (!this.data.hasPopup) {
                this._createPopup(null, this.data);
              }
              return this.container;
            }
          }
          class FileAttachmentAnnotationElement extends AnnotationElement {
            constructor(parameters) {
              var _a;
              super(parameters, {
                isRenderable: true
              });
              const {
                filename,
                content
              } = this.data.file;
              this.filename = (0, _display_utils2.getFilenameFromUrl)(filename);
              this.content = content;
              (_a = this.linkService.eventBus) == null ? void 0 : _a.dispatch("fileattachmentannotation", {
                source: this,
                filename,
                content
              });
            }
            render() {
              var _a, _b;
              this.container.className = "fileAttachmentAnnotation";
              const trigger = document.createElement("div");
              trigger.style.height = this.container.style.height;
              trigger.style.width = this.container.style.width;
              trigger.addEventListener("dblclick", this._download.bind(this));
              if (!this.data.hasPopup && (((_a = this.data.titleObj) == null ? void 0 : _a.str) || ((_b = this.data.contentsObj) == null ? void 0 : _b.str) || this.data.richText)) {
                this._createPopup(trigger, this.data);
              }
              this.container.appendChild(trigger);
              return this.container;
            }
            _download() {
              var _a;
              (_a = this.downloadManager) == null ? void 0 : _a.openOrDownloadData(this.container, this.content, this.filename);
            }
          }
          class AnnotationLayer {
            static render(parameters) {
              const sortedAnnotations = [], popupAnnotations = [];
              for (const data of parameters.annotations) {
                if (!data) {
                  continue;
                }
                const {
                  width,
                  height
                } = getRectDims(data.rect);
                if (width <= 0 || height <= 0) {
                  continue;
                }
                if (data.annotationType === _util2.AnnotationType.POPUP) {
                  popupAnnotations.push(data);
                  continue;
                }
                sortedAnnotations.push(data);
              }
              if (popupAnnotations.length) {
                sortedAnnotations.push(...popupAnnotations);
              }
              const div = parameters.div;
              for (const data of sortedAnnotations) {
                const element2 = AnnotationElementFactory.create({
                  data,
                  layer: div,
                  page: parameters.page,
                  viewport: parameters.viewport,
                  linkService: parameters.linkService,
                  downloadManager: parameters.downloadManager,
                  imageResourcesPath: parameters.imageResourcesPath || "",
                  renderForms: parameters.renderForms !== false,
                  svgFactory: new _display_utils2.DOMSVGFactory(),
                  annotationStorage: parameters.annotationStorage || new _annotation_storage2.AnnotationStorage(),
                  enableScripting: parameters.enableScripting,
                  hasJSActions: parameters.hasJSActions,
                  fieldObjects: parameters.fieldObjects,
                  mouseState: parameters.mouseState || {
                    isDown: false
                  }
                });
                if (element2.isRenderable) {
                  const rendered = element2.render();
                  if (data.hidden) {
                    rendered.style.visibility = "hidden";
                  }
                  if (Array.isArray(rendered)) {
                    for (const renderedElement of rendered) {
                      div.appendChild(renderedElement);
                    }
                  } else {
                    if (element2 instanceof PopupAnnotationElement) {
                      div.prepend(rendered);
                    } else {
                      div.appendChild(rendered);
                    }
                  }
                }
              }
              __privateMethod(this, _setAnnotationCanvasMap, setAnnotationCanvasMap_fn).call(this, div, parameters.annotationCanvasMap);
            }
            static update(parameters) {
              const {
                page,
                viewport,
                annotations,
                annotationCanvasMap,
                div
              } = parameters;
              const transform = viewport.transform;
              const matrix = `matrix(${transform.join(",")})`;
              let scale2, ownMatrix;
              for (const data of annotations) {
                const elements = div.querySelectorAll(`[data-annotation-id="${data.id}"]`);
                if (elements) {
                  for (const element2 of elements) {
                    if (data.hasOwnCanvas) {
                      const rect = _util2.Util.normalizeRect([data.rect[0], page.view[3] - data.rect[1] + page.view[1], data.rect[2], page.view[3] - data.rect[3] + page.view[1]]);
                      if (!ownMatrix) {
                        scale2 = Math.abs(transform[0] || transform[1]);
                        const ownTransform = transform.slice();
                        for (let i = 0; i < 4; i++) {
                          ownTransform[i] = Math.sign(ownTransform[i]);
                        }
                        ownMatrix = `matrix(${ownTransform.join(",")})`;
                      }
                      const left = rect[0] * scale2;
                      const top = rect[1] * scale2;
                      element2.style.left = `${left}px`;
                      element2.style.top = `${top}px`;
                      element2.style.transformOrigin = `${-left}px ${-top}px`;
                      element2.style.transform = ownMatrix;
                    } else {
                      element2.style.transform = matrix;
                    }
                  }
                }
              }
              __privateMethod(this, _setAnnotationCanvasMap, setAnnotationCanvasMap_fn).call(this, div, annotationCanvasMap);
              div.hidden = false;
            }
          }
          _setAnnotationCanvasMap = new WeakSet();
          setAnnotationCanvasMap_fn = function(div, annotationCanvasMap) {
            if (!annotationCanvasMap) {
              return;
            }
            for (const [id, canvas] of annotationCanvasMap) {
              const element2 = div.querySelector(`[data-annotation-id="${id}"]`);
              if (!element2) {
                continue;
              }
              const {
                firstChild
              } = element2;
              if (firstChild.nodeName === "CANVAS") {
                element2.replaceChild(canvas, firstChild);
              } else {
                element2.insertBefore(canvas, firstChild);
              }
            }
            annotationCanvasMap.clear();
          };
          __privateAdd(AnnotationLayer, _setAnnotationCanvasMap);
          exports2.AnnotationLayer = AnnotationLayer;
        },
        (__unused_webpack_module2, exports2) => {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.ColorConverters = void 0;
          function makeColorComp(n) {
            return Math.floor(Math.max(0, Math.min(1, n)) * 255).toString(16).padStart(2, "0");
          }
          class ColorConverters {
            static CMYK_G([c, y, m, k]) {
              return ["G", 1 - Math.min(1, 0.3 * c + 0.59 * m + 0.11 * y + k)];
            }
            static G_CMYK([g]) {
              return ["CMYK", 0, 0, 0, 1 - g];
            }
            static G_RGB([g]) {
              return ["RGB", g, g, g];
            }
            static G_HTML([g]) {
              const G = makeColorComp(g);
              return `#${G}${G}${G}`;
            }
            static RGB_G([r, g, b]) {
              return ["G", 0.3 * r + 0.59 * g + 0.11 * b];
            }
            static RGB_HTML([r, g, b]) {
              const R = makeColorComp(r);
              const G = makeColorComp(g);
              const B = makeColorComp(b);
              return `#${R}${G}${B}`;
            }
            static T_HTML() {
              return "#00000000";
            }
            static CMYK_RGB([c, y, m, k]) {
              return ["RGB", 1 - Math.min(1, c + k), 1 - Math.min(1, m + k), 1 - Math.min(1, y + k)];
            }
            static CMYK_HTML(components) {
              return this.RGB_HTML(this.CMYK_RGB(components));
            }
            static RGB_CMYK([r, g, b]) {
              const c = 1 - r;
              const m = 1 - g;
              const y = 1 - b;
              const k = Math.min(c, m, y);
              return ["CMYK", c, m, y, k];
            }
          }
          exports2.ColorConverters = ColorConverters;
        },
        (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.XfaLayer = void 0;
          var _xfa_text2 = __w_pdfjs_require__2(18);
          class XfaLayer {
            static setupStorage(html, id, element2, storage, intent) {
              const storedData = storage.getValue(id, {
                value: null
              });
              switch (element2.name) {
                case "textarea":
                  if (storedData.value !== null) {
                    html.textContent = storedData.value;
                  }
                  if (intent === "print") {
                    break;
                  }
                  html.addEventListener("input", (event) => {
                    storage.setValue(id, {
                      value: event.target.value
                    });
                  });
                  break;
                case "input":
                  if (element2.attributes.type === "radio" || element2.attributes.type === "checkbox") {
                    if (storedData.value === element2.attributes.xfaOn) {
                      html.setAttribute("checked", true);
                    } else if (storedData.value === element2.attributes.xfaOff) {
                      html.removeAttribute("checked");
                    }
                    if (intent === "print") {
                      break;
                    }
                    html.addEventListener("change", (event) => {
                      storage.setValue(id, {
                        value: event.target.checked ? event.target.getAttribute("xfaOn") : event.target.getAttribute("xfaOff")
                      });
                    });
                  } else {
                    if (storedData.value !== null) {
                      html.setAttribute("value", storedData.value);
                    }
                    if (intent === "print") {
                      break;
                    }
                    html.addEventListener("input", (event) => {
                      storage.setValue(id, {
                        value: event.target.value
                      });
                    });
                  }
                  break;
                case "select":
                  if (storedData.value !== null) {
                    for (const option of element2.children) {
                      if (option.attributes.value === storedData.value) {
                        option.attributes.selected = true;
                      }
                    }
                  }
                  html.addEventListener("input", (event) => {
                    const options = event.target.options;
                    const value = options.selectedIndex === -1 ? "" : options[options.selectedIndex].value;
                    storage.setValue(id, {
                      value
                    });
                  });
                  break;
              }
            }
            static setAttributes({
              html,
              element: element2,
              storage = null,
              intent,
              linkService
            }) {
              const {
                attributes
              } = element2;
              const isHTMLAnchorElement = html instanceof HTMLAnchorElement;
              if (attributes.type === "radio") {
                attributes.name = `${attributes.name}-${intent}`;
              }
              for (const [key, value] of Object.entries(attributes)) {
                if (value === null || value === void 0 || key === "dataId") {
                  continue;
                }
                if (key !== "style") {
                  if (key === "textContent") {
                    html.textContent = value;
                  } else if (key === "class") {
                    if (value.length) {
                      html.setAttribute(key, value.join(" "));
                    }
                  } else {
                    if (isHTMLAnchorElement && (key === "href" || key === "newWindow")) {
                      continue;
                    }
                    html.setAttribute(key, value);
                  }
                } else {
                  Object.assign(html.style, value);
                }
              }
              if (isHTMLAnchorElement) {
                linkService.addLinkAttributes(html, attributes.href, attributes.newWindow);
              }
              if (storage && attributes.dataId) {
                this.setupStorage(html, attributes.dataId, element2, storage);
              }
            }
            static render(parameters) {
              var _a;
              const storage = parameters.annotationStorage;
              const linkService = parameters.linkService;
              const root = parameters.xfaHtml;
              const intent = parameters.intent || "display";
              const rootHtml = document.createElement(root.name);
              if (root.attributes) {
                this.setAttributes({
                  html: rootHtml,
                  element: root,
                  intent,
                  linkService
                });
              }
              const stack = [[root, -1, rootHtml]];
              const rootDiv = parameters.div;
              rootDiv.appendChild(rootHtml);
              if (parameters.viewport) {
                const transform = `matrix(${parameters.viewport.transform.join(",")})`;
                rootDiv.style.transform = transform;
              }
              if (intent !== "richText") {
                rootDiv.setAttribute("class", "xfaLayer xfaFont");
              }
              const textDivs = [];
              while (stack.length > 0) {
                const [parent, i, html] = stack[stack.length - 1];
                if (i + 1 === parent.children.length) {
                  stack.pop();
                  continue;
                }
                const child = parent.children[++stack[stack.length - 1][1]];
                if (child === null) {
                  continue;
                }
                const {
                  name
                } = child;
                if (name === "#text") {
                  const node = document.createTextNode(child.value);
                  textDivs.push(node);
                  html.appendChild(node);
                  continue;
                }
                let childHtml;
                if ((_a = child == null ? void 0 : child.attributes) == null ? void 0 : _a.xmlns) {
                  childHtml = document.createElementNS(child.attributes.xmlns, name);
                } else {
                  childHtml = document.createElement(name);
                }
                html.appendChild(childHtml);
                if (child.attributes) {
                  this.setAttributes({
                    html: childHtml,
                    element: child,
                    storage,
                    intent,
                    linkService
                  });
                }
                if (child.children && child.children.length > 0) {
                  stack.push([child, -1, childHtml]);
                } else if (child.value) {
                  const node = document.createTextNode(child.value);
                  if (_xfa_text2.XfaText.shouldBuildText(name)) {
                    textDivs.push(node);
                  }
                  childHtml.appendChild(node);
                }
              }
              for (const el of rootDiv.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) {
                el.setAttribute("readOnly", true);
              }
              return {
                textDivs
              };
            }
            static update(parameters) {
              const transform = `matrix(${parameters.viewport.transform.join(",")})`;
              parameters.div.style.transform = transform;
              parameters.div.hidden = false;
            }
          }
          exports2.XfaLayer = XfaLayer;
        },
        (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.renderTextLayer = renderTextLayer;
          var _util2 = __w_pdfjs_require__2(1);
          const MAX_TEXT_DIVS_TO_RENDER = 1e5;
          const DEFAULT_FONT_SIZE = 30;
          const DEFAULT_FONT_ASCENT = 0.8;
          const ascentCache = /* @__PURE__ */ new Map();
          const AllWhitespaceRegexp = /^\s+$/g;
          function getAscent(fontFamily, ctx) {
            const cachedAscent = ascentCache.get(fontFamily);
            if (cachedAscent) {
              return cachedAscent;
            }
            ctx.save();
            ctx.font = `${DEFAULT_FONT_SIZE}px ${fontFamily}`;
            const metrics = ctx.measureText("");
            let ascent = metrics.fontBoundingBoxAscent;
            let descent = Math.abs(metrics.fontBoundingBoxDescent);
            if (ascent) {
              ctx.restore();
              const ratio = ascent / (ascent + descent);
              ascentCache.set(fontFamily, ratio);
              return ratio;
            }
            ctx.strokeStyle = "red";
            ctx.clearRect(0, 0, DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE);
            ctx.strokeText("g", 0, 0);
            let pixels = ctx.getImageData(0, 0, DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE).data;
            descent = 0;
            for (let i = pixels.length - 1 - 3; i >= 0; i -= 4) {
              if (pixels[i] > 0) {
                descent = Math.ceil(i / 4 / DEFAULT_FONT_SIZE);
                break;
              }
            }
            ctx.clearRect(0, 0, DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE);
            ctx.strokeText("A", 0, DEFAULT_FONT_SIZE);
            pixels = ctx.getImageData(0, 0, DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE).data;
            ascent = 0;
            for (let i = 0, ii = pixels.length; i < ii; i += 4) {
              if (pixels[i] > 0) {
                ascent = DEFAULT_FONT_SIZE - Math.floor(i / 4 / DEFAULT_FONT_SIZE);
                break;
              }
            }
            ctx.restore();
            if (ascent) {
              const ratio = ascent / (ascent + descent);
              ascentCache.set(fontFamily, ratio);
              return ratio;
            }
            ascentCache.set(fontFamily, DEFAULT_FONT_ASCENT);
            return DEFAULT_FONT_ASCENT;
          }
          function appendText(task, geom, styles, ctx) {
            const textDiv = document.createElement("span");
            const textDivProperties = task._enhanceTextSelection ? {
              angle: 0,
              canvasWidth: 0,
              hasText: geom.str !== "",
              hasEOL: geom.hasEOL,
              originalTransform: null,
              paddingBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              scale: 1
            } : {
              angle: 0,
              canvasWidth: 0,
              hasText: geom.str !== "",
              hasEOL: geom.hasEOL
            };
            task._textDivs.push(textDiv);
            const tx = _util2.Util.transform(task._viewport.transform, geom.transform);
            let angle = Math.atan2(tx[1], tx[0]);
            const style = styles[geom.fontName];
            if (style.vertical) {
              angle += Math.PI / 2;
            }
            const fontHeight = Math.hypot(tx[2], tx[3]);
            const fontAscent = fontHeight * getAscent(style.fontFamily, ctx);
            let left, top;
            if (angle === 0) {
              left = tx[4];
              top = tx[5] - fontAscent;
            } else {
              left = tx[4] + fontAscent * Math.sin(angle);
              top = tx[5] - fontAscent * Math.cos(angle);
            }
            textDiv.style.left = `${left}px`;
            textDiv.style.top = `${top}px`;
            textDiv.style.fontSize = `${fontHeight}px`;
            textDiv.style.fontFamily = style.fontFamily;
            textDiv.setAttribute("role", "presentation");
            textDiv.textContent = geom.str;
            textDiv.dir = geom.dir;
            if (task._fontInspectorEnabled) {
              textDiv.dataset.fontName = geom.fontName;
            }
            if (angle !== 0) {
              textDivProperties.angle = angle * (180 / Math.PI);
            }
            let shouldScaleText = false;
            if (geom.str.length > 1 || task._enhanceTextSelection && AllWhitespaceRegexp.test(geom.str)) {
              shouldScaleText = true;
            } else if (geom.str !== " " && geom.transform[0] !== geom.transform[3]) {
              const absScaleX = Math.abs(geom.transform[0]), absScaleY = Math.abs(geom.transform[3]);
              if (absScaleX !== absScaleY && Math.max(absScaleX, absScaleY) / Math.min(absScaleX, absScaleY) > 1.5) {
                shouldScaleText = true;
              }
            }
            if (shouldScaleText) {
              if (style.vertical) {
                textDivProperties.canvasWidth = geom.height * task._viewport.scale;
              } else {
                textDivProperties.canvasWidth = geom.width * task._viewport.scale;
              }
            }
            task._textDivProperties.set(textDiv, textDivProperties);
            if (task._textContentStream) {
              task._layoutText(textDiv);
            }
            if (task._enhanceTextSelection && textDivProperties.hasText) {
              let angleCos = 1, angleSin = 0;
              if (angle !== 0) {
                angleCos = Math.cos(angle);
                angleSin = Math.sin(angle);
              }
              const divWidth = (style.vertical ? geom.height : geom.width) * task._viewport.scale;
              const divHeight = fontHeight;
              let m, b;
              if (angle !== 0) {
                m = [angleCos, angleSin, -angleSin, angleCos, left, top];
                b = _util2.Util.getAxialAlignedBoundingBox([0, 0, divWidth, divHeight], m);
              } else {
                b = [left, top, left + divWidth, top + divHeight];
              }
              task._bounds.push({
                left: b[0],
                top: b[1],
                right: b[2],
                bottom: b[3],
                div: textDiv,
                size: [divWidth, divHeight],
                m
              });
            }
          }
          function render(task) {
            if (task._canceled) {
              return;
            }
            const textDivs = task._textDivs;
            const capability = task._capability;
            const textDivsLength = textDivs.length;
            if (textDivsLength > MAX_TEXT_DIVS_TO_RENDER) {
              task._renderingDone = true;
              capability.resolve();
              return;
            }
            if (!task._textContentStream) {
              for (let i = 0; i < textDivsLength; i++) {
                task._layoutText(textDivs[i]);
              }
            }
            task._renderingDone = true;
            capability.resolve();
          }
          function findPositiveMin(ts, offset, count) {
            let result = 0;
            for (let i = 0; i < count; i++) {
              const t = ts[offset++];
              if (t > 0) {
                result = result ? Math.min(t, result) : t;
              }
            }
            return result;
          }
          function expand(task) {
            const bounds = task._bounds;
            const viewport = task._viewport;
            const expanded = expandBounds(viewport.width, viewport.height, bounds);
            for (let i = 0; i < expanded.length; i++) {
              const div = bounds[i].div;
              const divProperties = task._textDivProperties.get(div);
              if (divProperties.angle === 0) {
                divProperties.paddingLeft = bounds[i].left - expanded[i].left;
                divProperties.paddingTop = bounds[i].top - expanded[i].top;
                divProperties.paddingRight = expanded[i].right - bounds[i].right;
                divProperties.paddingBottom = expanded[i].bottom - bounds[i].bottom;
                task._textDivProperties.set(div, divProperties);
                continue;
              }
              const e = expanded[i], b = bounds[i];
              const m = b.m, c = m[0], s = m[1];
              const points = [[0, 0], [0, b.size[1]], [b.size[0], 0], b.size];
              const ts = new Float64Array(64);
              for (let j = 0, jj = points.length; j < jj; j++) {
                const t = _util2.Util.applyTransform(points[j], m);
                ts[j + 0] = c && (e.left - t[0]) / c;
                ts[j + 4] = s && (e.top - t[1]) / s;
                ts[j + 8] = c && (e.right - t[0]) / c;
                ts[j + 12] = s && (e.bottom - t[1]) / s;
                ts[j + 16] = s && (e.left - t[0]) / -s;
                ts[j + 20] = c && (e.top - t[1]) / c;
                ts[j + 24] = s && (e.right - t[0]) / -s;
                ts[j + 28] = c && (e.bottom - t[1]) / c;
                ts[j + 32] = c && (e.left - t[0]) / -c;
                ts[j + 36] = s && (e.top - t[1]) / -s;
                ts[j + 40] = c && (e.right - t[0]) / -c;
                ts[j + 44] = s && (e.bottom - t[1]) / -s;
                ts[j + 48] = s && (e.left - t[0]) / s;
                ts[j + 52] = c && (e.top - t[1]) / -c;
                ts[j + 56] = s && (e.right - t[0]) / s;
                ts[j + 60] = c && (e.bottom - t[1]) / -c;
              }
              const boxScale = 1 + Math.min(Math.abs(c), Math.abs(s));
              divProperties.paddingLeft = findPositiveMin(ts, 32, 16) / boxScale;
              divProperties.paddingTop = findPositiveMin(ts, 48, 16) / boxScale;
              divProperties.paddingRight = findPositiveMin(ts, 0, 16) / boxScale;
              divProperties.paddingBottom = findPositiveMin(ts, 16, 16) / boxScale;
              task._textDivProperties.set(div, divProperties);
            }
          }
          function expandBounds(width, height, boxes) {
            const bounds = boxes.map(function(box, i) {
              return {
                x1: box.left,
                y1: box.top,
                x2: box.right,
                y2: box.bottom,
                index: i,
                x1New: void 0,
                x2New: void 0
              };
            });
            expandBoundsLTR(width, bounds);
            const expanded = new Array(boxes.length);
            for (const b of bounds) {
              const i = b.index;
              expanded[i] = {
                left: b.x1New,
                top: 0,
                right: b.x2New,
                bottom: 0
              };
            }
            boxes.map(function(box, i) {
              const e = expanded[i], b = bounds[i];
              b.x1 = box.top;
              b.y1 = width - e.right;
              b.x2 = box.bottom;
              b.y2 = width - e.left;
              b.index = i;
              b.x1New = void 0;
              b.x2New = void 0;
            });
            expandBoundsLTR(height, bounds);
            for (const b of bounds) {
              const i = b.index;
              expanded[i].top = b.x1New;
              expanded[i].bottom = b.x2New;
            }
            return expanded;
          }
          function expandBoundsLTR(width, bounds) {
            bounds.sort(function(a, b) {
              return a.x1 - b.x1 || a.index - b.index;
            });
            const fakeBoundary = {
              x1: -Infinity,
              y1: -Infinity,
              x2: 0,
              y2: Infinity,
              index: -1,
              x1New: 0,
              x2New: 0
            };
            const horizon = [{
              start: -Infinity,
              end: Infinity,
              boundary: fakeBoundary
            }];
            for (const boundary of bounds) {
              let i = 0;
              while (i < horizon.length && horizon[i].end <= boundary.y1) {
                i++;
              }
              let j = horizon.length - 1;
              while (j >= 0 && horizon[j].start >= boundary.y2) {
                j--;
              }
              let horizonPart, affectedBoundary;
              let q, k, maxXNew = -Infinity;
              for (q = i; q <= j; q++) {
                horizonPart = horizon[q];
                affectedBoundary = horizonPart.boundary;
                let xNew;
                if (affectedBoundary.x2 > boundary.x1) {
                  xNew = affectedBoundary.index > boundary.index ? affectedBoundary.x1New : boundary.x1;
                } else if (affectedBoundary.x2New === void 0) {
                  xNew = (affectedBoundary.x2 + boundary.x1) / 2;
                } else {
                  xNew = affectedBoundary.x2New;
                }
                if (xNew > maxXNew) {
                  maxXNew = xNew;
                }
              }
              boundary.x1New = maxXNew;
              for (q = i; q <= j; q++) {
                horizonPart = horizon[q];
                affectedBoundary = horizonPart.boundary;
                if (affectedBoundary.x2New === void 0) {
                  if (affectedBoundary.x2 > boundary.x1) {
                    if (affectedBoundary.index > boundary.index) {
                      affectedBoundary.x2New = affectedBoundary.x2;
                    }
                  } else {
                    affectedBoundary.x2New = maxXNew;
                  }
                } else if (affectedBoundary.x2New > maxXNew) {
                  affectedBoundary.x2New = Math.max(maxXNew, affectedBoundary.x2);
                }
              }
              const changedHorizon = [];
              let lastBoundary = null;
              for (q = i; q <= j; q++) {
                horizonPart = horizon[q];
                affectedBoundary = horizonPart.boundary;
                const useBoundary = affectedBoundary.x2 > boundary.x2 ? affectedBoundary : boundary;
                if (lastBoundary === useBoundary) {
                  changedHorizon[changedHorizon.length - 1].end = horizonPart.end;
                } else {
                  changedHorizon.push({
                    start: horizonPart.start,
                    end: horizonPart.end,
                    boundary: useBoundary
                  });
                  lastBoundary = useBoundary;
                }
              }
              if (horizon[i].start < boundary.y1) {
                changedHorizon[0].start = boundary.y1;
                changedHorizon.unshift({
                  start: horizon[i].start,
                  end: boundary.y1,
                  boundary: horizon[i].boundary
                });
              }
              if (boundary.y2 < horizon[j].end) {
                changedHorizon[changedHorizon.length - 1].end = boundary.y2;
                changedHorizon.push({
                  start: boundary.y2,
                  end: horizon[j].end,
                  boundary: horizon[j].boundary
                });
              }
              for (q = i; q <= j; q++) {
                horizonPart = horizon[q];
                affectedBoundary = horizonPart.boundary;
                if (affectedBoundary.x2New !== void 0) {
                  continue;
                }
                let used = false;
                for (k = i - 1; !used && k >= 0 && horizon[k].start >= affectedBoundary.y1; k--) {
                  used = horizon[k].boundary === affectedBoundary;
                }
                for (k = j + 1; !used && k < horizon.length && horizon[k].end <= affectedBoundary.y2; k++) {
                  used = horizon[k].boundary === affectedBoundary;
                }
                for (k = 0; !used && k < changedHorizon.length; k++) {
                  used = changedHorizon[k].boundary === affectedBoundary;
                }
                if (!used) {
                  affectedBoundary.x2New = maxXNew;
                }
              }
              Array.prototype.splice.apply(horizon, [i, j - i + 1].concat(changedHorizon));
            }
            for (const horizonPart of horizon) {
              const affectedBoundary = horizonPart.boundary;
              if (affectedBoundary.x2New === void 0) {
                affectedBoundary.x2New = Math.max(width, affectedBoundary.x2);
              }
            }
          }
          class TextLayerRenderTask {
            constructor({
              textContent,
              textContentStream,
              container,
              viewport,
              textDivs,
              textContentItemsStr,
              enhanceTextSelection
            }) {
              var _a;
              this._textContent = textContent;
              this._textContentStream = textContentStream;
              this._container = container;
              this._document = container.ownerDocument;
              this._viewport = viewport;
              this._textDivs = textDivs || [];
              this._textContentItemsStr = textContentItemsStr || [];
              this._enhanceTextSelection = !!enhanceTextSelection;
              this._fontInspectorEnabled = !!((_a = globalThis.FontInspector) == null ? void 0 : _a.enabled);
              this._reader = null;
              this._layoutTextLastFontSize = null;
              this._layoutTextLastFontFamily = null;
              this._layoutTextCtx = null;
              this._textDivProperties = /* @__PURE__ */ new WeakMap();
              this._renderingDone = false;
              this._canceled = false;
              this._capability = (0, _util2.createPromiseCapability)();
              this._renderTimer = null;
              this._bounds = [];
              this._capability.promise.finally(() => {
                if (!this._enhanceTextSelection) {
                  this._textDivProperties = null;
                }
                if (this._layoutTextCtx) {
                  this._layoutTextCtx.canvas.width = 0;
                  this._layoutTextCtx.canvas.height = 0;
                  this._layoutTextCtx = null;
                }
              }).catch(() => {
              });
            }
            get promise() {
              return this._capability.promise;
            }
            cancel() {
              this._canceled = true;
              if (this._reader) {
                this._reader.cancel(new _util2.AbortException("TextLayer task cancelled.")).catch(() => {
                });
                this._reader = null;
              }
              if (this._renderTimer !== null) {
                clearTimeout(this._renderTimer);
                this._renderTimer = null;
              }
              this._capability.reject(new Error("TextLayer task cancelled."));
            }
            _processItems(items, styleCache) {
              for (let i = 0, len = items.length; i < len; i++) {
                if (items[i].str === void 0) {
                  if (items[i].type === "beginMarkedContentProps" || items[i].type === "beginMarkedContent") {
                    const parent = this._container;
                    this._container = document.createElement("span");
                    this._container.classList.add("markedContent");
                    if (items[i].id !== null) {
                      this._container.setAttribute("id", `${items[i].id}`);
                    }
                    parent.appendChild(this._container);
                  } else if (items[i].type === "endMarkedContent") {
                    this._container = this._container.parentNode;
                  }
                  continue;
                }
                this._textContentItemsStr.push(items[i].str);
                appendText(this, items[i], styleCache, this._layoutTextCtx);
              }
            }
            _layoutText(textDiv) {
              const textDivProperties = this._textDivProperties.get(textDiv);
              let transform = "";
              if (textDivProperties.canvasWidth !== 0 && textDivProperties.hasText) {
                const {
                  fontSize,
                  fontFamily
                } = textDiv.style;
                if (fontSize !== this._layoutTextLastFontSize || fontFamily !== this._layoutTextLastFontFamily) {
                  this._layoutTextCtx.font = `${fontSize} ${fontFamily}`;
                  this._layoutTextLastFontSize = fontSize;
                  this._layoutTextLastFontFamily = fontFamily;
                }
                const {
                  width
                } = this._layoutTextCtx.measureText(textDiv.textContent);
                if (width > 0) {
                  const scale2 = textDivProperties.canvasWidth / width;
                  if (this._enhanceTextSelection) {
                    textDivProperties.scale = scale2;
                  }
                  transform = `scaleX(${scale2})`;
                }
              }
              if (textDivProperties.angle !== 0) {
                transform = `rotate(${textDivProperties.angle}deg) ${transform}`;
              }
              if (transform.length > 0) {
                if (this._enhanceTextSelection) {
                  textDivProperties.originalTransform = transform;
                }
                textDiv.style.transform = transform;
              }
              if (textDivProperties.hasText) {
                this._container.appendChild(textDiv);
              }
              if (textDivProperties.hasEOL) {
                const br = document.createElement("br");
                br.setAttribute("role", "presentation");
                this._container.appendChild(br);
              }
            }
            _render(timeout = 0) {
              const capability = (0, _util2.createPromiseCapability)();
              let styleCache = /* @__PURE__ */ Object.create(null);
              const canvas = this._document.createElement("canvas");
              canvas.height = canvas.width = DEFAULT_FONT_SIZE;
              this._layoutTextCtx = canvas.getContext("2d", {
                alpha: false
              });
              if (this._textContent) {
                const textItems = this._textContent.items;
                const textStyles = this._textContent.styles;
                this._processItems(textItems, textStyles);
                capability.resolve();
              } else if (this._textContentStream) {
                const pump = () => {
                  this._reader.read().then(({
                    value,
                    done
                  }) => {
                    if (done) {
                      capability.resolve();
                      return;
                    }
                    Object.assign(styleCache, value.styles);
                    this._processItems(value.items, styleCache);
                    pump();
                  }, capability.reject);
                };
                this._reader = this._textContentStream.getReader();
                pump();
              } else {
                throw new Error('Neither "textContent" nor "textContentStream" parameters specified.');
              }
              capability.promise.then(() => {
                styleCache = null;
                if (!timeout) {
                  render(this);
                } else {
                  this._renderTimer = setTimeout(() => {
                    render(this);
                    this._renderTimer = null;
                  }, timeout);
                }
              }, this._capability.reject);
            }
            expandTextDivs(expandDivs = false) {
              if (!this._enhanceTextSelection || !this._renderingDone) {
                return;
              }
              if (this._bounds !== null) {
                expand(this);
                this._bounds = null;
              }
              const transformBuf = [], paddingBuf = [];
              for (let i = 0, ii = this._textDivs.length; i < ii; i++) {
                const div = this._textDivs[i];
                const divProps = this._textDivProperties.get(div);
                if (!divProps.hasText) {
                  continue;
                }
                if (expandDivs) {
                  transformBuf.length = 0;
                  paddingBuf.length = 0;
                  if (divProps.originalTransform) {
                    transformBuf.push(divProps.originalTransform);
                  }
                  if (divProps.paddingTop > 0) {
                    paddingBuf.push(`${divProps.paddingTop}px`);
                    transformBuf.push(`translateY(${-divProps.paddingTop}px)`);
                  } else {
                    paddingBuf.push(0);
                  }
                  if (divProps.paddingRight > 0) {
                    paddingBuf.push(`${divProps.paddingRight / divProps.scale}px`);
                  } else {
                    paddingBuf.push(0);
                  }
                  if (divProps.paddingBottom > 0) {
                    paddingBuf.push(`${divProps.paddingBottom}px`);
                  } else {
                    paddingBuf.push(0);
                  }
                  if (divProps.paddingLeft > 0) {
                    paddingBuf.push(`${divProps.paddingLeft / divProps.scale}px`);
                    transformBuf.push(`translateX(${-divProps.paddingLeft / divProps.scale}px)`);
                  } else {
                    paddingBuf.push(0);
                  }
                  div.style.padding = paddingBuf.join(" ");
                  if (transformBuf.length) {
                    div.style.transform = transformBuf.join(" ");
                  }
                } else {
                  div.style.padding = null;
                  div.style.transform = divProps.originalTransform;
                }
              }
            }
          }
          function renderTextLayer(renderParameters) {
            const task = new TextLayerRenderTask({
              textContent: renderParameters.textContent,
              textContentStream: renderParameters.textContentStream,
              container: renderParameters.container,
              viewport: renderParameters.viewport,
              textDivs: renderParameters.textDivs,
              textContentItemsStr: renderParameters.textContentItemsStr,
              enhanceTextSelection: renderParameters.enhanceTextSelection
            });
            task._render(renderParameters.timeout);
            return task;
          }
        },
        (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.SVGGraphics = void 0;
          var _util2 = __w_pdfjs_require__2(1);
          var _display_utils2 = __w_pdfjs_require__2(5);
          var _is_node2 = __w_pdfjs_require__2(3);
          let SVGGraphics = class {
            constructor() {
              (0, _util2.unreachable)("Not implemented: SVGGraphics");
            }
          };
          exports2.SVGGraphics = SVGGraphics;
          {
            let opListToTree = function(opList) {
              let opTree = [];
              const tmp = [];
              for (const opListElement of opList) {
                if (opListElement.fn === "save") {
                  opTree.push({
                    fnId: 92,
                    fn: "group",
                    items: []
                  });
                  tmp.push(opTree);
                  opTree = opTree[opTree.length - 1].items;
                  continue;
                }
                if (opListElement.fn === "restore") {
                  opTree = tmp.pop();
                } else {
                  opTree.push(opListElement);
                }
              }
              return opTree;
            }, pf = function(value) {
              if (Number.isInteger(value)) {
                return value.toString();
              }
              const s = value.toFixed(10);
              let i = s.length - 1;
              if (s[i] !== "0") {
                return s;
              }
              do {
                i--;
              } while (s[i] === "0");
              return s.substring(0, s[i] === "." ? i : i + 1);
            }, pm = function(m) {
              if (m[4] === 0 && m[5] === 0) {
                if (m[1] === 0 && m[2] === 0) {
                  if (m[0] === 1 && m[3] === 1) {
                    return "";
                  }
                  return `scale(${pf(m[0])} ${pf(m[3])})`;
                }
                if (m[0] === m[3] && m[1] === -m[2]) {
                  const a = Math.acos(m[0]) * 180 / Math.PI;
                  return `rotate(${pf(a)})`;
                }
              } else {
                if (m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 1) {
                  return `translate(${pf(m[4])} ${pf(m[5])})`;
                }
              }
              return `matrix(${pf(m[0])} ${pf(m[1])} ${pf(m[2])} ${pf(m[3])} ${pf(m[4])} ${pf(m[5])})`;
            };
            const SVG_DEFAULTS = {
              fontStyle: "normal",
              fontWeight: "normal",
              fillColor: "#000000"
            };
            const XML_NS = "http://www.w3.org/XML/1998/namespace";
            const XLINK_NS = "http://www.w3.org/1999/xlink";
            const LINE_CAP_STYLES = ["butt", "round", "square"];
            const LINE_JOIN_STYLES = ["miter", "round", "bevel"];
            const createObjectURL = function(data, contentType = "", forceDataSchema = false) {
              if (URL.createObjectURL && typeof Blob !== "undefined" && !forceDataSchema) {
                return URL.createObjectURL(new Blob([data], {
                  type: contentType
                }));
              }
              const digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
              let buffer = `data:${contentType};base64,`;
              for (let i = 0, ii = data.length; i < ii; i += 3) {
                const b1 = data[i] & 255;
                const b2 = data[i + 1] & 255;
                const b3 = data[i + 2] & 255;
                const d1 = b1 >> 2, d2 = (b1 & 3) << 4 | b2 >> 4;
                const d3 = i + 1 < ii ? (b2 & 15) << 2 | b3 >> 6 : 64;
                const d4 = i + 2 < ii ? b3 & 63 : 64;
                buffer += digits[d1] + digits[d2] + digits[d3] + digits[d4];
              }
              return buffer;
            };
            const convertImgDataToPng = function() {
              const PNG_HEADER = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);
              const CHUNK_WRAPPER_SIZE = 12;
              const crcTable = new Int32Array(256);
              for (let i = 0; i < 256; i++) {
                let c = i;
                for (let h = 0; h < 8; h++) {
                  if (c & 1) {
                    c = 3988292384 ^ c >> 1 & 2147483647;
                  } else {
                    c = c >> 1 & 2147483647;
                  }
                }
                crcTable[i] = c;
              }
              function crc32(data, start, end) {
                let crc = -1;
                for (let i = start; i < end; i++) {
                  const a = (crc ^ data[i]) & 255;
                  const b = crcTable[a];
                  crc = crc >>> 8 ^ b;
                }
                return crc ^ -1;
              }
              function writePngChunk(type, body, data, offset) {
                let p = offset;
                const len = body.length;
                data[p] = len >> 24 & 255;
                data[p + 1] = len >> 16 & 255;
                data[p + 2] = len >> 8 & 255;
                data[p + 3] = len & 255;
                p += 4;
                data[p] = type.charCodeAt(0) & 255;
                data[p + 1] = type.charCodeAt(1) & 255;
                data[p + 2] = type.charCodeAt(2) & 255;
                data[p + 3] = type.charCodeAt(3) & 255;
                p += 4;
                data.set(body, p);
                p += body.length;
                const crc = crc32(data, offset + 4, p);
                data[p] = crc >> 24 & 255;
                data[p + 1] = crc >> 16 & 255;
                data[p + 2] = crc >> 8 & 255;
                data[p + 3] = crc & 255;
              }
              function adler32(data, start, end) {
                let a = 1;
                let b = 0;
                for (let i = start; i < end; ++i) {
                  a = (a + (data[i] & 255)) % 65521;
                  b = (b + a) % 65521;
                }
                return b << 16 | a;
              }
              function deflateSync(literals) {
                if (!_is_node2.isNodeJS) {
                  return deflateSyncUncompressed(literals);
                }
                try {
                  let input;
                  if (parseInt(process.versions.node) >= 8) {
                    input = literals;
                  } else {
                    input = Buffer.from(literals);
                  }
                  const output = require("zlib").deflateSync(input, {
                    level: 9
                  });
                  return output instanceof Uint8Array ? output : new Uint8Array(output);
                } catch (e) {
                  (0, _util2.warn)("Not compressing PNG because zlib.deflateSync is unavailable: " + e);
                }
                return deflateSyncUncompressed(literals);
              }
              function deflateSyncUncompressed(literals) {
                let len = literals.length;
                const maxBlockLength = 65535;
                const deflateBlocks = Math.ceil(len / maxBlockLength);
                const idat = new Uint8Array(2 + len + deflateBlocks * 5 + 4);
                let pi = 0;
                idat[pi++] = 120;
                idat[pi++] = 156;
                let pos = 0;
                while (len > maxBlockLength) {
                  idat[pi++] = 0;
                  idat[pi++] = 255;
                  idat[pi++] = 255;
                  idat[pi++] = 0;
                  idat[pi++] = 0;
                  idat.set(literals.subarray(pos, pos + maxBlockLength), pi);
                  pi += maxBlockLength;
                  pos += maxBlockLength;
                  len -= maxBlockLength;
                }
                idat[pi++] = 1;
                idat[pi++] = len & 255;
                idat[pi++] = len >> 8 & 255;
                idat[pi++] = ~len & 65535 & 255;
                idat[pi++] = (~len & 65535) >> 8 & 255;
                idat.set(literals.subarray(pos), pi);
                pi += literals.length - pos;
                const adler = adler32(literals, 0, literals.length);
                idat[pi++] = adler >> 24 & 255;
                idat[pi++] = adler >> 16 & 255;
                idat[pi++] = adler >> 8 & 255;
                idat[pi++] = adler & 255;
                return idat;
              }
              function encode(imgData, kind, forceDataSchema, isMask) {
                const width = imgData.width;
                const height = imgData.height;
                let bitDepth, colorType, lineSize;
                const bytes = imgData.data;
                switch (kind) {
                  case _util2.ImageKind.GRAYSCALE_1BPP:
                    colorType = 0;
                    bitDepth = 1;
                    lineSize = width + 7 >> 3;
                    break;
                  case _util2.ImageKind.RGB_24BPP:
                    colorType = 2;
                    bitDepth = 8;
                    lineSize = width * 3;
                    break;
                  case _util2.ImageKind.RGBA_32BPP:
                    colorType = 6;
                    bitDepth = 8;
                    lineSize = width * 4;
                    break;
                  default:
                    throw new Error("invalid format");
                }
                const literals = new Uint8Array((1 + lineSize) * height);
                let offsetLiterals = 0, offsetBytes = 0;
                for (let y = 0; y < height; ++y) {
                  literals[offsetLiterals++] = 0;
                  literals.set(bytes.subarray(offsetBytes, offsetBytes + lineSize), offsetLiterals);
                  offsetBytes += lineSize;
                  offsetLiterals += lineSize;
                }
                if (kind === _util2.ImageKind.GRAYSCALE_1BPP && isMask) {
                  offsetLiterals = 0;
                  for (let y = 0; y < height; y++) {
                    offsetLiterals++;
                    for (let i = 0; i < lineSize; i++) {
                      literals[offsetLiterals++] ^= 255;
                    }
                  }
                }
                const ihdr = new Uint8Array([width >> 24 & 255, width >> 16 & 255, width >> 8 & 255, width & 255, height >> 24 & 255, height >> 16 & 255, height >> 8 & 255, height & 255, bitDepth, colorType, 0, 0, 0]);
                const idat = deflateSync(literals);
                const pngLength = PNG_HEADER.length + CHUNK_WRAPPER_SIZE * 3 + ihdr.length + idat.length;
                const data = new Uint8Array(pngLength);
                let offset = 0;
                data.set(PNG_HEADER, offset);
                offset += PNG_HEADER.length;
                writePngChunk("IHDR", ihdr, data, offset);
                offset += CHUNK_WRAPPER_SIZE + ihdr.length;
                writePngChunk("IDATA", idat, data, offset);
                offset += CHUNK_WRAPPER_SIZE + idat.length;
                writePngChunk("IEND", new Uint8Array(0), data, offset);
                return createObjectURL(data, "image/png", forceDataSchema);
              }
              return function convertImgDataToPng2(imgData, forceDataSchema, isMask) {
                const kind = imgData.kind === void 0 ? _util2.ImageKind.GRAYSCALE_1BPP : imgData.kind;
                return encode(imgData, kind, forceDataSchema, isMask);
              };
            }();
            class SVGExtraState {
              constructor() {
                this.fontSizeScale = 1;
                this.fontWeight = SVG_DEFAULTS.fontWeight;
                this.fontSize = 0;
                this.textMatrix = _util2.IDENTITY_MATRIX;
                this.fontMatrix = _util2.FONT_IDENTITY_MATRIX;
                this.leading = 0;
                this.textRenderingMode = _util2.TextRenderingMode.FILL;
                this.textMatrixScale = 1;
                this.x = 0;
                this.y = 0;
                this.lineX = 0;
                this.lineY = 0;
                this.charSpacing = 0;
                this.wordSpacing = 0;
                this.textHScale = 1;
                this.textRise = 0;
                this.fillColor = SVG_DEFAULTS.fillColor;
                this.strokeColor = "#000000";
                this.fillAlpha = 1;
                this.strokeAlpha = 1;
                this.lineWidth = 1;
                this.lineJoin = "";
                this.lineCap = "";
                this.miterLimit = 0;
                this.dashArray = [];
                this.dashPhase = 0;
                this.dependencies = [];
                this.activeClipUrl = null;
                this.clipGroup = null;
                this.maskId = "";
              }
              clone() {
                return Object.create(this);
              }
              setCurrentPoint(x, y) {
                this.x = x;
                this.y = y;
              }
            }
            let clipCount = 0;
            let maskCount = 0;
            let shadingCount = 0;
            exports2.SVGGraphics = SVGGraphics = class {
              constructor(commonObjs, objs, forceDataSchema = false) {
                this.svgFactory = new _display_utils2.DOMSVGFactory();
                this.current = new SVGExtraState();
                this.transformMatrix = _util2.IDENTITY_MATRIX;
                this.transformStack = [];
                this.extraStack = [];
                this.commonObjs = commonObjs;
                this.objs = objs;
                this.pendingClip = null;
                this.pendingEOFill = false;
                this.embedFonts = false;
                this.embeddedFonts = /* @__PURE__ */ Object.create(null);
                this.cssStyle = null;
                this.forceDataSchema = !!forceDataSchema;
                this._operatorIdMapping = [];
                for (const op in _util2.OPS) {
                  this._operatorIdMapping[_util2.OPS[op]] = op;
                }
              }
              save() {
                this.transformStack.push(this.transformMatrix);
                const old = this.current;
                this.extraStack.push(old);
                this.current = old.clone();
              }
              restore() {
                this.transformMatrix = this.transformStack.pop();
                this.current = this.extraStack.pop();
                this.pendingClip = null;
                this.tgrp = null;
              }
              group(items) {
                this.save();
                this.executeOpTree(items);
                this.restore();
              }
              loadDependencies(operatorList) {
                const fnArray = operatorList.fnArray;
                const argsArray = operatorList.argsArray;
                for (let i = 0, ii = fnArray.length; i < ii; i++) {
                  if (fnArray[i] !== _util2.OPS.dependency) {
                    continue;
                  }
                  for (const obj of argsArray[i]) {
                    const objsPool = obj.startsWith("g_") ? this.commonObjs : this.objs;
                    const promise = new Promise((resolve) => {
                      objsPool.get(obj, resolve);
                    });
                    this.current.dependencies.push(promise);
                  }
                }
                return Promise.all(this.current.dependencies);
              }
              transform(a, b, c, d, e, f) {
                const transformMatrix = [a, b, c, d, e, f];
                this.transformMatrix = _util2.Util.transform(this.transformMatrix, transformMatrix);
                this.tgrp = null;
              }
              getSVG(operatorList, viewport) {
                this.viewport = viewport;
                const svgElement = this._initialize(viewport);
                return this.loadDependencies(operatorList).then(() => {
                  this.transformMatrix = _util2.IDENTITY_MATRIX;
                  this.executeOpTree(this.convertOpList(operatorList));
                  return svgElement;
                });
              }
              convertOpList(operatorList) {
                const operatorIdMapping = this._operatorIdMapping;
                const argsArray = operatorList.argsArray;
                const fnArray = operatorList.fnArray;
                const opList = [];
                for (let i = 0, ii = fnArray.length; i < ii; i++) {
                  const fnId = fnArray[i];
                  opList.push({
                    fnId,
                    fn: operatorIdMapping[fnId],
                    args: argsArray[i]
                  });
                }
                return opListToTree(opList);
              }
              executeOpTree(opTree) {
                for (const opTreeElement of opTree) {
                  const fn = opTreeElement.fn;
                  const fnId = opTreeElement.fnId;
                  const args = opTreeElement.args;
                  switch (fnId | 0) {
                    case _util2.OPS.beginText:
                      this.beginText();
                      break;
                    case _util2.OPS.dependency:
                      break;
                    case _util2.OPS.setLeading:
                      this.setLeading(args);
                      break;
                    case _util2.OPS.setLeadingMoveText:
                      this.setLeadingMoveText(args[0], args[1]);
                      break;
                    case _util2.OPS.setFont:
                      this.setFont(args);
                      break;
                    case _util2.OPS.showText:
                      this.showText(args[0]);
                      break;
                    case _util2.OPS.showSpacedText:
                      this.showText(args[0]);
                      break;
                    case _util2.OPS.endText:
                      this.endText();
                      break;
                    case _util2.OPS.moveText:
                      this.moveText(args[0], args[1]);
                      break;
                    case _util2.OPS.setCharSpacing:
                      this.setCharSpacing(args[0]);
                      break;
                    case _util2.OPS.setWordSpacing:
                      this.setWordSpacing(args[0]);
                      break;
                    case _util2.OPS.setHScale:
                      this.setHScale(args[0]);
                      break;
                    case _util2.OPS.setTextMatrix:
                      this.setTextMatrix(args[0], args[1], args[2], args[3], args[4], args[5]);
                      break;
                    case _util2.OPS.setTextRise:
                      this.setTextRise(args[0]);
                      break;
                    case _util2.OPS.setTextRenderingMode:
                      this.setTextRenderingMode(args[0]);
                      break;
                    case _util2.OPS.setLineWidth:
                      this.setLineWidth(args[0]);
                      break;
                    case _util2.OPS.setLineJoin:
                      this.setLineJoin(args[0]);
                      break;
                    case _util2.OPS.setLineCap:
                      this.setLineCap(args[0]);
                      break;
                    case _util2.OPS.setMiterLimit:
                      this.setMiterLimit(args[0]);
                      break;
                    case _util2.OPS.setFillRGBColor:
                      this.setFillRGBColor(args[0], args[1], args[2]);
                      break;
                    case _util2.OPS.setStrokeRGBColor:
                      this.setStrokeRGBColor(args[0], args[1], args[2]);
                      break;
                    case _util2.OPS.setStrokeColorN:
                      this.setStrokeColorN(args);
                      break;
                    case _util2.OPS.setFillColorN:
                      this.setFillColorN(args);
                      break;
                    case _util2.OPS.shadingFill:
                      this.shadingFill(args[0]);
                      break;
                    case _util2.OPS.setDash:
                      this.setDash(args[0], args[1]);
                      break;
                    case _util2.OPS.setRenderingIntent:
                      this.setRenderingIntent(args[0]);
                      break;
                    case _util2.OPS.setFlatness:
                      this.setFlatness(args[0]);
                      break;
                    case _util2.OPS.setGState:
                      this.setGState(args[0]);
                      break;
                    case _util2.OPS.fill:
                      this.fill();
                      break;
                    case _util2.OPS.eoFill:
                      this.eoFill();
                      break;
                    case _util2.OPS.stroke:
                      this.stroke();
                      break;
                    case _util2.OPS.fillStroke:
                      this.fillStroke();
                      break;
                    case _util2.OPS.eoFillStroke:
                      this.eoFillStroke();
                      break;
                    case _util2.OPS.clip:
                      this.clip("nonzero");
                      break;
                    case _util2.OPS.eoClip:
                      this.clip("evenodd");
                      break;
                    case _util2.OPS.paintSolidColorImageMask:
                      this.paintSolidColorImageMask();
                      break;
                    case _util2.OPS.paintImageXObject:
                      this.paintImageXObject(args[0]);
                      break;
                    case _util2.OPS.paintInlineImageXObject:
                      this.paintInlineImageXObject(args[0]);
                      break;
                    case _util2.OPS.paintImageMaskXObject:
                      this.paintImageMaskXObject(args[0]);
                      break;
                    case _util2.OPS.paintFormXObjectBegin:
                      this.paintFormXObjectBegin(args[0], args[1]);
                      break;
                    case _util2.OPS.paintFormXObjectEnd:
                      this.paintFormXObjectEnd();
                      break;
                    case _util2.OPS.closePath:
                      this.closePath();
                      break;
                    case _util2.OPS.closeStroke:
                      this.closeStroke();
                      break;
                    case _util2.OPS.closeFillStroke:
                      this.closeFillStroke();
                      break;
                    case _util2.OPS.closeEOFillStroke:
                      this.closeEOFillStroke();
                      break;
                    case _util2.OPS.nextLine:
                      this.nextLine();
                      break;
                    case _util2.OPS.transform:
                      this.transform(args[0], args[1], args[2], args[3], args[4], args[5]);
                      break;
                    case _util2.OPS.constructPath:
                      this.constructPath(args[0], args[1]);
                      break;
                    case _util2.OPS.endPath:
                      this.endPath();
                      break;
                    case 92:
                      this.group(opTreeElement.items);
                      break;
                    default:
                      (0, _util2.warn)(`Unimplemented operator ${fn}`);
                      break;
                  }
                }
              }
              setWordSpacing(wordSpacing) {
                this.current.wordSpacing = wordSpacing;
              }
              setCharSpacing(charSpacing) {
                this.current.charSpacing = charSpacing;
              }
              nextLine() {
                this.moveText(0, this.current.leading);
              }
              setTextMatrix(a, b, c, d, e, f) {
                const current = this.current;
                current.textMatrix = current.lineMatrix = [a, b, c, d, e, f];
                current.textMatrixScale = Math.hypot(a, b);
                current.x = current.lineX = 0;
                current.y = current.lineY = 0;
                current.xcoords = [];
                current.ycoords = [];
                current.tspan = this.svgFactory.createElement("svg:tspan");
                current.tspan.setAttributeNS(null, "font-family", current.fontFamily);
                current.tspan.setAttributeNS(null, "font-size", `${pf(current.fontSize)}px`);
                current.tspan.setAttributeNS(null, "y", pf(-current.y));
                current.txtElement = this.svgFactory.createElement("svg:text");
                current.txtElement.appendChild(current.tspan);
              }
              beginText() {
                const current = this.current;
                current.x = current.lineX = 0;
                current.y = current.lineY = 0;
                current.textMatrix = _util2.IDENTITY_MATRIX;
                current.lineMatrix = _util2.IDENTITY_MATRIX;
                current.textMatrixScale = 1;
                current.tspan = this.svgFactory.createElement("svg:tspan");
                current.txtElement = this.svgFactory.createElement("svg:text");
                current.txtgrp = this.svgFactory.createElement("svg:g");
                current.xcoords = [];
                current.ycoords = [];
              }
              moveText(x, y) {
                const current = this.current;
                current.x = current.lineX += x;
                current.y = current.lineY += y;
                current.xcoords = [];
                current.ycoords = [];
                current.tspan = this.svgFactory.createElement("svg:tspan");
                current.tspan.setAttributeNS(null, "font-family", current.fontFamily);
                current.tspan.setAttributeNS(null, "font-size", `${pf(current.fontSize)}px`);
                current.tspan.setAttributeNS(null, "y", pf(-current.y));
              }
              showText(glyphs) {
                const current = this.current;
                const font = current.font;
                const fontSize = current.fontSize;
                if (fontSize === 0) {
                  return;
                }
                const fontSizeScale = current.fontSizeScale;
                const charSpacing = current.charSpacing;
                const wordSpacing = current.wordSpacing;
                const fontDirection = current.fontDirection;
                const textHScale = current.textHScale * fontDirection;
                const vertical = font.vertical;
                const spacingDir = vertical ? 1 : -1;
                const defaultVMetrics = font.defaultVMetrics;
                const widthAdvanceScale = fontSize * current.fontMatrix[0];
                let x = 0;
                for (const glyph of glyphs) {
                  if (glyph === null) {
                    x += fontDirection * wordSpacing;
                    continue;
                  } else if (typeof glyph === "number") {
                    x += spacingDir * glyph * fontSize / 1e3;
                    continue;
                  }
                  const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
                  const character = glyph.fontChar;
                  let scaledX, scaledY;
                  let width = glyph.width;
                  if (vertical) {
                    let vx;
                    const vmetric = glyph.vmetric || defaultVMetrics;
                    vx = glyph.vmetric ? vmetric[1] : width * 0.5;
                    vx = -vx * widthAdvanceScale;
                    const vy = vmetric[2] * widthAdvanceScale;
                    width = vmetric ? -vmetric[0] : width;
                    scaledX = vx / fontSizeScale;
                    scaledY = (x + vy) / fontSizeScale;
                  } else {
                    scaledX = x / fontSizeScale;
                    scaledY = 0;
                  }
                  if (glyph.isInFont || font.missingFile) {
                    current.xcoords.push(current.x + scaledX);
                    if (vertical) {
                      current.ycoords.push(-current.y + scaledY);
                    }
                    current.tspan.textContent += character;
                  }
                  let charWidth;
                  if (vertical) {
                    charWidth = width * widthAdvanceScale - spacing * fontDirection;
                  } else {
                    charWidth = width * widthAdvanceScale + spacing * fontDirection;
                  }
                  x += charWidth;
                }
                current.tspan.setAttributeNS(null, "x", current.xcoords.map(pf).join(" "));
                if (vertical) {
                  current.tspan.setAttributeNS(null, "y", current.ycoords.map(pf).join(" "));
                } else {
                  current.tspan.setAttributeNS(null, "y", pf(-current.y));
                }
                if (vertical) {
                  current.y -= x;
                } else {
                  current.x += x * textHScale;
                }
                current.tspan.setAttributeNS(null, "font-family", current.fontFamily);
                current.tspan.setAttributeNS(null, "font-size", `${pf(current.fontSize)}px`);
                if (current.fontStyle !== SVG_DEFAULTS.fontStyle) {
                  current.tspan.setAttributeNS(null, "font-style", current.fontStyle);
                }
                if (current.fontWeight !== SVG_DEFAULTS.fontWeight) {
                  current.tspan.setAttributeNS(null, "font-weight", current.fontWeight);
                }
                const fillStrokeMode = current.textRenderingMode & _util2.TextRenderingMode.FILL_STROKE_MASK;
                if (fillStrokeMode === _util2.TextRenderingMode.FILL || fillStrokeMode === _util2.TextRenderingMode.FILL_STROKE) {
                  if (current.fillColor !== SVG_DEFAULTS.fillColor) {
                    current.tspan.setAttributeNS(null, "fill", current.fillColor);
                  }
                  if (current.fillAlpha < 1) {
                    current.tspan.setAttributeNS(null, "fill-opacity", current.fillAlpha);
                  }
                } else if (current.textRenderingMode === _util2.TextRenderingMode.ADD_TO_PATH) {
                  current.tspan.setAttributeNS(null, "fill", "transparent");
                } else {
                  current.tspan.setAttributeNS(null, "fill", "none");
                }
                if (fillStrokeMode === _util2.TextRenderingMode.STROKE || fillStrokeMode === _util2.TextRenderingMode.FILL_STROKE) {
                  const lineWidthScale = 1 / (current.textMatrixScale || 1);
                  this._setStrokeAttributes(current.tspan, lineWidthScale);
                }
                let textMatrix = current.textMatrix;
                if (current.textRise !== 0) {
                  textMatrix = textMatrix.slice();
                  textMatrix[5] += current.textRise;
                }
                current.txtElement.setAttributeNS(null, "transform", `${pm(textMatrix)} scale(${pf(textHScale)}, -1)`);
                current.txtElement.setAttributeNS(XML_NS, "xml:space", "preserve");
                current.txtElement.appendChild(current.tspan);
                current.txtgrp.appendChild(current.txtElement);
                this._ensureTransformGroup().appendChild(current.txtElement);
              }
              setLeadingMoveText(x, y) {
                this.setLeading(-y);
                this.moveText(x, y);
              }
              addFontStyle(fontObj) {
                if (!fontObj.data) {
                  throw new Error('addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.');
                }
                if (!this.cssStyle) {
                  this.cssStyle = this.svgFactory.createElement("svg:style");
                  this.cssStyle.setAttributeNS(null, "type", "text/css");
                  this.defs.appendChild(this.cssStyle);
                }
                const url = createObjectURL(fontObj.data, fontObj.mimetype, this.forceDataSchema);
                this.cssStyle.textContent += `@font-face { font-family: "${fontObj.loadedName}"; src: url(${url}); }
`;
              }
              setFont(details) {
                const current = this.current;
                const fontObj = this.commonObjs.get(details[0]);
                let size = details[1];
                current.font = fontObj;
                if (this.embedFonts && !fontObj.missingFile && !this.embeddedFonts[fontObj.loadedName]) {
                  this.addFontStyle(fontObj);
                  this.embeddedFonts[fontObj.loadedName] = fontObj;
                }
                current.fontMatrix = fontObj.fontMatrix || _util2.FONT_IDENTITY_MATRIX;
                let bold = "normal";
                if (fontObj.black) {
                  bold = "900";
                } else if (fontObj.bold) {
                  bold = "bold";
                }
                const italic = fontObj.italic ? "italic" : "normal";
                if (size < 0) {
                  size = -size;
                  current.fontDirection = -1;
                } else {
                  current.fontDirection = 1;
                }
                current.fontSize = size;
                current.fontFamily = fontObj.loadedName;
                current.fontWeight = bold;
                current.fontStyle = italic;
                current.tspan = this.svgFactory.createElement("svg:tspan");
                current.tspan.setAttributeNS(null, "y", pf(-current.y));
                current.xcoords = [];
                current.ycoords = [];
              }
              endText() {
                var _a;
                const current = this.current;
                if (current.textRenderingMode & _util2.TextRenderingMode.ADD_TO_PATH_FLAG && ((_a = current.txtElement) == null ? void 0 : _a.hasChildNodes())) {
                  current.element = current.txtElement;
                  this.clip("nonzero");
                  this.endPath();
                }
              }
              setLineWidth(width) {
                if (width > 0) {
                  this.current.lineWidth = width;
                }
              }
              setLineCap(style) {
                this.current.lineCap = LINE_CAP_STYLES[style];
              }
              setLineJoin(style) {
                this.current.lineJoin = LINE_JOIN_STYLES[style];
              }
              setMiterLimit(limit) {
                this.current.miterLimit = limit;
              }
              setStrokeAlpha(strokeAlpha) {
                this.current.strokeAlpha = strokeAlpha;
              }
              setStrokeRGBColor(r, g, b) {
                this.current.strokeColor = _util2.Util.makeHexColor(r, g, b);
              }
              setFillAlpha(fillAlpha) {
                this.current.fillAlpha = fillAlpha;
              }
              setFillRGBColor(r, g, b) {
                this.current.fillColor = _util2.Util.makeHexColor(r, g, b);
                this.current.tspan = this.svgFactory.createElement("svg:tspan");
                this.current.xcoords = [];
                this.current.ycoords = [];
              }
              setStrokeColorN(args) {
                this.current.strokeColor = this._makeColorN_Pattern(args);
              }
              setFillColorN(args) {
                this.current.fillColor = this._makeColorN_Pattern(args);
              }
              shadingFill(args) {
                const width = this.viewport.width;
                const height = this.viewport.height;
                const inv = _util2.Util.inverseTransform(this.transformMatrix);
                const bl = _util2.Util.applyTransform([0, 0], inv);
                const br = _util2.Util.applyTransform([0, height], inv);
                const ul = _util2.Util.applyTransform([width, 0], inv);
                const ur = _util2.Util.applyTransform([width, height], inv);
                const x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
                const y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
                const x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
                const y1 = Math.max(bl[1], br[1], ul[1], ur[1]);
                const rect = this.svgFactory.createElement("svg:rect");
                rect.setAttributeNS(null, "x", x0);
                rect.setAttributeNS(null, "y", y0);
                rect.setAttributeNS(null, "width", x1 - x0);
                rect.setAttributeNS(null, "height", y1 - y0);
                rect.setAttributeNS(null, "fill", this._makeShadingPattern(args));
                if (this.current.fillAlpha < 1) {
                  rect.setAttributeNS(null, "fill-opacity", this.current.fillAlpha);
                }
                this._ensureTransformGroup().appendChild(rect);
              }
              _makeColorN_Pattern(args) {
                if (args[0] === "TilingPattern") {
                  return this._makeTilingPattern(args);
                }
                return this._makeShadingPattern(args);
              }
              _makeTilingPattern(args) {
                const color = args[1];
                const operatorList = args[2];
                const matrix = args[3] || _util2.IDENTITY_MATRIX;
                const [x0, y0, x1, y1] = args[4];
                const xstep = args[5];
                const ystep = args[6];
                const paintType = args[7];
                const tilingId = `shading${shadingCount++}`;
                const [tx0, ty0, tx1, ty1] = _util2.Util.normalizeRect([..._util2.Util.applyTransform([x0, y0], matrix), ..._util2.Util.applyTransform([x1, y1], matrix)]);
                const [xscale, yscale] = _util2.Util.singularValueDecompose2dScale(matrix);
                const txstep = xstep * xscale;
                const tystep = ystep * yscale;
                const tiling = this.svgFactory.createElement("svg:pattern");
                tiling.setAttributeNS(null, "id", tilingId);
                tiling.setAttributeNS(null, "patternUnits", "userSpaceOnUse");
                tiling.setAttributeNS(null, "width", txstep);
                tiling.setAttributeNS(null, "height", tystep);
                tiling.setAttributeNS(null, "x", `${tx0}`);
                tiling.setAttributeNS(null, "y", `${ty0}`);
                const svg = this.svg;
                const transformMatrix = this.transformMatrix;
                const fillColor = this.current.fillColor;
                const strokeColor = this.current.strokeColor;
                const bbox = this.svgFactory.create(tx1 - tx0, ty1 - ty0);
                this.svg = bbox;
                this.transformMatrix = matrix;
                if (paintType === 2) {
                  const cssColor = _util2.Util.makeHexColor(...color);
                  this.current.fillColor = cssColor;
                  this.current.strokeColor = cssColor;
                }
                this.executeOpTree(this.convertOpList(operatorList));
                this.svg = svg;
                this.transformMatrix = transformMatrix;
                this.current.fillColor = fillColor;
                this.current.strokeColor = strokeColor;
                tiling.appendChild(bbox.childNodes[0]);
                this.defs.appendChild(tiling);
                return `url(#${tilingId})`;
              }
              _makeShadingPattern(args) {
                if (typeof args === "string") {
                  args = this.objs.get(args);
                }
                switch (args[0]) {
                  case "RadialAxial":
                    const shadingId = `shading${shadingCount++}`;
                    const colorStops = args[3];
                    let gradient;
                    switch (args[1]) {
                      case "axial":
                        const point0 = args[4];
                        const point1 = args[5];
                        gradient = this.svgFactory.createElement("svg:linearGradient");
                        gradient.setAttributeNS(null, "id", shadingId);
                        gradient.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                        gradient.setAttributeNS(null, "x1", point0[0]);
                        gradient.setAttributeNS(null, "y1", point0[1]);
                        gradient.setAttributeNS(null, "x2", point1[0]);
                        gradient.setAttributeNS(null, "y2", point1[1]);
                        break;
                      case "radial":
                        const focalPoint = args[4];
                        const circlePoint = args[5];
                        const focalRadius = args[6];
                        const circleRadius = args[7];
                        gradient = this.svgFactory.createElement("svg:radialGradient");
                        gradient.setAttributeNS(null, "id", shadingId);
                        gradient.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                        gradient.setAttributeNS(null, "cx", circlePoint[0]);
                        gradient.setAttributeNS(null, "cy", circlePoint[1]);
                        gradient.setAttributeNS(null, "r", circleRadius);
                        gradient.setAttributeNS(null, "fx", focalPoint[0]);
                        gradient.setAttributeNS(null, "fy", focalPoint[1]);
                        gradient.setAttributeNS(null, "fr", focalRadius);
                        break;
                      default:
                        throw new Error(`Unknown RadialAxial type: ${args[1]}`);
                    }
                    for (const colorStop of colorStops) {
                      const stop = this.svgFactory.createElement("svg:stop");
                      stop.setAttributeNS(null, "offset", colorStop[0]);
                      stop.setAttributeNS(null, "stop-color", colorStop[1]);
                      gradient.appendChild(stop);
                    }
                    this.defs.appendChild(gradient);
                    return `url(#${shadingId})`;
                  case "Mesh":
                    (0, _util2.warn)("Unimplemented pattern Mesh");
                    return null;
                  case "Dummy":
                    return "hotpink";
                  default:
                    throw new Error(`Unknown IR type: ${args[0]}`);
                }
              }
              setDash(dashArray, dashPhase) {
                this.current.dashArray = dashArray;
                this.current.dashPhase = dashPhase;
              }
              constructPath(ops, args) {
                const current = this.current;
                let x = current.x, y = current.y;
                let d = [];
                let j = 0;
                for (const op of ops) {
                  switch (op | 0) {
                    case _util2.OPS.rectangle:
                      x = args[j++];
                      y = args[j++];
                      const width = args[j++];
                      const height = args[j++];
                      const xw = x + width;
                      const yh = y + height;
                      d.push("M", pf(x), pf(y), "L", pf(xw), pf(y), "L", pf(xw), pf(yh), "L", pf(x), pf(yh), "Z");
                      break;
                    case _util2.OPS.moveTo:
                      x = args[j++];
                      y = args[j++];
                      d.push("M", pf(x), pf(y));
                      break;
                    case _util2.OPS.lineTo:
                      x = args[j++];
                      y = args[j++];
                      d.push("L", pf(x), pf(y));
                      break;
                    case _util2.OPS.curveTo:
                      x = args[j + 4];
                      y = args[j + 5];
                      d.push("C", pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]), pf(x), pf(y));
                      j += 6;
                      break;
                    case _util2.OPS.curveTo2:
                      d.push("C", pf(x), pf(y), pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]));
                      x = args[j + 2];
                      y = args[j + 3];
                      j += 4;
                      break;
                    case _util2.OPS.curveTo3:
                      x = args[j + 2];
                      y = args[j + 3];
                      d.push("C", pf(args[j]), pf(args[j + 1]), pf(x), pf(y), pf(x), pf(y));
                      j += 4;
                      break;
                    case _util2.OPS.closePath:
                      d.push("Z");
                      break;
                  }
                }
                d = d.join(" ");
                if (current.path && ops.length > 0 && ops[0] !== _util2.OPS.rectangle && ops[0] !== _util2.OPS.moveTo) {
                  d = current.path.getAttributeNS(null, "d") + d;
                } else {
                  current.path = this.svgFactory.createElement("svg:path");
                  this._ensureTransformGroup().appendChild(current.path);
                }
                current.path.setAttributeNS(null, "d", d);
                current.path.setAttributeNS(null, "fill", "none");
                current.element = current.path;
                current.setCurrentPoint(x, y);
              }
              endPath() {
                const current = this.current;
                current.path = null;
                if (!this.pendingClip) {
                  return;
                }
                if (!current.element) {
                  this.pendingClip = null;
                  return;
                }
                const clipId = `clippath${clipCount++}`;
                const clipPath = this.svgFactory.createElement("svg:clipPath");
                clipPath.setAttributeNS(null, "id", clipId);
                clipPath.setAttributeNS(null, "transform", pm(this.transformMatrix));
                const clipElement = current.element.cloneNode(true);
                if (this.pendingClip === "evenodd") {
                  clipElement.setAttributeNS(null, "clip-rule", "evenodd");
                } else {
                  clipElement.setAttributeNS(null, "clip-rule", "nonzero");
                }
                this.pendingClip = null;
                clipPath.appendChild(clipElement);
                this.defs.appendChild(clipPath);
                if (current.activeClipUrl) {
                  current.clipGroup = null;
                  for (const prev of this.extraStack) {
                    prev.clipGroup = null;
                  }
                  clipPath.setAttributeNS(null, "clip-path", current.activeClipUrl);
                }
                current.activeClipUrl = `url(#${clipId})`;
                this.tgrp = null;
              }
              clip(type) {
                this.pendingClip = type;
              }
              closePath() {
                const current = this.current;
                if (current.path) {
                  const d = `${current.path.getAttributeNS(null, "d")}Z`;
                  current.path.setAttributeNS(null, "d", d);
                }
              }
              setLeading(leading) {
                this.current.leading = -leading;
              }
              setTextRise(textRise) {
                this.current.textRise = textRise;
              }
              setTextRenderingMode(textRenderingMode) {
                this.current.textRenderingMode = textRenderingMode;
              }
              setHScale(scale2) {
                this.current.textHScale = scale2 / 100;
              }
              setRenderingIntent(intent) {
              }
              setFlatness(flatness) {
              }
              setGState(states) {
                for (const [key, value] of states) {
                  switch (key) {
                    case "LW":
                      this.setLineWidth(value);
                      break;
                    case "LC":
                      this.setLineCap(value);
                      break;
                    case "LJ":
                      this.setLineJoin(value);
                      break;
                    case "ML":
                      this.setMiterLimit(value);
                      break;
                    case "D":
                      this.setDash(value[0], value[1]);
                      break;
                    case "RI":
                      this.setRenderingIntent(value);
                      break;
                    case "FL":
                      this.setFlatness(value);
                      break;
                    case "Font":
                      this.setFont(value);
                      break;
                    case "CA":
                      this.setStrokeAlpha(value);
                      break;
                    case "ca":
                      this.setFillAlpha(value);
                      break;
                    default:
                      (0, _util2.warn)(`Unimplemented graphic state operator ${key}`);
                      break;
                  }
                }
              }
              fill() {
                const current = this.current;
                if (current.element) {
                  current.element.setAttributeNS(null, "fill", current.fillColor);
                  current.element.setAttributeNS(null, "fill-opacity", current.fillAlpha);
                  this.endPath();
                }
              }
              stroke() {
                const current = this.current;
                if (current.element) {
                  this._setStrokeAttributes(current.element);
                  current.element.setAttributeNS(null, "fill", "none");
                  this.endPath();
                }
              }
              _setStrokeAttributes(element2, lineWidthScale = 1) {
                const current = this.current;
                let dashArray = current.dashArray;
                if (lineWidthScale !== 1 && dashArray.length > 0) {
                  dashArray = dashArray.map(function(value) {
                    return lineWidthScale * value;
                  });
                }
                element2.setAttributeNS(null, "stroke", current.strokeColor);
                element2.setAttributeNS(null, "stroke-opacity", current.strokeAlpha);
                element2.setAttributeNS(null, "stroke-miterlimit", pf(current.miterLimit));
                element2.setAttributeNS(null, "stroke-linecap", current.lineCap);
                element2.setAttributeNS(null, "stroke-linejoin", current.lineJoin);
                element2.setAttributeNS(null, "stroke-width", pf(lineWidthScale * current.lineWidth) + "px");
                element2.setAttributeNS(null, "stroke-dasharray", dashArray.map(pf).join(" "));
                element2.setAttributeNS(null, "stroke-dashoffset", pf(lineWidthScale * current.dashPhase) + "px");
              }
              eoFill() {
                if (this.current.element) {
                  this.current.element.setAttributeNS(null, "fill-rule", "evenodd");
                }
                this.fill();
              }
              fillStroke() {
                this.stroke();
                this.fill();
              }
              eoFillStroke() {
                if (this.current.element) {
                  this.current.element.setAttributeNS(null, "fill-rule", "evenodd");
                }
                this.fillStroke();
              }
              closeStroke() {
                this.closePath();
                this.stroke();
              }
              closeFillStroke() {
                this.closePath();
                this.fillStroke();
              }
              closeEOFillStroke() {
                this.closePath();
                this.eoFillStroke();
              }
              paintSolidColorImageMask() {
                const rect = this.svgFactory.createElement("svg:rect");
                rect.setAttributeNS(null, "x", "0");
                rect.setAttributeNS(null, "y", "0");
                rect.setAttributeNS(null, "width", "1px");
                rect.setAttributeNS(null, "height", "1px");
                rect.setAttributeNS(null, "fill", this.current.fillColor);
                this._ensureTransformGroup().appendChild(rect);
              }
              paintImageXObject(objId) {
                const imgData = objId.startsWith("g_") ? this.commonObjs.get(objId) : this.objs.get(objId);
                if (!imgData) {
                  (0, _util2.warn)(`Dependent image with object ID ${objId} is not ready yet`);
                  return;
                }
                this.paintInlineImageXObject(imgData);
              }
              paintInlineImageXObject(imgData, mask) {
                const width = imgData.width;
                const height = imgData.height;
                const imgSrc = convertImgDataToPng(imgData, this.forceDataSchema, !!mask);
                const cliprect = this.svgFactory.createElement("svg:rect");
                cliprect.setAttributeNS(null, "x", "0");
                cliprect.setAttributeNS(null, "y", "0");
                cliprect.setAttributeNS(null, "width", pf(width));
                cliprect.setAttributeNS(null, "height", pf(height));
                this.current.element = cliprect;
                this.clip("nonzero");
                const imgEl = this.svgFactory.createElement("svg:image");
                imgEl.setAttributeNS(XLINK_NS, "xlink:href", imgSrc);
                imgEl.setAttributeNS(null, "x", "0");
                imgEl.setAttributeNS(null, "y", pf(-height));
                imgEl.setAttributeNS(null, "width", pf(width) + "px");
                imgEl.setAttributeNS(null, "height", pf(height) + "px");
                imgEl.setAttributeNS(null, "transform", `scale(${pf(1 / width)} ${pf(-1 / height)})`);
                if (mask) {
                  mask.appendChild(imgEl);
                } else {
                  this._ensureTransformGroup().appendChild(imgEl);
                }
              }
              paintImageMaskXObject(imgData) {
                const current = this.current;
                const width = imgData.width;
                const height = imgData.height;
                const fillColor = current.fillColor;
                current.maskId = `mask${maskCount++}`;
                const mask = this.svgFactory.createElement("svg:mask");
                mask.setAttributeNS(null, "id", current.maskId);
                const rect = this.svgFactory.createElement("svg:rect");
                rect.setAttributeNS(null, "x", "0");
                rect.setAttributeNS(null, "y", "0");
                rect.setAttributeNS(null, "width", pf(width));
                rect.setAttributeNS(null, "height", pf(height));
                rect.setAttributeNS(null, "fill", fillColor);
                rect.setAttributeNS(null, "mask", `url(#${current.maskId})`);
                this.defs.appendChild(mask);
                this._ensureTransformGroup().appendChild(rect);
                this.paintInlineImageXObject(imgData, mask);
              }
              paintFormXObjectBegin(matrix, bbox) {
                if (Array.isArray(matrix) && matrix.length === 6) {
                  this.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
                }
                if (bbox) {
                  const width = bbox[2] - bbox[0];
                  const height = bbox[3] - bbox[1];
                  const cliprect = this.svgFactory.createElement("svg:rect");
                  cliprect.setAttributeNS(null, "x", bbox[0]);
                  cliprect.setAttributeNS(null, "y", bbox[1]);
                  cliprect.setAttributeNS(null, "width", pf(width));
                  cliprect.setAttributeNS(null, "height", pf(height));
                  this.current.element = cliprect;
                  this.clip("nonzero");
                  this.endPath();
                }
              }
              paintFormXObjectEnd() {
              }
              _initialize(viewport) {
                const svg = this.svgFactory.create(viewport.width, viewport.height);
                const definitions = this.svgFactory.createElement("svg:defs");
                svg.appendChild(definitions);
                this.defs = definitions;
                const rootGroup = this.svgFactory.createElement("svg:g");
                rootGroup.setAttributeNS(null, "transform", pm(viewport.transform));
                svg.appendChild(rootGroup);
                this.svg = rootGroup;
                return svg;
              }
              _ensureClipGroup() {
                if (!this.current.clipGroup) {
                  const clipGroup = this.svgFactory.createElement("svg:g");
                  clipGroup.setAttributeNS(null, "clip-path", this.current.activeClipUrl);
                  this.svg.appendChild(clipGroup);
                  this.current.clipGroup = clipGroup;
                }
                return this.current.clipGroup;
              }
              _ensureTransformGroup() {
                if (!this.tgrp) {
                  this.tgrp = this.svgFactory.createElement("svg:g");
                  this.tgrp.setAttributeNS(null, "transform", pm(this.transformMatrix));
                  if (this.current.activeClipUrl) {
                    this._ensureClipGroup().appendChild(this.tgrp);
                  } else {
                    this.svg.appendChild(this.tgrp);
                  }
                }
                return this.tgrp;
              }
            };
          }
        },
        (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.PDFNodeStream = void 0;
          var _util2 = __w_pdfjs_require__2(1);
          var _network_utils = __w_pdfjs_require__2(26);
          const fs = require$$4;
          const http = require$$4;
          const https = require$$4;
          const url = require$$4;
          const fileUriRegex = /^file:\/\/\/[a-zA-Z]:\//;
          function parseUrl(sourceUrl) {
            const parsedUrl = url.parse(sourceUrl);
            if (parsedUrl.protocol === "file:" || parsedUrl.host) {
              return parsedUrl;
            }
            if (/^[a-z]:[/\\]/i.test(sourceUrl)) {
              return url.parse(`file:///${sourceUrl}`);
            }
            if (!parsedUrl.host) {
              parsedUrl.protocol = "file:";
            }
            return parsedUrl;
          }
          class PDFNodeStream {
            constructor(source) {
              this.source = source;
              this.url = parseUrl(source.url);
              this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:";
              this.isFsUrl = this.url.protocol === "file:";
              this.httpHeaders = this.isHttp && source.httpHeaders || {};
              this._fullRequestReader = null;
              this._rangeRequestReaders = [];
            }
            get _progressiveDataLength() {
              var _a, _b;
              return (_b = (_a = this._fullRequestReader) == null ? void 0 : _a._loaded) != null ? _b : 0;
            }
            getFullReader() {
              (0, _util2.assert)(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once.");
              this._fullRequestReader = this.isFsUrl ? new PDFNodeStreamFsFullReader(this) : new PDFNodeStreamFullReader(this);
              return this._fullRequestReader;
            }
            getRangeReader(start, end) {
              if (end <= this._progressiveDataLength) {
                return null;
              }
              const rangeReader = this.isFsUrl ? new PDFNodeStreamFsRangeReader(this, start, end) : new PDFNodeStreamRangeReader(this, start, end);
              this._rangeRequestReaders.push(rangeReader);
              return rangeReader;
            }
            cancelAllRequests(reason) {
              if (this._fullRequestReader) {
                this._fullRequestReader.cancel(reason);
              }
              for (const reader of this._rangeRequestReaders.slice(0)) {
                reader.cancel(reason);
              }
            }
          }
          exports2.PDFNodeStream = PDFNodeStream;
          class BaseFullReader {
            constructor(stream) {
              this._url = stream.url;
              this._done = false;
              this._storedError = null;
              this.onProgress = null;
              const source = stream.source;
              this._contentLength = source.length;
              this._loaded = 0;
              this._filename = null;
              this._disableRange = source.disableRange || false;
              this._rangeChunkSize = source.rangeChunkSize;
              if (!this._rangeChunkSize && !this._disableRange) {
                this._disableRange = true;
              }
              this._isStreamingSupported = !source.disableStream;
              this._isRangeSupported = !source.disableRange;
              this._readableStream = null;
              this._readCapability = (0, _util2.createPromiseCapability)();
              this._headersCapability = (0, _util2.createPromiseCapability)();
            }
            get headersReady() {
              return this._headersCapability.promise;
            }
            get filename() {
              return this._filename;
            }
            get contentLength() {
              return this._contentLength;
            }
            get isRangeSupported() {
              return this._isRangeSupported;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            async read() {
              await this._readCapability.promise;
              if (this._done) {
                return {
                  value: void 0,
                  done: true
                };
              }
              if (this._storedError) {
                throw this._storedError;
              }
              const chunk = this._readableStream.read();
              if (chunk === null) {
                this._readCapability = (0, _util2.createPromiseCapability)();
                return this.read();
              }
              this._loaded += chunk.length;
              if (this.onProgress) {
                this.onProgress({
                  loaded: this._loaded,
                  total: this._contentLength
                });
              }
              const buffer = new Uint8Array(chunk).buffer;
              return {
                value: buffer,
                done: false
              };
            }
            cancel(reason) {
              if (!this._readableStream) {
                this._error(reason);
                return;
              }
              this._readableStream.destroy(reason);
            }
            _error(reason) {
              this._storedError = reason;
              this._readCapability.resolve();
            }
            _setReadableStream(readableStream) {
              this._readableStream = readableStream;
              readableStream.on("readable", () => {
                this._readCapability.resolve();
              });
              readableStream.on("end", () => {
                readableStream.destroy();
                this._done = true;
                this._readCapability.resolve();
              });
              readableStream.on("error", (reason) => {
                this._error(reason);
              });
              if (!this._isStreamingSupported && this._isRangeSupported) {
                this._error(new _util2.AbortException("streaming is disabled"));
              }
              if (this._storedError) {
                this._readableStream.destroy(this._storedError);
              }
            }
          }
          class BaseRangeReader {
            constructor(stream) {
              this._url = stream.url;
              this._done = false;
              this._storedError = null;
              this.onProgress = null;
              this._loaded = 0;
              this._readableStream = null;
              this._readCapability = (0, _util2.createPromiseCapability)();
              const source = stream.source;
              this._isStreamingSupported = !source.disableStream;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            async read() {
              await this._readCapability.promise;
              if (this._done) {
                return {
                  value: void 0,
                  done: true
                };
              }
              if (this._storedError) {
                throw this._storedError;
              }
              const chunk = this._readableStream.read();
              if (chunk === null) {
                this._readCapability = (0, _util2.createPromiseCapability)();
                return this.read();
              }
              this._loaded += chunk.length;
              if (this.onProgress) {
                this.onProgress({
                  loaded: this._loaded
                });
              }
              const buffer = new Uint8Array(chunk).buffer;
              return {
                value: buffer,
                done: false
              };
            }
            cancel(reason) {
              if (!this._readableStream) {
                this._error(reason);
                return;
              }
              this._readableStream.destroy(reason);
            }
            _error(reason) {
              this._storedError = reason;
              this._readCapability.resolve();
            }
            _setReadableStream(readableStream) {
              this._readableStream = readableStream;
              readableStream.on("readable", () => {
                this._readCapability.resolve();
              });
              readableStream.on("end", () => {
                readableStream.destroy();
                this._done = true;
                this._readCapability.resolve();
              });
              readableStream.on("error", (reason) => {
                this._error(reason);
              });
              if (this._storedError) {
                this._readableStream.destroy(this._storedError);
              }
            }
          }
          function createRequestOptions(parsedUrl, headers) {
            return {
              protocol: parsedUrl.protocol,
              auth: parsedUrl.auth,
              host: parsedUrl.hostname,
              port: parsedUrl.port,
              path: parsedUrl.path,
              method: "GET",
              headers
            };
          }
          class PDFNodeStreamFullReader extends BaseFullReader {
            constructor(stream) {
              super(stream);
              const handleResponse = (response) => {
                if (response.statusCode === 404) {
                  const error = new _util2.MissingPDFException(`Missing PDF "${this._url}".`);
                  this._storedError = error;
                  this._headersCapability.reject(error);
                  return;
                }
                this._headersCapability.resolve();
                this._setReadableStream(response);
                const getResponseHeader = (name) => {
                  return this._readableStream.headers[name.toLowerCase()];
                };
                const {
                  allowRangeRequests,
                  suggestedLength
                } = (0, _network_utils.validateRangeRequestCapabilities)({
                  getResponseHeader,
                  isHttp: stream.isHttp,
                  rangeChunkSize: this._rangeChunkSize,
                  disableRange: this._disableRange
                });
                this._isRangeSupported = allowRangeRequests;
                this._contentLength = suggestedLength || this._contentLength;
                this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);
              };
              this._request = null;
              if (this._url.protocol === "http:") {
                this._request = http.request(createRequestOptions(this._url, stream.httpHeaders), handleResponse);
              } else {
                this._request = https.request(createRequestOptions(this._url, stream.httpHeaders), handleResponse);
              }
              this._request.on("error", (reason) => {
                this._storedError = reason;
                this._headersCapability.reject(reason);
              });
              this._request.end();
            }
          }
          class PDFNodeStreamRangeReader extends BaseRangeReader {
            constructor(stream, start, end) {
              super(stream);
              this._httpHeaders = {};
              for (const property in stream.httpHeaders) {
                const value = stream.httpHeaders[property];
                if (typeof value === "undefined") {
                  continue;
                }
                this._httpHeaders[property] = value;
              }
              this._httpHeaders.Range = `bytes=${start}-${end - 1}`;
              const handleResponse = (response) => {
                if (response.statusCode === 404) {
                  const error = new _util2.MissingPDFException(`Missing PDF "${this._url}".`);
                  this._storedError = error;
                  return;
                }
                this._setReadableStream(response);
              };
              this._request = null;
              if (this._url.protocol === "http:") {
                this._request = http.request(createRequestOptions(this._url, this._httpHeaders), handleResponse);
              } else {
                this._request = https.request(createRequestOptions(this._url, this._httpHeaders), handleResponse);
              }
              this._request.on("error", (reason) => {
                this._storedError = reason;
              });
              this._request.end();
            }
          }
          class PDFNodeStreamFsFullReader extends BaseFullReader {
            constructor(stream) {
              super(stream);
              let path = decodeURIComponent(this._url.path);
              if (fileUriRegex.test(this._url.href)) {
                path = path.replace(/^\//, "");
              }
              fs.lstat(path, (error, stat) => {
                if (error) {
                  if (error.code === "ENOENT") {
                    error = new _util2.MissingPDFException(`Missing PDF "${path}".`);
                  }
                  this._storedError = error;
                  this._headersCapability.reject(error);
                  return;
                }
                this._contentLength = stat.size;
                this._setReadableStream(fs.createReadStream(path));
                this._headersCapability.resolve();
              });
            }
          }
          class PDFNodeStreamFsRangeReader extends BaseRangeReader {
            constructor(stream, start, end) {
              super(stream);
              let path = decodeURIComponent(this._url.path);
              if (fileUriRegex.test(this._url.href)) {
                path = path.replace(/^\//, "");
              }
              this._setReadableStream(fs.createReadStream(path, {
                start,
                end: end - 1
              }));
            }
          }
        },
        (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.createResponseStatusError = createResponseStatusError;
          exports2.extractFilenameFromHeader = extractFilenameFromHeader;
          exports2.validateRangeRequestCapabilities = validateRangeRequestCapabilities;
          exports2.validateResponseStatus = validateResponseStatus;
          var _util2 = __w_pdfjs_require__2(1);
          var _content_disposition = __w_pdfjs_require__2(27);
          var _display_utils2 = __w_pdfjs_require__2(5);
          function validateRangeRequestCapabilities({
            getResponseHeader,
            isHttp,
            rangeChunkSize,
            disableRange
          }) {
            const returnValues = {
              allowRangeRequests: false,
              suggestedLength: void 0
            };
            const length = parseInt(getResponseHeader("Content-Length"), 10);
            if (!Number.isInteger(length)) {
              return returnValues;
            }
            returnValues.suggestedLength = length;
            if (length <= 2 * rangeChunkSize) {
              return returnValues;
            }
            if (disableRange || !isHttp) {
              return returnValues;
            }
            if (getResponseHeader("Accept-Ranges") !== "bytes") {
              return returnValues;
            }
            const contentEncoding = getResponseHeader("Content-Encoding") || "identity";
            if (contentEncoding !== "identity") {
              return returnValues;
            }
            returnValues.allowRangeRequests = true;
            return returnValues;
          }
          function extractFilenameFromHeader(getResponseHeader) {
            const contentDisposition = getResponseHeader("Content-Disposition");
            if (contentDisposition) {
              let filename = (0, _content_disposition.getFilenameFromContentDispositionHeader)(contentDisposition);
              if (filename.includes("%")) {
                try {
                  filename = decodeURIComponent(filename);
                } catch (ex) {
                }
              }
              if ((0, _display_utils2.isPdfFile)(filename)) {
                return filename;
              }
            }
            return null;
          }
          function createResponseStatusError(status, url) {
            if (status === 404 || status === 0 && url.startsWith("file:")) {
              return new _util2.MissingPDFException('Missing PDF "' + url + '".');
            }
            return new _util2.UnexpectedResponseException(`Unexpected server response (${status}) while retrieving PDF "${url}".`, status);
          }
          function validateResponseStatus(status) {
            return status === 200 || status === 206;
          }
        },
        (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.getFilenameFromContentDispositionHeader = getFilenameFromContentDispositionHeader;
          var _util2 = __w_pdfjs_require__2(1);
          function getFilenameFromContentDispositionHeader(contentDisposition) {
            let needsEncodingFixup = true;
            let tmp = toParamRegExp("filename\\*", "i").exec(contentDisposition);
            if (tmp) {
              tmp = tmp[1];
              let filename = rfc2616unquote(tmp);
              filename = unescape(filename);
              filename = rfc5987decode(filename);
              filename = rfc2047decode(filename);
              return fixupEncoding(filename);
            }
            tmp = rfc2231getparam(contentDisposition);
            if (tmp) {
              const filename = rfc2047decode(tmp);
              return fixupEncoding(filename);
            }
            tmp = toParamRegExp("filename", "i").exec(contentDisposition);
            if (tmp) {
              tmp = tmp[1];
              let filename = rfc2616unquote(tmp);
              filename = rfc2047decode(filename);
              return fixupEncoding(filename);
            }
            function toParamRegExp(attributePattern, flags) {
              return new RegExp("(?:^|;)\\s*" + attributePattern + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', flags);
            }
            function textdecode(encoding, value) {
              if (encoding) {
                if (!/^[\x00-\xFF]+$/.test(value)) {
                  return value;
                }
                try {
                  const decoder = new TextDecoder(encoding, {
                    fatal: true
                  });
                  const buffer = (0, _util2.stringToBytes)(value);
                  value = decoder.decode(buffer);
                  needsEncodingFixup = false;
                } catch (e) {
                }
              }
              return value;
            }
            function fixupEncoding(value) {
              if (needsEncodingFixup && /[\x80-\xff]/.test(value)) {
                value = textdecode("utf-8", value);
                if (needsEncodingFixup) {
                  value = textdecode("iso-8859-1", value);
                }
              }
              return value;
            }
            function rfc2231getparam(contentDispositionStr) {
              const matches2 = [];
              let match;
              const iter = toParamRegExp("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
              while ((match = iter.exec(contentDispositionStr)) !== null) {
                let [, n, quot, part] = match;
                n = parseInt(n, 10);
                if (n in matches2) {
                  if (n === 0) {
                    break;
                  }
                  continue;
                }
                matches2[n] = [quot, part];
              }
              const parts = [];
              for (let n = 0; n < matches2.length; ++n) {
                if (!(n in matches2)) {
                  break;
                }
                let [quot, part] = matches2[n];
                part = rfc2616unquote(part);
                if (quot) {
                  part = unescape(part);
                  if (n === 0) {
                    part = rfc5987decode(part);
                  }
                }
                parts.push(part);
              }
              return parts.join("");
            }
            function rfc2616unquote(value) {
              if (value.startsWith('"')) {
                const parts = value.slice(1).split('\\"');
                for (let i = 0; i < parts.length; ++i) {
                  const quotindex = parts[i].indexOf('"');
                  if (quotindex !== -1) {
                    parts[i] = parts[i].slice(0, quotindex);
                    parts.length = i + 1;
                  }
                  parts[i] = parts[i].replace(/\\(.)/g, "$1");
                }
                value = parts.join('"');
              }
              return value;
            }
            function rfc5987decode(extvalue) {
              const encodingend = extvalue.indexOf("'");
              if (encodingend === -1) {
                return extvalue;
              }
              const encoding = extvalue.slice(0, encodingend);
              const langvalue = extvalue.slice(encodingend + 1);
              const value = langvalue.replace(/^[^']*'/, "");
              return textdecode(encoding, value);
            }
            function rfc2047decode(value) {
              if (!value.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(value)) {
                return value;
              }
              return value.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(matches2, charset, encoding, text2) {
                if (encoding === "q" || encoding === "Q") {
                  text2 = text2.replace(/_/g, " ");
                  text2 = text2.replace(/=([0-9a-fA-F]{2})/g, function(match, hex) {
                    return String.fromCharCode(parseInt(hex, 16));
                  });
                  return textdecode(charset, text2);
                }
                try {
                  text2 = atob(text2);
                } catch (e) {
                }
                return textdecode(charset, text2);
              });
            }
            return "";
          }
        },
        (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.PDFNetworkStream = void 0;
          var _util2 = __w_pdfjs_require__2(1);
          var _network_utils = __w_pdfjs_require__2(26);
          const OK_RESPONSE = 200;
          const PARTIAL_CONTENT_RESPONSE = 206;
          function getArrayBuffer(xhr) {
            const data = xhr.response;
            if (typeof data !== "string") {
              return data;
            }
            const array = (0, _util2.stringToBytes)(data);
            return array.buffer;
          }
          class NetworkManager {
            constructor(url, args = {}) {
              this.url = url;
              this.isHttp = /^https?:/i.test(url);
              this.httpHeaders = this.isHttp && args.httpHeaders || /* @__PURE__ */ Object.create(null);
              this.withCredentials = args.withCredentials || false;
              this.getXhr = args.getXhr || function NetworkManager_getXhr() {
                return new XMLHttpRequest();
              };
              this.currXhrId = 0;
              this.pendingRequests = /* @__PURE__ */ Object.create(null);
            }
            requestRange(begin, end, listeners) {
              const args = {
                begin,
                end
              };
              for (const prop in listeners) {
                args[prop] = listeners[prop];
              }
              return this.request(args);
            }
            requestFull(listeners) {
              return this.request(listeners);
            }
            request(args) {
              const xhr = this.getXhr();
              const xhrId = this.currXhrId++;
              const pendingRequest = this.pendingRequests[xhrId] = {
                xhr
              };
              xhr.open("GET", this.url);
              xhr.withCredentials = this.withCredentials;
              for (const property in this.httpHeaders) {
                const value = this.httpHeaders[property];
                if (typeof value === "undefined") {
                  continue;
                }
                xhr.setRequestHeader(property, value);
              }
              if (this.isHttp && "begin" in args && "end" in args) {
                xhr.setRequestHeader("Range", `bytes=${args.begin}-${args.end - 1}`);
                pendingRequest.expectedStatus = PARTIAL_CONTENT_RESPONSE;
              } else {
                pendingRequest.expectedStatus = OK_RESPONSE;
              }
              xhr.responseType = "arraybuffer";
              if (args.onError) {
                xhr.onerror = function(evt) {
                  args.onError(xhr.status);
                };
              }
              xhr.onreadystatechange = this.onStateChange.bind(this, xhrId);
              xhr.onprogress = this.onProgress.bind(this, xhrId);
              pendingRequest.onHeadersReceived = args.onHeadersReceived;
              pendingRequest.onDone = args.onDone;
              pendingRequest.onError = args.onError;
              pendingRequest.onProgress = args.onProgress;
              xhr.send(null);
              return xhrId;
            }
            onProgress(xhrId, evt) {
              var _a;
              const pendingRequest = this.pendingRequests[xhrId];
              if (!pendingRequest) {
                return;
              }
              (_a = pendingRequest.onProgress) == null ? void 0 : _a.call(pendingRequest, evt);
            }
            onStateChange(xhrId, evt) {
              var _a, _b, _c;
              const pendingRequest = this.pendingRequests[xhrId];
              if (!pendingRequest) {
                return;
              }
              const xhr = pendingRequest.xhr;
              if (xhr.readyState >= 2 && pendingRequest.onHeadersReceived) {
                pendingRequest.onHeadersReceived();
                delete pendingRequest.onHeadersReceived;
              }
              if (xhr.readyState !== 4) {
                return;
              }
              if (!(xhrId in this.pendingRequests)) {
                return;
              }
              delete this.pendingRequests[xhrId];
              if (xhr.status === 0 && this.isHttp) {
                (_a = pendingRequest.onError) == null ? void 0 : _a.call(pendingRequest, xhr.status);
                return;
              }
              const xhrStatus = xhr.status || OK_RESPONSE;
              const ok_response_on_range_request = xhrStatus === OK_RESPONSE && pendingRequest.expectedStatus === PARTIAL_CONTENT_RESPONSE;
              if (!ok_response_on_range_request && xhrStatus !== pendingRequest.expectedStatus) {
                (_b = pendingRequest.onError) == null ? void 0 : _b.call(pendingRequest, xhr.status);
                return;
              }
              const chunk = getArrayBuffer(xhr);
              if (xhrStatus === PARTIAL_CONTENT_RESPONSE) {
                const rangeHeader = xhr.getResponseHeader("Content-Range");
                const matches2 = /bytes (\d+)-(\d+)\/(\d+)/.exec(rangeHeader);
                pendingRequest.onDone({
                  begin: parseInt(matches2[1], 10),
                  chunk
                });
              } else if (chunk) {
                pendingRequest.onDone({
                  begin: 0,
                  chunk
                });
              } else {
                (_c = pendingRequest.onError) == null ? void 0 : _c.call(pendingRequest, xhr.status);
              }
            }
            getRequestXhr(xhrId) {
              return this.pendingRequests[xhrId].xhr;
            }
            isPendingRequest(xhrId) {
              return xhrId in this.pendingRequests;
            }
            abortRequest(xhrId) {
              const xhr = this.pendingRequests[xhrId].xhr;
              delete this.pendingRequests[xhrId];
              xhr.abort();
            }
          }
          class PDFNetworkStream {
            constructor(source) {
              this._source = source;
              this._manager = new NetworkManager(source.url, {
                httpHeaders: source.httpHeaders,
                withCredentials: source.withCredentials
              });
              this._rangeChunkSize = source.rangeChunkSize;
              this._fullRequestReader = null;
              this._rangeRequestReaders = [];
            }
            _onRangeRequestReaderClosed(reader) {
              const i = this._rangeRequestReaders.indexOf(reader);
              if (i >= 0) {
                this._rangeRequestReaders.splice(i, 1);
              }
            }
            getFullReader() {
              (0, _util2.assert)(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once.");
              this._fullRequestReader = new PDFNetworkStreamFullRequestReader(this._manager, this._source);
              return this._fullRequestReader;
            }
            getRangeReader(begin, end) {
              const reader = new PDFNetworkStreamRangeRequestReader(this._manager, begin, end);
              reader.onClosed = this._onRangeRequestReaderClosed.bind(this);
              this._rangeRequestReaders.push(reader);
              return reader;
            }
            cancelAllRequests(reason) {
              var _a;
              (_a = this._fullRequestReader) == null ? void 0 : _a.cancel(reason);
              for (const reader of this._rangeRequestReaders.slice(0)) {
                reader.cancel(reason);
              }
            }
          }
          exports2.PDFNetworkStream = PDFNetworkStream;
          class PDFNetworkStreamFullRequestReader {
            constructor(manager, source) {
              this._manager = manager;
              const args = {
                onHeadersReceived: this._onHeadersReceived.bind(this),
                onDone: this._onDone.bind(this),
                onError: this._onError.bind(this),
                onProgress: this._onProgress.bind(this)
              };
              this._url = source.url;
              this._fullRequestId = manager.requestFull(args);
              this._headersReceivedCapability = (0, _util2.createPromiseCapability)();
              this._disableRange = source.disableRange || false;
              this._contentLength = source.length;
              this._rangeChunkSize = source.rangeChunkSize;
              if (!this._rangeChunkSize && !this._disableRange) {
                this._disableRange = true;
              }
              this._isStreamingSupported = false;
              this._isRangeSupported = false;
              this._cachedChunks = [];
              this._requests = [];
              this._done = false;
              this._storedError = void 0;
              this._filename = null;
              this.onProgress = null;
            }
            _onHeadersReceived() {
              const fullRequestXhrId = this._fullRequestId;
              const fullRequestXhr = this._manager.getRequestXhr(fullRequestXhrId);
              const getResponseHeader = (name) => {
                return fullRequestXhr.getResponseHeader(name);
              };
              const {
                allowRangeRequests,
                suggestedLength
              } = (0, _network_utils.validateRangeRequestCapabilities)({
                getResponseHeader,
                isHttp: this._manager.isHttp,
                rangeChunkSize: this._rangeChunkSize,
                disableRange: this._disableRange
              });
              if (allowRangeRequests) {
                this._isRangeSupported = true;
              }
              this._contentLength = suggestedLength || this._contentLength;
              this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);
              if (this._isRangeSupported) {
                this._manager.abortRequest(fullRequestXhrId);
              }
              this._headersReceivedCapability.resolve();
            }
            _onDone(data) {
              if (data) {
                if (this._requests.length > 0) {
                  const requestCapability = this._requests.shift();
                  requestCapability.resolve({
                    value: data.chunk,
                    done: false
                  });
                } else {
                  this._cachedChunks.push(data.chunk);
                }
              }
              this._done = true;
              if (this._cachedChunks.length > 0) {
                return;
              }
              for (const requestCapability of this._requests) {
                requestCapability.resolve({
                  value: void 0,
                  done: true
                });
              }
              this._requests.length = 0;
            }
            _onError(status) {
              this._storedError = (0, _network_utils.createResponseStatusError)(status, this._url);
              this._headersReceivedCapability.reject(this._storedError);
              for (const requestCapability of this._requests) {
                requestCapability.reject(this._storedError);
              }
              this._requests.length = 0;
              this._cachedChunks.length = 0;
            }
            _onProgress(evt) {
              var _a;
              (_a = this.onProgress) == null ? void 0 : _a.call(this, {
                loaded: evt.loaded,
                total: evt.lengthComputable ? evt.total : this._contentLength
              });
            }
            get filename() {
              return this._filename;
            }
            get isRangeSupported() {
              return this._isRangeSupported;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            get contentLength() {
              return this._contentLength;
            }
            get headersReady() {
              return this._headersReceivedCapability.promise;
            }
            async read() {
              if (this._storedError) {
                throw this._storedError;
              }
              if (this._cachedChunks.length > 0) {
                const chunk = this._cachedChunks.shift();
                return {
                  value: chunk,
                  done: false
                };
              }
              if (this._done) {
                return {
                  value: void 0,
                  done: true
                };
              }
              const requestCapability = (0, _util2.createPromiseCapability)();
              this._requests.push(requestCapability);
              return requestCapability.promise;
            }
            cancel(reason) {
              this._done = true;
              this._headersReceivedCapability.reject(reason);
              for (const requestCapability of this._requests) {
                requestCapability.resolve({
                  value: void 0,
                  done: true
                });
              }
              this._requests.length = 0;
              if (this._manager.isPendingRequest(this._fullRequestId)) {
                this._manager.abortRequest(this._fullRequestId);
              }
              this._fullRequestReader = null;
            }
          }
          class PDFNetworkStreamRangeRequestReader {
            constructor(manager, begin, end) {
              this._manager = manager;
              const args = {
                onDone: this._onDone.bind(this),
                onError: this._onError.bind(this),
                onProgress: this._onProgress.bind(this)
              };
              this._url = manager.url;
              this._requestId = manager.requestRange(begin, end, args);
              this._requests = [];
              this._queuedChunk = null;
              this._done = false;
              this._storedError = void 0;
              this.onProgress = null;
              this.onClosed = null;
            }
            _close() {
              var _a;
              (_a = this.onClosed) == null ? void 0 : _a.call(this, this);
            }
            _onDone(data) {
              const chunk = data.chunk;
              if (this._requests.length > 0) {
                const requestCapability = this._requests.shift();
                requestCapability.resolve({
                  value: chunk,
                  done: false
                });
              } else {
                this._queuedChunk = chunk;
              }
              this._done = true;
              for (const requestCapability of this._requests) {
                requestCapability.resolve({
                  value: void 0,
                  done: true
                });
              }
              this._requests.length = 0;
              this._close();
            }
            _onError(status) {
              this._storedError = (0, _network_utils.createResponseStatusError)(status, this._url);
              for (const requestCapability of this._requests) {
                requestCapability.reject(this._storedError);
              }
              this._requests.length = 0;
              this._queuedChunk = null;
            }
            _onProgress(evt) {
              var _a;
              if (!this.isStreamingSupported) {
                (_a = this.onProgress) == null ? void 0 : _a.call(this, {
                  loaded: evt.loaded
                });
              }
            }
            get isStreamingSupported() {
              return false;
            }
            async read() {
              if (this._storedError) {
                throw this._storedError;
              }
              if (this._queuedChunk !== null) {
                const chunk = this._queuedChunk;
                this._queuedChunk = null;
                return {
                  value: chunk,
                  done: false
                };
              }
              if (this._done) {
                return {
                  value: void 0,
                  done: true
                };
              }
              const requestCapability = (0, _util2.createPromiseCapability)();
              this._requests.push(requestCapability);
              return requestCapability.promise;
            }
            cancel(reason) {
              this._done = true;
              for (const requestCapability of this._requests) {
                requestCapability.resolve({
                  value: void 0,
                  done: true
                });
              }
              this._requests.length = 0;
              if (this._manager.isPendingRequest(this._requestId)) {
                this._manager.abortRequest(this._requestId);
              }
              this._close();
            }
          }
        },
        (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          exports2.PDFFetchStream = void 0;
          var _util2 = __w_pdfjs_require__2(1);
          var _network_utils = __w_pdfjs_require__2(26);
          function createFetchOptions(headers, withCredentials, abortController) {
            return {
              method: "GET",
              headers,
              signal: abortController == null ? void 0 : abortController.signal,
              mode: "cors",
              credentials: withCredentials ? "include" : "same-origin",
              redirect: "follow"
            };
          }
          function createHeaders(httpHeaders) {
            const headers = new Headers();
            for (const property in httpHeaders) {
              const value = httpHeaders[property];
              if (typeof value === "undefined") {
                continue;
              }
              headers.append(property, value);
            }
            return headers;
          }
          class PDFFetchStream {
            constructor(source) {
              this.source = source;
              this.isHttp = /^https?:/i.test(source.url);
              this.httpHeaders = this.isHttp && source.httpHeaders || {};
              this._fullRequestReader = null;
              this._rangeRequestReaders = [];
            }
            get _progressiveDataLength() {
              var _a, _b;
              return (_b = (_a = this._fullRequestReader) == null ? void 0 : _a._loaded) != null ? _b : 0;
            }
            getFullReader() {
              (0, _util2.assert)(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once.");
              this._fullRequestReader = new PDFFetchStreamReader(this);
              return this._fullRequestReader;
            }
            getRangeReader(begin, end) {
              if (end <= this._progressiveDataLength) {
                return null;
              }
              const reader = new PDFFetchStreamRangeReader(this, begin, end);
              this._rangeRequestReaders.push(reader);
              return reader;
            }
            cancelAllRequests(reason) {
              if (this._fullRequestReader) {
                this._fullRequestReader.cancel(reason);
              }
              for (const reader of this._rangeRequestReaders.slice(0)) {
                reader.cancel(reason);
              }
            }
          }
          exports2.PDFFetchStream = PDFFetchStream;
          class PDFFetchStreamReader {
            constructor(stream) {
              this._stream = stream;
              this._reader = null;
              this._loaded = 0;
              this._filename = null;
              const source = stream.source;
              this._withCredentials = source.withCredentials || false;
              this._contentLength = source.length;
              this._headersCapability = (0, _util2.createPromiseCapability)();
              this._disableRange = source.disableRange || false;
              this._rangeChunkSize = source.rangeChunkSize;
              if (!this._rangeChunkSize && !this._disableRange) {
                this._disableRange = true;
              }
              if (typeof AbortController !== "undefined") {
                this._abortController = new AbortController();
              }
              this._isStreamingSupported = !source.disableStream;
              this._isRangeSupported = !source.disableRange;
              this._headers = createHeaders(this._stream.httpHeaders);
              const url = source.url;
              fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then((response) => {
                if (!(0, _network_utils.validateResponseStatus)(response.status)) {
                  throw (0, _network_utils.createResponseStatusError)(response.status, url);
                }
                this._reader = response.body.getReader();
                this._headersCapability.resolve();
                const getResponseHeader = (name) => {
                  return response.headers.get(name);
                };
                const {
                  allowRangeRequests,
                  suggestedLength
                } = (0, _network_utils.validateRangeRequestCapabilities)({
                  getResponseHeader,
                  isHttp: this._stream.isHttp,
                  rangeChunkSize: this._rangeChunkSize,
                  disableRange: this._disableRange
                });
                this._isRangeSupported = allowRangeRequests;
                this._contentLength = suggestedLength || this._contentLength;
                this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);
                if (!this._isStreamingSupported && this._isRangeSupported) {
                  this.cancel(new _util2.AbortException("Streaming is disabled."));
                }
              }).catch(this._headersCapability.reject);
              this.onProgress = null;
            }
            get headersReady() {
              return this._headersCapability.promise;
            }
            get filename() {
              return this._filename;
            }
            get contentLength() {
              return this._contentLength;
            }
            get isRangeSupported() {
              return this._isRangeSupported;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            async read() {
              await this._headersCapability.promise;
              const {
                value,
                done
              } = await this._reader.read();
              if (done) {
                return {
                  value,
                  done
                };
              }
              this._loaded += value.byteLength;
              if (this.onProgress) {
                this.onProgress({
                  loaded: this._loaded,
                  total: this._contentLength
                });
              }
              const buffer = new Uint8Array(value).buffer;
              return {
                value: buffer,
                done: false
              };
            }
            cancel(reason) {
              if (this._reader) {
                this._reader.cancel(reason);
              }
              if (this._abortController) {
                this._abortController.abort();
              }
            }
          }
          class PDFFetchStreamRangeReader {
            constructor(stream, begin, end) {
              this._stream = stream;
              this._reader = null;
              this._loaded = 0;
              const source = stream.source;
              this._withCredentials = source.withCredentials || false;
              this._readCapability = (0, _util2.createPromiseCapability)();
              this._isStreamingSupported = !source.disableStream;
              if (typeof AbortController !== "undefined") {
                this._abortController = new AbortController();
              }
              this._headers = createHeaders(this._stream.httpHeaders);
              this._headers.append("Range", `bytes=${begin}-${end - 1}`);
              const url = source.url;
              fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then((response) => {
                if (!(0, _network_utils.validateResponseStatus)(response.status)) {
                  throw (0, _network_utils.createResponseStatusError)(response.status, url);
                }
                this._readCapability.resolve();
                this._reader = response.body.getReader();
              }).catch(this._readCapability.reject);
              this.onProgress = null;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            async read() {
              await this._readCapability.promise;
              const {
                value,
                done
              } = await this._reader.read();
              if (done) {
                return {
                  value,
                  done
                };
              }
              this._loaded += value.byteLength;
              if (this.onProgress) {
                this.onProgress({
                  loaded: this._loaded
                });
              }
              const buffer = new Uint8Array(value).buffer;
              return {
                value: buffer,
                done: false
              };
            }
            cancel(reason) {
              if (this._reader) {
                this._reader.cancel(reason);
              }
              if (this._abortController) {
                this._abortController.abort();
              }
            }
          }
        }
      ];
      var __webpack_module_cache__ = {};
      function __w_pdfjs_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) {
          return cachedModule.exports;
        }
        var module2 = __webpack_module_cache__[moduleId] = {
          exports: {}
        };
        __webpack_modules__[moduleId](module2, module2.exports, __w_pdfjs_require__);
        return module2.exports;
      }
      var __webpack_exports__ = {};
      (() => {
        var exports2 = __webpack_exports__;
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        Object.defineProperty(exports2, "AnnotationLayer", {
          enumerable: true,
          get: function() {
            return _annotation_layer.AnnotationLayer;
          }
        });
        Object.defineProperty(exports2, "AnnotationMode", {
          enumerable: true,
          get: function() {
            return _util2.AnnotationMode;
          }
        });
        Object.defineProperty(exports2, "CMapCompressionType", {
          enumerable: true,
          get: function() {
            return _util2.CMapCompressionType;
          }
        });
        Object.defineProperty(exports2, "GlobalWorkerOptions", {
          enumerable: true,
          get: function() {
            return _worker_options2.GlobalWorkerOptions;
          }
        });
        Object.defineProperty(exports2, "InvalidPDFException", {
          enumerable: true,
          get: function() {
            return _util2.InvalidPDFException;
          }
        });
        Object.defineProperty(exports2, "LoopbackPort", {
          enumerable: true,
          get: function() {
            return _api.LoopbackPort;
          }
        });
        Object.defineProperty(exports2, "MissingPDFException", {
          enumerable: true,
          get: function() {
            return _util2.MissingPDFException;
          }
        });
        Object.defineProperty(exports2, "OPS", {
          enumerable: true,
          get: function() {
            return _util2.OPS;
          }
        });
        Object.defineProperty(exports2, "PDFDataRangeTransport", {
          enumerable: true,
          get: function() {
            return _api.PDFDataRangeTransport;
          }
        });
        Object.defineProperty(exports2, "PDFDateString", {
          enumerable: true,
          get: function() {
            return _display_utils2.PDFDateString;
          }
        });
        Object.defineProperty(exports2, "PDFWorker", {
          enumerable: true,
          get: function() {
            return _api.PDFWorker;
          }
        });
        Object.defineProperty(exports2, "PasswordResponses", {
          enumerable: true,
          get: function() {
            return _util2.PasswordResponses;
          }
        });
        Object.defineProperty(exports2, "PermissionFlag", {
          enumerable: true,
          get: function() {
            return _util2.PermissionFlag;
          }
        });
        Object.defineProperty(exports2, "PixelsPerInch", {
          enumerable: true,
          get: function() {
            return _display_utils2.PixelsPerInch;
          }
        });
        Object.defineProperty(exports2, "RenderingCancelledException", {
          enumerable: true,
          get: function() {
            return _display_utils2.RenderingCancelledException;
          }
        });
        Object.defineProperty(exports2, "SVGGraphics", {
          enumerable: true,
          get: function() {
            return _svg.SVGGraphics;
          }
        });
        Object.defineProperty(exports2, "UNSUPPORTED_FEATURES", {
          enumerable: true,
          get: function() {
            return _util2.UNSUPPORTED_FEATURES;
          }
        });
        Object.defineProperty(exports2, "UnexpectedResponseException", {
          enumerable: true,
          get: function() {
            return _util2.UnexpectedResponseException;
          }
        });
        Object.defineProperty(exports2, "Util", {
          enumerable: true,
          get: function() {
            return _util2.Util;
          }
        });
        Object.defineProperty(exports2, "VerbosityLevel", {
          enumerable: true,
          get: function() {
            return _util2.VerbosityLevel;
          }
        });
        Object.defineProperty(exports2, "XfaLayer", {
          enumerable: true,
          get: function() {
            return _xfa_layer.XfaLayer;
          }
        });
        Object.defineProperty(exports2, "build", {
          enumerable: true,
          get: function() {
            return _api.build;
          }
        });
        Object.defineProperty(exports2, "createPromiseCapability", {
          enumerable: true,
          get: function() {
            return _util2.createPromiseCapability;
          }
        });
        Object.defineProperty(exports2, "createValidAbsoluteUrl", {
          enumerable: true,
          get: function() {
            return _util2.createValidAbsoluteUrl;
          }
        });
        Object.defineProperty(exports2, "getDocument", {
          enumerable: true,
          get: function() {
            return _api.getDocument;
          }
        });
        Object.defineProperty(exports2, "getFilenameFromUrl", {
          enumerable: true,
          get: function() {
            return _display_utils2.getFilenameFromUrl;
          }
        });
        Object.defineProperty(exports2, "getPdfFilenameFromUrl", {
          enumerable: true,
          get: function() {
            return _display_utils2.getPdfFilenameFromUrl;
          }
        });
        Object.defineProperty(exports2, "getXfaPageViewport", {
          enumerable: true,
          get: function() {
            return _display_utils2.getXfaPageViewport;
          }
        });
        Object.defineProperty(exports2, "isPdfFile", {
          enumerable: true,
          get: function() {
            return _display_utils2.isPdfFile;
          }
        });
        Object.defineProperty(exports2, "loadScript", {
          enumerable: true,
          get: function() {
            return _display_utils2.loadScript;
          }
        });
        Object.defineProperty(exports2, "renderTextLayer", {
          enumerable: true,
          get: function() {
            return _text_layer.renderTextLayer;
          }
        });
        Object.defineProperty(exports2, "shadow", {
          enumerable: true,
          get: function() {
            return _util2.shadow;
          }
        });
        Object.defineProperty(exports2, "version", {
          enumerable: true,
          get: function() {
            return _api.version;
          }
        });
        var _util2 = __w_pdfjs_require__(1);
        var _api = __w_pdfjs_require__(4);
        var _display_utils2 = __w_pdfjs_require__(5);
        var _annotation_layer = __w_pdfjs_require__(20);
        var _worker_options2 = __w_pdfjs_require__(13);
        var _is_node2 = __w_pdfjs_require__(3);
        var _text_layer = __w_pdfjs_require__(23);
        var _svg = __w_pdfjs_require__(24);
        var _xfa_layer = __w_pdfjs_require__(22);
        {
          if (_is_node2.isNodeJS) {
            const {
              PDFNodeStream
            } = __w_pdfjs_require__(25);
            (0, _api.setPDFNetworkStreamFactory)((params) => {
              return new PDFNodeStream(params);
            });
          } else {
            const {
              PDFNetworkStream
            } = __w_pdfjs_require__(28);
            const {
              PDFFetchStream
            } = __w_pdfjs_require__(29);
            (0, _api.setPDFNetworkStreamFactory)((params) => {
              if ((0, _display_utils2.isValidFetchUrl)(params.url)) {
                return new PDFFetchStream(params);
              }
              return new PDFNetworkStream(params);
            });
          }
        }
      })();
      return __webpack_exports__;
    })();
  });
})(pdf);
var workerSrc = "/svelte-cartoon-star/_app/assets/pdf.worker.min-4ac4c8ea.js";
var FileSaver_min = { exports: {} };
(function(module2, exports2) {
  (function(a, b) {
    b();
  })(commonjsGlobal, function() {
    function b(a2, b2) {
      return typeof b2 == "undefined" ? b2 = { autoBom: false } : typeof b2 != "object" && (console.warn("Deprecated: Expected third argument to be a object"), b2 = { autoBom: !b2 }), b2.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a2.type) ? new Blob(["\uFEFF", a2], { type: a2.type }) : a2;
    }
    function c(a2, b2, c2) {
      var d2 = new XMLHttpRequest();
      d2.open("GET", a2), d2.responseType = "blob", d2.onload = function() {
        g(d2.response, b2, c2);
      }, d2.onerror = function() {
        console.error("could not download file");
      }, d2.send();
    }
    function d(a2) {
      var b2 = new XMLHttpRequest();
      b2.open("HEAD", a2, false);
      try {
        b2.send();
      } catch (a3) {
      }
      return 200 <= b2.status && 299 >= b2.status;
    }
    function e(a2) {
      try {
        a2.dispatchEvent(new MouseEvent("click"));
      } catch (c2) {
        var b2 = document.createEvent("MouseEvents");
        b2.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), a2.dispatchEvent(b2);
      }
    }
    var f = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof commonjsGlobal == "object" && commonjsGlobal.global === commonjsGlobal ? commonjsGlobal : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || (typeof window != "object" || window !== f ? function() {
    } : "download" in HTMLAnchorElement.prototype && !a ? function(b2, g2, h) {
      var i = f.URL || f.webkitURL, j = document.createElement("a");
      g2 = g2 || b2.name || "download", j.download = g2, j.rel = "noopener", typeof b2 == "string" ? (j.href = b2, j.origin === location.origin ? e(j) : d(j.href) ? c(b2, g2, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b2), setTimeout(function() {
        i.revokeObjectURL(j.href);
      }, 4e4), setTimeout(function() {
        e(j);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(f2, g2, h) {
      if (g2 = g2 || f2.name || "download", typeof f2 != "string")
        navigator.msSaveOrOpenBlob(b(f2, h), g2);
      else if (d(f2))
        c(f2, g2, h);
      else {
        var i = document.createElement("a");
        i.href = f2, i.target = "_blank", setTimeout(function() {
          e(i);
        });
      }
    } : function(b2, d2, e2, g2) {
      if (g2 = g2 || open("", "_blank"), g2 && (g2.document.title = g2.document.body.innerText = "downloading..."), typeof b2 == "string")
        return c(b2, d2, e2);
      var h = b2.type === "application/octet-stream", i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((j || h && i || a) && typeof FileReader != "undefined") {
        var k = new FileReader();
        k.onloadend = function() {
          var a2 = k.result;
          a2 = j ? a2 : a2.replace(/^data:[^;]*;/, "data:attachment/file;"), g2 ? g2.location.href = a2 : location = a2, g2 = null;
        }, k.readAsDataURL(b2);
      } else {
        var l = f.URL || f.webkitURL, m = l.createObjectURL(b2);
        g2 ? g2.location = m : location.href = m, g2 = null, setTimeout(function() {
          l.revokeObjectURL(m);
        }, 4e4);
      }
    });
    f.saveAs = g.saveAs = g, module2.exports = g;
  });
})(FileSaver_min);
var FileSaver = FileSaver_min.exports;
const onPrint = (url) => {
  let iframe;
  if (!iframe) {
    iframe = document.createElement("iframe");
    document.body.appendChild(iframe);
    iframe.style.display = "none";
    iframe.onload = function() {
      setTimeout(function() {
        iframe.focus();
        iframe.contentWindow.print();
      }, 1);
    };
  }
  iframe.src = url;
};
const calcRT = (paraBody) => {
  const wordsPerMinute = 200;
  let textLength = paraBody.split(" ").length;
  if (textLength > 0) {
    return Math.ceil(textLength / wordsPerMinute);
  }
};
const getPageText = (pageNum, PDFDocumentInstance) => {
  return new Promise(function(resolve, reject) {
    PDFDocumentInstance.getPage(pageNum).then(function(pdfPage) {
      pdfPage.getTextContent().then(function(textContent) {
        var textItems = textContent.items;
        var finalString = "";
        for (var i = 0; i < textItems.length; i++) {
          var item = textItems[i];
          finalString += item.str + " ";
        }
        resolve(finalString);
      });
    });
  });
};
class ClassBuilder {
  constructor(classes, defaultClasses) {
    this.defaults = typeof classes === "function" ? classes(defaultClasses) : classes;
    this.classes = this.defaults;
  }
  flush() {
    this.classes = this.defaults;
    return this;
  }
  extend(...fns) {
    return this;
  }
  get() {
    return this.classes;
  }
  replace(classes, cond = true) {
    if (cond && classes) {
      this.classes = Object.keys(classes).reduce((acc, from) => acc.replace(new RegExp(from, "g"), classes[from]), this.classes);
    }
    return this;
  }
  remove(classes, cond = true) {
    if (cond && classes) {
      this.classes = classes.split(" ").reduce((acc, cur) => acc.replace(new RegExp(cur, "g"), ""), this.classes);
    }
    return this;
  }
  add(className, cond = true, defaultValue) {
    if (!cond || !className)
      return this;
    switch (typeof className) {
      case "string":
      default:
        this.classes += ` ${className} `;
        return this;
      case "function":
        this.classes += ` ${className(defaultValue || this.classes)} `;
        return this;
    }
  }
}
var Tooltip_svelte_svelte_type_style_lang = "";
const get_activator_slot_changes = (dirty) => ({});
const get_activator_slot_context = (ctx) => ({});
function create_if_block$2(ctx) {
  let div;
  let div_class_value;
  let div_intro;
  let div_outro;
  let current;
  const default_slot_template = ctx[8].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[7], null);
  return {
    c() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", div_class_value = null_to_empty(ctx[1]) + " svelte-10lk5cm");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 128)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[7], !current ? get_all_dirty_from_scope(ctx2[7]) : get_slot_changes(default_slot_template, ctx2[7], dirty, null), null);
        }
      }
      if (!current || dirty & 2 && div_class_value !== (div_class_value = null_to_empty(ctx2[1]) + " svelte-10lk5cm")) {
        attr(div, "class", div_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      add_render_callback(() => {
        if (div_outro)
          div_outro.end(1);
        div_intro = create_in_transition(div, scale, { duration: 150 });
        div_intro.start();
      });
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      if (div_intro)
        div_intro.invalidate();
      div_outro = create_out_transition(div, scale, { duration: 150, delay: 100 });
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
      if (detaching && div_outro)
        div_outro.end();
    }
  };
}
function create_fragment$2(ctx) {
  let div1;
  let div0;
  let t;
  let current;
  let mounted;
  let dispose;
  const activator_slot_template = ctx[8].activator;
  const activator_slot = create_slot(activator_slot_template, ctx, ctx[7], get_activator_slot_context);
  let if_block = ctx[0] && create_if_block$2(ctx);
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      if (activator_slot)
        activator_slot.c();
      t = space();
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      if (activator_slot)
        activator_slot.l(div0_nodes);
      div0_nodes.forEach(detach);
      t = claim_space(div1_nodes);
      if (if_block)
        if_block.l(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div1, "class", "activator svelte-10lk5cm");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      if (activator_slot) {
        activator_slot.m(div0, null);
      }
      append_hydration(div1, t);
      if (if_block)
        if_block.m(div1, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(div0, "mouseenter", debounce(ctx[2], 100)),
          listen(div0, "mouseleave", debounce(ctx[3], 500)),
          listen(div0, "mouseenter", ctx[9]),
          listen(div0, "mouseleave", ctx[10]),
          listen(div0, "focus", ctx[11]),
          listen(div0, "blur", ctx[12])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (activator_slot) {
        if (activator_slot.p && (!current || dirty & 128)) {
          update_slot_base(activator_slot, activator_slot_template, ctx2, ctx2[7], !current ? get_all_dirty_from_scope(ctx2[7]) : get_slot_changes(activator_slot_template, ctx2[7], dirty, get_activator_slot_changes), get_activator_slot_context);
        }
      }
      if (ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$2(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div1, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(activator_slot, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(activator_slot, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if (activator_slot)
        activator_slot.d(detaching);
      if (if_block)
        if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
const classesDefault = "tooltip";
function debounce(func2, wait, immediate) {
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate)
        func2.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow)
      func2.apply(context, args);
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let c;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { class: className = "" } = $$props;
  let { classes = classesDefault } = $$props;
  let { show = false } = $$props;
  let { timeout = null } = $$props;
  const cb = new ClassBuilder(classes, classesDefault);
  function showTooltip() {
    if (show)
      return;
    $$invalidate(0, show = true);
    if (!timeout)
      return;
    $$invalidate(4, timeout = setTimeout(() => {
      $$invalidate(0, show = false);
    }, timeout));
  }
  function hideTooltip() {
    if (!show)
      return;
    $$invalidate(0, show = false);
    clearTimeout(timeout);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  function focus_handler(event) {
    bubble.call(this, $$self, event);
  }
  function blur_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$props2) => {
    if ("class" in $$props2)
      $$invalidate(5, className = $$props2.class);
    if ("classes" in $$props2)
      $$invalidate(6, classes = $$props2.classes);
    if ("show" in $$props2)
      $$invalidate(0, show = $$props2.show);
    if ("timeout" in $$props2)
      $$invalidate(4, timeout = $$props2.timeout);
    if ("$$scope" in $$props2)
      $$invalidate(7, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 96) {
      $$invalidate(1, c = cb.flush().add(classes, true, classesDefault).add(className).get());
    }
  };
  return [
    show,
    c,
    showTooltip,
    hideTooltip,
    timeout,
    className,
    classes,
    $$scope,
    slots,
    mouseenter_handler,
    mouseleave_handler,
    focus_handler,
    blur_handler
  ];
}
class Tooltip extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {
      class: 5,
      classes: 6,
      show: 0,
      timeout: 4
    });
  }
}
var PdfViewer_svelte_svelte_type_style_lang = "";
const { window: window_1 } = globals;
function create_else_block_1(ctx) {
  let div;
  let canvas_1;
  let div_class_value;
  return {
    c() {
      div = element("div");
      canvas_1 = element("canvas");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      canvas_1 = claim_element(div_nodes, "CANVAS", { class: true });
      children(canvas_1).forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(canvas_1, "class", "svelte-19h83wp");
      attr(div, "class", div_class_value = null_to_empty(ctx[5] === true ? "viewer" : "null") + " svelte-19h83wp");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, canvas_1);
      ctx[43](canvas_1);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 32 && div_class_value !== (div_class_value = null_to_empty(ctx2[5] === true ? "viewer" : "null") + " svelte-19h83wp")) {
        attr(div, "class", div_class_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      ctx[43](null);
    }
  };
}
function create_if_block_1$1(ctx) {
  let div3;
  let div1;
  let tooltip0;
  let t0;
  let tooltip1;
  let t1;
  let tooltip2;
  let t2;
  let tooltip3;
  let t3;
  let tooltip4;
  let t4;
  let tooltip5;
  let t5;
  let tooltip6;
  let t6;
  let tooltip7;
  let t7;
  let tooltip8;
  let t8;
  let span1;
  let svg0;
  let path0;
  let t9;
  let span0;
  let t10;
  let t11;
  let t12;
  let span4;
  let svg1;
  let path1;
  let t13;
  let div0;
  let t14;
  let span2;
  let t15;
  let span3;
  let t16;
  let div2;
  let canvas_1;
  let div2_class_value;
  let current;
  tooltip0 = new Tooltip({
    props: {
      $$slots: {
        activator: [create_activator_slot_8],
        default: [create_default_slot_8$1]
      },
      $$scope: { ctx }
    }
  });
  tooltip1 = new Tooltip({
    props: {
      $$slots: {
        activator: [create_activator_slot_7],
        default: [create_default_slot_7$1]
      },
      $$scope: { ctx }
    }
  });
  tooltip2 = new Tooltip({
    props: {
      $$slots: {
        activator: [create_activator_slot_6],
        default: [create_default_slot_6$1]
      },
      $$scope: { ctx }
    }
  });
  tooltip3 = new Tooltip({
    props: {
      $$slots: {
        activator: [create_activator_slot_5],
        default: [create_default_slot_5$1]
      },
      $$scope: { ctx }
    }
  });
  tooltip4 = new Tooltip({
    props: {
      $$slots: {
        activator: [create_activator_slot_4],
        default: [create_default_slot_4$1]
      },
      $$scope: { ctx }
    }
  });
  tooltip5 = new Tooltip({
    props: {
      $$slots: {
        activator: [create_activator_slot_3],
        default: [create_default_slot_3$1]
      },
      $$scope: { ctx }
    }
  });
  tooltip6 = new Tooltip({
    props: {
      $$slots: {
        activator: [create_activator_slot_2],
        default: [create_default_slot_2$1]
      },
      $$scope: { ctx }
    }
  });
  tooltip7 = new Tooltip({
    props: {
      $$slots: {
        activator: [create_activator_slot_1],
        default: [create_default_slot_1$1]
      },
      $$scope: { ctx }
    }
  });
  tooltip8 = new Tooltip({
    props: {
      $$slots: {
        activator: [create_activator_slot],
        default: [create_default_slot$1]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div3 = element("div");
      div1 = element("div");
      create_component(tooltip0.$$.fragment);
      t0 = space();
      create_component(tooltip1.$$.fragment);
      t1 = space();
      create_component(tooltip2.$$.fragment);
      t2 = space();
      create_component(tooltip3.$$.fragment);
      t3 = space();
      create_component(tooltip4.$$.fragment);
      t4 = space();
      create_component(tooltip5.$$.fragment);
      t5 = space();
      create_component(tooltip6.$$.fragment);
      t6 = space();
      create_component(tooltip7.$$.fragment);
      t7 = space();
      create_component(tooltip8.$$.fragment);
      t8 = space();
      span1 = element("span");
      svg0 = svg_element("svg");
      path0 = svg_element("path");
      t9 = space();
      span0 = element("span");
      t10 = text(ctx[9]);
      t11 = text(" min read");
      t12 = space();
      span4 = element("span");
      svg1 = svg_element("svg");
      path1 = svg_element("path");
      t13 = space();
      div0 = element("div");
      t14 = text("Page :\n              ");
      span2 = element("span");
      t15 = text("\n              /\n              ");
      span3 = element("span");
      t16 = space();
      div2 = element("div");
      canvas_1 = element("canvas");
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(tooltip0.$$.fragment, div1_nodes);
      t0 = claim_space(div1_nodes);
      claim_component(tooltip1.$$.fragment, div1_nodes);
      t1 = claim_space(div1_nodes);
      claim_component(tooltip2.$$.fragment, div1_nodes);
      t2 = claim_space(div1_nodes);
      claim_component(tooltip3.$$.fragment, div1_nodes);
      t3 = claim_space(div1_nodes);
      claim_component(tooltip4.$$.fragment, div1_nodes);
      t4 = claim_space(div1_nodes);
      claim_component(tooltip5.$$.fragment, div1_nodes);
      t5 = claim_space(div1_nodes);
      claim_component(tooltip6.$$.fragment, div1_nodes);
      t6 = claim_space(div1_nodes);
      claim_component(tooltip7.$$.fragment, div1_nodes);
      t7 = claim_space(div1_nodes);
      claim_component(tooltip8.$$.fragment, div1_nodes);
      t8 = claim_space(div1_nodes);
      span1 = claim_element(div1_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      svg0 = claim_svg_element(span1_nodes, "svg", { class: true, xmlns: true, viewBox: true });
      var svg0_nodes = children(svg0);
      path0 = claim_svg_element(svg0_nodes, "path", { d: true });
      children(path0).forEach(detach);
      svg0_nodes.forEach(detach);
      t9 = claim_space(span1_nodes);
      span0 = claim_element(span1_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t10 = claim_text(span0_nodes, ctx[9]);
      t11 = claim_text(span0_nodes, " min read");
      span0_nodes.forEach(detach);
      span1_nodes.forEach(detach);
      t12 = claim_space(div1_nodes);
      span4 = claim_element(div1_nodes, "SPAN", { class: true });
      var span4_nodes = children(span4);
      svg1 = claim_svg_element(span4_nodes, "svg", { class: true, xmlns: true, viewBox: true });
      var svg1_nodes = children(svg1);
      path1 = claim_svg_element(svg1_nodes, "path", { d: true });
      children(path1).forEach(detach);
      svg1_nodes.forEach(detach);
      t13 = claim_space(span4_nodes);
      div0 = claim_element(span4_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t14 = claim_text(div0_nodes, "Page :\n              ");
      span2 = claim_element(div0_nodes, "SPAN", {});
      children(span2).forEach(detach);
      t15 = claim_text(div0_nodes, "\n              /\n              ");
      span3 = claim_element(div0_nodes, "SPAN", {});
      children(span3).forEach(detach);
      div0_nodes.forEach(detach);
      span4_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t16 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      canvas_1 = claim_element(div2_nodes, "CANVAS", { width: true, height: true, class: true });
      children(canvas_1).forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path0, "d", "M16.32 7.1A8 8 0 1 1 9 4.06V2h2v2.06c1.46.18 2.8.76 3.9\n                1.62l1.46-1.46 1.42 1.42-1.46 1.45zM10 18a6 6 0 1 0 0-12 6 6 0 0\n                0 0 12zM7 0h6v2H7V0zm5.12 8.46l1.42 1.42L10 13.4 8.59\n                12l3.53-3.54z");
      attr(svg0, "class", "icon svelte-19h83wp");
      attr(svg0, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg0, "viewBox", "0 0 20 20");
      attr(span0, "class", "text svelte-19h83wp");
      attr(span1, "class", "page-info svelte-19h83wp");
      attr(path1, "d", "M16 2h4v15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V0h16v2zm0 2v13a1 1 0\n                0 0 1 1 1 1 0 0 0 1-1V4h-2zM2 2v15a1 1 0 0 0 1 1h11.17a2.98 2.98\n                0 0 1-.17-1V2H2zm2 8h8v2H4v-2zm0 4h8v2H4v-2zM4 4h8v4H4V4z");
      attr(svg1, "class", "icon svelte-19h83wp");
      attr(svg1, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg1, "viewBox", "0 0 20 20");
      attr(div0, "class", "text svelte-19h83wp");
      attr(span4, "class", "page-info svelte-19h83wp");
      attr(div1, "class", "line svelte-19h83wp");
      attr(canvas_1, "width", ctx[15]);
      attr(canvas_1, "height", ctx[16]);
      attr(canvas_1, "class", "svelte-19h83wp");
      attr(div2, "class", div2_class_value = null_to_empty(ctx[5] === true ? "viewer" : "null") + " svelte-19h83wp");
      attr(div3, "class", "control-start svelte-19h83wp");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div1);
      mount_component(tooltip0, div1, null);
      append_hydration(div1, t0);
      mount_component(tooltip1, div1, null);
      append_hydration(div1, t1);
      mount_component(tooltip2, div1, null);
      append_hydration(div1, t2);
      mount_component(tooltip3, div1, null);
      append_hydration(div1, t3);
      mount_component(tooltip4, div1, null);
      append_hydration(div1, t4);
      mount_component(tooltip5, div1, null);
      append_hydration(div1, t5);
      mount_component(tooltip6, div1, null);
      append_hydration(div1, t6);
      mount_component(tooltip7, div1, null);
      append_hydration(div1, t7);
      mount_component(tooltip8, div1, null);
      append_hydration(div1, t8);
      append_hydration(div1, span1);
      append_hydration(span1, svg0);
      append_hydration(svg0, path0);
      append_hydration(span1, t9);
      append_hydration(span1, span0);
      append_hydration(span0, t10);
      append_hydration(span0, t11);
      append_hydration(div1, t12);
      append_hydration(div1, span4);
      append_hydration(span4, svg1);
      append_hydration(svg1, path1);
      append_hydration(span4, t13);
      append_hydration(span4, div0);
      append_hydration(div0, t14);
      append_hydration(div0, span2);
      ctx[40](span2);
      append_hydration(div0, t15);
      append_hydration(div0, span3);
      ctx[41](span3);
      append_hydration(div3, t16);
      append_hydration(div3, div2);
      append_hydration(div2, canvas_1);
      ctx[42](canvas_1);
      current = true;
    },
    p(ctx2, dirty) {
      const tooltip0_changes = {};
      if (dirty[0] & 1 | dirty[1] & 67108864) {
        tooltip0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tooltip0.$set(tooltip0_changes);
      const tooltip1_changes = {};
      if (dirty[0] & 9 | dirty[1] & 67108864) {
        tooltip1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tooltip1.$set(tooltip1_changes);
      const tooltip2_changes = {};
      if (dirty[0] & 4 | dirty[1] & 67108864) {
        tooltip2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tooltip2.$set(tooltip2_changes);
      const tooltip3_changes = {};
      if (dirty[0] & 4 | dirty[1] & 67108864) {
        tooltip3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tooltip3.$set(tooltip3_changes);
      const tooltip4_changes = {};
      if (dirty[0] & 2 | dirty[1] & 67108864) {
        tooltip4_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tooltip4.$set(tooltip4_changes);
      const tooltip5_changes = {};
      if (dirty[1] & 67108864) {
        tooltip5_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tooltip5.$set(tooltip5_changes);
      const tooltip6_changes = {};
      if (dirty[1] & 67108864) {
        tooltip6_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tooltip6.$set(tooltip6_changes);
      const tooltip7_changes = {};
      if (dirty[0] & 2 | dirty[1] & 67108864) {
        tooltip7_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tooltip7.$set(tooltip7_changes);
      const tooltip8_changes = {};
      if (dirty[0] & 3072 | dirty[1] & 67108864) {
        tooltip8_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tooltip8.$set(tooltip8_changes);
      if (!current || dirty[0] & 512)
        set_data(t10, ctx2[9]);
      if (!current || dirty[0] & 32768) {
        attr(canvas_1, "width", ctx2[15]);
      }
      if (!current || dirty[0] & 65536) {
        attr(canvas_1, "height", ctx2[16]);
      }
      if (!current || dirty[0] & 32 && div2_class_value !== (div2_class_value = null_to_empty(ctx2[5] === true ? "viewer" : "null") + " svelte-19h83wp")) {
        attr(div2, "class", div2_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(tooltip0.$$.fragment, local);
      transition_in(tooltip1.$$.fragment, local);
      transition_in(tooltip2.$$.fragment, local);
      transition_in(tooltip3.$$.fragment, local);
      transition_in(tooltip4.$$.fragment, local);
      transition_in(tooltip5.$$.fragment, local);
      transition_in(tooltip6.$$.fragment, local);
      transition_in(tooltip7.$$.fragment, local);
      transition_in(tooltip8.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tooltip0.$$.fragment, local);
      transition_out(tooltip1.$$.fragment, local);
      transition_out(tooltip2.$$.fragment, local);
      transition_out(tooltip3.$$.fragment, local);
      transition_out(tooltip4.$$.fragment, local);
      transition_out(tooltip5.$$.fragment, local);
      transition_out(tooltip6.$$.fragment, local);
      transition_out(tooltip7.$$.fragment, local);
      transition_out(tooltip8.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      destroy_component(tooltip0);
      destroy_component(tooltip1);
      destroy_component(tooltip2);
      destroy_component(tooltip3);
      destroy_component(tooltip4);
      destroy_component(tooltip5);
      destroy_component(tooltip6);
      destroy_component(tooltip7);
      destroy_component(tooltip8);
      ctx[40](null);
      ctx[41](null);
      ctx[42](null);
    }
  };
}
function create_if_block$1(ctx) {
  let div1;
  let p0;
  let t0;
  let t1;
  let p1;
  let t2;
  let t3;
  let div0;
  let input;
  let t4;
  let button;
  let t5;
  let mounted;
  let dispose;
  return {
    c() {
      div1 = element("div");
      p0 = element("p");
      t0 = text("This document requires a password to open:");
      t1 = space();
      p1 = element("p");
      t2 = text(ctx[14]);
      t3 = space();
      div0 = element("div");
      input = element("input");
      t4 = space();
      button = element("button");
      t5 = text("Submit");
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      p0 = claim_element(div1_nodes, "P", {});
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "This document requires a password to open:");
      p0_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      p1 = claim_element(div1_nodes, "P", { class: true });
      var p1_nodes = children(p1);
      t2 = claim_text(p1_nodes, ctx[14]);
      p1_nodes.forEach(detach);
      t3 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      input = claim_element(div0_nodes, "INPUT", { type: true, class: true });
      t4 = claim_space(div0_nodes);
      button = claim_element(div0_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t5 = claim_text(button_nodes, "Submit");
      button_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p1, "class", "password-message svelte-19h83wp");
      attr(input, "type", "password");
      attr(input, "class", "password-input svelte-19h83wp");
      attr(button, "class", "password-button svelte-19h83wp");
      attr(div0, "class", "password-container svelte-19h83wp");
      attr(div1, "class", "password-viewer svelte-19h83wp");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, p0);
      append_hydration(p0, t0);
      append_hydration(div1, t1);
      append_hydration(div1, p1);
      append_hydration(p1, t2);
      append_hydration(div1, t3);
      append_hydration(div1, div0);
      append_hydration(div0, input);
      set_input_value(input, ctx[12]);
      append_hydration(div0, t4);
      append_hydration(div0, button);
      append_hydration(button, t5);
      if (!mounted) {
        dispose = [
          listen(input, "input", ctx[30]),
          listen(button, "click", ctx[24])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & 16384)
        set_data(t2, ctx2[14]);
      if (dirty[0] & 4096 && input.value !== ctx2[12]) {
        set_input_value(input, ctx2[12]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div1);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_default_slot_8$1(ctx) {
  let t;
  return {
    c() {
      t = text("Prevoius");
    },
    l(nodes) {
      t = claim_text(nodes, "Prevoius");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_activator_slot_8(ctx) {
  let span;
  let svg;
  let polygon;
  let span_class_value;
  let mounted;
  let dispose;
  return {
    c() {
      span = element("span");
      svg = svg_element("svg");
      polygon = svg_element("polygon");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { slot: true, class: true });
      var span_nodes = children(span);
      svg = claim_svg_element(span_nodes, "svg", { class: true, xmlns: true, viewBox: true });
      var svg_nodes = children(svg);
      polygon = claim_svg_element(svg_nodes, "polygon", { points: true });
      children(polygon).forEach(detach);
      svg_nodes.forEach(detach);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(polygon, "points", "3.828 9 9.899 2.929 8.485 1.515 0 10 .707 10.707 8.485\n                  18.485 9.899 17.071 3.828 11 20 11 20 9 3.828 9");
      attr(svg, "class", "icon svelte-19h83wp");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "viewBox", "0 0 20 20");
      attr(span, "slot", "activator");
      attr(span, "class", span_class_value = "button-control " + (ctx[0] <= 1 ? "disabled" : null) + " svelte-19h83wp");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, svg);
      append_hydration(svg, polygon);
      if (!mounted) {
        dispose = listen(span, "click", ctx[31]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & 1 && span_class_value !== (span_class_value = "button-control " + (ctx2[0] <= 1 ? "disabled" : null) + " svelte-19h83wp")) {
        attr(span, "class", span_class_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(span);
      mounted = false;
      dispose();
    }
  };
}
function create_default_slot_7$1(ctx) {
  let t;
  return {
    c() {
      t = text("Next");
    },
    l(nodes) {
      t = claim_text(nodes, "Next");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_activator_slot_7(ctx) {
  let span;
  let svg;
  let polygon;
  let span_class_value;
  let mounted;
  let dispose;
  return {
    c() {
      span = element("span");
      svg = svg_element("svg");
      polygon = svg_element("polygon");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { slot: true, class: true });
      var span_nodes = children(span);
      svg = claim_svg_element(span_nodes, "svg", { class: true, xmlns: true, viewBox: true });
      var svg_nodes = children(svg);
      polygon = claim_svg_element(svg_nodes, "polygon", { points: true });
      children(polygon).forEach(detach);
      svg_nodes.forEach(detach);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(polygon, "points", "16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707\n                  11.515 18.485 10.101 17.071 16.172 11 0 11 0 9");
      attr(svg, "class", "icon svelte-19h83wp");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "viewBox", "0 0 20 20");
      attr(span, "slot", "activator");
      attr(span, "class", span_class_value = "button-control " + (ctx[0] >= ctx[3] ? "disabled" : null) + " svelte-19h83wp");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, svg);
      append_hydration(svg, polygon);
      if (!mounted) {
        dispose = listen(span, "click", ctx[32]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & 9 && span_class_value !== (span_class_value = "button-control " + (ctx2[0] >= ctx2[3] ? "disabled" : null) + " svelte-19h83wp")) {
        attr(span, "class", span_class_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(span);
      mounted = false;
      dispose();
    }
  };
}
function create_default_slot_6$1(ctx) {
  let t;
  return {
    c() {
      t = text("Zoom In");
    },
    l(nodes) {
      t = claim_text(nodes, "Zoom In");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_activator_slot_6(ctx) {
  let span;
  let svg;
  let path;
  let span_class_value;
  let mounted;
  let dispose;
  return {
    c() {
      span = element("span");
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { slot: true, class: true });
      var span_nodes = children(span);
      svg = claim_svg_element(span_nodes, "svg", { class: true, xmlns: true, viewBox: true });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", { "fill-rule": true, d: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "fill-rule", "evenodd");
      attr(path, "d", "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42\n                  1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zM7\n                  7V5h2v2h2v2H9v2H7V9H5V7h2z");
      attr(svg, "class", "icon svelte-19h83wp");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "viewBox", "0 0 20 20");
      attr(span, "slot", "activator");
      attr(span, "class", span_class_value = "button-control " + (ctx[2] >= maxScale ? "disabled" : null) + " svelte-19h83wp");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, svg);
      append_hydration(svg, path);
      if (!mounted) {
        dispose = listen(span, "click", ctx[33]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & 4 && span_class_value !== (span_class_value = "button-control " + (ctx2[2] >= maxScale ? "disabled" : null) + " svelte-19h83wp")) {
        attr(span, "class", span_class_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(span);
      mounted = false;
      dispose();
    }
  };
}
function create_default_slot_5$1(ctx) {
  let t;
  return {
    c() {
      t = text("Zoom Out");
    },
    l(nodes) {
      t = claim_text(nodes, "Zoom Out");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_activator_slot_5(ctx) {
  let span;
  let svg;
  let path;
  let span_class_value;
  let mounted;
  let dispose;
  return {
    c() {
      span = element("span");
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { slot: true, class: true });
      var span_nodes = children(span);
      svg = claim_svg_element(span_nodes, "svg", { class: true, xmlns: true, viewBox: true });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", { "fill-rule": true, d: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "fill-rule", "evenodd");
      attr(path, "d", "M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42\n                  1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zM5\n                  7h6v2H5V7z");
      attr(svg, "class", "icon svelte-19h83wp");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "viewBox", "0 0 20 20");
      attr(span, "slot", "activator");
      attr(span, "class", span_class_value = "button-control " + (ctx[2] <= minScale ? "disabled" : null) + " svelte-19h83wp");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, svg);
      append_hydration(svg, path);
      if (!mounted) {
        dispose = listen(span, "click", ctx[34]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & 4 && span_class_value !== (span_class_value = "button-control " + (ctx2[2] <= minScale ? "disabled" : null) + " svelte-19h83wp")) {
        attr(span, "class", span_class_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(span);
      mounted = false;
      dispose();
    }
  };
}
function create_default_slot_4$1(ctx) {
  let t;
  return {
    c() {
      t = text("Print");
    },
    l(nodes) {
      t = claim_text(nodes, "Print");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_activator_slot_4(ctx) {
  let span;
  let svg;
  let path;
  let mounted;
  let dispose;
  return {
    c() {
      span = element("span");
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { slot: true, class: true });
      var span_nodes = children(span);
      svg = claim_svg_element(span_nodes, "svg", { class: true, xmlns: true, viewBox: true });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", { d: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "d", "M4 16H0V6h20v10h-4v4H4v-4zm2-4v6h8v-6H6zM4 0h12v5H4V0zM2\n                  8v2h2V8H2zm4 0v2h2V8H6z");
      attr(svg, "class", "icon svelte-19h83wp");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "viewBox", "0 0 20 20");
      attr(span, "slot", "activator");
      attr(span, "class", "button-control svelte-19h83wp");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, svg);
      append_hydration(svg, path);
      if (!mounted) {
        dispose = listen(span, "click", ctx[35]);
        mounted = true;
      }
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(span);
      mounted = false;
      dispose();
    }
  };
}
function create_default_slot_3$1(ctx) {
  let t;
  return {
    c() {
      t = text("Anti-Clockwise");
    },
    l(nodes) {
      t = claim_text(nodes, "Anti-Clockwise");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_activator_slot_3(ctx) {
  let span;
  let svg;
  let path;
  let mounted;
  let dispose;
  return {
    c() {
      span = element("span");
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { slot: true, class: true });
      var span_nodes = children(span);
      svg = claim_svg_element(span_nodes, "svg", { class: true, xmlns: true, viewBox: true });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", { d: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "d", "M14.66 15.66A8 8 0 1 1 17 10h-2a6 6 0 1 0-1.76 4.24l1.42\n                  1.42zM12 10h8l-4 4-4-4z");
      attr(svg, "class", "icon rot-icon svelte-19h83wp");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "viewBox", "0 0 20 20");
      attr(span, "slot", "activator");
      attr(span, "class", "button-control svelte-19h83wp");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, svg);
      append_hydration(svg, path);
      if (!mounted) {
        dispose = listen(span, "click", ctx[36]);
        mounted = true;
      }
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(span);
      mounted = false;
      dispose();
    }
  };
}
function create_default_slot_2$1(ctx) {
  let t;
  return {
    c() {
      t = text("Clockwise");
    },
    l(nodes) {
      t = claim_text(nodes, "Clockwise");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_activator_slot_2(ctx) {
  let span;
  let svg;
  let path;
  let mounted;
  let dispose;
  return {
    c() {
      span = element("span");
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { slot: true, class: true });
      var span_nodes = children(span);
      svg = claim_svg_element(span_nodes, "svg", { class: true, xmlns: true, viewBox: true });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", { d: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "d", "M14.66 15.66A8 8 0 1 1 17 10h-2a6 6 0 1 0-1.76 4.24l1.42\n                  1.42zM12 10h8l-4 4-4-4z");
      attr(svg, "class", "icon svelte-19h83wp");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "viewBox", "0 0 20 20");
      attr(span, "slot", "activator");
      attr(span, "class", "button-control svelte-19h83wp");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, svg);
      append_hydration(svg, path);
      if (!mounted) {
        dispose = listen(span, "click", ctx[37]);
        mounted = true;
      }
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(span);
      mounted = false;
      dispose();
    }
  };
}
function create_default_slot_1$1(ctx) {
  let t;
  return {
    c() {
      t = text("Download");
    },
    l(nodes) {
      t = claim_text(nodes, "Download");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_activator_slot_1(ctx) {
  let span;
  let svg;
  let path;
  let mounted;
  let dispose;
  return {
    c() {
      span = element("span");
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { slot: true, class: true });
      var span_nodes = children(span);
      svg = claim_svg_element(span_nodes, "svg", { class: true, xmlns: true, viewBox: true });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", { d: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "d", "M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z");
      attr(svg, "class", "icon svelte-19h83wp");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "viewBox", "0 0 20 20");
      attr(span, "slot", "activator");
      attr(span, "class", "button-control svelte-19h83wp");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, svg);
      append_hydration(svg, path);
      if (!mounted) {
        dispose = listen(span, "click", ctx[38]);
        mounted = true;
      }
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(span);
      mounted = false;
      dispose();
    }
  };
}
function create_default_slot$1(ctx) {
  let t_value = (ctx[10] === true ? ctx[11] : "Auto Turn Page") + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    l(nodes) {
      t = claim_text(nodes, t_value);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 3072 && t_value !== (t_value = (ctx2[10] === true ? ctx2[11] : "Auto Turn Page") + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_else_block$1(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      path = claim_svg_element(nodes, "path", { d: true });
      children(path).forEach(detach);
      this.h();
    },
    h() {
      attr(path, "d", "M9.896,3.838L0.792,1.562v14.794l9.104,2.276L19,16.356V1.562L9.896,3.838z\n                    M9.327,17.332L1.93,15.219V3.27 l7.397,1.585V17.332z\n                    M17.862,15.219l-7.397,2.113V4.855l7.397-1.585V15.219z");
    },
    m(target, anchor) {
      insert_hydration(target, path, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(path);
    }
  };
}
function create_if_block_2(ctx) {
  let path;
  return {
    c() {
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      path = claim_svg_element(nodes, "path", { d: true });
      children(path).forEach(detach);
      this.h();
    },
    h() {
      attr(path, "d", "M4 18h12V6h-4V2H4v16zm-2 1V0h12l4 4v16H2v-1z");
    },
    m(target, anchor) {
      insert_hydration(target, path, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(path);
    }
  };
}
function create_activator_slot(ctx) {
  let span;
  let svg;
  let mounted;
  let dispose;
  function select_block_type_1(ctx2, dirty) {
    if (ctx2[10] === true)
      return create_if_block_2;
    return create_else_block$1;
  }
  let current_block_type = select_block_type_1(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      span = element("span");
      svg = svg_element("svg");
      if_block.c();
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { slot: true, class: true });
      var span_nodes = children(span);
      svg = claim_svg_element(span_nodes, "svg", { class: true, xmlns: true, viewBox: true });
      var svg_nodes = children(svg);
      if_block.l(svg_nodes);
      svg_nodes.forEach(detach);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(svg, "class", "icon svelte-19h83wp");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "viewBox", "0 0 20 20");
      attr(span, "slot", "activator");
      attr(span, "class", "page-info button-control svelte-19h83wp");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, svg);
      if_block.m(svg, null);
      if (!mounted) {
        dispose = listen(span, "click", ctx[39]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (current_block_type !== (current_block_type = select_block_type_1(ctx2))) {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(svg, null);
        }
      }
    },
    d(detaching) {
      if (detaching)
        detach(span);
      if_block.d();
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$1(ctx) {
  let div1;
  let div0;
  let current_block_type_index;
  let if_block;
  let div0_class_value;
  let t;
  let button;
  let svg;
  let path;
  let current;
  let mounted;
  let dispose;
  add_render_callback(ctx[29]);
  const if_block_creators = [create_if_block$1, create_if_block_1$1, create_else_block_1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[13] === true)
      return 0;
    if (ctx2[4] === true)
      return 1;
    return 2;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      if_block.c();
      t = space();
      button = element("button");
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if_block.l(div0_nodes);
      div0_nodes.forEach(detach);
      t = claim_space(div1_nodes);
      button = claim_element(div1_nodes, "BUTTON", { id: true, class: true });
      var button_nodes = children(button);
      svg = claim_svg_element(button_nodes, "svg", { class: true, xmlns: true, viewBox: true });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", { d: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      button_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", div0_class_value = null_to_empty(ctx[5] === true ? "control" : "null") + " svelte-19h83wp");
      attr(path, "d", "M7 10v8h6v-8h5l-8-8-8 8h5z");
      attr(svg, "class", "icon svelte-19h83wp");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "viewBox", "0 0 20 20");
      attr(button, "id", "topBtn");
      attr(button, "class", "svelte-19h83wp");
      attr(div1, "class", "parent svelte-19h83wp");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      if_blocks[current_block_type_index].m(div0, null);
      append_hydration(div1, t);
      append_hydration(div1, button);
      append_hydration(button, svg);
      append_hydration(svg, path);
      current = true;
      if (!mounted) {
        dispose = [
          listen(window_1, "resize", ctx[29]),
          listen(button, "click", ctx[44])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(div0, null);
      }
      if (!current || dirty[0] & 32 && div0_class_value !== (div0_class_value = null_to_empty(ctx2[5] === true ? "control" : "null") + " svelte-19h83wp")) {
        attr(div0, "class", div0_class_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if_blocks[current_block_type_index].d();
      mounted = false;
      run_all(dispose);
    }
  };
}
const minScale = 1;
const maxScale = 2.3;
function instance$1($$self, $$props, $$invalidate) {
  let { url } = $$props;
  let { scale: scale2 = 1.8 } = $$props;
  let { pageNum = 1 } = $$props;
  let { flipTime = 120 } = $$props;
  let { showButtons = true } = $$props;
  let { showBorder = true } = $$props;
  let { totalPage = 0 } = $$props;
  if (pdf.exports.GlobalWorkerOptions) {
    pdf.exports.GlobalWorkerOptions.workerSrc = workerSrc;
  }
  let canvas;
  let page_num = 0;
  let pageCount = 0;
  let pdfDoc = null;
  let pageRendering = false;
  let pageNumPending = null;
  let rotation = 0;
  let pdfContent = "";
  let readingTime = 0;
  let autoFlip = false;
  let interval;
  let secondInterval;
  let seconds = flipTime;
  let pages = [];
  let password = "";
  let passwordError = false;
  let passwordMessage = "";
  let isInitialised = false;
  const renderPage = (num) => {
    pageRendering = true;
    pdfDoc.getPage(num).then(function(page) {
      let viewport = page.getViewport({ scale: scale2, rotation });
      const canvasContext = canvas.getContext("2d");
      $$invalidate(6, canvas.height = viewport.height, canvas);
      $$invalidate(6, canvas.width = viewport.width, canvas);
      let renderContext = { canvasContext, viewport };
      let renderTask = page.render(renderContext);
      renderTask.promise.then(function() {
        pageRendering = false;
        if (pageNumPending !== null) {
          if (pageNum < pdfDoc.totalPage) {
            pages[pageNum] = canvas;
            $$invalidate(0, pageNum++, pageNum);
            pdfDoc.getPage(pageNum).then(renderPage);
          } else {
            for (let i = 1; i < pages.length; i++) {
              canvas.appendChild(pages[i]);
            }
          }
          pageNumPending = null;
        }
      });
    });
    showButtons === true ? $$invalidate(7, page_num.textContent = num, page_num) : null;
  };
  const queueRenderPage = (num) => {
    if (pageRendering) {
      pageNumPending = num;
    } else {
      renderPage(num);
    }
  };
  const onPrevPage = () => {
    if (pageNum <= 1) {
      return;
    }
    $$invalidate(0, pageNum--, pageNum);
    queueRenderPage(pageNum);
  };
  const onNextPage = () => {
    if (pageNum >= pdfDoc.numPages) {
      return;
    }
    $$invalidate(0, pageNum++, pageNum);
    queueRenderPage(pageNum);
  };
  const onZoomIn = () => {
    if (scale2 <= maxScale) {
      $$invalidate(2, scale2 = scale2 + 0.1);
      queueRenderPage(pageNum);
    }
  };
  const onZoomOut = () => {
    if (scale2 >= minScale) {
      $$invalidate(2, scale2 = scale2 - 0.1);
      queueRenderPage(pageNum);
    }
  };
  const printPdf = (url2) => {
    onPrint(url2);
  };
  const clockwiseRotate = () => {
    rotation = rotation + 90;
    queueRenderPage(pageNum);
  };
  const antiClockwiseRotate = () => {
    rotation = rotation - 90;
    queueRenderPage(pageNum);
  };
  const onPasswordSubmit = () => {
    initialLoad();
  };
  const initialLoad = async () => {
    let loadingTask = pdf.exports.getDocument({ url, password });
    loadingTask.promise.then(async function(pdfDoc_) {
      pdfDoc = pdfDoc_;
      $$invalidate(13, passwordError = false);
      await tick();
      showButtons === true ? $$invalidate(8, pageCount.textContent = pdfDoc.numPages, pageCount) : null;
      $$invalidate(3, totalPage = pdfDoc.numPages);
      if (showButtons === true) {
        for (let number = 1; number <= totalPage; number++) {
          getPageText(number, pdfDoc).then(function(textPage) {
            pdfContent = pdfContent.concat(textPage);
            $$invalidate(9, readingTime = calcRT(pdfContent));
          });
        }
      }
      $$invalidate(28, isInitialised = true);
    }).catch(function(error) {
      $$invalidate(13, passwordError = true);
      $$invalidate(14, passwordMessage = error.message);
      if (passwordMessage === "Failed to fetch") {
        $$invalidate(1, url = `https://cors-anywhere.herokuapp.com/${url}`);
        initialLoad();
      }
    });
  };
  initialLoad();
  const onPageTurn = () => {
    $$invalidate(10, autoFlip = !autoFlip);
    if (autoFlip === false) {
      clearInterval(interval);
      clearInterval(secondInterval);
    }
    if (autoFlip === true && pageNum <= totalPage) {
      secondInterval = setInterval(() => {
        $$invalidate(11, seconds = seconds - 1);
      }, 1e3);
      interval = setInterval(() => {
        $$invalidate(11, seconds = flipTime);
        onNextPage();
      }, flipTime * 1e3);
    }
  };
  const downloadPdf = (fileURL) => {
    let fileName = fileURL.substring(fileURL.lastIndexOf("/") + 1);
    FileSaver.saveAs(fileURL, fileName);
  };
  onDestroy(() => {
    clearInterval(interval);
    clearInterval(secondInterval);
  });
  let pageWidth;
  let pageHeight;
  function onwindowresize() {
    $$invalidate(15, pageWidth = window_1.innerWidth);
    $$invalidate(16, pageHeight = window_1.innerHeight);
  }
  function input_input_handler() {
    password = this.value;
    $$invalidate(12, password);
  }
  const click_handler = () => onPrevPage();
  const click_handler_1 = () => onNextPage();
  const click_handler_2 = () => onZoomIn();
  const click_handler_3 = () => onZoomOut();
  const click_handler_4 = () => printPdf(url);
  const click_handler_5 = () => antiClockwiseRotate();
  const click_handler_6 = () => clockwiseRotate();
  const click_handler_7 = () => downloadPdf(url);
  const click_handler_8 = () => onPageTurn();
  function span2_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      page_num = $$value;
      $$invalidate(7, page_num);
    });
  }
  function span3_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      pageCount = $$value;
      $$invalidate(8, pageCount);
    });
  }
  function canvas_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      canvas = $$value;
      $$invalidate(6, canvas);
    });
  }
  function canvas_1_binding_1($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      canvas = $$value;
      $$invalidate(6, canvas);
    });
  }
  const click_handler_9 = () => window.scrollTo(0, 0);
  $$self.$$set = ($$props2) => {
    if ("url" in $$props2)
      $$invalidate(1, url = $$props2.url);
    if ("scale" in $$props2)
      $$invalidate(2, scale2 = $$props2.scale);
    if ("pageNum" in $$props2)
      $$invalidate(0, pageNum = $$props2.pageNum);
    if ("flipTime" in $$props2)
      $$invalidate(27, flipTime = $$props2.flipTime);
    if ("showButtons" in $$props2)
      $$invalidate(4, showButtons = $$props2.showButtons);
    if ("showBorder" in $$props2)
      $$invalidate(5, showBorder = $$props2.showBorder);
    if ("totalPage" in $$props2)
      $$invalidate(3, totalPage = $$props2.totalPage);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 268435457) {
      if (isInitialised)
        queueRenderPage(pageNum);
    }
  };
  return [
    pageNum,
    url,
    scale2,
    totalPage,
    showButtons,
    showBorder,
    canvas,
    page_num,
    pageCount,
    readingTime,
    autoFlip,
    seconds,
    password,
    passwordError,
    passwordMessage,
    pageWidth,
    pageHeight,
    onPrevPage,
    onNextPage,
    onZoomIn,
    onZoomOut,
    printPdf,
    clockwiseRotate,
    antiClockwiseRotate,
    onPasswordSubmit,
    onPageTurn,
    downloadPdf,
    flipTime,
    isInitialised,
    onwindowresize,
    input_input_handler,
    click_handler,
    click_handler_1,
    click_handler_2,
    click_handler_3,
    click_handler_4,
    click_handler_5,
    click_handler_6,
    click_handler_7,
    click_handler_8,
    span2_binding,
    span3_binding,
    canvas_1_binding,
    canvas_1_binding_1,
    click_handler_9
  ];
}
class PdfViewer extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      url: 1,
      scale: 2,
      pageNum: 0,
      flipTime: 27,
      showButtons: 4,
      showBorder: 5,
      totalPage: 3
    }, null, [-1, -1]);
  }
}
var gallery_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[10] = list[i];
  return child_ctx;
}
function create_default_slot_9(ctx) {
  let t;
  return {
    c() {
      t = text("Upload Your Cartoon");
    },
    l(nodes) {
      t = claim_text(nodes, "Upload Your Cartoon");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_1(ctx) {
  let button;
  let t;
  let pdfviewer;
  let current;
  button = new Button$2({
    props: {
      class: "btn-overlay",
      icon: Close,
      iconDescription: "Close",
      $$slots: { default: [create_default_slot_8] },
      $$scope: { ctx }
    }
  });
  button.$on("click", ctx[6]);
  pdfviewer = new PdfViewer({ props: { url: ctx[0] } });
  return {
    c() {
      create_component(button.$$.fragment);
      t = space();
      create_component(pdfviewer.$$.fragment);
    },
    l(nodes) {
      claim_component(button.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(pdfviewer.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(button, target, anchor);
      insert_hydration(target, t, anchor);
      mount_component(pdfviewer, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const button_changes = {};
      if (dirty & 8192) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
      const pdfviewer_changes = {};
      if (dirty & 1)
        pdfviewer_changes.url = ctx2[0];
      pdfviewer.$set(pdfviewer_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      transition_in(pdfviewer.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      transition_out(pdfviewer.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(button, detaching);
      if (detaching)
        detach(t);
      destroy_component(pdfviewer, detaching);
    }
  };
}
function create_default_slot_8(ctx) {
  let t;
  return {
    c() {
      t = text("Close file");
    },
    l(nodes) {
      t = claim_text(nodes, "Close file");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_else_block(ctx) {
  let iconbutton;
  let current;
  function click_handler_3() {
    return ctx[9](ctx[10]);
  }
  iconbutton = new IconButton({
    props: {
      $$slots: { default: [create_default_slot_6] },
      $$scope: { ctx }
    }
  });
  iconbutton.$on("click", click_handler_3);
  return {
    c() {
      create_component(iconbutton.$$.fragment);
    },
    l(nodes) {
      claim_component(iconbutton.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(iconbutton, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const iconbutton_changes = {};
      if (dirty & 8192) {
        iconbutton_changes.$$scope = { dirty, ctx };
      }
      iconbutton.$set(iconbutton_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(iconbutton.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(iconbutton.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(iconbutton, detaching);
    }
  };
}
function create_if_block(ctx) {
  let iconbutton;
  let current;
  function click_handler_2() {
    return ctx[8](ctx[10]);
  }
  iconbutton = new IconButton({
    props: {
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  iconbutton.$on("click", click_handler_2);
  return {
    c() {
      create_component(iconbutton.$$.fragment);
    },
    l(nodes) {
      claim_component(iconbutton.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(iconbutton, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const iconbutton_changes = {};
      if (dirty & 8192) {
        iconbutton_changes.$$scope = { dirty, ctx };
      }
      iconbutton.$set(iconbutton_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(iconbutton.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(iconbutton.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(iconbutton, detaching);
    }
  };
}
function create_default_slot_7(ctx) {
  let t;
  return {
    c() {
      t = text("favorite_border");
    },
    l(nodes) {
      t = claim_text(nodes, "favorite_border");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_6(ctx) {
  let icon;
  let current;
  icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: { default: [create_default_slot_7] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(icon.$$.fragment);
    },
    l(nodes) {
      claim_component(icon.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const icon_changes = {};
      if (dirty & 8192) {
        icon_changes.$$scope = { dirty, ctx: ctx2 };
      }
      icon.$set(icon_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(icon, detaching);
    }
  };
}
function create_default_slot_5(ctx) {
  let t;
  return {
    c() {
      t = text("favorite");
    },
    l(nodes) {
      t = claim_text(nodes, "favorite");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_4(ctx) {
  let icon;
  let current;
  icon = new Icon({
    props: {
      class: "material-icons",
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(icon.$$.fragment);
    },
    l(nodes) {
      claim_component(icon.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const icon_changes = {};
      if (dirty & 8192) {
        icon_changes.$$scope = { dirty, ctx: ctx2 };
      }
      icon.$set(icon_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(icon, detaching);
    }
  };
}
function create_default_slot_3(ctx) {
  let show_if;
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (dirty & 6)
      show_if = null;
    if (show_if == null)
      show_if = !!ctx2[10].users_liked.includes(ctx2[2].name);
    if (show_if)
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx, -1);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2, dirty);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_default_slot_2(ctx) {
  let img;
  let img_src_value;
  let t;
  let actions;
  let current;
  let mounted;
  let dispose;
  function click_handler_1() {
    return ctx[7](ctx[10]);
  }
  actions = new Actions({
    props: {
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      img = element("img");
      t = space();
      create_component(actions.$$.fragment);
      this.h();
    },
    l(nodes) {
      img = claim_element(nodes, "IMG", { src: true, width: true, height: true });
      t = claim_space(nodes);
      claim_component(actions.$$.fragment, nodes);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = ctx[10].url))
        attr(img, "src", img_src_value);
      attr(img, "width", "200px");
      attr(img, "height", "200px");
    },
    m(target, anchor) {
      insert_hydration(target, img, anchor);
      insert_hydration(target, t, anchor);
      mount_component(actions, target, anchor);
      current = true;
      if (!mounted) {
        dispose = listen(img, "click", click_handler_1);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (!current || dirty & 2 && !src_url_equal(img.src, img_src_value = ctx[10].url)) {
        attr(img, "src", img_src_value);
      }
      const actions_changes = {};
      if (dirty & 8198) {
        actions_changes.$$scope = { dirty, ctx };
      }
      actions.$set(actions_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(actions.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(actions.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(img);
      if (detaching)
        detach(t);
      destroy_component(actions, detaching);
      mounted = false;
      dispose();
    }
  };
}
function create_each_block(ctx) {
  let div;
  let card;
  let t;
  let current;
  card = new Card({
    props: {
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div = element("div");
      create_component(card.$$.fragment);
      t = space();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(card.$$.fragment, div_nodes);
      t = claim_space(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "card-container");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(card, div, null);
      append_hydration(div, t);
      current = true;
    },
    p(ctx2, dirty) {
      const card_changes = {};
      if (dirty & 8198) {
        card_changes.$$scope = { dirty, ctx: ctx2 };
      }
      card.$set(card_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(card.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(card.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(card);
    }
  };
}
function create_default_slot_1(ctx) {
  let each_1_anchor;
  let current;
  let each_value = ctx[1];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 54) {
        each_value = ctx2[1];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_default_slot(ctx) {
  let row;
  let current;
  row = new Row({
    props: {
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(row.$$.fragment);
    },
    l(nodes) {
      claim_component(row.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(row, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const row_changes = {};
      if (dirty & 8198) {
        row_changes.$$scope = { dirty, ctx: ctx2 };
      }
      row.$set(row_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(row.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(row.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(row, detaching);
    }
  };
}
function create_fragment(ctx) {
  let button;
  let t0;
  let div0;
  let img;
  let t1;
  let div1;
  let t2;
  let grid;
  let current;
  button = new Button$2({
    props: {
      icon: Add,
      $$slots: { default: [create_default_slot_9] },
      $$scope: { ctx }
    }
  });
  button.$on("click", ctx[3]);
  let if_block = ctx[0] && create_if_block_1(ctx);
  grid = new Grid({
    props: {
      fullWidth: true,
      noGutterLeft: true,
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(button.$$.fragment);
      t0 = space();
      div0 = element("div");
      img = element("img");
      t1 = space();
      div1 = element("div");
      if (if_block)
        if_block.c();
      t2 = space();
      create_component(grid.$$.fragment);
      this.h();
    },
    l(nodes) {
      claim_component(button.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div0 = claim_element(nodes, "DIV", { id: true, onclick: true });
      var div0_nodes = children(div0);
      img = claim_element(div0_nodes, "IMG", { style: true, id: true });
      div0_nodes.forEach(detach);
      t1 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", { id: true });
      var div1_nodes = children(div1);
      if (if_block)
        if_block.l(div1_nodes);
      div1_nodes.forEach(detach);
      t2 = claim_space(nodes);
      claim_component(grid.$$.fragment, nodes);
      this.h();
    },
    h() {
      set_style(img, "height", "100%");
      attr(img, "id", "cartoon");
      attr(div0, "id", "modal01");
      attr(div0, "onclick", "this.style.display='none'");
      attr(div1, "id", "modal02");
    },
    m(target, anchor) {
      mount_component(button, target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div0, anchor);
      append_hydration(div0, img);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div1, anchor);
      if (if_block)
        if_block.m(div1, null);
      insert_hydration(target, t2, anchor);
      mount_component(grid, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const button_changes = {};
      if (dirty & 8192) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
      if (ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div1, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      const grid_changes = {};
      if (dirty & 8198) {
        grid_changes.$$scope = { dirty, ctx: ctx2 };
      }
      grid.$set(grid_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      transition_in(if_block);
      transition_in(grid.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      transition_out(if_block);
      transition_out(grid.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(button, detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div1);
      if (if_block)
        if_block.d();
      if (detaching)
        detach(t2);
      destroy_component(grid, detaching);
    }
  };
}
function closePDF() {
  document.getElementById("modal02").style.display = "none";
}
function instance($$self, $$props, $$invalidate) {
  let $cartoons;
  let $user;
  component_subscribe($$self, cartoons, ($$value) => $$invalidate(1, $cartoons = $$value));
  component_subscribe($$self, user, ($$value) => $$invalidate(2, $user = $$value));
  async function upload() {
    const client = filestack.init("ALqjJdltnSryUSXJeNMxVz");
    async function uploadDone(result) {
      console.log(JSON.stringify(result));
      const cartoon = new Parse.Object("cartoon");
      cartoon.set("filename", result.filesUploaded[0].filename);
      cartoon.set("fileHandle", result.filesUploaded[0].handle);
      cartoon.set("type", result.filesUploaded[0].mimetype);
      cartoon.set("url", result.filesUploaded[0].url);
      cartoon.set("user", $user.name);
      cartoon.set("email", $user.email);
      cartoon.set("users_liked", []);
      try {
        const result2 = await cartoon.save();
      } catch (error) {
        alert("Failed to create new object: " + error.message);
      }
    }
    const options = {
      onUploadDone: uploadDone,
      maxSize: 10 * 1024 * 1024,
      accept: ["image/*", ".pdf"],
      uploadInBackground: false
    };
    client.picker(options).open();
  }
  function like(cartoon) {
    if (cartoon.users_liked.includes($user.name)) {
      let index = cartoon.users_liked.indexOf($user.name);
      cartoon.users_liked.splice(index, 1);
      cartoon.likes -= 1;
      cartoons.set($cartoons);
    } else {
      cartoon.users_liked.push($user.name);
      cartoon.likes += 1;
      cartoons.set($cartoons);
    }
    const obj = cartoon.object;
    obj.set("users_liked", cartoon.users_liked);
    obj.set("stars", cartoon.likes);
    obj.save();
  }
  let pdfURL = "";
  function onClick(cartoon) {
    if (cartoon.type == "application/pdf") {
      $$invalidate(0, pdfURL = cartoon["url"]);
      document.getElementById("modal02").style.display = "block";
    } else {
      document.getElementById("cartoon").src = cartoon["url"];
      document.getElementById("modal01").style.display = "block";
    }
  }
  const click_handler = () => closePDF();
  const click_handler_1 = (cartoon) => onClick(cartoon);
  const click_handler_2 = (cartoon) => like(cartoon);
  const click_handler_3 = (cartoon) => like(cartoon);
  return [
    pdfURL,
    $cartoons,
    $user,
    upload,
    like,
    onClick,
    click_handler,
    click_handler_1,
    click_handler_2,
    click_handler_3
  ];
}
class Gallery_1 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Gallery_1 as default };
