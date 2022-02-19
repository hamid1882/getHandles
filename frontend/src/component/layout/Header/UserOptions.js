import React, { Fragment, useState } from "react";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import "./Home.css";

const UserOptions = ({ user }) => {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      {user && (
        <SpeedDial
          ariaLabel="Speed dial tooltip"
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          icon={
            <img
              className="speedDialIcon"
              src="https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373__480.jpg"
              alt="Profile"
            />
          }
        ></SpeedDial>
      )}
    </Fragment>
  );
};

export default UserOptions;
