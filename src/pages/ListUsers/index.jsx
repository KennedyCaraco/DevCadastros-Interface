import { useEffect, useState } from 'react';
import api from '../../services/api';
import Title from '../../components/Title';
import  Button  from '../../components/Button';
import { Container, CardUsers, ContainerUsers, TrashIcon, AvatarUsers } from './styles';
import { useNavigate } from 'react-router-dom'
import Trash from '../../assets/trash.svg'


import TopBackground from "../../components/TopBackground"

function ListUsers() {

    const navigate = useNavigate()

    const [users, setUsers] = useState([])

    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get('/usuarios')
            console.log(data)
            setUsers(data)
        }
        getUsers()


    }, [])

    async function deleteUser(id){
        await api.delete(`/usuarios/${id}`)

        const updateUsers = users.filter(user => user.id !== id)
        setUsers(updateUsers)
    }


    return (
        <Container>
            <TopBackground></TopBackground>
            <Title>Lista de Usuários</Title>

            <ContainerUsers>
                {users.map((user) => (
                    <CardUsers key={user.id}>
                        <AvatarUsers src={`https://avatar.iran.liara.run/public/?username=${user.id}`}/>
                        <div >
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                            
                        </div>
                        <TrashIcon src={Trash} alt='icone-lixo' onClick={() => deleteUser(user.id)}/>

                    </CardUsers>

                ))}
            </ContainerUsers>


            <Button type='button' onClick={()=> navigate('/')}>Voltar</Button>
        </Container>
    )

}

export default ListUsers