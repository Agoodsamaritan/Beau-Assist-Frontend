import './App.css';

export default function App() {
  
  const [products, setProducts] = useState()

  const getProducts = async () => {
    const response = await api.get("/api/v1/products") 
  }
  
  return (
    <div>
      <Navbar /> 
      <Products />
      
      <h1 className="text-md font-bold ">landing page</h1>
     
    </div>
    
    
  )
}