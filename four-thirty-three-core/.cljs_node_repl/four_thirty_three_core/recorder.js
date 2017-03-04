// Compiled by ClojureScript 1.9.456 {:target :nodejs}
goog.provide('four_thirty_three_core.recorder');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('four_thirty_three_core.protocols');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
four_thirty_three_core.recorder.init_record_loop = (function four_thirty_three_core$recorder$init_record_loop(period,recording_length,recorder,output_GT_){
var stop_LT_ = cljs.core.async.chan.call(null);
var c__20671__auto___21128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20671__auto___21128,stop_LT_){
return (function (){
var f__20672__auto__ = (function (){var switch__20650__auto__ = ((function (c__20671__auto___21128,stop_LT_){
return (function (state_21095){
var state_val_21096 = (state_21095[(1)]);
if((state_val_21096 === (7))){
var inst_21059 = (state_21095[(2)]);
var inst_21060 = cljs.core.PersistentHashMap.EMPTY;
var inst_21061 = four_thirty_three_core.protocols.start.call(null,recorder,inst_21060);
var inst_21062 = cljs.core.async.timeout.call(null,recording_length);
var state_21095__$1 = (function (){var statearr_21097 = state_21095;
(statearr_21097[(7)] = inst_21061);

(statearr_21097[(8)] = inst_21059);

return statearr_21097;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21095__$1,(8),inst_21062);
} else {
if((state_val_21096 === (1))){
var state_21095__$1 = state_21095;
var statearr_21098_21129 = state_21095__$1;
(statearr_21098_21129[(2)] = null);

(statearr_21098_21129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21096 === (4))){
var inst_21048 = cljs_time.core.now.call(null);
var inst_21049 = cljs_time.coerce.to_long.call(null,inst_21048);
var inst_21050 = (period - recording_length);
var inst_21051 = (inst_21050 - (20000));
var inst_21052 = cljs.core.rand_int.call(null,inst_21051);
var inst_21053 = [new cljs.core.Keyword(null,"period","period",-352129191),new cljs.core.Keyword(null,"recording-length","recording-length",-481288742),new cljs.core.Keyword(null,"timeout-length","timeout-length",336740811)];
var inst_21054 = [period,recording_length,inst_21052];
var inst_21055 = cljs.core.PersistentHashMap.fromArrays(inst_21053,inst_21054);
var inst_21056 = cljs.core.println.call(null,"STARTING TIMEOUT: ",inst_21055);
var inst_21057 = cljs.core.async.timeout.call(null,inst_21052);
var state_21095__$1 = (function (){var statearr_21099 = state_21095;
(statearr_21099[(9)] = inst_21056);

(statearr_21099[(10)] = inst_21049);

return statearr_21099;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21095__$1,(7),inst_21057);
} else {
if((state_val_21096 === (6))){
var inst_21091 = (state_21095[(2)]);
var state_21095__$1 = state_21095;
var statearr_21100_21130 = state_21095__$1;
(statearr_21100_21130[(2)] = inst_21091);

(statearr_21100_21130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21096 === (3))){
var inst_21093 = (state_21095[(2)]);
var state_21095__$1 = state_21095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21095__$1,inst_21093);
} else {
if((state_val_21096 === (2))){
var inst_21045 = cljs.core.async.poll_BANG_.call(null,stop_LT_);
var inst_21046 = cljs.core.not.call(null,inst_21045);
var state_21095__$1 = state_21095;
if(inst_21046){
var statearr_21101_21131 = state_21095__$1;
(statearr_21101_21131[(1)] = (4));

} else {
var statearr_21102_21132 = state_21095__$1;
(statearr_21102_21132[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21096 === (9))){
var inst_21049 = (state_21095[(10)]);
var inst_21067 = (state_21095[(2)]);
var inst_21068 = cljs_time.core.now.call(null);
var inst_21069 = cljs_time.coerce.to_long.call(null,inst_21068);
var inst_21070 = (inst_21069 - inst_21049);
var inst_21071 = (period - inst_21070);
var inst_21072 = [new cljs.core.Keyword(null,"post-record-timeout-length","post-record-timeout-length",-1628456838)];
var inst_21073 = [inst_21071];
var inst_21074 = cljs.core.PersistentHashMap.fromArrays(inst_21072,inst_21073);
var inst_21075 = cljs.core.println.call(null,"POST-RECORD-SLEEP: ",inst_21074);
var inst_21076 = cljs.core.async.timeout.call(null,inst_21071);
var state_21095__$1 = (function (){var statearr_21103 = state_21095;
(statearr_21103[(11)] = inst_21067);

(statearr_21103[(12)] = inst_21075);

return statearr_21103;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21095__$1,(10),inst_21076);
} else {
if((state_val_21096 === (5))){
var inst_21088 = cljs.core.println.call(null,"Shutting down recording");
var inst_21089 = cljs.core.async.close_BANG_.call(null,output_GT_);
var state_21095__$1 = (function (){var statearr_21104 = state_21095;
(statearr_21104[(13)] = inst_21088);

return statearr_21104;
})();
var statearr_21105_21133 = state_21095__$1;
(statearr_21105_21133[(2)] = inst_21089);

(statearr_21105_21133[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21096 === (10))){
var inst_21049 = (state_21095[(10)]);
var inst_21078 = (state_21095[(2)]);
var inst_21079 = [new cljs.core.Keyword(null,"period","period",-352129191),new cljs.core.Keyword(null,"time-in-loop","time-in-loop",1929195691)];
var inst_21080 = cljs_time.core.now.call(null);
var inst_21081 = cljs_time.coerce.to_long.call(null,inst_21080);
var inst_21082 = (inst_21081 - inst_21049);
var inst_21083 = [period,inst_21082];
var inst_21084 = cljs.core.PersistentHashMap.fromArrays(inst_21079,inst_21083);
var inst_21085 = cljs.core.println.call(null,"RECURRING: ",inst_21084);
var state_21095__$1 = (function (){var statearr_21106 = state_21095;
(statearr_21106[(14)] = inst_21085);

(statearr_21106[(15)] = inst_21078);

return statearr_21106;
})();
var statearr_21107_21134 = state_21095__$1;
(statearr_21107_21134[(2)] = null);

(statearr_21107_21134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21096 === (8))){
var inst_21061 = (state_21095[(7)]);
var inst_21064 = (state_21095[(2)]);
var inst_21065 = four_thirty_three_core.protocols.stop.call(null,recorder,inst_21061);
var state_21095__$1 = (function (){var statearr_21108 = state_21095;
(statearr_21108[(16)] = inst_21064);

return statearr_21108;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21095__$1,(9),output_GT_,inst_21065);
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
}
}
});})(c__20671__auto___21128,stop_LT_))
;
return ((function (switch__20650__auto__,c__20671__auto___21128,stop_LT_){
return (function() {
var four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__ = null;
var four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____0 = (function (){
var statearr_21112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21112[(0)] = four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__);

(statearr_21112[(1)] = (1));

return statearr_21112;
});
var four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____1 = (function (state_21095){
while(true){
var ret_value__20652__auto__ = (function (){try{while(true){
var result__20653__auto__ = switch__20650__auto__.call(null,state_21095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20653__auto__;
}
break;
}
}catch (e21113){if((e21113 instanceof Object)){
var ex__20654__auto__ = e21113;
var statearr_21114_21135 = state_21095;
(statearr_21114_21135[(5)] = ex__20654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21136 = state_21095;
state_21095 = G__21136;
continue;
} else {
return ret_value__20652__auto__;
}
break;
}
});
four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__ = function(state_21095){
switch(arguments.length){
case 0:
return four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____0.call(this);
case 1:
return four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____1.call(this,state_21095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__.cljs$core$IFn$_invoke$arity$0 = four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____0;
four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__.cljs$core$IFn$_invoke$arity$1 = four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____1;
return four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__;
})()
;})(switch__20650__auto__,c__20671__auto___21128,stop_LT_))
})();
var state__20673__auto__ = (function (){var statearr_21115 = f__20672__auto__.call(null);
(statearr_21115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20671__auto___21128);

return statearr_21115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20673__auto__);
});})(c__20671__auto___21128,stop_LT_))
);


return ((function (stop_LT_){
return (function (){
var c__20671__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20671__auto__,stop_LT_){
return (function (){
var f__20672__auto__ = (function (){var switch__20650__auto__ = ((function (c__20671__auto__,stop_LT_){
return (function (state_21119){
var state_val_21120 = (state_21119[(1)]);
if((state_val_21120 === (1))){
var state_21119__$1 = state_21119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21119__$1,(2),stop_LT_,true);
} else {
if((state_val_21120 === (2))){
var inst_21117 = (state_21119[(2)]);
var state_21119__$1 = state_21119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21119__$1,inst_21117);
} else {
return null;
}
}
});})(c__20671__auto__,stop_LT_))
;
return ((function (switch__20650__auto__,c__20671__auto__,stop_LT_){
return (function() {
var four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__ = null;
var four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____0 = (function (){
var statearr_21124 = [null,null,null,null,null,null,null];
(statearr_21124[(0)] = four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__);

(statearr_21124[(1)] = (1));

return statearr_21124;
});
var four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____1 = (function (state_21119){
while(true){
var ret_value__20652__auto__ = (function (){try{while(true){
var result__20653__auto__ = switch__20650__auto__.call(null,state_21119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20653__auto__;
}
break;
}
}catch (e21125){if((e21125 instanceof Object)){
var ex__20654__auto__ = e21125;
var statearr_21126_21137 = state_21119;
(statearr_21126_21137[(5)] = ex__20654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21138 = state_21119;
state_21119 = G__21138;
continue;
} else {
return ret_value__20652__auto__;
}
break;
}
});
four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__ = function(state_21119){
switch(arguments.length){
case 0:
return four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____0.call(this);
case 1:
return four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____1.call(this,state_21119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__.cljs$core$IFn$_invoke$arity$0 = four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____0;
four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__.cljs$core$IFn$_invoke$arity$1 = four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____1;
return four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__;
})()
;})(switch__20650__auto__,c__20671__auto__,stop_LT_))
})();
var state__20673__auto__ = (function (){var statearr_21127 = f__20672__auto__.call(null);
(statearr_21127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20671__auto__);

return statearr_21127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20673__auto__);
});})(c__20671__auto__,stop_LT_))
);

return c__20671__auto__;
});
;})(stop_LT_))
});

//# sourceMappingURL=recorder.js.map