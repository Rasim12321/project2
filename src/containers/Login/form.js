import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../store/actions/info.actions";
import { useState } from "react";

function FormInputs() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("Russia");
  const [agreement, setAgreement] = useState("");
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const data = {
    name: name,
    lastName: lastName,
    age: age,
    sex: sex,
    email: email,
    organization: organization,
    password: password,
    country: country,
  };

  const submit = (event) => {
    event.preventDefault();

    dispatch(setData(data));
    navigate("/PersonInformation");
  };

  const isBtnDisabled =
    !name ||
    !lastName ||
    !age ||
    !sex ||
    !email ||
    !organization ||
    !password ||
    !country ||
    !agreement;

  return (
    <Form onSubmit={submit}>
      <h3 className="text-center">Take scoutbees for a spin</h3>
      <p className="text-center">
        Free 14 days triat of the Enterprise edition of the Scoutbees. No credit
        card required
      </p>
      <hr />

      <div className="d-flex">
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>
            <b> First name</b>
          </Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter first name"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label className="font-weight-bold">
            <b> Last name</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            onChange={(event) => setLastName(event.target.value)}
            value={lastName}
          />
        </Form.Group>
      </div>

      <div className="d-flex">
        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label>
            <b> Age</b>
          </Form.Label>
          <Form.Control
            min={16}
            type="number"
            placeholder="Your age"
            onChange={(event) => setAge(event.target.value)}
            value={age}
          />
        </Form.Group>

        <Form.Group
          className="mx-5"
          controlId="formBasicSex"
          onChange={(event) => setSex(event.target.id)}
          value={sex}
        >
          <Form.Label className="ml-10">
            <b> Sex</b>
          </Form.Label>
          <Form.Check name="sex" type="radio" id="male" label="male" />
          <Form.Check name="sex" type="radio" id="female" label="female" />
        </Form.Group>
      </div>

      <Form.Group className="mb-3б" controlId="formBasicEmail">
        <Form.Label className="font-weight-bold">
          <b>Bussiness email address</b>
        </Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
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
          onChange={(event) => setOrganization(event.target.value)}
          value={organization}
        />
      </Form.Group>

      <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">
        <Form.Label>
          <b>Password</b>
        </Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        <Form.Text className="text-muted">
          We'll never share your password with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Select
        aria-label="Default select example"
        onChange={(event) => setCountry(event.target.value)}
        value={country}
      >
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
          onChange={(event) => setAgreement(event.target.checked)}
          value={agreement}
        />
      </Form.Group>

      <Button
        disabled={isBtnDisabled}
        className="d-block m-auto"
        variant="danger"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
}

export default FormInputs;
