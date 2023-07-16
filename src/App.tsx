import UserForm from "./UserForm";
import AddressForm from "./AddressForm";
import AccountForm from "./AccountForm";

import useMultistepForm from "./useMultistepForm";

function App() {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([<UserForm />, <AddressForm />, <AccountForm />]);

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        borderRadius: ".5rem",
        padding: "2rem",
        margin: "1rem",
        fontFamily: "Arial",
      }}
    >
      <form>
        <div
          style={{
            position: "absolute",
            top: ".5rem",
            right: ".5rem",
          }}
        >
          <span>
            {currentStepIndex + 1} / {steps.length}
          </span>
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}

          <button type="button" onClick={next}>
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
