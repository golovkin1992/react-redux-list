(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{235:function(e){e.exports={title:"Einfache B\xfccherliste",placeholderSearch:"Geben Sie den Namen des zu durchsuchenden Buches ein",btnAdd:"Hinzuf\xfcgen",btnClear:"Klar",addBooks:"B\xfccher hinzuf\xfcgen",titleList:"Buchliste:",btnDetails:"die Details",btnDelete:"Entfernen",fields:{title:"Titel:",country:"Land der Ver\xf6ffentlichung:",language:"Sprache:",pages:"Seiten:",author:"Gepostet von",year:"Erscheinungsjahr:",errors:{required:"erforderlich",onlyNumbers:"nur zahlen!"}},btnBack:"Zur\xfcck"}},236:function(e){e.exports={title:"Simple Booklist",placeholderSearch:"Enter the name of the book to search",addBooks:"Add books",btnAdd:"Add",btnClear:"Clear",titleList:"Book list:",btnDetails:"Details",btnDelete:"Delete",fields:{title:"Title:",country:"Country of publication:",language:"Language:",pages:"Pages:",author:"Author:",year:"The year of publishing:",errors:{required:"required",onlyNumbers:"only numbers!"}},btnBack:"Back"}},237:function(e){e.exports={title:"C\u043f\u0438\u0441\u043e\u043a \u043a\u043d\u0438\u0433",placeholderSearch:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430",addBooks:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043d\u0438\u0433\u0438",btnAdd:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",btnClear:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c",titleList:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043d\u0438\u0433:",btnDetails:"\u0414\u0435\u0442\u0430\u043b\u0438",btnDelete:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",fields:{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435:",country:"\u0421\u0442\u0440\u0430\u043d\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438:",language:"\u042f\u0437\u044b\u043a:",pages:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446:",author:"\u0410\u0432\u0442\u043e\u0440:",year:"\u0413\u043e\u0434 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438:",errors:{required:"\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435",onlyNumbers:"\u0442\u043e\u043b\u044c\u043a\u043e \u0446\u0438\u0444\u0440\u044b!"}},btnBack:"\u041d\u0430\u0437\u0430\u0434"}},242:function(e,a,n){e.exports=n.p+"static/media/preloader.05457216.svg"},245:function(e,a,n){e.exports=n(566)},413:function(e,a,n){},561:function(e,a,n){},562:function(e,a,n){},563:function(e,a,n){},564:function(e,a,n){},565:function(e,a,n){},566:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(24),i=n.n(o),c=n(44),s=n(42),l=n(83),u=n(162),d=n.n(u),b=n(234),m=n.n(b),h=n(84),p=n(235),g=n(236),f=n(237);h.a.use(l.b).init({interpolation:{escapeValue:!1},keySeparator:".",lng:"en",resources:{en:{common:g},de:{common:p},ru:{common:f}},ns:["common"],defaultNS:"common"});var k=h.a,O=n(19),v=n(243),E=n(238),y=n(569),S=n(239),B=n.n(S),j=n(20),C=n.n(j),T=n(23),w="GET_BOOKS_REQUEST",_="DELETE_BOOK_REQUEST",N="POST_BOOK_REQUEST",L="PUT_BOOK_REQUEST",x="GET_BOOK_REQUEST",K=function(e){return{type:"GET_BOOKS_SUCCESS",payload:e}},A=function(e){return{type:"FAILURE",payload:e}},F=function(e){return{type:"DELETE_BOOK_SUCCESS",payload:e}},P=function(e){return{type:"POST_BOOK_SUCCESS",payload:e}},D=function(e){return{type:"PUT_BOOK_SUCCESS",payload:e}},G=function(e){return{type:"GET_BOOK_SUCCESS",payload:e}},U=n(21),M=n(22),I=n(86),R=n.n(I),z="https://json-books.herokuapp.com/books",H=function(){function e(){Object(U.a)(this,e)}return Object(M.a)(e,null,[{key:"getBooks",value:function(){return R.a.get(z)}},{key:"getBook",value:function(e){return R.a.get("".concat(z,"/").concat(e))}},{key:"postBook",value:function(e){return R.a.post(z,e)}},{key:"deleteBook",value:function(e){return R.a.delete("".concat(z,"/").concat(e))}},{key:"putBook",value:function(e){return R.a.put("".concat(z,"/").concat(e.id),e)}}]),e}(),V=C.a.mark(ne),Q=C.a.mark(te),q=C.a.mark(re),J=C.a.mark(oe),W=C.a.mark(ie),Y=C.a.mark(ce),Z=C.a.mark(se),X=C.a.mark(le),$=C.a.mark(ue),ee=C.a.mark(de),ae=C.a.mark(be);function ne(){var e;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(T.b)(H.getBooks);case 3:return e=a.sent,a.next=6,Object(T.c)(K(e));case 6:a.next=12;break;case 8:return a.prev=8,a.t0=a.catch(0),a.next=12,Object(T.c)(A(a.t0.message));case 12:case"end":return a.stop()}},V,null,[[0,8]])}function te(){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.d)(w,ne);case 2:case"end":return e.stop()}},Q)}function re(e){var a,n;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.payload,t.prev=1,t.next=4,Object(T.b)(H.postBook,a);case 4:return n=t.sent,t.next=7,Object(T.c)(P(n.data));case 7:t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(1),t.next=13,Object(T.c)(A(t.t0.message));case 13:case"end":return t.stop()}},q,null,[[1,9]])}function oe(){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.d)(N,re);case 2:case"end":return e.stop()}},J)}function ie(e){var a;return C.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a=e.payload,n.prev=1,n.next=4,Object(T.b)(H.deleteBook,a);case 4:return n.next=6,Object(T.c)(F(a));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(1),n.next=12,Object(T.c)(A(n.t0.message));case 12:case"end":return n.stop()}},W,null,[[1,8]])}function ce(){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.d)(_,ie);case 2:case"end":return e.stop()}},Y)}function se(e){var a;return C.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a=e.payload,n.prev=1,n.next=4,Object(T.b)(H.putBook,a);case 4:return n.next=6,Object(T.c)(D(a));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(1),n.next=12,Object(T.c)(A(n.t0.message));case 12:case"end":return n.stop()}},Z,null,[[1,8]])}function le(){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.d)(L,se);case 2:case"end":return e.stop()}},X)}function ue(e){var a,n;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.payload,t.prev=1,t.next=4,Object(T.b)(H.getBook,a);case 4:return n=t.sent,t.next=7,Object(T.c)(G(n));case 7:t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(1),t.next=13,Object(T.c)(A(t.t0.message));case 13:case"end":return t.stop()}},$,null,[[1,9]])}function de(){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.d)(x,ue);case 2:case"end":return e.stop()}},ee)}function be(){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.a)([te(),oe(),ce(),le(),de()]);case 2:case"end":return e.stop()}},ae)}var me=n(85),he=n(97),pe=n(14),ge=n(164),fe=new ge.b.Entity("books"),ke=[fe],Oe={filter:"",books:[],book:null,isLoading:!1,error:null,bestBook:4},ve=Object(O.combineReducers)({reducers:function(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload,o=a.books;switch(t){case"CHANGE_NEW_BOOK":var i=r.name,c=r.value,s=a.newBook;return Object(pe.a)({},a,{newBook:Object(pe.a)({},s,Object(he.a)({},i,c))});case"CHANGE_FILTER":return Object(pe.a)({},a,{filter:r});case"CHANGE_BOOK_PROPERTY":var l=a.book,u=r.editableField,d=r.text,b=Object.assign({},Object(pe.a)({},l,Object(he.a)({},u,d)));return Object(pe.a)({},a,{book:b});case"FAILURE":return Object(pe.a)({},a,{error:r,isLoading:!1});case"GET_BOOKS_REQUEST":return Object(pe.a)({},a,{isLoading:!0});case"GET_BOOKS_SUCCESS":var m=r.data,h=(e=m,Object(ge.a)(e,ke));return console.log(h),Object(pe.a)({},a,{books:m,isLoading:!1,error:""});case"GET_BOOK_REQUEST":return Object(pe.a)({},a,{isLoading:!0});case"GET_BOOK_SUCCESS":var p=r.data;return Object(pe.a)({},a,{book:p,isLoading:!1});case"POST_BOOK_REQUEST":return Object(pe.a)({},a,{isLoading:!0});case"POST_BOOK_SUCCESS":var g=[].concat(Object(me.a)(o),[r]);return Object(pe.a)({},a,{books:g,isLoading:!1});case"DELETE_BOOK_REQUEST":return Object(pe.a)({},a,{isLoading:!0});case"DELETE_BOOK_SUCCESS":var f=o.filter(function(e){return e.id!==r});return Object(pe.a)({},a,{books:f,isLoading:!1});case"PUT_BOOK_REQUEST":return Object(pe.a)({},a,{isLoading:!0});case"PUT_BOOK_SUCCESS":var k=r.id,O=o.findIndex(function(e){return e.id===k}),v=Object(pe.a)({},o[O],r);return Object(pe.a)({},a,{books:[].concat(Object(me.a)(o.slice(0,O)),[v],Object(me.a)(o.slice(O+1))),isLoading:!1});case"SET_BEST_BOOK":var E=r.id;return Object(pe.a)({},a,{bestBook:E});default:return a}},form:y.a}),Ee=Object(v.a)(),ye=Object(O.createStore)(ve,Object(E.composeWithDevTools)(Object(O.applyMiddleware)(Ee,B.a)));Ee.run(be);var Se=ye,Be=n(57),je=n(26),Ce=n(28),Te=n(29),we=n(568),_e=n(567),Ne=function(e){return e?void 0:"required"},Le=[{name:"title",validate:Ne},{name:"country",options:["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"],validate:Ne},{name:"language",options:["Abkhaz","Afar","Afrikaans","Akan","Albanian","Amharic","Arabic","Aragonese","Armenian","Assamese","Avaric","Avestan","Aymara","Azerbaijani","Bambara","Bashkir","Basque","Belarusian","Bengali Bangla","Bihari","Bislama","Bosnian","Breton","Bulgarian","Burmese","Catalan Valencian","Chamorro","Chechen","Chichewa Chewa Nyanja","Chinese","Chuvash","Cornish","Corsican","Cree","Croatian","Czech","Danish","Divehi Dhivehi Maldivian","Dutch","Dzongkha","English","Esperanto","Estonian","Ewe","Faroese","Fijian","Finnish","French","Galician","Georgian","German","Greek Modern","Guaran\xc3\xad","Gujarati","Haitian Haitian Creole","Hausa","Hebrew (modern)","Herero","Hindi","Hiri Motu","Hungarian","Interlingua","Indonesian","Interlingue","Irish","Igbo","Inupiaq","Ido","Icelandic","Italian","Inuktitut","Japanese","Javanese","Kalaallisut Greenlandic","Kannada","Kanuri","Kashmiri","Kazakh","Khmer","Kikuyu Gikuyu","Kinyarwanda","Kyrgyz","Komi","Kongo","Korean","Kurdish","Kwanyama Kuanyama","Latin","Luxembourgish Letzeburgesch","Ganda","Limburgish","Lingala","Lao","Lithuanian","Luba-Katanga","Latvian","Manx","Macedonian","Malagasy","Malay","Malayalam","Maltese","M\xc4ori","Marathi (Mar\xc4\xe1\xb9\xadh\xc4\xab)","Marshallese","Mongolian","Nauru","Navajo Navaho","Norwegian Bokm\xc3\xa5l","North Ndebele","Nepali","Ndonga","Norwegian Nynorsk","Norwegian","Nuosu","South Ndebele","Occitan","Ojibwe Ojibwa","Old Church Slavonic ","Oromo","Oriya","Ossetian Ossetic","Panjabi Punjabi","P\xc4li","Persian (Farsi)","Polish","Pashto Pushto","Portuguese","Quechua","Romansh","Kirundi","Romanian","Russian","Sanskrit","Sardinian","Sindhi","Northern Sami","Samoan","Sango","Serbian","Scottish Gaelic","Shona","Sinhala Sinhalese","Slovak","Slovene","Somali","Southern Sotho","South Azerbaijani","Spanish","Sundanese","Swahili","Swati","Swedish","Tamil","Telugu","Tajik","Thai","Tigrinya","Tibetan","Turkmen","Tagalog","Tswana","Tonga (Tonga Islands)","Turkish","Tsonga","Tatar","Twi","Tahitian","Uyghur Uighur","Ukrainian","Urdu","Uzbek","Venda","Vietnamese","Volap\xc3\xbck","Walloon","Welsh","Wolof","Western Frisian","Xhosa","Yiddish","Yoruba","Zhuang Chuang","Zulu"],validate:Ne},{name:"pages",validate:[Ne,function(e){return new RegExp(/^[0-9]+$/).test(e)?void 0:"onlyNumbers"}]},{name:"author",validate:Ne},{name:"year",validate:Ne}],xe=(n(413),n(120)),Ke=n(118),Ae=n.n(Ke),Fe=function(e){var a=e.options,n=e.input.name,t=e.meta.error,o=e.onTranslate;switch(n){case"language":case"country":return r.a.createElement(xe.SelectField,Object.assign({},e,{meta:Object(pe.a)({},e.meta,{error:t&&o("fields.errors.".concat(t))})}),a.map(function(e){return r.a.createElement(Ae.a,{key:e,value:e,primaryText:e})}));case"year":return r.a.createElement(xe.DatePicker,Object.assign({},e,{meta:Object(pe.a)({},e.meta,{error:t&&o("fields.errors.".concat(t))}),openToYearSelection:!0,formatDate:function(e){return e.getFullYear()}}));default:return r.a.createElement(xe.TextField,Object.assign({},e,{meta:Object(pe.a)({},e.meta,{error:t&&o("fields.errors.".concat(t))})}))}},Pe=function(e){function a(){var e,n;Object(U.a)(this,a);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(n=Object(je.a)(this,(e=Object(Ce.a)(a)).call.apply(e,[this].concat(r)))).state={isVisibleForm:!1},n.styles={styleInput:{width:"100px"}},n.handleClick=function(e){e.preventDefault();var a=n.props,t=a.newBook;(0,a.onPostBook)(t)},n.handleVisibleForm=function(){var e=n.state.isVisibleForm;n.setState({isVisibleForm:!e})},n}return Object(Te.a)(a,e),Object(M.a)(a,[{key:"render",value:function(){var e=this.state.isVisibleForm,a=this.props,n=a.reset,t=a.handleSubmit,o=a.pristine,i=a.submitting,c=a.onTranslate;return r.a.createElement("div",{className:"add-books-block"},r.a.createElement("span",null,c("addBooks")),r.a.createElement("button",{className:"btn btn_add-book btn_toggle-book-form",type:"button",onClick:this.handleVisibleForm},"+"),e&&r.a.createElement("form",{className:"fields",onSubmit:t},Le.map(function(e){return r.a.createElement("div",{className:"field"},r.a.createElement(we.a,{key:e.name,name:e.name,component:Fe,hintText:c("fields.".concat(e.name)),floatingLabelText:c("fields.".concat(e.name)),autoComplete:"off",style:{width:"100%"},options:e.options,validate:e.validate,onTranslate:c}))}),r.a.createElement("button",{className:"btn btn_add-book",type:"submit",disabled:i},c("btnAdd")),r.a.createElement("button",{className:"btn btn_add-book",type:"button",disabled:o||i,onClick:n},c("btnClear"))))}}]),a}(t.Component),De=Object(_e.a)({form:"bookForm"})(Pe),Ge=function(e){function a(){var e,n;Object(U.a)(this,a);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(n=Object(je.a)(this,(e=Object(Ce.a)(a)).call.apply(e,[this].concat(r)))).handleClick=function(e){e.preventDefault();var a=e.target.value;(0,n.props.onDeleteBook)(+a)},n}return Object(Te.a)(a,e),Object(M.a)(a,[{key:"render",value:function(){var e=this.props,a=e.onTranslate,n=e.id,t=e.title,o=e.author;return r.a.createElement("li",null,r.a.createElement("div",{className:"book-item"},r.a.createElement("div",{className:"book-item__cover"}),r.a.createElement("div",{className:"book-item__buttons"},r.a.createElement(s.b,{className:"details",to:"/books/".concat(n)},a("btnDetails")),r.a.createElement("button",{className:"btn btn_delete-book",type:"submit",value:n,onClick:this.handleClick},a("btnDelete"))),r.a.createElement("span",{className:"book-item__title"},t),r.a.createElement("span",{className:"book-item__author"},o)))}}]),a}(t.PureComponent),Ue=(n(561),n(242)),Me=n.n(Ue),Ie=function(){return r.a.createElement("div",{className:"preloader-wrap"},r.a.createElement("img",{src:Me.a,alt:""}))},Re=function(e){function a(){return Object(U.a)(this,a),Object(je.a)(this,Object(Ce.a)(a).apply(this,arguments))}return Object(Te.a)(a,e),Object(M.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.onGetBooks)()}},{key:"render",value:function(){var e=this.props,a=e.visibleBooks,n=e.onDeleteBook,t=e.error,o=e.isLoading,i=e.onTranslate;return o?r.a.createElement(Ie,null):r.a.createElement("div",{className:"book-list-block"},r.a.createElement("span",{className:"title-book-list"},i("titleList")),r.a.createElement("ul",{className:"book-list"},t&&r.a.createElement("p",null,"\u041e\u0448\u0438\u0431\u043a\u0430! ",t),a.map(function(e){return r.a.createElement(Ge,{key:e.id,id:e.id,title:e.title,author:e.author,onDeleteBook:n,onTranslate:i})})))}}]),a}(t.PureComponent),ze=(n(562),function(e){function a(){var e,n;Object(U.a)(this,a);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(n=Object(je.a)(this,(e=Object(Ce.a)(a)).call.apply(e,[this].concat(r)))).getQueryParams=function(e){return new URLSearchParams(e.search).get("search")},n.handleLocationChange=function(){var e=n.props,a=e.history,t=e.onChangeFilter,r=a.location,o=n.getQueryParams(r);o||(o=""),t(o),n.unsubscribe=a.listen(function(e){var a=n.getQueryParams(e);a||(a=""),t(a)})},n.handleChange=function(e){var a=n.props.history,t=e.target.value;t?a.push({search:"search=".concat(t)}):a.push("/")},n.handleChangeLanguage=function(e){n.props.i18n.changeLanguage(e.target.value)},n}return Object(Te.a)(a,e),Object(M.a)(a,[{key:"componentDidMount",value:function(){this.handleLocationChange()}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var e=this.props,a=e.value,n=e.onTranslate;return r.a.createElement(t.Fragment,null,r.a.createElement("header",{className:"header-wrap"},r.a.createElement("h1",{className:"header-title"},n("title")),r.a.createElement("div",{className:"btn-wrap"},r.a.createElement("button",{value:"de",type:"button",onClick:this.handleChangeLanguage,className:"btn-lng btn-lng_de"}),r.a.createElement("button",{value:"en",type:"button",onClick:this.handleChangeLanguage,className:"btn-lng btn-lng_en"}),r.a.createElement("button",{value:"ru",type:"button",onClick:this.handleChangeLanguage,className:"btn-lng btn-lng_ru"}))),r.a.createElement("div",{className:"search-field"},r.a.createElement("input",{className:"search-input",onChange:this.handleChange,type:"search",value:a,placeholder:n("placeholderSearch")})))}}]),a}(t.PureComponent)),He=Object(Be.f)(ze),Ve=(n(563),Object(l.c)()(function(e){var a=e.getBooks,n=e.postBook,t=e.changeFilter,o=e.visibleBooks,i=e.deleteBook,c=e.filter,s=e.error,l=e.isLoading,u=e.t,d=e.i18n;return r.a.createElement("div",{className:"wrap"},r.a.createElement(He,{onChangeFilter:t,value:c,onTranslate:u,i18n:d}),r.a.createElement(De,{onTranslate:u,i18n:d,onSubmit:function(e){n(e)}}),r.a.createElement(Re,{visibleBooks:o,onDeleteBook:i,onGetBooks:a,error:s,isLoading:l,onTranslate:u,i18n:d}))})),Qe=n(87),qe=function(e){return e.filter},Je=Object(Qe.a)([qe,function(e){return e.books}],function(e,a){return e&&""!==e?a.filter(function(a){return a.title.indexOf(e)>-1}):a}),We=Object(Qe.a)(qe,function(e){return e}),Ye=Object(Qe.a)(function(e){return e.book},function(e){return e}),Ze=Object(Qe.a)(function(e){return e.error},function(e){return e}),Xe=Object(Qe.a)(function(e){return e.isLoading},function(e){return e}),$e=Object(c.b)(function(e){return{filter:We(e.reducers),visibleBooks:Je(e.reducers),isLoading:Xe(e.reducers),error:Ze(e.reducers)}},{postBook:function(e){return{type:N,payload:e}},deleteBook:function(e){return{type:_,payload:e}},getBooks:function(){return{type:w}},changeFilter:function(e){return{type:"CHANGE_FILTER",payload:e}}})(Ve),ea=(n(564),function(){return r.a.createElement("div",{className:"not-found"},r.a.createElement("p",{className:"not-found__text"},"\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d! \u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f ",r.a.createElement(s.b,{to:"/"},"\u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e")))}),aa=(n(565),function(e){function a(){var e,n;Object(U.a)(this,a);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return(n=Object(je.a)(this,(e=Object(Ce.a)(a)).call.apply(e,[this].concat(o)))).state={editableField:""},n.inputFocusRef=r.a.createRef(),n.handleDblClick=function(e){var a=e.target.attributes.name.value;n.setState({editableField:a})},n.handleKeyDown=function(e){n.handleInputEdit(e)},n.handleBlur=function(e){n.handleInputEdit(e)},n.handleInputEdit=function(e){var a=n.state.editableField,t=n.props,r=t.putBook,o=t.book;e.keyCode&&13!==e.keyCode||o[a].length&&(r(o),n.setState({editableField:""}))},n.handleChange=function(e){var a=n.state.editableField;(0,n.props.changeBookProperty)(a,e.target.value)},n}return Object(Te.a)(a,e),Object(M.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.match;(0,e.getBook)(a.params.id)}},{key:"componentDidUpdate",value:function(){this.state.editableField.length&&this.inputFocusRef.current.focus()}},{key:"render",value:function(){var e=this,a=this.state.editableField,n=this.props,t=n.book,o=n.isLoading,i=n.error;return o?r.a.createElement(Ie,null):t?r.a.createElement("div",{className:"book-details"},r.a.createElement("div",{className:"book-item__cover book-item__cover_details"}),r.a.createElement("div",{className:"books-wrap"},i&&r.a.createElement("p",null,"\u041e\u0448\u0438\u0431\u043a\u0430! ",i),Le.map(function(n){return r.a.createElement("div",{className:"book",key:n.name},r.a.createElement("span",{className:"book__title"},h.a.t("fields.".concat(n.name))),a===n.name?r.a.createElement("input",{className:"book__edit",type:"text",ref:e.inputFocusRef,value:t[n.name],onChange:e.handleChange,onBlur:e.handleBlur,onKeyDown:e.handleKeyDown}):r.a.createElement("span",{className:"book__value",name:n.name,onDoubleClick:e.handleDblClick},t[n.name]))}),r.a.createElement(s.b,{className:"link link_book",to:"/"},h.a.t("btnBack")))):r.a.createElement(ea,null)}}]),a}(t.PureComponent)),na=Object(c.b)(function(e){return{book:Ye(e.reducers),error:Ze(e.reducers),isLoading:Xe(e.reducers)}},{changeBookProperty:function(e,a){return{type:"CHANGE_BOOK_PROPERTY",payload:{editableField:e,text:a}}},putBook:function(e){return{type:L,payload:e}},getBook:function(e){return{type:x,payload:e}}})(aa),ta=r.a.createElement(Be.c,null,r.a.createElement(Be.a,{path:"/",component:$e,exact:!0}),r.a.createElement(Be.a,{path:"/books/:id",component:na,exact:!0}),r.a.createElement(Be.a,{component:ea}));i.a.render(r.a.createElement(s.a,null,r.a.createElement(c.a,{store:Se},r.a.createElement(m.a,{muiTheme:d()()},r.a.createElement(l.a,{i18n:k},ta)))),document.getElementById("root"))}},[[245,1,2]]]);
//# sourceMappingURL=main.0f954ac1.chunk.js.map