(this.webpackJsonpcarousel=this.webpackJsonpcarousel||[]).push([[0],[,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(0),r=s(1),a=s.n(r),i=s(4),o=s.n(i),n=(s(10),s(2)),d=(s(11),s(12),function(){return Object(c.jsx)("div",{className:"header",children:Object(c.jsx)("h2",{className:"brandName",children:"STYLE  TRENDS"})})}),u=(s(13),function(e){var t=e.selectedOption,s=e.setSelectedOption;return Object(c.jsxs)("div",{className:"filters",children:[Object(c.jsx)("h2",{children:"Filters"}),Object(c.jsxs)("div",{className:"categoryFilter",children:[Object(c.jsx)("h4",{children:"Category:"}),Object(c.jsxs)("select",{className:"categorySelect",value:t,onChange:s,children:[Object(c.jsx)("option",{value:"all",children:"All"}),Object(c.jsx)("option",{value:"shirts",children:"Shirts"}),Object(c.jsx)("option",{value:"tshirts",children:"Tshirts"}),Object(c.jsx)("option",{value:"suits",children:"Suits"}),Object(c.jsx)("option",{value:"sherwani",children:"Sherwani"})]})]})]})}),l=(s(14),function(e){e.number;var t=e.isActive,s=e.product,r=s.productName,a=s.productCategory,i=s.marketPrice,o=s.productImage;return Object(c.jsxs)("div",{className:t?"productTile activeProductTile":"productTile",children:[Object(c.jsx)("img",{className:"productImage",src:o,alt:r}),Object(c.jsxs)("div",{className:"productInfo",children:[Object(c.jsx)("p",{className:"productName",children:r}),Object(c.jsxs)("div",{className:"flexSpaceBtw",children:[Object(c.jsx)("p",{className:"productCategory",children:a}),Object(c.jsxs)("p",{className:"productPrice",children:[i," R.s"]})]})]})]})}),p=(s(15),function(e){var t=e.product,s=e.position,r=e.activePos,a=e.setActiveIdx,i=function(e,t){return{styles:{transform:"translateX(".concat(17*(e-t+1),"rem)")}}}(s,r);return Object(c.jsx)("li",{className:"carouselSlideItem",style:i.styles,onClick:function(){return a(s)},children:Object(c.jsx)(l,{number:s,isActive:r===s,product:t})})}),m=(s(16),[{productId:"101",productName:"Lee",productImage:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11238174/2020/2/27/ef87d317-a017-49b9-bef6-8dad58ed196c1582782913556-Lee-Men-Tshirts-7941582782911898-1.jpg",productCategory:"Tshirts",isDiscountAvailable:!0,marketPrice:600,discountedPrice:540},{productId:"102",productName:"Levis",productImage:"https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/11165580/2020/6/15/0b38f5df-692d-42f5-9d78-c2a9cc9384661592213550786-Levis-Men-Tshirts-7071592213548655-1.jpg",productCategory:"Tshirts",isDiscountAvailable:!0,marketPrice:800,discountedPrice:720},{productId:"103",productName:"Roadster",productImage:"https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/2329007/2018/2/19/11519024074012-Roadster-Men-Maroon-Solid-Round-Neck-T-shirt-7571519024073748-1.jpg",productCategory:"Tshirts",isDiscountAvailable:!0,marketPrice:1e3,discountedPrice:900},{productId:"104",productName:"Puma",productImage:"https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12352302/2020/10/20/5e69ffcb-f4dc-40eb-a750-d40b369481f01603193630644TshirtsRoadsterMenTshirtsRoadsterMenTshirtsRoadsterMenTshirt1.jpg",productCategory:"Tshirts",isDiscountAvailable:!0,marketPrice:900,discountedPrice:810},{productId:"105",productName:"Tommy Hilfiger",productImage:"https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12469644/2020/11/26/08be9c2d-342b-452b-ab60-db70c5192e611606382951425-Tommy-Hilfiger-Men-Tshirts-8511606382950345-1.jpg",productCategory:"Tshirts",isDiscountAvailable:!1,marketPrice:750,discountedPrice:750},{productId:"106",productName:"HangUp",productImage:"https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/9/13/00f7ce29-a7b7-484c-a865-d49860bdda5c1568364346247-1.jpg",productCategory:"Sherwani",isDiscountAvailable:!1,marketPrice:750,discountedPrice:750},{productId:"107",productName:"Vastramay",productImage:"https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/5556774/2018/4/27/11524822434599-Vastramay-Men-Brown-Cotton-Blend-Sherwani-Style-Kurta-Set-7721524822434423-1.jpg",productCategory:"Sherwani",isDiscountAvailable:!1,marketPrice:750,discountedPrice:750},{productId:"107",productName:"Benstoke",productImage:"https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/6/26/d5893733-2354-4fec-ad8c-968107f0a31e1593122137024-1.jpg",productCategory:"Sherwani",isDiscountAvailable:!1,marketPrice:750,discountedPrice:750},{productId:"108",productName:"Park Avenue",productImage:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12661286/2020/11/17/4bb24d0f-5ee3-48c0-bd6f-5ec46d484e421605596113546ShirtsParkAvenueMenSuitsParkAvenueMen1.jpg",productCategory:"Suits",isDiscountAvailable:!1,marketPrice:750,discountedPrice:750},{productId:"109",productName:"Arrow",productImage:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12662060/2020/11/17/12951e94-4e36-4860-b73a-1dce324adc441605616896422-Arrow-Men-Suits-7191605616894492-1.jpg",productCategory:"Suits",isDiscountAvailable:!1,marketPrice:750,discountedPrice:750},{productId:"110",productName:"Louis Philippe",productImage:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/7/11/d21b6475-4630-463e-9864-bd60c44dceef1594420569511-1.jpg",productCategory:"Suits",isDiscountAvailable:!1,marketPrice:750,discountedPrice:750},{productId:"111",productName:"MANQ",productImage:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12719332/2020/11/27/917966bd-2783-4997-ad5e-13c7e17a27fb1606478618877-MANQ-Men-Coffee-Brown-Slim-Fit-Self-Striped-Single-Breasted--1.jpg",productCategory:"Suits",isDiscountAvailable:!1,marketPrice:750,discountedPrice:750},{productId:"111",productName:"Louis Philippe",productImage:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/1/24/1a31f1eb-8b5c-448d-ae97-acacd576280e1548335138279-1.jpg",productCategory:"Shirts",isDiscountAvailable:!1,marketPrice:750,discountedPrice:750},{productId:"112",productName:"Raymond",productImage:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12070218/2020/11/18/be98aec7-88ea-469c-ba12-cc1b8fa604241605692383802-Raymond-Men-Shirts-3061605692381934-1.jpg",productCategory:"Shirts",isDiscountAvailable:!1,marketPrice:750,discountedPrice:750},{productId:"112",productName:"Park-Avenue",productImage:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12632596/2020/11/19/c805a672-5af9-481a-8646-76c8c44fa5721605787883641-Park-Avenue-Men-Shirts-681605787881807-1.jpg",productCategory:"Shirts",isDiscountAvailable:!1,marketPrice:750,discountedPrice:750}]),g=function(e){var t=e.filterType,s=a.a.useState(1),r=Object(n.a)(s,2),i=r[0],o=r[1],d=m;"all"!==t&&(d=d.filter((function(e){return e.productCategory.toLowerCase()===t})));return a.a.useEffect((function(){d.length>1?o(1):o(0)}),[t]),Object(c.jsx)("div",{className:"carouselWrap",children:Object(c.jsxs)("div",{className:"carouselInner",children:[Object(c.jsx)("button",{className:"carouselBtn carouselBtnPrev",onClick:function(){i>0?o(i-1):0===i&&o(d.length-1)},children:Object(c.jsx)("i",{className:"carouselBtnArrow carouselBtnArrowLeft"})}),Object(c.jsx)("div",{className:"carouselContainer",children:Object(c.jsx)("ul",{className:"carouselSlideList",children:d.map((function(e,t){return Object(c.jsx)(p,{position:t,product:e,activePos:i,setActiveIdx:o},t)}))})}),Object(c.jsx)("button",{className:"carouselBtn carouselBtnNext",onClick:function(){i<d.length-1?o(i+1):i===d.length-1&&d.length>1&&o(0)},children:Object(c.jsx)("i",{className:"carouselBtnArrow carouselBtnArrowRight"})})]})})};var h=function(){var e=Object(r.useState)("all"),t=Object(n.a)(e,2),s=t[0],i=t[1];return Object(c.jsxs)(a.a.Fragment,{children:[Object(c.jsx)(d,{}),Object(c.jsx)(u,{selectedOption:s,setSelectedOption:function(e){return i(e.target.value)}}),Object(c.jsx)(g,{filterType:s})]})},b=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,18)).then((function(t){var s=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),c(e),r(e),a(e),i(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),b()}],[[17,1,2]]]);
//# sourceMappingURL=main.7bf15576.chunk.js.map