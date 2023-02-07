import { useEffect, useRef, useState } from "react"

export default function useAxios(configRequest) { 
    const {axiosInstance, method, url, othersConfig = {} } = configRequest

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const effectRun = useRef(false)

    useEffect(() => { 
    const controller = new AbortController() //clinap limpeza 

        const fetchData = async () => { 
            try { 
                const res = await axiosInstance[method.toLowerCase()](url, {
                    ...othersConfig,
                    signal: controller.signal
                })
                setData(res.data)
            } catch (err) { 
                setError(err.message)
            }  finally { 
                setLoading(false)
            }
        }

        if (effectRun.current) 
        fetchData()

        // limpar dados 
        return () => {
        controller.abort()
        effectRun.current = true
    }
    }, [])


    return [data, loading, error]
}