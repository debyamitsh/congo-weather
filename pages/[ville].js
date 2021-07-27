import axios from "axios";
import Link from 'next/link'

export default function ville() {

    const getLocationKey = async () => {
        await axios.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/?apiKey=z9USGLa97qISbyghGyMZYw8OefotzvsU&locationkey=113486")
        .then((res) => setProvince(res.data));
    }
    
    return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <form>
            <input type="text" placeholder="entrer le nom de la ville" />
            <button>
                valider
            </button>
        </form>
      <div className="border-b-2 m-0">
        <div className="mr-8 ml-4">
          <div className="relative">
              <div className="rounded shadow-md my-2 relative pin-t pin-l">
                <ul className="list-reset flex-col justify-center">
                    <p className='p-4'>Ville de: Lubumbashi</p>
                    <li>
                        <p className='pl-6'>Date : <span>12 aout 2021</span></p>
                        <p className='pl-6'>Temperature Min : <span>20 f</span></p>
                        <p className='pl-6'>Temperature Max : <span>22 f</span></p>
                        <p className='pl-6'>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                    </li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
    )

}
