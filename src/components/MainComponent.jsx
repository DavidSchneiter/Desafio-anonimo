import React from 'react'

const MainComponent = ({db}) => {
  return (
    <div className='clients__container'>      
        <h1 className='text__container'>Clientes</h1>
      
      <div className='buttons__container'>
        {
          db.map((data) => {
            return <a key={data.idVideo} href={`client/${data.cliente}`}>
              <button key={data.idVideo} className='button-36' >
                {data.cliente}
              </button>
              </a>
          })
        }
        </div>
    </div>
    
  )
}

export default MainComponent
