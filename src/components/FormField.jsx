import { LuCircleAlert } from 'react-icons/lu'

// Champ avec son label. Le message d'erreur est relié au champ
// par aria-describedby pour être lu par les lecteurs d'écran.
function FormField({ id, label, error, multiline = false, ...props }) {
  const Field = multiline ? 'textarea' : 'input'
  const errorId = `${id}-erreur`

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-semibold">
        {label}
      </label>
      <Field
        id={id}
        name={id}
        rows={multiline ? 6 : undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`w-full rounded-lg border-[1.5px] bg-surface px-3.5 text-base text-ink ${
          error ? 'border-ink ring-[1.5px] ring-ink' : 'border-border-strong'
        } ${multiline ? 'min-h-36 resize-y py-3 lg:min-h-44' : 'h-12'}`}
        {...props}
      />
      {error && (
        <p
          id={errorId}
          className="flex items-start gap-2 text-sm font-semibold"
        >
          <LuCircleAlert aria-hidden="true" className="size-5 shrink-0" />
          {error}
        </p>
      )}
    </div>
  )
}

export default FormField
