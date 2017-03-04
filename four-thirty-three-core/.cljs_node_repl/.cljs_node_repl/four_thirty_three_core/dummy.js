// Compiled by ClojureScript 1.9.456 {:target :nodejs}
goog.provide('four_thirty_three_core.dummy');
goog.require('cljs.core');
goog.require('four_thirty_three_core.protocols');
goog.require('four_thirty_three_core.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {four_thirty_three_core.protocols.Recordable}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
four_thirty_three_core.dummy.Recorder = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
four_thirty_three_core.dummy.Recorder.prototype.four_thirty_three_core$protocols$Recordable$ = cljs.core.PROTOCOL_SENTINEL;

four_thirty_three_core.dummy.Recorder.prototype.four_thirty_three_core$protocols$Recordable$start$arity$2 = (function (_,params){
var self__ = this;
var ___$1 = this;
cljs.core.println.call(null,"STARTING RECORDING");

return "recording";
});

four_thirty_three_core.dummy.Recorder.prototype.four_thirty_three_core$protocols$Recordable$stop$arity$2 = (function (_,recording){
var self__ = this;
var ___$1 = this;
cljs.core.println.call(null,"STOPPING RECORDING");

return recording;
});

four_thirty_three_core.dummy.Recorder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18588__auto__,k__18589__auto__){
var self__ = this;
var this__18588__auto____$1 = this;
return this__18588__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__18589__auto__,null);
});

four_thirty_three_core.dummy.Recorder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18590__auto__,k20935,else__18591__auto__){
var self__ = this;
var this__18590__auto____$1 = this;
var G__20937 = k20935;
switch (G__20937) {
default:
return cljs.core.get.call(null,self__.__extmap,k20935,else__18591__auto__);

}
});

four_thirty_three_core.dummy.Recorder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18602__auto__,writer__18603__auto__,opts__18604__auto__){
var self__ = this;
var this__18602__auto____$1 = this;
var pr_pair__18605__auto__ = ((function (this__18602__auto____$1){
return (function (keyval__18606__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18603__auto__,cljs.core.pr_writer,""," ","",opts__18604__auto__,keyval__18606__auto__);
});})(this__18602__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18603__auto__,pr_pair__18605__auto__,"#four-thirty-three-core.dummy.Recorder{",", ","}",opts__18604__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

four_thirty_three_core.dummy.Recorder.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

four_thirty_three_core.dummy.Recorder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20934){
var self__ = this;
var G__20934__$1 = this;
return (new cljs.core.RecordIter((0),G__20934__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

four_thirty_three_core.dummy.Recorder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18586__auto__){
var self__ = this;
var this__18586__auto____$1 = this;
return self__.__meta;
});

four_thirty_three_core.dummy.Recorder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18582__auto__){
var self__ = this;
var this__18582__auto____$1 = this;
return (new four_thirty_three_core.dummy.Recorder(self__.__meta,self__.__extmap,self__.__hash));
});

four_thirty_three_core.dummy.Recorder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18592__auto__){
var self__ = this;
var this__18592__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

four_thirty_three_core.dummy.Recorder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18583__auto__){
var self__ = this;
var this__18583__auto____$1 = this;
var h__18401__auto__ = self__.__hash;
if(!((h__18401__auto__ == null))){
return h__18401__auto__;
} else {
var h__18401__auto____$1 = cljs.core.hash_imap.call(null,this__18583__auto____$1);
self__.__hash = h__18401__auto____$1;

return h__18401__auto____$1;
}
});

four_thirty_three_core.dummy.Recorder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18584__auto__,other__18585__auto__){
var self__ = this;
var this__18584__auto____$1 = this;
if(cljs.core.truth_((function (){var and__17949__auto__ = other__18585__auto__;
if(cljs.core.truth_(and__17949__auto__)){
return ((this__18584__auto____$1.constructor === other__18585__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__18584__auto____$1,other__18585__auto__));
} else {
return and__17949__auto__;
}
})())){
return true;
} else {
return false;
}
});

four_thirty_three_core.dummy.Recorder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18597__auto__,k__18598__auto__){
var self__ = this;
var this__18597__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__18598__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18597__auto____$1),self__.__meta),k__18598__auto__);
} else {
return (new four_thirty_three_core.dummy.Recorder(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18598__auto__)),null));
}
});

four_thirty_three_core.dummy.Recorder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18595__auto__,k__18596__auto__,G__20934){
var self__ = this;
var this__18595__auto____$1 = this;
var pred__20938 = cljs.core.keyword_identical_QMARK_;
var expr__20939 = k__18596__auto__;
return (new four_thirty_three_core.dummy.Recorder(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18596__auto__,G__20934),null));
});

