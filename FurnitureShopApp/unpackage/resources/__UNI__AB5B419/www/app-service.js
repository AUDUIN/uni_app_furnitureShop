var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/uni-icons/uni-icons.wxml','./pages/address/address.wxml','./pages/cart/cart.wxml','./pages/confirmations/confirmations.wxml','./pages/day-deal/day-deal.wxml','./pages/detail/detail.wxml','./pages/editProfile/editProfile.wxml','./pages/firstrender/firstrender.wxml','./pages/home-product/home-product.wxml','./pages/login/login.wxml','./pages/profile/profile.wxml','./pages/shoppingCart/shoppingCart.wxml','./pages/sign/sign.wxml','./pages/spec/spec.wxml','./pages/successOrder/successOrder.wxml','./pages/upload/upload.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/firstrender/firstrender","pages/home-product/home-product","pages/spec/spec","pages/shoppingCart/shoppingCart","pages/cart/cart","pages/address/address","pages/day-deal/day-deal","pages/detail/detail","pages/confirmations/confirmations","pages/successOrder/successOrder","pages/profile/profile","pages/editProfile/editProfile","pages/upload/upload","pages/login/login","pages/sign/sign"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7A7E83","selectedColor":"#3cc51f","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/home-product/home-product","iconPath":"static/img/search.png","selectedIconPath":"static/img/ion-android-search%20-%20Ionicons.png","text":"探索"},{"pagePath":"pages/cart/cart","iconPath":"static/img/cart.png","selectedIconPath":"static/img/cart.png","text":"购物车"},{"pagePath":"pages/profile/profile","iconPath":"static/img/wode.png","selectedIconPath":"static/img/wode.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"FurnitureShopApp","compilerVersion":"2.4.2","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/uni-icons/uni-icons.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-icons/uni-icons.wxml']=$gwx('./components/uni-icons/uni-icons.wxml');

__wxAppCode__['pages/address/address.json']={"navigationBarTitleText":"","transparentTitle":"always","usingComponents":{}};
__wxAppCode__['pages/address/address.wxml']=$gwx('./pages/address/address.wxml');

__wxAppCode__['pages/cart/cart.json']={"navigationStyle":"custom","usingComponents":{}};
__wxAppCode__['pages/cart/cart.wxml']=$gwx('./pages/cart/cart.wxml');

__wxAppCode__['pages/confirmations/confirmations.json']={"navigationStyle":"custom","usingComponents":{}};
__wxAppCode__['pages/confirmations/confirmations.wxml']=$gwx('./pages/confirmations/confirmations.wxml');

__wxAppCode__['pages/day-deal/day-deal.json']={"navigationBarTitleText":"","transparentTitle":"always","usingComponents":{}};
__wxAppCode__['pages/day-deal/day-deal.wxml']=$gwx('./pages/day-deal/day-deal.wxml');

__wxAppCode__['pages/detail/detail.json']={"navigationBarTitleText":"","transparentTitle":"always","usingComponents":{}};
__wxAppCode__['pages/detail/detail.wxml']=$gwx('./pages/detail/detail.wxml');

__wxAppCode__['pages/editProfile/editProfile.json']={"navigationBarTitleText":"账号资料","usingComponents":{}};
__wxAppCode__['pages/editProfile/editProfile.wxml']=$gwx('./pages/editProfile/editProfile.wxml');

__wxAppCode__['pages/firstrender/firstrender.json']={"navigationStyle":"custom","usingComponents":{}};
__wxAppCode__['pages/firstrender/firstrender.wxml']=$gwx('./pages/firstrender/firstrender.wxml');

__wxAppCode__['pages/home-product/home-product.json']={"navigationBarTitleText":"","transparentTitle":"always","usingComponents":{"uni-icons":"/components/uni-icons/uni-icons"}};
__wxAppCode__['pages/home-product/home-product.wxml']=$gwx('./pages/home-product/home-product.wxml');

__wxAppCode__['pages/login/login.json']={"navigationStyle":"custom","usingComponents":{}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/profile/profile.json']={"navigationBarTitleText":"","transparentTitle":"always","usingComponents":{}};
__wxAppCode__['pages/profile/profile.wxml']=$gwx('./pages/profile/profile.wxml');

__wxAppCode__['pages/shoppingCart/shoppingCart.json']={"navigationStyle":"custom","usingComponents":{"uni-icon":"/components/uni-icons/uni-icons"}};
__wxAppCode__['pages/shoppingCart/shoppingCart.wxml']=$gwx('./pages/shoppingCart/shoppingCart.wxml');

__wxAppCode__['pages/sign/sign.json']={"navigationStyle":"custom","usingComponents":{}};
__wxAppCode__['pages/sign/sign.wxml']=$gwx('./pages/sign/sign.wxml');

__wxAppCode__['pages/spec/spec.json']={"navigationBarTitleText":"","transparentTitle":"always","usingComponents":{}};
__wxAppCode__['pages/spec/spec.wxml']=$gwx('./pages/spec/spec.wxml');

__wxAppCode__['pages/successOrder/successOrder.json']={"navigationBarTitleText":"","transparentTitle":"always","usingComponents":{}};
__wxAppCode__['pages/successOrder/successOrder.wxml']=$gwx('./pages/successOrder/successOrder.wxml');

__wxAppCode__['pages/upload/upload.json']={"navigationBarTitleText":"修改头像","usingComponents":{}};
__wxAppCode__['pages/upload/upload.wxml']=$gwx('./pages/upload/upload.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{1954:function(e,t,n){"use strict";(function(e){n("0ff5"),n("921b");var t=r(n("66fd")),o=r(n("88b4")),u=r(n("ecdd"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){c(e,t,n[t])})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default.config.productionTip=!1,t.default.prototype.$store=u.default,o.default.mpType="app";var f="http://106.13.236.138:3008";t.default.prototype.BASE_URL=f;var l=new t.default(a({store:u.default},o.default));e(l).$mount()}).call(this,n("6e42")["createApp"])},"33a6":function(e,t,n){"use strict";n.r(t);var o=n("7e57"),u=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);t["default"]=u.a},"7e57":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onLaunch:function(){console.log(e("App Launch"," at App.vue:4"))},onShow:function(){console.log(e("App Show"," at App.vue:7"))},onHide:function(){console.log(e("App Hide"," at App.vue:10"))}};t.default=n}).call(this,n("0de9")["default"])},"88b4":function(e,t,n){"use strict";n.r(t);var o=n("33a6");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);n("c791");var r,a,c=n("2877"),f=Object(c["a"])(o["default"],r,a,!1,null,null,null);t["default"]=f.exports},c791:function(e,t,n){"use strict";var o=n("ee20"),u=n.n(o);u.a},ee20:function(e,t,n){}},[["1954","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var r, o, a = t[0], c = t[1], l = t[2], s = 0, f = []; s < a.length; s++) {
      o = a[s], u[o] && f.push(u[o][0]), u[o] = 0;
    }

    for (r in c) {
      Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    }

    p && p(t);

    while (f.length) {
      f.shift()();
    }

    return i.push.apply(i, l || []), n();
  }

  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], r = !0, o = 1; o < n.length; o++) {
        var a = n[o];
        0 !== u[a] && (r = !1);
      }

      r && (i.splice(t--, 1), e = c(c.s = n[0]));
    }

    return e;
  }

  var r = {},
      o = {
    "common/runtime": 0
  },
      u = {
    "common/runtime": 0
  },
      i = [];

  function a(e) {
    return c.p + "" + e + ".js";
  }

  function c(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, c), n.l = !0, n.exports;
  }

  c.e = function (e) {
    var t = [],
        n = {
      "components/uni-icons/uni-icons": 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise(function (t, n) {
      for (var r = ({
        "components/uni-icons/uni-icons": "components/uni-icons/uni-icons"
      }[e] || e) + ".wxss", u = c.p + r, i = document.getElementsByTagName("link"), a = 0; a < i.length; a++) {
        var l = i[a],
            s = l.getAttribute("data-href") || l.getAttribute("href");
        if ("stylesheet" === l.rel && (s === r || s === u)) return t();
      }

      var f = document.getElementsByTagName("style");

      for (a = 0; a < f.length; a++) {
        l = f[a], s = l.getAttribute("data-href");
        if (s === r || s === u) return t();
      }

      var p = document.createElement("link");
      p.rel = "stylesheet", p.type = "text/css", p.onload = t, p.onerror = function (t) {
        var r = t && t.target && t.target.src || u,
            i = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
        i.request = r, delete o[e], p.parentNode.removeChild(p), n(i);
      }, p.href = u;
      var d = document.getElementsByTagName("head")[0];
      d.appendChild(p);
    }).then(function () {
      o[e] = 0;
    }));
    var r = u[e];
    if (0 !== r) if (r) t.push(r[2]);else {
      var i = new Promise(function (t, n) {
        r = u[e] = [t, n];
      });
      t.push(r[2] = i);
      var l,
          s = document.createElement("script");
      s.charset = "utf-8", s.timeout = 120, c.nc && s.setAttribute("nonce", c.nc), s.src = a(e), l = function l(t) {
        s.onerror = s.onload = null, clearTimeout(f);
        var n = u[e];

        if (0 !== n) {
          if (n) {
            var r = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src,
                i = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + o + ")");
            i.type = r, i.request = o, n[1](i);
          }

          u[e] = void 0;
        }
      };
      var f = setTimeout(function () {
        l({
          type: "timeout",
          target: s
        });
      }, 12e4);
      s.onerror = s.onload = l, document.head.appendChild(s);
    }
    return Promise.all(t);
  }, c.m = e, c.c = r, c.d = function (e, t, n) {
    c.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, c.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, c.t = function (e, t) {
    if (1 & t && (e = c(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (c.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      c.d(n, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return n;
  }, c.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return c.d(t, "a", t), t;
  }, c.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, c.p = "/", c.oe = function (e) {
    throw console.error(e), e;
  };
  var l = global["webpackJsonp"] = global["webpackJsonp"] || [],
      s = l.push.bind(l);
  l.push = t, l = l.slice();

  for (var f = 0; f < l.length; f++) {
    t(l[f]);
  }

  var p = s;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0bb1":function(e,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t={contact:"",person:"",personadd:"","contact-filled":"","person-filled":"","personadd-filled":"",phone:"",email:"",chatbubble:"",chatboxes:"","phone-filled":"","email-filled":"","chatbubble-filled":"","chatboxes-filled":"",weibo:"",weixin:"",pengyouquan:"",chat:"",qq:"",videocam:"",camera:"",mic:"",location:"","mic-filled":"",speech:"","location-filled":"",micoff:"",image:"",map:"",compose:"",trash:"",upload:"",download:"",close:"",redo:"",undo:"",refresh:"",star:"",plus:"",minus:"",circle:"",checkbox:"","close-filled":"",clear:"","refresh-filled":"","star-filled":"","plus-filled":"","minus-filled":"","circle-filled":"","checkbox-filled":"",closeempty:"",refreshempty:"",reload:"",starhalf:"",spinner:"","spinner-cycle":"",search:"",plusempty:"",forward:"",back:"","left-nav":"",checkmarkempty:"",home:"",navigate:"",gear:"",paperplane:"",info:"",help:"",locked:"",more:"",flag:"","home-filled":"","gear-filled":"","info-filled":"","help-filled":"","more-filled":"",settings:"",list:"",bars:"",loop:"",paperclip:"",eye:"",arrowup:"",arrowdown:"",arrowleft:"",arrowright:"",arrowthinup:"",arrowthindown:"",arrowthinleft:"",arrowthinright:"",pulldown:"",closefill:"",sound:"",scan:""};o.default=t},"0de9":function(e,o,a){"use strict";function t(e){var o=Object.prototype.toString.call(e);return o.substring(8,o.length-1)}function n(){for(var e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];var n=o.map(function(e){var o=Object.prototype.toString.call(e);if("[object object]"===o.toLowerCase())try{e="---BEGIN:JSON---"+JSON.stringify(e)+"---END:JSON---"}catch(n){e="[object object]"}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var a=t(e).toUpperCase();e="NUMBER"===a||"BOOLEAN"===a?"---BEGIN:"+a+"---"+e+"---END:"+a+"---":String(e)}return e}),d="";if(n.length>1){var m=n.pop();d=n.join("---COMMA---"),0===m.indexOf(" at ")?d+=m:d+="---COMMA---"+m}else d=n[0];return d}Object.defineProperty(o,"__esModule",{value:!0}),o.default=n},"0ff5":function(e,o,a){},"1d06":function(e,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t={pages:{"pages/firstrender/firstrender":{navigationStyle:"custom"},"pages/home-product/home-product":{navigationBarTitleText:"",transparentTitle:"always"},"pages/spec/spec":{navigationBarTitleText:"",transparentTitle:"always"},"pages/shoppingCart/shoppingCart":{navigationStyle:"custom"},"pages/cart/cart":{navigationStyle:"custom"},"pages/address/address":{navigationBarTitleText:"",transparentTitle:"always"},"pages/day-deal/day-deal":{navigationBarTitleText:"",transparentTitle:"always"},"pages/detail/detail":{navigationBarTitleText:"",transparentTitle:"always"},"pages/confirmations/confirmations":{navigationStyle:"custom"},"pages/successOrder/successOrder":{navigationBarTitleText:"",transparentTitle:"always"},"pages/profile/profile":{navigationBarTitleText:"",transparentTitle:"always"},"pages/editProfile/editProfile":{navigationBarTitleText:"账号资料"},"pages/upload/upload":{navigationBarTitleText:"修改头像"},"pages/login/login":{navigationStyle:"custom"},"pages/sign/sign":{navigationStyle:"custom"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}};o.default=t},2877:function(e,o,a){"use strict";function t(e,o,a,t,n,d,m,r){var i,C="function"===typeof e?e.options:e;if(o&&(C.render=o,C.staticRenderFns=a,C._compiled=!0),t&&(C.functional=!0),d&&(C._scopeId="data-v-"+d),m?(i=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(m)},C._ssrRegister=i):n&&(i=r?function(){n.call(this,this.$root.$options.shadowRoot)}:n),i)if(C.functional){C._injectStyles=i;var N=C.render;C.render=function(e,o){return i.call(o),N(e,o)}}else{var s=C.beforeCreate;C.beforeCreate=s?[].concat(s,i):[i]}return{exports:e,options:C}}a.d(o,"a",function(){return t})},"2f62":function(e,o,a){"use strict";a.r(o),a.d(o,"Store",function(){return f}),a.d(o,"install",function(){return S}),a.d(o,"mapState",function(){return k}),a.d(o,"mapMutations",function(){return j}),a.d(o,"mapGetters",function(){return x}),a.d(o,"mapActions",function(){return E}),a.d(o,"createNamespacedHelpers",function(){return T});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var t=function(e){var o=Number(e.version.split(".")[0]);if(o>=2)e.mixin({beforeCreate:t});else{var a=e.prototype._init;e.prototype._init=function(e){void 0===e&&(e={}),e.init=e.init?[t].concat(e.init):t,a.call(this,e)}}function t(){var e=this.$options;e.store?this.$store="function"===typeof e.store?e.store():e.store:e.parent&&e.parent.$store&&(this.$store=e.parent.$store)}},n="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function d(e){n&&(e._devtoolHook=n,n.emit("vuex:init",e),n.on("vuex:travel-to-state",function(o){e.replaceState(o)}),e.subscribe(function(e,o){n.emit("vuex:mutation",e,o)}))}function m(e,o){Object.keys(e).forEach(function(a){return o(e[a],a)})}function r(e){return null!==e&&"object"===typeof e}function i(e){return e&&"function"===typeof e.then}var C=function(e,o){this.runtime=o,this._children=Object.create(null),this._rawModule=e;var a=e.state;this.state=("function"===typeof a?a():a)||{}},N={namespaced:{configurable:!0}};N.namespaced.get=function(){return!!this._rawModule.namespaced},C.prototype.addChild=function(e,o){this._children[e]=o},C.prototype.removeChild=function(e){delete this._children[e]},C.prototype.getChild=function(e){return this._children[e]},C.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},C.prototype.forEachChild=function(e){m(this._children,e)},C.prototype.forEachGetter=function(e){this._rawModule.getters&&m(this._rawModule.getters,e)},C.prototype.forEachAction=function(e){this._rawModule.actions&&m(this._rawModule.actions,e)},C.prototype.forEachMutation=function(e){this._rawModule.mutations&&m(this._rawModule.mutations,e)},Object.defineProperties(C.prototype,N);var s=function(e){this.register([],e,!1)};function u(e,o,a){if(o.update(a),a.modules)for(var t in a.modules){if(!o.getChild(t))return void 0;u(e.concat(t),o.getChild(t),a.modules[t])}}s.prototype.get=function(e){return e.reduce(function(e,o){return e.getChild(o)},this.root)},s.prototype.getNamespace=function(e){var o=this.root;return e.reduce(function(e,a){return o=o.getChild(a),e+(o.namespaced?a+"/":"")},"")},s.prototype.update=function(e){u([],this.root,e)},s.prototype.register=function(e,o,a){var t=this;void 0===a&&(a=!0);var n=new C(o,a);if(0===e.length)this.root=n;else{var d=this.get(e.slice(0,-1));d.addChild(e[e.length-1],n)}o.modules&&m(o.modules,function(o,n){t.register(e.concat(n),o,a)})},s.prototype.unregister=function(e){var o=this.get(e.slice(0,-1)),a=e[e.length-1];o.getChild(a).runtime&&o.removeChild(a)};var c;var f=function(e){var o=this;void 0===e&&(e={}),!c&&"undefined"!==typeof window&&window.Vue&&S(window.Vue);var a=e.plugins;void 0===a&&(a=[]);var t=e.strict;void 0===t&&(t=!1);var n=e.state;void 0===n&&(n={}),"function"===typeof n&&(n=n()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new s(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new c;var m=this,r=this,i=r.dispatch,C=r.commit;this.dispatch=function(e,o){return i.call(m,e,o)},this.commit=function(e,o,a){return C.call(m,e,o,a)},this.strict=t,g(this,n,[],this._modules.root),v(this,n),a.forEach(function(e){return e(o)}),c.config.devtools&&d(this)},l={state:{configurable:!0}};function p(e,o){return o.indexOf(e)<0&&o.push(e),function(){var a=o.indexOf(e);a>-1&&o.splice(a,1)}}function h(e,o){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var a=e.state;g(e,a,[],e._modules.root,!0),v(e,a,o)}function v(e,o,a){var t=e._vm;e.getters={};var n=e._wrappedGetters,d={};m(n,function(o,a){d[a]=function(){return o(e)},Object.defineProperty(e.getters,a,{get:function(){return e._vm[a]},enumerable:!0})});var r=c.config.silent;c.config.silent=!0,e._vm=new c({data:{$$state:o},computed:d}),c.config.silent=r,e.strict&&$(e),t&&(a&&e._withCommit(function(){t._data.$$state=null}),c.nextTick(function(){return t.$destroy()}))}function g(e,o,a,t,n){var d=!a.length,m=e._modules.getNamespace(a);if(t.namespaced&&(e._modulesNamespaceMap[m]=t),!d&&!n){var r=O(o,a.slice(0,-1)),i=a[a.length-1];e._withCommit(function(){c.set(r,i,t.state)})}var C=t.context=y(e,m,a);t.forEachMutation(function(o,a){var t=m+a;b(e,t,o,C)}),t.forEachAction(function(o,a){var t=o.root?a:m+a,n=o.handler||o;R(e,t,n,C)}),t.forEachGetter(function(o,a){var t=m+a;w(e,t,o,C)}),t.forEachChild(function(t,d){g(e,o,a.concat(d),t,n)})}function y(e,o,a){var t=""===o,n={dispatch:t?e.dispatch:function(a,t,n){var d=A(a,t,n),m=d.payload,r=d.options,i=d.type;return r&&r.root||(i=o+i),e.dispatch(i,m)},commit:t?e.commit:function(a,t,n){var d=A(a,t,n),m=d.payload,r=d.options,i=d.type;r&&r.root||(i=o+i),e.commit(i,m,r)}};return Object.defineProperties(n,{getters:{get:t?function(){return e.getters}:function(){return _(e,o)}},state:{get:function(){return O(e.state,a)}}}),n}function _(e,o){var a={},t=o.length;return Object.keys(e.getters).forEach(function(n){if(n.slice(0,t)===o){var d=n.slice(t);Object.defineProperty(a,d,{get:function(){return e.getters[n]},enumerable:!0})}}),a}function b(e,o,a,t){var n=e._mutations[o]||(e._mutations[o]=[]);n.push(function(o){a.call(e,t.state,o)})}function R(e,o,a,t){var n=e._actions[o]||(e._actions[o]=[]);n.push(function(o,n){var d=a.call(e,{dispatch:t.dispatch,commit:t.commit,getters:t.getters,state:t.state,rootGetters:e.getters,rootState:e.state},o,n);return i(d)||(d=Promise.resolve(d)),e._devtoolHook?d.catch(function(o){throw e._devtoolHook.emit("vuex:error",o),o}):d})}function w(e,o,a,t){e._wrappedGetters[o]||(e._wrappedGetters[o]=function(e){return a(t.state,t.getters,e.state,e.getters)})}function $(e){e._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function O(e,o){return o.length?o.reduce(function(e,o){return e[o]},e):e}function A(e,o,a){return r(e)&&e.type&&(a=o,o=e,e=e.type),{type:e,payload:o,options:a}}function S(e){c&&e===c||(c=e,t(c))}l.state.get=function(){return this._vm._data.$$state},l.state.set=function(e){0},f.prototype.commit=function(e,o,a){var t=this,n=A(e,o,a),d=n.type,m=n.payload,r=(n.options,{type:d,payload:m}),i=this._mutations[d];i&&(this._withCommit(function(){i.forEach(function(e){e(m)})}),this._subscribers.forEach(function(e){return e(r,t.state)}))},f.prototype.dispatch=function(e,o){var a=this,t=A(e,o),n=t.type,d=t.payload,m={type:n,payload:d},r=this._actions[n];if(r)return this._actionSubscribers.forEach(function(e){return e(m,a.state)}),r.length>1?Promise.all(r.map(function(e){return e(d)})):r[0](d)},f.prototype.subscribe=function(e){return p(e,this._subscribers)},f.prototype.subscribeAction=function(e){return p(e,this._actionSubscribers)},f.prototype.watch=function(e,o,a){var t=this;return this._watcherVM.$watch(function(){return e(t.state,t.getters)},o,a)},f.prototype.replaceState=function(e){var o=this;this._withCommit(function(){o._vm._data.$$state=e})},f.prototype.registerModule=function(e,o,a){void 0===a&&(a={}),"string"===typeof e&&(e=[e]),this._modules.register(e,o),g(this,this.state,e,this._modules.get(e),a.preserveState),v(this,this.state)},f.prototype.unregisterModule=function(e){var o=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var a=O(o.state,e.slice(0,-1));c.delete(a,e[e.length-1])}),h(this)},f.prototype.hotUpdate=function(e){this._modules.update(e),h(this,!0)},f.prototype._withCommit=function(e){var o=this._committing;this._committing=!0,e(),this._committing=o},Object.defineProperties(f.prototype,l);var k=P(function(e,o){var a={};return D(o).forEach(function(o){var t=o.key,n=o.val;a[t]=function(){var o=this.$store.state,a=this.$store.getters;if(e){var t=I(this.$store,"mapState",e);if(!t)return;o=t.context.state,a=t.context.getters}return"function"===typeof n?n.call(this,o,a):o[n]},a[t].vuex=!0}),a}),j=P(function(e,o){var a={};return D(o).forEach(function(o){var t=o.key,n=o.val;a[t]=function(){var o=[],a=arguments.length;while(a--)o[a]=arguments[a];var t=this.$store.commit;if(e){var d=I(this.$store,"mapMutations",e);if(!d)return;t=d.context.commit}return"function"===typeof n?n.apply(this,[t].concat(o)):t.apply(this.$store,[n].concat(o))}}),a}),x=P(function(e,o){var a={};return D(o).forEach(function(o){var t=o.key,n=o.val;n=e+n,a[t]=function(){if(!e||I(this.$store,"mapGetters",e))return this.$store.getters[n]},a[t].vuex=!0}),a}),E=P(function(e,o){var a={};return D(o).forEach(function(o){var t=o.key,n=o.val;a[t]=function(){var o=[],a=arguments.length;while(a--)o[a]=arguments[a];var t=this.$store.dispatch;if(e){var d=I(this.$store,"mapActions",e);if(!d)return;t=d.context.dispatch}return"function"===typeof n?n.apply(this,[t].concat(o)):t.apply(this.$store,[n].concat(o))}}),a}),T=function(e){return{mapState:k.bind(null,e),mapGetters:x.bind(null,e),mapMutations:j.bind(null,e),mapActions:E.bind(null,e)}};function D(e){return Array.isArray(e)?e.map(function(e){return{key:e,val:e}}):Object.keys(e).map(function(o){return{key:o,val:e[o]}})}function P(e){return function(o,a){return"string"!==typeof o?(a=o,o=""):"/"!==o.charAt(o.length-1)&&(o+="/"),e(o,a)}}function I(e,o,a){var t=e._modulesNamespaceMap[a];return t}var M={Store:f,install:S,version:"3.0.1",mapState:k,mapMutations:j,mapGetters:x,mapActions:E,createNamespacedHelpers:T};o["default"]=M},"5d69":function(e,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t=[{Name:"北京",Code:"11",City:[{Name:"东城",Code:"1"},{Name:"西城",Code:"2"},{Name:"朝阳",Code:"5"},{Name:"丰台",Code:"6"},{Name:"石景山",Code:"7"},{Name:"海淀",Code:"8"},{Name:"门头沟",Code:"9"},{Name:"房山",Code:"11"},{Name:"通州",Code:"12"},{Name:"顺义",Code:"13"},{Name:"昌平",Code:"21"},{Name:"大兴",Code:"24"},{Name:"平谷",Code:"26"},{Name:"怀柔",Code:"27"},{Name:"密云",Code:"28"},{Name:"延庆",Code:"29"}]},{Name:"天津",Code:"12",City:[{Name:"和平",Code:"1"},{Name:"河东",Code:"2"},{Name:"河西",Code:"3"},{Name:"南开",Code:"4"},{Name:"河北",Code:"5"},{Name:"红桥",Code:"6"},{Name:"滨海新区",Code:"26"},{Name:"东丽",Code:"10"},{Name:"西青",Code:"11"},{Name:"津南",Code:"12"},{Name:"北辰",Code:"13"},{Name:"宁河",Code:"21"},{Name:"武清",Code:"22"},{Name:"静海",Code:"23"},{Name:"宝坻",Code:"24"},{Name:"蓟县",Code:"25"}]},{Name:"河北",Code:"13",City:[{Name:"石家庄",Code:"1",Region:[{Name:"长安区",Code:"2"},{Name:"桥东区",Code:"3"},{Name:"桥西区",Code:"4"},{Name:"新华区",Code:"5"},{Name:"井陉矿区",Code:"7"},{Name:"裕华区",Code:"8"},{Name:"井陉县",Code:"21"},{Name:"正定县",Code:"23"},{Name:"栾城县",Code:"24"},{Name:"行唐县",Code:"25"},{Name:"灵寿县",Code:"26"},{Name:"高邑县",Code:"27"},{Name:"深泽县",Code:"28"},{Name:"赞皇县",Code:"29"},{Name:"无极县",Code:"30"},{Name:"平山县",Code:"31"},{Name:"元氏县",Code:"32"},{Name:"赵县",Code:"33"},{Name:"辛集市",Code:"81"},{Name:"藁城市",Code:"82"},{Name:"晋州市",Code:"83"},{Name:"新乐市",Code:"84"},{Name:"鹿泉市",Code:"85"}]},{Name:"唐山",Code:"2",Region:[{Name:"路南区",Code:"2"},{Name:"路北区",Code:"3"},{Name:"古冶区",Code:"4"},{Name:"开平区",Code:"5"},{Name:"丰南区",Code:"7"},{Name:"丰润区",Code:"8"},{Name:"曹妃甸区",Code:"9"},{Name:"滦　县",Code:"23"},{Name:"滦南县",Code:"24"},{Name:"乐亭县",Code:"25"},{Name:"迁西县",Code:"27"},{Name:"玉田县",Code:"29"},{Name:"遵化市",Code:"81"},{Name:"迁安市",Code:"83"}]},{Name:"秦皇岛",Code:"3",Region:[{Name:"海港区",Code:"2"},{Name:"山海关区",Code:"3"},{Name:"北戴河区",Code:"4"},{Name:"青龙满族自治县",Code:"21"},{Name:"昌黎县",Code:"22"},{Name:"抚宁县",Code:"23"},{Name:"卢龙县",Code:"24"}]},{Name:"邯郸",Code:"4",Region:[{Name:"邯山区",Code:"2"},{Name:"丛台区",Code:"3"},{Name:"复兴区",Code:"4"},{Name:"峰峰矿区",Code:"6"},{Name:"邯郸县",Code:"21"},{Name:"临漳县",Code:"23"},{Name:"成安县",Code:"24"},{Name:"大名县",Code:"25"},{Name:"涉　县",Code:"26"},{Name:"磁　县",Code:"27"},{Name:"肥乡县",Code:"28"},{Name:"永年县",Code:"29"},{Name:"邱　县",Code:"30"},{Name:"鸡泽县",Code:"31"},{Name:"广平县",Code:"32"},{Name:"馆陶县",Code:"33"},{Name:"魏　县",Code:"34"},{Name:"曲周县",Code:"35"},{Name:"武安市",Code:"81"}]},{Name:"邢台",Code:"5",Region:[{Name:"桥东区",Code:"2"},{Name:"桥西区",Code:"3"},{Name:"邢台县",Code:"21"},{Name:"临城县",Code:"22"},{Name:"内丘县",Code:"23"},{Name:"柏乡县",Code:"24"},{Name:"隆尧县",Code:"25"},{Name:"任　县",Code:"26"},{Name:"南和县",Code:"27"},{Name:"宁晋县",Code:"28"},{Name:"巨鹿县",Code:"29"},{Name:"新河县",Code:"30"},{Name:"广宗县",Code:"31"},{Name:"平乡县",Code:"32"},{Name:"威　县",Code:"33"},{Name:"清河县",Code:"34"},{Name:"临西县",Code:"35"},{Name:"南宫市",Code:"81"},{Name:"沙河市",Code:"82"}]},{Name:"保定",Code:"6",Region:[{Name:"新市区",Code:"2"},{Name:"北市区",Code:"3"},{Name:"南市区",Code:"4"},{Name:"满城县",Code:"21"},{Name:"清苑县",Code:"22"},{Name:"涞水县",Code:"23"},{Name:"阜平县",Code:"24"},{Name:"徐水县",Code:"25"},{Name:"定兴县",Code:"26"},{Name:"唐　县",Code:"27"},{Name:"高阳县",Code:"28"},{Name:"容城县",Code:"29"},{Name:"涞源县",Code:"30"},{Name:"望都县",Code:"31"},{Name:"安新县",Code:"32"},{Name:"易　县",Code:"33"},{Name:"曲阳县",Code:"34"},{Name:"蠡　县",Code:"35"},{Name:"顺平县",Code:"36"},{Name:"博野县",Code:"37"},{Name:"雄　县",Code:"38"},{Name:"涿州市",Code:"81"},{Name:"定州市",Code:"82"},{Name:"安国市",Code:"83"},{Name:"高碑店市",Code:"84"}]},{Name:"张家口",Code:"7",Region:[{Name:"桥东区",Code:"2"},{Name:"桥西区",Code:"3"},{Name:"宣化区",Code:"5"},{Name:"下花园区",Code:"6"},{Name:"宣化县",Code:"21"},{Name:"张北县",Code:"22"},{Name:"康保县",Code:"23"},{Name:"沽源县",Code:"24"},{Name:"尚义县",Code:"25"},{Name:"蔚　县",Code:"26"},{Name:"阳原县",Code:"27"},{Name:"怀安县",Code:"28"},{Name:"万全县",Code:"29"},{Name:"怀来县",Code:"30"},{Name:"涿鹿县",Code:"31"},{Name:"赤城县",Code:"32"},{Name:"崇礼县",Code:"33"}]},{Name:"承德",Code:"8",Region:[{Name:"双桥区",Code:"2"},{Name:"双滦区",Code:"3"},{Name:"鹰手营子矿区",Code:"4"},{Name:"承德县",Code:"21"},{Name:"兴隆县",Code:"22"},{Name:"平泉县",Code:"23"},{Name:"滦平县",Code:"24"},{Name:"隆化县",Code:"25"},{Name:"丰宁满族自治县",Code:"26"},{Name:"宽城满族自治县",Code:"27"},{Name:"围场满族蒙古族自治县",Code:"28"}]},{Name:"沧州",Code:"9",Region:[{Name:"新华区",Code:"2"},{Name:"运河区",Code:"3"},{Name:"沧　县",Code:"21"},{Name:"青　县",Code:"22"},{Name:"东光县",Code:"23"},{Name:"海兴县",Code:"24"},{Name:"盐山县",Code:"25"},{Name:"肃宁县",Code:"26"},{Name:"南皮县",Code:"27"},{Name:"吴桥县",Code:"28"},{Name:"献　县",Code:"29"},{Name:"孟村回族自治县",Code:"30"},{Name:"泊头市",Code:"81"},{Name:"任丘市",Code:"82"},{Name:"黄骅市",Code:"83"},{Name:"河间市",Code:"84"}]},{Name:"廊坊",Code:"10",Region:[{Name:"安次区",Code:"2"},{Name:"广阳区",Code:"3"},{Name:"固安县",Code:"22"},{Name:"永清县",Code:"23"},{Name:"香河县",Code:"24"},{Name:"大城县",Code:"25"},{Name:"文安县",Code:"26"},{Name:"大厂回族自治县",Code:"28"},{Name:"霸州市",Code:"81"},{Name:"三河市",Code:"82"}]},{Name:"衡水",Code:"11",Region:[{Name:"桃城区",Code:"2"},{Name:"枣强县",Code:"21"},{Name:"武邑县",Code:"22"},{Name:"武强县",Code:"23"},{Name:"饶阳县",Code:"24"},{Name:"安平县",Code:"25"},{Name:"故城县",Code:"26"},{Name:"景　县",Code:"27"},{Name:"阜城县",Code:"28"},{Name:"冀州市",Code:"81"},{Name:"深州市",Code:"82"}]}]},{Name:"山西",Code:"14",City:[{Name:"太原",Code:"1",Region:[{Name:"小店区",Code:"5"},{Name:"迎泽区",Code:"6"},{Name:"杏花岭区",Code:"7"},{Name:"尖草坪区",Code:"8"},{Name:"万柏林区",Code:"9"},{Name:"晋源区",Code:"10"},{Name:"清徐县",Code:"21"},{Name:"阳曲县",Code:"22"},{Name:"娄烦县",Code:"23"},{Name:"古交市",Code:"81"}]},{Name:"大同",Code:"2",Region:[{Name:"城　区",Code:"2"},{Name:"矿　区",Code:"3"},{Name:"南郊区",Code:"11"},{Name:"新荣区",Code:"12"},{Name:"阳高县",Code:"21"},{Name:"天镇县",Code:"22"},{Name:"广灵县",Code:"23"},{Name:"灵丘县",Code:"24"},{Name:"浑源县",Code:"25"},{Name:"左云县",Code:"26"},{Name:"大同县",Code:"27"}]},{Name:"阳泉",Code:"3",Region:[{Name:"城　区",Code:"2"},{Name:"矿　区",Code:"3"},{Name:"郊　区",Code:"11"},{Name:"平定县",Code:"21"},{Name:"盂　县",Code:"22"}]},{Name:"长治",Code:"4",Region:[{Name:"城　区",Code:"2"},{Name:"郊　区",Code:"11"},{Name:"长治县",Code:"21"},{Name:"襄垣县",Code:"23"},{Name:"屯留县",Code:"24"},{Name:"平顺县",Code:"25"},{Name:"黎城县",Code:"26"},{Name:"壶关县",Code:"27"},{Name:"长子县",Code:"28"},{Name:"武乡县",Code:"29"},{Name:"沁　县",Code:"30"},{Name:"沁源县",Code:"31"},{Name:"潞城市",Code:"81"}]},{Name:"晋城",Code:"5",Region:[{Name:"城　区",Code:"2"},{Name:"沁水县",Code:"21"},{Name:"阳城县",Code:"22"},{Name:"陵川县",Code:"24"},{Name:"泽州县",Code:"25"},{Name:"高平市",Code:"81"}]},{Name:"朔州",Code:"6",Region:[{Name:"朔城区",Code:"2"},{Name:"平鲁区",Code:"3"},{Name:"山阴县",Code:"21"},{Name:"应　县",Code:"22"},{Name:"右玉县",Code:"23"},{Name:"怀仁县",Code:"24"}]},{Name:"晋中",Code:"7",Region:[{Name:"榆次区",Code:"2"},{Name:"榆社县",Code:"21"},{Name:"左权县",Code:"22"},{Name:"和顺县",Code:"23"},{Name:"昔阳县",Code:"24"},{Name:"寿阳县",Code:"25"},{Name:"太谷县",Code:"26"},{Name:"祁　县",Code:"27"},{Name:"平遥县",Code:"28"},{Name:"灵石县",Code:"29"},{Name:"介休市",Code:"81"}]},{Name:"运城",Code:"8",Region:[{Name:"盐湖区",Code:"2"},{Name:"临猗县",Code:"21"},{Name:"万荣县",Code:"22"},{Name:"闻喜县",Code:"23"},{Name:"稷山县",Code:"24"},{Name:"新绛县",Code:"25"},{Name:"绛　县",Code:"26"},{Name:"垣曲县",Code:"27"},{Name:"夏　县",Code:"28"},{Name:"平陆县",Code:"29"},{Name:"芮城县",Code:"30"},{Name:"永济市",Code:"81"},{Name:"河津市",Code:"82"}]},{Name:"忻州",Code:"9",Region:[{Name:"忻府区",Code:"2"},{Name:"定襄县",Code:"21"},{Name:"五台县",Code:"22"},{Name:"代　县",Code:"23"},{Name:"繁峙县",Code:"24"},{Name:"宁武县",Code:"25"},{Name:"静乐县",Code:"26"},{Name:"神池县",Code:"27"},{Name:"五寨县",Code:"28"},{Name:"岢岚县",Code:"29"},{Name:"河曲县",Code:"30"},{Name:"保德县",Code:"31"},{Name:"偏关县",Code:"32"},{Name:"原平市",Code:"81"}]},{Name:"临汾",Code:"10",Region:[{Name:"尧都区",Code:"2"},{Name:"曲沃县",Code:"21"},{Name:"翼城县",Code:"22"},{Name:"襄汾县",Code:"23"},{Name:"洪洞县",Code:"24"},{Name:"古　县",Code:"25"},{Name:"安泽县",Code:"26"},{Name:"浮山县",Code:"27"},{Name:"吉　县",Code:"28"},{Name:"乡宁县",Code:"29"},{Name:"大宁县",Code:"30"},{Name:"隰　县",Code:"31"},{Name:"永和县",Code:"32"},{Name:"蒲　县",Code:"33"},{Name:"汾西县",Code:"34"},{Name:"侯马市",Code:"81"},{Name:"霍州市",Code:"82"}]},{Name:"吕梁",Code:"11",Region:[{Name:"离石区",Code:"2"},{Name:"文水县",Code:"21"},{Name:"交城县",Code:"22"},{Name:"兴　县",Code:"23"},{Name:"临　县",Code:"24"},{Name:"柳林县",Code:"25"},{Name:"石楼县",Code:"26"},{Name:"岚　县",Code:"27"},{Name:"方山县",Code:"28"},{Name:"中阳县",Code:"29"},{Name:"交口县",Code:"30"},{Name:"孝义市",Code:"81"},{Name:"汾阳市",Code:"82"}]}]},{Name:"内蒙古",Code:"15",City:[{Name:"呼和浩特",Code:"1",Region:[{Name:"新城区",Code:"2"},{Name:"回民区",Code:"3"},{Name:"玉泉区",Code:"4"},{Name:"赛罕区",Code:"5"},{Name:"土默特左旗",Code:"21"},{Name:"托克托县",Code:"22"},{Name:"和林格尔县",Code:"23"},{Name:"清水河县",Code:"24"},{Name:"武川县",Code:"25"}]},{Name:"包头",Code:"2",Region:[{Name:"东河区",Code:"2"},{Name:"昆都仑区",Code:"3"},{Name:"青山区",Code:"4"},{Name:"石拐区",Code:"5"},{Name:"白云鄂博矿区",Code:"6"},{Name:"九原区",Code:"7"},{Name:"土默特右旗",Code:"21"},{Name:"固阳县",Code:"22"},{Name:"达尔罕茂明安联合旗",Code:"23"}]},{Name:"乌海",Code:"3",Region:[{Name:"海勃湾区",Code:"2"},{Name:"海南区",Code:"3"},{Name:"乌达区",Code:"4"}]},{Name:"赤峰",Code:"4",Region:[{Name:"红山区",Code:"2"},{Name:"元宝山区",Code:"3"},{Name:"松山区",Code:"4"},{Name:"阿鲁科尔沁旗",Code:"21"},{Name:"巴林左旗",Code:"22"},{Name:"巴林右旗",Code:"23"},{Name:"林西县",Code:"24"},{Name:"克什克腾旗",Code:"25"},{Name:"翁牛特旗",Code:"26"},{Name:"喀喇沁旗",Code:"28"},{Name:"宁城县",Code:"29"},{Name:"敖汉旗",Code:"30"}]},{Name:"通辽",Code:"5",Region:[{Name:"科尔沁区",Code:"2"},{Name:"科尔沁左翼中旗",Code:"21"},{Name:"科尔沁左翼后旗",Code:"22"},{Name:"开鲁县",Code:"23"},{Name:"库伦旗",Code:"24"},{Name:"奈曼旗",Code:"25"},{Name:"扎鲁特旗",Code:"26"},{Name:"霍林郭勒市",Code:"81"}]},{Name:"鄂尔多斯",Code:"6",Region:[{Name:"东胜区",Code:"2"},{Name:"达拉特旗",Code:"21"},{Name:"准格尔旗",Code:"22"},{Name:"鄂托克前旗",Code:"23"},{Name:"鄂托克旗",Code:"24"},{Name:"杭锦旗",Code:"25"},{Name:"乌审旗",Code:"26"},{Name:"伊金霍洛旗",Code:"27"}]},{Name:"呼伦贝尔",Code:"7",Region:[{Name:"海拉尔区",Code:"2"},{Name:"阿荣旗",Code:"21"},{Name:"莫力达瓦达斡尔族自治旗",Code:"22"},{Name:"鄂伦春自治旗",Code:"23"},{Name:"鄂温克族自治旗",Code:"24"},{Name:"陈巴尔虎旗",Code:"25"},{Name:"新巴尔虎左旗",Code:"26"},{Name:"新巴尔虎右旗",Code:"27"},{Name:"满洲里市",Code:"81"},{Name:"牙克石市",Code:"82"},{Name:"扎兰屯市",Code:"83"},{Name:"额尔古纳市",Code:"84"},{Name:"根河市",Code:"85"}]},{Name:"巴彦淖尔",Code:"8",Region:[{Name:"临河区",Code:"2"},{Name:"五原县",Code:"21"},{Name:"磴口县",Code:"22"},{Name:"乌拉特前旗",Code:"23"},{Name:"乌拉特中旗",Code:"24"},{Name:"乌拉特后旗",Code:"25"},{Name:"杭锦后旗",Code:"26"}]},{Name:"乌兰察布",Code:"9",Region:[{Name:"集宁区",Code:"2"},{Name:"卓资县",Code:"21"},{Name:"化德县",Code:"22"},{Name:"商都县",Code:"23"},{Name:"兴和县",Code:"24"},{Name:"凉城县",Code:"25"},{Name:"察哈尔右翼前旗",Code:"26"},{Name:"察哈尔右翼中旗",Code:"27"},{Name:"察哈尔右翼后旗",Code:"28"},{Name:"四子王旗",Code:"29"},{Name:"丰镇市",Code:"81"}]},{Name:"兴安",Code:"22",Region:[{Name:"乌兰浩特市",Code:"1"},{Name:"阿尔山市",Code:"2"},{Name:"科尔沁右翼前旗",Code:"21"},{Name:"科尔沁右翼中旗",Code:"22"},{Name:"扎赉特旗",Code:"23"},{Name:"突泉县",Code:"24"}]},{Name:"锡林郭勒",Code:"25",Region:[{Name:"二连浩特市",Code:"1"},{Name:"锡林浩特市",Code:"2"},{Name:"阿巴嘎旗",Code:"22"},{Name:"苏尼特左旗",Code:"23"},{Name:"苏尼特右旗",Code:"24"},{Name:"东乌珠穆沁旗",Code:"25"},{Name:"西乌珠穆沁旗",Code:"26"},{Name:"太仆寺旗",Code:"27"},{Name:"镶黄旗",Code:"28"},{Name:"正镶白旗",Code:"29"},{Name:"正蓝旗",Code:"30"},{Name:"多伦县",Code:"31"}]},{Name:"阿拉善",Code:"29",Region:[{Name:"阿拉善左旗",Code:"21"},{Name:"阿拉善右旗",Code:"22"},{Name:"额济纳旗",Code:"23"}]}]},{Name:"辽宁",Code:"21",City:[{Name:"沈阳",Code:"1",Region:[{Name:"和平区",Code:"2"},{Name:"沈河区",Code:"3"},{Name:"大东区",Code:"4"},{Name:"皇姑区",Code:"5"},{Name:"铁西区",Code:"6"},{Name:"苏家屯区",Code:"11"},{Name:"东陵区",Code:"12"},{Name:"沈北新区",Code:"13"},{Name:"于洪区",Code:"14"},{Name:"辽中县",Code:"22"},{Name:"康平县",Code:"23"},{Name:"法库县",Code:"24"},{Name:"新民市",Code:"81"}]},{Name:"大连",Code:"2",Region:[{Name:"中山区",Code:"2"},{Name:"西岗区",Code:"3"},{Name:"沙河口区",Code:"4"},{Name:"甘井子区",Code:"11"},{Name:"旅顺口区",Code:"12"},{Name:"金州区",Code:"13"},{Name:"长海县",Code:"24"},{Name:"瓦房店市",Code:"81"},{Name:"普兰店市",Code:"82"},{Name:"庄河市",Code:"83"}]},{Name:"鞍山",Code:"3",Region:[{Name:"铁东区",Code:"2"},{Name:"铁西区",Code:"3"},{Name:"立山区",Code:"4"},{Name:"千山区",Code:"11"},{Name:"台安县",Code:"21"},{Name:"岫岩满族自治县",Code:"23"},{Name:"海城市",Code:"81"}]},{Name:"抚顺",Code:"4",Region:[{Name:"新抚区",Code:"2"},{Name:"东洲区",Code:"3"},{Name:"望花区",Code:"4"},{Name:"顺城区",Code:"11"},{Name:"抚顺县",Code:"21"},{Name:"新宾满族自治县",Code:"22"},{Name:"清原满族自治县",Code:"23"}]},{Name:"本溪",Code:"5",Region:[{Name:"平山区",Code:"2"},{Name:"溪湖区",Code:"3"},{Name:"明山区",Code:"4"},{Name:"南芬区",Code:"5"},{Name:"本溪满族自治县",Code:"21"},{Name:"桓仁满族自治县",Code:"22"}]},{Name:"丹东",Code:"6",Region:[{Name:"元宝区",Code:"2"},{Name:"振兴区",Code:"3"},{Name:"振安区",Code:"4"},{Name:"宽甸满族自治县",Code:"24"},{Name:"东港市",Code:"81"},{Name:"凤城市",Code:"82"}]},{Name:"锦州",Code:"7",Region:[{Name:"古塔区",Code:"2"},{Name:"凌河区",Code:"3"},{Name:"太和区",Code:"11"},{Name:"黑山县",Code:"26"},{Name:"义　县",Code:"27"},{Name:"凌海市",Code:"81"},{Name:"北镇市",Code:"82"}]},{Name:"营口",Code:"8",Region:[{Name:"站前区",Code:"2"},{Name:"西市区",Code:"3"},{Name:"鲅鱼圈区",Code:"4"},{Name:"老边区",Code:"11"},{Name:"盖州市",Code:"81"},{Name:"大石桥市",Code:"82"}]},{Name:"阜新",Code:"9",Region:[{Name:"海州区",Code:"2"},{Name:"新邱区",Code:"3"},{Name:"太平区",Code:"4"},{Name:"清河门区",Code:"5"},{Name:"细河区",Code:"11"},{Name:"阜新蒙古族自治县",Code:"21"},{Name:"彰武县",Code:"22"}]},{Name:"辽阳",Code:"10",Region:[{Name:"白塔区",Code:"2"},{Name:"文圣区",Code:"3"},{Name:"宏伟区",Code:"4"},{Name:"弓长岭区",Code:"5"},{Name:"太子河区",Code:"11"},{Name:"辽阳县",Code:"21"},{Name:"灯塔市",Code:"81"}]},{Name:"盘锦",Code:"11",Region:[{Name:"双台子区",Code:"2"},{Name:"兴隆台区",Code:"3"},{Name:"大洼县",Code:"21"},{Name:"盘山县",Code:"22"}]},{Name:"铁岭",Code:"12",Region:[{Name:"银州区",Code:"2"},{Name:"清河区",Code:"4"},{Name:"铁岭县",Code:"21"},{Name:"西丰县",Code:"23"},{Name:"昌图县",Code:"24"},{Name:"调兵山市",Code:"81"},{Name:"开原市",Code:"82"}]},{Name:"朝阳",Code:"13",Region:[{Name:"双塔区",Code:"2"},{Name:"龙城区",Code:"3"},{Name:"朝阳县",Code:"21"},{Name:"建平县",Code:"22"},{Name:"喀喇沁左翼蒙古族自治县",Code:"24"},{Name:"北票市",Code:"81"},{Name:"凌源市",Code:"82"}]},{Name:"葫芦岛",Code:"14",Region:[{Name:"连山区",Code:"2"},{Name:"龙港区",Code:"3"},{Name:"南票区",Code:"4"},{Name:"绥中县",Code:"21"},{Name:"建昌县",Code:"22"},{Name:"兴城市",Code:"81"}]}]},{Name:"吉林",Code:"22",City:[{Name:"长春",Code:"1",Region:[{Name:"南关区",Code:"2"},{Name:"宽城区",Code:"3"},{Name:"朝阳区",Code:"4"},{Name:"二道区",Code:"5"},{Name:"绿园区",Code:"6"},{Name:"双阳区",Code:"12"},{Name:"农安县",Code:"22"},{Name:"九台市",Code:"81"},{Name:"榆树市",Code:"82"},{Name:"德惠市",Code:"83"}]},{Name:"吉林",Code:"2",Region:[{Name:"昌邑区",Code:"2"},{Name:"龙潭区",Code:"3"},{Name:"船营区",Code:"4"},{Name:"丰满区",Code:"11"},{Name:"永吉县",Code:"21"},{Name:"蛟河市",Code:"81"},{Name:"桦甸市",Code:"82"},{Name:"舒兰市",Code:"83"},{Name:"磐石市",Code:"84"}]},{Name:"四平",Code:"3",Region:[{Name:"铁西区",Code:"2"},{Name:"铁东区",Code:"3"},{Name:"梨树县",Code:"22"},{Name:"伊通满族自治县",Code:"23"},{Name:"公主岭市",Code:"81"},{Name:"双辽市",Code:"82"}]},{Name:"辽源",Code:"4",Region:[{Name:"龙山区",Code:"2"},{Name:"西安区",Code:"3"},{Name:"东丰县",Code:"21"},{Name:"东辽县",Code:"22"}]},{Name:"通化",Code:"5",Region:[{Name:"东昌区",Code:"2"},{Name:"二道江区",Code:"3"},{Name:"通化县",Code:"21"},{Name:"辉南县",Code:"23"},{Name:"柳河县",Code:"24"},{Name:"梅河口市",Code:"81"},{Name:"集安市",Code:"82"}]},{Name:"白山",Code:"6",Region:[{Name:"八道江区",Code:"2"},{Name:"江源区",Code:"5"},{Name:"抚松县",Code:"21"},{Name:"靖宇县",Code:"22"},{Name:"长白朝鲜族自治县",Code:"23"},{Name:"临江市",Code:"81"}]},{Name:"松原",Code:"7",Region:[{Name:"宁江区",Code:"2"},{Name:"前郭尔罗斯蒙古族自治县",Code:"21"},{Name:"长岭县",Code:"22"},{Name:"乾安县",Code:"23"},{Name:"扶余县",Code:"24"}]},{Name:"白城",Code:"8",Region:[{Name:"洮北区",Code:"2"},{Name:"镇赉县",Code:"21"},{Name:"通榆县",Code:"22"},{Name:"洮南市",Code:"81"},{Name:"大安市",Code:"82"}]},{Name:"延边",Code:"24",Region:[{Name:"延吉市",Code:"1"},{Name:"图们市",Code:"2"},{Name:"敦化市",Code:"3"},{Name:"珲春市",Code:"4"},{Name:"龙井市",Code:"5"},{Name:"和龙市",Code:"6"},{Name:"汪清县",Code:"24"},{Name:"安图县",Code:"26"}]}]},{Name:"黑龙江",Code:"23",City:[{Name:"哈尔滨",Code:"1",Region:[{Name:"道里区",Code:"2"},{Name:"南岗区",Code:"3"},{Name:"道外区",Code:"4"},{Name:"平房区",Code:"8"},{Name:"松北区",Code:"9"},{Name:"香坊区",Code:"10"},{Name:"呼兰区",Code:"11"},{Name:"阿城区",Code:"12"},{Name:"依兰县",Code:"23"},{Name:"方正县",Code:"24"},{Name:"宾　县",Code:"25"},{Name:"巴彦县",Code:"26"},{Name:"木兰县",Code:"27"},{Name:"通河县",Code:"28"},{Name:"延寿县",Code:"29"},{Name:"双城市",Code:"82"},{Name:"尚志市",Code:"83"},{Name:"五常市",Code:"84"}]},{Name:"齐齐哈尔",Code:"2",Region:[{Name:"龙沙区",Code:"2"},{Name:"建华区",Code:"3"},{Name:"铁锋区",Code:"4"},{Name:"昂昂溪区",Code:"5"},{Name:"富拉尔基区",Code:"6"},{Name:"碾子山区",Code:"7"},{Name:"梅里斯达斡尔族区",Code:"8"},{Name:"龙江县",Code:"21"},{Name:"依安县",Code:"23"},{Name:"泰来县",Code:"24"},{Name:"甘南县",Code:"25"},{Name:"富裕县",Code:"27"},{Name:"克山县",Code:"29"},{Name:"克东县",Code:"30"},{Name:"拜泉县",Code:"31"},{Name:"讷河市",Code:"81"}]},{Name:"鸡西",Code:"3",Region:[{Name:"鸡冠区",Code:"2"},{Name:"恒山区",Code:"3"},{Name:"滴道区",Code:"4"},{Name:"梨树区",Code:"5"},{Name:"城子河区",Code:"6"},{Name:"麻山区",Code:"7"},{Name:"鸡东县",Code:"21"},{Name:"虎林市",Code:"81"},{Name:"密山市",Code:"82"}]},{Name:"鹤岗",Code:"4",Region:[{Name:"向阳区",Code:"2"},{Name:"工农区",Code:"3"},{Name:"南山区",Code:"4"},{Name:"兴安区",Code:"5"},{Name:"东山区",Code:"6"},{Name:"兴山区",Code:"7"},{Name:"萝北县",Code:"21"},{Name:"绥滨县",Code:"22"}]},{Name:"双鸭山",Code:"5",Region:[{Name:"尖山区",Code:"2"},{Name:"岭东区",Code:"3"},{Name:"四方台区",Code:"5"},{Name:"宝山区",Code:"6"},{Name:"集贤县",Code:"21"},{Name:"友谊县",Code:"22"},{Name:"宝清县",Code:"23"},{Name:"饶河县",Code:"24"}]},{Name:"大庆",Code:"6",Region:[{Name:"萨尔图区",Code:"2"},{Name:"龙凤区",Code:"3"},{Name:"让胡路区",Code:"4"},{Name:"红岗区",Code:"5"},{Name:"大同区",Code:"6"},{Name:"肇州县",Code:"21"},{Name:"肇源县",Code:"22"},{Name:"林甸县",Code:"23"},{Name:"杜尔伯特蒙古族自治县",Code:"24"}]},{Name:"伊春",Code:"7",Region:[{Name:"伊春区",Code:"2"},{Name:"南岔区",Code:"3"},{Name:"友好区",Code:"4"},{Name:"西林区",Code:"5"},{Name:"翠峦区",Code:"6"},{Name:"新青区",Code:"7"},{Name:"美溪区",Code:"8"},{Name:"金山屯区",Code:"9"},{Name:"五营区",Code:"10"},{Name:"乌马河区",Code:"11"},{Name:"汤旺河区",Code:"12"},{Name:"带岭区",Code:"13"},{Name:"乌伊岭区",Code:"14"},{Name:"红星区",Code:"15"},{Name:"上甘岭区",Code:"16"},{Name:"嘉荫县",Code:"22"},{Name:"铁力市",Code:"81"}]},{Name:"佳木斯",Code:"8",Region:[{Name:"向阳区",Code:"3"},{Name:"前进区",Code:"4"},{Name:"东风区",Code:"5"},{Name:"郊　区",Code:"11"},{Name:"桦南县",Code:"22"},{Name:"桦川县",Code:"26"},{Name:"汤原县",Code:"28"},{Name:"抚远县",Code:"33"},{Name:"同江市",Code:"81"},{Name:"富锦市",Code:"82"}]},{Name:"七台河",Code:"9",Region:[{Name:"新兴区",Code:"2"},{Name:"桃山区",Code:"3"},{Name:"茄子河区",Code:"4"},{Name:"勃利县",Code:"21"}]},{Name:"牡丹江",Code:"10",Region:[{Name:"东安区",Code:"2"},{Name:"阳明区",Code:"3"},{Name:"爱民区",Code:"4"},{Name:"西安区",Code:"5"},{Name:"东宁县",Code:"24"},{Name:"林口县",Code:"25"},{Name:"绥芬河市",Code:"81"},{Name:"海林市",Code:"83"},{Name:"宁安市",Code:"84"},{Name:"穆棱市",Code:"85"}]},{Name:"黑河",Code:"11",Region:[{Name:"爱辉区",Code:"2"},{Name:"嫩江县",Code:"21"},{Name:"逊克县",Code:"23"},{Name:"孙吴县",Code:"24"},{Name:"北安市",Code:"81"},{Name:"五大连池市",Code:"82"}]},{Name:"绥化",Code:"12",Region:[{Name:"北林区",Code:"2"},{Name:"望奎县",Code:"21"},{Name:"兰西县",Code:"22"},{Name:"青冈县",Code:"23"},{Name:"庆安县",Code:"24"},{Name:"明水县",Code:"25"},{Name:"绥棱县",Code:"26"},{Name:"安达市",Code:"81"},{Name:"肇东市",Code:"82"},{Name:"海伦市",Code:"83"}]},{Name:"大兴安岭",Code:"27",Region:[{Name:"呼玛县",Code:"21"},{Name:"塔河县",Code:"22"},{Name:"漠河县",Code:"23"}]}]},{Name:"上海",Code:"31",City:[{Name:"黄浦",Code:"1"},{Name:"卢湾",Code:"3"},{Name:"徐汇",Code:"4"},{Name:"长宁",Code:"5"},{Name:"静安",Code:"6"},{Name:"普陀",Code:"7"},{Name:"闸北",Code:"8"},{Name:"虹口",Code:"9"},{Name:"杨浦",Code:"11"},{Name:"闵行",Code:"12"},{Name:"宝山",Code:"13"},{Name:"嘉定",Code:"14"},{Name:"浦东新区",Code:"15"},{Name:"金山",Code:"16"},{Name:"松江",Code:"17"},{Name:"奉贤",Code:"26"},{Name:"青浦",Code:"29"},{Name:"崇明",Code:"30"}]},{Name:"江苏",Code:"32",City:[{Name:"南京",Code:"1",Region:[{Name:"玄武区",Code:"2"},{Name:"白下区",Code:"3"},{Name:"秦淮区",Code:"4"},{Name:"建邺区",Code:"5"},{Name:"鼓楼区",Code:"6"},{Name:"下关区",Code:"7"},{Name:"浦口区",Code:"11"},{Name:"栖霞区",Code:"13"},{Name:"雨花台区",Code:"14"},{Name:"江宁区",Code:"15"},{Name:"六合区",Code:"16"},{Name:"溧水县",Code:"24"},{Name:"高淳县",Code:"25"}]},{Name:"无锡",Code:"2",Region:[{Name:"崇安区",Code:"2"},{Name:"南长区",Code:"3"},{Name:"北塘区",Code:"4"},{Name:"锡山区",Code:"5"},{Name:"惠山区",Code:"6"},{Name:"滨湖区",Code:"11"},{Name:"江阴市",Code:"81"},{Name:"宜兴市",Code:"82"}]},{Name:"徐州",Code:"3",Region:[{Name:"鼓楼区",Code:"2"},{Name:"云龙区",Code:"3"},{Name:"九里区",Code:"4"},{Name:"贾汪区",Code:"5"},{Name:"泉山区",Code:"11"},{Name:"丰　县",Code:"21"},{Name:"沛　县",Code:"22"},{Name:"铜山县",Code:"23"},{Name:"睢宁县",Code:"24"},{Name:"新沂市",Code:"81"},{Name:"邳州市",Code:"82"}]},{Name:"常州",Code:"4",Region:[{Name:"天宁区",Code:"2"},{Name:"钟楼区",Code:"4"},{Name:"戚墅堰区",Code:"5"},{Name:"新北区",Code:"11"},{Name:"武进区",Code:"12"},{Name:"溧阳市",Code:"81"},{Name:"金坛市",Code:"82"}]},{Name:"苏州",Code:"5",Region:[{Name:"姑苏区",Code:"4"},{Name:"虎丘区",Code:"5"},{Name:"吴中区",Code:"6"},{Name:"相城区",Code:"7"},{Name:"吴江区",Code:"8"},{Name:"常熟市",Code:"81"},{Name:"张家港市",Code:"82"},{Name:"昆山市",Code:"83"},{Name:"太仓市",Code:"85"}]},{Name:"南通",Code:"6",Region:[{Name:"崇川区",Code:"2"},{Name:"港闸区",Code:"11"},{Name:"海安县",Code:"21"},{Name:"如东县",Code:"23"},{Name:"启东市",Code:"81"},{Name:"如皋市",Code:"82"},{Name:"通州市",Code:"83"},{Name:"海门市",Code:"84"}]},{Name:"连云港",Code:"7",Region:[{Name:"连云区",Code:"3"},{Name:"新浦区",Code:"5"},{Name:"海州区",Code:"6"},{Name:"赣榆县",Code:"21"},{Name:"东海县",Code:"22"},{Name:"灌云县",Code:"23"},{Name:"灌南县",Code:"24"}]},{Name:"淮安",Code:"8",Region:[{Name:"清河区",Code:"2"},{Name:"淮安区",Code:"3"},{Name:"淮阴区",Code:"4"},{Name:"清浦区",Code:"11"},{Name:"涟水县",Code:"26"},{Name:"洪泽县",Code:"29"},{Name:"盱眙县",Code:"30"},{Name:"金湖县",Code:"31"}]},{Name:"盐城",Code:"9",Region:[{Name:"亭湖区",Code:"2"},{Name:"盐都区",Code:"3"},{Name:"响水县",Code:"21"},{Name:"滨海县",Code:"22"},{Name:"阜宁县",Code:"23"},{Name:"射阳县",Code:"24"},{Name:"建湖县",Code:"25"},{Name:"东台市",Code:"81"},{Name:"大丰市",Code:"82"}]},{Name:"扬州",Code:"10",Region:[{Name:"广陵区",Code:"2"},{Name:"邗江区",Code:"3"},{Name:"维扬区",Code:"11"},{Name:"宝应县",Code:"23"},{Name:"仪征市",Code:"81"},{Name:"高邮市",Code:"84"},{Name:"江都市",Code:"88"}]},{Name:"镇江",Code:"11",Region:[{Name:"京口区",Code:"2"},{Name:"润州区",Code:"11"},{Name:"丹徒区",Code:"12"},{Name:"丹阳市",Code:"81"},{Name:"扬中市",Code:"82"},{Name:"句容市",Code:"83"}]},{Name:"泰州",Code:"12",Region:[{Name:"海陵区",Code:"2"},{Name:"高港区",Code:"3"},{Name:"兴化市",Code:"81"},{Name:"靖江市",Code:"82"},{Name:"泰兴市",Code:"83"},{Name:"姜堰市",Code:"84"}]},{Name:"宿迁",Code:"13",Region:[{Name:"宿城区",Code:"2"},{Name:"宿豫区",Code:"11"},{Name:"沭阳县",Code:"22"},{Name:"泗阳县",Code:"23"},{Name:"泗洪县",Code:"24"}]}]},{Name:"浙江",Code:"33",City:[{Name:"杭州",Code:"1",Region:[{Name:"上城区",Code:"2"},{Name:"下城区",Code:"3"},{Name:"江干区",Code:"4"},{Name:"拱墅区",Code:"5"},{Name:"西湖区",Code:"6"},{Name:"滨江区",Code:"8"},{Name:"萧山区",Code:"9"},{Name:"余杭区",Code:"10"},{Name:"桐庐县",Code:"22"},{Name:"淳安县",Code:"27"},{Name:"建德市",Code:"82"},{Name:"富阳市",Code:"83"},{Name:"临安市",Code:"85"}]},{Name:"宁波",Code:"2",Region:[{Name:"海曙区",Code:"3"},{Name:"江东区",Code:"4"},{Name:"江北区",Code:"5"},{Name:"北仑区",Code:"6"},{Name:"镇海区",Code:"11"},{Name:"鄞州区",Code:"12"},{Name:"象山县",Code:"25"},{Name:"宁海县",Code:"26"},{Name:"余姚市",Code:"81"},{Name:"慈溪市",Code:"82"},{Name:"奉化市",Code:"83"}]},{Name:"温州",Code:"3",Region:[{Name:"鹿城区",Code:"2"},{Name:"龙湾区",Code:"3"},{Name:"瓯海区",Code:"4"},{Name:"洞头县",Code:"22"},{Name:"永嘉县",Code:"24"},{Name:"平阳县",Code:"26"},{Name:"苍南县",Code:"27"},{Name:"文成县",Code:"28"},{Name:"泰顺县",Code:"29"},{Name:"瑞安市",Code:"81"},{Name:"乐清市",Code:"82"}]},{Name:"嘉兴",Code:"4",Region:[{Name:"南湖区",Code:"2"},{Name:"秀洲区",Code:"11"},{Name:"嘉善县",Code:"21"},{Name:"海盐县",Code:"24"},{Name:"海宁市",Code:"81"},{Name:"平湖市",Code:"82"},{Name:"桐乡市",Code:"83"}]},{Name:"湖州",Code:"5",Region:[{Name:"吴兴区",Code:"2"},{Name:"南浔区",Code:"3"},{Name:"德清县",Code:"21"},{Name:"长兴县",Code:"22"},{Name:"安吉县",Code:"23"}]},{Name:"绍兴",Code:"6",Region:[{Name:"越城区",Code:"2"},{Name:"绍兴县",Code:"21"},{Name:"新昌县",Code:"24"},{Name:"诸暨市",Code:"81"},{Name:"上虞市",Code:"82"},{Name:"嵊州市",Code:"83"}]},{Name:"金华",Code:"7",Region:[{Name:"婺城区",Code:"2"},{Name:"金东区",Code:"3"},{Name:"武义县",Code:"23"},{Name:"浦江县",Code:"26"},{Name:"磐安县",Code:"27"},{Name:"兰溪市",Code:"81"},{Name:"义乌市",Code:"82"},{Name:"东阳市",Code:"83"},{Name:"永康市",Code:"84"}]},{Name:"衢州",Code:"8",Region:[{Name:"柯城区",Code:"2"},{Name:"衢江区",Code:"3"},{Name:"常山县",Code:"22"},{Name:"开化县",Code:"24"},{Name:"龙游县",Code:"25"},{Name:"江山市",Code:"81"}]},{Name:"舟山",Code:"9",Region:[{Name:"定海区",Code:"2"},{Name:"普陀区",Code:"3"},{Name:"岱山县",Code:"21"},{Name:"嵊泗县",Code:"22"}]},{Name:"台州",Code:"10",Region:[{Name:"椒江区",Code:"2"},{Name:"黄岩区",Code:"3"},{Name:"路桥区",Code:"4"},{Name:"玉环县",Code:"21"},{Name:"三门县",Code:"22"},{Name:"天台县",Code:"23"},{Name:"仙居县",Code:"24"},{Name:"温岭市",Code:"81"},{Name:"临海市",Code:"82"}]},{Name:"丽水",Code:"11",Region:[{Name:"莲都区",Code:"2"},{Name:"青田县",Code:"21"},{Name:"缙云县",Code:"22"},{Name:"遂昌县",Code:"23"},{Name:"松阳县",Code:"24"},{Name:"云和县",Code:"25"},{Name:"庆元县",Code:"26"},{Name:"景宁畲族自治县",Code:"27"},{Name:"龙泉市",Code:"81"}]}]},{Name:"安徽",Code:"34",City:[{Name:"合肥",Code:"1",Region:[{Name:"瑶海区",Code:"2"},{Name:"庐阳区",Code:"3"},{Name:"蜀山区",Code:"4"},{Name:"包河区",Code:"11"},{Name:"长丰县",Code:"21"},{Name:"肥东县",Code:"22"},{Name:"肥西县",Code:"23"},{Name:"庐江县",Code:"24"},{Name:"巢湖市",Code:"25"}]},{Name:"芜湖",Code:"2",Region:[{Name:"镜湖区",Code:"2"},{Name:"弋江区",Code:"3"},{Name:"鸠江区",Code:"7"},{Name:"三山区",Code:"8"},{Name:"芜湖县",Code:"21"},{Name:"繁昌县",Code:"22"},{Name:"南陵县",Code:"23"},{Name:"无为县",Code:"24"}]},{Name:"蚌埠",Code:"3",Region:[{Name:"龙子湖区",Code:"2"},{Name:"蚌山区",Code:"3"},{Name:"禹会区",Code:"4"},{Name:"淮上区",Code:"11"},{Name:"怀远县",Code:"21"},{Name:"五河县",Code:"22"},{Name:"固镇县",Code:"23"}]},{Name:"淮南",Code:"4",Region:[{Name:"大通区",Code:"2"},{Name:"田家庵区",Code:"3"},{Name:"谢家集区",Code:"4"},{Name:"八公山区",Code:"5"},{Name:"潘集区",Code:"6"},{Name:"凤台县",Code:"21"}]},{Name:"马鞍山",Code:"5",Region:[{Name:"花山区",Code:"3"},{Name:"雨山区",Code:"4"},{Name:"博望区",Code:"5"},{Name:"当涂县",Code:"21"},{Name:"含山县",Code:"22"},{Name:"和县",Code:"23"}]},{Name:"淮北",Code:"6",Region:[{Name:"杜集区",Code:"2"},{Name:"相山区",Code:"3"},{Name:"烈山区",Code:"4"},{Name:"濉溪县",Code:"21"}]},{Name:"铜陵",Code:"7",Region:[{Name:"铜官山区",Code:"2"},{Name:"狮子山区",Code:"3"},{Name:"郊　区",Code:"11"},{Name:"铜陵县",Code:"21"}]},{Name:"安庆",Code:"8",Region:[{Name:"迎江区",Code:"2"},{Name:"大观区",Code:"3"},{Name:"宜秀区",Code:"11"},{Name:"怀宁县",Code:"22"},{Name:"枞阳县",Code:"23"},{Name:"潜山县",Code:"24"},{Name:"太湖县",Code:"25"},{Name:"宿松县",Code:"26"},{Name:"望江县",Code:"27"},{Name:"岳西县",Code:"28"},{Name:"桐城市",Code:"81"}]},{Name:"黄山",Code:"10",Region:[{Name:"屯溪区",Code:"2"},{Name:"黄山区",Code:"3"},{Name:"徽州区",Code:"4"},{Name:"歙　县",Code:"21"},{Name:"休宁县",Code:"22"},{Name:"黟　县",Code:"23"},{Name:"祁门县",Code:"24"}]},{Name:"滁州",Code:"11",Region:[{Name:"琅琊区",Code:"2"},{Name:"南谯区",Code:"3"},{Name:"来安县",Code:"22"},{Name:"全椒县",Code:"24"},{Name:"定远县",Code:"25"},{Name:"凤阳县",Code:"26"},{Name:"天长市",Code:"81"},{Name:"明光市",Code:"82"}]},{Name:"阜阳",Code:"12",Region:[{Name:"颍州区",Code:"2"},{Name:"颍东区",Code:"3"},{Name:"颍泉区",Code:"4"},{Name:"临泉县",Code:"21"},{Name:"太和县",Code:"22"},{Name:"阜南县",Code:"25"},{Name:"颍上县",Code:"26"},{Name:"界首市",Code:"82"}]},{Name:"宿州",Code:"13",Region:[{Name:"埇桥区",Code:"2"},{Name:"砀山县",Code:"21"},{Name:"萧　县",Code:"22"},{Name:"灵璧县",Code:"23"},{Name:"泗　县",Code:"24"}]},{Name:"六安",Code:"15",Region:[{Name:"金安区",Code:"2"},{Name:"裕安区",Code:"3"},{Name:"寿　县",Code:"21"},{Name:"霍邱县",Code:"22"},{Name:"舒城县",Code:"23"},{Name:"金寨县",Code:"24"},{Name:"霍山县",Code:"25"}]},{Name:"亳州",Code:"16",Region:[{Name:"谯城区",Code:"2"},{Name:"涡阳县",Code:"21"},{Name:"蒙城县",Code:"22"},{Name:"利辛县",Code:"23"}]},{Name:"池州",Code:"17",Region:[{Name:"贵池区",Code:"2"},{Name:"东至县",Code:"21"},{Name:"石台县",Code:"22"},{Name:"青阳县",Code:"23"}]},{Name:"宣城",Code:"18",Region:[{Name:"宣州区",Code:"2"},{Name:"郎溪县",Code:"21"},{Name:"广德县",Code:"22"},{Name:"泾　县",Code:"23"},{Name:"绩溪县",Code:"24"},{Name:"旌德县",Code:"25"},{Name:"宁国市",Code:"81"}]}]},{Name:"福建",Code:"35",City:[{Name:"福州",Code:"1",Region:[{Name:"鼓楼区",Code:"2"},{Name:"台江区",Code:"3"},{Name:"仓山区",Code:"4"},{Name:"马尾区",Code:"5"},{Name:"晋安区",Code:"11"},{Name:"闽侯县",Code:"21"},{Name:"连江县",Code:"22"},{Name:"罗源县",Code:"23"},{Name:"闽清县",Code:"24"},{Name:"永泰县",Code:"25"},{Name:"平潭县",Code:"28"},{Name:"福清市",Code:"81"},{Name:"长乐市",Code:"82"}]},{Name:"厦门",Code:"2",Region:[{Name:"思明区",Code:"3"},{Name:"海沧区",Code:"5"},{Name:"湖里区",Code:"6"},{Name:"集美区",Code:"11"},{Name:"同安区",Code:"12"},{Name:"翔安区",Code:"13"}]},{Name:"莆田",Code:"3",Region:[{Name:"城厢区",Code:"2"},{Name:"涵江区",Code:"3"},{Name:"荔城区",Code:"4"},{Name:"秀屿区",Code:"5"},{Name:"仙游县",Code:"22"}]},{Name:"三明",Code:"4",Region:[{Name:"梅列区",Code:"2"},{Name:"三元区",Code:"3"},{Name:"明溪县",Code:"21"},{Name:"清流县",Code:"23"},{Name:"宁化县",Code:"24"},{Name:"大田县",Code:"25"},{Name:"尤溪县",Code:"26"},{Name:"沙　县",Code:"27"},{Name:"将乐县",Code:"28"},{Name:"泰宁县",Code:"29"},{Name:"建宁县",Code:"30"},{Name:"永安市",Code:"81"}]},{Name:"泉州",Code:"5",Region:[{Name:"鲤城区",Code:"2"},{Name:"丰泽区",Code:"3"},{Name:"洛江区",Code:"4"},{Name:"泉港区",Code:"5"},{Name:"惠安县",Code:"21"},{Name:"安溪县",Code:"24"},{Name:"永春县",Code:"25"},{Name:"德化县",Code:"26"},{Name:"金门县",Code:"27"},{Name:"石狮市",Code:"81"},{Name:"晋江市",Code:"82"},{Name:"南安市",Code:"83"}]},{Name:"漳州",Code:"6",Region:[{Name:"芗城区",Code:"2"},{Name:"龙文区",Code:"3"},{Name:"云霄县",Code:"22"},{Name:"漳浦县",Code:"23"},{Name:"诏安县",Code:"24"},{Name:"长泰县",Code:"25"},{Name:"东山县",Code:"26"},{Name:"南靖县",Code:"27"},{Name:"平和县",Code:"28"},{Name:"华安县",Code:"29"},{Name:"龙海市",Code:"81"}]},{Name:"南平",Code:"7",Region:[{Name:"延平区",Code:"2"},{Name:"顺昌县",Code:"21"},{Name:"浦城县",Code:"22"},{Name:"光泽县",Code:"23"},{Name:"松溪县",Code:"24"},{Name:"政和县",Code:"25"},{Name:"邵武市",Code:"81"},{Name:"武夷山市",Code:"82"},{Name:"建瓯市",Code:"83"},{Name:"建阳市",Code:"84"}]},{Name:"龙岩",Code:"8",Region:[{Name:"新罗区",Code:"2"},{Name:"长汀县",Code:"21"},{Name:"永定县",Code:"22"},{Name:"上杭县",Code:"23"},{Name:"武平县",Code:"24"},{Name:"连城县",Code:"25"},{Name:"漳平市",Code:"81"}]},{Name:"宁德",Code:"9",Region:[{Name:"蕉城区",Code:"2"},{Name:"霞浦县",Code:"21"},{Name:"古田县",Code:"22"},{Name:"屏南县",Code:"23"},{Name:"寿宁县",Code:"24"},{Name:"周宁县",Code:"25"},{Name:"柘荣县",Code:"26"},{Name:"福安市",Code:"81"},{Name:"福鼎市",Code:"82"}]}]},{Name:"江西",Code:"36",City:[{Name:"南昌",Code:"1",Region:[{Name:"东湖区",Code:"2"},{Name:"西湖区",Code:"3"},{Name:"青云谱区",Code:"4"},{Name:"湾里区",Code:"5"},{Name:"青山湖区",Code:"11"},{Name:"南昌县",Code:"21"},{Name:"新建县",Code:"22"},{Name:"安义县",Code:"23"},{Name:"进贤县",Code:"24"}]},{Name:"景德镇",Code:"2",Region:[{Name:"昌江区",Code:"2"},{Name:"珠山区",Code:"3"},{Name:"浮梁县",Code:"22"},{Name:"乐平市",Code:"81"}]},{Name:"萍乡",Code:"3",Region:[{Name:"安源区",Code:"2"},{Name:"湘东区",Code:"13"},{Name:"莲花县",Code:"21"},{Name:"上栗县",Code:"22"},{Name:"芦溪县",Code:"23"}]},{Name:"九江",Code:"4",Region:[{Name:"庐山区",Code:"2"},{Name:"浔阳区",Code:"3"},{Name:"九江县",Code:"21"},{Name:"武宁县",Code:"23"},{Name:"修水县",Code:"24"},{Name:"永修县",Code:"25"},{Name:"德安县",Code:"26"},{Name:"星子县",Code:"27"},{Name:"都昌县",Code:"28"},{Name:"湖口县",Code:"29"},{Name:"彭泽县",Code:"30"},{Name:"瑞昌市",Code:"81"}]},{Name:"新余",Code:"5",Region:[{Name:"渝水区",Code:"2"},{Name:"分宜县",Code:"21"}]},{Name:"鹰潭",Code:"6",Region:[{Name:"月湖区",Code:"2"},{Name:"余江县",Code:"22"},{Name:"贵溪市",Code:"81"}]},{Name:"赣州",Code:"7",Region:[{Name:"章贡区",Code:"2"},{Name:"赣　县",Code:"21"},{Name:"信丰县",Code:"22"},{Name:"大余县",Code:"23"},{Name:"上犹县",Code:"24"},{Name:"崇义县",Code:"25"},{Name:"安远县",Code:"26"},{Name:"龙南县",Code:"27"},{Name:"定南县",Code:"28"},{Name:"全南县",Code:"29"},{Name:"宁都县",Code:"30"},{Name:"于都县",Code:"31"},{Name:"兴国县",Code:"32"},{Name:"会昌县",Code:"33"},{Name:"寻乌县",Code:"34"},{Name:"石城县",Code:"35"},{Name:"瑞金市",Code:"81"},{Name:"南康市",Code:"82"}]},{Name:"吉安",Code:"8",Region:[{Name:"吉州区",Code:"2"},{Name:"青原区",Code:"3"},{Name:"吉安县",Code:"21"},{Name:"吉水县",Code:"22"},{Name:"峡江县",Code:"23"},{Name:"新干县",Code:"24"},{Name:"永丰县",Code:"25"},{Name:"泰和县",Code:"26"},{Name:"遂川县",Code:"27"},{Name:"万安县",Code:"28"},{Name:"安福县",Code:"29"},{Name:"永新县",Code:"30"},{Name:"井冈山市",Code:"81"}]},{Name:"宜春",Code:"9",Region:[{Name:"袁州区",Code:"2"},{Name:"奉新县",Code:"21"},{Name:"万载县",Code:"22"},{Name:"上高县",Code:"23"},{Name:"宜丰县",Code:"24"},{Name:"靖安县",Code:"25"},{Name:"铜鼓县",Code:"26"},{Name:"丰城市",Code:"81"},{Name:"樟树市",Code:"82"},{Name:"高安市",Code:"83"}]},{Name:"抚州",Code:"10",Region:[{Name:"临川区",Code:"2"},{Name:"南城县",Code:"21"},{Name:"黎川县",Code:"22"},{Name:"南丰县",Code:"23"},{Name:"崇仁县",Code:"24"},{Name:"乐安县",Code:"25"},{Name:"宜黄县",Code:"26"},{Name:"金溪县",Code:"27"},{Name:"资溪县",Code:"28"},{Name:"东乡县",Code:"29"},{Name:"广昌县",Code:"30"}]},{Name:"上饶",Code:"11",Region:[{Name:"信州区",Code:"2"},{Name:"上饶县",Code:"21"},{Name:"广丰县",Code:"22"},{Name:"玉山县",Code:"23"},{Name:"铅山县",Code:"24"},{Name:"横峰县",Code:"25"},{Name:"弋阳县",Code:"26"},{Name:"余干县",Code:"27"},{Name:"鄱阳县",Code:"28"},{Name:"万年县",Code:"29"},{Name:"婺源县",Code:"30"},{Name:"德兴市",Code:"81"}]}]},{Name:"山东",Code:"37",City:[{Name:"济南",Code:"1",Region:[{Name:"历下区",Code:"2"},{Name:"市中区",Code:"3"},{Name:"槐荫区",Code:"4"},{Name:"天桥区",Code:"5"},{Name:"历城区",Code:"12"},{Name:"长清区",Code:"13"},{Name:"平阴县",Code:"24"},{Name:"济阳县",Code:"25"},{Name:"商河县",Code:"26"},{Name:"章丘市",Code:"81"}]},{Name:"青岛",Code:"2",Region:[{Name:"市南区",Code:"2"},{Name:"市北区",Code:"3"},{Name:"四方区",Code:"5"},{Name:"黄岛区",Code:"11"},{Name:"崂山区",Code:"12"},{Name:"李沧区",Code:"13"},{Name:"城阳区",Code:"14"},{Name:"胶州市",Code:"81"},{Name:"即墨市",Code:"82"},{Name:"平度市",Code:"83"},{Name:"胶南市",Code:"84"},{Name:"莱西市",Code:"85"}]},{Name:"淄博",Code:"3",Region:[{Name:"淄川区",Code:"2"},{Name:"张店区",Code:"3"},{Name:"博山区",Code:"4"},{Name:"临淄区",Code:"5"},{Name:"周村区",Code:"6"},{Name:"桓台县",Code:"21"},{Name:"高青县",Code:"22"},{Name:"沂源县",Code:"23"}]},{Name:"枣庄",Code:"4",Region:[{Name:"市中区",Code:"2"},{Name:"薛城区",Code:"3"},{Name:"峄城区",Code:"4"},{Name:"台儿庄区",Code:"5"},{Name:"山亭区",Code:"6"},{Name:"滕州市",Code:"81"}]},{Name:"东营",Code:"5",Region:[{Name:"东营区",Code:"2"},{Name:"河口区",Code:"3"},{Name:"垦利县",Code:"21"},{Name:"利津县",Code:"22"},{Name:"广饶县",Code:"23"}]},{Name:"烟台",Code:"6",Region:[{Name:"芝罘区",Code:"2"},{Name:"福山区",Code:"11"},{Name:"牟平区",Code:"12"},{Name:"莱山区",Code:"13"},{Name:"长岛县",Code:"34"},{Name:"龙口市",Code:"81"},{Name:"莱阳市",Code:"82"},{Name:"莱州市",Code:"83"},{Name:"蓬莱市",Code:"84"},{Name:"招远市",Code:"85"},{Name:"栖霞市",Code:"86"},{Name:"海阳市",Code:"87"}]},{Name:"潍坊",Code:"7",Region:[{Name:"潍城区",Code:"2"},{Name:"寒亭区",Code:"3"},{Name:"坊子区",Code:"4"},{Name:"奎文区",Code:"5"},{Name:"临朐县",Code:"24"},{Name:"昌乐县",Code:"25"},{Name:"青州市",Code:"81"},{Name:"诸城市",Code:"82"},{Name:"寿光市",Code:"83"},{Name:"安丘市",Code:"84"},{Name:"高密市",Code:"85"},{Name:"昌邑市",Code:"86"}]},{Name:"济宁",Code:"8",Region:[{Name:"市中区",Code:"2"},{Name:"任城区",Code:"11"},{Name:"微山县",Code:"26"},{Name:"鱼台县",Code:"27"},{Name:"金乡县",Code:"28"},{Name:"嘉祥县",Code:"29"},{Name:"汶上县",Code:"30"},{Name:"泗水县",Code:"31"},{Name:"梁山县",Code:"32"},{Name:"曲阜市",Code:"81"},{Name:"兖州市",Code:"82"},{Name:"邹城市",Code:"83"}]},{Name:"泰安",Code:"9",Region:[{Name:"泰山区",Code:"2"},{Name:"岱岳区",Code:"11"},{Name:"宁阳县",Code:"21"},{Name:"东平县",Code:"23"},{Name:"新泰市",Code:"82"},{Name:"肥城市",Code:"83"}]},{Name:"威海",Code:"10",Region:[{Name:"环翠区",Code:"2"},{Name:"文登市",Code:"81"},{Name:"荣成市",Code:"82"},{Name:"乳山市",Code:"83"}]},{Name:"日照",Code:"11",Region:[{Name:"东港区",Code:"2"},{Name:"岚山区",Code:"3"},{Name:"五莲县",Code:"21"},{Name:"莒　县",Code:"22"}]},{Name:"莱芜",Code:"12",Region:[{Name:"莱城区",Code:"2"},{Name:"钢城区",Code:"3"}]},{Name:"临沂",Code:"13",Region:[{Name:"兰山区",Code:"2"},{Name:"罗庄区",Code:"11"},{Name:"河东区",Code:"12"},{Name:"沂南县",Code:"21"},{Name:"郯城县",Code:"22"},{Name:"沂水县",Code:"23"},{Name:"苍山县",Code:"24"},{Name:"费　县",Code:"25"},{Name:"平邑县",Code:"26"},{Name:"莒南县",Code:"27"},{Name:"蒙阴县",Code:"28"},{Name:"临沭县",Code:"29"}]},{Name:"德州",Code:"14",Region:[{Name:"德城区",Code:"2"},{Name:"陵　县",Code:"21"},{Name:"宁津县",Code:"22"},{Name:"庆云县",Code:"23"},{Name:"临邑县",Code:"24"},{Name:"齐河县",Code:"25"},{Name:"平原县",Code:"26"},{Name:"夏津县",Code:"27"},{Name:"武城县",Code:"28"},{Name:"乐陵市",Code:"81"},{Name:"禹城市",Code:"82"}]},{Name:"聊城",Code:"15",Region:[{Name:"东昌府区",Code:"2"},{Name:"阳谷县",Code:"21"},{Name:"莘　县",Code:"22"},{Name:"茌平县",Code:"23"},{Name:"东阿县",Code:"24"},{Name:"冠　县",Code:"25"},{Name:"高唐县",Code:"26"},{Name:"临清市",Code:"81"}]},{Name:"滨州",Code:"16",Region:[{Name:"滨城区",Code:"2"},{Name:"惠民县",Code:"21"},{Name:"阳信县",Code:"22"},{Name:"无棣县",Code:"23"},{Name:"沾化县",Code:"24"},{Name:"博兴县",Code:"25"},{Name:"邹平县",Code:"26"}]},{Name:"菏泽",Code:"17",Region:[{Name:"牡丹区",Code:"2"},{Name:"曹　县",Code:"21"},{Name:"单　县",Code:"22"},{Name:"成武县",Code:"23"},{Name:"巨野县",Code:"24"},{Name:"郓城县",Code:"25"},{Name:"鄄城县",Code:"26"},{Name:"定陶县",Code:"27"},{Name:"东明县",Code:"28"}]}]},{Name:"河南",Code:"41",City:[{Name:"郑州",Code:"1",Region:[{Name:"中原区",Code:"2"},{Name:"二七区",Code:"3"},{Name:"管城回族区",Code:"4"},{Name:"金水区",Code:"5"},{Name:"上街区",Code:"6"},{Name:"惠济区",Code:"8"},{Name:"中牟县",Code:"22"},{Name:"巩义市",Code:"81"},{Name:"荥阳市",Code:"82"},{Name:"新密市",Code:"83"},{Name:"新郑市",Code:"84"},{Name:"登封市",Code:"85"}]},{Name:"开封",Code:"2",Region:[{Name:"龙亭区",Code:"2"},{Name:"顺河回族区",Code:"3"},{Name:"鼓楼区",Code:"4"},{Name:"禹王台区",Code:"5"},{Name:"金明区",Code:"11"},{Name:"杞　县",Code:"21"},{Name:"通许县",Code:"22"},{Name:"尉氏县",Code:"23"},{Name:"开封县",Code:"24"},{Name:"兰考县",Code:"25"}]},{Name:"洛阳",Code:"3",Region:[{Name:"老城区",Code:"2"},{Name:"西工区",Code:"3"},{Name:"瀍河回族区",Code:"4"},{Name:"涧西区",Code:"5"},{Name:"吉利区",Code:"6"},{Name:"洛龙区",Code:"11"},{Name:"孟津县",Code:"22"},{Name:"新安县",Code:"23"},{Name:"栾川县",Code:"24"},{Name:"嵩　县",Code:"25"},{Name:"汝阳县",Code:"26"},{Name:"宜阳县",Code:"27"},{Name:"洛宁县",Code:"28"},{Name:"伊川县",Code:"29"},{Name:"偃师市",Code:"81"}]},{Name:"平顶山",Code:"4",Region:[{Name:"新华区",Code:"2"},{Name:"卫东区",Code:"3"},{Name:"石龙区",Code:"4"},{Name:"湛河区",Code:"11"},{Name:"宝丰县",Code:"21"},{Name:"叶　县",Code:"22"},{Name:"鲁山县",Code:"23"},{Name:"郏　县",Code:"25"},{Name:"舞钢市",Code:"81"},{Name:"汝州市",Code:"82"}]},{Name:"安阳",Code:"5",Region:[{Name:"文峰区",Code:"2"},{Name:"北关区",Code:"3"},{Name:"殷都区",Code:"5"},{Name:"龙安区",Code:"6"},{Name:"安阳县",Code:"22"},{Name:"汤阴县",Code:"23"},{Name:"滑　县",Code:"26"},{Name:"内黄县",Code:"27"},{Name:"林州市",Code:"81"}]},{Name:"鹤壁",Code:"6",Region:[{Name:"鹤山区",Code:"2"},{Name:"山城区",Code:"3"},{Name:"淇滨区",Code:"11"},{Name:"浚　县",Code:"21"},{Name:"淇　县",Code:"22"}]},{Name:"新乡",Code:"7",Region:[{Name:"红旗区",Code:"2"},{Name:"卫滨区",Code:"3"},{Name:"凤泉区",Code:"4"},{Name:"牧野区",Code:"11"},{Name:"新乡县",Code:"21"},{Name:"获嘉县",Code:"24"},{Name:"原阳县",Code:"25"},{Name:"延津县",Code:"26"},{Name:"封丘县",Code:"27"},{Name:"长垣县",Code:"28"},{Name:"卫辉市",Code:"81"},{Name:"辉县市",Code:"82"}]},{Name:"焦作",Code:"8",Region:[{Name:"解放区",Code:"2"},{Name:"中站区",Code:"3"},{Name:"马村区",Code:"4"},{Name:"山阳区",Code:"11"},{Name:"修武县",Code:"21"},{Name:"博爱县",Code:"22"},{Name:"武陟县",Code:"23"},{Name:"温　县",Code:"25"},{Name:"沁阳市",Code:"82"},{Name:"孟州市",Code:"83"}]},{Name:"濮阳",Code:"9",Region:[{Name:"华龙区",Code:"2"},{Name:"清丰县",Code:"22"},{Name:"南乐县",Code:"23"},{Name:"范　县",Code:"26"},{Name:"台前县",Code:"27"},{Name:"濮阳县",Code:"28"}]},{Name:"许昌",Code:"10",Region:[{Name:"魏都区",Code:"2"},{Name:"许昌县",Code:"23"},{Name:"鄢陵县",Code:"24"},{Name:"襄城县",Code:"25"},{Name:"禹州市",Code:"81"},{Name:"长葛市",Code:"82"}]},{Name:"漯河",Code:"11",Region:[{Name:"源汇区",Code:"2"},{Name:"郾城区",Code:"3"},{Name:"召陵区",Code:"4"},{Name:"舞阳县",Code:"21"},{Name:"临颍县",Code:"22"}]},{Name:"三门峡",Code:"12",Region:[{Name:"湖滨区",Code:"2"},{Name:"渑池县",Code:"21"},{Name:"陕　县",Code:"22"},{Name:"卢氏县",Code:"24"},{Name:"义马市",Code:"81"},{Name:"灵宝市",Code:"82"}]},{Name:"南阳",Code:"13",Region:[{Name:"宛城区",Code:"2"},{Name:"卧龙区",Code:"3"},{Name:"南召县",Code:"21"},{Name:"方城县",Code:"22"},{Name:"西峡县",Code:"23"},{Name:"镇平县",Code:"24"},{Name:"内乡县",Code:"25"},{Name:"淅川县",Code:"26"},{Name:"社旗县",Code:"27"},{Name:"唐河县",Code:"28"},{Name:"新野县",Code:"29"},{Name:"桐柏县",Code:"30"},{Name:"邓州市",Code:"81"}]},{Name:"商丘",Code:"14",Region:[{Name:"梁园区",Code:"2"},{Name:"睢阳区",Code:"3"},{Name:"民权县",Code:"21"},{Name:"睢　县",Code:"22"},{Name:"宁陵县",Code:"23"},{Name:"柘城县",Code:"24"},{Name:"虞城县",Code:"25"},{Name:"夏邑县",Code:"26"},{Name:"永城市",Code:"81"}]},{Name:"信阳",Code:"15",Region:[{Name:"浉河区",Code:"2"},{Name:"平桥区",Code:"3"},{Name:"罗山县",Code:"21"},{Name:"光山县",Code:"22"},{Name:"新　县",Code:"23"},{Name:"商城县",Code:"24"},{Name:"固始县",Code:"25"},{Name:"潢川县",Code:"26"},{Name:"淮滨县",Code:"27"},{Name:"息　县",Code:"28"}]},{Name:"周口",Code:"16",Region:[{Name:"川汇区",Code:"2"},{Name:"扶沟县",Code:"21"},{Name:"西华县",Code:"22"},{Name:"商水县",Code:"23"},{Name:"沈丘县",Code:"24"},{Name:"郸城县",Code:"25"},{Name:"淮阳县",Code:"26"},{Name:"太康县",Code:"27"},{Name:"鹿邑县",Code:"28"},{Name:"项城市",Code:"81"}]},{Name:"驻马店",Code:"17",Region:[{Name:"驿城区",Code:"2"},{Name:"西平县",Code:"21"},{Name:"上蔡县",Code:"22"},{Name:"平舆县",Code:"23"},{Name:"正阳县",Code:"24"},{Name:"确山县",Code:"25"},{Name:"泌阳县",Code:"26"},{Name:"汝南县",Code:"27"},{Name:"遂平县",Code:"28"},{Name:"新蔡县",Code:"29"}]},{Name:"济源",Code:"18"}]},{Name:"湖北",Code:"42",City:[{Name:"武汉",Code:"1",Region:[{Name:"江岸区",Code:"2"},{Name:"江汉区",Code:"3"},{Name:"硚口区",Code:"4"},{Name:"汉阳区",Code:"5"},{Name:"武昌区",Code:"6"},{Name:"青山区",Code:"7"},{Name:"洪山区",Code:"11"},{Name:"东西湖区",Code:"12"},{Name:"汉南区",Code:"13"},{Name:"蔡甸区",Code:"14"},{Name:"江夏区",Code:"15"},{Name:"黄陂区",Code:"16"},{Name:"新洲区",Code:"17"}]},{Name:"黄石",Code:"2",Region:[{Name:"黄石港区",Code:"2"},{Name:"西塞山区",Code:"3"},{Name:"下陆区",Code:"4"},{Name:"铁山区",Code:"5"},{Name:"阳新县",Code:"22"},{Name:"大冶市",Code:"81"}]},{Name:"十堰",Code:"3",Region:[{Name:"茅箭区",Code:"2"},{Name:"张湾区",Code:"3"},{Name:"郧　县",Code:"21"},{Name:"郧西县",Code:"22"},{Name:"竹山县",Code:"23"},{Name:"竹溪县",Code:"24"},{Name:"房　县",Code:"25"},{Name:"丹江口市",Code:"81"}]},{Name:"宜昌",Code:"5",Region:[{Name:"西陵区",Code:"2"},{Name:"伍家岗区",Code:"3"},{Name:"点军区",Code:"4"},{Name:"猇亭区",Code:"5"},{Name:"夷陵区",Code:"6"},{Name:"远安县",Code:"25"},{Name:"兴山县",Code:"26"},{Name:"秭归县",Code:"27"},{Name:"长阳土家族自治县",Code:"28"},{Name:"五峰土家族自治县",Code:"29"},{Name:"宜都市",Code:"81"},{Name:"当阳市",Code:"82"},{Name:"枝江市",Code:"83"}]},{Name:"襄阳",Code:"6",Region:[{Name:"襄城区",Code:"2"},{Name:"樊城区",Code:"6"},{Name:"襄州区",Code:"7"},{Name:"南漳县",Code:"24"},{Name:"谷城县",Code:"25"},{Name:"保康县",Code:"26"},{Name:"老河口市",Code:"82"},{Name:"枣阳市",Code:"83"},{Name:"宜城市",Code:"84"}]},{Name:"鄂州",Code:"7",Region:[{Name:"梁子湖区",Code:"2"},{Name:"华容区",Code:"3"},{Name:"鄂城区",Code:"4"}]},{Name:"荆门",Code:"8",Region:[{Name:"东宝区",Code:"2"},{Name:"掇刀区",Code:"4"},{Name:"京山县",Code:"21"},{Name:"沙洋县",Code:"22"},{Name:"钟祥市",Code:"81"}]},{Name:"孝感",Code:"9",Region:[{Name:"孝南区",Code:"2"},{Name:"孝昌县",Code:"21"},{Name:"大悟县",Code:"22"},{Name:"云梦县",Code:"23"},{Name:"应城市",Code:"81"},{Name:"安陆市",Code:"82"},{Name:"汉川市",Code:"84"}]},{Name:"荆州",Code:"10",Region:[{Name:"沙市区",Code:"2"},{Name:"荆州区",Code:"3"},{Name:"公安县",Code:"22"},{Name:"监利县",Code:"23"},{Name:"江陵县",Code:"24"},{Name:"石首市",Code:"81"},{Name:"洪湖市",Code:"83"},{Name:"松滋市",Code:"87"}]},{Name:"黄冈",Code:"11",Region:[{Name:"黄州区",Code:"2"},{Name:"团风县",Code:"21"},{Name:"红安县",Code:"22"},{Name:"罗田县",Code:"23"},{Name:"英山县",Code:"24"},{Name:"浠水县",Code:"25"},{Name:"蕲春县",Code:"26"},{Name:"黄梅县",Code:"27"},{Name:"麻城市",Code:"81"},{Name:"武穴市",Code:"82"}]},{Name:"咸宁",Code:"12",Region:[{Name:"咸安区",Code:"2"},{Name:"嘉鱼县",Code:"21"},{Name:"通城县",Code:"22"},{Name:"崇阳县",Code:"23"},{Name:"通山县",Code:"24"},{Name:"赤壁市",Code:"81"}]},{Name:"随州",Code:"13",Region:[{Name:"曾都区",Code:"2"},{Name:"随县",Code:"21"},{Name:"广水市",Code:"81"}]},{Name:"恩施",Code:"28",Region:[{Name:"恩施市",Code:"1"},{Name:"利川市",Code:"2"},{Name:"建始县",Code:"22"},{Name:"巴东县",Code:"23"},{Name:"宣恩县",Code:"25"},{Name:"咸丰县",Code:"26"},{Name:"来凤县",Code:"27"},{Name:"鹤峰县",Code:"28"}]},{Name:"仙桃",Code:"94"},{Name:"潜江",Code:"95"},{Name:"天门",Code:"96"},{Name:"神农架",Code:"A21"}]},{Name:"湖南",Code:"43",City:[{Name:"长沙",Code:"1",Region:[{Name:"芙蓉区",Code:"2"},{Name:"天心区",Code:"3"},{Name:"岳麓区",Code:"4"},{Name:"开福区",Code:"5"},{Name:"雨花区",Code:"11"},{Name:"长沙县",Code:"21"},{Name:"望城区",Code:"22"},{Name:"宁乡县",Code:"24"},{Name:"浏阳市",Code:"81"}]},{Name:"株洲",Code:"2",Region:[{Name:"荷塘区",Code:"2"},{Name:"芦淞区",Code:"3"},{Name:"石峰区",Code:"4"},{Name:"天元区",Code:"11"},{Name:"株洲县",Code:"21"},{Name:"攸　县",Code:"23"},{Name:"茶陵县",Code:"24"},{Name:"炎陵县",Code:"25"},{Name:"醴陵市",Code:"81"}]},{Name:"湘潭",Code:"3",Region:[{Name:"雨湖区",Code:"2"},{Name:"岳塘区",Code:"4"},{Name:"湘潭县",Code:"21"},{Name:"湘乡市",Code:"81"},{Name:"韶山市",Code:"82"}]},{Name:"衡阳",Code:"4",Region:[{Name:"珠晖区",Code:"5"},{Name:"雁峰区",Code:"6"},{Name:"石鼓区",Code:"7"},{Name:"蒸湘区",Code:"8"},{Name:"南岳区",Code:"12"},{Name:"衡阳县",Code:"21"},{Name:"衡南县",Code:"22"},{Name:"衡山县",Code:"23"},{Name:"衡东县",Code:"24"},{Name:"祁东县",Code:"26"},{Name:"耒阳市",Code:"81"},{Name:"常宁市",Code:"82"}]},{Name:"邵阳",Code:"5",Region:[{Name:"双清区",Code:"2"},{Name:"大祥区",Code:"3"},{Name:"北塔区",Code:"11"},{Name:"邵东县",Code:"21"},{Name:"新邵县",Code:"22"},{Name:"邵阳县",Code:"23"},{Name:"隆回县",Code:"24"},{Name:"洞口县",Code:"25"},{Name:"绥宁县",Code:"27"},{Name:"新宁县",Code:"28"},{Name:"城步苗族自治县",Code:"29"},{Name:"武冈市",Code:"81"}]},{Name:"岳阳",Code:"6",Region:[{Name:"岳阳楼区",Code:"2"},{Name:"云溪区",Code:"3"},{Name:"君山区",Code:"11"},{Name:"岳阳县",Code:"21"},{Name:"华容县",Code:"23"},{Name:"湘阴县",Code:"24"},{Name:"平江县",Code:"26"},{Name:"汨罗市",Code:"81"},{Name:"临湘市",Code:"82"}]},{Name:"常德",Code:"7",Region:[{Name:"武陵区",Code:"2"},{Name:"鼎城区",Code:"3"},{Name:"安乡县",Code:"21"},{Name:"汉寿县",Code:"22"},{Name:"澧　县",Code:"23"},{Name:"临澧县",Code:"24"},{Name:"桃源县",Code:"25"},{Name:"石门县",Code:"26"},{Name:"津市市",Code:"81"}]},{Name:"张家界",Code:"8",Region:[{Name:"永定区",Code:"2"},{Name:"武陵源区",Code:"11"},{Name:"慈利县",Code:"21"},{Name:"桑植县",Code:"22"}]},{Name:"益阳",Code:"9",Region:[{Name:"资阳区",Code:"2"},{Name:"赫山区",Code:"3"},{Name:"南　县",Code:"21"},{Name:"桃江县",Code:"22"},{Name:"安化县",Code:"23"},{Name:"沅江市",Code:"81"}]},{Name:"郴州",Code:"10",Region:[{Name:"北湖区",Code:"2"},{Name:"苏仙区",Code:"3"},{Name:"桂阳县",Code:"21"},{Name:"宜章县",Code:"22"},{Name:"永兴县",Code:"23"},{Name:"嘉禾县",Code:"24"},{Name:"临武县",Code:"25"},{Name:"汝城县",Code:"26"},{Name:"桂东县",Code:"27"},{Name:"安仁县",Code:"28"},{Name:"资兴市",Code:"81"}]},{Name:"永州",Code:"11",Region:[{Name:"零陵区",Code:"2"},{Name:"冷水滩区",Code:"3"},{Name:"祁阳县",Code:"21"},{Name:"东安县",Code:"22"},{Name:"双牌县",Code:"23"},{Name:"道　县",Code:"24"},{Name:"江永县",Code:"25"},{Name:"宁远县",Code:"26"},{Name:"蓝山县",Code:"27"},{Name:"新田县",Code:"28"},{Name:"江华瑶族自治县",Code:"29"}]},{Name:"怀化",Code:"12",Region:[{Name:"鹤城区",Code:"2"},{Name:"中方县",Code:"21"},{Name:"沅陵县",Code:"22"},{Name:"辰溪县",Code:"23"},{Name:"溆浦县",Code:"24"},{Name:"会同县",Code:"25"},{Name:"麻阳苗族自治县",Code:"26"},{Name:"新晃侗族自治县",Code:"27"},{Name:"芷江侗族自治县",Code:"28"},{Name:"靖州苗族侗族自治县",Code:"29"},{Name:"通道侗族自治县",Code:"30"},{Name:"洪江市",Code:"81"}]},{Name:"娄底",Code:"13",Region:[{Name:"娄星区",Code:"2"},{Name:"双峰县",Code:"21"},{Name:"新化县",Code:"22"},{Name:"冷水江市",Code:"81"},{Name:"涟源市",Code:"82"}]},{Name:"湘西",Code:"31",Region:[{Name:"吉首市",Code:"1"},{Name:"泸溪县",Code:"22"},{Name:"凤凰县",Code:"23"},{Name:"花垣县",Code:"24"},{Name:"保靖县",Code:"25"},{Name:"古丈县",Code:"26"},{Name:"永顺县",Code:"27"},{Name:"龙山县",Code:"30"}]}]},{Name:"广东",Code:"44",City:[{Name:"广州",Code:"1",Region:[{Name:"荔湾区",Code:"3"},{Name:"越秀区",Code:"4"},{Name:"海珠区",Code:"5"},{Name:"天河区",Code:"6"},{Name:"白云区",Code:"11"},{Name:"黄埔区",Code:"12"},{Name:"番禺区",Code:"13"},{Name:"花都区",Code:"14"},{Name:"南沙区",Code:"15"},{Name:"萝岗区",Code:"16"},{Name:"增城市",Code:"83"},{Name:"从化市",Code:"84"}]},{Name:"韶关",Code:"2",Region:[{Name:"武江区",Code:"3"},{Name:"浈江区",Code:"4"},{Name:"曲江区",Code:"5"},{Name:"始兴县",Code:"22"},{Name:"仁化县",Code:"24"},{Name:"翁源县",Code:"29"},{Name:"乳源瑶族自治县",Code:"32"},{Name:"新丰县",Code:"33"},{Name:"乐昌市",Code:"81"},{Name:"南雄市",Code:"82"}]},{Name:"深圳",Code:"3",Region:[{Name:"罗湖区",Code:"3"},{Name:"福田区",Code:"4"},{Name:"南山区",Code:"5"},{Name:"宝安区",Code:"6"},{Name:"龙岗区",Code:"7"},{Name:"盐田区",Code:"8"}]},{Name:"珠海",Code:"4",Region:[{Name:"香洲区",Code:"2"},{Name:"斗门区",Code:"3"},{Name:"金湾区",Code:"4"}]},{Name:"汕头",Code:"5",Region:[{Name:"龙湖区",Code:"7"},{Name:"金平区",Code:"11"},{Name:"濠江区",Code:"12"},{Name:"潮阳区",Code:"13"},{Name:"潮南区",Code:"14"},{Name:"澄海区",Code:"15"},{Name:"南澳县",Code:"23"}]},{Name:"佛山",Code:"6",Region:[{Name:"禅城区",Code:"4"},{Name:"南海区",Code:"5"},{Name:"顺德区",Code:"6"},{Name:"三水区",Code:"7"},{Name:"高明区",Code:"8"}]},{Name:"江门",Code:"7",Region:[{Name:"蓬江区",Code:"3"},{Name:"江海区",Code:"4"},{Name:"新会区",Code:"5"},{Name:"台山市",Code:"81"},{Name:"开平市",Code:"83"},{Name:"鹤山市",Code:"84"},{Name:"恩平市",Code:"85"}]},{Name:"湛江",Code:"8",Region:[{Name:"赤坎区",Code:"2"},{Name:"霞山区",Code:"3"},{Name:"坡头区",Code:"4"},{Name:"麻章区",Code:"11"},{Name:"遂溪县",Code:"23"},{Name:"徐闻县",Code:"25"},{Name:"廉江市",Code:"81"},{Name:"雷州市",Code:"82"},{Name:"吴川市",Code:"83"}]},{Name:"茂名",Code:"9",Region:[{Name:"茂南区",Code:"2"},{Name:"茂港区",Code:"3"},{Name:"电白县",Code:"23"},{Name:"高州市",Code:"81"},{Name:"化州市",Code:"82"},{Name:"信宜市",Code:"83"}]},{Name:"肇庆",Code:"12",Region:[{Name:"端州区",Code:"2"},{Name:"鼎湖区",Code:"3"},{Name:"广宁县",Code:"23"},{Name:"怀集县",Code:"24"},{Name:"封开县",Code:"25"},{Name:"德庆县",Code:"26"},{Name:"高要市",Code:"83"},{Name:"四会市",Code:"84"}]},{Name:"惠州",Code:"13",Region:[{Name:"惠城区",Code:"2"},{Name:"惠阳区",Code:"3"},{Name:"博罗县",Code:"22"},{Name:"惠东县",Code:"23"},{Name:"龙门县",Code:"24"}]},{Name:"梅州",Code:"14",Region:[{Name:"梅江区",Code:"2"},{Name:"梅　县",Code:"21"},{Name:"大埔县",Code:"22"},{Name:"丰顺县",Code:"23"},{Name:"五华县",Code:"24"},{Name:"平远县",Code:"26"},{Name:"蕉岭县",Code:"27"},{Name:"兴宁市",Code:"81"}]},{Name:"汕尾",Code:"15",Region:[{Name:"城　区",Code:"2"},{Name:"海丰县",Code:"21"},{Name:"陆河县",Code:"23"},{Name:"陆丰市",Code:"81"}]},{Name:"河源",Code:"16",Region:[{Name:"源城区",Code:"2"},{Name:"紫金县",Code:"21"},{Name:"龙川县",Code:"22"},{Name:"连平县",Code:"23"},{Name:"和平县",Code:"24"},{Name:"东源县",Code:"25"}]},{Name:"阳江",Code:"17",Region:[{Name:"江城区",Code:"2"},{Name:"阳西县",Code:"21"},{Name:"阳东县",Code:"23"},{Name:"阳春市",Code:"81"}]},{Name:"清远",Code:"18",Region:[{Name:"清城区",Code:"2"},{Name:"佛冈县",Code:"21"},{Name:"阳山县",Code:"23"},{Name:"连山壮族瑶族自治县",Code:"25"},{Name:"连南瑶族自治县",Code:"26"},{Name:"清新县",Code:"27"},{Name:"英德市",Code:"81"},{Name:"连州市",Code:"82"}]},{Name:"东莞",Code:"19",Region:{Name:"东莞市",Code:"0"}},{Name:"中山",Code:"20",Region:{Name:"中山市",Code:"0"}},{Name:"潮州",Code:"51",Region:[{Name:"湘桥区",Code:"2"},{Name:"潮安县",Code:"21"},{Name:"饶平县",Code:"22"}]},{Name:"揭阳",Code:"52",Region:[{Name:"榕城区",Code:"2"},{Name:"揭东县",Code:"21"},{Name:"揭西县",Code:"22"},{Name:"惠来县",Code:"24"},{Name:"普宁市",Code:"81"}]},{Name:"云浮",Code:"53",Region:[{Name:"云城区",Code:"2"},{Name:"新兴县",Code:"21"},{Name:"郁南县",Code:"22"},{Name:"云安县",Code:"23"},{Name:"罗定市",Code:"81"}]}]},{Name:"广西",Code:"45",City:[{Name:"南宁",Code:"1",Region:[{Name:"兴宁区",Code:"2"},{Name:"青秀区",Code:"3"},{Name:"江南区",Code:"5"},{Name:"西乡塘区",Code:"7"},{Name:"良庆区",Code:"8"},{Name:"邕宁区",Code:"9"},{Name:"武鸣县",Code:"22"},{Name:"隆安县",Code:"23"},{Name:"马山县",Code:"24"},{Name:"上林县",Code:"25"},{Name:"宾阳县",Code:"26"},{Name:"横　县",Code:"27"}]},{Name:"柳州",Code:"2",Region:[{Name:"城中区",Code:"2"},{Name:"鱼峰区",Code:"3"},{Name:"柳南区",Code:"4"},{Name:"柳北区",Code:"5"},{Name:"柳江县",Code:"21"},{Name:"柳城县",Code:"22"},{Name:"鹿寨县",Code:"23"},{Name:"融安县",Code:"24"},{Name:"融水苗族自治县",Code:"25"},{Name:"三江侗族自治县",Code:"26"}]},{Name:"桂林",Code:"3",Region:[{Name:"秀峰区",Code:"2"},{Name:"叠彩区",Code:"3"},{Name:"象山区",Code:"4"},{Name:"七星区",Code:"5"},{Name:"雁山区",Code:"11"},{Name:"阳朔县",Code:"21"},{Name:"临桂县",Code:"22"},{Name:"灵川县",Code:"23"},{Name:"全州县",Code:"24"},{Name:"兴安县",Code:"25"},{Name:"永福县",Code:"26"},{Name:"灌阳县",Code:"27"},{Name:"龙胜各族自治县",Code:"28"},{Name:"资源县",Code:"29"},{Name:"平乐县",Code:"30"},{Name:"荔浦县",Code:"31"},{Name:"恭城瑶族自治县",Code:"32"}]},{Name:"梧州",Code:"4",Region:[{Name:"万秀区",Code:"3"},{Name:"蝶山区",Code:"4"},{Name:"长洲区",Code:"5"},{Name:"苍梧县",Code:"21"},{Name:"藤　县",Code:"22"},{Name:"蒙山县",Code:"23"},{Name:"岑溪市",Code:"81"}]},{Name:"北海",Code:"5",Region:[{Name:"海城区",Code:"2"},{Name:"银海区",Code:"3"},{Name:"铁山港区",Code:"12"},{Name:"合浦县",Code:"21"}]},{Name:"防城港",Code:"6",Region:[{Name:"港口区",Code:"2"},{Name:"防城区",Code:"3"},{Name:"上思县",Code:"21"},{Name:"东兴市",Code:"81"}]},{Name:"钦州",Code:"7",Region:[{Name:"钦南区",Code:"2"},{Name:"钦北区",Code:"3"},{Name:"灵山县",Code:"21"},{Name:"浦北县",Code:"22"}]},{Name:"贵港",Code:"8",Region:[{Name:"港北区",Code:"2"},{Name:"港南区",Code:"3"},{Name:"覃塘区",Code:"4"},{Name:"平南县",Code:"21"},{Name:"桂平市",Code:"81"}]},{Name:"玉林",Code:"9",Region:[{Name:"玉州区",Code:"2"},{Name:"容　县",Code:"21"},{Name:"陆川县",Code:"22"},{Name:"博白县",Code:"23"},{Name:"兴业县",Code:"24"},{Name:"北流市",Code:"81"}]},{Name:"百色",Code:"10",Region:[{Name:"右江区",Code:"2"},{Name:"田阳县",Code:"21"},{Name:"田东县",Code:"22"},{Name:"平果县",Code:"23"},{Name:"德保县",Code:"24"},{Name:"靖西县",Code:"25"},{Name:"那坡县",Code:"26"},{Name:"凌云县",Code:"27"},{Name:"乐业县",Code:"28"},{Name:"田林县",Code:"29"},{Name:"西林县",Code:"30"},{Name:"隆林各族自治县",Code:"31"}]},{Name:"贺州",Code:"11",Region:[{Name:"八步区",Code:"2"},{Name:"昭平县",Code:"21"},{Name:"钟山县",Code:"22"},{Name:"富川瑶族自治县",Code:"23"}]},{Name:"河池",Code:"12",Region:[{Name:"金城江区",Code:"2"},{Name:"南丹县",Code:"21"},{Name:"天峨县",Code:"22"},{Name:"凤山县",Code:"23"},{Name:"东兰县",Code:"24"},{Name:"罗城仫佬族自治县",Code:"25"},{Name:"环江毛南族自治县",Code:"26"},{Name:"巴马瑶族自治县",Code:"27"},{Name:"都安瑶族自治县",Code:"28"},{Name:"大化瑶族自治县",Code:"29"},{Name:"宜州市",Code:"81"}]},{Name:"来宾",Code:"13",Region:[{Name:"兴宾区",Code:"2"},{Name:"忻城县",Code:"21"},{Name:"象州县",Code:"22"},{Name:"武宣县",Code:"23"},{Name:"金秀瑶族自治县",Code:"24"},{Name:"合山市",Code:"81"}]},{Name:"崇左",Code:"14",Region:[{Name:"江洲区",Code:"2"},{Name:"扶绥县",Code:"21"},{Name:"宁明县",Code:"22"},{Name:"龙州县",Code:"23"},{Name:"大新县",Code:"24"},{Name:"天等县",Code:"25"},{Name:"凭祥市",Code:"81"}]}]},{Name:"海南",Code:"46",City:[{Name:"海口",Code:"1",Region:[{Name:"秀英区",Code:"5"},{Name:"龙华区",Code:"6"},{Name:"琼山区",Code:"7"},{Name:"美兰区",Code:"8"}]},{Name:"三亚",Code:"2"},{Name:"三沙",Code:"3"},{Name:"五指山",Code:"91"},{Name:"琼海",Code:"92"},{Name:"儋州",Code:"93"},{Name:"文昌",Code:"95"},{Name:"万宁",Code:"96"},{Name:"东方",Code:"97"},{Name:"定安",Code:"A25"},{Name:"屯昌",Code:"A26"},{Name:"澄迈",Code:"A27"},{Name:"临高",Code:"A28"},{Name:"白沙",Code:"A30"},{Name:"昌江",Code:"A31"},{Name:"乐东",Code:"A33"},{Name:"陵水",Code:"A34"},{Name:"保亭",Code:"A35"},{Name:"琼中",Code:"A36"}]},{Name:"重庆",Code:"50",City:[{Name:"万州",Code:"1"},{Name:"涪陵",Code:"2"},{Name:"渝中",Code:"3"},{Name:"大渡口",Code:"4"},{Name:"江北",Code:"5"},{Name:"沙坪坝",Code:"6"},{Name:"九龙坡",Code:"7"},{Name:"南岸",Code:"8"},{Name:"北碚",Code:"9"},{Name:"两江新区",Code:"85"},{Name:"万盛",Code:"10"},{Name:"双桥",Code:"11"},{Name:"渝北",Code:"12"},{Name:"巴南",Code:"13"},{Name:"长寿",Code:"21"},{Name:"綦江",Code:"22"},{Name:"潼南",Code:"23"},{Name:"铜梁",Code:"24"},{Name:"大足",Code:"25"},{Name:"荣昌",Code:"26"},{Name:"璧山",Code:"27"},{Name:"梁平",Code:"28"},{Name:"城口",Code:"29"},{Name:"丰都",Code:"30"},{Name:"垫江",Code:"31"},{Name:"武隆",Code:"32"},{Name:"忠县",Code:"33"},{Name:"开县",Code:"34"},{Name:"云阳",Code:"35"},{Name:"奉节",Code:"36"},{Name:"巫山",Code:"37"},{Name:"巫溪",Code:"38"},{Name:"黔江",Code:"39"},{Name:"石柱",Code:"40"},{Name:"秀山",Code:"41"},{Name:"酉阳",Code:"42"},{Name:"彭水",Code:"43"},{Name:"江津",Code:"81"},{Name:"合川",Code:"82"},{Name:"永川",Code:"83"},{Name:"南川",Code:"84"}]},{Name:"四川",Code:"51",City:[{Name:"成都",Code:"1",Region:[{Name:"锦江区",Code:"4"},{Name:"青羊区",Code:"5"},{Name:"金牛区",Code:"6"},{Name:"武侯区",Code:"7"},{Name:"成华区",Code:"8"},{Name:"龙泉驿区",Code:"12"},{Name:"青白江区",Code:"13"},{Name:"新都区",Code:"14"},{Name:"温江区",Code:"15"},{Name:"金堂县",Code:"21"},{Name:"双流县",Code:"22"},{Name:"郫　县",Code:"24"},{Name:"大邑县",Code:"29"},{Name:"蒲江县",Code:"31"},{Name:"新津县",Code:"32"},{Name:"都江堰市",Code:"81"},{Name:"彭州市",Code:"82"},{Name:"邛崃市",Code:"83"},{Name:"崇州市",Code:"84"}]},{Name:"自贡",Code:"3",Region:[{Name:"自流井区",Code:"2"},{Name:"贡井区",Code:"3"},{Name:"大安区",Code:"4"},{Name:"沿滩区",Code:"11"},{Name:"荣　县",Code:"21"},{Name:"富顺县",Code:"22"}]},{Name:"攀枝花",Code:"4",Region:[{Name:"东　区",Code:"2"},{Name:"西　区",Code:"3"},{Name:"仁和区",Code:"11"},{Name:"米易县",Code:"21"},{Name:"盐边县",Code:"22"}]},{Name:"泸州",Code:"5",Region:[{Name:"江阳区",Code:"2"},{Name:"纳溪区",Code:"3"},{Name:"龙马潭区",Code:"4"},{Name:"泸　县",Code:"21"},{Name:"合江县",Code:"22"},{Name:"叙永县",Code:"24"},{Name:"古蔺县",Code:"25"}]},{Name:"德阳",Code:"6",Region:[{Name:"旌阳区",Code:"3"},{Name:"中江县",Code:"23"},{Name:"罗江县",Code:"26"},{Name:"广汉市",Code:"81"},{Name:"什邡市",Code:"82"},{Name:"绵竹市",Code:"83"}]},{Name:"绵阳",Code:"7",Region:[{Name:"涪城区",Code:"3"},{Name:"游仙区",Code:"4"},{Name:"三台县",Code:"22"},{Name:"盐亭县",Code:"23"},{Name:"安　县",Code:"24"},{Name:"梓潼县",Code:"25"},{Name:"北川羌族自治县",Code:"26"},{Name:"平武县",Code:"27"},{Name:"江油市",Code:"81"}]},{Name:"广元",Code:"8",Region:[{Name:"市中区",Code:"2"},{Name:"元坝区",Code:"11"},{Name:"朝天区",Code:"12"},{Name:"旺苍县",Code:"21"},{Name:"青川县",Code:"22"},{Name:"剑阁县",Code:"23"},{Name:"苍溪县",Code:"24"}]},{Name:"遂宁",Code:"9",Region:[{Name:"船山区",Code:"3"},{Name:"安居区",Code:"4"},{Name:"蓬溪县",Code:"21"},{Name:"射洪县",Code:"22"},{Name:"大英县",Code:"23"}]},{Name:"内江",Code:"10",Region:[{Name:"市中区",Code:"2"},{Name:"东兴区",Code:"11"},{Name:"威远县",Code:"24"},{Name:"资中县",Code:"25"},{Name:"隆昌县",Code:"28"}]},{Name:"乐山",Code:"11",Region:[{Name:"市中区",Code:"2"},{Name:"沙湾区",Code:"11"},{Name:"五通桥区",Code:"12"},{Name:"金口河区",Code:"13"},{Name:"犍为县",Code:"23"},{Name:"井研县",Code:"24"},{Name:"夹江县",Code:"26"},{Name:"沐川县",Code:"29"},{Name:"峨边彝族自治县",Code:"32"},{Name:"马边彝族自治县",Code:"33"},{Name:"峨眉山市",Code:"81"}]},{Name:"南充",Code:"13",Region:[{Name:"顺庆区",Code:"2"},{Name:"高坪区",Code:"3"},{Name:"嘉陵区",Code:"4"},{Name:"南部县",Code:"21"},{Name:"营山县",Code:"22"},{Name:"蓬安县",Code:"23"},{Name:"仪陇县",Code:"24"},{Name:"西充县",Code:"25"},{Name:"阆中市",Code:"81"}]},{Name:"眉山",Code:"14",Region:[{Name:"东坡区",Code:"2"},{Name:"仁寿县",Code:"21"},{Name:"彭山县",Code:"22"},{Name:"洪雅县",Code:"23"},{Name:"丹棱县",Code:"24"},{Name:"青神县",Code:"25"}]},{Name:"宜宾",Code:"15",Region:[{Name:"翠屏区",Code:"2"},{Name:"宜宾县",Code:"21"},{Name:"南溪县",Code:"22"},{Name:"江安县",Code:"23"},{Name:"长宁县",Code:"24"},{Name:"高　县",Code:"25"},{Name:"珙　县",Code:"26"},{Name:"筠连县",Code:"27"},{Name:"兴文县",Code:"28"},{Name:"屏山县",Code:"29"}]},{Name:"广安",Code:"16",Region:[{Name:"广安区",Code:"2"},{Name:"岳池县",Code:"21"},{Name:"武胜县",Code:"22"},{Name:"邻水县",Code:"23"},{Name:"华蓥市",Code:"81"}]},{Name:"达州",Code:"17",Region:[{Name:"通川区",Code:"2"},{Name:"达　县",Code:"21"},{Name:"宣汉县",Code:"22"},{Name:"开江县",Code:"23"},{Name:"大竹县",Code:"24"},{Name:"渠　县",Code:"25"},{Name:"万源市",Code:"81"}]},{Name:"雅安",Code:"18",Region:[{Name:"雨城区",Code:"2"},{Name:"名山县",Code:"21"},{Name:"荥经县",Code:"22"},{Name:"汉源县",Code:"23"},{Name:"石棉县",Code:"24"},{Name:"天全县",Code:"25"},{Name:"芦山县",Code:"26"},{Name:"宝兴县",Code:"27"}]},{Name:"巴中",Code:"19",Region:[{Name:"巴州区",Code:"2"},{Name:"通江县",Code:"21"},{Name:"南江县",Code:"22"},{Name:"平昌县",Code:"23"}]},{Name:"资阳",Code:"20",Region:[{Name:"雁江区",Code:"2"},{Name:"安岳县",Code:"21"},{Name:"乐至县",Code:"22"},{Name:"简阳市",Code:"81"}]},{Name:"阿坝",Code:"32",Region:[{Name:"汶川县",Code:"21"},{Name:"理　县",Code:"22"},{Name:"茂　县",Code:"23"},{Name:"松潘县",Code:"24"},{Name:"九寨沟县",Code:"25"},{Name:"金川县",Code:"26"},{Name:"小金县",Code:"27"},{Name:"黑水县",Code:"28"},{Name:"马尔康县",Code:"29"},{Name:"壤塘县",Code:"30"},{Name:"阿坝县",Code:"31"},{Name:"若尔盖县",Code:"32"},{Name:"红原县",Code:"33"}]},{Name:"甘孜",Code:"33",Region:[{Name:"康定县",Code:"21"},{Name:"泸定县",Code:"22"},{Name:"丹巴县",Code:"23"},{Name:"九龙县",Code:"24"},{Name:"雅江县",Code:"25"},{Name:"道孚县",Code:"26"},{Name:"炉霍县",Code:"27"},{Name:"甘孜县",Code:"28"},{Name:"新龙县",Code:"29"},{Name:"德格县",Code:"30"},{Name:"白玉县",Code:"31"},{Name:"石渠县",Code:"32"},{Name:"色达县",Code:"33"},{Name:"理塘县",Code:"34"},{Name:"巴塘县",Code:"35"},{Name:"乡城县",Code:"36"},{Name:"稻城县",Code:"37"},{Name:"得荣县",Code:"38"}]},{Name:"凉山",Code:"34",Region:[{Name:"西昌市",Code:"1"},{Name:"木里藏族自治县",Code:"22"},{Name:"盐源县",Code:"23"},{Name:"德昌县",Code:"24"},{Name:"会理县",Code:"25"},{Name:"会东县",Code:"26"},{Name:"宁南县",Code:"27"},{Name:"普格县",Code:"28"},{Name:"布拖县",Code:"29"},{Name:"金阳县",Code:"30"},{Name:"昭觉县",Code:"31"},{Name:"喜德县",Code:"32"},{Name:"冕宁县",Code:"33"},{Name:"越西县",Code:"34"},{Name:"甘洛县",Code:"35"},{Name:"美姑县",Code:"36"},{Name:"雷波县",Code:"37"}]}]},{Name:"贵州",Code:"52",City:[{Name:"贵阳",Code:"1",Region:[{Name:"南明区",Code:"2"},{Name:"云岩区",Code:"3"},{Name:"花溪区",Code:"11"},{Name:"乌当区",Code:"12"},{Name:"白云区",Code:"13"},{Name:"小河区",Code:"14"},{Name:"开阳县",Code:"21"},{Name:"息烽县",Code:"22"},{Name:"修文县",Code:"23"},{Name:"清镇市",Code:"81"}]},{Name:"六盘水",Code:"2",Region:[{Name:"钟山区",Code:"1"},{Name:"六枝特区",Code:"3"},{Name:"水城县",Code:"21"},{Name:"盘　县",Code:"22"}]},{Name:"遵义",Code:"3",Region:[{Name:"红花岗区",Code:"2"},{Name:"汇川区",Code:"3"},{Name:"遵义县",Code:"21"},{Name:"桐梓县",Code:"22"},{Name:"绥阳县",Code:"23"},{Name:"正安县",Code:"24"},{Name:"道真仡佬族苗族自治县",Code:"25"},{Name:"务川仡佬族苗族自治县",Code:"26"},{Name:"凤冈县",Code:"27"},{Name:"湄潭县",Code:"28"},{Name:"余庆县",Code:"29"},{Name:"习水县",Code:"30"},{Name:"赤水市",Code:"81"},{Name:"仁怀市",Code:"82"}]},{Name:"安顺",Code:"4",Region:[{Name:"西秀区",Code:"2"},{Name:"平坝县",Code:"21"},{Name:"普定县",Code:"22"},{Name:"镇宁布依族苗族自治县",Code:"23"},{Name:"关岭布依族苗族自治县",Code:"24"},{Name:"紫云苗族布依族自治县",Code:"25"}]},{Name:"铜仁",Code:"22",Region:[{Name:"铜仁市",Code:"1"},{Name:"江口县",Code:"22"},{Name:"玉屏侗族自治县",Code:"23"},{Name:"石阡县",Code:"24"},{Name:"思南县",Code:"25"},{Name:"印江土家族苗族自治县",Code:"26"},{Name:"德江县",Code:"27"},{Name:"沿河土家族自治县",Code:"28"},{Name:"松桃苗族自治县",Code:"29"},{Name:"万山特区",Code:"30"}]},{Name:"黔西南",Code:"23",Region:[{Name:"兴义市",Code:"1"},{Name:"兴仁县",Code:"22"},{Name:"普安县",Code:"23"},{Name:"晴隆县",Code:"24"},{Name:"贞丰县",Code:"25"},{Name:"望谟县",Code:"26"},{Name:"册亨县",Code:"27"},{Name:"安龙县",Code:"28"}]},{Name:"毕节",Code:"24",Region:[{Name:"毕节市",Code:"1"},{Name:"大方县",Code:"22"},{Name:"黔西县",Code:"23"},{Name:"金沙县",Code:"24"},{Name:"织金县",Code:"25"},{Name:"纳雍县",Code:"26"},{Name:"威宁彝族回族苗族自治县",Code:"27"},{Name:"赫章县",Code:"28"}]},{Name:"黔东南",Code:"26",Region:[{Name:"凯里市",Code:"1"},{Name:"黄平县",Code:"22"},{Name:"施秉县",Code:"23"},{Name:"三穗县",Code:"24"},{Name:"镇远县",Code:"25"},{Name:"岑巩县",Code:"26"},{Name:"天柱县",Code:"27"},{Name:"锦屏县",Code:"28"},{Name:"剑河县",Code:"29"},{Name:"台江县",Code:"30"},{Name:"黎平县",Code:"31"},{Name:"榕江县",Code:"32"},{Name:"从江县",Code:"33"},{Name:"雷山县",Code:"34"},{Name:"麻江县",Code:"35"},{Name:"丹寨县",Code:"36"}]},{Name:"黔南",Code:"27",Region:[{Name:"都匀市",Code:"1"},{Name:"福泉市",Code:"2"},{Name:"荔波县",Code:"22"},{Name:"贵定县",Code:"23"},{Name:"瓮安县",Code:"25"},{Name:"独山县",Code:"26"},{Name:"平塘县",Code:"27"},{Name:"罗甸县",Code:"28"},{Name:"长顺县",Code:"29"},{Name:"龙里县",Code:"30"},{Name:"惠水县",Code:"31"},{Name:"三都水族自治县",Code:"32"}]}]},{Name:"云南",Code:"53",City:[{Name:"昆明",Code:"1",Region:[{Name:"五华区",Code:"2"},{Name:"盘龙区",Code:"3"},{Name:"官渡区",Code:"11"},{Name:"西山区",Code:"12"},{Name:"东川区",Code:"13"},{Name:"呈贡县",Code:"21"},{Name:"晋宁县",Code:"22"},{Name:"富民县",Code:"24"},{Name:"宜良县",Code:"25"},{Name:"石林彝族自治县",Code:"26"},{Name:"嵩明县",Code:"27"},{Name:"禄劝彝族苗族自治县",Code:"28"},{Name:"寻甸回族彝族自治县",Code:"29"},{Name:"安宁市",Code:"81"}]},{Name:"曲靖",Code:"3",Region:[{Name:"麒麟区",Code:"2"},{Name:"马龙县",Code:"21"},{Name:"陆良县",Code:"22"},{Name:"师宗县",Code:"23"},{Name:"罗平县",Code:"24"},{Name:"富源县",Code:"25"},{Name:"会泽县",Code:"26"},{Name:"沾益县",Code:"28"},{Name:"宣威市",Code:"81"}]},{Name:"玉溪",Code:"4",Region:[{Name:"红塔区",Code:"2"},{Name:"江川县",Code:"21"},{Name:"澄江县",Code:"22"},{Name:"通海县",Code:"23"},{Name:"华宁县",Code:"24"},{Name:"易门县",Code:"25"},{Name:"峨山彝族自治县",Code:"26"},{Name:"新平彝族傣族自治县",Code:"27"},{Name:"元江哈尼族彝族傣族自治县",Code:"28"}]},{Name:"保山",Code:"5",Region:[{Name:"隆阳区",Code:"2"},{Name:"施甸县",Code:"21"},{Name:"腾冲县",Code:"22"},{Name:"龙陵县",Code:"23"},{Name:"昌宁县",Code:"24"}]},{Name:"昭通",Code:"6",Region:[{Name:"昭阳区",Code:"2"},{Name:"鲁甸县",Code:"21"},{Name:"巧家县",Code:"22"},{Name:"盐津县",Code:"23"},{Name:"大关县",Code:"24"},{Name:"永善县",Code:"25"},{Name:"绥江县",Code:"26"},{Name:"镇雄县",Code:"27"},{Name:"彝良县",Code:"28"},{Name:"威信县",Code:"29"},{Name:"水富县",Code:"30"}]},{Name:"丽江",Code:"7",Region:[{Name:"古城区",Code:"2"},{Name:"玉龙纳西族自治县",Code:"21"},{Name:"永胜县",Code:"22"},{Name:"华坪县",Code:"23"},{Name:"宁蒗彝族自治县",Code:"24"}]},{Name:"普洱",Code:"8",Region:[{Name:"思茅区",Code:"2"},{Name:"宁洱哈尼族彝族自治县",Code:"21"},{Name:"墨江哈尼族自治县",Code:"22"},{Name:"景东彝族自治县",Code:"23"},{Name:"景谷傣族彝族自治县",Code:"24"},{Name:"镇沅彝族哈尼族拉祜族自治县",Code:"25"},{Name:"江城哈尼族彝族自治县",Code:"26"},{Name:"孟连傣族拉祜族佤族自治县",Code:"27"},{Name:"澜沧拉祜族自治县",Code:"28"},{Name:"西盟佤族自治县",Code:"29"}]},{Name:"临沧",Code:"9",Region:[{Name:"临翔区",Code:"2"},{Name:"凤庆县",Code:"21"},{Name:"云　县",Code:"22"},{Name:"永德县",Code:"23"},{Name:"镇康县",Code:"24"},{Name:"双江拉祜族佤族布朗族傣族自治县",Code:"25"},{Name:"耿马傣族佤族自治县",Code:"26"},{Name:"沧源佤族自治县",Code:"27"}]},{Name:"楚雄",Code:"23",Region:[{Name:"楚雄市",Code:"1"},{Name:"双柏县",Code:"22"},{Name:"牟定县",Code:"23"},{Name:"南华县",Code:"24"},{Name:"姚安县",Code:"25"},{Name:"大姚县",Code:"26"},{Name:"永仁县",Code:"27"},{Name:"元谋县",Code:"28"},{Name:"武定县",Code:"29"},{Name:"禄丰县",Code:"31"}]},{Name:"红河",Code:"25",Region:[{Name:"个旧市",Code:"1"},{Name:"开远市",Code:"2"},{Name:"蒙自县",Code:"22"},{Name:"屏边苗族自治县",Code:"23"},{Name:"建水县",Code:"24"},{Name:"石屏县",Code:"25"},{Name:"弥勒县",Code:"26"},{Name:"泸西县",Code:"27"},{Name:"元阳县",Code:"28"},{Name:"红河县",Code:"29"},{Name:"金平苗族瑶族傣族自治县",Code:"30"},{Name:"绿春县",Code:"31"},{Name:"河口瑶族自治县",Code:"32"}]},{Name:"文山",Code:"26",Region:[{Name:"文山县",Code:"21"},{Name:"砚山县",Code:"22"},{Name:"西畴县",Code:"23"},{Name:"麻栗坡县",Code:"24"},{Name:"马关县",Code:"25"},{Name:"丘北县",Code:"26"},{Name:"广南县",Code:"27"},{Name:"富宁县",Code:"28"}]},{Name:"西双版纳",Code:"28",Region:[{Name:"景洪市",Code:"1"},{Name:"勐海县",Code:"22"},{Name:"勐腊县",Code:"23"}]},{Name:"大理",Code:"29",Region:[{Name:"大理市",Code:"1"},{Name:"漾濞彝族自治县",Code:"22"},{Name:"祥云县",Code:"23"},{Name:"宾川县",Code:"24"},{Name:"弥渡县",Code:"25"},{Name:"南涧彝族自治县",Code:"26"},{Name:"巍山彝族回族自治县",Code:"27"},{Name:"永平县",Code:"28"},{Name:"云龙县",Code:"29"},{Name:"洱源县",Code:"30"},{Name:"剑川县",Code:"31"},{Name:"鹤庆县",Code:"32"}]},{Name:"德宏",Code:"31",Region:[{Name:"瑞丽市",Code:"2"},{Name:"潞西市",Code:"3"},{Name:"梁河县",Code:"22"},{Name:"盈江县",Code:"23"},{Name:"陇川县",Code:"24"}]},{Name:"怒江",Code:"33",Region:[{Name:"泸水县",Code:"21"},{Name:"福贡县",Code:"23"},{Name:"贡山独龙族怒族自治县",Code:"24"},{Name:"兰坪白族普米族自治县",Code:"25"}]},{Name:"迪庆",Code:"34",Region:[{Name:"香格里拉县",Code:"21"},{Name:"德钦县",Code:"22"},{Name:"维西傈僳族自治县",Code:"23"}]}]},{Name:"西藏",Code:"54",City:[{Name:"拉萨",Code:"1",Region:[{Name:"城关区",Code:"2"},{Name:"林周县",Code:"21"},{Name:"当雄县",Code:"22"},{Name:"尼木县",Code:"23"},{Name:"曲水县",Code:"24"},{Name:"堆龙德庆县",Code:"25"},{Name:"达孜县",Code:"26"},{Name:"墨竹工卡县",Code:"27"}]},{Name:"昌都",Code:"21",Region:[{Name:"昌都县",Code:"21"},{Name:"江达县",Code:"22"},{Name:"贡觉县",Code:"23"},{Name:"类乌齐县",Code:"24"},{Name:"丁青县",Code:"25"},{Name:"察雅县",Code:"26"},{Name:"八宿县",Code:"27"},{Name:"左贡县",Code:"28"},{Name:"芒康县",Code:"29"},{Name:"洛隆县",Code:"32"},{Name:"边坝县",Code:"33"}]},{Name:"山南",Code:"22",Region:[{Name:"乃东县",Code:"21"},{Name:"扎囊县",Code:"22"},{Name:"贡嘎县",Code:"23"},{Name:"桑日县",Code:"24"},{Name:"琼结县",Code:"25"},{Name:"曲松县",Code:"26"},{Name:"措美县",Code:"27"},{Name:"洛扎县",Code:"28"},{Name:"加查县",Code:"29"},{Name:"隆子县",Code:"31"},{Name:"错那县",Code:"32"},{Name:"浪卡子县",Code:"33"}]},{Name:"日喀则",Code:"23",Region:[{Name:"日喀则市",Code:"1"},{Name:"南木林县",Code:"22"},{Name:"江孜县",Code:"23"},{Name:"定日县",Code:"24"},{Name:"萨迦县",Code:"25"},{Name:"拉孜县",Code:"26"},{Name:"昂仁县",Code:"27"},{Name:"谢通门县",Code:"28"},{Name:"白朗县",Code:"29"},{Name:"仁布县",Code:"30"},{Name:"康马县",Code:"31"},{Name:"定结县",Code:"32"},{Name:"仲巴县",Code:"33"},{Name:"亚东县",Code:"34"},{Name:"吉隆县",Code:"35"},{Name:"聂拉木县",Code:"36"},{Name:"萨嘎县",Code:"37"},{Name:"岗巴县",Code:"38"}]},{Name:"那曲",Code:"24",Region:[{Name:"那曲县",Code:"21"},{Name:"嘉黎县",Code:"22"},{Name:"比如县",Code:"23"},{Name:"聂荣县",Code:"24"},{Name:"安多县",Code:"25"},{Name:"申扎县",Code:"26"},{Name:"索　县",Code:"27"},{Name:"班戈县",Code:"28"},{Name:"巴青县",Code:"29"},{Name:"尼玛县",Code:"30"}]},{Name:"阿里",Code:"25",Region:[{Name:"普兰县",Code:"21"},{Name:"札达县",Code:"22"},{Name:"噶尔县",Code:"23"},{Name:"日土县",Code:"24"},{Name:"革吉县",Code:"25"},{Name:"改则县",Code:"26"},{Name:"措勤县",Code:"27"}]},{Name:"林芝",Code:"26",Region:[{Name:"林芝县",Code:"21"},{Name:"工布江达县",Code:"22"},{Name:"米林县",Code:"23"},{Name:"墨脱县",Code:"24"},{Name:"波密县",Code:"25"},{Name:"察隅县",Code:"26"},{Name:"朗　县",Code:"27"}]}]},{Name:"陕西",Code:"61",City:[{Name:"西安",Code:"1",Region:[{Name:"新城区",Code:"2"},{Name:"碑林区",Code:"3"},{Name:"莲湖区",Code:"4"},{Name:"灞桥区",Code:"11"},{Name:"未央区",Code:"12"},{Name:"雁塔区",Code:"13"},{Name:"阎良区",Code:"14"},{Name:"临潼区",Code:"15"},{Name:"长安区",Code:"16"},{Name:"蓝田县",Code:"22"},{Name:"周至县",Code:"24"},{Name:"户　县",Code:"25"},{Name:"高陵县",Code:"26"}]},{Name:"铜川",Code:"2",Region:[{Name:"王益区",Code:"2"},{Name:"印台区",Code:"3"},{Name:"耀州区",Code:"4"},{Name:"宜君县",Code:"22"}]},{Name:"宝鸡",Code:"3",Region:[{Name:"渭滨区",Code:"2"},{Name:"金台区",Code:"3"},{Name:"陈仓区",Code:"4"},{Name:"凤翔县",Code:"22"},{Name:"岐山县",Code:"23"},{Name:"扶风县",Code:"24"},{Name:"眉　县",Code:"26"},{Name:"陇　县",Code:"27"},{Name:"千阳县",Code:"28"},{Name:"麟游县",Code:"29"},{Name:"凤　县",Code:"30"},{Name:"太白县",Code:"31"}]},{Name:"咸阳",Code:"4",Region:[{Name:"秦都区",Code:"2"},{Name:"杨凌区",Code:"3"},{Name:"渭城区",Code:"4"},{Name:"三原县",Code:"22"},{Name:"泾阳县",Code:"23"},{Name:"乾　县",Code:"24"},{Name:"礼泉县",Code:"25"},{Name:"永寿县",Code:"26"},{Name:"彬　县",Code:"27"},{Name:"长武县",Code:"28"},{Name:"旬邑县",Code:"29"},{Name:"淳化县",Code:"30"},{Name:"武功县",Code:"31"},{Name:"兴平市",Code:"81"}]},{Name:"渭南",Code:"5",Region:[{Name:"临渭区",Code:"2"},{Name:"华　县",Code:"21"},{Name:"潼关县",Code:"22"},{Name:"大荔县",Code:"23"},{Name:"合阳县",Code:"24"},{Name:"澄城县",Code:"25"},{Name:"蒲城县",Code:"26"},{Name:"白水县",Code:"27"},{Name:"富平县",Code:"28"},{Name:"韩城市",Code:"81"},{Name:"华阴市",Code:"82"}]},{Name:"延安",Code:"6",Region:[{Name:"宝塔区",Code:"2"},{Name:"延长县",Code:"21"},{Name:"延川县",Code:"22"},{Name:"子长县",Code:"23"},{Name:"安塞县",Code:"24"},{Name:"志丹县",Code:"25"},{Name:"吴起县",Code:"26"},{Name:"甘泉县",Code:"27"},{Name:"富　县",Code:"28"},{Name:"洛川县",Code:"29"},{Name:"宜川县",Code:"30"},{Name:"黄龙县",Code:"31"},{Name:"黄陵县",Code:"32"}]},{Name:"汉中",Code:"7",Region:[{Name:"汉台区",Code:"2"},{Name:"南郑县",Code:"21"},{Name:"城固县",Code:"22"},{Name:"洋　县",Code:"23"},{Name:"西乡县",Code:"24"},{Name:"勉　县",Code:"25"},{Name:"宁强县",Code:"26"},{Name:"略阳县",Code:"27"},{Name:"镇巴县",Code:"28"},{Name:"留坝县",Code:"29"},{Name:"佛坪县",Code:"30"}]},{Name:"榆林",Code:"8",Region:[{Name:"榆阳区",Code:"2"},{Name:"神木县",Code:"21"},{Name:"府谷县",Code:"22"},{Name:"横山县",Code:"23"},{Name:"靖边县",Code:"24"},{Name:"定边县",Code:"25"},{Name:"绥德县",Code:"26"},{Name:"米脂县",Code:"27"},{Name:"佳　县",Code:"28"},{Name:"吴堡县",Code:"29"},{Name:"清涧县",Code:"30"},{Name:"子洲县",Code:"31"}]},{Name:"安康",Code:"9",Region:[{Name:"汉滨区",Code:"2"},{Name:"汉阴县",Code:"21"},{Name:"石泉县",Code:"22"},{Name:"宁陕县",Code:"23"},{Name:"紫阳县",Code:"24"},{Name:"岚皋县",Code:"25"},{Name:"平利县",Code:"26"},{Name:"镇坪县",Code:"27"},{Name:"旬阳县",Code:"28"},{Name:"白河县",Code:"29"}]},{Name:"商洛",Code:"10",Region:[{Name:"商州区",Code:"2"},{Name:"洛南县",Code:"21"},{Name:"丹凤县",Code:"22"},{Name:"商南县",Code:"23"},{Name:"山阳县",Code:"24"},{Name:"镇安县",Code:"25"},{Name:"柞水县",Code:"26"}]}]},{Name:"甘肃",Code:"62",City:[{Name:"兰州市",Code:"1",Region:[{Name:"城关区",Code:"2"},{Name:"七里河区",Code:"3"},{Name:"西固区",Code:"4"},{Name:"安宁区",Code:"5"},{Name:"红古区",Code:"11"},{Name:"永登县",Code:"21"},{Name:"皋兰县",Code:"22"},{Name:"榆中县",Code:"23"}]},{Name:"嘉峪关",Code:"2",Region:{Name:"嘉峪关市",Code:"0"}},{Name:"金昌",Code:"3",Region:[{Name:"金川区",Code:"2"},{Name:"永昌县",Code:"21"}]},{Name:"白银",Code:"4",Region:[{Name:"白银区",Code:"2"},{Name:"平川区",Code:"3"},{Name:"靖远县",Code:"21"},{Name:"会宁县",Code:"22"},{Name:"景泰县",Code:"23"}]},{Name:"天水",Code:"5",Region:[{Name:"秦州区",Code:"2"},{Name:"麦积区",Code:"3"},{Name:"清水县",Code:"21"},{Name:"秦安县",Code:"22"},{Name:"甘谷县",Code:"23"},{Name:"武山县",Code:"24"},{Name:"张家川回族自治县",Code:"25"}]},{Name:"武威",Code:"6",Region:[{Name:"凉州区",Code:"2"},{Name:"民勤县",Code:"21"},{Name:"古浪县",Code:"22"},{Name:"天祝藏族自治县",Code:"23"}]},{Name:"张掖",Code:"7",Region:[{Name:"甘州区",Code:"2"},{Name:"肃南裕固族自治县",Code:"21"},{Name:"民乐县",Code:"22"},{Name:"临泽县",Code:"23"},{Name:"高台县",Code:"24"},{Name:"山丹县",Code:"25"}]},{Name:"平凉",Code:"8",Region:[{Name:"崆峒区",Code:"2"},{Name:"泾川县",Code:"21"},{Name:"灵台县",Code:"22"},{Name:"崇信县",Code:"23"},{Name:"华亭县",Code:"24"},{Name:"庄浪县",Code:"25"},{Name:"静宁县",Code:"26"}]},{Name:"酒泉",Code:"9",Region:[{Name:"肃州区",Code:"2"},{Name:"金塔县",Code:"21"},{Name:"瓜州县",Code:"22"},{Name:"肃北蒙古族自治县",Code:"23"},{Name:"阿克塞哈萨克族自治县",Code:"24"},{Name:"玉门市",Code:"81"},{Name:"敦煌市",Code:"82"}]},{Name:"庆阳",Code:"10",Region:[{Name:"西峰区",Code:"2"},{Name:"庆城县",Code:"21"},{Name:"环　县",Code:"22"},{Name:"华池县",Code:"23"},{Name:"合水县",Code:"24"},{Name:"正宁县",Code:"25"},{Name:"宁　县",Code:"26"},{Name:"镇原县",Code:"27"}]},{Name:"定西",Code:"11",Region:[{Name:"安定区",Code:"2"},{Name:"通渭县",Code:"21"},{Name:"陇西县",Code:"22"},{Name:"渭源县",Code:"23"},{Name:"临洮县",Code:"24"},{Name:"漳　县",Code:"25"},{Name:"岷　县",Code:"26"}]},{Name:"陇南",Code:"12",Region:[{Name:"武都区",Code:"2"},{Name:"成　县",Code:"21"},{Name:"文　县",Code:"22"},{Name:"宕昌县",Code:"23"},{Name:"康　县",Code:"24"},{Name:"西和县",Code:"25"},{Name:"礼　县",Code:"26"},{Name:"徽　县",Code:"27"},{Name:"两当县",Code:"28"}]},{Name:"临夏",Code:"29",Region:[{Name:"临夏市",Code:"1"},{Name:"临夏县",Code:"21"},{Name:"康乐县",Code:"22"},{Name:"永靖县",Code:"23"},{Name:"广河县",Code:"24"},{Name:"和政县",Code:"25"},{Name:"东乡族自治县",Code:"26"},{Name:"积石山保安族东乡族撒拉族自治县",Code:"27"}]},{Name:"甘南",Code:"30",Region:[{Name:"合作市",Code:"1"},{Name:"临潭县",Code:"21"},{Name:"卓尼县",Code:"22"},{Name:"舟曲县",Code:"23"},{Name:"迭部县",Code:"24"},{Name:"玛曲县",Code:"25"},{Name:"碌曲县",Code:"26"},{Name:"夏河县",Code:"27"}]}]},{Name:"青海",Code:"63",City:[{Name:"西宁",Code:"1",Region:[{Name:"城东区",Code:"2"},{Name:"城中区",Code:"3"},{Name:"城西区",Code:"4"},{Name:"城北区",Code:"5"},{Name:"大通回族土族自治县",Code:"21"},{Name:"湟中县",Code:"22"},{Name:"湟源县",Code:"23"}]},{Name:"海东",Code:"21",Region:[{Name:"平安县",Code:"21"},{Name:"民和回族土族自治县",Code:"22"},{Name:"乐都县",Code:"23"},{Name:"互助土族自治县",Code:"26"},{Name:"化隆回族自治县",Code:"27"},{Name:"循化撒拉族自治县",Code:"28"}]},{Name:"海北",Code:"22",Region:[{Name:"门源回族自治县",Code:"21"},{Name:"祁连县",Code:"22"},{Name:"海晏县",Code:"23"},{Name:"刚察县",Code:"24"}]},{Name:"黄南",Code:"23",Region:[{Name:"同仁县",Code:"21"},{Name:"尖扎县",Code:"22"},{Name:"泽库县",Code:"23"},{Name:"河南蒙古族自治县",Code:"24"}]},{Name:"海南",Code:"25",Region:[{Name:"共和县",Code:"21"},{Name:"同德县",Code:"22"},{Name:"贵德县",Code:"23"},{Name:"兴海县",Code:"24"},{Name:"贵南县",Code:"25"}]},{Name:"果洛",Code:"26",Region:[{Name:"玛沁县",Code:"21"},{Name:"班玛县",Code:"22"},{Name:"甘德县",Code:"23"},{Name:"达日县",Code:"24"},{Name:"久治县",Code:"25"},{Name:"玛多县",Code:"26"}]},{Name:"玉树",Code:"27",Region:[{Name:"玉树县",Code:"21"},{Name:"杂多县",Code:"22"},{Name:"称多县",Code:"23"},{Name:"治多县",Code:"24"},{Name:"囊谦县",Code:"25"},{Name:"曲麻莱县",Code:"26"}]},{Name:"海西",Code:"28",Region:[{Name:"格尔木市",Code:"1"},{Name:"德令哈市",Code:"2"},{Name:"乌兰县",Code:"21"},{Name:"都兰县",Code:"22"},{Name:"天峻县",Code:"23"}]}]},{Name:"宁夏",Code:"64",City:[{Name:"银川",Code:"1",Region:[{Name:"兴庆区",Code:"4"},{Name:"西夏区",Code:"5"},{Name:"金凤区",Code:"6"},{Name:"永宁县",Code:"21"},{Name:"贺兰县",Code:"22"},{Name:"灵武市",Code:"81"}]},{Name:"石嘴山",Code:"2",Region:[{Name:"大武口区",Code:"2"},{Name:"惠农区",Code:"5"},{Name:"平罗县",Code:"21"}]},{Name:"吴忠",Code:"3",Region:[{Name:"利通区",Code:"2"},{Name:"红寺堡区",Code:"3"},{Name:"盐池县",Code:"23"},{Name:"同心县",Code:"24"},{Name:"青铜峡市",Code:"81"}]},{Name:"固原",Code:"4",Region:[{Name:"原州区",Code:"2"},{Name:"西吉县",Code:"22"},{Name:"隆德县",Code:"23"},{Name:"泾源县",Code:"24"},{Name:"彭阳县",Code:"25"}]},{Name:"中卫",Code:"5",Region:[{Name:"沙坡头区",Code:"2"},{Name:"中宁县",Code:"21"},{Name:"海原县",Code:"22"}]}]},{Name:"新疆",Code:"65",City:[{Name:"乌鲁木齐",Code:"1",Region:[{Name:"天山区",Code:"2"},{Name:"沙依巴克区",Code:"3"},{Name:"新市区",Code:"4"},{Name:"水磨沟区",Code:"5"},{Name:"头屯河区",Code:"6"},{Name:"达坂城区",Code:"7"},{Name:"米东区",Code:"9"},{Name:"乌鲁木齐县",Code:"21"}]},{Name:"克拉玛依",Code:"2",Region:[{Name:"独山子区",Code:"2"},{Name:"克拉玛依区",Code:"3"},{Name:"白碱滩区",Code:"4"},{Name:"乌尔禾区",Code:"5"}]},{Name:"吐鲁番",Code:"21",Region:[{Name:"吐鲁番市",Code:"1"},{Name:"鄯善县",Code:"22"},{Name:"托克逊县",Code:"23"}]},{Name:"哈密",Code:"22",Region:[{Name:"哈密市",Code:"1"},{Name:"巴里坤哈萨克自治县",Code:"22"},{Name:"伊吾县",Code:"23"}]},{Name:"昌吉",Code:"23",Region:[{Name:"昌吉市",Code:"1"},{Name:"阜康市",Code:"2"},{Name:"呼图壁县",Code:"23"},{Name:"玛纳斯县",Code:"24"},{Name:"奇台县",Code:"25"},{Name:"吉木萨尔县",Code:"27"},{Name:"木垒哈萨克自治县",Code:"28"}]},{Name:"博尔塔拉",Code:"27",Region:[{Name:"博乐市",Code:"1"},{Name:"精河县",Code:"22"},{Name:"温泉县",Code:"23"}]},{Name:"巴音郭楞",Code:"28",Region:[{Name:"库尔勒市",Code:"1"},{Name:"轮台县",Code:"22"},{Name:"尉犁县",Code:"23"},{Name:"若羌县",Code:"24"},{Name:"且末县",Code:"25"},{Name:"焉耆回族自治县",Code:"26"},{Name:"和静县",Code:"27"},{Name:"和硕县",Code:"28"},{Name:"博湖县",Code:"29"}]},{Name:"阿克苏",Code:"29",Region:[{Name:"阿克苏市",Code:"1"},{Name:"温宿县",Code:"22"},{Name:"库车县",Code:"23"},{Name:"沙雅县",Code:"24"},{Name:"新和县",Code:"25"},{Name:"拜城县",Code:"26"},{Name:"乌什县",Code:"27"},{Name:"阿瓦提县",Code:"28"},{Name:"柯坪县",Code:"29"}]},{Name:"克孜勒苏",Code:"30",Region:[{Name:"阿图什市",Code:"1"},{Name:"阿克陶县",Code:"22"},{Name:"阿合奇县",Code:"23"},{Name:"乌恰县",Code:"24"}]},{Name:"喀什",Code:"31",Region:[{Name:"喀什市",Code:"1"},{Name:"疏附县",Code:"21"},{Name:"疏勒县",Code:"22"},{Name:"英吉沙县",Code:"23"},{Name:"泽普县",Code:"24"},{Name:"莎车县",Code:"25"},{Name:"叶城县",Code:"26"},{Name:"麦盖提县",Code:"27"},{Name:"岳普湖县",Code:"28"},{Name:"伽师县",Code:"29"},{Name:"巴楚县",Code:"30"},{Name:"塔什库尔干塔吉克自治县",Code:"31"}]},{Name:"和田",Code:"32",Region:[{Name:"和田市",Code:"1"},{Name:"和田县",Code:"21"},{Name:"墨玉县",Code:"22"},{Name:"皮山县",Code:"23"},{Name:"洛浦县",Code:"24"},{Name:"策勒县",Code:"25"},{Name:"于田县",Code:"26"},{Name:"民丰县",Code:"27"}]},{Name:"伊犁",Code:"40",Region:[{Name:"伊宁市",Code:"2"},{Name:"奎屯市",Code:"3"},{Name:"伊宁县",Code:"21"},{Name:"察布查尔锡伯自治县",Code:"22"},{Name:"霍城县",Code:"23"},{Name:"巩留县",Code:"24"},{Name:"新源县",Code:"25"},{Name:"昭苏县",Code:"26"},{Name:"特克斯县",Code:"27"},{Name:"尼勒克县",Code:"28"}]},{Name:"塔城",Code:"42",Region:[{Name:"塔城市",Code:"1"},{Name:"乌苏市",Code:"2"},{Name:"额敏县",Code:"21"},{Name:"沙湾县",Code:"23"},{Name:"托里县",Code:"24"},{Name:"裕民县",Code:"25"},{Name:"和布克赛尔蒙古自治县",Code:"26"}]},{Name:"阿勒泰",Code:"43",Region:[{Name:"阿勒泰市",Code:"1"},{Name:"布尔津县",Code:"21"},{Name:"富蕴县",Code:"22"},{Name:"福海县",Code:"23"},{Name:"哈巴河县",Code:"24"},{Name:"青河县",Code:"25"},{Name:"吉木乃县",Code:"26"}]},{Name:"石河子",Code:"91"},{Name:"阿拉尔",Code:"92"},{Name:"图木舒克",Code:"93"},{Name:"五家渠",Code:"94"},{Name:"北屯",Code:"95"}]},{Name:"台湾",Code:"71",City:[{Name:"台北市",Code:"1"},{Name:"高雄市",Code:"2"},{Name:"基隆市",Code:"3"},{Name:"台中市",Code:"4"},{Name:"台南市",Code:"5"},{Name:"新竹市",Code:"6"},{Name:"嘉义市",Code:"7"},{Name:"台北县",Code:"8"},{Name:"宜兰县",Code:"9"},{Name:"桃园县",Code:"10"},{Name:"新竹县",Code:"11"},{Name:"苗栗县",Code:"12"},{Name:"台中县",Code:"13"},{Name:"彰化县",Code:"14"},{Name:"南投县",Code:"15"},{Name:"云林县",Code:"16"},{Name:"嘉义县",Code:"17"},{Name:"台南县",Code:"18"},{Name:"高雄县",Code:"19"},{Name:"屏东县",Code:"20"},{Name:"台东县",Code:"22"},{Name:"花莲县",Code:"23"},{Name:"澎湖县",Code:"21"}]},{Name:"香港",Code:"81",City:[{Name:"中西区",Code:"HCW"},{Name:"东区",Code:"HEA"},{Name:"九龙城区",Code:"KKC"},{Name:"观塘区",Code:"KKT"},{Name:"南区",Code:"HSO"},{Name:"深水埗区",Code:"KSS"},{Name:"黄大仙区",Code:"KWT"},{Name:"湾仔区",Code:"HWC"},{Name:"油尖旺区",Code:"KYT"},{Name:"离岛区",Code:"NIS"},{Name:"葵青区",Code:"NKT"},{Name:"北区",Code:"NNO"},{Name:"西贡区",Code:"NSK"},{Name:"沙田区",Code:"NST"},{Name:"屯门区",Code:"NTM"},{Name:"大埔区",Code:"NTP"},{Name:"荃湾区",Code:"NTW"},{Name:"元朗区",Code:"NYL"}]},{Name:"澳门",Code:"82",City:[{Name:"花地玛堂区",Code:"OLF"},{Name:"圣安多尼堂区",Code:"ANT"},{Name:"大堂区",Code:"CAT"},{Name:"望德堂区",Code:"LAW"},{Name:"风顺堂区",Code:"LAZ"},{Name:"氹仔",Code:"TPA"},{Name:"路环",Code:"CLN"}]}],n=t;o.default=n},"66fd":function(e,o,a){"use strict";a.r(o),function(e){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var a=Object.freeze({});function t(e){return void 0===e||null===e}function n(e){return void 0!==e&&null!==e}function d(e){return!0===e}function m(e){return!1===e}function r(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function i(e){return null!==e&&"object"===typeof e}var C=Object.prototype.toString;function N(e){return"[object Object]"===C.call(e)}function s(e){return"[object RegExp]"===C.call(e)}function u(e){var o=parseFloat(String(e));return o>=0&&Math.floor(o)===o&&isFinite(e)}function c(e){return n(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function f(e){return null==e?"":Array.isArray(e)||N(e)&&e.toString===C?JSON.stringify(e,null,2):String(e)}function l(e){var o=parseFloat(e);return isNaN(o)?e:o}function p(e,o){for(var a=Object.create(null),t=e.split(","),n=0;n<t.length;n++)a[t[n]]=!0;return o?function(e){return a[e.toLowerCase()]}:function(e){return a[e]}}p("slot,component",!0);var h=p("key,ref,slot,slot-scope,is");function v(e,o){if(e.length){var a=e.indexOf(o);if(a>-1)return e.splice(a,1)}}var g=Object.prototype.hasOwnProperty;function y(e,o){return g.call(e,o)}function _(e){var o=Object.create(null);return function(a){var t=o[a];return t||(o[a]=e(a))}}var b=/-(\w)/g,R=_(function(e){return e.replace(b,function(e,o){return o?o.toUpperCase():""})}),w=_(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),$=/\B([A-Z])/g,O=_(function(e){return e.replace($,"-$1").toLowerCase()});function A(e,o){function a(a){var t=arguments.length;return t?t>1?e.apply(o,arguments):e.call(o,a):e.call(o)}return a._length=e.length,a}function S(e,o){return e.bind(o)}var k=Function.prototype.bind?S:A;function j(e,o){o=o||0;var a=e.length-o,t=new Array(a);while(a--)t[a]=e[a+o];return t}function x(e,o){for(var a in o)e[a]=o[a];return e}function E(e){for(var o={},a=0;a<e.length;a++)e[a]&&x(o,e[a]);return o}function T(e,o,a){}var D=function(e,o,a){return!1},P=function(e){return e};function I(e,o){if(e===o)return!0;var a=i(e),t=i(o);if(!a||!t)return!a&&!t&&String(e)===String(o);try{var n=Array.isArray(e),d=Array.isArray(o);if(n&&d)return e.length===o.length&&e.every(function(e,a){return I(e,o[a])});if(e instanceof Date&&o instanceof Date)return e.getTime()===o.getTime();if(n||d)return!1;var m=Object.keys(e),r=Object.keys(o);return m.length===r.length&&m.every(function(a){return I(e[a],o[a])})}catch(C){return!1}}function M(e,o){for(var a=0;a<e.length;a++)if(I(e[a],o))return a;return-1}function B(e){var o=!1;return function(){o||(o=!0,e.apply(this,arguments))}}var U=["component","directive","filter"],V=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:D,isReservedAttr:D,isUnknownElement:D,getTagNamespace:T,parsePlatformTagName:P,mustUseProp:D,async:!0,_lifecycleHooks:V},L=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function F(e){var o=(e+"").charCodeAt(0);return 36===o||95===o}function H(e,o,a,t){Object.defineProperty(e,o,{value:a,enumerable:!!t,writable:!0,configurable:!0})}var z=new RegExp("[^"+L.source+".$_\\d]");function G(e){if(!z.test(e)){var o=e.split(".");return function(e){for(var a=0;a<o.length;a++){if(!e)return;e=e[o[a]]}return e}}}var J,K="__proto__"in{},W="undefined"!==typeof window,X="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Q=X&&WXEnvironment.platform.toLowerCase(),Y=W&&window.navigator.userAgent.toLowerCase(),Z=Y&&/msie|trident/.test(Y),ee=(Y&&Y.indexOf("msie 9.0"),Y&&Y.indexOf("edge/")>0),oe=(Y&&Y.indexOf("android"),Y&&/iphone|ipad|ipod|ios/.test(Y)||"ios"===Q),ae=(Y&&/chrome\/\d+/.test(Y),Y&&/phantomjs/.test(Y),Y&&Y.match(/firefox\/(\d+)/),{}.watch);if(W)try{var te={};Object.defineProperty(te,"passive",{get:function(){}}),window.addEventListener("test-passive",null,te)}catch(on){}var ne=function(){return void 0===J&&(J=!W&&!X&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),J},de=W&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function me(e){return"function"===typeof e&&/native code/.test(e.toString())}var re,ie="undefined"!==typeof Symbol&&me(Symbol)&&"undefined"!==typeof Reflect&&me(Reflect.ownKeys);re="undefined"!==typeof Set&&me(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var Ce=T,Ne=0,se=function(){this.id=Ne++,this.subs=[]};function ue(e){se.SharedObject.targetStack.push(e),se.SharedObject.target=e}function ce(){se.SharedObject.targetStack.pop(),se.SharedObject.target=se.SharedObject.targetStack[se.SharedObject.targetStack.length-1]}se.prototype.addSub=function(e){this.subs.push(e)},se.prototype.removeSub=function(e){v(this.subs,e)},se.prototype.depend=function(){se.SharedObject.target&&se.SharedObject.target.addDep(this)},se.prototype.notify=function(){var e=this.subs.slice();for(var o=0,a=e.length;o<a;o++)e[o].update()},se.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},se.SharedObject.target=null,se.SharedObject.targetStack=[];var fe=function(e,o,a,t,n,d,m,r){this.tag=e,this.data=o,this.children=a,this.text=t,this.elm=n,this.ns=void 0,this.context=d,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=o&&o.key,this.componentOptions=m,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=r,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},le={child:{configurable:!0}};le.child.get=function(){return this.componentInstance},Object.defineProperties(fe.prototype,le);var pe=function(e){void 0===e&&(e="");var o=new fe;return o.text=e,o.isComment=!0,o};function he(e){return new fe(void 0,void 0,void 0,String(e))}function ve(e){var o=new fe(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return o.ns=e.ns,o.isStatic=e.isStatic,o.key=e.key,o.isComment=e.isComment,o.fnContext=e.fnContext,o.fnOptions=e.fnOptions,o.fnScopeId=e.fnScopeId,o.asyncMeta=e.asyncMeta,o.isCloned=!0,o}var ge=Array.prototype,ye=Object.create(ge),_e=["push","pop","shift","unshift","splice","sort","reverse"];_e.forEach(function(e){var o=ge[e];H(ye,e,function(){var a=[],t=arguments.length;while(t--)a[t]=arguments[t];var n,d=o.apply(this,a),m=this.__ob__;switch(e){case"push":case"unshift":n=a;break;case"splice":n=a.slice(2);break}return n&&m.observeArray(n),m.dep.notify(),d})});var be=Object.getOwnPropertyNames(ye),Re=!0;function we(e){Re=e}var $e=function(e){this.value=e,this.dep=new se,this.vmCount=0,H(e,"__ob__",this),Array.isArray(e)?(K?e.push!==e.__proto__.push?Ae(e,ye,be):Oe(e,ye):Ae(e,ye,be),this.observeArray(e)):this.walk(e)};function Oe(e,o){e.__proto__=o}function Ae(e,o,a){for(var t=0,n=a.length;t<n;t++){var d=a[t];H(e,d,o[d])}}function Se(e,o){var a;if(i(e)&&!(e instanceof fe))return y(e,"__ob__")&&e.__ob__ instanceof $e?a=e.__ob__:Re&&!ne()&&(Array.isArray(e)||N(e))&&Object.isExtensible(e)&&!e._isVue&&(a=new $e(e)),o&&a&&a.vmCount++,a}function ke(e,o,a,t,n){var d=new se,m=Object.getOwnPropertyDescriptor(e,o);if(!m||!1!==m.configurable){var r=m&&m.get,i=m&&m.set;r&&!i||2!==arguments.length||(a=e[o]);var C=!n&&Se(a);Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:function(){var o=r?r.call(e):a;return se.SharedObject.target&&(d.depend(),C&&(C.dep.depend(),Array.isArray(o)&&Ee(o))),o},set:function(o){var t=r?r.call(e):a;o===t||o!==o&&t!==t||r&&!i||(i?i.call(e,o):a=o,C=!n&&Se(o),d.notify())}})}}function je(e,o,a){if(Array.isArray(e)&&u(o))return e.length=Math.max(e.length,o),e.splice(o,1,a),a;if(o in e&&!(o in Object.prototype))return e[o]=a,a;var t=e.__ob__;return e._isVue||t&&t.vmCount?a:t?(ke(t.value,o,a),t.dep.notify(),a):(e[o]=a,a)}function xe(e,o){if(Array.isArray(e)&&u(o))e.splice(o,1);else{var a=e.__ob__;e._isVue||a&&a.vmCount||y(e,o)&&(delete e[o],a&&a.dep.notify())}}function Ee(e){for(var o=void 0,a=0,t=e.length;a<t;a++)o=e[a],o&&o.__ob__&&o.__ob__.dep.depend(),Array.isArray(o)&&Ee(o)}$e.prototype.walk=function(e){for(var o=Object.keys(e),a=0;a<o.length;a++)ke(e,o[a])},$e.prototype.observeArray=function(e){for(var o=0,a=e.length;o<a;o++)Se(e[o])};var Te=q.optionMergeStrategies;function De(e,o){if(!o)return e;for(var a,t,n,d=ie?Reflect.ownKeys(o):Object.keys(o),m=0;m<d.length;m++)a=d[m],"__ob__"!==a&&(t=e[a],n=o[a],y(e,a)?t!==n&&N(t)&&N(n)&&De(t,n):je(e,a,n));return e}function Pe(e,o,a){return a?function(){var t="function"===typeof o?o.call(a,a):o,n="function"===typeof e?e.call(a,a):e;return t?De(t,n):n}:o?e?function(){return De("function"===typeof o?o.call(this,this):o,"function"===typeof e?e.call(this,this):e)}:o:e}function Ie(e,o){var a=o?e?e.concat(o):Array.isArray(o)?o:[o]:e;return a?Me(a):a}function Me(e){for(var o=[],a=0;a<e.length;a++)-1===o.indexOf(e[a])&&o.push(e[a]);return o}function Be(e,o,a,t){var n=Object.create(e||null);return o?x(n,o):n}Te.data=function(e,o,a){return a?Pe(e,o,a):o&&"function"!==typeof o?e:Pe(e,o)},V.forEach(function(e){Te[e]=Ie}),U.forEach(function(e){Te[e+"s"]=Be}),Te.watch=function(e,o,a,t){if(e===ae&&(e=void 0),o===ae&&(o=void 0),!o)return Object.create(e||null);if(!e)return o;var n={};for(var d in x(n,e),o){var m=n[d],r=o[d];m&&!Array.isArray(m)&&(m=[m]),n[d]=m?m.concat(r):Array.isArray(r)?r:[r]}return n},Te.props=Te.methods=Te.inject=Te.computed=function(e,o,a,t){if(!e)return o;var n=Object.create(null);return x(n,e),o&&x(n,o),n},Te.provide=Pe;var Ue=function(e,o){return void 0===o?e:o};function Ve(e,o){var a=e.props;if(a){var t,n,d,m={};if(Array.isArray(a)){t=a.length;while(t--)n=a[t],"string"===typeof n&&(d=R(n),m[d]={type:null})}else if(N(a))for(var r in a)n=a[r],d=R(r),m[d]=N(n)?n:{type:n};else 0;e.props=m}}function qe(e,o){var a=e.inject;if(a){var t=e.inject={};if(Array.isArray(a))for(var n=0;n<a.length;n++)t[a[n]]={from:a[n]};else if(N(a))for(var d in a){var m=a[d];t[d]=N(m)?x({from:d},m):{from:m}}else 0}}function Le(e){var o=e.directives;if(o)for(var a in o){var t=o[a];"function"===typeof t&&(o[a]={bind:t,update:t})}}function Fe(e,o,a){if("function"===typeof o&&(o=o.options),Ve(o,a),qe(o,a),Le(o),!o._base&&(o.extends&&(e=Fe(e,o.extends,a)),o.mixins))for(var t=0,n=o.mixins.length;t<n;t++)e=Fe(e,o.mixins[t],a);var d,m={};for(d in e)r(d);for(d in o)y(e,d)||r(d);function r(t){var n=Te[t]||Ue;m[t]=n(e[t],o[t],a,t)}return m}function He(e,o,a,t){if("string"===typeof a){var n=e[o];if(y(n,a))return n[a];var d=R(a);if(y(n,d))return n[d];var m=w(d);if(y(n,m))return n[m];var r=n[a]||n[d]||n[m];return r}}function ze(e,o,a,t){var n=o[e],d=!y(a,e),m=a[e],r=We(Boolean,n.type);if(r>-1)if(d&&!y(n,"default"))m=!1;else if(""===m||m===O(e)){var i=We(String,n.type);(i<0||r<i)&&(m=!0)}if(void 0===m){m=Ge(t,n,e);var C=Re;we(!0),Se(m),we(C)}return m}function Ge(e,o,a){if(y(o,"default")){var t=o.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[a]&&void 0!==e._props[a]?e._props[a]:"function"===typeof t&&"Function"!==Je(o.type)?t.call(e):t}}function Je(e){var o=e&&e.toString().match(/^\s*function (\w+)/);return o?o[1]:""}function Ke(e,o){return Je(e)===Je(o)}function We(e,o){if(!Array.isArray(o))return Ke(o,e)?0:-1;for(var a=0,t=o.length;a<t;a++)if(Ke(o[a],e))return a;return-1}function Xe(e,o,a){ue();try{if(o){var t=o;while(t=t.$parent){var n=t.$options.errorCaptured;if(n)for(var d=0;d<n.length;d++)try{var m=!1===n[d].call(t,e,o,a);if(m)return}catch(on){Ye(on,t,"errorCaptured hook")}}}Ye(e,o,a)}finally{ce()}}function Qe(e,o,a,t,n){var d;try{d=a?e.apply(o,a):e.call(o),d&&!d._isVue&&c(d)&&!d._handled&&(d.catch(function(e){return Xe(e,t,n+" (Promise/async)")}),d._handled=!0)}catch(on){Xe(on,t,n)}return d}function Ye(e,o,a){if(q.errorHandler)try{return q.errorHandler.call(null,e,o,a)}catch(on){on!==e&&Ze(on,null,"config.errorHandler")}Ze(e,o,a)}function Ze(e,o,a){if(!W&&!X||"undefined"===typeof console)throw e;console.error(e)}var eo,oo=[],ao=!1;function to(){ao=!1;var e=oo.slice(0);oo.length=0;for(var o=0;o<e.length;o++)e[o]()}if("undefined"!==typeof Promise&&me(Promise)){var no=Promise.resolve();eo=function(){no.then(to),oe&&setTimeout(T)}}else if(Z||"undefined"===typeof MutationObserver||!me(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())eo="undefined"!==typeof setImmediate&&me(setImmediate)?function(){setImmediate(to)}:function(){setTimeout(to,0)};else{var mo=1,ro=new MutationObserver(to),io=document.createTextNode(String(mo));ro.observe(io,{characterData:!0}),eo=function(){mo=(mo+1)%2,io.data=String(mo)}}function Co(e,o){var a;if(oo.push(function(){if(e)try{e.call(o)}catch(on){Xe(on,o,"nextTick")}else a&&a(o)}),ao||(ao=!0,eo()),!e&&"undefined"!==typeof Promise)return new Promise(function(e){a=e})}var No=new re;function so(e){uo(e,No),No.clear()}function uo(e,o){var a,t,n=Array.isArray(e);if(!(!n&&!i(e)||Object.isFrozen(e)||e instanceof fe)){if(e.__ob__){var d=e.__ob__.dep.id;if(o.has(d))return;o.add(d)}if(n){a=e.length;while(a--)uo(e[a],o)}else{t=Object.keys(e),a=t.length;while(a--)uo(e[t[a]],o)}}}var co=_(function(e){var o="&"===e.charAt(0);e=o?e.slice(1):e;var a="~"===e.charAt(0);e=a?e.slice(1):e;var t="!"===e.charAt(0);return e=t?e.slice(1):e,{name:e,once:a,capture:t,passive:o}});function fo(e,o){function a(){var e=arguments,t=a.fns;if(!Array.isArray(t))return Qe(t,null,arguments,o,"v-on handler");for(var n=t.slice(),d=0;d<n.length;d++)Qe(n[d],null,e,o,"v-on handler")}return a.fns=e,a}function lo(e,o,a,n,m,r){var i,C,N,s;for(i in e)C=e[i],N=o[i],s=co(i),t(C)||(t(N)?(t(C.fns)&&(C=e[i]=fo(C,r)),d(s.once)&&(C=e[i]=m(s.name,C,s.capture)),a(s.name,C,s.capture,s.passive,s.params)):C!==N&&(N.fns=C,e[i]=N));for(i in o)t(e[i])&&(s=co(i),n(s.name,o[i],s.capture))}function po(e,o,a){var d=o.options.props;if(!t(d)){var m={},r=e.attrs,i=e.props;if(n(r)||n(i))for(var C in d){var N=O(C);ho(m,i,C,N,!0)||ho(m,r,C,N,!1)}return m}}function ho(e,o,a,t,d){if(n(o)){if(y(o,a))return e[a]=o[a],d||delete o[a],!0;if(y(o,t))return e[a]=o[t],d||delete o[t],!0}return!1}function vo(e){for(var o=0;o<e.length;o++)if(Array.isArray(e[o]))return Array.prototype.concat.apply([],e);return e}function go(e){return r(e)?[he(e)]:Array.isArray(e)?_o(e):void 0}function yo(e){return n(e)&&n(e.text)&&m(e.isComment)}function _o(e,o){var a,m,i,C,N=[];for(a=0;a<e.length;a++)m=e[a],t(m)||"boolean"===typeof m||(i=N.length-1,C=N[i],Array.isArray(m)?m.length>0&&(m=_o(m,(o||"")+"_"+a),yo(m[0])&&yo(C)&&(N[i]=he(C.text+m[0].text),m.shift()),N.push.apply(N,m)):r(m)?yo(C)?N[i]=he(C.text+m):""!==m&&N.push(he(m)):yo(m)&&yo(C)?N[i]=he(C.text+m.text):(d(e._isVList)&&n(m.tag)&&t(m.key)&&n(o)&&(m.key="__vlist"+o+"_"+a+"__"),N.push(m)));return N}function bo(e){var o=e.$options.provide;o&&(e._provided="function"===typeof o?o.call(e):o)}function Ro(e){var o=wo(e.$options.inject,e);o&&(we(!1),Object.keys(o).forEach(function(a){ke(e,a,o[a])}),we(!0))}function wo(e,o){if(e){for(var a=Object.create(null),t=ie?Reflect.ownKeys(e):Object.keys(e),n=0;n<t.length;n++){var d=t[n];if("__ob__"!==d){var m=e[d].from,r=o;while(r){if(r._provided&&y(r._provided,m)){a[d]=r._provided[m];break}r=r.$parent}if(!r)if("default"in e[d]){var i=e[d].default;a[d]="function"===typeof i?i.call(o):i}else 0}}return a}}function $o(e,o){if(!e||!e.length)return{};for(var a={},t=0,n=e.length;t<n;t++){var d=e[t],m=d.data;if(m&&m.attrs&&m.attrs.slot&&delete m.attrs.slot,d.context!==o&&d.fnContext!==o||!m||null==m.slot)d.asyncMeta&&d.asyncMeta.data&&"page"===d.asyncMeta.data.slot?(a["page"]||(a["page"]=[])).push(d):(a.default||(a.default=[])).push(d);else{var r=m.slot,i=a[r]||(a[r]=[]);"template"===d.tag?i.push.apply(i,d.children||[]):i.push(d)}}for(var C in a)a[C].every(Oo)&&delete a[C];return a}function Oo(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Ao(e,o,t){var n,d=Object.keys(o).length>0,m=e?!!e.$stable:!d,r=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(m&&t&&t!==a&&r===t.$key&&!d&&!t.$hasNormal)return t;for(var i in n={},e)e[i]&&"$"!==i[0]&&(n[i]=So(o,i,e[i]))}else n={};for(var C in o)C in n||(n[C]=ko(o,C));return e&&Object.isExtensible(e)&&(e._normalized=n),H(n,"$stable",m),H(n,"$key",r),H(n,"$hasNormal",d),n}function So(e,o,a){var t=function(){var e=arguments.length?a.apply(null,arguments):a({});return e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:go(e),e&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return a.proxy&&Object.defineProperty(e,o,{get:t,enumerable:!0,configurable:!0}),t}function ko(e,o){return function(){return e[o]}}function jo(e,o){var a,t,d,m,r;if(Array.isArray(e)||"string"===typeof e)for(a=new Array(e.length),t=0,d=e.length;t<d;t++)a[t]=o(e[t],t);else if("number"===typeof e)for(a=new Array(e),t=0;t<e;t++)a[t]=o(t+1,t);else if(i(e))if(ie&&e[Symbol.iterator]){a=[];var C=e[Symbol.iterator](),N=C.next();while(!N.done)a.push(o(N.value,a.length)),N=C.next()}else for(m=Object.keys(e),a=new Array(m.length),t=0,d=m.length;t<d;t++)r=m[t],a[t]=o(e[r],r,t);return n(a)||(a=[]),a._isVList=!0,a}function xo(e,o,a,t){var n,d=this.$scopedSlots[e];d?(a=a||{},t&&(a=x(x({},t),a)),n=d(a)||o):n=this.$slots[e]||o;var m=a&&a.slot;return m?this.$createElement("template",{slot:m},n):n}function Eo(e){return He(this.$options,"filters",e,!0)||P}function To(e,o){return Array.isArray(e)?-1===e.indexOf(o):e!==o}function Do(e,o,a,t,n){var d=q.keyCodes[o]||a;return n&&t&&!q.keyCodes[o]?To(n,t):d?To(d,e):t?O(t)!==o:void 0}function Po(e,o,a,t,n){if(a)if(i(a)){var d;Array.isArray(a)&&(a=E(a));var m=function(m){if("class"===m||"style"===m||h(m))d=e;else{var r=e.attrs&&e.attrs.type;d=t||q.mustUseProp(o,r,m)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var i=R(m),C=O(m);if(!(i in d)&&!(C in d)&&(d[m]=a[m],n)){var N=e.on||(e.on={});N["update:"+m]=function(e){a[m]=e}}};for(var r in a)m(r)}else;return e}function Io(e,o){var a=this._staticTrees||(this._staticTrees=[]),t=a[e];return t&&!o?t:(t=a[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Bo(t,"__static__"+e,!1),t)}function Mo(e,o,a){return Bo(e,"__once__"+o+(a?"_"+a:""),!0),e}function Bo(e,o,a){if(Array.isArray(e))for(var t=0;t<e.length;t++)e[t]&&"string"!==typeof e[t]&&Uo(e[t],o+"_"+t,a);else Uo(e,o,a)}function Uo(e,o,a){e.isStatic=!0,e.key=o,e.isOnce=a}function Vo(e,o){if(o)if(N(o)){var a=e.on=e.on?x({},e.on):{};for(var t in o){var n=a[t],d=o[t];a[t]=n?[].concat(n,d):d}}else;return e}function qo(e,o,a,t){o=o||{$stable:!a};for(var n=0;n<e.length;n++){var d=e[n];Array.isArray(d)?qo(d,o,a):d&&(d.proxy&&(d.fn.proxy=!0),o[d.key]=d.fn)}return t&&(o.$key=t),o}function Lo(e,o){for(var a=0;a<o.length;a+=2){var t=o[a];"string"===typeof t&&t&&(e[o[a]]=o[a+1])}return e}function Fo(e,o){return"string"===typeof e?o+e:e}function Ho(e){e._o=Mo,e._n=l,e._s=f,e._l=jo,e._t=xo,e._q=I,e._i=M,e._m=Io,e._f=Eo,e._k=Do,e._b=Po,e._v=he,e._e=pe,e._u=qo,e._g=Vo,e._d=Lo,e._p=Fo}function zo(e,o,t,n,m){var r,i=this,C=m.options;y(n,"_uid")?(r=Object.create(n),r._original=n):(r=n,n=n._original);var N=d(C._compiled),s=!N;this.data=e,this.props=o,this.children=t,this.parent=n,this.listeners=e.on||a,this.injections=wo(C.inject,n),this.slots=function(){return i.$slots||Ao(e.scopedSlots,i.$slots=$o(t,n)),i.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Ao(e.scopedSlots,this.slots())}}),N&&(this.$options=C,this.$slots=this.slots(),this.$scopedSlots=Ao(e.scopedSlots,this.$slots)),C._scopeId?this._c=function(e,o,a,t){var d=na(r,e,o,a,t,s);return d&&!Array.isArray(d)&&(d.fnScopeId=C._scopeId,d.fnContext=n),d}:this._c=function(e,o,a,t){return na(r,e,o,a,t,s)}}function Go(e,o,t,d,m){var r=e.options,i={},C=r.props;if(n(C))for(var N in C)i[N]=ze(N,C,o||a);else n(t.attrs)&&Ko(i,t.attrs),n(t.props)&&Ko(i,t.props);var s=new zo(t,i,m,d,e),u=r.render.call(null,s._c,s);if(u instanceof fe)return Jo(u,t,s.parent,r,s);if(Array.isArray(u)){for(var c=go(u)||[],f=new Array(c.length),l=0;l<c.length;l++)f[l]=Jo(c[l],t,s.parent,r,s);return f}}function Jo(e,o,a,t,n){var d=ve(e);return d.fnContext=a,d.fnOptions=t,o.slot&&((d.data||(d.data={})).slot=o.slot),d}function Ko(e,o){for(var a in o)e[R(a)]=o[a]}Ho(zo.prototype);var Wo={init:function(e,o){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var a=e;Wo.prepatch(a,a)}else{var t=e.componentInstance=Yo(e,Ra);t.$mount(o?e.elm:void 0,o)}},prepatch:function(e,o){var a=o.componentOptions,t=o.componentInstance=e.componentInstance;Aa(t,a.propsData,a.listeners,o,a.children)},insert:function(e){var o=e.context,a=e.componentInstance;a._isMounted||(a._isMounted=!0,xa(a,"mounted")),e.data.keepAlive&&(o._isMounted?Fa(a):ka(a,!0))},destroy:function(e){var o=e.componentInstance;o._isDestroyed||(e.data.keepAlive?ja(o,!0):o.$destroy())}},Xo=Object.keys(Wo);function Qo(e,o,a,m,r){if(!t(e)){var C=a.$options._base;if(i(e)&&(e=C.extend(e)),"function"===typeof e){var N;if(t(e.cid)&&(N=e,e=fa(N,C),void 0===e))return ca(N,o,a,m,r);o=o||{},ut(e),n(o.model)&&oa(e.options,o);var s=po(o,e,r);if(d(e.options.functional))return Go(e,s,o,a,m);var u=o.on;if(o.on=o.nativeOn,d(e.options.abstract)){var c=o.slot;o={},c&&(o.slot=c)}Zo(o);var f=e.options.name||r,l=new fe("vue-component-"+e.cid+(f?"-"+f:""),o,void 0,void 0,void 0,a,{Ctor:e,propsData:s,listeners:u,tag:r,children:m},N);return l}}}function Yo(e,o){var a={_isComponent:!0,_parentVnode:e,parent:o},t=e.data.inlineTemplate;return n(t)&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),new e.componentOptions.Ctor(a)}function Zo(e){for(var o=e.hook||(e.hook={}),a=0;a<Xo.length;a++){var t=Xo[a],n=o[t],d=Wo[t];n===d||n&&n._merged||(o[t]=n?ea(d,n):d)}}function ea(e,o){var a=function(a,t){e(a,t),o(a,t)};return a._merged=!0,a}function oa(e,o){var a=e.model&&e.model.prop||"value",t=e.model&&e.model.event||"input";(o.attrs||(o.attrs={}))[a]=o.model.value;var d=o.on||(o.on={}),m=d[t],r=o.model.callback;n(m)?(Array.isArray(m)?-1===m.indexOf(r):m!==r)&&(d[t]=[r].concat(m)):d[t]=r}var aa=1,ta=2;function na(e,o,a,t,n,m){return(Array.isArray(a)||r(a))&&(n=t,t=a,a=void 0),d(m)&&(n=ta),da(e,o,a,t,n)}function da(e,o,a,t,d){if(n(a)&&n(a.__ob__))return pe();if(n(a)&&n(a.is)&&(o=a.is),!o)return pe();var m,r,i;(Array.isArray(t)&&"function"===typeof t[0]&&(a=a||{},a.scopedSlots={default:t[0]},t.length=0),d===ta?t=go(t):d===aa&&(t=vo(t)),"string"===typeof o)?(r=e.$vnode&&e.$vnode.ns||q.getTagNamespace(o),m=q.isReservedTag(o)?new fe(q.parsePlatformTagName(o),a,t,void 0,void 0,e):a&&a.pre||!n(i=He(e.$options,"components",o))?new fe(o,a,t,void 0,void 0,e):Qo(i,a,e,t,o)):m=Qo(o,a,e,t);return Array.isArray(m)?m:n(m)?(n(r)&&ma(m,r),n(a)&&ra(a),m):pe()}function ma(e,o,a){if(e.ns=o,"foreignObject"===e.tag&&(o=void 0,a=!0),n(e.children))for(var m=0,r=e.children.length;m<r;m++){var i=e.children[m];n(i.tag)&&(t(i.ns)||d(a)&&"svg"!==i.tag)&&ma(i,o,a)}}function ra(e){i(e.style)&&so(e.style),i(e.class)&&so(e.class)}function ia(e){e._vnode=null,e._staticTrees=null;var o=e.$options,t=e.$vnode=o._parentVnode,n=t&&t.context;e.$slots=$o(o._renderChildren,n),e.$scopedSlots=a,e._c=function(o,a,t,n){return na(e,o,a,t,n,!1)},e.$createElement=function(o,a,t,n){return na(e,o,a,t,n,!0)};var d=t&&t.data;ke(e,"$attrs",d&&d.attrs||a,null,!0),ke(e,"$listeners",o._parentListeners||a,null,!0)}var Ca,Na=null;function sa(e){Ho(e.prototype),e.prototype.$nextTick=function(e){return Co(e,this)},e.prototype._render=function(){var e,o=this,a=o.$options,t=a.render,n=a._parentVnode;n&&(o.$scopedSlots=Ao(n.data.scopedSlots,o.$slots,o.$scopedSlots)),o.$vnode=n;try{Na=o,e=t.call(o._renderProxy,o.$createElement)}catch(on){Xe(on,o,"render"),e=o._vnode}finally{Na=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof fe||(e=pe()),e.parent=n,e}}function ua(e,o){return(e.__esModule||ie&&"Module"===e[Symbol.toStringTag])&&(e=e.default),i(e)?o.extend(e):e}function ca(e,o,a,t,n){var d=pe();return d.asyncFactory=e,d.asyncMeta={data:o,context:a,children:t,tag:n},d}function fa(e,o){if(d(e.error)&&n(e.errorComp))return e.errorComp;if(n(e.resolved))return e.resolved;var a=Na;if(a&&n(e.owners)&&-1===e.owners.indexOf(a)&&e.owners.push(a),d(e.loading)&&n(e.loadingComp))return e.loadingComp;if(a&&!n(e.owners)){var m=e.owners=[a],r=!0,C=null,N=null;a.$on("hook:destroyed",function(){return v(m,a)});var s=function(e){for(var o=0,a=m.length;o<a;o++)m[o].$forceUpdate();e&&(m.length=0,null!==C&&(clearTimeout(C),C=null),null!==N&&(clearTimeout(N),N=null))},u=B(function(a){e.resolved=ua(a,o),r?m.length=0:s(!0)}),f=B(function(o){n(e.errorComp)&&(e.error=!0,s(!0))}),l=e(u,f);return i(l)&&(c(l)?t(e.resolved)&&l.then(u,f):c(l.component)&&(l.component.then(u,f),n(l.error)&&(e.errorComp=ua(l.error,o)),n(l.loading)&&(e.loadingComp=ua(l.loading,o),0===l.delay?e.loading=!0:C=setTimeout(function(){C=null,t(e.resolved)&&t(e.error)&&(e.loading=!0,s(!1))},l.delay||200)),n(l.timeout)&&(N=setTimeout(function(){N=null,t(e.resolved)&&f(null)},l.timeout)))),r=!1,e.loading?e.loadingComp:e.resolved}}function la(e){return e.isComment&&e.asyncFactory}function pa(e){if(Array.isArray(e))for(var o=0;o<e.length;o++){var a=e[o];if(n(a)&&(n(a.componentOptions)||la(a)))return a}}function ha(e){e._events=Object.create(null),e._hasHookEvent=!1;var o=e.$options._parentListeners;o&&_a(e,o)}function va(e,o){Ca.$on(e,o)}function ga(e,o){Ca.$off(e,o)}function ya(e,o){var a=Ca;return function t(){var n=o.apply(null,arguments);null!==n&&a.$off(e,t)}}function _a(e,o,a){Ca=e,lo(o,a||{},va,ga,ya,e),Ca=void 0}function ba(e){var o=/^hook:/;e.prototype.$on=function(e,a){var t=this;if(Array.isArray(e))for(var n=0,d=e.length;n<d;n++)t.$on(e[n],a);else(t._events[e]||(t._events[e]=[])).push(a),o.test(e)&&(t._hasHookEvent=!0);return t},e.prototype.$once=function(e,o){var a=this;function t(){a.$off(e,t),o.apply(a,arguments)}return t.fn=o,a.$on(e,t),a},e.prototype.$off=function(e,o){var a=this;if(!arguments.length)return a._events=Object.create(null),a;if(Array.isArray(e)){for(var t=0,n=e.length;t<n;t++)a.$off(e[t],o);return a}var d,m=a._events[e];if(!m)return a;if(!o)return a._events[e]=null,a;var r=m.length;while(r--)if(d=m[r],d===o||d.fn===o){m.splice(r,1);break}return a},e.prototype.$emit=function(e){var o=this,a=o._events[e];if(a){a=a.length>1?j(a):a;for(var t=j(arguments,1),n='event handler for "'+e+'"',d=0,m=a.length;d<m;d++)Qe(a[d],o,t,o,n)}return o}}var Ra=null;function wa(e){var o=Ra;return Ra=e,function(){Ra=o}}function $a(e){var o=e.$options,a=o.parent;if(a&&!o.abstract){while(a.$options.abstract&&a.$parent)a=a.$parent;a.$children.push(e)}e.$parent=a,e.$root=a?a.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Oa(e){e.prototype._update=function(e,o){var a=this,t=a.$el,n=a._vnode,d=wa(a);a._vnode=e,a.$el=n?a.__patch__(n,e):a.__patch__(a.$el,e,o,!1),d(),t&&(t.__vue__=null),a.$el&&(a.$el.__vue__=a),a.$vnode&&a.$parent&&a.$vnode===a.$parent._vnode&&(a.$parent.$el=a.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){xa(e,"beforeDestroy"),e._isBeingDestroyed=!0;var o=e.$parent;!o||o._isBeingDestroyed||e.$options.abstract||v(o.$children,e),e._watcher&&e._watcher.teardown();var a=e._watchers.length;while(a--)e._watchers[a].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),xa(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Aa(e,o,t,n,d){var m=n.data.scopedSlots,r=e.$scopedSlots,i=!!(m&&!m.$stable||r!==a&&!r.$stable||m&&e.$scopedSlots.$key!==m.$key),C=!!(d||e.$options._renderChildren||i);if(e.$options._parentVnode=n,e.$vnode=n,e._vnode&&(e._vnode.parent=n),e.$options._renderChildren=d,e.$attrs=n.data.attrs||a,e.$listeners=t||a,o&&e.$options.props){we(!1);for(var N=e._props,s=e.$options._propKeys||[],u=0;u<s.length;u++){var c=s[u],f=e.$options.props;N[c]=ze(c,f,o,e)}we(!0),e.$options.propsData=o}t=t||a;var l=e.$options._parentListeners;e.$options._parentListeners=t,_a(e,t,l),C&&(e.$slots=$o(d,n.context),e.$forceUpdate())}function Sa(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function ka(e,o){if(o){if(e._directInactive=!1,Sa(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var a=0;a<e.$children.length;a++)ka(e.$children[a]);xa(e,"activated")}}function ja(e,o){if((!o||(e._directInactive=!0,!Sa(e)))&&!e._inactive){e._inactive=!0;for(var a=0;a<e.$children.length;a++)ja(e.$children[a]);xa(e,"deactivated")}}function xa(e,o){ue();var a=e.$options[o],t=o+" hook";if(a)for(var n=0,d=a.length;n<d;n++)Qe(a[n],e,null,e,t);e._hasHookEvent&&e.$emit("hook:"+o),ce()}var Ea=[],Ta=[],Da={},Pa=!1,Ia=!1,Ma=0;function Ba(){Ma=Ea.length=Ta.length=0,Da={},Pa=Ia=!1}var Ua=Date.now;if(W&&!Z){var Va=window.performance;Va&&"function"===typeof Va.now&&Ua()>document.createEvent("Event").timeStamp&&(Ua=function(){return Va.now()})}function qa(){var e,o;for(Ua(),Ia=!0,Ea.sort(function(e,o){return e.id-o.id}),Ma=0;Ma<Ea.length;Ma++)e=Ea[Ma],e.before&&e.before(),o=e.id,Da[o]=null,e.run();var a=Ta.slice(),t=Ea.slice();Ba(),Ha(a),La(t),de&&q.devtools&&de.emit("flush")}function La(e){var o=e.length;while(o--){var a=e[o],t=a.vm;t._watcher===a&&t._isMounted&&!t._isDestroyed&&xa(t,"updated")}}function Fa(e){e._inactive=!1,Ta.push(e)}function Ha(e){for(var o=0;o<e.length;o++)e[o]._inactive=!0,ka(e[o],!0)}function za(e){var o=e.id;if(null==Da[o]){if(Da[o]=!0,Ia){var a=Ea.length-1;while(a>Ma&&Ea[a].id>e.id)a--;Ea.splice(a+1,0,e)}else Ea.push(e);Pa||(Pa=!0,Co(qa))}}var Ga=0,Ja=function(e,o,a,t,n){this.vm=e,n&&(e._watcher=this),e._watchers.push(this),t?(this.deep=!!t.deep,this.user=!!t.user,this.lazy=!!t.lazy,this.sync=!!t.sync,this.before=t.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=a,this.id=++Ga,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new re,this.newDepIds=new re,this.expression="","function"===typeof o?this.getter=o:(this.getter=G(o),this.getter||(this.getter=T)),this.value=this.lazy?void 0:this.get()};Ja.prototype.get=function(){var e;ue(this);var o=this.vm;try{e=this.getter.call(o,o)}catch(on){if(!this.user)throw on;Xe(on,o,'getter for watcher "'+this.expression+'"')}finally{this.deep&&so(e),ce(),this.cleanupDeps()}return e},Ja.prototype.addDep=function(e){var o=e.id;this.newDepIds.has(o)||(this.newDepIds.add(o),this.newDeps.push(e),this.depIds.has(o)||e.addSub(this))},Ja.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var o=this.deps[e];this.newDepIds.has(o.id)||o.removeSub(this)}var a=this.depIds;this.depIds=this.newDepIds,this.newDepIds=a,this.newDepIds.clear(),a=this.deps,this.deps=this.newDeps,this.newDeps=a,this.newDeps.length=0},Ja.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():za(this)},Ja.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||i(e)||this.deep){var o=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,o)}catch(on){Xe(on,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,o)}}},Ja.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Ja.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},Ja.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||v(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var Ka={enumerable:!0,configurable:!0,get:T,set:T};function Wa(e,o,a){Ka.get=function(){return this[o][a]},Ka.set=function(e){this[o][a]=e},Object.defineProperty(e,a,Ka)}function Xa(e){e._watchers=[];var o=e.$options;o.props&&Qa(e,o.props),o.methods&&dt(e,o.methods),o.data?Ya(e):Se(e._data={},!0),o.computed&&ot(e,o.computed),o.watch&&o.watch!==ae&&mt(e,o.watch)}function Qa(e,o){var a=e.$options.propsData||{},t=e._props={},n=e.$options._propKeys=[],d=!e.$parent;d||we(!1);var m=function(d){n.push(d);var m=ze(d,o,a,e);ke(t,d,m),d in e||Wa(e,"_props",d)};for(var r in o)m(r);we(!0)}function Ya(e){var o=e.$options.data;o=e._data="function"===typeof o?Za(o,e):o||{},N(o)||(o={});var a=Object.keys(o),t=e.$options.props,n=(e.$options.methods,a.length);while(n--){var d=a[n];0,t&&y(t,d)||F(d)||Wa(e,"_data",d)}Se(o,!0)}function Za(e,o){ue();try{return e.call(o,o)}catch(on){return Xe(on,o,"data()"),{}}finally{ce()}}var et={lazy:!0};function ot(e,o){var a=e._computedWatchers=Object.create(null),t=ne();for(var n in o){var d=o[n],m="function"===typeof d?d:d.get;0,t||(a[n]=new Ja(e,m||T,T,et)),n in e||at(e,n,d)}}function at(e,o,a){var t=!ne();"function"===typeof a?(Ka.get=t?tt(o):nt(a),Ka.set=T):(Ka.get=a.get?t&&!1!==a.cache?tt(o):nt(a.get):T,Ka.set=a.set||T),Object.defineProperty(e,o,Ka)}function tt(e){return function(){var o=this._computedWatchers&&this._computedWatchers[e];if(o)return o.dirty&&o.evaluate(),se.SharedObject.target&&o.depend(),o.value}}function nt(e){return function(){return e.call(this,this)}}function dt(e,o){e.$options.props;for(var a in o)e[a]="function"!==typeof o[a]?T:k(o[a],e)}function mt(e,o){for(var a in o){var t=o[a];if(Array.isArray(t))for(var n=0;n<t.length;n++)rt(e,a,t[n]);else rt(e,a,t)}}function rt(e,o,a,t){return N(a)&&(t=a,a=a.handler),"string"===typeof a&&(a=e[a]),e.$watch(o,a,t)}function it(e){var o={get:function(){return this._data}},a={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",o),Object.defineProperty(e.prototype,"$props",a),e.prototype.$set=je,e.prototype.$delete=xe,e.prototype.$watch=function(e,o,a){var t=this;if(N(o))return rt(t,e,o,a);a=a||{},a.user=!0;var n=new Ja(t,e,o,a);if(a.immediate)try{o.call(t,n.value)}catch(d){Xe(d,t,'callback for immediate watcher "'+n.expression+'"')}return function(){n.teardown()}}}var Ct=0;function Nt(e){e.prototype._init=function(e){var o=this;o._uid=Ct++,o._isVue=!0,e&&e._isComponent?st(o,e):o.$options=Fe(ut(o.constructor),e||{},o),o._renderProxy=o,o._self=o,$a(o),ha(o),ia(o),xa(o,"beforeCreate"),"mp-toutiao"!==o.mpHost&&Ro(o),Xa(o),"mp-toutiao"!==o.mpHost&&bo(o),"mp-toutiao"!==o.mpHost&&xa(o,"created"),o.$options.el&&o.$mount(o.$options.el)}}function st(e,o){var a=e.$options=Object.create(e.constructor.options),t=o._parentVnode;a.parent=o.parent,a._parentVnode=t;var n=t.componentOptions;a.propsData=n.propsData,a._parentListeners=n.listeners,a._renderChildren=n.children,a._componentTag=n.tag,o.render&&(a.render=o.render,a.staticRenderFns=o.staticRenderFns)}function ut(e){var o=e.options;if(e.super){var a=ut(e.super),t=e.superOptions;if(a!==t){e.superOptions=a;var n=ct(e);n&&x(e.extendOptions,n),o=e.options=Fe(a,e.extendOptions),o.name&&(o.components[o.name]=e)}}return o}function ct(e){var o,a=e.options,t=e.sealedOptions;for(var n in a)a[n]!==t[n]&&(o||(o={}),o[n]=a[n]);return o}function ft(e){this._init(e)}function lt(e){e.use=function(e){var o=this._installedPlugins||(this._installedPlugins=[]);if(o.indexOf(e)>-1)return this;var a=j(arguments,1);return a.unshift(this),"function"===typeof e.install?e.install.apply(e,a):"function"===typeof e&&e.apply(null,a),o.push(e),this}}function pt(e){e.mixin=function(e){return this.options=Fe(this.options,e),this}}function ht(e){e.cid=0;var o=1;e.extend=function(e){e=e||{};var a=this,t=a.cid,n=e._Ctor||(e._Ctor={});if(n[t])return n[t];var d=e.name||a.options.name;var m=function(e){this._init(e)};return m.prototype=Object.create(a.prototype),m.prototype.constructor=m,m.cid=o++,m.options=Fe(a.options,e),m["super"]=a,m.options.props&&vt(m),m.options.computed&&gt(m),m.extend=a.extend,m.mixin=a.mixin,m.use=a.use,U.forEach(function(e){m[e]=a[e]}),d&&(m.options.components[d]=m),m.superOptions=a.options,m.extendOptions=e,m.sealedOptions=x({},m.options),n[t]=m,m}}function vt(e){var o=e.options.props;for(var a in o)Wa(e.prototype,"_props",a)}function gt(e){var o=e.options.computed;for(var a in o)at(e.prototype,a,o[a])}function yt(e){U.forEach(function(o){e[o]=function(e,a){return a?("component"===o&&N(a)&&(a.name=a.name||e,a=this.options._base.extend(a)),"directive"===o&&"function"===typeof a&&(a={bind:a,update:a}),this.options[o+"s"][e]=a,a):this.options[o+"s"][e]}})}function _t(e){return e&&(e.Ctor.options.name||e.tag)}function bt(e,o){return Array.isArray(e)?e.indexOf(o)>-1:"string"===typeof e?e.split(",").indexOf(o)>-1:!!s(e)&&e.test(o)}function Rt(e,o){var a=e.cache,t=e.keys,n=e._vnode;for(var d in a){var m=a[d];if(m){var r=_t(m.componentOptions);r&&!o(r)&&wt(a,d,t,n)}}}function wt(e,o,a,t){var n=e[o];!n||t&&n.tag===t.tag||n.componentInstance.$destroy(),e[o]=null,v(a,o)}Nt(ft),it(ft),ba(ft),Oa(ft),sa(ft);var $t=[String,RegExp,Array],Ot={name:"keep-alive",abstract:!0,props:{include:$t,exclude:$t,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)wt(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(o){Rt(e,function(e){return bt(o,e)})}),this.$watch("exclude",function(o){Rt(e,function(e){return!bt(o,e)})})},render:function(){var e=this.$slots.default,o=pa(e),a=o&&o.componentOptions;if(a){var t=_t(a),n=this,d=n.include,m=n.exclude;if(d&&(!t||!bt(d,t))||m&&t&&bt(m,t))return o;var r=this,i=r.cache,C=r.keys,N=null==o.key?a.Ctor.cid+(a.tag?"::"+a.tag:""):o.key;i[N]?(o.componentInstance=i[N].componentInstance,v(C,N),C.push(N)):(i[N]=o,C.push(N),this.max&&C.length>parseInt(this.max)&&wt(i,C[0],C,this._vnode)),o.data.keepAlive=!0}return o||e&&e[0]}},At={KeepAlive:Ot};function St(e){var o={get:function(){return q}};Object.defineProperty(e,"config",o),e.util={warn:Ce,extend:x,mergeOptions:Fe,defineReactive:ke},e.set=je,e.delete=xe,e.nextTick=Co,e.observable=function(e){return Se(e),e},e.options=Object.create(null),U.forEach(function(o){e.options[o+"s"]=Object.create(null)}),e.options._base=e,x(e.options.components,At),lt(e),pt(e),ht(e),yt(e)}St(ft),Object.defineProperty(ft.prototype,"$isServer",{get:ne}),Object.defineProperty(ft.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(ft,"FunctionalRenderContext",{value:zo}),ft.version="2.6.10";var kt="[object Array]",jt="[object Object]";function xt(e,o){var a={};return Et(e,o),Tt(e,o,"",a),a}function Et(e,o){if(e!==o){var a=Pt(e),t=Pt(o);if(a==jt&&t==jt){if(Object.keys(e).length>=Object.keys(o).length)for(var n in o){var d=e[n];void 0===d?e[n]=null:Et(d,o[n])}}else a==kt&&t==kt&&e.length>=o.length&&o.forEach(function(o,a){Et(e[a],o)})}}function Tt(e,o,a,t){if(e!==o){var n=Pt(e),d=Pt(o);if(n==jt)if(d!=jt||Object.keys(e).length<Object.keys(o).length)Dt(t,a,e);else{var m=function(n){var d=e[n],m=o[n],r=Pt(d),i=Pt(m);if(r!=kt&&r!=jt)d!=o[n]&&Dt(t,(""==a?"":a+".")+n,d);else if(r==kt)i!=kt?Dt(t,(""==a?"":a+".")+n,d):d.length<m.length?Dt(t,(""==a?"":a+".")+n,d):d.forEach(function(e,o){Tt(e,m[o],(""==a?"":a+".")+n+"["+o+"]",t)});else if(r==jt)if(i!=jt||Object.keys(d).length<Object.keys(m).length)Dt(t,(""==a?"":a+".")+n,d);else for(var C in d)Tt(d[C],m[C],(""==a?"":a+".")+n+"."+C,t)};for(var r in e)m(r)}else n==kt?d!=kt?Dt(t,a,e):e.length<o.length?Dt(t,a,e):e.forEach(function(e,n){Tt(e,o[n],a+"["+n+"]",t)}):Dt(t,a,e)}}function Dt(e,o,a){e[o]=a}function Pt(e){return Object.prototype.toString.call(e)}function It(e){if(e.__next_tick_callbacks&&e.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var o=e.$scope;console.log("["+ +new Date+"]["+(o.is||o.route)+"]["+e._uid+"]:flushCallbacks["+e.__next_tick_callbacks.length+"]")}var a=e.__next_tick_callbacks.slice(0);e.__next_tick_callbacks.length=0;for(var t=0;t<a.length;t++)a[t]()}}function Mt(e){return Ea.find(function(o){return e._watcher===o})}function Bt(e,o){if(!e.__next_tick_pending&&!Mt(e)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var a=e.$scope;console.log("["+ +new Date+"]["+(a.is||a.route)+"]["+e._uid+"]:nextVueTick")}return Co(o,e)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var t=e.$scope;console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+e._uid+"]:nextMPTick")}var n;if(e.__next_tick_callbacks||(e.__next_tick_callbacks=[]),e.__next_tick_callbacks.push(function(){if(o)try{o.call(e)}catch(on){Xe(on,e,"nextTick")}else n&&n(e)}),!o&&"undefined"!==typeof Promise)return new Promise(function(e){n=e})}function Ut(e){var o=Object.create(null),a=[].concat(Object.keys(e._data||{}),Object.keys(e._computedWatchers||{}));return a.reduce(function(o,a){return o[a]=e[a],o},o),Object.assign(o,e.$mp.data||{}),Array.isArray(e.$options.behaviors)&&-1!==e.$options.behaviors.indexOf("uni://form-field")&&(o["name"]=e.name,o["value"]=e.value),JSON.parse(JSON.stringify(o))}var Vt=function(e,o){var a=this;if(null!==o&&("page"===this.mpType||"component"===this.mpType)){var t=this.$scope,n=Object.create(null);try{n=Ut(this)}catch(r){console.error(r)}n.__webviewId__=t.data.__webviewId__;var d=Object.create(null);Object.keys(n).forEach(function(e){d[e]=t.data[e]});var m=xt(n,d);Object.keys(m).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+this._uid+"]差量更新",JSON.stringify(m)),this.__next_tick_pending=!0,t.setData(m,function(){a.__next_tick_pending=!1,It(a)})):It(this)}};function qt(){}function Lt(e,o,a){if(!e.mpType)return e;"app"===e.mpType&&(e.$options.render=qt),e.$options.render||(e.$options.render=qt),"mp-toutiao"!==e.mpHost&&xa(e,"beforeMount");var t=function(){e._update(e._render(),a)};return new Ja(e,t,T,{before:function(){e._isMounted&&!e._isDestroyed&&xa(e,"beforeUpdate")}},!0),a=!1,e}function Ft(e,o){return n(e)||n(o)?Ht(e,zt(o)):""}function Ht(e,o){return e?o?e+" "+o:e:o||""}function zt(e){return Array.isArray(e)?Gt(e):i(e)?Jt(e):"string"===typeof e?e:""}function Gt(e){for(var o,a="",t=0,d=e.length;t<d;t++)n(o=zt(e[t]))&&""!==o&&(a&&(a+=" "),a+=o);return a}function Jt(e){var o="";for(var a in e)e[a]&&(o&&(o+=" "),o+=a);return o}var Kt=_(function(e){var o={},a=/;(?![^(]*\))/g,t=/:(.+)/;return e.split(a).forEach(function(e){if(e){var a=e.split(t);a.length>1&&(o[a[0].trim()]=a[1].trim())}}),o});function Wt(e){return Array.isArray(e)?E(e):"string"===typeof e?Kt(e):e}var Xt=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Qt(e,o){var a=o.split("."),t=a[0];return 0===t.indexOf("__$n")&&(t=parseInt(t.replace("__$n",""))),1===a.length?e[t]:Qt(e[t],a.slice(1).join("."))}function Yt(e){e.config.errorHandler=function(e){console.error(e)};var o=e.prototype.$emit;e.prototype.$emit=function(e){return this.$scope&&e&&this.$scope["triggerEvent"](e,{__args__:j(arguments,1)}),o.apply(this,arguments)},e.prototype.$nextTick=function(e){return Bt(this,e)},Xt.forEach(function(o){e.prototype[o]=function(e){if(this.$scope)return this.$scope[o](e)}}),e.prototype.__init_provide=bo,e.prototype.__init_injections=Ro,e.prototype.__call_hook=function(e,o){var a=this;ue();var t,n=a.$options[e],d=e+" hook";if(n)for(var m=0,r=n.length;m<r;m++)t=Qe(n[m],a,o?[o]:null,a,d);return a._hasHookEvent&&a.$emit("hook:"+e),ce(),t},e.prototype.__set_model=function(e,o,a,t){Array.isArray(t)&&(-1!==t.indexOf("trim")&&(a=a.trim()),-1!==t.indexOf("number")&&(a=this._n(a))),e||(e=this),e[o]=a},e.prototype.__set_sync=function(e,o,a){e||(e=this),e[o]=a},e.prototype.__get_orig=function(e){return N(e)&&e["$orig"]||e},e.prototype.__get_value=function(e,o){return Qt(o||this,e)},e.prototype.__get_class=function(e,o){return Ft(o,e)},e.prototype.__get_style=function(e,o){if(!e&&!o)return"";var a=Wt(e),t=o?x(o,a):a;return Object.keys(t).map(function(e){return O(e)+":"+t[e]}).join(";")},e.prototype.__map=function(e,o){var a,t,n,d,m;if(Array.isArray(e)){for(a=new Array(e.length),t=0,n=e.length;t<n;t++)a[t]=o(e[t],t);return a}if(i(e)){for(d=Object.keys(e),a=Object.create(null),t=0,n=d.length;t<n;t++)m=d[t],a[m]=o(e[m],m,t);return a}return[]}}var Zt=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function en(e){var o=e.extend;e.extend=function(e){e=e||{};var a=e.methods;return a&&Object.keys(a).forEach(function(o){-1!==Zt.indexOf(o)&&(e[o]=a[o],delete a[o])}),o.call(this,e)};var a=e.config.optionMergeStrategies,t=a.created;Zt.forEach(function(e){a[e]=t}),e.prototype.__lifecycle_hooks__=Zt}ft.prototype.__patch__=Vt,ft.prototype.$mount=function(e,o){return Lt(this,e,o)},en(ft),Yt(ft),o["default"]=ft}.call(this,a("c8ba"))},"6e42":function(e,o,a){"use strict";(function(e){Object.defineProperty(o,"__esModule",{value:!0}),o.createApp=lo,o.createComponent=$o,o.createPage=wo,o.default=void 0;var t=n(a("66fd"));function n(e){return e&&e.__esModule?e:{default:e}}function d(e,o){return i(e)||r(e,o)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function r(e,o){var a=[],t=!0,n=!1,d=void 0;try{for(var m,r=e[Symbol.iterator]();!(t=(m=r.next()).done);t=!0)if(a.push(m.value),o&&a.length===o)break}catch(i){n=!0,d=i}finally{try{t||null==r["return"]||r["return"]()}finally{if(n)throw d}}return a}function i(e){if(Array.isArray(e))return e}function C(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function N(e){return c(e)||u(e)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function c(e){if(Array.isArray(e)){for(var o=0,a=new Array(e.length);o<e.length;o++)a[o]=e[o];return a}}var f=Object.prototype.toString,l=Object.prototype.hasOwnProperty;function p(e){return"function"===typeof e}function h(e){return"string"===typeof e}function v(e){return"[object Object]"===f.call(e)}function g(e,o){return l.call(e,o)}function y(){}function _(e){var o=Object.create(null);return function(a){var t=o[a];return t||(o[a]=e(a))}}var b=/-(\w)/g,R=_(function(e){return e.replace(b,function(e,o){return o?o.toUpperCase():""})}),w=["invoke","success","fail","complete","returnValue"],$={},O={};function A(e,o){var a=o?e?e.concat(o):Array.isArray(o)?o:[o]:e;return a?S(a):a}function S(e){for(var o=[],a=0;a<e.length;a++)-1===o.indexOf(e[a])&&o.push(e[a]);return o}function k(e,o){var a=e.indexOf(o);-1!==a&&e.splice(a,1)}function j(e,o){Object.keys(o).forEach(function(a){-1!==w.indexOf(a)&&p(o[a])&&(e[a]=A(e[a],o[a]))})}function x(e,o){e&&o&&Object.keys(o).forEach(function(a){-1!==w.indexOf(a)&&p(o[a])&&k(e[a],o[a])})}function E(e,o){"string"===typeof e&&v(o)?j(O[e]||(O[e]={}),o):v(e)&&j($,e)}function T(e,o){"string"===typeof e?v(o)?x(O[e],o):delete O[e]:v(e)&&x($,e)}function D(e){return function(o){return e(o)||o}}function P(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then}function I(e,o){for(var a=!1,t=0;t<e.length;t++){var n=e[t];if(a)a=Promise.then(D(n));else{var d=n(o);if(P(d)&&(a=Promise.resolve(d)),!1===d)return{then:function(){}}}}return a||{then:function(e){return e(o)}}}function M(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(a){if(Array.isArray(e[a])){var t=o[a];o[a]=function(o){I(e[a],o).then(function(e){return p(t)&&t(e)||e})}}}),o}function B(e,o){var a=[];Array.isArray($.returnValue)&&a.push.apply(a,N($.returnValue));var t=O[e];return t&&Array.isArray(t.returnValue)&&a.push.apply(a,N(t.returnValue)),a.forEach(function(e){o=e(o)||o}),o}function U(e){var o=Object.create(null);Object.keys($).forEach(function(e){"returnValue"!==e&&(o[e]=$[e].slice())});var a=O[e];return a&&Object.keys(a).forEach(function(e){"returnValue"!==e&&(o[e]=(o[e]||[]).concat(a[e]))}),o}function V(e,o,a){for(var t=arguments.length,n=new Array(t>3?t-3:0),d=3;d<t;d++)n[d-3]=arguments[d];var m=U(e);if(m&&Object.keys(m).length){if(Array.isArray(m.invoke)){var r=I(m.invoke,a);return r.then(function(e){return o.apply(void 0,[M(m,e)].concat(n))})}return o.apply(void 0,[M(m,a)].concat(n))}return o.apply(void 0,[a].concat(n))}var q={returnValue:function(e){return P(e)?e.then(function(e){return e[1]}).catch(function(e){return e[0]}):e}},L=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,F=/^create|Manager$/,H=/^on/;function z(e){return F.test(e)}function G(e){return L.test(e)}function J(e){return H.test(e)&&"onPush"!==e}function K(e){return e.then(function(e){return[null,e]}).catch(function(e){return[e]})}function W(e){return!(z(e)||G(e)||J(e))}function X(e,o){return W(e)?function(){for(var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length,n=new Array(t>1?t-1:0),d=1;d<t;d++)n[d-1]=arguments[d];return p(a.success)||p(a.fail)||p(a.complete)?B(e,V.apply(void 0,[e,o,a].concat(n))):B(e,K(new Promise(function(t,d){V.apply(void 0,[e,o,Object.assign({},a,{success:t,fail:d})].concat(n)),Promise.prototype.finally||(Promise.prototype.finally=function(e){var o=this.constructor;return this.then(function(a){return o.resolve(e()).then(function(){return a})},function(a){return o.resolve(e()).then(function(){throw a})})})})))}:o}var Q=1e-4,Y=750,Z=!1,ee=0,oe=0;function ae(){var e=wx.getSystemInfoSync(),o=e.platform,a=e.pixelRatio,t=e.windowWidth;ee=t,oe=a,Z="ios"===o}function te(e,o){if(0===ee&&ae(),e=Number(e),0===e)return 0;var a=e/Y*(o||ee);return a<0&&(a=-a),a=Math.floor(a+Q),0===a?1!==oe&&Z?.5:1:e<0?-a:a}var ne={promiseInterceptor:q},de=Object.freeze({upx2px:te,interceptors:ne,addInterceptor:E,removeInterceptor:T}),me={},re=[],ie=[],Ce=["success","fail","cancel","complete"];function Ne(e,o,a){return function(t){return o(ue(e,t,a))}}function se(e,o){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(v(o)){var d=!0===n?o:{};for(var m in p(a)&&(a=a(o,d)||{}),o)if(g(a,m)){var r=a[m];p(r)&&(r=r(o[m],o,d)),r?h(r)?d[r]=o[m]:v(r)&&(d[r.name?r.name:m]=r.value):console.warn("app-plus ".concat(e,"暂不支持").concat(m))}else-1!==Ce.indexOf(m)?d[m]=Ne(e,o[m],t):n||(d[m]=o[m]);return d}return p(o)&&(o=Ne(e,o,t)),o}function ue(e,o,a){var t=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return p(me.returnValue)&&(o=me.returnValue(e,o)),se(e,o,a,{},t)}function ce(e,o){if(g(me,e)){var a=me[e];return a?function(o,t){var n=a;p(a)&&(n=a(o)),o=se(e,o,n.args,n.returnValue);var d=[o];"undefined"!==typeof t&&d.push(t);var m=wx[n.name||e].apply(wx,d);return G(e)?ue(e,m,n.returnValue,z(e)):m}:function(){console.error("app-plus 暂不支持".concat(e))}}return o}var fe=Object.create(null),le=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function pe(e){return function(o){var a=o.fail,t=o.complete,n={errMsg:"".concat(e,":fail:暂不支持 ").concat(e," 方法")};p(a)&&a(n),p(t)&&t(n)}}le.forEach(function(e){fe[e]=pe(e)});var he=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return e||(e=new t.default),e};var e}();function ve(e,o,a){return e[o].apply(e,a)}function ge(){return ve(he(),"$on",Array.prototype.slice.call(arguments))}function ye(){return ve(he(),"$off",Array.prototype.slice.call(arguments))}function _e(){return ve(he(),"$once",Array.prototype.slice.call(arguments))}function be(){return ve(he(),"$emit",Array.prototype.slice.call(arguments))}var Re=Object.freeze({$on:ge,$off:ye,$once:_e,$emit:be});function we(e){return"undefined"!==typeof weex?weex.requireModule(e):__requireNativePlugin__(e)}function $e(e){e.$processed=!0,e.postMessage=function(o){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:o},e.id)};var o=[];if(e.onMessage=function(e){o.push(e)},e.$consumeMessage=function(e){o.forEach(function(o){return o(e)})},e.__uniapp_mask_id){var a=e.__uniapp_mask,t="0"===e.__uniapp_mask_id?{setStyle:function(e){var o=e.mask;we("uni-tabview").setMask({color:o})}}:plus.webview.getWebviewById(e.__uniapp_mask_id),n=e.show,d=e.hide,m=e.close,r=function(){t.setStyle({mask:a})},i=function(){t.setStyle({mask:"none"})};e.show=function(){r();for(var o=arguments.length,a=new Array(o),t=0;t<o;t++)a[t]=arguments[t];return n.apply(e,a)},e.hide=function(){i();for(var o=arguments.length,a=new Array(o),t=0;t<o;t++)a[t]=arguments[t];return d.apply(e,a)},e.close=function(){i(),o=[];for(var a=arguments.length,t=new Array(a),n=0;n<a;n++)t[n]=arguments[n];return m.apply(e,t)}}}function Oe(e){var o=plus.webview.getWebviewById(e);return o&&!o.$processed&&$e(o),o}var Ae=Object.freeze({getSubNVueById:Oe,requireNativePlugin:we}),Se=Page,ke=Component,je=/:/g,xe=_(function(e){return R(e.replace(je,"-"))});function Ee(e){if(wx.canIUse("nextTick")){var o=e.triggerEvent;e.triggerEvent=function(a){for(var t=arguments.length,n=new Array(t>1?t-1:0),d=1;d<t;d++)n[d-1]=arguments[d];return o.apply(e,[xe(a)].concat(n))}}}function Te(e,o){var a=o[e];o[e]=a?function(){Ee(this);for(var e=arguments.length,o=new Array(e),t=0;t<e;t++)o[t]=arguments[t];return a.apply(this,o)}:function(){Ee(this)}}Page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Te("onLoad",e),Se(e)},Component=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Te("created",e),ke(e)};var De=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Pe(e,o){var a=e.$mp[e.mpType];o.forEach(function(o){g(a,o)&&(e[o]=a[o])})}function Ie(e,o){if(!o)return!0;if(t.default.options&&Array.isArray(t.default.options[e]))return!0;if(o=o.default||o,p(o))return!!p(o.extendOptions[e])||!!(o.super&&o.super.options&&Array.isArray(o.super.options[e]));if(p(o[e]))return!0;var a=o.mixins;return Array.isArray(a)?!!a.find(function(o){return Ie(e,o)}):void 0}function Me(e,o,a){o.forEach(function(o){Ie(o,a)&&(e[o]=function(e){return this.$vm&&this.$vm.__call_hook(o,e)})})}function Be(e,o){var a;return o=o.default||o,p(o)?(a=o,o=a.extendOptions):a=e.extend(o),[a,o]}function Ue(e,o){if(Array.isArray(o)&&o.length){var a=Object.create(null);o.forEach(function(e){a[e]=!0}),e.$scopedSlots=e.$slots=a}}function Ve(e,o){e=(e||"").split(",");var a=e.length;1===a?o._$vueId=e[0]:2===a&&(o._$vueId=e[0],o._$vuePid=e[1])}function qe(e,o){var a=e.data||{},t=e.methods||{};if("function"===typeof a)try{a=a.call(o)}catch(n){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",a)}else try{a=JSON.parse(JSON.stringify(a))}catch(n){}return v(a)||(a={}),Object.keys(t).forEach(function(e){-1!==o.__lifecycle_hooks__.indexOf(e)||g(a,e)||(a[e]=t[e])}),a}var Le=[String,Number,Boolean,Object,Array,null];function Fe(e){return function(o,a){this.$vm&&(this.$vm[e]=o)}}function He(e,o){var a=e["behaviors"],t=e["extends"],n=e["mixins"],d=e["props"];d||(e["props"]=d=[]);var m=[];return Array.isArray(a)&&a.forEach(function(e){m.push(e.replace("uni://","wx".concat("://"))),"uni://form-field"===e&&(Array.isArray(d)?(d.push("name"),d.push("value")):(d["name"]={type:String,default:""},d["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),v(t)&&t.props&&m.push(o({properties:Ge(t.props,!0)})),Array.isArray(n)&&n.forEach(function(e){v(e)&&e.props&&m.push(o({properties:Ge(e.props,!0)}))}),m}function ze(e,o,a,t){return Array.isArray(o)&&1===o.length?o[0]:o}function Ge(e){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return o||(a.vueId={type:String,value:""},a.vueSlots={type:null,value:[],observer:function(e,o){var a=Object.create(null);e.forEach(function(e){a[e]=!0}),this.setData({$slots:a})}}),Array.isArray(e)?e.forEach(function(e){a[e]={type:null,observer:Fe(e)}}):v(e)&&Object.keys(e).forEach(function(o){var t=e[o];if(v(t)){var n=t["default"];p(n)&&(n=n()),t.type=ze(o,t.type),a[o]={type:-1!==Le.indexOf(t.type)?t.type:null,value:n,observer:Fe(o)}}else{var d=ze(o,t);a[o]={type:-1!==Le.indexOf(d)?d:null,observer:Fe(o)}}}),a}function Je(e){try{e.mp=JSON.parse(JSON.stringify(e))}catch(o){}return e.stopPropagation=y,e.preventDefault=y,e.target=e.target||{},g(e,"detail")||(e.detail={}),v(e.detail)&&(e.target=Object.assign({},e.target,e.detail)),e}function Ke(e,o){var a=e;return o.forEach(function(o){var t=o[0],n=o[2];if(t||"undefined"!==typeof n){var d=o[1],m=o[3],r=t?e.__get_value(t,a):a;Number.isInteger(r)?a=n:d?Array.isArray(r)?a=r.find(function(o){return e.__get_value(d,o)===n}):v(r)?a=Object.keys(r).find(function(o){return e.__get_value(d,r[o])===n}):console.error("v-for 暂不支持循环数据：",r):a=r[n],m&&(a=e.__get_value(m,a))}}),a}function We(e,o,a){var t={};return Array.isArray(o)&&o.length&&o.forEach(function(o,n){"string"===typeof o?o?"$event"===o?t["$"+n]=a:0===o.indexOf("$event.")?t["$"+n]=e.__get_value(o.replace("$event.",""),a):t["$"+n]=e.__get_value(o):t["$"+n]=e:t["$"+n]=Ke(e,o)}),t}function Xe(e){for(var o={},a=1;a<e.length;a++){var t=e[a];o[t[0]]=t[1]}return o}function Qe(e,o){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],n=arguments.length>4?arguments[4]:void 0,d=arguments.length>5?arguments[5]:void 0,m=!1;if(n&&(m=o.currentTarget&&o.currentTarget.dataset&&"wx"===o.currentTarget.dataset.comType,!a.length))return m?[o]:o.detail.__args__||o.detail;var r=We(e,t,o),i=[];return a.forEach(function(e){"$event"===e?"__set_model"!==d||n?n&&!m?i.push(o.detail.__args__[0]):i.push(o):i.push(o.target.value):Array.isArray(e)&&"o"===e[0]?i.push(Xe(e)):"string"===typeof e&&g(r,e)?i.push(r[e]):i.push(e)}),i}var Ye="~",Ze="^";function eo(e,o){return e===o||"regionchange"===o&&("begin"===e||"end"===e)}function oo(e){var o=this;e=Je(e);var a=(e.currentTarget||e.target).dataset;if(!a)return console.warn("事件信息不存在");var t=a.eventOpts||a["event-opts"];if(!t)return console.warn("事件信息不存在");var n=e.type,d=[];return t.forEach(function(a){var t=a[0],m=a[1],r=t.charAt(0)===Ze;t=r?t.slice(1):t;var i=t.charAt(0)===Ye;t=i?t.slice(1):t,m&&eo(n,t)&&m.forEach(function(a){var t=a[0];if(t){var n=o.$vm;n.$options.generic&&n.$parent&&n.$parent.$parent&&(n=n.$parent.$parent);var m=n[t];if(!p(m))throw new Error(" _vm.".concat(t," is not a function"));if(i){if(m.once)return;m.once=!0}d.push(m.apply(n,Qe(o.$vm,e,a[1],a[2],r,t)))}})}),"input"===n&&1===d.length&&"undefined"!==typeof d[0]?d[0]:void 0}var ao=["onShow","onHide","onError","onPageNotFound"];function to(e,o){var a=o.mocks,n=o.initRefs;e.$options.store&&(t.default.prototype.$store=e.$options.store),t.default.prototype.mpHost="app-plus",t.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=C({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(n(this),Pe(this,a)))}});var d={onLaunch:function(o){this.$vm||(this.$vm=e,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",o),this.$vm.__call_hook("onLaunch",o))}};return d.globalData=e.$options.globalData||{},Me(d,ao),d}var no=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function mo(e,o){var a=e.$children,t=a.find(function(e){return e.$scope._$vueId===o});if(t)return t;for(var n=a.length-1;n>=0;n--)if(t=mo(a[n],o),t)return t}function ro(e){return Behavior(e)}function io(){return!!this.route}function Co(e){this.triggerEvent("__l",e)}function No(e){var o=e.$scope;Object.defineProperty(e,"$refs",{get:function(){var e={},a=o.selectAllComponents(".vue-ref");a.forEach(function(o){var a=o.dataset.ref;e[a]=o.$vm||o});var t=o.selectAllComponents(".vue-ref-in-for");return t.forEach(function(o){var a=o.dataset.ref;e[a]||(e[a]=[]),e[a].push(o.$vm||o)}),e}})}function so(e){var o,a=e.detail||e.value,t=a.vuePid,n=a.vueOptions;t&&(o=mo(this.$vm,t)),o||(o=this.$vm),n.parent=o}function uo(e){return to(e,{mocks:no,initRefs:No})}var co=["onUniNViewMessage"];function fo(e){var o=uo(e);return Me(o,co),o}function lo(e){return App(fo(e)),e}function po(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=o.isPage,n=o.initRelation,m=Be(t.default,e),r=d(m,2),i=r[0],C=r[1],N={multipleSlots:!0,addGlobalClass:!0},s={options:N,data:qe(C,t.default.prototype),behaviors:He(C,ro),properties:Ge(C.props,!1,C.__file),lifetimes:{attached:function(){var e=this.properties,o={mpType:a.call(this)?"page":"component",mpInstance:this,propsData:e};Ve(e.vueId,this),n.call(this,{vuePid:this._$vuePid,vueOptions:o}),this.$vm=new i(o),Ue(this.$vm,e.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(e){this.$vm&&this.$vm.__call_hook("onPageShow",e)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(e){this.$vm&&this.$vm.__call_hook("onPageResize",e)}},methods:{__l:so,__e:oo}};return Array.isArray(C.wxsCallMethods)&&C.wxsCallMethods.forEach(function(e){s.methods[e]=function(o){return this.$vm[e](o)}}),a?s:[s,i]}function ho(e){return po(e,{isPage:io,initRelation:Co})}function vo(e){var o=ho(e);return o.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},o}var go=["onShow","onHide","onUnload"];function yo(e,o){o.isPage,o.initRelation;var a=vo(e);return Me(a.methods,go,e),a.methods.onLoad=function(e){this.$vm.$mp.query=e,this.$vm.__call_hook("onLoad",e)},a}function _o(e){return yo(e,{isPage:io,initRelation:Co})}go.push.apply(go,De);var bo=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Ro(e){var o=_o(e);return Me(o.methods,bo),o}function wo(e){return Component(Ro(e))}function $o(e){return Component(vo(e))}re.forEach(function(e){me[e]=!1}),ie.forEach(function(e){var o=me[e]&&me[e].name?me[e].name:e;wx.canIUse(o)||(me[e]=!1)});var Oo={};Object.keys(de).forEach(function(e){Oo[e]=de[e]}),Object.keys(Re).forEach(function(e){Oo[e]=Re[e]}),Object.keys(Ae).forEach(function(e){Oo[e]=X(e,Ae[e])}),Object.keys(wx).forEach(function(e){(g(wx,e)||g(me,e))&&(Oo[e]=X(e,ce(e,wx[e])))}),"undefined"!==typeof e&&(e.uni=Oo,e.UniEmitter=Re),wx.createApp=lo,wx.createPage=wo,wx.createComponent=$o;var Ao=Oo,So=Ao;o.default=So}).call(this,a("c8ba"))},8189:function(e){e.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-24220191115004",_inBundle:!1,_integrity:"sha512-UKnpiHSP7h9c5IFpJFkWkpm1KyWz9iHj1hchrQSUxPhChx+KPOmunnQcKGiQvvBz9CeSi7Se/eauJYha5ch0kw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-24220191115004.tgz",_shasum:"5848f2204f37daaf8c340fb27d9f76b16fcbfdeb",_spec:"@dcloudio/uni-stat@next",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"bcf65737c5111d47398695d3db8ed87305df346e",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-24220191115004"}},"921b":function(e,o,a){"use strict";(function(e){var o=a("8189");function t(e,o){return!o||"object"!==typeof o&&"function"!==typeof o?n(e):o}function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function m(e,o){if("function"!==typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),o&&r(e,o)}function r(e,o){return r=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e},r(e,o)}function i(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function C(e,o){for(var a=0;a<o.length;a++){var t=o[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function N(e,o,a){return o&&C(e.prototype,o),a&&C(e,a),e}var s=o.version,u="https://tongji.dcloud.io/uni/stat",c="https://tongji.dcloud.io/uni/stat.gif",f=1800,l=300,p=10,h="__DC_STAT_UUID",v="__DC_UUID_VALUE";function g(){var o="";if("n"===R()){try{o=plus.runtime.getDCloudId()}catch(a){o=""}return o}try{o=e.getStorageSync(h)}catch(a){o=v}if(!o){o=Date.now()+""+Math.floor(1e7*Math.random());try{e.setStorageSync(h,o)}catch(a){e.setStorageSync(h,v)}}return o}var y=function(e){var o=Object.keys(e),a=o.sort(),t={},n="";for(var d in a)t[a[d]]=e[a[d]],n+=a[d]+"="+e[a[d]]+"&";return{sign:"",options:n.substr(0,n.length-1)}},_=function(e){var o="";for(var a in e)o+=a+"="+e[a]+"&";return o.substr(0,o.length-1)},b=function(){return parseInt((new Date).getTime()/1e3)},R=function(){var e={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return e["app-plus"]},w=function(){var o="";return"wx"!==R()&&"qq"!==R()||e.canIUse("getAccountInfoSync")&&(o=e.getAccountInfoSync().miniProgram.appId||""),o},$=function(){return"n"===R()?plus.runtime.version:""},O=function(){var e=R(),o="";return"n"===e&&(o=plus.runtime.channel),o},A=function(o){var a=R(),t="";return o||("wx"===a&&(t=e.getLaunchOptionsSync().scene),t)},S="First__Visit__Time",k="Last__Visit__Time",j=function(){var o=e.getStorageSync(S),a=0;return o?a=o:(a=b(),e.setStorageSync(S,a),e.removeStorageSync(k)),a},x=function(){var o=e.getStorageSync(k),a=0;return a=o||"",e.setStorageSync(k,b()),a},E="__page__residence__time",T=0,D=0,P=function(){return T=b(),"n"===R()&&e.setStorageSync(E,b()),T},I=function(){return D=b(),"n"===R()&&(T=e.getStorageSync(E)),D-T},M="Total__Visit__Count",B=function(){var o=e.getStorageSync(M),a=1;return o&&(a=o,a++),e.setStorageSync(M,a),a},U=function(e){var o={};for(var a in e)o[a]=encodeURIComponent(e[a]);return o},V=0,q=0,L=function(){var e=(new Date).getTime();return V=e,q=0,e},F=function(){var e=(new Date).getTime();return q=e,e},H=function(e){var o=0;if(0!==V&&(o=q-V),o=parseInt(o/1e3),o=o<1?1:o,"app"===e){var a=o>l;return{residenceTime:o,overtime:a}}if("page"===e){var t=o>f;return{residenceTime:o,overtime:t}}return{residenceTime:o}},z=function(){var e=getCurrentPages(),o=e[e.length-1],a=o.$vm;return"bd"===R()?a.$mp&&a.$mp.page.is:a.$scope&&a.$scope.route||a.$mp&&a.$mp.page.route},G=function(e){var o=getCurrentPages(),a=o[o.length-1],t=a.$vm,n=e._query,d=n&&"{}"!==JSON.stringify(n)?"?"+JSON.stringify(n):"";return e._query="","bd"===R()?t.$mp&&t.$mp.page.is+d:t.$scope&&t.$scope.route+d||t.$mp&&t.$mp.page.route+d},J=function(e){return!!("page"===e.mpType||e.$mp&&"page"===e.$mp.mpType||"page"===e.$options.mpType)},K=function(e,o){return e?"string"!==typeof e?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):e.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof o&&"object"!==typeof o?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof o&&o.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===e&&"string"!==typeof o?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},W=a("1d06").default,X=a("e3d8").default||a("e3d8"),Q=e.getSystemInfoSync(),Y=function(){function o(){i(this,o),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:g(),ut:R(),mpn:w(),ak:X.appid,usv:s,v:$(),ch:O(),cn:"",pn:"",ct:"",t:b(),tt:"",p:"android"===Q.platform?"a":"i",brand:Q.brand||"",md:Q.model,sv:Q.system.replace(/(Android|iOS)\s/,""),mpsdk:Q.SDKVersion||"",mpv:Q.version||"",lang:Q.language,pr:Q.pixelRatio,ww:Q.windowWidth,wh:Q.windowHeight,sw:Q.screenWidth,sh:Q.screenHeight}}return N(o,[{key:"_applicationShow",value:function(){if(this.__licationHide){F();var e=H("app");if(e.overtime){var o={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(o)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(e,o){this.__licationHide=!0,F();var a=H();L();var t=G(this);this._sendHideRequest({urlref:t,urlref_ts:a.residenceTime},o)}},{key:"_pageShow",value:function(){var e=G(this),o=z();if(this._navigationBarTitle.config=W&&W.pages[o]&&W.pages[o].titleNView&&W.pages[o].titleNView.titleText||W&&W.pages[o]&&W.pages[o].navigationBarTitleText||"",this.__licationShow)return L(),this.__licationShow=!1,void(this._lastPageRoute=e);F(),this._lastPageRoute=e;var a=H("page");if(a.overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}L()}},{key:"_pageHide",value:function(){if(!this.__licationHide){F();var e=H("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:e.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(e){this._sendEventRequest({key:e},0)}},{key:"_sendReportRequest",value:function(e){this._navigationBarTitle.lt="1";var o=e.query&&"{}"!==JSON.stringify(e.query)?"?"+JSON.stringify(e.query):"";this.statData.lt="1",this.statData.url=e.path+o||"",this.statData.t=b(),this.statData.sc=A(e.scene),this.statData.fvts=j(),this.statData.lvts=x(),this.statData.tvc=B(),"n"===R()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(e){var o=e.url,a=e.urlref,t=e.urlref_ts;this._navigationBarTitle.lt="11";var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:o,tt:this.statData.tt,urlref:a,urlref_ts:t,ch:this.statData.ch,usv:this.statData.usv,t:b(),p:this.statData.p};this.request(n)}},{key:"_sendHideRequest",value:function(e,o){var a=e.urlref,t=e.urlref_ts,n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:a,urlref_ts:t,ch:this.statData.ch,usv:this.statData.usv,t:b(),p:this.statData.p};this.request(n,o)}},{key:"_sendEventRequest",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.key,a=void 0===o?"":o,t=e.value,n=void 0===t?"":t,d=this._lastPageRoute,m={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:d,ch:this.statData.ch,e_n:a,e_v:"object"===typeof n?JSON.stringify(n):n.toString(),usv:this.statData.usv,t:b(),p:this.statData.p};this.request(m)}},{key:"getNetworkInfo",value:function(){var o=this;e.getNetworkType({success:function(e){o.statData.net=e.networkType,o.getLocation()}})}},{key:"getProperty",value:function(){var e=this;plus.runtime.getProperty(plus.runtime.appid,function(o){e.statData.v=o.version||"",e.getNetworkInfo()})}},{key:"getLocation",value:function(){var o=this;X.getLocation?e.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(o.statData.cn=e.address.country,o.statData.pn=e.address.province,o.statData.ct=e.address.city),o.statData.lat=e.latitude,o.statData.lng=e.longitude,o.request(o.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(o,a){var t=this,n=b(),d=this._navigationBarTitle;o.ttn=d.page,o.ttpj=d.config,o.ttc=d.report;var m=this._reportingRequestData;if("n"===R()&&(m=e.getStorageSync("__UNI__STAT__DATA")||{}),m[o.lt]||(m[o.lt]=[]),m[o.lt].push(o),"n"===R()&&e.setStorageSync("__UNI__STAT__DATA",m),!(I()<p)||a){var r=this._reportingRequestData;"n"===R()&&(r=e.getStorageSync("__UNI__STAT__DATA")),P();var i=[],C=[],N=[],u=function(e){var o=r[e];o.forEach(function(o){var a=_(o);0===e?i.push(a):3===e?N.push(a):C.push(a)})};for(var c in r)u(c);i.push.apply(i,C.concat(N));var f={usv:s,t:n,requests:JSON.stringify(i)};this._reportingRequestData={},"n"===R()&&e.removeStorageSync("__UNI__STAT__DATA"),"h5"!==o.ut?"n"!==R()||"a"!==this.statData.p?this._sendRequest(f):setTimeout(function(){t._sendRequest(f)},200):this.imageRequest(f)}}},{key:"_sendRequest",value:function(o){var a=this;e.request({url:u,method:"POST",data:o,success:function(){},fail:function(e){++a._retry<3&&setTimeout(function(){a._sendRequest(o)},1e3)}})}},{key:"imageRequest",value:function(e){var o=new Image,a=y(U(e)).options;o.src=c+"?"+a}},{key:"sendEvent",value:function(e,o){K(e,o)||("title"!==e?this._sendEventRequest({key:e,value:"object"===typeof o?JSON.stringify(o):o},1):this._navigationBarTitle.report=o)}}]),o}(),Z=function(o){function a(){var o;return i(this,a),o=t(this,d(a).call(this)),o.instance=null,"function"===typeof e.addInterceptor&&(o.addInterceptorInit(),o.interceptLogin(),o.interceptShare(!0),o.interceptRequestPayment()),o}return m(a,o),N(a,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new a),this.instance}}]),N(a,[{key:"addInterceptorInit",value:function(){var o=this;e.addInterceptor("setNavigationBarTitle",{invoke:function(e){o._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var o=this;e.addInterceptor("login",{complete:function(){o._login()}})}},{key:"interceptShare",value:function(o){var a=this;o?e.addInterceptor("share",{success:function(){a._share()},fail:function(){a._share()}}):a._share()}},{key:"interceptRequestPayment",value:function(){var o=this;e.addInterceptor("requestPayment",{success:function(){o._payment("pay_success")},fail:function(){o._payment("pay_fail")}})}},{key:"report",value:function(e,o){this.self=o,P(),this.__licationShow=!0,this._sendReportRequest(e,!0)}},{key:"load",value:function(e,o){if(!o.$scope&&!o.$mp){var a=getCurrentPages();o.$scope=a[a.length-1]}this.self=o,this._query=e}},{key:"show",value:function(e){this.self=e,J(e)?this._pageShow(e):this._applicationShow(e)}},{key:"ready",value:function(e){}},{key:"hide",value:function(e){this.self=e,J(e)?this._pageHide(e):this._applicationHide(e,!0)}},{key:"error",value:function(e){this._platform;var o="";o=e.message?e.stack:JSON.stringify(e);var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:o,usv:this.statData.usv,t:b(),p:this.statData.p};this.request(a)}}]),a}(Y),ee=Z.getInstance(),oe=!1,ae={onLaunch:function(e){ee.report(e,this)},onReady:function(){ee.ready(this)},onLoad:function(e){if(ee.load(e,this),this.$scope&&this.$scope.onShareAppMessage){var o=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(e){return ee.interceptShare(!1),o.call(this,e)}}},onShow:function(){oe=!1,ee.show(this)},onHide:function(){oe=!0,ee.hide(this)},onUnload:function(){oe?oe=!1:ee.hide(this)},onError:function(e){ee.error(e)}};function te(){var o=a("66fd");(o.default||o).mixin(ae),e.report=function(e,o){ee.sendEvent(e,o)}}te()}).call(this,a("6e42")["default"])},c8ba:function(e,o){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(t){"object"===typeof window&&(a=window)}e.exports=a},e3d8:function(e,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t={appid:"__UNI__AB5B419"};o.default=t},ecdd:function(e,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t=d(a("66fd")),n=d(a("2f62"));function d(e){return e&&e.__esModule?e:{default:e}}t.default.use(n.default);var m=new n.default.Store({state:{cartd:[],addressData:[],userinfo:{username:"",userimgurl:""}},mutations:{addmut:function(e,o){var a=!0;e.cartd.forEach(function(e){e._id==o._id&&(e.num++,a=!1)}),a&&(t.default.set(o,"num",1),e.cartd.push(o))},addressAddMut:function(e,o){e.addressData[0]=o},usermut:function(e,o){e.userinfo.username=o.username,e.userinfo.userimgurl=o.userinfo.userinfo.userimgurl},changeimgmut:function(e,o){e.userinfo.userimgurl=o}},actions:{}}),r=m;o.default=r}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/uni-icons/uni-icons';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-icons/uni-icons.js';

define('components/uni-icons/uni-icons.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-icons/uni-icons"], {
  "190d": function d(t, n, e) {
    "use strict";

    var u = e("89b4"),
        a = e.n(u);
    a.a;
  },
  "4cb3": function cb3(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("58f7"),
        a = e.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    n["default"] = a.a;
  },
  "58f7": function f7(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = a(e("0bb1"));

    function a(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var r = {
      name: "UniIcons",
      props: {
        type: {
          type: String,
          default: ""
        },
        color: {
          type: String,
          default: "#333333"
        },
        size: {
          type: [Number, String],
          default: 16
        }
      },
      data: function data() {
        return {
          icons: u.default
        };
      },
      methods: {
        _onClick: function _onClick() {
          this.$emit("click");
        }
      }
    };
    n.default = r;
  },
  "83a9": function a9(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return a;
    });
  },
  "89b4": function b4(t, n, e) {},
  "95eb": function eb(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("83a9"),
        a = e("4cb3");

    for (var r in a) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(r);
    }

    e("190d");
    var i = e("2877"),
        c = Object(i["a"])(a["default"], u["a"], u["b"], !1, null, "edcb8aaa", null);
    n["default"] = c.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-icons/uni-icons-create-component', {
  'components/uni-icons/uni-icons-create-component': function componentsUniIconsUniIconsCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("95eb"));
  }
}, [['components/uni-icons/uni-icons-create-component']]]);
});
require('components/uni-icons/uni-icons.js');

