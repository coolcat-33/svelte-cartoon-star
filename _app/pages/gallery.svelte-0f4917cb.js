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
import { S as SvelteComponent, i as init, s as safe_not_equal, l as empty, g as insert_hydration, n as group_outros, o as transition_out, p as check_outros, q as transition_in, d as detach, M as compute_rest_props, C as assign, N as exclude_internal_props, V as create_slot, e as element, c as claim_element, a as children, O as set_attributes, X as update_slot_base, Y as get_all_dirty_from_scope, Z as get_slot_changes, z as get_spread_update, I as svg_element, t as text, J as claim_svg_element, h as claim_text, K as append_hydration, j as set_data, b as attr, L as set_svg_attributes, E as noop, Q as listen, R as bubble, a8 as prevent_default, a1 as stop_propagation, a9 as action_destroyer, H as is_function, G as run_all, aa as get_current_component, T as binding_callbacks, w as create_component, x as claim_component, y as mount_component, A as get_spread_object, B as destroy_component, a3 as getContext, r as setContext, ab as onDestroy, k as space, m as claim_space, f as set_style, _ as component_subscribe, ac as destroy_each, a6 as src_url_equal } from "../chunks/index-2e044943.js";
import "../chunks/HeaderSearch.svelte_svelte_type_style_lang-e51739eb.js";
import { B as Button$2 } from "../chunks/Button-d45d2d2b.js";
import { c as cartoons } from "../chunks/cartoons-1bce853c.js";
import { u as user } from "../chunks/user-9d47edd4.js";
import "../chunks/index-19c80a23.js";
const get_default_slot_changes$1 = (dirty) => ({ props: dirty & 2 });
const get_default_slot_context$1 = (ctx) => ({ props: ctx[1] });
function create_else_block$2(ctx) {
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
function create_if_block$4(ctx) {
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
function create_fragment$d(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$4, create_else_block$2];
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
function instance$c($$self, $$props, $$invalidate) {
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
    init(this, options, instance$c, create_fragment$d, safe_not_equal, {
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
function create_else_block$1(ctx) {
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
function create_if_block$3(ctx) {
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
function create_fragment$c(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$3, create_else_block$1];
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
function instance$b($$self, $$props, $$invalidate) {
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
    init(this, options, instance$b, create_fragment$c, safe_not_equal, {
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
function create_if_block$2(ctx) {
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
function create_fragment$b(ctx) {
  let svg;
  let path;
  let if_block = ctx[1] && create_if_block$2(ctx);
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
          if_block = create_if_block$2(ctx2);
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
function instance$a($$self, $$props, $$invalidate) {
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
    init(this, options, instance$a, create_fragment$b, safe_not_equal, { size: 0, title: 1 });
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
function create_fragment$a(ctx) {
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
function instance$9($$self, $$props, $$invalidate) {
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
    init(this, options, instance$9, create_fragment$a, safe_not_equal, {
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
function create_fragment$9(ctx) {
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
function instance$8($$self, $$props, $$invalidate) {
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
    init(this, options, instance$8, create_fragment$9, safe_not_equal, { use: 0, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function create_default_slot$3(ctx) {
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
function create_fragment$8(ctx) {
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
function instance$7($$self, $$props, $$invalidate) {
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
    init(this, options, instance$7, create_fragment$8, safe_not_equal, {
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
function create_fragment$7(ctx) {
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
function instance$6($$self, $$props, $$invalidate) {
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
    init(this, options, instance$6, create_fragment$7, safe_not_equal, { use: 0, href: 1, getElement: 5 });
  }
  get getElement() {
    return this.$$.ctx[5];
  }
}
function create_fragment$6(ctx) {
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
    init(this, options, instance$5, create_fragment$6, safe_not_equal, { use: 0, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function create_fragment$5(ctx) {
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
function instance$4($$self, $$props, $$invalidate) {
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
    init(this, options, instance$4, create_fragment$5, safe_not_equal, { use: 0, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function create_fragment$4(ctx) {
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
function instance$3($$self, $$props, $$invalidate) {
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
    init(this, options, instance$3, create_fragment$4, safe_not_equal, { use: 0, getElement: 4 });
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
function create_fragment$3(ctx) {
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
function instance$2($$self, $$props, $$invalidate) {
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
    init(this, options, instance$2, create_fragment$3, safe_not_equal, {
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
function create_if_block$1(ctx) {
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
function create_default_slot$2(ctx) {
  let div;
  let t;
  let if_block_anchor;
  let current;
  const default_slot_template = ctx[32].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[36], null);
  let if_block = ctx[8] && create_if_block$1();
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
          if_block = create_if_block$1();
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
function create_fragment$2(ctx) {
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
    init(this, options, instance_1, create_fragment$2, safe_not_equal, {
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
function create_default_slot$1(ctx) {
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
function create_fragment$1(ctx) {
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
      $$slots: { default: [create_default_slot$1] },
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
function instance$1($$self, $$props, $$invalidate) {
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
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
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
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[7] = list[i];
  return child_ctx;
}
function create_default_slot_8(ctx) {
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
function create_else_block(ctx) {
  let iconbutton;
  let current;
  function click_handler_2() {
    return ctx[6](ctx[7]);
  }
  iconbutton = new IconButton({
    props: {
      $$slots: { default: [create_default_slot_6] },
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
      if (dirty & 1024) {
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
  function click_handler_1() {
    return ctx[5](ctx[7]);
  }
  iconbutton = new IconButton({
    props: {
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  iconbutton.$on("click", click_handler_1);
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
      if (dirty & 1024) {
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
      if (dirty & 1024) {
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
      if (dirty & 1024) {
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
    if (dirty & 3)
      show_if = null;
    if (show_if == null)
      show_if = !!ctx2[7].users_liked.includes(ctx2[1].name);
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
  function click_handler() {
    return ctx[4](ctx[7]);
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
      if (!src_url_equal(img.src, img_src_value = ctx[7].url))
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
        dispose = listen(img, "click", click_handler);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (!current || dirty & 1 && !src_url_equal(img.src, img_src_value = ctx[7].url)) {
        attr(img, "src", img_src_value);
      }
      const actions_changes = {};
      if (dirty & 1027) {
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
      if (dirty & 1027) {
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
  let each_value = ctx[0];
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
      if (dirty & 11) {
        each_value = ctx2[0];
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
      if (dirty & 1027) {
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
  let div;
  let img;
  let t1;
  let grid;
  let current;
  button = new Button$2({
    props: {
      icon: Add,
      $$slots: { default: [create_default_slot_8] },
      $$scope: { ctx }
    }
  });
  button.$on("click", ctx[2]);
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
      div = element("div");
      img = element("img");
      t1 = space();
      create_component(grid.$$.fragment);
      this.h();
    },
    l(nodes) {
      claim_component(button.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { id: true, onclick: true });
      var div_nodes = children(div);
      img = claim_element(div_nodes, "IMG", { style: true, id: true });
      div_nodes.forEach(detach);
      t1 = claim_space(nodes);
      claim_component(grid.$$.fragment, nodes);
      this.h();
    },
    h() {
      set_style(img, "height", "100%");
      attr(img, "id", "cartoon");
      attr(div, "id", "modal01");
      attr(div, "onclick", "this.style.display='none'");
    },
    m(target, anchor) {
      mount_component(button, target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div, anchor);
      append_hydration(div, img);
      insert_hydration(target, t1, anchor);
      mount_component(grid, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const button_changes = {};
      if (dirty & 1024) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
      const grid_changes = {};
      if (dirty & 1027) {
        grid_changes.$$scope = { dirty, ctx: ctx2 };
      }
      grid.$set(grid_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      transition_in(grid.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      transition_out(grid.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(button, detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div);
      if (detaching)
        detach(t1);
      destroy_component(grid, detaching);
    }
  };
}
function onClick(src) {
  document.getElementById("cartoon").src = src;
  document.getElementById("modal01").style.display = "block";
}
function instance($$self, $$props, $$invalidate) {
  let $cartoons;
  let $user;
  component_subscribe($$self, cartoons, ($$value) => $$invalidate(0, $cartoons = $$value));
  component_subscribe($$self, user, ($$value) => $$invalidate(1, $user = $$value));
  async function upload() {
    const client = filestack.init("ALqjJdltnSryUSXJeNMxVz");
    async function uploadDone(result) {
      console.log(JSON.stringify(result));
      const cartoon = new Parse.Object("cartoon");
      cartoon.set("filename", result.filesUploaded[0].filename);
      cartoon.set("fileHandle", result.filesUploaded[0].handle);
      cartoon.set("url", result.filesUploaded[0].url);
      cartoon.set("user", $user.name);
      cartoon.set("email", $user.email);
      cartoon.set("users_liked", []);
      try {
        const result2 = await cartoon.save();
        alert("New object created with objectId: " + result2.id);
      } catch (error) {
        alert("Failed to create new object: " + error.message);
      }
    }
    const options = {
      onUploadDone: uploadDone,
      maxSize: 10 * 1024 * 1024,
      accept: "image/*",
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
  const click_handler = (cartoon) => onClick(cartoon.url);
  const click_handler_1 = (cartoon) => like(cartoon);
  const click_handler_2 = (cartoon) => like(cartoon);
  return [
    $cartoons,
    $user,
    upload,
    like,
    click_handler,
    click_handler_1,
    click_handler_2
  ];
}
class Gallery_1 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Gallery_1 as default };
