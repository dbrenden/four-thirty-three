// Compiled by ClojureScript 1.9.456 {:target :nodejs}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__18572__auto__,writer__18573__auto__,opt__18574__auto__){
return cljs.core._write.call(null,writer__18573__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21270 = arguments.length;
var i__19075__auto___21271 = (0);
while(true){
if((i__19075__auto___21271 < len__19074__auto___21270)){
args__19081__auto__.push((arguments[i__19075__auto___21271]));

var G__21272 = (i__19075__auto___21271 + (1));
i__19075__auto___21271 = G__21272;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq21269){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21269));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21274 = arguments.length;
var i__19075__auto___21275 = (0);
while(true){
if((i__19075__auto___21275 < len__19074__auto___21274)){
args__19081__auto__.push((arguments[i__19075__auto___21275]));

var G__21276 = (i__19075__auto___21275 + (1));
i__19075__auto___21275 = G__21276;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq21273){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21273));
});

var g_QMARK__21277 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_21278 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__21277){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__21277))
,null));
var mkg_21279 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__21277,g_21278){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__21277,g_21278))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__21277,g_21278,mkg_21279){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__21277).call(null,x);
});})(g_QMARK__21277,g_21278,mkg_21279))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__21277,g_21278,mkg_21279){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_21279).call(null,gfn);
});})(g_QMARK__21277,g_21278,mkg_21279))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__21277,g_21278,mkg_21279){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_21278).call(null,generator);
});})(g_QMARK__21277,g_21278,mkg_21279))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__19166__auto___21299 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__19166__auto___21299){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21300 = arguments.length;
var i__19075__auto___21301 = (0);
while(true){
if((i__19075__auto___21301 < len__19074__auto___21300)){
args__19081__auto__.push((arguments[i__19075__auto___21301]));

var G__21302 = (i__19075__auto___21301 + (1));
i__19075__auto___21301 = G__21302;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19166__auto___21299))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19166__auto___21299){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19166__auto___21299),args);
});})(g__19166__auto___21299))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__19166__auto___21299){
return (function (seq21280){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21280));
});})(g__19166__auto___21299))
;


var g__19166__auto___21303 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__19166__auto___21303){
return (function cljs$spec$impl$gen$list(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21304 = arguments.length;
var i__19075__auto___21305 = (0);
while(true){
if((i__19075__auto___21305 < len__19074__auto___21304)){
args__19081__auto__.push((arguments[i__19075__auto___21305]));

var G__21306 = (i__19075__auto___21305 + (1));
i__19075__auto___21305 = G__21306;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19166__auto___21303))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19166__auto___21303){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19166__auto___21303),args);
});})(g__19166__auto___21303))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__19166__auto___21303){
return (function (seq21281){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21281));
});})(g__19166__auto___21303))
;


var g__19166__auto___21307 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__19166__auto___21307){
return (function cljs$spec$impl$gen$map(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21308 = arguments.length;
var i__19075__auto___21309 = (0);
while(true){
if((i__19075__auto___21309 < len__19074__auto___21308)){
args__19081__auto__.push((arguments[i__19075__auto___21309]));

var G__21310 = (i__19075__auto___21309 + (1));
i__19075__auto___21309 = G__21310;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19166__auto___21307))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19166__auto___21307){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19166__auto___21307),args);
});})(g__19166__auto___21307))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__19166__auto___21307){
return (function (seq21282){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21282));
});})(g__19166__auto___21307))
;


var g__19166__auto___21311 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__19166__auto___21311){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21312 = arguments.length;
var i__19075__auto___21313 = (0);
while(true){
if((i__19075__auto___21313 < len__19074__auto___21312)){
args__19081__auto__.push((arguments[i__19075__auto___21313]));

var G__21314 = (i__19075__auto___21313 + (1));
i__19075__auto___21313 = G__21314;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19166__auto___21311))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19166__auto___21311){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19166__auto___21311),args);
});})(g__19166__auto___21311))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__19166__auto___21311){
return (function (seq21283){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21283));
});})(g__19166__auto___21311))
;


