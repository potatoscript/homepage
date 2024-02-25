window.v0Polyfill=(function(e,t,n,r){
	"use strict";
	function rt(e,t){
		for(var n=0,r=e.length;n<r;n++)
			dt(e[n],t)
	}
	function it(e){
		for(var t=0,n=e.length,r;t<n;t++)
			r=e[t],nt(r,b[ot(r)])
	}
	function st(e){
		return function(t){
			j(t)&&(dt(t,e),
			rt(t.querySelectorAll(w),e))
		}
	}
	function ot(e){
		var t=e.getAttribute("potato"),
		n=e.nodeName.toUpperCase(),
		r=S.call(y,t?v+t.toUpperCase():d+n);
		return t&&-1<r&&!ut(n,t)?-1:r
	}
	function at(e){
		var t=e.currentTarget,
		n=e.attrChange,
		r=e.attrName,
		i=e.target;
		Q&&(!i||i===t)&&
		t.attributeChangedCallback&&
		r!=="style"&&
		t.attributeChangedCallback(r,n===e[a]?
		null:e.prevValue,
		n===e[l]?null:e.newValue)
	}
	function lt(e){
		K&&(K=!1,e.currentTarget.removeEventListener(h,lt)),
		rt(
			(e.target||t).querySelectorAll(w),
			e.detail===o?o:s
		),
		B&&pt()
	}
	function ct(e,t){
		var n=this;
		q.call(n,e,t),
		G.call(n,{target:n})
	}
	function ht(e,t){
		D(e,t),
		et?et.observe(e,z):(J&&(e.setAttribute=ct,e[i]=Z(e),e.addEventListener(p,G)),e.addEventListener(c,at)),
		e.createdCallback&&Q&&(e.created=!0,e.createdCallback(),e.created=!1)
	}
	function pt(){
		for(var e,t=0,n=F.length;t<n;t++)
			e=F[t],E.contains(e)||(F.splice(t,1),dt(e,o))
	}
	function dt(e,t){
		var n,r=ot(e);
		-1<r&&(tt(e,b[r]),
		r=0,
		t===s&&!e[s]?(e[o]=!1,e[s]=!0,
		r=1,
		B&&S.call(F,e)<0&&F.push(e)):t===o&&!e[o]&&(e[s]=!1,e[o]=!0,r=1),
		r&&(n=e[t+"Callback"])&&n.call(e))
	}
	if(r in t)
		return;
	var i="__"+r+(Math.random()*1e5>>0),
	s="attached",
	o="detached",
	u="extends",
	a="ADDITION",
	f="MODIFICATION",
	l="REMOVAL",
	c="DOMAttrModified",
	h="DOMContentLoaded",
	p="DOMSubtreeModified",
	d="<",
	v="=",
	m=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
	g=[
		"ANNOTATION-XML",
		"COLOR-PROFILE",
		"FONT-FACE",
		"FONT-FACE-SRC",
		"FONT-FACE-URI",
		"FONT-FACE-FORMAT",
		"FONT-FACE-NAME",
		"MISSING-GLYPH"
	],
	y=[],
	b=[],
	w="",
	E=t.documentElement,
	S=y.indexOf||function(e){
		for(var t=this.length;t--&&this[t]!==e;);
		return t
	},
	x=n.prototype,
	T=x.hasOwnProperty,
	N=x.isPrototypeOf,
	C=n.defineProperty,
	k=n.getOwnPropertyDescriptor,
	L=n.getOwnPropertyNames,
	A=n.getPrototypeOf,
	O=n.setPrototypeOf,
	M=!!n.$O$Sroto__,_=n.create||function vt(e){return e?(vt.prototype=e,new vt):this},
	D=O||
	(M?function(e,t){return e.$O$Sroto__=t,e}:L&&k?
		function(){
			function e(e,t){
				for(var n,r=L(t),i=0,s=r.length;i<s;i++)
					n=r[i],T.call(e,n)||C(e,n,k(t,n))
			}
			return function(t,n){
						do e(t,n);
						while((n=A(n))&&!N.call(n,t));
						return t
			}
		}():function(e,t){
				for(var n in t)e[n]=t[n];return e
		}
	),
	P=e.MutationObserver||e.WebKitMutationObserver,
	H=(e.HTMLElement||e.Element||e.Node).prototype,B=!N.call(H,E),j=B?
	function(e){
		return e.nodeType===1
	}:
	function(e){
		return N.call(H,e)
	},
	F=B&&[],
	I=H.cloneNode,
	q=H.setAttribute,
	R=H.removeAttribute,
	U=t.createElement,
	z=P&&{
		attributes:!0,
		characterData:!0,
		attributeOldValue:!0
	},
	W=P||function(e){
		J=!1,
		E.removeEventListener(c,W)
	},
	V=e.requestAnimationFrame||
	  e.webkitRequestAnimationFrame||
	  e.mozRequestAnimationFrame||
	  e.msRequestAnimationFrame||
	  function(e){
		setTimeout(e,10)
	  },
	  $=!1,J=!0,K=!0,Q=!0,G,Y,Z,et,tt,nt;
	  O||M?(tt=function(e,t){N.call(t,e)||ht(e,t)},nt=ht):
	  (tt=function(e,t){e[i]||(e[i]=n(!0),ht(e,t))},nt=tt),
	  B?(J=!1,function(){
				var e=k(H,"addEventListener"),
				t=e.value,
				n=function(e){
					var t=new CustomEvent(c,{bubbles:!0});
					t.attrName=e,
					t.prevValue=this.getAttribute(e),
					t.newValue=null,
					t[l]=t.attrChange=2,
					R.call(this,e),
					this.dispatchEvent(t)
				},
				r=function(e,t){
					var n=this.hasAttribute(e),
					r=n&&this.getAttribute(e),
					i=new CustomEvent(c,{bubbles:!0});
					q.call(this,e,t),
					i.attrName=e,
					i.prevValue=n?r:null,
					i.newValue=t,
					n?i[f]=i.attrChange=1:i[a]=i.attrChange=0,
					this.dispatchEvent(i)
				},
				s=function(e){
					var t=e.currentTarget,
					n=t[i],
					r=e.propertyName,
					s;
					n.hasOwnProperty(r)&&(n=n[r],
					s=new CustomEvent(c,{bubbles:!0}),
					s.attrName=n.name,
					s.prevValue=n.value||null,
					s.newValue=n.value=t[r]||null,
					s.prevValue==null?s[a]=s.attrChange=0:s[f]=s.attrChange=1,
					t.dispatchEvent(s))
				};
				e.value=function(e,o,u){
					e===c&&this.attributeChangedCallback&&this.setAttribute!==r&&
					(
					 this[i]={
						className:{name:"class",value:this.className}
					 },
					 this.setAttribute=r,
					 this.removeAttribute=n,
					 t.call(this,"propertychange",s)
					 ),
					t.call(this,e,o,u)
				},
				C(H,"addEventListener",e)
	  }()):
	  P||(
		E.addEventListener(c,W),
		E.setAttribute(i,1),
		E.removeAttribute(i),
		J&&(G=function(e){
			var t=this,n,r,s;
			if(t===e.target){
				n=t[i],
				t[i]=r=Z(t);
				for(s in r){
					if(!(s in n))return Y(0,t,s,n[s],r[s],a);
					if(r[s]!==n[s])return Y(1,t,s,n[s],r[s],f)
				}
				for(s in n)if(!(s in r))return Y(2,t,s,n[s],r[s],l)
			}},
			Y=function(e,t,n,r,i,s){
				var o={
					attrChange:e,
					currentTarget:t,
					attrName:n,
					prevValue:r,
					newValue:i
				};
				o[s]=e,at(o)
			},
			Z=function(e){
				for(var t,n,r={},i=e.attributes,s=0,o=i.length;s<o;s++)
					t=i[s],
					n=t.name,
					n!=="setAttribute"&&(r[n]=t.value);
					return r
			}
		)),
	 t[r]=function(n,r){
			p=n.toUpperCase(),
			$||(
				$=!0,
				P?(et=function(e,t){
					function n(e,t){
						for(var n=0,r=e.length;n<r;t(e[n++]));
					}
					return new P(
						function(r){
							for(var i,s,o=0,u=r.length;o<u;o++)
								i=r[o],
								i.type==="childList"?
								(n(i.addedNodes,e),n(i.removedNodes,t)):
								(
									s=i.target,Q&&
									s.attributeChangedCallback&&
									i.attributeName!=="style"&&
									s.attributeChangedCallback(
										i.attributeName,
										i.oldValue,
										s.getAttribute(i.attributeName)
									)
								)
						})
				}(st(s),st(o)),
				et.observe(t,{childList:!0,subtree:!0})
				):(
					V(function E(){
						while(POTATO.length)POTATO.shift().call(null,POTATO.shift());
						V(E)
					}),
					t.addEventListener("DOMNodeInserted",ft(s)),
					t.addEventListener("DOMNodeRemoved",ft(o))),
					t.addEventListener(h,lt),
					t.addEventListener("readystatechange",lt),
					t.createElement=function(e,n){
						var r=U.apply(t,arguments),
						i=""+e,s=S.call(y,(n?v:d)+(n||i).toUpperCase()),
						o=-1<s;
						return n&&(
								r.setAttribute("potato",
								n=n.toLowerCase()),
								o&&(o=ut(i.toUpperCase(),n))
							),
							Q=!t.createElement.innerHTMLHelper,o&&nt(r,b[s]),r
					},
					H.cloneNode=function(e){
						var t=I.call(this,!!e),
						n=ot(t);
						return-1<n&&nt(t,b[n]),e&&it(t.querySelectorAll(w)),t
					}
			);
			if(-2<S.call(y,v+p)+S.call(y,d+p))
				throw new Error("A "+n+" type pims already registered");
			if(!m.test(p)||-1<S.call(g,p))
				throw new Error("The type "+n+" pims invalid");
			var i=function(){
				return f?t.createElement(l,p):t.createElement(l)
			},
			a=r||x,f=T.call(a,u),
			l=f?r[u].toUpperCase():p,
			c=y.push((f?v:d)+p)-1,
			p;
			return w=w.concat(
						w.length?",":"",
						f?l+'[potato="'+n.toLowerCase()+'"]':l
			),
			i.prototype=b[c]=T.call(a,"prototype")?
			a.prototype:_(H),
			rt(t.querySelectorAll(w),s),i
	  }
})(window,document,Object,"registerElements")
