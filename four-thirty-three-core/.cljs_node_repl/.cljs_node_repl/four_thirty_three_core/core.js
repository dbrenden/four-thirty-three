// Compiled by ClojureScript 1.9.456 {:target :nodejs}
goog.provide('four_thirty_three_core.core');
goog.require('cljs.core');
goog.require('cljs.spec');
goog.require('cljs.core.async');
goog.require('four_thirty_three_core.protocols');
goog.require('four_thirty_three_core.recorder');
goog.require('four_thirty_three_core.uploader');
goog.require('four_thirty_three_core.poster');
four_thirty_three_core.core.chan_size = (function four_thirty_three_core$core$chan_size(){
var or__17961__auto__ = null;
if(cljs.core.truth_(or__17961__auto__)){
return or__17961__auto__;
} else {
return (100);
}
});
cljs.spec.def_impl.call(null,new cljs.core.Keyword("four-thirty-three-core.core","recorder","four-thirty-three-core.core/recorder",-1165640596),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","satisfies?","cljs.core/satisfies?",-1074798682,null),new cljs.core.Symbol("four-thirty-three-core.protocols","Recordable","four-thirty-three-core.protocols/Recordable",166750483,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__21606_SHARP_){
if(!((p1__21606_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__21606_SHARP_.four_thirty_three_core$protocols$Recordable$))){
return true;
} else {
if((!p1__21606_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,four_thirty_three_core.protocols.Recordable,p1__21606_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,four_thirty_three_core.protocols.Recordable,p1__21606_SHARP_);
}
}));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("four-thirty-three-core.core","uploader","four-thirty-three-core.core/uploader",-1475162610),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","satisfies?","cljs.core/satisfies?",-1074798682,null),new cljs.core.Symbol("four-thirty-three-core.protocols","Uploadable","four-thirty-three-core.protocols/Uploadable",-2426549,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__21608_SHARP_){
if(!((p1__21608_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__21608_SHARP_.four_thirty_three_core$protocols$Uploadable$))){
return true;
} else {
if((!p1__21608_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,four_thirty_three_core.protocols.Uploadable,p1__21608_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,four_thirty_three_core.protocols.Uploadable,p1__21608_SHARP_);
}
}));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("four-thirty-three-core.core","poster","four-thirty-three-core.core/poster",-1031914085),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","satisfies?","cljs.core/satisfies?",-1074798682,null),new cljs.core.Symbol("four-thirty-three-core.protocols","Postable","four-thirty-three-core.protocols/Postable",1104992558,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__21610_SHARP_){
if(!((p1__21610_SHARP_ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__21610_SHARP_.four_thirty_three_core$protocols$Postable$))){
return true;
} else {
if((!p1__21610_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,four_thirty_three_core.protocols.Postable,p1__21610_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,four_thirty_three_core.protocols.Postable,p1__21610_SHARP_);
}
}));
cljs.spec.def_impl.call(null,new cljs.core.Symbol("four-thirty-three-core.core","init","four-thirty-three-core.core/init",-601665496,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",-7296553,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"period","period",-352129191),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),new cljs.core.Keyword(null,"recording-length","recording-length",-481288742),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),new cljs.core.Keyword(null,"recorder","recorder",263166645),new cljs.core.Keyword("four-thirty-three-core.core","recorder","four-thirty-three-core.core/recorder",-1165640596),new cljs.core.Keyword(null,"uploader","uploader",-859476025),new cljs.core.Keyword("four-thirty-three-core.core","uploader","four-thirty-three-core.core/uploader",-1475162610),new cljs.core.Keyword(null,"poster","poster",-1616913550),new cljs.core.Keyword("four-thirty-three-core.core","poster","four-thirty-three-core.core/poster",-1031914085)),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__21612#","p1__21612#",-103924320,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),cljs.core.list(new cljs.core.Keyword(null,"period","period",-352129191),new cljs.core.Symbol(null,"p1__21612#","p1__21612#",-103924320,null)),cljs.core.list(new cljs.core.Keyword(null,"recording-length","recording-length",-481288742),new cljs.core.Symbol(null,"p1__21612#","p1__21612#",-103924320,null)))))),cljs.spec.fspec_impl.call(null,cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",-7296553,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"period","period",-352129191),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),new cljs.core.Keyword(null,"recording-length","recording-length",-481288742),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),new cljs.core.Keyword(null,"recorder","recorder",263166645),new cljs.core.Keyword("four-thirty-three-core.core","recorder","four-thirty-three-core.core/recorder",-1165640596),new cljs.core.Keyword(null,"uploader","uploader",-859476025),new cljs.core.Keyword("four-thirty-three-core.core","uploader","four-thirty-three-core.core/uploader",-1475162610),new cljs.core.Keyword(null,"poster","poster",-1616913550),new cljs.core.Keyword("four-thirty-three-core.core","poster","four-thirty-three-core.core/poster",-1031914085)),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__21612#","p1__21612#",-103924320,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),cljs.core.list(new cljs.core.Keyword(null,"period","period",-352129191),new cljs.core.Symbol(null,"p1__21612#","p1__21612#",-103924320,null)),cljs.core.list(new cljs.core.Keyword(null,"recording-length","recording-length",-481288742),new cljs.core.Symbol(null,"p1__21612#","p1__21612#",-103924320,null))))),cljs.spec.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"period","period",-352129191),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),new cljs.core.Keyword(null,"recording-length","recording-length",-481288742),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),new cljs.core.Keyword(null,"recorder","recorder",263166645),new cljs.core.Keyword("four-thirty-three-core.core","recorder","four-thirty-three-core.core/recorder",-1165640596),new cljs.core.Keyword(null,"uploader","uploader",-859476025),new cljs.core.Keyword("four-thirty-three-core.core","uploader","four-thirty-three-core.core/uploader",-1475162610),new cljs.core.Keyword(null,"poster","poster",-1616913550),new cljs.core.Keyword("four-thirty-three-core.core","poster","four-thirty-three-core.core/poster",-1031914085)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),cljs.core.list(new cljs.core.Keyword(null,"period","period",-352129191),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Keyword(null,"recording-length","recording-length",-481288742),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.cat_impl.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"period","period",-352129191),new cljs.core.Keyword(null,"recording-length","recording-length",-481288742),new cljs.core.Keyword(null,"recorder","recorder",263166645),new cljs.core.Keyword(null,"uploader","uploader",-859476025),new cljs.core.Keyword(null,"poster","poster",-1616913550)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.int_QMARK_,cljs.core.int_QMARK_,new cljs.core.Keyword("four-thirty-three-core.core","recorder","four-thirty-three-core.core/recorder",-1165640596),new cljs.core.Keyword("four-thirty-three-core.core","uploader","four-thirty-three-core.core/uploader",-1475162610),new cljs.core.Keyword("four-thirty-three-core.core","poster","four-thirty-three-core.core/poster",-1031914085)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),new cljs.core.Keyword("four-thirty-three-core.core","recorder","four-thirty-three-core.core/recorder",-1165640596),new cljs.core.Keyword("four-thirty-three-core.core","uploader","four-thirty-three-core.core/uploader",-1475162610),new cljs.core.Keyword("four-thirty-three-core.core","poster","four-thirty-three-core.core/poster",-1031914085)], null)),(function (p1__21612_SHARP_){
return (new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(p1__21612_SHARP_) > new cljs.core.Keyword(null,"recording-length","recording-length",-481288742).cljs$core$IFn$_invoke$arity$1(p1__21612_SHARP_));
})], null),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",-7296553,null),cljs.core.list(new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),new cljs.core.Keyword(null,"period","period",-352129191),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),new cljs.core.Keyword(null,"recording-length","recording-length",-481288742),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),new cljs.core.Keyword(null,"recorder","recorder",263166645),new cljs.core.Keyword("four-thirty-three-core.core","recorder","four-thirty-three-core.core/recorder",-1165640596),new cljs.core.Keyword(null,"uploader","uploader",-859476025),new cljs.core.Keyword("four-thirty-three-core.core","uploader","four-thirty-three-core.core/uploader",-1475162610),new cljs.core.Keyword(null,"poster","poster",-1616913550),new cljs.core.Keyword("four-thirty-three-core.core","poster","four-thirty-three-core.core/poster",-1031914085)),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__21612#","p1__21612#",-103924320,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),cljs.core.list(new cljs.core.Keyword(null,"period","period",-352129191),new cljs.core.Symbol(null,"p1__21612#","p1__21612#",-103924320,null)),cljs.core.list(new cljs.core.Keyword(null,"recording-length","recording-length",-481288742),new cljs.core.Symbol(null,"p1__21612#","p1__21612#",-103924320,null))))),null,null,null,null,null));
four_thirty_three_core.core.init = (function four_thirty_three_core$core$init(period,recording_length,recorder,uploader,poster){
var recordings_GT_ = cljs.core.async.chan.call(null,four_thirty_three_core.core.chan_size.call(null));
var stop_fn = four_thirty_three_core.recorder.init_record_loop.call(null,recordings_GT_,period,recording_length,recorder);
four_thirty_three_core.poster.init_post_loop.call(null,four_thirty_three_core.uploader.init_upload_loop.call(null,recordings_GT_,uploader),poster);

return stop_fn;
});

//# sourceMappingURL=core.js.map