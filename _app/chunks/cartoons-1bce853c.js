import "./index-2e044943.js";
import { w as writable } from "./index-19c80a23.js";
const cartoons = writable([]);
Parse.initialize("7NnO7LU7KFHLozh4WvODyf3dsaaCCIZrrkUcuKpR", "9aisPLhHCoN5TxLgYXKus5jlBgKMh1cLJylttQ0y");
Parse.serverURL = "https://parseapi.back4app.com/";
const fetchCartoons = async () => {
  const query = new Parse.Query("cartoon");
  query.find().then((results) => {
    let data = [];
    for (const object of results) {
      const id = object.get("objectId");
      const url = object.get("url");
      let likes = object.get("stars");
      let users_liked = object.get("users_liked");
      const user = object.get("user");
      const email = object.get("email");
      data.push({ url, id, users_liked, likes, object, user, email });
    }
    cartoons.set(data);
    console.log(data);
  });
};
fetchCartoons();
export { cartoons as c };
