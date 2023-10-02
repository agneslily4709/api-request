import axios from "axios"
import {useState} from "react"
function App() {
        let [data_Axios, setDataAxios] = useState(null)
        let [data_Fetch, setDataFetch] = useState(null)
        let [data_HTTPReq, setDataHTTPReq] = useState(null)

        const makeApiRequestUsingAxios = async() =>{
                const response =await axios.get(`https://64f1d2580e1e60602d24529b.mockapi.io/api/employees/3`)
                setDataAxios(response.data)
        }
        const makeApiRequestUsingFetch = async ()=>{
                const response = await fetch(`https://64f1d2580e1e60602d24529b.mockapi.io/api/employees/3`)
                const data = await response.json()
                setDataFetch(data)
        }
        const makeApiRequestUsingXMLHTTPrequest = async()=>{

                const request = new XMLHttpRequest()
                request.onreadystatechange = function(){
                        if(this.readyState === 4 && request.status == 200){
                            const response = JSON.parse(this.responseText)
                            setDataHTTPReq(response)
                        }
                    }
                    request.open("GET",`https://64f1d2580e1e60602d24529b.mockapi.io/api/employees/3`)
                    request.send()
        }

        useState(()=>{
                makeApiRequestUsingAxios()
                makeApiRequestUsingFetch()
                makeApiRequestUsingXMLHTTPrequest()
        },[])
  return (
    <div className="App">
        <h1>API Request</h1>
    </div>
  );
}

export default App;
