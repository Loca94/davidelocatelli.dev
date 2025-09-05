import {
  Card,
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
} from './ui/Card';

function ProjectCard({ title, link }: { title: string; link: string }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export default ProjectCard;
