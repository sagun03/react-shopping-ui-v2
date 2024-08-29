import Form from "../../components/address/Form";
import { AddressProvider } from "../../components/address/DataProvider";
import Layout from "../../components/checkout/Layout";

const Address = () => {
  return (
    <Layout>
      <AddressProvider>
        <Form />
      </AddressProvider>
    </Layout>
  );
}

export default Address;
