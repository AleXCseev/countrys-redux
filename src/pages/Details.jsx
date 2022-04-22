import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { Button } from '../components/Button';
import { CounrtyDetails } from '../features/details/CountryDetails';


export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      <CounrtyDetails name={name} navigate={navigate} />
    </div>
  );
};
