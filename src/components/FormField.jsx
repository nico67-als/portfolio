import { LuCircleAlert } from 'react-icons/lu'

const control =
  'w-full rounded-lg border-[1.5px] bg-surface px-3.5 text-base text-ink'

// Label visible au-dessus du champ, message d'erreur relié par aria-describedby.
function FormField({ id, label, error, multiline = false, ...props }) {
  const errorId = `${id}-erreur`
  const state = error
    ? 'border-ink ring-[1.5px] ring-ink'
    : 'border-border-strong'
  const shared = {
    id,
    name: id,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? errorId : undefined,
    ...props,
  }

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-semibold">
        {label}
      </label>
      {multiline ? (
        <textarea
          rows={6}
          className={`${control} ${state} min-h-36 resize-y py-3 leading-normal lg:min-h-44`}
          {...shared}
        />
      ) : (
        <input className={`${control} ${state} h-12`} {...shared} />
      )}
      {error && (
        <p
          id={errorId}
          className="flex items-start gap-2 text-sm leading-snug font-semibold"
        >
          <LuCircleAlert aria-hidden="true" className="size-5 shrink-0" />
          {error}
        </p>
      )}
    </div>
  )
}

export default FormField
