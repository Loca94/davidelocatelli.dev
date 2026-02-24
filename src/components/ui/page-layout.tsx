import { cn } from '@/lib/utils/tailwind-utils';

function PageTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h1
      className={cn(
        'text-lg font-medium text-neutral-950 transition duration-300 dark:text-neutral-50',
        className,
      )}
    >
      {children}
    </h1>
  );
}

function PageDescription({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={cn(
        'pt-1 leading-snug text-neutral-400 dark:text-neutral-400',
        className,
      )}
    >
      {children}
    </p>
  );
}

export { PageTitle, PageDescription };
