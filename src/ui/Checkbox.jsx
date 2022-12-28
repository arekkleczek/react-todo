import { useId } from 'react'
import { BsCheck } from 'react-icons/bs'

const defaultStateCSS = 'h-6 w-6 rounded-full border border-gray-600 block cursor-pointer hover:border-2 hover:border-gray-500'
const checkedStateCSS = `${defaultStateCSS} bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center`

export const Checkbox = ({ isChecked, onClick }) => {
  const id = useId()

  return (
    <label htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        className="hidden"
        onClick={onClick}
      />
      <span className={isChecked ? checkedStateCSS : defaultStateCSS}>
        {isChecked && <BsCheck className="text-lg text-white" />}
      </span>
    </label>
  )
}
