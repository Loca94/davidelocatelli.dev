"use client";

import { cn } from "@/lib/utils/tw-utils";
import { createContext, useContext, useEffect, useState } from "react";
import { HamburgerIcon } from "@/components/Icons";

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
    <button
      type="button"
      className={cn(
        "absolute right-4 top-3.5 rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition group-hover:opacity-100",
        copied ? "bg-emerald-400/10 ring-1 ring-emerald-400" : "bg-white/5",
      )}
      onClick={() => {
        navigator.clipboard.writeText(code).then(() => setCopyCount(1));
      }}
    >
      <span className={cn("flex items-center", copied && "hidden")}>
        <HamburgerIcon className="h-5 w-5" /> Copy
      </span>
      {copied && <span>Copied!</span>}
    </button>
  );
}

function CodePanelHeader({ tag, label }: { tag?: string; label?: string }) {
  if (!tag && !label) {
    return null;
  }

  return (
    <div className="flex h-9 items-center gap-2 border-y border-b-white/7.5 border-t-transparent bg-white/2.5 bg-neutral-900 px-4 dark:border-b-white/5 dark:bg-white/1">
      {/* {tag && <Tag variant="small">{tag}</Tag>} */}
      {tag && label && (
        <span className="h-0.5 w-0.5 rounded-full bg-neutral-500" />
      )}
      {label && (
        <span className="font-mono text-xs text-neutral-400">{label}</span>
      )}
    </div>
  );
}

function CodePanel({
  children,
  tag,
  label,
  code,
}: {
  children: React.ReactNode;
  tag?: string;
  label?: string;
  code?: string;
}) {
  if (!code) {
    throw new Error(
      "`CodePanel` requires a `code` prop, or a child with a `code` prop.",
    );
  }

  return (
    <div className="group dark:bg-white/2.5">
      <CodePanelHeader tag={tag} label={label} />
      <div className="relative">
        <pre className="overflow-x-auto p-4 text-xs text-white">{children}</pre>
        <CopyButton code={code} />
      </div>
    </div>
  );
}

const CodeGroupContext = createContext(false);

export function Code({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"code">) {
  const isGrouped = useContext(CodeGroupContext);

  if (isGrouped) {
    if (typeof children !== "string") {
      throw new Error(
        "`Code` children must be a string when nested inside a `CodeGroup`.",
      );
    }
    return <code {...props} dangerouslySetInnerHTML={{ __html: children }} />;
  }

  return <code {...props}>{children}</code>;
}

export function Pre({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <CodeGroupContext.Provider value={true}>
      <CodePanel {...props}>{children}</CodePanel>
    </CodeGroupContext.Provider>
  );
}
