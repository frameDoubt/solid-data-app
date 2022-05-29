import { createSignal } from 'solid-js';
import styles from '../App.module.css';

function Input() {
  const [subject, setSubject] = createSignal("");
  
  return (
    
    <label>
      <input
        class={styles.input}
        type="text"
        id="subject"
        value={subject()}
        onChange={(e) => setSubject(e.currentTarget.value)}
      />
    </label>
  );
}

export default Input;