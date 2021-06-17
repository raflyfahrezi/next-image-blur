import React from 'react'
import Image from 'next/image'

import styles from '../../styles/Card.module.css'

const card = ({ headline, image }) => {
    return (
        <div>
            <p>{headline}</p>
            <Image src={image} placeholder='blur' alt='poster' />
        </div>
    )
}

export default card
