const email =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,12})+$/;
const passwordErrors = [
    {
      error: 'Password must be atleast 8 characters long',
      regex: /[0-9a-zA-Z!@#$&()\\-`.+,/\)]{8,100}/,
    },
    {
      error: 'Password must include atleast 1 numeric character',
      regex: /.*[0-9].*/,
    },
    {
      error: 'Password must include atleast 1 uppercase character',
      regex: /.*[A-Z].*/,
    },
    {
      error: 'Password must include atleast 1 special character',
      regex: /.*[!@#$%^&*();'[].*/,
    },
  ];