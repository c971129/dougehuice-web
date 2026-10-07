(function(){"use strict";function a(s,n){const e=new Map;for(const t of s.cells)t&&e.set(t,(e.get(t)??0)+1);return n.filter(t=>e.has(t.code)).map(t=>({...t,quantity:e.get(t.code)??0})).sort((t,o)=>o.quantity-t.quantity)}self.onmessage=s=>{const{grid:n,palette:e}=s.data;self.postMessage(a(n,e))}})();
//# sourceMappingURL=material-worker-Dx-2fKV1.js.map
