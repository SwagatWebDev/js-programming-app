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

console.log(primitiveValue === colors);
 List<LLMOpenSourceTechnology> technologies = Arrays.asList(
                // Add your sample data here
        );

        technologies.forEach(LLMOpenSourceTechnologyPromptExtractor::extractPromptGuidelines);
    }

    public static void extractPromptGuidelines(LLMOpenSourceTechnology tech) {
        tech.overViewIntPrompt = getWorstCaseValue(tech, "intPrompt");
        tech.overviewExtPrompt = getWorstCaseValue(tech, "extPrompt");
        tech.overviewIntRecipient = getWorstCaseValue(tech, "intRecipient");
        tech.overviewExtRecipient = getWorstCaseValue(tech, "extRecipient");
    }

    private static String getWorstCaseValue(LLMOpenSourceTechnology tech, String fieldName) {
        Stream<String> currentTechnologyValues = Stream.of(
                getValueFromField(tech.intPrompt, fieldName),
                getValueFromField(tech.extPrompt, fieldName),
                getValueFromField(tech.intRecipient, fieldName),
                getValueFromField(tech.extRecipient, fieldName)
        ).filter(Objects::nonNull);

        Stream<String> openSourceLicenseValues = tech.openSourceLicense.stream()
                .flatMap(osl -> osl.licenses.stream())
                .flatMap(license -> Stream.of(
                        getValueFromField(license.intPrompt, fieldName),
                        getValueFromField(license.extPrompt, fieldName),
                        getValueFromField(license.intRecipient, fieldName),
                        getValueFromField(license.extRecipient, fieldName)
                ))
                .filter(Objects::nonNull);

        Stream<String> predecessorTechnologyValues = tech.predecessorTechnology.stream()
                .flatMap(predecessor -> Stream.concat(
                        Stream.of(
                                getValueFromField(predecessor.intPrompt, fieldName),
                                getValueFromField(predecessor.extPrompt, fieldName),
                                getValueFromField(predecessor.intRecipient, fieldName),
                                getValueFromField(predecessor.extRecipient, fieldName)
                        ).filter(Objects::nonNull),
                        predecessor.licenses.stream()
                                .filter(license -> license.isComplianceGeneration || license.isComplianceModification)
                                .flatMap(license -> Stream.of(
                                        getValueFromField(license.intPrompt, fieldName),
                                        getValueFromField(license.extPrompt, fieldName),
                                        getValueFromField(license.intRecipient, fieldName),
                                        getValueFromField(license.extRecipient, fieldName)
                                )).filter(Objects::nonNull)
                ));

        return Stream.of(currentTechnologyValues, openSourceLicenseValues, predecessorTechnologyValues)
                .flatMap(s -> s)
                .min(Comparator.comparingInt(PRIORITY::indexOf))
                .orElse("noRestrictionIdentified");
    }

    private static String getValueFromField(String value, String fieldName) {
        return value;
    }
const myArray = [1, 2, 3];
const sum = myArray + 10;
console.log(package com.fmr.intelea.batch.service;


    
