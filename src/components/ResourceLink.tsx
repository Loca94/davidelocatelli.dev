export default function ResourceLink({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="group flex flex-col transition-colors duration-300"
    >
      <div className="font-medium text-neutral-700 group-hover:text-neutral-900 dark:text-neutral-300 dark:group-hover:text-emerald-400">
        {title}
      </div>

      <p className="text-neutral-400 dark:text-neutral-400 dark:group-hover:text-[#678E82]">
        {description}
      </p>
    </a>
  );
}
