import { Request, Response } from "express";
import { Controller } from "../../presentation/contracts";

// this is an adapter to adapt the express route and the controller from our program
export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpResponse = await controller.handle();

    return res.status(httpResponse.statusCode).json(httpResponse.data);
  };
};
