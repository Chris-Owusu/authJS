const bcrypt = require("bcrypt");

// Create password hashing function below:
const passwordHash = async (password, saltRounds) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await  bcrypt.hash(password, salt);
    return hash;
  } catch (err) {
    console.log(err)
  }
  return null;
}


// Compare the password when trying to retrieve
const comparePass = async (password, hash) => {
    try {
        const pass = await bcrypt.compare(password, hash);
        return pass;
    } catch (error) {
        console.log(error);
    }
    return false;
}