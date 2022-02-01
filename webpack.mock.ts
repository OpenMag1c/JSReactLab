// eslint-disable-next-line import/no-extraneous-dependencies
import webpackMockServer from "webpack-mock-server";
import { products } from "./serverData/products";
import { categories } from "./serverData/categories";

export default webpackMockServer.add((app, helper) => {
  app.get("/testMock", (_req, res) => {
    const response = {
      id: helper.getUniqueIdInt(),
      randomInt: helper.getRandomInt(),
      lastDate: new Date(),
    };

    res.json(response);
  });
  app.post("/testPostMock", (req, res) => {
    res.json({ body: req.body || null, success: true });
  });
  app.get("/api/products", (_req, res) => {
    const productsList = [...products];

    res.json(productsList);
  });
  app.get("/api/categories", (_req, res) => {
    res.json(Object.values(categories));
  });
});
