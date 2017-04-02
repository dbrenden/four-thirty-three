// Compiled by ClojureScript 1.9.456 {:target :nodejs}
goog.provide('four_thirty_three_core.recorder');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('four_thirty_three_core.protocols');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
four_thirty_three_core.recorder.init_record_loop = (function four_thirty_three_core$recorder$init_record_loop(output_GT_,period,recording_length,recorder){
var stop_LT_ = cljs.core.async.chan.call(null);
var c__20671__auto___21352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20671__auto___21352,stop_LT_){
return (function (){
var f__20672__auto__ = (function (){var switch__20650__auto__ = ((function (c__20671__auto___21352,stop_LT_){
return (function (state_21319){
var state_val_21320 = (state_21319[(1)]);
if((state_val_21320 === (7))){
var inst_21283 = (state_21319[(2)]);
var inst_21284 = cljs.core.PersistentHashMap.EMPTY;
var inst_21285 = four_thirty_three_core.protocols.start.call(null,recorder,inst_21284);
var inst_21286 = cljs.core.async.timeout.call(null,recording_length);
var state_21319__$1 = (function (){var statearr_21321 = state_21319;
(statearr_21321[(7)] = inst_21283);

(statearr_21321[(8)] = inst_21285);

return statearr_21321;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21319__$1,(8),inst_21286);
} else {
if((state_val_21320 === (1))){
var state_21319__$1 = state_21319;
var statearr_21322_21353 = state_21319__$1;
(statearr_21322_21353[(2)] = null);

(statearr_21322_21353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21320 === (4))){
var inst_21272 = cljs_time.core.now.call(null);
var inst_21273 = cljs_time.coerce.to_long.call(null,inst_21272);
var inst_21274 = (period - recording_length);
var inst_21275 = (inst_21274 - (20000));
var inst_21276 = cljs.core.rand_int.call(null,inst_21275);
var inst_21277 = [new cljs.core.Keyword(null,"period","period",-352129191),new cljs.core.Keyword(null,"recording-length","recording-length",-481288742),new cljs.core.Keyword(null,"timeout-length","timeout-length",336740811)];
var inst_21278 = [period,recording_length,inst_21276];
var inst_21279 = cljs.core.PersistentHashMap.fromArrays(inst_21277,inst_21278);
var inst_21280 = cljs.core.println.call(null,"STARTING TIMEOUT: ",inst_21279);
var inst_21281 = cljs.core.async.timeout.call(null,inst_21276);
var state_21319__$1 = (function (){var statearr_21323 = state_21319;
(statearr_21323[(9)] = inst_21273);

(statearr_21323[(10)] = inst_21280);

return statearr_21323;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21319__$1,(7),inst_21281);
} else {
if((state_val_21320 === (6))){
var inst_21315 = (state_21319[(2)]);
var state_21319__$1 = state_21319;
var statearr_21324_21354 = state_21319__$1;
(statearr_21324_21354[(2)] = inst_21315);

(statearr_21324_21354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21320 === (3))){
var inst_21317 = (state_21319[(2)]);
var state_21319__$1 = state_21319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21319__$1,inst_21317);
} else {
if((state_val_21320 === (2))){
var inst_21269 = cljs.core.async.poll_BANG_.call(null,stop_LT_);
var inst_21270 = cljs.core.not.call(null,inst_21269);
var state_21319__$1 = state_21319;
if(inst_21270){
var statearr_21325_21355 = state_21319__$1;
(statearr_21325_21355[(1)] = (4));

} else {
var statearr_21326_21356 = state_21319__$1;
(statearr_21326_21356[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21320 === (9))){
var inst_21273 = (state_21319[(9)]);
var inst_21291 = (state_21319[(2)]);
var inst_21292 = cljs_time.core.now.call(null);
var inst_21293 = cljs_time.coerce.to_long.call(null,inst_21292);
var inst_21294 = (inst_21293 - inst_21273);
var inst_21295 = (period - inst_21294);
var inst_21296 = [new cljs.core.Keyword(null,"post-record-timeout-length","post-record-timeout-length",-1628456838)];
var inst_21297 = [inst_21295];
var inst_21298 = cljs.core.PersistentHashMap.fromArrays(inst_21296,inst_21297);
var inst_21299 = cljs.core.println.call(null,"POST-RECORD-SLEEP: ",inst_21298);
var inst_21300 = cljs.core.async.timeout.call(null,inst_21295);
var state_21319__$1 = (function (){var statearr_21327 = state_21319;
(statearr_21327[(11)] = inst_21291);

(statearr_21327[(12)] = inst_21299);

return statearr_21327;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21319__$1,(10),inst_21300);
} else {
if((state_val_21320 === (5))){
var inst_21312 = cljs.core.println.call(null,"Shutting down recording");
var inst_21313 = cljs.core.async.close_BANG_.call(null,output_GT_);
var state_21319__$1 = (function (){var statearr_21328 = state_21319;
(statearr_21328[(13)] = inst_21312);

return statearr_21328;
})();
var statearr_21329_21357 = state_21319__$1;
(statearr_21329_21357[(2)] = inst_21313);

(statearr_21329_21357[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21320 === (10))){
var inst_21273 = (state_21319[(9)]);
var inst_21302 = (state_21319[(2)]);
var inst_21303 = [new cljs.core.Keyword(null,"period","period",-352129191),new cljs.core.Keyword(null,"time-in-loop","time-in-loop",1929195691)];
var inst_21304 = cljs_time.core.now.call(null);
var inst_21305 = cljs_time.coerce.to_long.call(null,inst_21304);
var inst_21306 = (inst_21305 - inst_21273);
var inst_21307 = [period,inst_21306];
var inst_21308 = cljs.core.PersistentHashMap.fromArrays(inst_21303,inst_21307);
var inst_21309 = cljs.core.println.call(null,"RECURRING: ",inst_21308);
var state_21319__$1 = (function (){var statearr_21330 = state_21319;
(statearr_21330[(14)] = inst_21302);

(statearr_21330[(15)] = inst_21309);

return statearr_21330;
})();
var statearr_21331_21358 = state_21319__$1;
(statearr_21331_21358[(2)] = null);

(statearr_21331_21358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21320 === (8))){
var inst_21285 = (state_21319[(8)]);
var inst_21288 = (state_21319[(2)]);
var inst_21289 = four_thirty_three_core.protocols.stop.call(null,recorder,inst_21285);
var state_21319__$1 = (function (){var statearr_21332 = state_21319;
(statearr_21332[(16)] = inst_21288);

return statearr_21332;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21319__$1,(9),output_GT_,inst_21289);
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
});})(c__20671__auto___21352,stop_LT_))
;
return ((function (switch__20650__auto__,c__20671__auto___21352,stop_LT_){
return (function() {
var four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__ = null;
var four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____0 = (function (){
var statearr_21336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21336[(0)] = four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__);

(statearr_21336[(1)] = (1));

return statearr_21336;
});
var four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____1 = (function (state_21319){
while(true){
var ret_value__20652__auto__ = (function (){try{while(true){
var result__20653__auto__ = switch__20650__auto__.call(null,state_21319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20653__auto__;
}
break;
}
}catch (e21337){if((e21337 instanceof Object)){
var ex__20654__auto__ = e21337;
var statearr_21338_21359 = state_21319;
(statearr_21338_21359[(5)] = ex__20654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21360 = state_21319;
state_21319 = G__21360;
continue;
} else {
return ret_value__20652__auto__;
}
break;
}
});
four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__ = function(state_21319){
switch(arguments.length){
case 0:
return four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____0.call(this);
case 1:
return four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____1.call(this,state_21319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__.cljs$core$IFn$_invoke$arity$0 = four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____0;
four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__.cljs$core$IFn$_invoke$arity$1 = four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____1;
return four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__;
})()
;})(switch__20650__auto__,c__20671__auto___21352,stop_LT_))
})();
var state__20673__auto__ = (function (){var statearr_21339 = f__20672__auto__.call(null);
(statearr_21339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20671__auto___21352);

return statearr_21339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20673__auto__);
});})(c__20671__auto___21352,stop_LT_))
);


return ((function (stop_LT_){
return (function (){
var c__20671__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20671__auto__,stop_LT_){
return (function (){
var f__20672__auto__ = (function (){var switch__20650__auto__ = ((function (c__20671__auto__,stop_LT_){
return (function (state_21343){
var state_val_21344 = (state_21343[(1)]);
if((state_val_21344 === (1))){
var state_21343__$1 = state_21343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21343__$1,(2),stop_LT_,true);
} else {
if((state_val_21344 === (2))){
var inst_21341 = (state_21343[(2)]);
var state_21343__$1 = state_21343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21343__$1,inst_21341);
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
var statearr_21348 = [null,null,null,null,null,null,null];
(statearr_21348[(0)] = four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__);

(statearr_21348[(1)] = (1));

return statearr_21348;
});
var four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____1 = (function (state_21343){
while(true){
var ret_value__20652__auto__ = (function (){try{while(true){
var result__20653__auto__ = switch__20650__auto__.call(null,state_21343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20653__auto__;
}
break;
}
}catch (e21349){if((e21349 instanceof Object)){
var ex__20654__auto__ = e21349;
var statearr_21350_21361 = state_21343;
(statearr_21350_21361[(5)] = ex__20654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21362 = state_21343;
state_21343 = G__21362;
continue;
} else {
return ret_value__20652__auto__;
}
break;
}
});
four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__ = function(state_21343){
switch(arguments.length){
case 0:
return four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____0.call(this);
case 1:
return four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____1.call(this,state_21343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__.cljs$core$IFn$_invoke$arity$0 = four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____0;
four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__.cljs$core$IFn$_invoke$arity$1 = four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto____1;
return four_thirty_three_core$recorder$init_record_loop_$_state_machine__20651__auto__;
})()
;})(switch__20650__auto__,c__20671__auto__,stop_LT_))
})();
var state__20673__auto__ = (function (){var statearr_21351 = f__20672__auto__.call(null);
(statearr_21351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20671__auto__);

return statearr_21351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20673__auto__);
});})(c__20671__auto__,stop_LT_))
);

return c__20671__auto__;
});
;})(stop_LT_))
});

//# sourceMappingURL=recorder.js.map