var g__19166__auto___21315 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__19166__auto___21315){
return (function cljs$spec$impl$gen$set(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21316 = arguments.length;
var i__19075__auto___21317 = (0);
while(true){
if((i__19075__auto___21317 < len__19074__auto___21316)){
args__19081__auto__.push((arguments[i__19075__auto___21317]));

var G__21318 = (i__19075__auto___21317 + (1));
i__19075__auto___21317 = G__21318;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19166__auto___21315))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19166__auto___21315){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19166__auto___21315),args);
});})(g__19166__auto___21315))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__19166__auto___21315){
return (function (seq21284){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21284));
});})(g__19166__auto___21315))
;


var g__19166__auto___21319 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__19166__auto___21319){
return (function cljs$spec$impl$gen$vector(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21320 = arguments.length;
var i__19075__auto___21321 = (0);
while(true){
if((i__19075__auto___21321 < len__19074__auto___21320)){
args__19081__auto__.push((arguments[i__19075__auto___21321]));

var G__21322 = (i__19075__auto___21321 + (1));
i__19075__auto___21321 = G__21322;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19166__auto___21319))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19166__auto___21319){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19166__auto___21319),args);
});})(g__19166__auto___21319))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__19166__auto___21319){
return (function (seq21285){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21285));
});})(g__19166__auto___21319))
;


var g__19166__auto___21323 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__19166__auto___21323){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21324 = arguments.length;
var i__19075__auto___21325 = (0);
while(true){
if((i__19075__auto___21325 < len__19074__auto___21324)){
args__19081__auto__.push((arguments[i__19075__auto___21325]));

var G__21326 = (i__19075__auto___21325 + (1));
i__19075__auto___21325 = G__21326;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19166__auto___21323))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19166__auto___21323){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19166__auto___21323),args);
});})(g__19166__auto___21323))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__19166__auto___21323){
return (function (seq21286){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21286));
});})(g__19166__auto___21323))
;


var g__19166__auto___21327 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__19166__auto___21327){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21328 = arguments.length;
var i__19075__auto___21329 = (0);
while(true){
if((i__19075__auto___21329 < len__19074__auto___21328)){
args__19081__auto__.push((arguments[i__19075__auto___21329]));

var G__21330 = (i__19075__auto___21329 + (1));
i__19075__auto___21329 = G__21330;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19166__auto___21327))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19166__auto___21327){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19166__auto___21327),args);
});})(g__19166__auto___21327))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__19166__auto___21327){
return (function (seq21287){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21287));
});})(g__19166__auto___21327))
;


var g__19166__auto___21331 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__19166__auto___21331){
return (function cljs$spec$impl$gen$elements(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21332 = arguments.length;
var i__19075__auto___21333 = (0);
while(true){
if((i__19075__auto___21333 < len__19074__auto___21332)){
args__19081__auto__.push((arguments[i__19075__auto___21333]));

var G__21334 = (i__19075__auto___21333 + (1));
i__19075__auto___21333 = G__21334;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19166__auto___21331))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19166__auto___21331){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19166__auto___21331),args);
});})(g__19166__auto___21331))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__19166__auto___21331){
return (function (seq21288){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21288));
});})(g__19166__auto___21331))
;


var g__19166__auto___21335 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__19166__auto___21335){
return (function cljs$spec$impl$gen$bind(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21336 = arguments.length;
var i__19075__auto___21337 = (0);
while(true){
if((i__19075__auto___21337 < len__19074__auto___21336)){
args__19081__auto__.push((arguments[i__19075__auto___21337]));

var G__21338 = (i__19075__auto___21337 + (1));
i__19075__auto___21337 = G__21338;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19166__auto___21335))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19166__auto___21335){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19166__auto___21335),args);
});})(g__19166__auto___21335))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__19166__auto___21335){
return (function (seq21289){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21289));
});})(g__19166__auto___21335))
;


