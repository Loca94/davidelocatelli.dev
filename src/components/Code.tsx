'use client';

import { cn } from '@/lib/utils/tw-utils';
import { createContext, useContext, useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { CheckIcon, CopyIcon } from '@/components/Icons';

function CopyButton({ code }: { code: string }) {
  const [copyCount, setCopyCount] = useState(0);
  const copied = copyCount > 0;

  useEffect(() => {
    if (copyCount > 0) {
      const timeout = setTimeout(() => setCopyCount(0), 1000);
      return () => clearTimeout(timeout);
    }
  }, [copyCount]);

  return (
    <Button
      variant={'ghost'}
      size={'sm'}
      className={cn('absolute right-4 top-3.5 rounded-lg text-neutral-100')}
      onClick={() => {
        navigator.clipboard.writeText(code).then(() => setCopyCount(1));
      }}
    >
      {copied ? (
        <CheckIcon className="size-4" />
      ) : (
        <CopyIcon className="size-4" />
      )}
    </Button>
  );
}

function CodeHeader({ title }: { title?: string }) {
  if (!title) {
    return null;
  }

  return (
    <div className="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent">
      <h3 className="mr-auto pt-3 text-xs font-semibold text-white">
        {title || 'Default title'}
      </h3>
    </div>
  );
}

function CodeWrapper({
  children,
  title,
  code,
}: {
  children: React.ReactNode;
  title?: string;
  code?: string;
}) {
  if (!code) {
    throw new Error(
      '`CodeWrapper` requires a `code` prop, or a child with a `code` prop.',
    );
  }

  return (
    <div className="my-6 overflow-hidden rounded-xl bg-neutral-900 shadow-md dark:ring-1 dark:ring-white/10">
      <CodeHeader title={title} />
      <div className="relative">
        <pre className="overflow-x-auto p-4 text-white">{children}</pre>
        <CopyButton code={code} />
      </div>
    </div>
  );
}

const CodeGroupContext = createContext(false);

export function Code({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'code'>) {
  const isGrouped = useContext(CodeGroupContext);

  if (isGrouped) {
    if (typeof children !== 'string') {
      throw new Error(
        '`Code` children must be a string when nested inside a `CodeWrapper`.',
      );
    }
    return <code {...props} dangerouslySetInnerHTML={{ __html: children }} />;
  }

  return <code {...props}>{children}</code>;
}

export function Pre({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <CodeGroupContext.Provider value={true}>
      <CodeWrapper {...props}>{children}</CodeWrapper>
    </CodeGroupContext.Provider>
  );
}
