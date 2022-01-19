(this.webpackJsonpredux_template=this.webpackJsonpredux_template||[]).push([[0],{43:function(e,t,i){},44:function(e,t,i){"use strict";i.r(t);var a=i(2),n=i.n(a),s=i(18),c=i.n(s),p=i(20),r=i(9),o=i(13),l=i(4),g=i(1);var j=function(){var e=Object(l.f)();return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"container mt-5 d-flex flex-column align-items-center homeContainer",children:[Object(g.jsxs)("div",{className:"display-1 mt-3",children:["Welcome to ",Object(g.jsx)("em",{children:"Pizzazz"}),"!"]}),Object(g.jsxs)("h1",{className:"mb-5 mt-4",children:["Pizzazz is a pizza building site I made using ",Object(g.jsx)("a",{href:"https://reactjs.org/",target:"_blank",children:"React"})," & ",Object(g.jsx)("a",{href:"https://redux.js.org/",target:"_blank",children:"Redux"}),"."]}),Object(g.jsxs)("h2",{className:"text-center my-3",children:["Be sure to checkout the ",Object(g.jsx)("a",{href:"#",onClick:function(){return e("/fan-favs")},children:"Fan Favs"})," page or the ",Object(g.jsx)("a",{href:"#",onClick:function(){return e("/builder")},children:"Builder"})," page and make pizzas with some awesome topping combinations. "]}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col-6",children:[Object(g.jsx)("div",{className:"display-6 mt-3 text-center",children:"Fan Favs"}),Object(g.jsx)("a",{href:"#",onClick:function(){return e("/fan-favs")},children:Object(g.jsx)("img",{className:"homeGIF",height:"450px",width:"auto",src:"/images/fanFavs.gif",alt:""})})]}),Object(g.jsxs)("div",{className:"col-6",children:[Object(g.jsx)("div",{className:"display-6 mt-3 text-center",children:"Builder"}),Object(g.jsx)("a",{href:"#",onClick:function(){return e("/builder")},children:Object(g.jsx)("img",{className:"homeGIF",height:"450px",width:"auto",src:"/images/builder.gif",alt:""})})]})]})]})})},m=i(28);var b=function(){var e=Object(r.c)((function(e){return e.cartCR.numberOfItems}));return Object(g.jsxs)("div",{className:"myNav d-flex justify-content-between align-items-center",children:[Object(g.jsx)(o.b,{className:"link ms-4",to:"/",children:"Pizzazz"}),Object(g.jsxs)("div",{className:"mb-2",children:[Object(g.jsx)(o.b,{className:"link mx-3",to:"/fan-favs",children:"Fan Favs"}),Object(g.jsx)(o.b,{className:"link mx-3",to:"/builder",children:"Builder"}),Object(g.jsxs)(o.b,{className:"cartIcon ms-3 me-5 h2",to:"cart",children:[Object(g.jsx)(m.a,{className:"me-2"}),e>0&&e]})]})]})};var d=function(e){var t=e.children;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(b,{}),Object(g.jsx)("br",{}),t]})},h=i(3),O=i(16),u=i(5),x=i(24),f="ADD_TO",v="DELETE_PIZZA",N="CHANGE_COUNT",z="PLACE_ORDER",_=function(e,t){return{type:f,pizza:e,bin:t}},I=function(e){return{type:v,pizza:e}},S=function(e,t){return{type:N,pizza:e,count:t}},P=i(23),y=i(45),C={anchovies:{id:Object(y.a)(),name:"Anchovies",image:"images/toppings/anchovies.png",toppingImage:"images/toppings/anchovies_topping.png",price:1.75},bacon:{id:Object(y.a)(),name:"Bacon",image:"images/toppings/bacon.png",toppingImage:"images/toppings/bacon_topping.png",price:1},basil:{id:Object(y.a)(),name:"Basil",image:"images/toppings/basil.png",toppingImage:"images/toppings/basil_topping.png",price:.5},feta:{id:Object(y.a)(),name:"Feta",image:"images/toppings/feta.png",toppingImage:"images/toppings/feta_topping.png",price:.75},ham:{id:Object(y.a)(),name:"Ham",image:"images/toppings/ham.png",toppingImage:"images/toppings/ham_topping.png",price:.75},italianSausage:{id:Object(y.a)(),name:"Italian Sausage",image:"images/toppings/italianSausage.png",toppingImage:"images/toppings/italianSausage_topping.png",price:.75},jalapenos:{id:Object(y.a)(),name:"Jalape\xf1os",image:"images/toppings/jalapenos.png",toppingImage:"images/toppings/jalapenos_topping.png",price:.6},mushrooms:{id:Object(y.a)(),name:"Mushroom",image:"images/toppings/mushrooms.png",toppingImage:"images/toppings/mushrooms_topping.png",price:.6},olives:{id:Object(y.a)(),name:"Olives",image:"images/toppings/olives.png",toppingImage:"images/toppings/olives_topping.png",price:.6},onions:{id:Object(y.a)(),name:"Onions",image:"images/toppings/onions.png",toppingImage:"images/toppings/onions_topping.png",price:.6},parmesan:{id:Object(y.a)(),name:"Parmesan",image:"images/toppings/parmesan.png",toppingImage:"images/toppings/parmesan_topping.png",price:.5},pepperoni:{id:Object(y.a)(),name:"Pepperoni",image:"images/toppings/pepperoni.png",toppingImage:"images/toppings/pepperoni_topping.png",price:.75},pineapple:{id:Object(y.a)(),name:"Pineapple",image:"images/toppings/pineapple.png",toppingImage:"images/toppings/pineapple_topping.png",price:.6},shrimp:{id:Object(y.a)(),name:"Shrimp",image:"images/toppings/shrimp.png",toppingImage:"images/toppings/shrimp_topping.png",price:1.25},spinach:{id:Object(y.a)(),name:"Spinach",image:"images/toppings/spinach.png",toppingImage:"images/toppings/spinach_topping.png",price:.4}},k=function(e){return"$".concat(e.toFixed(2).toLocaleString())};var w=function(e){var t=e.pizza,i=e.height;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"position-static",children:[Object(g.jsx)("img",{className:"position-absolute",height:i,src:"images/crusts/pizza_crust.png",alt:""}),Object(g.jsx)("img",{className:"position-absolute",height:i,src:"images/sauces/sauce_marinara.png",alt:""}),Object(g.jsx)("img",{className:"position-absolute",height:i,src:"images/cheeses/cheese_mozz.webp",alt:""}),t.toppingImages.map((function(e,t){return Object(g.jsx)("img",{className:"position-absolute",height:i,src:e,alt:""},t)}))]})})},F=i(19),T=i(11),R=i.n(T);var E=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.cartCR.cartItems})),i=Object(r.c)((function(e){return e.cartCR.numberOfItems})),n=Object(r.c)((function(e){return e.cartCR})),s=Object(a.useState)(0),c=Object(u.a)(s,2),p=c[0],o=c[1],l=Object(a.useState)({id:Object(y.a)(),toppings:[],toppingPrices:[],toppingImages:[],price:parseFloat(12)}),j=Object(u.a)(l,2),m=j[0],b=j[1],d=Object(a.useState)(!1),f=Object(u.a)(d,2),v=f[0],N=f[1],z=Object(a.useState)(!1),T=Object(u.a)(z,2),E=T[0],B=T[1],A=Object(a.useState)(!1),D=Object(u.a)(A,2),H=D[0],J=D[1],L=Object(a.useState)(!1),M=Object(u.a)(L,2),U=M[0],V=M[1],X=Object(a.useState)(!1),G=Object(u.a)(X,2),W=G[0],Z=G[1],Q=Object(a.useState)(!1),Y=Object(u.a)(Q,2),$=Y[0],q=Y[1],K=Object(a.useState)(!1),ee=Object(u.a)(K,2),te=ee[0],ie=ee[1],ae=Object(a.useState)(!1),ne=Object(u.a)(ae,2),se=ne[0],ce=ne[1],pe=Object(a.useState)(!1),re=Object(u.a)(pe,2),oe=re[0],le=re[1],ge=Object(a.useState)(!1),je=Object(u.a)(ge,2),me=je[0],be=je[1],de=Object(a.useState)(!1),he=Object(u.a)(de,2),Oe=he[0],ue=he[1],xe=Object(a.useState)(!1),fe=Object(u.a)(xe,2),ve=fe[0],Ne=fe[1],ze=Object(a.useState)(!1),_e=Object(u.a)(ze,2),Ie=_e[0],Se=_e[1],Pe=Object(a.useState)(!1),ye=Object(u.a)(Pe,2),Ce=ye[0],ke=ye[1],we=Object(a.useState)(!1),Fe=Object(u.a)(we,2),Te=Fe[0],Re=Fe[1],Ee=Object.keys(C),Be=[{state:v,setState:N},{state:E,setState:B},{state:H,setState:J},{state:U,setState:V},{state:W,setState:Z},{state:$,setState:q},{state:te,setState:ie},{state:se,setState:ce},{state:oe,setState:le},{state:me,setState:be},{state:Oe,setState:ue},{state:ve,setState:Ne},{state:Ie,setState:Se},{state:Ce,setState:ke},{state:Te,setState:Re}];return console.log("pizza",m),console.log("state",n),Object(a.useEffect)((function(){var e=Object(O.a)(m.toppings),t=Object(O.a)(m.toppingPrices),i=Object(O.a)(m.toppingImages),a=parseFloat(0);Be.forEach((function(n,s){if(n.state&&!e.includes(C[Ee[s]].name))e=e.concat(C[Ee[s]].name),t=t.concat(C[Ee[s]].price),console.log("tempToppingPrices",C[Ee[s]].price),i=i.concat(C[Ee[s]].toppingImage),a+=C[Ee[s]].price;else if(!n.state&&e.includes(C[Ee[s]].name)){var c=e.indexOf(C[Ee[s]].name);e.splice(c,1),t.splice(c,1),i.splice(c,1),a-=C[Ee[s]].price}})),b(Object(h.a)(Object(h.a)({},m),{},{toppings:e,toppingPrices:t,toppingImages:i,price:m.price+a}))}),[v,E,H,U,W,$,te,se,oe,me,Oe,ve,Ie,Ce,Te]),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"container-fluid mainContainer mt-5",children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)(R.a,{left:!0,duration:850,children:Object(g.jsx)("div",{className:"col-3 bg-info pb-3 ms-5 toppingsContainer",children:Object(g.jsxs)(P.a,{onSubmit:function(t){t.preventDefault(),Be.forEach((function(e){e.state&&e.setState(!1)})),e(_(m,"cartItems")),console.log("resetting pizza"),b({id:Object(y.a)(),toppings:[],toppingPrices:[],toppingImages:[],price:parseFloat(12)})},children:[Object(g.jsx)("div",{className:"toppingsSubContainer",children:Ee.map((function(e,t){return Object(g.jsxs)("div",{className:"d-flex toppings align-items-center",children:[Object(g.jsx)("img",{className:"me-4",src:C[e].image,width:"100px",height:"auto",alt:""}),Object(g.jsx)(P.a.Check,{type:"checkbox",label:C[e].name,checked:Be[t].state,onChange:function(){return function(e,t){e?e&&t(!1):t(!0)}(Be[t].state,Be[t].setState)}}),Object(g.jsxs)("span",{children:["\xa0",k(C[e].price)]})]},C[e].id)}))}),Object(g.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(g.jsx)(x.a,{variant:"secondary",onClick:function(){Be.forEach((function(e){e.state&&e.setState(!1)}))},children:"Reset Toppings"}),Object(g.jsx)(x.a,{variant:"primary",type:"submit",children:"Add to Order"})]})]})})}),Object(g.jsx)(R.a,{top:!0,duration:1200,children:Object(g.jsx)("div",{className:"col-4",children:Object(g.jsx)(w,{pizza:m,height:"575px"})})}),Object(g.jsx)(R.a,{top:!0,duration:1400,children:Object(g.jsxs)("div",{className:"col-2",children:[Object(g.jsxs)("h1",{children:["Price: ",k(m.price)]}),0===m.toppings.length?Object(g.jsx)("h2",{children:"No Toppings"}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h2",{children:"Toppings"}),Object(g.jsx)("ul",{children:m.toppings.map((function(e,t){return Object(g.jsx)("h5",{children:Object(g.jsxs)("li",{children:[e," (",k(m.toppingPrices[t]),")"]})},t)}))})]})]})}),Object(g.jsx)(R.a,{right:!0,children:Object(g.jsxs)("div",{className:"ms-5 col-2 cartContainer",children:[0===i?Object(g.jsx)("h1",{className:"text-center py-3",children:"Order is empty"}):1===i?Object(g.jsxs)("div",{children:[Object(g.jsxs)("h2",{className:"text-center mt-1",children:[i," pizza in Order"]}),Object(g.jsxs)("h3",{className:"text-center",children:["Total Price: ",k(n.totalPrice)]})]}):Object(g.jsxs)("div",{children:[Object(g.jsxs)("h2",{className:"text-center mt-1",children:[i," pizzas in Order"]}),Object(g.jsxs)("h3",{className:"text-center",children:["Total Price: ",k(n.totalPrice)]})]}),Object(g.jsx)("div",{className:"position-relative cart",children:t.map((function(t){return Object(g.jsx)(R.a,{children:Object(g.jsxs)("div",{className:"sideCartPizza my-4 ps-1",children:[Object(g.jsx)(w,{pizza:t,height:"150px"}),Object(g.jsxs)("div",{className:"cartButton",children:[Object(g.jsx)(F.a,{className:"text-danger trashSideCart",onClick:function(){return e(I(t))}}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsxs)("span",{className:"h4",children:["x",t.count]}),Object(g.jsxs)("select",{className:"ms-3",defaultValue:p,onChange:function(e){return o(parseInt(e.target.value))},children:[Object(g.jsx)("option",{value:"1",children:"1"}),Object(g.jsx)("option",{value:"2",children:"2"}),Object(g.jsx)("option",{value:"3",children:"3"}),Object(g.jsx)("option",{value:"4",children:"4"}),Object(g.jsx)("option",{value:"5",children:"5"})]}),Object(g.jsx)("button",{className:"btn btn-outline-primary mt-2",onClick:function(){e(S(t,p)),o(1)},children:"Update"})]})]})},t.id)}))})]})})]})})})};var B=function(){var e=Object(l.f)(),t=Object(a.useState)(""),i=Object(u.a)(t,2),n=i[0],s=i[1],c=Object(r.c)((function(e){return e.cartCR.cartItems})),p=Object(r.c)((function(e){return e.cartCR.numberOfItems})),o=Object(r.c)((function(e){return e.cartCR.totalPrice})),j=Object(r.b)(),m=.0825*o;return 0===p?Object(g.jsxs)("div",{className:"container d-flex flex-column align-items-center mt-5",children:[Object(g.jsx)("h1",{children:"Your order is currently empty"}),Object(g.jsxs)("h2",{className:"mt-4 mb-5",children:["Head to our ",Object(g.jsx)("a",{href:"/builder",children:"Builder Page"})," and make an awesome pizza!"]}),Object(g.jsx)("a",{href:"/builder",children:Object(g.jsx)("img",{height:"700px",width:"auto",src:"/images/builder.gif",alt:""})})]}):Object(g.jsx)("div",{className:"container position-relative",children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)(R.a,{left:!0,cascade:!0,duration:500,children:Object(g.jsx)("div",{className:"mt-5 col-8",children:c.map((function(e,t){return Object(g.jsxs)("div",{className:"cartPizza row mb-5",children:[Object(g.jsx)("div",{className:"col-5 ps-4",children:Object(g.jsx)(w,{pizza:e,height:"300px"})}),Object(g.jsxs)("div",{className:"col-5",children:[Object(g.jsxs)("div",{children:[Object(g.jsxs)("span",{className:"h1",children:["Price: ",k(e.price*e.count)]}),"\xa0",e.count>1&&Object(g.jsxs)("span",{className:"h4 d-block",children:["(",k(e.price)," each)"]})]}),Object(g.jsxs)("span",{className:"h3",children:["Quantity: ",e.count]}),Object(g.jsxs)("select",{className:"ms-4",defaultValue:n,onChange:function(e){return s(parseInt(e.target.value))},children:[Object(g.jsx)("option",{value:"1",children:"1"}),Object(g.jsx)("option",{value:"2",children:"2"}),Object(g.jsx)("option",{value:"3",children:"3"}),Object(g.jsx)("option",{value:"4",children:"4"}),Object(g.jsx)("option",{value:"5",children:"5"})]}),Object(g.jsx)("button",{className:"btn btn-outline-primary ms-3 mb-1",onClick:function(){j(S(e,n)),s(1)},children:"Update"}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"h5 fw-bolder",children:"Toppings: "}),e.toppings.map((function(e,t){return 0===t?Object(g.jsx)("span",{children:e}):Object(g.jsxs)("span",{children:[", ",e]})}))]}),Object(g.jsx)("div",{className:"col-2 d-flex justify-content-center",children:Object(g.jsx)("div",{className:"sideCartPizza my-4 ps-1",children:Object(g.jsx)("button",{className:"btn btn-danger",onClick:function(){return j(I(e))},children:"Remove"})})})]},t)}))})}),Object(g.jsx)(R.a,{top:!0,children:Object(g.jsxs)("div",{className:"my-5 totals d-flex align-items-center flex-column position-fixed",children:[Object(g.jsxs)("h2",{className:"mt-4",children:["Total Pizzas: ",p]}),Object(g.jsxs)("h5",{className:"mt-2",children:["Subtotal: ",k(o)]}),Object(g.jsxs)("h5",{className:"mt-2",children:["Sales Tax: ",k(m)]}),Object(g.jsxs)("h1",{className:"mt-4",children:["Total: ",k(o+m)]}),Object(g.jsx)("button",{className:"btn btn-primary mt-4",onClick:function(){alert("Thank you for using my site. Unfortunately you cannot actually order the pizzas you built but I'm sure they would have been extra tasty.\n\nIf you are craving some pizza, I'd recommend placing an order with your favorite pizza place."),j({type:z}),e("/builder")},children:"Place Order"})]})})]})})};var A=function(){return Object(g.jsx)("div",{})};var D=function(){var e=Object(r.c)((function(e){return e.cartCR.numberOfItems})),t=Object(r.c)((function(e){return e.cartCR})),i=Object(r.c)((function(e){return e.cartCR.cartItems})),n=Object(r.c)((function(e){return e.cartCR.fanFavorites})),s=Object(a.useState)(0),c=Object(u.a)(s,2),p=c[0],o=c[1],l=Object(r.b)();return Object(g.jsx)("div",{className:"container position-relative",children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)(R.a,{left:!0,cascade:!0,duration:500,children:Object(g.jsx)("div",{className:"mt-5 col-8",children:n.map((function(e,t){return Object(g.jsxs)("div",{className:"cartPizza row mb-5",children:[Object(g.jsx)("div",{className:"col-5 ps-4",children:Object(g.jsx)(w,{pizza:e,height:"300px"})}),Object(g.jsxs)("div",{className:"col-5",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{className:"h1 d-block",children:e.name}),Object(g.jsxs)("span",{className:"h3",children:["Price: ",k(e.price)]})]}),0===e.toppings.length?Object(g.jsx)("span",{children:"No toppings"}):Object(g.jsx)("span",{className:"h5 fw-bolder",children:"Toppings: "}),e.toppings.map((function(e,t){return 0===t?Object(g.jsx)("span",{children:e},t):Object(g.jsxs)("span",{children:[", ",e]},t)}))]}),Object(g.jsx)("div",{className:"col-2 d-flex align-items-end",children:Object(g.jsx)("div",{className:"sideCartPizza d-flex align-items-end pb-3",children:Object(g.jsx)("button",{className:"btn btn-primary ",onClick:function(){return l(_(e,"cartItems"))},children:"Add to Order"})})})]},t)}))})}),Object(g.jsx)(R.a,{right:!0,children:Object(g.jsxs)("div",{className:"mt-5 ms-5 col-2 cartContainerFavs position-fixed",children:[0===e?Object(g.jsx)("h1",{className:"text-center py-3",children:"Order is empty"}):1===e?Object(g.jsxs)("div",{children:[Object(g.jsxs)("h2",{className:"text-center mt-1",children:[e," pizza in Order"]}),Object(g.jsxs)("h3",{className:"text-center",children:["Total Price: ",k(t.totalPrice)]})]}):Object(g.jsxs)("div",{children:[Object(g.jsxs)("h2",{className:"text-center mt-1",children:[e," pizzas in Order"]}),Object(g.jsxs)("h3",{className:"text-center",children:["Total Price: ",k(t.totalPrice)]})]}),Object(g.jsx)("div",{className:"position-relative cart",children:i.map((function(e,t){return Object(g.jsx)(R.a,{children:Object(g.jsxs)("div",{className:"sideCartPizza my-4 ps-1",children:[Object(g.jsx)(w,{pizza:e,height:"150px"}),Object(g.jsxs)("div",{className:"cartButton",children:[Object(g.jsx)(F.a,{className:"text-danger trashSideCart",onClick:function(){return l(I(e))}}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsxs)("span",{className:"h4",children:["x",e.count]}),Object(g.jsxs)("select",{className:"ms-3",defaultValue:p,onChange:function(e){return o(parseInt(e.target.value))},children:[Object(g.jsx)("option",{value:"1",children:"1"}),Object(g.jsx)("option",{value:"2",children:"2"}),Object(g.jsx)("option",{value:"3",children:"3"}),Object(g.jsx)("option",{value:"4",children:"4"}),Object(g.jsx)("option",{value:"5",children:"5"})]}),Object(g.jsx)("button",{className:"btn btn-outline-primary mt-2",onClick:function(){l(S(e,p)),o(1)},children:"Update"})]})]},(e.id,t))})}))})]})})]})})},H={cartItems:[],numberOfItems:0,totalPrice:parseFloat(0),fanFavorites:[{id:"1d851ffb-8b75-43d9-8a0f-a06146ee7b40",name:"Just Cheese",price:12,toppingImages:[],toppingPrices:[],toppings:[]},{count:1,id:"38e0d9e3-2daf-4d0f-9e78-be40629663c8",name:"The Regular",price:12.75,toppingImages:["images/toppings/pepperoni_topping.png"],toppingPrices:[.75],toppings:["Pepperoni"]},{id:"dc5b7848-c2f8-47fd-a005-9e1ba2827769",name:"Meat Lovers",price:15.25,toppingImages:["images/toppings/pepperoni_topping.png","images/toppings/ham_topping.png","images/toppings/italianSausage_topping.png","images/toppings/bacon_topping.png"],toppingPrices:[.75,.75,.75,1],toppings:["Pepperoni","Ham","Italian Sausage","Bacon"]},{id:"a36a9cf5-0a1a-4433-87d2-fdabf80dd45f",name:"Veggie Lovers",price:15.3,toppingImages:["images/toppings/jalapenos_topping.png","images/toppings/mushrooms_topping.png","images/toppings/olives_topping.png","images/toppings/onions_topping.png","images/toppings/spinach_topping.png","images/toppings/basil_topping.png"],toppingPrices:[.6,.6,.6,.6,.4,.5],toppings:["Jalape\xf1os","Mushroom","Olives","Onions","Spinach","Basil"]},{id:"18c87572-d775-42b4-bad6-f465966eb283",name:"Hawaiian Pizza",price:13.35,toppingImages:["images/toppings/pepperoni_topping.png","images/toppings/pineapple_topping.png"],toppingPrices:[.75,.6],toppings:["Pepperoni","Pineapple"]},{id:"f27cc95f-d333-4d25-b392-cbb24b67f3ef",name:"By The Bay",price:15,toppingImages:["images/toppings/anchovies_topping.png","images/toppings/shrimp_topping.png"],toppingPrices:[1.75,1.25],toppings:["Anchovies","Shrimp"]},{id:"0cbcc652-d18d-4004-b73a-8de4be467eba",name:"Sweet 'N Spicy",price:13.2,toppingImages:["images/toppings/pineapple_topping.png","images/toppings/jalapenos_topping.png"],toppingPrices:[.6,.6],toppings:["Pineapple","Jalape\xf1os"]},{id:"1129c539-c95b-4309-9014-57cc8f8fa575",name:"Supreme",price:16.45,toppingImages:["images/toppings/pepperoni_topping.png","images/toppings/ham_topping.png","images/toppings/italianSausage_topping.png","images/toppings/mushrooms_topping.png","images/toppings/olives_topping.png","images/toppings/onions_topping.png","images/toppings/spinach_topping.png"],toppingPrices:[.75,.75,.75,.6,.6,.6,.4],toppings:["Pepperoni","Ham","Italian Sausage","Mushroom","Olives","Onions","Spinach"]},{id:"db709e6a-2c89-4dc1-99c2-193ff2b8c492",name:"The Works",price:23.4,toppingImages:["images/toppings/anchovies_topping.png","images/toppings/bacon_topping.png","images/toppings/basil_topping.png","images/toppings/feta_topping.png","images/toppings/ham_topping.png","images/toppings/italianSausage_topping.png","images/toppings/jalapenos_topping.png","images/toppings/mushrooms_topping.png","images/toppings/olives_topping.png","images/toppings/onions_topping.png","images/toppings/parmesan_topping.png","images/toppings/pepperoni_topping.png","images/toppings/pineapple_topping.png","images/toppings/shrimp_topping.png","images/toppings/spinach_topping.png"],toppingPrices:[.75,.75,1,.75,1.75,1.25,.75,.5,.6,.6,.6,.6,.6,.5,.4],toppings:["Pepperoni","Ham","Bacon","Italian Sausage","Anchovies","Shrimp","Feta","Parmesan","Jalape\xf1os","Mushroom","Olives","Onions","Pineapple","Basil","Spinach"]}],favorites:[],numberOfFavorites:0},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:if("cartItems"===t.bin){var i=Object(O.a)(e.cartItems),a=!1;return i.forEach((function(e){e.id===t.pizza.id&&(e.count++,a=!0)})),a||i.push(Object(h.a)(Object(h.a)({},t.pizza),{},{count:1})),Object(h.a)(Object(h.a)({},e),{},{cartItems:i,numberOfItems:e.numberOfItems+1,totalPrice:e.totalPrice+parseFloat(t.pizza.price)})}case v:return Object(h.a)(Object(h.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return t.pizza.id!==e.id})),numberOfItems:e.numberOfItems-t.pizza.count,totalPrice:e.totalPrice-parseFloat(t.pizza.price*t.pizza.count)});case N:t.pizza.count=t.count;var n=0,s=0,c=e.cartItems.map((function(e){return e.id===t.pizza.id?(console.log("inside if-statement"),n+=t.pizza.price*t.pizza.count,s+=t.pizza.count,e):(n+=e.price*e.count,s+=e.count,e)}));return Object(h.a)(Object(h.a)({},e),{},{cartItems:c,numberOfItems:s,totalPrice:n});case z:return Object(h.a)(Object(h.a)({},e),{},{cartItems:[],numberOfItems:0,totalPrice:parseFloat(0)});default:return e}},L={count:0},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;return"INCREMENT"===t.type?Object(h.a)(Object(h.a)({},e),{},{count:e.count+t.data}):e},U=Object(p.a)({builderCR:M,cartCR:J}),V=(i(42),i(43),Object(p.b)(U,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));c.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(r.a,{store:V,children:Object(g.jsx)(o.a,{children:Object(g.jsx)(d,{children:Object(g.jsxs)(l.c,{children:[Object(g.jsx)(l.a,{path:"/",element:Object(g.jsx)(j,{})}),Object(g.jsx)(l.a,{path:"/deals",element:Object(g.jsx)(A,{})}),Object(g.jsx)(l.a,{path:"/fan-favs",element:Object(g.jsx)(D,{})}),Object(g.jsx)(l.a,{path:"/builder",element:Object(g.jsx)(E,{})}),Object(g.jsx)(l.a,{path:"/cart",element:Object(g.jsx)(B,{})})]})})})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.1e4fff58.chunk.js.map