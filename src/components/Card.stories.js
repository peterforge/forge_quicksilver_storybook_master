import React from 'react'
import Card from './Card'

export default {
  title: 'Card',
  component: Card
}

export const Atomic = () => <Card variant='default'>Default</Card> 
export const Hero = () => <Card variant='hero'>Hero</Card>
export const Solution = () => <Card variant='solution'>Solution</Card>
export const Marketplace = () => <Card variant='marketplace'>Marketplace</Card>
export const OpenPlace = () => <Card variant='openplace'>OpenPlace</Card>
export const Blueprints = () => <Card variant='blueprints'>Blueprints</Card>