__wxRoute = 'pages/firstrender/firstrender';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/firstrender/firstrender.js';

define('pages/firstrender/firstrender.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/firstrender/firstrender"],{"51b6":function(n,t,e){"use strict";(function(n){e("0ff5"),e("921b");u(e("66fd"));var t=u(e("9e15"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},5873:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return r})},"71fa":function(n,t,e){"use strict";e.r(t);var u=e("887b"),r=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=r.a},"887b":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={methods:{tologin:function(){n.navigateTo({url:"../login/login"})}}};t.default=e}).call(this,e("6e42")["default"])},"9e15":function(n,t,e){"use strict";e.r(t);var u=e("5873"),r=e("71fa");for(var a in r)"default"!==a&&function(n){e.d(t,n,function(){return r[n]})}(a);e("a4e0");var f=e("2877"),o=Object(f["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=o.exports},a4e0:function(n,t,e){"use strict";var u=e("f190"),r=e.n(u);r.a},f190:function(n,t,e){}},[["51b6","common/runtime","common/vendor"]]]);
});
require('pages/firstrender/firstrender.js');
__wxRoute = 'pages/home-product/home-product';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/home-product/home-product.js';

define('pages/home-product/home-product.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home-product/home-product"],{"08bc":function(t,n,e){"use strict";(function(t){e("0ff5"),e("921b");o(e("66fd"));var n=o(e("0af7"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"0af7":function(t,n,e){"use strict";e.r(n);var o=e("a94d"),u=e("dcf4");for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);e("7d11");var c=e("2877"),r=Object(c["a"])(u["default"],o["a"],o["b"],!1,null,null,null);n["default"]=r.exports},"1b46":function(t,n,e){},"7d11":function(t,n,e){"use strict";var o=e("1b46"),u=e.n(o);u.a},"9a35":function(t,n,e){"use strict";(function(t,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"95eb"))},a={data:function(){return{goodsdata:[]}},computed:{userinfo:function(){return this.$store.state.userinfo}},components:{uniIcons:u},methods:{jumptospec:function(){t.navigateTo({url:"../spec/spec"})},jumptodaydeal:function(){console.log(o("jump"," at pages\\home-product\\home-product.vue:130")),t.navigateTo({url:"../day-deal/day-deal"})},jumptodetail:function(n){t.navigateTo({url:"../detail/detail?id=".concat(n)})}},onLoad:function(){var n=this;t.request({url:this.BASE_URL+"/goods/list",success:function(t){console.log(o(t.data.data," at pages\\home-product\\home-product.vue:145")),n.goodsdata=t.data.data}})}};n.default=a}).call(this,e("6e42")["default"],e("0de9")["default"])},a94d:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return u})},dcf4:function(t,n,e){"use strict";e.r(n);var o=e("9a35"),u=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n["default"]=u.a}},[["08bc","common/runtime","common/vendor"]]]);
});
require('pages/home-product/home-product.js');
__wxRoute = 'pages/spec/spec';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/spec/spec.js';

