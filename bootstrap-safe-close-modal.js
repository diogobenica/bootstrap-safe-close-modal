(function() {
  var _super = $.fn.modal.Constructor.prototype.hide;

  $.extend($.fn.modal.Constructor.prototype, {
    hide: function() {
      if (!this.$element.data('safe-close') || confirm(message || "If you close this window, all information will be lost. Do you want to close?")) {
        _super.apply(this, arguments);
      }
    }
  });
})();
