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

 List<LicensePromptGuidelineDto> allGuidelines = new ArrayList<>();

        if (technology.getOpensourceLicenses() != null) {
            technology.getOpensourceLicenses().stream()
                .filter(license -> license.getLicenses() != null)
                .flatMap(license -> license.getLicenses().stream())
                .forEach(allGuidelines::add);
        }

        if (technology.getPredecessorTechnology() != null) {
            technology.getPredecessorTechnology().stream()
                .flatMap(List::stream)
                .forEach(allGuidelines::add);
        }

        if (technology.getSuccessorTechnology() != null) {
            technology.getSuccessorTechnology().stream()
                .flatMap(List::stream)
                .forEach(allGuidelines::add);
        }

        String initRec = determineValue(allGuidelines, LicensePromptGuidelineDto::getInitRec);
        String initPrompt = determineValue(allGuidelines, LicensePromptGuidelineDto::getInitPrompt);
        String extRec = determineValue(allGuidelines, LicensePromptGuidelineDto::getExtRec);
        String extPrompt = determineValue(allGuidelines, LicensePromptGuidelineDto::getExtPrompt);

        return String.format("initRec: %s, initPrompt: %s, extRec: %s, extPrompt: %s", initRec, initPrompt, extRec, extPrompt);
    }

    private static String determineValue(List<LicensePromptGuidelineDto> guidelines, Function<LicensePromptGuidelineDto, String> getter) {
        return guidelines.stream()
            .map(getter)
            .filter(Objects::nonNull)
            .distinct()
            .sorted((a, b) -> "restriction".equals(b) ? 1 : -1)
            .findFirst()
            .orElse("available");  // Default value if no guidelines are found
    }

//fill
const num = [1, 2, 3, 4, 5];
num.fill(0, 1, 4);
console.log(num);
