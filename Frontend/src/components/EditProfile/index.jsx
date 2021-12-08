import { Form, Button } from "react-bootstrap"

import {UserContext} from '../../contexts/UserContext'
import {useContext, useState} from 'react';

export const EditForm = ({user}) =>{

    const id = user.id;

    const [name, setName] = useState(user.name);
    const [course, setCourse] = useState(user.course);
    const [uni, setUni] = useState(user.uni);
    const [location, setLocation] = useState(user.location);
    const [bio, setBio] = useState(user.bio);


    const {updateUser} = useContext(UserContext);

    const updatedUser = {id, course, uni, location, bio}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(id, updatedUser)
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Course"
                    name="course"
                    value={course}
                    onChange={(e)=> setCourse(e.target.value)}
                  
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Uni"
                    name="uni"
                    value={uni}
                    onChange={(e)=> setUni(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Location"
                    name="location"
                    value={location}
                    onChange={(e)=> setLocation(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="bio"
                    name="bio"
                    value={bio}
                    onChange={(e)=> setBio(e.target.value)}
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Edit Profile
            </Button>
        </Form>

     )
}

export default EditForm;