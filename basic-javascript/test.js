list.stream()
                .sorted(Comparator.comparing(
                        item -> item.name.split("(?<=\\D)(?=\\d)|(?<=\\d)(?=\\D)"),
                        (parts1, parts2) -> {
                            for (int i = 0; i < Math.min(parts1.length, parts2.length); i++) {
                                int cmp = parts1[i].matches("\\d+") && parts2[i].matches("\\d+") ?
                                        Integer.compare(Integer.parseInt(parts1[i]), Integer.parseInt(parts2[i])) :
                                        parts1[i].compareTo(parts2[i]);
                                if (cmp != 0) return cmp;
                            }
                            return Integer.compare(parts1.length, parts2.length);
                        }))