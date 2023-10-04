interface ContactFormEmailProps {
  firstName: string
  email: string
  message: string
}

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  firstName,
  email,
  message,
}) => (
  <div>
    <h1>Contact form submission</h1>
    <p>
      From <strong>{firstName}</strong> at {email}
    </p>
    <h2>Message:</h2>
    <p>{message}</p>
  </div>
)
