
 private static void determineWorstCaseBehavior(LLMOpenSourceTechnology tech) {
        List<License> allLicenses = Stream.concat(
                tech.openSourceLicense != null ? tech.openSourceLicense.stream().flatMap(osLicense -> osLicense.Licenses.stream()) : Stream.empty(),
                (tech.openSourceLicense == null || tech.openSourceLicense.isEmpty()) && tech.predecessorTechnology != null
                        ? tech.predecessorTechnology.stream().flatMap(predecessor -> predecessor.Licenses.stream())
                        : Stream.empty()
        ).collect(Collectors.toList());

        tech.overViewIntPrompt = findWorstCase(allLicenses.stream().map(license -> license.intUsedasis));
        tech.overviewExtPrompt = findWorstCase(allLicenses.stream().map(license -> license.extUsedasis));
    }

    private static String findWorstCase(Stream<String> values) {
        Optional<String> worstCase = values.filter(value -> value != null)
                .min(Comparator.comparingInt(LLMOpenSourceTechnologyAnalyzer::severity));
        return worstCase.orElse(null);
    }

    private static int severity(String value) {
        return switch (value) {
            case "alwaysReject" -> 1;
            case "alwaysReviewed" -> 2;
            case "alwaysApproved" -> 3;
            default -> Integer.MAX_VALUE;
        };
    }
