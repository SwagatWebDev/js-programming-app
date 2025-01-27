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
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;



    public List<Reference> parseReferences(String input) {
        return Arrays.stream(input.split("\\),"))
                .map(item -> item.trim() + ")") // Add back the closing parenthesis
                .map(this::mapToReference) // Convert each string into a Reference object
                .collect(Collectors.toList());
    }

    private Reference mapToReference(String item) {
        Reference reference = new Reference();

        // Extract the type
        int typeEndIndex = item.indexOf(':');
        reference.setType(item.substring(0, typeEndIndex).trim());

        // Extract the name, url, description, and id
        reference.setName(extractField(item, "(", "url:").trim());
        reference.setUrl(extractField(item, "url:", "description:").trim());
        reference.setDescription(extractField(item, "description:", "id:").trim());
        reference.setId(extractField(item, "id:", ")").trim());

        return reference;
    }

    private String extractField(String item, String startKey, String endKey) {
        int startIndex = item.indexOf(startKey) + startKey.length();
        int endIndex = item.contains(endKey) ? item.indexOf(endKey) : item.length();
        return item.substring(startIndex, endIndex).trim();
    }
}

