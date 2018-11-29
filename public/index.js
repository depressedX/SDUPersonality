(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.book = function() {
	this.initialize(img.book);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,797);


(lib.canteen = function() {
	this.initialize(img.canteen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,331);


(lib.canteen_inner = function() {
	this.initialize(img.canteen_inner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,427);


(lib.classroom_background = function() {
	this.initialize(img.classroom_background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2880,1800);


(lib.glass = function() {
	this.initialize(img.glass);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1500,739);


(lib.library = function() {
	this.initialize(img.library);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,798);


(lib.map = function() {
	this.initialize(img.map);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.map_qiao = function() {
	this.initialize(img.map_qiao);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,111);


(lib.map_tushuguan = function() {
	this.initialize(img.map_tushuguan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,106);


(lib.map_xiaoyoumen = function() {
	this.initialize(img.map_xiaoyoumen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,106);


(lib.map_zhixinlou = function() {
	this.initialize(img.map_zhixinlou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,167);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.zhixinlou = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.map_zhixinlou();
	this.instance.parent = this;
	this.instance.setTransform(-55,-83);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.zhixinlou, new cjs.Rectangle(-55,-83,112,167), null);


(lib.xiaoyoumen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.map_xiaoyoumen();
	this.instance.parent = this;
	this.instance.setTransform(-79,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.xiaoyoumen, new cjs.Rectangle(-79,-58,160,106), null);


(lib.tushuguan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.map_tushuguan();
	this.instance.parent = this;
	this.instance.setTransform(-61,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tushuguan, new cjs.Rectangle(-61,-53,122,106), null);


(lib.qiao = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.map_qiao();
	this.instance.parent = this;
	this.instance.setTransform(-80,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.qiao, new cjs.Rectangle(-80,-57,157,111), null);


(lib.map_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.map();
	this.instance.parent = this;
	this.instance.setTransform(-198,-343,0.599,0.599);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198,-343,383.2,680.2);


(lib.result_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.text = new cjs.Text("you are", "25px 'Times New Roman'", "#3300CC");
	this.text.name = "text";
	this.text.lineHeight = 30;
	this.text.lineWidth = 368;
	this.text.parent = this;
	this.text.setTransform(-127.8,-188.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.8,-190.3,371.9,668.2);


(lib.people = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIwp1IFAAAIAAT1IlAAAgAtvp/IEEAAIAAAKIAASlIkEAAg");
	this.shape.setTransform(1,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399FF").s().p("Aprb5IAA20IAAylIAASlIkEAAIAAyvIEEAAIAAAKIFoAAQg/ghg2g3QiPiOAAjKQAAjKCPiPQCOiPDKAAQDJAACPCPQCPCPAADKQAADKiPCOQg2A3g/AhIFtAAIFAAAIAAT1IlAAAIAAz1IAAT1IAAGaIr3AAIAAPKgAC0bqIAAu6IGDAAIAAO6g");
	this.shape_1.setTransform(1,40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-137.9,178,357);


(lib.option = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,255,153,0.518)").s("#33FF66").ss(9.9,1,1).dr(-155,-37.05,310,74.1);
	this.shape.setTransform(0.1,0.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4).to({_off:false},0).to({_off:true},2).wait(4));

	// 图层_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(204,255,153,0.518)").s("rgba(69,69,69,0)").ss(0.1,1,1).dr(-123,-54,246,108);
	this.shape_1.setTransform(0,0.1,1.26,0.685);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.9,-37.9,312,76.1);


(lib.next_paint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36AE90").s().dr(-37,-31.5,74,63);
	this.shape.setTransform(146,-11.4,0.378,0.709,0,49.6,0,-14.3,-31.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#36AE90").s().dr(-37,-31.5,74,63);
	this.shape_1.setTransform(150.8,-11.6,0.378,0.706,0,-49.4,0,-1,31.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#36AE90").s().dr(-37,-31.5,74,63);
	this.shape_2.setTransform(89.5,-11.4,0.378,0.709,0,49.6,0,-14.3,-31.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#36AE90").s().dr(-37,-31.5,74,63);
	this.shape_3.setTransform(94.3,-11.6,0.378,0.706,0,-49.4,0,-1,31.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#36AE90").s().dr(-37,-31.5,74,63);
	this.shape_4.setTransform(33,-11.4,0.378,0.709,0,49.6,0,-14.3,-31.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#36AE90").s().dr(-37,-31.5,74,63);
	this.shape_5.setTransform(37.8,-11.6,0.378,0.706,0,-49.4,0,-1,31.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#36AE90").s().dr(-37,-31.5,74,63);
	this.shape_6.setTransform(-23.4,-11.4,0.378,0.709,0,49.6,0,-14.3,-31.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#36AE90").s().dr(-37,-31.5,74,63);
	this.shape_7.setTransform(-18.6,-11.6,0.378,0.706,0,-49.4,0,-1,31.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.next_paint, new cjs.Rectangle(-66,-40.4,231.4,57.9), null);


(lib.door_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AxBcwMAAAg5fMAiDAAAMAAAA5fg");
	this.shape.setTransform(5,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104,-177.9,218,368);


(lib.door = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AuwSrMAAAglVIdhAAMAAAAlVg");
	this.shape.setTransform(1.5,6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-112.9,189,239);


(lib.classroom_background_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.classroom_background();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2880,1800);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.option6D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().p("AArBeIACgEIAZAFQAHABAFgHQADgGAFg/IhIAAIgIAIIgMgLIAGgEQAAhSgBgQIANAHIAOAAQAGgVACgOIASAIQgJAFgLAWIArAAIAIgJIAPAMIgIAFQgCAvgEAMQgEALgRADQAAgKgWgHIABgEIAWAEQAGAAACgFQACgFAEgwIhCAAIAABXIBHAAIAJgJIANAMIgIAFQgCAwgCANQgCAOgHAHQgGAHgMACQAAgLgbgJgAhDAWIgcAAIAAALIgNAFQABgPAAg4QAAg6gBgIIANAJIBDAAIAJgJIANANIgIAFIAABPIABAfIgOAGIAAgNIgcAAQAABFABARIgOAGIABhcgAg3ARIAcAAIAAgvIgcAAgAhfARIAcAAIAAgvIgcAAgAg3gkIAcAAIAAgwIgcAAgAhfgkIAcAAIAAgwIgcAAgAgWA1IBJAAIANgLIAPARIhHAAQgLAAgKACgAAwggQgDgMgOgRIADgCQAQAJAFAGQAFAGAAAEQAAAFgEAEIgFAFQgCAAgBgIg");
	this.shape.setTransform(162.6,-4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("AhjBYQAngCAOgMQAIgGAAgQIAAgbQgaASgpAKIgJgVQBDgOAdgiIgtAAIAAALIgQAAIAAhmIChAAIAABiIgRAAIAAgHIgtAAQAfAeBAAQIgIAWQgpgMgVgPIAABRIgTAAIAAhVIANAAQgRgKgVgWQgOASgTANIANAAQAHABgGAFIAAAeQAAAWgMAJQgTAQgpAFgAAJgfIA4AAIAAgWIg4AAgAg/gfIA4AAIAAgWIg4AAgAAJhFIA4AAIAAgWIg4AAgAg/hFIA4AAIAAgWIg4AAg");
	this.shape_1.setTransform(137.3,-3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("AhJBtIAAiHIgkAAIAAgVIAkAAIAAg3IATAAQAHABgHAFIAAAxIArAAIAAg9IARAAQAIABgHAFIAAA3IAvAAIAAg5IATAAQAIABgHAFIAAAzIAkAAIAAAVIgkAAIAABIIgUAAIAAgLIgvAAIAAAQIgSAAIAAhNIgrAAIAABhICZAAIAAAVIiZAAIAAARgAAHAQIAvAAIAAgqIgvAAg");
	this.shape_2.setTransform(112.2,-4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("AAoBrIgDgSIAaAAQANAAABgSIAFh0Ig4AAQgLAbgUAYIgOgRQAgghAIg9IAVAGQAJAEgKACIgIAeIBGAAIgECDQgBAngfAAgAhnBoIAAinIAaAAQAFgTAFgYIAYAIQAEAEgHABQgDANgIARIAkAAIAACgIgTAAIAAgMIgrAAIAAATgAhTBCIArAAIAAgyIgrAAgAhTgCIArAAIAAgrIgrAAgAAHAKIAQgRQAUARAMAQIgSATQgOgUgQgPg");
	this.shape_3.setTransform(87.6,-4.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3300CC").s().p("AhdBmIAAiZIBQAAIAHggIhjAAIAAgSIDTAAIAAASIhaAAIgKAgIBZAAIAACWIgVAAIAAgKIiTAAIAAANgAApBHIAhAAIAAhnIghAAgAgUBHIApAAIAAgZIgpAAgAhJBHIAiAAIAAhnIgiAAgAgUAeIApAAIAAgWIgpAAgAgUgHIApAAIAAgZIgpAAg");
	this.shape_4.setTransform(62.3,-3.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3300CC").s().p("AAjBrIAAhwQgSgYgPgaIAQgLQAIAPAJAMIAAhEIATAAQAHACgGAEIAABUQAHAOAxAcIgOAUQgdgUgNgMIAABegAhiBWQAfgUAZgsQgUgSgMgGQgHAPgMANIgSgMQAhgnAJhDIAVAGQAFADgHADIgDASIAlAAIADgDIANALQADADgEAEQgPBmhGAxgAhDgVQANAHAUAQQAJgWADgXIglAAg");
	this.shape_5.setTransform(37.2,-4.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3300CC").s().p("AARBmQgcAAgSgJQgSgIgLgMQgMgMgEADQgEADgHAKIgOAUIgNgMIAigbIAAhMIgFAAQgMAAgLADIgIgIIAiAAIAJgKIAOANIgJAGIAABIQAKAKAQAKQARAJApACQApABA4gFIAAAFQgOADgDALIhRgCgAgrA7IAAgDQASABAJAAQAHgBADgOQADgOgBgQIgBgaQgVAegeATIgCgDQAngkAKgbQgCgMgFgJQgRASgUALIgDgCQAVgSANgSQgHgNgTgOIACgDQATAKAMANQAPgXACgKIARAOIgIACIgTAYQAHALAEAVQAGAVAAAbQgBAcgGAMQgHALgMAHQgEgOgWgEgAAHA3IApAAIAAg+IgCAAQgOAAgKADIgJgJIAjAAIAAg2IgHAAQgMAAgLADIgIgJIBCAAIAKgKIAPAQIgqAAIAAA2IAOAAIAKgKIAOAQIgmAAIAAA+IAWAAIALgMIAPARIhKAAQgGAAgLADgAhMhHQgEgOgPgPIACgDQAQAIAIAHQAJAHAAAHQAAAHgEADIgFADQgEAAgDgKg");
	this.shape_6.setTransform(12.3,-4.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3300CC").s().p("AARBmQgcAAgSgJQgRgIgMgMQgMgMgDADQgFADgHAKIgOAUIgNgMIAhgbIAAhMIgDAAQgNAAgLADIgJgIIAjAAIAJgKIAOANIgJAGIAABIQAKAKAQAKQARAJApACQApABA5gFIAAAFQgPADgDALIhRgCgAgrA7IAAgDQASABAJAAQAHgBADgOQACgOAAgQIgBgaQgVAegeATIgCgDQAngkAKgbQgCgMgFgJQgRASgUALIgDgCQAWgSAMgSQgHgNgTgOIADgDQASAKAMANQAPgXABgKIASAOIgJACIgSAYQAGALAFAVQAHAVgBAbQAAAcgIAMQgGALgMAHQgEgOgWgEgAAIA3IAnAAIAAg+IgBAAQgNAAgLADIgJgJIAiAAIAAg2IgGAAQgMAAgLADIgIgJIBCAAIAKgKIAPAQIgqAAIAAA2IAOAAIAJgKIAPAQIgmAAIAAA+IAWAAIAKgMIAQARIhJAAQgHAAgLADgAhMhHQgEgOgPgPIACgDQAPAIAJAHQAJAHAAAHQAAAHgEADIgFADQgDAAgEgKg");
	this.shape_7.setTransform(-12.7,-4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3300CC").s().p("AhyBjQAVgkgCg8IAWADQADADgFADIgBAZQAEAKAOAPIAAhIIgyAAIAAgTIAyAAIAAggIgoAAIAAgTIAoAAIAAgfIATAAQAIABgHAFIAAAZIAmAAIAAATIgmAAIAAAgIAsAAIAAATIgsAAIAAAfIAjAAIAAASIgjAAIAAAlQATAKAbAAIBrAAIgHATIhpAAQgzAAgfgrQgFAegMAUgAAfBGQgSAAAAgRIAAhVIBDAAIAAgtIhHAAIAAgSIBaAAIAABcIgTAAIAAgKIgvAAIAAA4QAAAIAHAAIApAAQAHAAABgGIADgSIAUAEIgDASQgDAVgUAAg");
	this.shape_8.setTransform(-37.9,-4.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3300CC").s().p("AhmALIAAgVIDNAAIAAAVg");
	this.shape_9.setTransform(-62.9,-4.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3300CC").s().p("Ag/BaQAtgLAZgYQgTgXgNggQgPBAg1AnIgNgUQA9goAHheIhAAAIAAgTIBDAAIABgpIATABQAIABgHAFIgCAiIB3AAIAAATIh4AAIgEAfIBKAAIAEgEIAQANQAEAEgGABQgOAkgUAZQAhAXAlAIIgHAXQgmgIgogfQgcAagyAQgAAWAqQAPgSAKgaIg0AAQAFARAWAbg");
	this.shape_10.setTransform(-87.6,-4.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3300CC").s().p("AhnBZQASgbAAghIAAiEIBSAAIAAC+QABAQgRAAIgRAAIgFgSIAQAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAgBIAAg0IgrAAQAAAtgXAegAhBAKIArAAIAAgmIgrAAgAhBgvIArAAIAAglIgrAAgABFBnIgEgSIARAAQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAgBIAAg0IgtAAQAAArgXAfIgPgPQATgZAAgiIAAiEIBTAAIAAC+QAAAQgQAAgAAoAKIAtAAIAAgmIgtAAgAAogvIAtAAIAAglIgtAAg");
	this.shape_11.setTransform(-113.4,-3.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3300CC").s().p("Ag4BtIAAhdQgPAdgWAWIgPgRQAkgiAPgrIgtAAIAAgTIAuAAIAAgeQgZAEgNABIgIgSQAygFAngOIALARQACAHgHgEIgeAIIAAAiIArAAIAAATIgrAAIAAAUQAeAMAOASIgLATQgSgUgPgJIAABggAAQBoIAAi3IBdAAIAACyIgUAAIAAgNIg1AAIAAASgAAkBDIA1AAIAAiAIg1AAg");
	this.shape_12.setTransform(-138.1,-4.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3300CC").s().p("AhSBTIAAgFIAGAAQAKAAAFgGQACgFAAgOIAAhpQAAgQgDgEQgFgFgJAAIgGAAIAAgFIBDAAQAkAAATAJQAUAIAMAUQALATAAAaQAAAigVAXQgXAagwAAgAgjhFIAACMQAPADALAAQAbAAATgUQASgUAAgiQAAghgSgUQgTgTgcAAQgLAAgOADg");
	this.shape_13.setTransform(-159.5,-3.5);

	this.instance = new lib.option();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.212,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.option(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-38,377.6,76.1);


(lib.option6C = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().p("AgfBlIgEgWIAVAAQAEAAAAgDIAAh6IARADQAfgWANgMIiOAAIAAgTICgAAIAEgEIATASQABAEgGABQgcAZgwAdIAABuQAAAOgMAAg");
	this.shape.setTransform(61,-3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("AAVBrIgFgWIASAAQAEAAAAgDIAAhFIgyAAIAAgRIAyAAIAAgpIAHABIAXgdIhKAAIAAgTIBWAAIAFgEIAQARQAGAEgKACIgnAnIAAAeIA0AAIAAARIg0AAIAABNQAAARgNAAgAhtBaQAhgVAPgWQgBgBgTgMIgDAMIgTgJQANglAIgpIgZAAIAAgSIAbAAQAFgYACgXIAUADQAGABgHAFQgCATgEATIAXAAIADgFIATAMIgDAFQgFA6gNAdIAcAYIgMATQgPgPgKgIQgSAaggAVgAhLARQAIAEANAJQALgdAFgqIgZAAIgMA6g");
	this.shape_1.setTransform(36.2,-4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("AgyBvIAAgYIg5AAIAAgPIA5AAIAAgJIgTAAIgVAAIAAgkIAoAAIAAgIIgMAAIgNAAIAAgLIAAgJIgaAAIAAgLIAaAAIAAgKIANAAQAJABgIAFIAAAEIAmAAIAAgLIANAAQAJABgIAFIAAAFIAZAAIAAALIgZAAIAAAUIgYAAIAAAIIApAAIAAAkIgpAAIAAAJIA4AAIAAAJQAKgIAAgXIAAhFIBKAAIAABuQAAARgOAAIgVAAIgCgTIARAAQABAAABAAQAAAAABAAQAAgBAAAAQABgBAAgBIAAgWIgqAAQgBAagkATIgJgOQAIgEAEgEIgwAAIAAAYgAghAzIAZAAIAAgNIgZAAgAhKAzIAYAAIAAgNIgYAAgAAxAwIAqAAIAAgSIgqAAgAAxAOIAqAAIAAgRIgqAAgAg9AHIAmAAIAAgIIgmAAgAgGgZIAAgwIhLAAIAAAYIgUAAIAAgnIBfAAIAAgKIhHAAIAAgMICgAAIAAAMIhGAAIAAAKIBfAAIAAAmIgTAAIAAgXIhMAAIAAAwgAAXghIAAgMIA1AAIAAAMgAhGghIAAgMIA2AAIAAAMgAAXg1IAAgMIA1AAIAAAMgAhFg1IAAgMIA1AAIAAAMg");
	this.shape_2.setTransform(10.6,-4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("AgfBvIgEgVIAWAAQAEAAAAgEIAAgoIhlAAIAAgTIBlAAIAAgZIAQABIAcgQIhnAAIAAgPIB4AAIACgDIASAPQACAEgIAAQgdASgcAMIAAAJIBmAAIAAATIhmAAIAAAyQAAAPgOAAgAhqgLIAAg4ICNAAIAUgrIAVAJQAEAFgHABIgRAcIAxAAIAAA1IgUAAIAAgjIirAAIAAAmgAgUhjIASgKQANASAGAMIgUALQgIgSgJgNgAhNhgIASgKQALALAJAQIgVALQgIgSgJgKg");
	this.shape_3.setTransform(-14,-4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3300CC").s().p("AAoBrIgDgSIAZAAQAOAAABgSIAFh0Ig5AAQgKAbgUAYIgPgRQAhghAJg9IAUAGQAIAEgJACIgIAeIBHAAIgGCDQgBAngdAAgAhmBoIAAinIAZAAQAGgTAFgYIAXAIQAEAEgHABQgDANgIARIAkAAIAACgIgTAAIAAgMIgrAAIAAATgAhTBCIArAAIAAgyIgrAAgAhTgCIArAAIAAgrIgrAAgAAHAKIAQgRQAUARALAQIgRATQgOgUgQgPg");
	this.shape_4.setTransform(-38.8,-4.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3300CC").s().p("AhfBwIAAhyIBNAAIAABjQAAAOgMAAIgQAAIgEgPIAMAAQADAAAAgEIAAgXIgsAAIAAArgAhPA2IAsAAIAAgNIgsAAgAhPAZIAsAAIAAgMIgsAAgAAdBvIgDgSIAKAAQADAAAAgEIAAgpIgfAAIAAgQIAfAAIAAgWIgtAAIAAgPIAtAAIAAgWIgcAAIAAgOQgFAHgFAEIgMgMQAZgaAOgrIATAEQAEADgGABIgHANIAfAAIACgDIAQAKQAEAEgIABIgYAjIAnAAIAAAmIAOAAIAAAPIgOAAIAAAvIgRAAIAAgJIgWAAIAAAyQAAANgNAAgAA7AgIAWAAIAAgWIgWAAgAA7gFIAWAAIAAgWIgWAAgAAMgrIAbAAIAWgfIgcAAQgGAMgPATgAhvgPIAAgPIArAAIAAgOIgeAAIAAgQIAeAAIAAgNIglAAIAAgQIAlAAIAAgVIASAAQAJABgIAEIAAAQIApAAIAAAQIgpAAIAAANIAkAAIAAAQIgkAAIAAAOIArAAIAAAPg");
	this.shape_5.setTransform(-63.9,-4.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3300CC").s().p("AhjBZQA9gCAkgYIgsgRIgJAMIgRgMQAOgTARgbIhBAAIAAgSIBKAAQALgYAGgPIATAHQAGADgHACIgMAbIB0AAIAAASIgwAAQgGAfgVAaQAgANAeAXIgSASQgegYgdgOQgkAfhLAIgAgkAeQAUAGAdAMQATgYAGgYIg4AAQgFAMgNASgABSgiIAAgeIijAAIAAAeIgUAAIAAgxIBbAAIAAgcIASAAQAHABgGAFIAAAWIBdAAIAAAxg");
	this.shape_6.setTransform(-89.1,-4.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3300CC").s().p("AgLBqIAAiPIAUAAQAKACgJAGIAACHgAhsgRQBBgcAjg8IAQAGQAMAEgLAFQAaAnBKAeIgMAUQhDgcgfguQgnA1g5AXg");
	this.shape_7.setTransform(-114.1,-4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3300CC").s().p("AAKBcQAdgNARgZQgNghgDgiQgGAQgGAHIgKgQQAXgpAJg7IAVAEQADAEgHABQgDAZgHARIA6AAIAAATIgVAAQAAA0gRAlQAOASAYAPIgHAWQgdgSgNgTQgQAaggAPgABCAiQAKgfACgnIgYAAQACAlAKAhgAhVBwIAAh7QgKARgLANIgIgWQAdgnAOhFIAUAEQAJADgKACQgHAigKAYQAMABgIAFIAACWgAgwBhIAAhlIAXAAIAAgnIgeAAIAAgTIAeAAIAAgsIATAAQAHABgGAFIAAAmIAiAAIAAATIgiAAIAAAnIAWAAIAABVIgtAAIAAAQgAgcA+IAaAAIAAgwIgaAAg");
	this.shape_8.setTransform(-139.1,-4.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3300CC").s().p("Ag5A4QgQgXAAgeQAAgYALgVQALgVATgLQAUgMAWAAQASAAARAJIAIADQADAAACgCQAEgEABgGIAEAAIAEA5IgEAAQgIgagNgLQgOgLgVAAQgPAAgNAJQgNAIgIASQgIATABAaQAAAWAGARQAIAQAPAJQANAJATAAQAQAAAMgHQAMgHAPgVIADADQgMAWgQAKQgRALgXAAQgoAAgXgfg");
	this.shape_9.setTransform(-159.9,-3.5);

	this.instance = new lib.option();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.212,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.option(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-38,377.6,76.1);


(lib.option6B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().p("AgJBvIAAhMQgeAqg5AZIgLgVQA9gXAhgvIhbAAIAAgSIBfAAIAAg0IhSAAIAAgSIBSAAIAAghIASAAQAIABgHAEIAAAcIBSAAIAAASIhSAAIAAA0IAQAAIATgvIAVAKQAEAEgHABIgSAgIA8AAIAAASIhaAAQAgAtA9AUIgMAVQg1gVghgqIAABNgAhIgqIARgNQAQAQAGARIgSALQgHgRgOgOg");
	this.shape.setTransform(11,-4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("AhyBjQAVgkgCg8IAWADQADADgFADIgBAZQAEAKAOAPIAAhIIgyAAIAAgTIAyAAIAAggIgoAAIAAgTIAoAAIAAgfIATAAQAIABgHAFIAAAZIAmAAIAAATIgmAAIAAAgIAsAAIAAATIgsAAIAAAfIAjAAIAAASIgjAAIAAAlQATAKAbAAIBrAAIgHATIhpAAQgzAAgfgrQgFAegMAUgAAfBGQgSAAAAgRIAAhVIBDAAIAAgtIhHAAIAAgSIBaAAIAABcIgTAAIAAgKIgvAAIAAA4QAAAIAHAAIApAAQAHAAABgGIADgSIAUAEIgDASQgDAVgUAAg");
	this.shape_1.setTransform(-14.3,-4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("AAZBeIAAgEIAaAEQAMABABgWIg0AAIgHAHIgKgMIAGgFIAIguQgHAAgIADIgIgJIAYAAQADgaACghQgKASgKALIgCgCQAKgTAJgUQAJgVAGggIAUAMIgJAFQgEALgHANIAtAAIAMgMIASASIhNAAIgKARIAMAJIAnAAIAHgIIAOAKIgIAHIgBAqIAEAAIAKgKIAQAQIgeAAIgCAyIAGAAIALgLIARARIgjAAQgBAYgIAHQgIAIgJACQAAgLgYgJgAAMBDIA1AAIABgyIgtAAgAAVALIAtAAIABgtIgoAAgAgmBiQgGgEACgJIAEgaQADgQgUgEIAAgDQANACAFgFQAGgEAbhjIAEABQgXBegBAQQgBARABAYQABAUgIAAIgHgEgAAnA1QgBgNgHgOIACgCQAQAPACAHQACAHgEAFQgEAEgCAAQgDAAgBgJgAhrgOIgChFIAOAIIAWAAIAHgJIAOALIgHAHIAABKIABAcIgNAFIAAgRIgYAAIAAAXIgOAIIAChFgAhfASIAYAAIAAhXIgYAAgAArAAQgBgJgIgRIACgCQAPANAEAHQADAHgGAEIgFAFQgDAAgBgIgAgmgVQgFgLgOgSIACgCQAQAHAGAFQAHAFAAAGQAAAFgDAFQgCAFgCAAQgDAAgCgHgAgXhMQgFgMgNgQIACgDQARAIAHAGQAFAGAAAEQAAADgEAHQgCAGgDAAQgCAAgCgJg");
	this.shape_2.setTransform(-38.6,-4.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("AgmBuQAggVAOgWQAPgWAHgcQAFgaABgjIgRAAIgMACIgHgIIAkAAIgBg+IAVAJIgGAHIAAAuIAmAAIAIgJIAPAMIgIAHQgBBmgFAVQgGAVgXAHQgBgLgdgMIABgFQAUAFAMAAQAGAAADgDQADgCADgXQADgXABhRIgoAAQgBAlgIAcQgHAegUAWQgRAXggARgAhsA4QALgDAQgeQARgdAEgSIgfAAIgLACIgIgHIBcAAIAMgMIARARIhBAAIAPAMQgJAEgQAYQgRAYgNAPIBNgJQgKgUgLgQIADgCQAjAfAAALQADALgEAFIgFAEQgDAAgBgFIgFgOQhHAMgLAMgAhmhPIBHAAIALgMIARASIhHAAQgLAAgIADg");
	this.shape_3.setTransform(-64.4,-4.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3300CC").s().p("AgdBsIAAhdIAxAAIAAglIhFAAIAAgTIBFAAIAAglIg7AGIgEgTQBGgFA0gLIAMASQACAHgIgFIguAHIAAAnIBJAAIAAATIhJAAIAAAlIAyAAIAABaIgUAAIAAgHIhOAAIAAAKgAgJBPIBOAAIAAgtIhOAAgAhaBpIgVgQQAagkAQgjIASAMQgVAwgPAWQACAFgEAAIgBAAgAhogcIAMgTQAPAIATAPIgMATIgigXgAhhhXIAMgSQAMAHAWARIgNAWIghgcg");
	this.shape_4.setTransform(-89.1,-4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3300CC").s().p("ABNBgIifAAIAAALIgPAGIABgiIAAiaIgBgkIAPAIICdAAIAGgJIARALIgHAHIAACsIABAdIgPAGgAhSBaICfAAIAAi7IifAAgAgfA+IAAgEIAcACQAMAAgBgLIAAhAQgRAYgUATQgVATgXANIgCgCQAZgTAXgbQAWgaAIgWIgoAAQgNAAgKADIgJgJIBNAAIAAgYIgBgcIAWALIgHAGIAAAjIATAAIAMgMIARASIgwAAIAABcQABATgYAIQABgMgfgJg");
	this.shape_5.setTransform(-113.6,-4.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3300CC").s().p("AhDBvIAAhhQgSAQgSAKIgJgTQAvgYAaguIhAAAIAAgTIAkAAIAAgqIATAAQAHABgHAFIAAAkIAVAAIAEgEIAPAPIgHAFQgMAWgVAaQAZAGASANIgKAWQgRgOgQgJIAABhgAgUBjIAAgVIA4AAIAAhlIgpAAIAAgWIApAAIAAg7IAWAAQAKACgJAGIAAAzIAtAAIAAAWIgtAAIAABlIA2AAIAAAVg");
	this.shape_6.setTransform(-139.4,-4.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3300CC").s().p("AhKBTIAAgFIAHAAQALAAAEgGQADgFAAgOIAAhpQAAgQgEgEQgFgFgJAAIgHAAIAAgFIBIAAQATAAANADQARAFAKALQAKALAAAOQAAANgHAKQgJAKgOAEQARADAIAIQANALAAAQQAAANgIALQgIALgOAGQgOAFgbAAgAgSACIgIABIAABEQAOADANAAQAWAAALgKQAMgKAAgOQABgKgGgJQgFgJgMgFQgMgFgQAAIgOAAgAgahHIAABAIAKABIANAAQARAAAJgDQAJgEAEgIQAGgIAAgKQgBgOgLgKQgMgLgWAAQgMAAgKADg");
	this.shape_7.setTransform(-160.4,-3.5);

	this.instance = new lib.option();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.212,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.option(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-38,377.6,76.1);


(lib.option6A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().p("Ag6BvQAfgTASghQASghADg6IgZAAIgJACIgIgIIAqAAIgBhLIAYALIgIAHIgBA5IA0AAIAOgOIAUAUIg5AAIAABtQgBAQANAAIAQAAQALACABgQIADghIAEAAIACAbQABAOAKAFQgIANgSgBIgdAAQgUAAABgXIAAhxIgPAAQgCA5gUAiQgSAigqAVgAhqBaIAAgEQAWAEAIgBQAHAAAAgLIAAhFQgfAQgBAGIgNgRQAFABAogQIAAgyIgYAAIgMACIgIgIIAsAAIgBg4IAXAKIgIAHIAAAnIAMAAIALgKIARAQIgoAAIAAAtIAigOIADADIglAUIAABUQgBASgXAHQABgMgcgKgABIhBQgGgPgRgSIACgDQAWALAHAGQAIAHAAAGQgBAGgDAFQgEAEgCAAQgEAAgCgJg");
	this.shape.setTransform(3.9,-4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("AhKBaQBjgkAKhuIgcAAQgQBKg8AcIgMgRQA3gXAQg+IggAAQgTAgggAVIgKgSQAygeAOg5IATABQAIACgJAEQgDALgHAPICHAAQAABHgFBEQgDAsgjAAIgXAAIgDgTIAUAAQAWAAACgcQACgTAEhiIgeAAQgJB4htAtg");
	this.shape_1.setTransform(-21.4,-4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("AgKAYIAJgaIgJAAIAAgVIAVAAIAAAVIgLAag");
	this.shape_2.setTransform(-46.6,4.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("AAiBDQgTgmgBhFIh3AAIAAgVIB2AAIAAgtIAVAAQALACgKAGIAAAlIBFAAIAAAVIhFAAQAFBEAPAcQANAYAJAAQAEAAACgGIACgRIAVAKIgEAXQgDARgOAAQgeAAgVgogAhjBhIgFgYQAYgCAYgEIAAg4IgnAAIAAgRIBgAAIAAARIgmAAIAAA1QAXgDAcgGIADATQg2ALg4AKQAAAFgCAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAgBgBgAAuhWIAQgPQANAHANALIgRAPQgKgKgPgIg");
	this.shape_3.setTransform(-62.5,-4.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3300CC").s().p("AhNBxIAAhnQgMAbgLAPIgPgQQAhgvAFgkIggAAIAAgSIAgAAIAAgvIASAAQAIABgGAFIAAApIAeAAIAAASIgeAAIAAAZQAOAKASAXIgNARIgTgcIAABxgAAmBCQgPAjg4ALIgJgSQA8gMAGgbIg9AAIAAgQIA/AAIAAgQIgVAAIgVAAIAAhNIAWAAIAAgSIgjAAIAAgQIAjAAIAAgYIAPAAQAIABgGAFIAAASIAdAAIAAgXIAQAAQAHABgGAEIAAASIAmAAIAAAQIgmAAIAAASIAXAAIAABNIguAAIAAAQIBDAAIAAAQIg/AAQAMAaA2ALIgJAUQgvgMgWgigAAAAIIBLAAIAAgPIhLAAgAAAgXIBLAAIAAgPIhLAAgAAXg2IAdAAIAAgSIgdAAg");
	this.shape_4.setTransform(-87.7,-4.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3300CC").s().p("AhqBtQAmgJAUgOQAVgOAGgWQAHgXAAghIAWAMIgIAGQgFAsgMARQgNASgWAIQgXAJgfAFgAATBmQgRAAAAgOIAAgmIgBgXIAVAKIgHAHIAAAkQAAALAMAAIAxAAQALAAACgIQACgHAAgZIAFAAQAAAPACAKQACAJAJAEQgHANgMAAgAg+APIgBgrIAPAHIBXAAIAKgJIAOANIgJAIIABA9IgOAGIAAhJIhbAAIAABDIgNAIIABgtgAhqgVIgEgEQAAgBADgDQAFgFAFgIQAFgHACgQIAEAAIAAAMIBvAAQAUghAHgaIAVAOIgJADIghAqIA0AAIALgLIARASQgGABgIAFQgJAFgLAOIgEgCIAMgYIirAAQACASgGAFQgFAFgFAAQgDAAgDgCgAg2hFQgDgPgNgSIACgCQARAMAHAHQAFAIAAAFQABAEgFAEIgGAFQgDAAgCgKgAgHhNQgDgPgNgRIACgDQAQAKAGAIQAIAIAAAFQAAAEgFAFQgDAFgBAAQgEAAgDgKg");
	this.shape_5.setTransform(-112.6,-4.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3300CC").s().p("AgzBqIAAgPIBJAAIAAgiIg4AAIAAgQIASAAIAAgfIgYAAIAAgPIAYAAIAAggIgRAAIAAgQIA3AAIAAgaIg0ABIgDgRQBIACAvgMIALAQQABAGgIgEQgXAFgcACIAAAbIA8AAIAAAQIgUAAIAAAgIAeAAIAAAPIgeAAIAAAfIAVAAIAAAQIg9AAIAAAiIBEAAIAAAPgAAnApIAUAAIAAgfIgUAAgAADApIATAAIAAgfIgTAAgAAngFIAUAAIAAggIgUAAgAADgFIATAAIAAggIgTAAgAhsBeIAAi9IA9AAIAACyIgQAAIAAgHIgdAAIAAASgAhcA9IAdAAIAAgnIgdAAgAhcAHIAdAAIAAgjIgdAAgAhcgsIAdAAIAAgjIgdAAg");
	this.shape_6.setTransform(-137.4,-4.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3300CC").s().p("AAXBVIAAgFQAKAAADgDQAEgDAAgEQAAgFgFgMIgKgYIg/AAIgMAaQgEAKAAAFQAAAEAEADQADACAMABIAAAFIg0AAIAAgFQALgCADgDQAGgFAHgSIA7iIIADAAIA6CJQAHARAFAFQAGAFAKAAIAAAFgAgjAUIA4AAIgbhCg");
	this.shape_7.setTransform(-159.3,-3.7);

	this.instance = new lib.option();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.212,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.option(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-38,377.6,76.1);


(lib.option5D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().p("ABKAJQgEgEAAgFQAAgFADgEQAFgEAFABQAGAAAEADQAEAEAAAFQAAAFgEAEQgEAFgGAAQgFAAgEgFgAgIAJQgEgEAAgFQAAgFAEgEQADgEAFABQAGAAADADQAEAEABAFQgBAFgEAEQgDAFgGAAQgFAAgDgFgAhcAJQgEgEAAgFQAAgFAEgEQAEgEAGABQAGAAAEADQADAEAAAFQAAAFgDAEQgFAFgFAAQgGAAgEgFg");
	this.shape.setTransform(140,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("ABKAJQgEgEAAgFQAAgFADgEQAFgEAGABQAFAAAEADQAEAEAAAFQAAAFgEAEQgEAFgFAAQgGAAgEgFgAgJAJQgDgEAAgFQAAgFADgEQAFgEAEABQAFAAAEADQAFAEAAAFQAAAFgFAEQgEAFgFAAQgEAAgFgFgAhcAJQgEgEAAgFQAAgFAEgEQAEgEAGABQAFAAAEADQAEAEAAAFQAAAFgEAEQgEAFgFAAQgGAAgEgFg");
	this.shape_1.setTransform(115,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("AgvBwIAAhrQgXAYgbAQIgMgVQA6gfARgzIhCAAIAAgSIBHAAQADgMABgXIAZAFQAEADgGABIgFAaIB0AAIAAASIh3AAQgFAOgEAJIBfAAIAACBQAAAPgQAAIgWAAIgEgSIATAAQAEAAAAgEIAAgbIhVAAIAAA0gAgcAqIBVAAIAAgWIhVAAgAgcACIBVAAIAAgTIhVAAg");
	this.shape_2.setTransform(89.8,-4.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("AAYBnQgbgBgSgGQgRgFgMgMQgNgMgDgCQgEgBgLAOQgLANgGAKIgOgNIAngbIAAhOIgJAAQgNAAgLADIgIgIIAmAAIAKgMIAOAPIgJAFIAABLQALALAQAIQAPAHAdABQAdABAagBQAbgBAXgDIAAAEQgTADgBAOQgqgBgdgBgAAPgbQgaApgqAdIgCgCQAognATgiQATgjAEgNIgrAAQgIAAgKAEIgJgJIB4AAIAMgMIAQARIhLAAIARALIgJAFIgSAcIAOAIIgGAGQAABSABAQIgPAHIABhugABZAfQgHgMgLgMQgLgKgQgNIACgDQAZANAQAKQAPAMACAIQACAJgDADQgEAEgCAAQgDAAgFgJgAhKhIQgEgOgLgPIACgCQAMAHAIAIQAJAHAAAIQgBAIgDACQgEADgCAAQgDAAgDgMg");
	this.shape_3.setTransform(64.9,-4.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3300CC").s().p("AgKAYIAJgaIgJAAIAAgVIAVAAIAAAVIgLAag");
	this.shape_4.setTransform(39.5,4.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3300CC").s().p("AhDBxIAAhxICJAAIAABsIgUAAIAAgIIhiAAIAAANgAgwBRIBiAAIAAgXIhiAAgAgwAnIBiAAIAAgUIhiAAgAhugPIAAgTIBFAAIgPgkIggAAIAAgSIBQAAIAAgYIASAAQAHABgHAFIAAASIBRAAIAAASIggAAIgQAkIBEAAIAAATgAgVgiIAtAAIANgkIhHAAg");
	this.shape_5.setTransform(23.3,-4.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3300CC").s().p("AA4BuIAAhGIhVAPIAAgTIBVgPIAAiCIATAAQAHABgHAEIAAB7IAjgHIAAASIgjAHIAABJgAhVBuIgDgSIAOAAQAEAAAAgEIAAg9IgZAIQgFAMgDgMIgGgUIAngJIAAguIgiAAIAAgTIAiAAIAAgxIATAAQAHABgGAEIAAAsIAdAAIAAATIgdAAIAAAqIAegHIAAASIgeAJIAABIQgBAQgOAAgAgNgQIAJgRQAXALAVAOIgLASQgTgOgXgMgAgJhCIAKgTQAXAMATANIgLATQgSgOgXgLg");
	this.shape_6.setTransform(-1.8,-4.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3300CC").s().p("AAoBwIgDgSIANAAQABAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIAAggIg1AAQAMAIAJAPIgPAQQgIgNgNgNIAOgNIguAAIAAgTIBkAAIAAgPIgpAAIgmAAIAAhNIAvAAIAAgOIg7AAIAAgQIA7AAIAAgdIATAAQAIABgHAEIAAAYIAgAAQgJgJgMgIIALgLQAQAHAJAKIgLALIAcAAIAAAQIhAAAIAAAOIAyAAIAABNIgTAAIAAAPIAoAAIAAATIgoAAIAAAlQAAAQgQAAgAApAKIAhAAIAAgPIghAAgAgJAKIAeAAIAAgPIgeAAgAApgVIAhAAIAAgPIghAAgAgJgVIAeAAIAAgPIgeAAgAhUBwIAAiPIgcAAIAAgTIAcAAIAAg6IATAAQAHABgGAEIAAA1IAaAAIAAATIgaAAIAACPg");
	this.shape_7.setTransform(-26.6,-4.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3300CC").s().p("AADBcQAqgZAMgSQgJgXgFgvQgEAJgGAHIgNgOQAcgdAFg9IAUAEQAEAEgGABQgFAcgEAKIAxAAIAAATIgNAAQAAA4gSAlQAJAPAbAVIgKASQgWgOgQgZQgaAfgfAOgABGAgQALgbAAgwIgWAAQABArAKAggAhRBuIAAhuQgKAPgQAKIgIgSQAhgbAQgsIAQAJQADADgFACIgMAZIAACHgAg4BXQAVgVAAgdIAAgcIgRAAIAAgSIBOAAIAAASIgOAAIAAAsIAYgPIAGAOQgPALgZAOQgCAGgCgEIgHgOIAGgEIAAg0IgPAAIAAAbQgBAtgbAVgAgugVIAAhHIAQAAQAIABgHAFIAAAnIANAAIAAg+IAQAAQAHAAgHAFIAAA5IAMAAIAAgtIAQAAQAIABgHAFIAAA3Ig6AAIAAAKgAhvg4QAYgTAQgiIARAIQAEACgGADQgSAkgZAUg");
	this.shape_8.setTransform(-51.7,-4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3300CC").s().p("AAsBmQgTgGgRgLQgRgLgMgMQgSgHgKgIQgOgMgJgRQgIgRAAgXQAAglAYgZQAYgYAhAAQAhAAAXAZQAYAYAAAmQAAAdgRAXQgRAXgbAIQAMAWAPAKQAPAKASABIAAAEQgRAAgTgHgAgjhTQgRAUAAApQAAAnARAWQANARAWAAQAWAAAPgRQAQgUAAglQAAgegJgUQgHgQgLgHQgMgIgOAAQgWAAgNAQg");
	this.shape_9.setTransform(-73.1,-1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3300CC").s().p("AAsBmQgUgGgRgLQgPgLgNgMQgRgHgLgIQgPgMgIgRQgIgRAAgXQAAglAYgZQAYgYAhAAQAgAAAZAZQAXAYAAAmQAAAdgRAXQgRAXgbAIQANAWAOAKQAOAKATABIAAAEQgRAAgTgHgAgjhTQgSAUAAApQAAAnASAWQANARAWAAQAXAAANgRQARgUAAglQAAgegJgUQgHgQgMgHQgLgIgOAAQgWAAgNAQg");
	this.shape_10.setTransform(-91.2,-1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3300CC").s().p("AgcBvIAAhNIB9AAIAABKIgUAAIAAgJIhVAAIAAAMgAgIBQIBVAAIAAgcIhVAAgAhOBvIAAh6QgHAMgLAOIgPgRQAlgrAHhBIAWAGQAEAEgHACQgEAcgIAXQALABgJAFIAACYgAgWARIAAgSIBtAAIAAASgAgWgQIAAgTIBtAAIAAATgAgtgxIAAgTICdAAIAAATgAgWhVIAAgSIBtAAIAAASg");
	this.shape_11.setTransform(-113,-4.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3300CC").s().p("AADBcQAqgZANgSQgKgXgFgvQgEAJgHAHIgLgOQAbgdAFg9IAVAEQADAEgHABQgEAcgFAKIAzAAIAAATIgPAAQAAA4gRAlQAJAPAbAVIgLASQgVgOgQgZQgaAfgfAOgABFAgQAMgbAAgwIgWAAQAAArAKAggAhRBuIAAhuQgKAPgQAKIgIgSQAhgbAQgsIAQAJQADADgEACIgOAZIAACHgAg5BXQAWgVAAgdIAAgcIgQAAIAAgSIBNAAIAAASIgNAAIAAAsIAXgPIAGAOQgQALgYAOQgCAGgCgEIgIgOIAHgEIAAg0IgQAAIAAAbQABAtgcAVgAgugVIAAhHIAQAAQAHABgGAFIAAAnIAOAAIAAg+IAPAAQAHAAgHAFIAAA5IANAAIAAgtIAQAAQAHABgGAFIAAA3Ig7AAIAAAKgAhvg4QAYgTAQgiIAQAIQAFACgHADQgRAkgaAUg");
	this.shape_12.setTransform(-137.8,-4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3300CC").s().p("AhSBTIAAgFIAGAAQAKAAAFgGQACgFAAgOIAAhpQAAgQgDgEQgFgFgJAAIgGAAIAAgFIBDAAQAkAAATAJQAUAIAMAUQALATAAAaQAAAigVAXQgXAagwAAgAgjhFIAACMQAPADALAAQAbAAATgUQASgUAAgiQAAghgSgUQgTgTgcAAQgLAAgOADg");
	this.shape_13.setTransform(-159.5,-3.5);

	this.instance = new lib.option();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.212,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.option(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-38,377.6,76.1);


(lib.option5C = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().p("AgYBqIgGgSIARAAQAEAAAAgEIAAgzIgZAIQgDAKgDgKIgEgUIAjgIIAAgmIgoAAIAABYIgUAAIAAgLIgWAAIAAAYIgUAAIAAifIA+AAIAAAnIAoAAIAAggIgbAIIgIgRQAjgIAcgNIALAQQAGAIgKgEQgHABgKAEIAAAlIAhAAIAAg+IASAAQAIACgHAEIAAA4IAwAAIAAATIgwAAIAAAOQAAAaAEAMQAJgQAIgXIARAHQAIADgKACQgIAagQAcQAJAWAIABQADgBABgXIASAJQgDApgOAAQgUAAgQgfQgMAQgVAMIgLgSQAXgMAMgUQgIgcAAgiIAAgNIghAAIAAAiIAagIIAAASIgaAJIAAA9QAAARgNAAgAhbAhIAWAAIAAhiIgWAAgABAhUIAQgLQAMALAJAPIgRAMQgJgPgLgMg");
	this.shape.setTransform(36.3,-4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("AgSBlIAAgNIhFAAIAAANIgRAAIAAiaIAfAAIAAgdIgoAAIAAgSIB0AAIAAASIgjAAIAAAdIAfAAIAACagAhXBJIBFAAIAAgXIhFAAgAhXAiIBFAAIAAgVIgNAAQgPAAAAgPIAAgjIgOAAIAAAWQAAATgPASIgLgNQANgKAAgQIAAgUIgOAAgAgggEQAAAEAFAAIAJAAIAAglIgOAAgAg8g1IAOAAIAAgdIgOAAgAAgBhQgSAAAAgSIAAhlIBCAAIAAg6IhEAAIAAgSIBXAAIAABnIgTAAIAAgIIguAAIAABLQAAAGAGABIAnAAQALAAABgJIACgXIAVAGIgEAaQgDASgSAAg");
	this.shape_1.setTransform(11,-3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("AgJBaQAagIASgPQgRgUgKgZIgNAAIAAgSIBSAAIACgEIARANQABADgFACQgMAcgRAVQAOALAlAJIgHAVQgcgGgdgWQgYAWgYAIgAAyA3QAIgJAMgYIgrAAQAMAZALAIgAgeBuIAAgZIhEAKQgFAHgBgFIgGgWIAbgBIAAhUIgeAAIAAgPIDfAAIAAAPIh7AAIAAB4gAhCBJIAkgEIAAgQIgkAAgAhCAlIAkAAIAAgQIgkAAgAhCAFIAkAAIAAgPIgkAAgAhLglIAAhIICTAAIAABIgAg4g0IBtAAIAAgOIhtAAgAg4hRIBtAAIAAgMIhtAAg");
	this.shape_2.setTransform(-14,-3.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("AgmBYIAAgFQAVADALAAQALABgBgKIAAhTIhDAAIgJAIIgOgMIAIgGIAKhRIAOALQAwgEAdgGQAdgHALgHIARARIg3AGQgnAFgoABIgKBFIBEAAIgBg7IAYALIgKAHIAAApIA5AAIAOgOIATAUIhaAAIAABbQABASgXAIQABgOgigJgAhrBaQAXgSASgVQASgVAKgTIAUAQIgLADQglAognAXgABNBJQgJgWgfghIADgDQA0AlACAHQACAHABAGQAAAIgEAFQgDAGgCAAQgEAAgHgSg");
	this.shape_3.setTransform(-39.1,-3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3300CC").s().p("AhDBxIAAhxICJAAIAABsIgUAAIAAgIIhiAAIAAANgAgwBRIBiAAIAAgXIhiAAgAgwAnIBiAAIAAgUIhiAAgAhugPIAAgTIBFAAIgPgkIgfAAIAAgSIBPAAIAAgYIASAAQAHABgGAFIAAASIBQAAIAAASIggAAIgRAkIBFAAIAAATgAgVgiIAtAAIANgkIhHAAg");
	this.shape_4.setTransform(-64.2,-4.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3300CC").s().p("AgPBsIgDgTIAeAAQALAAAFgIQAFgJAFgeIiSAAIAAgSICVAAIADgiIhYAAIgDARIgWgDQAOg7AEg0IAYADQAEAEgHABIgDAUIBxAAIAAATIh0AAIgFAfIBqAAIgFA1IAxAAIAAASIgzAAQgDAcgIATQgHATgVAAg");
	this.shape_5.setTransform(-89,-4.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3300CC").s().p("AguBvQA/gRAPgsIgxAAQgIAAgKADIgJgJIBNAAQAEgZAAgwIAWAKIgHAHQgCApgDAPIAkAAIANgNIARATIhDAAIgIARQAcAJAOAIQAOAIACAHQABAHgCADQgCADgCAAQgFAAgHgKQgKgNghgSQgZAjg4AJgAhSBYQAEgFAAgJIAAhfIgDAAQgNAAgLADIgIgIIAjAAIAIgJIANAMIgJAHIAABfIAlgWIABACQggAdgKAOgAgJAaQgHgLgOgLIABgDQAXAIAFAFQAEAEAAAFQAAADgDAFQgBAEgBAAQgDAAgEgJgAAFgBQgFgLgPgMIABgCQAWAGAEAGQAEAFAAAEQAAAEgCADQgCAEgBAAQgDAAgDgHgABMgPIANgYIhvAAQgHAAgLADIgJgJIBEAAIAAgeIgXAAQgNAAgLADIgIgJIA3AAIgBghIAWAJIgIAHIAAARIAjAAIALgLIAQARIg+AAIAAAeIA3AAIAJgLIASASQgOABgUAYgAhMhJQgDgNgOgQIACgDQAOAIAJAIQAJAIgBAIQgCAIgGACIgCABQgEAAgCgLg");
	this.shape_6.setTransform(-114.3,-4.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3300CC").s().p("AAmBcIAAgEIAgACQAHAAgBgKIAAinIhMAAQgJAAgKACIgJgIIBmAAIAIgKIAPAMIgHAGIAACpQABAZgXAFQAAgPgegHgAhgAHIAAhWIAUALIgGAHIAACnIgOAHIAAhqgAhLBfQAbgPALgSQAKgSACgYIgOAAIAAAHIgNAGIABghIgBgeIANAIIAoAAQALgZAEgUIATAMIgJAFIgVAcIAWAAIAHgKIAMALIgHAGIABAoIgMAEIAAgJIgQAAIAAAoQgBANAPgBIAOAAQAIAAAAgJIADgZIAEAAQgBAfAKABQgFALgNAAIgeAAQgQgBABgQIAAgsIgOAAQgDAggNARQgNAQggANgAgnAOIBDAAIAAgeIhDAAgAgZgiQgEgLgMgRIAEgCQARALAEAEQADAFAAADQAAAFgDAFQgDAFgCAAQgCAAgCgIgAg7hOQgFgOgPgSIACgDQAaAPADAFIAEAHQgBAFgDAGQgDAGgCAAQgDAAgDgJg");
	this.shape_7.setTransform(-138.7,-4.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3300CC").s().p("Ag5A4QgQgXAAgeQAAgYALgVQALgVATgLQAUgMAWAAQASAAARAJIAIADQADAAACgCQAEgEABgGIAEAAIAEA5IgEAAQgIgagNgLQgOgLgVAAQgPAAgNAJQgNAIgIASQgIATABAaQAAAWAGARQAIAQAPAJQANAJATAAQAQAAAMgHQAMgHAPgVIADADQgMAWgQAKQgRALgXAAQgoAAgXgfg");
	this.shape_8.setTransform(-159.9,-3.5);

	this.instance = new lib.option();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.212,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.option(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-38,377.6,76.1);


(lib.option5B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().p("AATBuIAAifIgJAAQgPAhgRAQIgTgMQAngpAJg4IAUAGQAHADgIACQgBAKgJAUIBdAAIAAATIhGAAIAAAkIA9AAIAAARIg9AAIAAAhIBCAAIAAASIhCAAIAAA3gAhDBuIAAh+QgLAQgOAQIgRgQQArgxAOg6IAWAHQAGAEgHABQgHAWgMAbIAFACQAEADgHABIAACWg");
	this.shape.setTransform(10.6,-4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("AhpBSIAAgWIBeAAIAAh3IhNAAIAAgWICwAAIAAAWIhNAAIAAB3IBgAAIAAAWg");
	this.shape_1.setTransform(-14.2,-4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("AhLBtIAAjZIASAAQAIABgGAFIAAA1IAOgMIAZAhIgRAOIgWggIAACbgAAIBiQgQAAAAgRIAAiCIgQAAIAAgTIA2AAIAAgoIAWAAQAKACgJAGIAAAgIA6AAIAAATIhlAAIAAB5QAAAHAHAAIBWAAIAAATgAhvALQALglAAggIATAFQAHADgHACQgDAlgGAcg");
	this.shape_2.setTransform(-39.3,-4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("ABSBqQgSgHgVgfQglAggnANIgCgDQAugYAYgdQgLghgEg1IgeADIgHADIgMgHIAwgFQgDgxAAgdIAYAKIgLAIIADA6IAsgFIALgNIAUAQIhKAIQAEAvAJAdQAJgNAJgSQAIgSAHgRIATAPIgKAFQgSAlgSAXQASAYARAIIAJgvIAEABIgBAcIABAUQABAKAEAIQAAABABABQAAAAAAABQAAAAgBAAQAAAAgBAAQgEAAgSgIgAhpAxIgBg1IAPAHIAWAAIAAhSIgBggIAYALIgJAHIAAAlIAfAAIAMgLIARARIg8AAIAAA1IAZAAIAIgJIAOALIgHAHQAAA7ABATIgOAGIAAgPIg/AAIAAARIgPAFIABg2gAhbBLIA/AAIAAhCIg/AAgABIhCQgGgLgRgSIABgDQATAHAKAFQAKAGgBAIQgCAIgCADIgEADQgDAAgFgIg");
	this.shape_3.setTransform(-63.7,-4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3300CC").s().p("AgwBdQAmgHAdgbQgRgTgNgZQgNAVgNAMIgMgQQAlgkAMg9IgvAAIAPAJQAEAEgHABQgLAZgKANIACACQADADgFADIAAB0IgTAAIAAhhIgaAXIgLgRQAogdAVg4Ig3AAIAAgSIBgAAIAAgcIASAAQAHABgGAEIAAAXIBgAAIAAASIhjAAIAQAHQADAEgGABIgHASIA3AAIAGgFIAPAJQAGAEgHABQgPA0gZAfQAZAVApALIgKAUQgngLgfgbQgeAegsALgAgBgCQAGAUAaAbQAUgZALgoIg4AAQgEALgDAHgAALgBIALgMQANAIAJALIgNAMQgIgJgMgKg");
	this.shape_4.setTransform(-89.1,-4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3300CC").s().p("AhoBaQAqgbAAgwIAAh7IASAAQALABgKAFIAAA5IAfgcIANARQACAFgFgCIgpAcIAAAvQAeARAUAZIgOAUQgSgXgVgRQgGAkgnAdgAAeBqIgEgWIAQAAQADAAAAgDIAAiYIgvAAIAAgVIBvAAIAAAVIgsAAIAAChQAAAQgPAAgAhsAJQAKgkADghIAWAEQAGABgHAEQgEAhgIAlg");
	this.shape_5.setTransform(-114,-4.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3300CC").s().p("Ag2BdQA4gSABg0IAAgLIgcAbQAAAIgFgFIgMgSQAVgMAYgYIAAhfIAPAAQAIACgHADIAACIQAAA2hBAXgAhhBvIgCgVIAOAAQAEAAABgEIAAg5IgZAJIgHgVIAggJIAAgzIgbAAIAAgTIAbAAIAAgwIASAAQAIABgHAEIAAArIAUAAIAAATIgUAAIAAAtIAXgHIAGARIgdAKIAABMQAAANgOAAgAAzBlQgPAAAAgPIAAjAIAPAAQAIACgHADIAABEQAUgcAKgVIARALQAHAFgIAAQgPAbgTAUIgMgKIAAAbIAIgJQAaAPAPATIgOARQgUgXgPgNIAABIQAAAHAHAAIAXAAQAJAAACgcIAUAFQgDApgWAAgAgmhDIASgHQAJASAHAgIgSAGQgIgggIgRg");
	this.shape_6.setTransform(-138.9,-4.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3300CC").s().p("AhKBTIAAgFIAHAAQALAAAEgGQADgFAAgOIAAhpQAAgQgEgEQgFgFgJAAIgHAAIAAgFIBIAAQATAAANADQARAFAKALQAKALAAAOQAAANgHAKQgJAKgOAEQARADAIAIQANALAAAQQAAANgIALQgIALgOAGQgOAFgbAAgAgSACIgIABIAABEQAOADANAAQAWAAALgKQAMgKAAgOQABgKgGgJQgFgJgMgFQgMgFgQAAIgOAAgAgahHIAABAIAKABIANAAQARAAAJgDQAJgEAEgIQAGgIAAgKQgBgOgLgKQgMgLgWAAQgMAAgKADg");
	this.shape_7.setTransform(-160.4,-3.5);

	this.instance = new lib.option();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.212,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.option(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-38,377.6,76.1);


(lib.option5A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().p("AAZAdQghAwg3AZIgCgEQA6gjAXgwIgkAAQgMAAgMADIgIgJIBNAAIAAgdIgjAAIAAAKIgOAFIABg4IgBgxIAPAIIBSAAIAHgJIAPANIgIAGIABBMIgNAGIAAgKIgmAAIAAAdIAvAAIANgMIASASIhHAAQAWAzAxANIAAAEQgQAAgEAMQgtgdgKgzIgDAAQAABKACAQIgPAHIABhTgAAlgaIAmAAIAAgfIgmAAgAgKgaIAjAAIAAgfIgjAAgAAlg/IAmAAIAAghIgmAAgAgKg/IAjAAIAAghIgjAAgAhUBOQAEgFgBgQIAAhTIgHAAQgHAAgLADIgJgJIAgAAIAIgKIAPANIgIAHIAABYIAsgkIADADIghAkQgNAOgFAJgAhKhMQgFgMgRgRIACgDQAWAKAGAFQAHAFAAAHQAAAHgEAEQgDADgCAAQgDAAgDgJg");
	this.shape.setTransform(-62.7,-4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("AhABWQBegYgFhiIgoAAIAAgSIAoAAIAAg2IATAAQAIABgHAFIAAAwIA9AAIgFBzQgCAsgYAAIgdAAIgCgWIAWAAQANAAABgbIAFhcIgoAAQAEB1hqAcgAhhBBIgIgaIAlgJIAAhbIggAAIAAgTIBWAAIAAATIgiAAIAABWIAogLIACAVIhXAaQAAAFgCAAIgCgBg");
	this.shape_1.setTransform(-88.1,-4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("AALBMIABgEQAeAFANgBQAMAAAAgPIAEiSIh8AAQgNAAgLADIgJgJICbAAIAIgLIARANIgJAHIgECTQAAAdgdAIQABgNgqgNgAhdAyQAagEB2gzIACAEQh7A8gGAOgAgKgXQgJgPgagXIACgCQAmAPAFAGQAFAHAAAGQAAAFgDAGQgCAGgCgBQgDAAgFgKg");
	this.shape_2.setTransform(-113.1,-3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("AhtBuQBFgNAkgZQgSgSgOgWQgVAbgjAVIgBgDQApghAPgmIgGAAIAAADIgPAIIABgqIgBgpIAPAHIBcAAIAIgJIAQANIgIAGIAAAcIABAbIgQAGIAAgGIhWAAIASAKIgIADIgEAFIBLAAIAJgIIAQAPIgKAEQgWAXgXAPQAnAXA5AAIAAAEQgNAAgFAMQgygGglgaQg0Adg/AFgAAFBBQASgMAVgXIhLAAQARAWATANgAgrAAIBdAAIAAgYIhdAAgAgrgdIBdAAIAAgYIhdAAgAhuggQAbgWAPgVQAOgWAHgQIAUANIgKAEIgIAKIBwAAIANgOIAUAUIiTAAQgdAhgfASg");
	this.shape_3.setTransform(-137.4,-4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3300CC").s().p("AAXBVIAAgFQAKAAADgDQAEgDAAgEQAAgFgFgMIgKgYIg/AAIgMAaQgEAKAAAFQAAAEAEADQADACAMABIAAAFIg0AAIAAgFQALgCADgDQAGgFAHgSIA7iIIADAAIA6CJQAHARAFAFQAGAFAKAAIAAAFgAgjAUIA4AAIgbhCg");
	this.shape_4.setTransform(-159.3,-3.7);

	this.instance = new lib.option();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.212,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.option(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-38,377.6,76.1);


(lib.option4D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().p("AhvBmQAPgUAEgRIAVAGQgGAXgOATgAAxBHIAUgKQAVAPANAXIgXALQgOgXgRgQgAgvBFIAWgDQAGARgBAXIgYADQABgZgEgPgAgBBEIAVgGQAJAOAGAZIgXAFQgEgXgJgPgAgPAqQAagPAOgfQgMgMgNgLIAKgOQAKAHAIAJQACgLAAgXIgdAAIAAgTIAdAAIAAgfIAQAAQAIABgHAFIAAAZIAnAAIAABTQAAAXAEAAQAEAAACgTIARAJQgJAlgNAAQgUAAgDgpIgMAPQgJgLgKgKQgOAhggAUgAAsgMIAXAVIAAhEIgUAAQAAAigDANgAhPA9IgDgQIARAAQAAAAABAAQABAAAAAAQAAgBABAAQAAgBAAgBIAAgLIgpADQgBAGgEgDIgEgVIAygBIAAgPIAJAAIAVgKIhEAAIAAgMIBPAAIAFgDIANAOQADAGgHgBIgnAOIAAAGIAugDIAAAOIguAFIAAAQQAAAPgMAAgAhgggIAAglIBVAAIAAAlgAhQgsIA1AAIAAgNIg1AAgAhthOIAAgPIAuAAIAAgTIASAAQAIABgHAFIAAANIAsAAIAAAPg");
	this.shape.setTransform(54.3,-4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("AgLBkIAAh8QghApgyAWIgPgWQBJgdAghBIhgAAIAAgWIDMAAIAAAWIhUAAQgEAJgFALIAACdgAAXgUIAOgSQAmAUAjAkIgSATQggglglgUg");
	this.shape_1.setTransform(28.8,-3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("AhUByIAAh4QgKANgLAKIgLgSQAsguAGg+IAVAIQAFAEgHABQgHAkgNAVIAEABQADADgFADIAACSgAAPBxIgEgTIARAAQAPAAgDghQgkAegwARIgEgSQAwgQAkggIgDgHQgeAWgrAPIgGgRQAugOAXgUIgHgJQgfAUggAIIgFgPQAmgKAZgSIgoAAIAAgpQgJAIgNAHIgHgRQApgbARgoIASAFQAEAEgHABIgDAFIAmAAIACgEIASAJQAGAFgKACIgUAaIA1AAIAAA5Ig6AAIgMAHQAKAHAHANQAYgMARgMIAOANQABAFgGgCIgnATQAaAfAhAOIgLASQgfgQgSgbQAHA6gdAAgAAqgTIAoAAIAAgZIgoAAgAgMgTIAmAAIAAgZIgmAAgAgNg8IApAAIAPgXIgmAAIgSAXg");
	this.shape_2.setTransform(3.9,-4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("AAVBrIgFgWIATAAQADAAAAgDIAAhFIgyAAIAAgRIAyAAIAAgpIAIABIAWgdIhKAAIAAgTIBXAAIADgEIARARQAGAEgKACIgnAnIAAAeIA0AAIAAARIg0AAIAABNQAAARgMAAgAhtBaQAhgVAPgWQgBgBgSgMIgFAMIgSgJQANglAIgpIgZAAIAAgSIAcAAIAGgvIAVADQAEABgFAFQgDATgEATIAYAAIACgFIATAMIgDAFQgFA6gMAdIAcAYIgNATQgQgPgJgIQgSAaggAVgAhMARQAJAEAOAJQALgdADgqIgYAAIgNA6g");
	this.shape_3.setTransform(-20.8,-4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3300CC").s().p("AgKAYIAJgaIgJAAIAAgVIAVAAIAAAVIgLAag");
	this.shape_4.setTransform(-46.6,4.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3300CC").s().p("AgRBNIAAhzQgSAggNALIgDgCQAVggAMgiQAMgiACgNIATANIgGAEIgOAeIBWAAIAOgOIATAUIg9AAIAAAnIAWAAIAOgNIARATIg1AAIAAArIAWAAIAOgOIASAUIg2AAIAAArIAfAAIANgOIASAUIh2AAIAAAXIgPAFIABglgAgDBQIAqAAIAAgrIgqAAgAgDAfIAqAAIAAgrIgqAAgAgDgSIAqAAIAAgnIgqAAgAhNBQQADgGAAgJIAAhZIgNAAQgIAAgLADIgIgJIAmAAIAGgKIARAMIgIAHIAABXIAhgiIADADIgZAhQgJAMgFANgAhHhKQgEgNgNgPIACgDQASAIAHAGQAGAGgBAIQgBAHgDADQgEADgCAAQgEAAgBgKgAAuhLQgCgJgFgIIgLgSIACgDQAeARABAJQAAAJgFAFQgEAEgCAAQgDAAgBgGg");
	this.shape_5.setTransform(-62.8,-4.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3300CC").s().p("AhtBZQAmgQAOg0IAVAGQAFADgIABIgHASQATAVAWAHIAAhCIhgAAIAAgRIDSAAIAAARIhgAAIAAAWIBHAAIAAATIhHAAIAAAfIBhAAIgFATIhOAAQg0AAgcgkQgTAegZAMgAhFgXIAAhTICPAAIAABTgAgxgmIBnAAIAAgTIhnAAgAgxhIIBnAAIAAgTIhnAAg");
	this.shape_6.setTransform(-87.7,-3.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3300CC").s().p("AgmBuQAggVAOgWQAPgWAHgcQAFgaABgjIgRAAIgMACIgHgIIAkAAIgBg+IAVAJIgGAHIAAAuIAmAAIAIgJIAPAMIgIAHQgBBmgFAVQgGAVgXAHQgBgLgdgMIABgFQAUAFAMAAQAGAAADgDQADgCADgXQADgXABhRIgoAAQgBAlgIAcQgHAegUAWQgRAXggARgAhsA4QALgDAQgeQARgdAEgSIgfAAIgLACIgIgHIBcAAIAMgMIARARIhBAAIAPAMQgJAEgQAYQgRAYgNAPIBNgJQgKgUgLgQIADgCQAjAfAAALQADALgEAFIgFAEQgDAAgBgFIgFgOQhHAMgLAMgAhmhPIBHAAIALgMIARASIhHAAQgLAAgIADg");
	this.shape_7.setTransform(-113,-4.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3300CC").s().p("AAWBnQgcgCgSgGQgSgIgKgKQgMgKgEgCQgFgBgMANQgKALgGAHIgNgOQAPgMAZgKIAAhOIgHAAQgMAAgLACIgJgIIAlAAIAHgLIARANIgJAGIAABMQAIAJAQAKQAPAIAdACQAeABAbgBQAbgBAYgEIAAAEQgVAGAAALIhIgBgABMA9IgGgPQgyAFgRAEQgQAEgJAFIgMgVQAKgCAJgKQAIgMAJgQQAKgPADgOIgiAAQgHAAgLADIgJgJIB4AAIAPgOIASAUIhYAAIARANQgIAAgPATQgOAVgSASIBWgEQgHgPgOgQIADgCQAVAMAKAMQAMALgBAJQgCAKgDACQgDADgCAAQgDgBgCgFgAhJhDQgDgOgQgTIADgCQATAJAHAIQAIAGgCAHQgBAIgDADQgFAEgBAAQgEAAgCgKgAgdhTIBVAAIANgNIASATIhZAAQgHAAgLADg");
	this.shape_8.setTransform(-137.7,-4.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3300CC").s().p("AhSBTIAAgFIAGAAQAKAAAFgGQACgFAAgOIAAhpQAAgQgDgEQgFgFgJAAIgGAAIAAgFIBDAAQAkAAATAJQAUAIAMAUQALATAAAaQAAAigVAXQgXAagwAAgAgjhFIAACMQAPADALAAQAbAAATgUQASgUAAgiQAAghgSgUQgTgTgcAAQgLAAgOADg");
	this.shape_9.setTransform(-159.5,-3.5);

	this.instance = new lib.option();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.212,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.option(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-38,377.6,76.1);


(lib.option4C = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().p("AhKA8IAAiAIgBgvIAVAKIgIAIIAAAaQAPAIAHAGQAHAGgBAGQAAAGgDACIgEACQgEAAgDgJQgEgLgKgLIAACKIABAlIgOAHIABg4gAgwBkIBHAAIAAgUIgYAAQgNAAgLACIgIgIIA4AAIAAgVIgkAAIAAADIgOAGIABgnIgBgkIAOAHIAkAAIAAgTIgiAAQgNAAgKADIgJgJIBCAAIAAgRIgzADIAAgEQArgFAZgGQAZgFAHgFIAOARQgSAAghAEIAAASIArAAIALgLIAQARIhGAAIAAATIAoAAIAIgIIANAMIgHAEIABA0IgOAGIAAgHIgpAAIAAAVIAjAAIALgLIAQARIg+AAIAAAUIAvAAIANgNIASATIiBAAQgMAAgLADgAAjAvIApAAIAAgVIgpAAgAgNAvIAkAAIAAgVIgkAAgAAjAUIApAAIAAgVIgpAAgAgNAUIAkAAIAAgVIgkAAgAhvgSIgBgDQAAgEAFgHQAIgJAFgWIAEAAQAAAfgDAIQgDAHgHABIgDAAQgEAAgBgCgAABhTIgcAAIgIACIgIgHIAsAAIgBgaIAUAJIgHAHIAAAKIAhAAIgBgaIAWALIgJAGIAAAJIAWAAIAMgMIARARIgzAAIABANIgNAEIAAgRIghAAIAAAQIgNAFIABgVg");
	this.shape.setTransform(35.7,-4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("AgRBNIAAhzQgSAggNALIgDgCQAVggAMgiQAMgiACgNIATANIgGAEIgOAeIBWAAIAOgOIATAUIg9AAIAAAnIAWAAIAOgNIARATIg1AAIAAArIAWAAIAOgOIASAUIg2AAIAAArIAfAAIANgOIASAUIh2AAIAAAXIgPAFIABglgAgDBQIAqAAIAAgrIgqAAgAgDAfIAqAAIAAgrIgqAAgAgDgSIAqAAIAAgnIgqAAgAhNBQQADgGAAgJIAAhZIgNAAQgIAAgLADIgIgJIAmAAIAGgKIARAMIgIAHIAABXIAhgiIADADIgZAhQgJAMgFANgAhHhKQgEgNgNgPIACgDQASAIAHAGQAGAGgBAIQgBAHgDADQgEADgCAAQgEAAgBgKgAAuhLQgCgJgFgIIgLgSIACgDQAeARABAJQAAAJgFAFQgEAEgCAAQgDAAgBgGg");
	this.shape_1.setTransform(10.8,-4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("AgvBwIAAhrQgXAYgaAQIgNgVQA7gfAQgzIhCAAIAAgSIBHAAQADgMACgXIAYAFQAEADgGABIgFAaIB1AAIAAASIh5AAQgDAOgGAJIBgAAIAACBQAAAPgQAAIgWAAIgFgSIAUAAQADAAABgEIAAgbIhVAAIAAA0gAgcAqIBVAAIAAgWIhVAAgAgcACIBVAAIAAgTIhVAAg");
	this.shape_2.setTransform(-14.3,-4.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("AhfBTQBNgaAFhbIhGAAIAAgWIBHAAIAAgyIAVAAQAJADgIAFIAAAqIBWAAIgEB0QgCAogcAAIgnAAIgEgWIAiAAQAPAAABgQQACgcAChEIhAAAQAABohdAkg");
	this.shape_3.setTransform(-39.4,-4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3300CC").s().p("AhwBkQAcgYAAgkIAAgdIgKAAIgKAAIAAhfIAgAAIAHgcIARAEQAFACgHACIgFAUIAzAAIAABfIgjAAIAAAvIAFAAIAIgsIAQAFQAGADgHABIgMAiIASgDIgGgNIAKgEQAKANAFAVIgNAFIgCgKIgmAHIAAAOQAAAGAGAAIByAAQAGAAADgKIAFgPIASAFIgFAWQgEAOgOAAIiAAAQgRAAAAgSIAAhQIgMAAIAAAeQAAArggAdgAgugDIAaAAIAAgaIgaAAgAhYgDIAaAAIAAgaIgaAAgAgugsIAaAAIAAgZIgaAAgAhYgsIAaAAIAAgZIgaAAgAAsBRIAAhFQgOAYgOAMIgNgOQAZgVAPgfIgoAAIAAgQIApAAIAAgfIgmAAIAAgQIAmAAIAAgdIAQAAQAIABgHAFIAAAXIAjAAIAAAQIgjAAIAAAfIArAAIAAAQIgpAAQAKAXAkAhIgNAQQgUgRgPgZIAABFg");
	this.shape_4.setTransform(-63.9,-4.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3300CC").s().p("AAoBrIgDgSIAaAAQANAAABgSIAFh0Ig4AAQgLAbgUAYIgOgRQAgghAIg9IAVAGQAJAEgKACIgIAeIBGAAIgECDQgBAngfAAgAhnBoIAAinIAaAAQAFgTAFgYIAYAIQAEAEgHABQgDANgIARIAkAAIAACgIgTAAIAAgMIgrAAIAAATgAhTBCIArAAIAAgyIgrAAgAhTgCIArAAIAAgrIgrAAgAAHAKIAQgRQAUARAMAQIgSATQgOgUgQgPg");
	this.shape_5.setTransform(-88.8,-4.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3300CC").s().p("AhSBvIAAh6QgFALgJAJIgMgQQAggpAHg+IATAEQAFADgGADQgDAUgLAmIAEAAQADACgFAGIAACRgAgNBoIgCgTIALAAQALAAAAgQIAAhwIgPAAQgBBtgjAmIgQgPQAhghAAhjIgYAAIAAgSIAYAAIAAgtIASAAQAIABgHAFIAAAnIAiAAIAACLQAAAagVAAgAApBlIAAivIBEAAIAACtIgTAAIAAgTIgeAAIAAAVgAA8BBIAeAAIAAh7IgeAAg");
	this.shape_6.setTransform(-114.8,-4.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3300CC").s().p("AggBvIAAiDIA9AAIAAByQAAAQgNAAIgNAAIgDgQIAJAAQADAAAAgEIAAgjIgGALQgIgGgNgGIAAA5gAAMAzIAAgdIgGAMIgVgMIAAAcIAFgKQANAFAJAGgAAMATIAAgXIgbAAIAAAXIAFgLQANAFAJAGgAAfApQANgbAEgiIARAEQAKACgKAFQgGAcgLAYQAMAUAMAmIgTAIQgKgqgMgagAA6AqQAKgXALgmIARAFQAJADgKAEQgJAcgLATQAQAWAQAjIgUAIQgMgmgRgZgAhrBVIgFgSIAggGIAAg9IgaAAIAAgSIAaAAIAAg4IgcAAIAAgSIBGAAIAAASIgaAAIAAA4IAXAAIAAASIgXAAIAAA6IAXgFIAAAQIg7AQQgCAFgCAAQgCAAgBgFgAgygrQAmgPAWgfIgjAAIAAgQIAwAAIAFgFIAOAGQAIADgJADQAXAcAxAVIgIASQgUgHgRgMIAAANIhGAAIAAgNQgPAOgYALgAABg0IBAAAQgOgLgVgYQgNAUgQAPg");
	this.shape_7.setTransform(-138.9,-4.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3300CC").s().p("Ag5A4QgQgXAAgeQAAgYALgVQALgVATgLQAUgMAWAAQASAAARAJIAIADQADAAACgCQAEgEABgGIAEAAIAEA5IgEAAQgIgagNgLQgOgLgVAAQgPAAgNAJQgNAIgIASQgIATABAaQAAAWAGARQAIAQAPAJQANAJATAAQAQAAAMgHQAMgHAPgVIADADQgMAWgQAKQgRALgXAAQgoAAgXgfg");
	this.shape_8.setTransform(-159.9,-3.5);

	this.instance = new lib.option();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.212,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.option(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-38,377.6,76.1);


(lib.option4B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().p("ABKAJQgEgEAAgFQAAgFAEgEQADgEAHABQAFAAAEADQAEAEAAAFQAAAFgEAEQgEAFgFAAQgGAAgEgFgAgJAJQgDgEAAgFQAAgFADgEQAEgEAFABQAFAAAEADQAFAEAAAFQAAAFgFAEQgEAFgFAAQgFAAgEgFgAhcAJQgEgEAAgFQAAgFAEgEQAEgEAFABQAHAAADADQAEAEAAAFQAAAFgEAEQgEAFgGAAQgFAAgEgFg");
	this.shape.setTransform(35.9,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("ABKAJQgEgEAAgFQAAgFAEgEQADgEAHABQAFAAAEADQAEAEAAAFQAAAFgEAEQgEAFgFAAQgGAAgEgFgAgIAJQgFgEAAgFQAAgFAFgEQAEgEAEABQAGAAAEADQADAEAAAFQAAAFgDAEQgEAFgGAAQgEAAgEgFgAhcAJQgEgEAAgFQAAgFAEgEQAEgEAFABQAHAAADADQAEAEAAAFQAAAFgEAEQgEAFgGAAQgFAAgEgFg");
	this.shape_1.setTransform(10.9,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("AAGBuIgEgWIAWAAQAEAAAAgEIAAgsQgWAWgYAQQgCAGgCgCIgOgWQAkgSAcgYIAAg/Ig3AAIAAgTIA3AAIAAgtIASAAQAIABgHAFIAAAnIA8AAIAAATIg8AAIAAALQADAPAKAUQAPgNAQgUIASASQABAFgGgCIgjAdQARAgAcATIgRASQgegagUgvIAABQQAAAQgPAAgAhoBQIgJgXIAjgIIAAg1IgWAAIAAgTIAWAAIAAgtIgdAAIAAgSIBPAAIAAASIgeAAIAAAtIAYAAIAAATIgYAAIAAAwIAXgGIAFARQgaALgrAMQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAIgCgCgAgYgSIATgLQASAWAFARIgVALQgGgVgPgSgAAzhXIAQgNQAMAHANANIgRAOQgKgNgOgIg");
	this.shape_2.setTransform(-14.3,-4.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("AhsBZQAqglAEg3IAXADQAEAFgHABQgBAMgGAVQAOAQAdARIAAhfIg0AAIAAAJIgUAAIAAhdICZAAIAABaIgTAAIAAgGIgrAAIAAAgIBGAAIAAATIhGAAIAAAxQAIABAQAAIBHAAIgEATIhJAAQgyAAglgoQgPAhgWASgAg6gpIByAAIAAgwIhyAAg");
	this.shape_3.setTransform(-38.8,-3.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3300CC").s().p("AAGBuIgEgWIAWAAQAEAAAAgEIAAgsQgWAWgYAQQgCAGgCgCIgOgWQAkgSAcgYIAAg/Ig3AAIAAgTIA3AAIAAgtIASAAQAIABgHAFIAAAnIA8AAIAAATIg8AAIAAALQADAPAKAUQAPgNAQgUIASASQABAFgGgCIgjAdQARAgAcATIgRASQgegagUgvIAABQQAAAQgPAAgAhoBQIgJgXIAjgIIAAg1IgWAAIAAgTIAWAAIAAgtIgdAAIAAgSIBPAAIAAASIgeAAIAAAtIAYAAIAAATIgYAAIAAAwIAXgGIAFARQgaALgrAMQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAIgCgCgAgYgSIATgLQASAWAFARIgVALQgGgVgPgSgAAzhXIAQgNQAMAHANANIgRAOQgKgNgOgIg");
	this.shape_4.setTransform(-64.3,-4.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3300CC").s().p("AgpBeQAxgUAAgkIgnAOQgBAGgDgDIgGgVIAygNIAAgXIgiAAIAAgTIAiAAIAAgfIgmAAIAAgSIAmAAIAAgnIASAAQAHAAgGAFIAACLQAAA0g7AagAhbBrIgDgSIAOAAQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBIAAg/IgWAFQgBAIgEgEIgFgXIAggGIAAgvIgaAAIAAgTIAaAAIAAgxIATAAQAIABgHAEIAAAsIAUAAIAAATIgUAAIAAAsIAXgEIAEAPIgbAHIAABJQAAAQgPAAgAAsBoIAAjVIASAAQAIAAgHAFIAAAiIAqAAIAAASIgqAAIAAAfIAkAAIAAATIgkAAIAAAeIAwAAIAAATIgwAAIAAA5g");
	this.shape_5.setTransform(-89.1,-4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3300CC").s().p("AAGBuIgEgWIAWAAQAEAAAAgEIAAgsQgWAWgYAQQgCAGgCgCIgOgWQAkgSAcgYIAAg/Ig3AAIAAgTIA3AAIAAgtIASAAQAIABgHAFIAAAnIA8AAIAAATIg8AAIAAALQADAPAKAUQAPgNAQgUIASASQABAFgGgCIgjAdQARAgAcATIgRASQgegagUgvIAABQQAAAQgPAAgAhoBQIgJgXIAjgIIAAg1IgWAAIAAgTIAWAAIAAgtIgdAAIAAgSIBPAAIAAASIgeAAIAAAtIAYAAIAAATIgYAAIAAAwIAXgGIAFARQgaALgrAMQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAIgCgCgAgYgSIATgLQASAWAFARIgVALQgGgVgPgSgAAzhXIAQgNQAMAHANANIgRAOQgKgNgOgIg");
	this.shape_6.setTransform(-114.3,-4.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3300CC").s().p("AhxBlIAqAAIgBhFIAQAIIBsAAIAHgKIARANIgIAGIAAA0IAMAAIAPgPIATAUIjDAAQgMAAgLADgAAZBlIAdAAIAAg3IgdAAgAgQBlIAbAAIAAg3IgbAAgAg5BlIAbAAIAAg3IgbAAgAgqgKIgCgkIAXALIgIAGQAAArABAKIgQAJIACgrgAA8AWQgIgNgdgTIACgDQAcAJAJAFQALAGAAAJIgCAIQgCAGgBAAQgDAAgFgIgAhSgFIgBgjIAXAMIgJAGQAAAiABAKIgPAHIABgigAgTAXQAMgSAIgXQAJgXABgOIAWAOIgJAEIgFAKIApAAIARgOIATAUIhPAAQgMAYgVAVgAgthGIgeAAQgNAAgLADIgJgJIA/AAIgBggIAXAKIgIAGIAAAQIA5AAIgBgfIAXAKIgJAGIAAAPIAjAAIAQgPIAVAVIhIAAIAAAMIgNAHIAAgTIg5AAIAAAOIgOAIg");
	this.shape_7.setTransform(-139.1,-4.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3300CC").s().p("AhKBTIAAgFIAHAAQALAAAEgGQADgFAAgOIAAhpQAAgQgEgEQgFgFgJAAIgHAAIAAgFIBIAAQATAAANADQARAFAKALQAKALAAAOQAAANgHAKQgJAKgOAEQARADAIAIQANALAAAQQAAANgIALQgIALgOAGQgOAFgbAAgAgSACIgIABIAABEQAOADANAAQAWAAALgKQAMgKAAgOQABgKgGgJQgFgJgMgFQgMgFgQAAIgOAAgAgahHIAABAIAKABIANAAQARAAAJgDQAJgEAEgIQAGgIAAgKQgBgOgLgKQgMgLgWAAQgMAAgKADg");
	this.shape_8.setTransform(-160.4,-3.5);

	this.instance = new lib.option();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.212,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.option(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-38,377.6,76.1);


(lib.option4A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().p("AhMBuQA1gLAdgWQgUgTgLgZQgUAug6AeIgBgEQA+gqALg3IgbAAQgNAAgLADIgJgJIA9AAQADgSAAgLIAWAJIgHAGIgDAOIBHAAIAMgLIAQARIhkAAIgHAUIBGAAIAIgJIAPAPIgJAFQgVAZgQANQAhARA1ABIAAADQgLABgGAMQgzgKgbgRQgfAWg8AIgAgEA2QAKALAIAFQATgPAOgVIhCAAQAFAJAKALgAhqgHIgDgDQAAgDAIgHQAJgHAFgWIADAAIAAALICiAAIAMgLIAQARQgHABgHAFQgIAFgKANIgEgBIALgXIilAAQAAAVgGADQgGADgDAAQgEAAgDgCgAAhgrIAPgXQAFgLAFgPIASANIgGADQgVAagMAJgAgygzQgDgNgMgOIACgDQATALAFAGQAFAFAAAEQAAAEgEAFQgDAEgCAAQgEAAgDgJgAABg2QgEgNgMgRIACgCQAWAPADAEQACAEAAAEQAAAGgEAFIgFAEQgCAAgCgKgAhYhYQA4gDAugHQAvgHAQgIIAPARIhIAFQguAFg+ACg");
	this.shape.setTransform(4.2,-4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("AgIBaQAZgIATgPQgSgUgJgZIgOAAIAAgSIBSAAIACgEIARANQABADgFACQgMAcgRAVQAOALAlAJIgHAVQgdgGgcgWQgYAWgYAIgAAxA3QAJgJAMgYIgrAAQAMAZAKAIgAgeBuIAAgZIhEAKQgFAHgBgFIgGgWIAbgBIAAhUIgeAAIAAgPIDfAAIAAAPIh7AAIAAB4gAhCBJIAkgEIAAgQIgkAAgAhCAlIAkAAIAAgQIgkAAgAhCAFIAkAAIAAgPIgkAAgAhMglIAAhIICVAAIAABIgAg4g0IBtAAIAAgOIhtAAgAg4hRIBtAAIAAgMIhtAAg");
	this.shape_1.setTransform(-21,-3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("AAoBrIgDgSIAaAAQANAAABgSIAFh0Ig5AAQgJAbgVAYIgPgRQAgghAJg9IAVAGQAIAEgJACIgIAeIBGAAIgECDQgCAngeAAgAhnBoIAAinIAaAAQAGgTAEgYIAYAIQAEAEgHABQgDANgIARIAkAAIAACgIgTAAIAAgMIgrAAIAAATgAhTBCIArAAIAAgyIgrAAgAhTgCIArAAIAAgrIgrAAgAAHAKIAQgRQAUARAMAQIgSATQgOgUgQgPg");
	this.shape_2.setTransform(-45.8,-4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("AhHBtIgFgWIAXAAQAEAAgBgEIAAguIgqAJQgGAIgCgGIgHgWQAbgDAegHIAAgpIg1AAIAAgTIA1AAIAAgiIgsAGIgFgSQA7gGAhgMIALATQACAEgHgCIgdAFIAAAmIAvAAIAAg9IATAAQAHABgGAFIAAA3IBGAAIAAATIhGAAQgBAjAHAZQARgXAMgUIATAJQAFADgKADQgUAfgOAQQAMAVARAEQAHABACgUIASAKQgFAlgUgFQgdgHgRgbQgZAUgbANIgJgVQAmgRANgOQgKgdAAgtIgvAAIAAAlQATgEATgGIACASIgoAMIAAA9QAAAQgPAAgAAvhPIARgOQARANAIAKIgRAPQgJgKgQgOg");
	this.shape_3.setTransform(-71.2,-4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3300CC").s().p("AgKAYIAJgaIgJAAIAAgVIAVAAIAAAVIgLAag");
	this.shape_4.setTransform(-96.6,4.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3300CC").s().p("AhuBwQAegFAlgMQAlgNAggYQAggZAWggIARASIgIACQg8A5goAPQgqAPg5AIgAhoBOQASgTAOgXQAPgXAFgNIAUAPIgLAEQgfAqgcATgAgCAWQAAgdgBgKIAVALIgIAGQAAAsACAPIgPAGIABgrgAhvgZIAuAAIgBhBIAXAKIgJAHIAAAwIAyAAIgBhaIAWALIgJAHIAAAYIA0AAIAMgMIASASIhSAAIAAAqIBDAAIAPgPIAVAVIjAAAQgNAAgKADg");
	this.shape_5.setTransform(-112.7,-4.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3300CC").s().p("ABXBuIhIAAQgUAAAAgVIAAh1QgHAOgOAPIgDgBQANgWALgdQALgdAGgdIAWANIgJAEIgKAWIA8AAIAHgKIAQAMIgIAHIgBBIQgBAcgFAKQgFAKgRAGQgBgPgcgHIAAgDQAdADAHgBQAHAAAAgTIADhXIhBAAIgPAfIAKAFIAfAAIAHgJIAPANIgIAFIABAyIgMAFIAAgHIgjAAIAAA1QgBAQAMACIA+AAQAKABABgPQACgOABgQIAEAAQABAWACAIQACAJAIACQgHANgPAAIgCAAgAAHAXIAjAAIAAgtIgjAAgAhuBdIAPgDQAAhBgBgVIAVALIgIAGIAABCIASgDIAAhoIgRAAIAAAGIgNAFIABgqIgBgpIANAIIApAAIAIgJIAOAMIgIAGIABA3IgMAHIAAgHIgPAAIAAAnIAPAAIAJgKIAOAQIgmAAIAAA4IAngKIABADIhOAdIgIAHgAhSgaIAsAAIAAg1IgsAAg");
	this.shape_6.setTransform(-137.6,-4.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3300CC").s().p("AAXBVIAAgFQAKAAADgDQAEgDAAgEQAAgFgFgMIgKgYIg/AAIgMAaQgEAKAAAFQAAAEAEADQADACAMABIAAAFIg0AAIAAgFQALgCADgDQAGgFAHgSIA7iIIADAAIA6CJQAHARAFAFQAGAFAKAAIAAAFgAgjAUIA4AAIgbhCg");
	this.shape_7.setTransform(-159.3,-3.7);

	this.instance = new lib.option();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.212,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.option(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-38,377.6,76.1);


(lib.option3D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().p("ABKAJQgEgEAAgFQAAgFAEgEQADgEAHABQAFAAAEADQAEAEAAAFQAAAFgEAEQgEAFgFAAQgGAAgEgFgAgIAJQgFgEAAgFQAAgFAFgEQAEgEAEABQAGAAAEADQADAEAAAFQAAAFgDAEQgEAFgGAAQgEAAgEgFgAhcAJQgEgEAAgFQAAgFAEgEQAEgEAFABQAHAAADADQAEAEAAAFQAAAFgEAEQgEAFgGAAQgFAAgEgFg");
	this.shape.setTransform(118,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("ABKAJQgEgEAAgFQAAgFADgEQAFgEAFABQAGAAAEADQAEAEAAAFQAAAFgEAEQgEAFgGAAQgFAAgEgFgAgIAJQgFgEAAgFQAAgFAFgEQAEgEAEABQAGAAAEADQADAEAAAFQAAAFgDAEQgEAFgGAAQgEAAgEgFgAhcAJQgEgEAAgFQAAgFAEgEQAEgEAGABQAFAAAFADQADAEAAAFQAAAFgDAEQgFAFgFAAQgGAAgEgFg");
	this.shape_1.setTransform(93,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("AgvBwIAAhrQgXAYgbAQIgLgVQA5gfARgzIhBAAIAAgSIBGAAQACgMADgXIAYAFQAEADgGABIgFAaIB1AAIAAASIh4AAQgFAOgEAJIBfAAIAACBQAAAPgPAAIgXAAIgEgSIATAAQADAAAAgEIAAgbIhTAAIAAA0gAgbAqIBTAAIAAgWIhTAAgAgbACIBTAAIAAgTIhTAAg");
	this.shape_2.setTransform(67.8,-4.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("AAYBnQgbgBgSgGQgRgFgMgMQgNgMgDgCQgEgBgLAOQgLANgGAKIgOgNIAngbIAAhOIgJAAQgNAAgLADIgIgIIAmAAIAKgMIAOAPIgJAFIAABLQALALAQAIQAPAHAdABQAdABAagBQAbgBAXgDIAAAEQgTADgBAOQgqgBgdgBgAAPgbQgaApgqAdIgCgCQAognATgiQATgjAEgNIgrAAQgIAAgKAEIgJgJIB4AAIAMgMIAQARIhLAAIARALIgJAFIgSAcIAOAIIgGAGQAABSABAQIgPAHIABhugABZAfQgHgMgLgMQgLgKgQgNIACgDQAZANAQAKQAPAMACAIQACAJgDADQgEAEgCAAQgDAAgFgJgAhKhIQgEgOgLgPIACgCQAMAHAIAIQAJAHAAAIQgBAIgDACQgEADgCAAQgDAAgDgMg");
	this.shape_3.setTransform(42.9,-4.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3300CC").s().p("AgKAYIAJgaIgJAAIAAgVIAVAAIAAAVIgLAag");
	this.shape_4.setTransform(17.5,4.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3300CC").s().p("AArBdIABgEIAfAGQAHAAADgKQAEgKAFg3IhMAAIgHAIIgMgLIAGgFQAAhSgBgPIAMAGIAMAAQAIgWACgNIATAKQgJACgPAXIAuAAIAIgHIANALIgGAFIgDAwQgBAMgFAFQgEAEgNADQAAgJgWgGIABgEIAXADQAFAAACgDQACgDACg1IhBAAIAABXIBNAAIAHgJIAOANIgIAFQgEAxgDAOQgDAPgHAFQgIAGgKADQAAgMgcgKgAhOBcIABgEQASAEAHAAQAHAAAAgJIAAheQgaA/gpAfIgBgCQAmgrARg0IgZAAIgHAHIgMgMIAHgFIAJgwIATAKIgIAFIgIAlIAmAAIAAg+IgbAAQgNAAgLADIgJgIIBKAAIAKgLIAQAQIgcAAIAAA+IAIAAIALgLIAPARIgiAAIAABmQABARgVAHQAAgKgZgKgAgYAzIBSAAIALgLIAQARIhNAAQgMAAgLADgAAvgjQgEgNgMgNIADgCQAPAIAFAGQAGAGAAAEQAAAEgDAFQgDAEgBAAQgDAAgDgJg");
	this.shape_5.setTransform(1.3,-4.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3300CC").s().p("AgPBdIAAgEIAdADQAGAAAAgIIAAhDIgmAAQgMAAgMADIgJgJIBHAAIAAgfIgJAAQgLAAgLADIgJgJIBHAAIALgLIAQARIgtAAIAAAfIArAAIAOgMIARASIhKAAIAABBQACAbgXAGQgDgQgYgGgAhXBmQgGgEAAgHQAAgGADgIQADgKAAgGQAAgGgFgEQgDgFgPgEIAAgEQARACAEAAQAEgBAFgIQAGgIAhhfIAFABQggBngCAOQgBAPAAARIgCAXQgBAFgDAAQgCAAgIgEgAhABmQAggfARgnIARAOIgHADQghAqgYAOgABVBdQgGgNgHgNIgWgcIADgBQAmAYAEAIQAGAIAAAEQAAAEgEAHQgDAHgCAAQgEAAgDgHgAhagRQgEgMgRgTIACgCQAeANACAJQADAJgFAFQgFAFgCAAQgCAAgCgIgAgxgNQAXgTASgbQASgbAHgcIAVALIgJAGQAlA1AuAJIAAADQgRADgBAKQgogWgcg1QgZA1gwAegAhGhKQgEgMgPgSIACgDQAbAMACAFQADAFAAADQAAAFgEAGIgFAFQgEAAgCgIg");
	this.shape_6.setTransform(-23.6,-4.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3300CC").s().p("AgEBCIAAg9Ig9AAIAAgJIA9AAIAAg9IAJAAIAAA9IA9AAIAAAJIg9AAIAAA9g");
	this.shape_7.setTransform(-43.2,-3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3300CC").s().p("AhKBaQAEgGAAgMIAAhaIgMAAQgMAAgLADIgJgIIArAAIAKgKIANANIgIAHIAABaIAiggIADADQghArgJAOgAAPBoQgXAAAAgYIAAhDIgBghIAOAKIBEAAIAAhEIhDAAQgHAAgKADIgJgJIBcAAIAJgKIAOAOIgJAGQAAA+ABAOIgOAHIAAgNIhFAAIAABPQAAASAPAAIA/AAQAHAAADgKQACgKABgcIAFAAQAAANACAOQACAOALAFQgHANgSAAgAg+hHQgFgOgQgRIACgCQANAFAMAIQALAIgBAJQgBAJgFADIgDABQgEAAgDgKg");
	this.shape_8.setTransform(-62.8,-4.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3300CC").s().p("AhMBeIAAi7ICYAAIAAC3IgWAAIAAgOIhrAAIAAASgAg1A6IBrAAIAAg7IhrAAgAg1gTIBrAAIAAg4IhrAAg");
	this.shape_9.setTransform(-87.6,-3.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3300CC").s().p("AgNByIAAh1IBpAAIAABlQAAANgOAAIgQAAIgGgTIANAAQAEAAAAgEIAAgSIhEAAIAAAsgAAFA2IBEAAIAAgOIhEAAgAAFAZIBEAAIAAgOIhEAAgAhOBxIAAjhIATAAQAJACgIAGIAADZgAhxAHQAIglABggIASADQAJACgIAEQgCAigGAegAgjgQIAAgQIA/AAIAAgNIgvAAIAAgQIAvAAIAAgNIg6AAIAAgPIA6AAIAAgYIASAAQAIABgHAFIAAASIA8AAIAAAPIg8AAIAAANIAwAAIAAAQIgwAAIAAANIBDAAIAAAQgAg3g+IAOgJQAHAKAEASIgRAIQgDgRgFgKg");
	this.shape_10.setTransform(-112.8,-4.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3300CC").s().p("AgeBqQgSAAAAgRIAAiUIAVAAQAKACgIAGIAACAQAAAHAGAAIA0AAQAHAAABgFIAIglIAYAHIgJAlQgGAUgOAAgAhtA+QARgtAAg0IAZAGQADAEgGABQgCAxgPAtgAAxgcIARgNQAYAbAUA4IgWAMQgPg3gYgbgAgkhXIAOgSQAlAVAOASIgQAUQgOgTgjgWg");
	this.shape_11.setTransform(-137.7,-4.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3300CC").s().p("AhSBTIAAgFIAGAAQAKAAAFgGQACgFAAgOIAAhpQAAgQgDgEQgFgFgJAAIgGAAIAAgFIBDAAQAkAAATAJQAUAIAMAUQALATAAAaQAAAigVAXQgXAagwAAgAgjhFIAACMQAPADALAAQAbAAATgUQASgUAAgiQAAghgSgUQgTgTgcAAQgLAAgOADg");
	this.shape_12.setTransform(-159.5,-3.5);

	this.instance = new lib.option();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.212,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.option(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-38,377.6,76.1);


(lib.option3C = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().p("AgSBdQAFgDAAgNIAAiMIgBgYIANAKQAVgEAbgIQAbgJAKgJIAOATQgKgBgnAJQAAAdACAfIAaAAIAOgNIATATIg6AAQAFAsANAWQAMAVAMAIIANgmIAEABQgEAYAAAOQABAOAEAJQAAABAAABQAAABAAAAQAAABAAAAQgBAAAAAAQgEAAgRgLQgRgLgPgbQgOgcgFguIgoAAIAABlIAugZIACADQgrAdgKAQgAgBhIIAAA0IAnAAQgCghAAgZIglAGgAhvBPIAjgHIAxgMIABAEQgcAKgoARIgGAHgAhnAfQAEgBAIgHQAJgHAdgnIgdAHQgJADgFAFIgLgRQAKgEAPgeQAPgeAFgUIATALQgIAHgKARIgeAyIAogDQAIgNAIgXIASAMQgFADgWAdQgVAdgUAWIA9gLIAAAEQg4AQgLAKg");
	this.shape.setTransform(-105.9,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("AhcBhQAwgGAFgWIhIAAIAAgPIBKAAIAAgPIgQAAIgQAAIAAhcIBKAAIgOgKQASgSAKghIATAHQAIADgLADIgEAIIBMAAIAAAQIgtAAIAJAOIgUAFIgJgTIgSAAQgFALgLANIA/AAIAABcIgbAAIAAAPIBDAAIAAAPIhDAAIAAAqIgUAAIAAgqIgsAAQgDAig/AMgAgRA2IApAAIAAgPIgpAAgAg0AXIBqAAIAAgMIhqAAgAg0AAIBqAAIAAgNIhqAAgAg0gYIBqAAIAAgNIhqAAgAhrg4QAbgXALgiIASAHQAIADgKADIgEAHIA5AAIAAAQIgeAAIAHAOIgUAEIgGgSIgOAAQgNAWgRAOg");
	this.shape_1.setTransform(-130.7,16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("AhdBwIgTgSQAcgkALgjIATANQgMAigYAkQAAAGgCAAIgBAAgAg4BdQAegGAagRIAMAMQAGAIgKgEQgcAUgaAGgAAqBSIAMgNQAYANAjAIIgKAVQgegGgfgXgAgkBCIAAhTIA4AAIAAgSIgoAAIAAgPIBlAAIAAAPIgpAAIAAASIA4AAIAABTgAAoAyIAlAAIAAgSIglAAgAgQAyIAkAAIAAgSIgkAAgAAoAQIAlAAIAAgSIglAAgAgQAQIAkAAIAAgSIgkAAgAhqgZIANgTQAPAIARAQIgOATIgfgYgABZgmIAAgeIh2AAIAAAeIgTAAIAAgwIBAAAIAAgZIAYAAQAGADgHAEIAAASIBGAAIAAAwgAhhhTIANgRQASAKANAMIgNAUIgfgZg");
	this.shape_2.setTransform(-155.8,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("AhkBYQBEgEAegPQgWgGgWgFIgGAHIgSgKIAbgcIhDAAIAAgQIBQAAIAQgUIg0AAIAAAGIgRAAIAAhCIAzAAIAAgVIhIAAIAAgQIDRAAIAAAQIhJAAIAAAVIAzAAIAABBIgQAAIAAgFIhJAAIAJAEQAFADgIACIgJALIB5AAIAAAQIgzAAQgLATgRAQQAgAIAjARIgMASQgegQgpgOQgfAYhRAIgAgjAtQAWADAbAGQAPgLAJgQIg5AAgAAggaIAjAAIAAgbIgjAAgAgQgaIAfAAIAAgbIgfAAgAhCgaIAiAAIAAgbIgiAAgAgQhFIAfAAIAAgVIgfAAg");
	this.shape_3.setTransform(147.9,-12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3300CC").s().p("AhRBuIAAhNIA/AAIAHgSIhkAAIAAgPIDfAAIAAAPIhoAAIgIASIBZAAIAAA8QAAAQgRAAIgNAAIgEgSIAMAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIAAgnIgjAAIAAA5IgRAAIAAg5IghAAIAAA5IgRAAIAAg5IgeAAIAAA9gAgJgJIAAg1IhJAAIAAAaIgUAAIAAgpIBdAAIAAgRIhJAAIAAgPICmAAIAAAPIhKAAIAAARIBeAAIAAApIgUAAIAAgaIhKAAIAAA1gAAWgMIAAgMIA0AAIAAAMgAhIgMIAAgMIA0AAIAAAMgAAWglIAAgMIA0AAIAAAMgAhIglIAAgMIA0AAIAAAMg");
	this.shape_4.setTransform(122.9,-13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3300CC").s().p("AhrBmIAAgTIBiAAIAAgdIhMAAIAAgTIBMAAIAAgaIgzAAIAAAIIgUAAIAAh2ICgAAIAABzIgUAAIAAgFIgzAAIAAAaIBNAAIAAATIhNAAIAAAdIBjAAIAAATgAAJgJIAzAAIAAgbIgzAAgAg8gJIAzAAIAAgbIgzAAgAAJg3IAzAAIAAgbIgzAAgAg8g3IAzAAIAAgbIgzAAg");
	this.shape_5.setTransform(97.8,-13.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3300CC").s().p("AhSBpQAYgSAOgYQAPgXAEgcIgGAAIgLADIgIgIIAaAAQACgTABgZIgHAAIgLACIgIgIIAaAAIAAgxQgNAAgLADIgJgJIBBAAIAHgJIAOALIgGAGIAABaQAAA8gIAPQgGAPgSAEQACgIgXgNIABgDQASAEAIAAIAFgBQACgCACgMQACgMABgjIgYAAQgGAhgSAYQgRAYgbAPgAgLAHIAXAAIAAgsIgWAAQAAAagBASgAgKgrIAWAAIAAgxIgWAAgAAsA3IAAh2IgBgrIAMAIIAdAAIAIgJIAPAQQgJAFgFALQgGALgOAkQAdAcABAMIACATQAAAPgHAIQgGAJgNADQgBgNgRgFIAAgEQALACAHAAQAHAAAEgDQADgDgBgTQgBgSgXgfIARhAIgeAAIAAC9IgMAGIABgwgAhqghQAAgtgBgOIAOAIIAXAAIAHgIIANALIgGAGIAABKIABAfIgOAGIAAgSIgYAAIAAAeIgOAGIABhXgAhdALIAYAAIAAhZIgYAAg");
	this.shape_6.setTransform(73,-12.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3300CC").s().p("AgKAYIAJgaIgJAAIAAgVIAVAAIAAAVIgLAag");
	this.shape_7.setTransform(47.3,-4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3300CC").s().p("Ag5BbIAAgEIAZACQAIABAAgPIAAg5IgSAOIgCAFIgMgQQANgEATgJIAAg1QgKAAgLADIgJgJIAeAAIgBg8IAXAJIgJAHIAAArIAFAAIAJgKIAPAQIgdAAIAAAwQALgFAPgJIACAEIgcATIAABKQABARgUAKQgDgNgYgIgAgBBbIA3AAQAShbAAgeIAZAMIgJAGIgbBnIASAAIAMgNIATATIhQAAQgNAAgKADgAhsgBIgBhGIANAIIAYAAIAHgIIAOAMIgIAGIAABNIACAfIgPAFIAAgTIgYAAIAAAZIgNAHIABhKgAhgAjIAYAAIAAhcIgYAAgAAiAsQgBgUgMgqIAFgBQAZAwgCANQgBANgEACIgFACQgEAAgBgPgAARg0IA6AAIAMgMIASASIg6AAQgNAAgIADgAAyhDQgCgPgMgWIADgCQAdAZgCAKQgCAKgHAEIgCABQgEAAgBgLg");
	this.shape_8.setTransform(31.6,-13.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3300CC").s().p("AgYBuQAmgKAdgUQAdgUATgrIgyAAIgQAQQAQAMACAGIACAHQAAAFgDADQgDAEgCAAQgDAAgBgKQgDgNgIgLQgNAKgQAJIgCgDQAUgOAOgUQAOgTAIgRIARAOIgJACIgLANIAvAAIAJgJIAOAOIgKAHQgZAwggASQggASgmAHgAhKBQIAAgEQAbAEAJgCQAIgBACgSQADgSAAhoIgzAAQgOAdgUAYIgDgCQASgfAJgaQAJgbADgRIAVALIgIAGIgNAbIAwAAIAJgJIALAMIgGAFQAABsgDARQgDARgHAHQgHAHgNAGQgBgPgcgGgAhXAHIgBguIANAGIATAAIAHgIIANAMIgHAFIAAAoIABAWIgMAHIAAgMIgVAAIAAAUIgNAFIABgzgAhLAbIAVAAIAAg2IgVAAgAgIAAQApgQAVgVQAWgVAIgQIgyAAQgGAJgFAFQASAJACAGQACAGgDAEIgEAEQgDAAgCgIQgFgKgIgIQgOAMgJAFIgBgDQARgPAKgTQAKgSAEgPIARAMIgIAEIgJAOIAvAAIAJgIIAOANIgJAFQgTAdgYARQgYARgmAKg");
	this.shape_9.setTransform(6,-13.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3300CC").s().p("AgYBdQA5glAEhbIgeAAIAAgSIAfAAIAAg2IAPAAQAJABgIAFIAAAwIA0AAIAAASIg0AAIgCAaIARACQAHABgGAFIAABWQAAAFAFAAIAQAAQAEAAABgFIAAgeIARAGIAAAbQAAASgOAAIgdAAQgRAAgBgUIAAhZQgLBKgzApgAhKBwIgCgQIAPAAQABAAABAAQAAAAABgBQAAAAAAAAQABgBAAgBIAAhLIgVAAIgWAAIAAg6IBfAAIAAA6IgkAAIAABOQAAAQgMAAgAhRACIA4AAIAAgaIg4AAgAhvBSQAOgWAJgfIATAIQAFADgIABQgHAegSAYgAggAqIAQgIQAKAKAGARIgRAKQgFgSgKgLgAA+hUIANgMQAPAJAJAOIgMANQgMgOgNgKgAhug8IAAgTIAxAAIAAggIAQAAQAIABgHAFIAAAaIAxAAIAAATg");
	this.shape_10.setTransform(-18.7,-13.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3300CC").s().p("AhyBwQANgdACgQQADgQABgRQABgRAAg1QAAg2gBgJIANAIIAfAAIAGgJIAPALIgHAHIAACpQABATgUAHQgBgNgXgFIAAgEQAUACAGgBQAFAAgBgMIAAg9IggAAQgBAcgFAVQgFAVgTAZgAhSAOIAgAAIAAguIggAAgAhSgmIAgAAIAAgvIggAAgABRBgIhUAAIgGAIIgOgMIAHgGIAAhTQAAgWgCgNIAVAJIgHAIIAABpIBVAAIAAh4IAVAIIgIAIIAABbIABAbIgOAHgAAABHQAUgbANglQgNgcgOgWIADgCQARAWANAVQAJgXAHgeIATAOIgHAFIgUArQAPAVADAKQAEAKgBAGQgBAGgDAEIgEADQgEAAgCgMQgDgRgKgUQgSAkgVATgAgihDIB1AAIAOgOIASATIh1AAQgMAAgLADgAAhhSQgEgNgOgPIACgDQAVALAFAGQAFAFgBAGQgBAHgDADIgFADQgEAAgBgKg");
	this.shape_11.setTransform(-43.9,-13.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3300CC").s().p("AgDBvQgVAAAAgUIAAgvIg7AAIAAAOIgOAHIABhDIgBhBIAPAJIA6AAIgBg0IAXALIgIAHIAAAiIA6AAIAKgKIAOAOIgJAHQAABNABATIgPAHIAAgMIg7AAIAAAsQAAALAKAAIBEAAQAJgBABgJIACgmIAEAAQAAAZAEAHQADAIAHAFQgEAIgGADQgGAEgKAAgAgKAnIA7AAIAAgrIg7AAgAhTAnIA7AAIAAgrIg7AAgAgKgKIA7AAIAAgqIg7AAgAhTgKIA7AAIAAgqIg7AAg");
	this.shape_12.setTransform(-67.5,-13.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3300CC").s().p("AgEBCIAAg9Ig9AAIAAgJIA9AAIAAg9IAJAAIAAA9IA9AAIAAAJIg9AAIAAA9g");
	this.shape_13.setTransform(-88.3,-12.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3300CC").s().p("AgJBvIAAg1IgnAAIAAgTIAnAAIAAg8QgdA9g/AmIgLgVQBCgkAdhEIhVAAIAAgTIBdAAIAAgsIASAAQAHABgGAFIAAAmIBdAAIAAATIhXAAQAhA6BAAnIgLAXQg8glggg5IAAA8IAnAAIAAATIgnAAIAAA1g");
	this.shape_14.setTransform(-107.9,-13.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3300CC").s().p("AAZAdQggAwg4AZIgCgEQA5gjAYgwIgkAAQgMAAgLADIgJgJIBNAAIAAgdIgjAAIAAAKIgOAFIABg4IgBgxIAPAIIBSAAIAIgJIAOANIgHAGIABBMIgPAGIAAgKIglAAIAAAdIAuAAIAOgMIASASIhGAAQAVAzAyANIAAAEQgRAAgEAMQgsgdgMgzIgCAAQAABKABAQIgOAHIABhTgAAlgaIAlAAIAAgfIglAAgAgKgaIAjAAIAAgfIgjAAgAAlg/IAlAAIAAghIglAAgAgKg/IAjAAIAAghIgjAAgAhVBOQAGgFgBgQIAAhTIgIAAQgHAAgLADIgJgJIAhAAIAGgKIAQANIgIAHIAABYIAsgkIADADIghAkQgNAOgEAJgAhLhMQgEgMgRgRIACgDQAVAKAHAFQAHAFAAAHQAAAHgDAEQgEADgCAAQgEAAgDgJg");
	this.shape_15.setTransform(-132.9,-13.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3300CC").s().p("Ag5A4QgQgXAAgeQAAgYALgVQALgVATgLQAUgMAWAAQASAAARAJIAIADQADAAACgCQAEgEABgGIAEAAIAEA5IgEAAQgIgagNgLQgOgLgVAAQgPAAgNAJQgNAIgIASQgIATABAaQAAAWAGARQAIAQAPAJQANAJATAAQAQAAAMgHQAMgHAPgVIADADQgMAWgQAKQgRALgXAAQgoAAgXgfg");
	this.shape_16.setTransform(-159.9,-12.5);

	this.instance = new lib.option();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.212,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.option(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-38,377.6,76.1);


(lib.option3B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().p("AgcBsIgFgSIAYAAQADAAAAgEIAAgyIhlAAIAAgSIBlAAIAAgZIAJACIAbgSIhcAAIAAgTIBwAAIAEgEIARARIgHACIg0AgIAAANIBhAAIAAASIhhAAIAAA5QAAAPgOAAgAhkgeIAAgzIBbAAIAAgaIAUAAQAJACgJAFIAAATIBbAAIAAAxIgTAAIAAgeIikAAIAAAgg");
	this.shape.setTransform(85.8,-4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("AhrBUQA1gOApgkQgjgkgLgwIgwAAIAAgTIBfAAIAAgmIAUAAQAJADgIAFIAAAeIBfAAIAAATIguAAQgIAtgiAnQAjAeA4APIgJAYQgxgNgvgoQgwAqg0APgAABASQAdgiAHgiIhLAAQAGAhAhAjg");
	this.shape_1.setTransform(61,-4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("AAoBrIgDgSIAaAAQANAAABgSIAFh0Ig4AAQgLAbgUAYIgPgRQAgghAJg9IAVAGQAIAEgJACIgIAeIBGAAIgECDQgCAngeAAgAhnBoIAAinIAaAAQAGgTAEgYIAYAIQAEAEgHABQgDANgIARIAkAAIAACgIgTAAIAAgMIgrAAIAAATgAhTBCIArAAIAAgyIgrAAgAhTgCIArAAIAAgrIgrAAgAAHAKIAQgRQAUARAMAQIgSATQgOgUgQgPg");
	this.shape_2.setTransform(36.2,-4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("AhKA+IAAiKIgBgkIAXAJIgJAIIAAAjQAVAJAGAGQAGAFgBAHQgBAIgCABIgEACQgCAAgFgIQgFgMgNgNIAAB7IABAmIgPAHIABgzgAgeBbQgEgHAAgHQAAgKAIgQQAIgRBKhvIg3AAQgLAAgLADIgJgJIBVAAIAJgLIATAQQgJADgMAOQgKAOgXAiQgXAhgMAWQgMAWgBALQgCALAVAAIBJAAQAMAAAEgLQADgLACghIAEAAIABAeQACASAMADQgIAQgZAAIhRAAIgGAAQgTAAgEgHgAhsgCQgEgBAAgCQAAgEAFgHQAIgLADgYIAEAAQADAcgCAJQgCAJgFACIgHACIgDgBg");
	this.shape_3.setTransform(11,-4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3300CC").s().p("AhKBaQAEgGAAgMIAAhaIgMAAQgMAAgLADIgJgIIArAAIAKgKIANANIgIAHIAABaIAiggIADADQghArgJAOgAAPBoQgXAAAAgYIAAhDIgBghIAOAKIBEAAIAAhEIhDAAQgHAAgKADIgJgJIBcAAIAJgKIAOAOIgJAGQAAA+ABAOIgOAHIAAgNIhFAAIAABPQAAASAPAAIA/AAQAHAAADgKQACgKABgcIAFAAQAAANACAOQACAOALAFQgHANgSAAgAg+hHQgFgOgQgRIACgCQANAFAMAIQALAIgBAJQgBAJgFADIgDABQgEAAgDgKg");
	this.shape_4.setTransform(-14.2,-4.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3300CC").s().p("AgUBjIgDgXQAfAJALgDQANgDAGghIiUAAIAAgTICXAAIABgXIhWAAIgEAJIgTgEQAOgtAFgoIATACQAIABgHAEIgCAMIBiAAIAAATIhlAAIgGAYIBoAAIgDApIAxAAIAAATIg0AAQgJA2gYAEIgOACQgPAAgRgHgABQg5IAAgdIigAAIAAAdIgWAAIAAgwIDNAAIAAAwg");
	this.shape_5.setTransform(-39.2,-3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3300CC").s().p("AhbBuIgDgSIALAAQADAAAAgEIAAg4IgTAHQgBAHgEgEIgIgWIAggIIAAg1IgbAAIAAgTIAbAAIAAgxIATAAQAIABgHAEIAAAsIAeAAIAAATIgeAAIAAAvIAYgHIACALQATgeAHguIATAFQAEAEgGAAQgGAxgVAjIgQgMIgaAKIAABIQAAANgNAAgAgmBYQBOgBAihLIATAJQAHAFgJACQgqBPhTACgAAJAqIgFgTIARAAQAEAAAAgEIAAh/IATAAQAHABgGAEIAACDQgBAOgOAAgAA2g/IARgKQAcAjAOAlIgVALQgVgygRgXg");
	this.shape_6.setTransform(-63.9,-4.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3300CC").s().p("AgPBrQgfABgagZQgOASgPAGIgNgVQAWgIAKgKIAAg/IgeAAIAAgVIAxAAIAABVQARAUAhAAICAAAIgEASgAgYBQIAAhFQgFAggRAVIgNgPQAUgZAAghIAAhBICCAAIAAAzIhyAAIAAAMIB3AAIAABKQAAAPgLAAIgOAAIgDgQIAJAAQABAAAAAAQABAAAAAAQAAgBABAAQAAgBAAAAIAAgUIgWAAIAAAmIgQAAIAAgmIgRAAIAAAmIgQAAIAAgmIgQAAIAAAogAA6AYIAWAAIAAgVIgWAAgAAZAYIARAAIAAgVIgRAAgAgHAYIAQAAIAAgVIgQAAgAgXgnIBhAAIAAgTIhhAAgAhjhWIAQgPQASALAKARIgRARQgOgVgNgJgAgyhYIAAgTICaAAIAAATg");
	this.shape_7.setTransform(-89.1,-4.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3300CC").s().p("AgPBrQgfABgagZQgOASgPAGIgNgVQAWgIAKgKIAAg/IgeAAIAAgVIAxAAIAABVQARAUAhAAICAAAIgEASgAgYBQIAAhFQgFAggRAVIgNgPQAUgZAAghIAAhBICCAAIAAAzIhyAAIAAAMIB3AAIAABKQAAAPgLAAIgOAAIgDgQIAJAAQABAAAAAAQABAAAAAAQAAgBABAAQAAgBAAAAIAAgUIgWAAIAAAmIgQAAIAAgmIgRAAIAAAmIgQAAIAAgmIgQAAIAAAogAA6AYIAWAAIAAgVIgWAAgAAZAYIARAAIAAgVIgRAAgAgHAYIAQAAIAAgVIgQAAgAgXgnIBhAAIAAgTIhhAAgAhjhWIAQgPQASALAKARIgRARQgOgVgNgJgAgyhYIAAgTICaAAIAAATg");
	this.shape_8.setTransform(-114.1,-4.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3300CC").s().p("AhmALIAAgVIDNAAIAAAVg");
	this.shape_9.setTransform(-139.3,-4.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3300CC").s().p("AhKBTIAAgFIAHAAQALAAAEgGQADgFAAgOIAAhpQAAgQgEgEQgFgFgJAAIgHAAIAAgFIBIAAQATAAANADQARAFAKALQAKALAAAOQAAANgHAKQgJAKgOAEQARADAIAIQANALAAAQQAAANgIALQgIALgOAGQgOAFgbAAgAgSACIgIABIAABEQAOADANAAQAWAAALgKQAMgKAAgOQABgKgGgJQgFgJgMgFQgMgFgQAAIgOAAgAgahHIAABAIAKABIANAAQARAAAJgDQAJgEAEgIQAGgIAAgKQgBgOgLgKQgMgLgWAAQgMAAgKADg");
	this.shape_10.setTransform(-160.4,-3.5);

	this.instance = new lib.option();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.212,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.option(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-38,377.6,76.1);


(lib.option3A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().p("Ag5BbIAAgEIAaACQAHABABgPIAAg5IgTAOIgCAFIgNgQQAOgEAUgJIAAg1QgLAAgLADIgJgJIAfAAIgBg8IAWAJIgJAHIAAArIAFAAIAJgKIAPAQIgdAAIAAAwQALgFAPgJIACAEIgcATIAABKQABARgUAKQgCgNgZgIgAgBBbIA3AAQAShbAAgeIAYAMIgIAGIgcBnIATAAIANgNIATATIhRAAQgNAAgKADgAhtgBIgBhGIAPAIIAWAAIAHgIIAPAMIgHAGIAABNIABAfIgPAFIAAgTIgXAAIAAAZIgPAHIABhKgAhfAjIAXAAIAAhcIgXAAgAAiAsQgBgUgLgqIADgBQAZAwgBANQgBANgEACIgFACQgEAAgBgPgAAQg0IA7AAIAMgMIASASIg6AAQgNAAgJADgAAyhDQgCgPgMgWIADgCQAdAZgCAKQgDAKgFAEIgDABQgEAAgBgLg");
	this.shape.setTransform(137.6,-4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("AgcBsIgFgSIAYAAQADAAAAgEIAAgyIhmAAIAAgSIBmAAIAAgZIAJACIAcgSIheAAIAAgTIBxAAIADgEIASARIgHACIgzAgIAAANIBfAAIAAASIhfAAIAAA5QgBAPgOAAgAhkgeIAAgzIBbAAIAAgaIAUAAQAKACgKAFIAAATIBcAAIAAAxIgUAAIAAgeIikAAIAAAgg");
	this.shape_1.setTransform(112.2,-4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("AgXBeQAygVAQgVQgQghgCgfQgGAOgGAIIgPgMQAcgrAGg/IAUAEQAGAEgIACQgEASgEARIBCAAIAAATIgRAAQgBA8gWAlQAPATAdAPIgNAVQgfgUgNgTQgWAaguASgAA3AjQAOgaACg1IghAAQAEA1ANAagAhpBaQAmgEAVgSIgWgJIgGALIgRgJQALgOAJgTIglAAIAAgPIArAAIAJgVIATAFQADADgGABIgGAMIA2AAIAAAPIgOAAQgEAUgKANQAJAEAKAGIgJAQQgLgHgJgEQgZAZgrAGgAg9AuQANAEALAFQAIgJAFgSIgdAAIgIASgAhvgLQAegPAUgXIgtAAIAAgQIAzAAIAAgvIAQAAQAHABgGAEIAAAqIAwAAIAAAQIgoAAQALANAVALIgKARQgQgKgOgRIAAAXIgRAAIAAgSQgQATgbAPgAgchLQAIgNAHgRIARAJQAEAEgIABQgEAPgIAKgAhkhdIAQgKQALAMAGANIgPALQgIgPgKgLg");
	this.shape_2.setTransform(87.5,-4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("Ag5BbIAAgEIAZACQAIABAAgPIAAg5IgSAOIgCAFIgMgQQANgEATgJIAAg1QgKAAgLADIgJgJIAeAAIgBg8IAXAJIgJAHIAAArIAFAAIAJgKIAPAQIgdAAIAAAwQALgFAPgJIACAEIgcATIAABKQABARgUAKQgDgNgYgIgAgBBbIA3AAQAShbAAgeIAZAMIgJAGIgbBnIASAAIAMgNIATATIhQAAQgMAAgLADgAhsgBIgBhGIANAIIAYAAIAHgIIAOAMIgIAGIAABNIACAfIgPAFIAAgTIgYAAIAAAZIgNAHIABhKgAhgAjIAYAAIAAhcIgYAAgAAiAsQgBgUgMgqIAFgBQAZAwgCANQgBANgEACIgFACQgEAAgBgPgAARg0IA6AAIAMgMIASASIg6AAQgNAAgIADgAAyhDQgCgPgMgWIADgCQAdAZgCAKQgCAKgHAEIgCABQgEAAgBgLg");
	this.shape_3.setTransform(62.6,-4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3300CC").s().p("AAiBDQgTgmgBhFIh3AAIAAgVIB2AAIAAgtIAVAAQAKACgIAGIAAAlIBEAAIAAAVIhEAAQADBEAQAcQANAYAJAAQAFAAABgGIABgRIAWAKIgEAXQgDARgPAAQgdAAgVgogAhjBhIgFgYQAYgCAYgEIAAg4IgnAAIAAgRIBgAAIAAARIgmAAIAAA1QAXgDAcgGIADATQg2ALg4AKQAAAFgCAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAgBgBgAAuhWIAQgPQANAHANALIgRAPQgKgKgPgIg");
	this.shape_4.setTransform(37.5,-4.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3300CC").s().p("AA7BPIiCAOQgDAJgDgHIgIgXIAggDQAWgyAOgwIAWAHQAIAEgLADIgjBTIBSgFQgKgRgSgYIATgIQAbAcAYAtIgWAMQgDgIgHgMgAhvgCQAtgkAag7IAWAOQAFAFgKABQgaA1gtAmgAARhbIAVgGQATBAA3AbIgRATQg/glgPhDg");
	this.shape_5.setTransform(12.4,-3.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3300CC").s().p("AAoBrIgDgSIAaAAQANAAABgSIAFh0Ig4AAQgLAbgUAYIgPgRQAgghAJg9IAVAGQAIAEgJACIgIAeIBGAAIgECDQgCAngeAAgAhnBoIAAinIAaAAQAGgTAEgYIAYAIQAEAEgHABQgDANgIARIAkAAIAACgIgTAAIAAgMIgrAAIAAATgAhTBCIArAAIAAgyIgrAAgAhTgCIArAAIAAgrIgrAAgAAHAKIAQgRQAUARAMAQIgSATQgOgUgQgPg");
	this.shape_6.setTransform(-12.4,-4.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3300CC").s().p("AA0BgIAAgEIAYACQAIAAAAgJIAAhRIgfAAIgDAfQASAIAFAEQAEAFAAAFQAAAEgCAFQgCAEgBAAQgCAAgDgIQgFgKgNgNQgGAagbAXIgDgCQAdgggBgyIgbAAIgCATQAMAHAEAFQADAFAAADQAAADgDAEIgEAFQgDAAgBgHQgCgLgHgKQgJAmgcAXIAAARIgNAIIABg+IgBg8IAOAIIAcAAIAAgdIgVAAQgMAAgLADIgJgJICIAAIALgMIARASIg9AAIAAAdIAdAAIAHgKIAPALIgIAHIAABRQABASgUAJQgBgPgYgEgAgaBTQAaggADgvIgdAAgAAOgBIAbAAIAAgdIgbAAgAhYBoQgGgEAAgGQAAgGADgJQADgKAAgGQAAgGgFgEQgFgEgPgEIAAgEQASACAEgBQAEgBAFgHQAGgIAYhWIAEABQgWBXgBAPIgDAhIgBAaQAAAFgEAAQgCAAgHgDgAhdgPQgFgNgPgSIABgDQAgAPABAJQACAJgEAFQgDAFgCAAQgEAAgDgJgAgBhHIgLAAQgNAAgKADIgJgJIArAAIgBglIAUAIIgIAIIAAAVIAiAAIgBgjIAVAHIgJAIIAAAUIAaAAIAMgMIAQASIg2AAIABAQIgMAGIAAgWIgiAAIAAASIgMAGIABgYgAhHhFQgFgNgPgTIACgDQAbAOACAFIACAIQAAAGgDAFQgEAEgCAAQgDAAgBgHg");
	this.shape_7.setTransform(-37.8,-4.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3300CC").s().p("AA0BgIAAgEIAYACQAIAAAAgJIAAhRIgfAAIgDAfQASAIAFAEQAEAFAAAFQAAAEgCAFQgCAEgBAAQgCAAgDgIQgFgKgNgNQgGAagbAXIgDgCQAdgggBgyIgbAAIgCATQAMAHAEAFQADAFAAADQAAADgDAEQgDAFgBAAQgDAAgBgHQgCgLgHgKQgJAmgcAXIAAARIgNAIIABg+IgBg8IAOAIIAcAAIAAgdIgVAAQgMAAgLADIgJgJICIAAIALgMIARASIg9AAIAAAdIAdAAIAHgKIAPALIgIAHIAABRQABASgUAJQgBgPgYgEgAgaBTQAaggADgvIgdAAgAAOgBIAbAAIAAgdIgbAAgAhYBoQgGgEAAgGQAAgGADgJQADgKAAgGQAAgGgFgEQgFgEgPgEIAAgEQASACAEgBQAEgBAFgHQAGgIAYhWIAEABQgWBXgBAPIgDAhIgBAaQAAAFgEAAQgCAAgHgDgAhdgPQgFgNgPgSIABgDQAgAPABAJQACAJgEAFQgDAFgCAAQgEAAgDgJgAgBhHIgLAAQgNAAgKADIgJgJIArAAIgBglIAUAIIgIAIIAAAVIAiAAIgBgjIAVAHIgJAIIAAAUIAaAAIAMgMIAQASIg2AAIABAQIgMAGIAAgWIgiAAIAAASIgMAGIABgYgAhHhFQgFgNgPgTIACgDQAbAOACAFIACAIQAAAGgDAFQgEAEgCAAQgDAAgBgHg");
	this.shape_8.setTransform(-62.8,-4.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3300CC").s().p("AhtBZQAmgQAOg0IAVAGQAFADgIABIgHASQATAVAWAHIAAhCIhgAAIAAgRIDSAAIAAARIhgAAIAAAWIBHAAIAAATIhHAAIAAAfIBhAAIgFATIhOAAQg0AAgcgkQgTAegZAMgAhFgXIAAhTICPAAIAABTgAgxgmIBnAAIAAgTIhnAAgAgxhIIBnAAIAAgTIhnAAg");
	this.shape_9.setTransform(-87.7,-3.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3300CC").s().p("AhtBiQATgWAGgYIAVAIQgFAdgWAWgAA0A+IASgKQAVARARAdIgXAKQgKgUgXgagAAEA7IAVgEQANAVACAYIgYAGQgCgWgKgZgAgtA8IAVgCQAIAXgCAWIgXADQAAgYgEgWgAgnAkQA4gfAHgrIgiAAQgSA6hEAgIgKgRQAkgQAPgSQgPgOgQgIIgQARIgKgRQAigdAHg8IAUACQAEAEgGABIgDAOIAnAAIACgEIAOAJQAGADgHADQAAAJgEAMIAfAAIAAg1IASAAQAIABgHAEIAAAwIA5AAIAAATIgzAAQANAqAyAdIgLATQgtgbgTguQgLAqg3AhgAhNgiQAPAHASAPQAGgIACgFQgLgJgYgKgAhAg7QAVAHAPAKQAFgPABgNIgmAAgAAzhXIAOgPQANAGANANIgQARQgLgOgNgHg");
	this.shape_10.setTransform(-112.5,-4.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3300CC").s().p("AhQBvIAAi7IA8AAIAJgiIAWAFQAEAEgGABIgKAYIBSAAIAAC4IgTAAIAAgJIh6AAIAAAMgAg8BRIB6AAIAAglIh6AAgAg8AaIB6AAIAAggIh6AAgAg8gZIB6AAIAAggIh6AAg");
	this.shape_11.setTransform(-137.5,-4.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3300CC").s().p("AAXBVIAAgFQAKAAADgDQAEgDAAgEQAAgFgFgMIgKgYIg/AAIgMAaQgEAKAAAFQAAAEAEADQADACAMABIAAAFIg0AAIAAgFQALgCADgDQAGgFAHgSIA7iIIADAAIA6CJQAHARAFAFQAGAFAKAAIAAAFgAgjAUIA4AAIgbhCg");
	this.shape_12.setTransform(-159.3,-3.7);

	this.instance = new lib.option();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.212,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.option(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-38,377.6,76.1);


(lib.option2D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().p("AgfBlIgEgWIAVAAQAEAAAAgDIAAh6IARADQAfgWANgMIiOAAIAAgTICgAAIAEgEIATASQABAEgGABQgcAZgwAdIAABuQAAAOgMAAg");
	this.shape.setTransform(154,-3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("AhjBqIAAjTIDHAAIAADPIgUAAIAAgHIigAAIAAALgAhQBMICgAAIAAijIigAAgAgKBEIAAhGQgUAggkAXIgLgUQAtgZAUgoIg8AAIAAgSIA+AAIAAgfIARAAQAIABgHAFIAAAZIA/AAIAAASIg9AAQAVAnAwAUIgLAXQgtgbgPgZIAABGg");
	this.shape_1.setTransform(129,-3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("AhqBqIAAgSIDTAAIAAASgAhLA6IAAgTICVAAIAAATgAhoAZIgHgUIATgCIAAhUIASAAQAIABgHAFIAABMIAZgCIAAhoIASAAQAIABgHAEIAAAjIAlAAIAAASIglAAIAAAsIAogFIAAASIhtAOQgCAGgBAAQgCAAgBgFgAAnAQQgSAAAAgQIAAhpIATAAQAHABgGAEIAAAqQAPgFAfgTIAMAQQAHAHgLgCIg2AVIAAAeQgBAIAIAAIAhAAQAIAAAAgHIAEgQIATADIgEATQgEATgOAAg");
	this.shape_2.setTransform(103.9,-4.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("AgvBwIAAhrQgXAYgbAQIgLgVQA5gfARgzIhBAAIAAgSIBGAAQACgMACgXIAZAFQAEADgGABIgFAaIB0AAIAAASIh3AAQgFAOgEAJIBfAAIAACBQAAAPgPAAIgXAAIgEgSIATAAQAEAAgBgEIAAgbIhTAAIAAA0gAgbAqIBTAAIAAgWIhTAAgAgbACIBTAAIAAgTIhTAAg");
	this.shape_3.setTransform(78.7,-4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3300CC").s().p("AgKAYIAJgaIgJAAIAAgVIAVAAIAAAVIgLAag");
	this.shape_4.setTransform(53.4,4.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3300CC").s().p("AgFA5IgBg5IAPAJIA+AAIAJgJIAOANIgJAGIABBVIgOAGIAAgQIhAAAIAAANIgOAGIABg4gAAIBYIBAAAIAAgjIhAAAgAAIAvIBAAAIAAggIhAAAgAhQBcQAGgHAAgJIAAg0IgGAAQgMAAgMADIgJgJIAnAAIAAgoIgUAAIgSAUIgCgBQAagoAOhCIAWAMQgHAGgEAHIgIASIAVAAIALgLIAPARIgxAAIgSAgIAmAAIAKgLIAQARIgiAAIAAAoIARAAIALgLIAQARIgsAAIAAA5IAggQIACADQghAYgIANgAgcgUIAlAAIAAgqQgJAAgKADIgJgJIAcAAIgBgsIAUAIIgGAGIAAAeIAhAAIAAgrIAUAJIgFAGIAAAcIALAAIAKgKIAPAQIgkAAIAAAqIARAAIAMgMIAQASIhwAAQgMAAgKADgAAWgUIAhAAIAAgqIghAAg");
	this.shape_5.setTransform(37.3,-4.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3300CC").s().p("AgKBkIAAh8QgiApgzAWIgNgWQBIgdAghBIhfAAIAAgWIDMAAIAAAWIhWAAQgDAJgFALIAACdgAAYgUIANgSQAmAUAiAkIgRATQghglgjgUg");
	this.shape_6.setTransform(12.2,-3.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3300CC").s().p("AA0BQQgOgUAAg1IiIAAIAAgRICcAAQAAA8AJAOQALARAFAAQAHAAAAgYIAUAGQgDArgSAAQgSAAgTgagAhtggQAkgeAQgrIAUADQALAEgLAEIgIANICKAAIAAATIiUAAQgNAWgbAYgAhBgcIAAgSIB0AAIAAASg");
	this.shape_7.setTransform(-12.5,-4.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3300CC").s().p("AgSBfQAagGAWgNQgLgKgKgTQgNAfgsAbIgMgRQA1gZAJg0IglAAIAAgPIAoAAIABgUIgmAAIAAgPICAAAIAAAPIhHAAIgCAUIBWAAIAAAPIhYAAIgFASIA1AAIADgEIARALIgDAFQgKASgRAPQASAJAgAGIgJASQgdgEgbgPQgXAOggAKgAAsBBQAOgLAHgNIgpAAQAHAOANAKgAhsBRIAAisIA8AAIAACXIgsAAIAAAVgAhcAtIAcAAIAAgzIgcAAgAhcgWIAcAAIAAg1IgcAAgAgZhFIAQgIQAJANAEANIgRAIQgFgPgHgLgAA7g1QAHgOAIgTIATAHQAEAEgHABIgNAdgAAPhKIARgIQAHAMAIAPIgSAIQgGgSgIgJgAghhhQBKgDAugLIALARQACAIgIgGQhUAKgkABg");
	this.shape_8.setTransform(-37.4,-4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3300CC").s().p("AAoBrIgDgSIAZAAQAOAAABgSIAFh0Ig5AAQgJAbgVAYIgOgRQAfghAKg9IAUAGQAJAEgKACIgIAeIBHAAIgGCDQgBAngdAAgAhmBoIAAinIAZAAQAFgTAGgYIAXAIQAEAEgHABQgDANgHARIAkAAIAACgIgUAAIAAgMIgrAAIAAATgAhTBCIArAAIAAgyIgrAAgAhTgCIArAAIAAgrIgrAAgAAHAKIARgRQATARALAQIgRATQgNgUgRgPg");
	this.shape_9.setTransform(-62.4,-4.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3300CC").s().p("AgBAkIgBhTIANAJIA4AAIAKgKIANANIgIAGIABAqIgOAGIAAgJIg6AAIAAAYIBBAAIAKgKIAMANIgHAHQAAArABANIgOAHIAAgRIhDAAIAAAPIgNAIIABhNgAALBUIBDAAIAAgsIhDAAgAALAEIA6AAIAAgkIg6AAgAhSBVQAGgEAAgKIAAhDIgBgkIAUAKIgHAIIAABXIApgiIADADQgsAugFAMgAhygGQAPgaALgjQALgjABgKIAVALIgJAGIgLAdIAjAAIAJgLIAPAPQgJADgEAFQgFAFgTAZIgDgBIARgkIgmAAQgQAigTAXgAgTgtQAAgBgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgDAHgGQAJgHADgSIADAAIAAAJIApAAQgBgIgEgIQgDgIgKgKIACgCQAXAJADAGQADAFAAADQAAAFgGAIIArAAIAHgKIARAQIgKAEQgFADgMAQIgDgCIAIgVIhdAAIAAALQgBAHgEADQgEADgEAAIgGgBg");
	this.shape_10.setTransform(-87.8,-4.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3300CC").s().p("AgYBaIAAhVIg0AAQgNAAgLADIgJgIIBVAAIAAg6IgeAAQgMAAgLADIgJgJIA+AAIAAgbIgBgYIAXAKIgIAHIAAAiIA8AAIAIgKIAQANIgJAHIgEA2IAZAAIAIgKIAPALIgIAGIgFA1QgCAWgYAFQgCgLgbgLIAAgEIAiAFQAHABACgQIAEguIhiAAIAABOIABAZIgQAIIABgagAgKAAIA5AAIAFg6Ig+AAgABQhFQgIgPgagUIACgDQArASAEAGQACAGAAADQAAAFgCAFQgDAGgCAAQgEAAgGgLg");
	this.shape_11.setTransform(-112.8,-4.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3300CC").s().p("AhfBJIAAiTIgBglIAPAJICcAAIAHgKIAPANIgHAGIAAChIABAjIgOAIIAAgUIieAAIAAAQIgPAGIABgogAhRAcIAAA5ICeAAIAAi1IhpAAIARAJIgGACIgJAOIAzAAIAHgJIAOAOIgHAFQgRAXgSAUQAfAVAnAEIAAAEQgPABgEALQgigNgYgVQgiAagsANgAhRAXQAtgUAagXQgNgSgKgWQgPAYgSARIgDgCQAQgVALgWQAKgWACgKIgzAAgAgCgbQAMgQAOgWIg1AAQAOAYANAOgAASBKQgOgMgtgOIAAgEQAsAFAOAFQAOAEABALQABAKgFAAQgDAAgHgFgAAHAkQgIgKgXgOIABgDQAXAFAJAEQAKAEgBAJQgBAJgDAAQgDAAgEgEg");
	this.shape_12.setTransform(-137.1,-4.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3300CC").s().p("AhSBTIAAgFIAGAAQAKAAAFgGQACgFAAgOIAAhpQAAgQgDgEQgFgFgJAAIgGAAIAAgFIBDAAQAkAAATAJQAUAIAMAUQALATAAAaQAAAigVAXQgXAagwAAgAgjhFIAACMQAPADALAAQAbAAATgUQASgUAAgiQAAghgSgUQgTgTgcAAQgLAAgOADg");
	this.shape_13.setTransform(-159.5,-3.5);

	this.instance = new lib.option();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.212,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.option(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-38,377.6,76.1);


(lib.option2C = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().p("AiEBoQBAgSAzgsQgrgtgOg8Ig6AAIAAgXIB0AAIAAguIAaAAQAMACgLAIIAAAkIB1AAIAAAXIg5AAQgJA5gpAwQAqAmBGASIgLAdQg9gQg7gxQg7A0hAATgAABAXQAlgrAIgrIhdAAQAHApApAtg");
	this.shape.setTransform(-38.9,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("AgxByIAAgGQAXAFAKAAQAKAAAAgOIAAhNIhQAAQgQAAgNADIgLgKIB4AAIgCgyIAfAOIgMAJIAAAZIBQAAIASgRIAZAZIh7AAIAABcQgEAVgWAIQAAgQgigMgAiHB8QA5gnAagvIAXAUIgOAEQgwAvgpASgABnBsQgPgWg2gkIACgFQBDAeAKAIQAJAIAAAMQAAAGgCAHQgBAGgCAAQgEAAgKgOgAiCAEQBSggALhAIggABQgKAAgIAEIgLgKIA/gCIABgqIAaALQgHAEgBAHIgCASIA1gCIAKgMIASAOIgKAIIAAA3QgBAMARgBIAfAAQAKgCADgKQACgKAAgXIAFAAIADAcQACALALAEQgJAQgOAAIg2AAQgXABAAgUIAAhAIg4ADQgMBNhhAXg");
	this.shape_1.setTransform(-70.5,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("AgpCGQgWAAAAgZIAAhWIAYAAQAJACgIAGIAABGQAAAKAIAAIBIAAQAIAAACgJIADgWIAaAGQgDAwgaAAgAiHBvQASgiAGgtIAZAHQAKAEgLAFQgFAmgTAngABDAtIAUgRQAaAcAXAmIgYATQgXgsgWgYgAgTAZIAUgQQAUAXAPAXIgWASQgPgbgSgVgAhugCIAAgXIBhAAIAAgtIh0AAIAAgXIB0AAIAAgoIAWAAQAKABgJAGIAAAhIByAAIAAAXIhyAAIAAAtIBfAAIAAAXg");
	this.shape_2.setTransform(-100.9,-1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("AgxByIAAgGQAXAFAKAAQAKAAAAgOIAAhNIhQAAQgQAAgNADIgLgKIB4AAIgCgyIAfAOIgMAJIAAAZIBQAAIASgRIAZAZIh7AAIAABcQgEAVgWAIQAAgQgigMgAiHB8QA5gnAagvIAXAUIgOAEQgwAvgpASgABnBsQgPgWg2gkIACgFQBDAeAKAIQAJAIAAAMQAAAGgCAHQgBAGgCAAQgEAAgKgOgAiCAEQBSggALhAIggABQgKAAgIAEIgLgKIA/gCIABgqIAaALQgHAEgBAHIgCASIA1gCIAKgMIASAOIgKAIIAAA3QgBAMARgBIAfAAQAKgCADgKQACgKAAgXIAFAAIADAcQACALALAEQgJAQgOAAIg2AAQgXABAAgUIAAhAIg4ADQgMBNhhAXg");
	this.shape_3.setTransform(-132.5,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3300CC").s().p("AhHBGQgUgdAAgmQgBgdAOgaQAOgaAZgOQAXgOAcAAQAXAAAVALQAGADADAAQAEAAADgDQAEgEACgHIAFAAIAFBGIgFAAQgJgggSgOQgRgNgYAAQgUAAgQAKQgRAKgJAXQgKAXAAAhQAAAbAJAVQAJAUASALQASALAWAAQAUAAAPgIQAQgJASgZIAEADQgPAbgVANQgUAMgcAAQgzAAgcglg");
	this.shape_4.setTransform(-157.9,-0.2);

	this.instance = new lib.option();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.212,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.option(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-38,377.6,76.1);


(lib.option2B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().p("AhPCKQAsgRAXgcQAWgbABg0IgOAAIAAAJIgTAGQACgRAAgkQAAgkgCgQIATALIAzAAQAVgxAFgbIAcARIgMAEIgiA3IAcAAIAJgNIAVARIgLAHQAAA8ACAOIgTAJIAAgPIgWAAIAABXQAAAQAQgBIAXAAQAOAAAAgNQACgMABgcIAFAAIADAfQACAPALADQgJASgTAAIgmAAQgcADABgaIAAhdIgUAAQgDA3gXAdQgWAbg5ASgAgDAGIBZAAIAAhAIhZAAgAhhBrQAHgJgBgMIAAhvIgPAAQgJAAgNADIgMgLIAwAAIAKgOIATARIgLAKIAABtIAvgtIAEAEIglAsQgNARgIAOgAhNhVQgGgOgagWIACgEQAcAKALAIQALAIgBALQgCALgCACIgEADQgEAAgHgNgAAHhZQgFgTgQgZIAFgCQAOAKAKALQAJAJACAJQABAIgGAHIgHAGQgGAAgBgOg");
	this.shape.setTransform(54.1,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("AgjB+IgKgbIAbAAQAEAAAAgEIAAjcIAaAAQAMADgLAHIAADhQAAAQgOAAgAiIA9QArg+AKhKIAdAHQAKAEgLADQgOBIgoBDgAAvg/IAXgMQAsA6AXBAIgeAOQgWhDgmg5g");
	this.shape_1.setTransform(23.1,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("AAyCFIgEgXIAfAAQARAAACgWIAGiQIhHAAQgMAigZAdIgTgUQApgpALhNIAZAJQALAEgMACQgEASgGATIBXAAIgGCkQgBAwgmAAgAh/CCIAAjRIAfAAQAHgXAGgeIAdALQAFAEgIABQgEARgKAUIAtAAIAADHIgYAAIAAgPIg1AAIAAAZgAhnBTIA1AAIAAg/Ig1AAgAhngDIA1AAIAAg1Ig1AAgAAIAMIAVgVQAYAVAPAUIgWAYQgRgYgVgUg");
	this.shape_2.setTransform(-7.7,-1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("AhZgCQgUAvgcAgIgEgDQAig2AShSIgIAAQgQAAgNAEIgLgLIAwAAIgBhJIAcAOIgKAJIAAAyIAQAAIANgOIAVAVIgyAAIAAAhQAXALAJAHQAIAHAAAHQAAAEgDAIQgDAHgCAAQgEAAgFgLQgIgRgPgQIAABhIABA8IgTAIIABiRgAAlAwIgoAAQgQAAgNADIgLgLIBQAAIAAgyIgUAAQgQAAgMAEIgLgLIA7AAIAAgtIgVAAQgQAAgMAEIgLgLIBNAAQAWgqAHgfIAaARQgMAGgMARIgXAhIAjAAIAOgOIAWAVIhPAAIAAAtIAiAAIAPgOIAWAVIhHAAIAAAyIAxAAIAQgPIAXAXIhYAAQAAA8ACAaIgUAIIABhegAALhYQgGgRgVgaIACgEQAlAVADAIIAEAKQAAAGgFAHIgGAHQgFAAgDgMg");
	this.shape_3.setTransform(-39.3,-1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3300CC").s().p("AhLCOIAAhyQgWAMgbAIIgNgbQA9gPA7grQgdgdgFgNQgbApgrAVIgLgYQBCgiAShCIAWAIQAHADgIADIgHAPIBSAAIAHgIIAVAQIgJAGQgQAeggAfQApAgBNAPIgJAbQhWgXgpgjQgfAagpAUICYAAIAABxIgZAAIAAgKIhrAAIAAAOgAgzBpIBrAAIAAg5IhrAAgAABgzQAVgUANgVIhEAAQAFAOAdAbg");
	this.shape_4.setTransform(-70,-1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3300CC").s().p("AArBTQgYgvgBhVIiUAAIAAgbICSAAIAAg4IAbAAQAMADgLAHIAAAuIBVAAIAAAbIhVAAQAFBTATAkQAQAdAMAAQAFAAABgIIADgUIAaAMIgEAdQgEAUgSABQglgBgZgxgAh7B4IgGgdQAegDAdgFIAAhFIgwAAIAAgWIB3AAIAAAWIgvAAIAABCQAcgEAkgHIADAWQhDAPhFAMQgBAGgCAAQgCAAgDgEgAA4hrIAVgSQARAIAQAOIgWASQgMgLgUgLg");
	this.shape_5.setTransform(-100.9,-1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3300CC").s().p("AhLCOIAAhyQgWAMgbAIIgMgbQA8gPA7grQgdgdgGgNQgaApgrAVIgLgYQBCgiAShCIAWAIQAHADgIADIgHAPIBSAAIAHgIIAVAQIgJAGQgQAeggAfQApAgBNAPIgJAbQhWgXgpgjQgfAagpAUICYAAIAABxIgZAAIAAgKIhrAAIAAAOgAgzBpIBrAAIAAg5IhrAAgAABgzQAWgUAMgVIhFAAQAFAOAeAbg");
	this.shape_6.setTransform(-132,-1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3300CC").s().p("AhcBnIAAgGIAIAAQANAAAGgIQADgFAAgSIAAiDQABgTgFgFQgGgHgMAAIgIAAIAAgGIBZAAQAYAAAPAEQAXAGAMAOQAMANAAASQAAAQgJAMQgKAMgTAGQAWAEAKAKQAQANAAAVQgBAPgJAOQgKAOgRAGQgRAHgiAAgAgWADIgKABIAABUQARAEAQAAQAcAAAOgMQAOgNAAgSQAAgMgHgLQgGgLgOgGQgPgHgVAAIgQABgAgghYIAABPIAMABIAQABQAVAAAMgFQAKgFAGgJQAGgKAAgMQAAgSgPgNQgOgMgbAAQgPAAgMADg");
	this.shape_7.setTransform(-158.5,-0.2);

	this.instance = new lib.option();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.212,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.option(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-38,377.6,76.1);


(lib.option2A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().p("AAYCIIAAjFIgMAAQgSApgWAVIgXgQQAwgzAMhFIAZAHQAHADgIADQgDAMgJAZIBzAAIAAAYIhXAAIAAAtIBMAAIAAAVIhMAAIAAApIBRAAIAAAWIhRAAIAABEgAhUCIIAAicQgNAUgSAUIgUgUQA2g9ARhIIAaAJQAIAEgJABQgIAdgQAgIAHACQAFAGgIAAIAAC6g");
	this.shape.setTransform(24.3,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("Ag/CKIAAhTQgoAQgYAGIgJgWQBMgTA2ggIh5AAIAAgWIByAAIAAgSIhNAAIAAgXIBNAAIAAgVIARAAQAJAAgHAGIAAAPIA3AAIAAAQIAfgcIASALQAJAGgMAAIguAkIBMAAIAAAWIhrAAIgjAWIBmAAIAABtIgYAAIAAgIIhwAAIAAALgAgnBrIBwAAIAAgWIhwAAgAgnBCIBwAAIAAgUIhwAAgAAGgSIAWAAIAbgSIgxAAgAg4hLIAAgTIhJAAIAAgUIBJAAIAAgYIASAAQALABgIAGIAAARIBEAAIAAgYIASAAQALABgJAGIAAARIBOAAIAAAUIhOAAIAAARIgUAAIAAgRIhEAAIAAATg");
	this.shape_1.setTransform(-6.5,-1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("AgJgdQgyBdhOAuIgCgEQBJg4AuhlIhMAAQgQAAgNAEIgLgLIB/AAIgBhTIAgAOIgOAJIAAA8IBUAAIASgSIAaAZIh0AAQAiBlBWAcIAAAFQgYACgEAOQhQg4gTheIgFAAQAACiACAWIgUAJQABg/AAhsgABKhRQgKgRgagXIACgDQAgALAKAGQAKAHAAAKQAAAEgEAIQgDAIgCAAQgEAAgFgLg");
	this.shape_2.setTransform(-37.3,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("AgnCKIgFgaIAcAAQAFAAAAgGIAAgxIh+AAIAAgXIB+AAIAAgfIATABIAkgUIiAAAIAAgTICUAAIAEgEIAUATQAEAGgKAAQgkAVgiAPIAAAMIB+AAIAAAXIh+AAIAAA+QAAATgSAAgAiDgNIAAhHICvAAIAZg1IAZAMQAFAGgIABIgVAiIA8AAIAABDIgZAAIAAgrIjUAAIAAAvgAgah6IAXgOQARAYAHAOIgZANQgKgVgMgQgAhgh3IAXgNQANAPALATIgZANQgLgVgLgNg");
	this.shape_3.setTransform(-68.2,-1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3300CC").s().p("AiPB2IBmAAIAAjJIgBgtIAcAOIgKAKIAADeIAwAAIAAjIIgBguIAfAOIgNAJIAACuQAuhFARhBIAdAUIgNAHQgsBRgjAjIAAAoIA5AAIAUgUIAaAcIj3AAQgQAAgNADgAhVAuQgFgdgkhMIAEgDQA3BMAEATQADATgHAIQgHAJgDAAQgFAAgDgXg");
	this.shape_4.setTransform(-99.3,-1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3300CC").s().p("AApCHQgLgLgWgOQgVgPgmgSIACgFQApAMAbAMQASgWAegpIhlAAIgIAKIgQgQQAGgEADgGQADgGAIgeIg9AAQgQAAgNAEIgLgLIBmAAQAFgVAEgfIgpAAQgPAAgOADIgLgLIBTAAIAHg3IAYAOIgHAGIgGAjIBGAAIAUgQIAUAYIhvAAIgKA0IB0AAIAUgRIAXAYIigAAQgGAbgGASIBjAAIALgMIAXAXQgQAEgRAQQgRAPgZAbQAbAKABAIIABALQAAAGgCAEQgCAFgBAAQgDAAgGgIg");
	this.shape_5.setTransform(-130.5,-1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3300CC").s().p("AAcBpIAAgFQAMgBAFgEQAEgDAAgFQAAgHgGgOIgNgdIhOAAIgOAfQgFANAAAFQAAAFAFAEQADADAPACIAAAFIhAAAIAAgFQANgDAEgDQAHgIAKgWIBIioIAEAAIBHCqQAJAUAIAHQAGAFANACIAAAFgAgsAZIBGAAIgihSg");
	this.shape_6.setTransform(-157.1,-0.4);

	this.instance = new lib.option();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.212,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.option(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-38,377.6,76.1);


(lib.option1D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().p("AhUCGQAlgFAggLQAfgMARgPIgcgJIgggHIAYgmIgPAAQgQAAgNAEIgLgLIA6AAQAJgSAFgQIAKAFIABgjIAAgUQgJAOgWAUQgYAUgcAMIgCgEQAUgMAUgTQATgUAMgUIgcAAQgPAAgOADIgLgLIBSAAIAAgjIgBggIAZAKIgIAIIAAAxIAvAAIAQgPIAXAXIhNAAQAMASAWAOQAVAOAcADIAAAFQgTADgDAJQgQgFgUgSQgUgTgLgYIgDAAIAAAeIABAdIgSAFIAOAJIgLAEIgLAQIBQAAIAQgQIAXAXIgyAAQgJAbgSAWQAbAHASAJQARAIAAANQAAAMgDAAIgEgBQgIgHgSgLQgRgLgVgIQgWATgjAKQgkALgnACgAgJBHIAzAKQANgQAMgcIg2AAIgWAigAiFgQQAAg3gBgiIARALIAiAAIAIgMIASAPIgJAHIAABUIABAnIgRAHIAAgPIgjAAIAAAfIgRAIQABghAAg1gAh1AYIAjAAIAAhuIgjAAgAgMhWQgFgTgSgTIADgCQAXAJAHAIQAGAHAAAHQAAAGgEAIQgDAHgBAAQgEAAgEgMgAA2hOQAWgdAHgXIAVARQgJACgLALIgaAZg");
	this.shape.setTransform(-36.9,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("AgRCNIAAiSICDAAIAAB+QAAAQgRAAIgUAAIgHgXIAPAAQAFAAAAgEIAAgYIhTAAIAAA3gAAHBDIBTAAIAAgRIhTAAgAAHAfIBTAAIAAgRIhTAAgAhhCMIAAkXIAXAAQANACgLAIIAAENgAiMAJQAKguABgoIAXADQALADgKAFQgCAqgJAmgAgrgUIAAgUIBNAAIAAgRIg6AAIAAgTIA6AAIAAgQIhHAAIAAgTIBHAAIAAgdIAXAAQAKABgIAGIAAAWIBKAAIAAATIhKAAIAAAQIA7AAIAAATIg7AAIAAARIBSAAIAAAUgAhFhNIASgLQAJAMAFAXIgVAKQgFgWgGgMg");
	this.shape_1.setTransform(-68.5,-1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("AgmCEQgVgBAAgUIAAi4IAaAAQAMACgLAIIAACeQABAKAIAAIBAAAQAIAAACgHIAJgtIAeAIIgMAuQgFAZgSAAgAiGBNQATg4ABhAIAeAHQAFAFgIABQgDA9gSA4gAA8gjIAVgQQAeAiAZBGIgbAOQgUhFgdghgAgthsIARgXQAuAcARAVIgSAYQgSgWgsgcg");
	this.shape_2.setTransform(-99.3,-1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("Ag8CLIAAh0QgdAggmATIgKgZQBAggAUgtIhQAAIAAgTIBYAAIAHgUIhLAAIAAgTIBQAAIAFgRQgnABgqAAIgGgTQCMAABBgRIAPAXQAEAIgPgEQg2AGgsABIgFASIB8AAIAAATIiAAAIgIAUICfAAIAAATIilAAIgJATICBAAIAACSIgUAAIAAgLIhwAAIAAANgAgnBrIBwAAIAAgUIhwAAgAgnBEIBwAAIAAgVIhwAAgAgnAcIBwAAIAAgSIhwAAg");
	this.shape_3.setTransform(-130.5,-1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3300CC").s().p("AhmBnIAAgGIAHAAQANAAAGgIQADgFAAgSIAAiDQAAgTgEgFQgGgHgMAAIgHAAIAAgGIBTAAQAtAAAYALQAYAKAPAZQAOAYAAAgQAAAqgaAdQgdAgg7AAgAgshWIAACuQATAEANAAQAiAAAYgZQAXgYAAgqQAAgqgXgYQgYgZgjAAQgNAAgSAEg");
	this.shape_4.setTransform(-157.4,-0.2);

	this.instance = new lib.option();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.212,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.option(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-38,377.6,76.1);


(lib.option1C = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().p("AAAgDQgYBahaApIgSgbQBzgtAAh4IAAg/IAZAAQANADgLAHIAAAyQAIBzBzAxIgOAfQhUglgjheg");
	this.shape.setTransform(155.6,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("AgMCJIAAhBIgvAAIAAgXIAvAAIAAhLQgjBMhPAuIgNgZQBSgtAkhVIhqAAIAAgXIBzAAIAAg2IAWAAQAKABgIAGIAAAvIBzAAIAAAXIhrAAQApBJBPAwIgOAcQhJgugphGIAABLIAxAAIAAAXIgxAAIAABBg");
	this.shape_1.setTransform(124.5,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("AiHBuQAvgUARhBIAbAIQAFAFgJABIgIAWQAXAaAaAJIAAhTIh2AAIAAgWIEEAAIAAAWIh3AAIAAAcIBYAAIAAAXIhYAAIAAAnIB4AAIgGAXIhhAAQhAAAgjgtQgYAmgfAOgAhVgcIAAhoICxAAIAABogAg9gvICAAAIAAgXIiAAAgAg9haICAAAIAAgXIiAAAg");
	this.shape_2.setTransform(93.4,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("AgdB0QBGguAFhxIglAAIAAgXIAmAAIAAhDIATAAQALABgJAGIAAA8IA/AAIAAAXIg/AAIgDAfIAUADQAKABgJAGIAABsQAAAGAHAAIATAAQAHAAgBgGIAAgmIAVAIIAAAiQAAAVgPAAIglAAQgVAAgBgYIAAhvQgOBchAAzgAhcCLIgDgUIATAAQAFAAAAgDIAAheIgaAAIgcAAIAAhHIB2AAIAABHIgsAAIAABhQAAAUgOAAgAhkADIBFAAIAAghIhFAAgAiLBmQATgbALgnIAYAJQAFAFgJABQgJAlgWAegAgoA1IAVgLQAMANAHAVIgVAMQgHgWgMgNgABOhoIAPgPQASAKANATIgQAPQgPgRgPgMgAiJhLIAAgXIA9AAIAAgoIAUAAQAKACgIAGIAAAgIA8AAIAAAXg");
	this.shape_3.setTransform(62.5,-1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3300CC").s().p("AAyCFIgEgXIAfAAQARAAACgWIAGiQIhHAAQgMAigZAdIgTgUQApgpALhNIAZAJQALAEgMACQgEASgGATIBXAAIgGCkQgBAwgmAAgAh/CCIAAjRIAfAAQAHgXAGgeIAdALQAFAEgIABQgEARgKAUIAtAAIAADHIgYAAIAAgPIg1AAIAAAZgAhnBTIA1AAIAAg/Ig1AAgAhngDIA1AAIAAg1Ig1AAgAAIAMIAVgVQAYAVAPAUIgWAYQgRgYgVgUg");
	this.shape_4.setTransform(31.9,-1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3300CC").s().p("AhPCKQAsgRAXgcQAWgbABg0IgOAAIAAAJIgTAGQABgRABgkQgBgkgBgQIATALIA0AAQAUgxAFgbIAcARIgMAEIgiA3IAcAAIAKgNIAUARIgLAHQAAA8ACAOIgTAJIAAgPIgWAAIAABXQAAAQAQgBIAXAAQANAAABgNQACgMABgcIAFAAIADAfQACAPALADQgJASgTAAIglAAQgdADACgaIAAhdIgVAAQgCA3gYAdQgXAbg3ASgAgDAGIBZAAIAAhAIhZAAgAhhBrQAIgJgCgMIAAhvIgPAAQgJAAgNADIgLgLIAvAAIAKgOIATARIgLAKIAABtIAvgtIAEAEIglAsQgNARgIAOgAhMhVQgIgOgZgWIACgEQAcAKALAIQALAIgBALQgCALgDACIgDADQgEAAgGgNgAAHhZQgFgTgPgZIADgCQAPAKAKALQAKAJAAAJQACAIgGAHIgHAGQgGAAgBgOg");
	this.shape_5.setTransform(0.6,-1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3300CC").s().p("AgNAeIAMggIgMAAIAAgbIAbAAIAAAbIgOAgg");
	this.shape_6.setTransform(-31.2,9.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3300CC").s().p("AhNBnIAAgGIAIAAQANAAAFgIQADgFAAgSIAAiDQAAgUgEgEQgGgHgLAAIgIAAIAAgGIBLAAQAbAAAQAGQAPAGALANQALAOAAASQAAAZgQAQQgRAPgeAAIgPgBIgTgDIAAA7QAAAUAFAEQAFAHALAAIAIAAIAAAGgAgThWIAABVIAPABIAJABQAQAAALgLQAMgMAAgUQAAgNgGgLQgFgMgKgFQgKgGgNAAQgHAAgMADg");
	this.shape_7.setTransform(-44.5,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3300CC").s().p("AgrBnIAAgGIAHAAQANAAAGgHQADgFAAgTIAAiDQAAgQgCgFQgBgEgEgCQgHgEgIAAIgHAAIAAgGIBXAAIAAAGIgIAAQgMAAgGAIQgDAEAAATIAACDQAAAQACAFQABAEAFADQAHADAGAAIAIAAIAAAGg");
	this.shape_8.setTransform(-58,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3300CC").s().p("AABBpIhMiwQgGgOgCgCQgEgFgGgCQgFgDgKgBIAAgGIBUAAIAAAGQgOABgEADQgEAEAAAFQAAAIAHAQIAzB3IAwh1QAHgSAAgHQAAgEgEgEQgEgEgLgBIgCgBIAAgGIA/AAIAAAGQgLACgGAFQgIAHgGAQIhHCtg");
	this.shape_9.setTransform(-74.4,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3300CC").s().p("AiICJQArgIAmgRQAmgSARgjIhlAAQgPAAgOAEIgLgLICPAAQAFgcACgYIACgtIAdANIgLAJQgEAvgGAcIBNAAIATgTIAbAaIh9AAIgIAQQBNATASAJQARAJAAAOQAAANgFAAQgCAAgFgFQgMgMgVgLQgUgLgygUQgVAegpAOQgqAOgjAEgAhKAlQgHgRgUgTIADgDQAYAKAIAHQAIAHAAAIQAAAGgDAGQgDAGgDAAQgDAAgEgLgAgngDQgHgOgUgWIADgEIAcAPQAMAHAAAJQAAAEgEAIQgDAGgCAAQgDAAgEgJgABUgTIASggIjAAAQgQAAgNADIgLgKIB4AAIAAgiIg0AAQgQAAgNADIgLgLIBcAAQAAgVgBgUIAdAMIgMAJIAAAUIA6AAIAQgPIAXAXIhhAAIAAAiIBfAAIAMgOIAXAXQgRgBgfAig");
	this.shape_10.setTransform(-101.2,-1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3300CC").s().p("AAsCFIAAiNQgXgdgTgfIAUgPQALAUALAOIAAhTIAXAAQAJABgIAGIAABoQAIARA+AjIgSAZQgjgZgRgPIAAB1gAh6BqQAngZAfg3QgYgVgQgJQgJAUgOARIgWgQQAogxAMhTIAZAHQAHAFgJADIgFAXIAuAAIAFgEIAQAOQAEAEgFADQgTCAhXA8gAhTgbQAQAKAYATQALgbAFgdIguAAg");
	this.shape_11.setTransform(-132.2,-1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3300CC").s().p("AhHBGQgUgdAAgmQgBgdAOgaQAOgaAZgOQAXgOAcAAQAXAAAVALQAGADADAAQAEAAADgDQAEgEACgHIAFAAIAFBGIgFAAQgJgggSgOQgRgNgYAAQgUAAgQAKQgRAKgJAXQgKAXAAAhQAAAbAJAVQAJAUASALQASALAWAAQAUAAAPgIQAQgJASgZIAEADQgPAbgVANQgUAMgcAAQgzAAgcglg");
	this.shape_12.setTransform(-157.9,-0.2);

	this.instance = new lib.option();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.212,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.option(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-38,377.6,76.1);


(lib.option1B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().p("AgyAxQgQgWAAgaQAAgSAKgTQAJgSAQgJQAOgJARAAQAfAAAUAXQAQAVAAAaQAAASgJATQgJATgQAKQgPAJgTAAQgfAAgSgYgAgUg6QgIAFgFAMQgFAMAAATQAAAdAMAWQAMAWATAAQAOAAAKgMQAKgMAAgeQAAgkgQgVQgLgPgPAAQgIAAgJAFg");
	this.shape.setTransform(133,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("Ag6BbQgLgHAAgIQAAgEACgEQACgFAIgKIAQgQQgIgFgDgEQgEgEAAgEQAAgGAFgHQAEgHAQgMQgNgGgHgLQgHgLAAgOQAAgUAQgPQAPgPAYAAQATAAAPAKIAdAAIAIAAIABABIABAFIgBAGIgBABIgIAAIgSAAQAJALAAARQAAAUgPANQgPAOgYAAQgKAAgLgDQgHAGgCADQgCAEAAADQAAADACACQADADAHABIAVABQAeABAJABQAPACAIAJQAIAIAAAMQAAASgQAPQgXAWglAAQgeAAgUgOgAgsA0QgDAHAAAFQAAAIAIAFQAQAJAbAAQAbAAANgJQANgKAAgLQAAgIgHgDQgIgDgYgBQghgBgSgCQgHAHgEAHgAgYhYQgHAJAAATQAAAYAKANQAIAKAMAAQAKAAAIgJQAHgJAAgSQAAgYgKgOQgIgKgLAAQgLAAgIAJg");
	this.shape_1.setTransform(117.7,6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("AgbBFIgIgCQgEAAgCAEIgFAAIAAgxIAFAAQAFAVAMALQAMALANAAQALAAAHgGQAGgHAAgIQAAgLgHgHQgIgHgVgLQgVgKgHgJQgHgIAAgNQAAgRAMgMQALgLATAAQAHAAAMADIAKACIAEgBIADgEIAFAAIAAAvIgFAAQgGgXgJgIQgJgIgNAAQgKAAgHAGQgGAGAAAGQAAAJAFAGQAEAGAPAHIAVALQAeAOAAAYQAAATgOAMQgOALgSAAQgMAAgQgEg");
	this.shape_2.setTransform(96.2,3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("AgGBZQgGgEgEgHQgDgHAAgPIAAhcIgWAAIAAgFQAJgEAIgIQAJgIAHgKIAJgVIAEAAIAAAtIAhAAIAAALIghAAIAABZQAAANAEAFQAEAEAGAAQAFAAAFgDQAEgDADgGIAGAAQgFAPgKAIQgKAHgKAAQgHAAgGgEg");
	this.shape_3.setTransform(85.9,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3300CC").s().p("AgoA3QgSgUAAghQAAgjATgUQASgTAaAAQAYAAAPAPQAPAQAAAZIhfAAQAAAeAPARQAPASATAAQAOAAAKgHQAKgIAHgSIAFADQgEAUgPASQgPAQgXAAQgYAAgSgSgAgZg0QgKAKgBARIA/AAQgBgNgCgGQgEgIgHgFQgIgEgHgBQgNAAgKAKg");
	this.shape_4.setTransform(74.7,3.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3300CC").s().p("AggBsIAAgGQAKAAAEgCQADgCACgFQACgEAAgNIAAh9QAAgXgBgGQgCgFgCgCQgCgCgDAAQgFAAgGACIgDgFIApgQIAHAAIAAC2QAAANACAEQABAEAEADQAFACAKAAIAAAGg");
	this.shape_5.setTransform(63.5,-0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3300CC").s().p("AgNAeIAMggIgMAAIAAgbIAbAAIAAAbIgOAgg");
	this.shape_6.setTransform(42.9,9.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3300CC").s().p("AgeBXIgCgzIARAKIAmAAIAAgoIgjAAQgQABgOAEIgLgLIBMAAIAAgnIgEAAQgPAAgNAFIgKgLIBHAAIANgOIAVAUIgwAAIAAAnIAuAAIAQgPIAYAVIhWAAIAAAoIAmAAIAIgLIAUAOIgJAIIAAAlIABAmIgRAIIAAgXIheAAIAAARIgRAHIACg2gAgPBuIBeAAIAAg5IheAAgAiFgSIgBhWIARAKIAnAAIAHgLIAUAPIgKAIIAABeQAAAUABARIgRAIIAAgYIgoAAIAAAbIgRAIIABhWgAh1AaIAoAAIAAhxIgoAAgAg7gZQAggaAUgcQATgdAMggIAYAPIgLAGQATAfAZARQAaARAbADIAAAEQgSACgFAMQgdgOgSgVQgSgUgMgaQgYApgXAUQgXAUgUALg");
	this.shape_7.setTransform(23.5,-1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3300CC").s().p("AAICHQgsAAAHgcQAIgaBFhQIg9AAIAAgWIBPAAIAFgGIAYAXIgQALQg7A+gVAlQgEAHAQAAIBLAAQAOgBADgRIADgZIAcAHIgFAZQgGAhgdAAgAiFBXIAAi6IBSAAIAABBQAmgdAQhIIAbAJQAEAEgIACQgGAYgGAMIBwAAIAAAXIh5AAQgQAfgZAVIgPgWIAABsIgZAAIAAgLIghAAIAAAVgAhtAqIAhAAIAAh1IghAAg");
	this.shape_8.setTransform(-7.7,-1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3300CC").s().p("Ah7BtQBTgFAlgUQgbgHgbgEIgIAIIgVgMIAhglIhUAAIAAgTIBjAAIATgaIhAAAIAAAJIgUAAIAAhRIA/AAIAAgbIhaAAIAAgTIEDAAIAAATIhZAAIAAAbIA/AAIAABQIgUAAIAAgIIhaAAIAKAHQAGADgJACIgLAOICVAAIAAATIg+AAQgOAZgVATQAnALAsAVIgPAVQgkgTgzgRQgpAfhkAIgAgsA4QAcADAhAIQAUgOAKgVIhGAAgAAoggIArAAIAAgiIgrAAgAgUggIAoAAIAAgiIgoAAgAhTggIArAAIAAgiIgrAAgAgUhVIAoAAIAAgbIgoAAg");
	this.shape_9.setTransform(-39,-0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3300CC").s().p("AgnB9IgFgbIAaAAQAFABAAgFIAAiXIAVAEQAngbARgQIixAAIAAgYIDGAAIAFgFIAXAXQADAFgJABQgiAfg7AkIAACJQAAASgQgBg");
	this.shape_10.setTransform(-69.9,-0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3300CC").s().p("AAaCFIgGgbIAXAAQAFAAAAgFIAAhVIhAAAIAAgWIBAAAIAAgzIAIACIAcglIhbAAIAAgXIBrAAIAFgFIAUAVQAHAGgMABIgwAxIAAAlIBAAAIAAAWIhAAAIAABfQAAAWgQAAgAiHBvQAogaATgaQgBgDgXgOIgFAOIgXgJQARgvAIgzIgeAAIAAgXIAiAAIAIg6IAaAEQAGABgHAGIgJAvIAdAAIAEgGIAXAPIgEAGQgGBJgQAkIAjAdIgPAYQgUgTgMgKQgWAggnAbgAheAVQALAFARALQANgjAFg1IgfAAIgPBIg");
	this.shape_11.setTransform(-100.7,-1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3300CC").s().p("AgrCJQgWAAAAgWIAAhCIAXAAQAJAAgIAHIAAAxQAAAJAHAAIBNAAQAKAAAEgZIAYAJQgFAngWAAgAiAB0QAUgeAFggIAYAKQAIAEgJACQgIAggRAdgABJBFIAVgSQAYAWATAhIgWARQgPgegbgYgAgcAvIARgRQAWATASAaIgVARQgOgZgWgUgABjAjIAAgHIhHAAIAAAHIgUAAIAAibIBvAAIAACbgAAcAIIBHAAIAAgXIhHAAgAAcgiIBHAAIAAgYIhHAAgAAchNIBHAAIAAgYIhHAAgAhIAiIAAhIQgTAdgeAXIgPgUQAtgkASgiIg0AAIAAgYIA1AAIAAgkIAWAAQALACgJAFIAAAdIAsAAIAAAYIgsAAIAAAPQAfAOARARIgOAWQgMgOgWgOIAABGg");
	this.shape_12.setTransform(-132.3,-1.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3300CC").s().p("AhcBnIAAgGIAIAAQANAAAGgIQADgFAAgSIAAiDQABgTgFgFQgGgHgMAAIgIAAIAAgGIBZAAQAYAAAPAEQAXAGAMAOQAMANAAASQAAAQgJAMQgKAMgTAGQAWAEAKAKQAQANAAAVQgBAPgJAOQgKAOgRAGQgRAHgiAAgAgWADIgKABIAABUQARAEAQAAQAcAAAOgMQAOgNAAgSQAAgMgHgLQgGgLgOgGQgPgHgVAAIgQABgAgghYIAABPIAMABIAQABQAVAAAMgFQAKgFAGgJQAGgKAAgMQAAgSgPgNQgOgMgbAAQgPAAgMADg");
	this.shape_13.setTransform(-158.5,-0.2);

	this.instance = new lib.option();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.212,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.option(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-38,377.6,76.1);


(lib.option1A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().p("AA2B0IABgFIAgAGQAJACAFgIQAFgIAFhOIhZAAIgKAKIgOgNIAHgGQAAhmgBgUIAQAJIARAAQAJgaABgSIAWALQgKAGgPAbIA3AAIAKgLIASAOIgKAGQgDA8gEAOQgFAOgWADQAAgMgcgIIACgFIAbAEQAIABADgGQADgGADg9IhRAAIAABsIBZAAIALgLIAPAQIgJAGQgDA7gDARQgCAQgIAJQgJAJgPADQABgOghgMgAhTAcIgiAAIAAANIgRAGQABgSAAhHQAAhHgBgKIARALIBTAAIAKgLIAQAQIgJAGIAABiIABAnIgRAHIAAgPIgjAAQAABUAAAWIgRAIQACg3AAg7gAhEAUIAjAAIAAg6IgjAAgAh1AUIAiAAIAAg6IgiAAgAhEgtIAjAAIAAg8IgjAAgAh1gtIAiAAIAAg8IgiAAgAgcBBIBcAAIAPgNIAUAVIhYAAQgOAAgNADgAA7goQgEgPgPgUIADgDQASALAHAHQAGAIABAEQAAAGgGAGQgEAFgBAAQgEAAgBgJg");
	this.shape.setTransform(87,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("AhjCKIAAiXQgJAOgPARIgOgXQApg0ANhQIAdAGQAEAEgJACQgGAhgNAhQAPAGgMADIAAC8gAg/B8IAAgYIAxAAIAOhkIgsAAIAAgWIAtAAIAHhGIg3AAIAAgYICsAAIAAAYIhbAAIgIBGIBNAAIgFB6IAoAAIAAAYgAALBkIA8AAIAGhkIg0AAg");
	this.shape_1.setTransform(55.4,-0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("AhPCEQAvgcATgkQASgiAHgwQAHgwgBhLIAdAOIgKAHQAAAdAFAeQAEAfAHAcQAHAeASAhQASAhAgAQIAAAEQgRAAgJALQgbgdgNggQgOgfgFgfQgGgegDgyQgBAxgMArQgLAtgWAbQgWAbgrAUgAh9gIQAAhhgBgTIARAKIA1AAIAMgLIASASIgMAIIgnBKQAPALANAPQAOAPACATQACASgJAPQgKAPgYAJQgFgUgZgIIAAgGQAUAGALAAQAGgBAIgCQAIgCgBgaQAAgZggggIAdhSIg2AAIAADrIgSAIQACgxAAhgg");
	this.shape_2.setTransform(25.6,-1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("AAyCFIgEgXIAfAAQARAAACgWIAGiQIhHAAQgMAigZAdIgTgUQApgpALhNIAZAJQALAEgMACQgEASgGATIBXAAIgGCkQgBAwgmAAgAh/CCIAAjRIAfAAQAHgXAGgeIAdALQAFAEgIABQgEARgKAUIAtAAIAADHIgYAAIAAgPIg1AAIAAAZgAhnBTIA1AAIAAg/Ig1AAgAhngDIA1AAIAAg1Ig1AAgAAIAMIAVgVQAYAVAPAUIgWAYQgRgYgVgUg");
	this.shape_3.setTransform(-6,-1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3300CC").s().p("Ah4BrQCFgCA+huIAXAUQAIAIgPAAQhJBth+ADgAgpA5IgDgbIAWAAQAGAAAAgEIAAihIAZAAQAMADgLAHIAACmQAAAQgQAAgAiKALQAkgfAXhCIAcAMQAFAFgIABQgUBCgrAlgAAuhHIARgSQAqAYAhAxIgWAVQglgvghgdg");
	this.shape_4.setTransform(-37,-0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3300CC").s().p("AAAgDQgYBahaApIgSgbQBzgtAAh4IAAg/IAZAAQANADgLAHIAAAyQAIBzBzAxIgOAfQhUglgjheg");
	this.shape_5.setTransform(-68.2,-1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3300CC").s().p("AgzB1QA8gZAAgtIgvARQgCAIgFgEIgGgZIA9gRIAAgcIgpAAIAAgYIApAAIAAgmIguAAIAAgYIAuAAIAAgwIAXAAQAKABgIAHIAACsQgBBAhIAhgAhyCFIgDgXIARAAQABAAABAAQAAAAABgBQAAAAAAgBQAAgBAAAAIAAhOIgcAGQAAAKgGgFIgFgdIAngIIAAg5IggAAIAAgYIAgAAIAAg+IAYAAQAJACgIAGIAAA2IAYAAIAAAYIgYAAIAAA2IAcgFIAGATIgiAJIAABaQgBAUgSAAgAA2CBIAAkJIAXAAQAKABgJAHIAAAoIA0AAIAAAYIg0AAIAAAmIAtAAIAAAYIgtAAIAAAlIA7AAIAAAXIg7AAIAABHg");
	this.shape_6.setTransform(-99.4,-0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3300CC").s().p("ABWBuIi+ARQgCAJgEgEIgJgiIApgBQAbgqATgwIhlAAIAAgWIB6AAIAAg0IhfAAIAAgXIBfAAIAAgsIAWAAQAKACgJAFIAAAlIBfAAIAAAXIhfAAIAAA0IB6AAIAAAWIiFAAQgYAzgaAnIB4gIQgXgagSgQIASgSQAnAcAsA6IgaATg");
	this.shape_7.setTransform(-130.5,-1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3300CC").s().p("AAcBpIAAgFQAMgBAFgEQAEgDAAgFQAAgHgGgOIgNgdIhOAAIgOAfQgFANAAAFQAAAFAFAEQADADAPACIAAAFIhAAAIAAgFQANgDAEgDQAHgIAKgWIBIioIAEAAIBHCqQAJAUAIAHQAGAFANACIAAAFgAgsAZIBGAAIgihSg");
	this.shape_8.setTransform(-157.1,-0.4);

	this.instance = new lib.option();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.212,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.option(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-38,377.6,76.1);


(lib.option0D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().p("AhUCGQAlgFAggLQAfgMARgPIgcgJIgggHIAYgmIgPAAQgQAAgNAEIgLgLIA6AAQAJgSAFgQIAKAFIABgjIAAgUQgJAOgWAUQgYAUgcAMIgCgEQAUgMAUgTQATgUAMgUIgcAAQgPAAgOADIgLgLIBSAAIAAgjIgBggIAZAKIgIAIIAAAxIAvAAIAQgPIAXAXIhNAAQAMASAWAOQAVAOAcADIAAAFQgTADgDAJQgQgFgUgSQgUgTgLgYIgDAAIAAAeIABAdIgSAFIAOAJIgLAEIgLAQIBQAAIAQgQIAXAXIgyAAQgJAbgSAWQAbAHASAJQARAIAAANQAAAMgDAAIgEgBQgIgHgSgLQgRgLgVgIQgWATgjAKQgkALgnACgAgJBHIAzAKQANgQAMgcIg2AAIgWAigAiFgQQAAg3gBgiIARALIAiAAIAIgMIASAPIgJAHIAABUIABAnIgRAHIAAgPIgjAAIAAAfIgRAIQABghAAg1gAh1AYIAjAAIAAhuIgjAAgAgMhWQgFgTgSgTIADgCQAXAJAHAIQAGAHAAAHQAAAGgEAIQgDAHgBAAQgEAAgEgMgAA2hOQAWgdAHgXIAVARQgJACgLALIgaAZg");
	this.shape.setTransform(-36.9,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("AgRCNIAAiSICDAAIAAB+QAAAQgRAAIgUAAIgHgXIAPAAQAFAAAAgEIAAgYIhTAAIAAA3gAAHBDIBTAAIAAgRIhTAAgAAHAfIBTAAIAAgRIhTAAgAhhCMIAAkXIAXAAQANACgLAIIAAENgAiMAJQAKguABgoIAXADQALADgKAFQgCAqgJAmgAgrgUIAAgUIBNAAIAAgRIg6AAIAAgTIA6AAIAAgQIhHAAIAAgTIBHAAIAAgdIAXAAQAKABgIAGIAAAWIBKAAIAAATIhKAAIAAAQIA7AAIAAATIg7AAIAAARIBSAAIAAAUgAhFhNIASgLQAJAMAFAXIgVAKQgFgWgGgMg");
	this.shape_1.setTransform(-68.5,-1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("AgmCEQgVgBAAgUIAAi4IAaAAQAMACgLAIIAACeQABAKAIAAIBAAAQAIAAACgHIAJgtIAeAIIgMAuQgFAZgSAAgAiGBNQATg4ABhAIAeAHQAFAFgIABQgDA9gSA4gAA8gjIAVgQQAeAiAZBGIgbAOQgUhFgdghgAgthsIARgXQAuAcARAVIgSAYQgSgWgsgcg");
	this.shape_2.setTransform(-99.3,-1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("Ag8CLIAAh0QgdAggmATIgKgZQBAggAUgtIhQAAIAAgTIBYAAIAHgUIhLAAIAAgTIBQAAIAFgRQgnABgqAAIgGgTQCMAABBgRIAPAXQAEAIgPgEQg2AGgsABIgFASIB8AAIAAATIiAAAIgIAUICfAAIAAATIilAAIgJATICBAAIAACSIgUAAIAAgLIhwAAIAAANgAgnBrIBwAAIAAgUIhwAAgAgnBEIBwAAIAAgVIhwAAgAgnAcIBwAAIAAgSIhwAAg");
	this.shape_3.setTransform(-130.5,-1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3300CC").s().p("AhmBnIAAgGIAHAAQANAAAGgIQADgFAAgSIAAiDQAAgTgEgFQgGgHgMAAIgHAAIAAgGIBTAAQAtAAAYALQAYAKAPAZQAOAYAAAgQAAAqgaAdQgdAgg7AAgAgshWIAACuQATAEANAAQAiAAAYgZQAXgYAAgqQAAgqgXgYQgYgZgjAAQgNAAgSAEg");
	this.shape_4.setTransform(-157.4,-0.2);

	this.instance = new lib.option();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.212,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.option(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-38,377.6,76.1);


(lib.option0C = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().p("Ag8CLIAAh0QgdAggmATIgKgZQBAggAUgtIhQAAIAAgTIBYAAIAHgUIhLAAIAAgTIBQAAIAFgRQgnABgqAAIgGgTQCMAABBgRIAPAXQAEAIgPgEQg2AGgsABIgFASIB8AAIAAATIiAAAIgIAUICfAAIAAATIilAAIgJATICBAAIAACSIgUAAIAAgLIhwAAIAAANgAgnBrIBwAAIAAgUIhwAAgAgnBEIBwAAIAAgVIhwAAgAgnAcIBwAAIAAgSIhwAAg");
	this.shape.setTransform(53.8,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("AiHBzQA3gfAChUIAeAGQAFAFgIABQgBAPgFAXQASAdAdAQIAAhwIh+AAIAAgXIB8AAIAAgnIhaAAIAAgXIBaAAIAAgkIAWAAQAJABgIAGIAAAdIBXAAIAAAXIhXAAIAAAnIB6AAIAAAXIh4AAIAAAmIBVAAIAAAXIhVAAIAAA6IB8AAIgGAaIhsAAQguAAgrg1QgPArgmAVg");
	this.shape_1.setTransform(23.3,-1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("AiHBzQA3gfAChUIAeAGQAFAFgIABQgBAPgFAXQASAdAdAQIAAhwIh+AAIAAgXIB8AAIAAgnIhaAAIAAgXIBaAAIAAgkIAWAAQAJABgIAGIAAAdIBXAAIAAAXIhXAAIAAAnIB6AAIAAAXIh4AAIAAAmIBVAAIAAAXIhVAAIAAA6IB8AAIgGAaIhsAAQguAAgrg1QgPArgmAVg");
	this.shape_2.setTransform(-7.7,-1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("AgvCJIAAiCICVAAIAAB+IgYAAIAAgNIhlAAIAAARgAgXBhIBlAAIAAhDIhlAAgAiHBsQAggnAAg0IAAiHIAZAEQBqgEBDgSIASAbQAKALgXgIQhlAOhNABIAAAoIDWAAIAAAXIjWAAIAAA1QAAA5glAtg");
	this.shape_3.setTransform(-39.2,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3300CC").s().p("AheCJIAAh9QgOAQgPAKIgPgYQAygjAVg5IAZASQAFAEgMACIgVAkIAACbgAg4B8IAAgXIBVAAIAAhGIg8AAIAAgXIA8AAIAAg8IhDAAIAAgXIClAAIAAAXIhKAAIAAA8IBAAAIAAAXIhAAAIAABGIBWAAIAAAXgAiGhCQAngcAYgpIAXASQAFAEgMACQgVAjgqAhgAAEh0IATgUQAeATAMARIgVAXQgPgXgZgQg");
	this.shape_4.setTransform(-70.1,-1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3300CC").s().p("AiHBuQAvgUARhBIAbAIQAFAFgJABIgIAWQAXAaAaAJIAAhTIh2AAIAAgWIEEAAIAAAWIh3AAIAAAcIBYAAIAAAXIhYAAIAAAnIB4AAIgGAXIhhAAQhAAAgjgtQgYAmgfAOgAhVgcIAAhoICxAAIAABogAg9gvICAAAIAAgXIiAAAgAg9haICAAAIAAgXIiAAAg");
	this.shape_5.setTransform(-101.1,-0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3300CC").s().p("AAeCAQgigCgWgHQgVgGgPgPQgQgOgEgCQgEgCgOAQQgOAQgHAOIgRgQIAvgjIAAhgIgLAAQgQAAgNADIgLgKIAvAAIAOgNIARARIgLAGIAABdQANAOATAKQAUAKAjABQAkABAhgBQAhgBAdgFIAAAFQgXAEgBARQg2AAgjgCgAATghQggAzg1AlIgCgFQAygvAXgrQAYgqAFgRIg2AAQgJAAgOAEIgKgKICVAAIAOgQIAVAWIhdAAIAUAOIgLAEIgWAlIARAIIgHAIQAABlABAWIgSAIIABiIgABuAnQgIgPgOgOQgNgOgUgQIACgDQAfAPAUANQATAOADALQACALgEAEQgEAEgDAAQgFABgGgLgAhchZQgFgSgNgUIACgCQAPAKAKAJQALALAAAIQgBAKgEADQgEAEgDAAQgFAAgDgPg");
	this.shape_6.setTransform(-132.2,-1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3300CC").s().p("AhHBGQgUgdAAgmQgBgdAOgaQAOgaAZgOQAXgOAcAAQAXAAAVALQAGADADAAQAEAAADgDQAEgEACgHIAFAAIAFBGIgFAAQgJgggSgOQgRgNgYAAQgUAAgQAKQgRAKgJAXQgKAXAAAhQAAAbAJAVQAJAUASALQASALAWAAQAUAAAPgIQAQgJASgZIAEADQgPAbgVANQgUAMgcAAQgzAAgcglg");
	this.shape_7.setTransform(-157.9,-0.2);

	this.instance = new lib.option();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.212,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.option(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-38,377.6,76.1);


(lib.option0B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().p("AgfAYIgBhpIARAJIAyAAQAAgjgBggIAcAMIgKAHIAAAwIAyAAIAIgMIAUAPIgLAKIAACiQABAagbAKQAAgOgigKIAAgGQAXAEALAAQALAAgBgWIAAibIgzAAQgBATgFAfQAoAfACAIIADAMQAAAIgEAGQgDAIgDAAQgFgBgDgQQgGgVgXgeQgQAwgiAdIgFgCQAWgaALggQAMgeABgqIgyAAIAADFIgRAHIABh0gAh/gQQAAg9gCgUIAUALIAnAAIAJgMIASAOIgJAJIAABZIABArIgRAIIAAgbIgsAAIAAAkIgRAIQACglAAg9gAhwAfIAsAAIAAhtIgsAAg");
	this.shape.setTransform(167.7,-1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("AAfAjQgpA8hFAgIgCgFQBIgsAdg7IgtAAQgQAAgNAEIgLgLIBgAAIAAglIgsAAIAAAMIgRAGIABhFIgBg9IASAKIBmAAIAKgLIASAQIgKAIIABBdIgRAIIAAgMIguAAIAAAlIA6AAIARgQIAVAXIhXAAQAbA+A9ARIAAAFQgUABgFAOQg3glgOg+IgDAAQAABbABAUIgSAJQACgpAAg/gAAuggIAuAAIAAgnIguAAgAgNggIAsAAIAAgnIgsAAgAAuhOIAuAAIAAgqIguAAgAgNhOIAsAAIAAgqIgsAAgAhpBhQAGgHgBgTIAAhnIgIAAQgLgBgNAEIgLgLIApAAIAIgMIATAQIgJAIIAABuIA2gtIADADQgZAbgPATQgRARgGALgAhdheQgGgQgUgUIACgEQAbAMAIAHQAJAGAAAJQgBAIgEAFQgEAEgCAAQgGAAgDgLg");
	this.shape_1.setTransform(136.5,-0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("AhJBtQA0gYAAg7IAAiZIAbAIIBngOIAQAVQAIANgPgIIhwAKIAAAzICBAAIAAAbIgzAAIAACRIgbAAIAAiRIgzAAIAAAuQAABJg/AjgAiGBQIAAjAIBWAAIAACeIg9AAIAAAigAhtAXIAkAAIAAhvIgkAAg");
	this.shape_2.setTransform(105.8,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("AAaCFIgGgbIAXAAQAFAAAAgFIAAhVIhAAAIAAgWIBAAAIAAgzIAIACIAcglIhbAAIAAgXIBrAAIAFgFIAUAVQAHAGgMABIgwAxIAAAlIBAAAIAAAWIhAAAIAABfQAAAWgQAAgAiHBvQAogaATgaQgBgDgXgOIgFAOIgXgJQARgvAIgzIgeAAIAAgXIAiAAIAIg6IAaAEQAGABgHAGIgJAvIAdAAIAEgGIAXAPIgEAGQgGBJgQAkIAjAdIgPAYQgUgTgMgKQgWAggnAbgAheAVQALAFARALQANgjAFg1IgfAAIgPBIg");
	this.shape_3.setTransform(74.9,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3300CC").s().p("AAaCFIgGgbIAXAAQAFAAAAgFIAAhVIhAAAIAAgWIBAAAIAAgzIAIACIAcglIhbAAIAAgXIBrAAIAFgFIAUAVQAHAGgMABIgwAxIAAAlIBAAAIAAAWIhAAAIAABfQAAAWgQAAgAiHBvQAogaATgaQgBgDgXgOIgFAOIgXgJQARgvAIgzIgeAAIAAgXIAiAAIAIg6IAaAEQAGABgHAGIgJAvIAdAAIAEgGIAXAPIgEAGQgGBJgQAkIAjAdIgPAYQgUgTgMgKQgWAggnAbgAheAVQALAFARALQANgjAFg1IgfAAIgPBIg");
	this.shape_4.setTransform(43.9,-1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3300CC").s().p("AgNAeIAMggIgMAAIAAgbIAbAAIAAAbIgOAgg");
	this.shape_5.setTransform(11.9,9.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3300CC").s().p("AiECCIAAgXIB2AAIAAgvIhcAAIAAgXIBcAAIAAgrIgSATQgUgZgSgMQgTAcgbAWIgRgVQA1goAKhFIAYAGQAIADgIADQgEASgLAdQAXAKAYAXIAAh1IAWAAQAKABgIAGIAAB6QAqgkAMhGIAYAFQAJACgJAEIgMArQAgASAaAcIgTAUQgXgagYgSQgUAigUARIgSgSIAAAiIBfAAIAAAXIhfAAIAAAvIB5AAIAAAXg");
	this.shape_6.setTransform(-7.9,-1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3300CC").s().p("AhwCLIAAi+IBmAAIAACnQAAAVgTAAIgYAAIgHgXIAWAAQABAAABAAQAAgBABAAQAAgBABAAQAAgBAAgBIAAgrIg1AAIAABIgAhXAsIA1AAIAAgaIg1AAgAhXgEIA1AAIAAgYIg1AAgABECIIgFgXIAXAAQABAAABAAQAAgBABAAQAAgBABAAQAAgBAAgBIAAikIAXAAQAMADgLAHIAACgQAAAVgUAAgAAYBdIAAiKIAYAAIAACKgAiKhFIAAgXIBSAAQgHgRgKgMIAWgMQANANAOAcIArAAQAOgXAIgXIAcAKQAFAEgJACIgSAeIBcAAIAAAXg");
	this.shape_7.setTransform(-39.2,-1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3300CC").s().p("AheCJIAAh9QgOAQgPAKIgPgYQAygjAVg5IAZASQAFAEgMACIgVAkIAACbgAg4B8IAAgXIBVAAIAAhGIg8AAIAAgXIA8AAIAAg8IhDAAIAAgXIClAAIAAAXIhKAAIAAA8IBAAAIAAAXIhAAAIAABGIBWAAIAAAXgAiGhCQAngcAYgpIAXASQAFAEgMACQgVAjgqAhgAAEh0IATgUQAeATAMARIgVAXQgPgXgZgQg");
	this.shape_8.setTransform(-70.1,-1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3300CC").s().p("AiJCFIAAgTICAAAIAAgPIhaAAIAAgTIBaAAIAAgNIgpAAIgqAAIAAhKIC3AAIAABKIhRAAIAAANIBZAAIAAATIhZAAIAAAPICAAAIAAATgAAKA0IA9AAIAAgQIg9AAgAhHA0IA+AAIAAgQIg+AAgAAKAWIA9AAIAAgQIg9AAgAhHAWIA+AAIAAgQIg+AAgAiFgWIAAgTIELAAIAAATgAhcg4IAAhMIC3AAIAABMgAhHhGICOAAIAAgRIiOAAgAhHhmICOAAIAAgQIiOAAg");
	this.shape_9.setTransform(-101,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3300CC").s().p("AhBBSIALgUQBIAQAyAcIgOAWQgygehFgQgAiKBcQAsgmAAhNIAAhoIDCAAIAABhIgXAAIAAgKIgeAAQAKBKBTAjIgNAcQhegtgJhcIhfAAIAAAaQAABQgwAugAhHg/ICUAAIAAgpIiUAAgAguAWIAMgUQAjALAiASIgLAXQgigVgkgLg");
	this.shape_10.setTransform(-132,-0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3300CC").s().p("AhcBnIAAgGIAIAAQANAAAGgIQADgFAAgSIAAiDQABgTgFgFQgGgHgMAAIgIAAIAAgGIBZAAQAYAAAPAEQAXAGAMAOQAMANAAASQAAAQgJAMQgKAMgTAGQAWAEAKAKQAQANAAAVQgBAPgJAOQgKAOgRAGQgRAHgiAAgAgWADIgKABIAABUQARAEAQAAQAcAAAOgMQAOgNAAgSQAAgMgHgLQgGgLgOgGQgPgHgVAAIgQABgAgghYIAABPIAMABIAQABQAVAAAMgFQAKgFAGgJQAGgKAAgMQAAgSgPgNQgOgMgbAAQgPAAgMADg");
	this.shape_11.setTransform(-158.5,-0.2);

	this.instance = new lib.option();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.212,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.option(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-38,377.6,76.1);


(lib.option0A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().p("Ah9CCIAAgXIBvAAIAAg5IhNAAIAAgXIBNAAIAAgpIhOAAIAAgXIC3AAIAAAXIhRAAIAAApIBSAAIAAAXIhSAAIAAA5IB0AAIAAAXgAAZBJIAUgUQAUANAQASIgUAVQgRgTgTgNgAh8gjIAAg8IBtAAIAAgiIAaAAQAMACgLAHIAAAZIBxAAIAAA6IgZAAIAAgjIjIAAIAAAlg");
	this.shape.setTransform(148.8,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("Ah9CCIAAgXIBvAAIAAg5IhNAAIAAgXIBNAAIAAgpIhOAAIAAgXIC3AAIAAAXIhRAAIAAApIBSAAIAAAXIhSAAIAAA5IB0AAIAAAXgAAZBJIAUgUQAUANAQASIgUAVQgRgTgTgNgAh8gjIAAg8IBtAAIAAgiIAaAAQAMACgLAHIAAAZIBxAAIAAA6IgZAAIAAgjIjIAAIAAAlg");
	this.shape_1.setTransform(117.8,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("AgMCJIAAhBIgvAAIAAgXIAvAAIAAhLQgjBMhOAuIgOgZQBTgtAihVIhpAAIAAgXIBzAAIAAg2IAWAAQAKABgIAGIAAAvIB0AAIAAAXIhsAAQApBJBPAwIgNAcQhLgugohGIAABLIAxAAIAAAXIgxAAIAABBg");
	this.shape_2.setTransform(86.6,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("AAyCFIgEgXIAfAAQARAAACgWIAGiQIhHAAQgMAigZAdIgTgUQApgpALhNIAZAJQALAEgMACQgEASgGATIBXAAIgGCkQgBAwgmAAgAh/CCIAAjRIAfAAQAHgXAGgeIAdALQAFAEgIABQgEARgKAUIAtAAIAADHIgYAAIAAgPIg1AAIAAAZgAhnBTIA1AAIAAg/Ig1AAgAhngDIA1AAIAAg1Ig1AAgAAIAMIAVgVQAYAVAPAUIgWAYQgRgYgVgUg");
	this.shape_3.setTransform(56,-1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3300CC").s().p("AgzB1QA8gZAAgtIgwARQgBAIgEgEIgHgZIA9gRIAAgcIgpAAIAAgYIApAAIAAgmIguAAIAAgYIAuAAIAAgwIAXAAQAKABgIAHIAACsQAABAhKAhgAhyCFIgDgXIARAAQABAAABAAQAAAAABgBQAAAAAAgBQAAgBAAAAIAAhOIgbAGQgBAKgGgFIgFgdIAngIIAAg5IghAAIAAgYIAhAAIAAg+IAYAAQAJACgIAGIAAA2IAYAAIAAAYIgYAAIAAA2IAdgFIAEATIghAJIAABaQAAAUgTAAgAA2CBIAAkJIAXAAQAKABgJAHIAAAoIA0AAIAAAYIg0AAIAAAmIAtAAIAAAYIgtAAIAAAlIA7AAIAAAXIg7AAIAABHg");
	this.shape_4.setTransform(24.6,-0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3300CC").s().p("Ah/ANIAAgZID/AAIAAAZg");
	this.shape_5.setTransform(-6.7,-1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3300CC").s().p("AgDCMIAAhCQgqAuhBAQIgLgYQBAgOApgpIg+AAIgCAJIgYgFQAJgigBggIBdAAIAAgVIhjAAIAAgTIDNAAIAAA7IhSAAIAAAYIBrAAIgIA5QgEAagVgBIgfAAIgCgWIAYAAQAJAAABgJIAFggIhQAAIAABTgAhKAmIBHAAIAAgYIhFAAIgCAYgAAVgFIA6AAIAAgVIg6AAgAiHhCQAfgcAQgsIAXAJQAEAEgIACIgGANIBKAAIAAAXIgmAAIAMAZIgZAFIgKgeIgYAAQgPAZgRAOgAgJhCQAZgeAKgrIAYAHQAFAFgJACIgFAPIBfAAIAAAXIg3AAIAOAXIgcAHIgLgeIgXAAQgJATgOAPg");
	this.shape_6.setTransform(-37.7,-1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3300CC").s().p("AhPCLIAAh4QgQAQgdAQIgMgbQAhgQAYgZIAAgVIAPADQAIgHAPgdIhPAAIAAgXIBZAAQAJgXAGgVIAZAKQAFAFgJABQgCALgIARICMAAIAAAXIiWAAQgOAhgaAjIAACOgAgsB9IAAgXIBNAAIAAhQIhCAAIAAgWIBCAAIAAg2IAXAAQAKABgJAGIAAAvIA+AAIAAAWIg+AAIAABQIBQAAIAAAXg");
	this.shape_7.setTransform(-69,-1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3300CC").s().p("AiECCIAAgXIB2AAIAAgvIhcAAIAAgXIBcAAIAAgrIgSATQgUgZgSgMQgTAcgbAWIgRgVQA1goAKhFIAYAGQAIADgIADQgEASgLAdQAXAKAYAXIAAh1IAWAAQAKABgIAGIAAB6QAqgkAMhGIAYAFQAJACgJAEIgMArQAgASAaAcIgTAUQgXgagYgSQgUAigUARIgSgSIAAAiIBfAAIAAAXIhfAAIAAAvIB5AAIAAAXg");
	this.shape_8.setTransform(-99.2,-1.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3300CC").s().p("AgZCKIgIgaIAYAAQAFgBAAgFIAAiiIhVAAIAAgXIBsAAIAAAVQACAXAMAYQAngVAZggIAYAVQABAIgJgDQgpAigcAKQAbA1BFAkIgNAaQhHgmglhNIAABwQAAAUgTAAgAiLBlQBCgdAThHIhJAAIAAgWIBQAAIAGgGIAWAMIgFAGQgXBahLAugAg0hxIALgYQA3ANAeAQIgMAYQg1gYgfgFg");
	this.shape_9.setTransform(-130.8,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3300CC").s().p("AAcBpIAAgFQAMgBAFgEQAEgDAAgFQAAgHgGgOIgNgdIhOAAIgOAfQgFANAAAFQAAAFAFAEQADADAPACIAAAFIhAAAIAAgFQANgDAEgDQAHgIAKgWIBIioIAEAAIBHCqQAJAUAIAHQAGAFANACIAAAFgAgsAZIBGAAIgihSg");
	this.shape_10.setTransform(-157.1,-0.4);

	this.instance = new lib.option();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.212,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.option(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-38,377.6,76.1);


(lib.next = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtmEhIAApBIbNAAIAAJBg");
	mask.setTransform(-25.6,-1.9);

	// 图层_1
	this.instance = new lib.next_paint();
	this.instance.parent = this;
	this.instance.setTransform(-53.4,-2,1,1,0,0,0,49.7,-11.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:3.1},47).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.6,-30.8,174.2,57.8);


// stage content:
(lib.无标题1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		//暴露给全局play stop接口
		window.AnimationPlayer = {}
		window.AnimationPlayer.play = ()=>{
			this.play()
		}
		window.AnimationPlayer.stop = ()=>{
			this.stop()
		}
		
		//触发complete事件
		window.Bus.emit('animationloadcomplete')
		
		this.stop();
	}
	this.frame_72 = function() {
		waitClickingScreen.call(this)
	}
	this.frame_186 = function() {
		waitAnswer.call(this,0)
	}
	this.frame_248 = function() {
		waitAnswer.call(this,1)
	}
	this.frame_310 = function() {
		waitAnswer.call(this,2)
	}
	this.frame_373 = function() {
		waitAnswer.call(this,3)
	}
	this.frame_435 = function() {
		waitAnswer.call(this,4)
	}
	this.frame_497 = function() {
		waitAnswer.call(this,5)
	}
	this.frame_559 = function() {
		waitAnswer.call(this,6)
	}
	this.frame_561 = function() {
		/* 显示对象
		显示指定的元件实例。
		
		说明:
		1. 使用此代码显示当前隐藏的对象。
		*/
		let result = PersonalityTester.getTestingResult()
		this.resultText.text.set({
		    text: result.name + '\n' + result.description,
		    lineWidth: 375
		
		}); 
		this.stop()
		PersonalityTester.showPersonalPoster()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(72).call(this.frame_72).wait(114).call(this.frame_186).wait(62).call(this.frame_248).wait(62).call(this.frame_310).wait(63).call(this.frame_373).wait(62).call(this.frame_435).wait(62).call(this.frame_497).wait(62).call(this.frame_559).wait(2).call(this.frame_561).wait(62));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(187.7,333.5,1,1,0,0,0,0.3,0.1);
	this.___camera___instance.depth = 0;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(72).to({regX:0.4,regY:0.3,scaleX:0.55,scaleY:0.55,y:333.6},27).wait(3).to({scaleX:1,scaleY:1,x:187.8,y:333.7},0).to({_off:true},461).wait(60));

	// text
	this.resultText = new lib.result_text();
	this.resultText.name = "resultText";
	this.resultText.parent = this;
	this.resultText.setTransform(130.6,189.5);
	this.resultText._off = true;

	this.timeline.addTween(cjs.Tween.get(this.resultText).wait(619).to({_off:false},0).to({_off:true},2).wait(2));

	// D
	this.option6D = new lib.option6D();
	this.option6D.name = "option6D";
	this.option6D.parent = this;
	this.option6D.setTransform(187.2,546);
	this.option6D._off = true;

	this.timeline.addTween(cjs.Tween.get(this.option6D).wait(617).to({_off:false},0).to({_off:true},2).wait(4));

	// C
	this.option6C = new lib.option6C();
	this.option6C.name = "option6C";
	this.option6C.parent = this;
	this.option6C.setTransform(187.8,412.3);
	this.option6C._off = true;

	this.timeline.addTween(cjs.Tween.get(this.option6C).wait(617).to({_off:false},0).to({_off:true},2).wait(4));

	// B
	this.option6B = new lib.option6B();
	this.option6B.name = "option6B";
	this.option6B.parent = this;
	this.option6B.setTransform(187.8,266.1);
	this.option6B._off = true;

	this.timeline.addTween(cjs.Tween.get(this.option6B).wait(617).to({_off:false},0).to({_off:true},2).wait(4));

	// A
	this.option6A = new lib.option6A();
	this.option6A.name = "option6A";
	this.option6A.parent = this;
	this.option6A.setTransform(187.8,131.2);
	this.option6A._off = true;

	this.timeline.addTween(cjs.Tween.get(this.option6A).wait(617).to({_off:false},0).to({_off:true},2).wait(4));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300CC").s().p("AhSBfQAdgUAAgrIAAhwIBFAAIAAggIATAAQAIABgHAFIAAAaIBIAAIAAAQIiQAAIAAAiIAcAAIAAgaIAPAAQAHABgGAFIAAAUIAvAAIAAgcIAQAAQAIABgHAFIAAAWIAnAAIAAAPIgnAAIAAB+IgRAAIAAh+IgvAAIAAB+IgQAAIAAh+IgcAAIAAAvQAAA3glAagAAbBWQAIgQAAgSIAAg0IANAAQAHAAgGAFIAAAzQAAAXgKAQgAglBSQAIgOAAgTIAAgxIANAAQAIAAgHAFIAAAxQAAAZgMAOgABbBVQgLAAAAgMIAAhJIAMAAQAIAAgHAFIAABAQAAABAAABQABABAAAAQAAABABAAQABAAAAAAIADAAQADAAAAgEIAAgNIAOAEIAAAJQAAAQgMAAgAhzBHIAAiYIAyAAIAAB+IghAAIAAAagAhiAdIARAAIAAheIgRAAgAAOBEIAAhEIANAAQAIAAgHAFIAAA/g");
	this.shape.setTransform(179.8,56.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3300CC").s().p("Ag3BVQA8gKAAg9IAAgfIgfAAIAAgSICHAAIAAASIgnAAIAABYQAAAHAFgBIAJAAQAFABABgHIACgUIAWAGIgFAZQgDARgNAAIgZAAQgSAAAAgQIAAhkIgZAAIAAAeQAABOhIAOgAhrBLIgFgVIAigHIAAg6IgdAAIAAgTIAdAAIAAgyIggAAIAAgTIBQAAIAAATIgcAAIAAAyIAYAAIAAATIgYAAIAAAzIAegJIAGASIhOAZQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAIgEgCgAgRhWIAAgSIByAAIAAASg");
	this.shape_1.setTransform(154.6,57.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3300CC").s().p("ABFBZIiZANQgBAIgEgEIgGgbIAggBQAWgiAPgmIhSAAIAAgSIBjAAIAAgqIhMAAIAAgSIBMAAIAAgjIASAAQAHABgGAEIAAAeIBMAAIAAASIhMAAIAAAqIBiAAIAAASIhrAAQgUApgUAfIBhgGQgTgVgPgNIAPgPQAgAXAiAvIgUAPg");
	this.shape_2.setTransform(129.5,56.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3300CC").s().p("AhgBqIAAhcIATAAQAHABgGAFIAAA3IBDAAIAAhUIg6AAIAAAKIgTAAIAAhXIASAAQAIABgHAFIAAA1IA6AAIAAhOIASAAQAHABgGAEIAABJIA4AAIAAg6IATAAQAIABgHAFIAABPIgUAAIAAgJIg4AAIAABUIBAAAIAAg8IATAAQAHABgGAFIAABTIgUAAIAAgLIiWAAIAAANg");
	this.shape_3.setTransform(104.5,56.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},617).to({state:[]},2).wait(4));

	// text
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3300CC").s().p("AgeBmIgFgVIAWAAQAEAAAAgFIAAhBIhkAAIAAgVIBkAAIAAgsIASADQAVgNAPgPIiAAAIAAgTICNAAIAFgDIASASIgGAEQgjAfgcAPIAAAXIBiAAIAAAVIhiAAIAABLQAAAQgOAAg");
	this.shape_4.setTransform(239.3,119.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3300CC").s().p("AhHgCQgRAmgXAZIgCgCQAbgqAPhDIgHAAQgNAAgLADIgJgJIAoAAIgBg6IAWALIgIAHIAAAoIANAAIALgKIAQAQIgoAAIAAAaQATAJAHAGQAGAGAAAFQAAAEgCAGQgCAFgCAAQgDAAgEgIQgHgOgMgNIAABOIABAxIgPAGIABh1gAAeAmIggAAQgNAAgLADIgIgJIBAAAIAAgoIgRAAQgMAAgKADIgJgJIAwAAIAAgkIgSAAQgMAAgKADIgJgJIA/AAQARghAGgZIAVANQgKAFgKAOIgSAaIAcAAIAMgLIARARIg/AAIAAAkIAbAAIAMgLIARARIg4AAIAAAoIAnAAIANgNIASATIhGAAIABBGIgQAGIABhMgAAJhGQgFgOgRgWIACgCQAdAQADAGIADAJQAAAFgEAFIgFAFQgDAAgDgIg");
	this.shape_5.setTransform(214.1,119.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3300CC").s().p("AAoBrIgDgSIAaAAQANAAABgSIAFh0Ig5AAQgJAbgVAYIgPgRQAgghAJg9IAVAGQAIAEgJACIgIAeIBGAAIgECDQgCAngeAAgAhnBoIAAinIAaAAQAGgTAEgYIAYAIQAEAEgHABQgDANgIARIAkAAIAACgIgTAAIAAgMIgrAAIAAATgAhTBCIArAAIAAgyIgrAAgAhTgCIArAAIAAgrIgrAAgAAHAKIAQgRQAUARAMAQIgSATQgOgUgQgPg");
	this.shape_6.setTransform(189.6,118.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3300CC").s().p("AgmBuQAggVAOgWQAPgWAHgcQAFgaACgjIgSAAIgMACIgHgIIAlAAIgBg+IAUAJIgHAHIAAAuIAnAAIAIgJIAPAMIgIAHQgBBmgFAVQgGAVgXAHQgBgLgdgMIABgFQAUAFAMAAQAFAAAEgDQADgCADgXQADgXAChRIgqAAQgBAlgHAcQgHAegUAWQgRAXgfARgAhsA4QALgDARgeQAQgdAEgSIgfAAIgLACIgIgHIBcAAIAMgMIARARIhBAAIAPAMQgJAEgQAYQgQAYgOAPIBNgJQgKgUgLgQIAEgCQAiAfABALQABALgDAFIgFAEQgDAAgBgFIgFgOQhHAMgLAMgAhmhPIBGAAIAMgMIARASIhHAAQgKAAgJADg");
	this.shape_7.setTransform(163.9,119.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3300CC").s().p("AhIBeQAmgQAEgqIAAgLIggAAIAAgQIApAAIAAgRIgPAAIgPAAIAAhOIAaAAIADgaIAWADQADAEgGABIgEASIAdAAIAABHQAVgmAHg1IASAEQAEAEgGABQgCARgGASIA1AAIAAATIgMAAQgCArgUAuQAQAaAVAMIgLAWQgUgQgQgYQgNAXgZAXIgHgRQgEAPgOAAIgQAAIgDgTIAPAAQAIAAABgiIgYAAQgOAqgiAOgAgNApIAqAAIgGAuQAWgRAMgZQgKgjgDgdQgFAMgHAJIgKgOIAAAEIgaAAIAAARIAmAAIAAAQIgtAAgABDAWQANgoABgZIgYAAQADAmAHAbgAgigYIAoAAIAAgQIgoAAgAgig3IAoAAIAAgQIgoAAgAheBtIgTgPQAPgXATgxIARANQgQAvgNAWQACAFgDAAIgCAAgAhugZIAOgTQATAIAMAPIgNAVQgPgQgRgJgAhnhUIANgTQASAHAPAPIgNAUQgPgPgSgIg");
	this.shape_8.setTransform(139.3,118.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3300CC").s().p("AgpBrIgFgTIAXgCIAAi9IBwAAIAABpIgxAAQABATALATQAYgRANgPIARANQAIAGgLgBQgSAOgXANQAOAUAmAPIgKAYQhHgfgNhPIgYAAIAABRIAzgIIAAAQIhRARQgBAFgCAAQgCAAgCgGgAgEgPIBKAAIAAgbIhKAAgAgEg8IBKAAIAAgYIhKAAgAhMBxIAAhrIgbAaIgKgWQAmgaAYgvIASAIQAHAEgIACIgXAjIAAB/gAhwg1QAkgXAUgkIAQAKQAGAEgIACQgXAlgkAZg");
	this.shape_9.setTransform(114.3,118.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3300CC").s().p("AAAgDQgTBJhJAhIgPgWQBegjAAhhIAAgzIAUAAQAJACgIAGIAAAoQAGBdBdAoIgLAYQhDgdgdhNg");
	this.shape_10.setTransform(89.4,119.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3300CC").s().p("AgdBlIgHgVIAWAAQADAAAAgEIAAiwIAVAAQAJABgIAHIAAC1QAAAMgMAAgAhuAxQAjgyAIg8IAYAHQAIACgJADQgLA6ghA2gAAmgzIATgKQAjAwATAzIgZALQgSg1gegvg");
	this.shape_11.setTransform(64.4,119.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3300CC").s().p("AgLBpIAAiOIAUAAQAKACgJAGIAACGgAhsgQQBBgdAkg7IAQAEQALAFgLAEQAaAoBKAdIgMAUQhDgbgfguQgmA1g6AXg");
	this.shape_12.setTransform(276.7,89.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3300CC").s().p("AhpBXIAAgVIDSAAIAAAVgAhJAIIAAgUICTAAIAAAUgAhWhBIAAgVICuAAIAAAVg");
	this.shape_13.setTransform(251.8,89.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3300CC").s().p("AhbAXQAAg4gBgSIAQAIIAnAAIAAguIgsAAQgMAAgLACIgJgIIC/AAIAQgPIAUAVIhSAAIAAAuIAqAAIAHgKIARAMIgJAHIAAB0QAAASgVAJQgCgOgggIIAAgEQAYADAJAAQAJAAAAgOIAAhuIgsAAQAAAXgDAPQAhAPADAGQACAGAAAEQAAAEgDAGQgDAFgBABQgDgBgEgKQgHgQgSgRQgNAoglAbIgCgDQAtgrgCg+IgqAAIgDAeQAXAMABAJQACAIgDAFQgEAEgCAAQgCAAgDgKQgEgOgJgKQgLAngiAaIgCgDQAlgmAAg6IgnAAIAACNIgQAIIABhYgAgXgrIAqAAIAAguIgqAAg");
	this.shape_14.setTransform(226.7,89.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3300CC").s().p("AgMBTIAAgbIAaAAIAAAbgAgKAXIgEhqIAeAAIgGBqg");
	this.shape_15.setTransform(189.3,89.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3300CC").s().p("Ag8BKIAAifIAAgdIAYALIgKAHIAACqIABAhIgPAIIAAgpgAgQA4IgBg6IAOAIIBQAAIAJgJIAPANIgJAGQAABHABARIgOAHIAAgXIhSAAIAAATIgOAGIABg5gAAsBSIAjAAIAAhGIgjAAgAgDBSIAhAAIAAhGIghAAgAhmgIIgBhIIAXAKIgIAHIAABjIABAeIgQAHIABhRgAAvgKQgJgPgagUIACgDQAZAJALAHQAMAHAAAJIgDAJQgCAGgBAAQgDAAgGgJgAgngGQAigsAPhAIAWAOIgKAFIgPAeIBBAAIANgNIASATIhiAAQgUAlgVASg");
	this.shape_16.setTransform(164.5,89.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3300CC").s().p("AgJBvIAAhMQgeAqg5AZIgLgVQA9gXAhgvIhbAAIAAgSIBfAAIAAg0IhSAAIAAgSIBSAAIAAghIASAAQAIABgHAEIAAAcIBTAAIAAASIhTAAIAAA0IAQAAIATgvIAVAKQAEAEgHABIgSAgIA8AAIAAASIhaAAQAgAtA9AUIgMAVQg0gVgigqIAABNgAhIgqIARgNQAPAQAIARIgSALQgIgRgOgOg");
	this.shape_17.setTransform(139.3,89.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3300CC").s().p("AgKBuIAAhXQgZAnhAAhIgLgXQA5gWAlgyIhGAAIAAgUIBMAAIAAgiIhfAAIAAgWIBfAAIAAghIASAAQAIABgIAFIAAAbIBgAAIAAAWIhgAAIAAAiIBNAAIAAAUIhFAAQAmAxA6AVIgPAYQg/glgaglIAABag");
	this.shape_18.setTransform(114.5,89.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3300CC").s().p("AhnBcQAZgZAAg1IAAh5IC2AAIAADDQAAARgSAAIgYAAIgCgSIAVAAQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIAAisIiPAAIAABuQAAA0gbAhgAgfBbIAAhNIBZAAIAABCIhGAAIAAALgAgMA9IAyAAIAAgcIgyAAgAgvgCIAAgTIAxAAIAAgUIgvAAIAAgSIAvAAIAAgXIASAAQAIABgHAFIAAARIAyAAIAAASIgyAAIAAAUIA1AAIAAATg");
	this.shape_19.setTransform(88.3,89.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3300CC").s().p("ABIBpIAAgLIijAAIAAgTICjAAIAAgiIiXAAIAAgSICXAAIAAgdIijAAIAAgSIBQAAIAAhQIAVAAQAJACgIAGIAABIIBRAAIAACBgAAjgqQAPgYAJgdIAXALQAHADgKABQgGAWgTAbgAhRhMIASgOQAPAPAOAbIgVAMQgNgagNgOg");
	this.shape_20.setTransform(64.3,89.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},557).to({state:[]},60).wait(6));

	// D
	this.option5D = new lib.option5D();
	this.option5D.name = "option5D";
	this.option5D.parent = this;
	this.option5D.setTransform(187.8,537.2);
	this.option5D._off = true;

	this.timeline.addTween(cjs.Tween.get(this.option5D).wait(555).to({_off:false},0).to({_off:true},2).wait(66));

	// C
	this.option5C = new lib.option5C();
	this.option5C.name = "option5C";
	this.option5C.parent = this;
	this.option5C.setTransform(187.8,387.1);
	this.option5C._off = true;

	this.timeline.addTween(cjs.Tween.get(this.option5C).wait(555).to({_off:false},0).to({_off:true},2).wait(66));

	// B
	this.option5B = new lib.option5B();
	this.option5B.name = "option5B";
	this.option5B.parent = this;
	this.option5B.setTransform(187.2,253.5);
	this.option5B._off = true;

	this.timeline.addTween(cjs.Tween.get(this.option5B).wait(555).to({_off:false},0).to({_off:true},2).wait(66));

	// A
	this.option5A = new lib.option5A();
	this.option5A.name = "option5A";
	this.option5A.parent = this;
	this.option5A.setTransform(187.2,153.9);
	this.option5A._off = true;

	this.timeline.addTween(cjs.Tween.get(this.option5A).wait(555).to({_off:false},0).to({_off:true},2).wait(66));

	// text
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3300CC").s().p("AhGA3IAAhYQgUAfgTARIgEgCQAfgqANggQAOgfAGgWIAXAPIgJAEIgbAyIANAHIgGAFIAABmIABAkIgQAKIAAg8gAgIBcIABgEQASAEAJAAQAJAAAAgLIAAhZIgBghIAXAJIgIAHIAABzQABARgXAHQABgLgegLgAgwBTQAQgVAKgXQALgXAFgZIATALIgIAFQgSAvggAfgABiBEQgEgNgLgVQgMgVgMgOIAEgBQAUARAOAQQAOAPAAALQABALgEAEQgEAFgCAAQgCAAgCgJgAgngGQASgZANggQAMgfADgRIAXAPIgKAFIgRAhIBRAAIAKgMIATAUQgQAAgWAcIgCgCIANgcIhVAAQgRAdgUATg");
	this.shape_21.setTransform(155.6,93);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3300CC").s().p("AAoBrIgDgSIAZAAQAOAAABgSIAFh0Ig5AAQgJAbgVAYIgPgRQAhghAJg9IAUAGQAIAEgJACIgIAeIBHAAIgGCDQgBAngeAAgAhnBoIAAinIAaAAQAGgTAEgYIAYAIQAEAEgHABQgDANgIARIAkAAIAACgIgTAAIAAgMIgrAAIAAATgAhTBCIArAAIAAgyIgrAAgAhTgCIArAAIAAgrIgrAAgAAHAKIAQgRQAUARAMAQIgSATQgOgUgQgPg");
	this.shape_22.setTransform(131,92.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3300CC").s().p("AhaBwIAAiZIBSAAIAACHQAAAQgPAAIgUAAIgFgSIASAAQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBIAAgjIgrAAIAAA6gAhHAjIArAAIAAgUIgrAAgAhHgDIArAAIAAgUIgrAAgAA2BtIgDgSIATAAQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBIAAiEIATAAQAKACgJAGIAACBQAAAQgQAAgAATBLIAAhvIAUAAIAABvgAhvg4IAAgSIBCAAQgGgOgHgKIARgJQALAKALAXIAiAAQAMgTAGgSIAWAHQAFAEgHABIgPAZIBLAAIAAASg");
	this.shape_23.setTransform(105.6,93.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3300CC").s().p("AgzBqIAAgPIBJAAIAAgiIg4AAIAAgQIASAAIAAgfIgYAAIAAgPIAYAAIAAggIgRAAIAAgQIA3AAIAAgaIgzABIgEgRQBIACAvgMIALAQQABAGgIgEQgXAFgcACIAAAbIA8AAIAAAQIgUAAIAAAgIAeAAIAAAPIgeAAIAAAfIAVAAIAAAQIg9AAIAAAiIBEAAIAAAPgAAnApIAVAAIAAgfIgVAAgAADApIATAAIAAgfIgTAAgAAngFIAVAAIAAggIgVAAgAADgFIATAAIAAggIgTAAgAhsBeIAAi9IA9AAIAACyIgQAAIAAgHIgdAAIAAASgAhcA9IAdAAIAAgnIgdAAgAhcAHIAdAAIAAgjIgdAAgAhcgsIAdAAIAAgjIgdAAg");
	this.shape_24.setTransform(81,93);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},555).to({state:[]},2).wait(66));

	// text
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3300CC").s().p("AgWBuIgDgVIAQAAQADAAABgEIAAgfIgwAAIAAAGIgRAAIAAg5ICPAAIAAA4IgRAAIAAgFIgrAAIAAApQAAAPgPAAgAg1AmIBtAAIAAgUIhtAAgAhmBZQAngPAVgRIAQARQABAFgHgCQgZAUgkAMgAAdBLIAOgOQAaAUAkAIIgLATQgqgMgXgVgAhvgKIAAgQIBpAAIAAgLIgiAAIgeAAIAAhIICRAAIAABIIg/AAIAAALIBkAAIAAAQgAg2g1IBwAAIAAgNIhwAAgAg2hRIBwAAIAAgNIhwAAg");
	this.shape_25.setTransform(336.7,71.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3300CC").s().p("AgwBdQAmgHAdgbQgRgTgNgZQgNAVgNAMIgMgQQAlgkAMg9IgvAAIAPAJQAEAEgHABQgLAZgKANIACACQADADgFADIAAB0IgTAAIAAhhIgaAXIgLgRQAogdAVg4Ig3AAIAAgSIBgAAIAAgcIASAAQAHABgGAEIAAAXIBgAAIAAASIhjAAIAQAHQADAEgGABIgHASIA4AAIAFgFIAPAJQAGAEgHABQgPA0gZAfQAZAVApALIgKAUQgngLgfgbQgeAegsALgAgBgCQAGAUAaAbQAUgZALgoIg4AAQgEALgDAHgAALgBIAMgMQAMAIAJALIgNAMQgIgJgMgKg");
	this.shape_26.setTransform(311.9,71.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3300CC").s().p("AhVBYQAogZAAgzIAAh2ICDAAIAADAQAAAPgRAAIgXAAIgEgWIAVAAQADAAAAgDIAAgwIhbAAQAAAqgrAlgAgZAHIBbAAIAAgjIhbAAgAgZgxIBbAAIAAgjIhbAAg");
	this.shape_27.setTransform(285.4,72.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3300CC").s().p("ABKAJQgEgDAAgGQAAgFAEgEQADgDAHAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFABQgGgBgEgEgAgJAJQgEgDAAgGQAAgFAEgEQAFgDAEAAQAFAAAFAEQADADAAAFQAAAGgDADQgFAEgFABQgEgBgFgEgAhcAJQgEgDAAgGQAAgFAEgEQAEgDAFAAQAHAAADAEQAEADAAAFQAAAGgEADQgEAEgGABQgFgBgEgEg");
	this.shape_28.setTransform(255.6,79.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3300CC").s().p("ABKAJQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAEAEQAEADAAAFQAAAGgEADQgEAEgGABQgFgBgEgEgAgIAJQgFgDAAgGQAAgFAFgEQAEgDAEAAQAFAAAFAEQADADAAAFQAAAGgDADQgFAEgFABQgEgBgEgEgAhcAJQgEgDAAgGQAAgFAEgEQAEgDAFAAQAGAAAFAEQADADAAAFQAAAGgDADQgFAEgGABQgFgBgEgEg");
	this.shape_29.setTransform(230.6,79.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3300CC").s().p("AAOBqIAAhBQgWAkgvAUIgMgVQA0gTAWgjIg6AAIAAgTIBBAAIAAgdIASAAQAIABgHAEIAAAYIBHAAIAAATIg/AAQAZAeAvASIgIAYQgxgWgXghIAABDgAhgBmIgQgNQAUgdANguIATALQgNAtgQAdQAAAGgCAAQgCAAgDgDgAhtgeIANgTQASAIAOARIgPASQgMgMgSgMgAg5geQAxgKAAgbIAAgKIATACQAHACgHADIAAAEQAAAng+ARgAA3gWQgSAAAAgQIAAgoIATAAQAIABgHAFIAAAYQAAAIAHAAIAMAAQALAAAAgRIAWAFQgFAegUAAgAgzg6IAAguICZAAIAAAmIgUAAIAAgTIhxAAIAAAbgAhnhXIAMgSQAVAIAMAQIgPATQgKgMgUgNg");
	this.shape_30.setTransform(205.8,72.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3300CC").s().p("AhLBjQgSAAAAgRIAAiMIAWAAQAKACgJAGIAAAZIBzAAIAAgzIiQAAIAAgWICnAAIAABlIgXAAIAAgGIhzAAIAABGQAAAKAKAAIB6AAQAJAAADgMIAEgWIAWAIIgIAgQgEAQgTAAg");
	this.shape_31.setTransform(181.3,71.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3300CC").s().p("AgwBdQAmgHAcgbQgQgTgNgZQgNAVgNAMIgMgQQAlgkAMg9IgvAAIAPAJQADAEgGABQgLAZgKANIACACQADADgFADIAAB0IgTAAIAAhhIgaAXIgLgRQAogdAVg4Ig4AAIAAgSIBhAAIAAgcIASAAQAHABgGAEIAAAXIBgAAIAAASIhjAAIAQAHQAEAEgIABIgGASIA4AAIAEgFIAQAJQAGAEgHABQgQA0gYAfQAaAVAoALIgKAUQgngLgfgbQgeAegsALgAgBgCQAGAUAbAbQATgZALgoIg4AAQgEALgDAHgAALgBIAMgMQAMAIAJALIgMAMQgJgJgMgKg");
	this.shape_32.setTransform(155.6,71.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3300CC").s().p("AgKAYIAJgaIgJAAIAAgVIAVAAIAAAVIgLAag");
	this.shape_33.setTransform(130.1,80.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3300CC").s().p("ABGBZIiaANQgBAIgEgEIgHgbIAhgBQAWgiAPgmIhSAAIAAgSIBjAAIAAgqIhMAAIAAgSIBMAAIAAgjIASAAQAHABgGAEIAAAeIBMAAIAAASIhMAAIAAAqIBiAAIAAASIhrAAQgTApgVAfIBggGQgSgVgOgNIAOgPQAfAXAkAvIgVAPg");
	this.shape_34.setTransform(113.9,71.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3300CC").s().p("AAXBrQgcgBgRgFQgQgGgMgKQgMgLgEAAQgFAAgJALQgKAKgIAOIgOgOIAngbIAAhPIgIAAQgNAAgLADIgJgJIAmAAIAKgLIAOAOIgIAHIAABLQALAKAOAHQAOAGAXACIAqABIAegBIApgDIAAAEQgUAEAAAMIhIgDgAAJA/IAAgEIAgADQAGAAAAgIIAAhjIhDAAQgIAAgKADIgJgJIBeAAIgBg6IAWALIgIAIIAAAnIAWAAIAMgNIASATIg0AAIAABoQAAALgEAGQgEAGgKADQgGgPgbgHgAgFAHQgGgQgQgUIACgDQAVAOAHAJQAIAJAAAGQgBAHgDAEQgDADgCAAQgDAAgEgNgAhLhCQgFgPgNgOIACgDQASAJAHAHQAIAHAAAIQgBAHgDADQgEADgCAAQgEAAgDgMg");
	this.shape_35.setTransform(89,71.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3300CC").s().p("AhwBKQBYgWAIhAIhQAAIAAgTIBSAAIAAgwIhcAAIAAgTIDTAAIAAATIhiAAIAAAwIBXAAIAAATIhUAAQAZBABOATIgJAZQhKgXgehBQgRBBhYAag");
	this.shape_36.setTransform(64.1,72.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3300CC").s().p("AhmALIAAgVIDNAAIAAAVg");
	this.shape_37.setTransform(38.8,71);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},495).to({state:[]},60).wait(68));

	// D
	this.option4D = new lib.option4D();
	this.option4D.name = "option4D";
	this.option4D.parent = this;
	this.option4D.setTransform(187.8,538.4);
	this.option4D._off = true;

	this.timeline.addTween(cjs.Tween.get(this.option4D).wait(493).to({_off:false},0).to({_off:true},2).wait(128));

	// C
	this.option4C = new lib.option4C();
	this.option4C.name = "option4C";
	this.option4C.parent = this;
	this.option4C.setTransform(187.8,404.8);
	this.option4C._off = true;

	this.timeline.addTween(cjs.Tween.get(this.option4C).wait(493).to({_off:false},0).to({_off:true},2).wait(128));

	// B
	this.option4B = new lib.option4B();
	this.option4B.name = "option4B";
	this.option4B.parent = this;
	this.option4B.setTransform(187.8,283.7);
	this.option4B._off = true;

	this.timeline.addTween(cjs.Tween.get(this.option4B).wait(493).to({_off:false},0).to({_off:true},2).wait(128));

	// A
	this.option4A = new lib.option4A();
	this.option4A.name = "option4A";
	this.option4A.parent = this;
	this.option4A.setTransform(187.8,150.1);
	this.option4A._off = true;

	this.timeline.addTween(cjs.Tween.get(this.option4A).wait(493).to({_off:false},0).to({_off:true},2).wait(128));

	// text
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3300CC").s().p("AgJAJQgEgEAAgFQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAFgEAEQgEAFgGAAQgFAAgEgFg");
	this.shape_38.setTransform(167.4,63.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3300CC").s().p("AgJAJQgEgEAAgFQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAFgEAEQgEAFgGAAQgFAAgEgFg");
	this.shape_39.setTransform(161.1,63.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3300CC").s().p("AgJAJQgEgEAAgFQAAgFAEgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAFgEAEQgEAFgGAAQgFAAgEgFg");
	this.shape_40.setTransform(154.9,63.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3300CC").s().p("AgZBGIgBgpIAOAIIAeAAIAAggIgcAAQgMAAgMADIgIgIIA8AAIAAgfIgCAAQgNAAgKADIgJgJIA6AAIAKgKIARAQIgmAAIAAAfIAmAAIAMgMIASARIhEAAIAAAgIAfAAIAHgJIAPALIgIAGIAAAfIABAfIgOAGIAAgTIhLAAIAAAOIgOAGIABgsgAgMBYIBLAAIAAguIhLAAgAhrgOIgBhGIAOAIIAfAAIAHgJIAPAMIgIAHIAABLIABAeIgOAGIAAgSIggAAIAAAVIgOAHIABhFgAheAVIAgAAIAAhbIggAAgAgvgUQAZgVAQgXQAQgWAJgbIAUAMIgJAGQAPAYAVAOQAVANAVACIAAAEQgPACgDAKQgYgMgOgQQgPgRgKgUQgTAggSAQQgUARgPAJg");
	this.shape_41.setTransform(139.7,55.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3300CC").s().p("AhoBiQASgSALgdIAVAIQgHAdgVAWgAAFA5IAUgHQAQAbADAZIgZAGQgDgagLgZgAgnA5IAVgBQAIASgDAhIgXABQABghgEgSgAA0A7IASgKQATASAQAcIgYALQgOgdgPgSgAhKAtIAAhSIA6AAIAAhIIAVAAQAIABgHAEIAAAWIBSAAIAAASIhSAAIAAAbIBJAAIAABQIgXAAIAAgGIhsAAIAAAIgAg0ASIBsAAIAAglIhsAAg");
	this.shape_42.setTransform(114.3,55.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3300CC").s().p("AgmBuQAggVAOgWQAPgWAHgcQAFgaABgjIgRAAIgMACIgHgIIAkAAIgBg+IAVAJIgGAHIAAAuIAmAAIAIgJIAPAMIgIAHQgBBmgFAVQgGAVgXAHQgBgLgegMIACgFQAUAFAMAAQAFAAAEgDQADgCADgXQADgXABhRIgoAAQgBAlgIAcQgHAegTAWQgTAXgfARgAhsA4QALgDAQgeQARgdAEgSIgfAAIgLACIgIgHIBcAAIAMgMIAQARIhAAAIAQAMQgKAEgQAYQgRAYgNAPIBNgJQgJgUgMgQIADgCQAjAfAAALQACALgDAFIgFAEQgDAAgBgFIgFgOQhHAMgLAMgAhmhPIBHAAIALgMIASASIhIAAQgLAAgIADg");
	this.shape_43.setTransform(88.9,55.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3300CC").s().p("AAWBnQgcgCgSgGQgSgIgLgKQgKgLgFAAQgFgBgLAMQgMALgFAHIgNgOQAPgNAZgJIAAhPIgHAAQgNAAgKADIgJgIIAlAAIAHgLIAQANIgJAGIAABMQAKAJAPAKQAQAIAcABQAeACAbgBQAbgBAYgEIAAAEQgVAGABALIhJgBgABMA8IgGgOQgzAFgQAEQgRAEgIAGIgMgWQAKgCAJgKQAIgMAJgQQAKgPADgOIgiAAQgIAAgKADIgJgJIB4AAIAPgPIASAVIhZAAIASANQgIgBgOAUQgPAWgSARIBXgEQgIgPgOgQIADgCQAVANAKALQAMALgCAJQgBAKgDACQgDACgCABQgDAAgCgHgAhJhDQgDgOgQgUIADgBQATAJAHAIQAIAGgCAHQAAAIgFADQgEADgBABQgFAAgBgKgAgdhTIBVAAIANgMIASASIhZAAQgHAAgLADg");
	this.shape_44.setTransform(64.3,55.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},493).to({state:[]},2).wait(128));

	// text
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3300CC").s().p("AgQBgIAAiqIhYAAIAAgVIDRAAIAAAVIhjAAIAACqgAAGgcIAMgQQAsAZAcAbIgPARQgcgbgpgag");
	this.shape_45.setTransform(190.3,80.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3300CC").s().p("AgmBuQAggVAOgWQAPgWAHgcQAFgaABgjIgRAAIgMACIgHgIIAkAAIgBg+IAVAJIgGAHIAAAuIAmAAIAIgJIAPAMIgIAHQgBBmgFAVQgGAVgXAHQgBgLgdgMIABgFQAUAFAMAAQAGAAADgDQADgCADgXQADgXABhRIgoAAQgBAlgIAcQgHAegUAWQgRAXggARgAhsA4QALgDAQgeQARgdAEgSIgfAAIgLACIgIgHIBcAAIAMgMIARARIhBAAIAPAMQgJAEgQAYQgRAYgNAPIBNgJQgKgUgLgQIADgCQAjAfAAALQADALgEAFIgFAEQgDAAgBgFIgFgOQhHAMgLAMgAhmhPIBHAAIALgMIARASIhHAAQgLAAgIADg");
	this.shape_46.setTransform(165.1,79.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#3300CC").s().p("AAWBnQgcgBgSgHQgSgIgKgLQgMgKgEAAQgFgBgMALQgKAMgGAHIgNgOQAPgNAZgJIAAhPIgHAAQgMAAgLAEIgJgJIAlAAIAHgLIARANIgJAHIAABLQAIAJAQAJQAQAJAcABQAeACAbgBQAbgBAYgEIAAAEQgVAGAAAKIhIAAgABMA8IgGgOQgyAFgRAEQgQAEgJAGIgMgWQAKgCAJgKQAIgLAJgRQAKgQADgNIgiAAQgHAAgLADIgJgJIB4AAIAPgPIASAVIhYAAIARANQgIgBgPAUQgOAVgSASIBWgEQgHgPgOgQIADgCQAVANAKALQAMALgBAJQgCAKgDACQgDACgCABQgDAAgCgHgAhJhDQgDgOgQgUIADgCQATAKAHAIQAIAGgCAHQgBAIgDADQgFADgBAAQgEAAgCgJgAgdhTIBVAAIANgMIASASIhZAAQgHAAgLADg");
	this.shape_47.setTransform(140.4,79.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#3300CC").s().p("AgJBvIAAhMQgeAqg5AZIgLgVQA9gXAhgvIhbAAIAAgSIBfAAIAAg0IhTAAIAAgSIBTAAIAAghIASAAQAIABgHAEIAAAcIBTAAIAAASIhTAAIAAA0IAQAAIATgvIAVAKQAEAEgHABIgSAgIA8AAIAAASIhaAAQAgAtA9AUIgMAVQg0gVgigqIAABNgAhIgqIARgNQAPAQAIARIgSALQgIgRgOgOg");
	this.shape_48.setTransform(115.5,79.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#3300CC").s().p("AhMBvIAAheQgKAVgKAPIgQgQQAdgpAFgpIgcAAIAAgTIAeAAIAAguIASAAQAHAAgGAFIAAApIAZAAIAAATIgZAAIAAAZQAeASAEAGIgLAVQgNgMgKgIIAABqgABQBSIhkAJQgEAJgEgIIgFgYIAbgBQANgiALg3IAXAIQAEABgGAFQgOAugLAcIA5gDIgTgaIAQgMQAWAYAVAmIgUAMIgLgRgAAphfIARgJQATA3AkAkIgRAPQghgdgWhEgAgfgNQAXgfALg5IATAIQAHAFgJACQgMA6gVAcg");
	this.shape_49.setTransform(77.9,79.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#3300CC").s().p("AhuBgQAeggAAg1IAAg8IgfAAIAAgSIAnAAIAAgtIATAAQAIABgHAEIAAAoIAwAAIAAASIg5AAIAAAcIArAAIAABvQAAAQgPAAIgYAAIgEgSIAVAAQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIAAhXIgYAAIAAANQAAA9gkApgAgNBcQAdgSAXgYQgSgfgHgiQgIAQgIAMIgMgUQAXgmAJhBIAWADQAHACgJACIgIAoIBSAAIAAATIgXAAQgDAwgWAsQATAXAeASIgOAVQgbgRgUgbQgfAigZAMgAAzAeQALgXAHgzIgrAAQAJAwAQAag");
	this.shape_50.setTransform(52.9,79.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},433).to({state:[]},60).wait(130));

	// D
	this.option3D = new lib.option3D();
	this.option3D.name = "option3D";
	this.option3D.parent = this;
	this.option3D.setTransform(187.2,557.3);
	this.option3D._off = true;

	this.timeline.addTween(cjs.Tween.get(this.option3D).wait(431).to({_off:false},0).to({_off:true},2).wait(190));

	// C
	this.option3C = new lib.option3C();
	this.option3C.name = "option3C";
	this.option3C.parent = this;
	this.option3C.setTransform(187.8,413.6);
	this.option3C._off = true;

	this.timeline.addTween(cjs.Tween.get(this.option3C).wait(431).to({_off:false},0).to({_off:true},2).wait(190));

	// B
	this.option3B = new lib.option3B();
	this.option3B.name = "option3B";
	this.option3B.parent = this;
	this.option3B.setTransform(187.8,281.2);
	this.option3B._off = true;

	this.timeline.addTween(cjs.Tween.get(this.option3B).wait(431).to({_off:false},0).to({_off:true},2).wait(190));

	// A
	this.option3A = new lib.option3A();
	this.option3A.name = "option3A";
	this.option3A.parent = this;
	this.option3A.setTransform(187.2,152.6);
	this.option3A._off = true;

	this.timeline.addTween(cjs.Tween.get(this.option3A).wait(431).to({_off:false},0).to({_off:true},2).wait(190));

	// text
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3300CC").s().p("AhpBhIAAgVIBYAAIAAisIAVAAQAJACgIAGIAAA4IBPAAIAAAWIhPAAIAABWIBlAAIAAAVg");
	this.shape_51.setTransform(274.3,52.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#3300CC").s().p("AgSBdQAFgDAAgNIAAiMIgBgYIANAKQAVgEAbgIQAbgJAKgJIAOATQgKgBgnAJQAAAdACAfIAaAAIAOgNIATATIg6AAQAFAsANAWQAMAVAMAIIANgmIAEABQgEAYAAAOQABAOAEAJQAAABAAABQAAABAAAAQAAABAAAAQgBAAAAAAQgEAAgRgLQgRgLgPgbQgOgcgFguIgoAAIAABlIAugZIACADQgrAdgKAQgAgBhIIAAA0IAnAAQgCghAAgZIglAGgAhvBPIAjgHIAxgMIABAEQgcAKgoARIgGAHgAhnAfQAEgBAIgHQAJgHAdgnIgdAHQgJADgFAFIgLgRQAKgEAPgeQAPgeAFgUIATALQgIAHgKARIgeAyIAogDQAIgNAIgXIASAMQgFADgWAdQgVAdgUAWIA9gLIAAAEQg4AQgLAKg");
	this.shape_52.setTransform(249.4,52.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3300CC").s().p("AhcBhQAwgGAFgWIhIAAIAAgPIBKAAIAAgPIgRAAIgPAAIAAhcIBKAAIgPgKQATgSAKghIATAHQAIADgLADIgEAIIBLAAIAAAQIgtAAIAJAOIgTAFIgJgTIgSAAQgFALgLANIA+AAIAABcIgaAAIAAAPIBEAAIAAAPIhEAAIAAAqIgUAAIAAgqIgsAAQgCAihAAMgAgSA2IAqAAIAAgPIgqAAgAg0AXIBpAAIAAgMIhpAAgAg0AAIBpAAIAAgNIhpAAgAg0gYIBpAAIAAgNIhpAAgAhsg4QAcgXALgiIASAHQAIADgLADIgDAHIA5AAIAAAQIgeAAIAIAOIgVAEIgGgSIgPAAQgMAWgRAOg");
	this.shape_53.setTransform(224.6,52.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3300CC").s().p("AhdBwIgTgSQAcgkALgjIATANQgMAigYAkQAAAGgCAAIgBAAgAg4BdQAegGAagRIAMAMQAGAIgKgEQgcAUgaAGgAArBSIALgNQAXANAkAIIgKAVQgegGgegXgAgkBCIAAhTIA4AAIAAgSIgoAAIAAgPIBlAAIAAAPIgpAAIAAASIA4AAIAABTgAAoAyIAlAAIAAgSIglAAgAgQAyIAkAAIAAgSIgkAAgAAoAQIAlAAIAAgSIglAAgAgQAQIAkAAIAAgSIgkAAgAhqgZIANgTQAOAIASAQIgNATIgggYgABZgmIAAgeIh2AAIAAAeIgTAAIAAgwIBAAAIAAgZIAYAAQAGADgIAEIAAASIBHAAIAAAwgAhhhTIANgRQASAKANAMIgNAUIgfgZg");
	this.shape_54.setTransform(199.5,52.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#3300CC").s().p("AAoBrIgDgSIAZAAQAOAAABgSIAFh0Ig5AAQgKAbgUAYIgOgRQAfghAKg9IAUAGQAJAEgKACIgIAeIBHAAIgGCDQgBAngdAAgAhmBoIAAinIAZAAQAGgTAFgYIAXAIQAEAEgHABQgDANgHARIAkAAIAACgIgUAAIAAgMIgrAAIAAATgAhTBCIArAAIAAgyIgrAAgAhTgCIArAAIAAgrIgrAAgAAHAKIARgRQATARALAQIgRATQgNgUgRgPg");
	this.shape_55.setTransform(174.9,52.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#3300CC").s().p("AhGA3IAAhYQgUAfgTARIgEgCQAfgqANggQAPgfAFgWIAWAPIgIAEIgcAyIAOAHIgGAFIAABmIABAkIgRAKIABg8gAgIBcIABgEQASAEAJAAQAJAAAAgLIAAhZIgBghIAXAJIgIAHIAABzQABARgXAHQAAgLgdgLgAgwBTQAQgVAKgXQAKgXAGgZIAUALIgJAFQgSAvggAfgABiBEQgEgNgMgVQgLgVgLgOIACgBQAVARAOAQQAOAPAAALQABALgEAEQgDAFgDAAQgDAAgBgJgAgngGQASgZANggQAMgfADgRIAXAPIgKAFIgRAhIBRAAIAKgMIAUAUQgRAAgWAcIgDgCIAOgcIhVAAQgSAdgTATg");
	this.shape_56.setTransform(149.5,52.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3300CC").s().p("AgKAYIAJgaIgJAAIAAgVIAVAAIAAAVIgLAag");
	this.shape_57.setTransform(124,61.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3300CC").s().p("AAHBcIAAgFQAbAEAGgBQAIgBgBgLIAAh5IgyAAQgMAAgLADIgIgJIBRAAIgBg/IAZAMIgKAHIAAAsIAOAAIAOgNIASATIguAAIAACCQAAASgWAIQgBgOgfgHgAhpgDQAAg+gBgTIAQAIIAlAAIAIgKIAPANIgHAHIAABPQAAAvABANIgQAIIAAgUIgnAAIAAAVIgPAIIABhdgAhbA4IAnAAIAAg+IgnAAgAhbgMIAnAAIAAg6IgnAAgAABAVQgDgRgQgUIADgDQAYASAEAGQAFAHAAAEQAAAEgFAHQgEAGgCAAQgDAAgDgMg");
	this.shape_58.setTransform(108.3,52.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#3300CC").s().p("AALBMIABgEQAeAFANgBQAMAAAAgQIAEiRIh8AAQgNAAgLADIgJgJICbAAIAIgLIARANIgJAHIgECTQAAAdgdAIQABgNgqgNgAhdAyQAagEB2gzIACAEQh7A7gGAPgAgKgXQgJgPgagWIACgDQAmAPAFAGQAFAHAAAGQAAAGgDAFQgCAGgCgBQgDABgFgLg");
	this.shape_59.setTransform(82.5,53.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#3300CC").s().p("AhQBvIAAi7IA8AAIAJgiIAXAFQADAEgGABIgKAYIBSAAIAAC4IgUAAIAAgJIh5AAIAAAMgAg8BRIB5AAIAAglIh5AAgAg8AaIB5AAIAAggIh5AAgAg8gZIB5AAIAAggIh5AAg");
	this.shape_60.setTransform(58.2,52.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},431).to({state:[]},2).wait(190));

	// background
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#3300CC").s().p("AhzBfIBSAAIAAiiIgBgkIAYAMIgJAIIAACyIAmAAIAAihIgBglIAZAMIgKAHIAACLQAmg3ANg1IAXARIgKAFQgkBBgcAdIAAAgIAuAAIAQgPIAVAVIjHAAQgNAAgLADgAhFAlQgDgYgdg8IACgDQAtA9ADAPQADAQgGAGQgFAHgDAAQgEAAgDgSg");
	this.shape_61.setTransform(196.8,325.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#3300CC").s().p("AATBuIAAifIgJAAQgPAhgSAQIgSgMQAngpAJg4IAUAGQAHADgIACQgCAKgHAUIBcAAIAAATIhGAAIAAAkIA9AAIAAARIg9AAIAAAhIBCAAIAAASIhCAAIAAA3gAhEBuIAAh+QgKAQgOAQIgQgQQAqgxAOg6IAWAHQAGAEgHABQgHAWgNAbIAGACQAEADgHABIAACWg");
	this.shape_62.setTransform(171.5,326.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3300CC").s().p("AgfBlIgEgWIAVAAQAEAAAAgDIAAh6IARAEQAfgXANgMIiOAAIAAgTICgAAIAEgEIATASQABAFgGAAQgcAZgwAdIAABuQAAAOgMAAg");
	this.shape_63.setTransform(146.9,326.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3300CC").s().p("AhyBjQAVgkgCg8IAWADQADADgFADIgBAZQAEAKAOAPIAAhIIgyAAIAAgTIAyAAIAAggIgoAAIAAgTIAoAAIAAgfIATAAQAIABgHAFIAAAZIAmAAIAAATIgmAAIAAAgIAsAAIAAATIgsAAIAAAfIAjAAIAAASIgjAAIAAAlQATAKAbAAIBrAAIgHATIhpAAQgzAAgfgrQgFAegMAUgAAfBGQgSAAAAgRIAAhVIBDAAIAAgtIhHAAIAAgSIBaAAIAABcIgTAAIAAgKIgvAAIAAA4QAAAIAHAAIApAAQAHAAABgGIADgSIAUAEIgDASQgDAVgUAAg");
	this.shape_64.setTransform(121.6,326.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#3300CC").s().p("AAuBxIgkgFIgCgVIAfAFQAOACACgUIAEgYIhaAAQgCAHgKAYIgUgHQALgXAHgeQgTAOgnARIgJgSQApgPAegRIABgEIAHAAIAcgUIhpAAIAAgTIBZAAIAAgXIhBAAIAAgTIBBAAIAAgdIASAAQAMABgLAGIAAAWIAxAAIAAANQAFgGAOgUIARAOQAFAGgLgBQgRATgTARIBIAAIAAATIhdAAQgQAMgPAKQA+gGAUgGIALARQAIAMgOgHQgyAEgxACIgEAPIBvAAIgIAsQgHAmgUAAIgDAAgAgCgpIATAAIAYgXIgrAAg");
	this.shape_65.setTransform(96.8,326.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#3300CC").s().p("AgiBpQgSAAgBgTIAAg/IATAAQAHABgGAFIAAAyQAAAIAGAAIA5AAQAHAAABgIIACgSIAUAFIgBAVQgDASgTAAgAhtBXQAOgXAJghIATAFQAHACgHAFQgIAfgQAagAA0AkIARgLQATAWAXAgIgUAPQgVglgSgVgAgSAUIARgLQAPATALAVIgUALQgJgWgOgSgAhQAMIAAh0IChAAIAABwIgUAAIAAgIIh6AAIAAAMgAAKgOIAzAAIAAgeIgzAAgAg9gOIA0AAIAAgeIg0AAgAAKg7IAzAAIAAgdIgzAAgAg9g7IA0AAIAAgdIg0AAg");
	this.shape_66.setTransform(71.8,326.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#3300CC").s().p("AhLBtIgGgXIAlgCIAAgYQgZANgiAIIgHgRQA3gLAjggIhSAAIAAgTIBeAAIAAgWIASAAQAHABgGAFIAAAQIBgAAIAAATIhaAAQAJAPALANIAigaIARAOQABAFgGgCIgjAVQAbAVAlAGIgJAUQhHgPgfhGQgJAOgRALIAAAiIAzgEIACAQIhjAMQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBAAIgCgBgAAIg6IgxABIgBgQIAtgBIgHgiIARABQAHABgGAFQACAOAFALIBNgDIAAAQIhIADQAVAjAbAAQAHAAACgKIACgKIATAFIgFASQgDARgTAAQgsAAgZg1gAhKgGIAAgvQgOAMgNAIIgIgSQAigVAUglIAQALQAFAEgIABIgPAWIAABBgAAhhhIAOgMQALAGAMAKIgPANQgMgLgKgGg");
	this.shape_67.setTransform(304.9,298.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#3300CC").s().p("AhyBwQANgdACgQQADgQABgRQABgRAAg1QAAg2gBgJIANAIIAfAAIAGgJIAPALIgHAHIAACpQABATgUAHQgBgNgXgFIAAgEQAUACAGgBQAFAAgBgMIAAg9IggAAQgBAcgFAVQgFAVgTAZgAhSAOIAgAAIAAguIggAAgAhSgmIAgAAIAAgvIggAAgABRBgIhUAAIgGAIIgOgMIAHgGIAAhTQAAgWgCgNIAVAJIgHAIIAABpIBVAAIAAh4IAVAIIgIAIIAABbIABAbIgOAHgAAABHQAUgbANglQgNgcgOgWIADgCQARAWANAVQAJgXAHgeIATAOIgHAFIgUArQAPAVADAKQAEAKgBAGQgBAGgDAEIgEADQgEAAgCgMQgDgRgKgUQgSAkgVATgAgihDIB1AAIAOgOIASATIh1AAQgMAAgLADgAAhhSQgEgNgOgPIACgDQAVALAFAGQAFAFgBAGQgBAHgDADIgFADQgEAAgBgKg");
	this.shape_68.setTransform(279.9,298.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#3300CC").s().p("AhtBVQBZgfAFhYIhYAAIAAgWIBaAAIAAgzIAVAAQAKABgJAGIAAAsIBdAAIAAAWIhcAAQAVBQBPAiIgMAXQhEgfgdhJQgQBPhVAeg");
	this.shape_69.setTransform(255.1,298.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#3300CC").s().p("AgLBpIAAiOIAVAAQAJACgIAGIAACGgAhsgQQBCgeAjg6IAPAEQAMAFgKAEQAZAoBKAeIgMATQhDgbggguQgmA1g5AXg");
	this.shape_70.setTransform(230,298.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#3300CC").s().p("AhmALIAAgVIDNAAIAAAVg");
	this.shape_71.setTransform(204.8,297.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#3300CC").s().p("AgKAYIAJgZIgJAAIAAgWIAVAAIAAAWIgLAZg");
	this.shape_72.setTransform(179.5,307.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3300CC").s().p("AAeBHIAAhwIgoAAIAABkIgNAJIABg9IgBg/IANAJIAoAAIAAgqIgfAAQgMAAgLADIgIgJIBxAAIANgNIASATIhGAAIAAAqIApAAIAHgJIAPAMIgIAGIAABUQABATgUAHQAAgMgVgGIAAgEIAWACQAGAAgBgLIAAhSIgqAAIAAB4IABAdIgOAGIABgrgAhvBuQAfggALggQAKggAAg1IgChKIAWAKIgIAHQAAA/gBAfQgBAfgMAcQgMAcgkAcgAhggOIgBhCIAVALIgIAEIAABlIgNAJQABgMAAgvg");
	this.shape_73.setTransform(163.5,298.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#3300CC").s().p("AgYBrQgQAAAAgRIAAgzQgcARgfAMIgIgTQAkgLAfgVIAAgPIAQAEQAMgGAOgNIhoAAIAAgTIBRAAIAAgbIg4AAIAAgTIA4AAIAAgcIASAAQAIABgHAFIAAAWIAuAAIAAATIguAAIAAAbIAXAAQAbgaAXggIASANQABAEgHAAIgkApIA9AAIAAATIhNAAQgcAXgXARIAAALQAogLArgSIANATQACAHgHgEQg0ARgnAIIAAAZQAAAHAHAAIBMAAQALAAADgQIAEgOIAUAFIgFAUQgGAYgQAAg");
	this.shape_74.setTransform(138.4,298.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#3300CC").s().p("AgggLIAOgTQAfASAUAXIgSAUQgWgagZgQg");
	this.shape_75.setTransform(115.1,306.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#3300CC").s().p("AhGBxIAAhlQgOAigQANIgKgRQAgglAIgwIgjAAIAAgTIAjAAIAAgyIATAAQAIABgHAEIAAAtIAgAAIAAATIggAAIAAAiQAUALAMALIgJATIgXgTIAABkgAgjBbQAZgaABg6IAAhmIBzAAIAAATIhhAAIAAAsIBDAAIAFgFIARAMQADACgGAEQgIApgSAhQAKAPAgAQIgHAUQgYgJgZgaQgRAXgeAPIgIgUQAcgNAPgUQgSglgGghIgKAAIAAAUQAABNghAbgAA3AlQANgTAFggIgjAAQAFAeAMAVg");
	this.shape_76.setTransform(96.8,298.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#3300CC").s().p("AhsBgQAQgRANgaIASAJQAHAHgJAAQgMAXgPARgAA/A/IAPgJQATAUAMAVIgTAMQgMgWgPgWgAAKA9IATgHQANAZAEATIgWAIQgEgVgKgYgAgmA7IAUgFQAIAbABATIgWAGQAAgWgHgZgAhvAyIAAgSIBkAAIAAgTIhTAAIAAgSIBTAAIAAgQIglAAIglAAIAAhYICmAAIAABYIhJAAIAAAQIBXAAIAAASIhXAAIAAATIBoAAIAAASgAAIgoIA2AAIAAgyIg2AAgAhBgoIA2AAIAAgyIg2AAgAASgvQALgVAGgVIARAHQAJAFgKACQgHARgKARgAg3hSIAQgHQAKASAHAWIgSAIQgHgYgIgRg");
	this.shape_77.setTransform(72.1,299.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#3300CC").s().p("AhpBhIAAgVIBYAAIAAisIAVAAQAJACgIAGIAAA4IBPAAIAAAWIhPAAIAABWIBlAAIAAAVg");
	this.shape_78.setTransform(306.9,269);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#3300CC").s().p("AhHBuIAAhiICOAAIAABgIgTAAIAAgLIhoAAIAAANgAg0BPIBoAAIAAgwIhoAAgABJgQIioAHQgBAIgEgEIgFgaIAqAAQAYgnAUgnIATAIQAGAFgIACQgUAggWAfIBogBQgWgUgRgNIAPgNQAmAcAgAhIgQAQg");
	this.shape_79.setTransform(282.1,269.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#3300CC").s().p("AhBBvQA/ggAAg6IgLAAQgNAAgLADIgJgJIAsAAIAAhDIgIAAQgMAAgKADIgJgJIAnAAIgBg3IATAJIgHAHIAAAnIArAAIgBg4IAVAKIgHAGIAAAoIARAAIAMgLIAPARIgsAAIAABDIAWAAIAMgMIAQASIgyAAQAABIABAPIgPAGIABhdIgrAAQAABBhJAdgAAJAPIArAAIAAhDIgrAAgAhSBRQAEgEABgKIAAhaIgGAAQgMAAgLADIgJgJIAjAAIAJgKIAPAOIgJAHIAABXIAigdIABADIgZAgQgHAJgHAMgAhKhKQgFgOgNgOIACgCQARAKAHAGQAHAFAAAIQAAAIgEACQgDADgCAAQgEAAgCgMg");
	this.shape_80.setTransform(257.2,269.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#3300CC").s().p("ABKAKQgEgFAAgFQAAgFAEgEQADgDAHgBQAFAAAEAEQAEAFAAAEQAAAFgEAFQgEADgFABQgGgBgEgDgAgJAKQgEgFABgFQgBgFAEgEQAFgDAEgBQAFAAAFAEQADAFABAEQgBAFgDAFQgFADgFABQgEgBgFgDgAhcAKQgEgFAAgFQAAgFAEgEQAEgDAFgBQAHAAADAEQAEAFAAAEQAAAFgEAFQgEADgGABQgFgBgEgDg");
	this.shape_81.setTransform(225.9,277.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#3300CC").s().p("ABKAKQgEgFAAgFQAAgFAEgEQAEgDAGgBQAFAAAEAEQAEAFAAAEQAAAFgEAFQgEADgFABQgGgBgEgDgAgIAKQgFgFAAgFQAAgFAFgEQAEgDAEgBQAFAAAFAEQADAFAAAEQAAAFgDAFQgFADgFABQgEgBgEgDgAhcAKQgEgFAAgFQAAgFAEgEQAEgDAFgBQAGAAAFAEQADAFAAAEQAAAFgDAFQgFADgGABQgFgBgEgDg");
	this.shape_82.setTransform(200.9,277.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#3300CC").s().p("AhzBfIBSAAIAAiiIgBgkIAYAMIgJAIIAACyIAmAAIAAihIgBglIAZAMIgKAHIAACLQAmg3ANg1IAYARIgLAFQgkBBgcAdIAAAgIAuAAIAPgPIAWAVIjHAAQgMAAgMADgAhFAlQgDgYgdg8IADgDQAsA9ADAPQADAQgFAGQgHAHgCAAQgEAAgDgSg");
	this.shape_83.setTransform(175.9,269.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#3300CC").s().p("AAUBuIAAifIgKAAQgPAhgSAQIgSgMQAngpAJg4IAVAGQAFADgGACQgDAKgHAUIBdAAIAAATIhHAAIAAAkIA9AAIAAARIg9AAIAAAhIBBAAIAAASIhBAAIAAA3gAhEBuIAAh+QgKAQgPAQIgPgQQArgxANg6IAWAHQAFAEgGABQgHAWgNAbIAGACQAEADgHABIAACWg");
	this.shape_84.setTransform(150.6,269.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#3300CC").s().p("AhyBjQAVgkgCg8IAWADQADADgFADIgBAZQAEAKAOAPIAAhIIgyAAIAAgTIAyAAIAAggIgoAAIAAgTIAoAAIAAgfIATAAQAIABgHAFIAAAZIAmAAIAAATIgmAAIAAAgIAsAAIAAATIgsAAIAAAfIAjAAIAAASIgjAAIAAAlQATAKAbAAIBrAAIgHATIhpAAQgzAAgfgrQgFAegMAUgAAfBGQgSAAAAgRIAAhVIBDAAIAAgtIhHAAIAAgSIBaAAIAABcIgTAAIAAgKIgvAAIAAA4QAAAIAHAAIApAAQAHAAABgGIADgSIAUAEIgDASQgDAVgUAAg");
	this.shape_85.setTransform(125.7,269.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#3300CC").s().p("AgiBuQgSAAAAgRIAAg2IASAAQAIABgHAFIAAAoQABAHAFAAIA+AAQAHAAAEgUIAUAHQgFAfgRAAgAhnBeQAPgZAGgZIATAIQAGADgHACQgGAZgPAXgAA7A4IAQgPQAVASAPAbIgTAOQgMgZgVgTgAgXAmIAOgOQATAPAOAWIgRANQgLgUgTgQgABQAcIAAgGIg5AAIAAAGIgQAAIAAh9IBaAAIAAB9gAAXAHIA5AAIAAgTIg5AAgAAXgbIA5AAIAAgUIg5AAgAAXg+IA5AAIAAgTIg5AAgAg6AbIAAg5QgPAXgYASIgNgQQAmgcANgdIgqAAIAAgSIArAAIAAgdIASAAQAJABgIAEIAAAYIAkAAIAAASIgkAAIAAANQAaALAOAPIgMARQgKgMgSgKIAAA3g");
	this.shape_86.setTransform(100.7,269.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#3300CC").s().p("AgggLIAOgTQAfASAUAXIgSAUQgWgagZgQg");
	this.shape_87.setTransform(77.6,277.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#3300CC").s().p("AgwBWIAAgEQAQgBANgHQAOgHAMgSQANgSAFgVQgUAMgOAAQgRAAgNgNQgMgNAAgWQAAgWAMgRQAPgUAYAAQAUAAAOARQASAVAAAeQAAAbgOAYQgNAXgYAQQgTANgXAAgAgVhDQgJAJAAAUQAAAZALAOQAIAKALAAQAFAAAIgCQAIgDAGgFIACgYQAAgMgEgOQgEgOgIgHQgHgHgIAAQgLAAgIAKg");
	this.shape_88.setTransform(65.5,270.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},370).to({state:[]},61).wait(192));

	// text
	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#3300CC").s().p("AhQCFQAegmAPgrQAPgrAAg2QABg3gBgiIASAMIBcAAIAJgMIATAPIgIAHIAAAqIABAWIgSAIIAAgTIhfAAQABA3gPAuQgPAvgtAugAgChCIBfAAIAAgxIhfAAgAAqBzQgcgBABgeIAAhHQAAgZgBgZIAcAMIgKAIIAAA7QAqggAUggIAWAWIgOACQgkAdgiASIAAAdQAAAXAWgBIApAAQAKgEACgUIABghIAGAAIADAkQACALAMAFQgLATgTABgAiBgiQAAhCgBgUIASAKIApAAIAIgKIATAMIgJAJIAABgIABAuIgSAIIAAgcIgqAAIAAAlIgSAJIABhngAhwAPIAqAAIAAh1IgqAAg");
	this.shape_89.setTransform(203,27.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#3300CC").s().p("ABqB9IgMgfQiQAPgOAQIgRgdQAQAAAtguQArgtAchBIAaAVIgOAGQglAzgeAgQggAggSAOICQgIQgPgbgagfIADgDQBCA2AEAMQADALAAAGQABAKgGAHQgFAGgDAAQgDAAgDgIgAh9AeQA0gnAigpQAggqAPgoIAaAXIgPAGQg5BbhUAvg");
	this.shape_90.setTransform(170.5,26.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#3300CC").s().p("AhdCLIAAiTQgMASgOAQIgQgUQAxg0ANhcIAbAJQAFAFgIABQgJAjgNAlIAFABQADAEgGADIAAC2gAAfCKIAAiaIhWAAIAAgXIBWAAIAAhfIAXAAQAKACgJAGIAABXIBRAAIAAAXIhRAAIAACag");
	this.shape_91.setTransform(140.2,26.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#3300CC").s().p("AiAB5QAVgWAOgkIAZAKQgJAkgZAcgAAGBGIAZgIQAUAiADAfIgeAHQgFgggNgggAgwBGIAZgBQAKAXgDApIgdABQABgpgEgXgABABJIAWgNQAYAXAUAiIgeAPQgRgkgTgXgAhcA4IAAhmIBIAAIAAhaIAaAAQAKABgJAGIAAAbIBmAAIAAAXIhmAAIAAAhIBbAAIAABjIgcAAIAAgHIiHAAIAAAKgAhBAXICHAAIAAguIiHAAg");
	this.shape_92.setTransform(109.6,26.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#3300CC").s().p("Ag5CKQBPgWASg2Ig9AAQgKAAgNADIgLgLIBgAAQAFgdAAg+IAcAOIgKAIQgCA0gEARIAtAAIAQgPIAVAXIhTAAIgKAVQAjAMARAJQARAKADAJQACAJgDADQgDAFgDAAQgGAAgIgNQgMgQgpgXQggAshFALgAhmBtQAFgGAAgLIAAh2IgEAAQgQABgNADIgLgLIAsAAIALgLIAPAQIgLAJIAAB1IAtgbIADADQgoAjgOASgAgLAhQgJgPgSgNIABgEQAdAKAGAGQAFAGAAAGQAAAEgDAFQgCAFgBAAQgDAAgFgKgAAGgBQgGgOgTgOIACgEQAbAJAFAGQAFAHAAAFQAAAEgDAEQgDAGgBgBQgDABgEgJgABegSIAQgeIiJAAQgKgBgNAEIgLgLIBVAAIAAglIgdAAQgQAAgNADIgLgKIBFAAIgBgqIAaANIgJAIIAAAVIArAAIAOgOIATAVIhMAAIAAAlIBEAAIAMgNIAWAWQgRABgaAegAhfhbQgDgQgRgTIACgDQARAJALAKQAMAKgCAJQgCAKgHADIgCABQgGAAgDgOg");
	this.shape_93.setTransform(78.4,26.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89}]},368).to({state:[]},2).wait(253));

	// D
	this.option2D = new lib.option2D();
	this.option2D.name = "option2D";
	this.option2D.parent = this;
	this.option2D.setTransform(187.8,544.7);
	this.option2D._off = true;

	this.timeline.addTween(cjs.Tween.get(this.option2D).wait(368).to({_off:false},0).to({_off:true},2).wait(253));

	// C
	this.option2C = new lib.option2C();
	this.option2C.name = "option2C";
	this.option2C.parent = this;
	this.option2C.setTransform(187.8,397.2);
	this.option2C._off = true;

	this.timeline.addTween(cjs.Tween.get(this.option2C).wait(368).to({_off:false},0).to({_off:true},2).wait(253));

	// B
	this.option2B = new lib.option2B();
	this.option2B.name = "option2B";
	this.option2B.parent = this;
	this.option2B.setTransform(187.8,234.6);
	this.option2B._off = true;

	this.timeline.addTween(cjs.Tween.get(this.option2B).wait(368).to({_off:false},0).to({_off:true},2).wait(253));

	// A
	this.option2A = new lib.option2A();
	this.option2A.name = "option2A";
	this.option2A.parent = this;
	this.option2A.setTransform(187.2,104.7);
	this.option2A._off = true;

	this.timeline.addTween(cjs.Tween.get(this.option2A).wait(368).to({_off:false},0).to({_off:true},2).wait(253));

	// people
	this.instance = new lib.people();
	this.instance.parent = this;
	this.instance.setTransform(257.5,463.1,1.143,1.143,0,0,0,1.2,40.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(368).to({_off:false},0).to({_off:true},2).wait(253));

	// background
	this.instance_1 = new lib.library();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-391,-31);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(368).to({_off:false},0).to({_off:true},2).wait(253));

	// glass
	this.instance_2 = new lib.glass();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-20,115,0.304,0.304);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(308).to({_off:false},0).to({_off:true},60).wait(255));

	// book
	this.instance_3 = new lib.book();
	this.instance_3.parent = this;
	this.instance_3.setTransform(13,233,0.329,0.329);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(308).to({_off:false},0).to({_off:true},60).wait(255));

	// D
	this.option1D = new lib.option1D();
	this.option1D.name = "option1D";
	this.option1D.parent = this;
	this.option1D.setTransform(187.8,522);
	this.option1D._off = true;

	this.timeline.addTween(cjs.Tween.get(this.option1D).wait(306).to({_off:false},0).to({_off:true},2).wait(315));

	// C
	this.option1C = new lib.option1C();
	this.option1C.name = "option1C";
	this.option1C.parent = this;
	this.option1C.setTransform(191.7,377);
	this.option1C._off = true;

	this.timeline.addTween(cjs.Tween.get(this.option1C).wait(306).to({_off:false},0).to({_off:true},2).wait(315));

	// B
	this.option1B = new lib.option1B();
	this.option1B.name = "option1B";
	this.option1B.parent = this;
	this.option1B.setTransform(187.8,224.4);
	this.option1B._off = true;

	this.timeline.addTween(cjs.Tween.get(this.option1B).wait(306).to({_off:false},0).to({_off:true},2).wait(315));

	// A
	this.option1A = new lib.option1A();
	this.option1A.name = "option1A";
	this.option1A.parent = this;
	this.option1A.setTransform(187.8,94.7);
	this.option1A._off = true;

	this.timeline.addTween(cjs.Tween.get(this.option1A).wait(306).to({_off:false},0).to({_off:true},2).wait(315));

	// background
	this.instance_4 = new lib.canteen_inner();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-400,0,1.581,1.581);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(306).to({_off:false},0).to({_off:true},2).wait(315));

	// people
	this.instance_5 = new lib.people();
	this.instance_5.parent = this;
	this.instance_5.setTransform(72.2,582.6,0.386,0.386,0,0,0,1.1,40.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(246).to({_off:false},0).to({x:234.2,y:514.6},59).to({_off:true},1).wait(317));

	// background
	this.instance_6 = new lib.canteen();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-280,-15,2.088,2.088);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(246).to({_off:false},0).to({_off:true},60).wait(317));

	// D
	this.instance_7 = new lib.option3B();
	this.instance_7.parent = this;
	this.instance_7.setTransform(605.2,583.8);

	this.option0D = new lib.option0D();
	this.option0D.name = "option0D";
	this.option0D.parent = this;
	this.option0D.setTransform(186,527.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.option0D},{t:this.instance_7}]},244).to({state:[]},2).wait(377));

	// C
	this.option0C = new lib.option0C();
	this.option0C.name = "option0C";
	this.option0C.parent = this;
	this.option0C.setTransform(186,388.5);
	this.option0C._off = true;

	this.timeline.addTween(cjs.Tween.get(this.option0C).wait(244).to({_off:false},0).to({_off:true},2).wait(377));

	// B
	this.option0B = new lib.option0B();
	this.option0B.name = "option0B";
	this.option0B.parent = this;
	this.option0B.setTransform(187.8,244.7);
	this.option0B._off = true;

	this.timeline.addTween(cjs.Tween.get(this.option0B).wait(244).to({_off:false},0).to({_off:true},2).wait(377));

	// A
	this.option0A = new lib.option0A();
	this.option0A.name = "option0A";
	this.option0A.parent = this;
	this.option0A.setTransform(186,106);
	this.option0A._off = true;

	this.timeline.addTween(cjs.Tween.get(this.option0A).wait(244).to({_off:false},0).to({_off:true},2).wait(377));

	// background
	this.instance_8 = new lib.classroom_background_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-237.8,284,0.426,0.426,0,0,0,1440,900);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(244).to({_off:false},0).to({_off:true},2).wait(377));

	// door
	this.instance_9 = new lib.door();
	this.instance_9.parent = this;
	this.instance_9.setTransform(280.4,547.4,1,1,0,0,0,1.5,6.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(160).to({_off:false},0).to({_off:true},84).wait(379));

	// people
	this.instance_10 = new lib.people();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-4.3,553.3,0.636,0.636,0,0,0,1,40.4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(160).to({_off:false},0).wait(27).to({x:115.5},0).wait(34).to({x:197.4},0).wait(22).to({x:253.6,y:553.4},0).to({_off:true},1).wait(379));

	// background
	this.instance_11 = new lib.door_background();
	this.instance_11.parent = this;
	this.instance_11.setTransform(182.1,340.2,1.946,1.946,0,0,0,5,6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(160).to({_off:false},0).to({_off:true},84).wait(379));

	// 图层_5
	this.instance_12 = new lib.next();
	this.instance_12.parent = this;
	this.instance_12.setTransform(155.1,271,1,1,0,0,0,-2,1);

	this.instance_13 = new lib.next();
	this.instance_13.parent = this;
	this.instance_13.setTransform(262.1,579.9,1,1,0,0,0,-2,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12}]}).wait(623));

	// xiaoyoumen
	this.instance_14 = new lib.xiaoyoumen();
	this.instance_14.parent = this;
	this.instance_14.setTransform(133.1,195,0.542,0.542,0,0,0,1,-5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(45).to({_off:false},0).wait(578));

	// qiao
	this.instance_15 = new lib.qiao();
	this.instance_15.parent = this;
	this.instance_15.setTransform(80,455.9,0.592,0.592,0,0,0,-1.5,-1.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(35).to({_off:false},0).wait(588));

	// tushuguan
	this.instance_16 = new lib.tushuguan();
	this.instance_16.parent = this;
	this.instance_16.setTransform(299.1,375,0.528,0.528,0,0,0,0.1,0);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(27).to({_off:false},0).wait(596));

	// zhixinlou
	this.instance_17 = new lib.zhixinlou();
	this.instance_17.parent = this;
	this.instance_17.setTransform(264.1,145.1,0.595,0.595,0,0,0,1,0.6);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(19).to({_off:false},0).to({_off:true},80).wait(524));

	// map
	this.instance_18 = new lib.map_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(193.9,336.7,0.979,0.979);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({regX:-6.4,regY:-2.9,x:187.6,y:333.9,alpha:0.048},0).wait(1).to({alpha:0.095},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.19},0).wait(1).to({alpha:0.238},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.381},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.476},0).wait(1).to({alpha:0.524},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.619},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.762},0).wait(1).to({alpha:0.81},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.905},0).wait(1).to({alpha:0.952},0).wait(1).to({alpha:1},0).wait(78).to({_off:true},1).wait(523));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(175.4,332.4,388,669);
// library properties:
lib.properties = {
	id: '7FAD498FDEED94498F419232330E6BCF',
	width: 375,
	height: 667,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/book.jpg?1543473330622", id:"book"},
		{src:"images/canteen.jpg?1543473330622", id:"canteen"},
		{src:"images/canteen_inner.jpg?1543473330622", id:"canteen_inner"},
		{src:"images/classroom_background.jpg?1543473330622", id:"classroom_background"},
		{src:"images/glass.jpg?1543473330622", id:"glass"},
		{src:"images/library.jpg?1543473330622", id:"library"},
		{src:"images/map.jpg?1543473330622", id:"map"},
		{src:"images/map_qiao.png?1543473330622", id:"map_qiao"},
		{src:"images/map_tushuguan.png?1543473330622", id:"map_tushuguan"},
		{src:"images/map_xiaoyoumen.png?1543473330622", id:"map_xiaoyoumen"},
		{src:"images/map_zhixinlou.png?1543473330622", id:"map_zhixinlou"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7FAD498FDEED94498F419232330E6BCF'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Virtual camera API : 

AdobeAn.VirtualCamera = new function() {
	var _camera = new Object();
	function VirtualCamera(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined )
	{
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VirtualCamera.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VirtualCamera.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VirtualCamera.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VirtualCamera.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VirtualCamera.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VirtualCamera.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VirtualCamera.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VirtualCamera.prototype.resetZoom = function() {
	this.setZoom(100);
};

VirtualCamera.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VirtualCamera.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VirtualCamera.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VirtualCamera.prototype.resetRotation = function() {
this.setRotation(0);
};

VirtualCamera.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VirtualCamera.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VirtualCamera.prototype.getZDepth = function() {
	return this.camera.depth;
}
VirtualCamera.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VirtualCamera.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VirtualCamera.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
if(this.camera.pinToObject != undefined) {
this.camera.pinToObject.pinOffsetX = offsetX;
this.camera.pinToObject.pinOffsetY = offsetY;
this.camera.pinToObject.pinOffsetZ = offsetZ;
}
};

VirtualCamera.prototype.unpinCamera = function() {
this.camera.pinToObject = undefined;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VirtualCamera(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
VirtualCamera.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;