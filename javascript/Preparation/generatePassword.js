function newPassword() {
  let length = 8;
  const charset =  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$^&*";
   let newPassword = "";
  let n = charset.length;

  for (var i = 0; i < length; ++i) {
    newPassword += charset.charAt(Math.floor(Math.random() * n));
  }

  return newPassword;
}

const password = newPassword();
console.log(password);
