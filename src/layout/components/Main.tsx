export const Main: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props

  return <main className="flex h-screen flex-col items-center justify-center">{children}</main>
}
