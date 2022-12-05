import React from "react";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../store/actions/info.actions";

import styles from "./formik.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function FormFormik() {
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const validationsSchema = yup.object().shape({
    name: yup.string().typeError("должно быть строкой").required("обязательно"),
    lastName: yup
      .string()
      .typeError("должно быть строкой")
      .required("обязательно"),
    age: yup
      .number()
      .positive("age must be greater than zero")
      .required("обязательно"),
    sex: yup
      .string()
      .oneOf([`${!""}`], "обязательно")
      .required("обязательно"),
    bussinessEmail: yup
      .string()
      .email("введите верный email")
      .required("обязательно"),
    organizationName: yup
      .string()
      .typeError("должно быть строкой")
      .required("обязательно"),
    password: yup
      .string()
      .typeError("должно быть строкой")
      .required("обязательно"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "пароли должны совпадать!")
      .required("обязательно"),
    agreement: yup.boolean().oneOf([true], "нужно подтвердить соглашение"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          age: "",
          sex: "",
          bussinessEmail: "",
          organizationName: "",
          password: "",
          confirmPassword: "",
          country: "",
          agreement: false,
        }}
        validateOnBlur
        onSubmit={(values) => (
          dispatch(setData(values)),
          navigate("/PersonInformation"),
          console.log(values)
        )}
        validationSchema={validationsSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <Form className={styles.form}>
            <h3 className="text-center">Take scoutbees for a spin</h3>
            <p className="text-center">
              Free 14 days triat of the Enterprise edition of the Scoutbees. No
              credit card required
            </p>
            <hr />
            {/* name----------------------------------------- */}

            <div className={styles.flex}>
              <div className={styles.inputArea}>
                <p className={styles.label}>
                  <label htmlFor={"name"}>Name</label>
                </p>
                <input
                  className={styles.inputShort}
                  type="text"
                  name={"name"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {touched.name && errors.name && (
                  <p className={styles.error}>{errors.name}</p>
                )}
              </div>

              {/* lastName----------------------------------------- */}

              <div className={styles.inputArea}>
                <p className={styles.label}>
                  <label htmlFor={"lastName"}>Last name</label>
                </p>
                <input
                  className={styles.inputShort}
                  type="text"
                  name={"lastName"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                />
                {touched.lastName && errors.lastName && (
                  <p className={styles.error}>{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* age----------------------------------------- */}

            <div className={styles.flex}>
              <div className={styles.inputArea}>
                <p className={styles.label}>
                  <label htmlFor={"age"}>Age</label>
                </p>
                <input
                  className={styles.inputShort}
                  type="number"
                  name={"age"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.age}
                />
                {touched.age && errors.age && (
                  <p className={styles.error}>{errors.age}</p>
                )}
              </div>

              {/* sex----------------------------------------- */}

              <div className={styles.inputAreaRadio}>
                <div className={styles.label} id="my-radio-group">
                  Sex
                </div>
                <div role="group" aria-labelledby="my-radio-group">
                  <label>
                    <Field
                      type="radio"
                      name="sex"
                      value="Male"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    Male
                  </label>

                  <label>
                    <Field
                      type="radio"
                      name="sex"
                      value="Female"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    Female
                  </label>
                  {touched.sex && errors.sex && (
                    <p className={styles.error}>{errors.sex}</p>
                  )}
                </div>
              </div>
            </div>

            {/* bussinessEmail----------------------------------------- */}

            <div className={styles.inputArea}>
              <p className={styles.label}>
                <label htmlFor={"bussinessEmail"}>Bussiness email</label>
              </p>
              <input
                className={styles.input}
                type="email"
                name={"bussinessEmail"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.bussinessEmail}
              />
              {touched.bussinessEmail && errors.bussinessEmail && (
                <p className={styles.error}>{errors.bussinessEmail}</p>
              )}
            </div>

            {/* organizationName----------------------------------------- */}

            <div className={styles.inputArea}>
              <p className={styles.label}>
                <label htmlFor={"organizationName"}>Organization name</label>
              </p>
              <input
                className={styles.input}
                type="text"
                name={"organizationName"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.organizationName}
              />
              {touched.organizationName && errors.organizationName && (
                <p className={styles.error}>{errors.organizationName}</p>
              )}
            </div>

            {/* password----------------------------------------- */}

            <div className={styles.inputArea}>
              <p className={styles.label}>
                <label htmlFor={"password"}>Password</label>{" "}
              </p>

              <input
                className={styles.input}
                type="password"
                name={"password"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {touched.password && errors.password && (
                <p className={styles.error}>{errors.password}</p>
              )}
            </div>

            {/* confirmPassword----------------------------------------- */}

            <div className={styles.inputArea}>
              <p className={styles.label}>
                <label htmlFor={"confirmPassword"}>Confirm password</label>
              </p>
              <input
                className={styles.input}
                type="password"
                name={"confirmPassword"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <p className={styles.error}>{errors.confirmPassword}</p>
              )}
            </div>

            {/* country----------------------------------------- */}

            <div className={styles.inputArea}>
              <p className={styles.label}>
                <label htmlFor={"country"}>Country</label>
              </p>
              <select
                className={styles.input}
                name={"country"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.country}
              >
                <option value="Russia">Russia</option>
                {countries.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}{" "}
              </select>
              {/* {touched.organizationName && errors.organizationName && (
                <p className={styles.error}>{errors.organizationName}</p>
              )} */}
            </div>

            {/* agreement----------------------------------------- */}

            <div className={styles.inputCheckbox}>
              <label>
                <Field
                  type="checkbox"
                  name="agreement"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className={styles.label}> {`я соглашаюсь`}</span>
              </label>
              {touched.agreement && errors.agreement && (
                <p className={styles.error}>{errors.agreement}</p>
              )}
            </div>

            {/* button----------------------------------------- */}

            <button
              className={styles.button}
              disabled={
                (!isValid && !dirty && !values.agreement) || !values.agreement
              }
              onClick={handleSubmit}
              type={"submit"}
            >
              <span className={styles.label}>Submit</span>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
