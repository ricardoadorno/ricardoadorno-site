'use client';

import { Eye } from 'lucide-react';
import Text from '../ui/text';

export default function Skills() {
    return (
        <section>
            <Text variant={'heading3'} weight={'medium'} className='mb-4'>Skills</Text>

            <div className='grid grid-cols-3 gap-4'>
                <SkillsCard icon={<Eye size={16} />} title={'React'} />
                <SkillsCard icon={<Eye size={16} />} title={'React'} />
                <SkillsCard icon={<Eye size={16} />} title={'React'} />
                <SkillsCard icon={<Eye size={16} />} title={'React'} />
                <SkillsCard icon={<Eye size={16} />} title={'React'} />
                <SkillsCard icon={<Eye size={16} />} title={'React'} />
                <SkillsCard icon={<Eye size={16} />} title={'React'} />
                <SkillsCard icon={<Eye size={16} />} title={'React'} />
                <SkillsCard icon={<Eye size={16} />} title={'React'} />
            </div>

        </section>
    )
}

const SkillsCard = ({ icon, title }: { icon: React.ReactNode, title: string }) => {
    return (
        <div className='flex pl-2 py-1 items-center gap-2 max-h-8 bg-accent-foreground text-sm font-semibold rounded-sm'>
            {icon} {title}
        </div>
    )
}
