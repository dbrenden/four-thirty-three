// Compiled by ClojureScript 1.9.456 {:target :nodejs}
goog.provide('four_thirty_three_core.recorder');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('four_thirty_three_core.protocols');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
four_thirty_three_core.recorder.init_record_loop = (function four_thirty_three_core$recorder$init_record_loop(period,recording_length,recorder,output_GT_){
var stop_LT_ = cljs.core.async.chan.call(null);
var c__20671__auto___20921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20671__auto___20921,stop_LT_){
return (function (){
var f__20672__auto__ = (function (){var switch__20650__auto__ = ((function (c__20671__auto___20921,stop_LT_){
return (function (state_20888){
var state_val_20889 = (state_20888[(1)]);
if((state_val_20889 === (7))){
var inst_20852 = (state_20888[(2)]);
var inst_20853 = cljs.core.PersistentHashMap.EMPTY;
var inst_20854 = four_thirty_three_core.protocols.start.call(null,recorder,inst_20853);
var inst_20855 = cljs.core.async.timeout.call(null,recording_length);
var state_20888__$1 = (function (){var statearr_20890 = state_20888;
(statearr_20890[(7)] = inst_20854);

(statearr_20890[(8)] = inst_20852);

return statearr_20890;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20888__$1,(8),inst_20855);
} else {
if((state_val_20889 === (1))){
var state_20888__$1 = state_20888;
var statearr_20891_20922 = state_20888__$1;
(statearr_20891_20922[(2)] = null);

(statearr_20891_20922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20889 === (4))){
var inst_20841 = cljs_time.core.now.call(null);
var inst_20842 = cljs_time.coerce.to_long.call(null,inst_20841);
var inst_20843 = (period - recording_length);
var inst_20844 = (inst_20843 - (20000));
var inst_20845 = cljs.core.rand_int.call(null,inst_20844);
var inst_20846 = [new cljs.core.Keyword(null,"period","period",-352129191),new cljs.core.Keyword(null,"recording-length","recording-length",-481288742),new cljs.core.Keyword(null,"timeout-length","timeout-length",336740811)];
var inst_20847 = [period,recording_length,inst_20845];
var inst_20848 = cljs.core.PersistentHashMap.fromArrays(inst_20846,inst_20847);
var inst_20849 = cljs.core.println.call(null,"STARTING TIMEOUT: ",inst_20848);
var inst_20850 = cljs.core.async.timeout.call(null,inst_20845);
var state_20888__$1 = (function (){var statearr_20892 = state_20888;
(statearr_20892[(9)] = inst_20842);

(statearr_20892[(10)] = inst_20849);

return statearr_20892;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20888__$1,(7),inst_20850);
} else {
if((state_val_20889 === (6))){
var inst_20884 = (state_20888[(2)]);
var state_20888__$1 = state_20888;
var statearr_20893_20923 = state_20888__$1;
(statearr_20893_20923[(2)] = inst_20884);

(statearr_20893_20923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20889 === (3))){
var inst_20886 = (state_20888[(2)]);
var state_20888__$1 = state_20888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20888__$1,inst_20886);
} else {
if((state_val_20889 === (2))){
var inst_20838 = cljs.core.async.poll_BANG_.call(null,stop_LT_);
var inst_20839 = cljs.core.not.call(null,inst_20838);
var state_20888__$1 = state_20888;
if(inst_20839){
var statearr_20894_20924 = state_20888__$1;
(statearr_20894_20924[(1)] = (4));

} else {
var statearr_20895_20925 = state_20888__$1;
(statearr_20895_20925[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20889 === (9))){
var inst_20842 = (state_20888[(9)]);
var inst_20860 = (state_20888[(2)]);
var inst_20861 = cljs_time.core.now.call(null);
var inst_20862 = cljs_time.coerce.to_long.call(null,inst_20861);
var inst_20863 = (inst_20862 - inst_20842);
var inst_20864 = (period - inst_20863);
var inst_20865 = [new cljs.core.Keyword(null,"post-record-timeout-length","post-record-timeout-length",-1628456838)];
var inst_20866 = [inst_20864];
var inst_20867 = cljs.core.PersistentHashMap.fromArrays(inst_20865,inst_20866);
var inst_20868 = cljs.core.println.call(null,"POST-RECORD-SLEEP: ",inst_20867);
var inst_20869 = cljs.core.async.timeout.call(null,inst_20864);
var state_20888__$1 = (function (){var statearr_20896 = state_20888;
(statearr_20896[(11)] = inst_20860);

(statearr_20896[(12)] = inst_20868);

return statearr_20896;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20888__$1,(10),inst_20869);
} else {
if((state_val_20889 === (5))){
var inst_20881 = cljs.core.println.call(null,"Shutting down recording");
var inst_20882 = cljs.core.async.close_BANG_.call(null,output_GT_);
var state_20888__$1 = (function (){var statearr_20897 = state_20888;
(statearr_20897[(13)] = inst_20881);

return statearr_20897;
})();
var statearr_20898_20926 = state_20888__$1;
(statearr_20898_20926[(2)] = inst_20882);

(statearr_20898_20926[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20889 === (10))){
var inst_20842 = (state_20888[(9)]);
var inst_20871 = (state_20888[(2)]);
var inst_20872 = [new cljs.core.Keyword(null,"period","period",-352129191),new cljs.core.Keyword(null,"time-in-loop","time-in-loop",1929195691)];
var inst_20873 = cljs_time.core.now.call(null);
var inst_20874 = cljs_time.coerce.to_long.call(null,inst_20873);
var inst_20875 = (inst_20874 - inst_20842);
var inst_20876 = [period,inst_20875];
var inst_20877 = cljs.core.PersistentHashMap.fromArrays(inst_20872,inst_20876);
var inst_20878 = cljs.core.println.call(null,"RECURRING: ",inst_20877);
var state_20888__$1 = (function (){var statearr_20899 = state_20888;
(statearr_20899[(14)] = inst_20871);

(statearr_20899[(15)] = inst_20878);

return statearr_20899;
})();
var statearr_20900_20927 = state_20888__$1;
(statearr_20900_20927[(2)] = null);

(statearr_20900_20927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20889 === (8))){
var inst_20854 = (state_20888[(7)]);
var inst_20857 = (state_20888[(2)]);
var inst_20858 = four_thirty_three_core.protocols.stop.call(null,recorder,inst_20854);
var state_20888__$1 = (function (){var statearr_20901 = state_20888;
(statearr_20901[(16)] = inst_20857);

return statearr_20901;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20888__$1,(9),output_GT_,inst_20858);
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
});})(c__20671__auto___20921,stop_LT_))
;
return ((function (switch__20650__auto__,c__20671__auto___20921,stop_LT_){
return (function() {
var four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__ = null;
var four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____0 = (function (){
var statearr_20905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20905[(0)] = four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__);

(statearr_20905[(1)] = (1));

return statearr_20905;
});
var four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____1 = (function (state_20888){
while(true){
var ret_value__20652__auto__ = (function (){try{while(true){
var result__20653__auto__ = switch__20650__auto__.call(null,state_20888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20653__auto__;
}
break;
}
}catch (e20906){if((e20906 instanceof Object)){
var ex__20654__auto__ = e20906;
var statearr_20907_20928 = state_20888;
(statearr_20907_20928[(5)] = ex__20654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20929 = state_20888;
state_20888 = G__20929;
continue;
} else {
return ret_value__20652__auto__;
}
break;
}
});
four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__ = function(state_20888){
switch(arguments.length){
case 0:
return four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____0.call(this);
case 1:
return four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____1.call(this,state_20888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__.cljs$core$IFn$_invoke$arity$0 = four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____0;
four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__.cljs$core$IFn$_invoke$arity$1 = four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____1;
return four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__;
})()
;})(switch__20650__auto__,c__20671__auto___20921,stop_LT_))
})();
var state__20673__auto__ = (function (){var statearr_20908 = f__20672__auto__.call(null);
(statearr_20908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20671__auto___20921);

return statearr_20908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20673__auto__);
});})(c__20671__auto___20921,stop_LT_))
);


return ((function (stop_LT_){
return (function (){
var c__20671__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20671__auto__,stop_LT_){
return (function (){
var f__20672__auto__ = (function (){var switch__20650__auto__ = ((function (c__20671__auto__,stop_LT_){
return (function (state_20912){
var state_val_20913 = (state_20912[(1)]);
if((state_val_20913 === (1))){
var state_20912__$1 = state_20912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20912__$1,(2),stop_LT_,true);
} else {
if((state_val_20913 === (2))){
var inst_20910 = (state_20912[(2)]);
var state_20912__$1 = state_20912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20912__$1,inst_20910);
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
var statearr_20917 = [null,null,null,null,null,null,null];
(statearr_20917[(0)] = four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__);

(statearr_20917[(1)] = (1));

return statearr_20917;
});
var four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____1 = (function (state_20912){
while(true){
var ret_value__20652__auto__ = (function (){try{while(true){
var result__20653__auto__ = switch__20650__auto__.call(null,state_20912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20653__auto__;
}
break;
}
}catch (e20918){if((e20918 instanceof Object)){
var ex__20654__auto__ = e20918;
var statearr_20919_20930 = state_20912;
(statearr_20919_20930[(5)] = ex__20654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20931 = state_20912;
state_20912 = G__20931;
continue;
} else {
return ret_value__20652__auto__;
}
break;
}
});
four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__ = function(state_20912){
switch(arguments.length){
case 0:
return four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____0.call(this);
case 1:
return four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____1.call(this,state_20912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__.cljs$core$IFn$_invoke$arity$0 = four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____0;
four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__.cljs$core$IFn$_invoke$arity$1 = four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____1;
return four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__;
})()
;})(switch__20650__auto__,c__20671__auto__,stop_LT_))
})();
var state__20673__auto__ = (function (){var statearr_20920 = f__20672__auto__.call(null);
(statearr_20920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20671__auto__);

return statearr_20920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20673__auto__);
});})(c__20671__auto__,stop_LT_))
);

return c__20671__auto__;
});
;})(stop_LT_))
});

//# sourceMappingURL=recorder.js.map