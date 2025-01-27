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
public List<Reference> parseReferences(String input) {
    // Validate input for null or empty string
    if (input == null || input.trim().isEmpty()) {
        return Collections.emptyList();
    }

    return Arrays.stream(input.split("\\),"))
            .map(item -> item.trim() + ")") // Add back the closing parenthesis
            .filter(item -> !item.isEmpty()) // Skip empty items
            .map(this::mapToReference) // Map to Reference object
            .filter(Objects::nonNull) // Skip invalid references
            .collect(Collectors.toList());
}

private Reference mapToReference(String item) {
    // Validate the basic structure of the string
    if (!item.contains(":") || !item.contains("(")) {
        return null; // Skip items without the required structure
    }

    Reference reference = new Reference();

    // Extract the type
    int typeEndIndex = item.indexOf(':');
    reference.setType(typeEndIndex > 0 ? item.substring(0, typeEndIndex).trim() : null);

    // Extract fields
    reference.setName(extractField(item, "(", "url:"));
    reference.setUrl(extractField(item, "url:", "description:"));
    reference.setDescription(extractField(item, "description:", "id:"));
    reference.setId(extractField(item, "id:", ")"));

    return reference;
}

private String extractField(String item, String startKey, String endKey) {
    // Ensure the startKey exists in the input
    int startIndex = item.indexOf(startKey);
    if (startIndex == -1) {
        return ""; // Return an empty string if the start key is not found
    }
    startIndex += startKey.length();

    // Ensure the endKey exists after the startKey
    int endIndex = item.indexOf(endKey, startIndex);
    if (endIndex == -1) {
        endIndex = item.length(); // Use the item's length if endKey isn't found
    }

    return item.substring(startIndex, endIndex).trim();
}

