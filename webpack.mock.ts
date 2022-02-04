// eslint-disable-next-line import/no-extraneous-dependencies
import webpackMockServer from "webpack-mock-server";
import IProduct, { products } from "./serverData/products";
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
    let productsList = [...products];

    if (_req.query.sortBy) {
      const asc = _req.query.ascending;

      productsList = productsList.sort((a, b) => {
        const sortBy = ((_req.query.sortBy as string) in a ? _req.query.sortBy : "date") as keyof IProduct;
        const result = a[sortBy] > b[sortBy] ? -1 : 1;
        return asc ? -result : result;
      });
    }

    if (_req.query.name) {
      const { name: searchName } = _req.query;

      productsList = productsList.filter((product) =>
        product.name.toLowerCase().includes(String(searchName).toLowerCase())
      );
    }

    if (_req.query.category) {
      const { category: categoryName } = _req.query;
      const category = `${categoryName}` in categories ? categories[`${categoryName}`] : null;

      if (category && category.id) {
        productsList = productsList.filter((elem) => elem.categoryId === category.id);
      }
    }

    if (_req.query.amount) {
      const { amount } = _req.query;

      if (+amount) {
        productsList = productsList.length > +amount ? productsList.slice(0, +amount) : productsList;
      }
    }

    res.json(productsList);
  });
  app.get("/api/categories", (_req, res) => {
    res.json(Object.values(categories));
  });
});
