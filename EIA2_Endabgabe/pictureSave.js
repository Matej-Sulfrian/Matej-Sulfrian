"use strict";
var Picture;
(function (Picture) {
    class PictureSave {
        constructor(_date, _figures, _sizex, _sizey, _bg) {
            this.date = _date;
            this.figures = _figures;
            this.sizex = _sizex;
            this.sizey = _sizey;
            this.bg = _bg;
        }
    }
    Picture.PictureSave = PictureSave;
})(Picture || (Picture = {}));
//# sourceMappingURL=pictureSave.js.map