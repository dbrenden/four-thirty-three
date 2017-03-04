// Compiled by ClojureScript 1.9.456 {:target :nodejs}
goog.provide('four_thirty_three_core.uploader');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('four_thirty_three_core.protocols');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
four_thirty_three_core.uploader.init_uploader_loop = (function four_thirty_three_core$uploader$init_uploader_loop(recordings_LT_){
var c__20671__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20671__auto__){
return (function (){
var f__20672__auto__ = (function (){var switch__20650__auto__ = ((function (c__20671__auto__){
return (function (state_21732){
var state_val_21733 = (state_21732[(1)]);
if((state_val_21733 === (1))){
var state_21732__$1 = state_21732;
var statearr_21734_21749 = state_21732__$1;
(statearr_21734_21749[(2)] = null);

(statearr_21734_21749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (2))){
var state_21732__$1 = state_21732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21732__$1,(4),recordings_LT_);
} else {
if((state_val_21733 === (3))){
var inst_21729 = (state_21732[(2)]);
var inst_21730 = cljs.core.println.call(null,"Shutting down upload");
var state_21732__$1 = (function (){var statearr_21735 = state_21732;
(statearr_21735[(7)] = inst_21729);

return statearr_21735;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21732__$1,inst_21730);
} else {
if((state_val_21733 === (4))){
var inst_21721 = (state_21732[(2)]);
var state_21732__$1 = state_21732;
if(cljs.core.truth_(inst_21721)){
var statearr_21736_21750 = state_21732__$1;
(statearr_21736_21750[(1)] = (5));

} else {
var statearr_21737_21751 = state_21732__$1;
(statearr_21737_21751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (5))){
var inst_21723 = cljs.core.println.call(null,"Uploading recording");
var state_21732__$1 = (function (){var statearr_21738 = state_21732;
(statearr_21738[(8)] = inst_21723);

return statearr_21738;
})();
var statearr_21739_21752 = state_21732__$1;
(statearr_21739_21752[(2)] = null);

(statearr_21739_21752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (6))){
var state_21732__$1 = state_21732;
var statearr_21740_21753 = state_21732__$1;
(statearr_21740_21753[(2)] = null);

(statearr_21740_21753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21733 === (7))){
var inst_21727 = (state_21732[(2)]);
var state_21732__$1 = state_21732;
var statearr_21741_21754 = state_21732__$1;
(statearr_21741_21754[(2)] = inst_21727);

(statearr_21741_21754[(1)] = (3));


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
var four_thirty_three_core$uploader$init_uploader_loop_$_state_machine__20651__auto__ = null;
var four_thirty_three_core$uploader$init_uploader_loop_$_state_machine__20651__auto____0 = (function (){
var statearr_21745 = [null,null,null,null,null,null,null,null,null];
(statearr_21745[(0)] = four_thirty_three_core$uploader$init_uploader_loop_$_state_machine__20651__auto__);

(statearr_21745[(1)] = (1));

return statearr_21745;
});
var four_thirty_three_core$uploader$init_uploader_loop_$_state_machine__20651__auto____1 = (function (state_21732){
while(true){
var ret_value__20652__auto__ = (function (){try{while(true){
var result__20653__auto__ = switch__20650__auto__.call(null,state_21732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20653__auto__;
}
break;
}
}catch (e21746){if((e21746 instanceof Object)){
var ex__20654__auto__ = e21746;
var statearr_21747_21755 = state_21732;
(statearr_21747_21755[(5)] = ex__20654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21756 = state_21732;
state_21732 = G__21756;
continue;
} else {
return ret_value__20652__auto__;
}
break;
}
});
four_thirty_three_core$uploader$init_uploader_loop_$_state_machine__20651__auto__ = function(state_21732){
switch(arguments.length){
case 0:
return four_thirty_three_core$uploader$init_uploader_loop_$_state_machine__20651__auto____0.call(this);
case 1:
return four_thirty_three_core$uploader$init_uploader_loop_$_state_machine__20651__auto____1.call(this,state_21732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
four_thirty_three_core$uploader$init_uploader_loop_$_state_machine__20651__auto__.cljs$core$IFn$_invoke$arity$0 = four_thirty_three_core$uploader$init_uploader_loop_$_state_machine__20651__auto____0;
four_thirty_three_core$uploader$init_uploader_loop_$_state_machine__20651__auto__.cljs$core$IFn$_invoke$arity$1 = four_thirty_three_core$uploader$init_uploader_loop_$_state_machine__20651__auto____1;
return four_thirty_three_core$uploader$init_uploader_loop_$_state_machine__20651__auto__;
})()
;})(switch__20650__auto__,c__20671__auto__))
})();
var state__20673__auto__ = (function (){var statearr_21748 = f__20672__auto__.call(null);
(statearr_21748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20671__auto__);

return statearr_21748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20673__auto__);
});})(c__20671__auto__))
);

return c__20671__auto__;
});

//# sourceMappingURL=uploader.js.map