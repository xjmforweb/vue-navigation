webpackJsonp([0],{18:function(t,e,n){var o=n(5)(n(26),n(28),null,null);t.exports=o.exports},19:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"page",data:function(){return{scrollTop:0}},methods:{back:function(){window.history.back()},scroll:function(){this.scrollTop=this.$refs.content.scrollTop}},activated:function(){this.$refs.content.scrollTop=this.scrollTop}}},20:function(t,e,n){e=t.exports=n(14)(),e.push([t.i,".page{height:100%;position:relative}.header{background-color:#fff;position:absolute;width:100%;top:0;height:48px;line-height:48px;border-bottom:1px solid #e0e0e0;display:-webkit-box;display:-ms-flexbox;display:flex}.left,.right{width:40px;padding:0 10px;cursor:pointer}.center{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:center}.content{padding:0 10px;position:absolute;box-sizing:border-box;width:100%;top:49px;bottom:0;overflow:auto}","",{version:3,sources:["/Users/zack/Documents/github/vue-navigation/examples/src/components/Page.vue"],names:[],mappings:"AACA,MACE,YAAa,AACb,iBAAmB,CACpB,AACD,QACE,sBAAuB,AACvB,kBAAmB,AACnB,WAAY,AACZ,MAAS,AACT,YAAa,AACb,iBAAkB,AAClB,gCAAiC,AACjC,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CACf,AACD,aACE,WAAY,AACZ,eAAgB,AAChB,cAAgB,CACjB,AACD,QACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,iBAAmB,CACpB,AACD,SACE,eAAgB,AAChB,kBAAmB,AACnB,sBAAuB,AACvB,WAAY,AACZ,SAAU,AACV,SAAY,AACZ,aAAe,CAChB",file:"Page.vue",sourcesContent:["\n.page {\n  height: 100%;\n  position: relative;\n}\n.header {\n  background-color: #fff;\n  position: absolute;\n  width: 100%;\n  top: 0px;\n  height: 48px;\n  line-height: 48px;\n  border-bottom: 1px solid #e0e0e0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.left, .right {\n  width: 40px;\n  padding: 0 10px;\n  cursor: pointer;\n}\n.center {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n}\n.content {\n  padding: 0 10px;\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  top: 49px;\n  bottom: 0px;\n  overflow: auto;\n}\n"],sourceRoot:""}])},21:function(t,e,n){var o=n(20);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(15)("0f8cd410",o,!0)},22:function(t,e,n){n(21);var o=n(5)(n(19),n(23),null,null);t.exports=o.exports},23:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"header"},[n("div",{staticClass:"left",on:{click:t.back}},[t._v("back")]),t._v(" "),n("div",{staticClass:"center"},[t._v("title")]),t._v(" "),n("div",{staticClass:"right"})]),t._v(" "),n("div",{ref:"content",staticClass:"content",on:{scroll:t.scroll}},[t._t("default")],2)])},staticRenderFns:[]}},26:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(22),i=n.n(o);e.default={name:"list",components:{Page:i.a},data:function(){return{random:Math.random().toFixed(4)}},activated:function(){},deactivated:function(){}}},28:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page",[n("div",{staticClass:"list"},[n("p",[t._v("This is the "),n("b",[t._v("list")]),t._v(" page")]),t._v(" "),n("p",[t._v("random number: "+t._s(t.random))]),t._v(" "),t._l(30,function(e){return n("p",{key:e},[n("router-link",{attrs:{to:"list/"+e}},[t._v("go to detail page(id: "+t._s(e)+")")])],1)})],2)])},staticRenderFns:[]}}});
//# sourceMappingURL=0.0d892cd3a5e2d2bc0c4d.js.map