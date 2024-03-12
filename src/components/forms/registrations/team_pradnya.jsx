import "../styles/event_registrations.css";
import React from "react";
import { useState } from "react";
import {
  InputBox,
  Buttons,
  FileInputBox,
  toast,
  NoteBox,
  CloseMessage,
} from "../../index.js";
import {
  useRegisterStep1,
  useRegisterStep2,
  useRegisterStep3,
  useRegisterStep4,
} from "../../../hooks/events.hooks";
import styled from "styled-components";
import Dropdown from "../../dropdown";
import RadioButtons from "../../radioButtons";
import { useRef } from "react";
import { year_arr, localTypes, paymentLinks, year_array, state_arr } from "../../../static/data";

import payment_qr from "../../../assets/payment QR/payment_qr.jpg";

const MainContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 16px;
`;

const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 70px;
  position: relative;
  :before {
    content: "";
    position: absolute;
    background: #f3e7f3;
    height: 4px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
  :after {
    content: "";
    position: absolute;
    background: #155e75;
    height: 4px;
    width: ${({ width }) => width};
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    left: 0;
  }
`;

const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const StepStyle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 3px solid
    ${({ step }) => (step === "completed" ? "#075985" : "#155e75")};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StepCount = styled.span`
  font-size: 19px;
  color: #000000;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const StepsLabelContainer = styled.div`
  position: absolute;
  top: 66px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StepLabel = styled.span`
  font-size: 19px;
  color: #155e75;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const CheckMark = styled.div`
  font-size: 26px;
  font-weight: 600;
  color: #155e75;
  -ms-transform: scaleX(-1) rotate(-46deg); /* IE 9 */
  -webkit-transform: scaleX(-1) rotate(-46deg); /* Chrome, Safari, Opera */
  transform: scaleX(-1) rotate(-46deg);