var g__19166__auto___21339 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__19166__auto___21339){
return (function cljs$spec$impl$gen$choose(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21340 = arguments.length;
var i__19075__auto___21341 = (0);
while(true){
if((i__19075__auto___21341 < len__19074__auto___21340)){
args__19081__auto__.push((arguments[i__19075__auto___21341]));

var G__21342 = (i__19075__auto___21341 + (1));
i__19075__auto___21341 = G__21342;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19166__auto___21339))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19166__auto___21339){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19166__auto___21339),args);
});})(g__19166__auto___21339))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__19166__auto___21339){
return (function (seq21290){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21290));
});})(g__19166__auto___21339))
;


var g__19166__auto___21343 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__19166__auto___21343){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21344 = arguments.length;
var i__19075__auto___21345 = (0);
while(true){
if((i__19075__auto___21345 < len__19074__auto___21344)){
args__19081__auto__.push((arguments[i__19075__auto___21345]));

var G__21346 = (i__19075__auto___21345 + (1));
i__19075__auto___21345 = G__21346;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19166__auto___21343))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19166__auto___21343){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19166__auto___21343),args);
});})(g__19166__auto___21343))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__19166__auto___21343){
return (function (seq21291){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21291));
});})(g__19166__auto___21343))
;


var g__19166__auto___21347 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__19166__auto___21347){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21348 = arguments.length;
var i__19075__auto___21349 = (0);
while(true){
if((i__19075__auto___21349 < len__19074__auto___21348)){
args__19081__auto__.push((arguments[i__19075__auto___21349]));

var G__21350 = (i__19075__auto___21349 + (1));
i__19075__auto___21349 = G__21350;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19166__auto___21347))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19166__auto___21347){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19166__auto___21347),args);
});})(g__19166__auto___21347))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__19166__auto___21347){
return (function (seq21292){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21292));
});})(g__19166__auto___21347))
;


var g__19166__auto___21351 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__19166__auto___21351){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21352 = arguments.length;
var i__19075__auto___21353 = (0);
while(true){
if((i__19075__auto___21353 < len__19074__auto___21352)){
args__19081__auto__.push((arguments[i__19075__auto___21353]));

var G__21354 = (i__19075__auto___21353 + (1));
i__19075__auto___21353 = G__21354;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19166__auto___21351))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19166__auto___21351){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19166__auto___21351),args);
});})(g__19166__auto___21351))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__19166__auto___21351){
return (function (seq21293){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21293));
});})(g__19166__auto___21351))
;


var g__19166__auto___21355 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__19166__auto___21355){
return (function cljs$spec$impl$gen$sample(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21356 = arguments.length;
var i__19075__auto___21357 = (0);
while(true){
if((i__19075__auto___21357 < len__19074__auto___21356)){
args__19081__auto__.push((arguments[i__19075__auto___21357]));

var G__21358 = (i__19075__auto___21357 + (1));
i__19075__auto___21357 = G__21358;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19166__auto___21355))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19166__auto___21355){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19166__auto___21355),args);
});})(g__19166__auto___21355))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__19166__auto___21355){
return (function (seq21294){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21294));
});})(g__19166__auto___21355))
;


var g__19166__auto___21359 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__19166__auto___21359){
return (function cljs$spec$impl$gen$return(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21360 = arguments.length;
var i__19075__auto___21361 = (0);
while(true){
if((i__19075__auto___21361 < len__19074__auto___21360)){
args__19081__auto__.push((arguments[i__19075__auto___21361]));

var G__21362 = (i__19075__auto___21361 + (1));
i__19075__auto___21361 = G__21362;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19166__auto___21359))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19166__auto___21359){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19166__auto___21359),args);
});})(g__19166__auto___21359))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__19166__auto___21359){
return (function (seq21295){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21295));
});})(g__19166__auto___21359))
;


var g__19166__auto___21363 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__19166__auto___21363){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21364 = arguments.length;
var i__19075__auto___21365 = (0);
while(true){
if((i__19075__auto___21365 < len__19074__auto___21364)){
args__19081__auto__.push((arguments[i__19075__auto___21365]));

var G__21366 = (i__19075__auto___21365 + (1));
i__19075__auto___21365 = G__21366;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19166__auto___21363))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19166__auto___21363){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19166__auto___21363),args);
});})(g__19166__auto___21363))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__19166__auto___21363){
return (function (seq21296){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21296));
});})(g__19166__auto___21363))
;


