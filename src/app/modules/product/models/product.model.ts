
export class ProductModel {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public rate: number,
        public img: string,
        public description?: string) {

    }
}
