import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container arcade">
      <div className="not-found-section">
        <p>404 - Page not found</p>
        <Button
          className="not-found-button"
          onClick={() => {
            navigate(`/`); // Go home
          }}
        >
          Go home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
