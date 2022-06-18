import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import axios from "axios";
import Footer from "./Footer";

const Contact = () => {
  const [secondNumber, setSecondNumber] = useState(false);
  const [detailsInfo, setDetailsInfo] = useState("");
  const [formError, setFormError] = useState({});
  const [issubmit, setIsSubmit] = useState(false);
  const initialValues = {
    fullname: "",
    email: "",
    phone1: "",
    phone2: "",
    message: "",
    address1: "",
    address2: "",
    country: "",
    city: "",
    pcode: "",
    state: "",
  };
  const [formValue, setFormValue] = useState(initialValues);

  const radioHandler = (e) => {
    setDetailsInfo(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const postHandler = async (data) => {
    const response = await axios.post(
      "https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit",
      {
        FullName: data.fullname,
        EmailAddress: data.email,
        PhoneNumbers: [data.phone1 || "-", data.phone2 || "-"],
        Message: data.message || "-",
        AddressDetails: {
          AddressLine1: data.address1,
          AddressLine2: data.address2 || "-",
          CityTown: data.city,
          StateCounty: data.state,
          Postcode: data.pcode,
          Country: data.country,
        },
      }
    );

    if (response.status === 200) {
      setFormValue(initialValues);
      toast.success("Your message has been sent successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Please fill out all the required fields!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const validationForm = (value) => {
    const errors = {};
    const emailPatern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const numberPatern = /^\d{10}$/;
    const postcodeRegEx = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;

    if (!emailPatern.test(value.email)) {
      errors.email = "Please Enter Valid Email..Ex: aa@gmail.com";
    }
    if (!numberPatern.test(value.phone1)) {
      errors.phone1 =
        "Please Enter Valid Number..The number should have 10 digit.";
    }

    if (!postcodeRegEx.test(value.pcode)) {
      errors.pcode = "Please Enter Valid Postal Code..Ex:AA0 0AA";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(validationForm(formValue));
    setIsSubmit(true);
    postHandler(formValue);
  };
  useEffect(() => {
    if (Object.keys(formError).length > 0 && issubmit) {
      for (var i in formError) console.log("errrr", formError[i]);
      toast.warn(formError[i], {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [formError]);

  return (
    <div className="contact-container">
      <Navbar />
      <div className="contact-items">
        <h4>Contact US</h4>
        <p>
          We hope you like our approach to software product development. If we
          sound like the kind of people you would like to work with to create
          your unique product, please do get in touch.
        </p>
        <div className="form-container">
          <form onSubmit={handleSubmit} method="POST">
            <div className="form-name">
              <div>
                <label>Full Name</label>
                <input
                  type="text"
                  id="fname"
                  required
                  value={formValue.fullname}
                  name="fullname"
                  onChange={handleChange}
                  placeholder="Your name.."
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="text"
                  required
                  value={formValue.email}
                  id="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Your email.."
                />
              </div>
            </div>
            <div className="form-phone">
              <label>Phone number 01</label>
              <input
                type="text"
                name="phone1"
                required
                value={formValue.phone1}
                onChange={handleChange}
              />
            </div>
            {secondNumber && (
              <div className="form-phone2">
                <label>
                  Phone number 02
                  <span style={{ color: "lightgray" }}>- Optional</span>
                </label>
                <input
                  type="text"
                  name="phone2"
                  value={formValue.phone2}
                  onChange={handleChange}
                />
              </div>
            )}
            <button
              className="btn-new-num"
              onClick={() => setSecondNumber(true)}
            >
              Add New Phone Number
            </button>
            <div className="form-textarea">
              <label>
                Message<span style={{ color: "lightgray" }}>- Optional</span>
              </label>
              <textarea
                id="message"
                maxLength="500"
                name="message"
                value={formValue.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="btn-radio">
              <input
                type="radio"
                required
                name="add-details"
                value="Add"
                onChange={radioHandler}
              />
               <label>Add address details</label>
            </div>
            {detailsInfo !== "" ? (
              <div className="selected-details">
                <div className="add-details">
                  <div>
                    <label>Add address line 1</label>
                    <input
                      type="text"
                      id="address1"
                      required
                      name="address1"
                      value={formValue.address1}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label>
                      Add address line 2
                      <span style={{ color: "lightgray" }}>- Optional</span>
                    </label>
                    <input
                      type="text"
                      id="address2"
                      name="address2"
                      value={formValue.address2}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-city-details">
                  <div>
                    <label>City/Town</label>
                    <input
                      type="text"
                      id="city"
                      required
                      name="city"
                      value={formValue.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label>State/County </label>
                    <input
                      type="text"
                      id="state"
                      required
                      name="state"
                      value={formValue.state}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label>PostCode</label>
                    <input
                      type="text"
                      required
                      id="pcode"
                      name="pcode"
                      value={formValue.pcode}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label>Country</label>
                    <input
                      type="text"
                      id="country"
                      required
                      name="country"
                      value={formValue.country}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            <input type="submit" value="Submit"></input>
          </form>
          <ToastContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
