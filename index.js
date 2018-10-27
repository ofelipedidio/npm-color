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
  this.fg = '\x1b[' + (strong == true ? '9' : '3') + '0m';
  return this;
};

Color.prototype.red = function (strong = false) {
  this.fg = '\x1b[' + (strong == true ? '9' : '3') + '1m';
  return this;
};

Color.prototype.green = function (strong = false) {
  this.fg = '\x1b[' + (strong == true ? '9' : '3') + '2m';
  return this;
};

Color.prototype.yellow = function (strong = false) {
  this.fg = '\x1b[' + (strong == true ? '9' : '3') + '3m';
  return this;
};

Color.prototype.blue = function (strong = false) {
  this.fg = '\x1b[' + (strong == true ? '9' : '3') + '4m';
  return this;
};

Color.prototype.magenta = function (strong = false) {
  this.fg = '\x1b[' + (strong == true ? '9' : '3') + '5m';
  return this;
};

Color.prototype.cyan = function (strong = false) {
  this.fg = '\x1b[' + (strong == true ? '9' : '3') + '6m';
  return this;
};

Color.prototype.white = function (strong = false) {
  this.fg = '\x1b[' + (strong == true ? '9' : '3') + '7m';
  return this;
};

Color.prototype.push = function(color) {
  this.children.push(color);
  return this;
};

module.exports = Color;