import { Request, Response, NextFunction } from "express";
import * as logger from "firebase-functions/logger";

/**
 * Intercepts the response and logs the details before sending it.
 * @param {Response} res - The response object.
 * @param {Function} send - Original send function.
 * @return {Function} - The response interceptor function.
 */
function responseInterceptor(
  res: Response,
  send: (content: any) => Response<any, Record<string, any>>
): (content: any) => Response<any, Record<string, any>> {
  return function (content: any) {
    // @ts-ignore
    res.response = content;
    res.send = send;
    return res.send(content);
  };
}

/**
 * Logs the incoming request details.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next function.
 */
export function logTraffic(req: Request, res: Response, next: NextFunction) {
  const { body, url: endpoint, params, method } = req;
  const id = Date.now();
  res.send = responseInterceptor(res, res.send);
  logger.info({
    type: "request",
    body: JSON.stringify(body),
    params,
    endpoint,
    method,
    id,
  });

  res.on("finish", () => {
    logger.info({
      //@ts-ignore
      response: res.response,
      staus: res.statusCode,
      type: "response",
      id,
    });
  });
  next();
}
