import { OrderModel } from "../modules/orders/models/order.model";
import { OrderService } from "../modules/orders/services/order.service";


describe("OrderService", () => {

    let orderService: OrderService;
    let spyObj;

    beforeEach(() => {
        spyObj = jasmine.createSpyObj("LocalStorageService", ['setItem', 'getItem']);
        orderService = new OrderService(spyObj);
    });

    it("getAllOrders should return corrrect list of orders", () => {
        // Arrange
        const expectedOrderModels = [new OrderModel('Victor', 'Dyshkant', [], 0)];
        spyObj.getItem.and.returnValue(expectedOrderModels);

        // Act
        let result = orderService.getAllOrders()

        //Assert
        expect(result).toBe(expectedOrderModels);
        expect(spyObj.getItem.calls.count()).toBe(1);
    });

    it("getAllOrders should return empty collection", () => {
        // Arrange
        spyObj.getItem.and.returnValue(null);

        // Act
        let result = orderService.getAllOrders()

        //Assert
        expect(result).toEqual([]);
        expect(spyObj.getItem.calls.count()).toBe(1);
    });

    it("createOrder should get all orders and push new one to list", () => {
        // Arrange
        const orderModels = [new OrderModel('Victor', 'Dyshkant', [], 0)];
        spyObj.getItem.and.returnValue(orderModels);

        // Act
        orderService.createOrder(new OrderModel('Alla', 'Dyshkant', [], 0))

        //Assert
        expect(spyObj.getItem.calls.count()).toBe(1);
        expect(spyObj.setItem).toHaveBeenCalledWith("OrderService", orderModels);
    })
});