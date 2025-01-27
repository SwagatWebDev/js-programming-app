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

import java.util.*;
import java.util.stream.Collectors;

public class ReferenceExtractor {

    public static void main(String[] args) {
        // Process the input to create a list of references
        List<Map<String, String>> references = Arrays.stream(input.split("\\),"))
                .map(item -> item.trim() + ")") // Add the closing ')' back
                .map(ReferenceExtractor::parseReference)
                .collect(Collectors.toList());

        // Print the extracted references
        references.forEach(System.out::println);
    }

    private static Map<String, String> parseReference(String item) {
        Map<String, String> reference = new HashMap<>();

        // Extract type (key before the first colon)
        int typeEndIndex = item.indexOf(':');
        String type = item.substring(0, typeEndIndex).trim();
        reference.put("type", type);

        // Extract name, url, description, and id
        reference.put("name", extractField(item, "(", "url:").trim());
        reference.put("url", extractField(item, "url:", "description:").trim());
        reference.put("description", extractField(item, "description:", "id:").trim());
        reference.put("id", extractField(item, "id:", ")").trim());

        return reference;
    }

    private static String extractField(String item, String startKey, String endKey) {
        int startIndex = item.indexOf(startKey) + startKey.length();
        int endIndex = item.contains(endKey) ? item.indexOf(endKey) : item.length();
        return item.substring(startIndex, endIndex).trim();
    }
}