define('pages/spec/spec.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/spec/spec"],{"31bd":function(t,n,e){"use strict";e.r(n);var u=e("6f9b"),a=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);n["default"]=a.a},"3da1":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})},"6f9b":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{}},onLoad:function(){},methods:{},computed:{userinfo:function(){return this.$store.state.userinfo}}};n.default=u},"8a60":function(t,n,e){"use strict";var u=e("d23f"),a=e.n(u);a.a},a3a8:function(t,n,e){"use strict";e.r(n);var u=e("3da1"),a=e("31bd");for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);e("8a60");var o=e("2877"),f=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=f.exports},ae71:function(t,n,e){"use strict";(function(t){e("0ff5"),e("921b");u(e("66fd"));var n=u(e("a3a8"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},d23f:function(t,n,e){}},[["ae71","common/runtime","common/vendor"]]]);
});
require('pages/spec/spec.js');
__wxRoute = 'pages/shoppingCart/shoppingCart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shoppingCart/shoppingCart.js';

define('pages/shoppingCart/shoppingCart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shoppingCart/shoppingCart"],{"1a50":function(n,e,t){},"455c":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(){return Promise.all([t.e("common/vendor"),t.e("components/uni-icons/uni-icons")]).then(t.bind(null,"95eb"))},o={data:function(){return{}},components:{uniIcon:u}};e.default=o},"66de":function(n,e,t){"use strict";t.r(e);var u=t("455c"),o=t.n(u);for(var a in u)"default"!==a&&function(n){t.d(e,n,function(){return u[n]})}(a);e["default"]=o.a},"87ad":function(n,e,t){"use strict";t.r(e);var u=t("e0de"),o=t("66de");for(var a in o)"default"!==a&&function(n){t.d(e,n,function(){return o[n]})}(a);t("e19a");var r=t("2877"),c=Object(r["a"])(o["default"],u["a"],u["b"],!1,null,null,null);e["default"]=c.exports},"936d":function(n,e,t){"use strict";(function(n){t("0ff5"),t("921b");u(t("66fd"));var e=u(t("87ad"));function u(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},e0de:function(n,e,t){"use strict";var u=function(){var n=this,e=n.$createElement;n._self._c},o=[];t.d(e,"a",function(){return u}),t.d(e,"b",function(){return o})},e19a:function(n,e,t){"use strict";var u=t("1a50"),o=t.n(u);o.a}},[["936d","common/runtime","common/vendor"]]]);
});
require('pages/shoppingCart/shoppingCart.js');
__wxRoute = 'pages/cart/cart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/cart/cart.js';

