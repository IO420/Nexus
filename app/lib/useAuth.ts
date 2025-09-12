import { useEffect, useState } from 'react';
import axios from 'axios';
import { envConfig } from "./config";

export const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(`${envConfig.apiUrl}/user/validate-token`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const isValid = res.data.valid;

        if (isValid) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
          localStorage.removeItem('token');
          localStorage.removeItem('session');
        }
      } catch (err) {
        setAuthenticated(false);
        localStorage.removeItem('token');
        localStorage.removeItem('session');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return { loading, authenticated };
};
//IO
