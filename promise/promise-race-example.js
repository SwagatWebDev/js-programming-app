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
if (ObjectUtils.isNotEmpty(filter.getProvider())) {
    List<String> providerList = switch (filter.getProvider().toUpperCase()) {
        case "OTHER" -> CommonConstants.OTHER_BU;
        case "ETGS" -> CommonConstants.ETGS_BU;
        case "FB/FWM" -> CommonConstants.FB_FWM_BU;
        case "FBT/FIT" -> CommonConstants.FBT_FIT_BU;
        default -> null;
    };

    provider = (providerList != null)
            ? providerList.stream()
                .map(bu -> StringUtils.upperCase(
                        StringUtils.trim(
                                StringUtils.isNotBlank(CioGroup.getBuName(bu)) 
                                ? CioGroup.getBuName(bu) 
                                : bu)))
                .collect(Collectors.joining(","))
            : StringUtils.isNotBlank(CioGroup.getBuName(filter.getProvider()))
                ? CioGroup.getBuName(filter.getProvider()) 
                : filter.getProvider();
}