var g__19166__auto___21367 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__19166__auto___21367){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21368 = arguments.length;
var i__19075__auto___21369 = (0);
while(true){
if((i__19075__auto___21369 < len__19074__auto___21368)){
args__19081__auto__.push((arguments[i__19075__auto___21369]));

var G__21370 = (i__19075__auto___21369 + (1));
i__19075__auto___21369 = G__21370;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19166__auto___21367))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19166__auto___21367){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19166__auto___21367),args);
});})(g__19166__auto___21367))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__19166__auto___21367){
return (function (seq21297){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21297));
});})(g__19166__auto___21367))
;


var g__19166__auto___21371 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__19166__auto___21371){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21372 = arguments.length;
var i__19075__auto___21373 = (0);
while(true){
if((i__19075__auto___21373 < len__19074__auto___21372)){
args__19081__auto__.push((arguments[i__19075__auto___21373]));

var G__21374 = (i__19075__auto___21373 + (1));
i__19075__auto___21373 = G__21374;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19166__auto___21371))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19166__auto___21371){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19166__auto___21371),args);
});})(g__19166__auto___21371))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__19166__auto___21371){
return (function (seq21298){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21298));
});})(g__19166__auto___21371))
;

var g__19179__auto___21396 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__19179__auto___21396){
return (function cljs$spec$impl$gen$any(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21397 = arguments.length;
var i__19075__auto___21398 = (0);
while(true){
if((i__19075__auto___21398 < len__19074__auto___21397)){
args__19081__auto__.push((arguments[i__19075__auto___21398]));

var G__21399 = (i__19075__auto___21398 + (1));
i__19075__auto___21398 = G__21399;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19179__auto___21396))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19179__auto___21396){
return (function (args){
return cljs.core.deref.call(null,g__19179__auto___21396);
});})(g__19179__auto___21396))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__19179__auto___21396){
return (function (seq21375){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21375));
});})(g__19179__auto___21396))
;


var g__19179__auto___21400 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__19179__auto___21400){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21401 = arguments.length;
var i__19075__auto___21402 = (0);
while(true){
if((i__19075__auto___21402 < len__19074__auto___21401)){
args__19081__auto__.push((arguments[i__19075__auto___21402]));

var G__21403 = (i__19075__auto___21402 + (1));
i__19075__auto___21402 = G__21403;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19179__auto___21400))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19179__auto___21400){
return (function (args){
return cljs.core.deref.call(null,g__19179__auto___21400);
});})(g__19179__auto___21400))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__19179__auto___21400){
return (function (seq21376){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21376));
});})(g__19179__auto___21400))
;


var g__19179__auto___21404 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__19179__auto___21404){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21405 = arguments.length;
var i__19075__auto___21406 = (0);
while(true){
if((i__19075__auto___21406 < len__19074__auto___21405)){
args__19081__auto__.push((arguments[i__19075__auto___21406]));

var G__21407 = (i__19075__auto___21406 + (1));
i__19075__auto___21406 = G__21407;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19179__auto___21404))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19179__auto___21404){
return (function (args){
return cljs.core.deref.call(null,g__19179__auto___21404);
});})(g__19179__auto___21404))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__19179__auto___21404){
return (function (seq21377){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21377));
});})(g__19179__auto___21404))
;


var g__19179__auto___21408 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__19179__auto___21408){
return (function cljs$spec$impl$gen$char(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21409 = arguments.length;
var i__19075__auto___21410 = (0);
while(true){
if((i__19075__auto___21410 < len__19074__auto___21409)){
args__19081__auto__.push((arguments[i__19075__auto___21410]));

var G__21411 = (i__19075__auto___21410 + (1));
i__19075__auto___21410 = G__21411;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19179__auto___21408))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19179__auto___21408){
return (function (args){
return cljs.core.deref.call(null,g__19179__auto___21408);
});})(g__19179__auto___21408))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__19179__auto___21408){
return (function (seq21378){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21378));
});})(g__19179__auto___21408))
;


