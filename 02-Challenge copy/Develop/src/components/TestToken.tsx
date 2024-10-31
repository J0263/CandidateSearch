// src/components/TestToken.tsx

const TestToken = () => {
    return (
      <div>
        <h2>GitHub Token: {import.meta.env.VITE_GITHUB_TOKEN}</h2>
      </div>
    );
  };
  
  export default TestToken;