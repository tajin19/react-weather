(this["webpackJsonpreact-weather"]=this["webpackJsonpreact-weather"]||[]).push([[0],{14:function(e){e.exports=JSON.parse('[{"zipCode":92071,"response":{"data":[{"parameter":"t_0m:F","coordinates":[{"station_id":"postal_US92071","dates":[{"date":"2020-08-04T14:28:18Z","value":71.4}]}]},{"parameter":"t_apparent:F","coordinates":[{"station_id":"postal_US92071","dates":[{"date":"2020-08-04T14:28:18Z","value":73.3}]}]},{"parameter":"weather_symbol_1h:idx","coordinates":[{"station_id":"postal_US92071","dates":[{"date":"2020-08-04T14:28:18Z","value":1}]}]},{"parameter":"t_min_0m_2h:F","coordinates":[{"station_id":"postal_US92071","dates":[{"date":"2020-08-04T14:28:18Z","value":58}]}]},{"parameter":"t_max_0m_2h:F","coordinates":[{"station_id":"postal_US92071","dates":[{"date":"2020-08-04T14:28:18Z","value":72.8}]}]}]}},{"zipCode":10003,"response":{"data":[{"parameter":"t_0m:F","coordinates":[{"station_id":"postal_US10003","dates":[{"date":"2020-08-04T14:28:18Z","value":76}]}]},{"parameter":"t_apparent:F","coordinates":[{"station_id":"postal_US10003","dates":[{"date":"2020-08-04T14:28:18Z","value":83.9}]}]},{"parameter":"weather_symbol_1h:idx","coordinates":[{"station_id":"postal_US10003","dates":[{"date":"2020-08-04T14:28:18Z","value":8}]}]},{"parameter":"t_min_0m_2h:F","coordinates":[{"station_id":"postal_US10003","dates":[{"date":"2020-08-04T14:28:18Z","value":74.7}]}]},{"parameter":"t_max_0m_2h:F","coordinates":[{"station_id":"postal_US10003","dates":[{"date":"2020-08-04T14:28:18Z","value":76.1}]}]}]}}]')},17:function(e,t,a){e.exports=a(30)},22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),c=a.n(i),o=(a(22),a(23),a(3)),s=a(4),l=a(5),u=a(7),d=a(6),p=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onChangeField=function(t){e.props.updateZipCode(t.target.value)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("input",{type:"text",className:"text-input",value:this.props.zipCode,size:"5",onChange:function(t){return e.onChangeField(t)}})}}]),a}(n.Component),m="FETCH_CURRENT_WEATHER_BY_ZIP_CODE",h="REQUEST_CURRENT_WEATHER_BY_ZIP_CODE",v="RECEIVE_CURRENT_WEATHER_BY_ZIP_CODE",E="UPDATE_ZIP_CODE",_=a(14),b=function(e){return{type:h,zipCode:e}},f=function(e){return{type:v,zipCodeWeather:e,receivedAt:Date.now()}},C=function(e){return function(t){return t(b(e)),new Promise((function(a,n){setTimeout((function(){var n=_.find((function(t){return t.zipCode==e}));t(f(n)),a()}),1e3)}))}},O=function(e){return{type:E,zipCode:e}},g=Object(o.b)((function(e){return{zipCode:e.home.zipCode}}),(function(e){return{updateZipCode:function(t){return e(O(t))}}}))(p),w=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleFetchButtonClick=function(){e.props.fetchCurrentWeatherByZipCode(e.props.zipCode)},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"input-panel"},r.a.createElement("div",{className:"outer-content"},r.a.createElement("div",{className:"overlay-content"},r.a.createElement("div",{className:"content"},r.a.createElement("h2",{className:"weather-header"},"Current Weather"),r.a.createElement("div",{className:"weather-input-row"},r.a.createElement("div",{className:"zipCode-input-label"},"zip code"),r.a.createElement("div",null,r.a.createElement(g,null)),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.handleFetchButtonClick},"FETCH")))))))}}]),a}(n.Component),N=Object(o.b)((function(e){return{zipCode:e.home.zipCode}}),(function(e){return{fetchCurrentWeatherByZipCode:function(t){return e(C(t))}}}))(w),k=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e,t=this.props,a=t.apparentTemperature,n=t.high,i=t.low,c=t.requestingData,o=t.temperature;return e=c?r.a.createElement("div",{className:"loading-wrapper"},r.a.createElement("div",{className:"sk-cube-grid"},r.a.createElement("div",{className:"sk-cube sk-cube1"}),r.a.createElement("div",{className:"sk-cube sk-cube2"}),r.a.createElement("div",{className:"sk-cube sk-cube3"}),r.a.createElement("div",{className:"sk-cube sk-cube4"}),r.a.createElement("div",{className:"sk-cube sk-cube5"}),r.a.createElement("div",{className:"sk-cube sk-cube6"}),r.a.createElement("div",{className:"sk-cube sk-cube7"}),r.a.createElement("div",{className:"sk-cube sk-cube8"}),r.a.createElement("div",{className:"sk-cube sk-cube9"}))):o&&a&&n&&i?r.a.createElement("div",{className:"temperature-side"},r.a.createElement("div",{className:"high-low-line"},r.a.createElement("span",{className:"high-temp-span"},Math.round(n),"\xb0"),"\xa0\xa0|\xa0\xa0",r.a.createElement("span",{className:"low-temp-span"},Math.round(i),"\xb0")),r.a.createElement("div",{className:"main-temp-line"},Math.round(o),r.a.createElement("sup",null,"\xb0F")),r.a.createElement("div",{className:"apparent-temp-line"},"LIKE ",r.a.createElement("span",null,Math.round(a),"\xb0"))):r.a.createElement("div",null),r.a.createElement("div",{className:"weather-panel"},e)}}]),a}(n.Component),T=Object(o.b)((function(e){if(e.home.zipCodeWeather){var t=e.home.zipCodeWeather,a=t.apparentTemperature,n=t.high,r=t.low,i=t.temperature;return{apparentTemperature:a,high:n,low:r,requestingData:e.home.requestingData,temperature:i}}return{apparentTemperature:null,high:null,low:null,requestingData:!1,temperature:null}}))(k);var j=function(){return r.a.createElement("div",null,r.a.createElement("main",{className:"main"},r.a.createElement(N,null),r.a.createElement(T,null)))},z=a(2),y=a(15),W=a(16),Z=a(1),D={requestingData:!1,zipCode:"",zipCodeWeather:{temperature:null,apparentTemperature:null,high:null,low:null}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:case h:return Object(Z.a)(Object(Z.a)({},e),{},{requestingData:!0});case v:var a=t.zipCodeWeather,n=a.response.data;if(n){var r=null,i=null,c=null,o=null,s=n.find((function(e){return e.parameter.startsWith("t_0")}));s&&(r=s.coordinates[0].dates[0].value);var l=n.find((function(e){return e.parameter.startsWith("t_apparent")}));l&&(i=l.coordinates[0].dates[0].value);var u=n.find((function(e){return e.parameter.startsWith("t_max")}));u&&(c=u.coordinates[0].dates[0].value);var d=n.find((function(e){return e.parameter.startsWith("t_min")}));d&&(o=d.coordinates[0].dates[0].value);var p={temperature:r,apparentTemperature:i,high:c,low:o};return Object(Z.a)(Object(Z.a)({},e),{},{zipCodeWeather:p,requestingData:!1})}return Object(Z.a)(Object(Z.a)({},e),{},{requestingData:!1});case E:var _=t.zipCode;return Object(Z.a)(Object(Z.a)({},e),{},{zipCode:_});default:return e}},U=Object(z.combineReducers)({home:F});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=Object(z.createStore)(U,Object(W.composeWithDevTools)(Object(z.applyMiddleware)(y.a)));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:S},r.a.createElement(j,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.1cec7aad.chunk.js.map