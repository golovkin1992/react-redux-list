(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{49:function(e,a,n){e.exports=n.p+"static/media/preloader.05457216.svg"},51:function(e,a,n){e.exports=n(86)},78:function(e,a,n){},79:function(e,a,n){},81:function(e,a,n){},82:function(e,a,n){},83:function(e,a,n){},84:function(e,a,n){},85:function(e,a,n){},86:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(28),i=n.n(o),c=n(24),s=n(18),l=n(20),u=n(50),d=n(47),b=n(5),m=n.n(b),p=n(6),h=function(){return Math.random().toString(36).substr(2,9)},k="GET_BOOKS_REQUEST",g="DELETE_BOOK_REQUEST",f="POST_BOOK_REQUEST",O="PUT_BOOK_REQUEST",v="GET_BOOK_REQUEST",E=function(e){return{type:"GET_BOOKS_SUCCESS",payload:e}},y=function(e){return{type:"FAILURE",payload:e}},B=function(e){return{type:"DELETE_BOOK_SUCCESS",payload:e}},j=function(e){return{type:"POST_BOOK_SUCCESS",payload:e}},S=function(e){return{type:"PUT_BOOK_SUCCESS",payload:e}},C=function(e){return{type:"GET_BOOK_SUCCESS",payload:e}},w=n(8),_=n(9),N=n(25),T=n.n(N),L="https://json-books.herokuapp.com/books",x=function(){function e(){Object(w.a)(this,e)}return Object(_.a)(e,null,[{key:"getBooks",value:function(){return T.a.get(L)}},{key:"getBook",value:function(e){return T.a.get("".concat(L,"/").concat(e))}},{key:"postBook",value:function(e){return T.a.post(L,e)}},{key:"deleteBook",value:function(e){return T.a.delete("".concat(L,"/").concat(e))}},{key:"putBook",value:function(e){return T.a.put("".concat(L,"/").concat(e.id),e)}}]),e}(),K=m.a.mark(H),F=m.a.mark(V),A=m.a.mark(Q),P=m.a.mark(W),D=m.a.mark(J),G=m.a.mark(q),U=m.a.mark(Y),M=m.a.mark(Z),I=m.a.mark(X),R=m.a.mark($),z=m.a.mark(ee);function H(){var e;return m.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(p.b)(x.getBooks);case 3:return e=a.sent,a.next=6,Object(p.c)(E(e));case 6:a.next=12;break;case 8:return a.prev=8,a.t0=a.catch(0),a.next=12,Object(p.c)(y(a.t0.message));case 12:case"end":return a.stop()}},K,null,[[0,8]])}function V(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.d)(k,H);case 2:case"end":return e.stop()}},F)}function Q(e){var a,n;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.payload,t.prev=1,n=Object.assign({id:h()},a),t.next=5,Object(p.b)(x.postBook,n);case 5:return t.next=7,Object(p.c)(j(n));case 7:t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(1),t.next=13,Object(p.c)(y(t.t0.message));case 13:case"end":return t.stop()}},A,null,[[1,9]])}function W(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.d)(f,Q);case 2:case"end":return e.stop()}},P)}function J(e){var a;return m.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a=e.payload,n.prev=1,n.next=4,Object(p.b)(x.deleteBook,a);case 4:return n.next=6,Object(p.c)(B(a));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(1),n.next=12,Object(p.c)(y(n.t0.message));case 12:case"end":return n.stop()}},D,null,[[1,8]])}function q(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.d)(g,J);case 2:case"end":return e.stop()}},G)}function Y(e){var a;return m.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a=e.payload,n.prev=1,n.next=4,Object(p.b)(x.putBook,a);case 4:return n.next=6,Object(p.c)(S(a));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(1),n.next=12,Object(p.c)(y(n.t0.message));case 12:case"end":return n.stop()}},U,null,[[1,8]])}function Z(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.d)(O,Y);case 2:case"end":return e.stop()}},M)}function X(e){var a,n;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.payload,t.prev=1,t.next=4,Object(p.b)(x.getBook,a);case 4:return n=t.sent,t.next=7,Object(p.c)(C(n));case 7:t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(1),t.next=13,Object(p.c)(y(t.t0.message));case 13:case"end":return t.stop()}},I,null,[[1,9]])}function $(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.d)(v,X);case 2:case"end":return e.stop()}},R)}function ee(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)([V(),W(),q(),Z(),$()]);case 2:case"end":return e.stop()}},z)}var ae=n(31),ne=n(27),te=n(7),re={newBook:{title:"",country:"",language:"",pages:"",author:"",year:""},filter:"",books:[],book:null,isLoading:!1,error:null},oe=Object(u.a)(),ie=Object(l.createStore)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,a=arguments.length>1?arguments[1]:void 0,n=a.type,t=a.payload,r=e.books;switch(n){case"CHANGE_NEW_BOOK":var o=t.name,i=t.value,c=e.newBook;return Object(te.a)({},e,{newBook:Object(te.a)({},c,Object(ne.a)({},o,i))});case"CHANGE_FILTER":return Object(te.a)({},e,{filter:t});case"CHANGE_BOOK_PROPERTY":var s=e.book,l=t.editableField,u=t.text,d=Object.assign({},Object(te.a)({},s,Object(ne.a)({},l,u)));return Object(te.a)({},e,{book:d});case"FAILURE":return Object(te.a)({},e,{error:t,isLoading:!1});case"GET_BOOKS_REQUEST":return Object(te.a)({},e,{isLoading:!0});case"GET_BOOKS_SUCCESS":var b=t.data;return Object(te.a)({},e,{books:b,isLoading:!1,error:""});case"GET_BOOK_REQUEST":return Object(te.a)({},e,{isLoading:!0});case"GET_BOOK_SUCCESS":var m=t.data;return Object(te.a)({},e,{book:m,isLoading:!1});case"POST_BOOK_REQUEST":return Object(te.a)({},e,{isLoading:!0});case"POST_BOOK_SUCCESS":var p=[].concat(Object(ae.a)(r),[t]);return Object(te.a)({},e,{newBook:{author:"",country:"",language:"",pages:"",title:"",year:""},books:p,isLoading:!1});case"DELETE_BOOK_REQUEST":return Object(te.a)({},e,{isLoading:!0});case"DELETE_BOOK_SUCCESS":var h=r.filter(function(e){return e.id!==t});return Object(te.a)({},e,{books:h,isLoading:!1});case"PUT_BOOK_REQUEST":return Object(te.a)({},e,{isLoading:!0});case"PUT_BOOK_SUCCESS":var k=t.id,g=r.findIndex(function(e){return e.id===k}),f=Object(te.a)({},r[g],t);return Object(te.a)({},e,{books:[].concat(Object(ae.a)(r.slice(0,g)),[f],Object(ae.a)(r.slice(g+1))),isLoading:!1});default:return e}},Object(d.composeWithDevTools)(Object(l.applyMiddleware)(oe)));oe.run(ee);var ce=ie,se=n(22),le=n(13),ue=n(12),de=n(14),be=(n(78),function(e){function a(){var e,n;Object(w.a)(this,a);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(n=Object(le.a)(this,(e=Object(ue.a)(a)).call.apply(e,[this].concat(r)))).handleChange=function(e){var a=e.target.value,t=n.props;(0,t.onChangeNewBook)(t.name,a)},n}return Object(de.a)(a,e),Object(_.a)(a,[{key:"render",value:function(){var e=this.props,a=e.name,n=e.value,t=e.label,o=e.isDropDown,i=e.options;return o?r.a.createElement("div",{htmlFor:a,className:"field"},r.a.createElement("select",{className:"field__input",onBlur:this.handleChange,selected:n},r.a.createElement("option",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435"),i.map(function(e){return r.a.createElement("option",{key:e,value:e},e)})),r.a.createElement("span",{className:"field__label"},t)):r.a.createElement("div",{className:"field"},r.a.createElement("input",{type:"text",placeholder:t,className:"field__input",value:n,onChange:this.handleChange}),r.a.createElement("span",{className:"field__label"},t))}}]),a}(t.PureComponent)),me=[{name:"title",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435:"},{name:"country",label:"\u0421\u0442\u0440\u0430\u043d\u0430 \u0438\u0437\u0434\u0430\u043d\u0438\u044f:",isDropDown:!0,options:["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]},{name:"language",label:"\u042f\u0437\u044b\u043a:",isDropDown:!0,options:["Abkhaz","Afar","Afrikaans","Akan","Albanian","Amharic","Arabic","Aragonese","Armenian","Assamese","Avaric","Avestan","Aymara","Azerbaijani","Bambara","Bashkir","Basque","Belarusian","Bengali Bangla","Bihari","Bislama","Bosnian","Breton","Bulgarian","Burmese","Catalan Valencian","Chamorro","Chechen","Chichewa Chewa Nyanja","Chinese","Chuvash","Cornish","Corsican","Cree","Croatian","Czech","Danish","Divehi Dhivehi Maldivian","Dutch","Dzongkha","English","Esperanto","Estonian","Ewe","Faroese","Fijian","Finnish","French","Galician","Georgian","German","Greek Modern","Guaran\xc3\xad","Gujarati","Haitian Haitian Creole","Hausa","Hebrew (modern)","Herero","Hindi","Hiri Motu","Hungarian","Interlingua","Indonesian","Interlingue","Irish","Igbo","Inupiaq","Ido","Icelandic","Italian","Inuktitut","Japanese","Javanese","Kalaallisut Greenlandic","Kannada","Kanuri","Kashmiri","Kazakh","Khmer","Kikuyu Gikuyu","Kinyarwanda","Kyrgyz","Komi","Kongo","Korean","Kurdish","Kwanyama Kuanyama","Latin","Luxembourgish Letzeburgesch","Ganda","Limburgish","Lingala","Lao","Lithuanian","Luba-Katanga","Latvian","Manx","Macedonian","Malagasy","Malay","Malayalam","Maltese","M\xc4ori","Marathi (Mar\xc4\xe1\xb9\xadh\xc4\xab)","Marshallese","Mongolian","Nauru","Navajo Navaho","Norwegian Bokm\xc3\xa5l","North Ndebele","Nepali","Ndonga","Norwegian Nynorsk","Norwegian","Nuosu","South Ndebele","Occitan","Ojibwe Ojibwa","Old Church Slavonic ","Oromo","Oriya","Ossetian Ossetic","Panjabi Punjabi","P\xc4li","Persian (Farsi)","Polish","Pashto Pushto","Portuguese","Quechua","Romansh","Kirundi","Romanian","Russian","Sanskrit","Sardinian","Sindhi","Northern Sami","Samoan","Sango","Serbian","Scottish Gaelic","Shona","Sinhala Sinhalese","Slovak","Slovene","Somali","Southern Sotho","South Azerbaijani","Spanish","Sundanese","Swahili","Swati","Swedish","Tamil","Telugu","Tajik","Thai","Tigrinya","Tibetan","Turkmen","Tagalog","Tswana","Tonga (Tonga Islands)","Turkish","Tsonga","Tatar","Twi","Tahitian","Uyghur Uighur","Ukrainian","Urdu","Uzbek","Venda","Vietnamese","Volap\xc3\xbck","Walloon","Welsh","Wolof","Western Frisian","Xhosa","Yiddish","Yoruba","Zhuang Chuang","Zulu"]},{name:"pages",label:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446:"},{name:"author",label:"\u0410\u0432\u0442\u043e\u0440:"},{name:"year",label:"\u0413\u043e\u0434 \u0438\u0437\u0434\u0430\u043d\u0438\u044f:"}],pe=(n(79),function(e){function a(){var e,n;Object(w.a)(this,a);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(n=Object(le.a)(this,(e=Object(ue.a)(a)).call.apply(e,[this].concat(r)))).state={isVisibleForm:!1},n.handleClick=function(e){e.preventDefault();var a=n.props,t=a.newBook;(0,a.onPostBook)(t)},n.handleVisibleForm=function(){var e=n.state.isVisibleForm;n.setState({isVisibleForm:!e})},n}return Object(de.a)(a,e),Object(_.a)(a,[{key:"render",value:function(){var e=this.state.isVisibleForm,a=this.props,n=a.newBook,t=a.onChangeNewBook,o=a.hasEmptyFields,i=a.isLoading;return r.a.createElement("div",{className:"add-books-block"},r.a.createElement("span",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043d\u0438\u0433\u0438"),r.a.createElement("button",{className:"btn btn_add-book btn_toggle-book-form",type:"button",onClick:this.handleVisibleForm},"+"),e&&r.a.createElement("div",{className:"fields"},me.map(function(e){return r.a.createElement(be,{key:e.name,onChangeNewBook:t,name:e.name,value:n[e.name],label:e.label,options:e.options,isDropDown:e.isDropDown})}),r.a.createElement("button",{className:"btn btn_add-book",onClick:this.handleClick,type:"submit",disabled:o||i},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))}}]),a}(t.Component)),he=function(e){function a(){var e,n;Object(w.a)(this,a);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(n=Object(le.a)(this,(e=Object(ue.a)(a)).call.apply(e,[this].concat(r)))).handleClick=function(e){e.preventDefault();var a=e.target.value;(0,n.props.onDeleteBook)(a)},n}return Object(de.a)(a,e),Object(_.a)(a,[{key:"render",value:function(){var e=this.props,a=e.id,n=e.title,t=e.author;return r.a.createElement("li",null,r.a.createElement("div",{className:"book-item"},r.a.createElement("div",{className:"book-item__cover"}),r.a.createElement("div",{className:"book-item__buttons"},r.a.createElement(s.b,{className:"details",to:"/books/".concat(a)},"Details"),r.a.createElement("button",{className:"btn btn_delete-book",type:"submit",value:a,onClick:this.handleClick},"Delete")),r.a.createElement("span",{className:"book-item__title"},n),r.a.createElement("span",{className:"book-item__author"},t)))}}]),a}(t.PureComponent),ke=(n(81),n(49)),ge=n.n(ke),fe=function(){return r.a.createElement("div",{className:"preloader-wrap"},r.a.createElement("img",{src:ge.a,alt:""}))},Oe=function(e){function a(){return Object(w.a)(this,a),Object(le.a)(this,Object(ue.a)(a).apply(this,arguments))}return Object(de.a)(a,e),Object(_.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.onGetBooks)()}},{key:"render",value:function(){var e=this.props,a=e.visibleBooks,n=e.onDeleteBook,o=e.error;return e.isLoading?r.a.createElement(fe,null):r.a.createElement(t.Fragment,null,r.a.createElement("span",{className:"title-book-list"},"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043d\u0438\u0433:"),r.a.createElement("ul",{className:"book-list"},o&&r.a.createElement("p",null,"\u041e\u0448\u0438\u0431\u043a\u0430! ",o),a.map(function(e){return r.a.createElement(he,{key:e.id,id:e.id,title:e.title,author:e.author,onDeleteBook:n})})))}}]),a}(t.PureComponent),ve=(n(82),function(e){function a(){var e,n;Object(w.a)(this,a);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(n=Object(le.a)(this,(e=Object(ue.a)(a)).call.apply(e,[this].concat(r)))).getQueryParams=function(e){return new URLSearchParams(e.search).get("search")},n.handleLocationChange=function(){var e=n.props,a=e.history,t=e.onChangeFilter,r=a.location,o=n.getQueryParams(r);o||(o=""),t(o),n.unsubscribe=a.listen(function(e){var a=n.getQueryParams(e);a||(a=""),t(a)})},n.handleChange=function(e){var a=n.props.history,t=e.target.value;t?a.push({search:"search=".concat(t)}):a.push("/")},n}return Object(de.a)(a,e),Object(_.a)(a,[{key:"componentDidMount",value:function(){this.handleLocationChange()}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var e=this.props.value;return r.a.createElement(t.Fragment,null,r.a.createElement("header",null,r.a.createElement("h1",{className:"header-title"},"Simple BookList")),r.a.createElement("div",{className:"search-field"},r.a.createElement("input",{className:"search-input",onChange:this.handleChange,type:"search",value:e,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430"})))}}]),a}(t.PureComponent)),Ee=Object(se.f)(ve),ye=(n(83),function(e){var a=e.getBooks,n=e.newBook,t=e.changeNewBook,o=e.postBook,i=e.hasEmptyFields,c=e.changeFilter,s=e.visibleBooks,l=e.deleteBook,u=e.filter,d=e.error,b=e.isLoading;return r.a.createElement("div",{className:"wrap"},r.a.createElement(Ee,{onChangeFilter:c,value:u}),r.a.createElement(pe,{newBook:n,onChangeNewBook:t,onPostBook:o,hasEmptyFields:i,isLoading:b}),r.a.createElement(Oe,{visibleBooks:s,onDeleteBook:l,onGetBooks:a,error:d,isLoading:b}))}),Be=n(23),je=function(e){return e.filter},Se=function(e){return e.newBook},Ce=Object(Be.a)([je,function(e){return e.books}],function(e,a){return e&&""!==e?a.filter(function(a){return a.title.indexOf(e)>-1}):a}),we=Object(Be.a)(Se,function(e){return Object.keys(e).some(function(a){return""===e[a]})}),_e=Object(Be.a)(Se,function(e){return e}),Ne=Object(Be.a)(je,function(e){return e}),Te=Object(Be.a)(function(e){return e.book},function(e){return e}),Le=Object(Be.a)(function(e){return e.error},function(e){return e}),xe=Object(Be.a)(function(e){return e.isLoading},function(e){return e}),Ke=Object(c.b)(function(e){return{newBook:_e(e),filter:Ne(e),hasEmptyFields:we(e),visibleBooks:Ce(e),isLoading:xe(e),error:Le(e)}},{changeNewBook:function(e,a){return{type:"CHANGE_NEW_BOOK",payload:{name:e,value:a}}},postBook:function(e){return{type:f,payload:e}},deleteBook:function(e){return{type:g,payload:e}},getBooks:function(){return{type:k}},changeFilter:function(e){return{type:"CHANGE_FILTER",payload:e}}})(ye),Fe=(n(84),function(){return r.a.createElement("div",{className:"not-found"},r.a.createElement("p",{className:"not-found__text"},"\u042d\u043b\u0435\u043c\u0435\u043d\u0442 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d! \u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f ",r.a.createElement(s.b,{to:"/"},"\u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e")))}),Ae=(n(85),function(e){function a(){var e,n;Object(w.a)(this,a);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return(n=Object(le.a)(this,(e=Object(ue.a)(a)).call.apply(e,[this].concat(o)))).state={editableField:""},n.inputFocusRef=r.a.createRef(),n.handleDblClick=function(e){var a=e.target.attributes.name.value;n.setState({editableField:a})},n.handleKeyDown=function(e){n.handleInputEdit(e)},n.handleBlur=function(e){n.handleInputEdit(e)},n.handleInputEdit=function(e){var a=n.state.editableField,t=n.props,r=t.putBook,o=t.book;e.keyCode&&13!==e.keyCode||o[a].length&&(r(o),n.setState({editableField:""}))},n.handleChange=function(e){var a=n.state.editableField;(0,n.props.changeBookProperty)(a,e.target.value)},n}return Object(de.a)(a,e),Object(_.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.match;(0,e.getBook)(a.params.id)}},{key:"componentDidUpdate",value:function(){this.state.editableField.length&&this.inputFocusRef.current.focus()}},{key:"render",value:function(){var e=this,a=this.state.editableField,n=this.props,t=n.book,o=n.isLoading,i=n.error;return o?r.a.createElement(fe,null):t?r.a.createElement("div",{className:"book-details"},r.a.createElement("div",{className:"book-item__cover book-item__cover_details"}),r.a.createElement("div",{className:"books-wrap"},i&&r.a.createElement("p",null,"\u041e\u0448\u0438\u0431\u043a\u0430! ",i),me.map(function(n){return r.a.createElement("div",{className:"book",key:n.name},r.a.createElement("span",{className:"book__title"},n.label),a===n.name?r.a.createElement("input",{className:"book__edit",type:"text",ref:e.inputFocusRef,value:t[n.name],onChange:e.handleChange,onBlur:e.handleBlur,onKeyDown:e.handleKeyDown}):r.a.createElement("span",{className:"book__value",name:n.name,onDoubleClick:e.handleDblClick},t[n.name]))}),r.a.createElement(s.b,{className:"link link_book",to:"/"}," \u041d\u0430\u0437\u0430\u0434"))):r.a.createElement(Fe,null)}}]),a}(t.PureComponent)),Pe=Object(c.b)(function(e){return{book:Te(e),error:Le(e),isLoading:xe(e)}},{changeBookProperty:function(e,a){return{type:"CHANGE_BOOK_PROPERTY",payload:{editableField:e,text:a}}},putBook:function(e){return{type:O,payload:e}},getBook:function(e){return{type:v,payload:e}}})(Ae),De=r.a.createElement(se.c,null,r.a.createElement(se.a,{path:"/",component:Ke,exact:!0}),r.a.createElement(se.a,{path:"/books/:id",component:Pe,exact:!0}),r.a.createElement(se.a,{component:Fe}));i.a.render(r.a.createElement(s.a,null,r.a.createElement(c.a,{store:ce},De)),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.8107b486.chunk.js.map