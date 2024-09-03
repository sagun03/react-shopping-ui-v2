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
      <Button
        style={{
          marginTop: "1rem",
          backgroundColor: "#f0c14b",
          color: "#111",
          padding: "0.5rem 0.5rem"
        }}
        onClick={handleComplete}
      >
        Proceed to Payment
      </Button>
    </Layout>
  );
}

export default Address;
