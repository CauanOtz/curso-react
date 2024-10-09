import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'

function Title({ name, paragrafo }) {

  const cargo = 'dev'
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{`${name}`}</h1>
      {paragrafo ?
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non voluptatum dignissimos soluta facere, quas molestiae? 
          Eligendi ipsam modi voluptatum. Deleniti, fugiat illo maiores nemo earum id. Odio unde perspiciatis facere!</p> 
        : <p>não tem paragrafo</p>
    }

    </>
  )
}

export default Title;
