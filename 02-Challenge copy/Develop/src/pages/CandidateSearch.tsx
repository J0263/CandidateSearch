import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0); 

  useEffect(() => {
    const fetchCandidates = async () => {
      const data = await searchGithub();
      setCandidates(data);
    };
    fetchCandidates();
  }, []);

  const saveCandidate = () => {
    const candidate = candidates[currentIndex];
    const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    localStorage.setItem('savedCandidates', JSON.stringify([...savedCandidates, candidate]));
    nextCandidate();
  };

  const nextCandidate = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % candidates.length);
  };

  if (candidates.length === 0) {
    return <p>Loading candidates...</p>;
  }

  const candidate = candidates[currentIndex];

  return (
    <section>
      <img src={candidate.avatar_url} alt={candidate.name || candidate.username} />
      <h2>{candidate.name || candidate.username}</h2>
      <p>Location: {candidate.location || 'Not available'}</p>
      <p>Email: {candidate.email || 'Not available'}</p>
      <p>Company: {candidate.company || 'Not available'}</p>
      <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
        GitHub Profile
      </a>
      <div>
        <button onClick={saveCandidate}>+</button>
        <button onClick={nextCandidate}>-</button>
      </div>
    </section>
  );
};

export default CandidateSearch;
