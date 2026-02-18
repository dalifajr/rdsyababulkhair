import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const PageTransition = ({ children }) => {
    const location = useLocation()
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(false)
        const timer = requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setIsVisible(true)
            })
        })
        return () => cancelAnimationFrame(timer)
    }, [location.pathname])

    return (
        <div
            className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
        >
            {children}
        </div>
    )
}

export default PageTransition
