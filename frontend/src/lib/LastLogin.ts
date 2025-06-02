const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const LastLogin = async (): Promise<void> => {
  try {
    const res = await fetch(`${apiUrl}/api/last-login`, {
      method: 'GET',
      credentials: 'include',
    });

    if (!res.ok) {
      console.error('API error:', res.status);
    }
  } catch (error) {
    console.error('Fetch failed:', error);
  }

  console.log('test');
};

export default LastLogin;
