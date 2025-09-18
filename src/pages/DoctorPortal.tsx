import { DoctorDashboard } from "@/components/doctor-dashboard";
import { useNavigate } from "react-router-dom";

const DoctorPortal = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return <DoctorDashboard onBack={handleBack} />;
};

export default DoctorPortal;