// every
const numbers = [2, 4, 6, 8, 11];
const allEven = numbers.every(number => number % 2 === 0);
console.log(allEven);

// some
const numbersArr = [1, 3, 5, 9, 7];
const hasEvenNumber = numbersArr.some(number => number % 2 === 0);
console.log(hasEvenNumber);

//Math.max
const values = [10, 20, 25, 5, 30, 15];
const max = Math.max(...values);
const min = Math.min(...values);
console.log(max);
console.log(min);

// Array.includes
const fruits = ['apple', 'grapes', 'orange'];
const hasApple = fruits.includes('apple');
console.log(hasApple);

//valueOf()
const colors = ['red', 'green', 'blue'];
const primitiveValue = colors.valueOf();
console.log(primitiveValue);

public static void extractPromptGuidelines(LLMOpenSourceTechnology tech) {
        // Use setter methods to set the worst-case values dynamically
        tech.setOverViewIntPrompt(getWorstCaseValue(tech, "intPrompt"));
        tech.setOverviewExtPrompt(getWorstCaseValue(tech, "extPrompt"));
        tech.setOverviewIntRecipient(getWorstCaseValue(tech, "intRecipient"));
        tech.setOverviewExtRecipient(getWorstCaseValue(tech, "extRecipient"));
    }

    private static String getWorstCaseValue(LLMOpenSourceTechnology tech, String fieldName) {
        // Collect values directly from the technology object
        List<String> currentTechnologyValues = Collections.singletonList(
                getFieldValue(tech, fieldName)
        ).stream().filter(Objects::nonNull).collect(Collectors.toList());

        // Collect values from open source licenses
        List<String> openSourceLicenseValues = tech.getOpenSourceLicense().stream()
                .flatMap(osl -> osl.getLicenses().stream())
                .flatMap(license -> Stream.of(
                        getFieldValue(license, fieldName)
                ))
                .filter(Objects::nonNull).collect(Collectors.toList());

        // Collect values from predecessor technology and their licenses
        List<String> predecessorTechnologyValues = tech.getPredecessorTechnology().stream()
                .flatMap(predecessor -> Stream.concat(
                        Stream.of(
                                getFieldValue(predecessor, fieldName)
                        ).filter(Objects::nonNull),
                        predecessor.getLicenses().stream()
                                .filter(license -> license.isComplianceGeneration() || license.isComplianceModification())
                                .flatMap(license -> Stream.of(
                                        getFieldValue(license, fieldName)
                                ))
                                .filter(Objects::nonNull)
                )).collect(Collectors.toList());

        // Combine all collected values and determine the worst case
        List<String> allValues = new ArrayList<>();
        allValues.addAll(currentTechnologyValues);
        allValues.addAll(openSourceLicenseValues);
        allValues.addAll(predecessorTechnologyValues);

        return allValues.stream()
                .min(Comparator.comparingInt(PRIORITY::indexOf))
                .orElse("noRestrictionIdentified");
    }

    private static String getFieldValue(Object obj, String fieldName) {
        try {
            String methodName = "get" + Character.toUpperCase(fieldName.charAt(0)) + fieldName.substring(1);
            return (String) obj.getClass().getMethod(methodName).invoke(obj);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

const myArray = [1, 2, 3];
const sum = myArray + 10;




    
