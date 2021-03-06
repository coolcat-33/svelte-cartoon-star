import { query_selector_all } from 'svelte/internal';
import { writable } from 'svelte/store';

export const cartoons = writable([])
Parse.initialize("7NnO7LU7KFHLozh4WvODyf3dsaaCCIZrrkUcuKpR","9aisPLhHCoN5TxLgYXKus5jlBgKMh1cLJylttQ0y");
Parse.serverURL = 'https://parseapi.back4app.com/'

export const fetchCartoons = async() => {
    const query = new Parse.Query("cartoon");
    query.find().then((results) => {

        let data = []
        for (const object of results) {
			// Access the Parse Object attributes using the .GET method
            const id = object.get('objectId');
            const url = object.get('url');
            let likes = object.get('stars');
            let users_liked = object.get('users_liked');
            const user = object.get("user")
            const email = object.get("email")
            let type = object.get("type")
            data.push({url, id, users_liked, likes, object, user, email, type})
        }
        cartoons.set(data)
        console.log(data)
    })
   
}

fetchCartoons()