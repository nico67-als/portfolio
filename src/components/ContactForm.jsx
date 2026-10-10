import { useRef, useState } from 'react'
import { LuCheck, LuCircleAlert } from 'react-icons/lu'
import { contact } from '../data/contact'
import Button from './Button'
import FormField from './FormField'

// Identifiant du formulaire Formspree, défini dans .env.local (voir README).
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID

const emptyValues = { nom: '', email: '', message: '' }
const fieldOrder = ['nom', 'email', 'message']
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(field, value) {
  const text = value.trim()

  if (field === 'nom' && !text) return 'Indiquez votre nom'
  if (field === 'email' && !text) return 'Indiquez votre adresse e-mail'
  if (field === 'email' && !emailPattern.test(text))
    return 'Saisissez une adresse e-mail valide'
  if (field === 'message' && !text) return 'Écrivez votre message'
  return ''
}

const notice =
  'flex items-start gap-3 rounded-[10px] border-2 border-ink bg-surface-alt p-4 font-medium'

function ContactForm() {
  const [values, setValues] = useState(emptyValues)
  const [errors, setErrors] = useState({})
  const [checked, setChecked] = useState(false)
  const [status, setStatus] = useState('idle')
  const formRef = useRef(null)

  function handleChange(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    // Une erreur disparaît dès que le champ est corrigé.
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: validate(name, value) }))
    }
  }

  // Après une première tentative d'envoi, chaque champ est vérifié à la sortie.
  function handleBlur(event) {
    if (!checked) return
    const { name, value } = event.target
    setErrors((current) => ({ ...current, [name]: validate(name, value) }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setChecked(true)

    const nextErrors = Object.fromEntries(
      fieldOrder.map((field) => [field, validate(field, values[field])]),
    )
    setErrors(nextErrors)

    const firstInvalid = fieldOrder.find((field) => nextErrors[field])
    if (firstInvalid) {
      formRef.current.elements[firstInvalid].focus()
      return
    }

    setStatus('sending')
    try {
      if (!FORMSPREE_ID) throw new Error('Formulaire non configuré')

      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(values),
      })
      if (!response.ok) throw new Error(`Réponse ${response.status}`)

      setValues(emptyValues)
      setChecked(false)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const sending = status === 'sending'

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          id="nom"
          label="Nom"
          autoComplete="name"
          value={values.nom}
          error={errors.nom}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FormField
          id="email"
          label="E-mail"
          type="email"
          autoComplete="email"
          value={values.email}
          error={errors.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <FormField
        id="message"
        label="Message"
        multiline
        value={values.message}
        error={errors.message}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-5">
        <Button
          type="submit"
          disabled={sending}
          className="disabled:opacity-70 lg:px-8"
        >
          {sending ? 'Envoi…' : 'Envoyer'}
        </Button>
        <p className="text-sm text-muted">
          Vos données servent uniquement à vous répondre.
        </p>
      </div>

      {/* Zones présentes dès le départ pour que les lecteurs d'écran annoncent le message. */}
      <div role="status">
        {status === 'success' && (
          <p className={notice}>
            <span
              aria-hidden="true"
              className="flex size-6 shrink-0 items-center justify-center rounded-full bg-ink text-white"
            >
              <LuCheck className="size-4" />
            </span>
            Merci, votre message est bien parti. Je vous réponds au plus vite.
          </p>
        )}
      </div>
      <div role="alert">
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
