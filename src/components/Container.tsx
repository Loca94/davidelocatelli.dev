import { cn } from '@/lib/utils';

export default function Container({
  className,
  looser = false,
  children,
  ...props
}: {
  className?: string;
  looser?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'relative mx-auto px-6 sm:px-8',
        looser ? 'max-w-2xl' : 'max-w-xl',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
