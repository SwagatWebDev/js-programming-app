function add(a, b) {
    return a + b;
}
console.log(add(2, 3));

// parameter => expression
const result = (a, b) => a + b;
console.log(result(2, 3));

const square = a => a * a;
console.log(square(5));

// callback
setTimeout(function (){
    console.log("Callback Function called")
}, 2000);

Map<String, List<SummaryDto>> sortedMap = summaryList.stream()
            .filter(dto -> dispositionOrder.contains(dto.getDisposition())) // Only include valid dispositions
            .collect(Collectors.groupingBy(
                SummaryDto::getDisposition,
                LinkedHashMap::new, // Maintain insertion order
                Collectors.mapping(
                    dto -> dto, 
                    Collectors.collectingAndThen(
                        Collectors.toList(),
                        list -> list.stream()
                            .sorted(Comparator.comparing(SummaryDto::getName)) // Sort by name
                            .collect(Collectors.toList())
                    )
                )
            ));

        // Reorder the map based on the desired order
        Map<String, List<SummaryDto>> orderedMap = dispositionOrder.stream()
            .filter(sortedMap::containsKey) // Ensure only existing dispositions are included
            .collect(Collectors.toMap(
                key -> key,
                sortedMap::get,
                (existing, replacement) -> existing, // Merge function (not needed here)
                LinkedHashMap::new // Maintain desired order
            ));

