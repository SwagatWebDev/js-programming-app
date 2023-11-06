import fetch from "node-fetch";

const API_URL = 'https://api.github.com/users/SwagatWebDev';

const handlePromise = async () => {
    try{
        const data = await fetch(API_URL);
        const jsonValue = await data.json();
        console.log(jsonValue);
    } catch (error) {
        console.log(error);
    }
}

handlePromise();