define('pages/cart/cart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cart/cart","components/uni-icons/uni-icons"],{"190d":function(t,n,e){"use strict";var u=e("89b4"),r=e.n(u);r.a},"4cb3":function(t,n,e){"use strict";e.r(n);var u=e("58f7"),r=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=r.a},"58f7":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=r(e("0bb1"));function r(t){return t&&t.__esModule?t:{default:t}}var a={name:"UniIcons",props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16}},data:function(){return{icons:u.default}},methods:{_onClick:function(){this.$emit("click")}}};n.default=a},"65b4":function(t,n,e){"use strict";(function(t){e("0ff5"),e("921b");u(e("66fd"));var n=u(e("94fb"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"83a9":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return r})},"89b4":function(t,n,e){},"94fb":function(t,n,e){"use strict";e.r(n);var u=e("cd4f"),r=e("bdac");for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);e("9df2");var c=e("2877"),o=Object(c["a"])(r["default"],u["a"],u["b"],!1,null,null,null);n["default"]=o.exports},"95eb":function(t,n,e){"use strict";e.r(n);var u=e("83a9"),r=e("4cb3");for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);e("190d");var c=e("2877"),o=Object(c["a"])(r["default"],u["a"],u["b"],!1,null,"edcb8aaa",null);n["default"]=o.exports},"9df2":function(t,n,e){"use strict";var u=e("b3e2"),r=e.n(u);r.a},a00e:function(t,n,e){"use strict";(function(t,u){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;r(e("95eb"));function r(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{}},computed:{cartd:function(){return this.$store.state.cartd},total:function(){var t=0;return this.$store.state.cartd.forEach(function(n){t+=n.num*n.newprice}),t},userinfo:function(){return this.$store.state.userinfo}},methods:{uporder:function(){console.log(t(this.cartd," at pages\\cart\\cart.vue:92")),u.navigateTo({url:"../address/address"})}},onLoad:function(){}};n.default=a}).call(this,e("0de9")["default"],e("6e42")["default"])},b3e2:function(t,n,e){},bdac:function(t,n,e){"use strict";e.r(n);var u=e("a00e"),r=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=r.a},cd4f:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c;t._isMounted||(t.e0=function(n){t.item.num++},t.e1=function(n){t.item.num>1&&t.item.num--})},r=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return r})}},[["65b4","common/runtime","common/vendor"]]]);
});
require('pages/cart/cart.js');
__wxRoute = 'pages/address/address';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/address/address.js';

