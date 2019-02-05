import React from 'react'

const Ninjas = ({ninjas, deleteNinja}) => {
    const ninjaList = ninjas.map(ninja => {
      return (
        <div className="ninja" key={ninja.id}>
          <p>Id { ninja.id }</p>
          <p>Name { ninja.name }</p>
          <p>Age { ninja.age }</p>
          <button onClick={() => { deleteNinja(ninja.id) }}>Delete</button>
        </div>
      )
    })
    return (
      <div className="ninja-list">
      {ninjaList}
      </div>
    )
}

export default Ninjas