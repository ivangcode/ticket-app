import React from "react";
// import md5 from "md5";

function Gravatar(props) {
  // const email = props.email;
  // const hash = md5(email); 
  // console.log(hash);

  return (
    <img
      className={props.className}
      src='https://www.gravatar.com/avatar/3551d360e96f1cdda7a9d8fb20ef6c23.jpg'
      alt="Avatar"
    />
  );
}

export default Gravatar;
