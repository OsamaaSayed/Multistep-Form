import FormWrapper from "./FormWrapper";

const UserForm = () => {
  return (
    <FormWrapper title="User Details">
      <label htmlFor="">First Name</label>
      <input autoFocus required type="text" />
      <label htmlFor="">Last Name</label>
      <input required type="text" />
      <label htmlFor="">Age</label>
      <input required min={1} type="number" />
    </FormWrapper>
  );
};

export default UserForm;
