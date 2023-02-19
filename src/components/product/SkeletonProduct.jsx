import React from 'react'
import { SkeletonCard } from './productStyles'

const SkeletonProduct = () => {
    return (
        <SkeletonCard>
            <div></div>
            <div>
                <div></div>
                <p></p>
                <p></p>
            </div>
        </SkeletonCard>
    )
}

export default SkeletonProduct