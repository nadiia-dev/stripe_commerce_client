import { Formik } from "formik";

const validate = (values) => {
  const { name, email, address } = values;
  const errors = {};
  if (!email) {
    errors.email = "Required";
  }
  if (!name) {
    errors.name = "Required";
  }
  if (!address) {
    errors.address = "Required";
  }

  return errors;
};

const Address = ({ setShipping }) => {
  const initialValues = {
    name: "",
    email: "",
    address: "",
  };
  return (
    <div>
      <h4>Shipping Address</h4>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={(values) => {
          setShipping(values);
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => {
          const { name, email, address } = errors;
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                  placeholder="Name"
                  className={"nomad-input " + (name ? "error" : "")}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  placeholder="Email"
                  className={"nomad-input " + (email ? "error" : "")}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="address"
                  onChange={handleChange}
                  value={values.address}
                  placeholder="Address"
                  className={"nomad-input " + (address ? "error" : "")}
                />
              </div>
              <div className="submit-btn">
                <button
                  type="submit"
                  className="button is-black nomad-btn submit"
                >
                  CONTINUE
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Address;
