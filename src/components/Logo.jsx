const Logo = ({ size = 60, className = '' }) => {
  return (
    <img
      src="/logo.svg"
      alt="Logo RQ Syababul Khair"
      width={size}
      height={size}
      className={`object-contain ${className}`}
    />
  )
}

export default Logo
