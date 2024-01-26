import { Router } from "express";

import { CreateUserController } from "../modules/users/controllers/createUserController";
// import { ListUserController } from "../modules/accounts/controllers/listUserController";
// import { DeleteUserController } from "../modules/accounts/controllers/deleteUserController";
// import { ListUserByIdController } from "../modules/accounts/controllers/listUserByIdController";

const userRoutes = Router();

userRoutes.post("/", (request, response) => {
  return new CreateUserController().handle(request, response);
});

// userRoutes.get("/", (request, response) => {
//   return new ListUserController().handle(request, response);
// });

// userRoutes.get("/:id/list", (request, response) => {
//   return new ListUserByIdController().handle(request, response);
// });

// userRoutes.delete("/", (request, response) => {
//   return new DeleteUserController().handle(request, response);
// });

export { userRoutes };
