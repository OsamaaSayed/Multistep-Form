import FormWrapper from "./FormWrapper";

const AddressForm = () => {
  return (
    <FormWrapper title="Address">
      <label htmlFor="">Street</label>
      <input autoFocus required type="text" />
      <label htmlFor="">City</label>
      <input required type="text" />
      <label htmlFor="">State</label>
      <input required type="text" />
      <label htmlFor="">Zip</label>
      <input required type="text" />
    </FormWrapper>
  );
};

export default AddressForm;
