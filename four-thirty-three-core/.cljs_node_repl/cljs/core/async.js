// Compiled by ClojureScript 1.9.456 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27932 = [];
var len__19074__auto___27938 = arguments.length;
var i__19075__auto___27939 = (0);
while(true){
if((i__19075__auto___27939 < len__19074__auto___27938)){
args27932.push((arguments[i__19075__auto___27939]));

var G__27940 = (i__19075__auto___27939 + (1));
i__19075__auto___27939 = G__27940;
continue;
} else {
}
break;
}

var G__27934 = args27932.length;
switch (G__27934) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27932.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27935 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27935 = (function (f,blockable,meta27936){
this.f = f;
this.blockable = blockable;
this.meta27936 = meta27936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27937,meta27936__$1){
var self__ = this;
var _27937__$1 = this;
return (new cljs.core.async.t_cljs$core$async27935(self__.f,self__.blockable,meta27936__$1));
});

cljs.core.async.t_cljs$core$async27935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27937){
var self__ = this;
var _27937__$1 = this;
return self__.meta27936;
});

cljs.core.async.t_cljs$core$async27935.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27935.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27935.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27935.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27935.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27936","meta27936",1520000331,null)], null);
});

cljs.core.async.t_cljs$core$async27935.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27935.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27935";

cljs.core.async.t_cljs$core$async27935.cljs$lang$ctorPrWriter = (function (this__18572__auto__,writer__18573__auto__,opt__18574__auto__){
return cljs.core._write.call(null,writer__18573__auto__,"cljs.core.async/t_cljs$core$async27935");
});

cljs.core.async.__GT_t_cljs$core$async27935 = (function cljs$core$async$__GT_t_cljs$core$async27935(f__$1,blockable__$1,meta27936){
return (new cljs.core.async.t_cljs$core$async27935(f__$1,blockable__$1,meta27936));
});

}

return (new cljs.core.async.t_cljs$core$async27935(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27944 = [];
var len__19074__auto___27947 = arguments.length;
var i__19075__auto___27948 = (0);
while(true){
if((i__19075__auto___27948 < len__19074__auto___27947)){
args27944.push((arguments[i__19075__auto___27948]));

var G__27949 = (i__19075__auto___27948 + (1));
i__19075__auto___27948 = G__27949;
continue;
} else {
}
break;
}

var G__27946 = args27944.length;
switch (G__27946) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27944.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27951 = [];
var len__19074__auto___27954 = arguments.length;
var i__19075__auto___27955 = (0);
while(true){
if((i__19075__auto___27955 < len__19074__auto___27954)){
args27951.push((arguments[i__19075__auto___27955]));

var G__27956 = (i__19075__auto___27955 + (1));
i__19075__auto___27955 = G__27956;
continue;
} else {
}
break;
}

var G__27953 = args27951.length;
switch (G__27953) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27951.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27958 = [];
var len__19074__auto___27961 = arguments.length;
var i__19075__auto___27962 = (0);
while(true){
if((i__19075__auto___27962 < len__19074__auto___27961)){
args27958.push((arguments[i__19075__auto___27962]));

var G__27963 = (i__19075__auto___27962 + (1));
i__19075__auto___27962 = G__27963;
continue;
} else {
}
break;
}

var G__27960 = args27958.length;
switch (G__27960) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27958.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27965 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27965);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27965,ret){
return (function (){
return fn1.call(null,val_27965);
});})(val_27965,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27966 = [];
var len__19074__auto___27969 = arguments.length;
var i__19075__auto___27970 = (0);
while(true){
if((i__19075__auto___27970 < len__19074__auto___27969)){
args27966.push((arguments[i__19075__auto___27970]));

var G__27971 = (i__19075__auto___27970 + (1));
i__19075__auto___27970 = G__27971;
continue;
} else {
}
break;
}

var G__27968 = args27966.length;
switch (G__27968) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args27966.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__18884__auto___27973 = n;
var x_27974 = (0);
while(true){
if((x_27974 < n__18884__auto___27973)){
(a[x_27974] = (0));

var G__27975 = (x_27974 + (1));
x_27974 = G__27975;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27976 = (i + (1));
i = G__27976;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27980 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27980 = (function (flag,meta27981){
this.flag = flag;
this.meta27981 = meta27981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27982,meta27981__$1){
var self__ = this;
var _27982__$1 = this;
return (new cljs.core.async.t_cljs$core$async27980(self__.flag,meta27981__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27980.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27982){
var self__ = this;
var _27982__$1 = this;
return self__.meta27981;
});})(flag))
;

cljs.core.async.t_cljs$core$async27980.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27980.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27980.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27980.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27980.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27981","meta27981",-1906156765,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27980.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27980.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27980";

cljs.core.async.t_cljs$core$async27980.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18572__auto__,writer__18573__auto__,opt__18574__auto__){
return cljs.core._write.call(null,writer__18573__auto__,"cljs.core.async/t_cljs$core$async27980");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27980 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27980(flag__$1,meta27981){
return (new cljs.core.async.t_cljs$core$async27980(flag__$1,meta27981));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27980(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27986 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27986 = (function (flag,cb,meta27987){
this.flag = flag;
this.cb = cb;
this.meta27987 = meta27987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27988,meta27987__$1){
var self__ = this;
var _27988__$1 = this;
return (new cljs.core.async.t_cljs$core$async27986(self__.flag,self__.cb,meta27987__$1));
});

cljs.core.async.t_cljs$core$async27986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27988){
var self__ = this;
var _27988__$1 = this;
return self__.meta27987;
});

cljs.core.async.t_cljs$core$async27986.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27986.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27986.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27986.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27986.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27987","meta27987",-1465930965,null)], null);
});

cljs.core.async.t_cljs$core$async27986.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27986.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27986";

cljs.core.async.t_cljs$core$async27986.cljs$lang$ctorPrWriter = (function (this__18572__auto__,writer__18573__auto__,opt__18574__auto__){
return cljs.core._write.call(null,writer__18573__auto__,"cljs.core.async/t_cljs$core$async27986");
});

cljs.core.async.__GT_t_cljs$core$async27986 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27986(flag__$1,cb__$1,meta27987){
return (new cljs.core.async.t_cljs$core$async27986(flag__$1,cb__$1,meta27987));
});

}

