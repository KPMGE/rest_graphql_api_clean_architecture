import { Controller } from "../../presentation/contracts";

export const adaptResolver = async (controller: Controller) => {
  const httpResponse = await controller.handle();

  return httpResponse.data;
};
