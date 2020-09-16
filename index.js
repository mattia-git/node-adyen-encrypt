function adyenEncrypt(version) {
    version = ~~version;

    if (version && (version >= 22 && version <= 25)) {
        return require("./lib/0_1_" + version);
    }

    if (version && version == "securefields") {
        return require("./lib_securefields")
    }

    return require("./lib/0_1_24");
}

module.exports = adyenEncrypt;