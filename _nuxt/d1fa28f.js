(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3],{246:function(t,e,n){"use strict";n.r(e);var r={name:"Assignment",props:{assignment:{type:Object,required:!0}}},c=n(33),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"card"},[n("header",{staticClass:"card-header"},[n("h3",{staticClass:"title card-header-title"},[t._v("\n      "+t._s(t.assignment.title)+"\n    ")])]),t._v(" "),n("div",{staticClass:"card-content"},[n("p",[t._v("\n      "+t._s(t.assignment.instructions)+"\n    ")])]),t._v(" "),n("footer",{staticClass:"card-footer"},[n("div",{staticClass:"card-footer-item"},[t._v("\n      Assigned "+t._s(t.$moment(t.assignment.assignDate).format("MMM D, YYYY"))+"\n    ")]),t._v(" "),n("div",{staticClass:"card-footer-item"},[t._v("\n      Due "+t._s(t.$moment(t.assignment.dueDate).format("MMM D, YYYY"))+"\n    ")])])])}),[],!1,null,"3440988e",null);e.default=component.exports},255:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{assignments:[]}},fetch:function(){this.assignments=this.$store.getters.class_(this.$route.params.code).assignments}},c=n(33),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.assignments,(function(t){return n("assignment",{staticClass:"card",attrs:{assignment:t}})})),1)}),[],!1,null,"9fd6da0e",null);e.default=component.exports;installComponents(component,{Assignment:n(246).default})}}]);