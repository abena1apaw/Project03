(this.webpackJsonpproject03=this.webpackJsonpproject03||[]).push([[0],{27:function(e,t,a){},44:function(e,t,a){e.exports=a(59)},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(21),l=a.n(r),c=(a(18),a(27),function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null," About My Todo App"),o.a.createElement("p",null," This is a react app."),o.a.createElement("p",null," ","The parent component or the root component is called the TodoApp, this holds all the child components, namely the header, AddTodo, Todos, TodoItem."," "),o.a.createElement("p",null," ","The header component renders the header contents, the AddTodo component accepts the user inputs, the Todos renders the todo list and the TodoItem component renders each of the to do items."),o.a.createElement("h1",null," About My Meme Generator"),o.a.createElement("p",null," This is also a react app."),o.a.createElement("p",null," ","The parent component or the root component is called the MemeApp, this holds all the child components, memeheader, and MemeGenerator"),o.a.createElement("p",null," ","The memeheader component renders the header contents, the MemeGenerator component accepts the user inputs and holds state and helps to fetch data from an endpoint url"),o.a.createElement("p",null,"The app accepts some top and bottom text and generates a new image anytime the Generate Meme button is clicked."))}),m=function(){return o.a.createElement("header",{style:{backgroundColor:"#0000CD",color:"#fff",padding:"10px 15px"}},o.a.createElement("h1",{style:{fontSize:"25px",lineHeight:"1.447em",margin:"0px"}},"Abena's Meme Generator"))},i=a(22),s=a(8),d=a(9),p=a(10),u=a(11),h=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={topText:"",bottomText:"",randomImage:"https://i.imgflip.com/26am.jpg",allMemeImgs:[]},e.handleChange=function(t){e.setState(Object(i.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=Math.floor(Math.random()*e.state.allMemeImgs.length),n=e.state.allMemeImgs[a].url;e.setState({randomImage:n})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){return e.setState({allMemeImgs:t.data.memes})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("form",{onSubmit:this.handleSubmit,className:"meme-form"},o.a.createElement("input",{className:"meme-input",type:"text",name:"topText",placeholder:"Add Top Text",value:this.state.topText,onChange:this.handleChange}),o.a.createElement("input",{className:"meme-input",type:"text",name:"bottomText",placeholder:"Add Bottom Text",value:this.state.bottomText,onChange:this.handleChange}),o.a.createElement("button",{className:"meme-button"},"Generate Meme")),o.a.createElement("div",{className:"meme"},o.a.createElement("img",{src:this.state.randomImage,alt:""}),o.a.createElement("h2",{className:"top"},this.state.topText),o.a.createElement("h2",{className:"bottom"},this.state.bottomText)))}}]),a}(n.Component),f=function(){return o.a.createElement("div",null,o.a.createElement(m,null),o.a.createElement(h,null))},b=a(62),E=a(63),g=a(17),v=function(){return o.a.createElement("div",null,o.a.createElement(b.a,{collapseOnSelect:!0,expand:"sm",bg:"dark",variant:"dark"},o.a.createElement(b.a.Brand,{href:"#home"},"Abena's Project 3"),o.a.createElement(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),o.a.createElement(b.a.Collapse,{id:"responsive-navbar-nav"},o.a.createElement(E.a,{className:"mr-auto"},o.a.createElement(g.b,{to:"./About"},o.a.createElement(E.a.Link,{href:"#About"},"About")),o.a.createElement(g.b,{to:"./TodoApp"},o.a.createElement(E.a.Link,{href:"#TodoApp"},"To Do List")),o.a.createElement(g.b,{to:"./MemeApp"},o.a.createElement(E.a.Link,{href:"#MemeApp"},"Meme Generator"))))))},T=a(31),y=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props.todo,a=t.completed,n=t.id,r=t.title;return o.a.createElement("li",{className:"todo-item"},o.a.createElement("input",{type:"checkbox",checked:a,onChange:function(){return e.props.handleChange(n)}}),o.a.createElement("button",{className:"btn-style",onClick:function(){return e.props.deleteTodo(n)}},"X"),o.a.createElement("span",{style:a?{fontStyle:"italic",color:"#0f0f0f",textDecoration:"line-through"}:null},r))}}]),a}(o.a.Component),j=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.props.todos.map((function(t){return o.a.createElement(y,{key:t.id,todo:t,handleChange:e.props.handleChange,deleteTodo:e.props.deleteTodo})})))}}]),a}(o.a.Component);var A=function(){return o.a.createElement("header",{style:{backgroundColor:"#0000CD",color:"#fff",padding:"10px 15px"}},o.a.createElement("h1",{style:{fontSize:"25px",lineHeight:"1.447em",margin:"0px"}},"Abena's Todo App"))},O=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={title:""},e.onChange=function(t){e.setState(Object(i.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.props.addTodo(e.state.title),e.setState({title:""})},e}return Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement("form",{className:"form-container",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",placeholder:"Add Todo...",className:"input-text",name:"title",value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"Submit",className:"input-submit"}))}}]),a}(n.Component),x=a(20),C=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:[{id:Object(x.v4)(),title:"Go to Gym",completed:!0},{id:Object(x.v4)(),title:"Meditation",completed:!1},{id:Object(x.v4)(),title:"Go to Work",completed:!1}]},e.handleChange=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.deleteTodo=function(t){e.setState({todos:Object(T.a)(e.state.todos.filter((function(e){return e.id!==t})))})},e.addTodo=function(t){if("undefined"===typeof e.state.todos.find((function(e){return e.title===t}))){var a={id:Object(x.v4)(),title:t,completed:!1};e.setState({todos:[].concat(Object(T.a)(e.state.todos),[a])})}else alert("Implement a proper error message for duplication")},e}return Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(A,null),o.a.createElement(O,{addTodo:this.addTodo}),o.a.createElement(j,{todos:this.state.todos,handleChange:this.handleChange,deleteTodo:this.deleteTodo}))}}]),a}(o.a.Component),k=a(14),M=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(g.a,null,o.a.createElement(v,null),o.a.createElement(k.c,null,o.a.createElement(k.a,{path:"/About",component:c},o.a.createElement(c,null)),o.a.createElement(k.a,{path:"/TodoApp",component:C},o.a.createElement(C,null)),o.a.createElement(k.a,{path:"/MemeApp",component:f},o.a.createElement(f,null)))))};a(58),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),l.a.render(o.a.createElement(M,null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.fe5b5ae0.chunk.js.map