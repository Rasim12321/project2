import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorComponent from "../components/error";
import List from "../components/list";
import LoadingSpinner from "../components/loading";
import { fetchCountries } from "../store/actions/countries.actions";
import FormInputs from "./form";
export default function Page1() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const isLoading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (countries == null) {
    return <ErrorComponent />;
  }
  if (countries != null) {
    return (
      <>
        <div className="first-page ">
          <div className="first-page-left-block">
            <div>
              <h1>
                Proactively monitor the health and availability of your EUC
                published resources and network services
              </h1>
            </div>
            <div>
              <p>
                Create synthetic tests that simulate usage and traffic to
                proactively detect and fix service outages, as well as mitigate
                poor user experience with EUC published resources, websites,
                APIs and any network accessible services.
              </p>
              <p>
                You can run the tests from various locations in the public
                cloud, or install a custom monitor inside private networks to
                test internal applications and services.
              </p>
            </div>
            <div>
              <h3>Get started in no-time</h3>
            </div>
            <div>
              <List />
            </div>
          </div>

          <div className="first-page-right-block">
            <FormInputs />
          </div>
        </div>
      </>
    );
  }
}
