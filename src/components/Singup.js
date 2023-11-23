import React from "react";

function Signup() {
    
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const [errors, setErrors] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newErrors = {};

        if (formData.firstName.trim() === '') {
            newErrors.firstName = 'First name cannot be empty';
        }

        if (formData.lastName.trim() === '') {
            newErrors.lastName = 'Last name cannot be empty';
        }

        if (formData.email.trim() === '' || !isValidEmail(formData.email.trim())) {
            newErrors.email = 'Looks like this is not a valid Email';
        }

        if (formData.password.trim() === '') {
            newErrors.password = 'Password cannot be empty';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
        }
    }

    return (
        <div className="container">
            <div className="box">
                <p className="box--text"><span className="bold">Try it free 7 days </span>
                then $20/mo. thereafter</p>
            </div>
            <div className="form--wrap bold">
                <form onSubmit={handleSubmit}>
                    <div className="wrapper">
                        <input
                            type="text"
                            placeholder={errors.firstName ? "" : "First Name"}
                            onChange={handleChange}
                            name="firstName"
                            value={formData.firstName}
                            className={errors.firstName ? "error-input" : ''}
                        />
                        {errors.firstName ? <p className="errormsg">{errors.firstName}</p> : ''}
                    </div>

                    <div className="wrapper">
                        <input
                            type="text"
                            placeholder={errors.lastName ? "" : "Last Name"}
                            onChange={handleChange}
                            name="lastName"
                            value={formData.lastName}
                            className={errors.lastName ? "error-input" : ''}
                        />
                        {errors.lastName ? <p className="errormsg">{errors.lastName}</p> : ''}
                    </div>

                    <div className="wrapper">
                        <input
                            type="email"
                            placeholder={errors.email ? "email@example/com" : "Email Address"}
                            onChange={handleChange}
                            name="email"
                            value={formData.email}
                            className={errors.email ? "error-input red" : ''}
                        />
                        {errors.email ? <p className="errormsg">{errors.email}</p> : ""}
                    </div>

                    <div className="wrapper">
                        <input
                            type="password"
                            placeholder={errors.password ? "" : "Password"}
                            onChange={handleChange}
                            name="password"
                            value={formData.password}
                            className={errors.firstName ? "error-input" : ''}
                        />
                        {errors.password ? <p className="errormsg">{errors.password}</p> : ''}
                    </div>

                    <button>claim your free trial</button>
                </form>
                <p className="terms">By clicking this button, you are agreeing to our <a href="link">Terms and Services</a></p>
            </div>
        </div>
    )
}

export default Signup;
