// Compiled by ClojureScript 1.9.456 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20214){
var map__20239 = p__20214;
var map__20239__$1 = ((((!((map__20239 == null)))?((((map__20239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20239.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20239):map__20239);
var m = map__20239__$1;
var n = cljs.core.get.call(null,map__20239__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__20239__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20241_20263 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20242_20264 = null;
var count__20243_20265 = (0);
var i__20244_20266 = (0);
while(true){
if((i__20244_20266 < count__20243_20265)){
var f_20267 = cljs.core._nth.call(null,chunk__20242_20264,i__20244_20266);
cljs.core.println.call(null,"  ",f_20267);

var G__20268 = seq__20241_20263;
var G__20269 = chunk__20242_20264;
var G__20270 = count__20243_20265;
var G__20271 = (i__20244_20266 + (1));
seq__20241_20263 = G__20268;
chunk__20242_20264 = G__20269;
count__20243_20265 = G__20270;
i__20244_20266 = G__20271;
continue;
} else {
var temp__4657__auto___20272 = cljs.core.seq.call(null,seq__20241_20263);
if(temp__4657__auto___20272){
var seq__20241_20273__$1 = temp__4657__auto___20272;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20241_20273__$1)){
var c__18780__auto___20274 = cljs.core.chunk_first.call(null,seq__20241_20273__$1);
var G__20275 = cljs.core.chunk_rest.call(null,seq__20241_20273__$1);
var G__20276 = c__18780__auto___20274;
var G__20277 = cljs.core.count.call(null,c__18780__auto___20274);
var G__20278 = (0);
seq__20241_20263 = G__20275;
chunk__20242_20264 = G__20276;
count__20243_20265 = G__20277;
i__20244_20266 = G__20278;
continue;
} else {
var f_20279 = cljs.core.first.call(null,seq__20241_20273__$1);
cljs.core.println.call(null,"  ",f_20279);

var G__20280 = cljs.core.next.call(null,seq__20241_20273__$1);
var G__20281 = null;
var G__20282 = (0);
var G__20283 = (0);
seq__20241_20263 = G__20280;
chunk__20242_20264 = G__20281;
count__20243_20265 = G__20282;
i__20244_20266 = G__20283;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20284 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__17961__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17961__auto__)){
return or__17961__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_20284);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_20284)))?cljs.core.second.call(null,arglists_20284):arglists_20284));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20245_20285 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20246_20286 = null;
var count__20247_20287 = (0);
var i__20248_20288 = (0);
while(true){
if((i__20248_20288 < count__20247_20287)){
var vec__20249_20289 = cljs.core._nth.call(null,chunk__20246_20286,i__20248_20288);
var name_20290 = cljs.core.nth.call(null,vec__20249_20289,(0),null);
var map__20252_20291 = cljs.core.nth.call(null,vec__20249_20289,(1),null);
var map__20252_20292__$1 = ((((!((map__20252_20291 == null)))?((((map__20252_20291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20252_20291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20252_20291):map__20252_20291);
var doc_20293 = cljs.core.get.call(null,map__20252_20292__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20294 = cljs.core.get.call(null,map__20252_20292__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20290);

cljs.core.println.call(null," ",arglists_20294);

if(cljs.core.truth_(doc_20293)){
cljs.core.println.call(null," ",doc_20293);
} else {
}

var G__20295 = seq__20245_20285;
var G__20296 = chunk__20246_20286;
var G__20297 = count__20247_20287;
var G__20298 = (i__20248_20288 + (1));
seq__20245_20285 = G__20295;
chunk__20246_20286 = G__20296;
count__20247_20287 = G__20297;
i__20248_20288 = G__20298;
continue;
} else {
var temp__4657__auto___20299 = cljs.core.seq.call(null,seq__20245_20285);
if(temp__4657__auto___20299){
var seq__20245_20300__$1 = temp__4657__auto___20299;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20245_20300__$1)){
var c__18780__auto___20301 = cljs.core.chunk_first.call(null,seq__20245_20300__$1);
var G__20302 = cljs.core.chunk_rest.call(null,seq__20245_20300__$1);
var G__20303 = c__18780__auto___20301;
var G__20304 = cljs.core.count.call(null,c__18780__auto___20301);
var G__20305 = (0);
seq__20245_20285 = G__20302;
chunk__20246_20286 = G__20303;
count__20247_20287 = G__20304;
i__20248_20288 = G__20305;
continue;
} else {
var vec__20254_20306 = cljs.core.first.call(null,seq__20245_20300__$1);
var name_20307 = cljs.core.nth.call(null,vec__20254_20306,(0),null);
var map__20257_20308 = cljs.core.nth.call(null,vec__20254_20306,(1),null);
var map__20257_20309__$1 = ((((!((map__20257_20308 == null)))?((((map__20257_20308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20257_20308.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20257_20308):map__20257_20308);
var doc_20310 = cljs.core.get.call(null,map__20257_20309__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20311 = cljs.core.get.call(null,map__20257_20309__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20307);

cljs.core.println.call(null," ",arglists_20311);

if(cljs.core.truth_(doc_20310)){
cljs.core.println.call(null," ",doc_20310);
} else {
}

var G__20312 = cljs.core.next.call(null,seq__20245_20300__$1);
var G__20313 = null;
var G__20314 = (0);
var G__20315 = (0);
seq__20245_20285 = G__20312;
chunk__20246_20286 = G__20313;
count__20247_20287 = G__20314;
i__20248_20288 = G__20315;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__20259 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20260 = null;
var count__20261 = (0);
var i__20262 = (0);
while(true){
if((i__20262 < count__20261)){
var role = cljs.core._nth.call(null,chunk__20260,i__20262);
var temp__4657__auto___20316__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___20316__$1)){
var spec_20317 = temp__4657__auto___20316__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_20317));
} else {
}

var G__20318 = seq__20259;
var G__20319 = chunk__20260;
var G__20320 = count__20261;
var G__20321 = (i__20262 + (1));
seq__20259 = G__20318;
chunk__20260 = G__20319;
count__20261 = G__20320;
i__20262 = G__20321;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__20259);
if(temp__4657__auto____$1){
var seq__20259__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20259__$1)){
var c__18780__auto__ = cljs.core.chunk_first.call(null,seq__20259__$1);
var G__20322 = cljs.core.chunk_rest.call(null,seq__20259__$1);
var G__20323 = c__18780__auto__;
var G__20324 = cljs.core.count.call(null,c__18780__auto__);
var G__20325 = (0);
seq__20259 = G__20322;
chunk__20260 = G__20323;
count__20261 = G__20324;
i__20262 = G__20325;
continue;
} else {
var role = cljs.core.first.call(null,seq__20259__$1);
var temp__4657__auto___20326__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___20326__$2)){
var spec_20327 = temp__4657__auto___20326__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_20327));
} else {
}

var G__20328 = cljs.core.next.call(null,seq__20259__$1);
var G__20329 = null;
var G__20330 = (0);
var G__20331 = (0);
seq__20259 = G__20328;
chunk__20260 = G__20329;
count__20261 = G__20330;
i__20262 = G__20331;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map