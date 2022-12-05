import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LoadingSpinner from "../../components/loading";
// import FormInputs from "./form";

import { fetchCountries } from "../../store/actions/countries.actions";

import InformationSection from "./InformationSection";
import Formik from "./formik";
import FormFormik from "./formik";

export default function Login() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const isLoading = useSelector((state) => state.loading);
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (countries == null) {
    return <div>Something went wrong</div>;
  } else {
    return (
      <>
        <div className="first-page ">
          <InformationSection />

          <div className="">
            <FormFormik />
          </div>
        </div>
      </>
    );
  }
}
