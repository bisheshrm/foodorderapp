(this.webpackJsonpfoodorderapp=this.webpackJsonpfoodorderapp||[]).push([[0],[,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2CCvC",total:"Cart_total__3uJR-",actions:"Cart_actions__2y3X4","button--alt":"Cart_button--alt__3bOp1",button:"Cart_button__27gQH"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__2GcOd",summary:"CartItem_summary__1h62X",price:"CartItem_price__3CKK_",amount:"CartItem_amount__3_SA6",actions:"CartItem_actions__3NgQ7"}},,,,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__2Dm5F",modal:"Modal_modal__3nbXr","slide-down":"Modal_slide-down__2A_Ks"}},function(e,t,n){e.exports={button:"HeaderCartButton_button__NzgCC",icon:"HeaderCartButton_icon__2HHPI",badge:"HeaderCartButton_badge__28CM1",bump:"HeaderCartButton_bump__2AZaQ"}},function(e,t,n){e.exports={meal:"MealItem_meal__2Mu40",description:"MealItem_description__1rI4j",price:"MealItem_price__3u77W"}},function(e,t,n){e.exports={header:"Header_header__3CJ-9","main-image":"Header_main-image__2s54I"}},,,function(e,t,n){e.exports={card:"Card_card__Rw87K"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__Xth21","meals-appear":"AvailableMeals_meals-appear__QYoRv"}},function(e,t,n){e.exports={input:"Input_input__xiUOw"}},function(e,t,n){e.exports={form:"MealItemForm_form__2I-kc"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__1fFkj"}},,,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(14),c=n.n(a),i=(n(28),n(2)),r=n(1),s=n.n(r),o=n(7),l=n.n(o),d=n(9),m=n.n(d),u=n(0),j=function(e){return Object(u.jsx)("div",{className:m.a.backdrop,onClick:e.onClose})},b=function(e){return Object(u.jsx)("div",{className:m.a.modal,children:Object(u.jsx)("div",{className:m.a.content,children:e.children})})},x=document.getElementById("overlays"),p=function(e){return Object(u.jsxs)(r.Fragment,{children:[l.a.createPortal(Object(u.jsx)(j,{onClose:e.onClose}),x),l.a.createPortal(Object(u.jsx)(b,{children:e.children}),x)]})},h=n(3),O=n.n(h),_=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},remoteItem:function(e){}}),f=n(4),C=n.n(f),v=function(e){var t="$".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:C.a["cart-item"],children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:e.name}),Object(u.jsxs)("div",{className:C.a.summary,children:[Object(u.jsx)("span",{className:C.a.price,children:t}),Object(u.jsxs)("span",{className:C.a.amount,children:["x ",e.amount]})]})]}),Object(u.jsxs)("div",{className:C.a.actions,children:[Object(u.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(u.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},g=function(e){var t=Object(r.useContext)(_),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){},i=function(e){},s=Object(u.jsx)("ul",{className:O.a["cart-items"],children:t.items.map((function(e){return Object(u.jsx)(v,{name:e.name,amount:e.amount,price:e.price,onRemoe:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(u.jsxs)(p,{onClose:e.onClose,children:[s,Object(u.jsxs)("div",{className:O.a.total,children:[Object(u.jsx)("span",{children:"Total Amount"}),Object(u.jsx)("span",{children:n})]}),Object(u.jsxs)("div",{className:O.a.actions,children:[Object(u.jsx)("button",{className:O.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(u.jsx)("button",{className:O.a.button,children:"Order"})]})]})},N=n.p+"static/media/meals.2971f633.jpg",A=n(12),I=n.n(A),y=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},w=n(10),k=n.n(w),H=function(e){var t=Object(r.useContext)(_).items.reduce((function(e,t){return e+t.amount}),0);return Object(u.jsxs)("button",{className:k.a.button,onClick:e.onClick,children:[Object(u.jsx)("span",{className:k.a.icon,children:Object(u.jsx)(y,{})}),Object(u.jsx)("span",{children:"Your Cart"}),Object(u.jsx)("span",{className:k.a.badge,children:t})]})},M=function(e){return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsxs)("header",{className:I.a.header,children:[Object(u.jsx)("h1",{children:"React meals"}),Object(u.jsx)(H,{onClick:e.onShowCart})]}),Object(u.jsx)("div",{className:I.a["main-image"],children:Object(u.jsx)("img",{src:N,alt:"A table full of delicious food!"})})]})},F=n(15),B=n.n(F),R=function(e){return Object(u.jsx)("div",{className:B.a.card,children:e.children})},S=n(16),D=n.n(S),z=n(11),P=n.n(z),J=n(6),K=n(17),Q=n.n(K),X=s.a.forwardRef((function(e,t){return Object(u.jsxs)("div",{className:Q.a.input,children:[Object(u.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(u.jsx)("input",Object(J.a)({ref:t},e.input))]})})),T=n(18),Y=n.n(T),$=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(u.jsxs)("form",{className:Y.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(u.jsx)(X,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(u.jsx)("button",{children:"+ Add"}),!a&&Object(u.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},E=function(e){var t=Object(r.useContext)(_),n="$".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:P.a.meal,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("div",{className:P.a.description,children:e.description}),Object(u.jsx)("div",{className:P.a.price,children:n})]}),Object(u.jsx)("div",{children:Object(u.jsx)($,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},G=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],q=function(){var e=G.map((function(e){return Object(u.jsx)(E,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(u.jsx)("section",{className:D.a.meals,children:Object(u.jsx)(R,{children:Object(u.jsx)("ul",{children:e})})})},U=n(19),V=n.n(U),W=function(){return Object(u.jsxs)("section",{className:V.a.summary,children:[Object(u.jsx)("h2",{children:"Delicious Food, Delivered to You"}),Object(u.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(u.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},Z=function(){return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)(W,{}),Object(u.jsx)(q,{})]})},L=n(20),ee={items:[],totalAmount:0},te=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(J.a)(Object(J.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(L.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}return ee},ne=function(e){var t=Object(r.useReducer)(te,ee),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){}};return Object(u.jsx)(_.Provider,{value:s,children:e.children})};var ae=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)(ne,{children:[n&&Object(u.jsx)(g,{onClose:function(){a(!1)}}),Object(u.jsx)(M,{onShowCart:function(){a(!0)}}),Object(u.jsx)("main",{children:Object(u.jsx)(Z,{})})]})};c.a.createRoot(document.getElementById("root")).render(Object(u.jsx)(ae,{}))}],[[30,1,2]]]);
//# sourceMappingURL=main.330695bf.chunk.js.map