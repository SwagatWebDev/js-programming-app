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


    public static void main(String[] args) {
        List<Technology> technologies = getTechnologies(); // Replace with your actual list

        // Get unique values for initRec, initPrompt, extRec, extPrompt based on scenarios
        String uniqueInitRec = getUniquePropertyValue(technologies, Technology::getInitRec);
        String uniqueInitPrompt = getUniquePropertyValue(technologies, Technology::getInitPrompt);
        String uniqueExtRec = getUniquePropertyValue(technologies, Technology::getExtRec);
        String uniqueExtPrompt = getUniquePropertyValue(technologies, Technology::getExtPrompt);

        // Print the unique values
        System.out.println("Unique values:");
        System.out.println("initRec: " + uniqueInitRec);
        System.out.println("initPrompt: " + uniqueInitPrompt);
        System.out.println("extRec: " + uniqueExtRec);
        System.out.println("extPrompt: " + uniqueExtPrompt);
    }

    // Method to get unique property value for a property based on scenarios
    private static String getUniquePropertyValue(List<Technology> technologies, Function<Technology, String> propertyGetter) {
        Set<String> uniqueValues = new HashSet<>();

        // Iterate through each technology and its predecessor licenses
        for (Technology tech : technologies) {
            addPropertyValue(tech, propertyGetter, uniqueValues);
            tech.getPredecessorLicenses().forEach(license -> addPropertyValue(license, propertyGetter, uniqueValues));
        }

        // Find the first "restriction" or "available" value, or return "not_defined" if none found
        Optional<String> result = uniqueValues.stream()
                .filter(value -> "restriction".equals(value) || "available".equals(value))
                .findFirst();

        return result.orElse("not_defined");
    }

    // Helper method to add property value to the set
    private static void addPropertyValue(Technology tech, Function<Technology, String> propertyGetter, Set<String> uniqueValues) {
        String value = propertyGetter.apply(tech);
        if (value != null && !value.isEmpty()) {
            uniqueValues.add(value);
        }
    }

    // Sample data method (replace with your actual data source)
    private static List<Technology> getTechnologies() {
        return Arrays.asList(
                new Technology(1, "Technology name", "test", "available", "available", "available", "restriction",
                        new OpenSourceLicense(5, "Lcs name", "restriction", "available", "available", "restriction"),
                        Arrays.asList(new PredecessorLicense(3, "Lsc6", "restriction", "available", "available", "restriction"))),
                new Technology(12, "Tech1", "test", "nonrestriction", "available", "available", "restriction",
                        new OpenSourceLicense(3, "Lsc1", "restriction", "available", "available", "restriction"),
                        Arrays.asList(
                                new PredecessorLicense(2, "Lsc4", "restriction", "available", "available", "available"),
                                new PredecessorLicense(23, "Lsc5", "restriction", "available", "restriction", "available"))
                )
        );
    }

    // Technology class definition (adjust as per your actual implementation)
    static class Technology {
        private int id;
        private String name;
        private String desc;
        private String initRec;
        private String initPrompt;
        private String extRec;
        private String extPrompt;
        private OpenSourceLicense openSourceLicense;
        private List<PredecessorLicense> predecessorLicenses;

        public Technology(int id, String name, String desc, String initRec, String initPrompt, String extRec, String extPrompt,
                          OpenSourceLicense openSourceLicense, List<PredecessorLicense> predecessorLicenses) {
            this.id = id;
            this.name = name;
            this.desc = desc;
            this.initRec = initRec;
            this.initPrompt = initPrompt;
            this.extRec = extRec;
            this.extPrompt = extPrompt;
            this.openSourceLicense = openSourceLicense;
            this.predecessorLicenses = predecessorLicenses;
        }

        public String getInitRec() {
            return initRec;
        }

        public String getInitPrompt() {
            return initPrompt;
        }

        public String getExtRec() {
            return extRec;
        }

        public String getExtPrompt() {
            return extPrompt;
        }

        public OpenSourceLicense getOpenSourceLicense() {
            return openSourceLicense;
        }

        public List<PredecessorLicense> getPredecessorLicenses() {
            return predecessorLicenses;
        }
    }

    

const myArray = [1, 2, 3];
const sum = myArray + 10;
console.log(sum);

//fill
const num = [1, 2, 3, 4, 5];
num.fill(0, 1, 4);
console.log(num);
