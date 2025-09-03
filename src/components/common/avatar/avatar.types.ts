export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string
  alt: string
  name?: string
  size?: 'sm' | 'md'
  status?: 'online' | 'away' | 'busy' | 'offline'
  className?: string
}

export interface AvatarInitialsProps {
  text: string
  size: 'sm' | 'md'
}