four_thirty_three_core.dummy.Recorder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18600__auto__){
var self__ = this;
var this__18600__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

four_thirty_three_core.dummy.Recorder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18587__auto__,G__20934){
var self__ = this;
var this__18587__auto____$1 = this;
return (new four_thirty_three_core.dummy.Recorder(G__20934,self__.__extmap,self__.__hash));
});

four_thirty_three_core.dummy.Recorder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18593__auto__,entry__18594__auto__){
var self__ = this;
var this__18593__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18594__auto__)){
return this__18593__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__18594__auto__,(0)),cljs.core._nth.call(null,entry__18594__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18593__auto____$1,entry__18594__auto__);
}
});

four_thirty_three_core.dummy.Recorder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

four_thirty_three_core.dummy.Recorder.cljs$lang$type = true;

four_thirty_three_core.dummy.Recorder.cljs$lang$ctorPrSeq = (function (this__18622__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"four-thirty-three-core.dummy/Recorder");
});

four_thirty_three_core.dummy.Recorder.cljs$lang$ctorPrWriter = (function (this__18622__auto__,writer__18623__auto__){
return cljs.core._write.call(null,writer__18623__auto__,"four-thirty-three-core.dummy/Recorder");
});

four_thirty_three_core.dummy.__GT_Recorder = (function four_thirty_three_core$dummy$__GT_Recorder(){
return (new four_thirty_three_core.dummy.Recorder(null,null,null));
});

four_thirty_three_core.dummy.map__GT_Recorder = (function four_thirty_three_core$dummy$map__GT_Recorder(G__20936){
return (new four_thirty_three_core.dummy.Recorder(null,cljs.core.dissoc.call(null,G__20936),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {four_thirty_three_core.protocols.Uploadable}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
four_thirty_three_core.dummy.Uploader = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
four_thirty_three_core.dummy.Uploader.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18588__auto__,k__18589__auto__){
var self__ = this;
var this__18588__auto____$1 = this;
return this__18588__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__18589__auto__,null);
});

four_thirty_three_core.dummy.Uploader.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18590__auto__,k20943,else__18591__auto__){
var self__ = this;
var this__18590__auto____$1 = this;
var G__20945 = k20943;
switch (G__20945) {
default:
return cljs.core.get.call(null,self__.__extmap,k20943,else__18591__auto__);

}
});

four_thirty_three_core.dummy.Uploader.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18602__auto__,writer__18603__auto__,opts__18604__auto__){
var self__ = this;
var this__18602__auto____$1 = this;
var pr_pair__18605__auto__ = ((function (this__18602__auto____$1){
return (function (keyval__18606__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18603__auto__,cljs.core.pr_writer,""," ","",opts__18604__auto__,keyval__18606__auto__);
});})(this__18602__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18603__auto__,pr_pair__18605__auto__,"#four-thirty-three-core.dummy.Uploader{",", ","}",opts__18604__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

four_thirty_three_core.dummy.Uploader.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

four_thirty_three_core.dummy.Uploader.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20942){
var self__ = this;
var G__20942__$1 = this;
return (new cljs.core.RecordIter((0),G__20942__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

four_thirty_three_core.dummy.Uploader.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18586__auto__){
var self__ = this;
var this__18586__auto____$1 = this;
return self__.__meta;
});

four_thirty_three_core.dummy.Uploader.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18582__auto__){
var self__ = this;
var this__18582__auto____$1 = this;
return (new four_thirty_three_core.dummy.Uploader(self__.__meta,self__.__extmap,self__.__hash));
});

four_thirty_three_core.dummy.Uploader.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18592__auto__){
var self__ = this;
var this__18592__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

four_thirty_three_core.dummy.Uploader.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18583__auto__){
var self__ = this;
var this__18583__auto____$1 = this;
var h__18401__auto__ = self__.__hash;
if(!((h__18401__auto__ == null))){
return h__18401__auto__;
} else {
var h__18401__auto____$1 = cljs.core.hash_imap.call(null,this__18583__auto____$1);
self__.__hash = h__18401__auto____$1;

return h__18401__auto____$1;
}
});

four_thirty_three_core.dummy.Uploader.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18584__auto__,other__18585__auto__){
var self__ = this;
var this__18584__auto____$1 = this;
if(cljs.core.truth_((function (){var and__17949__auto__ = other__18585__auto__;
if(cljs.core.truth_(and__17949__auto__)){
return ((this__18584__auto____$1.constructor === other__18585__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__18584__auto____$1,other__18585__auto__));
} else {
return and__17949__auto__;
}
})())){
return true;
} else {
return false;
}
});

four_thirty_three_core.dummy.Uploader.prototype.four_thirty_three_core$protocols$Uploadable$ = cljs.core.PROTOCOL_SENTINEL;

