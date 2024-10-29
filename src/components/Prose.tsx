import { cn } from '@/lib/utils/tw-utils';

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
