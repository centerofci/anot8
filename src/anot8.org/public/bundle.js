(function () {
    'use strict';

    var n,u$1,i$1,t$1,o$1={},f$1=[],e$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c$1(n,l){for(var u in l)n[u]=l[u];return n}function s(n){var l=n.parentNode;l&&l.removeChild(n);}function a$1(n,l,u){var i,t,r,o=arguments,f={};for(r in l)"key"==r?i=l[r]:"ref"==r?t=l[r]:f[r]=l[r];if(arguments.length>3)for(u=[u],r=3;r<arguments.length;r++)u.push(o[r]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(r in n.defaultProps)void 0===f[r]&&(f[r]=n.defaultProps[r]);return v$1(n,f,i,t,null)}function v$1(l,u,i,t,r){var o={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++n.__v:r};return null!=n.vnode&&n.vnode(o),o}function y(n){return n.children}function p$1(n,l){this.props=n,this.context=l;}function d(n,l){if(null==l)return n.__?d(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?d(n):null}function _(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return _(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u$1.push(l)&&!m$1.__r++||t$1!==n.debounceRendering)&&((t$1=n.debounceRendering)||i$1)(m$1);}function m$1(){for(var n;m$1.__r=u$1.length;)n=u$1.sort(function(n,l){return n.__v.__b-l.__v.__b}),u$1=[],n.some(function(n){var l,u,i,t,r,o;n.__d&&(r=(t=(l=n).__v).__e,(o=l.__P)&&(u=[],(i=c$1({},t)).__v=t.__v+1,T(o,t,i,l.__n,void 0!==o.ownerSVGElement,null!=t.__h?[r]:null,u,null==r?d(t):r,t.__h),j$1(u,t),t.__e!=r&&_(t)));});}function b$1(n,l,u,i,t,r,e,c,s,a){var h,p,_,k,m,b,w,A=i&&i.__k||f$1,P=A.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k?v$1(null,k,null,null,k):Array.isArray(k)?v$1(y,{children:k},null,null,null):k.__b>0?v$1(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(_=A[h])||_&&k.key==_.key&&k.type===_.type)A[h]=void 0;else for(p=0;p<P;p++){if((_=A[p])&&k.key==_.key&&k.type===_.type){A[p]=void 0;break}_=null;}T(n,k,_=_||o$1,t,r,e,c,s,a),m=k.__e,(p=k.ref)&&_.ref!=p&&(w||(w=[]),_.ref&&w.push(_.ref,null,k),w.push(p,k.__c||m,k)),null!=m?(null==b&&(b=m),"function"==typeof k.type&&null!=k.__k&&k.__k===_.__k?k.__d=s=g$1(k,s,n):s=x$1(n,k,_,A,m,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&_.__e==s&&s.parentNode!=n&&(s=d(_));}for(u.__e=b,h=P;h--;)null!=A[h]&&("function"==typeof u.type&&null!=A[h].__e&&A[h].__e==u.__d&&(u.__d=d(i,h+1)),L(A[h],A[h]));if(w)for(h=0;h<w.length;h++)I(w[h],w[++h],w[++h]);}function g$1(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?g$1(t,l,u):x$1(u,t,t,n.__k,t.__e,l));return l}function x$1(n,l,u,i,t,r){var o,f,e;if(void 0!==l.__d)o=l.__d,l.__d=void 0;else if(null==u||t!=r||null==t.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(t),o=null;else {for(f=r,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,r),o=r;}return void 0!==o?o:t.nextSibling}function A(n,l,u,i,t){var r;for(r in u)"children"===r||"key"===r||r in l||C(n,r,null,u[r],i);for(r in l)t&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||C(n,r,l[r],u[r],i);}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||e$1.test(l)?u:u+"px";}function C(n,l,u,i,t){var r;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||P(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])r=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?i||n.addEventListener(l,r?H:$,r):n.removeEventListener(l,r?H:$,r);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l));}}function $(l){this.l[l.type+!1](n.event?n.event(l):l);}function H(l){this.l[l.type+!0](n.event?n.event(l):l);}function T(l,u,i,t,r,o,f,e,s){var a,v,h,d,_,k,m,g,w,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(s=i.__h,e=u.__e=i.__e,u.__h=null,o=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,w=(a=P.contextType)&&t[a.__c],x=a?w?w.props.value:a.__:t,i.__c?m=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new p$1(g,x),v.constructor=P,v.render=M),w&&w.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=c$1({},v.__s)),c$1(v.__s,P.getDerivedStateFromProps(g,v.__s))),d=v.props,_=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else {if(null==P.getDerivedStateFromProps&&g!==d&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(d,_,k);});}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=c$1(c$1({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(k=v.getSnapshotBeforeUpdate(d,_)),A=null!=a&&a.type===y&&null==a.key?a.props.children:a,b$1(l,Array.isArray(A)?A:[A],u,i,t,r,o,f,e,s),v.base=u.__e,u.__h=null,v.__h.length&&f.push(v),m&&(v.__E=v.__=null),v.__e=!1;}else null==o&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=z(i.__e,u,i,t,r,o,f,s);(a=n.diffed)&&a(u);}catch(l){u.__v=null,(s||null!=o)&&(u.__e=e,u.__h=!!s,o[o.indexOf(e)]=null),n.__e(l,u,i);}}function j$1(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u);});}catch(l){n.__e(l,u.__v);}});}function z(n,l,u,i,t,r,e,c){var a,v,h,y,p=u.props,d=l.props,_=l.type,k=0;if("svg"===_&&(t=!0),null!=r)for(;k<r.length;k++)if((a=r[k])&&(a===n||(_?a.localName==_:3==a.nodeType))){n=a,r[k]=null;break}if(null==n){if(null===_)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,d.is&&d),r=null,c=!1;}if(null===_)p===d||c&&n.data===d||(n.data=d);else {if(r=r&&f$1.slice.call(n.childNodes),v=(p=u.props||o$1).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=r)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&(v&&h.__html==v.__html||h.__html===n.innerHTML)||(n.innerHTML=h&&h.__html||""));}if(A(n,d,p,t,c),h)l.__k=[];else if(k=l.props.children,b$1(n,Array.isArray(k)?k:[k],l,u,i,t&&"foreignObject"!==_,r,e,n.firstChild,c),null!=r)for(k=r.length;k--;)null!=r[k]&&s(r[k]);c||("value"in d&&void 0!==(k=d.value)&&(k!==n.value||"progress"===_&&!k)&&C(n,"value",k,p.value,!1),"checked"in d&&void 0!==(k=d.checked)&&k!==n.checked&&C(n,"checked",k,p.checked,!1));}return n}function I(l,u,i){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,i);}}function L(l,u,i){var t,r,o;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||I(t,null,u)),i||"function"==typeof l.type||(i=null!=(r=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(l){n.__e(l,u);}t.base=t.__P=null;}if(t=l.__k)for(o=0;o<t.length;o++)t[o]&&L(t[o],u,i);null!=r&&s(r);}function M(n,l,u){return this.constructor(n,u)}function N(l,u,i){var t,r,e;n.__&&n.__(l,u),r=(t="function"==typeof i)?null:i&&i.__k||u.__k,e=[],T(u,l=(!t&&i||u).__k=a$1(y,null,[l]),r||o$1,o$1,void 0!==u.ownerSVGElement,!t&&i?[i]:r?null:u.firstChild?f$1.slice.call(u.childNodes):null,e,!t&&i?i:r?r.__e:u.firstChild,t),j$1(e,l);}n={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l;}throw n},__v:0},p$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c$1({},this.state),"function"==typeof n&&(n=n(c$1({},u),this.props)),n&&c$1(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this));},p$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this));},p$1.prototype.render=y,u$1=[],i$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,m$1.__r=0,0;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }

    function symbolObservablePonyfill(root) {
    	var result;
    	var Symbol = root.Symbol;

    	if (typeof Symbol === 'function') {
    		if (Symbol.observable) {
    			result = Symbol.observable;
    		} else {
    			result = Symbol('observable');
    			Symbol.observable = result;
    		}
    	} else {
    		result = '@@observable';
    	}

    	return result;
    }

    /* global window */

    var root;

    if (typeof self !== 'undefined') {
      root = self;
    } else if (typeof window !== 'undefined') {
      root = window;
    } else if (typeof global !== 'undefined') {
      root = global;
    } else if (typeof module !== 'undefined') {
      root = module;
    } else {
      root = Function('return this')();
    }

    var result = symbolObservablePonyfill(root);

    /**
     * These are private action types reserved by Redux.
     * For any unknown actions, you must return the current state.
     * If the current state is undefined, you must return the initial state.
     * Do not reference these action types directly in your code.
     */
    var randomString = function randomString() {
      return Math.random().toString(36).substring(7).split('').join('.');
    };

    var ActionTypes = {
      INIT: "@@redux/INIT" + randomString(),
      REPLACE: "@@redux/REPLACE" + randomString(),
      PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
      }
    };

    /**
     * @param {any} obj The object to inspect.
     * @returns {boolean} True if the argument appears to be a plain object.
     */
    function isPlainObject(obj) {
      if (typeof obj !== 'object' || obj === null) return false;
      var proto = obj;

      while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
      }

      return Object.getPrototypeOf(obj) === proto;
    }

    /**
     * Creates a Redux store that holds the state tree.
     * The only way to change the data in the store is to call `dispatch()` on it.
     *
     * There should only be a single store in your app. To specify how different
     * parts of the state tree respond to actions, you may combine several reducers
     * into a single reducer function by using `combineReducers`.
     *
     * @param {Function} reducer A function that returns the next state tree, given
     * the current state tree and the action to handle.
     *
     * @param {any} [preloadedState] The initial state. You may optionally specify it
     * to hydrate the state from the server in universal apps, or to restore a
     * previously serialized user session.
     * If you use `combineReducers` to produce the root reducer function, this must be
     * an object with the same shape as `combineReducers` keys.
     *
     * @param {Function} [enhancer] The store enhancer. You may optionally specify it
     * to enhance the store with third-party capabilities such as middleware,
     * time travel, persistence, etc. The only store enhancer that ships with Redux
     * is `applyMiddleware()`.
     *
     * @returns {Store} A Redux store that lets you read the state, dispatch actions
     * and subscribe to changes.
     */

    function createStore(reducer, preloadedState, enhancer) {
      var _ref2;

      if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
        throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
      }

      if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
        enhancer = preloadedState;
        preloadedState = undefined;
      }

      if (typeof enhancer !== 'undefined') {
        if (typeof enhancer !== 'function') {
          throw new Error('Expected the enhancer to be a function.');
        }

        return enhancer(createStore)(reducer, preloadedState);
      }

      if (typeof reducer !== 'function') {
        throw new Error('Expected the reducer to be a function.');
      }

      var currentReducer = reducer;
      var currentState = preloadedState;
      var currentListeners = [];
      var nextListeners = currentListeners;
      var isDispatching = false;
      /**
       * This makes a shallow copy of currentListeners so we can use
       * nextListeners as a temporary list while dispatching.
       *
       * This prevents any bugs around consumers calling
       * subscribe/unsubscribe in the middle of a dispatch.
       */

      function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) {
          nextListeners = currentListeners.slice();
        }
      }
      /**
       * Reads the state tree managed by the store.
       *
       * @returns {any} The current state tree of your application.
       */


      function getState() {
        if (isDispatching) {
          throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
        }

        return currentState;
      }
      /**
       * Adds a change listener. It will be called any time an action is dispatched,
       * and some part of the state tree may potentially have changed. You may then
       * call `getState()` to read the current state tree inside the callback.
       *
       * You may call `dispatch()` from a change listener, with the following
       * caveats:
       *
       * 1. The subscriptions are snapshotted just before every `dispatch()` call.
       * If you subscribe or unsubscribe while the listeners are being invoked, this
       * will not have any effect on the `dispatch()` that is currently in progress.
       * However, the next `dispatch()` call, whether nested or not, will use a more
       * recent snapshot of the subscription list.
       *
       * 2. The listener should not expect to see all state changes, as the state
       * might have been updated multiple times during a nested `dispatch()` before
       * the listener is called. It is, however, guaranteed that all subscribers
       * registered before the `dispatch()` started will be called with the latest
       * state by the time it exits.
       *
       * @param {Function} listener A callback to be invoked on every dispatch.
       * @returns {Function} A function to remove this change listener.
       */


      function subscribe(listener) {
        if (typeof listener !== 'function') {
          throw new Error('Expected the listener to be a function.');
        }

        if (isDispatching) {
          throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
        }

        var isSubscribed = true;
        ensureCanMutateNextListeners();
        nextListeners.push(listener);
        return function unsubscribe() {
          if (!isSubscribed) {
            return;
          }

          if (isDispatching) {
            throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');
          }

          isSubscribed = false;
          ensureCanMutateNextListeners();
          var index = nextListeners.indexOf(listener);
          nextListeners.splice(index, 1);
          currentListeners = null;
        };
      }
      /**
       * Dispatches an action. It is the only way to trigger a state change.
       *
       * The `reducer` function, used to create the store, will be called with the
       * current state tree and the given `action`. Its return value will
       * be considered the **next** state of the tree, and the change listeners
       * will be notified.
       *
       * The base implementation only supports plain object actions. If you want to
       * dispatch a Promise, an Observable, a thunk, or something else, you need to
       * wrap your store creating function into the corresponding middleware. For
       * example, see the documentation for the `redux-thunk` package. Even the
       * middleware will eventually dispatch plain object actions using this method.
       *
       * @param {Object} action A plain object representing “what changed”. It is
       * a good idea to keep actions serializable so you can record and replay user
       * sessions, or use the time travelling `redux-devtools`. An action must have
       * a `type` property which may not be `undefined`. It is a good idea to use
       * string constants for action types.
       *
       * @returns {Object} For convenience, the same action object you dispatched.
       *
       * Note that, if you use a custom middleware, it may wrap `dispatch()` to
       * return something else (for example, a Promise you can await).
       */


      function dispatch(action) {
        if (!isPlainObject(action)) {
          throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
        }

        if (typeof action.type === 'undefined') {
          throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
        }

        if (isDispatching) {
          throw new Error('Reducers may not dispatch actions.');
        }

        try {
          isDispatching = true;
          currentState = currentReducer(currentState, action);
        } finally {
          isDispatching = false;
        }

        var listeners = currentListeners = nextListeners;

        for (var i = 0; i < listeners.length; i++) {
          var listener = listeners[i];
          listener();
        }

        return action;
      }
      /**
       * Replaces the reducer currently used by the store to calculate the state.
       *
       * You might need this if your app implements code splitting and you want to
       * load some of the reducers dynamically. You might also need this if you
       * implement a hot reloading mechanism for Redux.
       *
       * @param {Function} nextReducer The reducer for the store to use instead.
       * @returns {void}
       */


      function replaceReducer(nextReducer) {
        if (typeof nextReducer !== 'function') {
          throw new Error('Expected the nextReducer to be a function.');
        }

        currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
        // Any reducers that existed in both the new and old rootReducer
        // will receive the previous state. This effectively populates
        // the new state tree with any relevant data from the old one.

        dispatch({
          type: ActionTypes.REPLACE
        });
      }
      /**
       * Interoperability point for observable/reactive libraries.
       * @returns {observable} A minimal observable of state changes.
       * For more information, see the observable proposal:
       * https://github.com/tc39/proposal-observable
       */


      function observable() {
        var _ref;

        var outerSubscribe = subscribe;
        return _ref = {
          /**
           * The minimal observable subscription method.
           * @param {Object} observer Any object that can be used as an observer.
           * The observer object should have a `next` method.
           * @returns {subscription} An object with an `unsubscribe` method that can
           * be used to unsubscribe the observable from the store, and prevent further
           * emission of values from the observable.
           */
          subscribe: function subscribe(observer) {
            if (typeof observer !== 'object' || observer === null) {
              throw new TypeError('Expected the observer to be an object.');
            }

            function observeState() {
              if (observer.next) {
                observer.next(getState());
              }
            }

            observeState();
            var unsubscribe = outerSubscribe(observeState);
            return {
              unsubscribe: unsubscribe
            };
          }
        }, _ref[result] = function () {
          return this;
        }, _ref;
      } // When a store is created, an "INIT" action is dispatched so that every
      // reducer returns their initial state. This effectively populates
      // the initial state tree.


      dispatch({
        type: ActionTypes.INIT
      });
      return _ref2 = {
        dispatch: dispatch,
        subscribe: subscribe,
        getState: getState,
        replaceReducer: replaceReducer
      }, _ref2[result] = observable, _ref2;
    }

    var SUPPORTED_SCHEMA_VERSION = 6;

    function toggle_list_entry(list, entry) {
        var new_list = list.filter(function (e) { return e !== entry; });
        if (new_list.length === list.length)
            new_list.push(entry);
        return new_list;
    }
    function replace_entry(existing, entry, predicate, description) {
        return replace_entries(existing, function (item) { return predicate(item) ? entry : item; });
    }
    function replace_entries(existing, replacer, description) {
        return existing.map(function (item) { return replacer(item); });
    }
    function remove_entry(list, predicate) {
        return list.filter(function (i) { return !predicate(i); });
    }

    var safe_regexp = new RegExp("[^a-z0-9_]", "g");
    function get_safe_user_name(user_name) {
        return user_name.trim().toLowerCase().replace(safe_regexp, "_");
    }

    var got_annotations_file_type = "got_annotations_file";
    var got_annotations_file = function (args) {
        return __assign({ type: got_annotations_file_type }, args);
    };
    var is_got_annotations_file = function (action) {
        return action.type === got_annotations_file_type;
    };
    var got_replacement_annotations_file_type = "got_replacement_annotations_file";
    var got_replacement_annotations_file = function (args) {
        return __assign({ type: got_replacement_annotations_file_type }, args);
    };
    var is_got_replacement_annotations_file = function (action) {
        return action.type === got_replacement_annotations_file_type;
    };
    var create_annotation_type = "create_annotation";
    var create_annotation = function (args) {
        return { type: create_annotation_type, new_annotation: __assign(__assign({}, args.new_annotation), { dirty: true }) };
    };
    var is_create_annotation = function (action) {
        return action.type === create_annotation_type;
    };
    var edit_annotation_type = "edit_annotation";
    var edit_annotation = function (args) {
        return { type: edit_annotation_type, annotation: __assign(__assign({}, args.annotation), { dirty: true }) };
    };
    var is_edit_annotation = function (action) {
        return action.type === edit_annotation_type;
    };
    var delete_annotations_type = "delete_annotations";
    var delete_annotations = function (args) {
        return __assign({ type: delete_annotations_type }, args);
    };
    var is_delete_annotations = function (action) {
        return action.type === delete_annotations_type;
    };
    var progress_saving_annotations_type = "progress_saving_annotations";
    var progress_saving_annotations = function (args) {
        return __assign({ type: progress_saving_annotations_type }, args);
    };
    var is_progress_saving_annotations = function (action) {
        return action.type === progress_saving_annotations_type;
    };
    var annotations_actions = {
        got_annotations_file: got_annotations_file,
        got_replacement_annotations_file: got_replacement_annotations_file,
        create_annotation: create_annotation,
        edit_annotation: edit_annotation,
        delete_annotations: delete_annotations,
        progress_saving_annotations: progress_saving_annotations,
    };

    function is_not_deleted(annotation) {
        return !annotation.deleted;
    }
    function get_compound_id(_a) {
        var id = _a.id, safe_user_name = _a.safe_user_name;
        return safe_user_name ? id + "-" + (safe_user_name || "") : id.toString();
    }

    function get_all_annotations(annotations_by_safe_user_name) {
        var all_annotations = [];
        Object.values(annotations_by_safe_user_name)
            .forEach(function (user_specific_annotations) {
            var annotations = user_specific_annotations.filter(is_not_deleted);
            all_annotations = all_annotations.concat(annotations);
        });
        return all_annotations;
    }
    function get_annotation_by_compound_id(state, compound_annotation_id) {
        return state.annotations.annotations_by_compound_id[compound_annotation_id];
    }
    function get_annotation_ids_for_page(state, page_number) {
        return (state.annotations.annotations_by_page_number[page_number] || [])
            .map(get_compound_id)
            .join(",");
    }
    function next_annotation_id_for_user(state, safe_user_name) {
        var annotations = state.annotations.annotations_by_safe_user_name[safe_user_name];
        return annotations ? annotations.length : 0;
    }
    function get_all_selected_annotations(state) {
        return state.selected_annotations.selected_compound_ids.map(function (id) {
            return state.annotations.annotations_by_compound_id[id];
        })
            .filter(function (a) { return !!a; });
    }

    function annotations_reducer(state, action) {
        if (is_got_annotations_file(action) || is_got_replacement_annotations_file(action)) {
            var is_intial_load = is_got_annotations_file(action);
            var is_replacement = is_got_replacement_annotations_file(action);
            var annotations_file = action.annotations_file, user_name = action.user_name;
            var safe_user_name = get_safe_user_name(user_name);
            var new_maybe_annotations = annotations_file.annotations.map(add_user_name_and_compound_id(user_name));
            var prepared_state = prepare_new_annotations({ state: state, new_maybe_annotations: new_maybe_annotations, safe_user_name: safe_user_name, allow_merge: false, overwrite: is_replacement });
            var annotations_state = __assign(__assign(__assign({}, state.annotations), { annotation_files_loaded: __spreadArray(__spreadArray([], state.annotations.annotation_files_loaded), [safe_user_name]), unsupported_schema_version: get_unsupported_schema_version(state, annotations_file) }), prepared_state);
            if (is_main_annotations_file(safe_user_name) && is_intial_load) {
                annotations_state.annotation_user_names = annotations_file.annotation_user_names;
                var user_specific_annotation_files_to_load = annotations_file.annotation_user_names.map(get_safe_user_name);
                annotations_state.annotation_files_to_load = __spreadArray([""], user_specific_annotation_files_to_load);
            }
            if (is_intial_load && annotations_state.annotation_files_to_load.length === annotations_state.annotation_files_loaded.length) {
                annotations_state.status = "loaded";
            }
            else if (is_replacement)
                annotations_state.status = "saved";
            state = __assign(__assign({}, state), { annotations: annotations_state });
        }
        if (is_create_annotation(action)) {
            var new_maybe_annotations = [action.new_annotation];
            var safe_user_name = action.new_annotation.safe_user_name;
            var annotations_state = __assign(__assign({}, state.annotations), prepare_new_annotations({
                state: state,
                new_maybe_annotations: new_maybe_annotations,
                safe_user_name: safe_user_name,
                allow_merge: true,
                overwrite: false,
            }));
            state = __assign(__assign({}, state), { annotations: annotations_state });
        }
        if (is_edit_annotation(action)) {
            var edited_annotation_1 = action.annotation;
            var predicate = function (a) { return a.compound_id === edited_annotation_1.compound_id; };
            var annotations_by_safe_user_name = __assign({}, state.annotations.annotations_by_safe_user_name);
            annotations_by_safe_user_name[edited_annotation_1.safe_user_name] = replace_entry(annotations_by_safe_user_name[edited_annotation_1.safe_user_name], edited_annotation_1, predicate);
            var all_annotations = replace_entry(state.annotations.all_annotations, edited_annotation_1, predicate);
            var annotations_by_page_number = __assign({}, state.annotations.annotations_by_page_number);
            annotations_by_page_number[edited_annotation_1.page_number] = replace_entry(state.annotations.annotations_by_page_number[edited_annotation_1.page_number], edited_annotation_1, predicate);
            var annotations_by_compound_id = __assign({}, state.annotations.annotations_by_compound_id);
            annotations_by_compound_id[edited_annotation_1.compound_id] = edited_annotation_1;
            var new_annotations_state = __assign(__assign({}, state.annotations), { annotations_by_safe_user_name: annotations_by_safe_user_name,
                all_annotations: all_annotations,
                annotations_by_page_number: annotations_by_page_number,
                annotations_by_compound_id: annotations_by_compound_id });
            state = __assign(__assign({}, state), { annotations: new_annotations_state });
        }
        if (is_delete_annotations(action)) {
            var ids_1 = new Set(action.compound_ids);
            var safe_user_name_1 = state.user.safe_user_name;
            var predicate_1 = function (a) {
                return a.safe_user_name === safe_user_name_1 && ids_1.has(a.compound_id);
            };
            var replacer = function (a) {
                return predicate_1(a) ? __assign(__assign({}, a), { deleted: true, dirty: true }) : a;
            };
            var annotations_by_safe_user_name = __assign({}, state.annotations.annotations_by_safe_user_name);
            annotations_by_safe_user_name[safe_user_name_1] = replace_entries(annotations_by_safe_user_name[safe_user_name_1], replacer);
            var all_annotations = remove_entry(state.annotations.all_annotations, predicate_1);
            var annotations_by_page_number_1 = __assign({}, state.annotations.annotations_by_page_number);
            Object.keys(annotations_by_page_number_1).forEach(function (page_number_str) {
                var page_number = parseInt(page_number_str, 10);
                annotations_by_page_number_1[page_number] = remove_entry(state.annotations.annotations_by_page_number[page_number], predicate_1);
            });
            var annotations_by_compound_id_1 = __assign({}, state.annotations.annotations_by_compound_id);
            action.compound_ids.forEach(function (id) {
                var annotation = annotations_by_compound_id_1[id];
                if (annotation && predicate_1(annotation))
                    delete annotations_by_compound_id_1[id];
            });
            var new_annotations_state = __assign(__assign({}, state.annotations), { annotations_by_safe_user_name: annotations_by_safe_user_name,
                all_annotations: all_annotations,
                annotations_by_page_number: annotations_by_page_number_1,
                annotations_by_compound_id: annotations_by_compound_id_1 });
            state = __assign(__assign({}, state), { annotations: new_annotations_state });
        }
        if (is_progress_saving_annotations(action)) {
            var annotations = __assign(__assign({}, state.annotations), { status: action.status });
            state = __assign(__assign({}, state), { annotations: annotations });
        }
        return state;
    }
    function add_user_name_and_compound_id(user_name) {
        var safe_user_name = get_safe_user_name(user_name);
        return function (annotation) {
            annotation = (__assign(__assign({}, annotation), { user_name: user_name, safe_user_name: safe_user_name }));
            var compound_id = get_compound_id(annotation);
            return __assign(__assign({}, annotation), { compound_id: compound_id });
        };
    }
    function prepare_new_annotations(args) {
        var state = args.state, new_maybe_annotations = args.new_maybe_annotations, safe_user_name = args.safe_user_name, allow_merge = args.allow_merge, allow_overwrite = args.overwrite;
        var annotations_by_safe_user_name = add_new_annotations_by_safe_user_name({
            annotations_by_safe_user_name: state.annotations.annotations_by_safe_user_name,
            new_annotations: new_maybe_annotations,
            safe_user_name: safe_user_name,
            allow_merge: allow_merge,
            allow_overwrite: allow_overwrite,
        });
        var all_annotations = get_all_annotations(annotations_by_safe_user_name);
        var new_annotations = new_maybe_annotations.filter(is_not_deleted);
        var annotations_by_page_number = allow_overwrite
            ? get_annotations_by_page_number(all_annotations)
            : add_new_annotations_by_page_number(state.annotations.annotations_by_page_number, new_annotations);
        var annotations_by_compound_id = add_new_annotations_by_compound_id(state.annotations.annotations_by_compound_id, new_annotations);
        return {
            annotations_by_safe_user_name: annotations_by_safe_user_name,
            all_annotations: all_annotations,
            annotations_by_page_number: annotations_by_page_number,
            annotations_by_compound_id: annotations_by_compound_id,
        };
    }
    function add_new_annotations_by_safe_user_name(args) {
        var _a, _b;
        var annotations_by_safe_user_name = args.annotations_by_safe_user_name, safe_user_name = args.safe_user_name, allow_merge = args.allow_merge, allow_overwrite = args.allow_overwrite;
        var new_annotations = args.new_annotations;
        if (!allow_merge) {
            if (annotations_by_safe_user_name[safe_user_name] && !allow_overwrite) {
                console.error("Overwritting annotations by safe_user_name ", annotations_by_safe_user_name[safe_user_name]);
            }
            return __assign(__assign({}, annotations_by_safe_user_name), (_a = {}, _a[safe_user_name] = __spreadArray([], new_annotations), _a));
        }
        else {
            var existing_annotations = annotations_by_safe_user_name[safe_user_name] || [];
            new_annotations = __spreadArray(__spreadArray([], existing_annotations), new_annotations);
            return __assign(__assign({}, annotations_by_safe_user_name), (_b = {}, _b[safe_user_name] = new_annotations, _b));
        }
    }
    function get_annotations_by_page_number(all_annotations) {
        var annotations_by_page_number = {};
        var unique_page_numbers = Array.from(new Set(all_annotations.map(function (a) { return a.page_number; })));
        unique_page_numbers.forEach(function (page_number) {
            annotations_by_page_number[page_number] = [];
        });
        all_annotations.map(function (a) {
            annotations_by_page_number[a.page_number].push(a);
        });
        return annotations_by_page_number;
    }
    function add_new_annotations_by_page_number(annotations_by_page_number, new_annotations) {
        annotations_by_page_number = __assign({}, annotations_by_page_number);
        var unique_page_numbers = Array.from(new Set(new_annotations.map(function (a) { return a.page_number; })));
        unique_page_numbers.forEach(function (page_number) {
            annotations_by_page_number[page_number] = __spreadArray([], (annotations_by_page_number[page_number] || []));
        });
        new_annotations.map(function (a) {
            annotations_by_page_number[a.page_number].push(a);
        });
        return annotations_by_page_number;
    }
    function add_new_annotations_by_compound_id(annotations_by_compound_id, new_annotations) {
        annotations_by_compound_id = __assign({}, annotations_by_compound_id);
        new_annotations.map(function (a) {
            annotations_by_compound_id[a.compound_id] = a;
        });
        return annotations_by_compound_id;
    }
    function is_main_annotations_file(safe_user_name) {
        return safe_user_name === "";
    }
    function get_unsupported_schema_version(state, annotations_file) {
        var unsupported_schema_version = annotations_file.schema_version !== SUPPORTED_SCHEMA_VERSION;
        return state.annotations.unsupported_schema_version || unsupported_schema_version;
    }

    function toggle_set_entry(set, entry) {
        if (set.has(entry))
            set.delete(entry);
        else
            set.add(entry);
    }

    function update_state(root_state, path1, replacement_state) {
        var _a;
        var current = root_state[path1];
        if (current === replacement_state)
            return root_state;
        return __assign(__assign({}, root_state), (_a = {}, _a[path1] = replacement_state, _a));
    }
    function update_substate(root_state, path1, path2, replacement_substate) {
        var replacement_state = update_state(root_state[path1], path2, replacement_substate);
        return update_state(root_state, path1, replacement_state);
    }

    var update_loading_status_type = "update_loading_status";
    var update_loading_status = function (args) {
        return __assign({ type: update_loading_status_type }, args);
    };
    var is_update_loading_status = function (action) {
        return action.type === update_loading_status_type;
    };
    var error_during_loading_type = "error_during_loading";
    var error_during_loading = function (args) {
        return __assign({ type: error_during_loading_type }, args);
    };
    var is_error_during_loading = function (action) {
        return action.type === error_during_loading_type;
    };
    var set_vault_config_type = "set_vault_config";
    var set_vault_config = function (args) {
        return __assign({ type: set_vault_config_type }, args);
    };
    var is_set_vault_config = function (action) {
        return action.type === set_vault_config_type;
    };
    var resolved_relative_file_path_type = "resolved_relative_file_path";
    var resolved_relative_file_path = function (args) {
        return __assign({ type: resolved_relative_file_path_type }, args);
    };
    var is_resolved_relative_file_path = function (action) {
        return action.type === resolved_relative_file_path_type;
    };
    var loading_actions = {
        update_loading_status: update_loading_status,
        error_during_loading: error_during_loading,
        set_vault_config: set_vault_config,
        resolved_relative_file_path: resolved_relative_file_path,
    };

    var set_highlighting_used_labels_type = "set_highlighting_used_labels";
    var set_highlighting_used_labels = function (args) {
        return __assign({ type: set_highlighting_used_labels_type }, args);
    };
    var is_set_highlighting_used_labels = function (action) {
        return action.type === set_highlighting_used_labels_type;
    };
    var set_search_string_type = "set_search_string";
    var set_search_string = function (args) {
        return __assign({ type: set_search_string_type }, args);
    };
    var is_set_search_string = function (action) {
        return action.type === set_search_string_type;
    };
    var set_used_labels_type = "set_used_labels";
    var set_used_labels = function (args) {
        return __assign({ type: set_used_labels_type }, args);
    };
    var is_set_used_labels = function (action) {
        return action.type === set_used_labels_type;
    };
    var set_labels_used_by_selected_annotations_type = "set_labels_used_by_selected_annotations";
    var set_labels_used_by_selected_annotations = function (args) {
        return __assign({ type: set_labels_used_by_selected_annotations_type }, args);
    };
    var is_set_labels_used_by_selected_annotations = function (action) {
        return action.type === set_labels_used_by_selected_annotations_type;
    };
    var toggle_label_priority_type = "toggle_label_priority";
    var toggle_label_priority = function (args) {
        return __assign({ type: toggle_label_priority_type }, args);
    };
    var is_toggle_label_priority = function (action) {
        return action.type === toggle_label_priority_type;
    };
    var labels_actions = {
        set_highlighting_used_labels: set_highlighting_used_labels,
        set_search_string: set_search_string,
        set_used_labels: set_used_labels,
        set_labels_used_by_selected_annotations: set_labels_used_by_selected_annotations,
        toggle_label_priority: toggle_label_priority,
    };

    function get_starting_labels_state() {
        return {
            labels_by_id: {},
            highlighting_used_labels: get_item_boolean("highlighting_used_labels", true),
            used_labels: new Set(),
            priority_labels: get_priority_labels(),
            hide_label_roots: get_label_roots_to_hide(),
            search_string: "",
            label_ids_list_to_display: [],
            labels_used_by_selected_annotations: {},
        };
    }
    function store_setting_highlighting_used_labels(value) {
        localStorage.setItem("highlighting_used_labels", value ? "1" : "0");
    }
    function store_priority_labels(labels) {
        localStorage.setItem("priority_labels", JSON.stringify(labels));
    }
    function get_item_boolean(item, defalt) {
        var value = localStorage.getItem(item);
        if (!value)
            return defalt;
        return value === "1";
    }
    function get_priority_labels() {
        try {
            return new Set(JSON.parse(localStorage.getItem("priority_labels") || "[]"));
        }
        catch (_a) {
            return new Set();
        }
    }
    function get_label_roots_to_hide() {
        try {
            return JSON.parse(localStorage.getItem("hide_label_roots") || "[]");
        }
        catch (_a) {
            return [];
        }
    }

    function labels_reducer(state, action) {
        var _a;
        if (is_set_vault_config(action)) {
            var labels_by_id = get_labels_by_id(action.config.labels, state);
            var labels = __assign(__assign({}, state.labels), { labels_by_id: labels_by_id, label_ids_list_to_display: get_label_ids_list_to_display(labels_by_id) });
            state = __assign(__assign({}, state), { labels: labels });
        }
        if (is_set_highlighting_used_labels(action)) {
            state = update_substate(state, "labels", "highlighting_used_labels", action.highlighting);
            store_setting_highlighting_used_labels(action.highlighting);
        }
        if (is_set_search_string(action)) {
            var labels = __assign(__assign({}, state.labels), { search_string: action.search });
            state = __assign(__assign({}, state), { labels: labels });
        }
        if (is_set_used_labels(action)) {
            state = update_substate(state, "labels", "used_labels", action.used_labels);
        }
        if (is_set_labels_used_by_selected_annotations(action)) {
            state = update_substate(state, "labels", "labels_used_by_selected_annotations", action.labels_used_by_selected_annotations);
        }
        if (is_toggle_label_priority(action)) {
            var label_str = action.toggle_label_priority;
            var priority_labels = state.labels.priority_labels;
            toggle_set_entry(priority_labels, label_str);
            var priority = priority_labels.has(label_str);
            var label = __assign(__assign({}, state.labels.labels_by_id[label_str]), { priority: priority });
            var labels_by_id = __assign(__assign({}, state.labels.labels_by_id), (_a = {}, _a[label_str] = label, _a));
            var label_ids_list_to_display = get_label_ids_list_to_display(labels_by_id);
            var labels_state = __assign(__assign({}, state.labels), { priority_labels: priority_labels,
                labels_by_id: labels_by_id,
                label_ids_list_to_display: label_ids_list_to_display });
            state = __assign(__assign({}, state), { labels: labels_state });
            store_priority_labels(Array.from(priority_labels));
        }
        return state;
    }
    function get_labels_by_id(labels, state) {
        var priority_labels = state.labels.priority_labels;
        var hide_label_roots = state.labels.hide_label_roots;
        var labels_by_id = {};
        labels.forEach(function (label) {
            var display_text = hide_label_roots.reduce(function (accum, to_remove) {
                if (!accum.startsWith(to_remove))
                    return accum;
                return accum.replace(to_remove, "");
            }, label);
            labels_by_id[label] = {
                value: label,
                lower_case_value: label.toLowerCase(),
                display_text: display_text,
                priority: priority_labels.has(label),
            };
        });
        return labels_by_id;
    }
    function get_label_ids_list_to_display(labels_by_id) {
        return Object.values(labels_by_id)
            .sort(function (a, b) {
            if (a.priority === b.priority) {
                return a.lower_case_value < b.lower_case_value ? -1 : 1;
            }
            else {
                return a.priority ? -1 : 1;
            }
        })
            .map(function (_a) {
            var value = _a.value;
            return value;
        });
    }

    var start_rendering_pdf_type = "start_rendering_pdf";
    var start_rendering_pdf = function (args) {
        return __assign({ type: start_rendering_pdf_type }, args);
    };
    var is_start_rendering_pdf = function (action) {
        return action.type === start_rendering_pdf_type;
    };
    var rendered_page_type = "rendered_page";
    var rendered_page = function (args) {
        return __assign({ type: rendered_page_type }, args);
    };
    var is_rendered_page = function (action) {
        return action.type === rendered_page_type;
    };
    var finished_rendering_pdf_type = "finished_rendering_pdf";
    var finished_rendering_pdf = function (args) {
        return __assign({ type: finished_rendering_pdf_type }, args);
    };
    var is_finished_rendering_pdf = function (action) {
        return action.type === finished_rendering_pdf_type;
    };
    var pdf_rendering_actions = {
        start_rendering_pdf: start_rendering_pdf,
        rendered_page: rendered_page,
        finished_rendering_pdf: finished_rendering_pdf,
    };

    function loading_reducer(state, action) {
        if (is_update_loading_status(action)) {
            var loading = __assign(__assign({}, state.loading_pdf), { status: action.status, loading_stage: action.stage });
            state = __assign(__assign({}, state), { loading_pdf: loading });
        }
        if (is_error_during_loading(action)) {
            var loading = __assign(__assign({}, state.loading_pdf), { status: "errored", loading_stage: action.error_stage, loading_error_type: action.error_type });
            state = __assign(__assign({}, state), { loading_pdf: loading });
        }
        if (is_set_vault_config(action)) {
            var loading = __assign(__assign({}, state.loading_pdf), { vault_config_loaded: true, publish_root_path: action.config.publish_root_path });
            state = __assign(__assign({}, state), { loading_pdf: loading });
        }
        if (is_resolved_relative_file_path(action)) {
            var loading = __assign(__assign({}, state.loading_pdf), { status: "resolved", resolved_relative_file_path: action.relative_file_path });
            state = __assign(__assign({}, state), { loading_pdf: loading });
        }
        if (is_start_rendering_pdf(action)) {
            state = update_substate(state, "loading_pdf", "status", "downloaded");
        }
        return state;
    }

    function pdf_rendering_reducer(state, action) {
        if (is_start_rendering_pdf(action)) {
            var rendering_pdf = __assign(__assign({}, state.rendering_pdf), { max_pages: action.max_pages, status: "rendering" });
            state = __assign(__assign({}, state), { rendering_pdf: rendering_pdf });
        }
        if (is_rendered_page(action)) {
            var rendering_pdf = __assign(__assign({}, state.rendering_pdf), { last_rendered_page_number: action.page_number });
            state = __assign(__assign({}, state), { rendering_pdf: rendering_pdf });
        }
        if (is_finished_rendering_pdf(action)) {
            state = update_substate(state, "rendering_pdf", "status", "finished");
        }
        return state;
    }

    var toggle_annotation_highlight_type = "toggle_annotation_highlight";
    var toggle_annotation_highlight = function (args) {
        return __assign({ type: toggle_annotation_highlight_type }, args);
    };
    var is_toggle_annotation_highlight = function (action) {
        return action.type === toggle_annotation_highlight_type;
    };
    var set_selected_ids_type = "set_selected_ids";
    var set_selected_ids = function (args) {
        return __assign({ type: set_selected_ids_type }, args);
    };
    var is_set_selected_ids = function (action) {
        return action.type === set_selected_ids_type;
    };
    var selected_annotations_actions = {
        toggle_annotation_highlight: toggle_annotation_highlight,
        set_selected_ids: set_selected_ids,
    };

    function selected_annotations_reducer(state, action) {
        if (is_toggle_annotation_highlight(action)) {
            var selected_compound_ids = toggle_list_entry(state.selected_annotations.selected_compound_ids, action.compound_id);
            state = update_substate(state, "selected_annotations", "selected_compound_ids", selected_compound_ids);
        }
        if (is_create_annotation(action)) {
            var selected_compound_ids = [action.new_annotation.compound_id];
            state = update_substate(state, "selected_annotations", "selected_compound_ids", selected_compound_ids);
        }
        if (is_set_selected_ids(action)) {
            state = update_substate(state, "selected_annotations", "selected_compound_ids", action.selected_compound_ids);
        }
        return state;
    }

    var set_user_name_type = "set_user_name";
    var set_user_name = function (args) {
        return __assign({ type: set_user_name_type }, args);
    };
    var is_set_user_name = function (action) {
        return action.type === set_user_name_type;
    };
    var user_actions = {
        set_user_name: set_user_name,
    };

    function user_reducer(state, action) {
        if (is_set_user_name(action)) {
            var user_name = action.user_name;
            var safe_user_name = get_safe_user_name(user_name);
            localStorage.setItem("user_name", user_name);
            state = __assign(__assign({}, state), { user: { user_name: user_name, safe_user_name: safe_user_name } });
        }
        return state;
    }

    var root_reducer = (function (state, action) {
        state = annotations_reducer(state, action);
        state = labels_reducer(state, action);
        state = loading_reducer(state, action);
        state = pdf_rendering_reducer(state, action);
        state = selected_annotations_reducer(state, action);
        state = user_reducer(state, action);
        return state;
    });

    function get_starting_annotations_state() {
        return {
            status: "not ready",
            annotation_files_to_load: [""],
            annotation_files_loaded: [],
            unsupported_schema_version: undefined,
            annotation_user_names: undefined,
            annotations_by_safe_user_name: {},
            all_annotations: [],
            annotations_by_compound_id: {},
            annotations_by_page_number: {},
        };
    }

    function get_starting_loading_state() {
        return {
            status: "not ready",
            loading_stage: undefined,
            loading_error_type: undefined,
            vault_config_loaded: false,
            publish_root_path: undefined,
            resolved_relative_file_path: undefined,
        };
    }

    function get_starting_rendering_pdf_state() {
        return {
            status: "not started",
            max_pages: undefined,
            last_rendered_page_number: undefined,
        };
    }

    function parse_location_search() {
        var query = window.location.search.substring(1);
        var obj = {};
        if (query) {
            query.split("&").forEach(function (key_var) {
                var _a = key_var.split("="), key = _a[0], _var = _a[1];
                obj[decodeURIComponent(key)] = decodeURIComponent(_var);
            });
        }
        return obj;
    }
    function object_to_search_string(obj) {
        var search = Object.keys(obj)
            .filter(function (key) { return obj[key]; })
            .map(function (key) { return key + "=" + (obj[key]); });
        var search_string = (search.length ? "?" : "") + search.join("&");
        return search_string;
    }

    function parse_location_path() {
        var parts = window.location.pathname.split("/")
            .filter(function (p) { return !!p; });
        var naming_authority_and_vault_ids = parts[parts.length - 2];
        var _a = naming_authority_and_vault_ids.split("."), naming_authority = _a[0], vault_id = _a[1];
        var file_id = parts[parts.length - 1];
        return {
            naming_authority: naming_authority,
            vault_id: vault_id,
            file_id: file_id,
        };
    }
    function get_starting_routing_state() {
        var vars = parse_location_search();
        return __assign(__assign({}, parse_location_path()), { relative_file_path: vars.relative_file_path });
    }

    function get_starting_selected_annotations_state() {
        var vars = parse_location_search();
        var h1_ids = get_compound_ids(vars["h"]);
        var h2_ids = get_compound_ids(vars["highlighted_annotation_ids"]);
        var selected_compound_ids = h1_ids.concat(h2_ids);
        return {
            selected_compound_ids: selected_compound_ids,
        };
    }
    function get_compound_ids(str) {
        if (str === void 0) { str = ""; }
        return str ? str.split(",") : [];
    }

    function get_starting_user_state() {
        var user_name = localStorage.getItem("user_name") || "";
        var safe_user_name = get_safe_user_name(user_name);
        return {
            user_name: user_name,
            safe_user_name: safe_user_name,
        };
    }

    function get_starting_state() {
        var running_locally = window.location.host !== "anot8.org";
        var override_naming_authority_server_url = localStorage.getItem("override_naming_authority_server_url") || "";
        return {
            annotations: get_starting_annotations_state(),
            labels: get_starting_labels_state(),
            loading_pdf: get_starting_loading_state(),
            override_naming_authority_server_url: override_naming_authority_server_url,
            rendering_pdf: get_starting_rendering_pdf_state(),
            routing: get_starting_routing_state(),
            running_locally: running_locally,
            selected_annotations: get_starting_selected_annotations_state(),
            user: get_starting_user_state(),
        };
    }

    var store$4;
    function get_store() {
        if (store$4)
            return store$4;
        var starting_state = get_starting_state();
        store$4 = createStore(root_reducer, starting_state);
        return store$4;
    }
    function dispatch(action) {
        if (!store$4)
            get_store();
        store$4.dispatch(action);
    }

    var store$3 = get_store();
    function connect(map_state) {
        function connector(ComponentToWrap) {
            return (function (_super) {
                __extends(WrappedComponent, _super);
                function WrappedComponent(own_props) {
                    var _this = _super.call(this, own_props) || this;
                    _this.setState(map_state(store$3.getState(), own_props));
                    _this.unsubscribe = store$3.subscribe(function () {
                        _this.setState(map_state(store$3.getState(), own_props));
                    });
                    return _this;
                }
                WrappedComponent.prototype.componentWillUnmount = function () {
                    this.unsubscribe();
                };
                WrappedComponent.prototype.shouldComponentUpdate = function (next_props, next_state) {
                    var _this = this;
                    var prop_keys = Object.keys(this.props);
                    var state_keys = Object.keys(this.state);
                    var nprop_keys = Object.keys(next_props);
                    var nstate_keys = Object.keys(next_state);
                    var should_update = false;
                    if (prop_keys.length !== nprop_keys.length || state_keys.length !== nstate_keys.length)
                        return true;
                    var change_in_props = prop_keys.find(function (k) { return _this.props[k] !== next_props[k]; });
                    if (change_in_props)
                        return true;
                    var change_in_state = state_keys.find(function (k) { return _this.state[k] !== next_state[k]; });
                    if (change_in_state)
                        return true;
                    return should_update;
                };
                WrappedComponent.prototype.render = function () {
                    return a$1(ComponentToWrap, __assign({}, this.props, this.state));
                };
                return WrappedComponent;
            }(p$1));
        }
        return connector;
    }

    var ACTIONS = {
        annotations: annotations_actions,
        labels: labels_actions,
        loading: loading_actions,
        pdf_rendering: pdf_rendering_actions,
        selected_annotations: selected_annotations_actions,
        user: user_actions,
    };

    function AnnotationListEntry(props) {
        var _a = props.annotation, compound_id = _a.compound_id, colour = _a.colour, dirty = _a.dirty, text = _a.text, comment = _a.comment, labels = _a.labels, page_number = _a.page_number, user_name = _a.user_name;
        var className = "annotation_list_element annotation_" + compound_id;
        var on_click = function () {
            dispatch(ACTIONS.selected_annotations.toggle_annotation_highlight({ compound_id: compound_id }));
        };
        return a$1("div", { style: { backgroundColor: colour }, className: className, onClick: on_click },
            dirty && a$1("span", { style: { backgroundColor: "yellow" } }, "\u26A0"),
            text,
            a$1("br", null),
            a$1("br", null),
            a$1("div", { style: { float: "left" } },
                a$1("span", { style: { color: "#777", fontSize: 10 } },
                    "Comment: ",
                    comment)),
            a$1("br", null),
            a$1("div", { style: { float: "left", display: "flex" } },
                a$1("span", { style: { color: "#777", fontSize: 10 } }, "Labels: "),
                labels.map(function (l) { return a$1("div", { className: "label" }, l); })),
            a$1("div", { style: { float: "right", color: "#777", fontSize: 10 } },
                "page: ",
                page_number),
            a$1("br", null),
            user_name && a$1("div", { style: { float: "right", color: "#777", fontSize: 10 } },
                "by: ",
                user_name),
            a$1("div", { style: { clear: "both" } }));
    }

    var map_state$b = function (state) { return ({
        annotations: state.annotations.all_annotations
    }); };
    var connector$b = connect(map_state$b);
    function _AnnotationsList(props) {
        return a$1("div", null, props.annotations.map(function (a) { return a$1(AnnotationListEntry, { key: a.compound_id, annotation: a }); }));
    }
    var AnnotationsList = connector$b(_AnnotationsList);

    var map_state$a = function (state) { return ({
        selected_annotation_ids_owned_by_user: get_selected_annotation_ids_owned_by_user(state),
    }); };
    var connector$a = connect(map_state$a);
    function _DeleteButton(props) {
        return a$1("button", { disabled: !props.selected_annotation_ids_owned_by_user, title: "Delete annotations", onClick: function () {
                var compound_ids = props.selected_annotation_ids_owned_by_user.split(",");
                get_store().dispatch(ACTIONS.annotations.delete_annotations({ compound_ids: compound_ids }));
            } }, "X");
    }
    var DeleteButton = connector$a(_DeleteButton);
    function get_selected_annotation_ids_owned_by_user(state) {
        var safe_user_name = state.user.safe_user_name;
        var ids = get_all_selected_annotations(state)
            .filter(function (a) { return a && a.safe_user_name === safe_user_name; })
            .map(function (a) { return a.compound_id; });
        return ids.join(",");
    }

    var store$2 = get_store();
    var map_state$9 = function (state, own_props) {
        var label = state.labels.labels_by_id[own_props.label_id];
        return __assign(__assign({ label: label, disabled: is_disabled(state), is_used: state.labels.used_labels.has(label.value), display: matches_search_string(label, state.labels.search_string) }, is_checked_or_indeterminate(label, state)), { annotations_to_edit: get_all_selected_annotations(state), priority: state.labels.priority_labels.has(label.value) });
    };
    var connector$9 = connect(map_state$9);
    function _LabelComponent(props) {
        if (!props.display)
            return null;
        function toggle_label() {
            if (props.annotations_to_edit.length !== 1) {
                console.warn("Should not be able to edit multiple annotations");
                return;
            }
            var annotation_to_edit = props.annotations_to_edit[0];
            var labels = toggle_list_entry(annotation_to_edit.labels, props.label.value);
            var new_annotation = __assign(__assign({}, annotation_to_edit), { labels: labels });
            store$2.dispatch(ACTIONS.annotations.edit_annotation({ annotation: new_annotation }));
        }
        var class_name = "label " + (props.is_used ? "used_label" : "") + " " + (props.priority ? "priority" : "");
        return a$1("div", { className: class_name, onClick: function () { return toggle_label(); } },
            a$1("input", { type: "checkbox", className: "label_checkbox", disabled: props.disabled, checked: props.checked, ref: function (e) { return e && (e.indeterminate = props.indeterminate); }, onChange: function (e) { e.stopPropagation(); toggle_label(); } }),
            props.label.display_text,
            a$1("span", { className: "priority_label", onClick: function (e) {
                    e.stopPropagation();
                    store$2.dispatch(ACTIONS.labels.toggle_label_priority({ toggle_label_priority: props.label.value }));
                }, dangerouslySetInnerHTML: { __html: props.priority ? "&starf;" : "&star;" } }));
    }
    var LabelComponent = connector$9(_LabelComponent);
    function is_disabled(state) {
        return (state.selected_annotations.selected_compound_ids.length !== 1
            || !!get_all_selected_annotations(state)
                .find(function (_a) {
                var safe_user_name = _a.safe_user_name;
                return safe_user_name !== state.user.safe_user_name;
            }));
    }
    function matches_search_string(label, search_string) {
        if (!search_string)
            return true;
        return label.lower_case_value.includes(search_string.toLowerCase());
    }
    function is_checked_or_indeterminate(label, state) {
        var count = state.labels.labels_used_by_selected_annotations[label.value] || 0;
        var checked = count > 0;
        var indeterminate = checked && count !== state.selected_annotations.selected_compound_ids.length;
        return { checked: checked, indeterminate: indeterminate };
    }

    var map_state$8 = function (state) { return ({
        label_ids_list_to_display: state.labels.label_ids_list_to_display,
    }); };
    var connector$8 = connect(map_state$8);
    function _LabelsList(props) {
        return a$1("div", { id: "labels_list_container" }, props.label_ids_list_to_display.map(function (label_id) { return a$1(LabelComponent, { key: label_id, label_id: label_id }); }));
    }
    var LabelsList = connector$8(_LabelsList);

    var map_state$7 = function (state) { return ({
        highlighting_used_labels: state.labels.highlighting_used_labels,
        search_string: state.labels.search_string,
    }); };
    var connector$7 = connect(map_state$7);
    var store$1 = get_store();
    function _Labels(props) {
        return a$1("div", { className: props.highlighting_used_labels ? "highlight_used_labels" : "" },
            a$1("h3", null, "List of labels:"),
            a$1("input", { id: "labels_search", type: "text", placeholder: "Search labels...", value: props.search_string, onKeyUp: function (e) { return store$1.dispatch(ACTIONS.labels.set_search_string({ search: e.currentTarget.value })); } }),
            "\u00A0 Highlight used labels: ",
            a$1("input", { id: "labels_used_toggle", type: "checkbox", checked: props.highlighting_used_labels, onChange: function (e) { return store$1.dispatch(ACTIONS.labels.set_highlighting_used_labels({ highlighting: e.currentTarget.checked })); } }),
            a$1(LabelsList, null));
    }
    var Labels = connector$7(_Labels);

    var t,u,r,o=0,i=[],c=n.__b,f=n.__r,e=n.diffed,a=n.__c,v=n.unmount;function m(t,r){n.__h&&n.__h(u,t,o||r),o=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o=1,p(w,n)}function p(n,r,o){var i=m(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):w(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}));}],i.__c=u),i.__}function x(){i.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g),t.__H.__h.forEach(j),t.__H.__h=[];}catch(u){t.__H.__h=[],n.__e(u,t.__v);}}),i=[];}n.__b=function(n){u=null,c&&c(n);},n.__r=function(n){f&&f(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(g),r.__h.forEach(j),r.__h=[]);},n.diffed=function(t){e&&e(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r===n.requestAnimationFrame||((r=n.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u));})(x)),u=void 0;},n.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g),t.__h=t.__h.filter(function(n){return !n.__||j(n)});}catch(r){u.some(function(n){n.__h&&(n.__h=[]);}),u=[],n.__e(r,t.__v);}}),a&&a(t,u);},n.unmount=function(t){v&&v(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g);}catch(t){n.__e(t,u.__v);}};var b="function"==typeof requestAnimationFrame;function g(n){var t=u;"function"==typeof n.__c&&n.__c(),u=t;}function j(n){var t=u;n.__c=n.__(),u=t;}function w(n,t){return "function"==typeof t?t(n):t}

    var map_state$6 = function (state) { return ({
        loading_status: state.loading_pdf.status,
        stage: state.loading_pdf.loading_stage,
        error_during_loading__type: state.loading_pdf.loading_error_type,
        rendering_status: state.rendering_pdf.status,
        max_pages: state.rendering_pdf.max_pages,
        page_number: state.rendering_pdf.last_rendered_page_number,
        naming_authority: state.routing.naming_authority,
        vault_id: state.routing.vault_id,
        file_id: state.routing.file_id,
    }); };
    var connector$6 = connect(map_state$6);
    function _LoadingProgress(props) {
        var _a = l(true), visibility = _a[0], set_visibility = _a[1];
        if (!visibility)
            return null;
        var loading_status = props.loading_status, rendering_status = props.rendering_status, max_pages = props.max_pages, page_number = props.page_number;
        if (loading_status === "not ready" || loading_status === "resolving")
            return a$1("div", null, "Starting...");
        if (loading_status === "resolved")
            return a$1("div", null, "Downloading PDF...");
        if (loading_status === "downloaded") {
            if (rendering_status === "finished") {
                if (page_number === max_pages)
                    setTimeout(function () {
                        set_visibility(false);
                    }, 500);
            }
            if (max_pages === undefined || page_number === undefined)
                return a$1("div", null, "Downloaded PDF.  Rendering...");
            var progress = ((page_number / max_pages) * 100).toFixed(0);
            return a$1("div", null,
                "Progress: ",
                progress,
                "%");
        }
        var stage = props.stage, error_during_loading__type = props.error_during_loading__type, naming_authority = props.naming_authority, vault_id = props.vault_id, file_id = props.file_id;
        var error_message = "";
        if (error_during_loading__type === "404") {
            if (stage === "resolve_naming_authority_url") {
                error_message = "naming authority \"" + naming_authority + "\" not found";
            }
            else if (stage === "resolve_vault_url") {
                error_message = "vault id \"" + vault_id + "\" not found";
            }
            else if (stage === "resolve_pdf_file_url") {
                error_message = "No relative file path found for file id \"" + file_id + "\"";
            }
        }
        return a$1("div", null,
            "Error: ",
            error_message);
    }
    var LoadingProgress = connector$6(_LoadingProgress);

    var map_state$5 = function (state, own_props) { return ({
        annotation: get_annotation_by_compound_id(state, own_props.compound_annotation_id)
    }); };
    var connector$5 = connect(map_state$5);
    function _AnnotationOnPDF(props) {
        var annotation = props.annotation;
        if (!annotation) {
            console.error("Could not find annotation for compound_id: \"" + props.compound_annotation_id + "\"");
            return null;
        }
        var compound_id = annotation.compound_id;
        var class_name = "annotation annotation_" + compound_id;
        var text = annotation.text, comment = annotation.comment, left = annotation.left, top = annotation.top, width = annotation.width, height = annotation.height, backgroundColor = annotation.colour;
        var title = text + " " + comment;
        var style = { left: left, top: top, width: width, height: height, backgroundColor: backgroundColor };
        return a$1("div", { className: class_name, style: style, title: title, onClick: function () { return dispatch(ACTIONS.selected_annotations.toggle_annotation_highlight({ compound_id: compound_id })); } });
    }
    var AnnotationOnPDF = connector$5(_AnnotationOnPDF);
    function create_empty_annotation_el(_a) {
        var annotations_container_el = _a.annotations_container_el;
        var annotation_el = document.createElement("div");
        annotation_el.className = "annotation editing_dimensions";
        annotations_container_el.appendChild(annotation_el);
        return annotation_el;
    }

    var map_state$4 = function (state, own_props) { return ({
        annotation_ids: get_annotation_ids_for_page(state, own_props.page_number),
    }); };
    var connector$4 = connect(map_state$4);
    function _AnnotationsContainer(props) {
        var ids = props.annotation_ids.length ? props.annotation_ids.split(",") : [];
        return a$1("div", null, ids.map(function (id) { return a$1(AnnotationOnPDF, { key: id, compound_annotation_id: id }); }));
    }
    var AnnotationsContainer = connector$4(_AnnotationsContainer);

    function add_annotations_to_PDF_page(args) {
        var annotations_container_el = args.annotations_container_el, page_number = args.page_number;
        N(a$1(AnnotationsContainer, { page_number: page_number }), annotations_container_el);
    }

    function get_element_position(element) {
        var el = element;
        var top = 0;
        var left = 0;
        do {
            top += el.offsetTop || 0;
            left += el.offsetLeft || 0;
            el = el.offsetParent;
        } while (el);
        return { top: top, left: left };
    }

    function add_canvas_mouse_event_handlers(_a) {
        var store = _a.store, canvas = _a.canvas, annotations_container_el = _a.annotations_container_el, page_number = _a.page_number;
        var _b = create_mouse_handlers({ annotations_container_el: annotations_container_el, page_number: page_number }), mouse_down_handler = _b.mouse_down_handler, mouse_moved_handler = _b.mouse_moved_handler, mouse_up_handler = _b.mouse_up_handler;
        var editing_on_this_canvas = false;
        var left;
        var top;
        canvas.onmousedown = function (e) {
            editing_on_this_canvas = true;
            var position = get_element_position(canvas);
            left = position.left;
            top = position.top;
            var x = e.clientX - left + document.body.scrollLeft;
            var y = e.clientY - top + document.body.scrollTop;
            mouse_down_handler({ x: x, y: y });
        };
        canvas.onmousemove = function (e) {
            if (!editing_on_this_canvas)
                return;
            var x = e.clientX - left + document.body.scrollLeft;
            var y = e.clientY - top + document.body.scrollTop;
            mouse_moved_handler({ x: x, y: y });
        };
        canvas.onmouseup = function (e) {
            if (!editing_on_this_canvas)
                return;
            editing_on_this_canvas = false;
            var x = e.clientX - left + document.body.scrollLeft;
            var y = e.clientY - top + document.body.scrollTop;
            var partial_annotation = mouse_up_handler({ x: x, y: y });
            if (partial_annotation) {
                var new_annotation = complete_annotation(store.getState(), partial_annotation);
                store.dispatch(ACTIONS.annotations.create_annotation({ new_annotation: new_annotation }));
            }
        };
    }
    function create_mouse_handlers(_a) {
        var annotations_container_el = _a.annotations_container_el, page_number = _a.page_number;
        var highlight_start_x;
        var highlight_start_y;
        var highlight_end_x;
        var highlight_end_y;
        var temp_annotation_el;
        function reset() {
            if (temp_annotation_el)
                temp_annotation_el.remove();
            highlight_start_x = 0;
            highlight_start_y = 0;
            highlight_end_x = 0;
            highlight_end_y = 0;
            temp_annotation_el = undefined;
        }
        function mouse_down_handler(_a) {
            var x = _a.x, y = _a.y;
            reset();
            temp_annotation_el = create_empty_annotation_el({ annotations_container_el: annotations_container_el });
            highlight_start_x = highlight_end_x = x;
            highlight_start_y = highlight_end_y = y;
            update_temp_annotation_el();
        }
        function mouse_moved_handler(_a) {
            var x = _a.x, y = _a.y;
            highlight_end_x = x;
            highlight_end_y = y;
            valid_annotation_size()
                ? temp_annotation_el.classList.remove("invalid")
                : temp_annotation_el.classList.add("invalid");
            update_temp_annotation_el();
        }
        function mouse_up_handler(_a) {
            var x = _a.x, y = _a.y;
            highlight_end_x = x;
            highlight_end_y = y;
            update_temp_annotation_el();
            var el = temp_annotation_el;
            var partial_annotation = undefined;
            if (valid_annotation_size()) {
                partial_annotation = {
                    page_number: page_number,
                    left: el.style.left,
                    top: el.style.top,
                    width: el.style.width,
                    height: el.style.height,
                    colour: window.getComputedStyle(el).backgroundColor,
                    text: "",
                    labels: [],
                    comment: "",
                    id: -1,
                    user_name: "",
                    safe_user_name: "",
                    compound_id: "",
                };
            }
            reset();
            return partial_annotation;
        }
        function update_temp_annotation_el() {
            if (!temp_annotation_el)
                return;
            var _a = calc_size(), width = _a.width, height = _a.height;
            temp_annotation_el.style.left = str(width < 0 ? highlight_start_x + width : highlight_start_x);
            temp_annotation_el.style.width = str(width < 0 ? -width : width);
            temp_annotation_el.style.top = str(height < 0 ? highlight_start_y + height : highlight_start_y);
            temp_annotation_el.style.height = str(height < 0 ? -height : height);
        }
        var MIN_SIZE = 10;
        function valid_annotation_size() {
            var _a = calc_size(), width = _a.width, height = _a.height;
            return Math.abs(width) >= MIN_SIZE && Math.abs(height) >= MIN_SIZE;
        }
        function calc_size() {
            var width = highlight_end_x - highlight_start_x;
            var height = highlight_end_y - highlight_start_y;
            return { width: width, height: height };
        }
        function str(num) { return num.toString(); }
        return {
            mouse_down_handler: mouse_down_handler,
            mouse_moved_handler: mouse_moved_handler,
            mouse_up_handler: mouse_up_handler,
        };
    }
    function complete_annotation(state, annotation) {
        var _a = state.user, user_name = _a.user_name, safe_user_name = _a.safe_user_name;
        var id = next_annotation_id_for_user(state, safe_user_name);
        var compound_id = get_compound_id({ id: id, safe_user_name: safe_user_name });
        return __assign(__assign({}, annotation), { id: id,
            user_name: user_name,
            safe_user_name: safe_user_name,
            compound_id: compound_id });
    }

    var called_render_pdf = false;
    function render_pdf(pdf, pages_container_el) {
        if (called_render_pdf)
            throw new Error("Only expecting to call render_pdf once");
        called_render_pdf = true;
        var store = get_store();
        store.dispatch(ACTIONS.pdf_rendering.start_rendering_pdf({ max_pages: pdf.numPages }));
        render_pdf_page({ pdf: pdf, pages_container_el: pages_container_el, page_number: 1, store: store });
    }
    function render_pdf_page(_a) {
        var pdf = _a.pdf, pages_container_el = _a.pages_container_el, page_number = _a.page_number, store = _a.store;
        pdf.getPage(page_number)
            .then(function (page) {
            var scale = 1.5;
            var viewport = page.getViewport({ scale: scale });
            var single_page_container_el = create_single_page_container_el(pages_container_el, viewport);
            var canvas = create_pdf_canvas(single_page_container_el, viewport);
            var render_context = create_canvas_context(canvas, viewport);
            var annotations_container_el = create_annotations_container_el({ single_page_container_el: single_page_container_el, page_number: page_number });
            add_page_number({ pages_container_el: pages_container_el, page_number: page_number });
            page.render(render_context)
                .promise.then(function () {
                add_canvas_mouse_event_handlers({ store: store, canvas: canvas, annotations_container_el: annotations_container_el, page_number: page_number });
                add_annotations_to_PDF_page({ annotations_container_el: annotations_container_el, page_number: page_number });
                store.dispatch(ACTIONS.pdf_rendering.rendered_page({ page_number: page_number }));
                if (page_number < pdf.numPages) {
                    render_pdf_page({
                        pdf: pdf,
                        pages_container_el: pages_container_el,
                        page_number: page_number + 1,
                        store: store,
                    });
                }
                else {
                    store.dispatch(ACTIONS.pdf_rendering.finished_rendering_pdf({}));
                }
            });
        });
    }
    function create_single_page_container_el(pages_container_el, viewport) {
        var single_page_container_el = document.createElement("div");
        single_page_container_el.className = "page_container";
        single_page_container_el.style.height = viewport.height.toString();
        single_page_container_el.style.width = viewport.width.toString();
        pages_container_el.appendChild(single_page_container_el);
        return single_page_container_el;
    }
    function create_pdf_canvas(single_page_container_el, viewport) {
        var canvas = document.createElement("canvas");
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        single_page_container_el.appendChild(canvas);
        return canvas;
    }
    function create_canvas_context(canvas, viewport) {
        var canvasContext = canvas.getContext("2d");
        var render_context = { canvasContext: canvasContext, viewport: viewport };
        return render_context;
    }
    function create_annotations_container_el(_a) {
        var single_page_container_el = _a.single_page_container_el, page_number = _a.page_number;
        var annotations_container_el = document.createElement("div");
        annotations_container_el.className = "annotations_container";
        annotations_container_el.id = "annotations_container_el_" + page_number;
        single_page_container_el.appendChild(annotations_container_el);
        return annotations_container_el;
    }
    function add_page_number(_a) {
        var pages_container_el = _a.pages_container_el, page_number = _a.page_number;
        var page_number_el = document.createElement("div");
        page_number_el.innerText = page_number.toString();
        pages_container_el.appendChild(page_number_el);
        pages_container_el.appendChild(document.createElement("br"));
    }

    function scroll_to_entries(annotations_list_el, selected_compound_ids) {
        var an_id = selected_compound_ids[selected_compound_ids.length - 1];
        if (!an_id)
            return;
        var class_name = "annotation_list_element annotation_" + an_id;
        var an_list_el = document.getElementsByClassName(class_name)[0];
        if (!an_list_el)
            return false;
        var top = get_element_position(annotations_list_el).top;
        annotations_list_el.scrollTop = an_list_el.offsetTop - top;
    }

    function scroll_to_annotations_on_pdf(selected_compound_ids) {
        if (an_annotation_in_view(selected_compound_ids))
            return;
        return scroll_to_annotation(selected_compound_ids[0]);
    }
    function an_annotation_in_view(selected_compound_ids) {
        var one_in_view = false;
        selected_compound_ids.forEach(function (compound_id) {
            one_in_view = one_in_view || annotation_in_view(compound_id);
        });
        return one_in_view;
    }
    function annotation_in_view(compound_id) {
        var el = document.getElementsByClassName("annotation annotation_" + compound_id)[0];
        if (!(el && el.getBoundingClientRect))
            return false;
        var rect = el.getBoundingClientRect();
        return (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight));
    }
    function scroll_to_annotation(compound_id) {
        var el = document.getElementsByClassName("annotation annotation_" + compound_id)[0];
        if (!(el && el.scrollIntoView))
            return false;
        el.scrollIntoView();
    }

    function setup_scrollers(annotations_list_el, store) {
        var selected_compound_ids = [];
        var scroll_to_entries_succeeded;
        var scroll_to_annotations_succeeded;
        store.subscribe(function () {
            var state = store.getState();
            var current_selected_compound_ids = state.selected_annotations.selected_compound_ids;
            if (selected_compound_ids === current_selected_compound_ids)
                return;
            selected_compound_ids = current_selected_compound_ids;
            scroll_to_entries_succeeded = scroll_to_entries(annotations_list_el, selected_compound_ids);
            scroll_to_annotations_succeeded = scroll_to_annotations_on_pdf(selected_compound_ids);
        });
        var unsubscribe = store.subscribe(function () {
            var state = store.getState();
            var pdf_rendered = state.rendering_pdf.status === "finished";
            if (pdf_rendered)
                unsubscribe();
            if (scroll_to_entries_succeeded === false) {
                scroll_to_entries_succeeded = scroll_to_entries(annotations_list_el, selected_compound_ids);
            }
            if (scroll_to_annotations_succeeded === false) {
                scroll_to_annotations_succeeded = scroll_to_annotations_on_pdf(selected_compound_ids);
            }
        });
    }

    function set_up_programmatic_styles(programmatic_styles_el, store) {
        var selected_compound_ids;
        store.subscribe(function () {
            var current_selected_compound_ids = store.getState().selected_annotations.selected_compound_ids;
            if (selected_compound_ids === current_selected_compound_ids)
                return;
            selected_compound_ids = current_selected_compound_ids;
            programmatic_styles_el.innerHTML = "";
            if (!selected_compound_ids.length)
                return;
            var class_names = selected_compound_ids.map(function (id) { return ".annotation_" + id; }).join(",");
            programmatic_styles_el.innerHTML = class_names + " { background-color: rgba(255, 245, 150, 0.7) !important; }";
        });
    }

    function AnnotationDetailsForm(props) {
        var _a = l(props.text), text = _a[0], set_text = _a[1];
        var _b = l(props.comment), comment = _b[0], set_comment = _b[1];
        return a$1("div", null,
            "Text: ",
            a$1("input", { disabled: props.disabled, type: "text", id: "annotation_text", value: props.text, onChange: function (e) { return set_text(e.currentTarget.value); }, onBlur: function () { return props.on_change({ text: text, comment: comment }); } }),
            a$1("br", null),
            "Comment: ",
            a$1("input", { disabled: props.disabled, type: "text", id: "annotation_comment", value: props.comment, onChange: function (e) { return set_comment(e.currentTarget.value); }, onBlur: function () { return props.on_change({ text: text, comment: comment }); } }));
    }

    var map_state$3 = function (state, own_props) { return ({
        annotations: get_all_selected_annotations(state),
        safe_user_name: state.user.safe_user_name,
    }); };
    var connector$3 = connect(map_state$3);
    function _AnnotationDetails(props) {
        var annotations = props.annotations, safe_user_name = props.safe_user_name;
        if (annotations.length === 0) {
            return a$1("div", null, "No annotations selected");
        }
        else if (annotations.length > 1) {
            return a$1("div", null, "Multiple annotations selected");
        }
        else {
            var annotation_1 = annotations[0];
            var on_change = function (changes) {
                var edited_annotation = __assign(__assign({}, annotation_1), changes);
                get_store().dispatch(ACTIONS.annotations.edit_annotation({ annotation: edited_annotation }));
            };
            return a$1(AnnotationDetailsForm, { disabled: annotation_1.safe_user_name !== safe_user_name, text: annotation_1.text, comment: annotation_1.comment, on_change: on_change });
        }
    }
    var AnnotationDetails = connector$3(_AnnotationDetails);

    var map_state$2 = function (state) { return ({
        user_name: state.user.user_name,
    }); };
    var connector$2 = connect(map_state$2);
    function _AuthorInfo(props) {
        var _a = l(false), editing = _a[0], set_editing = _a[1];
        var _b = l(props.user_name), user_name = _b[0], set_user_name = _b[1];
        if (editing) {
            return a$1("div", null,
                a$1("input", { type: "text", ref: function (r) { return r && r.focus(); }, value: user_name, onKeyUp: function (e) { return set_user_name(e.currentTarget.value); }, onBlur: function () {
                        get_store().dispatch(ACTIONS.user.set_user_name({ user_name: user_name }));
                        set_editing(false);
                    } }),
                a$1("br", null),
                "Will display as: ",
                get_safe_user_name(user_name));
        }
        return a$1("div", { onClick: function () { return set_editing(true); } }, props.user_name || "Set user name");
    }
    var AuthorInfo = connector$2(_AuthorInfo);

    function get_url_to_file(state) {
        var resolved_relative_file_path = state.loading_pdf.resolved_relative_file_path;
        if (!resolved_relative_file_path)
            return "";
        if (state.running_locally) {
            var vault_id = state.routing.vault_id;
            return "/serve_file/" + vault_id + "?relative_file_path=" + resolved_relative_file_path;
        }
        if (!state.loading_pdf.vault_config_loaded)
            return "";
        var publish_root_path = state.loading_pdf.publish_root_path;
        return "" + publish_root_path + resolved_relative_file_path;
    }
    function get_url_to_file_annotations(_a) {
        var state = _a.state, safe_user_name = _a.safe_user_name;
        var resolved_relative_file_path = state.loading_pdf.resolved_relative_file_path;
        if (!resolved_relative_file_path)
            return "";
        var user = get_user_part_of_url(safe_user_name);
        if (state.running_locally) {
            var vault_id = state.routing.vault_id;
            return "/serve_file/" + vault_id + "?relative_file_path=" + resolved_relative_file_path + user + ".annotations";
        }
        else {
            if (!state.loading_pdf.vault_config_loaded)
                return "";
            var publish_root_path = state.loading_pdf.publish_root_path;
            return "" + publish_root_path + resolved_relative_file_path + user + ".annotations";
        }
    }
    function get_url_to_write_file_annotations(state) {
        if (!state.running_locally)
            return "";
        var resolved_relative_file_path = state.loading_pdf.resolved_relative_file_path;
        if (!resolved_relative_file_path)
            return "";
        var vault_id = state.routing.vault_id;
        var safe_user_name = state.user.safe_user_name;
        var user = get_user_part_of_url(safe_user_name);
        return "/annotations/" + vault_id + "?relative_file_path=" + resolved_relative_file_path + user + ".annotations";
    }
    function get_user_part_of_url(safe_user_name) {
        return safe_user_name && ("." + safe_user_name);
    }

    var map_state$1 = function (state) { return ({
        ready: state.annotations.status !== "not ready",
        loading: state.annotations.status === "loading",
        saved: state.annotations.status === "saved",
        saving: state.annotations.status === "saving",
        errored: state.annotations.status === "error",
        annotations_count: state.annotations.all_annotations.length,
        url_to_write_file_annotations: get_url_to_write_file_annotations(state),
        unsupported_schema_version: state.annotations.unsupported_schema_version,
    }); };
    var connector$1 = connect(map_state$1);
    function _AutoSave(props) {
        var ready = props.ready, loading = props.loading, saving = props.saving, saved = props.saved, errored = props.errored, annotations_count = props.annotations_count, url_to_write_file_annotations = props.url_to_write_file_annotations, unsupported_schema_version = props.unsupported_schema_version;
        if (!ready || loading)
            return null;
        if (!url_to_write_file_annotations) {
            return a$1("div", null,
                a$1("span", { style: "background-color: yellow;" }, "\u26A0"),
                " Saving not enabled. Must ",
                a$1("a", { href: "https://github.com/centerofci/anot8" }, "run locally"),
                ".");
        }
        else if (unsupported_schema_version) {
            return a$1("div", null,
                a$1("span", { style: "background-color: yellow;" }, "\u26A0"),
                " Saving not enabled. Version of annotations file is not supported.");
        }
        else if (saving) {
            return a$1("div", null, "Auto saving...");
        }
        else if (saved) {
            return a$1("div", null,
                "Saved (",
                annotations_count,
                ")");
        }
        else if (errored) {
            return a$1("div", null, "Errored");
        }
        else {
            return a$1("div", null,
                "Loaded (",
                annotations_count,
                ")");
        }
    }
    var AutoSave = connector$1(_AutoSave);

    var get_anot8_perma_link = function (_a) {
        var routing = _a.routing;
        var naming_authority = routing.naming_authority, vault_id = routing.vault_id, file_id = routing.file_id;
        var anot8_perma_link = "";
        if (naming_authority !== "-1" && vault_id !== "-1" && file_id !== "-1") {
            anot8_perma_link = "https://anot8.org/r/" + naming_authority + "." + vault_id + "/" + file_id;
        }
        return anot8_perma_link;
    };

    var map_state = function (state) { return ({
        url_to_file: get_url_to_file(state),
        anot8_perma_link: get_anot8_perma_link(state),
    }); };
    var connector = connect(map_state);
    function _TopInfoPanel(props) {
        var url_to_file = props.url_to_file, anot8_perma_link = props.anot8_perma_link;
        if (!url_to_file)
            return null;
        var perma_link_elements = anot8_perma_link
            ? [a$1("br", null), a$1("a", { href: anot8_perma_link },
                    "PermaLink: ",
                    anot8_perma_link)]
            : [a$1("br", null), a$1("span", { style: "color: grey; font-size: small;" }, "PermaLink not available (-1 present in part of link)")];
        return a$1("div", null,
            a$1("a", { href: url_to_file },
                "Showing PDF from: ",
                url_to_file),
            perma_link_elements);
    }
    var TopInfoPanel = connector(_TopInfoPanel);

    function fetch_files() {
        var store = get_store();
        fetch_annotation_files(store);
        return fetch_pdf(store);
    }
    function fetch_pdf(store) {
        var state = store.getState();
        var url_to_file = get_url_to_file(state);
        return new Promise(function (resolve) {
            pdfjsLib.getDocument(url_to_file).promise.then(function (pdf) { return resolve(pdf); });
        });
    }
    function fetch_annotation_files(store) {
        fetch_annotation_file({ store: store, user_name: "" })
            .then(function (annotations_file) {
            annotations_file.annotation_user_names.forEach(function (user_name) {
                fetch_annotation_file({ store: store, user_name: user_name });
            });
        });
    }
    function fetch_annotation_file(_a) {
        var store = _a.store, user_name = _a.user_name;
        var safe_user_name = get_safe_user_name(user_name);
        var state = store.getState();
        var file_annotations_url = get_url_to_file_annotations({ state: state, safe_user_name: safe_user_name });
        return fetch(file_annotations_url)
            .then(function (resp) { return resp.json(); })
            .then(function (annotations_file) {
            store.dispatch(ACTIONS.annotations.got_annotations_file({ annotations_file: annotations_file, user_name: user_name }));
            return annotations_file;
        });
    }

    function resolve_relative_file_path() {
        var store = get_store();
        var state = store.getState();
        var naming_authority_lookup_url = get_naming_authority_lookup_url(state);
        store.dispatch(ACTIONS.loading.update_loading_status({ status: "resolving", stage: "resolve_naming_authority_url" }));
        return fetch(naming_authority_lookup_url)
            .then(function (resp) { return resp.json(); })
            .then(function (naming_authority_lookup) {
            var naming_authority = state.routing.naming_authority;
            var vaults_map_url = naming_authority_lookup[naming_authority];
            if (!vaults_map_url) {
                var msg = "No naming_authority " + naming_authority + " in naming_authority_lookup";
                console.error(msg, naming_authority_lookup);
                store.dispatch(ACTIONS.loading.error_during_loading({ error_stage: "resolve_naming_authority_url", error_type: "404" }));
                return Promise.reject();
            }
            store.dispatch(ACTIONS.loading.update_loading_status({ status: "resolving", stage: "resolve_vault_url" }));
            return fetch(vaults_map_url);
        })
            .then(function (resp) { return resp.json(); })
            .then(function (vaults_map) {
            var vault_id = state.routing.vault_id;
            var vault_config_url = vaults_map[vault_id];
            if (!vault_config_url) {
                console.error("No vault_id " + vault_id + " in vaults_map", vaults_map);
                store.dispatch(ACTIONS.loading.error_during_loading({ error_stage: "resolve_vault_url", error_type: "404" }));
                return Promise.reject();
            }
            store.dispatch(ACTIONS.loading.update_loading_status({ status: "resolving", stage: "resolve_pdf_file_url" }));
            return fetch(vault_config_url);
        })
            .then(function (resp) { return resp.json(); })
            .then(function (config) {
            store.dispatch(ACTIONS.loading.set_vault_config({ config: config }));
            var id_to_relative_file_name = config.DO_NOT_EDIT_auto_generated_fields.id_to_relative_file_name;
            var file_id = state.routing.file_id;
            var relative_file_path = id_to_relative_file_name[file_id] || state.routing.relative_file_path;
            if (!relative_file_path) {
                console.error("No relative_file_path for file_id " + file_id + " ", id_to_relative_file_name);
                store.dispatch(ACTIONS.loading.error_during_loading({ error_stage: "resolve_pdf_file_url", error_type: "404" }));
                return Promise.reject();
            }
            store.dispatch(ACTIONS.loading.resolved_relative_file_path({ status: "resolved", relative_file_path: relative_file_path }));
        });
    }
    function get_naming_authority_lookup_url(state) {
        var running_locally = state.running_locally, override_naming_authority_server_url = state.override_naming_authority_server_url;
        var naming_authority_lookup_url = override_naming_authority_server_url
            || (running_locally
                ? "/local_naming_authority_lookup.json"
                : "https://raw.githubusercontent.com/centerofci/anot8/master/anot8_org_naming_authority_lookup.json");
        return naming_authority_lookup_url;
    }

    function load_files() {
        return resolve_relative_file_path()
            .then(function () { return fetch_files(); });
    }

    function auto_save(store) {
        var annotations;
        store.subscribe(function () {
            var state = store.getState();
            var _a = state.user, user_name = _a.user_name, safe_user_name = _a.safe_user_name;
            var current_annotations = state.annotations.annotations_by_safe_user_name[safe_user_name] || [];
            if (current_annotations === annotations)
                return;
            if (state.annotations.status === "saving" || state.annotations.status === "error")
                return;
            var dirty = current_annotations.find(function (_a) {
                var dirty = _a.dirty;
                return dirty;
            });
            if (!dirty) {
                annotations = current_annotations;
                return;
            }
            var url_to_write_file_annotations = get_url_to_write_file_annotations(state);
            if (!url_to_write_file_annotations) {
                console.warn("Not saving " + (annotations && annotations.length) + " annotations to server as no end point to save against");
                return;
            }
            if (state.annotations.unsupported_schema_version) {
                console.warn("Not saving annotations to server as unsupported_schema_version");
                return;
            }
            annotations = current_annotations;
            store.dispatch(ACTIONS.annotations.progress_saving_annotations({ status: "saving" }));
            post_annotations_to_server(store, current_annotations, user_name)
                .then(function (annotations_file) {
                store.dispatch(ACTIONS.annotations.got_replacement_annotations_file({ annotations_file: annotations_file, user_name: user_name }));
            })
                .catch(function (err) {
                console.log("caught error, ", err);
                store.dispatch(ACTIONS.annotations.progress_saving_annotations({ status: "error", message: err }));
            });
        });
    }
    function post_annotations_to_server(store, annotations, user_name) {
        var state = store.getState();
        var url_to_write_file_annotations = get_url_to_write_file_annotations(state);
        console.log("Saving " + annotations.length + " annotations to server for user: \"" + user_name + "\"");
        var data_to_send = JSON.stringify({ user_name: user_name, annotations: annotations });
        return fetch(url_to_write_file_annotations, {
            mode: "cors",
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: data_to_send,
        })
            .then(function (resp) {
            if (resp.status === 200) {
                return resp.json();
            }
            else {
                return Promise.reject("server error");
            }
        });
    }

    function update_labels_used_by_selected_annotations(store) {
        var selected_compound_ids;
        var annotations_by_compound_id;
        store.subscribe(function () {
            var state = store.getState();
            if (state.selected_annotations.selected_compound_ids === selected_compound_ids
                && state.annotations.annotations_by_compound_id === annotations_by_compound_id)
                return;
            selected_compound_ids = state.selected_annotations.selected_compound_ids;
            annotations_by_compound_id = state.annotations.annotations_by_compound_id;
            var annotations = get_all_selected_annotations(state);
            var labels_used_by_selected_annotations = calculate_label_counts(annotations);
            store.dispatch(ACTIONS.labels.set_labels_used_by_selected_annotations({ labels_used_by_selected_annotations: labels_used_by_selected_annotations }));
        });
    }
    function calculate_label_counts(annotations) {
        var label_counts = {};
        annotations.forEach(function (annotation) {
            annotation.labels.forEach(function (label) {
                label_counts[label] = (label_counts[label] || 0) + 1;
            });
        });
        return label_counts;
    }

    function update_used_labels(store) {
        var annotations_by_safe_user_name;
        store.subscribe(function () {
            var state = store.getState();
            if (state.annotations.annotations_by_safe_user_name === annotations_by_safe_user_name)
                return;
            annotations_by_safe_user_name = state.annotations.annotations_by_safe_user_name;
            var current_used_labels = state.labels.used_labels;
            var missing_labels = new Set(current_used_labels);
            var used_labels = new Set();
            var mismatch = false;
            get_all_annotations(annotations_by_safe_user_name).forEach(function (_a) {
                var labels = _a.labels;
                labels.forEach(function (label) {
                    used_labels.add(label);
                    missing_labels.delete(label);
                    if (!current_used_labels.has(label))
                        mismatch = true;
                });
            });
            if (mismatch || missing_labels.size)
                store.dispatch(ACTIONS.labels.set_used_labels({ used_labels: used_labels }));
        });
    }

    function update_page_location(store) {
        var selected_compound_ids = [];
        store.subscribe(function () {
            var state = store.getState();
            var current_selected_compound_ids = state.selected_annotations.selected_compound_ids;
            if (selected_compound_ids === current_selected_compound_ids)
                return;
            selected_compound_ids = current_selected_compound_ids;
            var obj = parse_location_search();
            delete obj["h"];
            delete obj["highlighted_annotation_ids"];
            if (selected_compound_ids.length) {
                obj["h"] = selected_compound_ids.join(",");
            }
            var search_string = object_to_search_string(obj);
            var new_url = window.location.protocol + "//" + window.location.host + window.location.pathname + search_string;
            if (window.history.pushState) {
                window.history.pushState({ path: new_url }, "", new_url);
            }
            else
                window.location.href = new_url;
        });
    }

    function remove_non_existant_selected_annotation_ids(store) {
        var unsubscribe = store.subscribe(function () {
            var state = store.getState();
            if (state.annotations.status !== "loaded")
                return;
            if (state.annotations.status === "loaded")
                unsubscribe();
            var current_selected_compound_ids = state.selected_annotations.selected_compound_ids;
            var selected_compound_ids = current_selected_compound_ids
                .filter(function (compound_id) {
                var annotation = state.annotations.annotations_by_compound_id[compound_id];
                return annotation && !annotation.deleted;
            });
            if (selected_compound_ids.length !== current_selected_compound_ids.length) {
                store.dispatch(ACTIONS.selected_annotations.set_selected_ids({ selected_compound_ids: selected_compound_ids }));
            }
        });
    }

    var store = get_store();
    update_page_location(store);
    remove_non_existant_selected_annotation_ids(store);
    auto_save(store);
    update_used_labels(store);
    update_labels_used_by_selected_annotations(store);
    var pages_container_el = document.getElementById("pages_container");
    load_files()
        .then(function (pdf) { return render_pdf(pdf, pages_container_el); });
    var programmatic_styles_el = document.getElementById("programmatic_styles");
    set_up_programmatic_styles(programmatic_styles_el, store);
    var loading_progress_el = document.getElementById("loading_progress");
    N(a$1(LoadingProgress, null), loading_progress_el);
    var link_to_pdf_el = document.getElementById("link_to_pdf_file");
    N(a$1(TopInfoPanel, null), link_to_pdf_el);
    var auto_save_el = document.getElementById("auto_save");
    N(a$1(AutoSave, null), auto_save_el);
    var author_info_el = document.getElementById("author_info");
    N(a$1(AuthorInfo, null), author_info_el);
    var delete_annotations_el = document.getElementById("delete_annotations");
    N(a$1(DeleteButton, null), delete_annotations_el);
    var annotations_list_el = document.getElementById("annotations_list");
    N(a$1(AnnotationsList, null), annotations_list_el);
    var annotation_details_el = document.getElementById("annotation_details");
    N(a$1(AnnotationDetails, null), annotation_details_el);
    var labels_list_el = document.getElementById("labels_list");
    labels_list_el.innerHTML = "";
    N(a$1(Labels, null), labels_list_el);
    setup_scrollers(annotations_list_el, store);

}());
