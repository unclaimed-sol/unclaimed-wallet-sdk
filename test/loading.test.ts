import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { runInNewContext } from "node:vm";

for (const failed of [false, true]) {
  test(`browser form handler: one POST, blocked duplicates, ${failed ? "unknown response stays blocked" : "success reloads without replay"}`, async () => {
    const handlers: Record<string, (event?: unknown) => Promise<void>> = {};
    const status = {textContent:""};
    const button = {disabled:false,dataset:{} as Record<string,string>};
    let reloads = 0, requests = 0;
    let resolveResponse!: (response: {ok:boolean}) => void;
    let rejectResponse!: (error: Error) => void;
    const pending = new Promise<{ok:boolean}>((resolve,reject)=>{resolveResponse=resolve;rejectResponse=reject;});
    const main = {setAttribute() {},removeAttribute() {}};
    const source = await readFile(new URL("../examples/reference/loading.js",import.meta.url),"utf8");
    runInNewContext(source, {
      document: {
        addEventListener: (name:string,handler:typeof handlers[string])=>{handlers[name]=handler;},
        querySelector: (selector:string)=>selector==="main" ? main : status,
        querySelectorAll: (selector:string)=>selector.includes(":disabled") ? (button.disabled ? [] : [button]) : (button.dataset.loadingDisabled ? [button] : []),
      },
      window: {location:{reload:()=>{reloads++;}},addEventListener:(name:string,handler:typeof handlers[string])=>{handlers[name]=handler;}},
      FormData: class { constructor() {return new Map([["csrf","fixture"],["action","retry"]]);}},
      URLSearchParams,
      fetch: async (url:string,init:RequestInit)=>{
        requests++;
        assert.equal(url,"/");
        assert.equal(init.method,"POST");
        assert.equal(init.credentials,"same-origin");
        assert.equal(String(init.body),"csrf=fixture&action=retry");
        return pending;
      },
    });
    const event = {target:{},preventDefault() {}};
    const first = handlers.submit!(event);
    assert.equal(button.disabled,true);
    assert.match(status.textContent,/Loading analysis/);
    await handlers.submit!(event);
    assert.equal(requests,1);
    if (failed) rejectResponse(new Error("offline loss")); else resolveResponse({ok:true});
    await first;
    assert.equal(reloads,failed ? 0 : 1);
    assert.equal(button.disabled,true);
    if (failed) assert.match(status.textContent,/Reload to check the retained attempt/);
    await handlers.pageshow!();
    assert.equal(button.disabled,false);
    assert.equal(status.textContent,"");
  });
}
