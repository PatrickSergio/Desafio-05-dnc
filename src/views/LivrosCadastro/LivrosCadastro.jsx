import { useState } from 'react';
import Header from '../../components/Header/Header';
import './index.scss';
import LivrosService from '../../api/LivrosService'; 

const LivrosCadastro = () => {
  const [livro, setLivro] = useState({
    id: '',
    titulo: '',
    num_paginas: '',
    isbn: '',
    editora: ''
  });

  async function createLivro() {
    const body = {
      id: Number(livro.id),
      titulo: livro.titulo, 
      num_paginas: Number(livro.num_paginas),
      isbn: livro.isbn,
      editora: livro.editora
    };

    if (livro.id && livro.titulo && livro.num_paginas && livro.isbn && livro.editora) {
      await LivrosService.createLivro(body)
        .then((response) => {
          if (response && response.data) {
            alert('Livro cadastrado com sucesso!');
          } else {
            alert("Resposta inválida do servidor");
          }
          document.getElementById('formulario').reset();
          setLivro({ id: '', titulo: '', num_paginas: '', isbn: '', editora: '' });
        })
        .catch((error) => {
          if (error.response) {
            alert(`${error.response.status} - ${error.response.data.mensagem}`);
          } else {
            alert("Erro de conexão ou outro problema.");
          }
        });
    }
  }

  return (
    <>
      <Header />
      <div className='livrosCadastro'>
        <h1>Cadastro de Livros</h1>
        <div>
          <form id="formulario">
            <div className='form-group'>
              <label>Id</label>
              <input type="text" id='id' required onChange={(event) => { setLivro({ ...livro, id: event.target.value }) }} value={livro.id} />
            </div>
            <div className='form-group'>
              <label>Título</label>
              <input type="text" id='titulo' required onChange={(event) => { setLivro({ ...livro, titulo: event.target.value }) }} value={livro.titulo} />
            </div>
            <div className='form-group'>
              <label>Número de Páginas</label>
              <input type="text" id='num_paginas' required onChange={(event) => { setLivro({ ...livro, num_paginas: event.target.value }) }} value={livro.num_paginas} />
            </div>
            <div className='form-group'>
              <label>ISBN</label>
              <input type="text" id='isbn' required onChange={(event) => { setLivro({ ...livro, isbn: event.target.value }) }} value={livro.isbn} />
            </div>
            <div className='form-group'>
              <label>Editora</label>
              <input type="text" id='editora' required onChange={(event) => { setLivro({ ...livro, editora: event.target.value }) }} value={livro.editora} />
            </div>
            <div className='form-group'>
              <button type='button' onClick={createLivro}>Cadastrar Livro</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LivrosCadastro;
