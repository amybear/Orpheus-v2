// Generated by CoffeeScript 1.8.0
(function() {
  this.layers.BackgroundLayer = cc.Layer.extend({
    ctor: function() {
      this._super();
      return this.init();
    },
    init: function() {
      var centerPos, spriteBG, winsize;
      this._super();
      winsize = cc.director.getWinSize();
      centerPos = cc.p(winsize.width / 2, winsize.height / 2);
      spriteBG = new cc.Sprite(res.PlayBG_png);
      spriteBG.setPosition(centerPos);
      return this.addChild(spriteBG);
    }
  });

}).call(this);
