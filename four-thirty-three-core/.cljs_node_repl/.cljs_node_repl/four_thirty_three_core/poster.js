// Compiled by ClojureScript 1.9.456 {:target :nodejs}
goog.provide('four_thirty_three_core.poster');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('four_thirty_three_core.protocols');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
four_thirty_three_core.poster.chan_size = (function four_thirty_three_core$poster$chan_size(){
var or__17961__auto__ = null;
if(cljs.core.truth_(or__17961__auto__)){
return or__17961__auto__;
} else {
return (100);
}
});
four_thirty_three_core.poster.init_post_loop = (function four_thirty_three_core$poster$init_post_loop(recordings_LT_,poster){
var c__20671__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20671__auto__){
return (function (){
var f__20672__auto__ = (function (){var switch__20650__auto__ = ((function (c__20671__auto__){
return (function (state_20980){
var state_val_20981 = (state_20980[(1)]);
if((state_val_20981 === (1))){
var state_20980__$1 = state_20980;
var statearr_20982_20997 = state_20980__$1;
(statearr_20982_20997[(2)] = null);

(statearr_20982_20997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20981 === (2))){
var state_20980__$1 = state_20980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20980__$1,(4),recordings_LT_);
} else {
if((state_val_20981 === (3))){
var inst_20978 = (state_20980[(2)]);
var state_20980__$1 = state_20980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20980__$1,inst_20978);
} else {
if((state_val_20981 === (4))){
var inst_20968 = (state_20980[(2)]);
var state_20980__$1 = state_20980;
if(cljs.core.truth_(inst_20968)){
var statearr_20983_20998 = state_20980__$1;
(statearr_20983_20998[(1)] = (5));

} else {
var statearr_20984_20999 = state_20980__$1;
(statearr_20984_20999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20981 === (5))){
var inst_20970 = cljs.core.PersistentHashMap.EMPTY;
var inst_20971 = four_thirty_three_core.protocols.post.call(null,poster,inst_20970);
var state_20980__$1 = (function (){var statearr_20985 = state_20980;
(statearr_20985[(7)] = inst_20971);

return statearr_20985;
})();
var statearr_20986_21000 = state_20980__$1;
(statearr_20986_21000[(2)] = null);

(statearr_20986_21000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20981 === (6))){
var state_20980__$1 = state_20980;
var statearr_20987_21001 = state_20980__$1;
(statearr_20987_21001[(2)] = null);

(statearr_20987_21001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20981 === (7))){
var inst_20975 = (state_20980[(2)]);
var inst_20976 = cljs.core.println.call(null,"Shutting down poster");
var state_20980__$1 = (function (){var statearr_20988 = state_20980;
(statearr_20988[(8)] = inst_20975);

return statearr_20988;
})();
var statearr_20989_21002 = state_20980__$1;
(statearr_20989_21002[(2)] = inst_20976);

(statearr_20989_21002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20671__auto__))
;
return ((function (switch__20650__auto__,c__20671__auto__){
return (function() {
var four_thirty_three_core$poster$init_post_loop_$_state_machine__20651__auto__ = null;
var four_thirty_three_core$poster$init_post_loop_$_state_machine__20651__auto____0 = (function (){
var statearr_20993 = [null,null,null,null,null,null,null,null,null];
(statearr_20993[(0)] = four_thirty_three_core$poster$init_post_loop_$_state_machine__20651__auto__);

(statearr_20993[(1)] = (1));

return statearr_20993;
});
var four_thirty_three_core$poster$init_post_loop_$_state_machine__20651__auto____1 = (function (state_20980){
while(true){
var ret_value__20652__auto__ = (function (){try{while(true){
var result__20653__auto__ = switch__20650__auto__.call(null,state_20980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20653__auto__;
}
break;
}
}catch (e20994){if((e20994 instanceof Object)){
var ex__20654__auto__ = e20994;
var statearr_20995_21003 = state_20980;
(statearr_20995_21003[(5)] = ex__20654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21004 = state_20980;
state_20980 = G__21004;
continue;
} else {
return ret_value__20652__auto__;
}
break;
}
});
four_thirty_three_core$poster$init_post_loop_$_state_machine__20651__auto__ = function(state_20980){
switch(arguments.length){
case 0:
return four_thirty_three_core$poster$init_post_loop_$_state_machine__20651__auto____0.call(this);
case 1:
return four_thirty_three_core$poster$init_post_loop_$_state_machine__20651__auto____1.call(this,state_20980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
four_thirty_three_core$poster$init_post_loop_$_state_machine__20651__auto__.cljs$core$IFn$_invoke$arity$0 = four_thirty_three_core$poster$init_post_loop_$_state_machine__20651__auto____0;
four_thirty_three_core$poster$init_post_loop_$_state_machine__20651__auto__.cljs$core$IFn$_invoke$arity$1 = four_thirty_three_core$poster$init_post_loop_$_state_machine__20651__auto____1;
return four_thirty_three_core$poster$init_post_loop_$_state_machine__20651__auto__;
})()
;})(switch__20650__auto__,c__20671__auto__))
})();
var state__20673__auto__ = (function (){var statearr_20996 = f__20672__auto__.call(null);
(statearr_20996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20671__auto__);

return statearr_20996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20673__auto__);
});})(c__20671__auto__))
);

return c__20671__auto__;
});

//# sourceMappingURL=poster.js.map