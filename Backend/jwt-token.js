const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);



function signJwt(username, password){
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }
    const signature = jwt.sign({
        username: username,
        password: password
    }, jwtPassword);
    return signature;
}
const ans = signJwt("hemanth@gmail.com", "asshbahbshas");
console.log(ans);

function decodeJwt(token){
    const decoded = jwt.decode(token);
    if(!decoded){
        return null;
    }else{
        return decoded;
    }
}
console.log(decodeJwt(eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbWFudGhAZ21haWwuY29tIiwicGFzc3dvcmQiOiJhc3NoYmFoYnNoYXMiLCJpYXQiOjE3NDM3ODQ0MDV9.SxlXRl23jVd96eWrL_ig6w0hy_a1xj9Mvl-wdfGKe0E
    
    ));

function verifyJwt(token){
    const verify = jwt.verify(token, jwtPassword);
   try{
       jwt.verify(token, jwtPassword);
         return true;
         }catch{
            return false;
   }
}