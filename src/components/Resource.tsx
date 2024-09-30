import { ArrowUpRightMiniIcon } from '@/components/Icons';
import { Card, CardHeader } from './ui/Card';

function ResourceLink({
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
      <div className="flex items-center font-medium text-neutral-700 transition duration-300 group-hover:text-neutral-900 dark:text-neutral-300 dark:group-hover:text-neutral-100">
        {title}
        <ArrowUpRightMiniIcon className="ml-1 inline-block h-4 w-4 text-neutral-500 transition-all duration-300 dark:group-hover:ml-2 dark:group-hover:text-emerald-500" />
      </div>

      <p className="text-neutral-400 transition duration-300 dark:text-neutral-400 dark:group-hover:text-neutral-300">
        {description}
      </p>
    </a>
  );
}

function ResourceIconCard({
  icon,
  title,
}: {
  icon: JSX.Element;
  title: string;
}) {
  return (
    <Card
      topGradient
      className="text-neutral-700 transition-colors duration-300 dark:text-neutral-300 dark:group-hover:border-neutral-500 dark:group-hover:text-neutral-100"
    >
      <CardHeader className="space-y-4 rounded-lg transition-colors duration-300 dark:bg-neutral-800/10 dark:group-hover:bg-neutral-700/20">
        {icon}
        <span className="text-center font-medium">{title}</span>
      </CardHeader>
    </Card>
  );
}

export { ResourceLink, ResourceIconCard };
