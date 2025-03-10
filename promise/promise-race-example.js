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
private SBOMAssetSummaryResponseDto getSBOMAssetSummaryResponseDto(SBOMAssetSummaryDto sbomAssetSummaryData) {
    SBOMAssetSummaryResponseDto sbomAssetSummaryDto = new SBOMAssetSummaryResponseDto();

    sbomAssetSummaryDto.setTotalLibraries(Long.valueOf(sbomAssetSummaryData.getAssetLibrary().getLibraryCount()));
    sbomAssetSummaryDto.setTotalRepositories(Long.valueOf(sbomAssetSummaryData.getAssetRepo().getRepoCount()));

    // Transform data using helper methods
    List<SBOMAssetTechnologySummaryResponseDto> popularTechnologies = mapTechnologies(sbomAssetSummaryData.getPopularTechnologies());
    List<SBOMAssetTechnologySummaryResponseDto> outdatedTechnologies = mapTechnologies(sbomAssetSummaryData.getOutDatedTechnologies());
    List<SBOMHealthSummaryResponseDto> healthSummaries = mapHealthSummaries(sbomAssetSummaryData.getAssetHealth());

    sbomAssetSummaryDto.setPopularTechnologies(popularTechnologies);
    sbomAssetSummaryDto.setOutDatedTechnologies(outdatedTechnologies);
    sbomAssetSummaryDto.setAssetHealth(healthSummaries);

    return sbomAssetSummaryDto;
}

// Helper method to map technologies
private List<SBOMAssetTechnologySummaryResponseDto> mapTechnologies(List<Technology> technologies) {
    return technologies.stream()
            .map(tech -> new SBOMAssetTechnologySummaryResponseDto(tech.getTechnologyName(), tech.getTechnologyCount()))
            .collect(Collectors.toList());
}

// Helper method to map health summaries
private List<SBOMHealthSummaryResponseDto> mapHealthSummaries(List<Health> healthList) {
    return healthList.stream()
            .map(health -> new SBOMHealthSummaryResponseDto(Boolean.valueOf(health.getHealthStatus()), health.getHealthCount()))
            .collect(Collectors.toList());
}
