rivate static List<LicenseDto> getGoverningLicenseDetails(LLMOSCategory category, List<LLMOSCategory> categories) {
        List<LicenseDto> licenses = new ArrayList<>();

        licenses.addAll(category.getLlmLicensePredecessorSuccessorRelation().stream()
                .filter(relation -> "License".equals(relation.getRelationType()) && relation.getOpensourceLicense() != null)
                .map(relation -> {
                    LicenseDto licenseDto = new LicenseDto();
                    licenseDto.setName(relation.getOpensourceLicense().getName());
                    licenseDto.setType(relation.getRelationType());
                    licenseDto.setIntUsedAsIs(relation.getOpensourceLicense().getIntAsIs());
                    licenseDto.setIntModByFmr(relation.getOpensourceLicense().getIntModified());
                    licenseDto.setExtUsedAsIs(relation.getOpensourceLicense().getExtAsIs());
                    licenseDto.setExtModByFmr(relation.getOpensourceLicense().getExtModified());
                    licenseDto.setExtDistUsedAsIs(relation.getOpensourceLicense().getExtDistAsIs());
                    licenseDto.setExtDistModByFmr(relation.getOpensourceLicense().getExtDistModified());
                    return licenseDto;
                })
                .collect(Collectors.toList()));

        licenses.addAll(category.getLlmLicensePredecessorSuccessorRelation().stream()
                .filter(relation -> "Predecessor".equals(relation.getRelationType()))
                .map(relation -> findCategoryById(relation.getLlmOsTechLeanixId(), categories))
                .filter(Objects::nonNull)
                .flatMap(predecessor -> predecessor.getLlmLicensePredecessorSuccessorRelation().stream())
                .filter(relation -> "License".equals(relation.getRelationType()) && relation.getOpensourceLicense() != null)
                .map(relation -> {
                    LicenseDto licenseDto = new LicenseDto();
                    licenseDto.setName(relation.getOpensourceLicense().getName());
                    licenseDto.setType(relation.getRelationType());
                    licenseDto.setIntUsedAsIs(relation.getOpensourceLicense().getIntAsIs());
                    licenseDto.setIntModByFmr(relation.getOpensourceLicense().getIntModified());
                    licenseDto.setExtUsedAsIs(relation.getOpensourceLicense().getExtAsIs());
                    licenseDto.setExtModByFmr(relation.getOpensourceLicense().getExtModified());
                    licenseDto.setExtDistUsedAsIs(relation.getOpensourceLicense().getExtDistAsIs());
                    licenseDto.setExtDistModByFmr(relation.getOpensourceLicense().getExtDistModified());
                    return licenseDto;
                })
                .collect(Collectors.toList()));

        return licenses;
    }

    private static List<PromptGuidelineDto> getPromptGuidelineDetails(LLMOSCategory category, List<LLMOSCategory> categories) {
        List<PromptGuidelineDto> promptGuidelines = new ArrayList<>();

        promptGuidelines.addAll(category.getLlmLicensePredecessorSuccessorRelation().stream()
                .filter(relation -> "Predecessor".equals(relation.getRelationType()))
                .map(relation -> findCategoryById(relation.getLlmOsTechLeanixId(), categories))
                .filter(Objects::nonNull)
                .flatMap(predecessor -> predecessor.getLlmLicensePredecessorSuccessorRelation().stream())
                .filter(relation -> "Predecessor".equals(relation.getRelationType()) && relation.getOpensourceLicense() != null)
                .map(relation -> {
                    PromptGuidelineDto promptGuidelineDto = new PromptGuidelineDto();
                    promptGuidelineDto.setName(relation.getOpensourceLicense().getName());
                    promptGuidelineDto.setType(relation.getRelationType());
                    promptGuidelineDto.setIntPrompt(relation.getOpensourceLicense().getIntAsIs());
                    promptGuidelineDto.setIntRecipient(relation.getOpensourceLicense().getIntModified());
                    promptGuidelineDto.setExtPrompt(relation.getOpensourceLicense().getExtAsIs());
                    promptGuidelineDto.setExtRecipient(relation.getOpensourceLicense().getExtModified());
                    return promptGuidelineDto;
                })
                .collect(Collectors.toList()));

        return promptGuidelines;
    }
