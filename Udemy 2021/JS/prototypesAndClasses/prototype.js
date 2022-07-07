// making a new string method for the prototype
String.prototype.yell = function () {
    console.log(this.toUpperCase());
}