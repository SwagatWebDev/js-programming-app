List<License> allLicenses = Stream.concat(
                tech.openSourceLicense != null ? tech.openSourceLicense.stream().flatMap(osLicense -> osLicense.Licenses.stream()) : Stream.empty(),
                (tech.openSourceLicense == null || tech.openSourceLicense.isEmpty()) && tech.predecessorTechnology != null
                        ? tech.predecessorTechnology.stream().flatMap(predecessor -> predecessor.Licenses.stream())
                        : Stream.empty()
        ).collect(Collectors.toList());
