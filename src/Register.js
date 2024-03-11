import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {

    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [age, agechange] = useState("");
    const [gender, genderchange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [qualification, qualificationchange] = useState("");
    const [experience, experiencechange] = useState("");
    
    const navigate = useNavigate();

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (id === null || id === '') {
            isproceed = false;
            errormessage += ' Username';
        }
        if (name === null || name === '') {
            isproceed = false;
            errormessage += ' Fullname';
        }
        if (age === null || age === '') {
            isproceed = false;
            errormessage += ' Age';
        }
        if (gender === null || gender === '') {
            isproceed = false;
            errormessage += ' Gender';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }
        if (phone === null || phone === '') {
            isproceed = false;
            errormessage += ' Phone Number';
        }
        if (qualification === null || qualification === '') {
            isproceed = false;
            errormessage += ' Qualification';
        }
        if (experience === null || experience === '') {
            isproceed = false;
            errormessage += ' Experrience';
        }


        if(!isproceed)
        {
            toast.warning(errormessage)
        }

        else
        {
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))
            {

            }
            else
            {
                isproceed = false;
                toast.warning('Please enter the valid email')
            }

            if(/^[0-9\b]+$/.test(phone))
            {

            }
            else
            {
                isproceed = false;
                toast.warning('Please enter the valid phone')
            }

            if(age>18)
            {

            }
            else
            {
                isproceed = false;
                toast.warning('Age should be greater than 18')
            }

            if(name.length < 20)
            {

            }
            else
            {
                isproceed = false;
                toast.warning('Name should be maximum of 20 characters')
            } 
        }
        return isproceed;
    }


    const handlesubmit = (e) => {
            e.preventDefault();
            let regobj = { id, name, age, gender, email, phone, qualification, experience};
            if (IsValidate()) {
            //console.log(regobj);
            fetch("http://localhost:8000/emp", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then((res) => {
                toast.success('Registered successfully.')
                navigate('/login');
            }).catch((err) => {
                toast.error('Failed :' + err.message);
            });
        }
    }
    return (
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-header">
                            <h1>Employee Registeration</h1>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>ID <span className="errmsg">*</span></label>
                                        <input value={id} onChange={e => idchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Employee Name <span className="errmsg">*</span></label>
                                        <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Age <span className="errmsg">*</span></label>
                                        <input value={age} onChange={e => agechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email <span className="errmsg">*</span></label>
                                        <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Phone <span className="errmsg"></span></label>
                                        <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Qualifications <span className="errmsg">*</span></label>
                                        <input value={qualification} onChange={e => qualificationchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Experrience</label>
                                        <textarea value={experience} onChange={e => experiencechange(e.target.value)} className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Gender</label>
                                        <br></br>
                                        <input type="radio" checked={gender === 'male'} onChange={e => genderchange(e.target.value)} name="gender" value="male" className="app-check"></input>
                                        <label>Male</label>
                                        <input type="radio" checked={gender === 'female'} onChange={e => genderchange(e.target.value)} name="gender" value="female" className="app-check"></input>
                                        <label>Female</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;