type Props = {
  message?: string | null
}

const ErrorMessage:React.FC<Props> = ({ message }) => {
  return (
    <>
      {message && (
        <span className="error-message">{message}</span>
      )}
    </>
  )
}

export default ErrorMessage
