import { HttpHandlerFn, HttpRequest } from "@angular/common/http";

export const authInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const TOKEN = 'abc';
  const HAS_TOKEN = TOKEN;

  if (HAS_TOKEN) {
    const newReq = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${HAS_TOKEN}`)
    })

    return next(newReq)
  }

  return next(req)
}
