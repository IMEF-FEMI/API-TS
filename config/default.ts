export default {
    port: 1337,
    dbUri: "mongodb://localhost:27017/rest-api-tutorial",
    saltWorkFactor: 10,
    accessTokenTtl: "15m",
    refreshTokenTtl: "1y",
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
    MIICXQIBAAKBgQC+MyVAMVo8xP34KbC+l58vChxRUgv9qNrNlDdwwIXzlLiu/VTd
    firUx4RYqJsbIckMZ4EMx2M0u+AiaZcTjsEq/TgCHhVd/T0sOUaoUeukXWvprLlG
    4AMjs184cTS0dzzjbRpyo4fec7fANRPS67qSQgHgZoSvWjYZEyFXK8pSwQIDAQAB
    AoGAQX/Jfz6/rZfFQjXROQFr/z4DHHodyP/iQdOd+AVE2+pGY3S4SgKN63K9/+4o
    ZAKRguUOCwGLB3j/qbolHcYWfQhyiD1ia831KneGzL/Ny1pomi76lIT95nQxcdn8
    PFPO4FM9vbOm5cdb6bOIOmPetX4NGDuBDX07+Sr/AMnGevUCQQDfizmbK5elNOQ5
    Ha1V1LYjTn1TIv7LI+/O9oaqq4TxzCFqOR95nwC1BUi6jDggJb6jGimX4nNcZ2/m
    WUKMD+IDAkEA2dCS7ZM/j+iEHFJbRL8iT82hQie0VSLzCCywgvb1phg5aufwP5RM
    nqgcIOMHsr00HkfAgo2ULhEDRc1hU+ie6wJBAIHIkhRdtbgrwgjLCxSW33wWGLrI
    yYblAVh2Vm8GD7RWYFwMeBKjVsTCIZx0xi0b3NdS3C0bQwC16Qiib/ljS0MCQQDT
    aC6DamzCB4LaXlD5a64o2MOQiyrriy1pnL6BjqMkX9Sy34V+oDixsScEAHbDVAKW
    9TtzO2k8QQT1Jf82SsybAkBy7tBPF6HUmYnCzk93SqI6yXpZP2Csxc0jsNp3CQsg
    2lgRiNKxNQF8ns65AUr+sv309NyGP0CO54IoLq6W5bol
-----END RSA PRIVATE KEY-----`,
    publicKey:`-----BEGIN PUBLIC KEY-----
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+MyVAMVo8xP34KbC+l58vChxR
    Ugv9qNrNlDdwwIXzlLiu/VTdfirUx4RYqJsbIckMZ4EMx2M0u+AiaZcTjsEq/TgC
    HhVd/T0sOUaoUeukXWvprLlG4AMjs184cTS0dzzjbRpyo4fec7fANRPS67qSQgHg
    ZoSvWjYZEyFXK8pSwQIDAQAB
-----END PUBLIC KEY-----`
}

// Generate Key Pair
// openssl genrsa -des3 -out private.pem 2048

// Extract Public Key
// openssl rsa -in private.pem -outform PEM -pubout -out public.pem
// https://travistidwell.com/jsencrypt/demo/