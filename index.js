import { log } from "./library.js";
log(0);
(async () => {
  await import("./dynamic.js");
})();
