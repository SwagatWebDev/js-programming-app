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
console.log(sum);

public String determineGuideline(List<LLMOpenSourceTechnology> technologies) {
        String initRec = determineWorstCaseGuideline(technologies, "initRec");
        String initPrompt = determineWorstCaseGuideline(technologies, "initPrompt");
        String extRec = determineWorstCaseGuideline(technologies, "extRec");
        String extPrompt = determineWorstCaseGuideline(technologies, "extPrompt");

        return String.format("initRec: %s, initPrompt: %s, extRec: %s, extPrompt: %s", initRec, initPrompt, extRec, extPrompt);
    }

    private String determineWorstCaseGuideline(List<LLMOpenSourceTechnology> technologies, String field) {
        return technologies.stream()
                .flatMap(tech -> Stream.of(
                        getFieldValue(tech, field),
                        tech.getOpensourceLicenses().stream().map(license -> getFieldValue(license, field)),
                        tech.getPredecessorTechnology().stream().map(predecessor -> getFieldValue(predecessor, field)),
                        tech.getSuccessorTechnology().stream().map(successor -> getFieldValue(successor, field))
                ).flatMap(stream -> stream))
                .filter(Optional::isPresent)
                .map(Optional::get)
                .distinct()
                .reduce((guideline1, guideline2) -> worstCase(guideline1, guideline2))
                .orElse(null);
    }

    private Optional<String> getFieldValue(Object obj, String field) {
        try {
            return Optional.ofNullable((String) obj.getClass().getDeclaredField(field).get(obj));
        } catch (NoSuchFieldException | IllegalAccessException e) {
            return Optional.empty();
        }
    }

    private String worstCase(String guideline1, String guideline2) {
        if (RESTRICTION.equals(guideline1) || RESTRICTION.equals(guideline2)) {
            return RESTRICTION;
        }
        return APPROVED;
    }

//fill
const num = [1, 2, 3, 4, 5];
num.fill(0, 1, 4);
console.log(num);
