import './polyfills.server.mjs';
import{B as O,C as N,D as x,E as P,H as k,N as B,a as p,b as h,c as M,d as m,e as v,f as E,g as I,h as l,i as D,j as r,k as o,l as y,m as _,n as u,o as g,p as a,q as S,r as C,s as f,z as T}from"./chunk-CRWSDJXA.mjs";import{a as F,b as w}from"./chunk-VVCT4QZE.mjs";var z={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Se=w(F({},z),{"[class.ng-submitted]":"isSubmitted"});var Z=new I("CallSetDisabledState",{providedIn:"root",factory:()=>G}),G="always";var Y=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=M({type:e}),e.\u0275inj=E({});let i=e;return i})();var A=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:Z,useValue:t.callSetDisabledState??G}]}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=M({type:e}),e.\u0275inj=E({imports:[Y]});let i=e;return i})();var j=(()=>{let e=class e{constructor(){this.onTransactionAdded=new p}addTransaction(t,n){let s={amount:Number(t),type:this.transactionType,title:n};this.onTransactionAdded.emit(s)}ngOnInit(){this.transactionType}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["app-transaction"]],inputs:{transactionType:"transactionType"},outputs:{onTransactionAdded:"onTransactionAdded"},standalone:!0,features:[f],decls:10,vars:2,consts:[[1,"transaction"],["for","transaction-type"],["placeholder","amount",1,"amount"],["transactionAmount",""],["placeholder","title",1,"title"],["transactionTitle",""],["type","button",3,"click"]],template:function(n,s){if(n&1){let d=_();r(0,"div",0)(1,"label",1),a(2),o(),y(3,"br")(4,"input",2,3)(6,"input",4,5),r(8,"button",6),u("click",function(){m(d);let V=g(5),q=g(7);return v(s.addTransaction(V.value,q.value))}),a(9),o()()}n&2&&(l(2),S(s.transactionType),l(7),C(" ",s.transactionType==="Income"?"Receive":"Send"," "))},dependencies:[A],styles:[".transaction[_ngcontent-%COMP%]{display:flex;flex-direction:column}label[_ngcontent-%COMP%]{text-align:center}"]});let i=e;return i})();var R=(()=>{let e=class e{constructor(){this.onTransferToSaving=new p}transferToSavings(t){this.currentBalance>=0&&this.onTransferToSaving.emit(Number(t))}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["app-balance"]],inputs:{currentBalance:"currentBalance"},outputs:{onTransferToSaving:"onTransferToSaving"},standalone:!0,features:[f],decls:9,vars:1,consts:[["type","text","placeholder","amount"],["amount",""],["type","button",3,"click"]],template:function(n,s){if(n&1){let d=_();r(0,"h2"),a(1,"Your balance"),o(),r(2,"div")(3,"h3"),a(4),o(),y(5,"input",0,1),r(7,"button",2),u("click",function(){m(d);let V=g(6);return v(s.transferToSavings(V.value))}),a(8," Send to Saving "),o()()}n&2&&(l(4),C("Total: ",s.currentBalance,""))},styles:["h2[_ngcontent-%COMP%]{text-align:center;margin-top:50px}"]});let i=e;return i})();var U=(()=>{let e=class e{constructor(){this.targetAmount=0,this.onTransferToBalance=new p}setTarget(t){this.targetAmount=t}transferToBalance(t){this.savingAmount>=0&&this.onTransferToBalance.emit(Number(t))}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["app-saving"]],inputs:{savingAmount:"savingAmount"},outputs:{onTransferToBalance:"onTransferToBalance"},standalone:!0,features:[f],decls:10,vars:1,consts:[["type","text","placeholder","amount"],["amount",""],["type","button",3,"click"]],template:function(n,s){if(n&1){let d=_();r(0,"div")(1,"h2"),a(2,"Your Saving"),o(),r(3,"div")(4,"h3"),a(5),o(),y(6,"input",0,1),r(8,"button",2),u("click",function(){m(d);let V=g(7);return v(s.transferToBalance(V.value))}),a(9," Send to Balance "),o()()()}n&2&&(l(5),C("Total: ",s.savingAmount,""))},dependencies:[A],styles:["h2[_ngcontent-%COMP%]{text-align:center}"]});let i=e;return i})();var H=(()=>{let e=class e{constructor(){this.title="angular-saving-app",this.transactions=[],this.savingAmount=0,this.currentBalance=0}handleAddTransaction(t){t.type==="Expense"&&this.currentBalance<t.amount?window.alert("Not enough to execute transaction"):t.type==="Income"?this.currentBalance+=t.amount:this.currentBalance-=t.amount}handleTransferToSaving(t){return t>this.currentBalance?window.alert("Not enough Balance to execute transaction"):this.currentBalance>=t&&t>0&&(this.currentBalance-=t,this.savingAmount+=t),this.currentBalance}handleTransferToBalance(t){console.log(`Amount: ${t}, Saving Amount: ${this.savingAmount}`),t>this.savingAmount?(console.log("Not enough balance to execute transaction"),window.alert("Not enough balance to execute transaction")):this.savingAmount>=t&&t>0&&(this.currentBalance+=t,this.savingAmount-=t)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=h({type:e,selectors:[["app-root"]],standalone:!0,features:[f],decls:12,vars:4,consts:[[1,"container"],[1,"app-balance",3,"currentBalance","onTransferToSaving"],[1,"transactions"],[3,"transactionType","onTransactionAdded"],[3,"savingAmount","onTransferToBalance"]],template:function(n,s){n&1&&(r(0,"div",0)(1,"h1"),a(2,"Welcome to the Budget App"),o(),r(3,"app-balance",1),u("onTransferToSaving",function(c){return s.handleTransferToSaving(c)}),o(),r(4,"h2"),a(5,"Transaction"),o(),r(6,"div",2)(7,"app-transaction",3),u("onTransactionAdded",function(c){return s.handleAddTransaction(c)}),o(),r(8,"app-transaction",3),u("onTransactionAdded",function(c){return s.handleAddTransaction(c)}),o()(),r(9,"app-saving",4),u("onTransferToBalance",function(c){return s.handleTransferToBalance(c)}),o()(),r(10,"footer"),a(11,"Created by Tung Nguyen"),o()),n&2&&(l(3),D("currentBalance",s.currentBalance),l(4),D("transactionType","Income"),l(),D("transactionType","Expense"),l(),D("savingAmount",s.savingAmount))},dependencies:[j,O,R,U],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:auto;font-family:monospace;align-items:center}h1[_ngcontent-%COMP%]{margin-bottom:0;text-align:center}.transactions[_ngcontent-%COMP%]{display:flex;align-items:center}footer[_ngcontent-%COMP%]{margin-top:40px;text-align:center}"]});let i=e;return i})();var L=[];var $={providers:[B(L),P(),N()]};var X={providers:[k()]},W=T($,X);var K=()=>x(H,W),pt=K;export{pt as a};