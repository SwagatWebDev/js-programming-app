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

if (!CollectionUtils.isEmpty(filterDto.getProviders())) {
    filteredSolutionsList = filteredSolutionsList.stream()
        .filter(solution -> solution.getProviderFullName() != null &&
            filterDto.getProviders().stream()
                .map(String::toUpperCase)
                .anyMatch(provider -> provider.equals(solution.getProviderFullName().toUpperCase())))
        .collect(Collectors.toList());
}


