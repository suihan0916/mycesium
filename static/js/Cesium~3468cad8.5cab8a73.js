(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Cesium~3468cad8"],{"4dc8":function(t,a,e){"use strict";var n=e("be18"),o=e("a561"),i=e("2384"),r=e("535a"),s=e("2f63"),c=e("93da"),u=e("52f0");function f(t){t=Object(r["a"])(t,r["a"].EMPTY_OBJECT),this.left=t.left,this._left=void 0,this.right=t.right,this._right=void 0,this.top=t.top,this._top=void 0,this.bottom=t.bottom,this._bottom=void 0,this.near=Object(r["a"])(t.near,1),this._near=this.near,this.far=Object(r["a"])(t.far,5e8),this._far=this.far,this._cullingVolume=new i["a"],this._perspectiveMatrix=new u["a"],this._infinitePerspective=new u["a"]}function h(t){const a=t.top,e=t.bottom,n=t.right,o=t.left,i=t.near,r=t.far;a===t._top&&e===t._bottom&&o===t._left&&n===t._right&&i===t._near&&r===t._far||(t._left=o,t._right=n,t._top=a,t._bottom=e,t._near=i,t._far=r,t._perspectiveMatrix=u["a"].computePerspectiveOffCenter(o,n,e,a,i,r,t._perspectiveMatrix),t._infinitePerspective=u["a"].computeInfinitePerspectiveOffCenter(o,n,e,a,i,t._infinitePerspective))}Object.defineProperties(f.prototype,{projectionMatrix:{get:function(){return h(this),this._perspectiveMatrix}},infiniteProjectionMatrix:{get:function(){return h(this),this._infinitePerspective}}});const l=new n["a"],p=new n["a"],d=new n["a"],m=new n["a"];f.prototype.computeCullingVolume=function(t,a,e){const i=this._cullingVolume.planes,r=this.top,c=this.bottom,u=this.right,f=this.left,h=this.near,b=this.far,y=n["a"].cross(a,e,l),_=p;n["a"].multiplyByScalar(a,h,_),n["a"].add(t,_,_);const O=d;n["a"].multiplyByScalar(a,b,O),n["a"].add(t,O,O);const g=m;n["a"].multiplyByScalar(y,f,g),n["a"].add(_,g,g),n["a"].subtract(g,t,g),n["a"].normalize(g,g),n["a"].cross(g,e,g),n["a"].normalize(g,g);let w=i[0];return Object(s["a"])(w)||(w=i[0]=new o["a"]),w.x=g.x,w.y=g.y,w.z=g.z,w.w=-n["a"].dot(g,t),n["a"].multiplyByScalar(y,u,g),n["a"].add(_,g,g),n["a"].subtract(g,t,g),n["a"].cross(e,g,g),n["a"].normalize(g,g),w=i[1],Object(s["a"])(w)||(w=i[1]=new o["a"]),w.x=g.x,w.y=g.y,w.z=g.z,w.w=-n["a"].dot(g,t),n["a"].multiplyByScalar(e,c,g),n["a"].add(_,g,g),n["a"].subtract(g,t,g),n["a"].cross(y,g,g),n["a"].normalize(g,g),w=i[2],Object(s["a"])(w)||(w=i[2]=new o["a"]),w.x=g.x,w.y=g.y,w.z=g.z,w.w=-n["a"].dot(g,t),n["a"].multiplyByScalar(e,r,g),n["a"].add(_,g,g),n["a"].subtract(g,t,g),n["a"].cross(g,y,g),n["a"].normalize(g,g),w=i[3],Object(s["a"])(w)||(w=i[3]=new o["a"]),w.x=g.x,w.y=g.y,w.z=g.z,w.w=-n["a"].dot(g,t),w=i[4],Object(s["a"])(w)||(w=i[4]=new o["a"]),w.x=a.x,w.y=a.y,w.z=a.z,w.w=-n["a"].dot(a,_),n["a"].negate(a,g),w=i[5],Object(s["a"])(w)||(w=i[5]=new o["a"]),w.x=g.x,w.y=g.y,w.z=g.z,w.w=-n["a"].dot(g,O),this._cullingVolume},f.prototype.getPixelDimensions=function(t,a,e,n,o){h(this);const i=1/this.near;let r=this.top*i;const s=2*n*e*r/a;r=this.right*i;const c=2*n*e*r/t;return o.x=c,o.y=s,o},f.prototype.clone=function(t){return Object(s["a"])(t)||(t=new f),t.right=this.right,t.left=this.left,t.top=this.top,t.bottom=this.bottom,t.near=this.near,t.far=this.far,t._left=void 0,t._right=void 0,t._top=void 0,t._bottom=void 0,t._near=void 0,t._far=void 0,t},f.prototype.equals=function(t){return Object(s["a"])(t)&&t instanceof f&&this.right===t.right&&this.left===t.left&&this.top===t.top&&this.bottom===t.bottom&&this.near===t.near&&this.far===t.far},f.prototype.equalsEpsilon=function(t,a,e){return t===this||Object(s["a"])(t)&&t instanceof f&&c["a"].equalsEpsilon(this.right,t.right,a,e)&&c["a"].equalsEpsilon(this.left,t.left,a,e)&&c["a"].equalsEpsilon(this.top,t.top,a,e)&&c["a"].equalsEpsilon(this.bottom,t.bottom,a,e)&&c["a"].equalsEpsilon(this.near,t.near,a,e)&&c["a"].equalsEpsilon(this.far,t.far,a,e)},a["a"]=f},"4e1a":function(t,a,e){"use strict";var n=e("535a"),o=e("2f63"),i=e("93da"),r=e("4dc8");function s(t){t=Object(n["a"])(t,n["a"].EMPTY_OBJECT),this._offCenterFrustum=new r["a"],this.fov=t.fov,this._fov=void 0,this._fovy=void 0,this._sseDenominator=void 0,this.aspectRatio=t.aspectRatio,this._aspectRatio=void 0,this.near=Object(n["a"])(t.near,1),this._near=this.near,this.far=Object(n["a"])(t.far,5e8),this._far=this.far,this.xOffset=Object(n["a"])(t.xOffset,0),this._xOffset=this.xOffset,this.yOffset=Object(n["a"])(t.yOffset,0),this._yOffset=this.yOffset}function c(t){const a=t._offCenterFrustum;t.fov===t._fov&&t.aspectRatio===t._aspectRatio&&t.near===t._near&&t.far===t._far&&t.xOffset===t._xOffset&&t.yOffset===t._yOffset||(t._aspectRatio=t.aspectRatio,t._fov=t.fov,t._fovy=t.aspectRatio<=1?t.fov:2*Math.atan(Math.tan(.5*t.fov)/t.aspectRatio),t._near=t.near,t._far=t.far,t._sseDenominator=2*Math.tan(.5*t._fovy),t._xOffset=t.xOffset,t._yOffset=t.yOffset,a.top=t.near*Math.tan(.5*t._fovy),a.bottom=-a.top,a.right=t.aspectRatio*a.top,a.left=-a.right,a.near=t.near,a.far=t.far,a.right+=t.xOffset,a.left+=t.xOffset,a.top+=t.yOffset,a.bottom+=t.yOffset)}s.packedLength=6,s.pack=function(t,a,e){return e=Object(n["a"])(e,0),a[e++]=t.fov,a[e++]=t.aspectRatio,a[e++]=t.near,a[e++]=t.far,a[e++]=t.xOffset,a[e]=t.yOffset,a},s.unpack=function(t,a,e){return a=Object(n["a"])(a,0),Object(o["a"])(e)||(e=new s),e.fov=t[a++],e.aspectRatio=t[a++],e.near=t[a++],e.far=t[a++],e.xOffset=t[a++],e.yOffset=t[a],e},Object.defineProperties(s.prototype,{projectionMatrix:{get:function(){return c(this),this._offCenterFrustum.projectionMatrix}},infiniteProjectionMatrix:{get:function(){return c(this),this._offCenterFrustum.infiniteProjectionMatrix}},fovy:{get:function(){return c(this),this._fovy}},sseDenominator:{get:function(){return c(this),this._sseDenominator}}}),s.prototype.computeCullingVolume=function(t,a,e){return c(this),this._offCenterFrustum.computeCullingVolume(t,a,e)},s.prototype.getPixelDimensions=function(t,a,e,n,o){return c(this),this._offCenterFrustum.getPixelDimensions(t,a,e,n,o)},s.prototype.clone=function(t){return Object(o["a"])(t)||(t=new s),t.aspectRatio=this.aspectRatio,t.fov=this.fov,t.near=this.near,t.far=this.far,t._aspectRatio=void 0,t._fov=void 0,t._near=void 0,t._far=void 0,this._offCenterFrustum.clone(t._offCenterFrustum),t},s.prototype.equals=function(t){return!!(Object(o["a"])(t)&&t instanceof s)&&(c(this),c(t),this.fov===t.fov&&this.aspectRatio===t.aspectRatio&&this._offCenterFrustum.equals(t._offCenterFrustum))},s.prototype.equalsEpsilon=function(t,a,e){return!!(Object(o["a"])(t)&&t instanceof s)&&(c(this),c(t),i["a"].equalsEpsilon(this.fov,t.fov,a,e)&&i["a"].equalsEpsilon(this.aspectRatio,t.aspectRatio,a,e)&&this._offCenterFrustum.equalsEpsilon(t._offCenterFrustum,a,e))},a["a"]=s},"713f":function(t,a,e){"use strict";var n=e("535a"),o=e("2f63"),i=e("93da"),r=e("c34a");function s(t){t=Object(n["a"])(t,n["a"].EMPTY_OBJECT),this._offCenterFrustum=new r["a"],this.width=t.width,this._width=void 0,this.aspectRatio=t.aspectRatio,this._aspectRatio=void 0,this.near=Object(n["a"])(t.near,1),this._near=this.near,this.far=Object(n["a"])(t.far,5e8),this._far=this.far}function c(t){const a=t._offCenterFrustum;if(t.width!==t._width||t.aspectRatio!==t._aspectRatio||t.near!==t._near||t.far!==t._far){t._aspectRatio=t.aspectRatio,t._width=t.width,t._near=t.near,t._far=t.far;const e=1/t.aspectRatio;a.right=.5*t.width,a.left=-a.right,a.top=e*a.right,a.bottom=-a.top,a.near=t.near,a.far=t.far}}s.packedLength=4,s.pack=function(t,a,e){return e=Object(n["a"])(e,0),a[e++]=t.width,a[e++]=t.aspectRatio,a[e++]=t.near,a[e]=t.far,a},s.unpack=function(t,a,e){return a=Object(n["a"])(a,0),Object(o["a"])(e)||(e=new s),e.width=t[a++],e.aspectRatio=t[a++],e.near=t[a++],e.far=t[a],e},Object.defineProperties(s.prototype,{projectionMatrix:{get:function(){return c(this),this._offCenterFrustum.projectionMatrix}}}),s.prototype.computeCullingVolume=function(t,a,e){return c(this),this._offCenterFrustum.computeCullingVolume(t,a,e)},s.prototype.getPixelDimensions=function(t,a,e,n,o){return c(this),this._offCenterFrustum.getPixelDimensions(t,a,e,n,o)},s.prototype.clone=function(t){return Object(o["a"])(t)||(t=new s),t.aspectRatio=this.aspectRatio,t.width=this.width,t.near=this.near,t.far=this.far,t._aspectRatio=void 0,t._width=void 0,t._near=void 0,t._far=void 0,this._offCenterFrustum.clone(t._offCenterFrustum),t},s.prototype.equals=function(t){return!!(Object(o["a"])(t)&&t instanceof s)&&(c(this),c(t),this.width===t.width&&this.aspectRatio===t.aspectRatio&&this._offCenterFrustum.equals(t._offCenterFrustum))},s.prototype.equalsEpsilon=function(t,a,e){return!!(Object(o["a"])(t)&&t instanceof s)&&(c(this),c(t),i["a"].equalsEpsilon(this.width,t.width,a,e)&&i["a"].equalsEpsilon(this.aspectRatio,t.aspectRatio,a,e)&&this._offCenterFrustum.equalsEpsilon(t._offCenterFrustum,a,e))},a["a"]=s},"78e5":function(t,a,e){"use strict";var n=e("cef5"),o=e("670c"),i=e("be18"),r=e("bef8"),s=e("535a"),c=e("2f63"),u=e("c52f"),f=e("a3bd"),h=e("66bf"),l=e("017a"),p=e("93da"),d=e("df07"),m=e("52f0"),b=e("188e"),y=e("eace");function _(t,a){this.center=i["a"].clone(Object(s["a"])(t,i["a"].ZERO)),this.halfAxes=d["a"].clone(Object(s["a"])(a,d["a"].ZERO))}_.packedLength=i["a"].packedLength+d["a"].packedLength,_.pack=function(t,a,e){return e=Object(s["a"])(e,0),i["a"].pack(t.center,a,e),d["a"].pack(t.halfAxes,a,e+i["a"].packedLength),a},_.unpack=function(t,a,e){return a=Object(s["a"])(a,0),Object(c["a"])(e)||(e=new _),i["a"].unpack(t,a,e.center),d["a"].unpack(t,a+i["a"].packedLength,e.halfAxes),e};const O=new i["a"],g=new i["a"],w=new i["a"],x=new i["a"],v=new i["a"],C=new i["a"],j=new d["a"],M={unitary:new d["a"],diagonal:new d["a"]};_.fromPoints=function(t,a){if(Object(c["a"])(a)||(a=new _),!Object(c["a"])(t)||0===t.length)return a.halfAxes=d["a"].ZERO,a.center=i["a"].ZERO,a;let e;const n=t.length,o=i["a"].clone(t[0],O);for(e=1;e<n;e++)i["a"].add(o,t[e],o);const r=1/n;i["a"].multiplyByScalar(o,r,o);let s,u=0,f=0,h=0,l=0,p=0,m=0;for(e=0;e<n;e++)s=i["a"].subtract(t[e],o,g),u+=s.x*s.x,f+=s.x*s.y,h+=s.x*s.z,l+=s.y*s.y,p+=s.y*s.z,m+=s.z*s.z;u*=r,f*=r,h*=r,l*=r,p*=r,m*=r;const b=j;b[0]=u,b[1]=f,b[2]=h,b[3]=f,b[4]=l,b[5]=p,b[6]=h,b[7]=p,b[8]=m;const y=d["a"].computeEigenDecomposition(b,M),R=d["a"].clone(y.unitary,a.halfAxes);let T=d["a"].getColumn(R,0,x),P=d["a"].getColumn(R,1,v),z=d["a"].getColumn(R,2,C),E=-Number.MAX_VALUE,A=-Number.MAX_VALUE,N=-Number.MAX_VALUE,S=Number.MAX_VALUE,I=Number.MAX_VALUE,q=Number.MAX_VALUE;for(e=0;e<n;e++)s=t[e],E=Math.max(i["a"].dot(T,s),E),A=Math.max(i["a"].dot(P,s),A),N=Math.max(i["a"].dot(z,s),N),S=Math.min(i["a"].dot(T,s),S),I=Math.min(i["a"].dot(P,s),I),q=Math.min(i["a"].dot(z,s),q);T=i["a"].multiplyByScalar(T,.5*(S+E),T),P=i["a"].multiplyByScalar(P,.5*(I+A),P),z=i["a"].multiplyByScalar(z,.5*(q+N),z);const B=i["a"].add(T,P,a.center);i["a"].add(B,z,B);const F=w;return F.x=E-S,F.y=A-I,F.z=N-q,i["a"].multiplyByScalar(F,.5,F),d["a"].multiplyByScale(a.halfAxes,F,a.halfAxes),a};const R=new i["a"],T=new i["a"];function P(t,a,e,n,o,r,s,u,f,h,l){Object(c["a"])(l)||(l=new _);const p=l.halfAxes;d["a"].setColumn(p,0,a,p),d["a"].setColumn(p,1,e,p),d["a"].setColumn(p,2,n,p);let m=R;m.x=(o+r)/2,m.y=(s+u)/2,m.z=(f+h)/2;const b=T;b.x=(r-o)/2,b.y=(u-s)/2,b.z=(h-f)/2;const y=l.center;return m=d["a"].multiplyByVector(p,m,m),i["a"].add(t,m,y),d["a"].multiplyByScale(p,b,p),l}const z=new r["a"],E=new i["a"],A=new r["a"],N=new r["a"],S=new r["a"],I=new r["a"],q=new r["a"],B=new i["a"],F=new i["a"],L=new i["a"],U=new i["a"],V=new i["a"],k=new o["a"],D=new o["a"],W=new o["a"],X=new o["a"],J=new o["a"],Y=new i["a"],Z=new i["a"],G=new i["a"],$=new i["a"],H=new o["a"],K=new i["a"],Q=new i["a"],tt=new i["a"],at=new b["a"](i["a"].UNIT_X,0);_.fromRectangle=function(t,a,e,n,o){let c,h,l,d,m,_,O;if(a=Object(s["a"])(a,0),e=Object(s["a"])(e,0),n=Object(s["a"])(n,u["a"].WGS84),t.width<=p["a"].PI){const i=y["a"].center(t,z),s=n.cartographicToCartesian(i,E),u=new f["a"](s,n);O=u.plane;const p=i.longitude,g=t.south<0&&t.north>0?0:i.latitude,w=r["a"].fromRadians(p,t.north,e,A),x=r["a"].fromRadians(t.west,t.north,e,N),v=r["a"].fromRadians(t.west,g,e,S),C=r["a"].fromRadians(t.west,t.south,e,I),j=r["a"].fromRadians(p,t.south,e,q),M=n.cartographicToCartesian(w,B);let R=n.cartographicToCartesian(x,F);const T=n.cartographicToCartesian(v,L);let Y=n.cartographicToCartesian(C,U);const Z=n.cartographicToCartesian(j,V),G=u.projectPointToNearestOnPlane(M,k),$=u.projectPointToNearestOnPlane(R,D),H=u.projectPointToNearestOnPlane(T,W),K=u.projectPointToNearestOnPlane(Y,X),Q=u.projectPointToNearestOnPlane(Z,J);return c=Math.min($.x,H.x,K.x),h=-c,d=Math.max($.y,G.y),l=Math.min(K.y,Q.y),x.height=C.height=a,R=n.cartographicToCartesian(x,F),Y=n.cartographicToCartesian(C,U),m=Math.min(b["a"].getPointDistance(O,R),b["a"].getPointDistance(O,Y)),_=e,P(u.origin,u.xAxis,u.yAxis,u.zAxis,c,h,l,d,m,_,o)}const g=t.south>0,w=t.north<0,x=g?t.south:w?t.north:0,v=y["a"].center(t,z).longitude,C=i["a"].fromRadians(v,x,e,n,Y);C.z=0;const j=Math.abs(C.x)<p["a"].EPSILON10&&Math.abs(C.y)<p["a"].EPSILON10,M=j?i["a"].UNIT_X:i["a"].normalize(C,Z),R=i["a"].UNIT_Z,T=i["a"].cross(M,R,G);O=b["a"].fromPointNormal(C,M,at);const et=i["a"].fromRadians(v+p["a"].PI_OVER_TWO,x,e,n,$);h=i["a"].dot(b["a"].projectPointOntoPlane(O,et,H),T),c=-h,d=i["a"].fromRadians(0,t.north,w?a:e,n,K).z,l=i["a"].fromRadians(0,t.south,g?a:e,n,Q).z;const nt=i["a"].fromRadians(t.east,x,e,n,tt);return m=b["a"].getPointDistance(O,nt),_=0,P(C,T,R,M,c,h,l,d,m,_,o)},_.fromTransformation=function(t,a){return Object(c["a"])(a)||(a=new _),a.center=m["a"].getTranslation(t,a.center),a.halfAxes=m["a"].getMatrix3(t,a.halfAxes),a.halfAxes=d["a"].multiplyByScalar(a.halfAxes,.5,a.halfAxes),a},_.clone=function(t,a){if(Object(c["a"])(t))return Object(c["a"])(a)?(i["a"].clone(t.center,a.center),d["a"].clone(t.halfAxes,a.halfAxes),a):new _(t.center,t.halfAxes)},_.intersectPlane=function(t,a){const e=t.center,n=a.normal,o=t.halfAxes,r=n.x,s=n.y,c=n.z,u=Math.abs(r*o[d["a"].COLUMN0ROW0]+s*o[d["a"].COLUMN0ROW1]+c*o[d["a"].COLUMN0ROW2])+Math.abs(r*o[d["a"].COLUMN1ROW0]+s*o[d["a"].COLUMN1ROW1]+c*o[d["a"].COLUMN1ROW2])+Math.abs(r*o[d["a"].COLUMN2ROW0]+s*o[d["a"].COLUMN2ROW1]+c*o[d["a"].COLUMN2ROW2]),f=i["a"].dot(n,e)+a.distance;return f<=-u?h["a"].OUTSIDE:f>=u?h["a"].INSIDE:h["a"].INTERSECTING};const et=new i["a"],nt=new i["a"],ot=new i["a"],it=new i["a"],rt=new i["a"],st=new i["a"];_.distanceSquaredTo=function(t,a){const e=i["a"].subtract(a,t.center,R),n=t.halfAxes;let o=d["a"].getColumn(n,0,et),r=d["a"].getColumn(n,1,nt),s=d["a"].getColumn(n,2,ot);const c=i["a"].magnitude(o),u=i["a"].magnitude(r),f=i["a"].magnitude(s);let h=!0,l=!0,m=!0;c>0?i["a"].divideByScalar(o,c,o):h=!1,u>0?i["a"].divideByScalar(r,u,r):l=!1,f>0?i["a"].divideByScalar(s,f,s):m=!1;const b=!h+!l+!m;let y,_,O;if(1===b){let t=o;y=r,_=s,l?m||(t=s,_=o):(t=r,y=o),O=i["a"].cross(y,_,rt),t===o?o=O:t===r?r=O:t===s&&(s=O)}else if(2===b){y=o,l?y=r:m&&(y=s);let t=i["a"].UNIT_Y;t.equalsEpsilon(y,p["a"].EPSILON3)&&(t=i["a"].UNIT_X),_=i["a"].cross(y,t,it),i["a"].normalize(_,_),O=i["a"].cross(y,_,rt),i["a"].normalize(O,O),y===o?(r=_,s=O):y===r?(s=_,o=O):y===s&&(o=_,r=O)}else 3===b&&(o=i["a"].UNIT_X,r=i["a"].UNIT_Y,s=i["a"].UNIT_Z);const g=st;g.x=i["a"].dot(e,o),g.y=i["a"].dot(e,r),g.z=i["a"].dot(e,s);let w,x=0;return g.x<-c?(w=g.x+c,x+=w*w):g.x>c&&(w=g.x-c,x+=w*w),g.y<-u?(w=g.y+u,x+=w*w):g.y>u&&(w=g.y-u,x+=w*w),g.z<-f?(w=g.z+f,x+=w*w):g.z>f&&(w=g.z-f,x+=w*w),x};const ct=new i["a"],ut=new i["a"];_.computePlaneDistances=function(t,a,e,n){Object(c["a"])(n)||(n=new l["a"]);let o=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;const s=t.center,u=t.halfAxes,f=d["a"].getColumn(u,0,et),h=d["a"].getColumn(u,1,nt),p=d["a"].getColumn(u,2,ot),m=i["a"].add(f,h,ct);i["a"].add(m,p,m),i["a"].add(m,s,m);const b=i["a"].subtract(m,a,ut);let y=i["a"].dot(e,b);return o=Math.min(y,o),r=Math.max(y,r),i["a"].add(s,f,m),i["a"].add(m,h,m),i["a"].subtract(m,p,m),i["a"].subtract(m,a,b),y=i["a"].dot(e,b),o=Math.min(y,o),r=Math.max(y,r),i["a"].add(s,f,m),i["a"].subtract(m,h,m),i["a"].add(m,p,m),i["a"].subtract(m,a,b),y=i["a"].dot(e,b),o=Math.min(y,o),r=Math.max(y,r),i["a"].add(s,f,m),i["a"].subtract(m,h,m),i["a"].subtract(m,p,m),i["a"].subtract(m,a,b),y=i["a"].dot(e,b),o=Math.min(y,o),r=Math.max(y,r),i["a"].subtract(s,f,m),i["a"].add(m,h,m),i["a"].add(m,p,m),i["a"].subtract(m,a,b),y=i["a"].dot(e,b),o=Math.min(y,o),r=Math.max(y,r),i["a"].subtract(s,f,m),i["a"].add(m,h,m),i["a"].subtract(m,p,m),i["a"].subtract(m,a,b),y=i["a"].dot(e,b),o=Math.min(y,o),r=Math.max(y,r),i["a"].subtract(s,f,m),i["a"].subtract(m,h,m),i["a"].add(m,p,m),i["a"].subtract(m,a,b),y=i["a"].dot(e,b),o=Math.min(y,o),r=Math.max(y,r),i["a"].subtract(s,f,m),i["a"].subtract(m,h,m),i["a"].subtract(m,p,m),i["a"].subtract(m,a,b),y=i["a"].dot(e,b),o=Math.min(y,o),r=Math.max(y,r),n.start=o,n.stop=r,n};const ft=new i["a"],ht=new i["a"],lt=new i["a"];_.computeCorners=function(t,a){Object(c["a"])(a)||(a=[new i["a"],new i["a"],new i["a"],new i["a"],new i["a"],new i["a"],new i["a"],new i["a"]]);const e=t.center,n=t.halfAxes,o=d["a"].getColumn(n,0,ft),r=d["a"].getColumn(n,1,ht),s=d["a"].getColumn(n,2,lt);return i["a"].clone(e,a[0]),i["a"].subtract(a[0],o,a[0]),i["a"].subtract(a[0],r,a[0]),i["a"].subtract(a[0],s,a[0]),i["a"].clone(e,a[1]),i["a"].subtract(a[1],o,a[1]),i["a"].subtract(a[1],r,a[1]),i["a"].add(a[1],s,a[1]),i["a"].clone(e,a[2]),i["a"].subtract(a[2],o,a[2]),i["a"].add(a[2],r,a[2]),i["a"].subtract(a[2],s,a[2]),i["a"].clone(e,a[3]),i["a"].subtract(a[3],o,a[3]),i["a"].add(a[3],r,a[3]),i["a"].add(a[3],s,a[3]),i["a"].clone(e,a[4]),i["a"].add(a[4],o,a[4]),i["a"].subtract(a[4],r,a[4]),i["a"].subtract(a[4],s,a[4]),i["a"].clone(e,a[5]),i["a"].add(a[5],o,a[5]),i["a"].subtract(a[5],r,a[5]),i["a"].add(a[5],s,a[5]),i["a"].clone(e,a[6]),i["a"].add(a[6],o,a[6]),i["a"].add(a[6],r,a[6]),i["a"].subtract(a[6],s,a[6]),i["a"].clone(e,a[7]),i["a"].add(a[7],o,a[7]),i["a"].add(a[7],r,a[7]),i["a"].add(a[7],s,a[7]),a};const pt=new d["a"];_.computeTransformation=function(t,a){Object(c["a"])(a)||(a=new m["a"]);const e=t.center,n=d["a"].multiplyByUniformScale(t.halfAxes,2,pt);return m["a"].fromRotationTranslation(n,e,a)};const dt=new n["a"];_.isOccluded=function(t,a){const e=n["a"].fromOrientedBoundingBox(t,dt);return!a.isBoundingSphereVisible(e)},_.prototype.intersectPlane=function(t){return _.intersectPlane(this,t)},_.prototype.distanceSquaredTo=function(t){return _.distanceSquaredTo(this,t)},_.prototype.computePlaneDistances=function(t,a,e){return _.computePlaneDistances(this,t,a,e)},_.prototype.computeCorners=function(t){return _.computeCorners(this,t)},_.prototype.computeTransformation=function(t){return _.computeTransformation(this,t)},_.prototype.isOccluded=function(t){return _.isOccluded(this,t)},_.equals=function(t,a){return t===a||Object(c["a"])(t)&&Object(c["a"])(a)&&i["a"].equals(t.center,a.center)&&d["a"].equals(t.halfAxes,a.halfAxes)},_.prototype.clone=function(t){return _.clone(this,t)},_.prototype.equals=function(t){return _.equals(this,t)},a["a"]=_},c2eb:function(t,a,e){"use strict";var n=e("abab"),o=e("535a"),i=e("2f63");function r(t,a,e){t=Object(o["a"])(t,0),a=Object(o["a"])(a,0),e=Object(o["a"])(e,0),this.value=new Float32Array([t,a,e])}Object.defineProperties(r.prototype,{componentDatatype:{get:function(){return n["a"].FLOAT}},componentsPerAttribute:{get:function(){return 3}},normalize:{get:function(){return!1}}}),r.fromCartesian3=function(t){return new r(t.x,t.y,t.z)},r.toValue=function(t,a){return Object(i["a"])(a)||(a=new Float32Array([t.x,t.y,t.z])),a[0]=t.x,a[1]=t.y,a[2]=t.z,a},a["a"]=r},c34a:function(t,a,e){"use strict";var n=e("be18"),o=e("a561"),i=e("2384"),r=e("535a"),s=e("2f63"),c=e("93da"),u=e("52f0");function f(t){t=Object(r["a"])(t,r["a"].EMPTY_OBJECT),this.left=t.left,this._left=void 0,this.right=t.right,this._right=void 0,this.top=t.top,this._top=void 0,this.bottom=t.bottom,this._bottom=void 0,this.near=Object(r["a"])(t.near,1),this._near=this.near,this.far=Object(r["a"])(t.far,5e8),this._far=this.far,this._cullingVolume=new i["a"],this._orthographicMatrix=new u["a"]}function h(t){t.top===t._top&&t.bottom===t._bottom&&t.left===t._left&&t.right===t._right&&t.near===t._near&&t.far===t._far||(t._left=t.left,t._right=t.right,t._top=t.top,t._bottom=t.bottom,t._near=t.near,t._far=t.far,t._orthographicMatrix=u["a"].computeOrthographicOffCenter(t.left,t.right,t.bottom,t.top,t.near,t.far,t._orthographicMatrix))}Object.defineProperties(f.prototype,{projectionMatrix:{get:function(){return h(this),this._orthographicMatrix}}});const l=new n["a"],p=new n["a"],d=new n["a"],m=new n["a"];f.prototype.computeCullingVolume=function(t,a,e){const i=this._cullingVolume.planes,r=this.top,c=this.bottom,u=this.right,f=this.left,h=this.near,b=this.far,y=n["a"].cross(a,e,l);n["a"].normalize(y,y);const _=p;n["a"].multiplyByScalar(a,h,_),n["a"].add(t,_,_);const O=d;n["a"].multiplyByScalar(y,f,O),n["a"].add(_,O,O);let g=i[0];return Object(s["a"])(g)||(g=i[0]=new o["a"]),g.x=y.x,g.y=y.y,g.z=y.z,g.w=-n["a"].dot(y,O),n["a"].multiplyByScalar(y,u,O),n["a"].add(_,O,O),g=i[1],Object(s["a"])(g)||(g=i[1]=new o["a"]),g.x=-y.x,g.y=-y.y,g.z=-y.z,g.w=-n["a"].dot(n["a"].negate(y,m),O),n["a"].multiplyByScalar(e,c,O),n["a"].add(_,O,O),g=i[2],Object(s["a"])(g)||(g=i[2]=new o["a"]),g.x=e.x,g.y=e.y,g.z=e.z,g.w=-n["a"].dot(e,O),n["a"].multiplyByScalar(e,r,O),n["a"].add(_,O,O),g=i[3],Object(s["a"])(g)||(g=i[3]=new o["a"]),g.x=-e.x,g.y=-e.y,g.z=-e.z,g.w=-n["a"].dot(n["a"].negate(e,m),O),g=i[4],Object(s["a"])(g)||(g=i[4]=new o["a"]),g.x=a.x,g.y=a.y,g.z=a.z,g.w=-n["a"].dot(a,_),n["a"].multiplyByScalar(a,b,O),n["a"].add(t,O,O),g=i[5],Object(s["a"])(g)||(g=i[5]=new o["a"]),g.x=-a.x,g.y=-a.y,g.z=-a.z,g.w=-n["a"].dot(n["a"].negate(a,m),O),this._cullingVolume},f.prototype.getPixelDimensions=function(t,a,e,n,o){h(this);const i=this.right-this.left,r=this.top-this.bottom,s=n*i/t,c=n*r/a;return o.x=s,o.y=c,o},f.prototype.clone=function(t){return Object(s["a"])(t)||(t=new f),t.left=this.left,t.right=this.right,t.top=this.top,t.bottom=this.bottom,t.near=this.near,t.far=this.far,t._left=void 0,t._right=void 0,t._top=void 0,t._bottom=void 0,t._near=void 0,t._far=void 0,t},f.prototype.equals=function(t){return Object(s["a"])(t)&&t instanceof f&&this.right===t.right&&this.left===t.left&&this.top===t.top&&this.bottom===t.bottom&&this.near===t.near&&this.far===t.far},f.prototype.equalsEpsilon=function(t,a,e){return t===this||Object(s["a"])(t)&&t instanceof f&&c["a"].equalsEpsilon(this.right,t.right,a,e)&&c["a"].equalsEpsilon(this.left,t.left,a,e)&&c["a"].equalsEpsilon(this.top,t.top,a,e)&&c["a"].equalsEpsilon(this.bottom,t.bottom,a,e)&&c["a"].equalsEpsilon(this.near,t.near,a,e)&&c["a"].equalsEpsilon(this.far,t.far,a,e)},a["a"]=f},c630:function(t,a,e){"use strict";var n=e("be18"),o=e("2f63"),i=e("ee94"),r=e("eace"),s=e("d4ed");function c(t){this._url=s["a"].createIfNeeded(t),this._url.appendForwardSlash()}Object.defineProperties(c.prototype,{url:{get:function(){return this._url}}}),c.prototype.geocode=function(t,a){const e=this._url.getDerivedResource({url:a===i["a"].AUTOCOMPLETE?"autocomplete":"search",queryParameters:{text:t}});return e.fetchJson().then((function(t){return t.features.map((function(t){let a;const e=t.bbox;if(Object(o["a"])(e))a=r["a"].fromDegrees(e[0],e[1],e[2],e[3]);else{const e=t.geometry.coordinates[0],o=t.geometry.coordinates[1];a=n["a"].fromDegrees(e,o)}return{displayName:t.properties.label,destination:a}}))}))},a["a"]=c},ee11:function(t,a,e){"use strict";var n=e("7229"),o=e("bd8d"),i=e("2f63"),r=e("d4ed"),s=e("2812");function c(){this._cache={}}c.prototype.fromColor=function(t,a){return p(void 0,void 0,t,a,this._cache)},c.prototype.fromUrl=function(t,a,e){return p(t,void 0,a,e,this._cache)},c.prototype.fromMakiIconId=function(t,a,e){return p(Object(n["a"])(`Assets/Textures/maki/${encodeURIComponent(t)}.png`),void 0,a,e,this._cache)},c.prototype.fromText=function(t,a,e){return p(void 0,t,a,e,this._cache)};const u=new o["a"];function f(t,a,e){t.save(),t.scale(e/24,e/24),t.fillStyle=a.toCssColorString(),t.strokeStyle=a.brighten(.6,u).toCssColorString(),t.lineWidth=.846,t.beginPath(),t.moveTo(6.72,.422),t.lineTo(17.28,.422),t.bezierCurveTo(18.553,.422,19.577,1.758,19.577,3.415),t.lineTo(19.577,10.973),t.bezierCurveTo(19.577,12.63,18.553,13.966,17.282,13.966),t.lineTo(14.386,14.008),t.lineTo(11.826,23.578),t.lineTo(9.614,14.008),t.lineTo(6.719,13.965),t.bezierCurveTo(5.446,13.983,4.422,12.629,4.422,10.972),t.lineTo(4.422,3.416),t.bezierCurveTo(4.423,1.76,5.447,.423,6.718,.423),t.closePath(),t.fill(),t.stroke(),t.restore()}function h(t,a,e){const n=e/2.5;let i=n,r=n;a.width>a.height?r=n*(a.height/a.width):a.width<a.height&&(i=n*(a.width/a.height));const s=Math.round((e-i)/2),c=Math.round(7/24*e-r/2);t.globalCompositeOperation="destination-out",t.drawImage(a,s-1,c,i,r),t.drawImage(a,s,c-1,i,r),t.drawImage(a,s+1,c,i,r),t.drawImage(a,s,c+1,i,r),t.globalCompositeOperation="destination-over",t.fillStyle=o["a"].BLACK.toCssColorString(),t.fillRect(s-1,c-1,i+2,r+2),t.globalCompositeOperation="destination-out",t.drawImage(a,s,c,i,r),t.globalCompositeOperation="destination-over",t.fillStyle=o["a"].WHITE.toCssColorString(),t.fillRect(s-1,c-2,i+2,r+2)}const l=new Array(4);function p(t,a,e,n,o){l[0]=t,l[1]=a,l[2]=e,l[3]=n;const c=JSON.stringify(l),u=o[c];if(Object(i["a"])(u))return u;const p=document.createElement("canvas");p.width=n,p.height=n;const d=p.getContext("2d");if(f(d,e,n),Object(i["a"])(t)){const a=r["a"].createIfNeeded(t),e=a.fetchImage().then((function(t){return h(d,t,n),o[c]=p,p}));return o[c]=e,e}if(Object(i["a"])(a)){const t=Object(s["a"])(a,{font:`bold ${n}px sans-serif`});h(d,t,n)}return o[c]=p,p}a["a"]=c}}]);