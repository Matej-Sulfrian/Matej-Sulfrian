namespace Picture {
    export class PictureSave {
        date: string;
        figures: Figure [];
        sizex: number;
        sizey: number;
        bg: string;

        constructor (_date: string, _figures: Figure [], _sizex: number, _sizey: number, _bg: string) {
            this.date = _date;
            this.figures = _figures;
            this.sizex = _sizex;
            this.sizey = _sizey;
            this.bg = _bg;
        }
    } 
}