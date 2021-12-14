import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'

const Printable = () => {
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <div>
      <button onClick={handlePrint}>Print</button>

      <div ref={componentRef}>
        <h3>Information</h3>

        <hr />

        <ul>
          <li>
            Name : <span> Dr Andrew C S Koh </span>
          </li>
          <li>
            Email : <span> Andrew@gmail.com </span>
          </li>
          <li>
            Gender : <span> Male </span>
          </li>
          <li>
            Date of Birth : <span> 07-24-1982</span>
          </li>
          <li>
            Phone No: <span> </span> 9856231456
          </li>
          <li>
            Address :{' '}
            <span> 26 Wyle Cop, Shrewsbury, Shropshire, SY1 1XD </span>
          </li>
          <li>
            Website : <span> www.Andrew.com </span>
          </li>
          <li>
            Country : <span> United states </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Printable
