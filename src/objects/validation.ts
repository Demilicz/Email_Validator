

const patterns: { fullname:RegExp, nickname:RegExp, email:RegExp, password:RegExp, telephone:RegExp} =
{
  fullname: /^\w{5,12}\s\s?\w{5,12}$/,
  nickname: /^\w{5,12}$/,
  email: /^([\w\d\.-]+)@([a-z\d\.-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[\w@-]{8,20}$/,
  telephone: /^[1-9]\d{10}$/
}


export default patterns;