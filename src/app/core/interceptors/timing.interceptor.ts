import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';


export class TimingInterceptor implements HttpInterceptor {

    urlParts: string[] = ['products'];

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let hronometerStart;
        if (this.urlParts.some(url => req.url.includes(url))) {
            hronometerStart = Date.now();
        }

        return next.handle(req).pipe(
            filter((event: HttpEvent<any>) => event.type === HttpEventType.Response),
            map((event: HttpResponse<any>) => {
                if (this.urlParts.some(url => event.url.includes(url))) {
                    const hronometerEnd = Date.now();
                    console.log(`Difference between request end response in ${event.url} is: ${hronometerEnd - hronometerStart} milliseconds`);
                }
                return event;
            })
        );
    }
}