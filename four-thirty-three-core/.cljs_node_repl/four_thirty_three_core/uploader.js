// Compiled by ClojureScript 1.9.456 {:target :nodejs}
goog.provide('four_thirty_three_core.uploader');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('four_thirty_three_core.protocols');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
four_thirty_three_core.uploader.chan_size = (function four_thirty_three_core$uploader$chan_size(){
var or__17961__auto__ = null;
if(cljs.core.truth_(or__17961__auto__)){
return or__17961__auto__;
} else {
return (100);
}
});
four_thirty_three_core.uploader.init_upload_loop = (function four_thirty_three_core$uploader$init_upload_loop(recordings_LT_,uploader){
var output_GT_ = cljs.core.async.chan.call(null,four_thirty_three_core.uploader.chan_size.call(null));
var c__20671__auto___21507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20671__auto___21507,output_GT_){
return (function (){
var f__20672__auto__ = (function (){var switch__20650__auto__ = ((function (c__20671__auto___21507,output_GT_){
return (function (state_21488){
var state_val_21489 = (state_21488[(1)]);
if((state_val_21489 === (1))){
var state_21488__$1 = state_21488;
var statearr_21490_21508 = state_21488__$1;
(statearr_21490_21508[(2)] = null);

(statearr_21490_21508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (2))){
var state_21488__$1 = state_21488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21488__$1,(4),recordings_LT_);
} else {
if((state_val_21489 === (3))){
var inst_21485 = (state_21488[(2)]);
var inst_21486 = cljs.core.println.call(null,"Shutting down upload");
var state_21488__$1 = (function (){var statearr_21491 = state_21488;
(statearr_21491[(7)] = inst_21485);

return statearr_21491;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21488__$1,inst_21486);
} else {
if((state_val_21489 === (4))){
var inst_21474 = (state_21488[(8)]);
var inst_21474__$1 = (state_21488[(2)]);
var state_21488__$1 = (function (){var statearr_21492 = state_21488;
(statearr_21492[(8)] = inst_21474__$1);

return statearr_21492;
})();
if(cljs.core.truth_(inst_21474__$1)){
var statearr_21493_21509 = state_21488__$1;
(statearr_21493_21509[(1)] = (5));

} else {
var statearr_21494_21510 = state_21488__$1;
(statearr_21494_21510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (5))){
var inst_21474 = (state_21488[(8)]);
var inst_21476 = cljs.core.PersistentHashMap.EMPTY;
var inst_21477 = four_thirty_three_core.protocols.upload.call(null,uploader,inst_21476);
var state_21488__$1 = (function (){var statearr_21495 = state_21488;
(statearr_21495[(9)] = inst_21477);

return statearr_21495;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21488__$1,(8),output_GT_,inst_21474);
} else {
if((state_val_21489 === (6))){
var state_21488__$1 = state_21488;
var statearr_21496_21511 = state_21488__$1;
(statearr_21496_21511[(2)] = null);

(statearr_21496_21511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (7))){
var inst_21483 = (state_21488[(2)]);
var state_21488__$1 = state_21488;
var statearr_21497_21512 = state_21488__$1;
(statearr_21497_21512[(2)] = inst_21483);

(statearr_21497_21512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21489 === (8))){
var inst_21479 = (state_21488[(2)]);
var state_21488__$1 = (function (){var statearr_21498 = state_21488;
(statearr_21498[(10)] = inst_21479);

return statearr_21498;
})();
var statearr_21499_21513 = state_21488__$1;
(statearr_21499_21513[(2)] = null);

(statearr_21499_21513[(1)] = (2));


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
}
});})(c__20671__auto___21507,output_GT_))
;
return ((function (switch__20650__auto__,c__20671__auto___21507,output_GT_){
return (function() {
var four_thirty_three_core$uploader$init_upload_loop_$_state_machine__20651__auto__ = null;
var four_thirty_three_core$uploader$init_upload_loop_$_state_machine__20651__auto____0 = (function (){
var statearr_21503 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21503[(0)] = four_thirty_three_core$uploader$init_upload_loop_$_state_machine__20651__auto__);

(statearr_21503[(1)] = (1));

return statearr_21503;
});
var four_thirty_three_core$uploader$init_upload_loop_$_state_machine__20651__auto____1 = (function (state_21488){
while(true){
var ret_value__20652__auto__ = (function (){try{while(true){
var result__20653__auto__ = switch__20650__auto__.call(null,state_21488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20653__auto__;
}
break;
}
}catch (e21504){if((e21504 instanceof Object)){
var ex__20654__auto__ = e21504;
var statearr_21505_21514 = state_21488;
(statearr_21505_21514[(5)] = ex__20654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21515 = state_21488;
state_21488 = G__21515;
continue;
} else {
return ret_value__20652__auto__;
}
break;
}
});
four_thirty_three_core$uploader$init_upload_loop_$_state_machine__20651__auto__ = function(state_21488){
switch(arguments.length){
case 0:
return four_thirty_three_core$uploader$init_upload_loop_$_state_machine__20651__auto____0.call(this);
case 1:
return four_thirty_three_core$uploader$init_upload_loop_$_state_machine__20651__auto____1.call(this,state_21488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
four_thirty_three_core$uploader$init_upload_loop_$_state_machine__20651__auto__.cljs$core$IFn$_invoke$arity$0 = four_thirty_three_core$uploader$init_upload_loop_$_state_machine__20651__auto____0;
four_thirty_three_core$uploader$init_upload_loop_$_state_machine__20651__auto__.cljs$core$IFn$_invoke$arity$1 = four_thirty_three_core$uploader$init_upload_loop_$_state_machine__20651__auto____1;
return four_thirty_three_core$uploader$init_upload_loop_$_state_machine__20651__auto__;
})()
;})(switch__20650__auto__,c__20671__auto___21507,output_GT_))
})();
var state__20673__auto__ = (function (){var statearr_21506 = f__20672__auto__.call(null);
(statearr_21506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20671__auto___21507);

return statearr_21506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20673__auto__);
});})(c__20671__auto___21507,output_GT_))
);


return output_GT_;
});

//# sourceMappingURL=uploader.js.map