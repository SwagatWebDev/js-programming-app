import fetch from "node-fetch";

function makeAPICalls(url){
    return fetch(url)
        .then((response) => {
            if(!response.ok){
                throw new Error('HTTP Error', response.status);
            }
            return response.json();
        })
}

Promise.race([
    makeAPICalls('https://jsonplaceholder.typicode.com/posts'),
    makeAPICalls('https://jsonplaceholder.typicode.com/users'),
    makeAPICalls('https://jsonplaceholder.typicode.com/comments')
]).then((firstResponse) => {
    console.log('Data form API to respond', firstResponse);
}).catch((error) => {
    console.log('An error occurred', error);
})

SELECT 
    s.name,
    s.leanix_solution_id AS id,
    s.architecture_url,
    s.costcenter_cio_group_name,
    s.source_type,
    COALESCE(c.name, cd.name) AS capability_name,
    COALESCE(c.description, cd.description) AS capability_description,
    COALESCE(c.id, cd.id) AS capability_id,
    COALESCE(c.capability_level, 'L1') AS capability_level,
    COALESCE(c.full_path_name, cd.full_path_name) AS capability_full_path,
    STRING_AGG(ref.reference_name, ', ') AS resources, -- Aggregating resources
    r.usage_disposition,
    r.bu_disposition_geode,
    r.bu_comments,
    r.conditions_for_use,
    s.snow_id,
    s.created_t,
    s.modified_t,
    s.core_common,
    s.portability_score,
    s.portability_document
FROM 
    leanix_solution s
LEFT JOIN 
    leanix_factsheet_reference ref 
    ON ref.leanix_factsheet_id = s.leanix_solution_id
LEFT JOIN 
    leanix_capability_solution_relation r 
    ON s.leanix_solution_id = r.leanix_solution_id
LEFT JOIN 
    leanix_capability c 
    ON c.leanix_capability_id = r.leanix_capability_id
LEFT JOIN 
    leanix_capability_domain cd 
    ON cd.leanix_l1_capability_id = c.leanix_capability_id
LEFT JOIN 
    usage_disposition ud 
    ON UPPER(ud.name) = UPPER(s.usage_disposition)
LEFT JOIN 
    reuse_model rm 
    ON rm.name = s.reuse_model
GROUP BY 
    s.name, 
    s.leanix_solution_id, 
    s.architecture_url, 
    s.costcenter_cio_group_name, 
    s.source_type, 
    c.name, 
    cd.name, 
    c.description, 
    cd.description, 
    c.id, 
    cd.id, 
    c.capability_level, 
    c.full_path_name, 
    cd.full_path_name, 
    r.usage_disposition,
    r.bu_disposition_geode,
    r.bu_comments,
    r.conditions_for_use,
    s.snow_id,
    s.created_t,
    s.modified_t,
    s.core_common,
    s.portability_score,
    s.portability_document
ORDER BY 
    s.leanix_solution_id;

