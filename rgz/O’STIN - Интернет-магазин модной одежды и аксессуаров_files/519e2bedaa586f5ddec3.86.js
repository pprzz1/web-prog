(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{1443:function(t,e,r){"use strict";var o=r(3),i=r(1),n=r(0),c=r.n(n),a=r(179);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==u(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===u(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}e.a={props:{productClickEvents:{type:Array,default:function(){return[]}}},computed:d(d(d({},Object(o.c)(["breadcrumbs"])),Object(o.c)("v3",["catalogData"])),{},{categoryId:function(){return this.catalogData.id},product:function(){return this.tile.product||{}},productId:function(){return this.product.productId},productCode:function(){return this.product.code},path:function(){return Object(a.a)(this.breadcrumbs)}}),methods:d(d({},Object(o.b)("v3",[i.a.EMIT_PAGE_EVENT])),{},{goToProductUrl:function(t){this.$urlService.goTo(t||this.productUrl)},tileClickHandler:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.productCode,o=e.productId,n=e.productUrl,a=e.optional;if(this.productClickEvents.length){var u=function(e,n,c){return new Promise((function(a){t[i.a.EMIT_PAGE_EVENT]({type:e,payload:{code:r||t.productCode,productId:o||t.productId,path:t.path,pageSource:t.pageSource,componentSource:n,slotName:c,rrMethodName:t.product.methodName,displayType:t.tile.displayType,callback:a()}})}))},l=this.productClickEvents.map((function(t){return u(t.eventType,t.componentSource,t.slotName)}));Promise.all(l).finally(this.goToProductUrl.bind(this,n))}else this[i.a.EMIT_PAGE_EVENT]({type:c.a.PRODUCT_CLICK_CATALOG,payload:{product:this.product}}),this[i.a.EMIT_PAGE_EVENT]({type:c.a.CATALOG_GO_TO_PRODUCT_CART,payload:{code:r||this.productCode,productId:o||this.productId,path:this.path,pageSource:this.pageSource,optional:a,callback:this.goToProductUrl.bind(this,n)}})}})}},2545:function(t,e,r){},2546:function(t,e,r){},3272:function(t,e,r){"use strict";r(2545)},3273:function(t,e,r){"use strict";r(2546)},3495:function(t,e,r){"use strict";r.r(e);var o=r(3),i=r(192),n=r(310),c=r(311),a=r(52),u=r(1443),l=r(1),d=r(13),s=r.n(d),p=r(173);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==f(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==f(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===f(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var h={name:"o-catalog-kit-tile",components:{oProductCardMedia:i.a,oProductCardPrices:n.a,oProductCardFavBtn:c.a},mixins:[a.a,u.a],props:{tile:{type:Object,required:!0}},data:function(){return{pageSource:s.a.PRODUCT_KIT,isMounted:!1,shouldDeleteAfterInView:!1,wasInView:!1,CATALOG_GO_TO_PRODUCT_CART_OPTIONAL_VALUES:{SMALL:"small",BIG:"big"}}},computed:{linkedColorModels:function(){return this.product.linkedColorModels||[]},productUrl:function(){return this.getModelUrl(this.product,{scroll:"product-kit"})},media:function(){return this.getMedia(this.product)},prices:function(){return this.product.price},linkedProductsClasses:function(){var t=this.linkedColorModels.length;return{"o-catalog-kit-tile__linked-products--square":4===t||t<3||this.isDesktop&&3===t}}},watch:{componentInViewRatio:function(t){t>.5&&this.$emit("product-card-viewed")}},mounted:function(){var t=this;this.isMounted=!0,this.$once("product-card-viewed",(function(){t.$emit("tile-viewed")}))},methods:y(y({},Object(o.b)("v3",[l.a.EMIT_PAGE_EVENT])),{},{kitClickHandler:function(){this.tileClickHandler({optional:this.CATALOG_GO_TO_PRODUCT_CART_OPTIONAL_VALUES.BIG})},linkedColorModelClickHandler:function(t){this.tileClickHandler({productCode:t.code,productId:t.id,productUrl:this.getModelUrl(t),optional:this.CATALOG_GO_TO_PRODUCT_CART_OPTIONAL_VALUES.SMALL})},getMedia:function(t){return this.$secureGetField(t,"media",[]).slice(0,2)},getModelUrl:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Object(p.a)({name:t.name,productId:t.productId||t.id});return this.isMounted?this.$urlService.getUrlWithMergedParams(r,y({"category-id":this.categoryId||void 0,availability:this.availabilityFacetValue||void 0},e),!0):r}})},O=(r(3272),r(3273),r(2)),g=Object(O.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-catalog-kit-tile__container",on:{click:function(e){return e.preventDefault(),t.kitClickHandler.apply(null,arguments)}}},[e("a",{staticClass:"o-catalog-kit-tile__main-product",attrs:{target:"_self",href:t.productUrl}},[e("o-product-card-media",{attrs:{media:t.media,"alt-text":t.product.name}}),t._v(" "),e("o-product-card-prices",{attrs:{label:t.$m("catalogKitTile.priceLabel"),prices:t.prices}})],1),t._v(" "),t.linkedColorModels.length?e("div",{staticClass:"o-catalog-kit-tile__linked-products",class:t.linkedProductsClasses},t._l(t.linkedColorModels,(function(r){return e("a",{key:"linked-".concat(r.id),staticClass:"o-catalog-kit-tile__linked-product",attrs:{target:"_self",href:t.getModelUrl(r)},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.linkedColorModelClickHandler(r)}}},[e("o-product-card-media",{attrs:{media:t.getMedia(r),"alt-text":r.name}}),t._v(" "),e("o-product-card-fav-btn",{attrs:{model:{id:r.id},"page-source":t.pageSource,small:""}})],1)})),0):t._e()])}),[],!1,null,"e25f34b8",null);e.default=g.exports}}]);