var g__19179__auto___21412 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__19179__auto___21412){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21413 = arguments.length;
var i__19075__auto___21414 = (0);
while(true){
if((i__19075__auto___21414 < len__19074__auto___21413)){
args__19081__auto__.push((arguments[i__19075__auto___21414]));

var G__21415 = (i__19075__auto___21414 + (1));
i__19075__auto___21414 = G__21415;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19179__auto___21412))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19179__auto___21412){
return (function (args){
return cljs.core.deref.call(null,g__19179__auto___21412);
});})(g__19179__auto___21412))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__19179__auto___21412){
return (function (seq21379){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21379));
});})(g__19179__auto___21412))
;


var g__19179__auto___21416 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__19179__auto___21416){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21417 = arguments.length;
var i__19075__auto___21418 = (0);
while(true){
if((i__19075__auto___21418 < len__19074__auto___21417)){
args__19081__auto__.push((arguments[i__19075__auto___21418]));

var G__21419 = (i__19075__auto___21418 + (1));
i__19075__auto___21418 = G__21419;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19179__auto___21416))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19179__auto___21416){
return (function (args){
return cljs.core.deref.call(null,g__19179__auto___21416);
});})(g__19179__auto___21416))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__19179__auto___21416){
return (function (seq21380){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21380));
});})(g__19179__auto___21416))
;


var g__19179__auto___21420 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__19179__auto___21420){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21421 = arguments.length;
var i__19075__auto___21422 = (0);
while(true){
if((i__19075__auto___21422 < len__19074__auto___21421)){
args__19081__auto__.push((arguments[i__19075__auto___21422]));

var G__21423 = (i__19075__auto___21422 + (1));
i__19075__auto___21422 = G__21423;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19179__auto___21420))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19179__auto___21420){
return (function (args){
return cljs.core.deref.call(null,g__19179__auto___21420);
});})(g__19179__auto___21420))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__19179__auto___21420){
return (function (seq21381){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21381));
});})(g__19179__auto___21420))
;


var g__19179__auto___21424 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__19179__auto___21424){
return (function cljs$spec$impl$gen$double(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21425 = arguments.length;
var i__19075__auto___21426 = (0);
while(true){
if((i__19075__auto___21426 < len__19074__auto___21425)){
args__19081__auto__.push((arguments[i__19075__auto___21426]));

var G__21427 = (i__19075__auto___21426 + (1));
i__19075__auto___21426 = G__21427;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19179__auto___21424))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19179__auto___21424){
return (function (args){
return cljs.core.deref.call(null,g__19179__auto___21424);
});})(g__19179__auto___21424))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__19179__auto___21424){
return (function (seq21382){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21382));
});})(g__19179__auto___21424))
;


var g__19179__auto___21428 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__19179__auto___21428){
return (function cljs$spec$impl$gen$int(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21429 = arguments.length;
var i__19075__auto___21430 = (0);
while(true){
if((i__19075__auto___21430 < len__19074__auto___21429)){
args__19081__auto__.push((arguments[i__19075__auto___21430]));

var G__21431 = (i__19075__auto___21430 + (1));
i__19075__auto___21430 = G__21431;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19179__auto___21428))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19179__auto___21428){
return (function (args){
return cljs.core.deref.call(null,g__19179__auto___21428);
});})(g__19179__auto___21428))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__19179__auto___21428){
return (function (seq21383){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21383));
});})(g__19179__auto___21428))
;


var g__19179__auto___21432 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__19179__auto___21432){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21433 = arguments.length;
var i__19075__auto___21434 = (0);
while(true){
if((i__19075__auto___21434 < len__19074__auto___21433)){
args__19081__auto__.push((arguments[i__19075__auto___21434]));

var G__21435 = (i__19075__auto___21434 + (1));
i__19075__auto___21434 = G__21435;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19179__auto___21432))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19179__auto___21432){
return (function (args){
return cljs.core.deref.call(null,g__19179__auto___21432);
});})(g__19179__auto___21432))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__19179__auto___21432){
return (function (seq21384){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21384));
});})(g__19179__auto___21432))
;


