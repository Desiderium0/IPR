import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs';

export const itc1Interceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    //клонируем и отправляем запрос дальше на сервер
    setHeaders: {
      Auth: 'bearer token',
    },
  });

  return next(req).pipe(
    //в случае если api ручка не действительна, отработает ошибка и вызовет статус ошибки
    catchError((err) => {
      console.log('Error status: ' + err.status);
      return [];
    })
  );
};