return (new cljs.core.async.t_cljs$core$async27986(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27989_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27989_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27990_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27990_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__17961__auto__ = wport;
if(cljs.core.truth_(or__17961__auto__)){
return or__17961__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27991 = (i + (1));
i = G__27991;
continue;
}
} else {
return null;
}
break;
}
})();
var or__17961__auto__ = ret;
if(cljs.core.truth_(or__17961__auto__)){
return or__17961__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__17949__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__17949__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__17949__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19081__auto__ = [];
var len__19074__auto___27997 = arguments.length;
var i__19075__auto___27998 = (0);
while(true){
if((i__19075__auto___27998 < len__19074__auto___27997)){
args__19081__auto__.push((arguments[i__19075__auto___27998]));

var G__27999 = (i__19075__auto___27998 + (1));
i__19075__auto___27998 = G__27999;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((1) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19082__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27994){
var map__27995 = p__27994;
var map__27995__$1 = ((((!((map__27995 == null)))?((((map__27995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27995.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27995):map__27995);
var opts = map__27995__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27992){
var G__27993 = cljs.core.first.call(null,seq27992);
var seq27992__$1 = cljs.core.next.call(null,seq27992);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27993,seq27992__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28000 = [];
var len__19074__auto___28050 = arguments.length;
var i__19075__auto___28051 = (0);
while(true){
if((i__19075__auto___28051 < len__19074__auto___28050)){
args28000.push((arguments[i__19075__auto___28051]));

var G__28052 = (i__19075__auto___28051 + (1));
i__19075__auto___28051 = G__28052;
continue;
} else {
}
break;
}

var G__28002 = args28000.length;
switch (G__28002) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28000.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23265__auto___28054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23265__auto___28054){
return (function (){
var f__23266__auto__ = (function (){var switch__23209__auto__ = ((function (c__23265__auto___28054){
return (function (state_28026){
var state_val_28027 = (state_28026[(1)]);
if((state_val_28027 === (7))){
var inst_28022 = (state_28026[(2)]);
var state_28026__$1 = state_28026;
var statearr_28028_28055 = state_28026__$1;
(statearr_28028_28055[(2)] = inst_28022);

(statearr_28028_28055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28027 === (1))){
var state_28026__$1 = state_28026;
var statearr_28029_28056 = state_28026__$1;
(statearr_28029_28056[(2)] = null);

(statearr_28029_28056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28027 === (4))){
var inst_28005 = (state_28026[(7)]);
var inst_28005__$1 = (state_28026[(2)]);
var inst_28006 = (inst_28005__$1 == null);
var state_28026__$1 = (function (){var statearr_28030 = state_28026;
(statearr_28030[(7)] = inst_28005__$1);

return statearr_28030;
})();
if(cljs.core.truth_(inst_28006)){
var statearr_28031_28057 = state_28026__$1;
(statearr_28031_28057[(1)] = (5));

} else {
var statearr_28032_28058 = state_28026__$1;
(statearr_28032_28058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28027 === (13))){
var state_28026__$1 = state_28026;
var statearr_28033_28059 = state_28026__$1;
(statearr_28033_28059[(2)] = null);

(statearr_28033_28059[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28027 === (6))){
var inst_28005 = (state_28026[(7)]);
var state_28026__$1 = state_28026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28026__$1,(11),to,inst_28005);
} else {
if((state_val_28027 === (3))){
var inst_28024 = (state_28026[(2)]);
var state_28026__$1 = state_28026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28026__$1,inst_28024);
} else {
if((state_val_28027 === (12))){
var state_28026__$1 = state_28026;
var statearr_28034_28060 = state_28026__$1;
(statearr_28034_28060[(2)] = null);

(statearr_28034_28060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28027 === (2))){
var state_28026__$1 = state_28026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28026__$1,(4),from);
} else {
if((state_val_28027 === (11))){
var inst_28015 = (state_28026[(2)]);
var state_28026__$1 = state_28026;
if(cljs.core.truth_(inst_28015)){
var statearr_28035_28061 = state_28026__$1;
(statearr_28035_28061[(1)] = (12));

} else {
var statearr_28036_28062 = state_28026__$1;
(statearr_28036_28062[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28027 === (9))){
var state_28026__$1 = state_28026;
var statearr_28037_28063 = state_28026__$1;
(statearr_28037_28063[(2)] = null);

(statearr_28037_28063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28027 === (5))){
var state_28026__$1 = state_28026;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28038_28064 = state_28026__$1;
(statearr_28038_28064[(1)] = (8));

} else {
var statearr_28039_28065 = state_28026__$1;
(statearr_28039_28065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28027 === (14))){
var inst_28020 = (state_28026[(2)]);
var state_28026__$1 = state_28026;
var statearr_28040_28066 = state_28026__$1;
(statearr_28040_28066[(2)] = inst_28020);

(statearr_28040_28066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28027 === (10))){
var inst_28012 = (state_28026[(2)]);
var state_28026__$1 = state_28026;
var statearr_28041_28067 = state_28026__$1;
(statearr_28041_28067[(2)] = inst_28012);

(statearr_28041_28067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28027 === (8))){
var inst_28009 = cljs.core.async.close_BANG_.call(null,to);
var state_28026__$1 = state_28026;
var statearr_28042_28068 = state_28026__$1;
(statearr_28042_28068[(2)] = inst_28009);

(statearr_28042_28068[(1)] = (10));


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
}
}
}
}
}
}
});})(c__23265__auto___28054))
;
return ((function (switch__23209__auto__,c__23265__auto___28054){
return (function() {
var cljs$core$async$state_machine__23210__auto__ = null;
var cljs$core$async$state_machine__23210__auto____0 = (function (){
var statearr_28046 = [null,null,null,null,null,null,null,null];
(statearr_28046[(0)] = cljs$core$async$state_machine__23210__auto__);

(statearr_28046[(1)] = (1));

return statearr_28046;
});
var cljs$core$async$state_machine__23210__auto____1 = (function (state_28026){
while(true){
var ret_value__23211__auto__ = (function (){try{while(true){
var result__23212__auto__ = switch__23209__auto__.call(null,state_28026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23212__auto__;
}
break;
}
}catch (e28047){if((e28047 instanceof Object)){
var ex__23213__auto__ = e28047;
var statearr_28048_28069 = state_28026;
(statearr_28048_28069[(5)] = ex__23213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28070 = state_28026;
state_28026 = G__28070;
continue;
} else {
return ret_value__23211__auto__;
}
break;
}
});
cljs$core$async$state_machine__23210__auto__ = function(state_28026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23210__auto____1.call(this,state_28026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23210__auto____0;
cljs$core$async$state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23210__auto____1;
return cljs$core$async$state_machine__23210__auto__;
})()
;})(switch__23209__auto__,c__23265__auto___28054))
})();
var state__23267__auto__ = (function (){var statearr_28049 = f__23266__auto__.call(null);
(statearr_28049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23265__auto___28054);

return statearr_28049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23267__auto__);
});})(c__23265__auto___28054))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28258){
var vec__28259 = p__28258;
var v = cljs.core.nth.call(null,vec__28259,(0),null);
var p = cljs.core.nth.call(null,vec__28259,(1),null);
var job = vec__28259;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23265__auto___28445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23265__auto___28445,res,vec__28259,v,p,job,jobs,results){
return (function (){
var f__23266__auto__ = (function (){var switch__23209__auto__ = ((function (c__23265__auto___28445,res,vec__28259,v,p,job,jobs,results){
return (function (state_28266){
var state_val_28267 = (state_28266[(1)]);
if((state_val_28267 === (1))){
var state_28266__$1 = state_28266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28266__$1,(2),res,v);
} else {
if((state_val_28267 === (2))){
var inst_28263 = (state_28266[(2)]);
var inst_28264 = cljs.core.async.close_BANG_.call(null,res);
var state_28266__$1 = (function (){var statearr_28268 = state_28266;
(statearr_28268[(7)] = inst_28263);

return statearr_28268;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28266__$1,inst_28264);
} else {
return null;
}
}
});})(c__23265__auto___28445,res,vec__28259,v,p,job,jobs,results))
;
return ((function (switch__23209__auto__,c__23265__auto___28445,res,vec__28259,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____0 = (function (){
var statearr_28272 = [null,null,null,null,null,null,null,null];
(statearr_28272[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__);

(statearr_28272[(1)] = (1));

return statearr_28272;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____1 = (function (state_28266){
while(true){
var ret_value__23211__auto__ = (function (){try{while(true){
var result__23212__auto__ = switch__23209__auto__.call(null,state_28266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23212__auto__;
}
break;
}
}catch (e28273){if((e28273 instanceof Object)){
var ex__23213__auto__ = e28273;
var statearr_28274_28446 = state_28266;
(statearr_28274_28446[(5)] = ex__23213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28447 = state_28266;
state_28266 = G__28447;
continue;
} else {
return ret_value__23211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__ = function(state_28266){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____1.call(this,state_28266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__;
})()
;})(switch__23209__auto__,c__23265__auto___28445,res,vec__28259,v,p,job,jobs,results))
})();
var state__23267__auto__ = (function (){var statearr_28275 = f__23266__auto__.call(null);
(statearr_28275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23265__auto___28445);

return statearr_28275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23267__auto__);
});})(c__23265__auto___28445,res,vec__28259,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28276){
var vec__28277 = p__28276;
var v = cljs.core.nth.call(null,vec__28277,(0),null);
var p = cljs.core.nth.call(null,vec__28277,(1),null);
var job = vec__28277;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__18884__auto___28448 = n;
var __28449 = (0);
while(true){
if((__28449 < n__18884__auto___28448)){
var G__28280_28450 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28280_28450) {
case "compute":
var c__23265__auto___28452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28449,c__23265__auto___28452,G__28280_28450,n__18884__auto___28448,jobs,results,process,async){
return (function (){
var f__23266__auto__ = (function (){var switch__23209__auto__ = ((function (__28449,c__23265__auto___28452,G__28280_28450,n__18884__auto___28448,jobs,results,process,async){
return (function (state_28293){
var state_val_28294 = (state_28293[(1)]);
if((state_val_28294 === (1))){
var state_28293__$1 = state_28293;
var statearr_28295_28453 = state_28293__$1;
(statearr_28295_28453[(2)] = null);

(statearr_28295_28453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (2))){
var state_28293__$1 = state_28293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28293__$1,(4),jobs);
} else {
if((state_val_28294 === (3))){
var inst_28291 = (state_28293[(2)]);
var state_28293__$1 = state_28293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28293__$1,inst_28291);
} else {
if((state_val_28294 === (4))){
var inst_28283 = (state_28293[(2)]);
var inst_28284 = process.call(null,inst_28283);
var state_28293__$1 = state_28293;
if(cljs.core.truth_(inst_28284)){
var statearr_28296_28454 = state_28293__$1;
(statearr_28296_28454[(1)] = (5));

} else {
var statearr_28297_28455 = state_28293__$1;
(statearr_28297_28455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (5))){
var state_28293__$1 = state_28293;
var statearr_28298_28456 = state_28293__$1;
(statearr_28298_28456[(2)] = null);

(statearr_28298_28456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (6))){
var state_28293__$1 = state_28293;
var statearr_28299_28457 = state_28293__$1;
(statearr_28299_28457[(2)] = null);

(statearr_28299_28457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (7))){
var inst_28289 = (state_28293[(2)]);
var state_28293__$1 = state_28293;
var statearr_28300_28458 = state_28293__$1;
(statearr_28300_28458[(2)] = inst_28289);

(statearr_28300_28458[(1)] = (3));


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
});})(__28449,c__23265__auto___28452,G__28280_28450,n__18884__auto___28448,jobs,results,process,async))
;
return ((function (__28449,switch__23209__auto__,c__23265__auto___28452,G__28280_28450,n__18884__auto___28448,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____0 = (function (){
var statearr_28304 = [null,null,null,null,null,null,null];
(statearr_28304[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__);

(statearr_28304[(1)] = (1));

return statearr_28304;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____1 = (function (state_28293){
while(true){
var ret_value__23211__auto__ = (function (){try{while(true){
var result__23212__auto__ = switch__23209__auto__.call(null,state_28293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23212__auto__;
}
break;
}
}catch (e28305){if((e28305 instanceof Object)){
var ex__23213__auto__ = e28305;
var statearr_28306_28459 = state_28293;
(statearr_28306_28459[(5)] = ex__23213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28460 = state_28293;
state_28293 = G__28460;
continue;
} else {
return ret_value__23211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__ = function(state_28293){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____1.call(this,state_28293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__;
})()
;})(__28449,switch__23209__auto__,c__23265__auto___28452,G__28280_28450,n__18884__auto___28448,jobs,results,process,async))
})();
var state__23267__auto__ = (function (){var statearr_28307 = f__23266__auto__.call(null);
(statearr_28307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23265__auto___28452);

return statearr_28307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23267__auto__);
});})(__28449,c__23265__auto___28452,G__28280_28450,n__18884__auto___28448,jobs,results,process,async))
);


break;
case "async":
var c__23265__auto___28461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28449,c__23265__auto___28461,G__28280_28450,n__18884__auto___28448,jobs,results,process,async){
return (function (){
var f__23266__auto__ = (function (){var switch__23209__auto__ = ((function (__28449,c__23265__auto___28461,G__28280_28450,n__18884__auto___28448,jobs,results,process,async){
return (function (state_28320){
var state_val_28321 = (state_28320[(1)]);
if((state_val_28321 === (1))){
var state_28320__$1 = state_28320;
var statearr_28322_28462 = state_28320__$1;
(statearr_28322_28462[(2)] = null);

(statearr_28322_28462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (2))){
var state_28320__$1 = state_28320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28320__$1,(4),jobs);
} else {
if((state_val_28321 === (3))){
var inst_28318 = (state_28320[(2)]);
var state_28320__$1 = state_28320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28320__$1,inst_28318);
} else {
if((state_val_28321 === (4))){
var inst_28310 = (state_28320[(2)]);
var inst_28311 = async.call(null,inst_28310);
var state_28320__$1 = state_28320;
if(cljs.core.truth_(inst_28311)){
var statearr_28323_28463 = state_28320__$1;
(statearr_28323_28463[(1)] = (5));

} else {
var statearr_28324_28464 = state_28320__$1;
(statearr_28324_28464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (5))){
var state_28320__$1 = state_28320;
var statearr_28325_28465 = state_28320__$1;
(statearr_28325_28465[(2)] = null);

(statearr_28325_28465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (6))){
var state_28320__$1 = state_28320;
var statearr_28326_28466 = state_28320__$1;
(statearr_28326_28466[(2)] = null);

(statearr_28326_28466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (7))){
var inst_28316 = (state_28320[(2)]);
var state_28320__$1 = state_28320;
var statearr_28327_28467 = state_28320__$1;
(statearr_28327_28467[(2)] = inst_28316);

(statearr_28327_28467[(1)] = (3));


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
});})(__28449,c__23265__auto___28461,G__28280_28450,n__18884__auto___28448,jobs,results,process,async))
;
return ((function (__28449,switch__23209__auto__,c__23265__auto___28461,G__28280_28450,n__18884__auto___28448,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____0 = (function (){
var statearr_28331 = [null,null,null,null,null,null,null];
(statearr_28331[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__);

(statearr_28331[(1)] = (1));

return statearr_28331;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____1 = (function (state_28320){
while(true){
var ret_value__23211__auto__ = (function (){try{while(true){
var result__23212__auto__ = switch__23209__auto__.call(null,state_28320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23212__auto__;
}
break;
}
}catch (e28332){if((e28332 instanceof Object)){
var ex__23213__auto__ = e28332;
var statearr_28333_28468 = state_28320;
(statearr_28333_28468[(5)] = ex__23213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28469 = state_28320;
state_28320 = G__28469;
continue;
} else {
return ret_value__23211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__ = function(state_28320){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____1.call(this,state_28320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__;
})()
;})(__28449,switch__23209__auto__,c__23265__auto___28461,G__28280_28450,n__18884__auto___28448,jobs,results,process,async))
})();
var state__23267__auto__ = (function (){var statearr_28334 = f__23266__auto__.call(null);
(statearr_28334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23265__auto___28461);

return statearr_28334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23267__auto__);
});})(__28449,c__23265__auto___28461,G__28280_28450,n__18884__auto___28448,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__28470 = (__28449 + (1));
__28449 = G__28470;
continue;
} else {
}
break;
}

var c__23265__auto___28471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23265__auto___28471,jobs,results,process,async){
return (function (){
var f__23266__auto__ = (function (){var switch__23209__auto__ = ((function (c__23265__auto___28471,jobs,results,process,async){
return (function (state_28356){
var state_val_28357 = (state_28356[(1)]);
if((state_val_28357 === (1))){
var state_28356__$1 = state_28356;
var statearr_28358_28472 = state_28356__$1;
(statearr_28358_28472[(2)] = null);

(statearr_28358_28472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28357 === (2))){
var state_28356__$1 = state_28356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28356__$1,(4),from);
} else {
if((state_val_28357 === (3))){
var inst_28354 = (state_28356[(2)]);
var state_28356__$1 = state_28356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28356__$1,inst_28354);
} else {
if((state_val_28357 === (4))){
var inst_28337 = (state_28356[(7)]);
var inst_28337__$1 = (state_28356[(2)]);
var inst_28338 = (inst_28337__$1 == null);
var state_28356__$1 = (function (){var statearr_28359 = state_28356;
(statearr_28359[(7)] = inst_28337__$1);

return statearr_28359;
})();
if(cljs.core.truth_(inst_28338)){
var statearr_28360_28473 = state_28356__$1;
(statearr_28360_28473[(1)] = (5));

} else {
var statearr_28361_28474 = state_28356__$1;
(statearr_28361_28474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28357 === (5))){
var inst_28340 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28356__$1 = state_28356;
var statearr_28362_28475 = state_28356__$1;
(statearr_28362_28475[(2)] = inst_28340);

(statearr_28362_28475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28357 === (6))){
var inst_28342 = (state_28356[(8)]);
var inst_28337 = (state_28356[(7)]);
var inst_28342__$1 = cljs.core.async.chan.call(null,(1));
var inst_28343 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28344 = [inst_28337,inst_28342__$1];
var inst_28345 = (new cljs.core.PersistentVector(null,2,(5),inst_28343,inst_28344,null));
var state_28356__$1 = (function (){var statearr_28363 = state_28356;
(statearr_28363[(8)] = inst_28342__$1);

return statearr_28363;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28356__$1,(8),jobs,inst_28345);
} else {
if((state_val_28357 === (7))){
var inst_28352 = (state_28356[(2)]);
var state_28356__$1 = state_28356;
var statearr_28364_28476 = state_28356__$1;
(statearr_28364_28476[(2)] = inst_28352);

(statearr_28364_28476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28357 === (8))){
var inst_28342 = (state_28356[(8)]);
var inst_28347 = (state_28356[(2)]);
var state_28356__$1 = (function (){var statearr_28365 = state_28356;
(statearr_28365[(9)] = inst_28347);

return statearr_28365;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28356__$1,(9),results,inst_28342);
} else {
if((state_val_28357 === (9))){
var inst_28349 = (state_28356[(2)]);
var state_28356__$1 = (function (){var statearr_28366 = state_28356;
(statearr_28366[(10)] = inst_28349);

return statearr_28366;
})();
var statearr_28367_28477 = state_28356__$1;
(statearr_28367_28477[(2)] = null);

(statearr_28367_28477[(1)] = (2));


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
}
});})(c__23265__auto___28471,jobs,results,process,async))
;
return ((function (switch__23209__auto__,c__23265__auto___28471,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____0 = (function (){
var statearr_28371 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28371[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__);

(statearr_28371[(1)] = (1));

return statearr_28371;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____1 = (function (state_28356){
while(true){
var ret_value__23211__auto__ = (function (){try{while(true){
var result__23212__auto__ = switch__23209__auto__.call(null,state_28356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23212__auto__;
}
break;
}
}catch (e28372){if((e28372 instanceof Object)){
var ex__23213__auto__ = e28372;
var statearr_28373_28478 = state_28356;
(statearr_28373_28478[(5)] = ex__23213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28479 = state_28356;
state_28356 = G__28479;
continue;
} else {
return ret_value__23211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__ = function(state_28356){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____1.call(this,state_28356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__;
})()
;})(switch__23209__auto__,c__23265__auto___28471,jobs,results,process,async))
})();
var state__23267__auto__ = (function (){var statearr_28374 = f__23266__auto__.call(null);
(statearr_28374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23265__auto___28471);

return statearr_28374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23267__auto__);
});})(c__23265__auto___28471,jobs,results,process,async))
);


var c__23265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23265__auto__,jobs,results,process,async){
return (function (){
var f__23266__auto__ = (function (){var switch__23209__auto__ = ((function (c__23265__auto__,jobs,results,process,async){
return (function (state_28412){
var state_val_28413 = (state_28412[(1)]);
if((state_val_28413 === (7))){
var inst_28408 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
var statearr_28414_28480 = state_28412__$1;
(statearr_28414_28480[(2)] = inst_28408);

(statearr_28414_28480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (20))){
var state_28412__$1 = state_28412;
var statearr_28415_28481 = state_28412__$1;
(statearr_28415_28481[(2)] = null);

(statearr_28415_28481[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (1))){
var state_28412__$1 = state_28412;
var statearr_28416_28482 = state_28412__$1;
(statearr_28416_28482[(2)] = null);

(statearr_28416_28482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (4))){
var inst_28377 = (state_28412[(7)]);
var inst_28377__$1 = (state_28412[(2)]);
var inst_28378 = (inst_28377__$1 == null);
var state_28412__$1 = (function (){var statearr_28417 = state_28412;
(statearr_28417[(7)] = inst_28377__$1);

return statearr_28417;
})();
if(cljs.core.truth_(inst_28378)){
var statearr_28418_28483 = state_28412__$1;
(statearr_28418_28483[(1)] = (5));

} else {
var statearr_28419_28484 = state_28412__$1;
(statearr_28419_28484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (15))){
var inst_28390 = (state_28412[(8)]);
var state_28412__$1 = state_28412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28412__$1,(18),to,inst_28390);
} else {
if((state_val_28413 === (21))){
var inst_28403 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
var statearr_28420_28485 = state_28412__$1;
(statearr_28420_28485[(2)] = inst_28403);

(statearr_28420_28485[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (13))){
var inst_28405 = (state_28412[(2)]);
var state_28412__$1 = (function (){var statearr_28421 = state_28412;
(statearr_28421[(9)] = inst_28405);

return statearr_28421;
})();
var statearr_28422_28486 = state_28412__$1;
(statearr_28422_28486[(2)] = null);

(statearr_28422_28486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (6))){
var inst_28377 = (state_28412[(7)]);
var state_28412__$1 = state_28412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28412__$1,(11),inst_28377);
} else {
if((state_val_28413 === (17))){
var inst_28398 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
if(cljs.core.truth_(inst_28398)){
var statearr_28423_28487 = state_28412__$1;
(statearr_28423_28487[(1)] = (19));

} else {
var statearr_28424_28488 = state_28412__$1;
(statearr_28424_28488[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (3))){
var inst_28410 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28412__$1,inst_28410);
} else {
if((state_val_28413 === (12))){
var inst_28387 = (state_28412[(10)]);
var state_28412__$1 = state_28412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28412__$1,(14),inst_28387);
} else {
if((state_val_28413 === (2))){
var state_28412__$1 = state_28412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28412__$1,(4),results);
} else {
if((state_val_28413 === (19))){
var state_28412__$1 = state_28412;
var statearr_28425_28489 = state_28412__$1;
(statearr_28425_28489[(2)] = null);

(statearr_28425_28489[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (11))){
var inst_28387 = (state_28412[(2)]);
var state_28412__$1 = (function (){var statearr_28426 = state_28412;
(statearr_28426[(10)] = inst_28387);

return statearr_28426;
})();
var statearr_28427_28490 = state_28412__$1;
(statearr_28427_28490[(2)] = null);

(statearr_28427_28490[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (9))){
var state_28412__$1 = state_28412;
var statearr_28428_28491 = state_28412__$1;
(statearr_28428_28491[(2)] = null);

(statearr_28428_28491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (5))){
var state_28412__$1 = state_28412;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28429_28492 = state_28412__$1;
(statearr_28429_28492[(1)] = (8));

} else {
var statearr_28430_28493 = state_28412__$1;
(statearr_28430_28493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (14))){
var inst_28390 = (state_28412[(8)]);
var inst_28392 = (state_28412[(11)]);
var inst_28390__$1 = (state_28412[(2)]);
var inst_28391 = (inst_28390__$1 == null);
var inst_28392__$1 = cljs.core.not.call(null,inst_28391);
var state_28412__$1 = (function (){var statearr_28431 = state_28412;
(statearr_28431[(8)] = inst_28390__$1);

(statearr_28431[(11)] = inst_28392__$1);

return statearr_28431;
})();
if(inst_28392__$1){
var statearr_28432_28494 = state_28412__$1;
(statearr_28432_28494[(1)] = (15));

} else {
var statearr_28433_28495 = state_28412__$1;
(statearr_28433_28495[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (16))){
var inst_28392 = (state_28412[(11)]);
var state_28412__$1 = state_28412;
var statearr_28434_28496 = state_28412__$1;
(statearr_28434_28496[(2)] = inst_28392);

(statearr_28434_28496[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (10))){
var inst_28384 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
var statearr_28435_28497 = state_28412__$1;
(statearr_28435_28497[(2)] = inst_28384);

(statearr_28435_28497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (18))){
var inst_28395 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
var statearr_28436_28498 = state_28412__$1;
(statearr_28436_28498[(2)] = inst_28395);

(statearr_28436_28498[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (8))){
var inst_28381 = cljs.core.async.close_BANG_.call(null,to);
var state_28412__$1 = state_28412;
var statearr_28437_28499 = state_28412__$1;
(statearr_28437_28499[(2)] = inst_28381);

(statearr_28437_28499[(1)] = (10));


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
}
}
}
});})(c__23265__auto__,jobs,results,process,async))
;
return ((function (switch__23209__auto__,c__23265__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____0 = (function (){
var statearr_28441 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28441[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__);

(statearr_28441[(1)] = (1));

return statearr_28441;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____1 = (function (state_28412){
while(true){
var ret_value__23211__auto__ = (function (){try{while(true){
var result__23212__auto__ = switch__23209__auto__.call(null,state_28412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23212__auto__;
}
break;
}
}catch (e28442){if((e28442 instanceof Object)){
var ex__23213__auto__ = e28442;
var statearr_28443_28500 = state_28412;
(statearr_28443_28500[(5)] = ex__23213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28501 = state_28412;
state_28412 = G__28501;
continue;
} else {
return ret_value__23211__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__ = function(state_28412){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____1.call(this,state_28412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23210__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23210__auto__;
})()
;})(switch__23209__auto__,c__23265__auto__,jobs,results,process,async))
})();
var state__23267__auto__ = (function (){var statearr_28444 = f__23266__auto__.call(null);
(statearr_28444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23265__auto__);

return statearr_28444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23267__auto__);
});})(c__23265__auto__,jobs,results,process,async))
);

return c__23265__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args28502 = [];
var len__19074__auto___28505 = arguments.length;
var i__19075__auto___28506 = (0);
while(true){
if((i__19075__auto___28506 < len__19074__auto___28505)){
args28502.push((arguments[i__19075__auto___28506]));

var G__28507 = (i__19075__auto___28506 + (1));
i__19075__auto___28506 = G__28507;
continue;
} else {
}
break;
}

var G__28504 = args28502.length;
switch (G__28504) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28502.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args28509 = [];
var len__19074__auto___28512 = arguments.length;
var i__19075__auto___28513 = (0);
while(true){
if((i__19075__auto___28513 < len__19074__auto___28512)){
args28509.push((arguments[i__19075__auto___28513]));

var G__28514 = (i__19075__auto___28513 + (1));
i__19075__auto___28513 = G__28514;
continue;
} else {
}
break;
}

var G__28511 = args28509.length;
switch (G__28511) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28509.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args28516 = [];
var len__19074__auto___28569 = arguments.length;
var i__19075__auto___28570 = (0);
while(true){
if((i__19075__auto___28570 < len__19074__auto___28569)){
args28516.push((arguments[i__19075__auto___28570]));

var G__28571 = (i__19075__auto___28570 + (1));
i__19075__auto___28570 = G__28571;
continue;
} else {
}
break;
}

var G__28518 = args28516.length;
switch (G__28518) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28516.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23265__auto___28573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23265__auto___28573,tc,fc){
return (function (){
var f__23266__auto__ = (function (){var switch__23209__auto__ = ((function (c__23265__auto___28573,tc,fc){
return (function (state_28544){
var state_val_28545 = (state_28544[(1)]);
if((state_val_28545 === (7))){
var inst_28540 = (state_28544[(2)]);
var state_28544__$1 = state_28544;
var statearr_28546_28574 = state_28544__$1;
(statearr_28546_28574[(2)] = inst_28540);

(statearr_28546_28574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (1))){
var state_28544__$1 = state_28544;
var statearr_28547_28575 = state_28544__$1;
(statearr_28547_28575[(2)] = null);

(statearr_28547_28575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (4))){
var inst_28521 = (state_28544[(7)]);
var inst_28521__$1 = (state_28544[(2)]);
var inst_28522 = (inst_28521__$1 == null);
var state_28544__$1 = (function (){var statearr_28548 = state_28544;
(statearr_28548[(7)] = inst_28521__$1);

return statearr_28548;
})();
if(cljs.core.truth_(inst_28522)){
var statearr_28549_28576 = state_28544__$1;
(statearr_28549_28576[(1)] = (5));

} else {
var statearr_28550_28577 = state_28544__$1;
(statearr_28550_28577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (13))){
var state_28544__$1 = state_28544;
var statearr_28551_28578 = state_28544__$1;
(statearr_28551_28578[(2)] = null);

(statearr_28551_28578[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (6))){
var inst_28521 = (state_28544[(7)]);
var inst_28527 = p.call(null,inst_28521);
var state_28544__$1 = state_28544;
if(cljs.core.truth_(inst_28527)){
var statearr_28552_28579 = state_28544__$1;
(statearr_28552_28579[(1)] = (9));

} else {
var statearr_28553_28580 = state_28544__$1;
(statearr_28553_28580[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (3))){
var inst_28542 = (state_28544[(2)]);
var state_28544__$1 = state_28544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28544__$1,inst_28542);
} else {
if((state_val_28545 === (12))){
var state_28544__$1 = state_28544;
var statearr_28554_28581 = state_28544__$1;
(statearr_28554_28581[(2)] = null);

(statearr_28554_28581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (2))){
var state_28544__$1 = state_28544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28544__$1,(4),ch);
} else {
if((state_val_28545 === (11))){
var inst_28521 = (state_28544[(7)]);
var inst_28531 = (state_28544[(2)]);
var state_28544__$1 = state_28544;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28544__$1,(8),inst_28531,inst_28521);
} else {
if((state_val_28545 === (9))){
var state_28544__$1 = state_28544;
var statearr_28555_28582 = state_28544__$1;
(statearr_28555_28582[(2)] = tc);

(statearr_28555_28582[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (5))){
var inst_28524 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28525 = cljs.core.async.close_BANG_.call(null,fc);
var state_28544__$1 = (function (){var statearr_28556 = state_28544;
(statearr_28556[(8)] = inst_28524);

return statearr_28556;
})();
var statearr_28557_28583 = state_28544__$1;
(statearr_28557_28583[(2)] = inst_28525);

(statearr_28557_28583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (14))){
var inst_28538 = (state_28544[(2)]);
var state_28544__$1 = state_28544;
var statearr_28558_28584 = state_28544__$1;
(statearr_28558_28584[(2)] = inst_28538);

(statearr_28558_28584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (10))){
var state_28544__$1 = state_28544;
var statearr_28559_28585 = state_28544__$1;
(statearr_28559_28585[(2)] = fc);

(statearr_28559_28585[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (8))){
var inst_28533 = (state_28544[(2)]);
var state_28544__$1 = state_28544;
if(cljs.core.truth_(inst_28533)){
var statearr_28560_28586 = state_28544__$1;
(statearr_28560_28586[(1)] = (12));

} else {
var statearr_28561_28587 = state_28544__$1;
(statearr_28561_28587[(1)] = (13));

}

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
}
}
}
}
}
}
});})(c__23265__auto___28573,tc,fc))
;
return ((function (switch__23209__auto__,c__23265__auto___28573,tc,fc){
return (function() {
var cljs$core$async$state_machine__23210__auto__ = null;
var cljs$core$async$state_machine__23210__auto____0 = (function (){
var statearr_28565 = [null,null,null,null,null,null,null,null,null];
(statearr_28565[(0)] = cljs$core$async$state_machine__23210__auto__);

(statearr_28565[(1)] = (1));

return statearr_28565;
});
var cljs$core$async$state_machine__23210__auto____1 = (function (state_28544){
while(true){
var ret_value__23211__auto__ = (function (){try{while(true){
var result__23212__auto__ = switch__23209__auto__.call(null,state_28544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23212__auto__;
}
break;
}
}catch (e28566){if((e28566 instanceof Object)){
var ex__23213__auto__ = e28566;
var statearr_28567_28588 = state_28544;
(statearr_28567_28588[(5)] = ex__23213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28589 = state_28544;
state_28544 = G__28589;
continue;
} else {
return ret_value__23211__auto__;
}
break;
}
});
cljs$core$async$state_machine__23210__auto__ = function(state_28544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23210__auto____1.call(this,state_28544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23210__auto____0;
cljs$core$async$state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23210__auto____1;
return cljs$core$async$state_machine__23210__auto__;
})()
;})(switch__23209__auto__,c__23265__auto___28573,tc,fc))
})();
var state__23267__auto__ = (function (){var statearr_28568 = f__23266__auto__.call(null);
(statearr_28568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23265__auto___28573);

return statearr_28568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23267__auto__);
});})(c__23265__auto___28573,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23265__auto__){
return (function (){
var f__23266__auto__ = (function (){var switch__23209__auto__ = ((function (c__23265__auto__){
return (function (state_28653){
var state_val_28654 = (state_28653[(1)]);
if((state_val_28654 === (7))){
var inst_28649 = (state_28653[(2)]);
var state_28653__$1 = state_28653;
var statearr_28655_28676 = state_28653__$1;
(statearr_28655_28676[(2)] = inst_28649);

(statearr_28655_28676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (1))){
var inst_28633 = init;
var state_28653__$1 = (function (){var statearr_28656 = state_28653;
(statearr_28656[(7)] = inst_28633);

return statearr_28656;
})();
var statearr_28657_28677 = state_28653__$1;
(statearr_28657_28677[(2)] = null);

(statearr_28657_28677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (4))){
var inst_28636 = (state_28653[(8)]);
var inst_28636__$1 = (state_28653[(2)]);
var inst_28637 = (inst_28636__$1 == null);
var state_28653__$1 = (function (){var statearr_28658 = state_28653;
(statearr_28658[(8)] = inst_28636__$1);

return statearr_28658;
})();
if(cljs.core.truth_(inst_28637)){
var statearr_28659_28678 = state_28653__$1;
(statearr_28659_28678[(1)] = (5));

} else {
var statearr_28660_28679 = state_28653__$1;
(statearr_28660_28679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (6))){
var inst_28640 = (state_28653[(9)]);
var inst_28636 = (state_28653[(8)]);
var inst_28633 = (state_28653[(7)]);
var inst_28640__$1 = f.call(null,inst_28633,inst_28636);
var inst_28641 = cljs.core.reduced_QMARK_.call(null,inst_28640__$1);
var state_28653__$1 = (function (){var statearr_28661 = state_28653;
(statearr_28661[(9)] = inst_28640__$1);

return statearr_28661;
})();
if(inst_28641){
var statearr_28662_28680 = state_28653__$1;
(statearr_28662_28680[(1)] = (8));

} else {
var statearr_28663_28681 = state_28653__$1;
(statearr_28663_28681[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (3))){
var inst_28651 = (state_28653[(2)]);
var state_28653__$1 = state_28653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28653__$1,inst_28651);
} else {
if((state_val_28654 === (2))){
var state_28653__$1 = state_28653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28653__$1,(4),ch);
} else {
if((state_val_28654 === (9))){
var inst_28640 = (state_28653[(9)]);
var inst_28633 = inst_28640;
var state_28653__$1 = (function (){var statearr_28664 = state_28653;
(statearr_28664[(7)] = inst_28633);

return statearr_28664;
})();
var statearr_28665_28682 = state_28653__$1;
(statearr_28665_28682[(2)] = null);

(statearr_28665_28682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (5))){
var inst_28633 = (state_28653[(7)]);
var state_28653__$1 = state_28653;
var statearr_28666_28683 = state_28653__$1;
(statearr_28666_28683[(2)] = inst_28633);

(statearr_28666_28683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (10))){
var inst_28647 = (state_28653[(2)]);
var state_28653__$1 = state_28653;
var statearr_28667_28684 = state_28653__$1;
(statearr_28667_28684[(2)] = inst_28647);

(statearr_28667_28684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (8))){
var inst_28640 = (state_28653[(9)]);
var inst_28643 = cljs.core.deref.call(null,inst_28640);
var state_28653__$1 = state_28653;
var statearr_28668_28685 = state_28653__$1;
(statearr_28668_28685[(2)] = inst_28643);

(statearr_28668_28685[(1)] = (10));


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
}
}
});})(c__23265__auto__))
;
return ((function (switch__23209__auto__,c__23265__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23210__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23210__auto____0 = (function (){
var statearr_28672 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28672[(0)] = cljs$core$async$reduce_$_state_machine__23210__auto__);

(statearr_28672[(1)] = (1));

return statearr_28672;
});
var cljs$core$async$reduce_$_state_machine__23210__auto____1 = (function (state_28653){
while(true){
var ret_value__23211__auto__ = (function (){try{while(true){
var result__23212__auto__ = switch__23209__auto__.call(null,state_28653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23212__auto__;
}
break;
}
}catch (e28673){if((e28673 instanceof Object)){
var ex__23213__auto__ = e28673;
var statearr_28674_28686 = state_28653;
(statearr_28674_28686[(5)] = ex__23213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28687 = state_28653;
state_28653 = G__28687;
continue;
} else {
return ret_value__23211__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23210__auto__ = function(state_28653){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23210__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23210__auto____1.call(this,state_28653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23210__auto____0;
cljs$core$async$reduce_$_state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23210__auto____1;
return cljs$core$async$reduce_$_state_machine__23210__auto__;
})()
;})(switch__23209__auto__,c__23265__auto__))
})();
var state__23267__auto__ = (function (){var statearr_28675 = f__23266__auto__.call(null);
(statearr_28675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23265__auto__);

return statearr_28675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23267__auto__);
});})(c__23265__auto__))
);

return c__23265__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23265__auto__,f__$1){
return (function (){
var f__23266__auto__ = (function (){var switch__23209__auto__ = ((function (c__23265__auto__,f__$1){
return (function (state_28707){
var state_val_28708 = (state_28707[(1)]);
if((state_val_28708 === (1))){
var inst_28702 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28707__$1 = state_28707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28707__$1,(2),inst_28702);
} else {
if((state_val_28708 === (2))){
var inst_28704 = (state_28707[(2)]);
var inst_28705 = f__$1.call(null,inst_28704);
var state_28707__$1 = state_28707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28707__$1,inst_28705);
} else {
return null;
}
}
});})(c__23265__auto__,f__$1))
;
return ((function (switch__23209__auto__,c__23265__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23210__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23210__auto____0 = (function (){
var statearr_28712 = [null,null,null,null,null,null,null];
(statearr_28712[(0)] = cljs$core$async$transduce_$_state_machine__23210__auto__);

(statearr_28712[(1)] = (1));

return statearr_28712;
});
var cljs$core$async$transduce_$_state_machine__23210__auto____1 = (function (state_28707){
while(true){
var ret_value__23211__auto__ = (function (){try{while(true){
var result__23212__auto__ = switch__23209__auto__.call(null,state_28707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23212__auto__;
}
break;
}
}catch (e28713){if((e28713 instanceof Object)){
var ex__23213__auto__ = e28713;
var statearr_28714_28716 = state_28707;
(statearr_28714_28716[(5)] = ex__23213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28717 = state_28707;
state_28707 = G__28717;
continue;
} else {
return ret_value__23211__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23210__auto__ = function(state_28707){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23210__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23210__auto____1.call(this,state_28707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23210__auto____0;
cljs$core$async$transduce_$_state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23210__auto____1;
return cljs$core$async$transduce_$_state_machine__23210__auto__;
})()
;})(switch__23209__auto__,c__23265__auto__,f__$1))
})();
var state__23267__auto__ = (function (){var statearr_28715 = f__23266__auto__.call(null);
(statearr_28715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23265__auto__);

return statearr_28715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23267__auto__);
});})(c__23265__auto__,f__$1))
);

return c__23265__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28718 = [];
var len__19074__auto___28770 = arguments.length;
var i__19075__auto___28771 = (0);
while(true){
if((i__19075__auto___28771 < len__19074__auto___28770)){
args28718.push((arguments[i__19075__auto___28771]));

var G__28772 = (i__19075__auto___28771 + (1));
i__19075__auto___28771 = G__28772;
continue;
} else {
}
break;
}

var G__28720 = args28718.length;
switch (G__28720) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28718.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23265__auto__){
return (function (){
var f__23266__auto__ = (function (){var switch__23209__auto__ = ((function (c__23265__auto__){
return (function (state_28745){
var state_val_28746 = (state_28745[(1)]);
if((state_val_28746 === (7))){
var inst_28727 = (state_28745[(2)]);
var state_28745__$1 = state_28745;
var statearr_28747_28774 = state_28745__$1;
(statearr_28747_28774[(2)] = inst_28727);

(statearr_28747_28774[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (1))){
var inst_28721 = cljs.core.seq.call(null,coll);
var inst_28722 = inst_28721;
var state_28745__$1 = (function (){var statearr_28748 = state_28745;
(statearr_28748[(7)] = inst_28722);

return statearr_28748;
})();
var statearr_28749_28775 = state_28745__$1;
(statearr_28749_28775[(2)] = null);

(statearr_28749_28775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (4))){
var inst_28722 = (state_28745[(7)]);
var inst_28725 = cljs.core.first.call(null,inst_28722);
var state_28745__$1 = state_28745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28745__$1,(7),ch,inst_28725);
} else {
if((state_val_28746 === (13))){
var inst_28739 = (state_28745[(2)]);
var state_28745__$1 = state_28745;
var statearr_28750_28776 = state_28745__$1;
(statearr_28750_28776[(2)] = inst_28739);

(statearr_28750_28776[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (6))){
var inst_28730 = (state_28745[(2)]);
var state_28745__$1 = state_28745;
if(cljs.core.truth_(inst_28730)){
var statearr_28751_28777 = state_28745__$1;
(statearr_28751_28777[(1)] = (8));

} else {
var statearr_28752_28778 = state_28745__$1;
(statearr_28752_28778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (3))){
var inst_28743 = (state_28745[(2)]);
var state_28745__$1 = state_28745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28745__$1,inst_28743);
} else {
if((state_val_28746 === (12))){
var state_28745__$1 = state_28745;
var statearr_28753_28779 = state_28745__$1;
(statearr_28753_28779[(2)] = null);

(statearr_28753_28779[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (2))){
var inst_28722 = (state_28745[(7)]);
var state_28745__$1 = state_28745;
if(cljs.core.truth_(inst_28722)){
var statearr_28754_28780 = state_28745__$1;
(statearr_28754_28780[(1)] = (4));

} else {
var statearr_28755_28781 = state_28745__$1;
(statearr_28755_28781[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (11))){
var inst_28736 = cljs.core.async.close_BANG_.call(null,ch);
var state_28745__$1 = state_28745;
var statearr_28756_28782 = state_28745__$1;
(statearr_28756_28782[(2)] = inst_28736);

(statearr_28756_28782[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (9))){
var state_28745__$1 = state_28745;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28757_28783 = state_28745__$1;
(statearr_28757_28783[(1)] = (11));

} else {
var statearr_28758_28784 = state_28745__$1;
(statearr_28758_28784[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (5))){
var inst_28722 = (state_28745[(7)]);
var state_28745__$1 = state_28745;
var statearr_28759_28785 = state_28745__$1;
(statearr_28759_28785[(2)] = inst_28722);

(statearr_28759_28785[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (10))){
var inst_28741 = (state_28745[(2)]);
var state_28745__$1 = state_28745;
var statearr_28760_28786 = state_28745__$1;
(statearr_28760_28786[(2)] = inst_28741);

(statearr_28760_28786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28746 === (8))){
var inst_28722 = (state_28745[(7)]);
var inst_28732 = cljs.core.next.call(null,inst_28722);
var inst_28722__$1 = inst_28732;
var state_28745__$1 = (function (){var statearr_28761 = state_28745;
(statearr_28761[(7)] = inst_28722__$1);

return statearr_28761;
})();
var statearr_28762_28787 = state_28745__$1;
(statearr_28762_28787[(2)] = null);

(statearr_28762_28787[(1)] = (2));


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
}
}
}
}
}
});})(c__23265__auto__))
;
return ((function (switch__23209__auto__,c__23265__auto__){
return (function() {
var cljs$core$async$state_machine__23210__auto__ = null;
var cljs$core$async$state_machine__23210__auto____0 = (function (){
var statearr_28766 = [null,null,null,null,null,null,null,null];
(statearr_28766[(0)] = cljs$core$async$state_machine__23210__auto__);

(statearr_28766[(1)] = (1));

return statearr_28766;
});
var cljs$core$async$state_machine__23210__auto____1 = (function (state_28745){
while(true){
var ret_value__23211__auto__ = (function (){try{while(true){
var result__23212__auto__ = switch__23209__auto__.call(null,state_28745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23212__auto__;
}
break;
}
}catch (e28767){if((e28767 instanceof Object)){
var ex__23213__auto__ = e28767;
var statearr_28768_28788 = state_28745;
(statearr_28768_28788[(5)] = ex__23213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28789 = state_28745;
state_28745 = G__28789;
continue;
} else {
return ret_value__23211__auto__;
}
break;
}
});
cljs$core$async$state_machine__23210__auto__ = function(state_28745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23210__auto____1.call(this,state_28745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23210__auto____0;
cljs$core$async$state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23210__auto____1;
return cljs$core$async$state_machine__23210__auto__;
})()
;})(switch__23209__auto__,c__23265__auto__))
})();
var state__23267__auto__ = (function (){var statearr_28769 = f__23266__auto__.call(null);
(statearr_28769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23265__auto__);

return statearr_28769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23267__auto__);
});})(c__23265__auto__))
);

return c__23265__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18629__auto__ = (((_ == null))?null:_);
var m__18630__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18629__auto__)]);
if(!((m__18630__auto__ == null))){
return m__18630__auto__.call(null,_);
} else {
var m__18630__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__18630__auto____$1 == null))){
return m__18630__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18629__auto__ = (((m == null))?null:m);
var m__18630__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18629__auto__)]);
if(!((m__18630__auto__ == null))){
return m__18630__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__18630__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__18630__auto____$1 == null))){
return m__18630__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18629__auto__ = (((m == null))?null:m);
var m__18630__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18629__auto__)]);
if(!((m__18630__auto__ == null))){
return m__18630__auto__.call(null,m,ch);
} else {
var m__18630__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__18630__auto____$1 == null))){
return m__18630__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18629__auto__ = (((m == null))?null:m);
var m__18630__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18629__auto__)]);
if(!((m__18630__auto__ == null))){
return m__18630__auto__.call(null,m);
} else {
var m__18630__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__18630__auto____$1 == null))){
return m__18630__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29015 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29015 = (function (ch,cs,meta29016){
this.ch = ch;
this.cs = cs;
this.meta29016 = meta29016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29017,meta29016__$1){
var self__ = this;
var _29017__$1 = this;
return (new cljs.core.async.t_cljs$core$async29015(self__.ch,self__.cs,meta29016__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29015.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29017){
var self__ = this;
var _29017__$1 = this;
return self__.meta29016;
});})(cs))
;

cljs.core.async.t_cljs$core$async29015.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29015.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29015.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29015.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29015.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29015.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29015.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29016","meta29016",205419325,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29015.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29015";

cljs.core.async.t_cljs$core$async29015.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18572__auto__,writer__18573__auto__,opt__18574__auto__){
return cljs.core._write.call(null,writer__18573__auto__,"cljs.core.async/t_cljs$core$async29015");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29015 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29015(ch__$1,cs__$1,meta29016){
return (new cljs.core.async.t_cljs$core$async29015(ch__$1,cs__$1,meta29016));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29015(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23265__auto___29240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23265__auto___29240,cs,m,dchan,dctr,done){
return (function (){
var f__23266__auto__ = (function (){var switch__23209__auto__ = ((function (c__23265__auto___29240,cs,m,dchan,dctr,done){
return (function (state_29152){
var state_val_29153 = (state_29152[(1)]);
if((state_val_29153 === (7))){
var inst_29148 = (state_29152[(2)]);
var state_29152__$1 = state_29152;
var statearr_29154_29241 = state_29152__$1;
(statearr_29154_29241[(2)] = inst_29148);

(statearr_29154_29241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (20))){
var inst_29051 = (state_29152[(7)]);
var inst_29063 = cljs.core.first.call(null,inst_29051);
var inst_29064 = cljs.core.nth.call(null,inst_29063,(0),null);
var inst_29065 = cljs.core.nth.call(null,inst_29063,(1),null);
var state_29152__$1 = (function (){var statearr_29155 = state_29152;
(statearr_29155[(8)] = inst_29064);

return statearr_29155;
})();
if(cljs.core.truth_(inst_29065)){
var statearr_29156_29242 = state_29152__$1;
(statearr_29156_29242[(1)] = (22));

} else {
var statearr_29157_29243 = state_29152__$1;
(statearr_29157_29243[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (27))){
var inst_29100 = (state_29152[(9)]);
var inst_29093 = (state_29152[(10)]);
var inst_29020 = (state_29152[(11)]);
var inst_29095 = (state_29152[(12)]);
var inst_29100__$1 = cljs.core._nth.call(null,inst_29093,inst_29095);
var inst_29101 = cljs.core.async.put_BANG_.call(null,inst_29100__$1,inst_29020,done);
var state_29152__$1 = (function (){var statearr_29158 = state_29152;
(statearr_29158[(9)] = inst_29100__$1);

return statearr_29158;
})();
if(cljs.core.truth_(inst_29101)){
var statearr_29159_29244 = state_29152__$1;
(statearr_29159_29244[(1)] = (30));

} else {
var statearr_29160_29245 = state_29152__$1;
(statearr_29160_29245[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (1))){
var state_29152__$1 = state_29152;
var statearr_29161_29246 = state_29152__$1;
(statearr_29161_29246[(2)] = null);

(statearr_29161_29246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (24))){
var inst_29051 = (state_29152[(7)]);
var inst_29070 = (state_29152[(2)]);
var inst_29071 = cljs.core.next.call(null,inst_29051);
var inst_29029 = inst_29071;
var inst_29030 = null;
var inst_29031 = (0);
var inst_29032 = (0);
var state_29152__$1 = (function (){var statearr_29162 = state_29152;
(statearr_29162[(13)] = inst_29029);

(statearr_29162[(14)] = inst_29030);

(statearr_29162[(15)] = inst_29031);

(statearr_29162[(16)] = inst_29070);

(statearr_29162[(17)] = inst_29032);

return statearr_29162;
})();
var statearr_29163_29247 = state_29152__$1;
(statearr_29163_29247[(2)] = null);

(statearr_29163_29247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (39))){
var state_29152__$1 = state_29152;
var statearr_29167_29248 = state_29152__$1;
(statearr_29167_29248[(2)] = null);

(statearr_29167_29248[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (4))){
var inst_29020 = (state_29152[(11)]);
var inst_29020__$1 = (state_29152[(2)]);
var inst_29021 = (inst_29020__$1 == null);
var state_29152__$1 = (function (){var statearr_29168 = state_29152;
(statearr_29168[(11)] = inst_29020__$1);

return statearr_29168;
})();
if(cljs.core.truth_(inst_29021)){
var statearr_29169_29249 = state_29152__$1;
(statearr_29169_29249[(1)] = (5));

} else {
var statearr_29170_29250 = state_29152__$1;
(statearr_29170_29250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (15))){
var inst_29029 = (state_29152[(13)]);
var inst_29030 = (state_29152[(14)]);
var inst_29031 = (state_29152[(15)]);
var inst_29032 = (state_29152[(17)]);
var inst_29047 = (state_29152[(2)]);
var inst_29048 = (inst_29032 + (1));
var tmp29164 = inst_29029;
var tmp29165 = inst_29030;
var tmp29166 = inst_29031;
var inst_29029__$1 = tmp29164;
var inst_29030__$1 = tmp29165;
var inst_29031__$1 = tmp29166;
var inst_29032__$1 = inst_29048;
var state_29152__$1 = (function (){var statearr_29171 = state_29152;
(statearr_29171[(13)] = inst_29029__$1);

(statearr_29171[(14)] = inst_29030__$1);

(statearr_29171[(15)] = inst_29031__$1);

(statearr_29171[(18)] = inst_29047);

(statearr_29171[(17)] = inst_29032__$1);

return statearr_29171;
})();
var statearr_29172_29251 = state_29152__$1;
(statearr_29172_29251[(2)] = null);

(statearr_29172_29251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (21))){
var inst_29074 = (state_29152[(2)]);
var state_29152__$1 = state_29152;
var statearr_29176_29252 = state_29152__$1;
(statearr_29176_29252[(2)] = inst_29074);

(statearr_29176_29252[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (31))){
var inst_29100 = (state_29152[(9)]);
var inst_29104 = done.call(null,null);
var inst_29105 = cljs.core.async.untap_STAR_.call(null,m,inst_29100);
var state_29152__$1 = (function (){var statearr_29177 = state_29152;
(statearr_29177[(19)] = inst_29104);

return statearr_29177;
})();
var statearr_29178_29253 = state_29152__$1;
(statearr_29178_29253[(2)] = inst_29105);

(statearr_29178_29253[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (32))){
var inst_29094 = (state_29152[(20)]);
var inst_29093 = (state_29152[(10)]);
var inst_29095 = (state_29152[(12)]);
var inst_29092 = (state_29152[(21)]);
var inst_29107 = (state_29152[(2)]);
var inst_29108 = (inst_29095 + (1));
var tmp29173 = inst_29094;
var tmp29174 = inst_29093;
var tmp29175 = inst_29092;
var inst_29092__$1 = tmp29175;
var inst_29093__$1 = tmp29174;
var inst_29094__$1 = tmp29173;
var inst_29095__$1 = inst_29108;
var state_29152__$1 = (function (){var statearr_29179 = state_29152;
(statearr_29179[(20)] = inst_29094__$1);

(statearr_29179[(22)] = inst_29107);

(statearr_29179[(10)] = inst_29093__$1);

(statearr_29179[(12)] = inst_29095__$1);

(statearr_29179[(21)] = inst_29092__$1);

return statearr_29179;
})();
var statearr_29180_29254 = state_29152__$1;
(statearr_29180_29254[(2)] = null);

(statearr_29180_29254[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (40))){
var inst_29120 = (state_29152[(23)]);
var inst_29124 = done.call(null,null);
var inst_29125 = cljs.core.async.untap_STAR_.call(null,m,inst_29120);
var state_29152__$1 = (function (){var statearr_29181 = state_29152;
(statearr_29181[(24)] = inst_29124);

return statearr_29181;
})();
var statearr_29182_29255 = state_29152__$1;
(statearr_29182_29255[(2)] = inst_29125);

(statearr_29182_29255[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (33))){
var inst_29111 = (state_29152[(25)]);
var inst_29113 = cljs.core.chunked_seq_QMARK_.call(null,inst_29111);
var state_29152__$1 = state_29152;
if(inst_29113){
var statearr_29183_29256 = state_29152__$1;
(statearr_29183_29256[(1)] = (36));

} else {
var statearr_29184_29257 = state_29152__$1;
(statearr_29184_29257[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (13))){
var inst_29041 = (state_29152[(26)]);
var inst_29044 = cljs.core.async.close_BANG_.call(null,inst_29041);
var state_29152__$1 = state_29152;
var statearr_29185_29258 = state_29152__$1;
(statearr_29185_29258[(2)] = inst_29044);

(statearr_29185_29258[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (22))){
var inst_29064 = (state_29152[(8)]);
var inst_29067 = cljs.core.async.close_BANG_.call(null,inst_29064);
var state_29152__$1 = state_29152;
var statearr_29186_29259 = state_29152__$1;
(statearr_29186_29259[(2)] = inst_29067);

(statearr_29186_29259[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (36))){
var inst_29111 = (state_29152[(25)]);
var inst_29115 = cljs.core.chunk_first.call(null,inst_29111);
var inst_29116 = cljs.core.chunk_rest.call(null,inst_29111);
var inst_29117 = cljs.core.count.call(null,inst_29115);
var inst_29092 = inst_29116;
var inst_29093 = inst_29115;
var inst_29094 = inst_29117;
var inst_29095 = (0);
var state_29152__$1 = (function (){var statearr_29187 = state_29152;
(statearr_29187[(20)] = inst_29094);

(statearr_29187[(10)] = inst_29093);

(statearr_29187[(12)] = inst_29095);

(statearr_29187[(21)] = inst_29092);

return statearr_29187;
})();
var statearr_29188_29260 = state_29152__$1;
(statearr_29188_29260[(2)] = null);

(statearr_29188_29260[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (41))){
var inst_29111 = (state_29152[(25)]);
var inst_29127 = (state_29152[(2)]);
var inst_29128 = cljs.core.next.call(null,inst_29111);
var inst_29092 = inst_29128;
var inst_29093 = null;
var inst_29094 = (0);
var inst_29095 = (0);
var state_29152__$1 = (function (){var statearr_29189 = state_29152;
(statearr_29189[(27)] = inst_29127);

(statearr_29189[(20)] = inst_29094);

(statearr_29189[(10)] = inst_29093);

(statearr_29189[(12)] = inst_29095);

(statearr_29189[(21)] = inst_29092);

return statearr_29189;
})();
var statearr_29190_29261 = state_29152__$1;
(statearr_29190_29261[(2)] = null);

(statearr_29190_29261[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (43))){
var state_29152__$1 = state_29152;
var statearr_29191_29262 = state_29152__$1;
(statearr_29191_29262[(2)] = null);

(statearr_29191_29262[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (29))){
var inst_29136 = (state_29152[(2)]);
var state_29152__$1 = state_29152;
var statearr_29192_29263 = state_29152__$1;
(statearr_29192_29263[(2)] = inst_29136);

(statearr_29192_29263[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (44))){
var inst_29145 = (state_29152[(2)]);
var state_29152__$1 = (function (){var statearr_29193 = state_29152;
(statearr_29193[(28)] = inst_29145);

return statearr_29193;
})();
var statearr_29194_29264 = state_29152__$1;
(statearr_29194_29264[(2)] = null);

(statearr_29194_29264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (6))){
var inst_29084 = (state_29152[(29)]);
var inst_29083 = cljs.core.deref.call(null,cs);
var inst_29084__$1 = cljs.core.keys.call(null,inst_29083);
var inst_29085 = cljs.core.count.call(null,inst_29084__$1);
var inst_29086 = cljs.core.reset_BANG_.call(null,dctr,inst_29085);
var inst_29091 = cljs.core.seq.call(null,inst_29084__$1);
var inst_29092 = inst_29091;
var inst_29093 = null;
var inst_29094 = (0);
var inst_29095 = (0);
var state_29152__$1 = (function (){var statearr_29195 = state_29152;
(statearr_29195[(20)] = inst_29094);

(statearr_29195[(30)] = inst_29086);

(statearr_29195[(10)] = inst_29093);

(statearr_29195[(29)] = inst_29084__$1);

(statearr_29195[(12)] = inst_29095);

(statearr_29195[(21)] = inst_29092);

return statearr_29195;
})();
var statearr_29196_29265 = state_29152__$1;
(statearr_29196_29265[(2)] = null);

(statearr_29196_29265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (28))){
var inst_29111 = (state_29152[(25)]);
var inst_29092 = (state_29152[(21)]);
var inst_29111__$1 = cljs.core.seq.call(null,inst_29092);
var state_29152__$1 = (function (){var statearr_29197 = state_29152;
(statearr_29197[(25)] = inst_29111__$1);

return statearr_29197;
})();
if(inst_29111__$1){
var statearr_29198_29266 = state_29152__$1;
(statearr_29198_29266[(1)] = (33));

} else {
var statearr_29199_29267 = state_29152__$1;
(statearr_29199_29267[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (25))){
var inst_29094 = (state_29152[(20)]);
var inst_29095 = (state_29152[(12)]);
var inst_29097 = (inst_29095 < inst_29094);
var inst_29098 = inst_29097;
var state_29152__$1 = state_29152;
if(cljs.core.truth_(inst_29098)){
var statearr_29200_29268 = state_29152__$1;
(statearr_29200_29268[(1)] = (27));

} else {
var statearr_29201_29269 = state_29152__$1;
(statearr_29201_29269[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (34))){
var state_29152__$1 = state_29152;
var statearr_29202_29270 = state_29152__$1;
(statearr_29202_29270[(2)] = null);

(statearr_29202_29270[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (17))){
var state_29152__$1 = state_29152;
var statearr_29203_29271 = state_29152__$1;
(statearr_29203_29271[(2)] = null);

(statearr_29203_29271[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (3))){
var inst_29150 = (state_29152[(2)]);
var state_29152__$1 = state_29152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29152__$1,inst_29150);
} else {
if((state_val_29153 === (12))){
var inst_29079 = (state_29152[(2)]);
var state_29152__$1 = state_29152;
var statearr_29204_29272 = state_29152__$1;
(statearr_29204_29272[(2)] = inst_29079);

(statearr_29204_29272[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (2))){
var state_29152__$1 = state_29152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29152__$1,(4),ch);
} else {
if((state_val_29153 === (23))){
var state_29152__$1 = state_29152;
var statearr_29205_29273 = state_29152__$1;
(statearr_29205_29273[(2)] = null);

(statearr_29205_29273[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (35))){
var inst_29134 = (state_29152[(2)]);
var state_29152__$1 = state_29152;
var statearr_29206_29274 = state_29152__$1;
(statearr_29206_29274[(2)] = inst_29134);

(statearr_29206_29274[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (19))){
var inst_29051 = (state_29152[(7)]);
var inst_29055 = cljs.core.chunk_first.call(null,inst_29051);
var inst_29056 = cljs.core.chunk_rest.call(null,inst_29051);
var inst_29057 = cljs.core.count.call(null,inst_29055);
var inst_29029 = inst_29056;
var inst_29030 = inst_29055;
var inst_29031 = inst_29057;
var inst_29032 = (0);
var state_29152__$1 = (function (){var statearr_29207 = state_29152;
(statearr_29207[(13)] = inst_29029);

(statearr_29207[(14)] = inst_29030);

(statearr_29207[(15)] = inst_29031);

(statearr_29207[(17)] = inst_29032);

return statearr_29207;
})();
var statearr_29208_29275 = state_29152__$1;
(statearr_29208_29275[(2)] = null);

(statearr_29208_29275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (11))){
var inst_29029 = (state_29152[(13)]);
var inst_29051 = (state_29152[(7)]);
var inst_29051__$1 = cljs.core.seq.call(null,inst_29029);
var state_29152__$1 = (function (){var statearr_29209 = state_29152;
(statearr_29209[(7)] = inst_29051__$1);

return statearr_29209;
})();
if(inst_29051__$1){
var statearr_29210_29276 = state_29152__$1;
(statearr_29210_29276[(1)] = (16));

} else {
var statearr_29211_29277 = state_29152__$1;
(statearr_29211_29277[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (9))){
var inst_29081 = (state_29152[(2)]);
var state_29152__$1 = state_29152;
var statearr_29212_29278 = state_29152__$1;
(statearr_29212_29278[(2)] = inst_29081);

(statearr_29212_29278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (5))){
var inst_29027 = cljs.core.deref.call(null,cs);
var inst_29028 = cljs.core.seq.call(null,inst_29027);
var inst_29029 = inst_29028;
var inst_29030 = null;
var inst_29031 = (0);
var inst_29032 = (0);
var state_29152__$1 = (function (){var statearr_29213 = state_29152;
(statearr_29213[(13)] = inst_29029);

(statearr_29213[(14)] = inst_29030);

(statearr_29213[(15)] = inst_29031);

(statearr_29213[(17)] = inst_29032);

return statearr_29213;
})();
var statearr_29214_29279 = state_29152__$1;
(statearr_29214_29279[(2)] = null);

(statearr_29214_29279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (14))){
var state_29152__$1 = state_29152;
var statearr_29215_29280 = state_29152__$1;
(statearr_29215_29280[(2)] = null);

(statearr_29215_29280[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (45))){
var inst_29142 = (state_29152[(2)]);
var state_29152__$1 = state_29152;
var statearr_29216_29281 = state_29152__$1;
(statearr_29216_29281[(2)] = inst_29142);

(statearr_29216_29281[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (26))){
var inst_29084 = (state_29152[(29)]);
var inst_29138 = (state_29152[(2)]);
var inst_29139 = cljs.core.seq.call(null,inst_29084);
var state_29152__$1 = (function (){var statearr_29217 = state_29152;
(statearr_29217[(31)] = inst_29138);

return statearr_29217;
})();
if(inst_29139){
var statearr_29218_29282 = state_29152__$1;
(statearr_29218_29282[(1)] = (42));

} else {
var statearr_29219_29283 = state_29152__$1;
(statearr_29219_29283[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (16))){
var inst_29051 = (state_29152[(7)]);
var inst_29053 = cljs.core.chunked_seq_QMARK_.call(null,inst_29051);
var state_29152__$1 = state_29152;
if(inst_29053){
var statearr_29220_29284 = state_29152__$1;
(statearr_29220_29284[(1)] = (19));

} else {
var statearr_29221_29285 = state_29152__$1;
(statearr_29221_29285[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (38))){
var inst_29131 = (state_29152[(2)]);
var state_29152__$1 = state_29152;
var statearr_29222_29286 = state_29152__$1;
(statearr_29222_29286[(2)] = inst_29131);

(statearr_29222_29286[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (30))){
var state_29152__$1 = state_29152;
var statearr_29223_29287 = state_29152__$1;
(statearr_29223_29287[(2)] = null);

(statearr_29223_29287[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (10))){
var inst_29030 = (state_29152[(14)]);
var inst_29032 = (state_29152[(17)]);
var inst_29040 = cljs.core._nth.call(null,inst_29030,inst_29032);
var inst_29041 = cljs.core.nth.call(null,inst_29040,(0),null);
var inst_29042 = cljs.core.nth.call(null,inst_29040,(1),null);
var state_29152__$1 = (function (){var statearr_29224 = state_29152;
(statearr_29224[(26)] = inst_29041);

return statearr_29224;
})();
if(cljs.core.truth_(inst_29042)){
var statearr_29225_29288 = state_29152__$1;
(statearr_29225_29288[(1)] = (13));

} else {
var statearr_29226_29289 = state_29152__$1;
(statearr_29226_29289[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (18))){
var inst_29077 = (state_29152[(2)]);
var state_29152__$1 = state_29152;
var statearr_29227_29290 = state_29152__$1;
(statearr_29227_29290[(2)] = inst_29077);

(statearr_29227_29290[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (42))){
var state_29152__$1 = state_29152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29152__$1,(45),dchan);
} else {
if((state_val_29153 === (37))){
var inst_29020 = (state_29152[(11)]);
var inst_29111 = (state_29152[(25)]);
var inst_29120 = (state_29152[(23)]);
var inst_29120__$1 = cljs.core.first.call(null,inst_29111);
var inst_29121 = cljs.core.async.put_BANG_.call(null,inst_29120__$1,inst_29020,done);
var state_29152__$1 = (function (){var statearr_29228 = state_29152;
(statearr_29228[(23)] = inst_29120__$1);

return statearr_29228;
})();
if(cljs.core.truth_(inst_29121)){
var statearr_29229_29291 = state_29152__$1;
(statearr_29229_29291[(1)] = (39));

} else {
var statearr_29230_29292 = state_29152__$1;
(statearr_29230_29292[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29153 === (8))){
var inst_29031 = (state_29152[(15)]);
var inst_29032 = (state_29152[(17)]);
var inst_29034 = (inst_29032 < inst_29031);
var inst_29035 = inst_29034;
var state_29152__$1 = state_29152;
if(cljs.core.truth_(inst_29035)){
var statearr_29231_29293 = state_29152__$1;
(statearr_29231_29293[(1)] = (10));

} else {
var statearr_29232_29294 = state_29152__$1;
(statearr_29232_29294[(1)] = (11));

}

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
}
}
}
}
}
}
}
});})(c__23265__auto___29240,cs,m,dchan,dctr,done))
;
return ((function (switch__23209__auto__,c__23265__auto___29240,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23210__auto__ = null;
var cljs$core$async$mult_$_state_machine__23210__auto____0 = (function (){
var statearr_29236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29236[(0)] = cljs$core$async$mult_$_state_machine__23210__auto__);

(statearr_29236[(1)] = (1));

return statearr_29236;
});
var cljs$core$async$mult_$_state_machine__23210__auto____1 = (function (state_29152){
while(true){
var ret_value__23211__auto__ = (function (){try{while(true){
var result__23212__auto__ = switch__23209__auto__.call(null,state_29152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23212__auto__;
}
break;
}
}catch (e29237){if((e29237 instanceof Object)){
var ex__23213__auto__ = e29237;
var statearr_29238_29295 = state_29152;
(statearr_29238_29295[(5)] = ex__23213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29296 = state_29152;
state_29152 = G__29296;
continue;
} else {
return ret_value__23211__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23210__auto__ = function(state_29152){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23210__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23210__auto____1.call(this,state_29152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23210__auto____0;
cljs$core$async$mult_$_state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23210__auto____1;
return cljs$core$async$mult_$_state_machine__23210__auto__;
})()
;})(switch__23209__auto__,c__23265__auto___29240,cs,m,dchan,dctr,done))
})();
var state__23267__auto__ = (function (){var statearr_29239 = f__23266__auto__.call(null);
(statearr_29239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23265__auto___29240);

return statearr_29239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23267__auto__);
});})(c__23265__auto___29240,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args29297 = [];
var len__19074__auto___29300 = arguments.length;
var i__19075__auto___29301 = (0);
while(true){
if((i__19075__auto___29301 < len__19074__auto___29300)){
args29297.push((arguments[i__19075__auto___29301]));

var G__29302 = (i__19075__auto___29301 + (1));
i__19075__auto___29301 = G__29302;
continue;
} else {
}
break;
}

var G__29299 = args29297.length;
switch (G__29299) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29297.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18629__auto__ = (((m == null))?null:m);
var m__18630__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18629__auto__)]);
if(!((m__18630__auto__ == null))){
return m__18630__auto__.call(null,m,ch);
} else {
var m__18630__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__18630__auto____$1 == null))){
return m__18630__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18629__auto__ = (((m == null))?null:m);
var m__18630__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18629__auto__)]);
if(!((m__18630__auto__ == null))){
return m__18630__auto__.call(null,m,ch);
} else {
var m__18630__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__18630__auto____$1 == null))){
return m__18630__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18629__auto__ = (((m == null))?null:m);
var m__18630__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18629__auto__)]);
if(!((m__18630__auto__ == null))){
return m__18630__auto__.call(null,m);
} else {
var m__18630__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__18630__auto____$1 == null))){
return m__18630__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18629__auto__ = (((m == null))?null:m);
var m__18630__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18629__auto__)]);
if(!((m__18630__auto__ == null))){
return m__18630__auto__.call(null,m,state_map);
} else {
var m__18630__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__18630__auto____$1 == null))){
return m__18630__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18629__auto__ = (((m == null))?null:m);
var m__18630__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18629__auto__)]);
if(!((m__18630__auto__ == null))){
return m__18630__auto__.call(null,m,mode);
} else {
var m__18630__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__18630__auto____$1 == null))){
return m__18630__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19081__auto__ = [];
var len__19074__auto___29314 = arguments.length;
var i__19075__auto___29315 = (0);
while(true){
if((i__19075__auto___29315 < len__19074__auto___29314)){
args__19081__auto__.push((arguments[i__19075__auto___29315]));

var G__29316 = (i__19075__auto___29315 + (1));
i__19075__auto___29315 = G__29316;
continue;
} else {
}
break;
}

var argseq__19082__auto__ = ((((3) < args__19081__auto__.length))?(new cljs.core.IndexedSeq(args__19081__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19082__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29308){
var map__29309 = p__29308;
var map__29309__$1 = ((((!((map__29309 == null)))?((((map__29309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29309.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29309):map__29309);
var opts = map__29309__$1;
var statearr_29311_29317 = state;
(statearr_29311_29317[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29309,map__29309__$1,opts){
return (function (val){
var statearr_29312_29318 = state;
(statearr_29312_29318[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29309,map__29309__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29313_29319 = state;
(statearr_29313_29319[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29304){
var G__29305 = cljs.core.first.call(null,seq29304);
var seq29304__$1 = cljs.core.next.call(null,seq29304);
var G__29306 = cljs.core.first.call(null,seq29304__$1);
var seq29304__$2 = cljs.core.next.call(null,seq29304__$1);
var G__29307 = cljs.core.first.call(null,seq29304__$2);
var seq29304__$3 = cljs.core.next.call(null,seq29304__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29305,G__29306,G__29307,seq29304__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29487 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29487 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta29488){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta29488 = meta29488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29489,meta29488__$1){
var self__ = this;
var _29489__$1 = this;
return (new cljs.core.async.t_cljs$core$async29487(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta29488__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29487.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29489){
var self__ = this;
var _29489__$1 = this;
return self__.meta29488;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29487.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29487.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29487.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29487.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29487.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29487.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29487.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29487.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29487.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta29488","meta29488",1009571309,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29487.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29487.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29487";

cljs.core.async.t_cljs$core$async29487.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18572__auto__,writer__18573__auto__,opt__18574__auto__){
return cljs.core._write.call(null,writer__18573__auto__,"cljs.core.async/t_cljs$core$async29487");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29487 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29487(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29488){
return (new cljs.core.async.t_cljs$core$async29487(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29488));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29487(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23265__auto___29654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23265__auto___29654,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23266__auto__ = (function (){var switch__23209__auto__ = ((function (c__23265__auto___29654,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29591){
var state_val_29592 = (state_29591[(1)]);
if((state_val_29592 === (7))){
var inst_29506 = (state_29591[(2)]);
var state_29591__$1 = state_29591;
var statearr_29593_29655 = state_29591__$1;
(statearr_29593_29655[(2)] = inst_29506);

(statearr_29593_29655[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (20))){
var inst_29518 = (state_29591[(7)]);
var state_29591__$1 = state_29591;
var statearr_29594_29656 = state_29591__$1;
(statearr_29594_29656[(2)] = inst_29518);

(statearr_29594_29656[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (27))){
var state_29591__$1 = state_29591;
var statearr_29595_29657 = state_29591__$1;
(statearr_29595_29657[(2)] = null);

(statearr_29595_29657[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (1))){
var inst_29493 = (state_29591[(8)]);
var inst_29493__$1 = calc_state.call(null);
var inst_29495 = (inst_29493__$1 == null);
var inst_29496 = cljs.core.not.call(null,inst_29495);
var state_29591__$1 = (function (){var statearr_29596 = state_29591;
(statearr_29596[(8)] = inst_29493__$1);

return statearr_29596;
})();
if(inst_29496){
var statearr_29597_29658 = state_29591__$1;
(statearr_29597_29658[(1)] = (2));

} else {
var statearr_29598_29659 = state_29591__$1;
(statearr_29598_29659[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (24))){
var inst_29565 = (state_29591[(9)]);
var inst_29542 = (state_29591[(10)]);
var inst_29551 = (state_29591[(11)]);
var inst_29565__$1 = inst_29542.call(null,inst_29551);
var state_29591__$1 = (function (){var statearr_29599 = state_29591;
(statearr_29599[(9)] = inst_29565__$1);

return statearr_29599;
})();
if(cljs.core.truth_(inst_29565__$1)){
var statearr_29600_29660 = state_29591__$1;
(statearr_29600_29660[(1)] = (29));

} else {
var statearr_29601_29661 = state_29591__$1;
(statearr_29601_29661[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (4))){
var inst_29509 = (state_29591[(2)]);
var state_29591__$1 = state_29591;
if(cljs.core.truth_(inst_29509)){
var statearr_29602_29662 = state_29591__$1;
(statearr_29602_29662[(1)] = (8));

} else {
var statearr_29603_29663 = state_29591__$1;
(statearr_29603_29663[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (15))){
var inst_29536 = (state_29591[(2)]);
var state_29591__$1 = state_29591;
if(cljs.core.truth_(inst_29536)){
var statearr_29604_29664 = state_29591__$1;
(statearr_29604_29664[(1)] = (19));

} else {
var statearr_29605_29665 = state_29591__$1;
(statearr_29605_29665[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (21))){
var inst_29541 = (state_29591[(12)]);
var inst_29541__$1 = (state_29591[(2)]);
var inst_29542 = cljs.core.get.call(null,inst_29541__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29543 = cljs.core.get.call(null,inst_29541__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29544 = cljs.core.get.call(null,inst_29541__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29591__$1 = (function (){var statearr_29606 = state_29591;
(statearr_29606[(10)] = inst_29542);

(statearr_29606[(13)] = inst_29543);

(statearr_29606[(12)] = inst_29541__$1);

return statearr_29606;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29591__$1,(22),inst_29544);
} else {
if((state_val_29592 === (31))){
var inst_29573 = (state_29591[(2)]);
var state_29591__$1 = state_29591;
if(cljs.core.truth_(inst_29573)){
var statearr_29607_29666 = state_29591__$1;
(statearr_29607_29666[(1)] = (32));

} else {
var statearr_29608_29667 = state_29591__$1;
(statearr_29608_29667[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (32))){
var inst_29550 = (state_29591[(14)]);
var state_29591__$1 = state_29591;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29591__$1,(35),out,inst_29550);
} else {
if((state_val_29592 === (33))){
var inst_29541 = (state_29591[(12)]);
var inst_29518 = inst_29541;
var state_29591__$1 = (function (){var statearr_29609 = state_29591;
(statearr_29609[(7)] = inst_29518);

return statearr_29609;
})();
var statearr_29610_29668 = state_29591__$1;
(statearr_29610_29668[(2)] = null);

(statearr_29610_29668[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (13))){
var inst_29518 = (state_29591[(7)]);
var inst_29525 = inst_29518.cljs$lang$protocol_mask$partition0$;
var inst_29526 = (inst_29525 & (64));
var inst_29527 = inst_29518.cljs$core$ISeq$;
var inst_29528 = (cljs.core.PROTOCOL_SENTINEL === inst_29527);
var inst_29529 = (inst_29526) || (inst_29528);
var state_29591__$1 = state_29591;
if(cljs.core.truth_(inst_29529)){
var statearr_29611_29669 = state_29591__$1;
(statearr_29611_29669[(1)] = (16));

} else {
var statearr_29612_29670 = state_29591__$1;
(statearr_29612_29670[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (22))){
var inst_29550 = (state_29591[(14)]);
var inst_29551 = (state_29591[(11)]);
var inst_29549 = (state_29591[(2)]);
var inst_29550__$1 = cljs.core.nth.call(null,inst_29549,(0),null);
var inst_29551__$1 = cljs.core.nth.call(null,inst_29549,(1),null);
var inst_29552 = (inst_29550__$1 == null);
var inst_29553 = cljs.core._EQ_.call(null,inst_29551__$1,change);
var inst_29554 = (inst_29552) || (inst_29553);
var state_29591__$1 = (function (){var statearr_29613 = state_29591;
(statearr_29613[(14)] = inst_29550__$1);

(statearr_29613[(11)] = inst_29551__$1);

return statearr_29613;
})();
if(cljs.core.truth_(inst_29554)){
var statearr_29614_29671 = state_29591__$1;
(statearr_29614_29671[(1)] = (23));

} else {
var statearr_29615_29672 = state_29591__$1;
(statearr_29615_29672[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (36))){
var inst_29541 = (state_29591[(12)]);
var inst_29518 = inst_29541;
var state_29591__$1 = (function (){var statearr_29616 = state_29591;
(statearr_29616[(7)] = inst_29518);

return statearr_29616;
})();
var statearr_29617_29673 = state_29591__$1;
(statearr_29617_29673[(2)] = null);

(statearr_29617_29673[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (29))){
var inst_29565 = (state_29591[(9)]);
var state_29591__$1 = state_29591;
var statearr_29618_29674 = state_29591__$1;
(statearr_29618_29674[(2)] = inst_29565);

(statearr_29618_29674[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (6))){
var state_29591__$1 = state_29591;
var statearr_29619_29675 = state_29591__$1;
(statearr_29619_29675[(2)] = false);

(statearr_29619_29675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (28))){
var inst_29561 = (state_29591[(2)]);
var inst_29562 = calc_state.call(null);
var inst_29518 = inst_29562;
var state_29591__$1 = (function (){var statearr_29620 = state_29591;
(statearr_29620[(7)] = inst_29518);

(statearr_29620[(15)] = inst_29561);

return statearr_29620;
})();
var statearr_29621_29676 = state_29591__$1;
(statearr_29621_29676[(2)] = null);

(statearr_29621_29676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (25))){
var inst_29587 = (state_29591[(2)]);
var state_29591__$1 = state_29591;
var statearr_29622_29677 = state_29591__$1;
(statearr_29622_29677[(2)] = inst_29587);

(statearr_29622_29677[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (34))){
var inst_29585 = (state_29591[(2)]);
var state_29591__$1 = state_29591;
var statearr_29623_29678 = state_29591__$1;
(statearr_29623_29678[(2)] = inst_29585);

(statearr_29623_29678[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (17))){
var state_29591__$1 = state_29591;
var statearr_29624_29679 = state_29591__$1;
(statearr_29624_29679[(2)] = false);

(statearr_29624_29679[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (3))){
var state_29591__$1 = state_29591;
var statearr_29625_29680 = state_29591__$1;
(statearr_29625_29680[(2)] = false);

(statearr_29625_29680[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (12))){
var inst_29589 = (state_29591[(2)]);
var state_29591__$1 = state_29591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29591__$1,inst_29589);
} else {
if((state_val_29592 === (2))){
var inst_29493 = (state_29591[(8)]);
var inst_29498 = inst_29493.cljs$lang$protocol_mask$partition0$;
var inst_29499 = (inst_29498 & (64));
var inst_29500 = inst_29493.cljs$core$ISeq$;
var inst_29501 = (cljs.core.PROTOCOL_SENTINEL === inst_29500);
var inst_29502 = (inst_29499) || (inst_29501);
var state_29591__$1 = state_29591;
if(cljs.core.truth_(inst_29502)){
var statearr_29626_29681 = state_29591__$1;
(statearr_29626_29681[(1)] = (5));

} else {
var statearr_29627_29682 = state_29591__$1;
(statearr_29627_29682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (23))){
var inst_29550 = (state_29591[(14)]);
var inst_29556 = (inst_29550 == null);
var state_29591__$1 = state_29591;
if(cljs.core.truth_(inst_29556)){
var statearr_29628_29683 = state_29591__$1;
(statearr_29628_29683[(1)] = (26));

} else {
var statearr_29629_29684 = state_29591__$1;
(statearr_29629_29684[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (35))){
var inst_29576 = (state_29591[(2)]);
var state_29591__$1 = state_29591;
if(cljs.core.truth_(inst_29576)){
var statearr_29630_29685 = state_29591__$1;
(statearr_29630_29685[(1)] = (36));

} else {
var statearr_29631_29686 = state_29591__$1;
(statearr_29631_29686[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (19))){
var inst_29518 = (state_29591[(7)]);
var inst_29538 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29518);
var state_29591__$1 = state_29591;
var statearr_29632_29687 = state_29591__$1;
(statearr_29632_29687[(2)] = inst_29538);

(statearr_29632_29687[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (11))){
var inst_29518 = (state_29591[(7)]);
var inst_29522 = (inst_29518 == null);
var inst_29523 = cljs.core.not.call(null,inst_29522);
var state_29591__$1 = state_29591;
if(inst_29523){
var statearr_29633_29688 = state_29591__$1;
(statearr_29633_29688[(1)] = (13));

} else {
var statearr_29634_29689 = state_29591__$1;
(statearr_29634_29689[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (9))){
var inst_29493 = (state_29591[(8)]);
var state_29591__$1 = state_29591;
var statearr_29635_29690 = state_29591__$1;
(statearr_29635_29690[(2)] = inst_29493);

(statearr_29635_29690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (5))){
var state_29591__$1 = state_29591;
var statearr_29636_29691 = state_29591__$1;
(statearr_29636_29691[(2)] = true);

(statearr_29636_29691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (14))){
var state_29591__$1 = state_29591;
var statearr_29637_29692 = state_29591__$1;
(statearr_29637_29692[(2)] = false);

(statearr_29637_29692[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (26))){
var inst_29551 = (state_29591[(11)]);
var inst_29558 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29551);
var state_29591__$1 = state_29591;
var statearr_29638_29693 = state_29591__$1;
(statearr_29638_29693[(2)] = inst_29558);

(statearr_29638_29693[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (16))){
var state_29591__$1 = state_29591;
var statearr_29639_29694 = state_29591__$1;
(statearr_29639_29694[(2)] = true);

(statearr_29639_29694[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (38))){
var inst_29581 = (state_29591[(2)]);
var state_29591__$1 = state_29591;
var statearr_29640_29695 = state_29591__$1;
(statearr_29640_29695[(2)] = inst_29581);

(statearr_29640_29695[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (30))){
var inst_29542 = (state_29591[(10)]);
var inst_29543 = (state_29591[(13)]);
var inst_29551 = (state_29591[(11)]);
var inst_29568 = cljs.core.empty_QMARK_.call(null,inst_29542);
var inst_29569 = inst_29543.call(null,inst_29551);
var inst_29570 = cljs.core.not.call(null,inst_29569);
var inst_29571 = (inst_29568) && (inst_29570);
var state_29591__$1 = state_29591;
var statearr_29641_29696 = state_29591__$1;
(statearr_29641_29696[(2)] = inst_29571);

(statearr_29641_29696[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (10))){
var inst_29493 = (state_29591[(8)]);
var inst_29514 = (state_29591[(2)]);
var inst_29515 = cljs.core.get.call(null,inst_29514,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29516 = cljs.core.get.call(null,inst_29514,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29517 = cljs.core.get.call(null,inst_29514,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29518 = inst_29493;
var state_29591__$1 = (function (){var statearr_29642 = state_29591;
(statearr_29642[(7)] = inst_29518);

(statearr_29642[(16)] = inst_29517);

(statearr_29642[(17)] = inst_29515);

(statearr_29642[(18)] = inst_29516);

return statearr_29642;
})();
var statearr_29643_29697 = state_29591__$1;
(statearr_29643_29697[(2)] = null);

(statearr_29643_29697[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (18))){
var inst_29533 = (state_29591[(2)]);
var state_29591__$1 = state_29591;
var statearr_29644_29698 = state_29591__$1;
(statearr_29644_29698[(2)] = inst_29533);

(statearr_29644_29698[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (37))){
var state_29591__$1 = state_29591;
var statearr_29645_29699 = state_29591__$1;
(statearr_29645_29699[(2)] = null);

(statearr_29645_29699[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29592 === (8))){
var inst_29493 = (state_29591[(8)]);
var inst_29511 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29493);
var state_29591__$1 = state_29591;
var statearr_29646_29700 = state_29591__$1;
(statearr_29646_29700[(2)] = inst_29511);

(statearr_29646_29700[(1)] = (10));


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
});})(c__23265__auto___29654,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23209__auto__,c__23265__auto___29654,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23210__auto__ = null;
var cljs$core$async$mix_$_state_machine__23210__auto____0 = (function (){
var statearr_29650 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29650[(0)] = cljs$core$async$mix_$_state_machine__23210__auto__);

(statearr_29650[(1)] = (1));

return statearr_29650;
});
var cljs$core$async$mix_$_state_machine__23210__auto____1 = (function (state_29591){
while(true){
var ret_value__23211__auto__ = (function (){try{while(true){
var result__23212__auto__ = switch__23209__auto__.call(null,state_29591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23212__auto__;
}
break;
}
}catch (e29651){if((e29651 instanceof Object)){
var ex__23213__auto__ = e29651;
var statearr_29652_29701 = state_29591;
(statearr_29652_29701[(5)] = ex__23213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29702 = state_29591;
state_29591 = G__29702;
continue;
} else {
return ret_value__23211__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23210__auto__ = function(state_29591){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23210__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23210__auto____1.call(this,state_29591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23210__auto____0;
cljs$core$async$mix_$_state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23210__auto____1;
return cljs$core$async$mix_$_state_machine__23210__auto__;
})()
;})(switch__23209__auto__,c__23265__auto___29654,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23267__auto__ = (function (){var statearr_29653 = f__23266__auto__.call(null);
(statearr_29653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23265__auto___29654);

return statearr_29653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23267__auto__);
});})(c__23265__auto___29654,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18629__auto__ = (((p == null))?null:p);
var m__18630__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18629__auto__)]);
if(!((m__18630__auto__ == null))){
return m__18630__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__18630__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__18630__auto____$1 == null))){
return m__18630__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18629__auto__ = (((p == null))?null:p);
var m__18630__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18629__auto__)]);
if(!((m__18630__auto__ == null))){
return m__18630__auto__.call(null,p,v,ch);
} else {
var m__18630__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__18630__auto____$1 == null))){
return m__18630__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29703 = [];
var len__19074__auto___29706 = arguments.length;
var i__19075__auto___29707 = (0);
while(true){
if((i__19075__auto___29707 < len__19074__auto___29706)){
args29703.push((arguments[i__19075__auto___29707]));

var G__29708 = (i__19075__auto___29707 + (1));
i__19075__auto___29707 = G__29708;
continue;
} else {
}
break;
}

var G__29705 = args29703.length;
switch (G__29705) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29703.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18629__auto__ = (((p == null))?null:p);
var m__18630__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18629__auto__)]);
if(!((m__18630__auto__ == null))){
return m__18630__auto__.call(null,p);
} else {
var m__18630__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18630__auto____$1 == null))){
return m__18630__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18629__auto__ = (((p == null))?null:p);
var m__18630__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18629__auto__)]);
if(!((m__18630__auto__ == null))){
return m__18630__auto__.call(null,p,v);
} else {
var m__18630__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18630__auto____$1 == null))){
return m__18630__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args29711 = [];
var len__19074__auto___29836 = arguments.length;
var i__19075__auto___29837 = (0);
while(true){
if((i__19075__auto___29837 < len__19074__auto___29836)){
args29711.push((arguments[i__19075__auto___29837]));

var G__29838 = (i__19075__auto___29837 + (1));
i__19075__auto___29837 = G__29838;
continue;
} else {
}
break;
}

var G__29713 = args29711.length;
switch (G__29713) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29711.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__17961__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__17961__auto__)){
return or__17961__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__17961__auto__,mults){
return (function (p1__29710_SHARP_){
if(cljs.core.truth_(p1__29710_SHARP_.call(null,topic))){
return p1__29710_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29710_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__17961__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29714 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29714 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29715){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29715 = meta29715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29716,meta29715__$1){
var self__ = this;
var _29716__$1 = this;
return (new cljs.core.async.t_cljs$core$async29714(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29715__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29714.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29716){
var self__ = this;
var _29716__$1 = this;
return self__.meta29715;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29714.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29714.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29714.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29714.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29714.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29714.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29714.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29714.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29715","meta29715",-579081263,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29714.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29714.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29714";

cljs.core.async.t_cljs$core$async29714.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18572__auto__,writer__18573__auto__,opt__18574__auto__){
return cljs.core._write.call(null,writer__18573__auto__,"cljs.core.async/t_cljs$core$async29714");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29714 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29714(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29715){
return (new cljs.core.async.t_cljs$core$async29714(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29715));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29714(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23265__auto___29840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23265__auto___29840,mults,ensure_mult,p){
return (function (){
var f__23266__auto__ = (function (){var switch__23209__auto__ = ((function (c__23265__auto___29840,mults,ensure_mult,p){
return (function (state_29788){
var state_val_29789 = (state_29788[(1)]);
if((state_val_29789 === (7))){
var inst_29784 = (state_29788[(2)]);
var state_29788__$1 = state_29788;
var statearr_29790_29841 = state_29788__$1;
(statearr_29790_29841[(2)] = inst_29784);

(statearr_29790_29841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (20))){
var state_29788__$1 = state_29788;
var statearr_29791_29842 = state_29788__$1;
(statearr_29791_29842[(2)] = null);

(statearr_29791_29842[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (1))){
var state_29788__$1 = state_29788;
var statearr_29792_29843 = state_29788__$1;
(statearr_29792_29843[(2)] = null);

(statearr_29792_29843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (24))){
var inst_29767 = (state_29788[(7)]);
var inst_29776 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29767);
var state_29788__$1 = state_29788;
var statearr_29793_29844 = state_29788__$1;
(statearr_29793_29844[(2)] = inst_29776);

(statearr_29793_29844[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (4))){
var inst_29719 = (state_29788[(8)]);
var inst_29719__$1 = (state_29788[(2)]);
var inst_29720 = (inst_29719__$1 == null);
var state_29788__$1 = (function (){var statearr_29794 = state_29788;
(statearr_29794[(8)] = inst_29719__$1);

return statearr_29794;
})();
if(cljs.core.truth_(inst_29720)){
var statearr_29795_29845 = state_29788__$1;
(statearr_29795_29845[(1)] = (5));

} else {
var statearr_29796_29846 = state_29788__$1;
(statearr_29796_29846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (15))){
var inst_29761 = (state_29788[(2)]);
var state_29788__$1 = state_29788;
var statearr_29797_29847 = state_29788__$1;
(statearr_29797_29847[(2)] = inst_29761);

(statearr_29797_29847[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (21))){
var inst_29781 = (state_29788[(2)]);
var state_29788__$1 = (function (){var statearr_29798 = state_29788;
(statearr_29798[(9)] = inst_29781);

return statearr_29798;
})();
var statearr_29799_29848 = state_29788__$1;
(statearr_29799_29848[(2)] = null);

(statearr_29799_29848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (13))){
var inst_29743 = (state_29788[(10)]);
var inst_29745 = cljs.core.chunked_seq_QMARK_.call(null,inst_29743);
var state_29788__$1 = state_29788;
if(inst_29745){
var statearr_29800_29849 = state_29788__$1;
(statearr_29800_29849[(1)] = (16));

} else {
var statearr_29801_29850 = state_29788__$1;
(statearr_29801_29850[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (22))){
var inst_29773 = (state_29788[(2)]);
var state_29788__$1 = state_29788;
if(cljs.core.truth_(inst_29773)){
var statearr_29802_29851 = state_29788__$1;
(statearr_29802_29851[(1)] = (23));

} else {
var statearr_29803_29852 = state_29788__$1;
(statearr_29803_29852[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (6))){
var inst_29719 = (state_29788[(8)]);
var inst_29769 = (state_29788[(11)]);
var inst_29767 = (state_29788[(7)]);
var inst_29767__$1 = topic_fn.call(null,inst_29719);
var inst_29768 = cljs.core.deref.call(null,mults);
var inst_29769__$1 = cljs.core.get.call(null,inst_29768,inst_29767__$1);
var state_29788__$1 = (function (){var statearr_29804 = state_29788;
(statearr_29804[(11)] = inst_29769__$1);

(statearr_29804[(7)] = inst_29767__$1);

return statearr_29804;
})();
if(cljs.core.truth_(inst_29769__$1)){
var statearr_29805_29853 = state_29788__$1;
(statearr_29805_29853[(1)] = (19));

} else {
var statearr_29806_29854 = state_29788__$1;
(statearr_29806_29854[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (25))){
var inst_29778 = (state_29788[(2)]);
var state_29788__$1 = state_29788;
var statearr_29807_29855 = state_29788__$1;
(statearr_29807_29855[(2)] = inst_29778);

(statearr_29807_29855[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (17))){
var inst_29743 = (state_29788[(10)]);
var inst_29752 = cljs.core.first.call(null,inst_29743);
var inst_29753 = cljs.core.async.muxch_STAR_.call(null,inst_29752);
var inst_29754 = cljs.core.async.close_BANG_.call(null,inst_29753);
var inst_29755 = cljs.core.next.call(null,inst_29743);
var inst_29729 = inst_29755;
var inst_29730 = null;
var inst_29731 = (0);
var inst_29732 = (0);
var state_29788__$1 = (function (){var statearr_29808 = state_29788;
(statearr_29808[(12)] = inst_29729);

(statearr_29808[(13)] = inst_29731);

(statearr_29808[(14)] = inst_29730);

(statearr_29808[(15)] = inst_29732);

(statearr_29808[(16)] = inst_29754);

return statearr_29808;
})();
var statearr_29809_29856 = state_29788__$1;
(statearr_29809_29856[(2)] = null);

(statearr_29809_29856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (3))){
var inst_29786 = (state_29788[(2)]);
var state_29788__$1 = state_29788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29788__$1,inst_29786);
} else {
if((state_val_29789 === (12))){
var inst_29763 = (state_29788[(2)]);
var state_29788__$1 = state_29788;
var statearr_29810_29857 = state_29788__$1;
(statearr_29810_29857[(2)] = inst_29763);

(statearr_29810_29857[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (2))){
var state_29788__$1 = state_29788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29788__$1,(4),ch);
} else {
if((state_val_29789 === (23))){
var state_29788__$1 = state_29788;
var statearr_29811_29858 = state_29788__$1;
(statearr_29811_29858[(2)] = null);

(statearr_29811_29858[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (19))){
var inst_29719 = (state_29788[(8)]);
var inst_29769 = (state_29788[(11)]);
var inst_29771 = cljs.core.async.muxch_STAR_.call(null,inst_29769);
var state_29788__$1 = state_29788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29788__$1,(22),inst_29771,inst_29719);
} else {
if((state_val_29789 === (11))){
var inst_29729 = (state_29788[(12)]);
var inst_29743 = (state_29788[(10)]);
var inst_29743__$1 = cljs.core.seq.call(null,inst_29729);
var state_29788__$1 = (function (){var statearr_29812 = state_29788;
(statearr_29812[(10)] = inst_29743__$1);

return statearr_29812;
})();
if(inst_29743__$1){
var statearr_29813_29859 = state_29788__$1;
(statearr_29813_29859[(1)] = (13));

} else {
var statearr_29814_29860 = state_29788__$1;
(statearr_29814_29860[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (9))){
var inst_29765 = (state_29788[(2)]);
var state_29788__$1 = state_29788;
var statearr_29815_29861 = state_29788__$1;
(statearr_29815_29861[(2)] = inst_29765);

(statearr_29815_29861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (5))){
var inst_29726 = cljs.core.deref.call(null,mults);
var inst_29727 = cljs.core.vals.call(null,inst_29726);
var inst_29728 = cljs.core.seq.call(null,inst_29727);
var inst_29729 = inst_29728;
var inst_29730 = null;
var inst_29731 = (0);
var inst_29732 = (0);
var state_29788__$1 = (function (){var statearr_29816 = state_29788;
(statearr_29816[(12)] = inst_29729);

(statearr_29816[(13)] = inst_29731);

(statearr_29816[(14)] = inst_29730);

(statearr_29816[(15)] = inst_29732);

return statearr_29816;
})();
var statearr_29817_29862 = state_29788__$1;
(statearr_29817_29862[(2)] = null);

(statearr_29817_29862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (14))){
var state_29788__$1 = state_29788;
var statearr_29821_29863 = state_29788__$1;
(statearr_29821_29863[(2)] = null);

(statearr_29821_29863[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (16))){
var inst_29743 = (state_29788[(10)]);
var inst_29747 = cljs.core.chunk_first.call(null,inst_29743);
var inst_29748 = cljs.core.chunk_rest.call(null,inst_29743);
var inst_29749 = cljs.core.count.call(null,inst_29747);
var inst_29729 = inst_29748;
var inst_29730 = inst_29747;
var inst_29731 = inst_29749;
var inst_29732 = (0);
var state_29788__$1 = (function (){var statearr_29822 = state_29788;
(statearr_29822[(12)] = inst_29729);

(statearr_29822[(13)] = inst_29731);

(statearr_29822[(14)] = inst_29730);

(statearr_29822[(15)] = inst_29732);

return statearr_29822;
})();
var statearr_29823_29864 = state_29788__$1;
(statearr_29823_29864[(2)] = null);

(statearr_29823_29864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (10))){
var inst_29729 = (state_29788[(12)]);
var inst_29731 = (state_29788[(13)]);
var inst_29730 = (state_29788[(14)]);
var inst_29732 = (state_29788[(15)]);
var inst_29737 = cljs.core._nth.call(null,inst_29730,inst_29732);
var inst_29738 = cljs.core.async.muxch_STAR_.call(null,inst_29737);
var inst_29739 = cljs.core.async.close_BANG_.call(null,inst_29738);
var inst_29740 = (inst_29732 + (1));
var tmp29818 = inst_29729;
var tmp29819 = inst_29731;
var tmp29820 = inst_29730;
var inst_29729__$1 = tmp29818;
var inst_29730__$1 = tmp29820;
var inst_29731__$1 = tmp29819;
var inst_29732__$1 = inst_29740;
var state_29788__$1 = (function (){var statearr_29824 = state_29788;
(statearr_29824[(17)] = inst_29739);

(statearr_29824[(12)] = inst_29729__$1);

(statearr_29824[(13)] = inst_29731__$1);

(statearr_29824[(14)] = inst_29730__$1);

(statearr_29824[(15)] = inst_29732__$1);

return statearr_29824;
})();
var statearr_29825_29865 = state_29788__$1;
(statearr_29825_29865[(2)] = null);

(statearr_29825_29865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (18))){
var inst_29758 = (state_29788[(2)]);
var state_29788__$1 = state_29788;
var statearr_29826_29866 = state_29788__$1;
(statearr_29826_29866[(2)] = inst_29758);

(statearr_29826_29866[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (8))){
var inst_29731 = (state_29788[(13)]);
var inst_29732 = (state_29788[(15)]);
var inst_29734 = (inst_29732 < inst_29731);
var inst_29735 = inst_29734;
var state_29788__$1 = state_29788;
if(cljs.core.truth_(inst_29735)){
var statearr_29827_29867 = state_29788__$1;
(statearr_29827_29867[(1)] = (10));

} else {
var statearr_29828_29868 = state_29788__$1;
(statearr_29828_29868[(1)] = (11));

}

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
}
}
}
}
}
}
}
});})(c__23265__auto___29840,mults,ensure_mult,p))
;
return ((function (switch__23209__auto__,c__23265__auto___29840,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23210__auto__ = null;
var cljs$core$async$state_machine__23210__auto____0 = (function (){
var statearr_29832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29832[(0)] = cljs$core$async$state_machine__23210__auto__);

(statearr_29832[(1)] = (1));

return statearr_29832;
});
var cljs$core$async$state_machine__23210__auto____1 = (function (state_29788){
while(true){
var ret_value__23211__auto__ = (function (){try{while(true){
var result__23212__auto__ = switch__23209__auto__.call(null,state_29788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23212__auto__;
}
break;
}
}catch (e29833){if((e29833 instanceof Object)){
var ex__23213__auto__ = e29833;
var statearr_29834_29869 = state_29788;
(statearr_29834_29869[(5)] = ex__23213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29870 = state_29788;
state_29788 = G__29870;
continue;
} else {
return ret_value__23211__auto__;
}
break;
}
});
cljs$core$async$state_machine__23210__auto__ = function(state_29788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23210__auto____1.call(this,state_29788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23210__auto____0;
cljs$core$async$state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23210__auto____1;
return cljs$core$async$state_machine__23210__auto__;
})()
;})(switch__23209__auto__,c__23265__auto___29840,mults,ensure_mult,p))
})();
var state__23267__auto__ = (function (){var statearr_29835 = f__23266__auto__.call(null);
(statearr_29835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23265__auto___29840);

return statearr_29835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23267__auto__);
});})(c__23265__auto___29840,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29871 = [];
var len__19074__auto___29874 = arguments.length;
var i__19075__auto___29875 = (0);
while(true){
if((i__19075__auto___29875 < len__19074__auto___29874)){
args29871.push((arguments[i__19075__auto___29875]));

var G__29876 = (i__19075__auto___29875 + (1));
i__19075__auto___29875 = G__29876;
continue;
} else {
}
break;
}

var G__29873 = args29871.length;
switch (G__29873) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29871.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29878 = [];
var len__19074__auto___29881 = arguments.length;
var i__19075__auto___29882 = (0);
while(true){
if((i__19075__auto___29882 < len__19074__auto___29881)){
args29878.push((arguments[i__19075__auto___29882]));

var G__29883 = (i__19075__auto___29882 + (1));
i__19075__auto___29882 = G__29883;
continue;
} else {
}
break;
}

var G__29880 = args29878.length;
switch (G__29880) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29878.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29885 = [];
var len__19074__auto___29956 = arguments.length;
var i__19075__auto___29957 = (0);
while(true){
if((i__19075__auto___29957 < len__19074__auto___29956)){
args29885.push((arguments[i__19075__auto___29957]));

var G__29958 = (i__19075__auto___29957 + (1));
i__19075__auto___29957 = G__29958;
continue;
} else {
}
break;
}

var G__29887 = args29885.length;
switch (G__29887) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29885.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23265__auto___29960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23265__auto___29960,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23266__auto__ = (function (){var switch__23209__auto__ = ((function (c__23265__auto___29960,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29926){
var state_val_29927 = (state_29926[(1)]);
if((state_val_29927 === (7))){
var state_29926__$1 = state_29926;
var statearr_29928_29961 = state_29926__$1;
(statearr_29928_29961[(2)] = null);

(statearr_29928_29961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (1))){
var state_29926__$1 = state_29926;
var statearr_29929_29962 = state_29926__$1;
(statearr_29929_29962[(2)] = null);

(statearr_29929_29962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (4))){
var inst_29890 = (state_29926[(7)]);
var inst_29892 = (inst_29890 < cnt);
var state_29926__$1 = state_29926;
if(cljs.core.truth_(inst_29892)){
var statearr_29930_29963 = state_29926__$1;
(statearr_29930_29963[(1)] = (6));

} else {
var statearr_29931_29964 = state_29926__$1;
(statearr_29931_29964[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (15))){
var inst_29922 = (state_29926[(2)]);
var state_29926__$1 = state_29926;
var statearr_29932_29965 = state_29926__$1;
(statearr_29932_29965[(2)] = inst_29922);

(statearr_29932_29965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (13))){
var inst_29915 = cljs.core.async.close_BANG_.call(null,out);
var state_29926__$1 = state_29926;
var statearr_29933_29966 = state_29926__$1;
(statearr_29933_29966[(2)] = inst_29915);

(statearr_29933_29966[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (6))){
var state_29926__$1 = state_29926;
var statearr_29934_29967 = state_29926__$1;
(statearr_29934_29967[(2)] = null);

(statearr_29934_29967[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (3))){
var inst_29924 = (state_29926[(2)]);
var state_29926__$1 = state_29926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29926__$1,inst_29924);
} else {
if((state_val_29927 === (12))){
var inst_29912 = (state_29926[(8)]);
var inst_29912__$1 = (state_29926[(2)]);
var inst_29913 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29912__$1);
var state_29926__$1 = (function (){var statearr_29935 = state_29926;
(statearr_29935[(8)] = inst_29912__$1);

return statearr_29935;
})();
if(cljs.core.truth_(inst_29913)){
var statearr_29936_29968 = state_29926__$1;
(statearr_29936_29968[(1)] = (13));

} else {
var statearr_29937_29969 = state_29926__$1;
(statearr_29937_29969[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (2))){
var inst_29889 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29890 = (0);
var state_29926__$1 = (function (){var statearr_29938 = state_29926;
(statearr_29938[(7)] = inst_29890);

(statearr_29938[(9)] = inst_29889);

return statearr_29938;
})();
var statearr_29939_29970 = state_29926__$1;
(statearr_29939_29970[(2)] = null);

(statearr_29939_29970[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (11))){
var inst_29890 = (state_29926[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29926,(10),Object,null,(9));
var inst_29899 = chs__$1.call(null,inst_29890);
var inst_29900 = done.call(null,inst_29890);
var inst_29901 = cljs.core.async.take_BANG_.call(null,inst_29899,inst_29900);
var state_29926__$1 = state_29926;
var statearr_29940_29971 = state_29926__$1;
(statearr_29940_29971[(2)] = inst_29901);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29926__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (9))){
var inst_29890 = (state_29926[(7)]);
var inst_29903 = (state_29926[(2)]);
var inst_29904 = (inst_29890 + (1));
var inst_29890__$1 = inst_29904;
var state_29926__$1 = (function (){var statearr_29941 = state_29926;
(statearr_29941[(10)] = inst_29903);

(statearr_29941[(7)] = inst_29890__$1);

return statearr_29941;
})();
var statearr_29942_29972 = state_29926__$1;
(statearr_29942_29972[(2)] = null);

(statearr_29942_29972[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (5))){
var inst_29910 = (state_29926[(2)]);
var state_29926__$1 = (function (){var statearr_29943 = state_29926;
(statearr_29943[(11)] = inst_29910);

return statearr_29943;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29926__$1,(12),dchan);
} else {
if((state_val_29927 === (14))){
var inst_29912 = (state_29926[(8)]);
var inst_29917 = cljs.core.apply.call(null,f,inst_29912);
var state_29926__$1 = state_29926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29926__$1,(16),out,inst_29917);
} else {
if((state_val_29927 === (16))){
var inst_29919 = (state_29926[(2)]);
var state_29926__$1 = (function (){var statearr_29944 = state_29926;
(statearr_29944[(12)] = inst_29919);

return statearr_29944;
})();
var statearr_29945_29973 = state_29926__$1;
(statearr_29945_29973[(2)] = null);

(statearr_29945_29973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (10))){
var inst_29894 = (state_29926[(2)]);
var inst_29895 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29926__$1 = (function (){var statearr_29946 = state_29926;
(statearr_29946[(13)] = inst_29894);

return statearr_29946;
})();
var statearr_29947_29974 = state_29926__$1;
(statearr_29947_29974[(2)] = inst_29895);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29926__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29927 === (8))){
var inst_29908 = (state_29926[(2)]);
var state_29926__$1 = state_29926;
var statearr_29948_29975 = state_29926__$1;
(statearr_29948_29975[(2)] = inst_29908);

(statearr_29948_29975[(1)] = (5));


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
}
}
}
}
}
}
}
}
});})(c__23265__auto___29960,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23209__auto__,c__23265__auto___29960,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23210__auto__ = null;
var cljs$core$async$state_machine__23210__auto____0 = (function (){
var statearr_29952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29952[(0)] = cljs$core$async$state_machine__23210__auto__);

(statearr_29952[(1)] = (1));

return statearr_29952;
});
var cljs$core$async$state_machine__23210__auto____1 = (function (state_29926){
while(true){
var ret_value__23211__auto__ = (function (){try{while(true){
var result__23212__auto__ = switch__23209__auto__.call(null,state_29926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23212__auto__;
}
break;
}
}catch (e29953){if((e29953 instanceof Object)){
var ex__23213__auto__ = e29953;
var statearr_29954_29976 = state_29926;
(statearr_29954_29976[(5)] = ex__23213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29977 = state_29926;
state_29926 = G__29977;
continue;
} else {
return ret_value__23211__auto__;
}
break;
}
});
cljs$core$async$state_machine__23210__auto__ = function(state_29926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23210__auto____1.call(this,state_29926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23210__auto____0;
cljs$core$async$state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23210__auto____1;
return cljs$core$async$state_machine__23210__auto__;
})()
;})(switch__23209__auto__,c__23265__auto___29960,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23267__auto__ = (function (){var statearr_29955 = f__23266__auto__.call(null);
(statearr_29955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23265__auto___29960);

return statearr_29955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23267__auto__);
});})(c__23265__auto___29960,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29979 = [];
var len__19074__auto___30037 = arguments.length;
var i__19075__auto___30038 = (0);
while(true){
if((i__19075__auto___30038 < len__19074__auto___30037)){
args29979.push((arguments[i__19075__auto___30038]));

var G__30039 = (i__19075__auto___30038 + (1));
i__19075__auto___30038 = G__30039;
continue;
} else {
}
break;
}

var G__29981 = args29979.length;
switch (G__29981) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29979.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23265__auto___30041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23265__auto___30041,out){
return (function (){
var f__23266__auto__ = (function (){var switch__23209__auto__ = ((function (c__23265__auto___30041,out){
return (function (state_30013){
var state_val_30014 = (state_30013[(1)]);
if((state_val_30014 === (7))){
var inst_29992 = (state_30013[(7)]);
var inst_29993 = (state_30013[(8)]);
var inst_29992__$1 = (state_30013[(2)]);
var inst_29993__$1 = cljs.core.nth.call(null,inst_29992__$1,(0),null);
var inst_29994 = cljs.core.nth.call(null,inst_29992__$1,(1),null);
var inst_29995 = (inst_29993__$1 == null);
var state_30013__$1 = (function (){var statearr_30015 = state_30013;
(statearr_30015[(9)] = inst_29994);

(statearr_30015[(7)] = inst_29992__$1);

(statearr_30015[(8)] = inst_29993__$1);

return statearr_30015;
})();
if(cljs.core.truth_(inst_29995)){
var statearr_30016_30042 = state_30013__$1;
(statearr_30016_30042[(1)] = (8));

} else {
var statearr_30017_30043 = state_30013__$1;
(statearr_30017_30043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (1))){
var inst_29982 = cljs.core.vec.call(null,chs);
var inst_29983 = inst_29982;
var state_30013__$1 = (function (){var statearr_30018 = state_30013;
(statearr_30018[(10)] = inst_29983);

return statearr_30018;
})();
var statearr_30019_30044 = state_30013__$1;
(statearr_30019_30044[(2)] = null);

(statearr_30019_30044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (4))){
var inst_29983 = (state_30013[(10)]);
var state_30013__$1 = state_30013;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30013__$1,(7),inst_29983);
} else {
if((state_val_30014 === (6))){
var inst_30009 = (state_30013[(2)]);
var state_30013__$1 = state_30013;
var statearr_30020_30045 = state_30013__$1;
(statearr_30020_30045[(2)] = inst_30009);

(statearr_30020_30045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (3))){
var inst_30011 = (state_30013[(2)]);
var state_30013__$1 = state_30013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30013__$1,inst_30011);
} else {
if((state_val_30014 === (2))){
var inst_29983 = (state_30013[(10)]);
var inst_29985 = cljs.core.count.call(null,inst_29983);
var inst_29986 = (inst_29985 > (0));
var state_30013__$1 = state_30013;
if(cljs.core.truth_(inst_29986)){
var statearr_30022_30046 = state_30013__$1;
(statearr_30022_30046[(1)] = (4));

} else {
var statearr_30023_30047 = state_30013__$1;
(statearr_30023_30047[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (11))){
var inst_29983 = (state_30013[(10)]);
var inst_30002 = (state_30013[(2)]);
var tmp30021 = inst_29983;
var inst_29983__$1 = tmp30021;
var state_30013__$1 = (function (){var statearr_30024 = state_30013;
(statearr_30024[(11)] = inst_30002);

(statearr_30024[(10)] = inst_29983__$1);

return statearr_30024;
})();
var statearr_30025_30048 = state_30013__$1;
(statearr_30025_30048[(2)] = null);

(statearr_30025_30048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (9))){
var inst_29993 = (state_30013[(8)]);
var state_30013__$1 = state_30013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30013__$1,(11),out,inst_29993);
} else {
if((state_val_30014 === (5))){
var inst_30007 = cljs.core.async.close_BANG_.call(null,out);
var state_30013__$1 = state_30013;
var statearr_30026_30049 = state_30013__$1;
(statearr_30026_30049[(2)] = inst_30007);

(statearr_30026_30049[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (10))){
var inst_30005 = (state_30013[(2)]);
var state_30013__$1 = state_30013;
var statearr_30027_30050 = state_30013__$1;
(statearr_30027_30050[(2)] = inst_30005);

(statearr_30027_30050[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30014 === (8))){
var inst_29994 = (state_30013[(9)]);
var inst_29992 = (state_30013[(7)]);
var inst_29993 = (state_30013[(8)]);
var inst_29983 = (state_30013[(10)]);
var inst_29997 = (function (){var cs = inst_29983;
var vec__29988 = inst_29992;
var v = inst_29993;
var c = inst_29994;
return ((function (cs,vec__29988,v,c,inst_29994,inst_29992,inst_29993,inst_29983,state_val_30014,c__23265__auto___30041,out){
return (function (p1__29978_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29978_SHARP_);
});
;})(cs,vec__29988,v,c,inst_29994,inst_29992,inst_29993,inst_29983,state_val_30014,c__23265__auto___30041,out))
})();
var inst_29998 = cljs.core.filterv.call(null,inst_29997,inst_29983);
var inst_29983__$1 = inst_29998;
var state_30013__$1 = (function (){var statearr_30028 = state_30013;
(statearr_30028[(10)] = inst_29983__$1);

return statearr_30028;
})();
var statearr_30029_30051 = state_30013__$1;
(statearr_30029_30051[(2)] = null);

(statearr_30029_30051[(1)] = (2));


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
}
}
}
});})(c__23265__auto___30041,out))
;
return ((function (switch__23209__auto__,c__23265__auto___30041,out){
return (function() {
var cljs$core$async$state_machine__23210__auto__ = null;
var cljs$core$async$state_machine__23210__auto____0 = (function (){
var statearr_30033 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30033[(0)] = cljs$core$async$state_machine__23210__auto__);

(statearr_30033[(1)] = (1));

return statearr_30033;
});
var cljs$core$async$state_machine__23210__auto____1 = (function (state_30013){
while(true){
var ret_value__23211__auto__ = (function (){try{while(true){
var result__23212__auto__ = switch__23209__auto__.call(null,state_30013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23212__auto__;
}
break;
}
}catch (e30034){if((e30034 instanceof Object)){
var ex__23213__auto__ = e30034;
var statearr_30035_30052 = state_30013;
(statearr_30035_30052[(5)] = ex__23213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30053 = state_30013;
state_30013 = G__30053;
continue;
} else {
return ret_value__23211__auto__;
}
break;
}
});
cljs$core$async$state_machine__23210__auto__ = function(state_30013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23210__auto____1.call(this,state_30013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23210__auto____0;
cljs$core$async$state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23210__auto____1;
return cljs$core$async$state_machine__23210__auto__;
})()
;})(switch__23209__auto__,c__23265__auto___30041,out))
})();
var state__23267__auto__ = (function (){var statearr_30036 = f__23266__auto__.call(null);
(statearr_30036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23265__auto___30041);

return statearr_30036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23267__auto__);
});})(c__23265__auto___30041,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args30054 = [];
var len__19074__auto___30103 = arguments.length;
var i__19075__auto___30104 = (0);
while(true){
if((i__19075__auto___30104 < len__19074__auto___30103)){
args30054.push((arguments[i__19075__auto___30104]));

var G__30105 = (i__19075__auto___30104 + (1));
i__19075__auto___30104 = G__30105;
continue;
} else {
}
break;
}

var G__30056 = args30054.length;
switch (G__30056) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30054.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23265__auto___30107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23265__auto___30107,out){
return (function (){
var f__23266__auto__ = (function (){var switch__23209__auto__ = ((function (c__23265__auto___30107,out){
return (function (state_30080){
var state_val_30081 = (state_30080[(1)]);
if((state_val_30081 === (7))){
var inst_30062 = (state_30080[(7)]);
var inst_30062__$1 = (state_30080[(2)]);
var inst_30063 = (inst_30062__$1 == null);
var inst_30064 = cljs.core.not.call(null,inst_30063);
var state_30080__$1 = (function (){var statearr_30082 = state_30080;
(statearr_30082[(7)] = inst_30062__$1);

return statearr_30082;
})();
if(inst_30064){
var statearr_30083_30108 = state_30080__$1;
(statearr_30083_30108[(1)] = (8));

} else {
var statearr_30084_30109 = state_30080__$1;
(statearr_30084_30109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30081 === (1))){
var inst_30057 = (0);
var state_30080__$1 = (function (){var statearr_30085 = state_30080;
(statearr_30085[(8)] = inst_30057);

return statearr_30085;
})();
var statearr_30086_30110 = state_30080__$1;
(statearr_30086_30110[(2)] = null);

(statearr_30086_30110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30081 === (4))){
var state_30080__$1 = state_30080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30080__$1,(7),ch);
} else {
if((state_val_30081 === (6))){
var inst_30075 = (state_30080[(2)]);
var state_30080__$1 = state_30080;
var statearr_30087_30111 = state_30080__$1;
(statearr_30087_30111[(2)] = inst_30075);

(statearr_30087_30111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30081 === (3))){
var inst_30077 = (state_30080[(2)]);
var inst_30078 = cljs.core.async.close_BANG_.call(null,out);
var state_30080__$1 = (function (){var statearr_30088 = state_30080;
(statearr_30088[(9)] = inst_30077);

return statearr_30088;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30080__$1,inst_30078);
} else {
if((state_val_30081 === (2))){
var inst_30057 = (state_30080[(8)]);
var inst_30059 = (inst_30057 < n);
var state_30080__$1 = state_30080;
if(cljs.core.truth_(inst_30059)){
var statearr_30089_30112 = state_30080__$1;
(statearr_30089_30112[(1)] = (4));

} else {
var statearr_30090_30113 = state_30080__$1;
(statearr_30090_30113[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30081 === (11))){
var inst_30057 = (state_30080[(8)]);
var inst_30067 = (state_30080[(2)]);
var inst_30068 = (inst_30057 + (1));
var inst_30057__$1 = inst_30068;
var state_30080__$1 = (function (){var statearr_30091 = state_30080;
(statearr_30091[(8)] = inst_30057__$1);

(statearr_30091[(10)] = inst_30067);

return statearr_30091;
})();
var statearr_30092_30114 = state_30080__$1;
(statearr_30092_30114[(2)] = null);

(statearr_30092_30114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30081 === (9))){
var state_30080__$1 = state_30080;
var statearr_30093_30115 = state_30080__$1;
(statearr_30093_30115[(2)] = null);

(statearr_30093_30115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30081 === (5))){
var state_30080__$1 = state_30080;
var statearr_30094_30116 = state_30080__$1;
(statearr_30094_30116[(2)] = null);

(statearr_30094_30116[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30081 === (10))){
var inst_30072 = (state_30080[(2)]);
var state_30080__$1 = state_30080;
var statearr_30095_30117 = state_30080__$1;
(statearr_30095_30117[(2)] = inst_30072);

(statearr_30095_30117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30081 === (8))){
var inst_30062 = (state_30080[(7)]);
var state_30080__$1 = state_30080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30080__$1,(11),out,inst_30062);
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
}
});})(c__23265__auto___30107,out))
;
return ((function (switch__23209__auto__,c__23265__auto___30107,out){
return (function() {
var cljs$core$async$state_machine__23210__auto__ = null;
var cljs$core$async$state_machine__23210__auto____0 = (function (){
var statearr_30099 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30099[(0)] = cljs$core$async$state_machine__23210__auto__);

(statearr_30099[(1)] = (1));

return statearr_30099;
});
var cljs$core$async$state_machine__23210__auto____1 = (function (state_30080){
while(true){
var ret_value__23211__auto__ = (function (){try{while(true){
var result__23212__auto__ = switch__23209__auto__.call(null,state_30080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23212__auto__;
}
break;
}
}catch (e30100){if((e30100 instanceof Object)){
var ex__23213__auto__ = e30100;
var statearr_30101_30118 = state_30080;
(statearr_30101_30118[(5)] = ex__23213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30119 = state_30080;
state_30080 = G__30119;
continue;
} else {
return ret_value__23211__auto__;
}
break;
}
});
cljs$core$async$state_machine__23210__auto__ = function(state_30080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23210__auto____1.call(this,state_30080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23210__auto____0;
cljs$core$async$state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23210__auto____1;
return cljs$core$async$state_machine__23210__auto__;
})()
;})(switch__23209__auto__,c__23265__auto___30107,out))
})();
var state__23267__auto__ = (function (){var statearr_30102 = f__23266__auto__.call(null);
(statearr_30102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23265__auto___30107);

return statearr_30102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23267__auto__);
});})(c__23265__auto___30107,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30127 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30127 = (function (f,ch,meta30128){
this.f = f;
this.ch = ch;
this.meta30128 = meta30128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30129,meta30128__$1){
var self__ = this;
var _30129__$1 = this;
return (new cljs.core.async.t_cljs$core$async30127(self__.f,self__.ch,meta30128__$1));
});

cljs.core.async.t_cljs$core$async30127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30129){
var self__ = this;
var _30129__$1 = this;
return self__.meta30128;
});

cljs.core.async.t_cljs$core$async30127.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30127.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30127.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30127.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30127.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30130 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30130 = (function (f,ch,meta30128,_,fn1,meta30131){
this.f = f;
this.ch = ch;
this.meta30128 = meta30128;
this._ = _;
this.fn1 = fn1;
this.meta30131 = meta30131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30132,meta30131__$1){
var self__ = this;
var _30132__$1 = this;
return (new cljs.core.async.t_cljs$core$async30130(self__.f,self__.ch,self__.meta30128,self__._,self__.fn1,meta30131__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30130.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30132){
var self__ = this;
var _30132__$1 = this;
return self__.meta30131;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30130.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30130.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30130.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30130.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30120_SHARP_){
return f1.call(null,(((p1__30120_SHARP_ == null))?null:self__.f.call(null,p1__30120_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30130.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30128","meta30128",409341490,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30127","cljs.core.async/t_cljs$core$async30127",-1580541791,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30131","meta30131",-778548416,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30130.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30130";

cljs.core.async.t_cljs$core$async30130.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18572__auto__,writer__18573__auto__,opt__18574__auto__){
return cljs.core._write.call(null,writer__18573__auto__,"cljs.core.async/t_cljs$core$async30130");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30130 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30130(f__$1,ch__$1,meta30128__$1,___$2,fn1__$1,meta30131){
return (new cljs.core.async.t_cljs$core$async30130(f__$1,ch__$1,meta30128__$1,___$2,fn1__$1,meta30131));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30130(self__.f,self__.ch,self__.meta30128,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__17949__auto__ = ret;
if(cljs.core.truth_(and__17949__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__17949__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30127.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30127.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30128","meta30128",409341490,null)], null);
});

cljs.core.async.t_cljs$core$async30127.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30127";

cljs.core.async.t_cljs$core$async30127.cljs$lang$ctorPrWriter = (function (this__18572__auto__,writer__18573__auto__,opt__18574__auto__){
return cljs.core._write.call(null,writer__18573__auto__,"cljs.core.async/t_cljs$core$async30127");
});

cljs.core.async.__GT_t_cljs$core$async30127 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30127(f__$1,ch__$1,meta30128){
return (new cljs.core.async.t_cljs$core$async30127(f__$1,ch__$1,meta30128));
});

}

return (new cljs.core.async.t_cljs$core$async30127(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30136 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30136 = (function (f,ch,meta30137){
this.f = f;
this.ch = ch;
this.meta30137 = meta30137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30138,meta30137__$1){
var self__ = this;
var _30138__$1 = this;
return (new cljs.core.async.t_cljs$core$async30136(self__.f,self__.ch,meta30137__$1));
});

cljs.core.async.t_cljs$core$async30136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30138){
var self__ = this;
var _30138__$1 = this;
return self__.meta30137;
});

cljs.core.async.t_cljs$core$async30136.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30136.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30136.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30136.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30136.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30136.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30136.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30137","meta30137",534204260,null)], null);
});

cljs.core.async.t_cljs$core$async30136.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30136.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30136";

cljs.core.async.t_cljs$core$async30136.cljs$lang$ctorPrWriter = (function (this__18572__auto__,writer__18573__auto__,opt__18574__auto__){
return cljs.core._write.call(null,writer__18573__auto__,"cljs.core.async/t_cljs$core$async30136");
});

cljs.core.async.__GT_t_cljs$core$async30136 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30136(f__$1,ch__$1,meta30137){
return (new cljs.core.async.t_cljs$core$async30136(f__$1,ch__$1,meta30137));
});

}

return (new cljs.core.async.t_cljs$core$async30136(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30142 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30142 = (function (p,ch,meta30143){
this.p = p;
this.ch = ch;
this.meta30143 = meta30143;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30144,meta30143__$1){
var self__ = this;
var _30144__$1 = this;
return (new cljs.core.async.t_cljs$core$async30142(self__.p,self__.ch,meta30143__$1));
});

cljs.core.async.t_cljs$core$async30142.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30144){
var self__ = this;
var _30144__$1 = this;
return self__.meta30143;
});

cljs.core.async.t_cljs$core$async30142.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30142.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30142.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30142.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30142.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30142.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30142.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30142.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30143","meta30143",1793134969,null)], null);
});

cljs.core.async.t_cljs$core$async30142.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30142.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30142";

cljs.core.async.t_cljs$core$async30142.cljs$lang$ctorPrWriter = (function (this__18572__auto__,writer__18573__auto__,opt__18574__auto__){
return cljs.core._write.call(null,writer__18573__auto__,"cljs.core.async/t_cljs$core$async30142");
});

cljs.core.async.__GT_t_cljs$core$async30142 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30142(p__$1,ch__$1,meta30143){
return (new cljs.core.async.t_cljs$core$async30142(p__$1,ch__$1,meta30143));
});

}

return (new cljs.core.async.t_cljs$core$async30142(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args30145 = [];
var len__19074__auto___30189 = arguments.length;
var i__19075__auto___30190 = (0);
while(true){
if((i__19075__auto___30190 < len__19074__auto___30189)){
args30145.push((arguments[i__19075__auto___30190]));

var G__30191 = (i__19075__auto___30190 + (1));
i__19075__auto___30190 = G__30191;
continue;
} else {
}
break;
}

var G__30147 = args30145.length;
switch (G__30147) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30145.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23265__auto___30193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23265__auto___30193,out){
return (function (){
var f__23266__auto__ = (function (){var switch__23209__auto__ = ((function (c__23265__auto___30193,out){
return (function (state_30168){
var state_val_30169 = (state_30168[(1)]);
if((state_val_30169 === (7))){
var inst_30164 = (state_30168[(2)]);
var state_30168__$1 = state_30168;
var statearr_30170_30194 = state_30168__$1;
(statearr_30170_30194[(2)] = inst_30164);

(statearr_30170_30194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30169 === (1))){
var state_30168__$1 = state_30168;
var statearr_30171_30195 = state_30168__$1;
(statearr_30171_30195[(2)] = null);

(statearr_30171_30195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30169 === (4))){
var inst_30150 = (state_30168[(7)]);
var inst_30150__$1 = (state_30168[(2)]);
var inst_30151 = (inst_30150__$1 == null);
var state_30168__$1 = (function (){var statearr_30172 = state_30168;
(statearr_30172[(7)] = inst_30150__$1);

return statearr_30172;
})();
if(cljs.core.truth_(inst_30151)){
var statearr_30173_30196 = state_30168__$1;
(statearr_30173_30196[(1)] = (5));

} else {
var statearr_30174_30197 = state_30168__$1;
(statearr_30174_30197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30169 === (6))){
var inst_30150 = (state_30168[(7)]);
var inst_30155 = p.call(null,inst_30150);
var state_30168__$1 = state_30168;
if(cljs.core.truth_(inst_30155)){
var statearr_30175_30198 = state_30168__$1;
(statearr_30175_30198[(1)] = (8));

} else {
var statearr_30176_30199 = state_30168__$1;
(statearr_30176_30199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30169 === (3))){
var inst_30166 = (state_30168[(2)]);
var state_30168__$1 = state_30168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30168__$1,inst_30166);
} else {
if((state_val_30169 === (2))){
var state_30168__$1 = state_30168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30168__$1,(4),ch);
} else {
if((state_val_30169 === (11))){
var inst_30158 = (state_30168[(2)]);
var state_30168__$1 = state_30168;
var statearr_30177_30200 = state_30168__$1;
(statearr_30177_30200[(2)] = inst_30158);

(statearr_30177_30200[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30169 === (9))){
var state_30168__$1 = state_30168;
var statearr_30178_30201 = state_30168__$1;
(statearr_30178_30201[(2)] = null);

(statearr_30178_30201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30169 === (5))){
var inst_30153 = cljs.core.async.close_BANG_.call(null,out);
var state_30168__$1 = state_30168;
var statearr_30179_30202 = state_30168__$1;
(statearr_30179_30202[(2)] = inst_30153);

(statearr_30179_30202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30169 === (10))){
var inst_30161 = (state_30168[(2)]);
var state_30168__$1 = (function (){var statearr_30180 = state_30168;
(statearr_30180[(8)] = inst_30161);

return statearr_30180;
})();
var statearr_30181_30203 = state_30168__$1;
(statearr_30181_30203[(2)] = null);

(statearr_30181_30203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30169 === (8))){
var inst_30150 = (state_30168[(7)]);
var state_30168__$1 = state_30168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30168__$1,(11),out,inst_30150);
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
}
});})(c__23265__auto___30193,out))
;
return ((function (switch__23209__auto__,c__23265__auto___30193,out){
return (function() {
var cljs$core$async$state_machine__23210__auto__ = null;
var cljs$core$async$state_machine__23210__auto____0 = (function (){
var statearr_30185 = [null,null,null,null,null,null,null,null,null];
(statearr_30185[(0)] = cljs$core$async$state_machine__23210__auto__);

(statearr_30185[(1)] = (1));

return statearr_30185;
});
var cljs$core$async$state_machine__23210__auto____1 = (function (state_30168){
while(true){
var ret_value__23211__auto__ = (function (){try{while(true){
var result__23212__auto__ = switch__23209__auto__.call(null,state_30168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23212__auto__;
}
break;
}
}catch (e30186){if((e30186 instanceof Object)){
var ex__23213__auto__ = e30186;
var statearr_30187_30204 = state_30168;
(statearr_30187_30204[(5)] = ex__23213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30205 = state_30168;
state_30168 = G__30205;
continue;
} else {
return ret_value__23211__auto__;
}
break;
}
});
cljs$core$async$state_machine__23210__auto__ = function(state_30168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23210__auto____1.call(this,state_30168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23210__auto____0;
cljs$core$async$state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23210__auto____1;
return cljs$core$async$state_machine__23210__auto__;
})()
;})(switch__23209__auto__,c__23265__auto___30193,out))
})();
var state__23267__auto__ = (function (){var statearr_30188 = f__23266__auto__.call(null);
(statearr_30188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23265__auto___30193);

return statearr_30188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23267__auto__);
});})(c__23265__auto___30193,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30206 = [];
var len__19074__auto___30209 = arguments.length;
var i__19075__auto___30210 = (0);
while(true){
if((i__19075__auto___30210 < len__19074__auto___30209)){
args30206.push((arguments[i__19075__auto___30210]));

var G__30211 = (i__19075__auto___30210 + (1));
i__19075__auto___30210 = G__30211;
continue;
} else {
}
break;
}

var G__30208 = args30206.length;
switch (G__30208) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30206.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23265__auto__){
return (function (){
var f__23266__auto__ = (function (){var switch__23209__auto__ = ((function (c__23265__auto__){
return (function (state_30378){
var state_val_30379 = (state_30378[(1)]);
if((state_val_30379 === (7))){
var inst_30374 = (state_30378[(2)]);
var state_30378__$1 = state_30378;
var statearr_30380_30421 = state_30378__$1;
(statearr_30380_30421[(2)] = inst_30374);

(statearr_30380_30421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (20))){
var inst_30344 = (state_30378[(7)]);
var inst_30355 = (state_30378[(2)]);
var inst_30356 = cljs.core.next.call(null,inst_30344);
var inst_30330 = inst_30356;
var inst_30331 = null;
var inst_30332 = (0);
var inst_30333 = (0);
var state_30378__$1 = (function (){var statearr_30381 = state_30378;
(statearr_30381[(8)] = inst_30330);

(statearr_30381[(9)] = inst_30333);

(statearr_30381[(10)] = inst_30355);

(statearr_30381[(11)] = inst_30332);

(statearr_30381[(12)] = inst_30331);

return statearr_30381;
})();
var statearr_30382_30422 = state_30378__$1;
(statearr_30382_30422[(2)] = null);

(statearr_30382_30422[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (1))){
var state_30378__$1 = state_30378;
var statearr_30383_30423 = state_30378__$1;
(statearr_30383_30423[(2)] = null);

(statearr_30383_30423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (4))){
var inst_30319 = (state_30378[(13)]);
var inst_30319__$1 = (state_30378[(2)]);
var inst_30320 = (inst_30319__$1 == null);
var state_30378__$1 = (function (){var statearr_30384 = state_30378;
(statearr_30384[(13)] = inst_30319__$1);

return statearr_30384;
})();
if(cljs.core.truth_(inst_30320)){
var statearr_30385_30424 = state_30378__$1;
(statearr_30385_30424[(1)] = (5));

} else {
var statearr_30386_30425 = state_30378__$1;
(statearr_30386_30425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (15))){
var state_30378__$1 = state_30378;
var statearr_30390_30426 = state_30378__$1;
(statearr_30390_30426[(2)] = null);

(statearr_30390_30426[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (21))){
var state_30378__$1 = state_30378;
var statearr_30391_30427 = state_30378__$1;
(statearr_30391_30427[(2)] = null);

(statearr_30391_30427[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (13))){
var inst_30330 = (state_30378[(8)]);
var inst_30333 = (state_30378[(9)]);
var inst_30332 = (state_30378[(11)]);
var inst_30331 = (state_30378[(12)]);
var inst_30340 = (state_30378[(2)]);
var inst_30341 = (inst_30333 + (1));
var tmp30387 = inst_30330;
var tmp30388 = inst_30332;
var tmp30389 = inst_30331;
var inst_30330__$1 = tmp30387;
var inst_30331__$1 = tmp30389;
var inst_30332__$1 = tmp30388;
var inst_30333__$1 = inst_30341;
var state_30378__$1 = (function (){var statearr_30392 = state_30378;
(statearr_30392[(8)] = inst_30330__$1);

(statearr_30392[(9)] = inst_30333__$1);

(statearr_30392[(14)] = inst_30340);

(statearr_30392[(11)] = inst_30332__$1);

(statearr_30392[(12)] = inst_30331__$1);

return statearr_30392;
})();
var statearr_30393_30428 = state_30378__$1;
(statearr_30393_30428[(2)] = null);

(statearr_30393_30428[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (22))){
var state_30378__$1 = state_30378;
var statearr_30394_30429 = state_30378__$1;
(statearr_30394_30429[(2)] = null);

(statearr_30394_30429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (6))){
var inst_30319 = (state_30378[(13)]);
var inst_30328 = f.call(null,inst_30319);
var inst_30329 = cljs.core.seq.call(null,inst_30328);
var inst_30330 = inst_30329;
var inst_30331 = null;
var inst_30332 = (0);
var inst_30333 = (0);
var state_30378__$1 = (function (){var statearr_30395 = state_30378;
(statearr_30395[(8)] = inst_30330);

(statearr_30395[(9)] = inst_30333);

(statearr_30395[(11)] = inst_30332);

(statearr_30395[(12)] = inst_30331);

return statearr_30395;
})();
var statearr_30396_30430 = state_30378__$1;
(statearr_30396_30430[(2)] = null);

(statearr_30396_30430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (17))){
var inst_30344 = (state_30378[(7)]);
var inst_30348 = cljs.core.chunk_first.call(null,inst_30344);
var inst_30349 = cljs.core.chunk_rest.call(null,inst_30344);
var inst_30350 = cljs.core.count.call(null,inst_30348);
var inst_30330 = inst_30349;
var inst_30331 = inst_30348;
var inst_30332 = inst_30350;
var inst_30333 = (0);
var state_30378__$1 = (function (){var statearr_30397 = state_30378;
(statearr_30397[(8)] = inst_30330);

(statearr_30397[(9)] = inst_30333);

(statearr_30397[(11)] = inst_30332);

(statearr_30397[(12)] = inst_30331);

return statearr_30397;
})();
var statearr_30398_30431 = state_30378__$1;
(statearr_30398_30431[(2)] = null);

(statearr_30398_30431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (3))){
var inst_30376 = (state_30378[(2)]);
var state_30378__$1 = state_30378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30378__$1,inst_30376);
} else {
if((state_val_30379 === (12))){
var inst_30364 = (state_30378[(2)]);
var state_30378__$1 = state_30378;
var statearr_30399_30432 = state_30378__$1;
(statearr_30399_30432[(2)] = inst_30364);

(statearr_30399_30432[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (2))){
var state_30378__$1 = state_30378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30378__$1,(4),in$);
} else {
if((state_val_30379 === (23))){
var inst_30372 = (state_30378[(2)]);
var state_30378__$1 = state_30378;
var statearr_30400_30433 = state_30378__$1;
(statearr_30400_30433[(2)] = inst_30372);

(statearr_30400_30433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (19))){
var inst_30359 = (state_30378[(2)]);
var state_30378__$1 = state_30378;
var statearr_30401_30434 = state_30378__$1;
(statearr_30401_30434[(2)] = inst_30359);

(statearr_30401_30434[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (11))){
var inst_30344 = (state_30378[(7)]);
var inst_30330 = (state_30378[(8)]);
var inst_30344__$1 = cljs.core.seq.call(null,inst_30330);
var state_30378__$1 = (function (){var statearr_30402 = state_30378;
(statearr_30402[(7)] = inst_30344__$1);

return statearr_30402;
})();
if(inst_30344__$1){
var statearr_30403_30435 = state_30378__$1;
(statearr_30403_30435[(1)] = (14));

} else {
var statearr_30404_30436 = state_30378__$1;
(statearr_30404_30436[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (9))){
var inst_30366 = (state_30378[(2)]);
var inst_30367 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30378__$1 = (function (){var statearr_30405 = state_30378;
(statearr_30405[(15)] = inst_30366);

return statearr_30405;
})();
if(cljs.core.truth_(inst_30367)){
var statearr_30406_30437 = state_30378__$1;
(statearr_30406_30437[(1)] = (21));

} else {
var statearr_30407_30438 = state_30378__$1;
(statearr_30407_30438[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (5))){
var inst_30322 = cljs.core.async.close_BANG_.call(null,out);
var state_30378__$1 = state_30378;
var statearr_30408_30439 = state_30378__$1;
(statearr_30408_30439[(2)] = inst_30322);

(statearr_30408_30439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (14))){
var inst_30344 = (state_30378[(7)]);
var inst_30346 = cljs.core.chunked_seq_QMARK_.call(null,inst_30344);
var state_30378__$1 = state_30378;
if(inst_30346){
var statearr_30409_30440 = state_30378__$1;
(statearr_30409_30440[(1)] = (17));

} else {
var statearr_30410_30441 = state_30378__$1;
(statearr_30410_30441[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (16))){
var inst_30362 = (state_30378[(2)]);
var state_30378__$1 = state_30378;
var statearr_30411_30442 = state_30378__$1;
(statearr_30411_30442[(2)] = inst_30362);

(statearr_30411_30442[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30379 === (10))){
var inst_30333 = (state_30378[(9)]);
var inst_30331 = (state_30378[(12)]);
var inst_30338 = cljs.core._nth.call(null,inst_30331,inst_30333);
var state_30378__$1 = state_30378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30378__$1,(13),out,inst_30338);
} else {
if((state_val_30379 === (18))){
var inst_30344 = (state_30378[(7)]);
var inst_30353 = cljs.core.first.call(null,inst_30344);
var state_30378__$1 = state_30378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30378__$1,(20),out,inst_30353);
} else {
if((state_val_30379 === (8))){
var inst_30333 = (state_30378[(9)]);
var inst_30332 = (state_30378[(11)]);
var inst_30335 = (inst_30333 < inst_30332);
var inst_30336 = inst_30335;
var state_30378__$1 = state_30378;
if(cljs.core.truth_(inst_30336)){
var statearr_30412_30443 = state_30378__$1;
(statearr_30412_30443[(1)] = (10));

} else {
var statearr_30413_30444 = state_30378__$1;
(statearr_30413_30444[(1)] = (11));

}

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
}
}
}
}
}
});})(c__23265__auto__))
;
return ((function (switch__23209__auto__,c__23265__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23210__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23210__auto____0 = (function (){
var statearr_30417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30417[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23210__auto__);

(statearr_30417[(1)] = (1));

return statearr_30417;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23210__auto____1 = (function (state_30378){
while(true){
var ret_value__23211__auto__ = (function (){try{while(true){
var result__23212__auto__ = switch__23209__auto__.call(null,state_30378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23212__auto__;
}
break;
}
}catch (e30418){if((e30418 instanceof Object)){
var ex__23213__auto__ = e30418;
var statearr_30419_30445 = state_30378;
(statearr_30419_30445[(5)] = ex__23213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30446 = state_30378;
state_30378 = G__30446;
continue;
} else {
return ret_value__23211__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23210__auto__ = function(state_30378){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23210__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23210__auto____1.call(this,state_30378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23210__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23210__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23210__auto__;
})()
;})(switch__23209__auto__,c__23265__auto__))
})();
var state__23267__auto__ = (function (){var statearr_30420 = f__23266__auto__.call(null);
(statearr_30420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23265__auto__);

return statearr_30420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23267__auto__);
});})(c__23265__auto__))
);

return c__23265__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30447 = [];
var len__19074__auto___30450 = arguments.length;
var i__19075__auto___30451 = (0);
while(true){
if((i__19075__auto___30451 < len__19074__auto___30450)){
args30447.push((arguments[i__19075__auto___30451]));

var G__30452 = (i__19075__auto___30451 + (1));
i__19075__auto___30451 = G__30452;
continue;
} else {
}
break;
}

var G__30449 = args30447.length;
switch (G__30449) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30447.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30454 = [];
var len__19074__auto___30457 = arguments.length;
var i__19075__auto___30458 = (0);
while(true){
if((i__19075__auto___30458 < len__19074__auto___30457)){
args30454.push((arguments[i__19075__auto___30458]));

var G__30459 = (i__19075__auto___30458 + (1));
i__19075__auto___30458 = G__30459;
continue;
} else {
}
break;
}

var G__30456 = args30454.length;
switch (G__30456) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30454.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args30461 = [];
var len__19074__auto___30512 = arguments.length;
var i__19075__auto___30513 = (0);
while(true){
if((i__19075__auto___30513 < len__19074__auto___30512)){
args30461.push((arguments[i__19075__auto___30513]));

var G__30514 = (i__19075__auto___30513 + (1));
i__19075__auto___30513 = G__30514;
continue;
} else {
}
break;
}

var G__30463 = args30461.length;
switch (G__30463) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30461.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23265__auto___30516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23265__auto___30516,out){
return (function (){
var f__23266__auto__ = (function (){var switch__23209__auto__ = ((function (c__23265__auto___30516,out){
return (function (state_30487){
var state_val_30488 = (state_30487[(1)]);
if((state_val_30488 === (7))){
var inst_30482 = (state_30487[(2)]);
var state_30487__$1 = state_30487;
var statearr_30489_30517 = state_30487__$1;
(statearr_30489_30517[(2)] = inst_30482);

(statearr_30489_30517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30488 === (1))){
var inst_30464 = null;
var state_30487__$1 = (function (){var statearr_30490 = state_30487;
(statearr_30490[(7)] = inst_30464);

return statearr_30490;
})();
var statearr_30491_30518 = state_30487__$1;
(statearr_30491_30518[(2)] = null);

(statearr_30491_30518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30488 === (4))){
var inst_30467 = (state_30487[(8)]);
var inst_30467__$1 = (state_30487[(2)]);
var inst_30468 = (inst_30467__$1 == null);
var inst_30469 = cljs.core.not.call(null,inst_30468);
var state_30487__$1 = (function (){var statearr_30492 = state_30487;
(statearr_30492[(8)] = inst_30467__$1);

return statearr_30492;
})();
if(inst_30469){
var statearr_30493_30519 = state_30487__$1;
(statearr_30493_30519[(1)] = (5));

} else {
var statearr_30494_30520 = state_30487__$1;
(statearr_30494_30520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30488 === (6))){
var state_30487__$1 = state_30487;
var statearr_30495_30521 = state_30487__$1;
(statearr_30495_30521[(2)] = null);

(statearr_30495_30521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30488 === (3))){
var inst_30484 = (state_30487[(2)]);
var inst_30485 = cljs.core.async.close_BANG_.call(null,out);
var state_30487__$1 = (function (){var statearr_30496 = state_30487;
(statearr_30496[(9)] = inst_30484);

return statearr_30496;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30487__$1,inst_30485);
} else {
if((state_val_30488 === (2))){
var state_30487__$1 = state_30487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30487__$1,(4),ch);
} else {
if((state_val_30488 === (11))){
var inst_30467 = (state_30487[(8)]);
var inst_30476 = (state_30487[(2)]);
var inst_30464 = inst_30467;
var state_30487__$1 = (function (){var statearr_30497 = state_30487;
(statearr_30497[(10)] = inst_30476);

(statearr_30497[(7)] = inst_30464);

return statearr_30497;
})();
var statearr_30498_30522 = state_30487__$1;
(statearr_30498_30522[(2)] = null);

(statearr_30498_30522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30488 === (9))){
var inst_30467 = (state_30487[(8)]);
var state_30487__$1 = state_30487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30487__$1,(11),out,inst_30467);
} else {
if((state_val_30488 === (5))){
var inst_30467 = (state_30487[(8)]);
var inst_30464 = (state_30487[(7)]);
var inst_30471 = cljs.core._EQ_.call(null,inst_30467,inst_30464);
var state_30487__$1 = state_30487;
if(inst_30471){
var statearr_30500_30523 = state_30487__$1;
(statearr_30500_30523[(1)] = (8));

} else {
var statearr_30501_30524 = state_30487__$1;
(statearr_30501_30524[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30488 === (10))){
var inst_30479 = (state_30487[(2)]);
var state_30487__$1 = state_30487;
var statearr_30502_30525 = state_30487__$1;
(statearr_30502_30525[(2)] = inst_30479);

(statearr_30502_30525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30488 === (8))){
var inst_30464 = (state_30487[(7)]);
var tmp30499 = inst_30464;
var inst_30464__$1 = tmp30499;
var state_30487__$1 = (function (){var statearr_30503 = state_30487;
(statearr_30503[(7)] = inst_30464__$1);

return statearr_30503;
})();
var statearr_30504_30526 = state_30487__$1;
(statearr_30504_30526[(2)] = null);

(statearr_30504_30526[(1)] = (2));


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
}
}
}
});})(c__23265__auto___30516,out))
;
return ((function (switch__23209__auto__,c__23265__auto___30516,out){
return (function() {
var cljs$core$async$state_machine__23210__auto__ = null;
var cljs$core$async$state_machine__23210__auto____0 = (function (){
var statearr_30508 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30508[(0)] = cljs$core$async$state_machine__23210__auto__);

(statearr_30508[(1)] = (1));

return statearr_30508;
});
var cljs$core$async$state_machine__23210__auto____1 = (function (state_30487){
while(true){
var ret_value__23211__auto__ = (function (){try{while(true){
var result__23212__auto__ = switch__23209__auto__.call(null,state_30487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23212__auto__;
}
break;
}
}catch (e30509){if((e30509 instanceof Object)){
var ex__23213__auto__ = e30509;
var statearr_30510_30527 = state_30487;
(statearr_30510_30527[(5)] = ex__23213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30528 = state_30487;
state_30487 = G__30528;
continue;
} else {
return ret_value__23211__auto__;
}
break;
}
});
cljs$core$async$state_machine__23210__auto__ = function(state_30487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23210__auto____1.call(this,state_30487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23210__auto____0;
cljs$core$async$state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23210__auto____1;
return cljs$core$async$state_machine__23210__auto__;
})()
;})(switch__23209__auto__,c__23265__auto___30516,out))
})();
var state__23267__auto__ = (function (){var statearr_30511 = f__23266__auto__.call(null);
(statearr_30511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23265__auto___30516);

return statearr_30511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23267__auto__);
});})(c__23265__auto___30516,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30529 = [];
var len__19074__auto___30599 = arguments.length;
var i__19075__auto___30600 = (0);
while(true){
if((i__19075__auto___30600 < len__19074__auto___30599)){
args30529.push((arguments[i__19075__auto___30600]));

var G__30601 = (i__19075__auto___30600 + (1));
i__19075__auto___30600 = G__30601;
continue;
} else {
}
break;
}

var G__30531 = args30529.length;
switch (G__30531) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30529.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23265__auto___30603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23265__auto___30603,out){
return (function (){
var f__23266__auto__ = (function (){var switch__23209__auto__ = ((function (c__23265__auto___30603,out){
return (function (state_30569){
var state_val_30570 = (state_30569[(1)]);
if((state_val_30570 === (7))){
var inst_30565 = (state_30569[(2)]);
var state_30569__$1 = state_30569;
var statearr_30571_30604 = state_30569__$1;
(statearr_30571_30604[(2)] = inst_30565);

(statearr_30571_30604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30570 === (1))){
var inst_30532 = (new Array(n));
var inst_30533 = inst_30532;
var inst_30534 = (0);
var state_30569__$1 = (function (){var statearr_30572 = state_30569;
(statearr_30572[(7)] = inst_30534);

(statearr_30572[(8)] = inst_30533);

return statearr_30572;
})();
var statearr_30573_30605 = state_30569__$1;
(statearr_30573_30605[(2)] = null);

(statearr_30573_30605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30570 === (4))){
var inst_30537 = (state_30569[(9)]);
var inst_30537__$1 = (state_30569[(2)]);
var inst_30538 = (inst_30537__$1 == null);
var inst_30539 = cljs.core.not.call(null,inst_30538);
var state_30569__$1 = (function (){var statearr_30574 = state_30569;
(statearr_30574[(9)] = inst_30537__$1);

return statearr_30574;
})();
if(inst_30539){
var statearr_30575_30606 = state_30569__$1;
(statearr_30575_30606[(1)] = (5));

} else {
var statearr_30576_30607 = state_30569__$1;
(statearr_30576_30607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30570 === (15))){
var inst_30559 = (state_30569[(2)]);
var state_30569__$1 = state_30569;
var statearr_30577_30608 = state_30569__$1;
(statearr_30577_30608[(2)] = inst_30559);

(statearr_30577_30608[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30570 === (13))){
var state_30569__$1 = state_30569;
var statearr_30578_30609 = state_30569__$1;
(statearr_30578_30609[(2)] = null);

(statearr_30578_30609[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30570 === (6))){
var inst_30534 = (state_30569[(7)]);
var inst_30555 = (inst_30534 > (0));
var state_30569__$1 = state_30569;
if(cljs.core.truth_(inst_30555)){
var statearr_30579_30610 = state_30569__$1;
(statearr_30579_30610[(1)] = (12));

} else {
var statearr_30580_30611 = state_30569__$1;
(statearr_30580_30611[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30570 === (3))){
var inst_30567 = (state_30569[(2)]);
var state_30569__$1 = state_30569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30569__$1,inst_30567);
} else {
if((state_val_30570 === (12))){
var inst_30533 = (state_30569[(8)]);
var inst_30557 = cljs.core.vec.call(null,inst_30533);
var state_30569__$1 = state_30569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30569__$1,(15),out,inst_30557);
} else {
if((state_val_30570 === (2))){
var state_30569__$1 = state_30569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30569__$1,(4),ch);
} else {
if((state_val_30570 === (11))){
var inst_30549 = (state_30569[(2)]);
var inst_30550 = (new Array(n));
var inst_30533 = inst_30550;
var inst_30534 = (0);
var state_30569__$1 = (function (){var statearr_30581 = state_30569;
(statearr_30581[(7)] = inst_30534);

(statearr_30581[(8)] = inst_30533);

(statearr_30581[(10)] = inst_30549);

return statearr_30581;
})();
var statearr_30582_30612 = state_30569__$1;
(statearr_30582_30612[(2)] = null);

(statearr_30582_30612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30570 === (9))){
var inst_30533 = (state_30569[(8)]);
var inst_30547 = cljs.core.vec.call(null,inst_30533);
var state_30569__$1 = state_30569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30569__$1,(11),out,inst_30547);
} else {
if((state_val_30570 === (5))){
var inst_30537 = (state_30569[(9)]);
var inst_30542 = (state_30569[(11)]);
var inst_30534 = (state_30569[(7)]);
var inst_30533 = (state_30569[(8)]);
var inst_30541 = (inst_30533[inst_30534] = inst_30537);
var inst_30542__$1 = (inst_30534 + (1));
var inst_30543 = (inst_30542__$1 < n);
var state_30569__$1 = (function (){var statearr_30583 = state_30569;
(statearr_30583[(11)] = inst_30542__$1);

(statearr_30583[(12)] = inst_30541);

return statearr_30583;
})();
if(cljs.core.truth_(inst_30543)){
var statearr_30584_30613 = state_30569__$1;
(statearr_30584_30613[(1)] = (8));

} else {
var statearr_30585_30614 = state_30569__$1;
(statearr_30585_30614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30570 === (14))){
var inst_30562 = (state_30569[(2)]);
var inst_30563 = cljs.core.async.close_BANG_.call(null,out);
var state_30569__$1 = (function (){var statearr_30587 = state_30569;
(statearr_30587[(13)] = inst_30562);

return statearr_30587;
})();
var statearr_30588_30615 = state_30569__$1;
(statearr_30588_30615[(2)] = inst_30563);

(statearr_30588_30615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30570 === (10))){
var inst_30553 = (state_30569[(2)]);
var state_30569__$1 = state_30569;
var statearr_30589_30616 = state_30569__$1;
(statearr_30589_30616[(2)] = inst_30553);

(statearr_30589_30616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30570 === (8))){
var inst_30542 = (state_30569[(11)]);
var inst_30533 = (state_30569[(8)]);
var tmp30586 = inst_30533;
var inst_30533__$1 = tmp30586;
var inst_30534 = inst_30542;
var state_30569__$1 = (function (){var statearr_30590 = state_30569;
(statearr_30590[(7)] = inst_30534);

(statearr_30590[(8)] = inst_30533__$1);

return statearr_30590;
})();
var statearr_30591_30617 = state_30569__$1;
(statearr_30591_30617[(2)] = null);

(statearr_30591_30617[(1)] = (2));


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
}
}
}
}
}
}
}
});})(c__23265__auto___30603,out))
;
return ((function (switch__23209__auto__,c__23265__auto___30603,out){
return (function() {
var cljs$core$async$state_machine__23210__auto__ = null;
var cljs$core$async$state_machine__23210__auto____0 = (function (){
var statearr_30595 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30595[(0)] = cljs$core$async$state_machine__23210__auto__);

(statearr_30595[(1)] = (1));

return statearr_30595;
});
var cljs$core$async$state_machine__23210__auto____1 = (function (state_30569){
while(true){
var ret_value__23211__auto__ = (function (){try{while(true){
var result__23212__auto__ = switch__23209__auto__.call(null,state_30569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23212__auto__;
}
break;
}
}catch (e30596){if((e30596 instanceof Object)){
var ex__23213__auto__ = e30596;
var statearr_30597_30618 = state_30569;
(statearr_30597_30618[(5)] = ex__23213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30619 = state_30569;
state_30569 = G__30619;
continue;
} else {
return ret_value__23211__auto__;
}
break;
}
});
cljs$core$async$state_machine__23210__auto__ = function(state_30569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23210__auto____1.call(this,state_30569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23210__auto____0;
cljs$core$async$state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23210__auto____1;
return cljs$core$async$state_machine__23210__auto__;
})()
;})(switch__23209__auto__,c__23265__auto___30603,out))
})();
var state__23267__auto__ = (function (){var statearr_30598 = f__23266__auto__.call(null);
(statearr_30598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23265__auto___30603);

return statearr_30598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23267__auto__);
});})(c__23265__auto___30603,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30620 = [];
var len__19074__auto___30694 = arguments.length;
var i__19075__auto___30695 = (0);
while(true){
if((i__19075__auto___30695 < len__19074__auto___30694)){
args30620.push((arguments[i__19075__auto___30695]));

var G__30696 = (i__19075__auto___30695 + (1));
i__19075__auto___30695 = G__30696;
continue;
} else {
}
break;
}

var G__30622 = args30620.length;
switch (G__30622) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30620.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23265__auto___30698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23265__auto___30698,out){
return (function (){
var f__23266__auto__ = (function (){var switch__23209__auto__ = ((function (c__23265__auto___30698,out){
return (function (state_30664){
var state_val_30665 = (state_30664[(1)]);
if((state_val_30665 === (7))){
var inst_30660 = (state_30664[(2)]);
var state_30664__$1 = state_30664;
var statearr_30666_30699 = state_30664__$1;
(statearr_30666_30699[(2)] = inst_30660);

(statearr_30666_30699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (1))){
var inst_30623 = [];
var inst_30624 = inst_30623;
var inst_30625 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30664__$1 = (function (){var statearr_30667 = state_30664;
(statearr_30667[(7)] = inst_30625);

(statearr_30667[(8)] = inst_30624);

return statearr_30667;
})();
var statearr_30668_30700 = state_30664__$1;
(statearr_30668_30700[(2)] = null);

(statearr_30668_30700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (4))){
var inst_30628 = (state_30664[(9)]);
var inst_30628__$1 = (state_30664[(2)]);
var inst_30629 = (inst_30628__$1 == null);
var inst_30630 = cljs.core.not.call(null,inst_30629);
var state_30664__$1 = (function (){var statearr_30669 = state_30664;
(statearr_30669[(9)] = inst_30628__$1);

return statearr_30669;
})();
if(inst_30630){
var statearr_30670_30701 = state_30664__$1;
(statearr_30670_30701[(1)] = (5));

} else {
var statearr_30671_30702 = state_30664__$1;
(statearr_30671_30702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (15))){
var inst_30654 = (state_30664[(2)]);
var state_30664__$1 = state_30664;
var statearr_30672_30703 = state_30664__$1;
(statearr_30672_30703[(2)] = inst_30654);

(statearr_30672_30703[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (13))){
var state_30664__$1 = state_30664;
var statearr_30673_30704 = state_30664__$1;
(statearr_30673_30704[(2)] = null);

(statearr_30673_30704[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (6))){
var inst_30624 = (state_30664[(8)]);
var inst_30649 = inst_30624.length;
var inst_30650 = (inst_30649 > (0));
var state_30664__$1 = state_30664;
if(cljs.core.truth_(inst_30650)){
var statearr_30674_30705 = state_30664__$1;
(statearr_30674_30705[(1)] = (12));

} else {
var statearr_30675_30706 = state_30664__$1;
(statearr_30675_30706[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (3))){
var inst_30662 = (state_30664[(2)]);
var state_30664__$1 = state_30664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30664__$1,inst_30662);
} else {
if((state_val_30665 === (12))){
var inst_30624 = (state_30664[(8)]);
var inst_30652 = cljs.core.vec.call(null,inst_30624);
var state_30664__$1 = state_30664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30664__$1,(15),out,inst_30652);
} else {
if((state_val_30665 === (2))){
var state_30664__$1 = state_30664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30664__$1,(4),ch);
} else {
if((state_val_30665 === (11))){
var inst_30632 = (state_30664[(10)]);
var inst_30628 = (state_30664[(9)]);
var inst_30642 = (state_30664[(2)]);
var inst_30643 = [];
var inst_30644 = inst_30643.push(inst_30628);
var inst_30624 = inst_30643;
var inst_30625 = inst_30632;
var state_30664__$1 = (function (){var statearr_30676 = state_30664;
(statearr_30676[(11)] = inst_30644);

(statearr_30676[(7)] = inst_30625);

(statearr_30676[(12)] = inst_30642);

(statearr_30676[(8)] = inst_30624);

return statearr_30676;
})();
var statearr_30677_30707 = state_30664__$1;
(statearr_30677_30707[(2)] = null);

(statearr_30677_30707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (9))){
var inst_30624 = (state_30664[(8)]);
var inst_30640 = cljs.core.vec.call(null,inst_30624);
var state_30664__$1 = state_30664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30664__$1,(11),out,inst_30640);
} else {
if((state_val_30665 === (5))){
var inst_30632 = (state_30664[(10)]);
var inst_30628 = (state_30664[(9)]);
var inst_30625 = (state_30664[(7)]);
var inst_30632__$1 = f.call(null,inst_30628);
var inst_30633 = cljs.core._EQ_.call(null,inst_30632__$1,inst_30625);
var inst_30634 = cljs.core.keyword_identical_QMARK_.call(null,inst_30625,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30635 = (inst_30633) || (inst_30634);
var state_30664__$1 = (function (){var statearr_30678 = state_30664;
(statearr_30678[(10)] = inst_30632__$1);

return statearr_30678;
})();
if(cljs.core.truth_(inst_30635)){
var statearr_30679_30708 = state_30664__$1;
(statearr_30679_30708[(1)] = (8));

} else {
var statearr_30680_30709 = state_30664__$1;
(statearr_30680_30709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (14))){
var inst_30657 = (state_30664[(2)]);
var inst_30658 = cljs.core.async.close_BANG_.call(null,out);
var state_30664__$1 = (function (){var statearr_30682 = state_30664;
(statearr_30682[(13)] = inst_30657);

return statearr_30682;
})();
var statearr_30683_30710 = state_30664__$1;
(statearr_30683_30710[(2)] = inst_30658);

(statearr_30683_30710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (10))){
var inst_30647 = (state_30664[(2)]);
var state_30664__$1 = state_30664;
var statearr_30684_30711 = state_30664__$1;
(statearr_30684_30711[(2)] = inst_30647);

(statearr_30684_30711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30665 === (8))){
var inst_30632 = (state_30664[(10)]);
var inst_30628 = (state_30664[(9)]);
var inst_30624 = (state_30664[(8)]);
var inst_30637 = inst_30624.push(inst_30628);
var tmp30681 = inst_30624;
var inst_30624__$1 = tmp30681;
var inst_30625 = inst_30632;
var state_30664__$1 = (function (){var statearr_30685 = state_30664;
(statearr_30685[(14)] = inst_30637);

(statearr_30685[(7)] = inst_30625);

(statearr_30685[(8)] = inst_30624__$1);

return statearr_30685;
})();
var statearr_30686_30712 = state_30664__$1;
(statearr_30686_30712[(2)] = null);

(statearr_30686_30712[(1)] = (2));


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
}
}
}
}
}
}
}
});})(c__23265__auto___30698,out))
;
return ((function (switch__23209__auto__,c__23265__auto___30698,out){
return (function() {
var cljs$core$async$state_machine__23210__auto__ = null;
var cljs$core$async$state_machine__23210__auto____0 = (function (){
var statearr_30690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30690[(0)] = cljs$core$async$state_machine__23210__auto__);

(statearr_30690[(1)] = (1));

return statearr_30690;
});
var cljs$core$async$state_machine__23210__auto____1 = (function (state_30664){
while(true){
var ret_value__23211__auto__ = (function (){try{while(true){
var result__23212__auto__ = switch__23209__auto__.call(null,state_30664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23212__auto__;
}
break;
}
}catch (e30691){if((e30691 instanceof Object)){
var ex__23213__auto__ = e30691;
var statearr_30692_30713 = state_30664;
(statearr_30692_30713[(5)] = ex__23213__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30714 = state_30664;
state_30664 = G__30714;
continue;
} else {
return ret_value__23211__auto__;
}
break;
}
});
cljs$core$async$state_machine__23210__auto__ = function(state_30664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23210__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23210__auto____1.call(this,state_30664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23210__auto____0;
cljs$core$async$state_machine__23210__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23210__auto____1;
return cljs$core$async$state_machine__23210__auto__;
})()
;})(switch__23209__auto__,c__23265__auto___30698,out))
})();
var state__23267__auto__ = (function (){var statearr_30693 = f__23266__auto__.call(null);
(statearr_30693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23265__auto___30698);

return statearr_30693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23267__auto__);
});})(c__23265__auto___30698,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map