import { useNavigate } from "react-router-dom";

import TableEmploye from "./TableEmploye";
import Button from "../../components/element/Button";

const Employe = () => {
  const navigate = useNavigate();
  const handleAddEmploye = () => {
    navigate("/AddEmploye");
  };
  return (
    <div>
      <div>
        <Button
          id="Add Employe"
          label="Add Employe"
          color=" bg-sky-500"
          hover="bg-sky-700"
          onClick={handleAddEmploye}
          src={"add-to-queue"}
        />
      </div>
      <div>
        <TableEmploye />
      </div>
    </div>
  );
};

export default Employe;