define('pages/address/address.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/address"],{2220:function(e,t,s){"use strict";s.r(t);var n=s("be06"),a=s("5e67");for(var i in a)"default"!==i&&function(e){s.d(t,e,function(){return a[e]})}(i);s("ebe1");var r=s("2877"),u=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=u.exports},"5e67":function(e,t,s){"use strict";s.r(t);var n=s("f551"),a=s.n(n);for(var i in n)"default"!==i&&function(e){s.d(t,e,function(){return n[e]})}(i);t["default"]=a.a},"6df3":function(e,t,s){"use strict";(function(e){s("0ff5"),s("921b");n(s("66fd"));var t=n(s("2220"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,s("6e42")["createPage"])},"8b22":function(e,t,s){},be06:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.sel1=t.target.multiple?s:s[0]},e.e1=function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.sel2=t.target.multiple?s:s[0]},e.e2=function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.sel3=t.target.multiple?s:s[0]})},a=[];s.d(t,"a",function(){return n}),s.d(t,"b",function(){return a})},ebe1:function(e,t,s){"use strict";var n=s("8b22"),a=s.n(n);a.a},f551:function(e,t,s){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(s("5d69"));function i(e){return e&&e.__esModule?e:{default:e}}var r={data:function(){return{loc1:a.default,sel1:-1,sel2:-1,sel3:-1,addressInfo:{username:"",phone:"",tel:["",""],address:"",isDefault:!1}}},onLoad:function(t){console.log(e(t," at pages\\address\\address.vue:73")),-1!==t.editNum&&(this.addressInfo=JSON.parse(JSON.stringify(this.addressData[t.editNum])),this.sel1=this.addressData[t.editNum].loc[0].num,this.sel2=this.addressData[t.editNum].loc[1].num,this.sel3=this.addressData[t.editNum].loc[2].num)},methods:{handlesel1:function(){this.sel2=this.sel3=-1},handlesel2:function(){this.sel3=-1},haddleClose:function(){return this.$emit("popClose")},saveData:function(){var e=this.addressInfo;return e.loc=[{text:this.loc1[this.sel1].Name,num:this.sel1},{text:this.loc2[this.sel2].Name,num:this.sel2},{text:this.loc3[this.sel3].Name,num:this.sel3}],this.$emit("popClose"),n.navigateTo({url:"../confirmations/confirmations"}),this.$store.commit("addressAddMut",e)}},computed:{loc2:function(){return-1===this.sel1?[]:this.loc1[this.sel1].City},loc3:function(){return-1===this.sel2?[]:this.loc2[this.sel2].Region},isSave:function(){return""!==this.addressInfo.username&&""!==this.addressInfo.phone&&-1!==this.sel1&&-1!==this.sel2&&""!==this.addressInfo.address},addressData:function(){return this.$store.state.addressData}}};t.default=r}).call(this,s("0de9")["default"],s("6e42")["default"])}},[["6df3","common/runtime","common/vendor"]]]);
});
require('pages/address/address.js');
__wxRoute = 'pages/day-deal/day-deal';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/day-deal/day-deal.js';

