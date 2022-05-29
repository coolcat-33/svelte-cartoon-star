import { S as SvelteComponent, i as init, s as safe_not_equal } from "../chunks/index-f49af62c.js";
async function load() {
  return {
    status: 301,
    redirect: `/svelete-cartoon-star/login`
  };
}
class Routes extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, null, safe_not_equal, {});
  }
}
export { Routes as default, load };
