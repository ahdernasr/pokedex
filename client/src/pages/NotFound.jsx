import { useNavigate } from 'react-router-dom';
import { Button } from "primereact/button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="viewSectionContainer arcade">
    <div className="viewSection">
    <p>404 - Page not found</p>
    <Button
      className="viewButton"
      onClick={() => {
        navigate(`/`);
      }}
    >
      Go home
    </Button>
    </div>
  </div>
  )
}

export default NotFound