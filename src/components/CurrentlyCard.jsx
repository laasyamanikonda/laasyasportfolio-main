import styles from '/src/components/CurrentlyCard.module.css'

// Update this whenever your "currently" changes - same array pattern as everything else
const currentlyList = [
    { label: "reading", value: "Hunger Games #5: SOTR", uniqueId: 1 },
    { label: "(re)watching", value: "Gilmore Girls!", uniqueId: 2 },
    { label: "making", value: "coming soon!! :)", uniqueId: 3 },
]

export default function CurrentlyCard() {
    return (
        <div className={styles['card']}>
            <h3 className={styles['heading']}>currently...</h3>
            <ul className={styles['list']}>
                {currentlyList.map((item) => (
                    <li key={item.uniqueId}>
                        <span className={styles['label']}>{item.label}</span>
                        <span className={styles['value']}>{item.value}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
