import '../App.css';
import NavBar from '../Components/NavBar';
import segmentsData from "../Components/segmentsData.json";
import SegmentCard from '../Components/SegmentCards';
const Home = () => {
  return (
    <div >
    <NavBar/>
    <div className="segment-section">
      <h2 className="segment-heading">Segments</h2>
      <div className="segment-container">
        {segmentsData.map((segment, index) => (
          <SegmentCard key={index} segment={segment} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Home;
