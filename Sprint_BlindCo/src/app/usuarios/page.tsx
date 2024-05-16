

// app/usuarios/page.tsx
'use client';
import { getUsers } from "@/services/apiusuarios";

import { use, useEffect,useState } from "react";
interface User {
  id: number
  name: string
}
export default function UsuariosPage() {

  const [users,setUsers] = useState<User[]>([]);
  const [loading,setLoading]= useState(true);

  useEffect(() =>{
    const fetchUsers = async () =>{
      try{
        const data = await getUsers();
        setUsers(data);
      }
      catch(error){
        console.error('erro ao buscar usuarios',error);
      }
      finally{
        setLoading(false);
      }
    }
    fetchUsers();
  },[])
    return (
      <section className="container mx-auto p-4">
      
        <h1 className="text-2xl font-bold mb-4">Usuários</h1>
        <p>Aqui você encontra uma lista de usuários.</p>
        <h1 className="text-2xl font-bold mb-4">Usuários</h1>
        {loading ? (
          <p>Carregando...</p>
        ) : users.length === 0 ? (
          <p>Nenhum usuário encontrado.</p>
        ) : (
          <ul className="list-disc pl-5 space-y-2">
            {users.map((usuario) => (
              <li key={usuario.id}>{usuario.name}</li>
            ))}
          </ul>
        )}

      </section>
    )
  }
  