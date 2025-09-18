import { PortalSelector } from "@/components/portal-selector";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handlePortalSelection = (portal: "patient" | "doctor") => {
    if (portal === "patient") {
      navigate("/patient");
    } else {
      navigate("/doctor");
    }
  };

  return <PortalSelector onSelectPortal={handlePortalSelection} />;
};

export default Index;
