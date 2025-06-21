import { SVGProps } from 'react';
import * as IconComponents from '@/components/Icons';

export type Resource = {
  title: string;
  description: string;
  tags?: string[];
  link: string;
};

export type Metadata = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export type IconName = keyof typeof IconComponents;
export type IconComponent = React.FC<SVGProps<SVGSVGElement>>;
