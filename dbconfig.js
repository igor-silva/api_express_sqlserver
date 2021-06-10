const config = {
    user: "sa",
    password: "i1g2o3r4d5",
    server: "127.0.0.1",
    database: "totvs",
    authentication: { type: 'default' },
    options:{
        trustedConnection: true,
       enableArithAort: true,
        instancename: "SQLEXPRESS",
        encrypt:false
    },
    port: 1433
}

module.exports = config;