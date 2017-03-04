// Compiled by ClojureScript 1.9.456 {:target :nodejs}
goog.provide('four_thirty_three_core.uploader');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('four_thirty_three_core.protocols');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
four_thirty_three_core.uploader.init_uploader_loop = (function four_thirty_three_core$uploader$init_uploader_loop(recordings_LT_){
var c__20697__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20697__auto__){
return (function (){
var f__20698__auto__ = (function (){var switch__20676__auto__ = ((function (c__20697__auto__){
return (function (state_23399){
var state_val_23400 = (state_23399[(1)]);
if((state_val_23400 === (1))){
var state_23399__$1 = state_23399;
var statearr_23401_23411 = state_23399__$1;
(statearr_23401_23411[(2)] = null);

(statearr_23401_23411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23400 === (2))){
var state_23399__$1 = state_23399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23399__$1,(4),recordings_LT_);
} else {
if((state_val_23400 === (3))){
var inst_23397 = (state_23399[(2)]);
var state_23399__$1 = state_23399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23399__$1,inst_23397);
} else {
if((state_val_23400 === (4))){
var inst_23393 = (state_23399[(2)]);
var inst_23394 = cljs.core.println.call(null,"Uploading recording");
var state_23399__$1 = (function (){var statearr_23402 = state_23399;
(statearr_23402[(7)] = inst_23393);

(statearr_23402[(8)] = inst_23394);

return statearr_23402;
})();
var statearr_23403_23412 = state_23399__$1;
(statearr_23403_23412[(2)] = null);

(statearr_23403_23412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__20697__auto__))
;
return ((function (switch__20676__auto__,c__20697__auto__){
return (function() {
var four_thirty_three_core$uploader$init_uploader_loop_$_state_machine__20677__auto__ = null;
var four_thirty_three_core$uploader$init_uploader_loop_$_state_machine__20677__auto____0 = (function (){
var statearr_23407 = [null,null,null,null,null,null,null,null,null];
(statearr_23407[(0)] = four_thirty_three_core$uploader$init_uploader_loop_$_state_machine__20677__auto__);

(statearr_23407[(1)] = (1));

return statearr_23407;
});
var four_thirty_three_core$uploader$init_uploader_loop_$_state_machine__20677__auto____1 = (function (state_23399){
while(true){
var ret_value__20678__auto__ = (function (){try{while(true){
var result__20679__auto__ = switch__20676__auto__.call(null,state_23399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20679__auto__;
}
break;
}
}catch (e23408){if((e23408 instanceof Object)){
var ex__20680__auto__ = e23408;
var statearr_23409_23413 = state_23399;
(statearr_23409_23413[(5)] = ex__20680__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23414 = state_23399;
state_23399 = G__23414;
continue;
} else {
return ret_value__20678__auto__;
}
break;
}
});
four_thirty_three_core$uploader$init_uploader_loop_$_state_machine__20677__auto__ = function(state_23399){
switch(arguments.length){
case 0:
return four_thirty_three_core$uploader$init_uploader_loop_$_state_machine__20677__auto____0.call(this);
case 1:
return four_thirty_three_core$uploader$init_uploader_loop_$_state_machine__20677__auto____1.call(this,state_23399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
four_thirty_three_core$uploader$init_uploader_loop_$_state_machine__20677__auto__.cljs$core$IFn$_invoke$arity$0 = four_thirty_three_core$uploader$init_uploader_loop_$_state_machine__20677__auto____0;
four_thirty_three_core$uploader$init_uploader_loop_$_state_machine__20677__auto__.cljs$core$IFn$_invoke$arity$1 = four_thirty_three_core$uploader$init_uploader_loop_$_state_machine__20677__auto____1;
return four_thirty_three_core$uploader$init_uploader_loop_$_state_machine__20677__auto__;
})()
;})(switch__20676__auto__,c__20697__auto__))
})();
var state__20699__auto__ = (function (){var statearr_23410 = f__20698__auto__.call(null);
(statearr_23410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20697__auto__);

return statearr_23410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20699__auto__);
});})(c__20697__auto__))
);

return c__20697__auto__;
});

//# sourceMappingURL=uploader.js.map