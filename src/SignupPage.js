import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useWorkOrder } from './WorkOrderContext';
import { sanitizeInput, validateEmail, validatePhoneNumber } from './Security/inputValidation.js';
import Popup from './UI Elements/Popup.js'
import { createRecord } from './FileMaker/createRecord.js';
import { useNavigate } from 'react-router-dom';



function SignupPage() {
    const { createAuthUser, logIn, authState, setAuthState } = useAuth();
    const { setWorkOrderData } = useWorkOrder();
    const [isCreatingAccount, setIsCreatingAccount] = useState(false);
    const [popup, setPopup] = useState({ show: false, message: '' });
    const navigate = useNavigate();

    useEffect(() => {
        if (authState.userToken) {
            const storedData = localStorage.getItem('formData');
            try {
                if (storedData) {
                    setWorkOrderData(JSON.parse(storedData));
                    // localStorage.removeItem('cleaningFormData'); // Optional: Clear the local storage
                    // navigate('/customer-portal'); // Navigate to customer portal
                }
            } catch (error) {
                console.error('Error parsing stored work order data:', error);
                setPopup({ show: true, message: "Failed to load work order data. Please try again." });
            }
        }
    }, [authState.userToken, navigate, setWorkOrderData]);
    

    // State for each field
    const [formFields, setFormFields] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: 'Victoria',
        province: 'BC',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
    });

    const provinces = [
        { code: "AB", name: "Alberta" },
        { code: "BC", name: "British Columbia" },
        { code: "MB", name: "Manitoba" },
        { code: "NB", name: "New Brunswick" },
        { code: "NL", name: "Newfoundland and Labrador" },
        { code: "NS", name: "Nova Scotia" },
        { code: "ON", name: "Ontario" },
        { code: "PE", name: "Prince Edward Island" },
        { code: "QC", name: "Quebec" },
        { code: "SK", name: "Saskatchewan" },
        { code: "NT", name: "Northwest Territories" },
        { code: "NU", name: "Nunavut" },
        { code: "YT", name: "Yukon" }
    ];


    const handleChange = (event) => {
        const { name, value } = event.target; // Get the input name and value from the event target
        setFormFields(prevFields => ({
            ...prevFields,
            [name]: value // Dynamically update the appropriate field based on input name
        }));
    };
    

    const handleLoginSubmit = async (event) => {
        console.log("loginSubmitted")
        event.preventDefault();
    
        const email = formFields.email; // Assuming you are using the consolidated state for formFields
        const password = formFields.password;
    
        try {
            // Assuming `login` is an async function that posts to the login endpoint
            const responseData = await logIn({ email, password });
            // Handle success
            setAuthState(prevState => ({
            ...prevState,
            userToken: responseData.token,
            // Update other state based on responseData as needed
            })); 
            setPopup({ show: true, message: `Logged In` })
            console.log("token", authState.userToken);
        } catch (error) {
            // Handle login failure
            console.error("Login failed: ", error.message);
            setAuthState(prevState => ({
                ...prevState,
                errorMessage: error.message,
            }));
            setPopup({ show: true, message: `Login Failed. ${authState.error.message}` });
        }

        navigate('/customer-portal');
    };

    const handleCreateAccount = async (event) => {
        console.log('handleCreateAccount')
        event.preventDefault();
    
        let sanitizedFormData = {};
        let isFormValid = true;
        let validationMessage = '';
        /**
         * FORM VALIDATION AND PREPERATION
         */
        //TODO: street validation
        for (const [key, value] of Object.entries(formFields)) {
            // Directly sanitize each input value
            let sanitizedValue = sanitizeInput(value);
    
            // Special handling for phoneNumber
            if (key === 'phoneNumber') {
                // Format the phone number before validation
                const formattedPhoneNumber = `+${sanitizedValue.replace(/\D/g, '')}`;
                if (!validatePhoneNumber(formattedPhoneNumber)) {
                    isFormValid = false;
                    validationMessage = "Invalid phone number format. Please enter a valid phone number.";
                    break;
                }
                sanitizedFormData[key] = formattedPhoneNumber; // Store the formatted, sanitized phone number
            } else {
                sanitizedFormData[key] = sanitizedValue;
            }
    
            // Email validation
            if (key === 'email' && !validateEmail(sanitizedValue)) {
                isFormValid = false;
                validationMessage = "Invalid email format. Please enter a valid email address.";
                break;
            }
    
            // Password match check
            if (key === 'password' && formFields.password !== formFields.confirmPassword) {
                console.log('password: ' ,formFields.password,'re-password: ' ,formFields.confirmPassword)
                isFormValid = false;
                validationMessage = "Passwords do not match. Please try again.";
                break;
            }
        }
    
        if (!isFormValid) {
            console.log('form is invalid')
            setPopup({ show: true, message: validationMessage });
            return;
        }

        /**
         * USER CREATATION
         */
    
        try {
            await createAuthUser(sanitizedFormData);
            console.log('user account created')
            setPopup({ show: true, message: "Account created successfully!" });
        } catch (error) {
            console.log('user account creation failed')
            console.error(error)
            setPopup({ show: true, message: "Failed to create account. Please try again." });
            return
            
        }
    
        // create records in FileMaker

        console.log("creating party in FileMaker")
        let partyResult = {}
        try {
            const params = {
                fieldData: {
                    displayName: `${sanitizedFormData.firstName} ${sanitizedFormData.lastName}`,
                    f_company: "0", // Assuming this is a constant for all new records
                    firstName: sanitizedFormData.firstName,
                    lastName: sanitizedFormData.lastName,
                }
            };
            const layout = "dapiParty"
            const returnRecord = true;
            partyResult = await createRecord(authState.token,params,layout,returnRecord);
            // console.log(partyResult) //remove in production
        } catch (error) {
            setPopup({ show: true, message: "Failed to create FileMaker Party account. Please try again." }); //remove in production
        }

        // get party::__ID
        const partyID = partyResult.response.data[0].fieldData["__ID"]
        console.log("party created",partyID) //remove in production

        // create email record in FileMaker
        console.log("creating email in FileMaker")
        let emailResult = {}
        try {
            const params = {
                fieldData: {
                    email: sanitizedFormData.email,
                    label: "main",
                    f_primary: 1,
                    "_fkID": partyID,
                }
            };
            const layout = "dapiEmail"
            const emailReturn = false;
            emailResult = await createRecord(authState.token,params,layout, emailReturn);
            // console.log(emailResult)
        } catch (error) {
            setPopup({ show: true, message: "Failed to create FileMaker Party account. Please try again." }); //remove in production
        }
        console.log("email created")

        // create phone record in FileMaker
        console.log("creating email in FileMaker")
        let phoneResult = {}
        try {
            const params = {
                fieldData: {
                    phone: sanitizedFormData.phoneNumber,
                    label: "main",
                    f_primary: 1,
                    f_sms: 1,
                    "_fkID": partyID,
                }
            };
            const layout = "dapiEmail"
            const phoneReturn = false;
            phoneResult = await createRecord(authState.token,params,layout, phoneReturn);
            console.log(phoneResult)
        } catch (error) {
            setPopup({ show: true, message: "Failed to create FileMaker Party account. Please try again." }); //remove in production
        }
        console.log("phone created")

        // create address record in FileMaker
        console.log("creating address in FileMaker")
        let addressResult = {}
        try {
            const params = {
                fieldData: {
                    prov: sanitizedFormData.province,
                    city: sanitizedFormData.city,
                    streetAddress: sanitizedFormData.street,
                    type: "home",
                    label: "main",
                    f_primary: 1,
                    f_sms: 1,
                    "_fkID": partyID,
                }
            };
            const layout = "dapiEmail"
            const returnResult = false;
            addressResult = await createRecord(authState.token,params,layout, returnResult);
            console.log(addressResult)
        } catch (error) {
            setPopup({ show: true, message: "Failed to create FileMaker Party account. Please try again." }); //remove in production
        }
        console.log("address created")

        //TODO: update authUser with partyID

        //redirect user to customer portal
        navigate('/customer-portal');
    };

    const handleChangeForm = () => {
        setIsCreatingAccount(true);
    };

    //TODO: create consent to text flag. pop up if checked on creatation explaining sms usage. if user uncheck explain impact
    return (
        <div className="container mx-auto px-4">
            {/* Overlay and POPUP */}
            {popup.show && (
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50" style={{ zIndex: 30 }}>
                    <Popup message={popup.message} onClose={() => setPopup({ ...popup, show: false })} />
                </div>
            )}
            {/* HEADING */}
            <h2 className="text-2xl font-bold text-center my-8">{isCreatingAccount ? 'Create Your Account' : 'Welcome to Uber-Clean'}</h2>
            {!isCreatingAccount ? (
                <form className="space-y-4 max-w-md mx-auto" onSubmit={handleLoginSubmit}>

                    {/* Login Form */}

                    <div className="form-control">
                        <label className="label" htmlFor="email">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" id="email" name="email" className="input input-bordered w-full" placeholder="john@example.com" onChange={handleChange} required/>
                    </div>
                    <div className="form-control">
                        <label className="label" htmlFor="password">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" id="password" name="password" className="input input-bordered w-full" placeholder="Enter your password" onChange={handleChange} required/>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Log In</button>
                        <button type="button" onClick={handleChangeForm} className="text-right text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out">Create account</button>
                    </div>
                </form>
            ) : (
                <form className="max-w-md mx-auto" onSubmit={handleCreateAccount}>

                    {/* Sign Up Form */}

                    <div className="form-control">
                        <label className="label" htmlFor="firstName">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" id="firstName" name="firstName" className="input input-bordered w-full" placeholder="Your" onChange={handleChange} required/>
                    </div>
                    <div className="form-control">
                        <label className="label" htmlFor="lastName">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" id="lastName" name="lastName" className="input input-bordered w-full" placeholder="Name" onChange={handleChange} required/>
                    </div>
                    <div className="form-control">
                        <label className="label" htmlFor="street">
                            <span className="label-text">Street Address</span>
                        </label>
                        <input type="text" id="street" name="street" className="input input-bordered w-full"  placeholder="123 4th St" onChange={handleChange} required/>
                    </div>
                    <div className="form-control flex flex-row">
                        <label className="label w-3/5 gap-2" htmlFor="city">
                            <span className="label-text">City</span>
                        </label>
                        <label className="label  w-2/5 gap-2" htmlFor="province">
                            <span className="label-text">Province</span>
                        </label>
                    </div>
                    <div className="form-control flex flex-row gap-2">
                        <input type="text" id="city" name="city" className="input input-bordered w-3/5" value={formFields.city}  onChange={handleChange} />
                        <select 
                                id="province" 
                                name="province" 
                                className="input input-bordered w-2/5" 
                                value={formFields.province} 
                                onChange={handleChange}
                            >
                                {provinces.map((province) => (
                                    <option key={province.code} value={province.code}>
                                        {province.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label" htmlFor="email">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" id="email" name="email" className="input input-bordered w-full" placeholder="john@example.com" onChange={handleChange} required/>
                    </div>
                    <div className="form-control">
                        <label className="label" htmlFor="phoneNumber">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" className="input input-bordered w-full" placeholder="(123) 456-7890" onChange={handleChange} required />
                    </div>
                    <div className="form-control">
                        <label className="label" htmlFor="password">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" id="password" name="password" className="input input-bordered w-full" placeholder="Enter your password" onChange={handleChange} required/>
                    </div>
                    <div className="form-control">
                        <label className="label" htmlFor="password">
                            <span className="label-text">Re-enter Password</span>
                        </label>
                        <input type="password" id="validation_password" name="confirmPassword" className="input input-bordered w-full" placeholder="Re-Enter your password" onChange={handleChange} required/>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Create Account</button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default SignupPage;