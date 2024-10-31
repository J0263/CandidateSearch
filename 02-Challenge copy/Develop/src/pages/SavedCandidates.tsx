import { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates: React.FC = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const candidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(candidates);
  }, []);

  if (savedCandidates.length === 0) {
    return <p>No candidates have been saved.</p>;
  }

  return (
    <section>
      <h1>Saved Candidates</h1>
      <ul>
        {savedCandidates.map((candidate, index) => (
          <li key={index}>
            <img src={candidate.avatar_url} alt={candidate.name || candidate.username} />
            <h2>{candidate.name || candidate.username}</h2>
            <p>Location: {candidate.location || 'Not available'}</p>
            <p>Email: {candidate.email || 'Not available'}</p>
            <p>Company: {candidate.company || 'Not available'}</p>
            <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
              GitHub Profile
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SavedCandidates;