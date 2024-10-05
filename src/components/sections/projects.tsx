'use client';

import Text from '../ui/text';


export default function Projects() {
    return (
        <section>
            <Text variant={'heading3'} weight={'medium'} className='mb-4'>Projects</Text>

            <div className='grid grid-cols-2 gap-4'>
                <ProjectCard title={'Project 1'} description={'Description of project 1'} tags={['tag1', 'tag2', 'tag3']} />
                <ProjectCard title={'Project 1'} description={'Description of project 1'} tags={['tag1', 'tag2', 'tag3']} />
                <ProjectCard title={'Project 1'} description={'Description of project 1'} tags={['tag1', 'tag2', 'tag3']} />
            </div>
        </section>
    )
}

export const ProjectCard = ({ title, description, tags }: { title: string, description: string, tags: string[] }) => {
    return (
        <div className='flex flex-col bg-accent-foreground rounded-md '>
            <div >
                <img src='https://via.placeholder.com/50x25' alt='project' className='rounded-t-md w-full' />
            </div>

            <div className=" p-4">
                <Text variant={'subtitle2'} weight={'bold'} className='mb-2'>{title}</Text>
                <Text className='mb-1'>{description}</Text>
                <div className='flex gap-2'>
                    {tags.map(tag => (
                        <div key={tag} className='bg-gray-900 text-sm rounded-sm p-1'>{tag}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}