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
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class SBOMResponse {

    @JsonProperty("data")
    private DataWrapper data;

    public DataWrapper getData() { return data; }
    public void setData(DataWrapper data) { this.data = data; }

    public static class DataWrapper {
        @JsonProperty("getSBOMITAMSummary")
        private GetSBOMITAMSummary getSBOMITAMSummary;

        public GetSBOMITAMSummary getGetSBOMITAMSummary() { return getSBOMITAMSummary; }
        public void setGetSBOMITAMSummary(GetSBOMITAMSummary getSBOMITAMSummary) { this.getSBOMITAMSummary = getSBOMITAMSummary; }
    }

    public static class GetSBOMITAMSummary {
        @JsonProperty("ITAMSummary")
        private ITAMSummary itamSummary;  // Change from List<ITAMSummary> to ITAMSummary

        public ITAMSummary getItamSummary() { return itamSummary; }
        public void setItamSummary(ITAMSummary itamSummary) { this.itamSummary = itamSummary; }
    }
}
import java.util.concurrent.ExecutionException;

public class SBOMService {

    private final GraphQLClient graphQLClient; // Assume this is correctly initialized

    public SBOMService(GraphQLClient graphQLClient) {
        this.graphQLClient = graphQLClient;
    }

    public ITAMSummary getSBOMSummary(String itamNumber) throws ExecutionException, InterruptedException {
        String formattedItamNumber = itamNumber.toLowerCase();

        String SBOM_QUERY = """
            query getSBOMITAMSummary($itamNumber: String!) {
                getSBOMITAMSummary(itamNumber: $itamNumber) {
                    ITAMSummary {
                        Description
                        ID
                        OperationalStatus
                        RBFRating
                        Name
                    }
                }
            }
        """;

        // Execute query and log the response
        SBOMResponse response = graphQLClient.document(SBOM_QUERY)
            .variable("itamNumber", formattedItamNumber)
            .retrieve("data", SBOMResponse.class)
            .toFuture()
            .get();

        // Debugging: Print API response
        System.out.println("GraphQL API Response: " + response);

        // Handle null responses
        if (response == null || response.getData() == null || response.getData().getGetSBOMITAMSummary() == null) {
            System.out.println("No data received from API.");
            return null;
        }

        // Return the extracted ITAMSummary object
        return response.getData().getGetSBOMITAMSummary().getItamSummary();
    }
}



