private static void extractPromptGuidelines(LLMOpenSourceTechnology tech) {
        // Scenario 1: Prompt Guideline Value Extraction
        String extractedIntPrompt = extractPromptFromOpenSourceLicense(tech, "intPrompt");
        String extractedExtPrompt = extractPromptFromOpenSourceLicense(tech, "extPrompt");
        String extractedIntRecipient = extractPromptFromOpenSourceLicense(tech, "intRecipient");
        String extractedExtRecipient = extractPromptFromOpenSourceLicense(tech, "extRecipient");

        // Scenario 2: Overview Prompt Guideline Extraction
        if (tech.getIntPrompt() == null && tech.getExtPrompt() == null && tech.getIntRecipient() == null && tech.getExtRecipient() == null) {
            extractAndAssignOverviewPromptGuideline(tech, extractedIntPrompt, extractedExtPrompt, extractedIntRecipient, extractedExtRecipient);
        }

        // Scenario 3: Overview Prompt Guideline Extraction with current technology factsheet values
        if (tech.getIntPrompt() != null || tech.getExtPrompt() != null || tech.getIntRecipient() != null || tech.getExtRecipient() != null) {
            extractAndAssignOverviewPromptGuideline(tech, tech.getIntPrompt(), tech.getExtPrompt(), tech.getIntRecipient(), tech.getExtRecipient());
        }

        // Scenario 4: Overview Prompt Guideline Extraction with predecessor technologies
        extractFromPredecessorTechnologies(tech, extractedIntPrompt, extractedExtPrompt, extractedIntRecipient, extractedExtRecipient);

        // Print or use the tech object with assigned values
        System.out.println("Technology: " + tech.getName());
        System.out.println("Overview Int Prompt: " + tech.getOverviewIntPrompt());
        System.out.println("Overview Ext Prompt: " + tech.getOverviewExtPrompt());
        System.out.println("Overview Int Recipient: " + tech.getOverviewIntRecipient());
        System.out.println("Overview Ext Recipient: " + tech.getOverviewExtRecipient());
        System.out.println();
    }

    private static String extractPromptFromOpenSourceLicense(LLMOpenSourceTechnology tech, String fieldName) {
        List<String> extractedValues = tech.getOpenSourceLicense().stream()
                .flatMap(osl -> osl.getLicenses().stream())
                .filter(license -> license.isPreferredLicense() && license.isComplianceGeneration() || license.isComplianceModification())
                .flatMap(license -> Stream.of(
                        getFieldValue(license, fieldName)
                ))
                .filter(Objects::nonNull)
                .collect(Collectors.toList());

        return extractedValues.stream()
                .min(Comparator.comparingInt(PRIORITY::indexOf))
                .orElse(null);
    }

    private static void extractAndAssignOverviewPromptGuideline(LLMOpenSourceTechnology tech,
                                                               String intPrompt, String extPrompt,
                                                               String intRecipient, String extRecipient) {
        String worstIntPrompt = worstCaseValue(intPrompt, tech.getIntPrompt(), tech.getPredecessorTechnology(), "intPrompt");
        String worstExtPrompt = worstCaseValue(extPrompt, tech.getExtPrompt(), tech.getPredecessorTechnology(), "extPrompt");
        String worstIntRecipient = worstCaseValue(intRecipient, tech.getIntRecipient(), tech.getPredecessorTechnology(), "intRecipient");
        String worstExtRecipient = worstCaseValue(extRecipient, tech.getExtRecipient(), tech.getPredecessorTechnology(), "extRecipient");

        tech.setOverviewIntPrompt(worstIntPrompt);
        tech.setOverviewExtPrompt(worstExtPrompt);
        tech.setOverviewIntRecipient(worstIntRecipient);
        tech.setOverviewExtRecipient(worstExtRecipient);
    }

    private static void extractFromPredecessorTechnologies(LLMOpenSourceTechnology tech,
                                                           String extractedIntPrompt, String extractedExtPrompt,
                                                           String extractedIntRecipient, String extractedExtRecipient) {
        if (tech.getPredecessorTechnology() != null) {
            tech.getPredecessorTechnology().forEach(predecessor -> {
                String worstIntPrompt = worstCaseValue(extractedIntPrompt, predecessor.getIntPrompt(), null, "intPrompt");
                String worstExtPrompt = worstCaseValue(extractedExtPrompt, predecessor.getExtPrompt(), null, "extPrompt");
                String worstIntRecipient = worstCaseValue(extractedIntRecipient, predecessor.getIntRecipient(), null, "intRecipient");
                String worstExtRecipient = worstCaseValue(extractedExtRecipient, predecessor.getExtRecipient(), null, "extRecipient");

                predecessor.setIntPrompt(worstIntPrompt);
                predecessor.setExtPrompt(worstExtPrompt);
                predecessor.setIntRecipient(worstIntRecipient);
                predecessor.setExtRecipient(worstExtRecipient);
            });
        }
    }

    private static String worstCaseValue(String openSourceValue, String currentValue, List<PredecessorTechnology> predecessors, String fieldName) {
        List<String> values = new ArrayList<>();

        if (openSourceValue != null) {
            values.add(openSourceValue);
        }

        if (currentValue != null) {
            values.add(currentValue);
        }

        if (predecessors != null) {
            predecessors.forEach(predecessor -> {
                String predecessorValue = getFieldValue(predecessor, fieldName);
                if (predecessorValue != null) {
                    values.add(predecessorValue);
                }
            });
        }

        return values.stream()
                .min(Comparator.comparingInt(PRIORITY::indexOf))
                .orElse(null);
    }

    private static String getFieldValue(Object obj, String fieldName) {
        try {
            return (String) obj.getClass().getDeclaredField(fieldName).get(obj);
        } catch (Exception e) {
            return null;
        }
    }
