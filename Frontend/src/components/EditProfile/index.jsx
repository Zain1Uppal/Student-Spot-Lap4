// import { Form, Button } from "react-bootstrap"

// import {UserContext} from '../../contexts/UserContext'
// import {useContext, useState} from 'react';

// export const EditForm = ({user}) =>{

//     const id = user.id;

//     const [name, setName] = useState(user.name);
//     const [course, setCourse] = useState(user.course);
//     const [uni, setUni] = useState(user.uni);
//     const [location, setLocation] = useState(user.location);
//     const [bio, setBio] = useState(user.bio);


//     const {updateUser} = useContext(UserContext);

//     const updatedUser = {id, course, uni, location, bio}

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         updateUser(id, updatedUser)
//     }

//      return (

//         <Form onSubmit={handleSubmit}>
//             <Form.Group>
//                 <Form.Control
//                     type="text"
//                     placeholder="Name *"
//                     name="name"
//                     value={name}
//                     onChange={(e)=> setName(e.target.value)}
//                     required
//                 />
//             </Form.Group>
//             <Form.Group>
//                 <Form.Control
//                     type="text"
//                     placeholder="Course"
//                     name="course"
//                     value={course}
//                     onChange={(e)=> setCourse(e.target.value)}
                  
//                 />
//             </Form.Group>
//             <Form.Group>
//                 <Form.Control
//                     type="text"
//                     placeholder="Uni"
//                     name="uni"
//                     value={uni}
//                     onChange={(e)=> setUni(e.target.value)}
//                 />
//             </Form.Group>
//             <Form.Group>
//                 <Form.Control
//                     type="text"
//                     placeholder="Location"
//                     name="location"
//                     value={location}
//                     onChange={(e)=> setLocation(e.target.value)}
//                 />
//             </Form.Group>
//             <Form.Group>
//                 <Form.Control
//                     as="textarea"
//                     placeholder="bio"
//                     name="bio"
//                     value={bio}
//                     onChange={(e)=> setBio(e.target.value)}
//                 />
//             </Form.Group>
//             <Button variant="success" type="submit" block>
//                 Edit Profile
//             </Button>
//         </Form>

//      )
// }

// export default EditForm;
import React from 'react';

export const EditForm = () => {
    return(
<form className="card mb-4" style={{marginTop:'0'}}>
                      <div className="card-body">
                        <div className="row">
                        <div className="col-sm-6 col-md-6">
                            <div className="mb-4">
                              <label className="form-label">University Course</label>
                              <input className="form-control" type="text" placeholder="Enter course title here"/>
                            </div>
                          </div>
                          <div className="col-md-5">
                            <div className="mb-4">
                              <label className="form-label">University</label>
                              <select className="form-control custom-select"> 
                              {/* select value={optionsState} */}
                                 <option value="">University of Oxford</option>
                                 <option value="">University of Cambridge</option>
                                 <option value="">Kings College London</option>
                                 <option value="">LSE</option>
                                 <option value="">University of St Andrews</option>
                                 <option value="">Imperial College London</option>
                                 <option value="">Durham University</option>
                                 <option value="">Loughborough University</option>
                                 <option value="">University College London</option>
                                 <option value="">University of Warwick</option>
                                 <option value="">University of Bath</option>
                                 <option value="">Lancaster University</option>
                                 <option value="">University of Edinburgh</option>
                                 <option value="">University of Manchester</option>
                                 <option value="">University of Exeter</option>
                                 <option value="">University of Southampton</option>
                                 <option value="">University of Glasgow</option>
                                 <option value="">University of London</option>
                                 <option value="">University of Bristol</option>
                                 <option value="">University of York</option>
                                 <option value="">University of Birmingham</option>
                                 <option value="">University of Leeds</option>
                                 <option value="">University of Nottingham</option>
                                 <option value="">University of Sheffield</option>
                                 <option value="">University of Essex</option>
                                 <option value="">University of Dundee</option>
                                 <option value="">University of Liverpool</option>
                                 <option value="">University of Surrey</option>
                                 <option value="">University of Reading</option>
                               </select>
                             </div>
                           </div>
                           <div className="col-sm-6 col-md-6">
                             <div className="mb-4">
                               <label className="form-label">First Name</label>
                               <input className="form-control" type="text" placeholder="First Name"/>
                             </div>
                           </div>
                           <div className="col-sm-6 col-md-6">
                             <div className="mb-4">
                               <label className="form-label">Last Name (optional)</label>
                               <input className="form-control" type="text" placeholder="Last Name"/>
                             </div>
                           </div>
                         
                           <div className="col-sm-6 col-md-4">
                             <div className="mb-4">
                               <label className="form-label">City</label>
                               <input className="form-control" type="text" placeholder="City"/>
                             </div>
                           </div>
                           <div className="col-sm-6 col-md-4">
                             <div className="mb-4">
                               <label className="form-label">Profile Picture</label>
                                <div>
                                    <input type="radio" id="pic1" name="profilepic" value=" 1"/>
                                    <label for="1"> 1</label>
                                
                                    <input type="radio" id="dewey" name="profilepic" value=" 2"/>
                                    <label for="2"> 2</label>
                                    
                                    <input type="radio" id="louie" name="profilepic" value=" 3"/>
                                    <label for="3"> 3</label>
                                  
                                    <input type="radio" id="dewey" name="profilepic" value=" 4"/>
                                    <label for="4"> 4</label>
                                    
                                    <input type="radio" id="louie" name="profilepic" value=" 5"/>
                                    <label for="5"> 5</label>
                                </div>
                             </div>
                           </div>
                           <div className="col-md-5">
                             <div className="mb-4">
                               <label className="form-label">Country</label>
                               <select className="form-control custom-select">
                                 <option value="">UK</option>
                                 <option value="">US</option>
                               </select>
                             </div>
                           </div>
                          
                           <div className="col-md-12">
                             <div className="mb-0">
                               <label className="form-label">Bio</label>
                               <textarea className="form-control" rows="5" placeholder="Here can be your description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</textarea>
                               
                           </div>
                           
                             </div>
                            
                         </div>
                       </div>
                     
                     </form>
    )
}
