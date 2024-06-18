
import { useAstroFetch } from '@astro/fetch';

export default function Index() {
  const { data, error, isLoading } = useAstroFetch('/api/getServerCount');

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    console.error(error);
    return <div>Error al cargar el conteo de servidores</div>;
  }

  const serverCount = JSON.parse(data).serverCount;
  return (
    <div>
      <h1>Conteo de Servidores: {serverCount}</h1>
    </div>
  );
}
