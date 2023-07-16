import FormWrapper from "./FormWrapper";

const AccountForm = () => {
  return (
    <FormWrapper title="Account">
      <label htmlFor="">Email</label>
      <input autoFocus required type="email" />
      <label htmlFor="">Password</label>
      <input required type="password" />
    </FormWrapper>
  );
};

export default AccountForm;
