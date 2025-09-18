import { PatientDashboard } from "@/components/patient-dashboard";
import { useNavigate } from "react-router-dom";

const PatientPortal = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return <PatientDashboard onBack={handleBack} />;
};

export default PatientPortal;