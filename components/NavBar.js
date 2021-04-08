import Link from 'next/link';

const Sep = () => <span> | </span>

export default () => {
    return (
        <div>
            <Link href="/"><a>Home</a></Link>
            <Sep />
            <Link href="/another"><a>Another</a></Link>
            <Sep />
            <Link href="/posts"><a>Posts</a></Link>
        </div>
    )
}
