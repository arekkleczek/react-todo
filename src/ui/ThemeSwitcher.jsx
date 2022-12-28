import { useContext } from 'react'
import { BsMoonStars, BsSun } from 'react-icons/bs'
import { ThemeContext } from '../context';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const outerCSS = theme === 'light' ? 'bg-white' : 'bg-gray-800'
  const innerCSS = theme === 'light' ? 'translate-x-0 bg-gray-800' : 'translate-x-8 bg-white'

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex items-center h-[32px] w-[64px] shrink-0 cursor-pointer rounded-full border-2
      border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2
      focus-visible:ring-white focus-visible:ring-opacity-75 relative ${outerCSS}`}
    >
      <BsSun className="text-base text-gray-800 absolute right-2 top-1/2 transform -translate-y-1/2" />
      <BsMoonStars className="text-base text-white absolute left-2 top-1/2 transform -translate-y-1/2" />
      <span className={`pointer-events-none inline-block h-[28px] w-[28px] transform rounded-full
      shadow-lg ring-0 transition duration-200 ease-in-out ${innerCSS}`} />
    </button>
  )
}