define('pages/day-deal/day-deal.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/day-deal/day-deal"],{"47b3":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})},"4f13":function(t,e,a){"use strict";a.r(e);var n=a("9639"),o=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,function(){return n[t]})}(u);e["default"]=o.a},8037:function(t,e,a){},"88b7":function(t,e,a){"use strict";(function(t){a("0ff5"),a("921b");n(a("66fd"));var e=n(a("ca8b"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},9639:function(t,e,a){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{goodsdata:[]}},methods:{jumptodetail:function(e){t.navigateTo({url:"../detail/detail?id=".concat(e)})},addmut:function(e){console.log(a("即将加入购物车",e," at pages\\day-deal\\day-deal.vue:100")),this.$store.commit("addmut",e),t.showModal({content:"已成功加入购物车",showCancel:!1})}},onLoad:function(){var e=this;t.request({url:this.BASE_URL+"/goods/list",success:function(t){console.log(a(t.data.data," at pages\\day-deal\\day-deal.vue:113")),e.goodsdata=t.data.data}})},computed:{userinfo:function(){return this.$store.state.userinfo}}};e.default=n}).call(this,a("6e42")["default"],a("0de9")["default"])},ca8b:function(t,e,a){"use strict";a.r(e);var n=a("47b3"),o=a("4f13");for(var u in o)"default"!==u&&function(t){a.d(e,t,function(){return o[t]})}(u);a("deed");var d=a("2877"),c=Object(d["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},deed:function(t,e,a){"use strict";var n=a("8037"),o=a.n(n);o.a}},[["88b7","common/runtime","common/vendor"]]]);
});
require('pages/day-deal/day-deal.js');
__wxRoute = 'pages/detail/detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/detail/detail.js';

