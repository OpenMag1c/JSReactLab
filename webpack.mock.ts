// eslint-disable-next-line import/no-extraneous-dependencies
import webpackMockServer from "webpack-mock-server";
import IProduct from "@/types/IProduct";
import categories from "./serverData/categories";
import products from "./serverData/products";
import users from "./serverData/users";
import userProfiles, { getEmptyProfile } from "./serverData/profiles";
import { Age, Genres, SortingType } from "@/constants/filters";

export default webpackMockServer.add((app, helper) => {
  app.get("/api/products", (_req, res) => {
    let productsList = [...products];
    const { sortBy: filter, name: searchName, category: categoryName, amount, genre, age, type } = _req.query;

    if (genre && +genre !== Genres.All) {
      productsList = productsList.filter((product) => product.genre === +genre);
    }

    if (age && +age !== Age.AllAges) {
      productsList = productsList.filter((product) => product.age === +age);
    }

    if (filter) {
      const sortByKey = (a: IProduct, b: IProduct, key: keyof IProduct = "name") => (a[key] < b[key] ? 1 : -1);
      productsList = productsList.sort((a, b) => sortByKey(a, b, filter as keyof IProduct));
      if (type && +type === SortingType.Ascending) {
        productsList.reverse();
      }
    }

    if (searchName) {
      productsList = productsList.filter((product) =>
        product.name.toLowerCase().includes(String(searchName).toLowerCase())
      );
    }

    if (categoryName) {
      const category = `${categoryName}` in categories ? categories[`${categoryName}`] : null;

      if (category && category.id) {
        productsList = productsList.filter((elem) => elem.categoryId === category.id);
      }
    }

    if (amount && +amount) {
      productsList = productsList.length > +amount ? productsList.slice(0, +amount) : productsList;
    }

    res.json(productsList);
  });
  app.get("/api/categories", (_req, res) => {
    res.json(Object.values(categories));
  });

  app.post("/api/auth/signIn/", (req, res) => {
    const { login, password } = JSON.parse(req.body);
    const user = users.find((u) => u.login === login && u.password === password);

    if (user) {
      res.json(user.id);
    } else {
      res.status(404).json();
    }
  });

  app.get("/api/auth/getUser/", (req, res) => {
    const { id } = req.query;
    const user = id ? users.find((u) => u.id === +id) : null;

    if (user) {
      res.json(user);
    } else {
      res.json(null);
    }
  });

  app.put("/api/auth/signUp/", (req, res) => {
    const { login, password } = JSON.parse(req.body);

    if (login) {
      const user = users.find((u) => u.login === login);
      if (user) {
        res.status(400).json();
        return;
      }
    }

    if (login && password) {
      const id = helper.getUniqueIdInt();
      users.push({ login, password, id });
      res.json(id);
    } else {
      res.status(400).json();
    }
  });

  app.get("/api/getProfile", (req, res) => {
    const { id } = req.query;

    const user = id ? users.find((u) => u.id === +id) : null;

    if (user) {
      const userProfile = userProfiles.find((profile) => profile.user === user);
      const result = userProfile || getEmptyProfile(user);
      res.json(result);
    }
  });

  app.post("/api/saveProfile", (req, res) => {
    const { user: reqUser, description, avatar } = JSON.parse(req.body);
    const { id } = req.query;

    const user = id ? users.find((u) => u.id === +id) : null;
    const profile = userProfiles.find((prof) => prof.user === user);

    if (user && profile) {
      if (reqUser) {
        user.login = reqUser.login;
      }
      if (description) {
        profile.description = description;
      }
      if (avatar) {
        profile.avatar = avatar;
      }
      res.json(profile);
    }
  });

  app.post("/api/changePassword", (req, res) => {
    const { password } = JSON.parse(req.body);
    const { id } = req.query;

    const user = id ? users.find((u) => u.id === +id) : null;

    if (user && password) {
      user.password = password;
      res.json(true);
    } else {
      res.json(false);
    }
  });
});