four_thirty_three_core.dummy.Uploader.prototype.four_thirty_three_core$protocols$Uploadable$upload$arity$2 = (function (_,params){
var self__ = this;
var ___$1 = this;
return cljs.core.println.call(null,"UPLOADING TO DROPBOX");
});

four_thirty_three_core.dummy.Uploader.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18597__auto__,k__18598__auto__){
var self__ = this;
var this__18597__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__18598__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18597__auto____$1),self__.__meta),k__18598__auto__);
} else {
return (new four_thirty_three_core.dummy.Uploader(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18598__auto__)),null));
}
});

four_thirty_three_core.dummy.Uploader.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18595__auto__,k__18596__auto__,G__20942){
var self__ = this;
var this__18595__auto____$1 = this;
var pred__20946 = cljs.core.keyword_identical_QMARK_;
var expr__20947 = k__18596__auto__;
return (new four_thirty_three_core.dummy.Uploader(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18596__auto__,G__20942),null));
});

four_thirty_three_core.dummy.Uploader.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18600__auto__){
var self__ = this;
var this__18600__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

four_thirty_three_core.dummy.Uploader.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18587__auto__,G__20942){
var self__ = this;
var this__18587__auto____$1 = this;
return (new four_thirty_three_core.dummy.Uploader(G__20942,self__.__extmap,self__.__hash));
});

four_thirty_three_core.dummy.Uploader.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18593__auto__,entry__18594__auto__){
var self__ = this;
var this__18593__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18594__auto__)){
return this__18593__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__18594__auto__,(0)),cljs.core._nth.call(null,entry__18594__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18593__auto____$1,entry__18594__auto__);
}
});

four_thirty_three_core.dummy.Uploader.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

four_thirty_three_core.dummy.Uploader.cljs$lang$type = true;

four_thirty_three_core.dummy.Uploader.cljs$lang$ctorPrSeq = (function (this__18622__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"four-thirty-three-core.dummy/Uploader");
});

four_thirty_three_core.dummy.Uploader.cljs$lang$ctorPrWriter = (function (this__18622__auto__,writer__18623__auto__){
return cljs.core._write.call(null,writer__18623__auto__,"four-thirty-three-core.dummy/Uploader");
});

four_thirty_three_core.dummy.__GT_Uploader = (function four_thirty_three_core$dummy$__GT_Uploader(){
return (new four_thirty_three_core.dummy.Uploader(null,null,null));
});

four_thirty_three_core.dummy.map__GT_Uploader = (function four_thirty_three_core$dummy$map__GT_Uploader(G__20944){
return (new four_thirty_three_core.dummy.Uploader(null,cljs.core.dissoc.call(null,G__20944),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {four_thirty_three_core.protocols.Postable}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
four_thirty_three_core.dummy.Poster = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
four_thirty_three_core.dummy.Poster.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18588__auto__,k__18589__auto__){
var self__ = this;
var this__18588__auto____$1 = this;
return this__18588__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__18589__auto__,null);
});

four_thirty_three_core.dummy.Poster.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18590__auto__,k20951,else__18591__auto__){
var self__ = this;
var this__18590__auto____$1 = this;
var G__20953 = k20951;
switch (G__20953) {
default:
return cljs.core.get.call(null,self__.__extmap,k20951,else__18591__auto__);

}
});

four_thirty_three_core.dummy.Poster.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18602__auto__,writer__18603__auto__,opts__18604__auto__){
var self__ = this;
var this__18602__auto____$1 = this;
var pr_pair__18605__auto__ = ((function (this__18602__auto____$1){
return (function (keyval__18606__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18603__auto__,cljs.core.pr_writer,""," ","",opts__18604__auto__,keyval__18606__auto__);
});})(this__18602__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18603__auto__,pr_pair__18605__auto__,"#four-thirty-three-core.dummy.Poster{",", ","}",opts__18604__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

four_thirty_three_core.dummy.Poster.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

four_thirty_three_core.dummy.Poster.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20950){
var self__ = this;
var G__20950__$1 = this;
return (new cljs.core.RecordIter((0),G__20950__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

four_thirty_three_core.dummy.Poster.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18586__auto__){
var self__ = this;
var this__18586__auto____$1 = this;
return self__.__meta;
});

four_thirty_three_core.dummy.Poster.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18582__auto__){
var self__ = this;
var this__18582__auto____$1 = this;
return (new four_thirty_three_core.dummy.Poster(self__.__meta,self__.__extmap,self__.__hash));
});

