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

    List<PromptGuideline> allPromptGuidelines = opensourceLicenses.stream()
                .flatMap(license -> license.getLicenses().stream())
                .collect(Collectors.toList());

        predecessorTechnology.stream()
                .flatMap(List::stream)
                .forEach(promptGuidelines -> allPromptGuidelines.addAll(promptGuidelines));

        successorTechnology.stream()
                .flatMap(List::stream)
                .forEach(promptGuidelines -> allPromptGuidelines.addAll(promptGuidelines));

        // Apply the scenarios to derive the unique values
        String initRec = determineInitRec(allPromptGuidelines);
        String initPrompt = determineInitPrompt(allPromptGuidelines);
        String extRec = determineExtRec(allPromptGuidelines);
        String extPrompt = determineExtPrompt(allPromptGuidelines);

        return String.format("initRec: %s, initPrompt: %s, extRec: %s, extPrompt: %s", initRec, initPrompt, extRec, extPrompt);
    }

    private String determineInitRec(List<PromptGuideline> promptGuidelines) {
        Optional<PromptGuideline> overrideGuideline = promptGuidelines.stream()
                .filter(guideline -> guideline.isOverride())
                .findFirst();
        if (overrideGuideline.isPresent()) {
            return overrideGuideline.get().getInitRec();
        } else {
            return "available"; // Default value if no override guideline found
        }
    }

    private String determineInitPrompt(List<PromptGuideline> promptGuidelines) {
        Optional<PromptGuideline> overrideGuideline = promptGuidelines.stream()
                .filter(guideline -> guideline.isOverride())
                .findFirst();
        if (overrideGuideline.isPresent()) {
            return overrideGuideline.get().getInitPrompt();
        } else {
            return "available"; // Default value if no override guideline found
        }
    }

    private String determineExtRec(List<PromptGuideline> promptGuidelines) {
        Optional<PromptGuideline> overrideGuideline = promptGuidelines.stream()
                .filter(guideline -> guideline.isOverride())
                .findFirst();
        if (overrideGuideline.isPresent()) {
            return overrideGuideline.get().getExtRec();
        } else {
            return "available"; // Default value if no override guideline found
        }
    }

    private String determineExtPrompt(List<PromptGuideline> promptGuidelines) {
        Optional<PromptGuideline> overrideGuideline = promptGuidelines.stream()
                .filter(guideline -> guideline.isOverride())
                .findFirst();
        if (overrideGuideline.isPresent()) {
            return overrideGuideline.get().getExtPrompt();
        } else {
            return "restriction"; // Default value if no override guideline found
        }
    }

const myArray = [1, 2, 3];
const sum = myArray + 10;
console.log(sum);

//fill
const num = [1, 2, 3, 4, 5];
num.fill(0, 1, 4);
console.log(num);
