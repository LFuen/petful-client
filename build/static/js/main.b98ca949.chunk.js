(this["webpackJsonppetful-client"]=this["webpackJsonppetful-client"]||[]).push([[0],{23:function(e,t,n){e.exports=n(40)},28:function(e,t,n){},29:function(e,t,n){e.exports=n.p+"static/media/adoptDog.75e3a121.png"},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){e.exports=n.p+"static/media/congrats.11133177.png"},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(19),c=n.n(o),u=n(12),s=n(22),l=n(2),i=n(3),h=n(5),m=n(4),d=n(6),f=a.a.createContext({users:[],queue:null,userName:"",currentCat:{},currentDog:{},adopted:[],error:null,setUsers:function(){},clearUsers:function(){},setQueue:function(){},clearQueue:function(){},setUserName:function(){},clearUserName:function(){},setCurrentCat:function(){},clearCurrentCat:function(){},setCurrentDog:function(){},clearCurrentDog:function(){},setAdopted:function(){},clearAdopted:function(){},setError:function(){},clearError:function(){},randomCatDog:function(){},cycleList:function(){}}),p=f,E=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={users:[],queue:null,userName:"",currentCat:{},currentDog:{},adopted:[],error:null},n.setUsers=function(e){n.setState({users:e})},n.clearUsers=function(){n.setState({users:[]})},n.setQueue=function(e){n.setState({queue:e})},n.clearQueue=function(){n.setState({queue:null})},n.setUserName=function(e){n.setState({userName:e})},n.clearUserName=function(){n.setState({userName:""})},n.setCurrentCat=function(e){n.setState({currentCat:e})},n.clearCurrentCat=function(){n.setState({currentCat:{}})},n.setCurrentDog=function(e){n.setState({currentDog:e})},n.clearCurrentDog=function(){n.setState({currentDog:{}})},n.setError=function(e){console.log(e),n.setState({error:e})},n.clearError=function(){n.setState({error:null})},n.setAdopted=function(e){n.setState({adopted:[].concat(Object(s.a)(n.state.adopted),[e])})},n.clearAdopted=function(){n.setState({adopted:[]})},n.randomCatDog=function(){Math.floor(100*Math.random())<50?n.handleAdoptCat():n.handleAdoptDog()},n.cycleList=function(){n.context.userName!==n.context.queue.first.value&&setTimeout((function(){this.randomCatDog()}),5e3)},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e={users:this.state.users,queue:this.state.queue,userName:this.state.userName,currentCat:this.state.currentCat,currentDog:this.state.currentDog,adopted:this.state.adopted,error:this.state.error,setUsers:this.setUsers,clearUsers:this.clearUsers,setQueue:this.setQueue,clearQueue:this.clearQueue,setUserName:this.setUserName,clearUserName:this.clearUserName,setCurrentCat:this.setCurrentCat,clearCurrentCat:this.clearCurrentCat,setCurrentDog:this.setCurrentDog,clearCurrentDog:this.clearCurrentDog,setAdopted:this.setAdopted,clearAdopted:this.clearAdopted,setError:this.setError,clearError:this.clearError,randomCatDog:this.randomCatDog,cycleList:this.cycleList};return a.a.createElement(f.Provider,{value:e},this.props.children)}}]),t}(r.Component),g=n(10),C={REACT_APP_API_BASE:"https://fuentes-petful.herokuapp.com/"},v={postUser:function(e){return fetch("".concat(C.API_ENDPOINT,"/users"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:e})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},getUsers:function(){return fetch("".concat(C.API_ENDPOINT,"/users"),{method:"GET",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))}},b=(n(28),function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).handleSubmit=function(e){e.preventDefault(),n.context.clearError(),n.context.clearUserName();var t=document.getElementById("name").value;return n.context.setUserName(t),v.postUser(t).then((function(e){var t=n.props,r=t.location,a=t.history,o=(r.state||{}).from||"/adopt";a.push(o)}))},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("main",{className:"dashboard-fp"},a.a.createElement("div",null,a.a.createElement("h1",null,"Petful"),a.a.createElement("img",{className:"front",src:n(29)}),a.a.createElement("h4",null,"Join the queue, get matched with a friend. Yes, it's that easy!"),a.a.createElement("h4",null,"Let's check out pets available for adoption by clicking the button below!"),a.a.createElement(u.b,{to:"/adopt"},a.a.createElement("button",{className:"adopt"},"Get Matched")," "),a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("h4",null,"Or, add your name below to get added to the queue and take home a furry friend today!"),a.a.createElement("input",{"aria-label":"name",type:"text",name:"name",id:"name",placeholder:"What's Your Name?",required:!0}),a.a.createElement("br",null),a.a.createElement("button",{type:"submit"},"Get in Line"))))}}]),t}(r.Component));b.contextType=p;var j=b,y={getCat:function(){return fetch("".concat(C.API_ENDPOINT,"/cats"),{method:"GET",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},deleteCat:function(){return fetch("".concat(C.API_ENDPOINT,"/cats"),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))}},O={getDog:function(){return fetch("".concat(C.API_ENDPOINT,"/dogs"),{method:"GET",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},deleteDog:function(){return fetch("".concat(C.API_ENDPOINT,"/dogs"),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))}},D=(n(35),function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"queue-card"},a.a.createElement("ul",null,a.a.createElement("h2",null,"User Queue"),a.a.createElement("li",null,this.props.first),a.a.createElement("li",null,this.props.second),a.a.createElement("li",null,this.props.third)))}}]),t}(r.Component)),x=(n(36),function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.animal,n=e.handleAdoptClick,r=!1;return this.context.queue&&(r=this.context.userName===this.context.queue.first.value),a.a.createElement("div",{className:"PetInfo"},a.a.createElement("img",{src:t.imageURL,alt:t.imageDescription}),a.a.createElement("h3",null,"Pet Name: ",t.name),a.a.createElement("p",null,t.story),a.a.createElement("ul",null,a.a.createElement("li",null,"Gender: ",t.gender),a.a.createElement("li",null,"Age: ",t.age),a.a.createElement("li",null,"Breed: ",t.breed),a.a.createElement("li",null,"Description: ",t.description)),a.a.createElement("button",{type:"button",onClick:n,disabled:!r},"Adopt"))}}]),t}(r.Component));x.contextType=p;n(37);var N=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.imgSrc,r=e.name,o=e.owner;return a.a.createElement("div",{className:"congrats"},a.a.createElement("img",{className:"yay",src:n(38)}),a.a.createElement("img",{className:"owned",src:t,alt:"pet"}),a.a.createElement("p",null,a.a.createElement("b",null,"Pet Name: ",r)),a.a.createElement("p",null,a.a.createElement("b",null,"Owner: ",o)),a.a.createElement("p",null,a.a.createElement("b",null,"Congrats on your new pal!!")))}}]),t}(r.Component),A=function e(t){Object(l.a)(this,e),this.value=t,this.next=null},k=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Object(l.a)(this,e),this.first=t,this.last=n}return Object(i.a)(e,[{key:"enqueue",value:function(e){var t=new A(e);null===this.first&&(this.first=t),this.last&&(this.last.next=t),this.last=t}},{key:"dequeue",value:function(){if(null!==this.first){var e=this.first;return this.first=this.first.next,e===this.last&&(this.last=null),e.value}}},{key:"requeue",value:function(){if(null!==this.first){var e=this.dequeue();return this.enqueue(e),e}}}]),e}(),q=(n(39),function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).cycleList=function(){n.context.userName!==n.context.queue.first.value&&(Math.floor(100*Math.random())<50?n.handleAdoptCat():n.handleAdoptDog())},n.handleAdoptCat=function(){return y.deleteCat().then((function(e){var t=n.context.queue.requeue();e.owner=t,n.context.setAdopted(e)})).then((function(e){y.getCat().then((function(e){return n.context.setCurrentCat(e)})),n.setState({nowAdopting:n.context.queue.first.value})}))},n.handleAdoptDog=function(){return O.deleteDog().then((function(e){var t=n.context.queue.requeue();e.owner=t,n.context.setAdopted(e)})).then((function(e){O.getDog().then((function(e){return n.context.setCurrentDog(e)})),n.setState({nowAdopting:n.context.queue.first.value})}))},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.context.clearError(),this.context.clearQueue(),this.context.clearCurrentCat(),this.context.clearCurrentDog(),this.interval=setInterval(this.cycleList.bind(this),15e3),Promise.all([y.getCat(),O.getDog(),v.getUsers()]).then((function(t){e.context.setCurrentCat(t[0]),e.context.setCurrentDog(t[1]);var n=new k;t[2].forEach((function(e){return n.enqueue(e)})),e.context.setQueue(n)})).catch((function(e){return console.error(e)}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"renderQueue",value:function(){return a.a.createElement(D,{first:this.context.queue.first.value,second:this.context.queue.first.next.value,third:this.context.queue.first.next.next.value})}},{key:"renderCat",value:function(){return a.a.createElement(x,{animal:this.context.currentCat,animalType:"cat",handleAdoptClick:this.handleAdoptCat})}},{key:"renderDog",value:function(){return a.a.createElement(x,{animal:this.context.currentDog,animalType:"dog",handleAdoptClick:this.handleAdoptDog})}},{key:"render",value:function(){var e=this.context.adopted.map((function(e,t){return a.a.createElement("div",{className:"adopted",key:t},a.a.createElement(N,{imgSrc:e.imageURL,name:e.name,owner:e.owner}))}));return a.a.createElement("div",{className:"adoption-page"},a.a.createElement("h1",null,"Give Them A Home"),this.context.queue?this.renderQueue():"Loading Pets! ...",a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("h3",null,"Current Cat"),this.renderCat()),a.a.createElement("div",null,a.a.createElement("h3",null,"Current Dog"),this.renderDog())),a.a.createElement("div",null,a.a.createElement("hr",null),a.a.createElement("h3",null,a.a.createElement("b",null,"Adopted")),e))}}]),t}(r.Component));q.contextType=p;var P=q,U=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("main",{role:"main",className:"App-main"},a.a.createElement(g.c,null,a.a.createElement(g.a,{exact:!0,path:"/",component:j}),a.a.createElement(g.a,{path:"/adopt",component:P}))))}}]),t}(r.Component);c.a.render(a.a.createElement(u.a,null,a.a.createElement(E,null,a.a.createElement(U,null))),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.b98ca949.chunk.js.map