import { createSignal } from 'solid-js';
import styles from '../App.module.css';

function Input() {
  const [subject, setSubject] = createSignal("");
  
  return (
    <form class={styles.formStyle}>
      <label for="subjectInput"
        class={styles.label}
      >
        Subject Input
      </label>
        <input
          name="subjectInput"
          class={styles.input}
          type="text"
          id="subject"
          value={subject()}
          placeholder="add task or person"
          onChange={(e) => setSubject(e.currentTarget.value)}
        />
      <button
        class={styles.input}
      >
        Submit
      </button>
    </form>
  );
}

export default Input;