import jwt          from 'jsonwebtoken'
const {JWT_SECRET_KEY} = process.env ;

const signJwt = ({payload,expiresIn})=>{
    return jwt.sign(payload, JWT_SECRET_KEY, { expiresIn });
}
    
const verifyJwt = (payload)=>{
    return jwt.verify(payload, JWT_SECRET_KEY);
}


export {
    signJwt,
    verifyJwt
}