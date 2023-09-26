import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-4">OUR GOAL</h1>
        <p className="text-lg mb-6">
          We are a private non-governmental organzation dedicated to rapidly
          accelerating the industrialization of Nigeria and then Africa.
        </p>
        <h1 className="text-4xl font-bold mb-4">GET INVOLVED</h1>
        <p className="text-lg mb-6">
          No one is coming to save us, we must take responsibility like every
          nation that has achieved anything great. Leave your email, we will
          contact you.
        </p>
        <h1 className="text-4xl font-bold mb-4">WHAT WE BELIEVE</h1>
        <p className="text-lg mb-3">
          All humans are created equal and have equal rights.
        </p>
        <p className="text-lg mb-3">The scientific method.</p>
        <p className="text-lg mb-6">
          Democracy because power corrupts and absolute power corrupts
          absolutely.
        </p>
        <h1 className="text-4xl font-bold mb-4">WHAT WE DO</h1>
        <p className="text-lg mb-3">
          We set up systems that operate in the backend to serve as foundation
          on which individuals and organizations can buuld off of.
        </p>
        <h1 className="text-4xl font-bold mb-4">OUR IDEAS</h1>
        <p className="text-lg mb-3">
          Solar farm in ...
        </p>
        <h1 className="text-4xl font-bold mb-4">WE ARE LEARNERS</h1>
        <p className="text-lg mb-3">Recommended reading list.</p>
      </div>
    </main>
  );
}
