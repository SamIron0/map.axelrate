import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-4">
          MY MOTHERLAND, A FAILED STATE
        </h1>
        <p className="text-lg mb-6">
          I planned to start this paper by giving you a brief picture of how we
          got to this mess reserching
        </p>

        <iframe
          width="425"
          height="350"
          src="https://www.openstreetmap.org/export/embed.html?bbox=0.13183593750000003%2C-0.7031073524364783%2C16.259765625000004%2C20.24158281954221&amp;layer=mapnik"
          style={{ border: "1px solid black" }}
          
        ></iframe>
        <br />
        <small>
          <a href="https://www.openstreetmap.org/#map=6/9.936/8.196">
            View Larger Map
          </a>
        </small>
      </div>
    </main>
  );
}
