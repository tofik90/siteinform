import { useSelector } from "react-redux";
import HostingTable from "./HostingTable";
import TechTable from "./TechTable";

const Data = () => {
  const techData = useSelector((state) => state.techData);
  const hostingData = useSelector((state) => state.hostingData);
  const siteAddress = useSelector((state) => state.siteAddress);
  return (
    <div>
      {techData.results && (
        <TechTable data={techData} siteAddress={siteAddress} />
      )}
      {hostingData.results && (
        <HostingTable data={hostingData} siteAddress={siteAddress} />
      )}
    </div>
  );
};

export default Data;
