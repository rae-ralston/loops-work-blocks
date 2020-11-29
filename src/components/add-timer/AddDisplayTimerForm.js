import React from "react";
import PropTypes from "prop-types";
import { Button } from "../common";
import { useTitle } from "../../hooks/use-title";

export const AddDisplayTimerForm = ({ submit }) => {
  const [title] = useTitle();

  return (
    <form onSubmit={(e) => submit(e, title)}>
      <Button color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

AddDisplayTimerForm.propTypes = {
  handleSubmit: PropTypes.func,
};
