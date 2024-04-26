'use client'

function Card({ children = 'Default Value' }) {
    return (
        <div className='border rounded-md border-gray-600 p-4'>{children}</div>
    )
}

export default function Home()   {
    const name = 'Piotr'
    const handleClick = (e) => {
        console.log(e)
        alert('Hello')
    }
    return (
        <>
            <div className='p-20 space-y-4'>
                <div>Hello, {name}</div>
                <Card>This is being passed from the parent</Card>
                <Card>
                    <div>This is JS fdfd!</div>
                    <Card>Nested text!</Card>
                </Card>
                <Card />
                <Card />
                <Card />

                <button onClick={handleClick}>Click me!</button>
            </div>
        </>
    )
}
