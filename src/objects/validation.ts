 const patterns: object =
{


  fullname: /^\w{2,20}\s\s?\w{2,20}$/,
  nickname: /^\w{2,20}/,
  email: /$[a-d]^/,
  password: /$[a-d]^/,
  telephone: /^[1-9]\d{10}$/

};
console.log( patterns);


export default patterns;