define('pages/detail/detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detail"],{"382a":function(t,e,a){"use strict";(function(t){a("0ff5"),a("921b");n(a("66fd"));var e=n(a("4e0c"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"3f2c":function(t,e,a){"use strict";var n=a("e69e"),o=a.n(n);o.a},"4e0c":function(t,e,a){"use strict";a.r(e);var n=a("be70"),o=a("e3c8");for(var d in o)"default"!==d&&function(t){a.d(e,t,function(){return o[t]})}(d);a("3f2c");var i=a("2877"),u=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},"55ef":function(t,e,a){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{detaildata:[]}},methods:{addmut:function(e){console.log(t("即将加入购物车",e," at pages\\detail\\detail.vue:36")),this.$store.commit("addmut",e),a.showModal({content:"已成功加入购物车",showCancel:!1})}},onLoad:function(e){var n=this;console.log(t(e.id," at pages\\detail\\detail.vue:45")),a.request({url:this.BASE_URL+"/goods/list",success:function(a){console.log(t(a.data.data," at pages\\detail\\detail.vue:49"));for(var o=0;o<a.data.data.length;o++)if(a.data.data[o]._id==e.id){n.detaildata=a.data.data[o];break}console.log(t(n.detaildata," at pages\\detail\\detail.vue:57")),n.detaildata.content=n.detaildata.content.split("<p>")[1].split("</p>")[0]}})}};e.default=n}).call(this,a("0de9")["default"],a("6e42")["default"])},be70:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})},e3c8:function(t,e,a){"use strict";a.r(e);var n=a("55ef"),o=a.n(n);for(var d in n)"default"!==d&&function(t){a.d(e,t,function(){return n[t]})}(d);e["default"]=o.a},e69e:function(t,e,a){}},[["382a","common/runtime","common/vendor"]]]);
});
require('pages/detail/detail.js');
__wxRoute = 'pages/confirmations/confirmations';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/confirmations/confirmations.js';

