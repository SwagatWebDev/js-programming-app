import fetch from "node-fetch";

const API_URL = 'https://api.github.com/users/SwagatWebDev';

const handelPromise = () => {
    fetch(API_URL)
        .then((data) => {
            if(!data.ok){
                throw new Error('Http Error:'+ data.status);
            }
            return data.json();
        }).then((jsonValue) => {
        console.log(jsonValue)
    }).catch((error) => {
        console.log('My error '+ error);
    })
};
handelPromise();

SELECT 
    s.leanix_solution_id AS id,
    s.name,
    s.description,
    s.registry_url,
    s.reuse_model,
    s.architecture_url,
    s.costcenter_cio_group_name,
    s.source_type,
    COALESCE(c.name, cd.name) AS capability_name,
    COALESCE(c.description, cd.description) AS capability_description,
    COALESCE(c.full_path_name, cd.full_path_name) AS capability_full_path,
    COALESCE(c.id, cd.id) AS capability_id,
    COALESCE(c.capability_level, 'L1') AS capability_level,
    r.usage_disposition,
    r.bu_disposition_amt,
    r.bu_disposition_pi,
    r.bu_disposition_wi,
    r.bu_disposition_fbt,
    r.bu_disposition_cbpt,
    r.bu_disposition_geode,
    r.comments,
    r.conditions_for_use,
    s.snow_id,
    s.created_t,
    s.modified_t,
    COALESCE(app.application_life_cycle_stage_cd, pr.product_active_status_cd) AS status,
    s.is_core_common,
    s.portability_score,
    s.portability_document
FROM 
    (
        SELECT leanix_solution_id, active 
        FROM leanix_solution 
        WHERE active = TRUE
    ) s
INNER JOIN 
    (
        SELECT leanix_solution_id, leanix_capability_id, leanix_l1_capability_id, active, 
               usage_disposition, bu_disposition_amt, bu_disposition_pi, bu_disposition_wi,
               bu_disposition_fbt, bu_disposition_cbpt, bu_disposition_geode, 
               comments, conditions_for_use
        FROM leanix_capability_solution_relation 
        WHERE active = TRUE
    ) r ON s.leanix_solution_id = r.leanix_solution_id
LEFT JOIN 
    (
        SELECT leanix_capability_id, leanix_l1_capability_id, name, description, full_path_name, capability_level
        FROM leanix_capability
    ) c ON c.leanix_capability_id = r.leanix_capability_id
LEFT JOIN 
    (
        SELECT leanix_l1_capability_id, name, description, full_path_name
        FROM leanix_capability_domain
    ) cd ON cd.leanix_l1_capability_id = r.leanix_l1_capability_id OR cd.leanix_l1_capability_id = c.leanix_l1_capability_id
LEFT JOIN 
    (
        SELECT application_id, application_life_cycle_stage_cd
        FROM tmdl_application
    ) app ON app.application_id = s.snow_id
LEFT JOIN 
    (
        SELECT product_id, product_active_status_cd
        FROM tmdl_product
    ) pr ON pr.product_id = s.snow_id;
