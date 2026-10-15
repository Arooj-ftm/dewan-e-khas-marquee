import useTheme from '../hooks/useTheme'

export default function ThemeToggle() {
    const { theme, toggle } = useTheme()
    return (
        <button className="theme-btn" onClick={toggle} aria-label="Toggle light and dark mode">
            {theme === 'dark' ? '☀' : '☾'}
        </button>
    )
}