'use client';

import { Heart, Brain, Bone, Eye, Baby, Tooth } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import type { LucideIcon } from 'lucide-react';

interface Service {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    Icon: Heart,
    title: 'Cardiology',
    description: 'Comprehensive heart care services including diagnostics and treatment.',
  },
  {
    Icon: Brain,
    title: 'Neurology',
    description: 'Expert care for conditions affecting the brain and nervous system.',
  },
  {
    Icon: Bone,
    title: 'Orthopedics',
    description: 'Specialized treatment for bones, joints, and musculoskeletal conditions.',
  },
  {
    Icon: Eye,
    title: 'Ophthalmology',
    description: 'Complete eye care services from routine exams to complex surgeries.',
  },
  {
    Icon: Baby,
    title: 'Pediatrics',
    description: 'Dedicated care for children from newborns to adolescents.',
  },
  {
    Icon: Tooth,
    title: 'Dental Care',
    description: 'Full range of dental services for a healthy and beautiful smile.',
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive healthcare services tailored to your needs
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              Icon={service.Icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}