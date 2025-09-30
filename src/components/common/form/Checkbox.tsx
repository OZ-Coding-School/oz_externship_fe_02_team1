import { cn } from '@utils'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export default function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        className={cn(
          'h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
        )}
        {...props}
      />
      {label && <span className="text-sm text-gray-700">{label}</span>}
    </label>
  )
}
