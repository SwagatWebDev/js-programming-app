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
public SBOMResponse getSBOMSummary(String itamNumber) {
        String query = """
        {
            getSBOMITAMSummary(itamNumber: "%s") {
                itamSummary {
                    description
                    id
                    operationalStatus
                    rbfRating
                    name
                }
                repoCount {
                    repos
                }
                libraryCount {
                    libraries
                }
                technologySummary {
                    libraryType
                    count
                }
                outdatedSummary {
                    libraryType
                    outdatedCount
                }
                healthSummary {
                    healthy
                    count
                }
            }
        }
        """.formatted(itamNumber);

        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("query", query);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        ResponseEntity<SBOMResponse> response = restTemplate.postForEntity(
                GRAPHQL_ENDPOINT, requestBody, SBOMResponse.class);

        return response.getBody();
    }


