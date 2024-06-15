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
    <div className="flex flex-col">
      <a
        href={href}
        target="_blank"
        className="relative inline-flex items-center text-neutral-700 transition-colors duration-300 hover:text-neutral-900"
      >
        {title}
      </a>
      <p className="text-neutral-400">{description}</p>
    </div>
  );
}
