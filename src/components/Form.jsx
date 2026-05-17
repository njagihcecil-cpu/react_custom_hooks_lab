import { useLocalStorage } from "../hooks/useLocalStorage";

/**
 * Form - A controlled service form that persists user input across page reloads.
 *
 * Uses the useLocalStorage hook so that the "name" and "serviceNumber" fields
 * survive a browser refresh without any backend involvement. The welcome
 * message below the form updates reactively as the user types.
 */
function Form() {
  // Persist the name field under the "name" key in localStorage.
  const [name, setName] = useLocalStorage("name", "");

  // Persist the service number field under the "serviceNumber" key in localStorage.
  const [serviceNumber, setServiceNumber] = useLocalStorage("serviceNumber", "");

  return (
    <>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          data-testid="name"
          value={name}
          // Update state (and therefore localStorage) on every keystroke.
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="service">Service Number:</label>
        <input
          id="service"
          type="text"
          data-testid="service"
          value={serviceNumber}
          // Update state (and therefore localStorage) on every keystroke.
          onChange={(e) => setServiceNumber(e.target.value)}
        />
      </form>

      {/* Greet the user once they've typed a name; prompt them otherwise. */}
      <h4>{name ? `Welcome, ${name}!` : "Enter your name"}</h4>
    </>
  );
}

export default Form;
