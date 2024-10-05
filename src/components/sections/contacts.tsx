import { Eye } from 'lucide-react'
import Text from '../ui/text'

export default function Contacts() {
    return (
        <section>
            <Text variant={'heading3'} weight={'medium'} className='mb-4'>Contacts</Text>

            <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
                <ContactsCard icon={<Eye size={20} />} title={'React'} />
                <ContactsCard icon={<Eye size={20} />} title={'React'} />
                <ContactsCard icon={<Eye size={20} />} title={'React'} />
                <ContactsCard icon={<Eye size={20} />} title={'React'} />
            </div>
        </section>
    )
}


const ContactsCard = ({ icon, title }: { icon: React.ReactNode, title: string }) => {
    return (
        <div className='flex flex-1 pl-6 py-6 items-center gap-4 max-h-8 bg-transparent border border-accent-foreground text-sm font-semibold rounded-sm'>
            {icon} {title}
        </div>
    )
}