var g__19179__auto___21436 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__19179__auto___21436){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21437 = arguments.length;
var i__19075__auto___21438 = (0);
while(true){
if((i__19075__auto___21438 < len__19074__auto___21437)){
args__19081__auto__.push((arguments[i__19075__auto___21438]));

var G__21439 = (i__19075__auto___21438 + (1));
i__19075__auto___21438 = G__21439;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19179__auto___21436))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19179__auto___21436){
return (function (args){
return cljs.core.deref.call(null,g__19179__auto___21436);
});})(g__19179__auto___21436))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__19179__auto___21436){
return (function (seq21385){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21385));
});})(g__19179__auto___21436))
;


var g__19179__auto___21440 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__19179__auto___21440){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21441 = arguments.length;
var i__19075__auto___21442 = (0);
while(true){
if((i__19075__auto___21442 < len__19074__auto___21441)){
args__19081__auto__.push((arguments[i__19075__auto___21442]));

var G__21443 = (i__19075__auto___21442 + (1));
i__19075__auto___21442 = G__21443;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19179__auto___21440))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19179__auto___21440){
return (function (args){
return cljs.core.deref.call(null,g__19179__auto___21440);
});})(g__19179__auto___21440))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__19179__auto___21440){
return (function (seq21386){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21386));
});})(g__19179__auto___21440))
;


var g__19179__auto___21444 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__19179__auto___21444){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21445 = arguments.length;
var i__19075__auto___21446 = (0);
while(true){
if((i__19075__auto___21446 < len__19074__auto___21445)){
args__19081__auto__.push((arguments[i__19075__auto___21446]));

var G__21447 = (i__19075__auto___21446 + (1));
i__19075__auto___21446 = G__21447;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19179__auto___21444))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19179__auto___21444){
return (function (args){
return cljs.core.deref.call(null,g__19179__auto___21444);
});})(g__19179__auto___21444))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__19179__auto___21444){
return (function (seq21387){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21387));
});})(g__19179__auto___21444))
;


var g__19179__auto___21448 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__19179__auto___21448){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21449 = arguments.length;
var i__19075__auto___21450 = (0);
while(true){
if((i__19075__auto___21450 < len__19074__auto___21449)){
args__19081__auto__.push((arguments[i__19075__auto___21450]));

var G__21451 = (i__19075__auto___21450 + (1));
i__19075__auto___21450 = G__21451;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19179__auto___21448))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19179__auto___21448){
return (function (args){
return cljs.core.deref.call(null,g__19179__auto___21448);
});})(g__19179__auto___21448))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__19179__auto___21448){
return (function (seq21388){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21388));
});})(g__19179__auto___21448))
;


var g__19179__auto___21452 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__19179__auto___21452){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21453 = arguments.length;
var i__19075__auto___21454 = (0);
while(true){
if((i__19075__auto___21454 < len__19074__auto___21453)){
args__19081__auto__.push((arguments[i__19075__auto___21454]));

var G__21455 = (i__19075__auto___21454 + (1));
i__19075__auto___21454 = G__21455;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19179__auto___21452))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19179__auto___21452){
return (function (args){
return cljs.core.deref.call(null,g__19179__auto___21452);
});})(g__19179__auto___21452))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__19179__auto___21452){
return (function (seq21389){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21389));
});})(g__19179__auto___21452))
;


var g__19179__auto___21456 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__19179__auto___21456){
return (function cljs$spec$impl$gen$string(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21457 = arguments.length;
var i__19075__auto___21458 = (0);
while(true){
if((i__19075__auto___21458 < len__19074__auto___21457)){
args__19081__auto__.push((arguments[i__19075__auto___21458]));

var G__21459 = (i__19075__auto___21458 + (1));
i__19075__auto___21458 = G__21459;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19179__auto___21456))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19179__auto___21456){
return (function (args){
return cljs.core.deref.call(null,g__19179__auto___21456);
});})(g__19179__auto___21456))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__19179__auto___21456){
return (function (seq21390){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21390));
});})(g__19179__auto___21456))
;


