(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{340:function(e,t,a){"use strict";a.r(t);a(41);var r=a(0),i=a.n(r),n=a(112),s=a(4),l=a(31),c=a.n(l),m=a(328),o=a(11),d=a.n(o),_=a(1);a(371);var u=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this)._createTimer=function(){a._removeTimer(),a.timer=setInterval(a._tiktok,a.props.interval)},a._removeTimer=function(){a.timer&&clearInterval(a.timer)},a._tiktok=function(e){var t=a.state.curr,r=a.props.list.length;void 0!==e&&e===t||(a._createTimer(),a.setState({curr:void 0!==e?e:(t+1)%r}))},a.state={curr:0},a.timer=null,a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var n=r.prototype;return n.componentDidMount=function(){this._createTimer()},n.componentDidUpdate=function(e){e.list.length!==this.props.list.length&&this._createTimer()},n.componentWillUnmount=function(){this._removeTimer()},n.render=function(){var e=this,t=this.state.curr,a=this.props.list;return i.a.createElement("div",{className:"slider"},i.a.createElement("div",{className:"slider__slides",style:{width:100*a.length+"%",transform:"translateX(-"+100/a.length*t+"%)"}},a.map((function(e){return i.a.createElement("div",{key:Object(_.a)(e,"id"),className:"slider__slide__wrapper",style:{width:100/a.length+"%"}},i.a.createElement("div",{className:"slider__slide"},i.a.createElement(s.a,{to:Object(_.a)(e,"fields.slug")},i.a.createElement(c.a,{fluid:Object(_.a)(e,"frontmatter.cover.childImageSharp.fluid"),alt:Object(_.a)(e,"frontmatter.title")}))),i.a.createElement("div",{className:"slider__slide__title"},i.a.createElement(s.a,{to:Object(_.a)(e,"fields.slug")},Object(_.a)(e,"frontmatter.title"))))}))),i.a.createElement("ul",{className:"slider__dots"},a.map((function(a,r){return i.a.createElement("li",{key:Object(_.a)(a,"id"),className:d()(["slider__dot",r===t&&"slider__dot--active"]),onClick:function(){return e._tiktok(r)}})}))))},r}(r.PureComponent);u.defaultProps={auto:!0,interval:7e3,list:[]};var p=u,v=a(329),E=a(330),h=a(50);a(372);function g(e){var t=e.list,a=e.cover;return i.a.createElement("div",{className:"index-page__author-list"},i.a.createElement("div",{className:"index-page__author-list__header"},i.a.createElement("div",{className:"index-page__author-list__title"},"Popular Authors"),i.a.createElement(c.a,{className:"index-page__author-list__cover",fluid:Object(_.a)(a,"childImageSharp.fluid")})),i.a.createElement("div",{className:"index-page__author-list__content"},t.map((function(e){return i.a.createElement(s.a,{key:e.id,to:"/author/"+e.id},i.a.createElement("div",{className:"author"},i.a.createElement("img",{className:"author__avatar",src:Object(_.a)(e,"avatar.childImageSharp.resize.src"),alt:e.id}),i.a.createElement("div",{className:"author__wrapper"},i.a.createElement("div",{className:"author__title"},e.nickname),i.a.createElement("div",{className:"author__desc"},e.slogan))))}))))}function f(e){var t=e.list,a=e.cover;return i.a.createElement("div",{className:"index-page__series-list"},i.a.createElement("div",{className:"index-page__series-list__header"},i.a.createElement("div",{className:"index-page__series-list__title"},"Popular Series"),i.a.createElement(c.a,{className:"index-page__series-list__cover",fluid:Object(_.a)(a,"childImageSharp.fluid")})),i.a.createElement("div",{className:"index-page__series-list__content"},t.map((function(e){return i.a.createElement(s.a,{key:e.id,to:"/series/"+e.id},i.a.createElement("div",{className:"series"},i.a.createElement("img",{className:"series__cover",src:Object(_.a)(e,"cover.childImageSharp.resize.src"),alt:e.id}),i.a.createElement("div",{className:"series__wrapper"},i.a.createElement("div",{className:"series__title"},e.name),i.a.createElement("div",{className:"series__desc"},e.description))))}))))}function N(e){var t=e.list;return i.a.createElement("div",{className:"index-page__tag-list"},i.a.createElement("div",{className:"index-page__tag-list__header"},"Popular Tags"),i.a.createElement("div",{className:"index-page__tag-list__content"},t.map((function(e,t){return i.a.createElement("div",{className:"tag",key:e.id},i.a.createElement("div",{className:"index"},t+1<10?"0"+(t+1):t+1),i.a.createElement("div",{className:"title"},i.a.createElement(s.a,{to:"/tag/"+e.id},e.name)))}))))}a.d(t,"AuthorList",(function(){return g})),a.d(t,"SeriesList",(function(){return f})),a.d(t,"TagList",(function(){return N})),a.d(t,"query",(function(){return b}));t.default=function(e){var t=e.data,a=e.pageContext,r=(Object(_.a)(t,"posts.edges")||[]).map((function(e){return e.node}))||[],s=(Object(_.a)(t,"series.edges")||[]).map((function(e){return e.node}))||[],l=(Object(_.a)(t,"authors.edges")||[]).map((function(e){return e.node}))||[],c=(Object(_.a)(t,"tags.edges")||[]).map((function(e){return e.node}))||[];return i.a.createElement(m.a,{className:"index-page"},!a.prev&&i.a.createElement(p,{list:r.slice(0,1)}),i.a.createElement("div",{className:"index-page__separator"}),i.a.createElement("div",{className:"index-page__title"},"FEATURED"),i.a.createElement(n.a,{query:"(max-width: 780px)"},(function(e){return e?i.a.createElement(h.b,{className:"index-page__parallel"},i.a.createElement(h.b.Line,{style:{width:"100%"}},r.slice(1).map((function(e){return i.a.createElement(E.a,{key:e.id,post:e})})),i.a.createElement(f,{list:s,cover:t.seriesCover}),i.a.createElement(N,{list:c}),i.a.createElement(g,{list:l,cover:t.authorsCover}),i.a.createElement(v.a,a))):i.a.createElement(h.b,{className:"index-page__parallel",offset:{top:65,bottom:0}},i.a.createElement(h.b.Line,{style:{marginRight:64}},r.slice(1).map((function(e){return i.a.createElement(E.a,{key:e.id,post:e})})),i.a.createElement(v.a,a)),i.a.createElement(h.b.Line,{width:328},i.a.createElement(f,{list:s,cover:t.seriesCover}),i.a.createElement(N,{list:c}),i.a.createElement(g,{list:l,cover:t.authorsCover})))})))};var b="2867737188"}}]);
//# sourceMappingURL=component---src-templates-index-page-js-7be8be6aaca82c961750.js.map