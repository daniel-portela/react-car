import React from 'react'
import styles from './Driver.module.css';
import Drive from '../../images/drive.png'

const Driver = () => {
  return (
    <div className={styles.driver}>
      <div className={styles.left}>
        <img src={Drive} alt="/" />
      </div>
      <div>
        <h2>Encontre o carro perfeito <span>para experimentar antes de comprar</span></h2>
        <p>Certifique-se de que suas futuras rodas combinem bem com seu estilo de vida, ocupando o assento do motorista com calma.</p>
        <button>Navegar por carros</button>
      </div>
    </div>
  )
}

export default Driver