const bcrypt = require('bcryptjs');

const hashPassword = async (pw) => {
    // generate the salt
    const salt = await bcrypt.genSalt(12);

    // generate the hash
    const hash = await bcrypt.hash(pw, salt);
    console.log(hash);
}

// hashPassword('monkey');

const checkPassword = async (pw, hashedPw) => {
    // compare pw to hashedPw, and if the same then can login
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) {
        console.log("successfully entered");
    }
    else {
        console.log("try to login again");
    }
}

checkPassword('monkey', '$2a$12$oqhuaIb4tWqf/oCiB0VmbOQaHNBctVevaHF56RTCpPOZyQ7Xc5mAu');