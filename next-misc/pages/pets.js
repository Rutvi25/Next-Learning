import Image from 'next/image'
import img from '../public/1.jpeg'

function Pets() {
  return (
    <div>
      <Image src={img} alt='pet' placeholder='blur' height='250' width='400'/>
      {['1','2','3'].map((path) => {
        return (
          <div key={path}>
            <Image src={`/${path}.jpeg`} alt='pet' height='250' width='400'/>
          </div>
        )  
      }
    )}
    </div>
  )
}

export default Pets