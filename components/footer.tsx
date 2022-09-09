import React from "react";
import Link from 'next/link'
import Image from "next/image";

const Footer: React.FC = () => (
  <footer className="flex gap-8 items-center justify-center bg-black text-white p-20">
    <Image src="/assets/logo-icon.png" width={18} height={18} />
    <Link href="">Terms</Link>
    <Link href="">Privacy</Link>
    <Link href="https://github.com/2Senn">Github</Link>
  </footer>
)

export default Footer
