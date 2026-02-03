import { SVGProps } from 'react';
import * as IconComponents from '@/components/Icons';

export type IconName = keyof typeof IconComponents;
export type IconComponent = React.FC<SVGProps<SVGSVGElement>>;
