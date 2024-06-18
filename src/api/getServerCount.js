import { createRequestHandler } from 'astro';
import { Server } from './models/Server'; // Suponiendo que tienes un modelo 'Server' en 'models'

export default async function getServerCount() {
  // Obtén el conteo de servidores más reciente desde tu backend de Node.js (reemplaza con tu implementación real)
  const serverCount = await fetch('http://localhost:3000/serverCount')
    .then((response) => response.json())
    .then((data) => data.serverCount);

  // Regresa el conteo de servidores como JSON
  return {
    body: JSON.stringify({ serverCount }),
  };
}

const requestHandler = createRequestHandler(getServerCount);

export { requestHandler };