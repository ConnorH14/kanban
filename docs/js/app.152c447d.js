(function(t){function e(e){for(var c,n,r=e[0],i=e[1],d=e[2],l=0,u=[];l<r.length;l++)n=r[l],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&u.push(o[n][0]),o[n]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c]);b&&b(e);while(u.length)u.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],c=!0,n=1;n<a.length;n++){var r=a[n];0!==o[r]&&(c=!1)}c&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var c={},n={app:0},o={app:0},s=[];function r(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-1c504d4a":"19875911","chunk-27524851":"7e88a1e9","chunk-2d0c19e3":"8e246281","chunk-3f4dde19":"a0dfa78b","chunk-e5b120da":"0edc2cee"}[t]+".js"}function i(e){if(c[e])return c[e].exports;var a=c[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a={"chunk-1c504d4a":1,"chunk-27524851":1,"chunk-3f4dde19":1,"chunk-e5b120da":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var c="css/"+({}[t]||t)+"."+{"chunk-1c504d4a":"d8cc4e6f","chunk-27524851":"adf41ea1","chunk-2d0c19e3":"31d6cfe0","chunk-3f4dde19":"d9f2c024","chunk-e5b120da":"8b412fde"}[t]+".css",o=i.p+c,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var d=s[r],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===c||l===o))return e()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){d=u[r],l=d.getAttribute("data-href");if(l===c||l===o)return e()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=e,b.onerror=function(e){var c=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=c,delete n[t],b.parentNode.removeChild(b),a(s)},b.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){n[t]=0})));var c=o[t];if(0!==c)if(c)e.push(c[2]);else{var s=new Promise((function(e,a){c=o[t]=[e,a]}));e.push(c[2]=s);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=r(t);var u=new Error;d=function(e){l.onerror=l.onload=null,clearTimeout(b);var a=o[t];if(0!==a){if(a){var c=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+c+": "+n+")",u.name="ChunkLoadError",u.type=c,u.request=n,a[1](u)}o[t]=void 0}};var b=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=c,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)i.d(a,c,function(e){return t[e]}.bind(null,c));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=e,d=d.slice();for(var u=0;u<d.length;u++)e(d[u]);var b=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01d32":function(t,e,a){"use strict";a("7a57")},"0e41":function(t,e,a){"use strict";a.r(e);var c=a("7a23");const n=Object(c["F"])("data-v-21f6974a");Object(c["s"])("data-v-21f6974a");const o={class:"text-break icon-size"},s={key:0,class:"delete-icon"};Object(c["q"])();const r=n((t,e,a,n,r,i)=>(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(n.boards,t=>(Object(c["p"])(),Object(c["d"])("div",{role:"button",onClick:e=>n.routeToBoard(t.id),key:t.id,class:"col-lg-2 words py-5 px-2 m-3 mx-1 text-center"},[Object(c["g"])("p",o,Object(c["z"])(t.title),1),t.creatorId===n.account.id?(Object(c["p"])(),Object(c["d"])("div",s,[Object(c["g"])("i",{onClick:Object(c["E"])(e=>n.deleteBoard(t.id),["stop"]),class:"mdi mdi-trash-can icon-size",title:"Delete Board"},null,8,["onClick"])])):Object(c["e"])("",!0)],8,["onClick"]))),128)));var i=a("5c40"),d=a("83fc"),l=a("37c0"),u=a("5d40"),b=a("6c02"),p={setup(){const t=Object(b["d"])();return Object(i["O"])(async()=>{try{await l["a"].getAccountBoards(d["AppState"].account.id)}catch(t){u["a"].toast(t,"error")}}),{boards:Object(i["d"])(()=>d["AppState"].boards),account:Object(i["d"])(()=>d["AppState"].account),async deleteBoard(t){try{await u["a"].confirmAction()&&await l["a"].deleteBoard(t)}catch(e){u["a"].toast(e,"error")}},routeToBoard(e){t.push({path:"/board/"+e})}}}};a("6d10");p.render=r,p.__scopeId="data-v-21f6974a";e["default"]=p},"108e":function(t,e,a){},"220e":function(t,e,a){},"2a6e":function(t,e,a){"use strict";a("220e")},"2b20":function(t,e,a){"use strict";a.r(e),a.d(e,"api",(function(){return s}));var c=a("bc3a"),n=a.n(c),o=a("8c89");const s=n.a.create({baseURL:o["b"],timeout:8e3})},3524:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var c=a("83fc"),n=a("2b20");class o{async getListsByBoard(t){const e=await n["api"].get("api/lists/"+t);c["AppState"].lists=e.data}async createList(t,e){await n["api"].post("api/lists/"+t,e)}async deleteList(t){await n["api"].delete("api/lists/"+t)}}const s=new o},"37c0":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));const{AppState:c}=a("83fc"),{api:n}=a("2b20");class o{async getAccountBoards(t){const e=await n.get("api/boards/"+t);c.boards=e.data}async createBoard(t){const e=await n.post("api/boards",t);c.boards=[...c.boards,e.data]}async deleteBoard(t){await n.delete("api/boards/"+t),c.boards=c.boards.filter(e=>e.id!==t)}}const s=new o},3956:function(t,e,a){"use strict";a("a7e4")},"3fc3":function(t,e,a){"use strict";a.r(e);var c=a("7a23");const n=Object(c["F"])("data-v-464913d6");Object(c["s"])("data-v-464913d6");const o={class:"col-xl-3 p-4"},s={class:"list-card-header d-flex justify-content-end"},r={class:"m-auto"},i={class:"list-card-body text-left"},d=Object(c["g"])("button",{type:"submit",class:"form-btn",title:"Add a Task"},[Object(c["g"])("i",{class:"icon-size mdi mdi-comment-plus add-task"})],-1);Object(c["q"])();const l=n((t,e,a,n,l,u)=>{const b=Object(c["w"])("Tasks");return Object(c["p"])(),Object(c["d"])("div",o,[Object(c["g"])("div",{class:"list-card",onDrop:e[4]||(e[4]=t=>n.drop(t,a.list.id)),onDragover:e[5]||(e[5]=Object(c["E"])(()=>{},["prevent"])),onDragenter:e[6]||(e[6]=Object(c["E"])(()=>{},["prevent"]))},[Object(c["g"])("div",s,[Object(c["g"])("h2",r,Object(c["z"])(a.list.title),1),a.list.creatorId===n.account.id?(Object(c["p"])(),Object(c["d"])("h3",{key:0,role:"button",title:"Delete List",class:"mdi mdi-trash-can",onClick:e[1]||(e[1]=t=>n.deleteList(a.list.id))})):Object(c["e"])("",!0)]),Object(c["g"])("div",i,[Object(c["g"])("div",null,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(n.tasks,t=>(Object(c["p"])(),Object(c["d"])(b,{key:t.id,task:t,list:a.list},null,8,["task","list"]))),128))])]),Object(c["g"])("form",{onSubmit:e[3]||(e[3]=Object(c["E"])(e=>n.addTask(t.event,a.list.id),["prevent"]))},[Object(c["D"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=t=>n.state.newTask.body=t),class:"\r\n            task-input\r\n            border-left-0 border-right-0 border-top-0\r\n            bg-transparent\r\n          ",placeholder:"Add Task"},null,512),[[c["B"],n.state.newTask.body]]),d],32)],32)])});var u=a("a1e9"),b=a("5c40"),p=a("3524"),m=a("63b7"),f=a("5d40"),O=a("83fc"),j=a("6c02"),g=a("56d7"),k={props:{list:{type:Object,required:!0}},setup(){const t=Object(u["i"])({newTask:{}}),e=Object(j["c"])();return{state:t,tasks:Object(b["d"])(()=>O["AppState"].tasks),account:Object(b["d"])(()=>O["AppState"].account),async drop(t,e){const a=t.dataTransfer.getData("taskId"),c=O["AppState"].tasks.find(t=>t.id==a);c.listId=e,await m["a"].moveTask(c),g["globals"].$redrawVueMasonry()},async addTask(a,c){try{await m["a"].addTask(e.params.id,c,t.newTask),t.newTask={},g["globals"].$redrawVueMasonry()}catch(n){f["a"].toast(n,"error")}},async deleteList(t){try{await f["a"].confirmAction()&&await p["a"].deleteList(t)}catch(e){f["a"].toast(e,"error")}}}}};a("01d32");k.render=l,k.__scopeId="data-v-464913d6";e["default"]=k},"41cb":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var c=a("6c02"),n=a("8816");function o(t){return()=>a("a2f9")(`./${t}.vue`)}const s=[{path:"/",name:"Home",component:o("HomePage")},{path:"/about",name:"About",component:o("AboutPage")},{path:"/account",name:"Account",component:o("AccountPage"),beforeEnter:n["a"]},{path:"/boards/:id",name:"Boards",component:o("BoardsPage"),beforeEnter:n["a"]},{path:"/board/:id",name:"Board",component:o("BoardPage"),beforeEnter:n["a"]}],r=Object(c["a"])({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:Object(c["b"])(),routes:s})},4911:function(t,e,a){"use strict";a("735d")},"4f80":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e),a.d(e,"globals",(function(){return m}));var c=a("7a23");function n(t,e,a,n,o,s){const r=Object(c["w"])("router-view");return Object(c["p"])(),Object(c["d"])(r)}var o=a("83fc"),s={name:"App",setup(){return{appState:Object(c["b"])(()=>o["AppState"])}}};a("f32d");s.render=n;var r=s;function i(t){const e=a("ccc2");e.keys().forEach(a=>{const c=e(a),n=c.default||c,o=n.name||a.substr(a.lastIndexOf("/")+1).replace(/\.\w+$/,"");t.component(o,n)})}var d=a("41cb"),l=a("14b7"),u=a("1fa0");a("4989"),a("1157");const b=Object(l["a"])(),p=Object(c["c"])(r);p.config.globalProperties.emitter=b,p.use(u["a"]),i(p),p.use(d["a"]).mount("#app");const m=p.config.globalProperties},"5d40":function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var c=a("3d20"),n=a.n(c);class o{static async confirmAction(t="Are you sure?",e="You won't be able to revert this!",a="warning",c="Yes, delete it!"){try{const o=await n.a.fire({title:t,text:e,icon:a,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:c});return!!o.isConfirmed}catch(o){return!1}}static toast(t="Warning!",e="warning",a="top-end",c=3e3,o=!0){n.a.fire({title:t,icon:e,position:a,timer:c,timerProgressBar:o,toast:!0,showConfirmButton:!1})}}},"5ea5":function(t,e,a){"use strict";a.r(e);var c=a("7a23");const n=Object(c["F"])("data-v-fcd1af8e");Object(c["s"])("data-v-fcd1af8e");const o={class:"sidebar-div p-5 text-center"},s={class:"text-primary text-break"},r=Object(c["f"])(" Home "),i=Object(c["f"])(" Boards "),d={key:1},l=Object(c["g"])("div",{class:"hoverable"}," Account ",-1);Object(c["q"])();const u=n((t,e,a,u,b,p)=>{const m=Object(c["w"])("router-link");return Object(c["p"])(),Object(c["d"])("div",o,[Object(c["g"])("img",{class:"profile-img img-fluid mb-5",src:u.account.picture,alt:""},null,8,["src"]),Object(c["g"])("h1",s,Object(c["z"])(u.account.name),1),Object(c["g"])(m,{to:{name:"Home"},class:"nav-link"},{default:n(()=>[r]),_:1}),Object(c["g"])(m,{to:{name:"Boards",params:{id:u.account.id}},class:"nav-link"},{default:n(()=>[i]),_:1},8,["to"]),u.user.isAuthenticated?(Object(c["p"])(),Object(c["d"])("div",d,[Object(c["g"])(m,{to:{name:"Account"}},{default:n(()=>[l]),_:1}),Object(c["g"])("div",{class:"nav-link text-primary",onClick:e[2]||(e[2]=(...t)=>u.logout&&u.logout(...t)),role:"button"}," Logout ")])):(Object(c["p"])(),Object(c["d"])("button",{key:0,class:"btn btn-outline-primary text-uppercase",onClick:e[1]||(e[1]=(...t)=>u.login&&u.login(...t))}," Login "))])});var b=a("b012"),p=a("83fc"),m={setup(){const t=Object(c["t"])({dropOpen:!1});return{state:t,user:Object(c["b"])(()=>p["AppState"].user),account:Object(c["b"])(()=>p["AppState"].account),async login(){b["a"].loginWithPopup()},async logout(){b["a"].logout({returnTo:window.location.origin})}}}};a("2a6e");m.render=u,m.__scopeId="data-v-fcd1af8e";e["default"]=m},"62a9":function(t,e,a){"use strict";a.r(e);var c=a("7a23");const n={key:0,class:"d-flex justify-content-between"};function o(t,e,a,o,s,r){return a.comment.taskId===a.task.id?(Object(c["p"])(),Object(c["d"])("div",n,[Object(c["g"])("p",null,[Object(c["g"])("img",{src:a.comment.creator.picture,class:"rounded-circle pr-1",height:"50"},null,8,["src"]),Object(c["f"])(Object(c["z"])(a.comment.body),1)]),a.comment.creatorId===o.account.id?(Object(c["p"])(),Object(c["d"])("i",{key:0,role:"button",onClick:e[1]||(e[1]=t=>o.deleteComment(a.comment.id)),title:"Delete Comment",class:"mdi mdi-trash-can-outline"})):Object(c["e"])("",!0)])):Object(c["e"])("",!0)}var s=a("5c40"),r=a("e5f0"),i=a("5d40"),d=a("83fc"),l={props:{comment:{type:Object,required:!0},task:{type:Object,required:!0}},setup(){return{account:Object(s["d"])(()=>d["AppState"].account),async deleteComment(t){try{await i["a"].confirmAction()&&await r["a"].deleteComment(t)}catch(e){i["a"].toast(e,"error")}}}}};l.render=o;e["default"]=l},"63b7":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var c=a("83fc"),n=a("2b20");class o{async addTask(t,e,a){await n["api"].post(`api/tasks/${t}/${e}`,a)}async getTasksByBoard(t){const e=await n["api"].get("api/tasks/"+t);c["AppState"].tasks=e.data}async deleteTask(t){await n["api"].delete("api/tasks/"+t)}async moveTask(t){await n["api"].put("api/tasks/"+t.id,t)}async editTask(t,e){const a=await n["api"].put("api/tasks/"+t,e);c["AppState"].tasks=c["AppState"].tasks.filter(e=>e.id!==t),c["AppState"].tasks=[...c["AppState"].tasks,a.data]}}const s=new o},"6d10":function(t,e,a){"use strict";a("8ce5")},"6f80":function(t,e,a){"use strict";a.r(e);var c=a("7a23");const n={class:"modal fade",id:"board-form",tabindex:"-1","aria-labelledby":"Board Form","aria-hidden":"true"},o={class:"modal-dialog"},s={class:"modal-content"},r=Object(c["g"])("div",{class:"modal-header"},[Object(c["g"])("h5",{class:"modal-title",id:"exampleModalLabel"}," Create Board "),Object(c["g"])("button",{type:"button",class:"close",title:"Close Form","data-dismiss":"modal","aria-label":"Close"},[Object(c["g"])("span",{"aria-hidden":"true"},"×")])],-1),i={class:"modal-body"},d=Object(c["g"])("label",{for:"Title",class:"sr-only"},"Title",-1),l=Object(c["g"])("button",{type:"button",class:"btn btn-outline-danger mr-3","data-dismiss":"modal"}," Close ",-1),u=Object(c["g"])("button",{type:"submit",class:"btn btn-success"}," Save changes ",-1);function b(t,e,a,b,p,m){return Object(c["p"])(),Object(c["d"])("div",n,[Object(c["g"])("div",o,[Object(c["g"])("div",s,[r,Object(c["g"])("div",i,[Object(c["g"])("form",{onSubmit:e[2]||(e[2]=Object(c["E"])((...t)=>b.createBoard&&b.createBoard(...t),["prevent"]))},[d,Object(c["D"])(Object(c["g"])("input",{type:"text",maxlength:"40","onUpdate:modelValue":e[1]||(e[1]=t=>b.state.boardData.title=t),class:"w-100 border-left-0 border-right-0 border-top-0 my-3",placeholder:"Board Name"},null,512),[[c["B"],b.state.boardData.title]]),l,u],32)])])])])}var p=a("a1e9"),m=a("5d40"),f=a("37c0"),O=a("1157"),j=a.n(O),g={setup(){const t=Object(p["i"])({boardData:{}});return{state:t,async createBoard(e){try{await f["a"].createBoard(t.boardData),e.target.reset(),j()("#board-form").modal("hide")}catch(a){m["a"].toast(a,"error")}}}}};g.render=b;e["default"]=g},"735d":function(t,e,a){},"75fd":function(t,e,a){"use strict";a.r(e);var c=a("7a23");const n={class:"modal fade",id:"list-form",tabindex:"-1","aria-labelledby":"List Form","aria-hidden":"true"},o={class:"modal-dialog"},s={class:"modal-content"},r=Object(c["g"])("div",{class:"modal-header"},[Object(c["g"])("h5",{class:"modal-title",id:"exampleModalLabel"}," Create List "),Object(c["g"])("button",{type:"button",class:"close",title:"Close Form","data-dismiss":"modal","aria-label":"Close"},[Object(c["g"])("span",{"aria-hidden":"true"},"×")])],-1),i={class:"modal-body"},d=Object(c["g"])("label",{for:"Title",class:"sr-only"},"Title",-1),l=Object(c["g"])("button",{type:"button",class:"btn btn-outline-danger mr-3","data-dismiss":"modal"}," Close ",-1),u=Object(c["g"])("button",{type:"submit",class:"btn btn-success"}," Save changes ",-1);function b(t,e,a,b,p,m){return Object(c["p"])(),Object(c["d"])("div",n,[Object(c["g"])("div",o,[Object(c["g"])("div",s,[r,Object(c["g"])("div",i,[Object(c["g"])("form",{onSubmit:e[2]||(e[2]=Object(c["E"])((...t)=>b.createList&&b.createList(...t),["prevent"]))},[d,Object(c["D"])(Object(c["g"])("input",{type:"text",maxlength:"40","onUpdate:modelValue":e[1]||(e[1]=t=>b.state.listData.title=t),class:"w-100 border-left-0 border-right-0 border-top-0 my-3",placeholder:"List Name"},null,512),[[c["B"],b.state.listData.title]]),l,u],32)])])])])}var p=a("a1e9"),m=a("5d40"),f=a("3524"),O=a("1157"),j=a.n(O),g=a("6c02"),k={setup(){const t=Object(g["c"])(),e=Object(p["i"])({listData:{}});return{state:e,async createList(a){try{await f["a"].createList(t.params.id,e.listData),a.target.reset(),j()("#list-form").modal("hide")}catch(c){m["a"].toast(c,"error")}}}}};k.render=b;e["default"]=k},"7a57":function(t,e,a){},"83fc":function(t,e,a){"use strict";a.r(e),a.d(e,"AppState",(function(){return n}));var c=a("7a23");const n=Object(c["t"])({user:{},account:{},boards:[],lists:[],tasks:[],comments:[]})},"8c89":function(t,e,a){"use strict";a.d(e,"d",(function(){return c})),a.d(e,"b",(function(){return n})),a.d(e,"e",(function(){return o})),a.d(e,"a",(function(){return s})),a.d(e,"c",(function(){return r}));const c=window.location.origin.includes("localhost"),n=c?"http://localhost:3000":"",o="wallacecodeworks.us.auth0.com",s="kannedit.com",r="nCzhQqoe6oZzMoINXuLoDLX6MVt66TBT"},"8ce5":function(t,e,a){},"8d91":function(t,e,a){"use strict";a.r(e);var c=a("7a23");const n=Object(c["F"])("data-v-8e08e968");Object(c["s"])("data-v-8e08e968");const o={key:0},s={class:"text-break"};Object(c["q"])();const r=n((t,e,a,n,r,i)=>{const d=Object(c["w"])("TaskModal");return a.task.listId===a.list.id?(Object(c["p"])(),Object(c["d"])("div",o,[Object(c["g"])("div",{"data-toggle":"modal","data-target":"#m"+a.task.id,class:"task-div shadow d-flex justify-content-between pr-2",draggable:!0,onDragstart:e[2]||(e[2]=t=>n.drag(t,a.task))},[Object(c["g"])("p",s,Object(c["z"])(a.task.body),1),a.task.creatorId===n.account.id?(Object(c["p"])(),Object(c["d"])("i",{key:0,role:"button",onClick:e[1]||(e[1]=Object(c["E"])(t=>n.deleteTask(a.task.id),["stop"])),class:"mdi mdi-trash-can",title:"Delete Task"})):Object(c["e"])("",!0)],40,["data-target"]),Object(c["g"])(d,{task:a.task},null,8,["task"])])):Object(c["e"])("",!0)});var i=a("5c40"),d=a("83fc"),l=a("5d40"),u=a("63b7"),b={props:{task:{type:Object,required:!0},list:{type:Object,required:!0}},setup(){return{tasks:Object(i["d"])(()=>d["AppState"].tasks),lists:Object(i["d"])(()=>d["AppState"].lists),account:Object(i["d"])(()=>d["AppState"].account),drag(t,e){t.dataTransfer.drogEffect="move",t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("taskId",e.id)},async deleteTask(t){try{await l["a"].confirmAction()&&await u["a"].deleteTask(t)}catch(e){l["a"].toast(e,"error")}}}}};a("3956");b.render=r,b.__scopeId="data-v-8e08e968";e["default"]=b},"8f64":function(t,e,a){"use strict";a("108e")},"8ff2":function(t,e,a){"use strict";a.r(e);var c=a("7a23");const n={class:"modal-dialog"},o={class:"modal-content"},s={class:"modal-header"},r={key:0,class:"modal-title text-break",id:"exampleModalLabel"},i=Object(c["g"])("span",{"aria-hidden":"true"},"×",-1),d={key:0,class:"modal-body d-flex justify-content-between"},l={key:0},u={key:1,class:"modal-body"},b={class:"modal-body border-top"},p=Object(c["g"])("h4",{class:"border-bottom pb-1"}," Comments: ",-1),m=Object(c["g"])("label",{for:"comment",class:"sr-only"},"Comment",-1),f=Object(c["g"])("button",{type:"submit",class:"form-btn",title:"Add a comment"},[Object(c["g"])("h5",{class:"mdi mdi-message-plus"})],-1);function O(t,e,a,O,j,g){const k=Object(c["w"])("Comments");return Object(c["p"])(),Object(c["d"])("div",{class:"modal fade",id:"m"+a.task.id,tabindex:"-1","aria-labelledby":"Task Details","aria-hidden":"true"},[Object(c["g"])("div",n,[Object(c["g"])("div",o,[Object(c["g"])("div",s,[!1===O.state.taskUpdateForm?(Object(c["p"])(),Object(c["d"])("h3",r,Object(c["z"])(a.task.body),1)):Object(c["e"])("",!0),!0===O.state.taskUpdateForm?Object(c["D"])((Object(c["p"])(),Object(c["d"])("input",{key:1,type:"text",class:"border-right-0 border-left-0 border-top-0 bg-transparent","onUpdate:modelValue":e[1]||(e[1]=t=>O.state.taskUpdate.body=t)},null,512)),[[c["B"],O.state.taskUpdate.body]]):Object(c["e"])("",!0),Object(c["g"])("button",{type:"button",class:"close",title:"Close Task","data-dismiss":"modal","aria-label":"Close",onClick:e[2]||(e[2]=(...t)=>O.hideForm&&O.hideForm(...t))},[i])]),!1===O.state.taskUpdateForm?(Object(c["p"])(),Object(c["d"])("div",d,[a.task.description?(Object(c["p"])(),Object(c["d"])("p",l,Object(c["z"])(a.task.description),1)):Object(c["e"])("",!0),a.task.creatorId===O.account.id?(Object(c["p"])(),Object(c["d"])("i",{key:1,role:"button",onClick:e[3]||(e[3]=(...t)=>O.showForm&&O.showForm(...t)),title:"Edit Description",class:"mdi mdi-pencil-plus-outline"})):Object(c["e"])("",!0)])):Object(c["e"])("",!0),!0===O.state.taskUpdateForm?(Object(c["p"])(),Object(c["d"])("div",u,[Object(c["D"])(Object(c["g"])("textarea",{name:"Task Description","onUpdate:modelValue":e[4]||(e[4]=t=>O.state.taskUpdate.description=t),cols:"49",rows:"10"},null,512),[[c["B"],O.state.taskUpdate.description]])])):Object(c["e"])("",!0),!0===O.state.taskUpdateForm?(Object(c["p"])(),Object(c["d"])("button",{key:2,class:"btn btn-success",onClick:e[5]||(e[5]=t=>O.editTask(a.task.id))}," Accept Edit ")):Object(c["e"])("",!0),Object(c["g"])("div",b,[p,(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(O.comments,t=>(Object(c["p"])(),Object(c["d"])(k,{key:t.id,comment:t,task:a.task},null,8,["comment","task"]))),128)),Object(c["g"])("form",{onSubmit:e[7]||(e[7]=Object(c["E"])(t=>O.createComment(a.task.id),["prevent"]))},[m,Object(c["D"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":e[6]||(e[6]=t=>O.state.newComment.body=t),class:"border-top-0 border-left-0 border-right-0 bg-transparent w-75 mt-3",placeholder:"Comment"},null,512),[[c["B"],O.state.newComment.body]]),f],32)])])])],8,["id"])}var j=a("a1e9"),g=a("5d40"),k=a("e5f0"),h=a("5c40"),v=a("83fc"),y=a("6c02"),w=a("63b7"),A={props:{task:{type:Object,required:!0}},setup(t){const e=Object(y["c"])(),a=Object(j["i"])({newComment:{},taskUpdate:{description:t.task.description,body:t.task.body,id:t.task.id,boardId:t.task.boardId,listId:t.task.listId},taskUpdateForm:!1});return{state:a,comments:Object(h["d"])(()=>v["AppState"].comments),account:Object(h["d"])(()=>v["AppState"].account),async createComment(t){try{await k["a"].createComment(e.params.id,t,a.newComment),a.newComment={}}catch(c){g["a"].toast(c,"error")}},async editTask(e){try{await w["a"].editTask(e,a.taskUpdate),a.taskUpdate={description:t.task.description,body:t.task.body,id:t.task.id,boardId:t.task.boardId,listId:t.task.listId},a.taskUpdateForm=!1}catch(c){g["a"].toast(c,"error")}},showForm(){a.taskUpdateForm=!0},hideForm(){a.taskUpdateForm=!1}}}};a("4911");A.render=O;e["default"]=A},"9d8d":function(t,e,a){"use strict";a.r(e);var c=a("7a23"),n=a("af8d"),o=a.n(n);const s=Object(c["F"])("data-v-469de13f");Object(c["s"])("data-v-469de13f");const r={class:"navbar nbar navbar-expand-lg navbar-dark bg-dark"},i=Object(c["g"])("div",{class:"d-flex flex-column align-items-center"},[Object(c["g"])("img",{alt:"logo",src:o.a,width:"100"})],-1),d=Object(c["g"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["g"])("span",{class:"navbar-toggler-icon"})],-1),l={class:"collapse navbar-collapse",id:"navbarText"},u={class:"navbar-nav mr-auto"},b={class:"nav-item"},p=Object(c["f"])(" Home "),m={class:"nav-item"},f=Object(c["f"])(" About "),O={class:"navbar-text"},j={key:1,class:"dropdown"},g={class:"mx-3"},k=Object(c["g"])("div",{class:"list-group-item list-group-item-action hoverable"}," Account ",-1);Object(c["q"])();const h=s((t,e,a,n,o,h)=>{const v=Object(c["w"])("router-link");return Object(c["p"])(),Object(c["d"])("nav",r,[Object(c["g"])(v,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:s(()=>[i]),_:1}),d,Object(c["g"])("div",l,[Object(c["g"])("ul",u,[Object(c["g"])("li",b,[Object(c["g"])(v,{to:{name:"Home"},class:"nav-link"},{default:s(()=>[p]),_:1})]),Object(c["g"])("li",m,[Object(c["g"])(v,{to:{name:"About"},class:"nav-link"},{default:s(()=>[f]),_:1})])]),Object(c["g"])("span",O,[n.user.isAuthenticated?(Object(c["p"])(),Object(c["d"])("div",j,[Object(c["g"])("div",{class:"dropdown-toggle",onClick:e[2]||(e[2]=t=>n.state.dropOpen=!n.state.dropOpen)},[Object(c["g"])("img",{src:n.user.picture,alt:"user photo",height:"40",class:"profile-img"},null,8,["src"]),Object(c["g"])("span",g,Object(c["z"])(n.user.name),1)]),Object(c["g"])("div",{class:["dropdown-menu p-0 list-group w-100",{show:n.state.dropOpen}],onClick:e[4]||(e[4]=t=>n.state.dropOpen=!1)},[Object(c["g"])(v,{to:{name:"Account"}},{default:s(()=>[k]),_:1}),Object(c["g"])("div",{class:"list-group-item list-group-item-action hoverable",onClick:e[3]||(e[3]=(...t)=>n.logout&&n.logout(...t))}," logout ")],2)])):(Object(c["p"])(),Object(c["d"])("button",{key:0,class:"btn btn-outline-primary text-uppercase",onClick:e[1]||(e[1]=(...t)=>n.login&&n.login(...t))}," Login "))])])])});var v=a("b012"),y=a("83fc"),w={name:"Navbar",setup(){const t=Object(c["t"])({dropOpen:!1});return{state:t,user:Object(c["b"])(()=>y["AppState"].user),async login(){v["a"].loginWithPopup()},async logout(){v["a"].logout({returnTo:window.location.origin})}}}};a("8f64");w.render=h,w.__scopeId="data-v-469de13f";e["default"]=w},a2f9:function(t,e,a){var c={"./AboutPage.vue":["478b","chunk-2d0c19e3"],"./AccountPage.vue":["e542","chunk-e5b120da"],"./BoardPage.vue":["f517","chunk-3f4dde19"],"./BoardsPage.vue":["1474","chunk-1c504d4a"],"./HomePage.vue":["78a7","chunk-27524851"]};function n(t){if(!a.o(c,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=c[t],n=e[0];return a.e(e[1]).then((function(){return a(n)}))}n.keys=function(){return Object.keys(c)},n.id="a2f9",t.exports=n},a7e4:function(t,e,a){},af8d:function(t,e,a){t.exports=a.p+"img/kanban-logo.42610b29.png"},b012:function(t,e,a){"use strict";a.d(e,"a",(function(){return v}));var c=a("8816"),n=a("83fc"),o=a("8c89"),s=a("41cb");function r(t,e){if(o["d"])console[t](`[${t}] :: ${(new Date).toLocaleTimeString()} :: `,...e);else{switch(t){case"log":case"assert":return}console[t](`[${t}] :: ${(new Date).toLocaleTimeString()} :: `,...e)}}const i={log(){r("log",arguments)},error(){r("error",arguments)},warn(){r("warn",arguments)},assert(){r("assert",arguments)},trace(){r("trace",arguments)}};var d=a("2b20");class l{async getAccount(){try{const t=await d["api"].get("/account");n["AppState"].account=t.data}catch(t){i.error("HAVE YOU STARTED YOUR SERVER YET???",t)}}}const u=new l;var b=a("56d7"),p=a("8e27"),m=a.n(p);let f=!1,O=[];const j={connection:"connection",connected:"connected",disconnect:"disconnect",authenticate:"authenticate",authenticated:"authenticated",userConnected:"userConnected",userDisconnected:"userDisconnected",error:"error"};class g{constructor(t=o["b"]){this.socket=m()(t||o["b"]),this.on(j.connected,this.onConnected).on(j.authenticated,this.onAuthenticated).on(j.error,this.onError)}on(t,e){return this.socket.on(t,e.bind(this)),this}onConnected(t){i.log("[SOCKET_CONNECTION]",t),f=!0}onAuthenticated(t){i.log("[SOCKET_AUTHENTICATED]",t);const e=[...O];O=[],e.forEach(t=>{this.emit(t.action,t.payload)})}authenticate(t){this.socket.emit(j.authenticate,t)}onError(t){i.error("[SOCKET_ERROR]",t)}emit(t,e){if(!f)return i.log("[ENQUEING_ACTION]",{action:t,payload:e}),O.push({action:t,payload:e});this.socket.emit(t,e)}}class k extends g{constructor(){super(),this.on("move",this.updateTask).on("createTask",this.createTask).on("delete",this.deleteTask).on("createList",this.createList).on("deleteList",this.deleteList).on("createComment",this.createComment).on("deleteComment",this.deleteComment)}updateTask(t){const e=n["AppState"].tasks.findIndex(e=>e.id===t.id);n["AppState"].tasks.splice(e,1,t)}createTask(t){n["AppState"].tasks.push(t),b["globals"].$redrawVueMasonry()}deleteTask(t){n["AppState"].tasks=n["AppState"].tasks.filter(e=>e.id!==t.id),b["globals"].$redrawVueMasonry()}createList(t){n["AppState"].lists.push(t)}deleteList(t){n["AppState"].lists=n["AppState"].lists.filter(e=>e.id!==t.id),b["globals"].$redrawVueMasonry()}createComment(t){n["AppState"].comments.push(t)}deleteComment(t){n["AppState"].comments=n["AppState"].comments.filter(e=>e.id!==t.id)}}const h=new k,v=Object(c["b"])({domain:o["e"],clientId:o["c"],audience:o["a"],useRefreshTokens:!0,onRedirectCallback:t=>{s["a"].push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}});async function y(t){if(!v.isAuthenticated)return t;const e=1e3*v.identity.exp,a=e<Date.now(),c=e<Date.now()+432e5;return a?await v.loginWithPopup():c&&await v.getTokenSilently(),d["api"].defaults.headers.authorization=v.bearer,t}v.on(v.AUTH_EVENTS.AUTHENTICATED,(async function(){d["api"].defaults.headers.authorization=v.bearer,d["api"].interceptors.request.use(y),n["AppState"].user=v.user,await u.getAccount(),h.authenticate(v.bearer)}))},ccc2:function(t,e,a){var c={"./BoardModal.vue":"6f80","./Boards.vue":"0e41","./Comments.vue":"62a9","./ListModal.vue":"75fd","./Lists.vue":"3fc3","./Sidebar.vue":"5ea5","./TaskModal.vue":"8ff2","./Tasks.vue":"8d91","./navbar.vue":"9d8d"};function n(t){var e=o(t);return a(e)}function o(t){if(!a.o(c,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return c[t]}n.keys=function(){return Object.keys(c)},n.resolve=o,t.exports=n,n.id="ccc2"},e5f0:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var c=a("2b20");class n{async createComment(t,e,a){await c["api"].post(`api/comments/${t}/${e}`,a)}async getComments(t){await c["api"].get("api/comments/"+t)}async deleteComment(t){await c["api"].delete("api/comments/"+t)}}const o=new n},f32d:function(t,e,a){"use strict";a("4f80")}});