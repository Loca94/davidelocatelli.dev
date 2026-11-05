import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/Button';

// See `.animated-border` in tailwind.css
export function AnimatedBtnBorder({
  children,
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'group relative h-min w-fit cursor-pointer content-center overflow-visible bg-neutral-950/20 box-decoration-clone p-px transition duration-500 hover:bg-neutral-950/10 dark:bg-white/20',
      )}
      {...props}
    >
      <div
        className={cn(
          'z-10 w-auto rounded-[inherit] bg-neutral-950 px-4 py-2 text-white',
          className,
        )}
      >
        {children}
      </div>
      <div className="animated-border absolute inset-0 z-0 rounded-[inherit] blur-[2px]" />
      <div className="animated-border-highlight absolute inset-0 z-0 rounded-[inherit] opacity-0 blur-[2px] transition-opacity duration-1000 group-hover:opacity-100 group-focus-visible:opacity-100" />
      <div className="absolute inset-0.5 z-1 flex-none rounded-full bg-neutral-950" />
    </a>
  );
}

export function LetsTalkButton() {
  return (
    <AnimatedBtnBorder href="mailto:davidelocatelli.dev@gmail.com?subject=Reaching%20out%20from%20your%20portfolio%20%E2%80%93%20Let%27s%20talk!">
      {"Let's talk 😎"}
    </AnimatedBtnBorder>
  );
}
