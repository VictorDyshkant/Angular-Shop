import { of } from "rxjs";
import { BoughtProductModel } from "src/app/modules/product/models/bought-product.model";
import { ProductModel } from "src/app/modules/product/models/product.model";
import { OrderByPipe } from "./order-by.pipe";


describe("OrderByPipe tests", () => {
    let orderByPipe: OrderByPipe;

    beforeEach(() => {
        orderByPipe = new OrderByPipe();
    });

    it("orderByPipe should correct order by id", () => {
        // Arrange
        let array = [
            new BoughtProductModel(new ProductModel(1, "IPhone1", 300, 4, ''), 1),
            new BoughtProductModel(new ProductModel(2, "IPhone2", 200, 3, ''), 5),
            new BoughtProductModel(new ProductModel(3, "IPhone3", 100, 5, ''), 9)
        ];
        let copiedArray = { ...array };
        let boughtProducts = of(array);

        // Act & Assert
        orderByPipe.transform(boughtProducts, "id", false)
            .subscribe(arr => {
                for (let i = 0; i < arr.length; i++) {
                    expect(arr[i]).toEqual(copiedArray[arr.length - 1 - i]);
                }
            });
    });
});