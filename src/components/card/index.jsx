import React from 'react'
import Image from 'next/image'

import styles from '../../styles/Card.module.css'

const card = ({ headline, image }) => {
    return (
        <div className={styles.card}>
            <p>{headline}</p>
            <div className={styles.cardImage}>
                <Image
                    src={image}
                    placeholder='blur'
                    layout='fill'
                    alt='poster'
                />
            </div>
        </div>
    )
}

export default card
