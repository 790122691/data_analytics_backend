webpackJsonp([1],{"+skl":function(e,t){},DkJc:function(e,t){},MLZN:function(e,t){},MgVG:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),r=a("Xxa5"),o=a.n(r),s=a("exGp"),i=a.n(s),l={name:"Summary",data:function(){return{searchSymbol:this.$route.params.searchSymbol,regularMarketDayHigh:"testregularMarketDayHigh",regularMarketDayLow:"testregularMarketDayLow",regularMarketVolume:"testregularMarketVolume",regularMarketOpen:"testregularMarketOpen",averageDailyVolume3Month:"testaverageDailyVolume3Month",fiftyTwoWeekRange:"testfiftyTwoWeekRange",regularMarketPrice:"testregularMarketPrice",columns1:[{title:"Property",key:"property"},{title:"Value",key:"value"}],data1:[]}},components:{},created:function(){this.$nextTick(function(){this.searchInfo()})},methods:{searchInfo:function(){var e=this;return i()(o.a.mark(function t(){var a,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a="/stock/GetStockInfo",t.next=3,e.$http.get(a,{stock_symbol:e.searchSymbol});case 3:n=t.sent,e.regularMarketPrice=n.regularMarketPrice,e.regularMarketDayHigh=n.regularMarketDayHigh,e.regularMarketDayLow=n.regularMarketDayLow,e.regularMarketVolume=n.regularMarketVolume,e.regularMarketOpen=n.regularMarketOpen,e.averageDailyVolume3Month=n.averageDailyVolume3Month,e.fiftyTwoWeekRange=n.averageDailyVolume3Month,e.data1=[{property:"Previous close",value:e.regularMarketPrice},{property:"Open",value:e.regularMarketOpen},{property:"Volume",value:e.regularMarketVolume},{property:"Day's range",value:e.regularMarketDayLow+"-"+e.regularMarketDayHigh},{property:"52-week range",value:e.fiftyTwoWeekRange},{property:"Avg volume",value:e.averageDailyVolume3Month}];case 12:case"end":return t.stop()}},t,e)}))()},NumFormat:function(e){return num.toString().replace(/\d+/,function(e){return e.replace(/(\d)(?=(\d{3})+$)/g,function(e){return e+","})})},tableRowStyle:function(e,t){return"table-row"}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"demo-split"},[a("Split",{model:{value:e.split1,callback:function(t){e.split1=t},expression:"split1"}},[a("div",{staticClass:"demo-split-pane",attrs:{slot:"left"},slot:"left"},[a("Table",{attrs:{calss:"table-style",columns:e.columns1,data:e.data1,"row-class-name":e.tableRowStyle,"header-class-name":e.tableRowStyle}})],1),e._v(" "),a("div",{staticClass:"demo-split-pane",attrs:{slot:"right"},slot:"right"})])],1)},staticRenderFns:[]};var u=a("VU/8")(l,c,!1,function(e){a("hY2O")},null,null).exports,m=a("RePM"),h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"head-choice"},[a("div",{staticClass:"Comparisondiv"},[a("Poptip",{staticClass:"ComparisonPop"},[a("Button",{staticClass:"ComparisonBtn",attrs:{icon:"ios-search"}},[e._v("Comparison")]),e._v(" "),a("div",{staticClass:"api",attrs:{slot:"content"},slot:"content"},[a("Input",{staticClass:"input-compare",attrs:{search:"","enter-button":"",placeholder:"Enter Symbol..."},on:{"on-search":e.searchComparison},model:{value:e.compareStock,callback:function(t){e.compareStock=t},expression:"compareStock"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"DateRangediv"},[a("Poptip",{staticClass:"DateRangePop"},[a("Button",{staticClass:"DateRangeBtn",attrs:{icon:"ios-search"}},[e._v("DateRange")]),e._v(" "),a("div",{staticClass:"api",attrs:{slot:"content",id:"dateRid"},slot:"content"},[a("DatePicker",{staticStyle:{width:"200px"},attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm",placeholder:"Select date and time(Excluding seconds)"},on:{"on-change":e.sendDateMessage},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),e._v(" "),a("div",[e._v(" - now ")])],1)],1),e._v(" "),a("div",{staticClass:"DateRangediv"},[a("Button",{staticClass:"InterpolationBtn",on:{click:function(t){return e.searchbyday(e.searchbyday5)}}},[a("span",[e._v("day5")])]),e._v(" "),a("Button",{staticClass:"InterpolationBtn",on:{click:function(t){return e.searchbyday(e.searchbyday42)}}},[a("span",[e._v("day42")])]),e._v(" "),a("Button",{staticClass:"InterpolationBtn",on:{click:function(t){return e.searchbyday(e.searchbyday252)}}},[a("span",[e._v("day252")])])],1)]),e._v(" "),a("div",{staticClass:"chartdiv",attrs:{id:"echartid"}})])},staticRenderFns:[]};var d=function(e){a("MLZN")},p=a("VU/8")(m.a,h,!1,d,null,null).exports,y={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]};var f=a("VU/8")({name:"HistoricalData",data:function(){return{index:1,formDynamic:{items:[{value:"",index:1,status:1}]},columns1:[{title:"Open",key:"Open"},{title:"High",key:"High"},{title:"Low",key:"Low"},{title:"Close",key:"Close"},{title:"Volume",key:"Volume"}],data1:[]}},components:{},methods:{}},y,!1,function(e){a("wEJH")},null,null).exports,g={name:"data-detail",data:function(){return{isLogin:!1,isPortfolio:!1,theme1:"light",searchSymbol:this.$route.params.searchSymbol,shortName:"testshortName",longName:"testlongName",currency:"testcurrency",exchange:"testexchange",regularMarketPrice:"testregularMarketPrice",regularMarketChange:"testregularMarketChange",regularMarketChangeperc:"testregularMarketChangeperc"}},mounted:function(){this.$nextTick(function(){this.searchInfo(),this.checkifLogin(),this.checkisinPorfolio()})},methods:{checkifLogin:function(){var e=this;return i()(o.a.mark(function t(){var a,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a="/User/isLogin",t.next=3,e.$http.get(a);case 3:n=t.sent,e.isLogin=n.isLogin;case 5:case"end":return t.stop()}},t,e)}))()},checkisinPorfolio:function(){var e=this;return i()(o.a.mark(function t(){var a,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a="/User/isinPortfolio",t.next=3,e.$http.get(a,{stocksymbol:e.searchSymbol});case 3:n=t.sent,e.isPortfolio=n.isPortfolio;case 5:case"end":return t.stop()}},t,e)}))()},changeActive:function(){var e=this;return i()(o.a.mark(function t(){var a,n,r,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.isLogin){t.next=4;break}alert("please login first!"),t.next=17;break;case 4:if(e.isPortfolio){t.next=12;break}return a="/User/AddPortfolio",t.next=8,e.$http.get(a,{Securitysymbol:e.searchSymbol});case 8:"200"==(n=t.sent).code?e.isPortfolio=!0:console.log(n.message),t.next=17;break;case 12:return r="/User/DeletePortfolio",t.next=15,e.$http.get(r,{Securitysymbol:e.searchSymbol});case 15:"200"==(s=t.sent).code?e.isPortfolio=!1:console.log(s.message);case 17:case"end":return t.stop()}},t,e)}))()},selectpage:function(e){this.$router.push("/Info/"+this.searchSymbol+"/"+e+"/"+this.searchSymbol)},searchInfo:function(){var e=this;return i()(o.a.mark(function t(){var a,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a="/stock/GetStockInfo",t.next=3,e.$http.get(a,{stock_symbol:e.searchSymbol});case 3:n=t.sent,e.shortName=n.shortName,e.longName=n.longName,e.currency=n.currency,e.exchange=n.exchange,e.regularMarketPrice=n.regularMarketPrice,e.regularMarketChange=n.regularMarketChange,e.regularMarketChangeperc=n.regularMarketChangeperc;case 11:case"end":return t.stop()}},t,e)}))()}},components:{"data-summary":u,chart:p,historical:f}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"title"},[a("div",{staticClass:"title-left"},[a("div",{staticClass:"symbol-title"},[e._v(e._s(e.searchSymbol)+"( exchange:"+e._s(e.exchange)+" ) ")]),e._v(" "),a("div",{staticClass:"name-title"},[e._v(e._s(e.shortName)+" - "+e._s(e.longName)+" - currency in "+e._s(e.currency))])]),e._v(" "),a("div",{staticClass:"button-isAddedtoWatch",on:{click:e.changeActive}},[e.isPortfolio?a("Icon",{staticClass:"icon",attrs:{type:"md-heart",size:"24"}}):a("Icon",{staticClass:"icon",attrs:{type:"md-heart-outline",size:"24"}}),e._v(" "),a("p",[e._v("Add to Portfolio")])],1)]),e._v(" "),a("div",{staticClass:"price"},[a("div",{staticClass:"price-show"},[e._v(e._s(e.regularMarketPrice))]),e._v(" "),a("div",{staticClass:"change-show"},[e._v(e._s(e.regularMarketChange))]),e._v(" "),a("div",{staticClass:"pchange-show"},[e._v(e._s(e.regularMarketChangeperc))])]),e._v(" "),a("Menu",{staticClass:"data-menu",attrs:{mode:"horizontal",theme:e.theme1,"active-name":"2"},on:{"on-select":e.selectpage}},[a("MenuItem",{attrs:{name:"1-0"}}),e._v(" "),a("MenuItem",{attrs:{name:"Summary"}},[e._v("\n\t            Summary\n\t        ")]),e._v(" "),a("MenuItem",{attrs:{name:"Chart"}},[e._v("\n\t            Chart\n\t        ")]),e._v(" "),a("MenuItem",{attrs:{name:"HistoricalData"}},[e._v("\n\t            Historical Data\n\t        ")])],1),e._v(" "),a("router-view")],1)},staticRenderFns:[]};var k=a("VU/8")(g,v,!1,function(e){a("apFw")},null,null).exports,b={data:function(){return{isLogin:"log in",theme1:"light",searchSymbol:"",isRouterAlive:!0}},created:function(){this.$nextTick(function(){this.checkifLogin()})},components:{"data-detail":k},methods:{checkifLogin:function(){var e=this;return i()(o.a.mark(function t(){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a="/User/isLogin",t.next=3,e.$http.get(a);case 3:t.sent.isLogin?e.isLogin="log out":e.isLogin="log in";case 5:case"end":return t.stop()}},t,e)}))()},reload:function(){this.isRouterAlive=!1,this.$nextTick(function(){this.isRouterAlive=!0})},selectPageIndex:function(e){"Info"==e?(""==this.searchSymbol&&alert("Please input a symbol!"),this.$router.push("/Info/"+this.searchSymbol)):this.$router.push("/"+e)},sendMessage:function(e){this.$router.push("/Info/"+this.searchSymbol),this.reload()},loginMethod:function(e){}}},w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"div-title"},[a("Input",{staticClass:"inputsize",attrs:{search:"","enter-button":"",placeholder:"Enter Symbol..."},on:{"on-search":e.sendMessage},model:{value:e.searchSymbol,callback:function(t){e.searchSymbol=t},expression:"searchSymbol"}}),e._v(" "),a("a",{attrs:{href:"/User/"}},[a("Button",{staticClass:"button-login",attrs:{type:"primary"},on:{click:e.loginMethod}},[e._v("\n          "+e._s(e.isLogin)+"\n        ")])],1)],1),e._v(" "),a("Menu",{attrs:{mode:"horizontal",theme:e.theme1,"active-name":"1"},on:{"on-select":e.selectPageIndex}},[a("MenuItem",{attrs:{name:"0"}}),e._v(" "),a("MenuItem",{attrs:{name:"Info"}},[a("Icon",{attrs:{type:"ios-paper"}}),e._v("\n          Info\n      ")],1),e._v(" "),a("MenuItem",{attrs:{name:"MyPortfolio"}},[a("Icon",{attrs:{type:"ios-people"}}),e._v("\n          MyPortfolio\n      ")],1),e._v(" "),a("Submenu",{attrs:{name:"Screeners"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"ios-stats"}}),e._v("\n             Screeners\n          ")],1),e._v(" "),a("MenuItem",{attrs:{name:"ETFScreeners"}},[e._v("ETF Screeners")]),e._v(" "),a("MenuItem",{attrs:{name:"StockScreeners"}},[e._v("Stock Screeners")])],2)],1),e._v(" "),e.isRouterAlive?a("router-view"):e._e()],1)},staticRenderFns:[]};var M=a("VU/8")(b,w,!1,function(e){a("DkJc")},null,null).exports,S=a("/ocq"),x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("Form",{ref:"formDynamic",staticStyle:{width:"300px"},attrs:{model:e.formDynamic,"label-width":80}},[e._l(e.formDynamic.items,function(t,n){return t.status?a("FormItem",{key:n,attrs:{label:"Item "+t.index,prop:"items."+n+".value",rules:{required:!0,message:"Item "+t.index+" can not be empty",trigger:"blur"}}},[a("Row",[a("Col",{attrs:{span:"18"}},[a("Input",{attrs:{type:"text",placeholder:"Enter something..."},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}})],1),e._v(" "),a("Col",{attrs:{span:"4",offset:"1"}},[a("Button",{on:{click:function(t){return e.handleRemove(n)}}},[e._v("Delete")])],1)],1)],1):e._e()}),e._v(" "),a("FormItem",[a("Row",[a("Col",{attrs:{span:"12"}},[a("Button",{attrs:{type:"dashed",long:"",icon:"md-add"},on:{click:e.handleAdd}},[e._v("Add item")])],1)],1)],1),e._v(" "),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("formDynamic")}}},[e._v("Submit")]),e._v(" "),a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){return e.handleReset("formDynamic")}}},[e._v("Reset")])],1)],2)],1),e._v(" "),a("Table",{attrs:{stripe:"",columns:e.columns1,data:e.data1}})],1)},staticRenderFns:[]};var _=a("VU/8")({name:"ETFScreeners",data:function(){return{index:1,formDynamic:{items:[{value:"",index:1,status:1}]},columns1:[{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Address",key:"address"}],data1:[{name:"John Brown",age:18,address:"New York No. 1 Lake Park",date:"2016-10-03"},{name:"Jim Green",age:24,address:"London No. 1 Lake Park",date:"2016-10-01"},{name:"Joe Black",age:30,address:"Sydney No. 1 Lake Park",date:"2016-10-02"},{name:"Jon Snow",age:26,address:"Ottawa No. 2 Lake Park",date:"2016-10-04"}]}},components:{},methods:{handleSubmit:function(e){var t=this;this.$refs[e].validate(function(e){e?t.$Message.success("Success!"):t.$Message.error("Fail!")})},handleReset:function(e){this.$refs[e].resetFields()},handleAdd:function(){this.index++,this.formDynamic.items.push({value:"",index:this.index,status:1})},handleRemove:function(e){this.formDynamic.items[e].status=0}}},x,!1,function(e){a("MgVG")},null,null).exports,C={name:"StockScreeners",data:function(){return{index:1,symbol:"",name:"",price:"",change:"",pchange:0,volume:"",fiftyDayAverage:"",twoHundredDayAverage:"",fiftytwoWeekRange:"",formDynamic:{items:[{value:"",index:1,status:1}]},columns1:[{title:"symbol",key:"symbol"},{title:"name",key:"name"},{title:"price",key:"price",sortable:!0},{title:"change",key:"change",sortable:!0,filters:[{label:"up",value:1},{label:"down",value:2}],filterMultiple:!1,filterMethod:function(e,t){return 1===e?t.change>0:2===e?t.change<0:void 0}},{title:"pchange",key:"pchange"},{title:"volume",key:"volume",sortable:!0},{title:"fiftyDayAverage",key:"fiftyDayAverage",sortable:!0},{title:"twoHundredDayAverage",key:"twoHundredDayAverage",sortable:!0},{title:"fiftytwoWeekRange",key:"fiftytwoWeekRange",sortable:!0}],data1:[]}},components:{},created:function(){this.$nextTick(function(){this.searchInfo()})},methods:{rowClick:function(e,t){this.$router.push("/Info/"+e.symbol)},searchInfo:function(){var e=this;return i()(o.a.mark(function t(){var a,n,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a="/stock/GetStockList",t.next=3,e.$http.get(a);case 3:for(n=t.sent,r=0;r<n.length;r++)n[r]=JSON.parse(n[r]),e.symbol=n[r].symbol,e.name=n[r].longName,e.price=n[r].regularMarketPrice,e.change=n[r].regularMarketChange,e.pchange=0,e.volume=n[r].regularMarketVolume,e.fiftyDayAverage=n[r].fiftyDayAverage,e.twoHundredDayAverage=n[r].twoHundredDayAverage,e.fiftytwoWeekRange=n[r].fiftyTwoWeekRange,e.data1.push({symbol:e.symbol,name:e.name,price:e.price,change:e.change,pchange:0,volume:e.volume,fiftyDayAverage:e.fiftyDayAverage,twoHundredDayAverage:e.twoHundredDayAverage,fiftytwoWeekRange:e.fiftytwoWeekRange});case 5:case"end":return t.stop()}},t,e)}))()}}},D={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Table",{attrs:{stripe:"",columns:this.columns1,data:this.data1},on:{"on-row-click":this.rowClick}})],1)},staticRenderFns:[]};var A=a("VU/8")(C,D,!1,function(e){a("sYW0")},null,null).exports,I={name:"Summary",data:function(){return{symbol:"",name:"",price:"",change:"",pchange:0,columns1:[{title:"Symbol",key:"symbol"},{title:"Name",key:"name",width:"400px"},{title:"Last Price",key:"lastPrice"},{title:"Change",key:"change"},{title:"% Change",key:"_change"}],data1:[]}},components:{"data-detail":k},created:function(){this.$nextTick(function(){this.loadData()})},methods:{loadData:function(){var e=this;return i()(o.a.mark(function t(){var a,n,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a="/User/GetPortfolio",t.next=3,e.$http.get(a);case 3:for(n=t.sent,r=0;r<n.length;r++)n[r]=JSON.parse(n[r]),e.symbol=n[r].symbol,e.name=n[r].longName,e.price=n[r].regularMarketPrice,e.change=n[r].regularMarketChange,e.pchange=0,e.data1.push({symbol:e.symbol,name:e.name,price:e.price,change:e.change,pchange:e.change/e.price*100});case 5:case"end":return t.stop()}},t,e)}))()},tableRowStyle:function(e,t){return"table-row"},rowClick:function(e,t){this.$router.push("/Info/"+e.symbol)}}},P={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"demo-split"},[t("Table",{ref:"table",attrs:{calss:"table-style",columns:this.columns1,data:this.data1,"row-class-name":this.tableRowStyle,"header-class-name":this.tableRowStyle},on:{"on-row-click":this.rowClick}}),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var R=a("VU/8")(I,P,!1,function(e){a("hwMs")},null,null).exports,L={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"index"})},staticRenderFns:[]};var $=a("VU/8")({name:"index",data:function(){return{}}},L,!1,function(e){a("k2XR")},null,null).exports;n.default.use(S.a);var F,B=new S.a({routes:[{path:"/",name:"index",component:$},{path:"/Info/:searchSymbol",name:"Info",component:k,children:[{path:"Summary/:searchSymbol",name:"Summary",component:u},{path:"Chart/:searchSymbol",name:"Chart",component:p},{path:"HistoricalData",name:"HistoricalData",component:f}]},{path:"/MyPortfolio",name:"MyPortfolio",component:R},{path:"/ETFScreeners",name:"ETFScreeners",component:_},{path:"/StockScreeners",name:"StockScreeners",component:A}]}),H=a("BTaQ"),V=a.n(H),N=(a("+skl"),a("mtWM")),T=a.n(N),E=a("mw3O"),O=a.n(E),W=a("//Fk"),U=a.n(W);F="http://smallcookie.cn:8000/";var z=T.a.create({baseURL:F});n.default.prototype.qs=O.a,n.default.config.productionTip=!1,n.default.prototype.$axios=T.a,n.default.use(V.a),n.default.prototype.$http={get:function(e,t){return t=t||{},new U.a(function(a,n){z.get(e,{params:t},{timeout:12e11}).then(function(e){a(e.data)}).catch(function(e){handleError(e),alert(e.response)})})},post:function(e,t){return t=t||{},new U.a(function(a,n){z.post(e,t,{timeout:12e8}).then(function(e){a(e.data)}).catch(function(e){alert("internet error")})})}},new n.default({el:"#app",router:B,components:{App:M},template:"<App/>",mounted:function(){window.vue=this}})},RePM:function(e,t,a){"use strict";(function(e){var n=a("Xxa5"),r=a.n(n),o=a("exGp"),s=a.n(o),i=a("XLwt"),l=a.n(i),c=a("7t+N");a.n(c);t.a={name:"Chart",data:function(){return{searchbyday5:5,searchbyday42:42,searchbyday252:252,searchSymbol:this.$route.params.searchSymbol,date:"",originData:[],compareStock:""}},components:{},created:function(){this.$nextTick(function(){this.drawChart("echartid","#D9EFFC","test")})},methods:{sendDateMessage:function(){var e=this;return s()(r.a.mark(function t(){var a,n,o,s,i,c,u,m,h,d;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.date),a=new Date,n=parseInt((a.getTime()-e.date.getTime())/864e5),o="/stock/get_stock_history_by_date",t.next=6,e.$http.get(o,{stock_symbol:e.searchSymbol,days:n});case 6:for(h in s=t.sent,i=l.a.init(document.getElementById("echartid")),c=[],u=[],[],[],m=[],s.Close)c.push(h),u.push(s.Volume[h]),m.push([s.Open[h],s.Close[h],s.Low[h],s.High[h]]);d=[{name:"volumes",type:"bar",data:u,yAxisIndex:1},{type:"candlestick",barMaxWidth:10,name:"dayK",data:m,itemStyle:{normal:{color:"#FD1050",color0:"#0CF49B",borderColor:"#FD1050",borderColor0:"#0CF49B"}},zlevel:9},{name:"MA5",type:"line",data:e.calculateMA(5,m),smooth:!0,showSymbol:!1,lineStyle:{normal:{width:1}}},{name:"MA10",type:"line",data:e.calculateMA(10,m),smooth:!0,showSymbol:!1,lineStyle:{normal:{width:1}}},{name:"MA20",type:"line",data:e.calculateMA(20,m),smooth:!0,showSymbol:!1,lineStyle:{normal:{width:1}}},{name:"MA30",type:"line",data:e.calculateMA(30,m),smooth:!0,showSymbol:!1,lineStyle:{normal:{width:1}}}],e.originData=d,i.hideLoading(),i.setOption(e.initDemo(d,c));case 18:case"end":return t.stop()}},t,e)}))()},searchbyday:function(e){var t=this;return s()(r.a.mark(function a(){var n,o,s,i,c,u,m,h;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n="/stock/get_stock_history_by_date",a.next=3,t.$http.get(n,{stock_symbol:t.searchSymbol,days:e});case 3:for(m in o=a.sent,s=l.a.init(document.getElementById("echartid")),i=[],c=[],[],[],u=[],o.Close)i.push(m),c.push(o.Volume[m]),u.push([o.Open[m],o.Close[m],o.Low[m],o.High[m]]);h=[{name:"volumes",type:"bar",data:c,yAxisIndex:1},{type:"candlestick",barMaxWidth:10,name:"dayK",data:u,itemStyle:{normal:{color:"#FD1050",color0:"#0CF49B",borderColor:"#FD1050",borderColor0:"#0CF49B"}},zlevel:9},{name:"MA5",type:"line",data:t.calculateMA(5,u),smooth:!0,showSymbol:!1,lineStyle:{normal:{width:1}}},{name:"MA10",type:"line",data:t.calculateMA(10,u),smooth:!0,showSymbol:!1,lineStyle:{normal:{width:1}}},{name:"MA20",type:"line",data:t.calculateMA(20,u),smooth:!0,showSymbol:!1,lineStyle:{normal:{width:1}}},{name:"MA30",type:"line",data:t.calculateMA(30,u),smooth:!0,showSymbol:!1,lineStyle:{normal:{width:1}}}],t.originData=h,s.hideLoading(),s.setOption(t.initDemo(h,i));case 15:case"end":return a.stop()}},a,t)}))()},dateToMs:function(e){return new Date(e).getTime()},searchComparison:function(){var e=this;return s()(r.a.mark(function t(){var a,n,o,s,i,c,u;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a="/stock/GetStockHistory",t.next=3,e.$http.get(a,{stock_symbol:e.compareStock});case 3:for(u in n=t.sent,o=l.a.init(document.getElementById("echartid")),s=[],i=[],c=[],n.Close)s.push(u),i.push([n.Open[u],n.Close[u],n.Low[u],n.High[u]]),c.push(n.Volume[u]);e.originData.push({name:"comparevolumes",type:"bar",data:c,yAxisIndex:1},{type:"candlestick",barMaxWidth:10,name:"compareK-day",data:i,itemStyle:{normal:{color:"#FD1050",color0:"#0CF49B",borderColor:"#FD1050",borderColor0:"#0CF49B"}},zlevel:9},{name:"compareMA5",type:"line",data:e.calculateMA(5,i),smooth:!0,showSymbol:!1,lineStyle:{normal:{width:1}}},{name:"compareMA10",type:"line",data:e.calculateMA(10,i),smooth:!0,showSymbol:!1,lineStyle:{normal:{width:1}}},{name:"compareMA20",type:"line",data:e.calculateMA(20,i),smooth:!0,showSymbol:!1,lineStyle:{normal:{width:1}}},{name:"compareMA30",type:"line",data:e.calculateMA(30,i),smooth:!0,showSymbol:!1,lineStyle:{normal:{width:1}}}),o.setOption(e.initDemo(e.originData,s));case 11:case"end":return t.stop()}},t,e)}))()},initDemo:function(t,a,n){var r=[];for(var o in a){var s=new Date(o),i=s.getFullYear()+"-"+(s.getMonth()+1)+"-"+s.getDate();r.push(i)}var l={backgroundColor:"#ffffff",animation:!0,legend:{top:10,left:"center",data:t.name},tooltip:{trigger:"axis",axisPointer:{type:"cross"},backgroundColor:"rgba(245, 245, 245, 0.8)",borderWidth:1,borderColor:"#ccc",padding:10,textStyle:{color:"#000"},extraCssText:"width: 170px"},axisPointer:{link:{xAxisIndex:"all"},label:{backgroundColor:"#777"}},grid:[{left:"10%",right:"8%",height:"50%"},{left:"10%",right:"8%",top:"63%",height:"16%"}],xAxis:[{type:"category",data:r,scale:!0,boundaryGap:!1,axisLine:{onZero:!1},splitLine:{show:!1},splitNumber:20,min:null,max:null,axisPointer:{z:100}}],yAxis:[{scale:!0,splitArea:{show:!0,areaStyle:{color:"#ffffff"}}},{scale:!0,splitNumber:10,axisLabel:{show:!0},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1}}],dataZoom:[{type:"inside",start:98,end:100},{show:!1,type:"slider",top:"85%",start:98,end:100}]},c=[{barMaxWidth:10,itemStyle:{normal:{barBorderRadius:10,borderColor:null,color:"#00da3c",color0:"#ec0000",borderColor0:null}},zlevel:9}],u=[{smooth:!0,color:"#000000"}],m=[{yAxisIndex:1,symbolSize:13,zlevel:9}],h=[{barMaxWidth:10,itemStyle:{normal:{barBorderRadius:10,borderColor:null,color:"#000000"}},zlevel:9}],d={legend:{data:t.map(function(e,t){return e.name})},series:t};return d.series.forEach(function(t,a){"candlestick"==t.type?e.extend(!0,t,c[0]):"line"==t.type?e.extend(!0,t,u[0]):"bar"==t.type?e.extend(!0,t,m[0]):"custom"==t.type?(e.extend(!0,t,h[0]),console.log("custom")):e.extend(!0,t,c)}),e.extend(!0,l,d),l},calculateMA:function(e,t){for(var a=[],n=0,r=t.length;n<r;n++)if(n<e)a.push("-");else{for(var o=0,s=0;s<e;s++)o+=t[n-s][1];a.push(o/e)}return a},splitData:function(e){for(var t=[],a=[],n=0;n<e.length;n++)t.push(e[n].splice(0,1)[0]),a.push(e[n]);return{categoryData:t,values:a}},timetrans:function(e){return new Date(1e3*parseInt(e)).toLocaleString().replace(/:\d{1,2}$/," ")},drawChart:function(e,t,a){var n=this;return s()(r.a.mark(function e(){var t,a,o,s,i,c,u,m;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="/stock/GetStockHistory",e.next=3,n.$http.get(t,{stock_symbol:n.searchSymbol});case 3:for(u in a=e.sent,console.log(n.date),(o=l.a.init(document.getElementById("echartid"))).showLoading(),s=[],i=[],[],[],c=[],a.Close)s.push(u),i.push(a.Volume[u]),c.push([a.Open[u],a.Close[u],a.Low[u],a.High[u]]);m=[{name:"volumes",type:"bar",data:i,yAxisIndex:1},{type:"candlestick",barMaxWidth:10,name:"dayK",data:c,itemStyle:{normal:{color:"#FD1050",color0:"#0CF49B",borderColor:"#FD1050",borderColor0:"#0CF49B"}},zlevel:9},{name:"MA5",type:"line",data:n.calculateMA(5,c),smooth:!0,showSymbol:!1,lineStyle:{normal:{width:1}}},{name:"MA10",type:"line",data:n.calculateMA(10,c),smooth:!0,showSymbol:!1,lineStyle:{normal:{width:1}}},{name:"MA20",type:"line",data:n.calculateMA(20,c),smooth:!0,showSymbol:!1,lineStyle:{normal:{width:1}}},{name:"MA30",type:"line",data:n.calculateMA(30,c),smooth:!0,showSymbol:!1,lineStyle:{normal:{width:1}}}],n.originData=m,o.hideLoading(),o.setOption(n.initDemo(m,s));case 17:case"end":return e.stop()}},e,n)}))()}}}}).call(t,a("7t+N"))},apFw:function(e,t){},hY2O:function(e,t){},hwMs:function(e,t){},k2XR:function(e,t){},sYW0:function(e,t){},wEJH:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.4c2ddfefdfad241bc823.js.map