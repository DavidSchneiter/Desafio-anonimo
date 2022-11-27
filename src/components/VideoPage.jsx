import React from 'react'

const VideoPage = ({ db }) => {
  const string = db.transcripcion.split("<br>")
  return (
    <div className='main__container'>
      <div className='video-page__container'>

          <div className='video-text__container'>
              <h1>{db.cliente}</h1>
              <h2>Test: Test de usabilidad en el sitio web</h2>
              <h3>Testeador 1</h3>
          </div>

          <div className='video__container'>
            <iframe className='video__a' src={`${db.linkVideo}`} frameBorder="0" allowFullScreen={true}></iframe>
          </div>
          
          <div className='text__container'>
            <h1>Transcripción</h1>
            <div className='transcripcion__container' >
            {string.map((a) => {
              return(
              <p key={a}>
                  {a}
                  <br />
              </p>)
            } ) }
          </div>
          <div className='tareas__container'>
            <h1>Tareas</h1>
            <p>Escenario: {db.escenario}</p>
            {db.preguntas.map((tarea,i) => {
              return (
                <div className='tarea__container'>
                  <p>
                    <strong>
                      Tarea: {i + 1}
                      <br />
                      {tarea.texto}
                    </strong>
                  </p>
                </div>
              )
            })}
          </div>
          </div>
      </div>

    </div>
  )
}

export default VideoPage
