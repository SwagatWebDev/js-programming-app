function add(a, b) {
    return a + b;
}
console.log(add(2, 3));

// parameter => expression
const result = (a, b) => a + b;
console.log(result(2, 3));

const square = a => a * a;
console.log(square(5));

// callback
setTimeout(function (){
    console.log("Callback Function called")
}, 2000);

setTimeout(() => {
    console.log("Callback Function called");
}, 2000);

// Object Literals
const person = {
    name: 'John',
    greet:  () => {
        console.log(`Hello my name is John`)
    }
}
person.greet();

// default parameter

const greet = (name = 'Guest') => {
    console.log(`Hello, ${name}`)
};
greet();
greet('Alice');package com.example.config;

import com.github.benmanes.caffeine.cache.Caffeine;
import com.github.benmanes.caffeine.cache.Cache;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.CacheManager;
import org.springframework.cache.caffeine.CaffeineCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;
import java.util.concurrent.TimeUnit;

import com.fasterxml.jackson.databind.ObjectMapper;

@Configuration
public class CaffeineCacheConfig {

    private static final Logger LOGGER = LoggerFactory.getLogger(CaffeineCacheConfig.class);
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Bean
    public CacheManager cacheManager() {
        CaffeineCacheManager cacheManager = new CaffeineCacheManager() {
            @Override
            protected Cache<Object, Object> createNativeCaffeineCache(String name) {
                Cache<Object, Object> cache = super.createNativeCaffeineCache(name);

                // If the cache is 'capabilityDomainCache', wrap it with additional logic
                if (CacheNameConstants.CAPABILITY_DOMAIN_CACHE.equals(name)) {
                    return new ConditionalCacheWrapper(cache);
                }

                return cache;
            }
        };

        cacheManager.setCacheNames(Arrays.asList(
            CacheNameConstants.SOLUTION_CACHE,
            CacheNameConstants.CAPABILITIES_CACHE,
            CacheNameConstants.CAPABILITY_DOMAIN_CACHE,
            CacheNameConstants.PORTFOLIO_EXPLORER_CACHE,
            CacheNameConstants.CAPABILITY_SUMMARY_REPORT_CACHE,
            CacheNameConstants.SOLUTION_HEALTH_SUMMARY_REPORT_CACHE,
            CacheNameConstants.PRODUCT_WITH_ARCHITECTURE_REPORT_CACHE
        ));

        cacheManager.setCaffeine(caffeineCacheBuilder());
        return cacheManager;
    }

    public Caffeine<Object, Object> caffeineCacheBuilder() {
        return Caffeine.newBuilder()
            .initialCapacity(100)
            .expireAfterAccess(60, TimeUnit.MINUTES)
            .removalListener((Object key, Object value, RemovalCause cause) -> 
                LOGGER.info("Removal listener called with key [{}], cause [{}], evicted [{}]", 
                            key, cause, cause.wasEvicted())
            )
            .recordStats();
    }

    /**
     * Wrapper to add custom logic for 'capabilityDomainCache' before insertion.
     */
    public class ConditionalCacheWrapper implements Cache<Object, Object> {

        private final Cache<Object, Object> delegate;

        public ConditionalCacheWrapper(Cache<Object, Object> delegate) {
            this.delegate = delegate;
        }

        @Override
        public Object getIfPresent(Object key) {
            return delegate.getIfPresent(key);
        }

        @Override
        public void put(Object key, Object value) {
            // Add custom conditions for 'capabilityDomainCache' here
            if (key != null && CacheNameConstants.CAPABILITY_DOMAIN_CACHE.equals(key)) {
                boolean isValidResponse = validateResponse(value);
                if (!isValidResponse) {
                    LOGGER.warn("Invalid data for key [{}], value not inserted into cache.", key);
                    return; // Do not insert into cache if the response is invalid
                }
            }
            delegate.put(key, value);
        }

        // You can implement all other methods by delegating to the actual cache

        /**
         * Validates the response value before inserting into the cache.
         * 
         * @param value The value to be checked
         * @return true if the value is valid, false otherwise
         */
        private boolean validateResponse(Object value) {
            try {
                // Assuming the response is in JSON format, deserialize and check for errors
                if (value instanceof String) {
                    // Parse the JSON and check for error fields
                    String json = (String) value;
                    Object parsedValue = objectMapper.readTree(json);
                    
                    // Perform your custom checks here, e.g.:
                    // Check if the JSON contains error-related keys like "error" or "status"
                    if (parsedValue.has("error") || parsedValue.has("status") && parsedValue.get("status").asText().equalsIgnoreCase("error")) {
                        return false; // Invalid data
                    }
                }
            } catch (Exception e) {
                // Log the error if the response is not valid JSON
                LOGGER.error("Invalid JSON data, cannot cache value: {}", value, e);
                return false; // Invalid JSON data
            }
            
            // If no errors, return true indicating the data is valid
            return true;
        }

        // Delegate all other required methods from Cache interface

        @Override
        public void invalidate(Object key) {
            delegate.invalidate(key);
        }

        @Override
        public void invalidateAll() {
            delegate.invalidateAll();
        }

        @Override
        public long estimatedSize() {
            return delegate.estimatedSize();
        }

        @Override
        public void cleanUp() {
            delegate.cleanUp();
        }

        // Add other methods as needed
    }
}