define('pages/confirmations/confirmations.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/confirmations/confirmations"],{"0210":function(t,n,e){"use strict";(function(t){e("0ff5"),e("921b");u(e("66fd"));var n=u(e("206b"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"0a8b":function(t,n,e){},"206b":function(t,n,e){"use strict";e.r(n);var u=e("42dc"),r=e("c4b3");for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);e("8f31");var c=e("2877"),o=Object(c["a"])(r["default"],u["a"],u["b"],!1,null,null,null);n["default"]=o.exports},"42dc":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c;t._isMounted||(t.e0=function(n){t.item.num++},t.e1=function(n){t.item.num>1&&t.item.num--})},r=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return r})},"8f31":function(t,n,e){"use strict";var u=e("0a8b"),r=e.n(u);r.a},bf41:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{}},methods:{sure:function(){t.navigateTo({url:"../successOrder/successOrder"})},edit:function(){t.navigateTo({url:"../address/address?editNum=0"})},back:function(){t.reLaunch({url:"../home-product/home-product"})}},computed:{addressData:function(){return this.$store.state.addressData[0]},cartd:function(){return this.$store.state.cartd},total:function(){var t=0;return this.$store.state.cartd.forEach(function(n){t+=n.num*n.newprice}),t}}};n.default=e}).call(this,e("6e42")["default"])},c4b3:function(t,n,e){"use strict";e.r(n);var u=e("bf41"),r=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=r.a}},[["0210","common/runtime","common/vendor"]]]);
});
require('pages/confirmations/confirmations.js');
__wxRoute = 'pages/successOrder/successOrder';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/successOrder/successOrder.js';

define('pages/successOrder/successOrder.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/successOrder/successOrder"],{2717:function(t,n,e){"use strict";var u=e("95d0"),a=e.n(u);a.a},"2b31":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{}},methods:{back:function(){t.switchTab({url:"../home-product/home-product"})}}};n.default=e}).call(this,e("6e42")["default"])},4267:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})},"8c7a":function(t,n,e){"use strict";e.r(n);var u=e("4267"),a=e("a7a8");for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);e("2717");var r=e("2877"),o=Object(r["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=o.exports},"95d0":function(t,n,e){},a59b:function(t,n,e){"use strict";(function(t){e("0ff5"),e("921b");u(e("66fd"));var n=u(e("8c7a"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},a7a8:function(t,n,e){"use strict";e.r(n);var u=e("2b31"),a=e.n(u);for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);n["default"]=a.a}},[["a59b","common/runtime","common/vendor"]]]);
});
require('pages/successOrder/successOrder.js');
__wxRoute = 'pages/profile/profile';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/profile/profile.js';

define('pages/profile/profile.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/profile/profile"],{"07f6":function(t,e,n){"use strict";(function(t){n("0ff5"),n("921b");u(n("66fd"));var e=u(n("ce30"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"2bcf":function(t,e,n){},8327:function(t,e,n){"use strict";n.r(e);var u=n("a01a"),a=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e["default"]=a.a},a01a:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},methods:{toedit:function(){t.navigateTo({url:"../editProfile/editProfile"})}},computed:{userinfo:function(){return this.$store.state.userinfo}}};e.default=n}).call(this,n("6e42")["default"])},a15d:function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},ce30:function(t,e,n){"use strict";n.r(e);var u=n("a15d"),a=n("8327");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("e5ad");var f=n("2877"),o=Object(f["a"])(a["default"],u["a"],u["b"],!1,null,null,null);e["default"]=o.exports},e5ad:function(t,e,n){"use strict";var u=n("2bcf"),a=n.n(u);a.a}},[["07f6","common/runtime","common/vendor"]]]);
});
require('pages/profile/profile.js');
__wxRoute = 'pages/editProfile/editProfile';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/editProfile/editProfile.js';

define('pages/editProfile/editProfile.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/editProfile/editProfile"],{1898:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},methods:{handleImg:function(){t.navigateTo({url:"../upload/upload"})}},computed:{userinfo:function(){return this.$store.state.userinfo}}};e.default=n}).call(this,n("6e42")["default"])},"229e":function(t,e,n){"use strict";n.r(e);var u=n("f0e1"),r=n("867c");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("b4c2");var f=n("2877"),a=Object(f["a"])(r["default"],u["a"],u["b"],!1,null,null,null);e["default"]=a.exports},"867c":function(t,e,n){"use strict";n.r(e);var u=n("1898"),r=n.n(u);for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);e["default"]=r.a},b4c2:function(t,e,n){"use strict";var u=n("bef9"),r=n.n(u);r.a},bef9:function(t,e,n){},d081:function(t,e,n){"use strict";(function(t){n("0ff5"),n("921b");u(n("66fd"));var e=u(n("229e"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},f0e1:function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return r})}},[["d081","common/runtime","common/vendor"]]]);
});
require('pages/editProfile/editProfile.js');
__wxRoute = 'pages/upload/upload';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/upload/upload.js';

define('pages/upload/upload.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/upload/upload"],{5478:function(e,t,n){"use strict";n.r(t);var u=n("86c0"),a=n.n(u);for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);t["default"]=a.a},"75dd":function(e,t,n){"use strict";(function(e){n("0ff5"),n("921b");u(n("66fd"));var t=u(n("b659"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"86c0":function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{imgUrl:null,pics:null}},computed:{userinfo:function(){return this.$store.state.userinfo}},methods:{chooseImage:function(){var t=this;e.chooseImage({count:1,success:function(u){console.log(n(u.tempFilePaths," at pages\\upload\\upload.vue:51"));var a=u.tempFilePaths[0];t.imgUrl=a,e.uploadFile({url:t.BASE_URL+"/profile",filePath:a,name:"avatar",success:function(e){console.log(n(e," at pages\\upload\\upload.vue:59"));var u=JSON.parse(e.data);if(1==u.code){t.pics=u.imgSrc;var a=t.BASE_URL+u.imgSrc;t.imgUrl=a}}})}})},handlePub:function(){var t=this;e.request({url:this.BASE_URL+"/users/changeimg",data:{username:this.userinfo.username,userimgurl:this.pics},success:function(u){console.log(n(u," at pages\\upload\\upload.vue:80")),e.showModal({content:"修改成功",showCancel:!1}),t.$store.commit("changeimgmut",t.pics)}})}}};t.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},"9f6e":function(e,t,n){},b659:function(e,t,n){"use strict";n.r(t);var u=n("f3d0"),a=n("5478");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("e403");var c=n("2877"),s=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=s.exports},e403:function(e,t,n){"use strict";var u=n("9f6e"),a=n.n(u);a.a},f3d0:function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return a})}},[["75dd","common/runtime","common/vendor"]]]);
});
require('pages/upload/upload.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{5130:function(n,e,t){"use strict";t.r(e);var a=t("a748"),o=t.n(a);for(var u in a)"default"!==u&&function(n){t.d(e,n,function(){return a[n]})}(u);e["default"]=o.a},a748:function(n,e,t){"use strict";(function(n,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{username:"admin1",photo:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",nickname:"尚未登录",pwd:"123456"}},onLoad:function(n){n.username&&(this.username=n.username)},methods:{login:function(){var e=this;n.request({url:this.BASE_URL+"/users/login",data:{username:this.username,pwd:this.pwd},success:function(a){console.log(t(a.data.userinfo," at pages\\login\\login.vue:94")),1==a.data.code?n.showModal({content:a.data.msg,showCancel:!1}).then(function(){n.setStorage({key:"token",data:a.data.data}).then(function(){n.setStorage({key:"userinfo",data:{username:e.username,userinfo:a.data.userinfo}})}),e.$store.commit("usermut",{username:e.username,userinfo:a.data.userinfo}),n.switchTab({url:"../home-product/home-product"})}):n.showModal({content:a.data.msg,showCancel:!1})}})},search:function(n){},checkmail:function(e){var a=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;if(console.log(t(e," at pages\\login\\login.vue:138")),!a.test(e))return n.showToast({title:"请填写正确邮箱号",icon:"none"}),!1},checkpwd:function(e){var a=/^[a-zA-Z0-9]{6,22}$/;if(console.log(t(e," at pages\\login\\login.vue:146")),!a.test(e))return n.showToast({title:"请填写正确密码格式",icon:"none"}),!1},handleMyCenter:function(){n.navigateTo({url:"../sign/sign"})}}};e.default=a}).call(this,t("6e42")["default"],t("0de9")["default"])},bc69:function(n,e,t){},cc6c:function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement;n._self._c},o=[];t.d(e,"a",function(){return a}),t.d(e,"b",function(){return o})},dad7:function(n,e,t){"use strict";(function(n){t("0ff5"),t("921b");a(t("66fd"));var e=a(t("f761"));function a(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},e32b:function(n,e,t){"use strict";var a=t("bc69"),o=t.n(a);o.a},f761:function(n,e,t){"use strict";t.r(e);var a=t("cc6c"),o=t("5130");for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);t("e32b");var s=t("2877"),i=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports}},[["dad7","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/sign/sign';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/sign/sign.js';

define('pages/sign/sign.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/sign/sign"],{"081f":function(n,e,t){"use strict";(function(n){t("0ff5"),t("921b");a(t("66fd"));var e=a(t("1a04"));function a(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},"1a04":function(n,e,t){"use strict";t.r(e);var a=t("8a8d"),o=t("a6e2");for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);t("b605");var i=t("2877"),s=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},"4db3":function(n,e,t){},"8a8d":function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement;n._self._c},o=[];t.d(e,"a",function(){return a}),t.d(e,"b",function(){return o})},a6e2:function(n,e,t){"use strict";t.r(e);var a=t("c81d"),o=t.n(a);for(var u in a)"default"!==u&&function(n){t.d(e,n,function(){return a[n]})}(u);e["default"]=o.a},b605:function(n,e,t){"use strict";var a=t("4db3"),o=t.n(a);o.a},c81d:function(n,e,t){"use strict";(function(n,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{photo:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg",nickname:"尚未登录",userid:"",username:"admin1",pwd:"123456"}},onShow:function(){},methods:{handleMyCenter:function(){n.navigateTo({url:"../login/login"})},reg:function(){var e=this;n.request({url:this.BASE_URL+"/users/reg",data:{username:this.username,pwd:this.pwd},success:function(a){console.log(t(1==a.data.code," at pages\\sign\\sign.vue:87")),1==a.data.code?(n.showModal({content:"注册成功",showCancel:!1}),n.navigateTo({url:"../login/login?username=".concat(e.username)})):n.showModal({content:"用户名已存在",showCancel:!1})}})},checkmail:function(e){var a=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;if(console.log(t(e," at pages\\sign\\sign.vue:108")),!a.test(e))return n.showToast({title:"请填写正确邮箱号",icon:"none"}),!1},checkpwd:function(e){var a=/^[a-zA-Z0-9]{6,22}$/;if(console.log(t(e," at pages\\sign\\sign.vue:116")),!a.test(e))return n.showToast({title:"请填写正确密码格式",icon:"none"}),!1}}};e.default=a}).call(this,t("6e42")["default"],t("0de9")["default"])}},[["081f","common/runtime","common/vendor"]]]);
});
require('pages/sign/sign.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

