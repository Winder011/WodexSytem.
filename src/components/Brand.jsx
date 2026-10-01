import logo from '../assets/logo.webp'
import { hrefFor } from '../config/routes'

export default function Brand({ onNavigate }) {
  return (
    <a
      href={hrefFor('inicio')}
      className="brand"
      aria-label="Wodex System, ir al inicio"
      onClick={onNavigate}
    >
      <img src={logo} alt="" width="34" height="25" />
      <span>
        Wodex<b>System</b>
      </span>
    </a>
  )
}
