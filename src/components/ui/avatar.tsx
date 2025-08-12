import { ClassValue } from 'clsx'

import { cn } from '../../libs/utils'

export default function Avatar({
  className,
  imageUrl,
}: {
  className?: ClassValue
  imageUrl: string
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className={cn(
        'h-16 w-16 rounded-full border-2 border-border dark:border-darkBorder bg-cover bg-center',
        className,
      )}
    ></div>
  )
}