import AddressPanel from "../../components/address/AddressPanel";
import { AddressProvider } from "../../components/address/DataProvider";
import Layout from "../../components/checkout/Layout";
import Button from "@mui/material/Button";
import { useStepperContext } from "../../context/StepperContext";

const Address = () => {
  const { handleComplete } = useStepperContext();
  return (
    <Layout>
      <AddressPanel />
    </Layout>
  );
}

export default Address;
