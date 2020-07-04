"use strict";
var L11_Advanced;
(function (L11_Advanced) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        static getRandom(_minLength, _maxLength) {
            let vector = new Vector(0, 0);
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            vector.set(Math.cos(direction), Math.sin(direction));
            vector.scale(length);
            return vector;
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    L11_Advanced.Vector = Vector;
})(L11_Advanced || (L11_Advanced = {}));
//# sourceMappingURL=vector.js.map