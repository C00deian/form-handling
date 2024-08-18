
import style from '../Button/Button.module.css'


interface Prop{
    showAlert: () => void;
}

function Button({showAlert }: Prop) {
  return (
      <button type="button" className={style.btn} onClick={showAlert}>Show Alert</button>
  )
}

export default Button