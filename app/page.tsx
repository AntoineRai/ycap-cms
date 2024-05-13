import ConnexionForm from "@/components/ConnexionForm";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="h-3/4 w-3/4 border-2 border-black rounded-xl bg-[#C2E4FF]">
        <div className="flex flex-col items-center justify-center h-full w-full">
          <div className="w-3/4 p-4 border-2 border-black bg-[#292D32] text-center">
            <h1 className="text-[#7ABBE4] font-bold text-xl">LOGO</h1>
          </div>
          <div className="my-16 w-3/4">
            <h1 className="font-bold">Connexion</h1>
            <div className="flex flex-col justify-center items-center">
              <div className="w-[95%] py-4">
                <ConnexionForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