var g__19179__auto___21460 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__19179__auto___21460){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21461 = arguments.length;
var i__19075__auto___21462 = (0);
while(true){
if((i__19075__auto___21462 < len__19074__auto___21461)){
args__19081__auto__.push((arguments[i__19075__auto___21462]));

var G__21463 = (i__19075__auto___21462 + (1));
i__19075__auto___21462 = G__21463;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19179__auto___21460))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19179__auto___21460){
return (function (args){
return cljs.core.deref.call(null,g__19179__auto___21460);
});})(g__19179__auto___21460))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__19179__auto___21460){
return (function (seq21391){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21391));
});})(g__19179__auto___21460))
;


var g__19179__auto___21464 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__19179__auto___21464){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21465 = arguments.length;
var i__19075__auto___21466 = (0);
while(true){
if((i__19075__auto___21466 < len__19074__auto___21465)){
args__19081__auto__.push((arguments[i__19075__auto___21466]));

var G__21467 = (i__19075__auto___21466 + (1));
i__19075__auto___21466 = G__21467;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19179__auto___21464))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19179__auto___21464){
return (function (args){
return cljs.core.deref.call(null,g__19179__auto___21464);
});})(g__19179__auto___21464))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__19179__auto___21464){
return (function (seq21392){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21392));
});})(g__19179__auto___21464))
;


var g__19179__auto___21468 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__19179__auto___21468){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21469 = arguments.length;
var i__19075__auto___21470 = (0);
while(true){
if((i__19075__auto___21470 < len__19074__auto___21469)){
args__19081__auto__.push((arguments[i__19075__auto___21470]));

var G__21471 = (i__19075__auto___21470 + (1));
i__19075__auto___21470 = G__21471;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19179__auto___21468))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19179__auto___21468){
return (function (args){
return cljs.core.deref.call(null,g__19179__auto___21468);
});})(g__19179__auto___21468))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__19179__auto___21468){
return (function (seq21393){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21393));
});})(g__19179__auto___21468))
;


var g__19179__auto___21472 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__19179__auto___21472){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21473 = arguments.length;
var i__19075__auto___21474 = (0);
while(true){
if((i__19075__auto___21474 < len__19074__auto___21473)){
args__19081__auto__.push((arguments[i__19075__auto___21474]));

var G__21475 = (i__19075__auto___21474 + (1));
i__19075__auto___21474 = G__21475;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19179__auto___21472))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19179__auto___21472){
return (function (args){
return cljs.core.deref.call(null,g__19179__auto___21472);
});})(g__19179__auto___21472))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__19179__auto___21472){
return (function (seq21394){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21394));
});})(g__19179__auto___21472))
;


var g__19179__auto___21476 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__19179__auto___21476){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21477 = arguments.length;
var i__19075__auto___21478 = (0);
while(true){
if((i__19075__auto___21478 < len__19074__auto___21477)){
args__19081__auto__.push((arguments[i__19075__auto___21478]));

var G__21479 = (i__19075__auto___21478 + (1));
i__19075__auto___21478 = G__21479;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});})(g__19179__auto___21476))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19179__auto___21476){
return (function (args){
return cljs.core.deref.call(null,g__19179__auto___21476);
});})(g__19179__auto___21476))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__19179__auto___21476){
return (function (seq21395){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21395));
});})(g__19179__auto___21476))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__19081__auto__ = [];
var len__19074__auto___21482 = arguments.length;
var i__19075__auto___21483 = (0);
while(true){
if((i__19075__auto___21483 < len__19074__auto___21482)){
args__19081__auto__.push((arguments[i__19075__auto___21483]));

var G__21484 = (i__19075__auto___21483 + (1));
i__19075__auto___21483 = G__21484;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((0) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__19082__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__21480_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__21480_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq21481){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21481));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__21485_SHARP_){
return (new Date(p1__21485_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map