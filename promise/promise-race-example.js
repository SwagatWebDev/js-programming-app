import fetch from "node-fetch";

function makeAPICalls(url){
    return fetch(url)
        .then((response) => {
            if(!response.ok){
                throw new Error('HTTP Error', response.status);
            }
            return response.json();
        })
}

Promise.race([
    makeAPICalls('https://jsonplaceholder.typicode.com/posts'),
    makeAPICalls('https://jsonplaceholder.typicode.com/users'),
    makeAPICalls('https://jsonplaceholder.typicode.com/comments')
]).then((firstResponse) => {
    console.log('Data form API to respond', firstResponse);
}).catch((error) => {
    console.log('An error occurred', error);
})
SELECT 
    COALESCE(p.leanix_capability_id, s.leanix_capability_id) AS id,
    cv.name AS name,
    cv.full_path AS capability_full_path_name
FROM 
    capability_view cv
LEFT JOIN 
    leanix_pattern p 
    ON cv.leanix_id = p.leanix_capability_id
LEFT JOIN 
    leanix_standard s 
    ON cv.leanix_id = s.leanix_capability_id;


