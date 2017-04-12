$(document).ready(function(){
function Button(text) {
  this.text = text;
}

Button.prototype = {
  create: function() {
    var self = this;
    this.$element = $('<button>'); 
    this.$element.text(this.text);
    this.$element.click(function() {
      alert(self.text);
    });
    this.$element.appendTo($('body'));
  }
}

var btn1 = new Button('hello');
btn1.create();
});
