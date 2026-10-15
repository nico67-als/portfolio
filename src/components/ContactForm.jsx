import { useState } from 'react'
import { LuCheck, LuCircleAlert } from 'react-icons/lu'
import { contact } from '../data/contact'
import Button from './Button'
import FormField from './FormField'

const emptyValues = { nom: '', email: '', message: '' }

// Renvoie un message d'erreur pour chaque champ mal rempli.
function validate(values) {
  const errors = {}
  if (!values.nom.trim()) errors.nom = 'Indiquez votre nom'
  if (!values.email.trim()) {
    errors.email = 'Indiquez votre adresse e-mail'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Saisissez une adresse e-mail valide'
  }
  if (!values.message.trim()) errors.message = 'Écrivez votre message'
  return errors
}

const notice =
  'flex items-start gap-3 rounded-[10px] border-2 border-ink bg-surface-alt p-4 font-medium'

function ContactForm() {
  const [values, setValues] = useState(emptyValues)
  const [errors, setErrors] = useState({})
  // idle, sending, success ou error
  const [status, setStatus] = useState('idle')

  function handleChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const newErrors = validate(values)
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    // Envoi du message à Formspree, qui me le transfère par e-mail
    setStatus('sending')
    try {
      const response = await fetch(contact.formspree, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(values),
      })
      if (!response.ok) throw new Error('Envoi refusé')

      setValues(emptyValues)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          id="nom"
          label="Nom"
          autoComplete="name"
          value={values.nom}
          error={errors.nom}
          onChange={handleChange}
        />
        <FormField
          id="email"
          label="E-mail"
          type="email"
          autoComplete="email"
          value={values.email}
          error={errors.email}
          onChange={handleChange}
        />
      </div>
      <FormField
        id="message"
        label="Message"
        multiline
        value={values.message}
        error={errors.message}
        onChange={handleChange}
      />

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-5">
        <Button
          type="submit"
          disabled={status === 'sending'}
          className="disabled:opacity-70 lg:px-8"
        >
          {status === 'sending' ? 'Envoi…' : 'Envoyer'}
        </Button>
        <p className="text-sm text-muted">
          Vos données servent uniquement à vous répondre.
        </p>
      </div>

      {/* Zone lue par les lecteurs d'écran quand son contenu change */}
      <div role="status">
        {status === 'success' && (
          <p className={notice}>
            <LuCheck aria-hidden="true" className="size-6 shrink-0" />
            Merci, votre message est bien parti. Je vous réponds au plus vite.
          </p>
        )}
        {status === 'error' && (
          <p className={`${notice} border-dashed`}>
            <LuCircleAlert aria-hidden="true" className="size-6 shrink-0" />
            <span>
              L’envoi a échoué. Réessayez, ou écrivez-moi directement à{' '}
              <a href={`mailto:${contact.email}`} className="link break-words">
                {contact.email}
              </a>
              .
            </span>
          </p>
        )}
      </div>
    </form>
  )
}

export default ContactForm
