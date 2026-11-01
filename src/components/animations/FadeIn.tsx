import {
  Children,
  cloneElement,
  isValidElement,
  type CSSProperties,
  type ReactNode,
} from 'react';
import { cn } from '@/lib/utils';

// CSS-only entrance animation (see `.fade-in` in tailwind.css).
// Content is rendered visible in the server HTML and animated by the browser
// as soon as the stylesheet loads, so it never waits for JS hydration.

const STAGGER_MS = 120;
const STAGGER_FASTER_MS = 80;
const MAX_STAGGER_STEPS = 10; // Caps the delay on long lists

type FadeInProps = React.HTMLAttributes<HTMLDivElement> & {
  staggerIndex?: number;
  staggerMs?: number;
};

export function FadeIn({
  staggerIndex = 0,
  staggerMs = STAGGER_MS,
  className,
  style,
  ...props
}: FadeInProps) {
  const delay = Math.min(staggerIndex, MAX_STAGGER_STEPS) * staggerMs;

  return (
    <div
      className={cn('fade-in', className)}
      style={{ '--fade-in-delay': `${delay}ms`, ...style } as CSSProperties}
      {...props}
    />
  );
}

/**
 * Assigns an increasing delay to every `FadeIn` nested (at any depth) in its
 * children, in document order. Nested `FadeInStagger`s manage their own items.
 */
export function FadeInStagger({
  faster = false,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { faster?: boolean }) {
  let index = 0;
  const staggerMs = faster ? STAGGER_FASTER_MS : STAGGER_MS;

  function assignDelays(node: ReactNode): ReactNode {
    return Children.map(node, (child) => {
      if (!isValidElement<{ children?: ReactNode }>(child)) return child;
      if (child.type === FadeInStagger) return child;
      if (child.type === FadeIn) {
        return cloneElement(child as React.ReactElement<FadeInProps>, {
          staggerIndex: index++,
          staggerMs,
        });
      }
      if (child.props.children === undefined) return child;
      return cloneElement(child, {
        children: assignDelays(child.props.children),
      });
    });
  }

  return <div {...props}>{assignDelays(children)}</div>;
}
