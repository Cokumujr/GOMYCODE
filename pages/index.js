import Image from "next/image";

export default function Home() {
    return (
      <main>
        <h2>Welcome to My Portfolio</h2>
        <p>This is the home page where I showcase my skills and projects.</p>
        <Image src="/profile.jpg" alt="Profile Picture" width={200} height={200} />
        <br/>
        <a className="button" href="/about">About Me</a>
      </main>
    );
  }