// for production
module.exports= {
    HOST :"monorail.proxy.rlwy.net",
    USER : "root",
    PASSWORD : "NYTjtCQYCwgEVnOeCOcEQbIZMJAinFYz",
    DB :"railway", 
    diaect : "mysql",
    pool:{
        max : 5, 
        min:0,
        acquire :30000,
        idle:10000,
    },
};
//  forlocal
// module.exports= {
//     HOST :"localhost",
//     USER : "root",
//     PASSWORD : "",
//     DB :"collegeauth", 
//     diaect : "mysql",
//     pool:{
//         max : 5, 
//         min:0,
//         acquire :30000,
//         idle:10000,
//     },
// };