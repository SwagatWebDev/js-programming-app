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
import org.springframework.graphql.client.GraphQlClient;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

    public ITAMSummaryResponse fetchITAMSummary(String itamNumber) {
        String query = """
            query GetSBOMITAMSummary($itamNumber: String!) {
              getSBOMITAMSummary(itamNumber: $itamNumber) {
                ITAMSummary {
                  Description
                  ID
                  OperationalStatus
                  RBFRating
                  Name
                }
                RepoCount {
                  Repos
                }
                LibraryCount {
                  Libraries
                }
                TechnologySummary {
                  LibraryType
                  Count
                }
                OutdatedSummary {
                  LibraryType
                  OutdatedCount
                }
                HealthSummary {
                  Healthy
                  Count
                }
              }
            }
        """;

    }
}





