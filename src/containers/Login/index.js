import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LoadingSpinner from "../../components/loading";
import FormInputs from "./form";

import { fetchCountries } from "../../store/actions/countries.actions";

import InformationSection from "./InformationSection";

export default function Login() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const isLoading = useSelector((state) => state.loading);
  console.log("isLoading", isLoading);
  useEffect(() => {
    console.log("Dispatch");
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

          <div className="first-page-right-block">
            <FormInputs />
          </div>
        </div>
      </>
    );
  }
}
