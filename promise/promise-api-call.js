import fetch from "node-fetch";

const API_URL = 'https://api.github.com/users/SwagatWebDev';

const handelPromise = () => {
    fetch(API_URL)
        .then((data) => {
            if(!data.ok){
                throw new Error('Http Error:'+ data.status);
            }
            return data.json();
        }).then((jsonValue) => {
        console.log(jsonValue)
    }).catch((error) => {
        console.log('My error '+ error);
    })
};
handelPromise();