"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}();document.addEventListener("DOMContentLoaded",function(){new(function(){function t(e){_classCallCheck(this,t);this.options=Object.assign({isOpen:function(){},isClose:function(){}},e),this.modal=document.querySelector(".modal"),this.speed=!1,this.animation=!1,this.isOpen=!1,this.modalContainer=!1,this.previousActiveElement=!1,this.fixBlocks=document.querySelectorAll(".fix-block"),this.focusElements=["a[href]","input","button","select","textarea","[tabindex]"],this.events()}return _createClass(t,[{key:"events",value:function(){this.modal&&(document.addEventListener("click",function(e){var t=e.target.closest("[data-path]");if(t){var i=t.dataset.path,n=t.dataset.animation,s=t.dataset.speed;return this.animation=n||"fade",this.speed=s?parseInt(s):300,this.modalContainer=document.querySelector('[data-target="'+i+'"]'),void this.open()}e.target.closest(".modal-close")&&this.close()}.bind(this)),window.addEventListener("keydown",function(e){27==e.keyCode&&this.isOpen&&this.close(),9==e.keyCode&&this.isOpen&&this.focusCatch(e)}.bind(this)),this.modal.addEventListener("click",function(e){e.target.classList.contains("modal__container")||e.target.closest(".modal__container")||!this.isOpen||this.close()}.bind(this)))}},{key:"open",value:function(){var e=this;this.previousActiveElement=document.activeElement,this.modal.style.setProperty("--transition-time",this.speed/1e3+"s"),this.modal.classList.add("is-open"),this.disableScroll(),this.modalContainer.classList.add("modal-open"),this.modalContainer.classList.add(this.animation),setTimeout(function(){e.options.isOpen(e),e.modalContainer.classList.add("animate-open"),e.isOpen=!0,e.focusTrap()},this.speed)}},{key:"close",value:function(){this.modalContainer&&(this.modalContainer.classList.remove("animate-open"),this.modalContainer.classList.remove(this.animation),this.modal.classList.remove("is-open"),this.modalContainer.classList.remove("modal-open"),this.enableScroll(),this.options.isClose(this),this.isOpen=!1,this.focusTrap())}},{key:"focusCatch",value:function(e){var t=this.modalContainer.querySelectorAll(this.focusElements),i=Array.prototype.slice.call(t),n=i.indexOf(document.activeElement);e.shiftKey&&0===n&&(i[i.length-1].focus(),e.preventDefault()),e.shiftKey||n!==i.length-1||(i[0].focus(),e.preventDefault())}},{key:"focusTrap",value:function(){var e=this.modalContainer.querySelectorAll(this.focusElements);this.isOpen?e[0].focus():this.previousActiveElement.focus()}},{key:"disableScroll",value:function(){var e=window.scrollY;this.lockPadding(),document.body.classList.add("disable-scroll"),document.body.dataset.position=e,document.body.style.top=-e+"px"}},{key:"enableScroll",value:function(){var e=parseInt(document.body.dataset.position,10);this.unlockPadding(),document.body.style.top="auto",document.body.classList.remove("disable-scroll"),window.scroll({top:e,left:0}),document.body.removeAttribute("data-position")}},{key:"lockPadding",value:function(){var t=window.innerWidth-document.body.offsetWidth+"px";this.fixBlocks.forEach(function(e){e.style.paddingRight=t}),document.body.style.paddingRight=t}},{key:"unlockPadding",value:function(){this.fixBlocks.forEach(function(e){e.style.paddingRight="0px"}),document.body.style.paddingRight="0px"}}]),t}())({}),new Swiper(".section-container",{slidesPerView:1,mousewheel:{sensitivity:1}});var e=new Swiper(".main-slider",{observer:!0,observerParents:!0,slidesPerView:1,speed:800,loop:!0,pagination:{el:".main-slider__fraction",type:"fraction",formatFractionCurrent:function(e){return("0"+e).slice(-2)},renderFraction:function(e){return'<span class="'+e+'"></span>'}}}),t=document.querySelector(".controls-slider__prev"),i=document.querySelector(".controls-slider__next");t.addEventListener("click",function(){e.slidePrev()}),i.addEventListener("click",function(){e.slideNext()});var n=new Swiper(".info-slider",{effect:"cube",grabCursor:!0,cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},slidesPerView:1,speed:800,loop:!0,spaceBetween:50});(e.controller.control=n).controller.control=e});