import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import ErrorComponent from "../components/error";
import LoadingSpinner from "../components/loading";
import { setData } from "../store/actions/info.actions";

function FormInputs() {
  const firstName = React.createRef();
  const lastName = React.createRef();
  const age = React.createRef();
  const male = React.createRef();
  const female = React.createRef();
  const bussiness = React.createRef();
  const organization = React.createRef();
  const password = React.createRef();
  const country = React.createRef();
  const agreement = React.createRef();
  const button = React.createRef();

  const dispatch = useDispatch();
  const info = useSelector((state) => state.info);
  const countries = useSelector((state) => state.countries);
  const isLoading = useSelector((state) => state.loading);

  const change = () => {
    console.log("run");
    if (
      firstName.current.value != "" &&
      lastName.current.value != "" &&
      age.current.value != "" &&
      (male.current.checked || female.current.checked) &&
      bussiness.current.value != "" &&
      organization.current.value != "" &&
      password.current.value != "" &&
      country.current.value != "" &&
      agreement.current.checked
    ) {
      button.current.disabled = false;
    } else {
      button.current.disabled = true;
    }
  };

  const submit = (event) => {
    event.preventDefault();

    const data = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      age: age.current.value,
      sex: male.current.checked ? male.current.id : female.current.id,
      bussiness: bussiness.current.value,
      organization: organization.current.value,
      password: password.current.value,
      country: country.current.value,
    };
    dispatch(setData(data));
    console.log(info);
  };

  return (
    <Form onSubmit={submit}>
      <h3 className="text-center">Take scoutbees for a spin</h3>
      <p className="text-center">
        Free 14 days triat of the Enterprise edition of the Scoutbees. No credit
        card required
      </p>
      <hr />

      <div className="d-flex">
        <Form.Group
          className="mb-3"
          controlId="formBasicFirstName"
          onChange={change}
        >
          <Form.Label>
            <b> First name</b>
          </Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter first name"
            ref={firstName}
            onChange={change}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label className="font-weight-bold">
            <b> Last name</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            ref={lastName}
            onChange={change}
          />
        </Form.Group>
      </div>

      <div className="d-flex">
        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label>
            <b> Age</b>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Your age"
            ref={age}
            onChange={change}
          />
        </Form.Group>

        <Form.Group className="mx-5" controlId="formBasicSex">
          <Form.Label className="ml-10">
            <b> Sex</b>
          </Form.Label>
          <Form.Check
            name="sex"
            type="radio"
            id="male"
            label="male"
            ref={male}
            onChange={change}
          />
          <Form.Check
            name="sex"
            type="radio"
            id="female"
            label="female"
            ref={female}
            onChange={change}
          />
        </Form.Group>
      </div>

      <Form.Group className="mb-3б" controlId="formBasicEmail">
        <Form.Label className="font-weight-bold">
          <b>Bussiness email address</b>
        </Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          ref={bussiness}
          onChange={change}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 mt-3" controlId="formBasicOrganization">
        <Form.Label>
          <b> Organization name</b>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Organization name"
          ref={organization}
          onChange={change}
        />
      </Form.Group>

      <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
        <Form.Label>
          <b>Password</b>
        </Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          ref={password}
          onChange={change}
        />
        <Form.Text className="text-muted">
          We'll never share your password with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Select aria-label="Default select example" ref={country}>
        <option>Russia</option>
        {countries.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </Form.Select>

      <Form.Group className="my-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
          ref={agreement}
          onChange={change}
        />
      </Form.Group>

      <Button
        className="d-block m-auto"
        variant="danger"
        type="submit"
        ref={button}
        disabled
      >
        Submit
      </Button>
    </Form>
  );
}

export default FormInputs;
