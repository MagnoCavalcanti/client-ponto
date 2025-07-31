import styles from "./Card.module.css"

interface CardProps {
    children: React.ReactNode,
    className?: object | {} 
}

export const Card = ({ children, className }: CardProps) => {
    return (
        <div className={styles.card} style={className}>
            {children}
        </div>
    )
}