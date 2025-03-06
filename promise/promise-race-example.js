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

private static final String SBOM_QUERY = """
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


import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import java.util.HashMap;
import java.util.Map;

@Service
public class SBOMService {

    private final WebClient webClient;

    public SBOMService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl("https://your-graphql-endpoint.com/graphql").build();
    }

    public Mono<SBOMResponse> getSBOMSummary(String itamNumber) {
        // Prepare GraphQL request payload
        Map<String, Object> variables = new HashMap<>();
        variables.put("itamNumber", itamNumber);

        GraphQLRequest request = new GraphQLRequest(SBOM_QUERY, variables);

        // Call GraphQL API
        return webClient.post()
                .bodyValue(request)
                .retrieve()
                .bodyToMono(SBOMResponse.class);
    }
}


import java.util.Map;

public class GraphQLRequest {
    private String query;
    private Map<String, Object> variables;

    public GraphQLRequest(String query, Map<String, Object> variables) {
        this.query = query;
        this.variables = variables;
    }

    public String getQuery() {
        return query;
    }

    public Map<String, Object> getVariables() {
        return variables;
    }
}


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class SBOMResponse {
    private SBOMData data;

    public SBOMData getData() {
        return data;
    }
}

@JsonIgnoreProperties(ignoreUnknown = true)
class SBOMData {
    private SBOMSummary getSBOMITAMSummary;

    public SBOMSummary getGetSBOMITAMSummary() {
        return getSBOMITAMSummary;
    }
}

@JsonIgnoreProperties(ignoreUnknown = true)
class SBOMSummary {
    private ITAMSummary ITAMSummary;
    private RepoCount RepoCount;
    private LibraryCount LibraryCount;
    private List<TechnologySummary> TechnologySummary;
    private List<OutdatedSummary> OutdatedSummary;
    private List<HealthSummary> HealthSummary;

    public ITAMSummary getITAMSummary() {
        return ITAMSummary;
    }

    public RepoCount getRepoCount() {
        return RepoCount;
    }

    public LibraryCount getLibraryCount() {
        return LibraryCount;
    }

    public List<TechnologySummary> getTechnologySummary() {
        return TechnologySummary;
    }

    public List<OutdatedSummary> getOutdatedSummary() {
        return OutdatedSummary;
    }

    public List<HealthSummary> getHealthSummary() {
        return HealthSummary;
    }
}

@JsonIgnoreProperties(ignoreUnknown = true)
class ITAMSummary {
    private String Description;
    private String ID;
    private String OperationalStatus;
    private String RBFRating;
    private String Name;

    public String getDescription() {
        return Description;
    }

    public String getID() {
        return ID;
    }

    public String getOperationalStatus() {
        return OperationalStatus;
    }

    public String getRBFRating() {
        return RBFRating;
    }

    public String getName() {
        return Name;
    }
}

@JsonIgnoreProperties(ignoreUnknown = true)
class RepoCount {
    private int Repos;

    public int getRepos() {
        return Repos;
    }
}

@JsonIgnoreProperties(ignoreUnknown = true)
class LibraryCount {
    private int Libraries;

    public int getLibraries() {
        return Libraries;
    }
}

@JsonIgnoreProperties(ignoreUnknown = true)
class TechnologySummary {
    private String LibraryType;
    private int Count;

    public String getLibraryType() {
        return LibraryType;
    }

    public int getCount() {
        return Count;
    }
}

@JsonIgnoreProperties(ignoreUnknown = true)
class OutdatedSummary {
    private String LibraryType;
    private int OutdatedCount;

    public String getLibraryType() {
        return LibraryType;
    }

    public int getOutdatedCount() {
        return OutdatedCount;
    }
}

@JsonIgnoreProperties(ignoreUnknown = true)
class HealthSummary {
    private boolean Healthy;
    private int Count;

    public boolean isHealthy() {
        return Healthy;
    }

    public int getCount() {
        return Count;
    }
}

