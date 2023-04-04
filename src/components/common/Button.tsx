import type { ReactNode, MouseEventHandler } from 'react'
export type ButtonType = 'button' | 'reset' | 'submit'

interface ButtonProps {
  type?: ButtonType
  key?: string
  className?: string
  disabled?: boolean
  children?: ReactNode
  onClick?: MouseEventHandler
}
export const CustomButton = (props: ButtonProps) => {
  // console.log(onClick)

  return (
    <button
      type={props.type}
      key={props.key}
      className={props.className}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
