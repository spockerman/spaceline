interface ButtonProps{
  title: String
}
export function Button(props: ButtonProps) {
  return (
    <div>{props.title}</div>
  )
}
