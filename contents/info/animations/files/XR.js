var p=!0,t=null,u=!1;
window.XR=function(X,w,G,Y,wa,D,xa,ya,za,Aa,Ba,L,M,Z,$,Ca,aa,Da,ba,Ea,ca,Fa,Ga,Ha,Ia,r,Ja){function P(a,f,b){a.removeEventListener?a.removeEventListener(f,b,u):a.detachEvent&&(a.detachEvent("on"+f,a["e"+f+b]),a["e"+f+b]=t)}function k(a,f,b){a.addEventListener?a.addEventListener(f,b,u):a.attachEvent&&(a["e"+f+b]=b,a.attachEvent("on"+f,function(){a["e"+f+b]()}))}function Q(){return/\bEdge\b/i.test(navigator.userAgent)}function da(){var a=u;-1!=navigator.platform.toString().indexOf("Win")&&-1!=
navigator.appVersion.indexOf("MSIE")&&(a=p);return a}function Ka(){var a=document.getElementById(X),f=a.requestFullScreen||a.webkitRequestFullScreen||a.mozRequestFullScreen||a.msRequestFullScreen;"undefined"!=typeof f&&f&&f.call(a)}function ea(d){a.aa=u;d.pointerId in a.t&&delete a.t[d.pointerId];fa(d)}function ga(d){a.aa=u;d.pointerId in a.t&&delete a.t[d.pointerId];ha(d)}function ia(d){a.aa&&(a.t[d.pointerId]=[d.pageX,d.pageY],ja(d))}function ka(d){d.target.Ta&&d.target.Ta(d.pointerId);a.aa=p;a.t[d.pointerId]=
[d.pageX,d.pageY];la(d)}function ma(){a.i?(setTimeout(function(){a.v(u)},20),setTimeout(function(){a.v(p)},120)):(setTimeout(function(){a.v(p)},20),setTimeout(function(){a.v(u)},120))}function H(){var a={x:0,y:0},f=s;if(f.offsetParent){do a.x+=f.offsetLeft,a.y+=f.offsetTop;while(f=f.offsetParent)}return a}function na(){var d=c.g;c.g=1;d!=c.g&&a.T(a.w()*d/c.g);l.setAttribute("width",B.width);a.i?(l.removeAttribute("height"),l.style.width="100%",l.style[N]="scale("+c.n+")",l.style.height="auto",s.style["background-color"]=
a.backgroundColor,document.body.style["background-color"]=a.backgroundColor):(l.setAttribute("height",B.height),l.style[N]="translate("+-B.width/2+"px,"+-B.height/2+"px) scale("+c.g+") translate("+0.5*C.width/c.g+"px,"+0.5*C.height/c.g+"px) translate("+c.k+"px,"+c.l+"px) scale("+c.n+")",l.style["max-width"]="",l.style.width="",l.style.height="",s.style["background-color"]=a.backgroundColor)}function I(){a.Ua(a.h.offsetWidth,a.h.offsetHeight)}function oa(a,f){q.start.x=a;q.start.y=f;q.a.x=a;q.a.y=
f;i.a.x=a;i.a.y=f}function pa(a,f){q.b.x=a-q.a.x;q.b.y=f-q.a.y;q.n.x=a;q.n.y=f;q.a.x=a;q.a.y=f}function F(d){d||(d=window.event);var f=0;d.keyCode?f=d.keyCode:d.which&&(f=d.which);1==f?j.d|=1:1<f&&(j.d|=2);a.wa(d);d.preventDefault?d.preventDefault():d.returnValue=u}function J(d){d||(d=window.event);var f=H();a.cursor.x=d.pageX-f.x+m.left;a.cursor.y=d.pageY-f.y+m.top;d.preventDefault?d.preventDefault():d.returnValue=u;0<j.d&&(1==j.d?pa(d.pageX,d.pageY):2==j.d?(d=a.cursor.y-E.start.y,f=a.w(),a.T(c.u*
Math.exp(d/200)),d=a.w(),c.k+=parseFloat(a.e*f-a.e*d),c.l+=parseFloat(a.f*f-a.f*d)):3==j.d&&(f=a.cursor.x-E.start.x,d=a.cursor.y-E.start.y,c.k+=parseFloat((f-c.m.x)/c.g),c.l+=parseFloat((d-c.m.y)/c.g),c.m.x=f,c.m.y=d))}function O(d){d||(d=window.event);var f=0;d.keyCode?f=d.keyCode:d.which&&(f=d.which);1==f?j.d&=-2:1<f&&(j.d&=-3);a.wa(d);d.preventDefault?d.preventDefault():d.returnValue=u}function R(d){a.ab&&(d=d?d:window.event,a.Ha(0<(d.detail?-1*d.detail:d.wheelDelta/40)?1:-1),qa(d))}function la(d){d||
(d=window.event);var f=ra(d),b=H();a.cursor.x=f[0].pageX-b.x+m.left;a.cursor.y=f[0].pageY-b.y+m.top;if(1==f.length&&f[0])if(j.start.x=f[0].pageX,j.start.y=f[0].pageY,j.a.x=f[0].pageX,j.a.y=f[0].pageY,a.qa=f[0].target,a.qa==a.r)j.d=1,oa(f[0].pageX,f[0].pageY);else for(var e=a.qa;e&&e!=a.r;){if(e.onclick)e.onclick();e=e.parentNode}if(2==f.length&&f[0]&&f[1]){j.d=3;j.ca.x=f[0].pageX-b.x+m.left;j.ca.y=f[0].pageY-b.y+m.top;j.da.x=f[1].pageX-b.x+m.left;j.da.y=f[1].pageY-b.y+m.top;var e=f[0].pageX-f[1].pageX,
g=f[0].pageY-f[1].pageY,i=(f[0].pageX-b.x+m.left+(f[1].pageX-b.x+m.left))/2,f=(f[0].pageY-b.y+m.top+(f[1].pageY-b.y+m.top))/2;c.pa=u;c.Va=Math.sqrt(e*e+g*g);c.u=a.w();a.e=parseFloat(i-0.5*C.width);a.f=parseFloat(f-0.5*C.height);a.e*=parseFloat(a.R);a.f*=parseFloat(a.R);a.e-=parseFloat(c.k);a.f-=parseFloat(c.l);a.e/=parseFloat(c.u);a.f/=parseFloat(c.u)}d.preventDefault()}function ja(d){d||(d=window.event);var b=ra(d),e=H();a.cursor.x=b[0].pageX-e.x+m.left;a.cursor.y=b[0].pageY-e.y+m.top;1==b.length&&
b[0]&&(j.a.x=b[0].pageX,j.a.y=b[0].pageY,0<=j.d&&pa(j.a.x,j.a.y));if(2==b.length&&b[0]&&b[1]){var h=a.w(),g=b[0].pageX-b[1].pageX,i=b[0].pageY-b[1].pageY;a.T(c.u/c.Va*Math.sqrt(g*g+i*i));g=a.w();i=a.f*h-a.f*g;c.k+=a.e*h-a.e*g;c.l+=i;h=(a.cursor.x+b[1].pageX-e.x+m.left)/2-(j.ca.x+j.da.x)/2;b=(a.cursor.y+b[1].pageY-e.y+m.top)/2-(j.ca.y+j.da.y)/2;c.pa==u&&(c.m.x=h,c.m.y=b,c.pa=p);c.k+=(h-c.m.x)/c.g;c.l+=(b-c.m.y)/c.g;c.m.x=h;c.m.y=b}d.preventDefault()}function ra(d){if(!da()&&!Q())return d.touches;d=
[];for(id in a.t){var b=a.t[id],e={};e.pageX=b[0];e.pageY=b[1];e.target=a.r;e.preventDefault=function(){};d.push(e)}return d}function ha(d){d.preventDefault();a.qa=t;j.d=0;var b=(new Date).getTime(),e=b-(S||b+1);clearTimeout(T);500>e&&0<e||(S=b,T=setTimeout(function(){clearTimeout(T)},500,[d]));S=b}function fa(a){a.preventDefault();j.d=0}function U(){La(U);a.W==a.Z&&(1==j.d?0.01<i.L?(i.b.x=0.4*(q.a.x-i.a.x),i.b.y=0.4*(q.a.y-i.a.y),i.a.x+=i.b.x,i.a.y+=i.b.y,a.na(i.b.x,i.b.y)):(a.na(q.b.x,q.b.y),q.b.x=
0,q.b.y=0):0.01<i.L&&(i.b.x*=i.L,i.b.y*=i.L,0.055>i.b.x*i.b.x+i.b.y*i.b.y&&(i.b.x=0,i.b.y=0,q.b.x=0,q.b.y=0,q.a.x=i.a.x,q.a.y=i.a.y),(0!=i.b.x||0!=i.b.y)&&a.na(i.b.x,i.b.y)));a.Ca();var d=0;if(-1==a.ha){for(var b=1,b=0;b<a.G.length;b++){var c=a.C[b];if(0==a.z[c]&&a.G[b].complete){a.F[c]=a.z[c];a.z[c]=-1;if(a.W==a.Z){var h=a.G.length+a.Aa;h>e.q&&(h=e.q);if(h-=d)for(var g=0;g<h;g++)a.ga()}e.J=p;0==b&&a.Ca()}-1!=a.F[c]&&d++}b=parseFloat(d/e.q);a.Sa(b);d==e.q&&(a.ha=0,a.Ra())}}function sa(a){keycode=
(a?a:window.event).keyCode;switch(keycode){case 13:ma(),qa(a)}}function qa(a){a=a?a:window.event;a.preventDefault()?a.preventDefault():a.returnValue=u}var A="/",K="https://raw.githubusercontent.com/TaejuneYoun/index/refs/heads/main/contents/info",ta=K.lastIndexOf("/");0<=ta&&(A=K.substr(0,ta+1));var V=K=u;Ja&&(document.body.style.width=window.innerWidth+"px",document.body.style.height=window.innerHeight+"px");this.ab=Z!=$;this.aa=u;this.t=[];this.ja=u;this.Ca=function(){if(e.J){if(a.ja)return;e.J=u;var d=parseInt(e.K*e.c+e.I);if(-1!=a.F[d]&&(W.setAttribute("src",
a.D[d]),W.complete||(a.ja=p),void 0!==r))if(d=a.ia[d],!d&&void 0==r[d]){if(document.getElementById("xr_hotspot")){var b=document.getElementById("xr_hotspot");document.body.removeChild(b)}}else document.getElementById("xr_hotspot")&&(b=document.getElementById("xr_hotspot"),document.body.removeChild(b)),b=document.createElement("div"),b.innerHTML=r[d].text,b.id="xr_hotspot",b.style.position="absolute",b.style.left=r[d].position.x+"px",b.style.top=r[d].position.y+"px",b.style.color="#000000",void 0!==
r[d].options&&(r[d].options.fontSize&&(b.style.fontSize=r[d].options.fontSize),r[d].options.Ia&&(b.style.color=r[d].options.Ia),r[d].options.bgColor&&(b.style.backgroundColor=r[d].options.bgColor),r[d].options.link&&(b.href=r[d].options.link),r[d].options.height&&(b.style.height=r[d].options.height),r[d].options.width&&(b.style.width=r[d].options.width),r[d].options.textAlign&&(b.style.textAlign=r[d].options.textAlign)),document.body.appendChild(b)}if(c.n!=c.a||c.k!=c.xa||c.l!=c.ya)c.a=c.n,c.xa=c.k,
c.ya=c.l,na()};this.eb=function(b){for(var f=-1E3,c=b,h=parseFloat(parseInt(b%e.c)),g=parseFloat(parseInt(b/e.c)),h=h/e.c,h=h*2*Math.PI,g=g/e.j,g=g*Math.PI,b=Math.sin(h),h=Math.cos(h),g=Math.cos(g),i=Math.sqrt(b*b+h*h+g*g),b=b/i,h=h/i,g=g/i,i=0;i<a.G.length;i++){var j=a.C[i];if(-1!=a.F[j]){var k=a.Ea[j].Za,k=b*k.x+h*k.y+g*k.$a;f<k&&(f=k,c=j)}}return c};this.ga=function(){if(a.oa<e.q){var b=new Image,f=a.C[a.oa];a.z[f]=0;b.src=a.D[f];a.G.push(b);var c=parseInt(f%e.c),h=parseInt(f/e.c),c=c/e.c,c=c*
2*Math.PI,h=h/e.j,h=h*Math.PI,b=Math.sin(c),c=Math.cos(c),h=Math.cos(h),g=Math.sqrt(b*b+c*c+h*h);a.Ea[f]={Za:{x:b/g,y:c/g,$a:h/g}};a.oa++}};this.Ga=function(){for(var b=e.ra,f=e.sa,c=2,h=parseFloat(e.c/c),g=parseFloat(e.j/c),i=e.q,j=0,k=0,m=0,n=0,l=0;a.P<i;){var q=parseInt(b%e.c),s=parseInt(f%e.j),l=parseInt(s*e.c+q);a.D[l]||(a.C[a.P]=l,a.P++,a.D[l]=a.va(q,s),void 0!==r&&r[s+"_"+q]&&(a.ia[l]=s+"_"+q));0==j&&(b+=h,k++);1==j&&(f+=g,m++);n++;if(n>=c)if(n=0,0==j)j=1,k=0;else if(1==j&&(b+=h,k++,k>=c/2)){c*=
2;b=e.ra;f=e.sa;h=parseFloat(e.c/c);g=parseFloat(e.j/c);if(1>h&&1>g){for(b=0;b<i;b++)f=parseInt(b%e.c),c=parseInt(b/e.c),l=parseInt(c*e.c+f),a.D[l]||(a.C[a.P]=l,a.P++,a.D[l]=a.va(f,c),void 0!==r&&r[c+"_"+f]&&(a.ia[l]=c+"_"+f));break}j=m=k=0}}};this.va=function(b,f){return A+a.s+"/"+parseInt(f)+"_"+parseInt(b)+"."+Ea};this.na=function(b,f){var b=b*(1<e.c?a.Xa:0),f=f*(1<e.j?a.Ya:0),c=Math.sqrt(b*b+f*f);if(1E-4<c&&(e.ea+=b,e.fa+=f,e.A+=c,1<e.A)){var c=parseInt(e.A),h=Math.atan2(e.ea,e.fa);e.A-=c;e.ea=
0;e.fa=0;0>h&&(h+=2*Math.PI);h+=Math.PI/8;h=parseInt(h/(Math.PI/4));0>h&&(h+=8);h%=8;if(0!=x[h]){if(Ha)var g=e.I,g=g-c*x[h];else g=e.I,g+=c*x[h];if(e.Da){for(;0>g;)g+=e.c;for(;g>=e.c;)g-=e.c}else g>=e.c&&(g=e.c-1),0>g&&(g=0);e.I!=g&&(e.I=g,e.J=p)}if(0!=y[h]){Ia?(g=e.K,g-=c*y[h]):(g=e.K,g+=c*y[h]);if(e.Fa){for(;0>g;)g+=e.j;for(;g>=e.j;)g-=e.j}else g>=e.j&&(g=e.j-1),0>g&&(g=0);e.K!=g&&(e.K=g,e.J=p)}}};this.Wa=function(){a.v(!a.i);a.i?a.H.setAttribute("src",A+a.s+"/files/GoFullScreenIcon.png"):a.H.setAttribute("src",
A+a.s+"/files/GoFixedSizeIcon.png")};this.v=function(b){a.i=b;a.i?(v.style.position="relative",v.style.left="0px",v.style.top="0px",document.body.style.overflow=""):(v.style.position="absolute",b=H(),v.style.left=window.pageXOffset-b.x+m.left+"px",v.style.top=window.pageYOffset-b.y+m.top+"px",document.body.style.overflow="hidden");document.body.style.margin="0";document.body.style.padding="0";I()};this.Ka=function(){var b=new Image;b.src=a.O.src;a.G[a.Y]=b;b=a.C[a.Y];a.F[b]=a.z[b];a.z[b]=-1;a.Y++;
e.J=p;a.Y==e.q&&(a.ha=0,a.La())};var T,S=t;this.wa=function(b){var f=H();a.cursor.x=b.pageX-f.x+m.left;a.cursor.y=b.pageY-f.y+m.top;1==j.d?oa(b.pageX,b.pageY):2==j.d?(E.start.x=a.cursor.x,E.start.y=a.cursor.y,c.u=a.w(),a.e=a.cursor.x-0.5*C.width,a.f=a.cursor.y-0.5*C.height,a.e*=a.R,a.f*=a.R,a.e-=c.k,a.f-=c.l,a.e/=c.u,a.f/=c.u):3==j.d&&(E.start.x=a.cursor.x,E.start.y=a.cursor.y,c.m.x=0,c.m.y=0)};this.Ha=function(b){a.T(c.n*Math.exp(-b/50))};this.w=function(){return c.n};this.T=function(a){a>c.la/c.g&&
(a=c.la/c.g);a<c.ma/c.g&&(a=c.ma/c.g);c.n=a};this.cb=function(a,b,c,e){m.left=a;m.top=b;m.right=c;m.bottom=e;I()};this.Ua=function(b,c){a.i||(b=window.innerWidth,c=window.innerHeight);var e=b-m.left-m.right,h=c-m.top-m.bottom;C.width=e;C.height=h;s.style.width=e+"px";a.i&&window.innerHeight<B.height&&(h=window.innerHeight);s.style.height=h+"px";s.style.left=m.left+"px";s.style.top=m.top+"px";na();a.i&&window.innerHeight<B.height&&(c=window.innerHeight);a.h.style.height=c+"px";a.i&&(b=l.clientWidth,
c=Math.min(l.clientHeight,window.innerHeight));n.style.width=b+"px";n.style.height=c+"px";n.Ba&&n.Ba(b,c);ba&&(a.N.style.height=window.innerHeight+"px",a.N.style.width=window.innerWidth+"px")};this.U=function(a){k(a,"mousedown",F);k(a,"mousemove",J);k(a,"mouseup",O)};this.ba=function(a){P(a,"mousedown",F);P(a,"mousemove",J);P(a,"mouseup",O)};this.Ra=function(){a.p&&(a.p.style.visibility="hidden",a.ba(a.p),a.ba(a.Q),a.ba(a.o))};this.La=function(){a.B.style.visibility="hidden";a.ba(a.B)};var La=window.requestAnimationFrame||
window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,10)};this.ua=function(){a.p=document.createElement("div");a.U(a.p);a.p.V=function(){this.parentNode&&(this.style.left="16px",this.style.top="16px")};b="position:absolute;";b+="left: 0px;";b+="top:  0px;";b+="width: 80px;";b+="height: 80px;";b+=z+"transform-origin: 50% 50%;";b+="visibility: inherit;";a.p.setAttribute("style",b);a.Q=document.createElement("div");
a.U(a.Q);b="position:absolute;";b+="left: 0px;";b+="top:  29px;";b+="width: 80px;";b+="height: 80px;";b+=z+"transform-origin: 50% 50%;";b+="opacity: 1.0;";b+="visibility: inherit;";b+="border: 0px solid #000000;";b+="color: #ffffff;";b+="text-align: left;";b+="white-space: nowrap;";b+="padding: 0px 0px 0px 0px;";b+="overflow: hidden;";a.Q.setAttribute("style",b);a.o=document.createElement("div");a.U(a.o);a.o.$={Na:0,Oa:0,ka:0,Pa:1,Qa:1,gb:1};b="position:absolute;";b+="left: 0px;";b+="top:  0px;";
b+="width: 80px;";b+="height: 80px;";b+=z+"transform-origin: 50% 50%;";b+="opacity: 1.0;";b+="visibility: inherit;";b+="border: 0px solid #000000;";b+="color: #ffffff;";b+="text-align: left;";b+="white-space: nowrap;";b+="padding: 0px 0px 0px 0px;";b+="overflow: hidden;";var d=Fa;""==d&&(d="ks_logo.png");a.o.setAttribute("style",b);a.o.innerHTML='<img src="'+A+a.s+"/files/"+d+'"></img>';a.p.appendChild(a.o);a.p.appendChild(a.Q);n.appendChild(a.p);a.v(a.i);setTimeout(function(){a.v(a.i)},10)};this.Sa=
function(b){if(a.p){a.Q.innerHTML="<center>"+parseInt(100*b)+"</center>";a.o.$.ka+=2.1;b="";if(a.o.$)var c=a.o.$,b=b+("translate("+c.Na+"px,"+c.Oa+"px) rotate("+c.ka+"deg) scale("+c.Pa+","+c.Qa+") ");a.o.style[N]=b+"scale(1.0,1.0)"}};this.ta=function(){V=p;U()};this.za=function(){k(window,"resize",I);Ga&&k(n,"dblclick",Ka);if(da())if(k(window,"mousewheel",R),k(window,"keydown",sa),/Tablet PC/i.test(navigator.userAgent)&&window.bb){var b=new MSGesture;b.target=a.h;a.h.Ja=b;a.h.Ja.pointerType=t;a.h.hb=
[];k(a.h,"MSPointerDown",ka);k(a.h,"MSPointerMove",ia);k(a.h,"MSPointerUp",ga);k(a.h,"MSPointerCancel",ea)}else k(n,"mousedown",F),k(l,"mousedown",F),k(n,"mousemove",J),k(l,"mousemove",J),k(document,"mouseup",O);else n.addEventListener&&(k(document,"mouseup",O),k(n,"mousewheel",R),k(document,"keydown",sa),k(n,"mousedown",F),k(l,"mousedown",F),k(n,"mousemove",J),k(n,"touchstart",la),k(n,"touchmove",ja),k(n,"touchcancel",fa),k(n,"touchend",ha),k(n,"DOMMouseScroll",R),k(window,"orientationchange",ma),
Q()&&(b=function(a,b){"touch"==b.pointerType&&a(b)},k(n,"pointerdown",b.bind(t,ka)),k(n,"pointermove",b.bind(t,ia)),k(n,"pointerup",b.bind(t,ga)),k(n,"pointercancel",b.bind(t,ea))))};if(document.createElement("canvas").getContext){var a=this,v=a.h=t,s=t,W=t,n=t,l=t;a.i=aa;a.s=w;a.fb=u;a.Z=u;a.W=ba;a.ib=0;a.P=0;a.Xa=parseFloat(Aa);a.Ya=parseFloat(Ba);a.Aa=1;a.Y=0;a.ha=-1;var m={left:0,top:0,right:0,bottom:0},e={I:0,K:0,c:1,j:1,ra:0,sa:0,A:0,ea:0,fa:0,J:u,q:0,Da:p,Fa:u};L||(L=0);M||(M=0);e.ra=L;e.sa=
M;e.I=L;e.K=M;e.c=D;e.j=xa;e.Da=ya;e.Fa=za;e.q=e.c*e.j;var B={width:0,height:0};B.width=G;B.height=Y;var z="",N="transform",C={x:640,y:480},c={n:1,u:1,a:-1,k:0,l:0,xa:-1,ya:-1,g:1,ma:1,la:1,m:{x:0,y:0},pa:u};c.ma=parseFloat(Z);c.la=parseFloat($);var q={start:{x:0,y:0},a:{x:0,y:0},Ma:{x:0,y:0},n:{x:0,y:0},b:{x:0,y:0}},E={start:{x:0,y:0}},j={d:0,start:{x:0,y:0},a:{x:0,y:0},Ma:{x:0,y:0},n:{x:0,y:0},b:{x:0,y:0},ca:{x:0,y:0},da:{x:0,y:0}},i={a:{x:0,y:0},b:{x:0,y:0},L:0.96};i.L=Ca;a.cursor={x:0,y:0};var x=
[],y=[];x[0]=0;y[0]=1;x[1]=1;y[1]=1;x[2]=1;y[2]=0;x[3]=1;y[3]=-1;x[4]=0;y[4]=-1;x[5]=-1;y[5]=-1;x[6]=-1;y[6]=0;x[7]=-1;y[7]=1;a.e=0;a.f=0;a.oa=0;a.G=[];a.C=[];a.z=[];a.F=[];a.Ea=[];for(w=0;w<e.q;w++)a.z[w]=-1,a.F[w]=-1;a.D=[];a.ia=[];w=["Webkit","Moz","0","ms","Ms"];for(D=0;D<w.length;D++)"undefined"!=typeof document.documentElement.style[w[D]+"Transform"]&&(z="-"+w[D].toLowerCase()+"-",N=w[D]+"Transform");var b="";a.h=document.getElementById(X);b="width: "+G+"px;";b+="height: "+Y+"px;";b+="max-width: 100%;";
a.h.setAttribute("style",b);v=document.createElement("div");v.setAttribute("id","viewwindow");b="top:  0px;";b+="left: 0px;";b+="position: relative;";v.setAttribute("style",b);a.h.appendChild(v);s=document.createElement("div");s.setAttribute("id","turntable");b="top:  0px;";b+="left: 0px;";b+="overflow: hidden;";b+="position:absolute;";b+=z+"user-select: none;";s.setAttribute("style",b);v.appendChild(s);l=document.createElement("img");l.setAttribute("id","backbuffer");b="top:  0px;";b+="left: 0px;";
b+="position:absolute;";b+=z+"user-select: none;";l.setAttribute("style",b);s.appendChild(l);W=l;G=function(){a.ja=u};l.addEventListener("load",G,u);l.addEventListener("error",G,u);if(a.i){var ua=function(){I();l.removeEventListener("load",ua,u)};l.addEventListener("load",ua,u)}n=document.createElement("div");a.r=n;b="top:  0px;";b+="left: 0px;";b+="width:  100px;";b+="height: 100px;";b+="overflow: hidden;";b+="position:absolute;";b+="z-index: 522;";b+=z+"user-select: none;";Q()&&(b+="touch-action: none;");
n.setAttribute("style",b);v.appendChild(n);n.Ba=function(a,b){var c=[];for(c.push(this);0<c.length;){var e=c.pop();e.V&&e.V(a,b);if(e.hasChildNodes())for(var g=0;g<e.childNodes.length;g++)c.push(e.childNodes[g])}};this.B=document.createElement("div");b="position:absolute;";b+="left: 0px;";b+="top:  0px;";b+="width: 256px;";b+="height: 256px;";b+="opacity: 0.0;";b+=z+"transform-origin: 50% 50%;";b+="visibility: inherit;";b+="display: none";this.B.setAttribute("style",b);this.O=document.createElement("img");
this.O.setAttribute("width",256);this.O.setAttribute("height",256);this.O.onload=function(){a.Ka()};a.U(this.B);this.B.appendChild(this.O);n.appendChild(this.B);this.backgroundColor=s.style.backgroundColor=wa;Da&&(a.S=document.createElement("div"),b="position:absolute;",b+="width: 38px;",b+="height: 32px;",b+=z+"transform-origin: 50% 50%;",b+="visibility: inherit;",b+="cursor: pointer;",a.S.setAttribute("style",b),a.H=document.createElement("img"),a.i?a.H.setAttribute("src",A+a.s+"/files/GoFullScreenIcon.png"):
a.H.setAttribute("src",A+a.s+"/files/GoFixedSizeIcon.png"),a.H.setAttribute("style","position: absolute;top: 0px;left: 0px;width: 38px;height: 32px;"),a.S.appendChild(a.H),a.S.V=function(a,b){this.style.left=a-38+"px";this.style.top=b-32+"px"},a.S.onclick=function(){a.Wa()},a.r.appendChild(a.S));if(a.W){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(K=p);a.M=document.createElement("div");b="position:absolute;";b+="width: 92px;";b+="height: 92px;";b+=z+
"transform-origin: 50% 50%;";b+="visibility: inherit;";b+="cursor: pointer;";a.M.setAttribute("style",b);a.X=document.createElement("img");K?a.X.setAttribute("src",A+a.s+"/files/xr_hand.gif"):a.X.setAttribute("src",A+a.s+"/files/xr_cursor.gif");a.X.setAttribute("style","position: absolute;top: 0px;left: 0px;width: 92px;height: 92px;");a.M.appendChild(a.X);a.M.V=function(a,b){this.style.left=0.5*a-46+"px";this.style.top=0.5*b-46+"px"};a.N=document.createElement("div");b="position:absolute;";b+=z+"transform-origin: 50% 50%;";
b+=" width: "+window.innerWidth+"px;";b+=" height: "+window.innerHeight+"px;";b+=" background-color: #ccc;";b+=" opacity: .7";a.N.setAttribute("style",b);a.r.appendChild(a.N);var va=function(){a.M.style.visibility="hidden";a.N.style.visibility="hidden";ca&&a.ua();a.Z=p;for(var b=0;b<a.Aa;b++)a.ga();a.ta()};a.r.onmousedown=function(a){V||va();a.preventDefault()};a.r.ontouchstart=function(a){V||va();a.preventDefault()};a.r.appendChild(a.M);a.za()}else a.W=p,a.Z=p,ca&&a.ua(),a.za(),a.ta();a.v(aa);a.R=
1/c.g;a.T(a.R);this.Ga();a.ga();setTimeout(function(){U()},10);setTimeout(function(){I()},15)}else alert("Your browser must support HTML5 to show XR")};
