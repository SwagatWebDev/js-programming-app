
list.stream()
                .sorted((s1, s2) -> {
                    String[] parts1 = s1.split("(?<=\\D)(?=\\d)|(?<=\\d)(?=\\D)");
                    String[] parts2 = s2.split("(?<=\\D)(?=\\d)|(?<=\\d)(?=\\D)");

                    for (int i = 0; i < Math.min(parts1.length, parts2.length); i++) {
                        int cmp = parts1[i].matches("\\d+") && parts2[i].matches("\\d+") ?
                                Integer.compare(Integer.parseInt(parts1[i]), Integer.parseInt(parts2[i])) :
                                parts1[i].compareTo(parts2[i]);
                        if (cmp != 0) return cmp;
                    }
                    return Integer.compare(parts1.length, parts2.length);
                })
                .collect(Collectors.toList());