import fetch from "node-fetch";

const API_URL = "https://api.github.com/users/SwagatWebDev";

const handlePromise = () => {
    fetch(API_URL)
        .then((data) => {
            if (!data.ok) {
                throw new Error("HTTP Error: " + data.status);
            }
            return data.json();
        })
        .then((jsonValue) => {
            console.log(jsonValue);
        })
        .catch((error) => {
            console.log(error);
        });
};

handlePromise();

