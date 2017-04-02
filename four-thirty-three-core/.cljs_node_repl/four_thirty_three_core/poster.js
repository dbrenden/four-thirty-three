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
return (function (state_21410){
var state_val_21411 = (state_21410[(1)]);
if((state_val_21411 === (1))){
var state_21410__$1 = state_21410;
var statearr_21412_21427 = state_21410__$1;
(statearr_21412_21427[(2)] = null);

(statearr_21412_21427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21411 === (2))){
var state_21410__$1 = state_21410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21410__$1,(4),recordings_LT_);
} else {
if((state_val_21411 === (3))){
var inst_21408 = (state_21410[(2)]);
var state_21410__$1 = state_21410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21410__$1,inst_21408);
} else {
if((state_val_21411 === (4))){
var inst_21398 = (state_21410[(2)]);
var state_21410__$1 = state_21410;
if(cljs.core.truth_(inst_21398)){
var statearr_21413_21428 = state_21410__$1;
(statearr_21413_21428[(1)] = (5));

} else {
var statearr_21414_21429 = state_21410__$1;
(statearr_21414_21429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21411 === (5))){
var inst_21400 = cljs.core.PersistentHashMap.EMPTY;
var inst_21401 = four_thirty_three_core.protocols.post.call(null,poster,inst_21400);
var state_21410__$1 = (function (){var statearr_21415 = state_21410;
(statearr_21415[(7)] = inst_21401);

return statearr_21415;
})();
var statearr_21416_21430 = state_21410__$1;
(statearr_21416_21430[(2)] = null);

(statearr_21416_21430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21411 === (6))){
var state_21410__$1 = state_21410;
var statearr_21417_21431 = state_21410__$1;
(statearr_21417_21431[(2)] = null);

(statearr_21417_21431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21411 === (7))){
var inst_21405 = (state_21410[(2)]);
var inst_21406 = cljs.core.println.call(null,"Shutting down poster");
var state_21410__$1 = (function (){var statearr_21418 = state_21410;
(statearr_21418[(8)] = inst_21405);

return statearr_21418;
})();
var statearr_21419_21432 = state_21410__$1;
(statearr_21419_21432[(2)] = inst_21406);

(statearr_21419_21432[(1)] = (3));


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
var statearr_21423 = [null,null,null,null,null,null,null,null,null];
(statearr_21423[(0)] = four_thirty_three_core$poster$init_post_loop_$_state_machine__20651__auto__);

(statearr_21423[(1)] = (1));

return statearr_21423;
});
var four_thirty_three_core$poster$init_post_loop_$_state_machine__20651__auto____1 = (function (state_21410){
while(true){
var ret_value__20652__auto__ = (function (){try{while(true){
var result__20653__auto__ = switch__20650__auto__.call(null,state_21410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20653__auto__;
}
break;
}
}catch (e21424){if((e21424 instanceof Object)){
var ex__20654__auto__ = e21424;
var statearr_21425_21433 = state_21410;
(statearr_21425_21433[(5)] = ex__20654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21434 = state_21410;
state_21410 = G__21434;
continue;
} else {
return ret_value__20652__auto__;
}
break;
}
});
four_thirty_three_core$poster$init_post_loop_$_state_machine__20651__auto__ = function(state_21410){
switch(arguments.length){
case 0:
return four_thirty_three_core$poster$init_post_loop_$_state_machine__20651__auto____0.call(this);
case 1:
return four_thirty_three_core$poster$init_post_loop_$_state_machine__20651__auto____1.call(this,state_21410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
four_thirty_three_core$poster$init_post_loop_$_state_machine__20651__auto__.cljs$core$IFn$_invoke$arity$0 = four_thirty_three_core$poster$init_post_loop_$_state_machine__20651__auto____0;
four_thirty_three_core$poster$init_post_loop_$_state_machine__20651__auto__.cljs$core$IFn$_invoke$arity$1 = four_thirty_three_core$poster$init_post_loop_$_state_machine__20651__auto____1;
return four_thirty_three_core$poster$init_post_loop_$_state_machine__20651__auto__;
})()
;})(switch__20650__auto__,c__20671__auto__))
})();
var state__20673__auto__ = (function (){var statearr_21426 = f__20672__auto__.call(null);
(statearr_21426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20671__auto__);

return statearr_21426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20673__auto__);
});})(c__20671__auto__))
);

return c__20671__auto__;
});

//# sourceMappingURL=poster.js.map