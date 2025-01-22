import { Container, Form, ContainerInputs, Inputs, InputsLabel } from './styles'
import Button from "../../components/Button"
import Title from '../../components/Title'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

import UsersImage from '../../assets/users.png'
import TopBackground from '../../components/TopBackground'

function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  const navigate = useNavigate()

  async function registerNewUser() {
    const data = await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
    })

    console.log(data)
  }

  return (
    <Container>

      <TopBackground></TopBackground>

      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>

          <div>
            <InputsLabel>Nome <span> *</span></InputsLabel>
            <Inputs type='text' placeholder='Nome do Usuário' ref={inputName}></Inputs>
          </div>

          <div>
            <InputsLabel>Idade <span> *</span></InputsLabel>
            <Inputs type='number' placeholder='Idade do Usuário' ref={inputAge}></Inputs>
          </div>


        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputsLabel>E-mail <span> *</span></InputsLabel>
          <Inputs type='email' placeholder='E-mail do Usuário' ref={inputEmail}></Inputs>
        </div>

        <Button type='button' onClick={registerNewUser} theme='primary'>Cadastrar Usuário</Button>

      </Form>
      <Button type='button' onClick={()=> navigate('lista-de-usuarios')}>Lista de Usuários</Button>

    </Container>
  )
}

export default Home
