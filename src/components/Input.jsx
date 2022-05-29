import { createSignal } from 'solid-js';

function Input() {
  const [subject, setSubject] = createSignal("");

  return (
    <label>
      <input
        type="text"
        id="subject"
        value={subject()}
        onChange={(e) => setSubject(e.currentTarget.value)}
      />
    </label>
  );
}

export default Input;