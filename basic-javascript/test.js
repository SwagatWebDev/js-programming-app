private static String findWorstCase(Stream<String> values) {
        return values.filter(value -> value != null)
                .min(Comparator.comparingInt(value -> switch (value) {
                    case "alwaysReject" -> 1;
                    case "alwaysReviewed" -> 2;
                    case "alwaysApproved" -> 3;
                    default -> Integer.MAX_VALUE;
                }))
                .orElse(null);
    }
