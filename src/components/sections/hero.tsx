import Text from '../ui/text';

export default function Hero() {
    return (
        <section className='flex'>
            <div className='space-y-4 flex-1'>
                <Text variant={'heading2'}>Denveolvedor</Text>
                <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda impedit repellat quia ipsa mollitia officia obcaecati aperiam at molestias accusantium illum veniam, eligendi, autem porro magni eaque fugit dolor tenetur suscipit asperiores unde temporibus dicta dolores. Facilis laboriosam in quam.</Text>
            </div>

            <div className="flex-1 w-full"><img className='w-3/4 mx-auto rounded-md' src="/images/bio_tinified.png" alt="bio image" /></div>
        </section>
    )
}