four_thirty_three_core.dummy.Poster.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18592__auto__){
var self__ = this;
var this__18592__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

four_thirty_three_core.dummy.Poster.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18583__auto__){
var self__ = this;
var this__18583__auto____$1 = this;
var h__18401__auto__ = self__.__hash;
if(!((h__18401__auto__ == null))){
return h__18401__auto__;
} else {
var h__18401__auto____$1 = cljs.core.hash_imap.call(null,this__18583__auto____$1);
self__.__hash = h__18401__auto____$1;

return h__18401__auto____$1;
}
});

four_thirty_three_core.dummy.Poster.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18584__auto__,other__18585__auto__){
var self__ = this;
var this__18584__auto____$1 = this;
if(cljs.core.truth_((function (){var and__17949__auto__ = other__18585__auto__;
if(cljs.core.truth_(and__17949__auto__)){
return ((this__18584__auto____$1.constructor === other__18585__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__18584__auto____$1,other__18585__auto__));
} else {
return and__17949__auto__;
}
})())){
return true;
} else {
return false;
}
});

four_thirty_three_core.dummy.Poster.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18597__auto__,k__18598__auto__){
var self__ = this;
var this__18597__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__18598__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18597__auto____$1),self__.__meta),k__18598__auto__);
} else {
return (new four_thirty_three_core.dummy.Poster(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18598__auto__)),null));
}
});

four_thirty_three_core.dummy.Poster.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18595__auto__,k__18596__auto__,G__20950){
var self__ = this;
var this__18595__auto____$1 = this;
var pred__20954 = cljs.core.keyword_identical_QMARK_;
var expr__20955 = k__18596__auto__;
return (new four_thirty_three_core.dummy.Poster(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18596__auto__,G__20950),null));
});

four_thirty_three_core.dummy.Poster.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18600__auto__){
var self__ = this;
var this__18600__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

four_thirty_three_core.dummy.Poster.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18587__auto__,G__20950){
var self__ = this;
var this__18587__auto____$1 = this;
return (new four_thirty_three_core.dummy.Poster(G__20950,self__.__extmap,self__.__hash));
});

four_thirty_three_core.dummy.Poster.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18593__auto__,entry__18594__auto__){
var self__ = this;
var this__18593__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18594__auto__)){
return this__18593__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__18594__auto__,(0)),cljs.core._nth.call(null,entry__18594__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18593__auto____$1,entry__18594__auto__);
}
});

four_thirty_three_core.dummy.Poster.prototype.four_thirty_three_core$protocols$Postable$ = cljs.core.PROTOCOL_SENTINEL;

four_thirty_three_core.dummy.Poster.prototype.four_thirty_three_core$protocols$Postable$post$arity$2 = (function (_,params){
var self__ = this;
var ___$1 = this;
return cljs.core.println.call(null,"POSTING TO TVVITTER");
});

four_thirty_three_core.dummy.Poster.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

four_thirty_three_core.dummy.Poster.cljs$lang$type = true;

four_thirty_three_core.dummy.Poster.cljs$lang$ctorPrSeq = (function (this__18622__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"four-thirty-three-core.dummy/Poster");
});

four_thirty_three_core.dummy.Poster.cljs$lang$ctorPrWriter = (function (this__18622__auto__,writer__18623__auto__){
return cljs.core._write.call(null,writer__18623__auto__,"four-thirty-three-core.dummy/Poster");
});

four_thirty_three_core.dummy.__GT_Poster = (function four_thirty_three_core$dummy$__GT_Poster(){
return (new four_thirty_three_core.dummy.Poster(null,null,null));
});

four_thirty_three_core.dummy.map__GT_Poster = (function four_thirty_three_core$dummy$map__GT_Poster(G__20952){
return (new four_thirty_three_core.dummy.Poster(null,cljs.core.dissoc.call(null,G__20952),null));
});

if(typeof four_thirty_three_core.dummy.stop_fn !== 'undefined'){
} else {
four_thirty_three_core.dummy.stop_fn = cljs.core.atom.call(null,null);
}
four_thirty_three_core.dummy.stop = (function four_thirty_three_core$dummy$stop(){
var temp__4657__auto__ = cljs.core.deref.call(null,four_thirty_three_core.dummy.stop_fn);
if(cljs.core.truth_(temp__4657__auto__)){
var stop_fn = temp__4657__auto__;
return stop_fn.call(null);
} else {
return null;
}
});
four_thirty_three_core.dummy.call_init = (function four_thirty_three_core$dummy$call_init(){
cljs.core.reset_BANG_.call(null,four_thirty_three_core.dummy.stop_fn,four_thirty_three_core.core.init.call(null,(60000),(1000),(new four_thirty_three_core.dummy.Recorder(null,null,null)),(new four_thirty_three_core.dummy.Uploader(null,null,null)),(new four_thirty_three_core.dummy.Poster(null,null,null))));

return null;
});

//# sourceMappingURL=dummy.js.map