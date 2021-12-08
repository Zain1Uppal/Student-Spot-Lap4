// import React, { useState } from "react";
// import {Button} from "react-bootstrap";
// import "./style.css";

// export default function Modal() {
//   const [modal, setModal] = useState(false);

//   const toggleModal = () => {
//     setModal(!modal);
//   };

//   if(modal) {
//     document.body.classList.add('active-modal')
//   } else {
//     document.body.classList.remove('active-modal')
//   }

//   return (
//     <>
//       <Button onClick={toggleModal} className="btn-modal">
//         Edit Profile
//       </Button>

//       {modal && (
//         <div className="modal">
//           <div onClick={toggleModal} className="overlay"></div>
//           <div className="modal-content">
//             <h2>Hello Modal</h2>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
//               perferendis suscipit officia recusandae, eveniet quaerat assumenda
//               id fugit, dignissimos maxime non natus placeat illo iusto!
//               Sapiente dolorum id maiores dolores? Illum pariatur possimus
//               quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
//               placeat tempora vitae enim incidunt porro fuga ea.
//             </p>
//             <Button className="close-modal" onClick={toggleModal}>
//               CLOSE
//             </Button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

import React, { useState } from 'react';
import './style.css';

export function Modal(){

  const [modal, setModal] = useState(false);

  function toggleModal(){
    setModal(!modal)
  }

  return(
    <div className="for-modal-cont">
      <div className="btn-modal-cont">
        <button className="btn-modal" onClick={toggleModal}>Edit Profile</button>
      </div>
      {modal && (
        <div className="modal-cont-edit">
        <div className="overlay-modal" onClick={toggleModal}></div>
        <div className="modal-content">
          <button className="close-modal-btn" onClick={toggleModal}>X</button>
          <h1>Hello Modal</h1>
          <p>Hello this is where all the inputs go</p>
          <button className="update-modal-btn">Update</button>
        </div>
      </div>
      )}
      


      



    </div>
  )

}