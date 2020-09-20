(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a31d1ef6"],{1148:function(t,e,r){"use strict";var a=r("a691"),o=r("1d80");t.exports="".repeat||function(t){var e=String(o(this)),r="",n=a(t);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(r+=e);return r}},"36fb":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[r("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:t.tableData,"row-key":"id",border:"","tree-props":{children:"children",hasChildren:"hasChildren"}}},[r("el-table-column",{attrs:{label:"行号",type:"index",width:"50"}}),r("el-table-column",{attrs:{label:"中站服务器",prop:"serverName"}}),r("el-table-column",{attrs:{label:"中转地址",prop:"serverHost"}}),r("el-table-column",{attrs:{label:"中转端口",prop:"internetPort"}}),r("el-table-column",{attrs:{label:"被中转地址",prop:"remoteHost"}}),r("el-table-column",{attrs:{label:"被中转端口",prop:"remotePort"}}),r("el-table-column",{attrs:{label:"所属用户",prop:"username"}}),r("el-table-column",{attrs:{label:"已用流量",prop:"dataUsage"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.getFlow(e.row.dataUsage))+" ")]}}])}),r("el-table-column",{attrs:{label:"是否启动"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.disabled?"已停止":"已启动")+" ")]}}])}),r("el-table-column",{attrs:{label:"操作",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.disabled?r("el-button",{attrs:{type:"success",size:"mini",title:"启用中转"},on:{click:function(r){return t.showStartDialog(e.row)}}},[t._v("启动中转")]):t._e(),e.row.disabled?t._e():r("el-button",{attrs:{loading:!!e.row.btnLoading,type:"danger",size:"mini",title:"停止中转"},on:{click:function(r){return t.stopForward(e.row)}}},[t._v("停止中转")])]}}])})],1),r("div",{staticClass:"block"},[r("el-pagination",{attrs:{background:"","page-sizes":[10,20,50],"page-size":t.searchForm.pageSize,"current-page":t.searchForm.pageNum,layout:"total, sizes, prev, pager, next, jumper",total:t.dataTotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:"启动转发",visible:t.startDialog,width:"30%"},on:{"update:visible":function(e){t.startDialog=e}}},[r("el-form",{ref:"addForm",attrs:{model:t.addForm,rules:t.addFormRules,"label-width":"120px",size:"small"}},[r("el-form-item",{attrs:{label:"域名(或IP)",prop:"remoteHost"}},[r("el-input",{attrs:{size:"mini"},model:{value:t.addForm.remoteHost,callback:function(e){t.$set(t.addForm,"remoteHost",e)},expression:"addForm.remoteHost"}})],1),r("el-form-item",{attrs:{label:"端口",prop:"remotePort",rules:[{required:!0,message:"端口不能为空"},{type:"number",message:"端口必须为数字值"}]}},[r("el-input",{attrs:{size:"mini"},model:{value:t.addForm.remotePort,callback:function(e){t.$set(t.addForm,"remotePort",t._n(e))},expression:"addForm.remotePort"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.startDialog=!1}}},[t._v("取 消")]),r("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:function(e){return t.confirmStart(t.row)}}},[t._v("确 定")])],1)],1)],1)},o=[],n=(r("b680"),r("b775"));function i(t){return Object(n["a"])({url:"/forward/getPage",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/forward/start",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/forward/stop",method:"post",data:t})}var d={data:function(){return{tableData:[],dataTotal:null,loading:!1,searchForm:{pageSize:10,pageNum:1},userTypeList:[{name:"管理员",value:0},{name:"普通用户",value:1}],addForm:{id:null,username:null,addType:"add",password:null,remotePort:null,remoteHost:null},addFormRules:{remoteHost:[{required:!0,trigger:"blur",message:"必需项"}]},startDialog:!1}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;i(this.searchForm).then((function(e){t.tableData=e.data.list,t.dataTotal=e.data.total}))},confirmStart:function(){var t=this;this.$refs["addForm"].validate((function(e){e&&(t.loading=!0,l(t.addForm).then((function(e){t.loading=!1,t.$notify({message:"启动成功",type:"success"}),t.startDialog=!1,t.getData()})))}))},handleSizeChange:function(t){this.searchForm.pageSize=t,this.getData()},handleCurrentChange:function(t){this.searchForm.pageNum=t,this.getData()},showStartDialog:function(t){this.startDialog=!0,this.addForm.serverId=t.serverId,this.addForm.portId=t.portId,this.addForm.remotePort=t.remotePort,this.addForm.remoteHost=t.remoteHost},stopForward:function(t){var e=this;this.addForm.serverId=t.serverId,this.addForm.portId=t.portId,this.$set(t,"btnLoading",!0),s(this.addForm).then((function(r){e.$set(t,"btnLoading",!1),e.$notify({message:"停止完成",type:"success"}),e.getData()}))},getFlow:function(t){var e="";if(t/1024<1024)e=(Math.round(t/1024)>0?Math.round(t/1024):0)+"KB";else if(t/1024>=1024&&t/1024/1024<1024)e=(Math.round(t/1024/1024)>0?Math.round(t/1024/1024):0)+"MB";else if(t/1024/1024>=1024){var r=t/1024/1024/1024;e=r.toFixed(3)+"GB"}else e="0KB";return e}}},u=d,c=(r("b2d6"),r("2877")),m=Object(c["a"])(u,a,o,!1,null,"7873b08a",null);e["default"]=m.exports},"408a":function(t,e,r){var a=r("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=a(t))throw TypeError("Incorrect invocation");return+t}},4980:function(t,e,r){},b2d6:function(t,e,r){"use strict";var a=r("4980"),o=r.n(a);o.a},b680:function(t,e,r){"use strict";var a=r("23e7"),o=r("a691"),n=r("408a"),i=r("1148"),l=r("d039"),s=1..toFixed,d=Math.floor,u=function(t,e,r){return 0===e?r:e%2===1?u(t,e-1,r*t):u(t*t,e/2,r)},c=function(t){var e=0,r=t;while(r>=4096)e+=12,r/=4096;while(r>=2)e+=1,r/=2;return e},m=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!l((function(){s.call({})}));a({target:"Number",proto:!0,forced:m},{toFixed:function(t){var e,r,a,l,s=n(this),m=o(t),f=[0,0,0,0,0,0],p="",h="0",g=function(t,e){var r=-1,a=e;while(++r<6)a+=t*f[r],f[r]=a%1e7,a=d(a/1e7)},b=function(t){var e=6,r=0;while(--e>=0)r+=f[e],f[e]=d(r/t),r=r%t*1e7},v=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==f[t]){var r=String(f[t]);e=""===e?r:e+i.call("0",7-r.length)+r}return e};if(m<0||m>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(p="-",s=-s),s>1e-21)if(e=c(s*u(2,69,1))-69,r=e<0?s*u(2,-e,1):s/u(2,e,1),r*=4503599627370496,e=52-e,e>0){g(0,r),a=m;while(a>=7)g(1e7,0),a-=7;g(u(10,a,1),0),a=e-1;while(a>=23)b(1<<23),a-=23;b(1<<a),g(1,1),b(2),h=v()}else g(0,r),g(1<<-e,0),h=v()+i.call("0",m);return m>0?(l=h.length,h=p+(l<=m?"0."+i.call("0",m-l)+h:h.slice(0,l-m)+"."+h.slice(l-m))):h=p+h,h}})}}]);