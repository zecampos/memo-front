import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Notifications, {notify} from 'react-notify-toast';
import axios from 'axios'
import logo from './assets/logo.png'


class App extends Component {
  state={
    nome: '',
    email: '',
    telefone: ''
  }


enviar = () =>{
  const config = { headers: { 'Content-Type': 'application/json' } };
  const data ={
    Nome: this.state.nome,
    email: this.state.email,
    telefone: this.state.telefone
  }
  axios.post('https://api-memo.herokuapp.com/clientes',data, config)
  .then((res) => {
    let myColor = { background: '#ec1b24', text: "#FFFFFF" }
    console.log(res.data)
    notify.show('Enviado com sucesso!', "custom", 4000, myColor);
    this.setState({nome: '', email: '', telefone: ''})
  })
  .catch((erro) =>  {
    let myColor = { background: '#ec1b24', text: "#FFFFFF" }
    notify.show('Ocorreu um Erro!', "custom", 4000, myColor)
  
  })
}

  render() {
    const {nome, email, telefone } = this.state
    const isEnabled = nome.length > 0 && email.length > 5 && telefone.length >6
    return (
      <div  className="container-fluid">
      <Notifications />
      <div  className="row justify-content-center align-items-center">
      <div style={{backgroundColor: '#FFF', marginTop: "10%", boxShadow: "0 4px 4px 0 rgba(0,0,0,0.2)"}} className="col-sm-12 col-md-4 col-lg-4 col-xl-4 align-items-center ">
      <div style={{margin: 10}} className="row justify-content-center  align-items-center">
      <div style={{marginLeft: 0, paddingLeft: 0}} className="col-sm-12 col-md-4 col-lg-4 col-xl-4 ">
     <img style={{width: 150}} src={logo} />
     
      </div>
      <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 ">
      <h5>Cadastro Martelo OktoberfestRP</h5>
      </div>
      <div className="row justify-content-center align-self-center">
      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
      <TextField
      style={{width: '100%'}}
          id="standard-name"
          label="Nome"
          value={this.state.nome}
          onChange={(nome) =>this.setState({nome: nome.target.value})}
          margin="normal"
        />
      </div>
      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
      <TextField
      style={{width: '100%'}}
          id="standard-name"
          label="Email"
          value={this.state.email}
          onChange={(email) =>this.setState({email: email.target.value})}
          margin="normal"
        />
      </div>
      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
      <TextField
      style={{width: '100%'}}
          id="standard-name"
          label="Telefone"
          value={this.state.telefone}
          onChange={(telefone) =>this.setState({telefone: telefone.target.value})}
          margin="normal"
          placeholder="DDD + Numero"
        />
      </div>
      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
      <Button disabled={!isEnabled}  onClick={() =>this.enviar()} style={{backgroundColor: '#ec1b24'}} variant="contained" color="primary">
      Cadastrar
    </Button>
      </div>
      </div>
      </div>
      </div>
      
      </div>
        
      </div>
    );
  }
}

export default App;
