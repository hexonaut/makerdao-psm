import React, { useState, useEffect } from 'react';
import { usePsmService } from './services/psm/PsmProvider';

function App() {
  const psmService = usePsmService();
  const [stats, setStats] = useState(undefined);
  const [fees, setFees] = useState(undefined);
  // const [ilk, setIlk] = useState();
  useEffect(async () => {
    setStats(await psmService.getStats('USDC'));
    setFees(await psmService.getFees());
  }, []);
  return (
    <div>
      <h3>Stats</h3>
      <ul>
        {stats && Object.entries(stats).map(([key, value]) => (
          <li>
            { key }
            :
            { value }
          </li>
        ))}
      </ul>
      <h3>Fees</h3>
      {fees && (
      <ul>
        <li>
          TIN:
          {fees.tin}
        </li>
        <li>
          TOUT:
          {fees.tout}
        </li>
      </ul>
      )}
    </div>
  );
}

export default App;
