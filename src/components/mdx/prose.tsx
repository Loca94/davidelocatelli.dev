import { cn } from '@/lib/utils/tailwind-utils';

export default function Prose({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        className,
        'prose dark:prose-invert prose-neutral prose-headings:mt-16 prose-headings:mb-2 prose-headings:w-fit prose-headings:scroll-mt-20',
      )}
    >
      {children}
    </div>
  );
}
