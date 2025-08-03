import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs';

export const itc1Interceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    //this method fills the header before sending the request to the server and then sends the request to the server
    setHeaders: {
      Auth: 'bearer token',
    },
  });

  return next(req).pipe(
    // next method sends data to the server, and returns response if the request will work fine else drop error
    catchError((err) => {
      console.log('Error status: ' + err.status);
      return [];
    })
  );
};
