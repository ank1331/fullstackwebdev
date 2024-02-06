const fs = require('fs');
const pg = require('pg');
const url = require('url');

const config = {
    user: "avnadmin",
    password: "AVNS_WSIER2XCRFMyu1Nr3Ff",
    host: "pg-11f4832f-ankitsharma133189-914c.a.aivencloud.com",
    port: 26604,
    database: "defaultdb",
    ssl: {
        rejectUnauthorized: true,
        ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIURCe3OwhNiW0NCOY8rCtneV+0QlgwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvYmYwMzM1NzctYTUyMC00ODAzLWIzMGQtZjhjNGE2YjE1
ZWYyIFByb2plY3QgQ0EwHhcNMjQwMjA2MTI0MTE3WhcNMzQwMjAzMTI0MTE3WjA6
MTgwNgYDVQQDDC9iZjAzMzU3Ny1hNTIwLTQ4MDMtYjMwZC1mOGM0YTZiMTVlZjIg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAKlDpTHy
k3XZEMPGeWliiHhdyYg9PZR6qJmWcaYfCWHIlOZchSf16HewksnVge3jicMFVU0T
ds+oGAopqKkttxa99hLInVCVjQZnIhqYMfSP0BdVvHLlH1TjGJHh6pq1Oa5trATQ
MCwv1pVPpcXgZSOjGLRbBYdQq/+5U9v5yJiUtSAA23c2MfTlAnP/htbkA8FTQuRf
MN6hVztUFKMXyDaI3JpyEcWNkOEGlUOxqlw6RWwfsoDCK7rt8U+Mu4h1K3Qk28ge
3s+JScnz0MaiPMMt5GCCX67UsE7FtxBkqAZFr9E23vFY+JyY7hxGBb33qZhNmwoi
dB2kRxn5nZcn/56MBybmvRaVfjykKN/XWX/V2iSxUuiW1YnPu92hlQA/nhGPMvgD
Y71dqvEQH3NWzPS4zbq5x91ttkn2s601q0nYjWJQx7OKvJhC+WdD7l9KHqrKmT8z
DzDlds0kRxMa9sEfIlSNVGkK0MkFbXwHGeB7n2qkyzn3MtY7ZC4FdNqCNQIDAQAB
oz8wPTAdBgNVHQ4EFgQUa+v6FCdDZYSVGjcEiLrqT3MukIcwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBACYKkpWKSGcNrhBu
UIArjxF2LrVHYcocDcKBH6ElmDo9FjfV4a12re1oNLatxloPrq8pbo6UAZxmN+r8
KPAB6cpZNOCsYKd/otnPl/Rjy9Je42EPXTJP7TNA4OM4dnGj6crOpM4l5Aqo43OB
fdqvZ1NceY1C2xpWd0IzB65SCkzAN3ATvCfXbCLwBUxrHEIuB7K2Oe+nWei79Zse
900Kt7pLzkbxKYMiETYGVNRoJaQ3qV5eOvOaWd8rcRqmdyAhs2IOqKZ9glJ4WWhO
hE215BFIBjMThM9vg/ZKqy12Ht95HoIvlJpmypUW/FrY/dnIIZP5hc3nRm0MGmZQ
HHoPtuj6a3NV8zK/hBEJ97RAuKIvh1Fof/0S6j8FrQI2KtbshGjXNTkzkcr61ZW0
ioH9opsS2cJ8KZ7+R5cdrIhMB8/mCkuy8WK93DTvIL4wcQlnaFGJR8uo7R7l6KK5
LtyXewPwRphF/1LVI+phw88vpIqDg7xSDfm3hthIsUSQTim+TA==
-----END CERTIFICATE-----`,
    },
};

const client = new pg.Client(config);
client.connect(function (err:any) {
    if (err)
        throw err;
    client.query("SELECT VERSION()", [], function (err:any, result:any) {
        if (err)
            throw err;

        console.log(result.rows[0].version);
        client.end(function (err:any) {
            if (err)
                throw err;
        });
    });
});