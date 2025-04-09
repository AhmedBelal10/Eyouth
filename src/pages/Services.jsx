import { useState, useEffect } from 'react'
import Counter from '../components/Counter'
import axios from 'axios'
import { toast } from 'react-toastify'

const Services = () => {
  const [isCounter, setIsCounter] = useState(true)
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchPosts = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        headers: {
          "Content-Type": 'application/json'
        }
      })
      console.log(response.data)
      setPosts(response.data)
      toast.success('task added success')
    } catch (e) {
      toast.error(e.message)
      
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])



  return (
    <>
      <button onClick={() => setIsCounter(!isCounter)}>show/hide</button>
      {isCounter && <Counter />}
      {
        isLoading ?
          <p>loading.....</p>
          :
          posts.map(post => (
            <div>
              {post.title}
            </div>
          ))}

    </>
  )
}

export default Services