(()=>{"use strict";var t={296:(t,e,n)=>{t.exports=n.p+"2668e8f1e3c2e9a622f9.png"},520:(t,e,n)=>{t.exports=n.p+"338d795063008a01ba64.png"},877:(t,e,n)=>{t.exports=n.p+"addf97826c83efb039c5.png"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.p="",n.b=document.baseURI||self.location.href,(()=>{function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var e=function(){function e(t){var n=t.item,o=t.deletable,r=t.likedByMe,i=t.selector,a=t.handleCardClick,u=t.handleTrashClick,c=t.handleLikeClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n.name,this._link=n.link,this._likes=n.likes,this._id=n._id,this._deletable=o,this._likedByMe=r,this._ownerId=n.owner._id,this._handleCardClick=a,this._handleTrashClick=u,this._handleLikeClick=c,this._element=this._getTemplate(i)}var n,o;return n=e,(o=[{key:"getLikedByMe",value:function(){return this._likedByMe}},{key:"getId",value:function(){return this._id}},{key:"_getTemplate",value:function(t){return document.querySelector(t).content.querySelector(".location").cloneNode(!0)}},{key:"_handleLikeButton",value:function(){this._handleLikeClick()}},{key:"_handleImageClick",value:function(){this._handleCardClick(this)}},{key:"_handleTrashButton",value:function(){this._handleTrashClick(this)}},{key:"_setEventListeners",value:function(){var t=this;this._element.querySelector(".location__like-button").addEventListener("click",(function(){t._handleLikeButton()})),this._element.querySelector(".location__image").addEventListener("click",(function(){t._handleImageClick()}));var e=this._element.querySelector(".location__trash-button");e&&e.addEventListener("click",(function(){t._handleTrashButton()}))}},{key:"deleteSelf",value:function(){this._element.remove(),this._element=null}},{key:"updateLikes",value:function(t,e){var n=t.length,o=this._element.querySelector(".location__like-value");this._likedByMe=e,e?this._element.querySelector(".location__like-button").classList.add("location__like-button_active"):this._element.querySelector(".location__like-button").classList.remove("location__like-button_active"),o.textContent=n||""}},{key:"generateCard",value:function(){return this._imageElement=this._element.querySelector(".location__image"),this.updateLikes(this._likes,this._likedByMe),this._deletable||this._element.querySelector(".location__trash-button").remove(),this._imageElement.src=this._link,this._imageElement.alt=this._name,this._element.querySelector(".location__name").textContent=this._name,this._setEventListeners(),this._element}}])&&t(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),e}();function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var r=function(){function t(e,n){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._activeButtonClass=e.activeButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=n,this._buttonElement=this._formElement.querySelector(e.submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),n.updateValidity=function(){o.updateValidity()}}var e,n;return e=t,(n=[{key:"_showError",value:function(t,e){var n=this._formElement.querySelector("#".concat(t.name,"-error"));n.textContent=e,n.classList.add(this._errorClass),t.classList.add(this._inputErrorClass)}},{key:"_hideError",value:function(t){var e=this._formElement.querySelector("#".concat(t.name,"-error"));e.textContent="",e.classList.remove(this._errorClass),t.classList.remove(this._inputErrorClass)}},{key:"_checkValidity",value:function(t){if(t.validity.valid)this._hideError(t);else{var e=t.validationMessage;this._showError(t,e)}}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.remove(this._activeButtonClass)):(this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.add(this._activeButtonClass))}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(n){t._checkValidity(e),t._toggleButtonState()}))})),this._toggleButtonState()}},{key:"updateValidity",value:function(){var t=this;this._inputList.forEach((function(e){return t._hideError(e)})),this._toggleButtonState(this._inputList,this._buttonElement)}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners()}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),i=[{name:"Бобер здоровый",link:new URL(n(296),n.b),likes:[1,1,1,1,1],_id:1,deletable:!1,owner:{_id:2}},{name:"Бобер сильный",link:new URL(n(520),n.b),likes:[1,1,,1,1,1,1,1,1],_id:1,deletable:!1,owner:{_id:2}},{name:"Бобер красивый",link:new URL(n(877),n.b),likes:[1,1,1,1,1,1,1,1,1,1,1,1,1],_id:1,deletable:!1,owner:{_id:2}}];function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var u=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItems",value:function(t){var e=this;t.forEach((function(t){e._container.append(e._renderer(t))}))}},{key:"addItem",value:function(t){this._container.prepend(this._renderer(t))}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscCloseCallback=this._handleEscClose.bind(this),this._bigImage=this._popup.querySelector(".popup-big-image__image"),this._textImage=this._popup.querySelector(".popup-big-image__text"),this._form=this._popup.querySelector(".popup-form"),this._inputList=this._popup.querySelectorAll(".popup-form__text-form"),this._submitButton=this._popup.querySelector(".popup-form__save-button"),this.setEventListeners()}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscCloseCallback)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscCloseCallback)}},{key:"getSubmitButton",value:function(){return this._submitButton}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close-button"))&&t.close()}))}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=y(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},h.apply(this,arguments)}function y(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}function d(t,e){return d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},d(t,e)}function _(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(o);if(r){var n=m(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return _(this,t)});function a(){return f(this,a),i.apply(this,arguments)}return e=a,(n=[{key:"open",value:function(t){this._textImage.textContent=t._title,this._bigImage.src=t._link,this._bigImage.alt=t._title,h(m(a.prototype),"open",this).call(this)}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(s);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function k(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=C(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},g.apply(this,arguments)}function C(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}function w(t,e){return w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},w(t,e)}function E(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(o);if(r){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return E(this,t)});function a(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._submitCallback=e,n}return e=a,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){null!=t[e.name]&&(e.value=t[e.name])}))}},{key:"setEventListeners",value:function(){var t=this;g(S(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitCallback(t._getInputValues()),t.close()}))}},{key:"close",value:function(){g(S(a.prototype),"close",this).call(this),this._form.reset()}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(s);function O(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var L=function(){function t(e,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameArea=document.querySelector(e),this._specialityArea=document.querySelector(n),this._avatarArea=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._nameArea.textContent,speciality:this._specialityArea.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.speciality,o=t.avatar;e&&(this._nameArea.textContent=e),n&&(this._specialityArea.textContent=n),o&&(this._avatarArea.style["background-image"]="url('".concat(o,"')"))}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function P(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var B=function(){function t(e){var n=e.baseUrl,o=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._headers=o,this._authorization=this._headers.authorization,this._contentType=this._headers["Content-Type"]}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._authorization}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка запроса данных пользователя: ".concat(t.status))})).then((function(t){return t})).catch((function(t){return console.log(t),Promise.reject("")}))}},{key:"patchUserInfo",value:function(t){var e=t.name,n=t.speciality;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":this._contentType},body:JSON.stringify({name:e,about:n})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка обновления данных пользователя: ".concat(t.status))})).catch((function(t){return console.log(t),Promise.reject("")}))}},{key:"patchUserAvatar",value:function(t){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":this._contentType},body:JSON.stringify({avatar:t})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка обновления аватара пользователя: ".concat(t.status))})).catch((function(t){return console.log(t),Promise.reject("")}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._authorization}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка запроса данных карточек: ".concat(t.status))})).then((function(t){return t})).catch((function(t){return console.log(t),Promise.reject("")}))}},{key:"postCard",value:function(t){var e=t.name,n=t.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._authorization,"Content-Type":this._contentType},body:JSON.stringify({name:e,link:n})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка добавления новой карточки: ".concat(t.status))})).catch((function(t){return console.log(t),Promise.reject("")}))}},{key:"deleteCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t.getId()),{method:"DELETE",headers:{authorization:this._authorization,"Content-Type":this._contentType}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка удаления карточки: ".concat(t.status))})).catch((function(t){return console.log(t),Promise.reject("")}))}},{key:"putLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t.getId(),"/likes"),{method:"PUT",headers:{authorization:this._authorization,"Content-Type":this._contentType}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка добавления лайка: ".concat(t.status))})).catch((function(t){return console.log(t),Promise.reject("")}))}},{key:"deleteLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t.getId(),"/likes"),{method:"DELETE",headers:{authorization:this._authorization,"Content-Type":this._contentType}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка удаления лайка: ".concat(t.status))})).catch((function(t){return console.log(t),Promise.reject("")}))}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function x(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function I(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=q(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},R.apply(this,arguments)}function q(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=z(t)););return t}function U(t,e){return U=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},U(t,e)}function A(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function z(t){return z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},z(t)}var V=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&U(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=z(o);if(r){var n=z(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return A(this,t)});function a(){return x(this,a),i.apply(this,arguments)}return e=a,(n=[{key:"open",value:function(t){this._submitCallback=t,R(z(a.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var t=this;R(z(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitCallback(),t.close()}))}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(s),M=new B({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-40",headers:{authorization:"c5831f36-c63f-485a-b825-3b43b70dd4bf","Content-Type":"application/json"}});M.getUserInfo().then((function(t){J.setUserInfo({name:t.name,speciality:t.about,avatar:t.avatar})})).catch((function(t){alert("Ой! Что-то пошло не так! Mesto захватили бобры и мы не смогли подгрузить настоящие данные пользователя, простите нас! :("),J.setUserInfo({name:"Неизвестный бобер",speciality:"Профессиональный платиностройщик",avatar:"https://cstor.nn2.ru/forum/data/forum/images/2018-10/216027485-photo_bobra_01.jpg"})}));var D=new u((function(t){return function(t){var n="d96b1a53fe8ac56896b1ce45",o={item:t,deletable:n===t.owner._id,likedByMe:t.likes.some((function(t){return t._id==n})),selector:"#location",handleCardClick:H.open.bind(H),handleTrashClick:function(){var t=this;K.open((function(){return e=t,n=K.getSubmitButton().textContent,K.getSubmitButton().textContent="Удаление...",void M.deleteCard(e).then((function(t){e.deleteSelf()})).finally((function(t){return K.getSubmitButton().textContent=n}));var e,n}))},handleLikeClick:function(){var t;(t=this).getLikedByMe()?M.deleteLike(t).then((function(e){t.updateLikes(e.likes,!1)})):M.putLike(t).then((function(e){t.updateLikes(e.likes,!0)}))}};return new e(o).generateCard()}(t)}),".locations");M.getInitialCards().then((function(t){D.addItems(t)})).catch((function(t){alert("Ой! Что-то пошло не так! Mesto захватили бобры и мы не смогли подгрузить настоящие фотографии, простите нас! :("),D.addItems(i)}));var N,J=new L(".profile__name",".profile__speciality",".profile__avatar"),H=new b("#popup-big-image"),F=new j("#popup-add-card",(function(t){var e=this,n=t["image-title"],o=t["image-link"],r=this.getSubmitButton().textContent;this.getSubmitButton().textContent="Создание...",M.postCard({name:n,link:o}).then((function(t){D.addItem(t)})).catch((function(t){alert("Ой! Что-то пошло не так! Mesto не смог добавить новую карточку")})).finally((function(t){return e.getSubmitButton().textContent=r}))})),G=new j("#popup-edit-avatar",(function(t){var e=this,n=t["avatar-link"],o=this.getSubmitButton().textContent;this.getSubmitButton().textContent="Сохранение...",M.patchUserAvatar(n).then((function(t){J.setUserInfo({avatar:n})})).finally((function(t){return e.getSubmitButton().textContent=o}))})),K=new V("#popup-delete-card"),Q=new j("#popup-edit-profile",(function(t){var e=this,n=t.name,o=t.speciality,r=this.getSubmitButton().textContent;this.getSubmitButton().textContent="Сохранение...",M.patchUserInfo({name:n,speciality:o}).then((function(t){var e=t.name,n=t.about;J.setUserInfo({name:e,speciality:n})})).catch((function(t){alert("Ой! Что-то пошло не так! Mesto не смог сохранить ваше имя")})).finally((function(t){return e.getSubmitButton().textContent=r}))})),W={};N={formSelector:".popup-form",inputSelector:".popup-form__text-form",submitButtonSelector:".popup-form__save-button",activeButtonClass:"popup-form__save-button_active",inputErrorClass:"popup-form__text-form_error",errorClass:"popup-form__error-message_active"},Array.from(document.querySelectorAll(N.formSelector)).forEach((function(t){var e=new r(N,t),n=t.getAttribute("name");W[n]=e,e.enableValidation()}));var X=document.querySelector(".profile__edit-button"),Y=document.querySelector(".profile__add-button"),Z=document.querySelector(".profile__avatar");X.addEventListener("click",(function(){Q.setInputValues(J.getUserInfo()),W["profile-form"].updateValidity(),Q.open()})),Y.addEventListener("click",(function(){W["card-form"].updateValidity(),F.open()})),Z.addEventListener("click",(function(){W["avatar-form"].updateValidity(),G.open()}))})()})();