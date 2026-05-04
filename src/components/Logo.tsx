import Image from "next/image";
import Link from "next/link";

export function Logo() {
    return (
        <Link href={'/'}>
            <Image
                src={'/fronty.png'}
                alt="Logotipo Microweb-cr"
                width={30}
                height={30}
                className="w-auto h-auto"
                priority
            />
        </Link>
    )
}
