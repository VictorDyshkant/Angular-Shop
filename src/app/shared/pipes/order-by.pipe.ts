import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BoughtProductModel } from 'src/app/modules/product/models/bought-product.model';

@Pipe({
    name: 'orderBy',
    pure: false
})
export class OrderByPipe implements PipeTransform {
    transform(observable: Observable<BoughtProductModel[]>, value: string, descending: boolean): Observable<BoughtProductModel[]> {
        const cof = descending ? 1 : -1;
        const sortedArray = observable.pipe(map(arr => {
            arr.sort((a, b) => {
                if (a.product[value] > b.product[value]) {
                    return cof * 1;
                }

                if (a.product[value] < b.product[value]) {
                    return cof * -1;
                }

                return 0;
            });

            return arr;
        }));

        return sortedArray;
    }
}
