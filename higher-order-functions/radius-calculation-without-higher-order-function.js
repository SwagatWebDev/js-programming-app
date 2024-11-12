const radius = [3, 1, 2, 4];

// calculate area for each radius
const calculateArea = function (radius) {
   const output = [];
   for (let i = 0; i < radius.length; i++){
       output.push(Math.PI * radius[i] * radius[i]);
   }
   return output;
}

console.log('Area is', calculateArea(radius));

// Calculate circumference for each radius

const calculateCircumference = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++){
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
}

console.log('Circumference is', calculateCircumference(radius));

// calculate diameter for each radius
const calculateDiameter = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++){
        output.push(2 * radius[i]);
    }
    return output;
}

console.log('Diameter is', calculateDiameter(radius));

# New Scenario to Validate Unauthorized Access Error Handling
@testScenario @products
Scenario: Verify unauthorized access handling for LeanIX API
  Given url leanIXBaseURL
  Given def query = "query allFactSheetsQuery($filter:FilterInput!, $sortings:[Sorting]){allFactSheets(first:5,filter:$filter, sort:$sortings){totalCount edges{node{id}}}}"
  And def variables = { "filter": { "facetFilters": [{ "facetKey": "FactSheetTypes", "operator": "OR", "keys": ["Process"] }] }, "sortings": [{ "key": "displayName", "order": "asc" }] }
  And request { query: '#(query)', variables: '#(variables)' }
  And header Authorization = 'Bearer INVALID_TOKEN'
  And header Content-Type = 'application/json'
  When method POST
  Then status 401
  * match response.message == "Unauthorized access"

# Additional Scenario for Validating Sorting Order in IntelEA Products
@testScenario @products
Scenario: Validate sorting order of IntelEA Products by displayName
  Given url intelEABaseURL + '/ea/v1/portfolio-explorer-info'
  * params {page: 0, assetType:'Product', size: 100}
  And header Authorization = 'Bearer ' + intelEAToken
  When method GET
  Then status 200
  * def intelEAProducts = karate.jsonPath(response, '$.response.data')

  # Check sorting order
  * def sorted = karate.jsonPath(intelEAProducts, '$[?(@.displayName)]')
  * match sorted == sorted.sort((a,b) => a.displayName.localeCompare(b.displayName))


