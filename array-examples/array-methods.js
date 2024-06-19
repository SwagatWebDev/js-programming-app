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

const myArray = [1, 2, 3];
const sum = myArray + 10;
console.log(package com.fmr.intelea.batch.service;

//fillpackage com.fmr.intelea.batch.service;


    private static final String RESTRICTION = "restriction";
    private static final String APPROVED = "approved";

    public String determineGuideline(List<LLMOpenSourceTechnology> technologies) {
        String initRec = determineWorstCaseGuideline(technologies, "intRecipient");
        String initPrompt = determineWorstCaseGuideline(technologies, "intPrompt");
        String extRec = determineWorstCaseGuideline(technologies, "extRecipient");
        String extPrompt = determineWorstCaseGuideline(technologies, "extPrompt");

        return String.format("initRec: %s, initPrompt: %s, extRec: %s, extPrompt: %s", initRec, initPrompt, extRec, extPrompt);
    }

    private String determineWorstCaseGuideline(List<LLMOpenSourceTechnology> technologies, String field) {
        String worstCaseValue = null;

        for (LLMOpenSourceTechnology tech : technologies) {
            worstCaseValue = compareValues(worstCaseValue, getFieldValue(tech, field));
            worstCaseValue = compareListValues(worstCaseValue, tech.getOpensourceLicenses(), field);
            worstCaseValue = compareListValues(worstCaseValue, tech.getPredecessorTechnology(), field);
            worstCaseValue = compareListValues(worstCaseValue, tech.getSuccessorTechnology(), field);
        }

        return worstCaseValue;
    }

    private String compareListValues(String currentWorstCase, List<LicensePredecessorSuccessorCategory> list, String field) {
        if (list != null) {
            for (LicensePredecessorSuccessorCategory item : list) {
                currentWorstCase = compareValues(currentWorstCase, getFieldValue(item, field));
            }
        }
        return currentWorstCase;
    }

    private String compareValues(String value1, String value2) {
        if (RESTRICTION.equals(value1) || RESTRICTION.equals(value2)) {
            return RESTRICTION;
        } else if (APPROVED.equals(value1) || APPROVED.equals(value2)) {
            return APPROVED;
        }
        return null;
    }

    private String getFieldValue(Object obj, String field) {
        try {
            java.lang.reflect.Field f = obj.getClass().getDeclaredField(field);
            f.setAccessible(true);
            return (String) f.get(obj);
        } catch (NoSuchFieldException | IllegalAccessException e) {
            return null;
        }
    }
}

const num = [1, 2, 3, 4, 5];
num.fill(0, 1, 4);
console.log(num);
