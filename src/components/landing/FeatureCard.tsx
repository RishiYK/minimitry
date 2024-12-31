import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function FeatureCard({ title, description, Icon }: FeatureCardProps) {
  return (
    <div className="relative pl-16">
      <dt className="text-base font-semibold leading-7 text-gray-900">
        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
          <Icon className="h-6 w-6 text-white" />
        </div>
        {title}
      </dt>
      <dd className="mt-2 text-base leading-7 text-gray-600">
        {description}
      </dd>
    </div>
  );
}