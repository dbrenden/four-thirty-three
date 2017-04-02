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
var c__20671__auto___21724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20671__auto___21724,output_GT_){
return (function (){
var f__20672__auto__ = (function (){var switch__20650__auto__ = ((function (c__20671__auto___21724,output_GT_){
return (function (state_21705){
var state_val_21706 = (state_21705[(1)]);
if((state_val_21706 === (1))){
var state_21705__$1 = state_21705;
var statearr_21707_21725 = state_21705__$1;
(statearr_21707_21725[(2)] = null);

(statearr_21707_21725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (2))){
var state_21705__$1 = state_21705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21705__$1,(4),recordings_LT_);
} else {
if((state_val_21706 === (3))){
var inst_21701 = (state_21705[(2)]);
var inst_21702 = cljs.core.println.call(null,"Shutting down upload");
var inst_21703 = cljs.core.async.close_BANG_.call(null,output_GT_);
var state_21705__$1 = (function (){var statearr_21708 = state_21705;
(statearr_21708[(7)] = inst_21702);

(statearr_21708[(8)] = inst_21701);

return statearr_21708;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21705__$1,inst_21703);
} else {
if((state_val_21706 === (4))){
var inst_21690 = (state_21705[(9)]);
var inst_21690__$1 = (state_21705[(2)]);
var state_21705__$1 = (function (){var statearr_21709 = state_21705;
(statearr_21709[(9)] = inst_21690__$1);

return statearr_21709;
})();
if(cljs.core.truth_(inst_21690__$1)){
var statearr_21710_21726 = state_21705__$1;
(statearr_21710_21726[(1)] = (5));

} else {
var statearr_21711_21727 = state_21705__$1;
(statearr_21711_21727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (5))){
var inst_21690 = (state_21705[(9)]);
var inst_21692 = cljs.core.PersistentHashMap.EMPTY;
var inst_21693 = four_thirty_three_core.protocols.upload.call(null,uploader,inst_21692);
var state_21705__$1 = (function (){var statearr_21712 = state_21705;
(statearr_21712[(10)] = inst_21693);

return statearr_21712;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21705__$1,(8),output_GT_,inst_21690);
} else {
if((state_val_21706 === (6))){
var state_21705__$1 = state_21705;
var statearr_21713_21728 = state_21705__$1;
(statearr_21713_21728[(2)] = null);

(statearr_21713_21728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (7))){
var inst_21699 = (state_21705[(2)]);
var state_21705__$1 = state_21705;
var statearr_21714_21729 = state_21705__$1;
(statearr_21714_21729[(2)] = inst_21699);

(statearr_21714_21729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21706 === (8))){
var inst_21695 = (state_21705[(2)]);
var state_21705__$1 = (function (){var statearr_21715 = state_21705;
(statearr_21715[(11)] = inst_21695);

return statearr_21715;
})();
var statearr_21716_21730 = state_21705__$1;
(statearr_21716_21730[(2)] = null);

(statearr_21716_21730[(1)] = (2));


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
});})(c__20671__auto___21724,output_GT_))
;
return ((function (switch__20650__auto__,c__20671__auto___21724,output_GT_){
return (function() {
var four_thirty_three_core$uploader$init_upload_loop_$_state_machine__20651__auto__ = null;
var four_thirty_three_core$uploader$init_upload_loop_$_state_machine__20651__auto____0 = (function (){
var statearr_21720 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21720[(0)] = four_thirty_three_core$uploader$init_upload_loop_$_state_machine__20651__auto__);

(statearr_21720[(1)] = (1));

return statearr_21720;
});
var four_thirty_three_core$uploader$init_upload_loop_$_state_machine__20651__auto____1 = (function (state_21705){
while(true){
var ret_value__20652__auto__ = (function (){try{while(true){
var result__20653__auto__ = switch__20650__auto__.call(null,state_21705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20653__auto__;
}
break;
}
}catch (e21721){if((e21721 instanceof Object)){
var ex__20654__auto__ = e21721;
var statearr_21722_21731 = state_21705;
(statearr_21722_21731[(5)] = ex__20654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21732 = state_21705;
state_21705 = G__21732;
continue;
} else {
return ret_value__20652__auto__;
}
break;
}
});
four_thirty_three_core$uploader$init_upload_loop_$_state_machine__20651__auto__ = function(state_21705){
switch(arguments.length){
case 0:
return four_thirty_three_core$uploader$init_upload_loop_$_state_machine__20651__auto____0.call(this);
case 1:
return four_thirty_three_core$uploader$init_upload_loop_$_state_machine__20651__auto____1.call(this,state_21705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
four_thirty_three_core$uploader$init_upload_loop_$_state_machine__20651__auto__.cljs$core$IFn$_invoke$arity$0 = four_thirty_three_core$uploader$init_upload_loop_$_state_machine__20651__auto____0;
four_thirty_three_core$uploader$init_upload_loop_$_state_machine__20651__auto__.cljs$core$IFn$_invoke$arity$1 = four_thirty_three_core$uploader$init_upload_loop_$_state_machine__20651__auto____1;
return four_thirty_three_core$uploader$init_upload_loop_$_state_machine__20651__auto__;
})()
;})(switch__20650__auto__,c__20671__auto___21724,output_GT_))
})();
var state__20673__auto__ = (function (){var statearr_21723 = f__20672__auto__.call(null);
(statearr_21723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20671__auto___21724);

return statearr_21723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20673__auto__);
});})(c__20671__auto___21724,output_GT_))
);


return output_GT_;
});

//# sourceMappingURL=uploader.js.map