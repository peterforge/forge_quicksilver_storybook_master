import React from 'react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button
}

export const Default = () => <Button variant='default'>Default</Button> 
export const Primary = () => <Button variant='primary'>Primary</Button>
export const Hover = () => <Button variant='hover'>Hover</Button>
export const Press = () => <Button variant='press'>Press</Button>
export const Disabled = () => <Button variant='disabled'>Disabled</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Idle = () => <Button variant='idle'>Idle</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Error = () => <Button variant='error'>Error</Button>