import { Suspense, useState } from "react";
import Nav from "./components/Nav";
import DevStacksList from "./components/devstacks/DevStacksList";
import type { IDevStackType } from "./types/DevStackType";

const fetchDevStacks = async (): Promise<IDevStackType[]> => {
  const res = await fetch("/data.json");

  if (!res.ok) {
    throw new Error("Failed to fetch dev stacks");
  }
  const data = await res.json();
  return data;
};

function App() {
  const [devStackPromise] = useState(() => fetchDevStacks());

  return (
    <>
      <Nav />

      <Suspense fallback={<div>Loading...</div>}>
        <DevStacksList devStackPromise={devStackPromise} />
      </Suspense>
    </>
  );
}

export default App;
