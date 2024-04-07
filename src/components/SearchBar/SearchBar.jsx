import { Field, Form, Formik, ErrorMessage } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { FaSearch } from "react-icons/fa";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  return (
    <header className={css.header}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          onSubmit(values.query);
          if (!values.query) {
            toast.error("Please enter a search query");
          }
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <div className={css.field}>
            <Field
              className={css.input}
              name="query"
              type="text"
              autoFocus
              placeholder="Search images and photos"
            />
            <button className={css.button} type="submit">
              <FaSearch className={css.icon} />
            </button>
          </div>
          <Toaster />
          <ErrorMessage
            name="query"
            component="span"
            style={{ color: "red" }}
          />
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
