import Image from 'next/image'; // Import the Image component

export default function Home() {
  return (
    <main>
      <Image 
        src="/images/mock/settings.png" // Path to your image
        alt="Saved Jobs" // Alt text for accessibility
        width={1200} // Set the desired width
        height={400} // Set the desired height
        className="object-cover" // Optional: Add any additional classes
      />
    </main>
  );
}