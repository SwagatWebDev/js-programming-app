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

private List<CommonSolutionResponseDto> filteredSolutionsCatalogResponse(
        List<CommonSolutionResponseDto> solutionList, SolutionFilterDto filterDto) {
    if (filterDto == null || CollectionUtils.isEmpty(solutionList)) {
        return solutionList;
    }

    return solutionList.stream()
            .filter(solution -> CollectionUtils.isEmpty(filterDto.getAreas()) || 
                   filterDto.getAreas().stream()
                            .anyMatch(area -> StringUtils.equalsIgnoreCase(area, solution.getDomainArea())))
            .filter(solution -> StringUtils.isBlank(filterDto.getDomainName()) || 
                   StringUtils.containsIgnoreCase(solution.getCapabilityFullPath(), filterDto.getDomainName()))
            .filter(solution -> StringUtils.isBlank(filterDto.getCapabilityName()) || 
                   StringUtils.containsIgnoreCase(solution.getCapabilityFullPath(), filterDto.getCapabilityName()))
            .filter(solution -> CollectionUtils.isEmpty(filterDto.getProviders()) || 
                   (StringUtils.isNotBlank(solution.getProviderFullName()) && 
                    filterDto.getProviders().stream()
                             .map(String::toUpperCase)
                             .anyMatch(provider -> StringUtils.equals(provider, solution.getProviderFullName().toUpperCase()))))
            .filter(solution -> CollectionUtils.isEmpty(filterDto.getUsageDispositions()) || 
                   (solution.getUsageDisposition() != null &&
                    filterDto.getUsageDispositions()
                             .contains(UsageDisposition.valueOf(solution.getUsageDisposition()))))
            .filter(solution -> CollectionUtils.isEmpty(filterDto.getResources()) || 
                   (solution.getResources() != null &&
                    solution.getResources().values().stream()
                             .flatMap(List::stream)
                             .anyMatch(resource -> filterDto.getResources()
                                                             .contains(resource.getResourceType()))))
            .filter(solution -> StringUtils.isBlank(filterDto.getSearchString()) || 
                   StringUtils.containsIgnoreCase(solution.toString(), filterDto.getSearchString()))
            .filter(solution -> ObjectUtils.isEmpty(filterDto.getIsCoreCommon()) || 
                   solution.isCoreCommon() == filterDto.getIsCoreCommon())
            .collect(Collectors.toList());
}

