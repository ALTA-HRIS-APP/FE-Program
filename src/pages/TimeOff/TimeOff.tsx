import React from "react";

import Button from "../../components/element/Button";
import TableTimeOff from "./TableTimeOff";

const TimeOff = () => {
  const navigate = useNavigate();
  const handleTimeOff = () => {
    navigate("/AddTimeOff");
  };

  return (
    <div>
      <div>
        <Button
          id=" AddTimeOff"
          label="Add Time Off"
          color="bg-sky-500"
          hover="bg-sky-700"
          onClick={handleTimeOff}
          src={"TimeOff"}
        />
      </div>
      <TableTimeOff />
    </div>
  );
};

export default TimeOff;
