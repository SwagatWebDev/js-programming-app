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

private static String getWorstCaseValue(LLMOpenSourceTechnology tech, String fieldName) {
        // Collect values directly from the technology object
        Stream<String> currentTechnologyValues = Stream.of(
                tech.intPrompt,
                tech.extPrompt,
                tech.intRecipient,
                tech.extRecipient
        ).filter(Objects::nonNull);

        // Collect values from open source licenses
        Stream<String> openSourceLicenseValues = tech.openSourceLicense.stream()
                .flatMap(osl -> osl.licenses.stream())
                .flatMap(license -> Stream.of(
                        license.intPrompt,
                        license.extPrompt,
                        license.intRecipient,
                        license.extRecipient
                ))
                .filter(Objects::nonNull);

        // Collect values from predecessor technology and their licenses
        Stream<String> predecessorTechnologyValues = tech.predecessorTechnology.stream()
                .flatMap(predecessor -> Stream.concat(
                        Stream.of(
                                predecessor.intPrompt,
                                predecessor.extPrompt,
                                predecessor.intRecipient,
                                predecessor.extRecipient
                        ).filter(Objects::nonNull),
                        predecessor.licenses.stream()
                                .filter(license -> license.isComplianceGeneration || license.isComplianceModification)
                                .flatMap(license -> Stream.of(
                                        license.intPrompt,
                                        license.extPrompt,
                                        license.intRecipient,
                                        license.extRecipient
                                )).filter(Objects::nonNull)
                ));

        // Combine all values and determine the worst case based on priority
        return Stream.of(currentTechnologyValues, openSourceLicenseValues, predecessorTechnologyValues)
                .flatMap(s -> s)
                .min(Comparator.comparingInt(PRIORITY::indexOf))
                .orElse("noRestrictionIdentified");
    }

const myArray = [1, 2, 3];
const sum = myArray + 10;




    
