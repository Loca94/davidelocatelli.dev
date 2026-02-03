// Code.tsx functions -------------------------------------------------------------

// Mapping of programming language codes to their full names
const programmingLanguageNames: Record<string, string> = {
  js: 'JavaScript',
  ts: 'TypeScript',
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  java: 'Java',
  python: 'Python',
};

// Extract the language from the Code block
export function getPanelTitle({
  title,
  language,
}: {
  title?: string;
  language?: string;
}) {
  if (title) return title;
  if (language && language in programmingLanguageNames)
    return programmingLanguageNames[language];
  return 'Code'; // Default title
}
