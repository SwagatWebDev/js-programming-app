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

    // Return the unfiltered list if no filters are provided
    if (filterDto == null || solutionList == null || solutionList.isEmpty()) {
        return solutionList;
    }

    // Begin with the full solution list
    List<CommonSolutionResponseDto> filteredSolutionsList = solutionList;

    // Apply filters based on the filterDto

    // Filter by areas
    if (!CollectionUtils.isEmpty(filterDto.getAreas())) {
        List<String> areas = filterDto.getAreas();
        filteredSolutionsList = filteredSolutionsList.stream()
            .filter(solution -> areas.stream()
                .anyMatch(area -> solution.getDomainArea().equalsIgnoreCase(area)))
            .collect(Collectors.toList());
    }

    // Filter by domain name
    if (StringUtils.isNotBlank(filterDto.getDomainName())) {
        String domainName = filterDto.getDomainName();
        filteredSolutionsList = filteredSolutionsList.stream()
            .filter(solution -> solution.getCapabilityName().equalsIgnoreCase(domainName))
            .collect(Collectors.toList());
    }

    // Filter by capability name
    if (StringUtils.isNotBlank(filterDto.getCapabilityName())) {
        String capabilityName = filterDto.getCapabilityName();
        filteredSolutionsList = filteredSolutionsList.stream()
            .filter(solution -> solution.getCapabilityName().equalsIgnoreCase(capabilityName))
            .collect(Collectors.toList());
    }

    // Filter by providers
    if (!CollectionUtils.isEmpty(filterDto.getProviders())) {
        List<String> providers = filterDto.getProviders();
        filteredSolutionsList = filteredSolutionsList.stream()
            .filter(solution -> providers.contains(solution.getProvider()))
            .collect(Collectors.toList());
    }

    // Filter by usage dispositions
    if (!CollectionUtils.isEmpty(filterDto.getUsageDispositions())) {
        List<String> usageDispositions = filterDto.getUsageDispositions();
        filteredSolutionsList = filteredSolutionsList.stream()
            .filter(solution -> usageDispositions.contains(solution.getUsageDisposition()))
            .collect(Collectors.toList());
    }

    // Filter by resources
    if (!CollectionUtils.isEmpty(filterDto.getResources())) {
        List<String> resources = filterDto.getResources();
        filteredSolutionsList = filteredSolutionsList.stream()
            .filter(solution -> resources.contains(solution.getResource()))
            .collect(Collectors.toList());
    }

    // Filter by search string
    if (StringUtils.isNotBlank(filterDto.getSearchString())) {
        String searchString = filterDto.getSearchString();
        filteredSolutionsList = filteredSolutionsList.stream()
            .filter(solution -> solution.getName().toLowerCase().contains(searchString.toLowerCase())
                || solution.getDescription().toLowerCase().contains(searchString.toLowerCase()))
            .collect(Collectors.toList());
    }

    return filteredSolutionsList;
}

