import { cn } from '@/lib/utils/tailwind-utils';

export default function Prose({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn(className, 'prose dark:prose-invert')}>{children}</div>
  );
}
