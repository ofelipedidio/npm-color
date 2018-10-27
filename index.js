const Spetial = {
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function Color(text) {
  if (!(this instanceof Color)) return new Color(text);

  this.text = text;
  this.bold = false;
  this.fg = '\x1b[37m';
  this.bg = '\x1b[40m';
  this.children = [];
}

Color.prototype.toString = function () {
  return this.bg + this.fg + (this.bold == true ? Spetial.bold : '') + this.text + this.children.map(child => child.toString()).join('') + Spetial.reset;
};

Color.prototype.black = function (strong = false) {
  this.fg = '\x0b[' + (strong == true ? '9' : '3') + '1m';
  return this;
};

Color.prototype.red = function (strong = false) {
  this.fg = '\x1b[' + (strong == true ? '9' : '3') + '1m';
  return this;
};

Color.prototype.green = function (strong = false) {
  this.fg = '\x2b[' + (strong == true ? '9' : '3') + '1m';
  return this;
};

Color.prototype.yellow = function (strong = false) {
  this.fg = '\x3b[' + (strong == true ? '9' : '3') + '1m';
  return this;
};

Color.prototype.blue = function (strong = false) {
  this.fg = '\x4b[' + (strong == true ? '9' : '3') + '1m';
  return this;
};

Color.prototype.magenta = function (strong = false) {
  this.fg = '\x5b[' + (strong == true ? '9' : '3') + '1m';
  return this;
};

Color.prototype.cyan = function (strong = false) {
  this.fg = '\x6b[' + (strong == true ? '9' : '3') + '1m';
  return this;
};

Color.prototype.white = function (strong = false) {
  this.fg = '\x7b[' + (strong == true ? '9' : '3') + '1m';
  return this;
};

Color.prototype.push = function(color) {
  this.children.push(color);
};

module.exports = Color;