`;

const steps = [
  {
    label: "Step1",
    step: 1,
  },
  {
    label: "Step2",
    step: 2,
  },
  {
    label: "Step3",
    step: 3,
  },
];
const totalSteps = steps.length;
const initialErrorsForm1 = {
  name: "",
  email: "",
  phone: "",
  gender: "",
  member_id: "",
};
const initialErrorsForm2 = {
  college: "",
  year: "",
  country: "",
  state: "",
  district: "",
  city: "",
  locality: "",
  mode: "",
  reason_of_mode: "",
  referral: "",
};

const pict_arr = [
  {
    value: "1",
    label: "Yes",
    // onChange: function (e) { }
  },
  {
    value: "0",
    label: "No",
  },
];

const country_arr = [
  {
    value: "1",
    label: "Yes",
    // onChange: function (e) { }
  },
  {
    value: "0",
    label: "No",
  },
];

const gender_type = [
  { value: "SEL", label: "Select", disabled: true },
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Other", label: "Other" },
];

const mode_arr = [
  {
    value: "1",
    label: "Offline",
    // onChange: function (e) { }
  },
  {
    value: "0",
    label: "Online",
  },
];

const initialErrorsForm3 = {
  payment_id: "",
};

function TeamPradnya() {
  const [activeStep, setActiveStep] = React.useState(0);
  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;

  //form1
  const [form1, setForm1] = useState([
    {
      name: "",
      email: "",
      phone: "",
      gender: "SEL",
      member_id: "",
      codechef_id: ""
    },
  ]);
  const [tempform1, settempForm1] = useState([
    {
      name: "",
      email: "",
      phone: "",
      gender: "SEL",
      member_id: "",
      codechef_id: ""
    },
  ]);
  const [errors1, setErrors1] = useState(initialErrorsForm1);
  const registerUserMutationForm1 = useRegisterStep2(setErrors1, "pradnya");

  const handleFormChange = (event, index) => {

    const { name, value } = event.target;
    // console.log(name, value);
    setForm1((prevState) => {
      errors1[name] !== "" &&
        setErrors1((prevState) => ({ ...prevState, [name]: "" }));
      let data = [...prevState];
      data[index][name] = value;
      return data;
    });
  };

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }


  const addfields = () => {
    // console.log(form1)
    if (form1.length < 3) {
      for (const property in form1.at(-1)) {
        if (property === "name" && form1.at(-1)[property] === "") {
          toast.warn("Please enter name");
          return;
        } else if (property === "email" && !validateEmail(form1.at(-1)[property])) {
          toast.warn("Please enter a valid E-mail address");
          return;
        } else if (property === "phone" && form1.at(-1)[property].length !== 10) {
          toast.warn("Please enter a valid phone number");
          return;
        } else if (property === "gender" && form1.at(-1)[property] === "SEL") {
          toast.warn("Please enter your gender");
          return;
        } else if (property === "member_id" && form1.at(-1)[property] === "") {
          toast.warn("Please upload the ID");
          return;
        } else if (property === "codechef_id" && form1.at(-1)[property] === "") {
          // toast.warn("Plese add Codechef ID");
          continue;
        }
      }

      const memberFormData = new FormData();
      memberFormData.append("member_id", form1.at(-1).member_id);
      const tempMemberDetails = { ...form1.at(-1) };
      delete tempMemberDetails.member_id;
      memberFormData.append("body", JSON.stringify(tempMemberDetails));
      registerUserMutationForm1.mutate(memberFormData, {
        onSuccess: () => {
          setErrors1(initialErrorsForm1);
          setMemberCount((memberCount) => memberCount + 1);
          toast.success(`member ${memberCount + 1} added !`, { icon: "✅" });
        }
      });
      return;
    }
    toast.warn("Maximum 2 members are allowed");
  };

  const addAnotherMember = () => {
    if (form1.length > 1) {
      toast.warn("Limit Reached !");
      return;
    }
    let object = {
      name: "",
      email: "",
      phone: "",
      gender: "SEL",
      member_id: "",
      codechef_id: ""
    };
    setForm1([...form1, object]);
  }

  const [form2, setForm2] = useState({
    isPICT: "",
    isInternational: "",
    college: "",
    country: "",
    state: "",
    district: "",
    locality: "1",
    mode: "1",
    reason_of_mode: "",
    referral: "",
    year: "",
  });

  const [errors2, setErrors2] = useState(initialErrorsForm2);
  const registerUserMutationForm2 = useRegisterStep3(setErrors2, "pradnya");

  // File upload 
  const handleImageChange = (event, index) => {
    const file = event.target.files[0];
    const maxSizeInBytes = 200 * 1024; // MAX 200 KB

    if (file.size > maxSizeInBytes) {
      toast.warn('Selected image size must be less than 200KB.');
      event.target.value = '';
      return;
    }

    let data = [...form1];
    data[index][event.target.name] = event.target.files[0];
    setForm1(data);
  };

  const handleInputChange2 = (e) => {
    const { name, value } = e.target;
    if (name === "isPICT" && value === "1") {
      setForm2((form2) => ({
        ...form2,
        isPICT: "1",
        college: "Pune Institute Of Computer Technology",
        country: "India",
        city: "Pune",
        state: "Maharashtra",
        district: "Pune",
        locality: "1",
        mode: "1",
        reason_of_mode: "",
        isInternational: "0",
        year: "",
      }));
      setPaymentStatus(true);
    } else if (name === "isPICT" && value === "0") {
      setForm2((form2) => ({
        ...form2,
        isPICT: "0",
        college: "",
        country: "",
        state: "",
        city: "",
        district: "",
        locality: "",
        isInternational: "",
        year: "",

      }));
    } else if (name === "isInternational" && value === "0") {
      setForm2((form2) => ({
        ...form2,
        country: "India",
        isPICT: "0",
        [name]: value,
      }));
      setPaymentStatus(false);
    } else if (name === "isInternational" && value === "1") {
      setForm2((form2) => ({
        ...form2,
        country: "",
        isPICT: "0",
        [name]: value,
      }));
      setPaymentStatus(true);
    } else {
      setForm2((prevState) => {
        errors2[name] !== "" &&
          setErrors2((prevState) => ({ ...prevState, [name]: "" }));
        return { ...prevState, [name]: value };
      });
      setPaymentStatus(false);
    }
    // console.log(form2);
  };

  const country_arr = [
    {
      value: "1",
      label: "Yes",
      onChange: handleInputChange2,
    },
    {
      value: "0",
      label: "No",
      onChange: handleInputChange2,
    },
  ];


  const [paymentStatus, setPaymentStatus] = useState(true);
  const paymentRef = useRef("");
  const [errors3, setErrors3] = useState(initialErrorsForm3);
  const registerUserMutationForm3 = useRegisterStep4(setErrors3, "pradnya");
  //steps for whole form
  const [formStep, setFormStep] = React.useState(1);

  const prevForm = (e) => {
    e.preventDefault();
    setFormStep((currentStep) => currentStep - 1);
    setActiveStep(activeStep - 1);
  };

  const [memberCount, setMemberCount] = useState(0);
  const nextForm = (e) => {
    e.preventDefault();
    if (formStep === 1) {
      if (memberCount === 0) {
        toast.warn("At least one member needed!");
        return;
      }

      setFormStep((currentStep) => currentStep + 1);
      setActiveStep((activeStep) => activeStep + 1);
    }
    if (formStep === 2) {
      // console.log(form2);
      for (const property in form2) {
        if (form2[property] === "") {
          if (property === "reason_of_mode" && form2["mode"] === "1") continue;

          if (property === "referral") continue;
          toast.warn("Please enter all fields!");
          return;
        }
      }
      registerUserMutationForm2.mutate(form2, {
        onSuccess: () => {
          setErrors2(initialErrorsForm2);
          if (form2.isPICT === "1" || form2.isInternational === "1") {
            const temp =
              form2.isPICT === "1" ? { isPICT: "1" } : { isInternational: "1" };
            registerUserMutationForm3.mutate(temp, {
              onSuccess: () => {
                toast.success("Completed Registration !", { icon: "✅" });
                setPaymentStatus(true);
                setFormStep((currentStep) => currentStep + 1);
                setActiveStep((activeStep) => activeStep + 1);
              },
            });
          } else {
            toast.success("Completed Step 3️⃣ !", { icon: "✅" });
            setFormStep((currentStep) => currentStep + 1);
            setActiveStep((activeStep) => activeStep + 1);
          }
        },
      });
    }
    if (formStep === 3) {

      if (paymentRef.current.value.length !== 12) {
        toast.warn("Please enter valid 12 digit Transaction ID!");
        return;
      }

      registerUserMutationForm3.mutate(
        { payment_id: paymentRef.current.value?.trim() },
        {
          onSuccess: () => {
            toast.success("Completed Step 4️⃣ !", { icon: "✅" });
            setActiveStep((activeStep) => activeStep + 1);
            setPaymentStatus(true);
          },
        }
      );
    }
  };

  return (
    <MainContainer>
      {true ?
        <>
          <StepContainer width={width}>
            {steps.map(({ step, label }) => (
              <StepWrapper key={step}>
                <StepStyle step={activeStep >= step ? "completed" : "incomplete"}>
                  {activeStep > step ? (
                    <CheckMark>L</CheckMark>
                  ) : (
                    <StepCount>{step}</StepCount>
                  )}
                </StepStyle>
                <StepsLabelContainer>
                  <StepLabel key={step}>{label}</StepLabel>
                </StepsLabelContainer>
              </StepWrapper>
            ))}
          </StepContainer>
          <div className=" md:mx-16 my-6">
            <form className="rounded-lg px-8 pt-6 pb-8 mb-4 border">
              {/* form 1 */}
              {formStep === 1 && (<>
                <NoteBox
                  title="Note"
                  text="After filling details of each member click the Add member-name button to add the details. And you can add more members by clicking on Add another member."
                />
                {form1.map((form, index) => {
                  return (
                    <>
                      <h1 className="input-label font-medium text-white border-red-500 p-2 w-28 border-2 text-lg after:ml-0.5 after:text-gold rounded-md shadow-md bg-gradient-to-r from-yellow-300 to-yellow-500 text-center my-2">
                        Member {index + 1}
                      </h1>

                      <div key={index}>
                        <InputBox
                          label="Name"
                          name="name"
                          type="text"
                          placeholder="name "
                          required
                          error={errors1.name}
                          onChange={(event) => handleFormChange(event, index)}
                          value={form.name}
                          tip={'Guide name should be between 3 and 50 characters(both inclusive) long and contains only alphabetical characters.'}
                        />
                        <InputBox
                          label="Email ID"
                          name="email"
                          type="text"
                          placeholder="email "
                          required
                          error={errors1.email}
                          onChange={(event) => handleFormChange(event, index)}
                          value={form.email}
                        />
                        <div className="md:flex">
                          <div className="mr-1 w-full md:w-1/2">
                            <InputBox
                              label="Phone No"
                              name="phone"
                              type="tel"
                              placeholder="phone number"
                              required
                              error={errors1.phone}
                              onChange={(event) => handleFormChange(event, index)}
                              value={form.phone}
                            />
                          </div>
                          <div className="input-box-dropdown w-full mb-4 relative">
                            <label
                              className={`input-label font-medium mb-1 text-white text-lg flex`}
                            >
                              {"Gender"}
                              <h1 className="text-gold">*</h1>
                            </label>
                            <div className="relative inline-block w-full">
                              <select
                                name={"gender"}
                                value={form.gender}
                                onChange={(event) => handleFormChange(event, index)}
                                required
                                error={errors1.gender}
                                className={`w-full h-10 pl-4 pr-8 bg-[#0B1E47] text-base text-gold placeholder-gray-500 border rounded-lg appearance-none focus:outline-none focus:shadow-outline-blue`}
                              >
                                {gender_type.map((option) => (
                                  <option
                                    key={option?.value}
                                    value={option?.value}
                                    className={`py-1 bg-[#0B1E47] ${option?.className || ""
                                      }`}
                                  >
                                    {option?.label}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                        <FileInputBox
                          name="member_id"
                          accept="image/png, image/jpeg"
                          type="file"
                          onChange={(e) => handleImageChange(e, index)}
                          label="Upload college ID"
                          required
                          error={errors1.member_id}
                        />
                        <NoteBox title ="please take note" text="accepted format: jpeg, png and less than 200kb" />

                        {/*  <InputBox
                          label="CodeChef ID"
                          name="codechef_id"
                          type="text"
                          placeholder="CodeChef ID"
                          required
                          error={errors1.codechef_id}
                          onChange={(event) => handleFormChange(event, index)}
                          value={form.codechef_id}
                          tip={'Codechef ID can be Alphanumeric'}
                        /> */}

                        {memberCount < 2 ? (
                          <Buttons
                            value={
                              <>
                                <span>
                                  {`add member- `}
                                  <span style={{ color: 'gold', fontWeight: 'bold', textTransform: 'uppercase' }}>

                                    {form.name.split(' ')[0]}
                                  </span>
                                </span>
                              </>
                            }
                            onClick={addfields}
                            classNames="my-2"
                            loading={registerUserMutationForm1.isLoading}
                          />
                        ) : <></>}
                        <hr className="my-5 border-dashed border-gold" />
                      </div>

                    </>)
                })
                }
              </>)}


              {/* form 2 */}
              {formStep === 2 && (
                <>
                  {/* <NoteBox
                    title="Note"
                    text="Please complete the payment within 60 minutes before your session expires. Don't refresh the window or close the tab."
                  /> */}
                  <RadioButtons
                    label=" Are you PICTian?"
                    options={country_arr}
                    state={form2}
                    setState={setForm2}
                    name="isPICT"
                    required
                    error={errors2.isPICT}
                  />
                  {form2.isPICT === "0" && (
                    <>
                      <RadioButtons
                        label="Is International ?"
                        options={country_arr}
                        state={form2}
                        setState={setForm2}
                        name="isInternational"
                        required
                        error={errors2.isInternational}
                      />
                      <div className=" md:mx-1 my-2">
                        <InputBox
                          label="College (Full form)"
                          name={"college"}
                          type="text"
                          placeholder="college name"
                          required
                          onChange={(e) => handleInputChange2(e)}
                          value={form2.college}
                          error={errors2.college}
                          tip={"College name should be between 3 and 100 characters(both inclusive) and contains only alphabetical characters."}
                        />
                      </div>
                      <div className="md:mx-1 my-2">
                        <InputBox
                          className={
                            form2.isInternational === "0"
                              ? "pointer-events-none"
                              : ""
                          }
                          label="Country"
                          name={"country"}
                          type="text"
                          placeholder="country"
                          readonly={form2.isInternational === "0"}
                          required
                          error={errors2.country}
                          onChange={(e) => handleInputChange2(e)}
                          value={
                            form2.isInternational === "0" ? "India" : form2.country
                          }
                          tip={"Country should be between 2 and 20 characters(both inclusive) and contains only alphabetical characters."}
                        />
                      </div>
                      <div className="md:flex mx-1 ">
                        <div className="md:mr-1 md:w-1/2 mt-1">
                          <Dropdown
                            label="State"
                            options={[
                              { value: "SEL", label: "Select", selected: true },
                              ...state_arr,
                            ]}
                            name={"state"}
                            state={form2}
                            setState={setForm2}
                            required
                          />
                        </div>
                        <div className="md:ml-1 md:w-1/2">
                          <InputBox
                            label="District in which college is located"
                            name={"district"}
                            type="text"
                            placeholder="district"
                            required
                            error={errors2.district}
                            onChange={(e) => handleInputChange2(e)}
                            value={form2.district}
                            tip={"District should be between 2 and 20 characters(both inclusive) and contains only alphabetical characters."}
                          />
                        </div>
                      </div>
                      <div className="md:flex mx-1 ">
                        <div className="md:mr-1 md:w-1/2">
                          <InputBox
                            label="City in which college is located"
                            type="text"
                            name={"city"}
                            placeholder="city"
                            required
                            error={errors2.city}
                            onChange={(e) => handleInputChange2(e)}
                            value={form2.city}
                          />
                        </div>
                        <div className="ml-1 md:w-1/2 mt-1">
                          <Dropdown
                            label="Locality in which college is located"
                            options={[
                              { value: "SEL", label: "Select", selected: true },
                              ...localTypes,
                            ]}
                            name={"locality"}
                            state={form2}
                            setState={setForm2}
                            required
                            error={errors2.locality}
                          />
                        </div>
                      </div>

                      <RadioButtons
                        label="Preferred mode of presentation"
                        options={mode_arr}
                        state={form2}
                        setState={setForm2}
                        name="mode"
                        required
                        error={errors2.mode}
                        tip={"Participants from Pune should select offline mode only"}
                      />

                      {form2.mode === "0" && (
                        <div>
                          <InputBox
                            type="textarea"
                            label={"Reason for Online"}
                            name={"reason_of_mode"}
                            placeholder={"reason"}
                            required
                            error={errors2.reason_of_mode}
                            onChange={(e) => handleInputChange2(e)}
                            value={form2.reason_of_mode}
                            tip={"Reason of mode if applicable, should be between 2 and 20 characters(both inclusive)"}
                          ></InputBox>
                        </div>
                      )}
                      <InputBox
                        type="text"
                        label="Referral"
                        name="referral"
                        placeholder="Referral ID given by Campus Ambassador"
                        onChange={(e) => handleInputChange2(e)}
                        value={form2.referral}
                        error={errors2.referral}

                        tip={"Referral should be between 3-50 characters long (if any)"}
                      />

                    </>
                  )}
                  <Dropdown
                    label=" Which year are you in?"
                    options={[
                      { value: "SEL", label: "Select", selected: true },
                      ...year_array

                    ]}
                    name={"year"}
                    state={form2}
                    setState={setForm2}
                    required
                    error={errors2.year}
                  />
                </>

              )}
              {formStep === 3 &&
                (paymentStatus ? (
                  <div className="shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-xl border-light_blue items-center p-4 md:p-8 border border-light_blue w-full">
                    <p className="text-xl text-center text-gold font-bold mb-3">
                      Thank you for registering in InC'24!
                    </p>
                    <NoteBox
                      title="Note"
                      text="Your registration payment will be verified and a confirmation will be sent to you by email within 7 days."
                    />
                  </div>
                ) : (
                  <div className="mb-6 shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-xl  items-center p-4 md:p-8 border border-light_blue w-full">
                    <div className="justify-center items-center flex my-6">
                      <div className="z-10 bg-light_blue p-6 rounded-xl">
                        <div className="flex justify-between items-center mb-2">
                          <h1 className="text-xl font-bold text-white">Scan the QR to pay</h1>
                        </div>
                        <img src={payment_qr} className="w-96 border-8 rounded-lg shadow-lg" alt="Payment QR Code" />
                      </div>
                    </div>
                    <InputBox
                      label="Transaction/UTR ID (12 digit)"
                      type="text"
                      name="payment_id"
                      placeholder="Enter Transaction ID"
                      inputref={paymentRef}
                      minlenght="8"
                      error={errors3.ment_id}
                      className="tracking-widest"
                      required
                    />
                  </div>
                ))}
              {/* <div className="flex justify-between"> */}
              {formStep > 1 && formStep < 4 && !(formStep === 3 && paymentStatus) && (
                <Buttons
                  className="mx-2 my-2"
                  value=" Previous Step"
                  onClick={prevForm}
                />
              )}


              {formStep === 3 ? (
                paymentStatus ? (
                  <></>
                ) : (
                  <Buttons
                    className=" mx-2 my-2 "
                    value="Submit"
                    onClick={nextForm}
                    loading={registerUserMutationForm3.isLoading}
                  />
                )
              ) : (
                formStep === 2 &&
                (paymentStatus ? (
                  <Buttons
                    className=" mx-2 my-2  "
                    value="Submit"
                    onClick={nextForm}
                    loading={
                      registerUserMutationForm1.isLoading ||
                      registerUserMutationForm2.isLoading
                    }
                  />
                ) : (
                  <Buttons
                    className=" mx-2 my-2  "
                    value="Next Step"
                    onClick={nextForm}
                    loading={
                      registerUserMutationForm1.isLoading ||
                      registerUserMutationForm2.isLoading
                    }
                  />
                ))
              )}

              {formStep < 2 && (<div className="space-y-5 md:space-y-0 md:flex justify-between">
                <div className="text-center">
                  {formStep == 1 && form1.length < 2 ? (
                    <>
                      <Buttons
                        className=" mx-2 w-52 md:w-56"
                        value="add another member"
                        onClick={addAnotherMember}
                      />
                    </>) : (<></>
                  )}
                </div>

                <div className="text-center md:text-start">
                  <>
                    <Buttons
                      className=" mx-2 w-52 md:w-32"
                      value="Next Step"
                      onClick={nextForm}
                      loading={
                        registerUserMutationForm2.isLoading
                      }
                    />
                  </>
                </div>
              </div>
              )}
              {/* </div> */}
            </form>
          </div>
        </>
        :
        <div className="md:mx-16 my-20">
          <CloseMessage />
        </div>
      }
    </MainContainer >
  );
}

export default TeamPradnya;

