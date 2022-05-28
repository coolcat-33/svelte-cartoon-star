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
import { S as SvelteComponent, i as init, s as safe_not_equal, I as svg_element, t as text, J as claim_svg_element, a as children, h as claim_text, d as detach, g as insert_hydration, K as append_hydration, j as set_data, C as assign, b as attr, L as set_svg_attributes, z as get_spread_update, E as noop, M as compute_rest_props, N as exclude_internal_props, e as element, k as space, c as claim_element, m as claim_space, O as set_attributes, P as toggle_class, Q as listen, R as bubble, T as binding_callbacks, X as update_slot_base, Y as get_all_dirty_from_scope, Z as get_slot_changes, q as transition_in, o as transition_out, n as group_outros, p as check_outros, G as run_all, a4 as compute_slots, a3 as getContext, _ as component_subscribe, V as create_slot, l as empty, w as create_component, x as claim_component, y as mount_component, B as destroy_component, A as get_spread_object, a2 as createEventDispatcher, r as setContext, a7 as set_store_value, ad as update_keyed_each, W as add_flush_callback, ae as outro_and_destroy_block, $ as bind, a1 as stop_propagation, af as set_input_value, D as tick, ab as onDestroy } from "../chunks/index-2e044943.js";
import "../chunks/HeaderSearch.svelte_svelte_type_style_lang-e51739eb.js";
import { w as writable, d as derived } from "../chunks/index-19c80a23.js";
import { C as Close } from "../chunks/Close-c5bb5817.js";
import { c as cartoons } from "../chunks/cartoons-1bce853c.js";
function create_if_block$9(ctx) {
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
function create_fragment$j(ctx) {
  let svg;
  let path;
  let if_block = ctx[1] && create_if_block$9(ctx);
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
      attr(path, "d", "M22 16L12 26 10.6 24.6 19.2 16 10.6 7.4 12 6z");
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
          if_block = create_if_block$9(ctx2);
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
function instance$j($$self, $$props, $$invalidate) {
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
class ChevronRight extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$j, create_fragment$j, safe_not_equal, { size: 0, title: 1 });
  }
}
function create_fragment$i(ctx) {
  let div;
  let input;
  let input_checked_value;
  let input_aria_checked_value;
  let t;
  let label;
  let label_aria_label_value;
  let mounted;
  let dispose;
  let input_levels = [
    { type: "checkbox" },
    {
      checked: input_checked_value = ctx[2] ? false : ctx[1]
    },
    { indeterminate: ctx[2] },
    { id: ctx[4] },
    ctx[5],
    {
      "aria-checked": input_aria_checked_value = ctx[2] ? "mixed" : ctx[1]
    }
  ];
  let input_data = {};
  for (let i = 0; i < input_levels.length; i += 1) {
    input_data = assign(input_data, input_levels[i]);
  }
  return {
    c() {
      div = element("div");
      input = element("input");
      t = space();
      label = element("label");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      input = claim_element(div_nodes, "INPUT", {
        type: true,
        id: true,
        "aria-checked": true
      });
      t = claim_space(div_nodes);
      label = claim_element(div_nodes, "LABEL", {
        for: true,
        title: true,
        "aria-label": true
      });
      children(label).forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(input, input_data);
      toggle_class(input, "bx--checkbox", true);
      attr(label, "for", ctx[4]);
      attr(label, "title", ctx[3]);
      attr(label, "aria-label", label_aria_label_value = ctx[6]["aria-label"]);
      toggle_class(label, "bx--checkbox-label", true);
      toggle_class(div, "bx--checkbox--inline", true);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, input);
      if (input.autofocus)
        input.focus();
      ctx[8](input);
      append_hydration(div, t);
      append_hydration(div, label);
      if (!mounted) {
        dispose = listen(input, "change", ctx[7]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      set_attributes(input, input_data = get_spread_update(input_levels, [
        { type: "checkbox" },
        dirty & 6 && input_checked_value !== (input_checked_value = ctx2[2] ? false : ctx2[1]) && { checked: input_checked_value },
        dirty & 4 && { indeterminate: ctx2[2] },
        dirty & 16 && { id: ctx2[4] },
        dirty & 32 && ctx2[5],
        dirty & 6 && input_aria_checked_value !== (input_aria_checked_value = ctx2[2] ? "mixed" : ctx2[1]) && { "aria-checked": input_aria_checked_value }
      ]));
      toggle_class(input, "bx--checkbox", true);
      if (dirty & 16) {
        attr(label, "for", ctx2[4]);
      }
      if (dirty & 8) {
        attr(label, "title", ctx2[3]);
      }
      if (dirty & 64 && label_aria_label_value !== (label_aria_label_value = ctx2[6]["aria-label"])) {
        attr(label, "aria-label", label_aria_label_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      ctx[8](null);
      mounted = false;
      dispose();
    }
  };
}
function instance$i($$self, $$props, $$invalidate) {
  const omit_props_names = ["checked", "indeterminate", "title", "id", "ref"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { checked = false } = $$props;
  let { indeterminate = false } = $$props;
  let { title = void 0 } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  function change_handler(event) {
    bubble.call(this, $$self, event);
  }
  function input_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      ref = $$value;
      $$invalidate(0, ref);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$invalidate(6, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("checked" in $$new_props)
      $$invalidate(1, checked = $$new_props.checked);
    if ("indeterminate" in $$new_props)
      $$invalidate(2, indeterminate = $$new_props.indeterminate);
    if ("title" in $$new_props)
      $$invalidate(3, title = $$new_props.title);
    if ("id" in $$new_props)
      $$invalidate(4, id = $$new_props.id);
    if ("ref" in $$new_props)
      $$invalidate(0, ref = $$new_props.ref);
  };
  $$props = exclude_internal_props($$props);
  return [
    ref,
    checked,
    indeterminate,
    title,
    id,
    $$restProps,
    $$props,
    change_handler,
    input_binding
  ];
}
class InlineCheckbox extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$i, create_fragment$i, safe_not_equal, {
      checked: 1,
      indeterminate: 2,
      title: 3,
      id: 4,
      ref: 0
    });
  }
}
const get_labelText_slot_changes$1 = (dirty) => ({});
const get_labelText_slot_context$1 = (ctx) => ({});
function create_if_block$8(ctx) {
  let span;
  let current;
  const labelText_slot_template = ctx[16].labelText;
  const labelText_slot = create_slot(labelText_slot_template, ctx, ctx[15], get_labelText_slot_context$1);
  const labelText_slot_or_fallback = labelText_slot || fallback_block$2(ctx);
  return {
    c() {
      span = element("span");
      if (labelText_slot_or_fallback)
        labelText_slot_or_fallback.c();
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", {});
      var span_nodes = children(span);
      if (labelText_slot_or_fallback)
        labelText_slot_or_fallback.l(span_nodes);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(span, "bx--visually-hidden", ctx[7]);
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      if (labelText_slot_or_fallback) {
        labelText_slot_or_fallback.m(span, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (labelText_slot) {
        if (labelText_slot.p && (!current || dirty & 32768)) {
          update_slot_base(labelText_slot, labelText_slot_template, ctx2, ctx2[15], !current ? get_all_dirty_from_scope(ctx2[15]) : get_slot_changes(labelText_slot_template, ctx2[15], dirty, get_labelText_slot_changes$1), get_labelText_slot_context$1);
        }
      } else {
        if (labelText_slot_or_fallback && labelText_slot_or_fallback.p && (!current || dirty & 64)) {
          labelText_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
      if (dirty & 128) {
        toggle_class(span, "bx--visually-hidden", ctx2[7]);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(labelText_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(labelText_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(span);
      if (labelText_slot_or_fallback)
        labelText_slot_or_fallback.d(detaching);
    }
  };
}
function fallback_block$2(ctx) {
  let t;
  return {
    c() {
      t = text(ctx[6]);
    },
    l(nodes) {
      t = claim_text(nodes, ctx[6]);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 64)
        set_data(t, ctx2[6]);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$h(ctx) {
  let div;
  let input;
  let t0;
  let label;
  let span;
  let t1;
  let current;
  let mounted;
  let dispose;
  let if_block = (ctx[6] || ctx[13].labelText) && create_if_block$8(ctx);
  let div_levels = [ctx[12]];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      input = element("input");
      t0 = space();
      label = element("label");
      span = element("span");
      t1 = space();
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      input = claim_element(div_nodes, "INPUT", { type: true, id: true, name: true });
      t0 = claim_space(div_nodes);
      label = claim_element(div_nodes, "LABEL", { for: true });
      var label_nodes = children(label);
      span = claim_element(label_nodes, "SPAN", {});
      children(span).forEach(detach);
      t1 = claim_space(label_nodes);
      if (if_block)
        if_block.l(label_nodes);
      label_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(input, "type", "radio");
      attr(input, "id", ctx[8]);
      attr(input, "name", ctx[9]);
      input.checked = ctx[0];
      input.disabled = ctx[3];
      input.required = ctx[4];
      input.value = ctx[2];
      toggle_class(input, "bx--radio-button", true);
      toggle_class(span, "bx--radio-button__appearance", true);
      attr(label, "for", ctx[8]);
      toggle_class(label, "bx--radio-button__label", true);
      set_attributes(div, div_data);
      toggle_class(div, "bx--radio-button-wrapper", true);
      toggle_class(div, "bx--radio-button-wrapper--label-left", ctx[5] === "left");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, input);
      ctx[18](input);
      append_hydration(div, t0);
      append_hydration(div, label);
      append_hydration(label, span);
      append_hydration(label, t1);
      if (if_block)
        if_block.m(label, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(input, "change", ctx[17]),
          listen(input, "change", ctx[19])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & 256) {
        attr(input, "id", ctx2[8]);
      }
      if (!current || dirty & 512) {
        attr(input, "name", ctx2[9]);
      }
      if (!current || dirty & 1) {
        input.checked = ctx2[0];
      }
      if (!current || dirty & 8) {
        input.disabled = ctx2[3];
      }
      if (!current || dirty & 16) {
        input.required = ctx2[4];
      }
      if (!current || dirty & 4) {
        input.value = ctx2[2];
      }
      if (ctx2[6] || ctx2[13].labelText) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 8256) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$8(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(label, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (!current || dirty & 256) {
        attr(label, "for", ctx2[8]);
      }
      set_attributes(div, div_data = get_spread_update(div_levels, [dirty & 4096 && ctx2[12]]));
      toggle_class(div, "bx--radio-button-wrapper", true);
      toggle_class(div, "bx--radio-button-wrapper--label-left", ctx2[5] === "left");
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
        detach(div);
      ctx[18](null);
      if (if_block)
        if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$h($$self, $$props, $$invalidate) {
  const omit_props_names = [
    "value",
    "checked",
    "disabled",
    "required",
    "labelPosition",
    "labelText",
    "hideLabel",
    "id",
    "name",
    "ref"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $selectedValue;
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  let { value = "" } = $$props;
  let { checked = false } = $$props;
  let { disabled = false } = $$props;
  let { required = false } = $$props;
  let { labelPosition = "right" } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = "" } = $$props;
  let { ref = null } = $$props;
  const ctx = getContext("RadioButtonGroup");
  const selectedValue = ctx ? ctx.selectedValue : writable(checked ? value : void 0);
  component_subscribe($$self, selectedValue, (value2) => $$invalidate(14, $selectedValue = value2));
  if (ctx) {
    ctx.add({ id, checked, disabled, value });
  }
  function change_handler(event) {
    bubble.call(this, $$self, event);
  }
  function input_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      ref = $$value;
      $$invalidate(1, ref);
    });
  }
  const change_handler_1 = () => {
    if (ctx) {
      ctx.update(value);
    }
  };
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(12, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("value" in $$new_props)
      $$invalidate(2, value = $$new_props.value);
    if ("checked" in $$new_props)
      $$invalidate(0, checked = $$new_props.checked);
    if ("disabled" in $$new_props)
      $$invalidate(3, disabled = $$new_props.disabled);
    if ("required" in $$new_props)
      $$invalidate(4, required = $$new_props.required);
    if ("labelPosition" in $$new_props)
      $$invalidate(5, labelPosition = $$new_props.labelPosition);
    if ("labelText" in $$new_props)
      $$invalidate(6, labelText = $$new_props.labelText);
    if ("hideLabel" in $$new_props)
      $$invalidate(7, hideLabel = $$new_props.hideLabel);
    if ("id" in $$new_props)
      $$invalidate(8, id = $$new_props.id);
    if ("name" in $$new_props)
      $$invalidate(9, name = $$new_props.name);
    if ("ref" in $$new_props)
      $$invalidate(1, ref = $$new_props.ref);
    if ("$$scope" in $$new_props)
      $$invalidate(15, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 16388) {
      $$invalidate(0, checked = $selectedValue === value);
    }
  };
  return [
    checked,
    ref,
    value,
    disabled,
    required,
    labelPosition,
    labelText,
    hideLabel,
    id,
    name,
    ctx,
    selectedValue,
    $$restProps,
    $$slots,
    $selectedValue,
    $$scope,
    slots,
    change_handler,
    input_binding,
    change_handler_1
  ];
}
class RadioButton extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$h, create_fragment$h, safe_not_equal, {
      value: 2,
      checked: 0,
      disabled: 3,
      required: 4,
      labelPosition: 5,
      labelText: 6,
      hideLabel: 7,
      id: 8,
      name: 9,
      ref: 1
    });
  }
}
function create_else_block$3(ctx) {
  let table;
  let current;
  const default_slot_template = ctx[7].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[6], null);
  let table_levels = [ctx[5]];
  let table_data = {};
  for (let i = 0; i < table_levels.length; i += 1) {
    table_data = assign(table_data, table_levels[i]);
  }
  return {
    c() {
      table = element("table");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      table = claim_element(nodes, "TABLE", {});
      var table_nodes = children(table);
      if (default_slot)
        default_slot.l(table_nodes);
      table_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(table, table_data);
      toggle_class(table, "bx--data-table", true);
      toggle_class(table, "bx--data-table--compact", ctx[0] === "compact");
      toggle_class(table, "bx--data-table--short", ctx[0] === "short");
      toggle_class(table, "bx--data-table--tall", ctx[0] === "tall");
      toggle_class(table, "bx--data-table--md", ctx[0] === "medium");
      toggle_class(table, "bx--data-table--sort", ctx[3]);
      toggle_class(table, "bx--data-table--zebra", ctx[1]);
      toggle_class(table, "bx--data-table--static", ctx[2]);
      toggle_class(table, "bx--data-table--sticky-header", ctx[4]);
    },
    m(target, anchor) {
      insert_hydration(target, table, anchor);
      if (default_slot) {
        default_slot.m(table, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 64)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[6], !current ? get_all_dirty_from_scope(ctx2[6]) : get_slot_changes(default_slot_template, ctx2[6], dirty, null), null);
        }
      }
      set_attributes(table, table_data = get_spread_update(table_levels, [dirty & 32 && ctx2[5]]));
      toggle_class(table, "bx--data-table", true);
      toggle_class(table, "bx--data-table--compact", ctx2[0] === "compact");
      toggle_class(table, "bx--data-table--short", ctx2[0] === "short");
      toggle_class(table, "bx--data-table--tall", ctx2[0] === "tall");
      toggle_class(table, "bx--data-table--md", ctx2[0] === "medium");
      toggle_class(table, "bx--data-table--sort", ctx2[3]);
      toggle_class(table, "bx--data-table--zebra", ctx2[1]);
      toggle_class(table, "bx--data-table--static", ctx2[2]);
      toggle_class(table, "bx--data-table--sticky-header", ctx2[4]);
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
        detach(table);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_if_block$7(ctx) {
  let section;
  let table;
  let current;
  const default_slot_template = ctx[7].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[6], null);
  let section_levels = [ctx[5]];
  let section_data = {};
  for (let i = 0; i < section_levels.length; i += 1) {
    section_data = assign(section_data, section_levels[i]);
  }
  return {
    c() {
      section = element("section");
      table = element("table");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      section = claim_element(nodes, "SECTION", {});
      var section_nodes = children(section);
      table = claim_element(section_nodes, "TABLE", {});
      var table_nodes = children(table);
      if (default_slot)
        default_slot.l(table_nodes);
      table_nodes.forEach(detach);
      section_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(table, "bx--data-table", true);
      toggle_class(table, "bx--data-table--compact", ctx[0] === "compact");
      toggle_class(table, "bx--data-table--short", ctx[0] === "short");
      toggle_class(table, "bx--data-table--tall", ctx[0] === "tall");
      toggle_class(table, "bx--data-table--md", ctx[0] === "medium");
      toggle_class(table, "bx--data-table--sort", ctx[3]);
      toggle_class(table, "bx--data-table--zebra", ctx[1]);
      toggle_class(table, "bx--data-table--static", ctx[2]);
      toggle_class(table, "bx--data-table--sticky-header", ctx[4]);
      set_attributes(section, section_data);
      toggle_class(section, "bx--data-table_inner-container", true);
    },
    m(target, anchor) {
      insert_hydration(target, section, anchor);
      append_hydration(section, table);
      if (default_slot) {
        default_slot.m(table, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 64)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[6], !current ? get_all_dirty_from_scope(ctx2[6]) : get_slot_changes(default_slot_template, ctx2[6], dirty, null), null);
        }
      }
      if (dirty & 1) {
        toggle_class(table, "bx--data-table--compact", ctx2[0] === "compact");
      }
      if (dirty & 1) {
        toggle_class(table, "bx--data-table--short", ctx2[0] === "short");
      }
      if (dirty & 1) {
        toggle_class(table, "bx--data-table--tall", ctx2[0] === "tall");
      }
      if (dirty & 1) {
        toggle_class(table, "bx--data-table--md", ctx2[0] === "medium");
      }
      if (dirty & 8) {
        toggle_class(table, "bx--data-table--sort", ctx2[3]);
      }
      if (dirty & 2) {
        toggle_class(table, "bx--data-table--zebra", ctx2[1]);
      }
      if (dirty & 4) {
        toggle_class(table, "bx--data-table--static", ctx2[2]);
      }
      if (dirty & 16) {
        toggle_class(table, "bx--data-table--sticky-header", ctx2[4]);
      }
      set_attributes(section, section_data = get_spread_update(section_levels, [dirty & 32 && ctx2[5]]));
      toggle_class(section, "bx--data-table_inner-container", true);
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
        detach(section);
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
    if (ctx2[4])
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
function instance$g($$self, $$props, $$invalidate) {
  const omit_props_names = ["size", "zebra", "useStaticWidth", "sortable", "stickyHeader"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { size = void 0 } = $$props;
  let { zebra = false } = $$props;
  let { useStaticWidth = false } = $$props;
  let { sortable = false } = $$props;
  let { stickyHeader = false } = $$props;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("size" in $$new_props)
      $$invalidate(0, size = $$new_props.size);
    if ("zebra" in $$new_props)
      $$invalidate(1, zebra = $$new_props.zebra);
    if ("useStaticWidth" in $$new_props)
      $$invalidate(2, useStaticWidth = $$new_props.useStaticWidth);
    if ("sortable" in $$new_props)
      $$invalidate(3, sortable = $$new_props.sortable);
    if ("stickyHeader" in $$new_props)
      $$invalidate(4, stickyHeader = $$new_props.stickyHeader);
    if ("$$scope" in $$new_props)
      $$invalidate(6, $$scope = $$new_props.$$scope);
  };
  return [
    size,
    zebra,
    useStaticWidth,
    sortable,
    stickyHeader,
    $$restProps,
    $$scope,
    slots
  ];
}
class Table extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$g, create_fragment$g, safe_not_equal, {
      size: 0,
      zebra: 1,
      useStaticWidth: 2,
      sortable: 3,
      stickyHeader: 4
    });
  }
}
function create_fragment$f(ctx) {
  let tbody;
  let current;
  const default_slot_template = ctx[2].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[1], null);
  let tbody_levels = [{ "aria-live": "polite" }, ctx[0]];
  let tbody_data = {};
  for (let i = 0; i < tbody_levels.length; i += 1) {
    tbody_data = assign(tbody_data, tbody_levels[i]);
  }
  return {
    c() {
      tbody = element("tbody");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      tbody = claim_element(nodes, "TBODY", { "aria-live": true });
      var tbody_nodes = children(tbody);
      if (default_slot)
        default_slot.l(tbody_nodes);
      tbody_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(tbody, tbody_data);
    },
    m(target, anchor) {
      insert_hydration(target, tbody, anchor);
      if (default_slot) {
        default_slot.m(tbody, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 2)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[1], !current ? get_all_dirty_from_scope(ctx2[1]) : get_slot_changes(default_slot_template, ctx2[1], dirty, null), null);
        }
      }
      set_attributes(tbody, tbody_data = get_spread_update(tbody_levels, [
        { "aria-live": "polite" },
        dirty & 1 && ctx2[0]
      ]));
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
        detach(tbody);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$f($$self, $$props, $$invalidate) {
  const omit_props_names = [];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(0, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("$$scope" in $$new_props)
      $$invalidate(1, $$scope = $$new_props.$$scope);
  };
  return [$$restProps, $$scope, slots];
}
class TableBody extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$f, create_fragment$f, safe_not_equal, {});
  }
}
function create_fragment$e(ctx) {
  let td;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[2].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[1], null);
  let td_levels = [ctx[0]];
  let td_data = {};
  for (let i = 0; i < td_levels.length; i += 1) {
    td_data = assign(td_data, td_levels[i]);
  }
  return {
    c() {
      td = element("td");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", {});
      var td_nodes = children(td);
      if (default_slot)
        default_slot.l(td_nodes);
      td_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(td, td_data);
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
      if (default_slot) {
        default_slot.m(td, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(td, "click", ctx[3]),
          listen(td, "mouseover", ctx[4]),
          listen(td, "mouseenter", ctx[5]),
          listen(td, "mouseleave", ctx[6])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 2)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[1], !current ? get_all_dirty_from_scope(ctx2[1]) : get_slot_changes(default_slot_template, ctx2[1], dirty, null), null);
        }
      }
      set_attributes(td, td_data = get_spread_update(td_levels, [dirty & 1 && ctx2[0]]));
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
        detach(td);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$e($$self, $$props, $$invalidate) {
  const omit_props_names = [];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(0, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("$$scope" in $$new_props)
      $$invalidate(1, $$scope = $$new_props.$$scope);
  };
  return [
    $$restProps,
    $$scope,
    slots,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler
  ];
}
class TableCell extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$e, create_fragment$e, safe_not_equal, {});
  }
}
function create_if_block$6(ctx) {
  let div;
  let h4;
  let t0;
  let t1;
  let p;
  let t2;
  return {
    c() {
      div = element("div");
      h4 = element("h4");
      t0 = text(ctx[0]);
      t1 = space();
      p = element("p");
      t2 = text(ctx[1]);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      h4 = claim_element(div_nodes, "H4", {});
      var h4_nodes = children(h4);
      t0 = claim_text(h4_nodes, ctx[0]);
      h4_nodes.forEach(detach);
      t1 = claim_space(div_nodes);
      p = claim_element(div_nodes, "P", {});
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, ctx[1]);
      p_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(h4, "bx--data-table-header__title", true);
      toggle_class(p, "bx--data-table-header__description", true);
      toggle_class(div, "bx--data-table-header", true);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, h4);
      append_hydration(h4, t0);
      append_hydration(div, t1);
      append_hydration(div, p);
      append_hydration(p, t2);
    },
    p(ctx2, dirty) {
      if (dirty & 1)
        set_data(t0, ctx2[0]);
      if (dirty & 2)
        set_data(t2, ctx2[1]);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment$d(ctx) {
  let div;
  let t;
  let current;
  let if_block = ctx[0] && create_if_block$6(ctx);
  const default_slot_template = ctx[6].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[5], null);
  let div_levels = [ctx[4]];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      if (if_block)
        if_block.c();
      t = space();
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      if (if_block)
        if_block.l(div_nodes);
      t = claim_space(div_nodes);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(div, div_data);
      toggle_class(div, "bx--data-table-container", true);
      toggle_class(div, "bx--data-table-container--static", ctx[3]);
      toggle_class(div, "bx--data-table--max-width", ctx[2]);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
      append_hydration(div, t);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$6(ctx2);
          if_block.c();
          if_block.m(div, t);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 32)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[5], !current ? get_all_dirty_from_scope(ctx2[5]) : get_slot_changes(default_slot_template, ctx2[5], dirty, null), null);
        }
      }
      set_attributes(div, div_data = get_spread_update(div_levels, [dirty & 16 && ctx2[4]]));
      toggle_class(div, "bx--data-table-container", true);
      toggle_class(div, "bx--data-table-container--static", ctx2[3]);
      toggle_class(div, "bx--data-table--max-width", ctx2[2]);
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
      if (if_block)
        if_block.d();
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$d($$self, $$props, $$invalidate) {
  const omit_props_names = ["title", "description", "stickyHeader", "useStaticWidth"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { stickyHeader = false } = $$props;
  let { useStaticWidth = false } = $$props;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("title" in $$new_props)
      $$invalidate(0, title = $$new_props.title);
    if ("description" in $$new_props)
      $$invalidate(1, description = $$new_props.description);
    if ("stickyHeader" in $$new_props)
      $$invalidate(2, stickyHeader = $$new_props.stickyHeader);
    if ("useStaticWidth" in $$new_props)
      $$invalidate(3, useStaticWidth = $$new_props.useStaticWidth);
    if ("$$scope" in $$new_props)
      $$invalidate(5, $$scope = $$new_props.$$scope);
  };
  return [title, description, stickyHeader, useStaticWidth, $$restProps, $$scope, slots];
}
class TableContainer extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$d, create_fragment$d, safe_not_equal, {
      title: 0,
      description: 1,
      stickyHeader: 2,
      useStaticWidth: 3
    });
  }
}
function create_fragment$c(ctx) {
  let thead;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[2].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[1], null);
  let thead_levels = [ctx[0]];
  let thead_data = {};
  for (let i = 0; i < thead_levels.length; i += 1) {
    thead_data = assign(thead_data, thead_levels[i]);
  }
  return {
    c() {
      thead = element("thead");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      thead = claim_element(nodes, "THEAD", {});
      var thead_nodes = children(thead);
      if (default_slot)
        default_slot.l(thead_nodes);
      thead_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(thead, thead_data);
    },
    m(target, anchor) {
      insert_hydration(target, thead, anchor);
      if (default_slot) {
        default_slot.m(thead, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(thead, "click", ctx[3]),
          listen(thead, "mouseover", ctx[4]),
          listen(thead, "mouseenter", ctx[5]),
          listen(thead, "mouseleave", ctx[6])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 2)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[1], !current ? get_all_dirty_from_scope(ctx2[1]) : get_slot_changes(default_slot_template, ctx2[1], dirty, null), null);
        }
      }
      set_attributes(thead, thead_data = get_spread_update(thead_levels, [dirty & 1 && ctx2[0]]));
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
        detach(thead);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$c($$self, $$props, $$invalidate) {
  const omit_props_names = [];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(0, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("$$scope" in $$new_props)
      $$invalidate(1, $$scope = $$new_props.$$scope);
  };
  return [
    $$restProps,
    $$scope,
    slots,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler
  ];
}
class TableHead extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$c, create_fragment$c, safe_not_equal, {});
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
function create_fragment$b(ctx) {
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
      attr(path, "d", "M16 4L6 14 7.41 15.41 15 7.83 15 28 17 28 17 7.83 24.59 15.41 26 14 16 4z");
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
function instance$b($$self, $$props, $$invalidate) {
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
class ArrowUp extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$b, create_fragment$b, safe_not_equal, { size: 0, title: 1 });
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
function create_fragment$a(ctx) {
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
      attr(path, "d", "M27.6 20.6L24 24.2 24 4 22 4 22 24.2 18.4 20.6 17 22 23 28 29 22zM9 4L3 10 4.4 11.4 8 7.8 8 28 10 28 10 7.8 13.6 11.4 15 10z");
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
class ArrowsVertical extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$a, create_fragment$a, safe_not_equal, { size: 0, title: 1 });
  }
}
function create_else_block$2(ctx) {
  let th;
  let div;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[12].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[11], null);
  let th_levels = [{ scope: ctx[1] }, { id: ctx[2] }, ctx[9]];
  let th_data = {};
  for (let i = 0; i < th_levels.length; i += 1) {
    th_data = assign(th_data, th_levels[i]);
  }
  return {
    c() {
      th = element("th");
      div = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      th = claim_element(nodes, "TH", { scope: true, id: true });
      var th_nodes = children(th);
      div = claim_element(th_nodes, "DIV", {});
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      th_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(div, "bx--table-header-label", true);
      set_attributes(th, th_data);
    },
    m(target, anchor) {
      insert_hydration(target, th, anchor);
      append_hydration(th, div);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(th, "click", ctx[17]),
          listen(th, "mouseover", ctx[18]),
          listen(th, "mouseenter", ctx[19]),
          listen(th, "mouseleave", ctx[20])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 2048)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[11], !current ? get_all_dirty_from_scope(ctx2[11]) : get_slot_changes(default_slot_template, ctx2[11], dirty, null), null);
        }
      }
      set_attributes(th, th_data = get_spread_update(th_levels, [
        (!current || dirty & 2) && { scope: ctx2[1] },
        (!current || dirty & 4) && { id: ctx2[2] },
        dirty & 512 && ctx2[9]
      ]));
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
        detach(th);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block$3(ctx) {
  let th;
  let button;
  let div;
  let t0;
  let arrowup;
  let t1;
  let arrowsvertical;
  let th_aria_sort_value;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[12].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[11], null);
  arrowup = new ArrowUp({
    props: {
      size: 20,
      "aria-label": ctx[4],
      class: "bx--table-sort__icon"
    }
  });
  arrowsvertical = new ArrowsVertical({
    props: {
      size: 20,
      "aria-label": ctx[4],
      class: "bx--table-sort__icon-unsorted"
    }
  });
  let th_levels = [
    {
      "aria-sort": th_aria_sort_value = ctx[5] ? ctx[3].sortDirection : "none"
    },
    { scope: ctx[1] },
    { id: ctx[2] },
    ctx[9]
  ];
  let th_data = {};
  for (let i = 0; i < th_levels.length; i += 1) {
    th_data = assign(th_data, th_levels[i]);
  }
  return {
    c() {
      th = element("th");
      button = element("button");
      div = element("div");
      if (default_slot)
        default_slot.c();
      t0 = space();
      create_component(arrowup.$$.fragment);
      t1 = space();
      create_component(arrowsvertical.$$.fragment);
      this.h();
    },
    l(nodes) {
      th = claim_element(nodes, "TH", { "aria-sort": true, scope: true, id: true });
      var th_nodes = children(th);
      button = claim_element(th_nodes, "BUTTON", {});
      var button_nodes = children(button);
      div = claim_element(button_nodes, "DIV", {});
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      t0 = claim_space(button_nodes);
      claim_component(arrowup.$$.fragment, button_nodes);
      t1 = claim_space(button_nodes);
      claim_component(arrowsvertical.$$.fragment, button_nodes);
      button_nodes.forEach(detach);
      th_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(div, "bx--table-header-label", true);
      toggle_class(button, "bx--table-sort", true);
      toggle_class(button, "bx--table-sort--active", ctx[5]);
      toggle_class(button, "bx--table-sort--ascending", ctx[5] && ctx[3].sortDirection === "descending");
      set_attributes(th, th_data);
    },
    m(target, anchor) {
      insert_hydration(target, th, anchor);
      append_hydration(th, button);
      append_hydration(button, div);
      if (default_slot) {
        default_slot.m(div, null);
      }
      append_hydration(button, t0);
      mount_component(arrowup, button, null);
      append_hydration(button, t1);
      mount_component(arrowsvertical, button, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(button, "click", ctx[16]),
          listen(th, "mouseover", ctx[13]),
          listen(th, "mouseenter", ctx[14]),
          listen(th, "mouseleave", ctx[15])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 2048)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[11], !current ? get_all_dirty_from_scope(ctx2[11]) : get_slot_changes(default_slot_template, ctx2[11], dirty, null), null);
        }
      }
      const arrowup_changes = {};
      if (dirty & 16)
        arrowup_changes["aria-label"] = ctx2[4];
      arrowup.$set(arrowup_changes);
      const arrowsvertical_changes = {};
      if (dirty & 16)
        arrowsvertical_changes["aria-label"] = ctx2[4];
      arrowsvertical.$set(arrowsvertical_changes);
      if (dirty & 32) {
        toggle_class(button, "bx--table-sort--active", ctx2[5]);
      }
      if (dirty & 40) {
        toggle_class(button, "bx--table-sort--ascending", ctx2[5] && ctx2[3].sortDirection === "descending");
      }
      set_attributes(th, th_data = get_spread_update(th_levels, [
        (!current || dirty & 40 && th_aria_sort_value !== (th_aria_sort_value = ctx2[5] ? ctx2[3].sortDirection : "none")) && { "aria-sort": th_aria_sort_value },
        (!current || dirty & 2) && { scope: ctx2[1] },
        (!current || dirty & 4) && { id: ctx2[2] },
        dirty & 512 && ctx2[9]
      ]));
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      transition_in(arrowup.$$.fragment, local);
      transition_in(arrowsvertical.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      transition_out(arrowup.$$.fragment, local);
      transition_out(arrowsvertical.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(th);
      if (default_slot)
        default_slot.d(detaching);
      destroy_component(arrowup);
      destroy_component(arrowsvertical);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$9(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$3, create_else_block$2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[6] && !ctx2[0])
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
function instance$9($$self, $$props, $$invalidate) {
  let active;
  let ariaLabel;
  const omit_props_names = ["disableSorting", "scope", "translateWithId", "id"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $sortHeader;
  let $tableSortable;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { disableSorting = false } = $$props;
  let { scope = "col" } = $$props;
  let { translateWithId = () => "" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  const { sortHeader, tableSortable } = getContext("DataTable");
  component_subscribe($$self, sortHeader, (value) => $$invalidate(3, $sortHeader = value));
  component_subscribe($$self, tableSortable, (value) => $$invalidate(6, $tableSortable = value));
  function mouseover_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function click_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(9, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("disableSorting" in $$new_props)
      $$invalidate(0, disableSorting = $$new_props.disableSorting);
    if ("scope" in $$new_props)
      $$invalidate(1, scope = $$new_props.scope);
    if ("translateWithId" in $$new_props)
      $$invalidate(10, translateWithId = $$new_props.translateWithId);
    if ("id" in $$new_props)
      $$invalidate(2, id = $$new_props.id);
    if ("$$scope" in $$new_props)
      $$invalidate(11, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 12) {
      $$invalidate(5, active = $sortHeader.id === id);
    }
    if ($$self.$$.dirty & 1024) {
      $$invalidate(4, ariaLabel = translateWithId());
    }
  };
  return [
    disableSorting,
    scope,
    id,
    $sortHeader,
    ariaLabel,
    active,
    $tableSortable,
    sortHeader,
    tableSortable,
    $$restProps,
    translateWithId,
    $$scope,
    slots,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler,
    click_handler,
    click_handler_1,
    mouseover_handler_1,
    mouseenter_handler_1,
    mouseleave_handler_1
  ];
}
class TableHeader extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$9, create_fragment$9, safe_not_equal, {
      disableSorting: 0,
      scope: 1,
      translateWithId: 10,
      id: 2
    });
  }
}
function create_fragment$8(ctx) {
  let tr;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[2].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[1], null);
  let tr_levels = [ctx[0]];
  let tr_data = {};
  for (let i = 0; i < tr_levels.length; i += 1) {
    tr_data = assign(tr_data, tr_levels[i]);
  }
  return {
    c() {
      tr = element("tr");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      tr = claim_element(nodes, "TR", {});
      var tr_nodes = children(tr);
      if (default_slot)
        default_slot.l(tr_nodes);
      tr_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(tr, tr_data);
    },
    m(target, anchor) {
      insert_hydration(target, tr, anchor);
      if (default_slot) {
        default_slot.m(tr, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(tr, "click", ctx[3]),
          listen(tr, "mouseover", ctx[4]),
          listen(tr, "mouseenter", ctx[5]),
          listen(tr, "mouseleave", ctx[6])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 2)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[1], !current ? get_all_dirty_from_scope(ctx2[1]) : get_slot_changes(default_slot_template, ctx2[1], dirty, null), null);
        }
      }
      set_attributes(tr, tr_data = get_spread_update(tr_levels, [dirty & 1 && ctx2[0]]));
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
        detach(tr);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$8($$self, $$props, $$invalidate) {
  const omit_props_names = [];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(0, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("$$scope" in $$new_props)
      $$invalidate(1, $$scope = $$new_props.$$scope);
  };
  return [
    $$restProps,
    $$scope,
    slots,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler
  ];
}
class TableRow extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$8, create_fragment$8, safe_not_equal, {});
  }
}
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[66] = list[i];
  child_ctx[68] = i;
  return child_ctx;
}
const get_expanded_row_slot_changes = (dirty) => ({
  row: dirty[0] & 50462720
});
const get_expanded_row_slot_context = (ctx) => ({ row: ctx[66] });
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[69] = list[i];
  child_ctx[71] = i;
  return child_ctx;
}
const get_cell_slot_changes_1 = (dirty) => ({
  row: dirty[0] & 50462720,
  cell: dirty[0] & 50462720,
  rowIndex: dirty[0] & 50462720,
  cellIndex: dirty[0] & 50462720
});
const get_cell_slot_context_1 = (ctx) => ({
  row: ctx[66],
  cell: ctx[69],
  rowIndex: ctx[68],
  cellIndex: ctx[71]
});
const get_cell_slot_changes = (dirty) => ({
  row: dirty[0] & 50462720,
  cell: dirty[0] & 50462720,
  rowIndex: dirty[0] & 50462720,
  cellIndex: dirty[0] & 50462720
});
const get_cell_slot_context = (ctx) => ({
  row: ctx[66],
  cell: ctx[69],
  rowIndex: ctx[68],
  cellIndex: ctx[71]
});
function get_each_context_2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[72] = list[i];
  child_ctx[68] = i;
  return child_ctx;
}
const get_cell_header_slot_changes = (dirty) => ({ header: dirty[0] & 16 });
const get_cell_header_slot_context = (ctx) => ({ header: ctx[72] });
const get_description_slot_changes = (dirty) => ({});
const get_description_slot_context = (ctx) => ({});
const get_title_slot_changes = (dirty) => ({});
const get_title_slot_context = (ctx) => ({});
function create_if_block_13(ctx) {
  let div;
  let t;
  let current;
  let if_block0 = (ctx[6] || ctx[36].title) && create_if_block_15(ctx);
  let if_block1 = (ctx[7] || ctx[36].description) && create_if_block_14(ctx);
  return {
    c() {
      div = element("div");
      if (if_block0)
        if_block0.c();
      t = space();
      if (if_block1)
        if_block1.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      if (if_block0)
        if_block0.l(div_nodes);
      t = claim_space(div_nodes);
      if (if_block1)
        if_block1.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(div, "bx--data-table-header", true);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (if_block0)
        if_block0.m(div, null);
      append_hydration(div, t);
      if (if_block1)
        if_block1.m(div, null);
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[6] || ctx2[36].title) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty[0] & 64 | dirty[1] & 32) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_15(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div, t);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (ctx2[7] || ctx2[36].description) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty[0] & 128 | dirty[1] & 32) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_14(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
    }
  };
}
function create_if_block_15(ctx) {
  let h4;
  let current;
  const title_slot_template = ctx[46].title;
  const title_slot = create_slot(title_slot_template, ctx, ctx[60], get_title_slot_context);
  const title_slot_or_fallback = title_slot || fallback_block_4(ctx);
  return {
    c() {
      h4 = element("h4");
      if (title_slot_or_fallback)
        title_slot_or_fallback.c();
      this.h();
    },
    l(nodes) {
      h4 = claim_element(nodes, "H4", {});
      var h4_nodes = children(h4);
      if (title_slot_or_fallback)
        title_slot_or_fallback.l(h4_nodes);
      h4_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(h4, "bx--data-table-header__title", true);
    },
    m(target, anchor) {
      insert_hydration(target, h4, anchor);
      if (title_slot_or_fallback) {
        title_slot_or_fallback.m(h4, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (title_slot) {
        if (title_slot.p && (!current || dirty[1] & 536870912)) {
          update_slot_base(title_slot, title_slot_template, ctx2, ctx2[60], !current ? get_all_dirty_from_scope(ctx2[60]) : get_slot_changes(title_slot_template, ctx2[60], dirty, get_title_slot_changes), get_title_slot_context);
        }
      } else {
        if (title_slot_or_fallback && title_slot_or_fallback.p && (!current || dirty[0] & 64)) {
          title_slot_or_fallback.p(ctx2, !current ? [-1, -1, -1] : dirty);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(title_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(title_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(h4);
      if (title_slot_or_fallback)
        title_slot_or_fallback.d(detaching);
    }
  };
}
function fallback_block_4(ctx) {
  let t;
  return {
    c() {
      t = text(ctx[6]);
    },
    l(nodes) {
      t = claim_text(nodes, ctx[6]);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 64)
        set_data(t, ctx2[6]);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_14(ctx) {
  let p;
  let current;
  const description_slot_template = ctx[46].description;
  const description_slot = create_slot(description_slot_template, ctx, ctx[60], get_description_slot_context);
  const description_slot_or_fallback = description_slot || fallback_block_3(ctx);
  return {
    c() {
      p = element("p");
      if (description_slot_or_fallback)
        description_slot_or_fallback.c();
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      if (description_slot_or_fallback)
        description_slot_or_fallback.l(p_nodes);
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(p, "bx--data-table-header__description", true);
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      if (description_slot_or_fallback) {
        description_slot_or_fallback.m(p, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (description_slot) {
        if (description_slot.p && (!current || dirty[1] & 536870912)) {
          update_slot_base(description_slot, description_slot_template, ctx2, ctx2[60], !current ? get_all_dirty_from_scope(ctx2[60]) : get_slot_changes(description_slot_template, ctx2[60], dirty, get_description_slot_changes), get_description_slot_context);
        }
      } else {
        if (description_slot_or_fallback && description_slot_or_fallback.p && (!current || dirty[0] & 128)) {
          description_slot_or_fallback.p(ctx2, !current ? [-1, -1, -1] : dirty);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(description_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(description_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(p);
      if (description_slot_or_fallback)
        description_slot_or_fallback.d(detaching);
    }
  };
}
function fallback_block_3(ctx) {
  let t;
  return {
    c() {
      t = text(ctx[7]);
    },
    l(nodes) {
      t = claim_text(nodes, ctx[7]);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 128)
        set_data(t, ctx2[7]);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block_11(ctx) {
  let th;
  let th_data_previous_value_value;
  let current;
  let if_block = ctx[10] && create_if_block_12(ctx);
  return {
    c() {
      th = element("th");
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      th = claim_element(nodes, "TH", { scope: true, "data-previous-value": true });
      var th_nodes = children(th);
      if (if_block)
        if_block.l(th_nodes);
      th_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(th, "scope", "col");
      attr(th, "data-previous-value", th_data_previous_value_value = ctx[21] ? "collapsed" : void 0);
      toggle_class(th, "bx--table-expand", true);
    },
    m(target, anchor) {
      insert_hydration(target, th, anchor);
      if (if_block)
        if_block.m(th, null);
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[10]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty[0] & 1024) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_12(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(th, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (!current || dirty[0] & 2097152 && th_data_previous_value_value !== (th_data_previous_value_value = ctx2[21] ? "collapsed" : void 0)) {
        attr(th, "data-previous-value", th_data_previous_value_value);
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
        detach(th);
      if (if_block)
        if_block.d();
    }
  };
}
function create_if_block_12(ctx) {
  let button;
  let chevronright;
  let current;
  let mounted;
  let dispose;
  chevronright = new ChevronRight({
    props: { class: "bx--table-expand__svg" }
  });
  return {
    c() {
      button = element("button");
      create_component(chevronright.$$.fragment);
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { type: true });
      var button_nodes = children(button);
      claim_component(chevronright.$$.fragment, button_nodes);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "type", "button");
      toggle_class(button, "bx--table-expand__button", true);
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      mount_component(chevronright, button, null);
      current = true;
      if (!mounted) {
        dispose = listen(button, "click", ctx[47]);
        mounted = true;
      }
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(chevronright.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(chevronright.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      destroy_component(chevronright);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_10(ctx) {
  let th;
  return {
    c() {
      th = element("th");
      this.h();
    },
    l(nodes) {
      th = claim_element(nodes, "TH", { scope: true });
      children(th).forEach(detach);
      this.h();
    },
    h() {
      attr(th, "scope", "col");
    },
    m(target, anchor) {
      insert_hydration(target, th, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(th);
    }
  };
}
function create_if_block_9(ctx) {
  let th;
  let inlinecheckbox;
  let updating_ref;
  let current;
  function inlinecheckbox_ref_binding(value) {
    ctx[48](value);
  }
  let inlinecheckbox_props = {
    "aria-label": "Select all rows",
    checked: ctx[27],
    indeterminate: ctx[26]
  };
  if (ctx[23] !== void 0) {
    inlinecheckbox_props.ref = ctx[23];
  }
  inlinecheckbox = new InlineCheckbox({ props: inlinecheckbox_props });
  binding_callbacks.push(() => bind(inlinecheckbox, "ref", inlinecheckbox_ref_binding));
  inlinecheckbox.$on("change", ctx[49]);
  return {
    c() {
      th = element("th");
      create_component(inlinecheckbox.$$.fragment);
      this.h();
    },
    l(nodes) {
      th = claim_element(nodes, "TH", { scope: true });
      var th_nodes = children(th);
      claim_component(inlinecheckbox.$$.fragment, th_nodes);
      th_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(th, "scope", "col");
      toggle_class(th, "bx--table-column-checkbox", true);
    },
    m(target, anchor) {
      insert_hydration(target, th, anchor);
      mount_component(inlinecheckbox, th, null);
      current = true;
    },
    p(ctx2, dirty) {
      const inlinecheckbox_changes = {};
      if (dirty[0] & 134217728)
        inlinecheckbox_changes.checked = ctx2[27];
      if (dirty[0] & 67108864)
        inlinecheckbox_changes.indeterminate = ctx2[26];
      if (!updating_ref && dirty[0] & 8388608) {
        updating_ref = true;
        inlinecheckbox_changes.ref = ctx2[23];
        add_flush_callback(() => updating_ref = false);
      }
      inlinecheckbox.$set(inlinecheckbox_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(inlinecheckbox.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(inlinecheckbox.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(th);
      destroy_component(inlinecheckbox);
    }
  };
}
function create_else_block_2(ctx) {
  let tableheader;
  let current;
  function click_handler_1() {
    return ctx[50](ctx[72]);
  }
  tableheader = new TableHeader({
    props: {
      id: ctx[72].key,
      disableSorting: ctx[72].sort === false,
      $$slots: { default: [create_default_slot_9] },
      $$scope: { ctx }
    }
  });
  tableheader.$on("click", click_handler_1);
  return {
    c() {
      create_component(tableheader.$$.fragment);
    },
    l(nodes) {
      claim_component(tableheader.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(tableheader, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const tableheader_changes = {};
      if (dirty[0] & 16)
        tableheader_changes.id = ctx[72].key;
      if (dirty[0] & 16)
        tableheader_changes.disableSorting = ctx[72].sort === false;
      if (dirty[0] & 16 | dirty[1] & 536870912) {
        tableheader_changes.$$scope = { dirty, ctx };
      }
      tableheader.$set(tableheader_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(tableheader.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tableheader.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(tableheader, detaching);
    }
  };
}
function create_if_block_8(ctx) {
  let th;
  return {
    c() {
      th = element("th");
      this.h();
    },
    l(nodes) {
      th = claim_element(nodes, "TH", { scope: true });
      children(th).forEach(detach);
      this.h();
    },
    h() {
      attr(th, "scope", "col");
    },
    m(target, anchor) {
      insert_hydration(target, th, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(th);
    }
  };
}
function fallback_block_2(ctx) {
  let t_value = ctx[72].value + "";
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
      if (dirty[0] & 16 && t_value !== (t_value = ctx2[72].value + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_9(ctx) {
  let t;
  let current;
  const cell_header_slot_template = ctx[46]["cell-header"];
  const cell_header_slot = create_slot(cell_header_slot_template, ctx, ctx[60], get_cell_header_slot_context);
  const cell_header_slot_or_fallback = cell_header_slot || fallback_block_2(ctx);
  return {
    c() {
      if (cell_header_slot_or_fallback)
        cell_header_slot_or_fallback.c();
      t = space();
    },
    l(nodes) {
      if (cell_header_slot_or_fallback)
        cell_header_slot_or_fallback.l(nodes);
      t = claim_space(nodes);
    },
    m(target, anchor) {
      if (cell_header_slot_or_fallback) {
        cell_header_slot_or_fallback.m(target, anchor);
      }
      insert_hydration(target, t, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (cell_header_slot) {
        if (cell_header_slot.p && (!current || dirty[0] & 16 | dirty[1] & 536870912)) {
          update_slot_base(cell_header_slot, cell_header_slot_template, ctx2, ctx2[60], !current ? get_all_dirty_from_scope(ctx2[60]) : get_slot_changes(cell_header_slot_template, ctx2[60], dirty, get_cell_header_slot_changes), get_cell_header_slot_context);
        }
      } else {
        if (cell_header_slot_or_fallback && cell_header_slot_or_fallback.p && (!current || dirty[0] & 16)) {
          cell_header_slot_or_fallback.p(ctx2, !current ? [-1, -1, -1] : dirty);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(cell_header_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(cell_header_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (cell_header_slot_or_fallback)
        cell_header_slot_or_fallback.d(detaching);
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block_2(key_1, ctx) {
  let first;
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_8, create_else_block_2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[72].empty)
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    key: key_1,
    first: null,
    c() {
      first = empty();
      if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l(nodes) {
      first = empty();
      if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h() {
      this.first = first;
    },
    m(target, anchor) {
      insert_hydration(target, first, anchor);
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        } else {
          if_block.p(ctx, dirty);
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
      if (detaching)
        detach(first);
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_default_slot_8(ctx) {
  let t0;
  let t1;
  let t2;
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let each_1_anchor;
  let current;
  let if_block0 = ctx[2] && create_if_block_11(ctx);
  let if_block1 = ctx[3] && !ctx[13] && create_if_block_10();
  let if_block2 = ctx[13] && !ctx[12] && create_if_block_9(ctx);
  let each_value_2 = ctx[4];
  const get_key = (ctx2) => ctx2[72].key;
  for (let i = 0; i < each_value_2.length; i += 1) {
    let child_ctx = get_each_context_2(ctx, each_value_2, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block_2(key, child_ctx));
  }
  return {
    c() {
      if (if_block0)
        if_block0.c();
      t0 = space();
      if (if_block1)
        if_block1.c();
      t1 = space();
      if (if_block2)
        if_block2.c();
      t2 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      if (if_block0)
        if_block0.l(nodes);
      t0 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      t1 = claim_space(nodes);
      if (if_block2)
        if_block2.l(nodes);
      t2 = claim_space(nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration(target, t0, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, t1, anchor);
      if (if_block2)
        if_block2.m(target, anchor);
      insert_hydration(target, t2, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[2]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty[0] & 4) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_11(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t0.parentNode, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (ctx2[3] && !ctx2[13]) {
        if (if_block1)
          ;
        else {
          if_block1 = create_if_block_10();
          if_block1.c();
          if_block1.m(t1.parentNode, t1);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (ctx2[13] && !ctx2[12]) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty[0] & 12288) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block_9(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(t2.parentNode, t2);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
      if (dirty[0] & 1611661328 | dirty[1] & 536870915) {
        each_value_2 = ctx2[4];
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value_2, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block_2, each_1_anchor, get_each_context_2);
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block2);
      for (let i = 0; i < each_value_2.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block2);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(t0);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(t1);
      if (if_block2)
        if_block2.d(detaching);
      if (detaching)
        detach(t2);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d(detaching);
      }
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_default_slot_7(ctx) {
  let tablerow;
  let current;
  tablerow = new TableRow({
    props: {
      $$slots: { default: [create_default_slot_8] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(tablerow.$$.fragment);
    },
    l(nodes) {
      claim_component(tablerow.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(tablerow, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const tablerow_changes = {};
      if (dirty[0] & 750531615 | dirty[1] & 536870912) {
        tablerow_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tablerow.$set(tablerow_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(tablerow.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tablerow.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(tablerow, detaching);
    }
  };
}
function create_if_block_6(ctx) {
  let tablecell;
  let current;
  tablecell = new TableCell({
    props: {
      class: "bx--table-expand",
      headers: "expand",
      "data-previous-value": !ctx[11].includes(ctx[66].id) && ctx[28][ctx[66].id] ? "collapsed" : void 0,
      $$slots: { default: [create_default_slot_6] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(tablecell.$$.fragment);
    },
    l(nodes) {
      claim_component(tablecell.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(tablecell, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const tablecell_changes = {};
      if (dirty[0] & 318900224)
        tablecell_changes["data-previous-value"] = !ctx2[11].includes(ctx2[66].id) && ctx2[28][ctx2[66].id] ? "collapsed" : void 0;
      if (dirty[0] & 318900225 | dirty[1] & 536870912) {
        tablecell_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tablecell.$set(tablecell_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(tablecell.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tablecell.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(tablecell, detaching);
    }
  };
}
function create_if_block_7(ctx) {
  let button;
  let chevronright;
  let button_aria_label_value;
  let current;
  let mounted;
  let dispose;
  chevronright = new ChevronRight({
    props: { class: "bx--table-expand__svg" }
  });
  function click_handler_2() {
    return ctx[51](ctx[66]);
  }
  return {
    c() {
      button = element("button");
      create_component(chevronright.$$.fragment);
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { type: true, "aria-label": true });
      var button_nodes = children(button);
      claim_component(chevronright.$$.fragment, button_nodes);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "type", "button");
      attr(button, "aria-label", button_aria_label_value = ctx[28][ctx[66].id] ? "Collapse current row" : "Expand current row");
      toggle_class(button, "bx--table-expand__button", true);
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      mount_component(chevronright, button, null);
      current = true;
      if (!mounted) {
        dispose = listen(button, "click", stop_propagation(click_handler_2));
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (!current || dirty[0] & 318898176 && button_aria_label_value !== (button_aria_label_value = ctx[28][ctx[66].id] ? "Collapse current row" : "Expand current row")) {
        attr(button, "aria-label", button_aria_label_value);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(chevronright.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(chevronright.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(button);
      destroy_component(chevronright);
      mounted = false;
      dispose();
    }
  };
}
function create_default_slot_6(ctx) {
  let show_if = !ctx[11].includes(ctx[66].id);
  let if_block_anchor;
  let current;
  let if_block = show_if && create_if_block_7(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty[0] & 50464768)
        show_if = !ctx2[11].includes(ctx2[66].id);
      if (show_if) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty[0] & 50464768) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_7(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_if_block_3(ctx) {
  let td;
  let show_if = !ctx[14].includes(ctx[66].id);
  let current;
  let if_block = show_if && create_if_block_4(ctx);
  return {
    c() {
      td = element("td");
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", {});
      var td_nodes = children(td);
      if (if_block)
        if_block.l(td_nodes);
      td_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(td, "bx--table-column-checkbox", true);
      toggle_class(td, "bx--table-column-radio", ctx[12]);
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
      if (if_block)
        if_block.m(td, null);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty[0] & 50479104)
        show_if = !ctx2[14].includes(ctx2[66].id);
      if (show_if) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty[0] & 50479104) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_4(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(td, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (dirty[0] & 4096) {
        toggle_class(td, "bx--table-column-radio", ctx2[12]);
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
        detach(td);
      if (if_block)
        if_block.d();
    }
  };
}
function create_if_block_4(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_5, create_else_block_1];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    if (ctx2[12])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_1(ctx);
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
      current_block_type_index = select_block_type_1(ctx2);
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
function create_else_block_1(ctx) {
  let inlinecheckbox;
  let current;
  function change_handler_2() {
    return ctx[53](ctx[66]);
  }
  inlinecheckbox = new InlineCheckbox({
    props: {
      name: "select-row-" + ctx[66].id,
      checked: ctx[1].includes(ctx[66].id)
    }
  });
  inlinecheckbox.$on("change", change_handler_2);
  return {
    c() {
      create_component(inlinecheckbox.$$.fragment);
    },
    l(nodes) {
      claim_component(inlinecheckbox.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(inlinecheckbox, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const inlinecheckbox_changes = {};
      if (dirty[0] & 50462720)
        inlinecheckbox_changes.name = "select-row-" + ctx[66].id;
      if (dirty[0] & 50462722)
        inlinecheckbox_changes.checked = ctx[1].includes(ctx[66].id);
      inlinecheckbox.$set(inlinecheckbox_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(inlinecheckbox.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(inlinecheckbox.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(inlinecheckbox, detaching);
    }
  };
}
function create_if_block_5(ctx) {
  let radiobutton;
  let current;
  function change_handler_1() {
    return ctx[52](ctx[66]);
  }
  radiobutton = new RadioButton({
    props: {
      name: "select-row-" + ctx[66].id,
      checked: ctx[1].includes(ctx[66].id)
    }
  });
  radiobutton.$on("change", change_handler_1);
  return {
    c() {
      create_component(radiobutton.$$.fragment);
    },
    l(nodes) {
      claim_component(radiobutton.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(radiobutton, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const radiobutton_changes = {};
      if (dirty[0] & 50462720)
        radiobutton_changes.name = "select-row-" + ctx[66].id;
      if (dirty[0] & 50462722)
        radiobutton_changes.checked = ctx[1].includes(ctx[66].id);
      radiobutton.$set(radiobutton_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(radiobutton.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(radiobutton.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(radiobutton, detaching);
    }
  };
}
function create_else_block$1(ctx) {
  let tablecell;
  let current;
  function click_handler_3() {
    return ctx[54](ctx[66], ctx[69]);
  }
  tablecell = new TableCell({
    props: {
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    }
  });
  tablecell.$on("click", click_handler_3);
  return {
    c() {
      create_component(tablecell.$$.fragment);
    },
    l(nodes) {
      claim_component(tablecell.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(tablecell, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const tablecell_changes = {};
      if (dirty[0] & 50462720 | dirty[1] & 536870912) {
        tablecell_changes.$$scope = { dirty, ctx };
      }
      tablecell.$set(tablecell_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(tablecell.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tablecell.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(tablecell, detaching);
    }
  };
}
function create_if_block_2(ctx) {
  let td;
  let t;
  let current;
  const cell_slot_template = ctx[46].cell;
  const cell_slot = create_slot(cell_slot_template, ctx, ctx[60], get_cell_slot_context);
  const cell_slot_or_fallback = cell_slot || fallback_block$1(ctx);
  return {
    c() {
      td = element("td");
      if (cell_slot_or_fallback)
        cell_slot_or_fallback.c();
      t = space();
      this.h();
    },
    l(nodes) {
      td = claim_element(nodes, "TD", {});
      var td_nodes = children(td);
      if (cell_slot_or_fallback)
        cell_slot_or_fallback.l(td_nodes);
      t = claim_space(td_nodes);
      td_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(td, "bx--table-column-menu", ctx[4][ctx[71]].columnMenu);
    },
    m(target, anchor) {
      insert_hydration(target, td, anchor);
      if (cell_slot_or_fallback) {
        cell_slot_or_fallback.m(td, null);
      }
      append_hydration(td, t);
      current = true;
    },
    p(ctx2, dirty) {
      if (cell_slot) {
        if (cell_slot.p && (!current || dirty[0] & 50462720 | dirty[1] & 536870912)) {
          update_slot_base(cell_slot, cell_slot_template, ctx2, ctx2[60], !current ? get_all_dirty_from_scope(ctx2[60]) : get_slot_changes(cell_slot_template, ctx2[60], dirty, get_cell_slot_changes), get_cell_slot_context);
        }
      } else {
        if (cell_slot_or_fallback && cell_slot_or_fallback.p && (!current || dirty[0] & 50462720)) {
          cell_slot_or_fallback.p(ctx2, !current ? [-1, -1, -1] : dirty);
        }
      }
      if (dirty[0] & 50462736) {
        toggle_class(td, "bx--table-column-menu", ctx2[4][ctx2[71]].columnMenu);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(cell_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(cell_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(td);
      if (cell_slot_or_fallback)
        cell_slot_or_fallback.d(detaching);
    }
  };
}
function fallback_block_1(ctx) {
  let t_value = (ctx[69].display ? ctx[69].display(ctx[69].value) : ctx[69].value) + "";
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
      if (dirty[0] & 50462720 && t_value !== (t_value = (ctx2[69].display ? ctx2[69].display(ctx2[69].value) : ctx2[69].value) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot_5(ctx) {
  let t;
  let current;
  const cell_slot_template = ctx[46].cell;
  const cell_slot = create_slot(cell_slot_template, ctx, ctx[60], get_cell_slot_context_1);
  const cell_slot_or_fallback = cell_slot || fallback_block_1(ctx);
  return {
    c() {
      if (cell_slot_or_fallback)
        cell_slot_or_fallback.c();
      t = space();
    },
    l(nodes) {
      if (cell_slot_or_fallback)
        cell_slot_or_fallback.l(nodes);
      t = claim_space(nodes);
    },
    m(target, anchor) {
      if (cell_slot_or_fallback) {
        cell_slot_or_fallback.m(target, anchor);
      }
      insert_hydration(target, t, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (cell_slot) {
        if (cell_slot.p && (!current || dirty[0] & 50462720 | dirty[1] & 536870912)) {
          update_slot_base(cell_slot, cell_slot_template, ctx2, ctx2[60], !current ? get_all_dirty_from_scope(ctx2[60]) : get_slot_changes(cell_slot_template, ctx2[60], dirty, get_cell_slot_changes_1), get_cell_slot_context_1);
        }
      } else {
        if (cell_slot_or_fallback && cell_slot_or_fallback.p && (!current || dirty[0] & 50462720)) {
          cell_slot_or_fallback.p(ctx2, !current ? [-1, -1, -1] : dirty);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(cell_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(cell_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (cell_slot_or_fallback)
        cell_slot_or_fallback.d(detaching);
      if (detaching)
        detach(t);
    }
  };
}
function fallback_block$1(ctx) {
  let t_value = (ctx[69].display ? ctx[69].display(ctx[69].value) : ctx[69].value) + "";
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
      if (dirty[0] & 50462720 && t_value !== (t_value = (ctx2[69].display ? ctx2[69].display(ctx2[69].value) : ctx2[69].value) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block_1(key_1, ctx) {
  let first;
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_2, create_else_block$1];
  const if_blocks = [];
  function select_block_type_2(ctx2, dirty) {
    if (ctx2[4][ctx2[71]].empty)
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_2(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    key: key_1,
    first: null,
    c() {
      first = empty();
      if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l(nodes) {
      first = empty();
      if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h() {
      this.first = first;
    },
    m(target, anchor) {
      insert_hydration(target, first, anchor);
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_2(ctx);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        } else {
          if_block.p(ctx, dirty);
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
      if (detaching)
        detach(first);
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_default_slot_4(ctx) {
  let t0;
  let t1;
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let each_1_anchor;
  let current;
  let if_block0 = ctx[2] && create_if_block_6(ctx);
  let if_block1 = ctx[3] && create_if_block_3(ctx);
  let each_value_1 = ctx[66].cells;
  const get_key = (ctx2) => ctx2[69].key;
  for (let i = 0; i < each_value_1.length; i += 1) {
    let child_ctx = get_each_context_1(ctx, each_value_1, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block_1(key, child_ctx));
  }
  return {
    c() {
      if (if_block0)
        if_block0.c();
      t0 = space();
      if (if_block1)
        if_block1.c();
      t1 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      if (if_block0)
        if_block0.l(nodes);
      t0 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      t1 = claim_space(nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration(target, t0, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, t1, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[2]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty[0] & 4) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_6(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t0.parentNode, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (ctx2[3]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty[0] & 8) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_3(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(t1.parentNode, t1);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
      if (dirty[0] & 50462736 | dirty[1] & 536870913) {
        each_value_1 = ctx2[66].cells;
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value_1, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block_1, each_1_anchor, get_each_context_1);
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      for (let i = 0; i < each_value_1.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(t0);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(t1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d(detaching);
      }
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_if_block$2(ctx) {
  let tr;
  let show_if = ctx[28][ctx[66].id] && !ctx[11].includes(ctx[66].id);
  let t;
  let current;
  let mounted;
  let dispose;
  let if_block = show_if && create_if_block_1(ctx);
  function mouseenter_handler_1() {
    return ctx[58](ctx[66]);
  }
  function mouseleave_handler_1() {
    return ctx[59](ctx[66]);
  }
  return {
    c() {
      tr = element("tr");
      if (if_block)
        if_block.c();
      t = space();
      this.h();
    },
    l(nodes) {
      tr = claim_element(nodes, "TR", { "data-child-row": true });
      var tr_nodes = children(tr);
      if (if_block)
        if_block.l(tr_nodes);
      t = claim_space(tr_nodes);
      tr_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(tr, "data-child-row", "");
      toggle_class(tr, "bx--expandable-row", true);
    },
    m(target, anchor) {
      insert_hydration(target, tr, anchor);
      if (if_block)
        if_block.m(tr, null);
      append_hydration(tr, t);
      current = true;
      if (!mounted) {
        dispose = [
          listen(tr, "mouseenter", mouseenter_handler_1),
          listen(tr, "mouseleave", mouseleave_handler_1)
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & 318900224)
        show_if = ctx[28][ctx[66].id] && !ctx[11].includes(ctx[66].id);
      if (show_if) {
        if (if_block) {
          if_block.p(ctx, dirty);
          if (dirty[0] & 318900224) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(tr, t);
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
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(tr);
      if (if_block)
        if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_1(ctx) {
  let tablecell;
  let current;
  tablecell = new TableCell({
    props: {
      colspan: ctx[3] ? ctx[4].length + 2 : ctx[4].length + 1,
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(tablecell.$$.fragment);
    },
    l(nodes) {
      claim_component(tablecell.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(tablecell, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const tablecell_changes = {};
      if (dirty[0] & 24)
        tablecell_changes.colspan = ctx2[3] ? ctx2[4].length + 2 : ctx2[4].length + 1;
      if (dirty[0] & 50462720 | dirty[1] & 536870912) {
        tablecell_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tablecell.$set(tablecell_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(tablecell.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tablecell.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(tablecell, detaching);
    }
  };
}
function create_default_slot_3(ctx) {
  let div;
  let current;
  const expanded_row_slot_template = ctx[46]["expanded-row"];
  const expanded_row_slot = create_slot(expanded_row_slot_template, ctx, ctx[60], get_expanded_row_slot_context);
  return {
    c() {
      div = element("div");
      if (expanded_row_slot)
        expanded_row_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      if (expanded_row_slot)
        expanded_row_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(div, "bx--child-row-inner-container", true);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (expanded_row_slot) {
        expanded_row_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (expanded_row_slot) {
        if (expanded_row_slot.p && (!current || dirty[0] & 50462720 | dirty[1] & 536870912)) {
          update_slot_base(expanded_row_slot, expanded_row_slot_template, ctx2, ctx2[60], !current ? get_all_dirty_from_scope(ctx2[60]) : get_slot_changes(expanded_row_slot_template, ctx2[60], dirty, get_expanded_row_slot_changes), get_expanded_row_slot_context);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(expanded_row_slot, local);
      current = true;
    },
    o(local) {
      transition_out(expanded_row_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (expanded_row_slot)
        expanded_row_slot.d(detaching);
    }
  };
}
function create_each_block(key_1, ctx) {
  let first;
  let tablerow;
  let t;
  let if_block_anchor;
  let current;
  function click_handler_4(...args) {
    return ctx[55](ctx[66], ...args);
  }
  function mouseenter_handler() {
    return ctx[56](ctx[66]);
  }
  function mouseleave_handler() {
    return ctx[57](ctx[66]);
  }
  tablerow = new TableRow({
    props: {
      id: "row-" + ctx[66].id,
      "data-parent-row": ctx[2] ? true : void 0,
      class: (ctx[1].includes(ctx[66].id) ? "bx--data-table--selected" : "") + " " + (ctx[28][ctx[66].id] ? "bx--expandable-row" : "") + " " + (ctx[2] ? "bx--parent-row" : "") + " " + (ctx[2] && ctx[22] === ctx[66].id ? "bx--expandable-row--hover" : ""),
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  tablerow.$on("click", click_handler_4);
  tablerow.$on("mouseenter", mouseenter_handler);
  tablerow.$on("mouseleave", mouseleave_handler);
  let if_block = ctx[2] && create_if_block$2(ctx);
  return {
    key: key_1,
    first: null,
    c() {
      first = empty();
      create_component(tablerow.$$.fragment);
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l(nodes) {
      first = empty();
      claim_component(tablerow.$$.fragment, nodes);
      t = claim_space(nodes);
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h() {
      this.first = first;
    },
    m(target, anchor) {
      insert_hydration(target, first, anchor);
      mount_component(tablerow, target, anchor);
      insert_hydration(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const tablerow_changes = {};
      if (dirty[0] & 50462720)
        tablerow_changes.id = "row-" + ctx[66].id;
      if (dirty[0] & 4)
        tablerow_changes["data-parent-row"] = ctx[2] ? true : void 0;
      if (dirty[0] & 323092486)
        tablerow_changes.class = (ctx[1].includes(ctx[66].id) ? "bx--data-table--selected" : "") + " " + (ctx[28][ctx[66].id] ? "bx--expandable-row" : "") + " " + (ctx[2] ? "bx--parent-row" : "") + " " + (ctx[2] && ctx[22] === ctx[66].id ? "bx--expandable-row--hover" : "");
      if (dirty[0] & 318920735 | dirty[1] & 536870912) {
        tablerow_changes.$$scope = { dirty, ctx };
      }
      tablerow.$set(tablerow_changes);
      if (ctx[2]) {
        if (if_block) {
          if_block.p(ctx, dirty);
          if (dirty[0] & 4) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$2(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
      transition_in(tablerow.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(tablerow.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(first);
      destroy_component(tablerow, detaching);
      if (detaching)
        detach(t);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_default_slot_2$1(ctx) {
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let each_1_anchor;
  let current;
  let each_value = ctx[17] ? ctx[24] : ctx[25];
  const get_key = (ctx2) => ctx2[66].id;
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }
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
      if (dirty[0] & 323115039 | dirty[1] & 536870913) {
        each_value = ctx2[17] ? ctx2[24] : ctx2[25];
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block, each_1_anchor, get_each_context);
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
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d(detaching);
      }
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_default_slot_1$1(ctx) {
  let tablehead;
  let t;
  let tablebody;
  let current;
  tablehead = new TableHead({
    props: {
      $$slots: { default: [create_default_slot_7] },
      $$scope: { ctx }
    }
  });
  tablebody = new TableBody({
    props: {
      $$slots: { default: [create_default_slot_2$1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(tablehead.$$.fragment);
      t = space();
      create_component(tablebody.$$.fragment);
    },
    l(nodes) {
      claim_component(tablehead.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(tablebody.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(tablehead, target, anchor);
      insert_hydration(target, t, anchor);
      mount_component(tablebody, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const tablehead_changes = {};
      if (dirty[0] & 750531615 | dirty[1] & 536870912) {
        tablehead_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tablehead.$set(tablehead_changes);
      const tablebody_changes = {};
      if (dirty[0] & 323115039 | dirty[1] & 536870912) {
        tablebody_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tablebody.$set(tablebody_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(tablehead.$$.fragment, local);
      transition_in(tablebody.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tablehead.$$.fragment, local);
      transition_out(tablebody.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(tablehead, detaching);
      if (detaching)
        detach(t);
      destroy_component(tablebody, detaching);
    }
  };
}
function create_default_slot$1(ctx) {
  let t0;
  let t1;
  let table;
  let current;
  let if_block = (ctx[6] || ctx[36].title || ctx[7] || ctx[36].description) && create_if_block_13(ctx);
  const default_slot_template = ctx[46].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[60], null);
  table = new Table({
    props: {
      zebra: ctx[8],
      size: ctx[5],
      stickyHeader: ctx[15],
      sortable: ctx[9],
      useStaticWidth: ctx[16],
      $$slots: { default: [create_default_slot_1$1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      if (if_block)
        if_block.c();
      t0 = space();
      if (default_slot)
        default_slot.c();
      t1 = space();
      create_component(table.$$.fragment);
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      t0 = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
      t1 = claim_space(nodes);
      claim_component(table.$$.fragment, nodes);
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, t0, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      insert_hydration(target, t1, anchor);
      mount_component(table, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[6] || ctx2[36].title || ctx2[7] || ctx2[36].description) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty[0] & 192 | dirty[1] & 32) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_13(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(t0.parentNode, t0);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty[1] & 536870912)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[60], !current ? get_all_dirty_from_scope(ctx2[60]) : get_slot_changes(default_slot_template, ctx2[60], dirty, null), null);
        }
      }
      const table_changes = {};
      if (dirty[0] & 256)
        table_changes.zebra = ctx2[8];
      if (dirty[0] & 32)
        table_changes.size = ctx2[5];
      if (dirty[0] & 32768)
        table_changes.stickyHeader = ctx2[15];
      if (dirty[0] & 512)
        table_changes.sortable = ctx2[9];
      if (dirty[0] & 65536)
        table_changes.useStaticWidth = ctx2[16];
      if (dirty[0] & 1073642527 | dirty[1] & 536870912) {
        table_changes.$$scope = { dirty, ctx: ctx2 };
      }
      table.$set(table_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(default_slot, local);
      transition_in(table.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      transition_out(default_slot, local);
      transition_out(table.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(t0);
      if (default_slot)
        default_slot.d(detaching);
      if (detaching)
        detach(t1);
      destroy_component(table, detaching);
    }
  };
}
function create_fragment$7(ctx) {
  let tablecontainer;
  let current;
  const tablecontainer_spread_levels = [
    {
      useStaticWidth: ctx[16]
    },
    ctx[35]
  ];
  let tablecontainer_props = {
    $$slots: { default: [create_default_slot$1] },
    $$scope: { ctx }
  };
  for (let i = 0; i < tablecontainer_spread_levels.length; i += 1) {
    tablecontainer_props = assign(tablecontainer_props, tablecontainer_spread_levels[i]);
  }
  tablecontainer = new TableContainer({ props: tablecontainer_props });
  return {
    c() {
      create_component(tablecontainer.$$.fragment);
    },
    l(nodes) {
      claim_component(tablecontainer.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(tablecontainer, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const tablecontainer_changes = dirty[0] & 65536 | dirty[1] & 16 ? get_spread_update(tablecontainer_spread_levels, [
        dirty[0] & 65536 && {
          useStaticWidth: ctx2[16]
        },
        dirty[1] & 16 && get_spread_object(ctx2[35])
      ]) : {};
      if (dirty[0] & 1073741823 | dirty[1] & 536870944) {
        tablecontainer_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tablecontainer.$set(tablecontainer_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(tablecontainer.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tablecontainer.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(tablecontainer, detaching);
    }
  };
}
function instance$7($$self, $$props, $$invalidate) {
  let expandedRows;
  let rowIds;
  let expandableRowIds;
  let selectableRowIds;
  let selectAll;
  let indeterminate;
  let headerKeys;
  let sortedRows;
  let ascending;
  let sortKey;
  let sorting;
  let displayedRows;
  let displayedSortedRows;
  const omit_props_names = [
    "headers",
    "rows",
    "size",
    "title",
    "description",
    "zebra",
    "sortable",
    "expandable",
    "batchExpansion",
    "expandedRowIds",
    "nonExpandableRowIds",
    "radio",
    "selectable",
    "batchSelection",
    "selectedRowIds",
    "nonSelectableRowIds",
    "stickyHeader",
    "useStaticWidth",
    "pageSize",
    "page"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $tableRows;
  let $sortHeader;
  let $thKeys;
  let { $$slots: slots = {}, $$scope } = $$props;
  const $$slots = compute_slots(slots);
  let { headers = [] } = $$props;
  let { rows = [] } = $$props;
  let { size = void 0 } = $$props;
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { zebra = false } = $$props;
  let { sortable = false } = $$props;
  let { expandable = false } = $$props;
  let { batchExpansion = false } = $$props;
  let { expandedRowIds = [] } = $$props;
  let { nonExpandableRowIds = [] } = $$props;
  let { radio = false } = $$props;
  let { selectable = false } = $$props;
  let { batchSelection = false } = $$props;
  let { selectedRowIds = [] } = $$props;
  let { nonSelectableRowIds = [] } = $$props;
  let { stickyHeader = false } = $$props;
  let { useStaticWidth = false } = $$props;
  let { pageSize = 0 } = $$props;
  let { page = 0 } = $$props;
  const sortDirectionMap = {
    none: "ascending",
    ascending: "descending",
    descending: "none"
  };
  const dispatch = createEventDispatcher();
  const batchSelectedIds = writable(false);
  const tableSortable = writable(sortable);
  const sortHeader = writable({
    id: null,
    key: null,
    sort: void 0,
    sortDirection: "none"
  });
  component_subscribe($$self, sortHeader, (value) => $$invalidate(20, $sortHeader = value));
  const headerItems = writable([]);
  const tableRows = writable(rows);
  component_subscribe($$self, tableRows, (value) => $$invalidate(45, $tableRows = value));
  const thKeys = derived(headerItems, () => headers.map(({ key }, i) => ({ key, id: key })).reduce((a, c) => __spreadProps(__spreadValues({}, a), { [c.key]: c.id }), {}));
  component_subscribe($$self, thKeys, (value) => $$invalidate(29, $thKeys = value));
  const resolvePath = (object, path) => path.split(/[\.\[\]\'\"]/).filter((p) => p).reduce((o, p) => o && typeof o === "object" ? o[p] : o, object);
  setContext("DataTable", {
    sortHeader,
    tableSortable,
    batchSelectedIds,
    tableRows,
    resetSelectedRowIds: () => {
      $$invalidate(27, selectAll = false);
      $$invalidate(1, selectedRowIds = []);
      if (refSelectAll)
        $$invalidate(23, refSelectAll.checked = false, refSelectAll);
    }
  });
  let expanded = false;
  let parentRowId = null;
  let refSelectAll = null;
  const getDisplayedRows = (rows2, page2, pageSize2) => page2 && pageSize2 ? rows2.slice((page2 - 1) * pageSize2, page2 * pageSize2) : rows2;
  const click_handler = () => {
    $$invalidate(21, expanded = !expanded);
    $$invalidate(0, expandedRowIds = expanded ? expandableRowIds : []);
    dispatch("click:header--expand", { expanded });
  };
  function inlinecheckbox_ref_binding(value) {
    refSelectAll = value;
    $$invalidate(23, refSelectAll);
  }
  const change_handler = (e) => {
    if (indeterminate) {
      e.target.checked = false;
      $$invalidate(27, selectAll = false);
      $$invalidate(1, selectedRowIds = []);
      return;
    }
    if (e.target.checked) {
      $$invalidate(1, selectedRowIds = selectableRowIds);
    } else {
      $$invalidate(1, selectedRowIds = []);
    }
  };
  const click_handler_1 = (header) => {
    dispatch("click", { header });
    if (header.sort === false) {
      dispatch("click:header", { header });
    } else {
      let active = header.key === $sortHeader.key;
      let currentSortDirection = active ? $sortHeader.sortDirection : "none";
      let sortDirection = sortDirectionMap[currentSortDirection];
      dispatch("click:header", { header, sortDirection });
      sortHeader.set({
        id: sortDirection === "none" ? null : $thKeys[header.key],
        key: header.key,
        sort: header.sort,
        sortDirection
      });
    }
  };
  const click_handler_2 = (row) => {
    const rowExpanded = !!expandedRows[row.id];
    $$invalidate(0, expandedRowIds = rowExpanded ? expandedRowIds.filter((id) => id !== row.id) : [...expandedRowIds, row.id]);
    dispatch("click:row--expand", { row, expanded: !rowExpanded });
  };
  const change_handler_1 = (row) => {
    $$invalidate(1, selectedRowIds = [row.id]);
  };
  const change_handler_2 = (row) => {
    if (selectedRowIds.includes(row.id)) {
      $$invalidate(1, selectedRowIds = selectedRowIds.filter((id) => id !== row.id));
    } else {
      $$invalidate(1, selectedRowIds = [...selectedRowIds, row.id]);
    }
  };
  const click_handler_3 = (row, cell) => {
    dispatch("click", { row, cell });
    dispatch("click:cell", cell);
  };
  const click_handler_4 = (row, { target }) => {
    if ([...target.classList].some((name) => /^bx--(overflow-menu|checkbox|radio-button)/.test(name))) {
      return;
    }
    dispatch("click", { row });
    dispatch("click:row", row);
  };
  const mouseenter_handler = (row) => {
    dispatch("mouseenter:row", row);
  };
  const mouseleave_handler = (row) => {
    dispatch("mouseleave:row", row);
  };
  const mouseenter_handler_1 = (row) => {
    if (nonExpandableRowIds.includes(row.id))
      return;
    $$invalidate(22, parentRowId = row.id);
  };
  const mouseleave_handler_1 = (row) => {
    if (nonExpandableRowIds.includes(row.id))
      return;
    $$invalidate(22, parentRowId = null);
  };
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(35, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("headers" in $$new_props)
      $$invalidate(4, headers = $$new_props.headers);
    if ("rows" in $$new_props)
      $$invalidate(37, rows = $$new_props.rows);
    if ("size" in $$new_props)
      $$invalidate(5, size = $$new_props.size);
    if ("title" in $$new_props)
      $$invalidate(6, title = $$new_props.title);
    if ("description" in $$new_props)
      $$invalidate(7, description = $$new_props.description);
    if ("zebra" in $$new_props)
      $$invalidate(8, zebra = $$new_props.zebra);
    if ("sortable" in $$new_props)
      $$invalidate(9, sortable = $$new_props.sortable);
    if ("expandable" in $$new_props)
      $$invalidate(2, expandable = $$new_props.expandable);
    if ("batchExpansion" in $$new_props)
      $$invalidate(10, batchExpansion = $$new_props.batchExpansion);
    if ("expandedRowIds" in $$new_props)
      $$invalidate(0, expandedRowIds = $$new_props.expandedRowIds);
    if ("nonExpandableRowIds" in $$new_props)
      $$invalidate(11, nonExpandableRowIds = $$new_props.nonExpandableRowIds);
    if ("radio" in $$new_props)
      $$invalidate(12, radio = $$new_props.radio);
    if ("selectable" in $$new_props)
      $$invalidate(3, selectable = $$new_props.selectable);
    if ("batchSelection" in $$new_props)
      $$invalidate(13, batchSelection = $$new_props.batchSelection);
    if ("selectedRowIds" in $$new_props)
      $$invalidate(1, selectedRowIds = $$new_props.selectedRowIds);
    if ("nonSelectableRowIds" in $$new_props)
      $$invalidate(14, nonSelectableRowIds = $$new_props.nonSelectableRowIds);
    if ("stickyHeader" in $$new_props)
      $$invalidate(15, stickyHeader = $$new_props.stickyHeader);
    if ("useStaticWidth" in $$new_props)
      $$invalidate(16, useStaticWidth = $$new_props.useStaticWidth);
    if ("pageSize" in $$new_props)
      $$invalidate(38, pageSize = $$new_props.pageSize);
    if ("page" in $$new_props)
      $$invalidate(39, page = $$new_props.page);
    if ("$$scope" in $$new_props)
      $$invalidate(60, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 1) {
      $$invalidate(28, expandedRows = expandedRowIds.reduce((a, id) => __spreadProps(__spreadValues({}, a), { [id]: true }), {}));
    }
    if ($$self.$$.dirty[0] & 2) {
      batchSelectedIds.set(selectedRowIds);
    }
    if ($$self.$$.dirty[0] & 16) {
      $$invalidate(43, headerKeys = headers.map(({ key }) => key));
    }
    if ($$self.$$.dirty[0] & 16 | $$self.$$.dirty[1] & 4160) {
      set_store_value(tableRows, $tableRows = rows.map((row) => __spreadProps(__spreadValues({}, row), {
        cells: headerKeys.map((key, index) => ({
          key,
          value: resolvePath(row, key),
          display: headers[index].display
        }))
      })), $tableRows);
    }
    if ($$self.$$.dirty[1] & 16384) {
      $$invalidate(44, rowIds = $tableRows.map((row) => row.id));
    }
    if ($$self.$$.dirty[0] & 2048 | $$self.$$.dirty[1] & 8192) {
      $$invalidate(18, expandableRowIds = rowIds.filter((id) => !nonExpandableRowIds.includes(id)));
    }
    if ($$self.$$.dirty[0] & 16384 | $$self.$$.dirty[1] & 8192) {
      $$invalidate(19, selectableRowIds = rowIds.filter((id) => !nonSelectableRowIds.includes(id)));
    }
    if ($$self.$$.dirty[0] & 524290) {
      $$invalidate(27, selectAll = selectableRowIds.length > 0 && selectedRowIds.length === selectableRowIds.length);
    }
    if ($$self.$$.dirty[0] & 524290) {
      $$invalidate(26, indeterminate = selectedRowIds.length > 0 && selectedRowIds.length < selectableRowIds.length);
    }
    if ($$self.$$.dirty[0] & 263169) {
      if (batchExpansion) {
        $$invalidate(2, expandable = true);
        $$invalidate(21, expanded = expandedRowIds.length === expandableRowIds.length);
      }
    }
    if ($$self.$$.dirty[0] & 12288) {
      if (radio || batchSelection)
        $$invalidate(3, selectable = true);
    }
    if ($$self.$$.dirty[0] & 512) {
      tableSortable.set(sortable);
    }
    if ($$self.$$.dirty[1] & 16384) {
      $$invalidate(40, sortedRows = [...$tableRows]);
    }
    if ($$self.$$.dirty[0] & 1048576) {
      $$invalidate(41, ascending = $sortHeader.sortDirection === "ascending");
    }
    if ($$self.$$.dirty[0] & 1048576) {
      $$invalidate(42, sortKey = $sortHeader.key);
    }
    if ($$self.$$.dirty[0] & 512 | $$self.$$.dirty[1] & 2048) {
      $$invalidate(17, sorting = sortable && sortKey != null);
    }
    if ($$self.$$.dirty[0] & 1179648 | $$self.$$.dirty[1] & 19456) {
      if (sorting) {
        if ($sortHeader.sortDirection === "none") {
          $$invalidate(40, sortedRows = $tableRows);
        } else {
          $$invalidate(40, sortedRows = [...$tableRows].sort((a, b) => {
            const itemA = ascending ? resolvePath(a, sortKey) : resolvePath(b, sortKey);
            const itemB = ascending ? resolvePath(b, sortKey) : resolvePath(a, sortKey);
            if ($sortHeader.sort)
              return $sortHeader.sort(itemA, itemB);
            if (typeof itemA === "number" && typeof itemB === "number")
              return itemA - itemB;
            if ([itemA, itemB].every((item) => !item && item !== 0))
              return 0;
            if (!itemA && itemA !== 0)
              return ascending ? 1 : -1;
            if (!itemB && itemB !== 0)
              return ascending ? -1 : 1;
            return itemA.toString().localeCompare(itemB.toString(), "en", { numeric: true });
          }));
        }
      }
    }
    if ($$self.$$.dirty[1] & 16768) {
      $$invalidate(25, displayedRows = getDisplayedRows($tableRows, page, pageSize));
    }
    if ($$self.$$.dirty[1] & 896) {
      $$invalidate(24, displayedSortedRows = getDisplayedRows(sortedRows, page, pageSize));
    }
  };
  return [
    expandedRowIds,
    selectedRowIds,
    expandable,
    selectable,
    headers,
    size,
    title,
    description,
    zebra,
    sortable,
    batchExpansion,
    nonExpandableRowIds,
    radio,
    batchSelection,
    nonSelectableRowIds,
    stickyHeader,
    useStaticWidth,
    sorting,
    expandableRowIds,
    selectableRowIds,
    $sortHeader,
    expanded,
    parentRowId,
    refSelectAll,
    displayedSortedRows,
    displayedRows,
    indeterminate,
    selectAll,
    expandedRows,
    $thKeys,
    sortDirectionMap,
    dispatch,
    sortHeader,
    tableRows,
    thKeys,
    $$restProps,
    $$slots,
    rows,
    pageSize,
    page,
    sortedRows,
    ascending,
    sortKey,
    headerKeys,
    rowIds,
    $tableRows,
    slots,
    click_handler,
    inlinecheckbox_ref_binding,
    change_handler,
    click_handler_1,
    click_handler_2,
    change_handler_1,
    change_handler_2,
    click_handler_3,
    click_handler_4,
    mouseenter_handler,
    mouseleave_handler,
    mouseenter_handler_1,
    mouseleave_handler_1,
    $$scope
  ];
}
class DataTable extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$7, safe_not_equal, {
      headers: 4,
      rows: 37,
      size: 5,
      title: 6,
      description: 7,
      zebra: 8,
      sortable: 9,
      expandable: 2,
      batchExpansion: 10,
      expandedRowIds: 0,
      nonExpandableRowIds: 11,
      radio: 12,
      selectable: 3,
      batchSelection: 13,
      selectedRowIds: 1,
      nonSelectableRowIds: 14,
      stickyHeader: 15,
      useStaticWidth: 16,
      pageSize: 38,
      page: 39
    }, null, [-1, -1, -1]);
  }
}
function create_fragment$6(ctx) {
  let section;
  let section_style_value;
  let current;
  const default_slot_template = ctx[4].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[3], null);
  let section_levels = [
    { "aria-label": "data table toolbar" },
    ctx[2],
    {
      style: section_style_value = "z-index: 1; " + ctx[2].style
    }
  ];
  let section_data = {};
  for (let i = 0; i < section_levels.length; i += 1) {
    section_data = assign(section_data, section_levels[i]);
  }
  return {
    c() {
      section = element("section");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      section = claim_element(nodes, "SECTION", { "aria-label": true, style: true });
      var section_nodes = children(section);
      if (default_slot)
        default_slot.l(section_nodes);
      section_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(section, section_data);
      toggle_class(section, "bx--table-toolbar", true);
      toggle_class(section, "bx--table-toolbar--small", ctx[0] === "sm");
      toggle_class(section, "bx--table-toolbar--normal", ctx[0] === "default");
    },
    m(target, anchor) {
      insert_hydration(target, section, anchor);
      if (default_slot) {
        default_slot.m(section, null);
      }
      ctx[5](section);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 8)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[3], !current ? get_all_dirty_from_scope(ctx2[3]) : get_slot_changes(default_slot_template, ctx2[3], dirty, null), null);
        }
      }
      set_attributes(section, section_data = get_spread_update(section_levels, [
        { "aria-label": "data table toolbar" },
        dirty & 4 && ctx2[2],
        (!current || dirty & 4 && section_style_value !== (section_style_value = "z-index: 1; " + ctx2[2].style)) && { style: section_style_value }
      ]));
      toggle_class(section, "bx--table-toolbar", true);
      toggle_class(section, "bx--table-toolbar--small", ctx2[0] === "sm");
      toggle_class(section, "bx--table-toolbar--normal", ctx2[0] === "default");
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
        detach(section);
      if (default_slot)
        default_slot.d(detaching);
      ctx[5](null);
    }
  };
}
function instance$6($$self, $$props, $$invalidate) {
  const omit_props_names = ["size"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { size = "default" } = $$props;
  let ref = null;
  const overflowVisible = writable(false);
  setContext("Toolbar", {
    overflowVisible,
    setOverflowVisible: (visible) => {
      overflowVisible.set(visible);
      if (ref)
        $$invalidate(1, ref.style.overflow = visible ? "visible" : "inherit", ref);
    }
  });
  function section_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      ref = $$value;
      $$invalidate(1, ref);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(2, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("size" in $$new_props)
      $$invalidate(0, size = $$new_props.size);
    if ("$$scope" in $$new_props)
      $$invalidate(3, $$scope = $$new_props.$$scope);
  };
  return [size, ref, $$restProps, $$scope, slots, section_binding];
}
class Toolbar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$6, safe_not_equal, { size: 0 });
  }
}
function create_fragment$5(ctx) {
  let div;
  let current;
  const default_slot_template = ctx[1].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[0], null);
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
      toggle_class(div, "bx--toolbar-content", true);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 1)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[0], !current ? get_all_dirty_from_scope(ctx2[0]) : get_slot_changes(default_slot_template, ctx2[0], dirty, null), null);
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
      if (detaching)
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance$5($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class ToolbarContent extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, {});
  }
}
function create_if_block$1(ctx) {
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
function create_fragment$4(ctx) {
  let svg;
  let path;
  let if_block = ctx[1] && create_if_block$1(ctx);
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
      attr(path, "d", "M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z");
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
          if_block = create_if_block$1(ctx2);
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
function instance$4($$self, $$props, $$invalidate) {
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
class IconSearch extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { size: 0, title: 1 });
  }
}
function create_fragment$3(ctx) {
  let div1;
  let span;
  let t;
  let div0;
  let mounted;
  let dispose;
  let div1_levels = [ctx[1]];
  let div1_data = {};
  for (let i = 0; i < div1_levels.length; i += 1) {
    div1_data = assign(div1_data, div1_levels[i]);
  }
  return {
    c() {
      div1 = element("div");
      span = element("span");
      t = space();
      div0 = element("div");
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", {});
      var div1_nodes = children(div1);
      span = claim_element(div1_nodes, "SPAN", {});
      children(span).forEach(detach);
      t = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {});
      children(div0).forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(span, "bx--label", true);
      toggle_class(div0, "bx--search-input", true);
      set_attributes(div1, div1_data);
      toggle_class(div1, "bx--skeleton", true);
      toggle_class(div1, "bx--search--sm", ctx[0] === "sm");
      toggle_class(div1, "bx--search--lg", ctx[0] === "lg");
      toggle_class(div1, "bx--search--xl", ctx[0] === "xl");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, span);
      append_hydration(div1, t);
      append_hydration(div1, div0);
      if (!mounted) {
        dispose = [
          listen(div1, "click", ctx[2]),
          listen(div1, "mouseover", ctx[3]),
          listen(div1, "mouseenter", ctx[4]),
          listen(div1, "mouseleave", ctx[5])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      set_attributes(div1, div1_data = get_spread_update(div1_levels, [dirty & 2 && ctx2[1]]));
      toggle_class(div1, "bx--skeleton", true);
      toggle_class(div1, "bx--search--sm", ctx2[0] === "sm");
      toggle_class(div1, "bx--search--lg", ctx2[0] === "lg");
      toggle_class(div1, "bx--search--xl", ctx2[0] === "xl");
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
function instance$3($$self, $$props, $$invalidate) {
  const omit_props_names = ["size"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { size = "xl" } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(1, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("size" in $$new_props)
      $$invalidate(0, size = $$new_props.size);
  };
  return [
    size,
    $$restProps,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler
  ];
}
class SearchSkeleton extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { size: 0 });
  }
}
const get_labelText_slot_changes = (dirty) => ({});
const get_labelText_slot_context = (ctx) => ({});
function create_else_block(ctx) {
  let div1;
  let div0;
  let switch_instance0;
  let t0;
  let label;
  let label_id_value;
  let t1;
  let input;
  let input_autofocus_value;
  let t2;
  let button;
  let switch_instance1;
  let div1_aria_labelledby_value;
  let current;
  let mounted;
  let dispose;
  var switch_value = ctx[14];
  function switch_props(ctx2) {
    return {
      props: { class: "bx--search-magnifier-icon" }
    };
  }
  if (switch_value) {
    switch_instance0 = new switch_value(switch_props());
  }
  const labelText_slot_template = ctx[20].labelText;
  const labelText_slot = create_slot(labelText_slot_template, ctx, ctx[19], get_labelText_slot_context);
  const labelText_slot_or_fallback = labelText_slot || fallback_block(ctx);
  let input_levels = [
    { type: "text" },
    { role: "searchbox" },
    {
      autofocus: input_autofocus_value = ctx[11] === true ? true : void 0
    },
    { autocomplete: ctx[10] },
    { disabled: ctx[7] },
    { id: ctx[15] },
    { placeholder: ctx[9] },
    ctx[18]
  ];
  let input_data = {};
  for (let i = 0; i < input_levels.length; i += 1) {
    input_data = assign(input_data, input_levels[i]);
  }
  var switch_value_1 = Close;
  function switch_props_1(ctx2) {
    return {
      props: { size: ctx2[3] === "xl" ? 20 : 16 }
    };
  }
  if (switch_value_1) {
    switch_instance1 = new switch_value_1(switch_props_1(ctx));
  }
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      if (switch_instance0)
        create_component(switch_instance0.$$.fragment);
      t0 = space();
      label = element("label");
      if (labelText_slot_or_fallback)
        labelText_slot_or_fallback.c();
      t1 = space();
      input = element("input");
      t2 = space();
      button = element("button");
      if (switch_instance1)
        create_component(switch_instance1.$$.fragment);
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", {
        role: true,
        "aria-labelledby": true,
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      if (switch_instance0)
        claim_component(switch_instance0.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t0 = claim_space(div1_nodes);
      label = claim_element(div1_nodes, "LABEL", { id: true, for: true });
      var label_nodes = children(label);
      if (labelText_slot_or_fallback)
        labelText_slot_or_fallback.l(label_nodes);
      label_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      input = claim_element(div1_nodes, "INPUT", {
        type: true,
        role: true,
        autocomplete: true,
        id: true,
        placeholder: true
      });
      t2 = claim_space(div1_nodes);
      button = claim_element(div1_nodes, "BUTTON", { type: true, "aria-label": true });
      var button_nodes = children(button);
      if (switch_instance1)
        claim_component(switch_instance1.$$.fragment, button_nodes);
      button_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      toggle_class(div0, "bx--search-magnifier", true);
      attr(label, "id", label_id_value = ctx[15] + "-search");
      attr(label, "for", ctx[15]);
      toggle_class(label, "bx--label", true);
      set_attributes(input, input_data);
      toggle_class(input, "bx--search-input", true);
      attr(button, "type", "button");
      attr(button, "aria-label", ctx[12]);
      button.disabled = ctx[7];
      toggle_class(button, "bx--search-close", true);
      toggle_class(button, "bx--search-close--hidden", ctx[2] === "");
      attr(div1, "role", "search");
      attr(div1, "aria-labelledby", div1_aria_labelledby_value = ctx[15] + "-search");
      attr(div1, "class", ctx[4]);
      toggle_class(div1, "bx--search", true);
      toggle_class(div1, "bx--search--light", ctx[6]);
      toggle_class(div1, "bx--search--disabled", ctx[7]);
      toggle_class(div1, "bx--search--sm", ctx[3] === "sm");
      toggle_class(div1, "bx--search--lg", ctx[3] === "lg");
      toggle_class(div1, "bx--search--xl", ctx[3] === "xl");
      toggle_class(div1, "bx--search--expandable", ctx[8]);
      toggle_class(div1, "bx--search--expanded", ctx[0]);
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      if (switch_instance0) {
        mount_component(switch_instance0, div0, null);
      }
      ctx[32](div0);
      append_hydration(div1, t0);
      append_hydration(div1, label);
      if (labelText_slot_or_fallback) {
        labelText_slot_or_fallback.m(label, null);
      }
      append_hydration(div1, t1);
      append_hydration(div1, input);
      if (input.autofocus)
        input.focus();
      ctx[34](input);
      set_input_value(input, ctx[2]);
      append_hydration(div1, t2);
      append_hydration(div1, button);
      if (switch_instance1) {
        mount_component(switch_instance1, button, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(div0, "click", ctx[33]),
          listen(input, "input", ctx[35]),
          listen(input, "change", ctx[22]),
          listen(input, "input", ctx[23]),
          listen(input, "focus", ctx[24]),
          listen(input, "focus", ctx[36]),
          listen(input, "blur", ctx[25]),
          listen(input, "blur", ctx[37]),
          listen(input, "keydown", ctx[26]),
          listen(input, "keydown", ctx[38]),
          listen(input, "keyup", ctx[27]),
          listen(button, "click", ctx[21]),
          listen(button, "click", ctx[39])
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (switch_value !== (switch_value = ctx2[14])) {
        if (switch_instance0) {
          group_outros();
          const old_component = switch_instance0;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance0 = new switch_value(switch_props());
          create_component(switch_instance0.$$.fragment);
          transition_in(switch_instance0.$$.fragment, 1);
          mount_component(switch_instance0, div0, null);
        } else {
          switch_instance0 = null;
        }
      }
      if (labelText_slot) {
        if (labelText_slot.p && (!current || dirty[0] & 524288)) {
          update_slot_base(labelText_slot, labelText_slot_template, ctx2, ctx2[19], !current ? get_all_dirty_from_scope(ctx2[19]) : get_slot_changes(labelText_slot_template, ctx2[19], dirty, get_labelText_slot_changes), get_labelText_slot_context);
        }
      } else {
        if (labelText_slot_or_fallback && labelText_slot_or_fallback.p && (!current || dirty[0] & 8192)) {
          labelText_slot_or_fallback.p(ctx2, !current ? [-1, -1] : dirty);
        }
      }
      if (!current || dirty[0] & 32768 && label_id_value !== (label_id_value = ctx2[15] + "-search")) {
        attr(label, "id", label_id_value);
      }
      if (!current || dirty[0] & 32768) {
        attr(label, "for", ctx2[15]);
      }
      set_attributes(input, input_data = get_spread_update(input_levels, [
        { type: "text" },
        { role: "searchbox" },
        (!current || dirty[0] & 2048 && input_autofocus_value !== (input_autofocus_value = ctx2[11] === true ? true : void 0)) && { autofocus: input_autofocus_value },
        (!current || dirty[0] & 1024) && { autocomplete: ctx2[10] },
        (!current || dirty[0] & 128) && { disabled: ctx2[7] },
        (!current || dirty[0] & 32768) && { id: ctx2[15] },
        (!current || dirty[0] & 512) && { placeholder: ctx2[9] },
        dirty[0] & 262144 && ctx2[18]
      ]));
      if (dirty[0] & 4 && input.value !== ctx2[2]) {
        set_input_value(input, ctx2[2]);
      }
      toggle_class(input, "bx--search-input", true);
      const switch_instance1_changes = {};
      if (dirty[0] & 8)
        switch_instance1_changes.size = ctx2[3] === "xl" ? 20 : 16;
      if (switch_value_1 !== (switch_value_1 = Close)) {
        if (switch_instance1) {
          group_outros();
          const old_component = switch_instance1;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value_1) {
          switch_instance1 = new switch_value_1(switch_props_1(ctx2));
          create_component(switch_instance1.$$.fragment);
          transition_in(switch_instance1.$$.fragment, 1);
          mount_component(switch_instance1, button, null);
        } else {
          switch_instance1 = null;
        }
      } else if (switch_value_1) {
        switch_instance1.$set(switch_instance1_changes);
      }
      if (!current || dirty[0] & 4096) {
        attr(button, "aria-label", ctx2[12]);
      }
      if (!current || dirty[0] & 128) {
        button.disabled = ctx2[7];
      }
      if (dirty[0] & 4) {
        toggle_class(button, "bx--search-close--hidden", ctx2[2] === "");
      }
      if (!current || dirty[0] & 32768 && div1_aria_labelledby_value !== (div1_aria_labelledby_value = ctx2[15] + "-search")) {
        attr(div1, "aria-labelledby", div1_aria_labelledby_value);
      }
      if (!current || dirty[0] & 16) {
        attr(div1, "class", ctx2[4]);
      }
      if (dirty[0] & 16) {
        toggle_class(div1, "bx--search", true);
      }
      if (dirty[0] & 80) {
        toggle_class(div1, "bx--search--light", ctx2[6]);
      }
      if (dirty[0] & 144) {
        toggle_class(div1, "bx--search--disabled", ctx2[7]);
      }
      if (dirty[0] & 24) {
        toggle_class(div1, "bx--search--sm", ctx2[3] === "sm");
      }
      if (dirty[0] & 24) {
        toggle_class(div1, "bx--search--lg", ctx2[3] === "lg");
      }
      if (dirty[0] & 24) {
        toggle_class(div1, "bx--search--xl", ctx2[3] === "xl");
      }
      if (dirty[0] & 272) {
        toggle_class(div1, "bx--search--expandable", ctx2[8]);
      }
      if (dirty[0] & 17) {
        toggle_class(div1, "bx--search--expanded", ctx2[0]);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance0)
        transition_in(switch_instance0.$$.fragment, local);
      transition_in(labelText_slot_or_fallback, local);
      if (switch_instance1)
        transition_in(switch_instance1.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance0)
        transition_out(switch_instance0.$$.fragment, local);
      transition_out(labelText_slot_or_fallback, local);
      if (switch_instance1)
        transition_out(switch_instance1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if (switch_instance0)
        destroy_component(switch_instance0);
      ctx[32](null);
      if (labelText_slot_or_fallback)
        labelText_slot_or_fallback.d(detaching);
      ctx[34](null);
      if (switch_instance1)
        destroy_component(switch_instance1);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block(ctx) {
  let searchskeleton;
  let current;
  const searchskeleton_spread_levels = [{ size: ctx[3] }, ctx[18]];
  let searchskeleton_props = {};
  for (let i = 0; i < searchskeleton_spread_levels.length; i += 1) {
    searchskeleton_props = assign(searchskeleton_props, searchskeleton_spread_levels[i]);
  }
  searchskeleton = new SearchSkeleton({ props: searchskeleton_props });
  searchskeleton.$on("click", ctx[28]);
  searchskeleton.$on("mouseover", ctx[29]);
  searchskeleton.$on("mouseenter", ctx[30]);
  searchskeleton.$on("mouseleave", ctx[31]);
  return {
    c() {
      create_component(searchskeleton.$$.fragment);
    },
    l(nodes) {
      claim_component(searchskeleton.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(searchskeleton, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const searchskeleton_changes = dirty[0] & 262152 ? get_spread_update(searchskeleton_spread_levels, [
        dirty[0] & 8 && { size: ctx2[3] },
        dirty[0] & 262144 && get_spread_object(ctx2[18])
      ]) : {};
      searchskeleton.$set(searchskeleton_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(searchskeleton.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(searchskeleton.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(searchskeleton, detaching);
    }
  };
}
function fallback_block(ctx) {
  let t;
  return {
    c() {
      t = text(ctx[13]);
    },
    l(nodes) {
      t = claim_text(nodes, ctx[13]);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 8192)
        set_data(t, ctx2[13]);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$2(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[5])
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
function instance$2($$self, $$props, $$invalidate) {
  const omit_props_names = [
    "value",
    "size",
    "searchClass",
    "skeleton",
    "light",
    "disabled",
    "expandable",
    "expanded",
    "placeholder",
    "autocomplete",
    "autofocus",
    "closeButtonLabelText",
    "labelText",
    "icon",
    "id",
    "ref"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { value = "" } = $$props;
  let { size = "xl" } = $$props;
  let { searchClass = "" } = $$props;
  let { skeleton = false } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { expandable = false } = $$props;
  let { expanded = false } = $$props;
  let { placeholder = "Search..." } = $$props;
  let { autocomplete = "off" } = $$props;
  let { autofocus = false } = $$props;
  let { closeButtonLabelText = "Clear search input" } = $$props;
  let { labelText = "" } = $$props;
  let { icon = IconSearch } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  const dispatch = createEventDispatcher();
  let searchRef = null;
  function click_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function change_handler(event) {
    bubble.call(this, $$self, event);
  }
  function input_handler(event) {
    bubble.call(this, $$self, event);
  }
  function focus_handler(event) {
    bubble.call(this, $$self, event);
  }
  function blur_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keydown_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keyup_handler(event) {
    bubble.call(this, $$self, event);
  }
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseover_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      searchRef = $$value;
      $$invalidate(16, searchRef);
    });
  }
  const click_handler_2 = () => {
    if (expandable)
      $$invalidate(0, expanded = true);
  };
  function input_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      ref = $$value;
      $$invalidate(1, ref);
    });
  }
  function input_input_handler() {
    value = this.value;
    $$invalidate(2, value);
  }
  const focus_handler_1 = () => {
    if (expandable)
      $$invalidate(0, expanded = true);
  };
  const blur_handler_1 = () => {
    if (expanded && value.trim().length === 0) {
      $$invalidate(0, expanded = false);
    }
  };
  const keydown_handler_1 = ({ key }) => {
    if (key === "Escape") {
      $$invalidate(2, value = "");
      dispatch("clear");
    }
  };
  const click_handler_3 = () => {
    $$invalidate(2, value = "");
    ref.focus();
    dispatch("clear");
  };
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(18, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("value" in $$new_props)
      $$invalidate(2, value = $$new_props.value);
    if ("size" in $$new_props)
      $$invalidate(3, size = $$new_props.size);
    if ("searchClass" in $$new_props)
      $$invalidate(4, searchClass = $$new_props.searchClass);
    if ("skeleton" in $$new_props)
      $$invalidate(5, skeleton = $$new_props.skeleton);
    if ("light" in $$new_props)
      $$invalidate(6, light = $$new_props.light);
    if ("disabled" in $$new_props)
      $$invalidate(7, disabled = $$new_props.disabled);
    if ("expandable" in $$new_props)
      $$invalidate(8, expandable = $$new_props.expandable);
    if ("expanded" in $$new_props)
      $$invalidate(0, expanded = $$new_props.expanded);
    if ("placeholder" in $$new_props)
      $$invalidate(9, placeholder = $$new_props.placeholder);
    if ("autocomplete" in $$new_props)
      $$invalidate(10, autocomplete = $$new_props.autocomplete);
    if ("autofocus" in $$new_props)
      $$invalidate(11, autofocus = $$new_props.autofocus);
    if ("closeButtonLabelText" in $$new_props)
      $$invalidate(12, closeButtonLabelText = $$new_props.closeButtonLabelText);
    if ("labelText" in $$new_props)
      $$invalidate(13, labelText = $$new_props.labelText);
    if ("icon" in $$new_props)
      $$invalidate(14, icon = $$new_props.icon);
    if ("id" in $$new_props)
      $$invalidate(15, id = $$new_props.id);
    if ("ref" in $$new_props)
      $$invalidate(1, ref = $$new_props.ref);
    if ("$$scope" in $$new_props)
      $$invalidate(19, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 3) {
      if (expanded && ref)
        ref.focus();
    }
    if ($$self.$$.dirty[0] & 1) {
      dispatch(expanded ? "expand" : "collapse");
    }
  };
  return [
    expanded,
    ref,
    value,
    size,
    searchClass,
    skeleton,
    light,
    disabled,
    expandable,
    placeholder,
    autocomplete,
    autofocus,
    closeButtonLabelText,
    labelText,
    icon,
    id,
    searchRef,
    dispatch,
    $$restProps,
    $$scope,
    slots,
    click_handler_1,
    change_handler,
    input_handler,
    focus_handler,
    blur_handler,
    keydown_handler,
    keyup_handler,
    click_handler,
    mouseover_handler,
    mouseenter_handler,
    mouseleave_handler,
    div0_binding,
    click_handler_2,
    input_binding,
    input_input_handler,
    focus_handler_1,
    blur_handler_1,
    keydown_handler_1,
    click_handler_3
  ];
}
class Search extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {
      value: 2,
      size: 3,
      searchClass: 4,
      skeleton: 5,
      light: 6,
      disabled: 7,
      expandable: 8,
      expanded: 0,
      placeholder: 9,
      autocomplete: 10,
      autofocus: 11,
      closeButtonLabelText: 12,
      labelText: 13,
      icon: 14,
      id: 15,
      ref: 1
    }, null, [-1, -1]);
  }
}
function create_fragment$1(ctx) {
  let search;
  let updating_ref;
  let updating_value;
  let current;
  const search_spread_levels = [
    { tabindex: ctx[5] },
    { disabled: ctx[4] },
    ctx[9],
    {
      searchClass: ctx[6] + " " + ctx[9].class
    }
  ];
  function search_ref_binding(value) {
    ctx[13](value);
  }
  function search_value_binding(value) {
    ctx[14](value);
  }
  let search_props = {};
  for (let i = 0; i < search_spread_levels.length; i += 1) {
    search_props = assign(search_props, search_spread_levels[i]);
  }
  if (ctx[2] !== void 0) {
    search_props.ref = ctx[2];
  }
  if (ctx[0] !== void 0) {
    search_props.value = ctx[0];
  }
  search = new Search({ props: search_props });
  binding_callbacks.push(() => bind(search, "ref", search_ref_binding));
  binding_callbacks.push(() => bind(search, "value", search_value_binding));
  search.$on("clear", ctx[15]);
  search.$on("clear", ctx[8]);
  search.$on("change", ctx[16]);
  search.$on("input", ctx[17]);
  search.$on("focus", ctx[18]);
  search.$on("focus", ctx[8]);
  search.$on("blur", ctx[19]);
  search.$on("blur", ctx[20]);
  return {
    c() {
      create_component(search.$$.fragment);
    },
    l(nodes) {
      claim_component(search.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(search, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const search_changes = dirty & 624 ? get_spread_update(search_spread_levels, [
        dirty & 32 && { tabindex: ctx2[5] },
        dirty & 16 && { disabled: ctx2[4] },
        dirty & 512 && get_spread_object(ctx2[9]),
        dirty & 576 && {
          searchClass: ctx2[6] + " " + ctx2[9].class
        }
      ]) : {};
      if (!updating_ref && dirty & 4) {
        updating_ref = true;
        search_changes.ref = ctx2[2];
        add_flush_callback(() => updating_ref = false);
      }
      if (!updating_value && dirty & 1) {
        updating_value = true;
        search_changes.value = ctx2[0];
        add_flush_callback(() => updating_value = false);
      }
      search.$set(search_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(search.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(search.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(search, detaching);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  var _a;
  let originalRows;
  let classes;
  const omit_props_names = ["value", "expanded", "persistent", "disabled", "shouldFilterRows", "tabindex", "ref"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $tableRows;
  let { value = "" } = $$props;
  let { expanded = false } = $$props;
  let { persistent = false } = $$props;
  let { disabled = false } = $$props;
  let { shouldFilterRows = false } = $$props;
  let { tabindex = "0" } = $$props;
  let { ref = null } = $$props;
  const { tableRows } = (_a = getContext("DataTable")) != null ? _a : {};
  component_subscribe($$self, tableRows, (value2) => $$invalidate(12, $tableRows = value2));
  async function expandSearch() {
    await tick();
    if (disabled || persistent || expanded)
      return;
    $$invalidate(1, expanded = true);
    await tick();
    ref.focus();
  }
  function search_ref_binding(value2) {
    ref = value2;
    $$invalidate(2, ref);
  }
  function search_value_binding(value$1) {
    value = value$1;
    $$invalidate(0, value);
  }
  function clear_handler(event) {
    bubble.call(this, $$self, event);
  }
  function change_handler(event) {
    bubble.call(this, $$self, event);
  }
  function input_handler(event) {
    bubble.call(this, $$self, event);
  }
  function focus_handler(event) {
    bubble.call(this, $$self, event);
  }
  function blur_handler(event) {
    bubble.call(this, $$self, event);
  }
  const blur_handler_1 = () => {
    $$invalidate(1, expanded = !persistent && !!value.length);
  };
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(9, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("value" in $$new_props)
      $$invalidate(0, value = $$new_props.value);
    if ("expanded" in $$new_props)
      $$invalidate(1, expanded = $$new_props.expanded);
    if ("persistent" in $$new_props)
      $$invalidate(3, persistent = $$new_props.persistent);
    if ("disabled" in $$new_props)
      $$invalidate(4, disabled = $$new_props.disabled);
    if ("shouldFilterRows" in $$new_props)
      $$invalidate(10, shouldFilterRows = $$new_props.shouldFilterRows);
    if ("tabindex" in $$new_props)
      $$invalidate(5, tabindex = $$new_props.tabindex);
    if ("ref" in $$new_props)
      $$invalidate(2, ref = $$new_props.ref);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 4096) {
      $$invalidate(11, originalRows = tableRows ? [...$tableRows] : []);
    }
    if ($$self.$$.dirty & 3073) {
      if (shouldFilterRows) {
        let rows = originalRows;
        if (value.trim().length > 0) {
          if (shouldFilterRows === true) {
            rows = rows.filter((row) => {
              return Object.entries(row).filter(([key]) => !["cells", "id"].includes(key)).some(([key, _value]) => {
                var _a2;
                if (typeof _value === "string" || typeof _value === "number") {
                  return (_a2 = _value + "") == null ? void 0 : _a2.toLowerCase().includes(value.trim().toLowerCase());
                }
              });
            });
          } else if (typeof shouldFilterRows === "function") {
            rows = rows.filter((row) => {
              var _a2;
              return (_a2 = shouldFilterRows(row, value)) != null ? _a2 : false;
            });
          }
        }
        tableRows.set(rows);
      }
    }
    if ($$self.$$.dirty & 1) {
      $$invalidate(1, expanded = !!value.length);
    }
    if ($$self.$$.dirty & 26) {
      $$invalidate(6, classes = [
        expanded && "bx--toolbar-search-container-active",
        persistent ? "bx--toolbar-search-container-persistent" : "bx--toolbar-search-container-expandable",
        disabled && "bx--toolbar-search-container-disabled"
      ].filter(Boolean).join(" "));
    }
  };
  return [
    value,
    expanded,
    ref,
    persistent,
    disabled,
    tabindex,
    classes,
    tableRows,
    expandSearch,
    $$restProps,
    shouldFilterRows,
    originalRows,
    $tableRows,
    search_ref_binding,
    search_value_binding,
    clear_handler,
    change_handler,
    input_handler,
    focus_handler,
    blur_handler,
    blur_handler_1
  ];
}
class ToolbarSearch extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      value: 0,
      expanded: 1,
      persistent: 3,
      disabled: 4,
      shouldFilterRows: 10,
      tabindex: 5,
      ref: 2
    });
  }
}
function create_default_slot_2(ctx) {
  let toolbarsearch;
  let current;
  toolbarsearch = new ToolbarSearch({
    props: {
      persistent: true,
      value: "",
      shouldFilterRows: true
    }
  });
  return {
    c() {
      create_component(toolbarsearch.$$.fragment);
    },
    l(nodes) {
      claim_component(toolbarsearch.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(toolbarsearch, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(toolbarsearch.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(toolbarsearch.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(toolbarsearch, detaching);
    }
  };
}
function create_default_slot_1(ctx) {
  let toolbarcontent;
  let current;
  toolbarcontent = new ToolbarContent({
    props: {
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(toolbarcontent.$$.fragment);
    },
    l(nodes) {
      claim_component(toolbarcontent.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(toolbarcontent, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const toolbarcontent_changes = {};
      if (dirty & 4) {
        toolbarcontent_changes.$$scope = { dirty, ctx: ctx2 };
      }
      toolbarcontent.$set(toolbarcontent_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(toolbarcontent.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(toolbarcontent.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(toolbarcontent, detaching);
    }
  };
}
function create_default_slot(ctx) {
  let toolbar;
  let current;
  toolbar = new Toolbar({
    props: {
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(toolbar.$$.fragment);
    },
    l(nodes) {
      claim_component(toolbar.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(toolbar, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const toolbar_changes = {};
      if (dirty & 4) {
        toolbar_changes.$$scope = { dirty, ctx: ctx2 };
      }
      toolbar.$set(toolbar_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(toolbar.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(toolbar.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(toolbar, detaching);
    }
  };
}
function create_fragment(ctx) {
  let datatable;
  let current;
  datatable = new DataTable({
    props: {
      sortable: true,
      title: "Leaderboard",
      description: "Look at the Leaderboard to see the users and their XP points",
      headers: [
        { key: "user", value: "Name" },
        { key: "email", value: "Email" },
        { key: "XP", value: "XP" }
      ],
      rows: ctx[0],
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(datatable.$$.fragment);
    },
    l(nodes) {
      claim_component(datatable.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(datatable, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const datatable_changes = {};
      if (dirty & 1)
        datatable_changes.rows = ctx2[0];
      if (dirty & 4) {
        datatable_changes.$$scope = { dirty, ctx: ctx2 };
      }
      datatable.$set(datatable_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(datatable.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(datatable.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(datatable, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let users = [];
  const unsubscribe = cartoons.subscribe((cartoons2) => {
    console.log(users);
    for (let i = 0; i < cartoons2.length; i++) {
      let cartoon = cartoons2[i];
      let XP = parseInt(cartoon["likes"]) * 10;
      let email = cartoon["email"];
      let user = cartoon["user"];
      let found = users.findIndex((element2) => element2.user == user);
      if (found != -1) {
        $$invalidate(0, users[found]["XP"] += XP, users);
      } else {
        users.push({ id: i, user, XP, email });
      }
    }
    console.log(users);
  });
  onDestroy(unsubscribe);
  return [users];
}
class Leaderboard extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Leaderboard as default };
