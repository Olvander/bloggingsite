(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(24)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(1),o=a.n(i),l=(a(17),a(2)),c=a(3),s=a(6),d=a(4),m=a(5),u=(a(18),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={component:e.component},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"firstDiv"},this.props.component)}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(19);var h=a(8),E=a.n(h),v=a(9),g=a(7),b=(a(21),a(22),function(e){function t(e){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"toBlogs",value:function(){o.a.render(r.a.createElement(p,null),document.getElementById("firstDiv"))}},{key:"toHomePage",value:function(){o.a.render(r.a.createElement(y,null),document.getElementById("firstDiv"))}},{key:"componentDidMount",value:function(){var e=document.getElementById("to-blogs"),t=document.getElementById("to-homepage");e.addEventListener("click",this.toBlogs.bind(this)),t.addEventListener("click",this.toHomePage.bind(this))}},{key:"render",value:function(){return r.a.createElement("div",{id:"formsDiv"},r.a.createElement("div",{id:"form-div"},r.a.createElement("div",{id:"left-div-form"},r.a.createElement("h1",{id:"heading"},"Write your blog post on this page"),r.a.createElement("form",{action:"http://localhost:8080/blog/ready",id:"form",method:"post"},r.a.createElement("div",{className:"label"}," Your name: "),r.a.createElement("input",{type:"text",id:"name-input-field",name:"name",required:"true"}),r.a.createElement("br",null),r.a.createElement("div",{className:"label"},"Blog post title: "),r.a.createElement("input",{type:"text",id:"title-input-field",name:"title",required:"true"}),r.a.createElement("div",{className:"label"},"Choose a category:",r.a.createElement("select",{name:"category",id:"category-chooser",size:"1"},r.a.createElement("option",null,"Document Management"),r.a.createElement("option",null,"Metadata"),r.a.createElement("option",null,"Version Control"),r.a.createElement("option",null,"Other"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"label"},"Write your post here:",r.a.createElement("br",null)),r.a.createElement("textarea",{id:"blog-post-area",name:"blog-post",required:"true"}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit",id:"form-submit"}))),r.a.createElement("div",{className:"right-div-main"},r.a.createElement("div",{id:"to-homepage"},"TO HOMEPAGE"),r.a.createElement("div",{id:"to-blogs"},"TO BLOGS"))))}}]),t}(n.Component)),f=(a(23),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={title:"",author:"",date:"",body:"",category:"",backendUrl:a.props.backendUrl},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"toBlogs",value:function(){o.a.render(r.a.createElement(p,null),document.getElementById("firstDiv"))}},{key:"toHomePage",value:function(){o.a.render(r.a.createElement(y,null),document.getElementById("firstDiv"))}},{key:"componentDidMount",value:function(){var e=Object(v.a)(E.a.mark(function e(){var t,a,n,r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.backendUrl,e.next=3,fetch(t).then(function(e){return e.json()}).then(function(e){return e});case 3:return a=e.sent,e.next=6,this.setState({title:a.title,author:a.author,date:a.date,body:a.body,category:a.category});case 6:n=document.getElementById("to-blogs"),r=document.getElementById("to-homepage"),n.addEventListener("click",this.toBlogs.bind(this)),r.addEventListener("click",this.toHomePage.bind(this));case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"container1"},r.a.createElement("div",{className:"left-div"},r.a.createElement("h1",{className:"blogTitle"},this.state.title),r.a.createElement("div",{className:"blog-body"},this.state.body)),r.a.createElement("div",{className:"a"},r.a.createElement("div",{className:"right-div"},r.a.createElement("h3",{className:"metaData"},"Category: ",this.state.category,r.a.createElement("br",null),"Written by: ",this.state.author,r.a.createElement("br",null)," ",r.a.createElement("br",null),"on ",this.state.date)),r.a.createElement("div",{className:"b"},r.a.createElement("div",{id:"to-homepage"},"TO HOMEPAGE"),r.a.createElement("div",{id:"to-blogs"},"TO BLOGS"))))}}]),t}(n.Component)),p=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).allEntries=[],a.state={data:[],entries:a.allEntries},a.doIt=a.doIt.bind(Object(g.a)(a)),a.toPosting=a.toPosting.bind(Object(g.a)(a)),a.toHomePage=a.toHomePage.bind(Object(g.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"toPosting",value:function(){o.a.render(r.a.createElement(b,null),document.getElementById("firstDiv"))}},{key:"toHomePage",value:function(){o.a.render(r.a.createElement(y,null),document.getElementById("firstDiv"))}},{key:"renderBlogPost",value:function(e){o.a.render(r.a.createElement(f,{backendUrl:e}),document.getElementById("firstDiv"))}},{key:"doIt",value:function(){for(var e=0;e<this.state.data.length;e++){var t=this.state.data[e].url;this.allEntries.push(r.a.createElement("div",{className:"titles",key:"title"+e},r.a.createElement("a",{onClick:this.renderBlogPost.bind(this,t),style:{cursor:"pointer"}},this.state.data[e].title))),this.allEntries.push(r.a.createElement("div",{className:"category",key:"category"+e},"Category: ",this.state.data[e].category)),this.allEntries.push(r.a.createElement("div",{className:"authors",key:"author"+e},"By: ",this.state.data[e].author)),this.allEntries.push(r.a.createElement("div",{className:"dates",key:"date"+e},"Date: ",this.state.data[e].date))}this.setState({entries:this.allEntries})}},{key:"componentDidMount",value:function(){var e=Object(v.a)(E.a.mark(function e(){var t,a,n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:8080/blogs",e.next=3,fetch("http://localhost:8080/blogs").then(function(e){return e.json()}).then(function(e){return e});case 3:return t=e.sent,this.setState({data:t}),e.next=7,this.doIt();case 7:a=document.getElementById("to-writing-posts"),n=document.getElementById("to-homepage"),a.addEventListener("click",this.toPosting),n.addEventListener("click",this.toHomePage);case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return void 0!==this.state.data[0]&&void 0!==this.state.entries[0]?r.a.createElement("div",{id:"blogsDiv"},r.a.createElement("div",{className:"container0"},r.a.createElement("div",{className:"left-div-main"},r.a.createElement("div",{className:"text-body-main"},r.a.createElement("h1",{id:"welcome-heading"},"List of All Blog Entries"),r.a.createElement("div",null,this.state.entries))),r.a.createElement("div",{className:"right-div-main"},r.a.createElement("div",{id:"to-homepage"},"TO HOMEPAGE"),r.a.createElement("div",{id:"to-writing-posts"},"WRITE A POST")))):r.a.createElement("div",null)}}]),t}(n.Component),y=function(e){function t(e){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"toBlogs",value:function(){o.a.render(r.a.createElement(p,null),document.getElementById("firstDiv"))}},{key:"toPosts",value:function(){o.a.render(r.a.createElement(b,null),document.getElementById("firstDiv"))}},{key:"componentDidMount",value:function(){var e=document.getElementById("to-blog-posts"),t=document.getElementById("to-writing-posts");e.addEventListener("click",this.toBlogs.bind(this)),t.addEventListener("click",this.toPosts.bind(this))}},{key:"render",value:function(){return r.a.createElement("div",{id:"homepageDiv"},r.a.createElement("div",{className:"container0"},r.a.createElement("div",{className:"left-div-main"},r.a.createElement("h1",{id:"welcome-heading"},"Welcome to Blogging Site hosted by Olli P"),r.a.createElement("div",{className:"text-body-main"},"You may add blog posts to this site and view posted blog posts by clicking on the links on the right.",r.a.createElement("br",null),r.a.createElement("br",null),"This website is centered mainly around document management. There are currently 4 categories you can choose to write on.",r.a.createElement("br",null),r.a.createElement("br",null),"The categories are: Document Management, Metadata, Version Control and Other.")),r.a.createElement("div",{className:"right-div-main"},r.a.createElement("div",{id:"to-blog-posts"},"TO BLOG POSTS"),r.a.createElement("div",{id:"to-writing-posts"},"WRITE A POST"))))}}]),t}(n.Component);if(document.referrer.match("http://localhost:8080/blog/get/.+")){var O="http://localhost:8080/blogs/"+document.referrer.substring(31);o.a.render(r.a.createElement(u,{component:r.a.createElement(f,{backendUrl:O})}),document.getElementById("root"))}else o.a.render(r.a.createElement(u,{component:r.a.createElement(y,null)}),document.getElementById("root"));"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.e325143d.chunk.js.map